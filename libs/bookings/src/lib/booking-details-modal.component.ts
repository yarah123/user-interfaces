import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { notifyError, notifySuccess, SettingsService } from '@placeos/common';
import { addMinutes, format, formatDuration } from 'date-fns';

import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Booking } from './booking.class';
import { checkinBooking } from './bookings.fn';

@Component({
    selector: 'booking-details-modal',
    template: `
        <div
            class="w-[100vw] h-[100vh] sm:relative sm:inset-auto sm:w-[51rem] sm:h-auto sm:max-h-[80vh] bg-base-100 sm:bg-base-200 sm:dark:bg-neutral-600 sm:rounded overflow-auto space-y-2 pb-2"
        >
            <div
                class="sm:flex flex-col items-center pb-4 max-h-screen sm:max-h-[80vh] sm:px-16 sm:border-b bg-base-100 border-base-200"
            >
                <div
                    class="h-8 w-full sm:hidden block"
                    *ngIf="!booking?.extension_data?.images?.length"
                ></div>
                <div
                    class="bg-neutral w-full h-64 sm:rounded-b overflow-hidden"
                    *ngIf="booking?.extension_data?.images?.length"
                >
                    <image-carousel
                        [images]="booking?.extension_data?.images"
                        class="w-full h-64"
                    ></image-carousel>
                </div>
                <h3
                    title
                    class="px-3 mt-2 text-xl font-medium w-full"
                    [class.pt-4]="!booking?.extension_data?.images"
                >
                    {{ booking.title }}
                </h3>
                <div class="sm:flex items-center justify-between w-full">
                    <div class="flex m-2">
                        <div
                            class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium text-black"
                            [class.bg-success-light]="
                                !booking.is_done &&
                                booking?.status === 'approved'
                            "
                            [class.bg-warning-light]="
                                !booking.is_done &&
                                booking?.status === 'tentative'
                            "
                            [class.bg-error-light]="
                                !booking.is_done &&
                                booking?.status === 'declined'
                            "
                            [class.bg-base-200]="booking.is_done"
                        >
                            <div
                                class="rounded-full h-5 w-5 flex items-center justify-center"
                            >
                                <app-icon>
                                    {{
                                        booking.is_done
                                            ? 'not_interested'
                                            : booking?.status === 'approved'
                                            ? 'done'
                                            : booking?.status === 'tentative'
                                            ? 'warning'
                                            : 'close'
                                    }}
                                </app-icon>
                            </div>
                            <div class="pr-1">{{ period }}</div>
                        </div>
                    </div>
                    <div
                        actions
                        class="flex items-center space-x-2 px-2"
                        *ngIf="!booking.is_done"
                    >
                        <button
                            btn
                            matRipple
                            class="flex-1 h-10 border-none"
                            [class.bg-success]="booking.checked_in"
                            [disabled]="checking_in"
                            *ngIf="
                                !auto_checkin &&
                                (booking.state === 'upcoming' ||
                                    booking.state === 'in_progress')
                            "
                            (click)="toggleCheckedIn()"
                        >
                            <div
                                class="flex items-center space-x-2 justify-center"
                                *ngIf="!checking_in; else loading_state"
                            >
                                <app-icon>{{
                                    booking.checked_in ? 'done' : 'arrow_back'
                                }}</app-icon>
                                <div class="mr-4">
                                    {{
                                        booking.checked_in
                                            ? 'Checked in'
                                            : 'Check in'
                                    }}
                                </div>
                            </div>
                            <ng-template #loading_state>
                                <mat-spinner
                                    class="mx-auto"
                                    [diameter]="32"
                                ></mat-spinner>
                            </ng-template>
                        </button>
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="bg-secondary rounded text-white h-10 w-10"
                        >
                            <app-icon>more_horiz</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:flex flex-wrap sm:px-12">
                <div
                    class="sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[4] min-w-1/3 sm:w-[16rem]"
                >
                    <h3 class="px-3 mt-2 text-lg font-medium mb-2" i18n>
                        Details
                    </h3>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>event</app-icon>
                        <div>{{ booking.date | date: 'EEEE, dd LLLL y' }}</div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>schedule</app-icon>
                        <div>{{ period }}</div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>map</app-icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{ booking.asset_name || booking.asset_id }}
                        </div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>place</app-icon>
                        <div>
                            {{ building?.display_name || building?.name }}
                            {{
                                building?.address ? ', ' + building.address : ''
                            }}
                        </div>
                    </div>
                </div>
                <ng-container *ngIf="has_assets">
                    <div
                        class="mt-4 sm:p-4 sm:bg-base-100 sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-base-200 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    >
                        <h3 class="mx-3 pt-2 text-lg font-medium" i18n>
                            Assets ({{
                                event.extension_data.assets?.length || 0
                            }})
                        </h3>
                        <div class="flex px-4 flex-wrap">
                            <div
                                asset
                                class="flex space-x-2 m-2 rounded-2xl text-white px-3 py-1"
                                [class.bg-success]="
                                    status(item.id) === 'approved'
                                "
                                [class.bg-error]="
                                    status(item.id) === 'rejected'
                                "
                                [class.bg-pending]="
                                    status(item.id) !== 'approved' &&
                                    status(item.id) !== 'rejected'
                                "
                                *ngFor="
                                    let item of event.extension_data.assets ||
                                        []
                                "
                            >
                                <app-icon>{{
                                    status(item.id) === 'approved'
                                        ? 'done'
                                        : status(item.id) === 'rejected'
                                        ? 'close'
                                        : 'pending'
                                }}</app-icon>
                                <div class="text-sm whitespace-nowrap pr-2">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-container>
                <button
                    map
                    class="mt-4 sm:my-2 h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded sm:bg-base-100 m-2 flex-grow-[3] min-w-1/3 w-[calc(100%-1rem)] p-2 sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    <interactive-map
                        *ngIf="!hide_map"
                        class="pointer-events-none"
                        [src]="level?.map_id"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </button>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-0 left-2 bg-neutral text-white"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            <button
                mat-menu-item
                mat-dialog-close
                class="flex items-center space-x-2 text-base"
                (click)="edit.emit()"
            >
                <app-icon>edit</app-icon>
                <div i18n>Edit booking</div>
            </button>
            <button
                mat-menu-item
                *ngIf="!is_in_progress"
                class="flex items-center space-x-2 text-base"
                (click)="remove.emit()"
            >
                <app-icon>delete</app-icon>
                <div i18n>Delete booking</div>
            </button>
            <button
                mat-menu-item
                *ngIf="is_in_progress"
                class="flex items-center space-x-2 text-base"
                (click)="end.emit()"
            >
                <app-icon>delete</app-icon>
                <div i18n>End booking</div>
            </button>
        </mat-menu>
    `,
    styles: [``],
})
export class BookingDetailsModalComponent {
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();
    @Output() public end = new EventEmitter();
    public readonly booking = this._booking;
    public hide_map = false;
    public checking_in = false;
    public readonly features = [
        {
            location: this.booking?.asset_id,
            content: MapPinComponent,
        },
    ];
    public readonly has_assets = !!this.booking?.linked_bookings?.find(
        (_) => _.booking_type === 'asset-request'
    );

