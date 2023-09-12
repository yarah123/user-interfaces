import { Component, ViewChild, ElementRef } from '@angular/core';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { first } from 'rxjs/operators';
import { Space } from 'libs/spaces/src/lib/space.class';

declare let mapsindoors: any;

@Component({
    selector: 'indoor-maps',
    template: `
        <div class="overflow-y-auto h-screen">
            <div id="map" class="w-full h-4/5"></div>

            <div style="display: flex">
                <div class="flex-auto basis-1/2 p-4">
                    <div id="search" class="flex flex-row">
                        <mat-form-field class="custom-form-field ml-4">
                            <input
                                matInput
                                #searchInput
                                type="text"
                                placeholder="Search"
                            />
                        </mat-form-field>

                        <mat-form-field class="custom-form-field ml-8">
                            <mat-select [(ngModel)]="selected_transport_mode">
                                <mat-option
                                    *ngFor="
                                        let transportMode of transport_modes
                                    "
                                    [value]="transportMode.value"
                                    >{{ transportMode.label }}</mat-option
                                >
                            </mat-select>
                        </mat-form-field>

                        <button
                            mat-mini-fab
                            color="primary"
                            aria-label="search button"
                            (click)="onSearch()"
                            class="flex ml-8 mt-2 justify-center items-center"
                        >
                            <mat-icon style="font-size: 24px">search</mat-icon>
                        </button>
                    </div>

                    <div class="flex flex-row ml-4 mb-12 items-center">
                        <div class="text-gray-700">Live Data:</div>

                        <mat-button-toggle-group
                            [(ngModel)]="live_data_status"
                            (ngModelChange)="changeLiveDataStatus($event)"
                            aria-label="Enable or disable live data"
                            class="text-gray-700 ml-4"
                        >
                            <mat-button-toggle value="enabled"
                                >Enabled</mat-button-toggle
                            >
                            <mat-button-toggle value="disabled"
                                >Disabled</mat-button-toggle
                            >
                        </mat-button-toggle-group>
                    </div>
                </div>

                <div class="flex-auto basis-1/2 overflow-y-auto">
                    <div class="ml-10 max-h-300">
                        <ul>
                            <div *ngIf="search_result_items">
                                <li
                                    *ngFor="let item of searchResultItems"
                                    class="flex items-center"
                                >
                                    {{ item.properties.name }}

                                    <button
                                        mat-icon-button
                                        color="primary"
                                        aria-label="get directions button"
                                        (click)="getRoute(item)"
                                        class="ml-2 mt-2"
                                    >
                                        <mat-icon>directions_alt</mat-icon>
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class IndoorMapsComponent {
    map_view_options: any;
    map_view_instance: any;
    mapsIndoors_instance: any;
    googleMaps_instance: any;
    mapsIndoors_directions_service_instance: any;
    mapsIndoors_directions_renderer_instance: any;
    available_external_IDs: string[] = [];
    public readonly available_spaces = this._event_form.available_spaces;
    public readonly available_spaceIDs: string[] = [];

    live_data_status: string | boolean = 'enabled';
    search_result_items: any[];

    selected_transport_mode: string = 'walking';
    transport_modes = [
        { label: 'Walking', value: 'walking' },
        { label: 'Bicycling', value: 'bicycling' },
        { label: 'Driving', value: 'driving' },
        { label: 'Transit', value: 'transit' },
    ];

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    constructor(private _event_form: EventFormService) {}

    async ngOnInit() {
        await this.initMapView();
        this.initDirections();
        this.selectFloors();
        await this.enableLiveData();
        await this.getAvailableSpaceIDs();
        this.available_external_IDs = await this.getLocationIDs();
        this.renderRoomStatus();
    }

    initMapView(): Promise<void> {
        this.map_view_options = {
            element: document.getElementById('map'),
            center: { lat: 30.3603774, lng: -97.7426772 },
            zoom: 21,
            maxZoom: 26,
        };
        this.map_view_instance = new mapsindoors.mapView.GoogleMapsView(
            this.map_view_options
        );

        this.mapsIndoors_instance = new mapsindoors.MapsIndoors({
            mapView: this.map_view_instance,
        });

        return (this.googleMaps_instance = this.map_view_instance.getMap());
    }

    initDirections() {
        const externalDirectionsProvider =
            new mapsindoors.directions.GoogleMapsProvider();
        this.mapsIndoors_directions_service_instance =
            new mapsindoors.services.DirectionsService(
                externalDirectionsProvider
            );
        const directionsRendererOptions = {
            mapsIndoors: this.mapsIndoors_instance,
        };
        this.mapsIndoors_directions_renderer_instance =
            new mapsindoors.directions.DirectionsRenderer(
                directionsRendererOptions
            );
    }

    selectFloors() {
        const floorSelectorElement = document.createElement('div');
        new mapsindoors.FloorSelector(
            floorSelectorElement,
            this.mapsIndoors_instance
        );
        this.googleMaps_instance.controls[
            google.maps.ControlPosition.RIGHT_TOP
        ].push(floorSelectorElement);
    }

    async onSearch(): Promise<any> {
        const searchParams = { q: this.searchElement.nativeElement.value };
        await mapsindoors.services.LocationsService.getLocations(
            searchParams
        ).then((locations: any[]) => {
            this.search_result_items = locations;
        });
    }

    getRoute(location: any) {
        const originLocationCoordinate = {
            lat: 30.3606484,
            lng: -97.7419834,
        }; //Hardcoded coordinate and floor index. TODO: get user location

        const destinationCoordinate = {
            lat: location.properties.anchor.coordinates[1],
            lng: location.properties.anchor.coordinates[0],
            floor: location.properties.floor,
        };

        const routeParameters = {
            origin: originLocationCoordinate,
            destination: destinationCoordinate,
            travelMode: this.selected_transport_mode || 'walking',
        };

        this.mapsIndoors_directions_service_instance
            .getRoute(routeParameters)
            .then((directionsResult: any) => {
                this.mapsIndoors_directions_renderer_instance.setRoute(
                    directionsResult
                );
            });
    }

    changeLiveDataStatus(value: any) {
        (this.live_data_status = 'enabled')
            ? (this.live_data_status = 'disabled')
            : (this.live_data_status = 'enabled');
    }

    async enableLiveData() {
        if (this.live_data_status !== 'enabled') return;

        const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
            this.mapsIndoors_instance
        );

        try {
            await liveDataManagerInstance.enableLiveData(
                mapsindoors.LiveDataManager.LiveDataDomainTypes
                    .POSITION as string
            );
            // liveDataManagerInstance.enableLiveData(
            //   mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY
            // );
            // liveDataManagerInstance.enableLiveData(
            //   mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY
            // );
        } catch (err) {
            console.log(err, 'error');
        }
    }

    async disableLiveData() {
        if (this.live_data_status) return;

        const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
            this.mapsIndoors_instance
        );

        try {
            await liveDataManagerInstance.disableLiveData(
                mapsindoors.LiveDataManager.LiveDataDomainTypes
                    .POSITION as string
            );
        } catch (err) {
            console.log(err, 'error');
        }
    }

    async getAvailableSpaceIDs(): Promise<string[]> {
        const spaces = await this.available_spaces
            .pipe(first((_: any) => _))
            .toPromise();
        spaces.forEach((space: Space) =>
            this.available_spaceIDs.push(space.id)
        );
        return this.available_spaceIDs;
    }

    async getLocationIDs(): Promise<string[]> {
        const promises = this.available_spaceIDs.map(
            async (spaceID: string) => {
                const locations =
                    await mapsindoors.services.LocationsService.getLocationsByExternalId(
                        spaceID
                    );
                locations.map((location) =>
                    this.available_external_IDs.push(location.id || '')
                );
            }
        );
        await Promise.all(promises);
        return this.available_external_IDs;
    }

    renderRoomStatus(): void {
        this.available_external_IDs.map((id: string) => {
            this._setPolygonFill(id, '#00C851');
        });
    }

    private async _setPolygonFill(location_id: string, color: string) {
        await this.mapsIndoors_instance.setDisplayRule(location_id, {
            polygonVisible: true,
            polygonFillOpacity: 0.6,
            polygonZoomFrom: 16,
            polygonZoomTo: 22,
            visible: true,
            polygonFillColor: color,
        });
    }
}
