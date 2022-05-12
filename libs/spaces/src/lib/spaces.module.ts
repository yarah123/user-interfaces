import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@placeos/components';
import { NewSpaceSelectModalComponent } from './new-space-select-modal.component';

import { SpaceSelectItemComponent } from './space-select-item.component';
import { SpaceSelectModalComponent } from './space-select-modal.component';

const COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    SpaceSelectItemComponent,
    NewSpaceSelectModalComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, MatDialogModule, ComponentsModule],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedSpacesModule {}
