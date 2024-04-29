import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';
import {
    addDays,
    addMonths,
    endOfDay,
    startOfMonth,
    startOfWeek,
    format,
} from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-event-list',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">Events</h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">Create Event</div>
                    <app-icon class="text-2xl">chevron_right</app-icon>
                </a>
            </div>
            <div filters class="flex items-center px-8 space-x-2 pb-4">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view !== 'list'"
                    (click)="view = 'list'"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl">list</app-icon>
                        <div class="pr-2">List</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view !== 'calendar'"
                    (click)="view = 'calendar'"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl">event</app-icon>
                        <div class="pr-2">Calendar</div>
                    </div>
                </button>
                <div class="h-full px-2">
                    <div class="w-px h-full bg-base-300"></div>
                </div>
                <mat-form-field appearance="outline" class="w-32 no-subscript">
                    <mat-select
                        [ngModel]="period.value"
                        (ngModelChange)="period.next($event)"
                    >
                        <mat-option value="week">Week</mat-option>
                        <mat-option value="month">Month</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-64 no-subscript">
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option
                            [value]="range.id"
                            *ngFor="let range of period_list"
                        >
                            {{ range.display }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="h-1/2 flex-1 w-full px-8 overflow-auto mb-4">
                <event-listing *ngIf="view === 'list'"></event-listing>
                <event-calendar
                    *ngIf="view === 'calendar'"
                    [period]="period | async"
                ></event-calendar>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
})
export class EventsListComponent extends AsyncHandler {
    public view: 'list' | 'calendar' = 'list';
    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;

    constructor(
        private _settings: SettingsService,
        private _state: EventStateService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'period',
            this.period.subscribe(() => {
                this._generatePeriods();
                if (this.period_list.length) {
                    this.setPeriod(this.period_list[0].id);
                    this.selected_range = this.period_list[0].id;
                }
            })
        );
        this._generatePeriods();
        if (this.period_list.length) {
            this.setPeriod(this.period_list[0].id);
            this.selected_range = this.period_list[0].id;
        }
    }

    public setPeriod(id: string) {
        const { start, end } = this.period_list.find((_) => _.id === id);
        this._state.setOptions({ date: start, end });
    }

    private _generatePeriods() {
        const periods = [];
        const period_type = this.period.value;
        let date = Date.now();
        const end_date = addDays(date, 12 * 30).valueOf();
        const week_offset = this._settings.get('app.week_start') || 0;
        if (period_type === 'month') {
            date = startOfMonth(date).valueOf();
        } else if (period_type === 'week') {
            date = startOfWeek(date, { weekStartsOn: week_offset }).valueOf();
        }
        while (date < end_date) {
            if (period_type === 'week') {
                const end = endOfDay(addDays(date, 6)).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(
                        Math.max(Date.now(), date),
                        'EEE, do MMM'
                    )} – ${format(end, 'do MMM')}`,
                });
                date = addDays(date, 7).valueOf();
            } else if (period_type === 'month') {
                const end = addDays(addMonths(date, 1), -1).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(date, 'MMMM yyyy')}`,
                });
                date = addMonths(date, 1).valueOf();
            } else break;
        }
        this.period_list = periods;
    }
}
