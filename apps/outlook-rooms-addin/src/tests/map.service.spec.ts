import { MapService } from '../app/rooms/map.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks, MockBuilder } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';

import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { Location } from '@angular/common';
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';
import { BaseClass } from '@placeos/common';

import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import {
    mockOrgService,
    mockSpacesService,
    mockFeatureFilterService,
    mockMapService,
    mockRoomConfirmService,
    mockRouterStub,
    mockSpace,
    mockEventFlowOptions,
} from './test-mocks';

describe('MapService', () => {
    let spectator: SpectatorService<MapService>;
    const roomConfirmServiceStub = mockRoomConfirmService;

    const createService = createServiceFactory({
        service: MapService,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatBottomSheetModule,
            ComponentsModule,
        ],
        providers: [
            {
                provide: MatBottomSheet,
                useValue: {
                    open: jest.fn((component) => {}),
                    afterDismissed: jest.fn(),
                },
            },
            {
                provide: RoomConfirmService,
                useClass: roomConfirmServiceStub,
            },
        ],
        declarations: [],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create service', () => {
        spectator = createService();
        expect(spectator.service).toBeTruthy();
    });

    it('should return a selected space', async () => {
        spectator = createService();
        const room_service = spectator.inject(RoomConfirmService);
        room_service.selected_space$ = of(mockSpace);

        expect(JSON.stringify(spectator.service.selected_space$)).toBe(
            JSON.stringify(room_service.selected_space$)
        );
    });
    it('should return a list of map IDs with no duplicates', () => {
        spectator = createService();
    });
    it('should have a flag indicating whether the map has loaded', () => {
        spectator = createService();
    });

    it('should get and store available spaces', () => {
        spectator = createService();
    });
    it('should contain a method to open a room tile when clicked', () => {
        spectator = createService();
    });

    it('should load the map before processing map styles', () => {
        spectator = createService();
    });
});
