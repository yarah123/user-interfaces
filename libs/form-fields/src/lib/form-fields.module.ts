import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { ComponentsModule } from '@placeos/components';

import { ActionFieldComponent } from './action-field.component';
import { CounterComponent } from './counter.component';
import { DateFieldComponent } from './date-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { TimeFieldComponent } from './time-field.component';
import { UserListFieldComponent } from './user-list-field.component';
import { UserSearchFieldComponent } from './user-search-field.component';
import { ItemListFieldComponent } from './item-list-field.component';
import { UploadListFieldComponent } from './upload-list-field.component';
import { UploadFileFieldComponent } from './upload-file-field.component';
import { AssetListFieldComponent } from './asset-list-field.component';
import { SpaceListFieldComponent } from './space-list-field.component';
import { RichTextInputComponent } from './rich-text-input.component';
import { HostSelectFieldComponent } from './host-select-field.component';

const COMPONENTS: Type<any>[] = [
    ActionFieldComponent,
    CounterComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    ItemListFieldComponent,
    UploadListFieldComponent,
    UploadFileFieldComponent,
    AssetListFieldComponent,
    SpaceListFieldComponent,
    RichTextInputComponent,
    HostSelectFieldComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatRadioModule,
        ComponentsModule,
    ],
    exports: [...COMPONENTS],
})
export class FormFieldsModule {}
