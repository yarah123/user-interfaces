import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { Space, SpacesService } from '@placeos/spaces';
import { OrganisationService } from '@placeos/organisation';
import { HashMap } from '@placeos/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, combineLatest, of, BehaviorSubject } from 'rxjs';
import { first, take, filter, map, tap } from 'rxjs/operators';
import { FilterSpaceComponent } from '../filter-space/filter-space.component';
import { Location } from '@angular/common';
import { FeaturesFilterService } from '../features-filter.service';
import { MapService, Locatable } from '../map.service';
import { ViewerFeature, ViewAction, ViewerStyles } from '@placeos/svg-viewer';
import { RoomConfirmService } from '../room-confirm.service';
import { MapPinComponent } from '@placeos/components';
import { BaseClass } from '@placeos/common';
import { MapsList } from '../map.service';
import { Router } from '@angular/router';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
    styles: [
        `
            .mat-button-toggle-appearance-standard {
                height: 2.25rem;
            }
            .mat-button-toggle-appearance-standard
                .mat-button-toggle-label-content {
                line-height: 2.25rem;
                font-size: 0.875rem;
            }
            .mat-button-toggle-label-content {
                font-size: 0.875rem;
            }
            .mat-button-toggle-checked {
                border: 1px solid var(--primary);
                border-radius: 5px;
                box-shadow: none;
            }
            .mat-focus-indicator {
                border: none;
            }
        `,
    ],
})
export class FindSpaceComponent extends BaseClass implements OnInit {
    start_time$: Observable<any>;
    duration_minutes: number;
    end_time$: Observable<any>;
    selected_features$: Observable<any>;
    filtered_spaces: Space[] = [];
    show_room_details$: Observable<boolean> = of(false);
    selected_space: Space;
    space_view_control = new FormControl();
    space_view?: string;
    locatable_spaces$: Observable<Locatable[]>;
    maps_list$: Observable<MapsList[]>;
    map_features$: Observable<ViewerFeature[]>;
    _map_features: BehaviorSubject<ViewerFeature[]> = new BehaviorSubject<
        ViewerFeature[]
    >(null);
    map_actions$: Observable<ViewAction[]> = null;
    map_styles$: Observable<ViewerStyles[]> = null;
    bottomSheetRef: any;

    public selected_level: any;

    public get form(): FormGroup {
        return this._state.form;
    }

    public book_space: HashMap<boolean> = {};
    public space_list: Space[] = [];
    public quick_capacities = [
        { name: 'Any Capacity', value: 0 },
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly levels = combineLatest([
        this.building,
        this._state.options,
    ])?.pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: 'All Levels',
            },
            ...this._org.levelsForBuilding(bld),
        ])
    );

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;

    public spaces$: Observable<Space[]>;
    public readonly features = this._spaces.features;

    public async setBuilding(bld) {
        const opts = await this.options?.pipe(take(1)).toPromise();
        if (bld) this._org.building = bld;
        const levels = this._org.levelsForBuilding(this._org.building);
        const lvl = levels.find((_) => opts.zone_ids?.includes(_.id));
        if (!lvl && levels.length) {
            this.setOptions({ zone_ids: [levels[0].id] });
        }
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor(
        public bottomSheet: MatBottomSheet,
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _state: EventFormService,
        private location: Location,
        private _featuresFilterService: FeaturesFilterService,
        private _mapService: MapService,
        private _roomConfirmService: RoomConfirmService,
        private router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        this.space_view = 'listView';

        this.selected_features$ =
            this._featuresFilterService.selected_features$;
        this._state.setView('find');
        this.setTimeChips();

        await this._org.initialised?.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised?.pipe(first((_) => !!_)).toPromise();
        await this._state.available_spaces?.pipe(take(1)).toPromise();

        this.spaces$ = this._state.available_spaces;
        this._featuresFilterService.updated_spaces_emitter.subscribe(
            (result) => {
                result
                    ? (this.spaces$ =
                          this._featuresFilterService.updated_spaces$)
                    : this._state.available_spaces;
            }
        );

        this.setBuilding(this._org.building);
        this.book_space = {};

        await this._mapService.locateSpaces(this.spaces$);

        this.locatable_spaces$ = this._mapService.locatable_spaces$;

        this.maps_list$ = this._mapService.maps_list$?.pipe(
            tap((maps) => (this.selected_level = maps))
        );

        //testing multiple levels//
        // this.maps_list$ = of([
        //     {
        //         map_id: 'assets/maps/level_1.svg',
        //         level: 'Level 1',
        //     },
        //     {
        //         map_id: 'assets/maps/level_2.svg',
        //         level: 'Level 2',
        //     },
        // ]);
        //end of testing multiple levels//

        await this._mapService.features_loaded$
            .pipe(first((_) => !!_))
            .toPromise();

        this.applyMapDecorations();

        this._map_features.next(this._mapService.map_features);
        this.map_features$ = this._map_features.asObservable();
        this.map_actions$ = this._mapService.map_actions$;
    }

    public handleBookEvent(space: Space, book: boolean = true) {
        this._roomConfirmService.book_space = this.book_space;
        this._roomConfirmService.handleBookEvent(space, book);
        this.show_room_details$ = of(true);
        this._roomConfirmService.updateSelectedSpace(space);
    }

    openFilter() {
        this.bottomSheetRef = this.bottomSheet.open(FilterSpaceComponent, {
            data: this.buildings as OrganisationService['building_list'],
        });
    }

    openRoomDetails() {
        this._roomConfirmService.openRoomDetail(this.selected_space);
    }

    resetSpace() {
        this.show_room_details$ = of(false);
    }

    setTimeChips() {
        this.start_time$ = of(
            new Date(this.form?.controls?.date?.value).toLocaleTimeString(
                'en-US',
                { hour: 'numeric', minute: 'numeric', hour12: true }
            )
        );
        this.duration_minutes = this.form?.controls?.duration?.value;
        const end =
            this.form?.controls?.date?.value +
            this.duration_minutes * 60 * 1000;
        this.end_time$ = of(
            new Date(end).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })
        );
    }

    async updateSpaces() {
        this.spaces$ = this._featuresFilterService.updated_spaces$;
    }

    updateSelectedLevel(e) {
        this.selected_level = e;
        if (!this.selected_level?.length) {
            this.applyMapDecorations();
        }
    }

    applyMapDecorations() {
        this.timeout(
            'init',
            () => {
                this.processFeature();
                this.processStyles();
            },
            1500
        );
    }

    processFeature() {
        this.map_features$ = this._mapService.map_features$;
    }

    processStyles() {
        this.map_styles$ = of([this._mapService.style_map]);
    }

    closeModal() {
        this.router.navigate(['/book/spaces']);
        this._featuresFilterService.clearFilter();
    }
}
