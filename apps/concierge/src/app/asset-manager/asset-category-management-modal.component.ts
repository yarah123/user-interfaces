import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssetCategory, deleteAssetCategory } from '@placeos/assets';
import { Observable } from 'rxjs';

@Component({
    selector: 'asset-category-management-modal',
    template: `
        <header>
            <h2>Manage Categories</h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="overflow-y-auto min-w-[20rem] divide-y divide-gray-200 max-h-[65vh]"
        >
            <div
                class="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2"
                *ngFor="let category of list | async"
            >
                <div class="flex-1 truncate">{{ category.name }}</div>
                <button btn icon matRipple (click)="edit(category)">
                    <app-icon>edit</app-icon>
                </button>
                <button btn icon matRipple (click)="remove(category)">
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </main>
    `,
    styles: [``],
})
export class AssetCategoryManagementModalComponent {
    public readonly changed = new EventEmitter();
    public readonly list = this._data.list;
    public readonly edit = this._data.edit;

    public readonly remove = async (category: AssetCategory) => {
        await deleteAssetCategory(category.id).toPromise();
        this.changed.emit();
    };

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            list: Observable<AssetCategory[]>;
            edit: (i?) => any;
        },
        private _dialog_ref: MatDialogRef<AssetCategoryManagementModalComponent>
    ) {}
}
