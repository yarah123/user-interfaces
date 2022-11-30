import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addMinutes, format, formatDuration, getUnixTime } from 'date-fns';

import { CalendarEvent } from './event.class';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { Building } from 'libs/organisation/src/lib/building.class';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { notifyError, SettingsService } from '@placeos/common';
import { Space } from 'libs/spaces/src/lib/space.class';
import { getModule } from '@placeos/ts-client';

@Component({
    selector: 'event-details-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-auto sm:w-[51rem] sm:max-h-[80vh] bg-white sm:bg-gray-100 sm:dark:bg-neutral-600 dark:bg-neutral-700 sm:rounded overflow-auto space-y-2 pb-2"
        >
            <div
                class="sm:flex flex-col items-center pb-4 max-h-screen sm:max-h-[80vh] sm:px-16 sm:border-b bg-white dark:bg-neutral-700 border-gray-300 dark:border-neutral-500"
            >
                <i
                    binding
                    [(model)]="room_status"
                    [sys]="event.space.id"
                    mod="Bookings"
                    bind="status"
                ></i>
                <div
                    class="bg-black/20 dark:bg-white/20 w-full h-64 sm:rounded-b overflow-hidden"
                    *ngIf="event?.system?.images?.length"
                >
                    <image-carousel
                        [images]="event?.system?.images"
                        class="w-full h-64"
                    ></image-carousel>
                </div>
                <h3
                    title
                    class="px-3 mt-2 text-xl font-medium w-full"
                    [class.pt-4]="!event?.system?.images?.length"
                >
                    {{ event.title }}
                </h3>
                <div class="sm:flex items-center justify-between w-full">
                    <div class="flex m-2">
                        <div
                            class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium"
                            [class.bg-green-600]="
                                event.state !== 'done' &&
                                event?.status === 'approved'
                            "
                            [class.bg-yellow-500]="
                                event.state !== 'done' &&
                                event?.status === 'tentative'
                            "
                            [class.bg-red-600]="
                                event.state !== 'done' &&
                                event?.status === 'declined'
                            "
                            [class.bg-gray-300]="event.state === 'done'"
                        >
                            <div
                                class="rounded-full h-5 w-5 flex items-center justify-center text-white"
                                [class.bg-success]="
                                    event.state !== 'done' &&
                                    event?.status === 'approved'
                                "
                                [class.text-pending]="
                                    event.state !== 'done' &&
                                    event?.status === 'tentative'
                                "
                                [class.bg-error]="
                                    event.state !== 'done' &&
                                    event?.status === 'declined'
                                "
                                [class.text-neutral-600]="
                                    event.state === 'done'
                                "
                            >
                                <app-icon>
                                    {{
                                        event.state === 'done'
                                            ? 'not_interested'
                                            : event?.status === 'approved'
                                            ? 'done'
                                            : event?.status === 'tentative'
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
                        *ngIf="event.state !== 'done'"
                    >
                        <button
                            mat-button
                            class="flex-1 h-10"
                            *ngIf="
                                event.can_check_in &&
                                room_status !== 'available'
                            "
                            [class.bg-green-600]="room_status !== pending"
                            (click)="checkin()"
                        >
                            <div
                                class="flex items-center space-x-2 justify-center"
                            >
                                <app-icon>{{
                                    room_status === 'pending'
                                        ? 'arrow_back'
                                        : 'done'
                                }}</app-icon>
                                <div class="mr-4" i18n>
                                    {{
                                        room_status === 'pending'
                                            ? 'Check in'
                                            : 'Checked in'
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-icon-button
                            [matMenuTriggerFor]="menu"
                            class="bg-primary rounded text-white h-10 w-10"
                            *ngIf="allow_edit"
                        >
                            <app-icon>more_horiz</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sm:flex flex-wrap sm:px-12">
                <div
                    class="sm:p-4 sm:bg-white sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-gray-200 dark:border-neutral-500 flex-grow-[3] min-w-1/3 sm:w-[16rem] space-y-2"
                >
                    <h3 class="px-3 mt-2 text-lg font-medium mb-2" i18n>
                        Details
                    </h3>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>event</app-icon>
                        <div>{{ event.date | date: 'EEEE, dd LLLL y' }}</div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>schedule</app-icon>
                        <div>{{ period }}</div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>map</app-icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{
                                event?.system?.display_name ||
                                    event?.system?.name
                            }}
                        </div>
                    </div>
                    <div class="flex items-center px-2 space-x-2">
                        <app-icon>place</app-icon>
                        <div>
                            {{ building?.display_name || building?.name }},
                            {{ building?.address }}
                        </div>
                    </div>
                </div>
                <div
                    class="mt-4 sm:p-4 sm:bg-white sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-gray-200 dark:border-neutral-500 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                >
                    <div
                        class="mx-3 border-t border-gray-300 sm:border-none dark:border-neutral-500 flex items-center justify-between"
                    >
                        <h3 class="text-lg font-medium" i18n>Attendees</h3>
                        <button
                            mat-button
                            show-attendees
                            class="clear text-xs underline"
                            (click)="show_attendees = true"
                            i18n
                        >
                            See All
                        </button>
                    </div>
                    <div class="flex items-center p-1">
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ accept_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>Yes</div>
                        </div>
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ declined_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>No</div>
                        </div>
                        <div
                            class="flex flex-col flex-1 items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ pending_count || 0 }}</div>
                            <div class="text-sm uppercase" i18n>Pending</div>
                        </div>
                    </div>
                    <h3
                        class="mx-3 mt-2 pt-2 text-lg font-medium border-t border-gray-300 dark:border-neutral-500"
                        i18n
                    >
                        Host
                    </h3>
                    <div class="px-2 flex items-center space-x-2" host>
                        <a-user-avatar [user]="event.organiser"></a-user-avatar>
                        <div class="text-sm">
                            <div>{{ event.organiser?.name }}</div>
                            <div class="opacity-60">{{ event.host }}</div>
                        </div>
                    </div>
                </div>
                <ng-container *ngIf="has_catering">
                    <div
                        class="mt-4 sm:p-4 sm:bg-white sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-gray-200 dark:border-neutral-500 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                    >
                        <h3
                            class="mx-3 mt-2 pt-2 text-lg font-medium border-t border-gray-300 dark:border-neutral-500"
                            i18n
                        >
                            Catering
                        </h3>
                        <div class="flex flex-col px-4 space-y-2">
                            <div
                                catering-item
                                class="flex space-x-2"
                                *ngFor="
                                    let item of event.ext('catering')[0].items
                                "
                            >
                                <div
                                    count
                                    class="flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-sm font-medium"
                                >
                                    {{ item.quantity }}
                                </div>
                                <div details class="pt-0.5">
                                    <div class="text-sm">{{ item.name }}</div>
                                    <div
                                        class="text-xs opacity-40"
                                        *ngFor="let opt of item.options"
                                    >
                                        {{ opt.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-container>
                <div
                    map
                    class="mt-4 sm:mt-2 h-64 sm:h-48 relative border border-gray-200 dark:border-neutral-500 overflow-hidden rounded sm:bg-white sm:dark:bg-neutral-700 m-2 flex-grow-[3] min-w-1/3 p-2 sm:w-[16rem]"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="level?.map_id"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </div>
                <div
                    class="mt-4 sm:p-4 sm:bg-white sm:dark:bg-neutral-700 rounded sm:m-2 sm:border border-gray-200 dark:border-neutral-500 flex-grow-[3] min-w-1/3 sm:w-[16rem]"
                >
                    <h3
                        class="mx-3 text-lg font-medium border-t sm:border-none border-gray-300 dark:border-neutral-500"
                        *ngIf="event.body"
                        i18n
                    >
                        Notes
                    </h3>
                    <div
                        notes
                        class="mx-4 overflow-hidden max-w-full"
                        *ngIf="event.body"
                        [innerHTML]="event.body | sanitize"
                    ></div>
                </div>
                <button
                    mat-icon-button
                    mat-dialog-close
                    class="absolute top-2 left-2 bg-black/30 text-white"
                >
                    <app-icon>close</app-icon>
                </button>
                <div class="absolute inset-0 z-50" *ngIf="show_attendees">
                    <attendee-list
                        [list]="event.attendees"
                        [host]="event.host"
                        (click)="show_attendees = false"
                    ></attendee-list>
                </div>
            </div>
            <mat-menu #menu="matMenu" xPosition="before">
                <button
                    mat-menu-item
                    mat-dialog-close
                    class="flex items-center space-x-2 text-base"
                    (click)="edit.emit(space)"
                >
                    <app-icon>edit</app-icon>
                    <div i18n>Edit event</div>
                </button>
                <button
                    mat-menu-item
                    class="flex items-center space-x-2 text-base"
                    (click)="remove.emit()"
                >
                    <app-icon>delete</app-icon>
                    <div i18n>Delete event</div>
                </button>
            </mat-menu>
        </div>
    `,
    styles: [``],
    providers: [SpacePipe],
})
export class EventDetailsModalComponent {
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();

    public room_status = '';
    public show_attendees: boolean = false;
    public readonly event = this._event;
    public features = [
        {
            location: this.event?.system?.map_id,
            content: MapPinComponent,
        },
    ];

    public readonly has_catering = this.event?.ext('catering')?.length > 0;

    public level: BuildingLevel = new BuildingLevel();
    public building: Building = new Building();
    public space: Space = new Space();

    public accept_count = this._event.attendees.reduce(
        (c, i) => (c += i.response_status === 'accepted' ? 1 : 0),
        0
    );
    public declined_count = this._event.attendees.reduce(
        (c, i) => (c += i.response_status === 'declined' ? 1 : 0),
        0
    );
    public pending_count = this._event.attendees.reduce(
        (c, i) =>
            (c +=
                i.response_status === 'tentative' ||
                i.response_status === 'needsAction'
                    ? 1
                    : 0),
        0
    );

    public get allow_edit() {
        return !this._settings.get('app.events.booking_unavailable');
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        private _settings: SettingsService
    ) {
        this._load().then();
    }

    public get period() {
        const start = this.event?.date || Date.now();
        const duration = this.event?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, 'h:mm a')} - ${format(end, 'h:mm a')} (${dur})`;
    }

    public async checkin() {
        const mod = getModule(this.event.space.id, 'Bookings');
        if (!mod) return;
        await mod
            .execute('checkin', [getUnixTime(this.event.date)])
            .catch((e) => notifyError(`Error checking in booking. ${e}`));
    }

    private async _load() {
        this.space = await this._space_pipe.transform(
            this._event.system?.id || this._event.system?.email
        );
        this.level = this._org.levelWithID(this.space.zones);
        this.building = this._org.buildings.find((bld) =>
            this.space.zones.includes(bld.id)
        );
        this.features = [
            {
                location: this.space.map_id,
                content: MapPinComponent,
            },
        ];
    }
}
