import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import {
    BookingAsset,
    BookingFormService,
} from 'libs/bookings/src/lib/booking-form.service';
import { AsyncHandler } from '@placeos/common';
import { ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { Observable, combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';
import { Space } from 'libs/spaces/src/lib/space.class';

declare let mapsindoors: any;

@Component({
    selector: 'indoor-maps',
    template: `
        <div id="map" class="absolute inset-0 flex items-center justify-center">
            <mat-spinner
                *ngIf="loading"
                class="absolute"
                [diameter]="48"
            ></mat-spinner>
        </div>

        <div
            class="absolute flex flex-col mt-10 ml-10 h-min w-min  inset-0 flex bg-white bg-opacity-50 backdrop-blur-sm rounded-lg"
        >
            <div class="flex-auto basis-1/2 p-4 ">
                <div id="search" class="flex flex-row items-baseline">
                    <mat-form-field class="custom-form-field ml-4">
                        <input
                            matInput
                            #searchInput
                            type="text"
                            placeholder="Search"
                        />
                    </mat-form-field>

                    <!-- <mat-form-field class="flex custom-form-field ml-8">
                        <mat-select [(ngModel)]="selected_transport_mode">
                            <mat-option
                                *ngFor="let transportMode of transport_modes"
                                [value]="transportMode.value"
                                >{{ transportMode.label }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field> -->

                    <button
                        icon
                        name="indoor-map-search"
                        matRipple
                        class="flex text-black h-10 w-10 rounded-full bg-gray-200 ml-5 mt-6  dark:bg-neutral-800 dark:text-white"
                        aria-label="search button"
                        (click)="onSearch()"
                    >
                        <app-icon class="text-xl">search</app-icon>
                    </button>
                </div>

                <!-- <div class="flex flex-row ml-4 mb-6 items-center">
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
                </div> -->
            </div>

            <div class="flex-auto basis-1/2 overflow-y-auto ">
                <div class="ml-10">
                    <ul>
                        <div *ngIf="search_result_items">
                            <span class="font-medium text-xl">Results</span>
                            <li *ngFor="let item of search_result_items">
                                <div class="flex items-center mt-3 mb-3 h-10">
                                    <span class="flex mr-3 text-lg">
                                        {{ item.properties.name }}</span
                                    >

                                    <button
                                        icon
                                        name="get-directions"
                                        matRipple
                                        aria-label="get directions button"
                                        (click)="getRoute(item)"
                                        class="flex  text-white h-7 w-7 rounded-md bg-secondary dark:bg-neutral-800 dark:text-white"
                                    >
                                        <app-icon class="text-sm"
                                            >near_me</app-icon
                                        >
                                    </button>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            mat-spinner {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
})
export class IndoorMapsComponent extends AsyncHandler implements OnInit {
    map_view_options: any;
    map_view_instance: any;
    mapsIndoors_instance: any;
    googleMaps_instance: any;
    mapsIndoors_directions_service_instance: any;
    mapsIndoors_directions_renderer_instance: any;
    available_external_IDs: string[] = [];

    // public readonly available_spaces: Observable<Space[]> =
    //     this._explore.spaces;

    // public readonly available_assets: Observable<BookingAsset[]> =
    //     this._booking.available_resources;

    public available_resourceIDs: string[] = [];

    live_data_status: string | boolean = 'enabled';
    search_result_items: any[];

    selected_transport_mode: string = 'walking';
    transport_modes = [
        { label: 'Walking', value: 'walking' },
        { label: 'Bicycling', value: 'bicycling' },
        { label: 'Driving', value: 'driving' },
        { label: 'Transit', value: 'transit' },
    ];

    /** Custom CSS styles to apply to the map */
    @Input() public styles: ViewerStyles;
    /** List of available user actions for the map */
    @Input() public actions: ViewAction[];

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    public loading: boolean;

    constructor() {
        // private _booking: BookingFormService // private _explore: ExploreStateService,
        super();
    }

    async ngOnInit() {
        await this.initMapView();
        this.initDirections();
        this.selectFloors();
        // await this.enableLiveData();
        // await this.getResourceIDs();
        // this.available_external_IDs = await this.getLocationIDs();
    }

    async ngOnChanges() {
        while (this.styles === null) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await this.renderSpaceStatus();
    }

    initMapView(): Promise<void> {
        this.loading = true;
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
        this.loading = false;
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
            console.log(this.search_result_items, 'search result items');
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

    // changeLiveDataStatus(value: any) {
    //     (this.live_data_status = 'enabled')
    //         ? (this.live_data_status = 'disabled')
    //         : (this.live_data_status = 'enabled');
    // }

    // async enableLiveData() {
    //     if (this.live_data_status !== 'enabled') return;

    //     const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
    //         this.mapsIndoors_instance
    //     );

    //     try {
    //         await liveDataManagerInstance.enableLiveData(
    //             mapsindoors.LiveDataManager.LiveDataDomainTypes
    //                 .POSITION as string
    //         );
    //         // liveDataManagerInstance.enableLiveData(
    //         //   mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY
    //         // );
    //         // liveDataManagerInstance.enableLiveData(
    //         //   mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY
    //         // );
    //     } catch (err) {
    //         console.log(err, 'error');
    //     }
    // }

    // async disableLiveData() {
    //     if (this.live_data_status) return;

    //     const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
    //         this.mapsIndoors_instance
    //     );

    //     try {
    //         await liveDataManagerInstance.disableLiveData(
    //             mapsindoors.LiveDataManager.LiveDataDomainTypes
    //                 .POSITION as string
    //         );
    //     } catch (err) {
    //         console.log(err, 'error');
    //     }
    // }

    // getResourceIDs(): Promise<any> {
    //     return new Promise<any>((resolve, reject) => {
    //         const allResources: Observable<any[]> = combineLatest([
    //             this.available_spaces,
    //             this.available_assets,
    //         ]);

    //         this.subscription(
    //             'available_resources',
    //             allResources.subscribe(([spaces, assets]) => {
    //                 this.available_resourceIDs = [...spaces, ...assets].map(
    //                     (resource) => resource.id
    //                 );
    //                 resolve(this.available_resourceIDs);
    //             }, reject)
    //         );
    //     });
    // }

    // async getLocationIDs(): Promise<string[]> {
    //     console.log('get location IDs triggered');
    //     const promises = this.available_resourceIDs.map(
    //         async (spaceID: string) => {
    //             const locations =
    //                 await mapsindoors.services.LocationsService.getLocationsByExternalId(
    //                     spaceID
    //                 );
    //             locations.map((location) =>
    //                 this.available_external_IDs.push(location.id || '')
    //             );
    //         }
    //     );
    //     await Promise.all(promises);
    //     return this.available_external_IDs;
    // }

    async renderSpaceStatus(): Promise<void> {
        console.log(this.styles, 'styles');
        if (this.styles) {
            const promises: Promise<void>[] = [];
            for (const key in this.styles) {
                const colour = this.styles[key]['fill'] as string;
                if (key) {
                    const updated_key = key.substring(1);
                    promises.push(this._setPolygonFill(updated_key, colour));
                }
            }
            await Promise.all(promises);
        }
    }

    private async _setPolygonFill(location_id: string, colour: string) {
        await this.mapsIndoors_instance.setDisplayRule(location_id, {
            polygonVisible: true,
            polygonFillOpacity: 0.6,
            polygonZoomFrom: 16,
            polygonZoomTo: 22,
            visible: true,
            polygonFillColor: colour,
        });
    }
}
