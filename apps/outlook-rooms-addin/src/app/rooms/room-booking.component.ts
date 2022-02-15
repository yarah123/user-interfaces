import { Component, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { FormControl, FormGroup } from '@angular/forms';
import { FindSpaceComponent } from './find-space/find-space.component';
import { EventFormService } from '@placeos/events';

// import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
// import {
//     MomentDateAdapter,
//     MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// } from '@angular/material-moment-adapter';
// import * as _moment from 'moment';
// import * as _rollupMoment from 'moment';

// const moment = _rollupMoment || _moment;

@Component({
    selector: 'room-booking',
    templateUrl: './room-booking.component.html',
    styles: [
        `
            .button-text {
                color: var(--secondary);
            }

            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-start,
            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-gap,
            ::ng-deep.mat-form-field-appearance-outline
                .mat-form-field-outline-end {
                background-color: white;
            }
        `,
    ],
    // providers: [
    //     {
    //         provide: DateAdapter,
    //         useClass: MomentDateAdapter,
    //         deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    //     },
    // ],
})
export class RoomBookingComponent implements OnInit {
    // date = new FormControl(moment());
    minDate: Date = new Date();
    unixTime;
    startTime;
    endTime;

    public get form(): FormGroup {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this._state.clearForm();
    };

    constructor(
        private _bottomSheet: MatBottomSheet,
        private _state: EventFormService
    ) {}

    ngOnInit(): void {}

    openRoomConfirm() {
        this.form.markAllAsTouched();
        if (
            !this.form?.controls?.title.valid ||
            !this.form?.controls?.date.valid ||
            !this.form?.controls?.duration.valid
        )
            return;

        this._bottomSheet.open(FindSpaceComponent, {
            data: this.form,
        });
    }
}
