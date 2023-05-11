import { Component } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { OrganisationService } from '@placeos/organisation';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { first } from 'rxjs/operators';

@Component({
    selector: 'room-manager-topbar',
    template: ` <div
        class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 border-b border-gray-300 dark:border-neutral-500 space-x-2"
    >
        <mat-form-field appearance="outline">
            <mat-select
                [ngModel]="(this.filters | async)?.zone"
                (ngModelChange)="updateZones($event)"
                placeholder="All Levels"
            >
                <mat-option [value]="building.id">All Levels</mat-option>
                <mat-option
                    *ngFor="let level of levels | async"
                    [value]="level.id"
                >
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <div class="flex-1 w-2"></div>
        <searchbar class="mr-2" (modelChange)="setSearch($event)"></searchbar>
    </div>`,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
})
export class RoomManagerTopbarComponent extends AsyncHandler {
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    public readonly filters = this._manager.options;
    /** Set filtered date */
    public readonly setFilters = (filters) => this._manager.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._manager.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zone) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_id: zone },
        });
        this._manager.setFilters({ zone });
    };

    public get building() {
        return this._org.building;
    }

    constructor(
        private _manager: RoomManagementService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_id')) {
                    const zone = params.get('zone_id');
                    if (zone.length) {
                        const level = this._org.levelWithID([zone]);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id
                        );
                        this.setFilters({ zone });
                    }
                }
            })
        );
        this.subscription(
            'levels',
            this._org.active_levels.subscribe((levels) => {
                var zone = levels.find((lvl) => lvl.id === zone);
                if (!zone && levels.length) zone = levels[0].id;
                this.updateZones(zone);
            })
        );
        this.setSearch('');
    }
}
