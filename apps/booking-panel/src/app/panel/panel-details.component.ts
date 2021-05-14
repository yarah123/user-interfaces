import { Component } from '@angular/core';

import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'panel-details',
    template: `
        <h1 class="text-4xl font-medium mb-8">
            {{ (space | async)?.name || '&lt;Unknown Space&gt;' }}
        </h1>
        <p *ngIf="(space | async)?.description">
            {{ (space | async)?.description }}
        </p>
        <div
            class="flex flex-col items-center space-y-2"
            *ngIf="!(options | async)?.interactive; else empty_state"
        >
            <button
                mat-button
                class="w-48"
                *ngIf="(space | async)?.bookable"
                (click)="newEvent()"
            >
                <div class="flex items-center justify-center">
                    <app-icon class="text-xl">add_circle_outline</app-icon>
                    <span class="mx-2">New Event</span>
                </div>
            </button>
            <button
                mat-button
                class="w-48"
                *ngIf="(space | async)?.support_url"
                (click)="viewControl()"
            >
                <div class="flex items-center justify-center">
                    <app-icon class="text-xl">settings_remote</app-icon>
                    <span class="mx-2">View Control</span>
                </div>
            </button>
            <button mat-button class="w-48" (click)="callWaiter()">
                <div class="flex items-center justify-center">
                    <app-icon class="text-xl">room_service</app-icon>
                    <span class="mx-2">Call Waiter</span>
                </div>
            </button>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center">
                <p>No available actions for this space</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `,
    ],
})
export class PanelDetailsComponent {
    public readonly space = this._state.space;
    public readonly options = this._state.settings;

    public readonly newEvent = () => this._state.newBooking();

    public readonly callWaiter = () => this._state.confirmWaiter();

    public readonly viewControl = () => this._state.viewControl();

    constructor(private _state: PanelStateService) {}
}