    public get level() {
        return this._org.levelWithID(this.booking?.zones || []);
    }

    public get building() {
        return this._org.buildings.find((bld) =>
            (this.booking?.zones || []).includes(bld.id)
        );
    }

    public get auto_checkin() {
        return this._settings.get(
            `app.${this.booking?.type || 'bookings'}.auto_checkin`
        );
    }

    public get is_in_progress() {
        const ts = Date.now();
        const start = this.booking?.booking_start * 1000;
        const end = this.booking?.booking_end * 1000;
        if (this.booking?.all_day) return start <= ts;
        return start <= ts && ts <= end;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _booking: Booking,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public get period() {
        if (this.booking?.is_all_day) return 'All Day';
        const start = this.booking?.date || Date.now();
        const duration = this.booking?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, this.time_format)} - ${format(
            end,
            this.time_format
        )} (${dur})`;
    }

    public async toggleCheckedIn() {
        this.checking_in = true;
        await checkinBooking(this.booking.id, !this.booking.checked_in)
            .toPromise()
            .catch((_) => {
                notifyError('Error checking in booking');
                this.checking_in = false;
                throw _;
            });
        (this.booking as any).checked_in = !this.booking.checked_in;
        notifySuccess(
            `Successfully ${
                this.booking.checked_in ? 'checked in' : 'ended booking'
            }`
        );
        this.checking_in = false;
    }

    public status(id: string): string {
        const booking = this.booking.linked_bookings.find(
            (_) => _.asset_id === id
        );
        if (booking.status) return booking.status;
        return booking
            ? booking.approved
                ? 'approved'
                : booking.rejected
                ? 'rejected'
                : 'pending'
            : 'pending';
    }

    public viewLocation() {
        this.hide_map = true;
        const ref = this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: {
                item: {
                    id: this._booking.asset_id,
                    name: this._booking.asset_name,
                    map_id:
                        this._booking.extension_data.map_id ||
                        this.booking.asset_id,
                    level: this.level,
                },
            },
        });
        ref.afterClosed().subscribe(() => (this.hide_map = false));
    }
}
