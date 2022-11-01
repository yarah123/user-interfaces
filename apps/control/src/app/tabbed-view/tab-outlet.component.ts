import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, take } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'tab-outlet,[tab-outlet]',
    template: `
        <div
            class="h-full w-full flex flex-col items-center overflow-auto px-2 py-2"
        >
            <div class="flex items-center w-full px-1 pt-2 overflow-hidden">
                <a
                    mat-button
                    class="h-24 w-32 rounded-t rounded-b-none shadow mx-1 flex flex-col border-t border-l border-r items-center justify-center leading-tight overflow-hidden"
                    [routerLink]="['/tabbed', id, tab.id || tab.name]"
                    routerLinkActive="border-primary bg-white text-primary"
                    queryParamsHandling="merge"
                    *ngFor="let tab of tabs | async"
                >
                    <app-icon class="text-5xl">{{ tab.icon }}</app-icon>
                    <p>{{ tab.name }}</p>
                </a>
            </div>
            <div
                class="flex-1 h-1/2 w-full bg-white rounded shadow flex items-center divide-x divide-gray-200 text-black"
            >
                <div
                    class="w-64 h-full space-y-2 px-4 pt-2 pb-4 overflow-auto"
                    *ngIf="(inputs | async)?.length > 1"
                >
                    <h3 class="text-center p-2 font-medium text-lg">
                        Available Inputs
                    </h3>
                    <button
                        mat-button
                        class="w-full"
                        *ngFor="let input of inputs | async"
                        [class.inverse]="
                            (system$ | async)?.selected_input !==
                            (input.id || input.name)
                        "
                        (click)="setInput(input)"
                    >
                        {{ input?.name }}
                    </button>
                    <div
                        class="flex-1 h-1/2 w-full p-8 flex items-center justify-center opacity-30"
                        *ngIf="!(inputs | async)?.length"
                    >
                        No inputs available for category
                    </div>
                </div>
                <div
                    style="flex: 2"
                    class="h-full relative overflow-auto min-h-full"
                >
                    <ng-container [ngSwitch]="(tab | async)?.controls">
                        <ng-container *ngSwitchCase="'vidconf-controls'">
                            <ng-template #no_call_state>
                                <div class="flex justify-center space-x-8">
                                <camera-controls *ngIf="!(speaker_track | async)"></camera-controls>
                                <video-call-dial-view
                                    class="mt-4 block"
                                    [redirect]="false"
                                ></video-call-dial-view>
</div>
                            </ng-template>
                            <div
                                *ngIf="call | async; else no_call_state"
                                video-call-page
                                [present_output]="
                                    (tab | async)?.presentation_source
                                "
                                [redirect]="false"
                            ></div>
                        </ng-container>
                        <ng-container *ngSwitchCase="'tv-channels'">
                            <tv-controls [mod]="(tab | async)?.mod"></tv-controls>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <div
                                class="p-8"
                                content
                                *ngIf="help | async"
                                [innerHTML]="
                                    (help | async).content | markdown | safe
                                "
                            ></div>
                            <div
                                *ngIf="!(help | async)"
                                class="h-full w-full flex items-center justify-center opacity-60"
                            >
                                <p>
                                    No controls available for this input source
                                </p>
                            </div>
                        </ng-container>
                    </ng-container>
                    <button
                        *ngIf="(tab | async)?.help && (tab | async)?.controls"
                        mat-button
                        class="absolute top-4 right-4 w-32 inverse black"
                        (click)="viewHelp()"
                    >
                        <div class="flex items-center justify-center mr-2">
                            <app-icon>help</app-icon>
                            <div class="mx-2">Help</div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="w-full">
                <device-output-list></device-output-list>
            </div>
        </div>
    `,
    styles: [
        `
            a {
                background-color: #eee;
                color: #000;
            }
        `,
    ],
})
export class TabOutletComponent extends BaseClass {
    public readonly active_tab = new BehaviorSubject('');
    public readonly system$ = this._service.system;
    public readonly tabs = this._service.tabs;
    public readonly call = this._vc_state.call;
    public readonly speaker_track = this._vc_state.speaker_track;
    public readonly tab = combineLatest([
        this._service.tabs,
        this.active_tab,
    ]).pipe(map(([_, id]) => _.find((t: any) => (t.id || t.name) === id)));

    public readonly inputs = combineLatest([
        this.active_tab,
        this.tabs,
        this._service.input_list,
    ]).pipe(
        map(([id, tabs, inputs]) => {
            const tab = tabs.find((_: any) => (_.id || _.name) === id);
            if (!tab) return [];
            return inputs.filter(
                (_) =>
                    (!tab.inputs && (!tab.type || _.type === tab.type)) ||
                    (tab.inputs && tab.inputs.includes(_.id))
            );
        })
    );

    public readonly help = combineLatest([
        this._service.help_items,
        this.tab,
    ]).pipe(map(([_, t]) => (_ || []).find((h: any) => h.id === t?.help)));

    public setInput = (s) => this._service.setOutputSource(s.id);
    public viewHelp = async () =>
        this._service.viewHelp((await this.tab.pipe(take(1)).toPromise()).help);

    public get id() {
        return this._service.id;
    }

    constructor(
        private _service: ControlStateService,
        private _vc_state: VideoCallStateService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                this.active_tab.next(
                    params.get('tab') || this.active_tab.getValue()
                )
            )
        );
        this.subscription(
            'tab',
            this._service.system.subscribe((_) => {
                if (_.selected_tab) {
                    this.active_tab.next(_.selected_tab);
                    this._router.navigate(['/tabbed', this.id, _.selected_tab], { queryParamsHandling: 'merge' });
                }
            })
        );
        this.subscription(
            'inputs',
            combineLatest([this.inputs, this.system$, this.tab])
                .pipe(debounceTime(100))
                .subscribe(([_, { selected_input }, tab]) => {
                    if (_.find((i) => (i.id || i.name) === selected_input))
                        return;
                    _.length ? this._service.setSelectedInput(_[0].id) : '';
                })
        );
    }
}
