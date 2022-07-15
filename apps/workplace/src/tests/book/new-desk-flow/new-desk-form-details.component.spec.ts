import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, FAV_DESK_KEY } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { Building, Desk, OrganisationService } from '@placeos/organisation';
import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component';
import { AssetListFieldComponent } from 'libs/form-fields/src/lib/asset-list-field.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('NewDeskFormDetailsComponent', () => {
    let spectator: Spectator<NewDeskFormDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFormDetailsComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    get: jest.fn(),
                    saveUserSetting: jest.fn(),
                },
            },
            {
                provide: BookingFormService,
                useValue: {
                    form: new FormGroup({}),
                    options: new BehaviorSubject({}),
                    features: new BehaviorSubject([]),
                    setOptions: jest.fn(),
                    setFeature: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    building_list: new BehaviorSubject([]),
                    active_levels: new BehaviorSubject([]),
                    building: new Building({ id: '1' }),
                },
            },
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(MatFormField),
            MockComponent(DateFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(AssetListFieldComponent),
        ],
        imports: [MockModule(MatCheckboxModule)],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput({
            form: new FormGroup({
                title: new FormControl(),
                date: new FormControl(),
                duration: new FormControl(),
            }),
        });
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow changing title', () => expect('[name="title"]').toExist());

    it('should allow changing date', () => expect('[name="date"]').toExist());

    it('should allow changing start time', () =>
        expect('[name="start-time"]').toExist());

    it('should allow changing end time', () =>
        expect('[formControlName="duration"]').toExist());

    it('should allow filtering features', () => {
        expect('[features]').not.toExist();
        (spectator.inject(BookingFormService).features as any).next([
            'standing',
        ]);
        spectator.detectChanges();
        expect('[features]').toExist();
    });

    it('should show selected desk', () => {
        expect('[selected-desk]').not.toExist();
        spectator.component.selectedDesk = new Desk({ id: '1' });
        spectator.detectChanges();
        expect('[selected-desk]').toExist();
    });

    it('should allow editting selected desk', () => {
        spectator.component.selectedDesk = new Desk({ id: '1' });
        spectator.detectChanges();
        expect('[edit-desk]').toExist();
        spectator.click('button[edit-desk]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledTimes(1);
    });

    it('should allow removing selected desk', () => {
        spectator.component.selectedDesk = new Desk({ id: '1' });
        spectator.detectChanges();
        expect('[remove-desk]').toExist();
        spectator.click('button[remove-desk]');
        expect(spectator.component.selectedDesk).toBeFalsy();
    });

    it('should allow setting favourite desk', () => {
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, ['1']);
    });

    it('should allow un-favouriting desk', () => {
        spectator.inject(SettingsService).get.mockImplementation(() => ['1']);
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, []);
    });

    it('should allow requesting assets', () =>
        expect('[formControlName="assets"]').toExist());
});
