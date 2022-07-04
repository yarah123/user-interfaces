import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, InteractiveMapComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';

import { MapLocateModalComponent } from '../lib/map-locate-modal.component';

describe('MapLocateModalComponent', () => {
    let spectator: Spectator<MapLocateModalComponent>;
    const createComponent = createComponentFactory({
        component: MapLocateModalComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { item: { map_id: '1', name: 'Item 1', level: {} } },
            },
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn() },
            },
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
