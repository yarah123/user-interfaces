import { FormBuilder, Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Space } from '@placeos/spaces';

export let mockForm = {
    id: 1,
    host: ['host@test.com', Validators.required],
    organiser: ['organiser@test.com', Validators.required],
    creator: ['creator@test.com', Validators.required],
    title: ['', Validators.required],
    date: [0, Validators.required],
    duration: 0,
    attendees: '' as any,
    markAllAsTouched: jest.fn(() => {}),
};

export const mockBuilding = {
    id: 1,
    name: 'test-building',
    zone_id: 'zone-1',
};

export const mockBuildingLevel = {
    id: '123',
    parent_id: '',
    name: 'Building-1',
    display_name: '',
    capacity: 40,
    number: 'url',
    map_id: 'map-id-1',
    tags: ['tag-1'],
    settings: {},
    locations: [] as any,
};

export const mockCalendarAvailability = {
    duration: 12345,
    date: 23456,
    status: '',
};
export const mockSpace: Space = {
    id: '1',
    name: 'test-space',
    display_name: '',
    email: '',
    capacity: 2,
    feature_list: [''],
    support_url: '',
    map_id: '',
    bookable: true,
    zones: [''],
    configurations: [''] as any,
    image: '',
    response_status: '' as any,
    level: mockBuildingLevel,
    features: [''],
    availability: [mockCalendarAvailability],
};

export const mockEventFlowOptions = {
    calendar_id: '123',
    zone_id: ['zone-1'],
};

export const mockFeature = 'Whiteboard';

export const mockLocatable = {
    id: '123',
    name: 'Space-1',
    map_id: 'map-id-1',
    level: mockBuildingLevel,
    zones: ['zone-1'],
};

export const mockMapsList = {
    map_id: 'map-1',
    level: 'Level 1',
};

export class mockEventFormService {
    formModel = mockForm;
    fb = new FormBuilder();
    form = this.fb.group(this.formModel);
    public view = '';
    last_success = null;
    loading = of(false);

    available_spaces = of([mockSpace, mockSpace, mockSpace]);
    options = of(mockEventFlowOptions);

    public setView(view: string) {
        this.view = view;
    }
    setOptions(option: any) {
        this.options = option;
    }
    newForm = jest.fn();
    resentForm = jest.fn();
    clearForm = jest.fn();
    storeForm = jest.fn(() => {});
    loadForm = jest.fn();
    postForm = jest.fn();
}

export class mockOrgService {
    initialised = of(true);
    features_loaded$ = of(true);
    building_list = of([mockBuilding, mockBuilding]);
    active_building = of(mockBuilding);
    building = null;

    levelsForBuilding(bld) {
        return [mockBuildingLevel, mockBuildingLevel];
    }
}

export class mockSpacesService {
    initialised = of(true);
    features = of([mockFeature, mockFeature]);
}

export class mockFeatureFilterService {}

export class mockMapService {
    features_loaded$ = of(true);
    locatable_spaces$ = of([mockLocatable, mockLocatable]);
    maps_list$ = of(mockMapsList);
    map_features = [
        {
            track_id: '123',
            location: { x: 0.3, y: 0.8 },
        },
    ];

    locateSpaces(spaces) {
        this.locatable_spaces$ = of(spaces);
    }
}

export class mockRoomConfirmService {
    openRoomDetail = jest.fn((param) => {});
}

export class mockRouterStub {
    navigate = jest.fn(() => {});
}
