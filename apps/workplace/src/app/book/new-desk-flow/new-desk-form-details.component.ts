import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addMinutes, roundToNearestMinutes } from 'date-fns';

@Component({
    selector: 'new-desk-form-details',
    styles: [],
    template: `
        <!-- <div class="m-2 bg-yellow-500 p-2 text-center rounded shadow text-sm">
            The selected desk hasn't been booked. Please book the desk to be
            able to check-in.
        </div> -->
        <div
            class="p-0 sm:py-4 sm:px-16 divide-y divide-gray-300 space-y-2"
            *ngIf="form"
            [formGroup]="form"
        >
            <section class="flex items-center" *ngIf="allow_groups">
                <button
                    matRipple
                    class="relative h-16 flex items-center justify-center flex-1 space-x-2"
                    [class.text-primary]="!(options | async)?.group"
                    [class.opacity-60]="(options | async)?.group"
                    (click)="setOptions({ group: false, members: [] })"
                >
                    <app-icon class="text-2xl">person</app-icon>
                    <div class="" i18n>Single</div>
                    <div
                        class="absolute h-2 inset-x-0 bottom-0 !m-0"
                        [class.bg-gray-200]="(options | async)?.group"
                        [class.bg-primary]="!(options | async)?.group"
                    ></div>
                </button>
                <button
                    matRipple
                    class="relative h-16 flex items-center justify-center flex-1 space-x-2"
                    [class.text-primary]="(options | async)?.group"
                    [class.opacity-60]="!(options | async)?.group"
                    (click)="setOptions({ group: true })"
                >
                    <app-icon class="text-2xl">group_add</app-icon>
                    <div class="" i18n>Group</div>
                    <div
                        class="absolute h-2 inset-x-0 bottom-0 !m-0"
                        [class.bg-gray-200]="!(options | async)?.group"
                        [class.bg-primary]="(options | async)?.group"
                    ></div>
                </button>
            </section>
            <section class="p-2" [class.!border-none]="allow_groups">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        1
                    </div>
                    <div class="text-xl" i18n>Details</div>
                </h3>
                <div
                    class="w-full"
                    *ngIf="can_book_for_others && !(options | async)?.group"
                >
                    <label for="title">Host<span>*</span></label>
                    <a-user-search-field
                        formControlName="user"
                    ></a-user-search-field>
                </div>
                <div class="flex items-center flex-wrap sm:space-x-2">
                    <div class="flex-1 min-w-[256px]">
                        <label for="title">Add Title<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="e.g. Focus Time"
                            />
                            <mat-error i18n
                                >Booking title is required.</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div class="flex-1 min-w-[256px]">
                        <label for="date" i18n>Date<span>*</span></label>
                        <a-date-field name="date" formControlName="date" i18n>
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time" i18n
                            >Start Time<span>*</span></label
                        >
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3 relative">
                        <label for="end-time" i18n
                            >End Time<span>*</span></label
                        >
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="12 * 60"
                            [min]="60"
                            [step]="60"
                        >
                        </a-duration-field>
                        <mat-checkbox
                            formControlName="all_day"
                            *ngIf="allow_all_day"
                            class="absolute -top-2 right-0"
                            i18n
                        >
                            All Day
                        </mat-checkbox>
                    </div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="can_book_lockers"
                >
                    <div class="flex-1 w-1/3">
                        <mat-checkbox
                            [ngModel]="!!form.value.secondary_resource"
                            (ngModelChange)="
                                form.patchValue({
                                    secondary_resource: $event ? 'locker' : ''
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                            i18n
                        >
                            Require locker
                        </mat-checkbox>
                    </div>
                </div>
            </section>
            <section class="p-2" *ngIf="(options | async)?.group">
                <h3 class="space-x-2 flex items-center">
                    <div
                        class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        2
                    </div>
                    <div class="text-xl" i18n>Group Members</div>
                    <div class="flex-1 w-px"></div>
                </h3>
                <div class="overflow-hidden">
                    <a-user-list-field
                        class="mt-4"
                        [ngModel]="(options | async)?.members || []"
                        (ngModelChange)="setOptions({ members: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-user-list-field>
                </div>
            </section>
            <section class="p-2">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        {{ (options | async)?.group ? 3 : 2 }}
                    </div>
                    <div class="text-xl" i18n>Desk</div>
                </h3>
                <desk-list-field formControlName="resources"></desk-list-field>
                <p
                    *ngIf="(options | async)?.group"
                    class="text-center rounded px-2 py-1 bg-yellow-400 shadow text-xs"
                >
                    Desks nearby to the selected desk will booked for group
                    members
                </p>
            </section>
            <section class="p-2" *ngIf="has_assets">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        {{ (options | async)?.group ? 4 : 3 }}
                    </div>
                    <div class="text-xl" i18n>Request Asset</div>
                </h3>
                <asset-list-field formControlName="assets"></asset-list-field>
            </section>
        </div>
    `,
})
export class NewDeskFormDetailsComponent extends AsyncHandler {
    @Input() public form: FormGroup;
    @Output() public find = new EventEmitter<void>();
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for desk booking */
    public readonly options = this._state.options;
    /** List of set options for desk booking */
    public readonly features = this._state.features;

    /** Selected desk for booking */
    public selected_desk: Desk;
    public from_id = false;

    public readonly recurrence_options = ['daily', 'weekly', 'monthly'];

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public get can_book_for_others() {
        return this._settings.get('app.desks.can_book_for_others');
    }

    public get can_book_lockers() {
        return this._settings.get('app.desks.can_book_lockers');
    }
    public get can_recurr() {
        return this._settings.get('app.desks.recurrence_allowed');
    }

    public get allow_groups() {
        return this._settings.get('app.desks.allow_groups');
    }

    public get has_assets() {
        return !!this._settings.get('app.desks.has_assets');
    }

    public get needs_reason() {
        return this._settings.get('app.desks.needs_reason') === true;
    }

    public get allow_time_changes() {
        return !!this._settings.get('app.desks.allow_time_changes');
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            !!this._settings.get('app.desks.allow_all_day')
        );
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'change',
            this._state.form
                .get('resources')
                ?.valueChanges?.subscribe((list) =>
                    list?.length ? this.setBookingAsset(list[0]) : ''
                )
        );
    }

    private setBookingAsset(desk: Desk) {
        this._state.form.patchValue({ asset_id: undefined });
        if (!desk) return;
        this.selected_desk = desk;
        this._state.form.patchValue({
            asset_id: desk?.id,
            asset_name: desk.name,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
            booking_asset: desk,
        });
    }
}
