import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { ParkingStateService } from './parking-state.service';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'parking-map',
    template: `
        <div
            class="relative w-full h-[calc(100%-1.5rem)] my-2 bg-base-200 rounded-xl shadow"
        >
            <interactive-map
                [src]="url | async"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [labels]="labels | async"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `,
    styles: [``],
    providers: [ExploreParkingService],
})
export class ParkingMapComponent extends AsyncHandler {
    public url = this._explore.map_url;
    public styles = this._explore.map_styles;
    public features = this._explore.map_features;
    public actions = this._explore.map_actions;
    public labels = this._explore.map_labels;

    public locate = '';

    constructor(
        private _explore: ExploreStateService,
        private _ex_parking: ExploreParkingService,
        private _parking: ParkingStateService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'parking_level',
            this._parking.options.subscribe((_) => {
                const zone = _.zones[0] || this._org.levelsForBuilding()[0].id;
                this._explore.setLevel(_.zones[0]);
            })
        );
        this.subscription('parking_poll', this._ex_parking.startPolling());
        this._ex_parking.on_book = (space) =>
            this._parking.editReservation(undefined, { space });
    }
}
