import { Validators } from '@angular/forms';
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

export const mockGenerateEventForm = (event: any) => {
    const form = mockForm;
};

export const mockBuilding = {
    id: 1,
    name: 'test-building',
    zone_id: 'zone-1',
};

export const mockUser: any = {
    id: '123',
    name: 'testUser',
    email: 'user@test.com',
    first_name: 'user',
    last_name: 'user',
    username: '',
    phone: '',
    organisation: '',
    notes: '',
    photo: '',
    required: true,
    organizer: true,
    response_status: '' as any,
    visit_expected: true,
    checked_in: false,
    groups: [''],
    extension_data: ' ' as any,
    is_external: true,
    assistance_required: false,
};

export const mockStaffUser: any = {
    id: '123',
    name: 'PlaceOS - Mock User',
    email: 'user@test.com',
    first_name: 'user',
    last_name: 'user',
    username: '',
    phone: '',
    organisation: '',
    notes: '',
    photo: '',
    required: true,
    organizer: true,
    response_status: '' as any,
    visit_expected: true,
    checked_in: false,
    groups: [''],
    extension_data: ' ' as any,
    is_external: false,
    assistance_required: false,
    card_number: '123',
    staff_id: '123',
    is_logged_in: true,
    location: {} as any,
};

export const mockExternalUser: any = {
    id: '123',
    name: 'ExternalUser',
    email: 'external-user@test.com',
    first_name: 'External',
    last_name: 'user',
    username: '',
    phone: '',
    organisation: '',
    notes: '',
    photo: '',
    required: true,
    organizer: true,
    response_status: '' as any,
    visit_expected: true,
    checked_in: false,
    groups: [''],
    extension_data: ' ' as any,
    is_external: true,
    assistance_required: false,
};

export const mockSpace: Space = {
    id: '1',
    name: 'test-space',
    display_name: '',
    email: '',
    capacity: 2,
    feature_list: [''],
    support_url: '',
    map_id: 'map-id-1',
    bookable: true,
    zones: [''],
    configurations: [''] as any,
    images: [],
    response_status: '' as any,
    level: {
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
        images: []
    },
    features: [''],
    availability: [
        {
            duration: 12345,
            date: 23456,
            status: '',
        },
    ],
};

export const mockSpaceWithViews: Space = {
    id: '1',
    name: 'test-space',
    display_name: '',
    email: '',
    capacity: 2,
    feature_list: ['Views'],
    support_url: '',
    map_id: 'map-id-1',
    bookable: true,
    zones: [''],
    configurations: [''] as any,
    images: [],
    response_status: '' as any,
    level: {
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
        images: []
    },
    features: [''],
    availability: [
        {
            duration: 12345,
            date: 23456,
            status: '',
        },
    ],
};

export const mockCalendarEvent: any = {
    id: '123',
    status: 'approved',
    host: 'host@test.com',
    calendar: 'calendar-id',
    creator: 'creator@test.com',
    attendees: [mockUser],
    resources: [mockSpace],
    title: 'title',
    body: '',
    event_start: 12345,
    event_end: 23456,
    all_day: false,
    date: 12345,
    duration: 22222,
    timezone: '',
    location: '',
    meeting_url: '',
    meeting_id: '',
    meeting_provider: '',
    recurring: false,
    recurrence: '' as any,
    recurring_master_id: '',
    private: false,
    attachments: '' as any,
    extension_data: '' as any,
    system: '' as any,
    old_system: '' as any,
    organiser: mockStaffUser,
    type: 'external',
    is_today: true,
    space: mockSpace,
    guests: [] as any,
    ext: '' as any,
    toJSON: () => {
        return '' as any;
    },
    state: 'upcoming',
    can_check_in: true,
};

export const mockExternalCalendarEvent: any = {
    id: '123',
    status: 'approved',
    host: 'host@test.com',
    calendar: 'calendar-id',
    creator: 'creator@test.com',
    attendees: [mockExternalUser],
    resources: [mockSpace],
    title: 'title',
    body: '',
    event_start: 12345,
    event_end: 23456,
    all_day: false,
    date: 12345,
    duration: 22222,
    timezone: '',
    location: '',
    meeting_url: '',
    meeting_id: '',
    meeting_provider: '',
    recurring: false,
    recurrence: '' as any,
    recurring_master_id: '',
    private: false,
    attachments: '' as any,
    extension_data: '' as any,
    system: '' as any,
    old_system: '' as any,
    organiser: mockExternalUser,
    type: 'external',
    is_today: true,
    space: mockSpace,
    guests: [] as any,
    ext: '' as any,
    toJSON: () => {
        return '' as any;
    },
    state: 'upcoming',
    can_check_in: true,
};
export const mockEventFlowOptions = {
    calendar_id: '123',
    zone_id: ['zone-1'],
};

export function mockGetStaffUser() {
    return mockStaffUser;
}
