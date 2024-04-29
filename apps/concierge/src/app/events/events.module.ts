import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { EventsListComponent } from './events-list.component';
import { EventManageComponent } from './event-manage.component';
import { SharedSpacesModule } from '@placeos/spaces';

import { GroupEventDetailsModalComponent } from 'apps/workplace/src/app/events/group-event-details-modal.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { EventListingComponent } from './event-listing.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: EventsComponent,
        children: [{ path: '', component: EventsListComponent }],
    },
    { path: 'manage', component: EventManageComponent },
    { path: 'manage/:id', component: EventManageComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [
        EventsComponent,
        EventsListComponent,
        EventManageComponent,
        EventListingComponent,
        GroupEventDetailsModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class EventsModule {}
