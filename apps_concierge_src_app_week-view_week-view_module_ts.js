"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{1908:(ee,_,i)=>{i.r(_),i.d(_,{WeekViewModule:()=>r});var c=i(4666),f=i(2508),h=i(9885),k=i(3045),O=i(2886),M=i(6150),e=i(2560),W=i(4945),V=i(1670),A=i(5670),y=i(9112),U=i(6221),u=i(3194),b=i(8441),P=i(5074),J=i(7371),w=i(207),Y=i(4714),L=i(5306);function E(o,t){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.display_name||n.name," ")}}class d extends y.cx{constructor(t,n,s,a){super(),this._state=t,this._org=n,this._route=s,this._router=a,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=l=>this._state.setDate(l),this.setWeekends=l=>this._state.setUIOptions({show_weekends:l}),this.newBooking=l=>this._state.newBooking(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setZones(l)}}ngOnInit(){var t=this;return(0,V.Z)(function*(){yield t._org.initialised.pipe((0,A.P)(n=>n)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const s=n.get("zone_ids").split(",");if(s.length){const a=t._org.levelWithID(s);if(t.zones=s,!a)return;t._org.building=t._org.buildings.find(l=>l.id===a.parent_id)}}})),t.subscription("levels",t._org.active_levels.subscribe(n=>{t.zones=t.zones.filter(s=>n.find(a=>a.id===s)),!t.zones.length&&n.length&&t.zones.push(n[0].id),t.updateZones(t.zones)}))})()}}d.\u0275fac=function(t){return new(t||d)(e.Y36(u.Y),e.Y36(U.w7),e.Y36(h.gz),e.Y36(h.F0))},d.\u0275cmp=e.Xpm({type:d,selectors:[["week-view-topbar"]],features:[e.qOj],decls:16,vars:7,consts:[["btn","","matRipple","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(t,n){if(1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return n.newBooking()}),e.TgZ(1,"div",1)(2,"app-icon",2),e._uU(3,"add"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",4)(7,"mat-select",5),e.NdJ("ngModelChange",function(a){return n.zones=a})("ngModelChange",function(a){return n.updateZones(a)}),e.YNc(8,E,2,2,"mat-option",6),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("ngModelChange",function(a){return n.setWeekends(a)}),e.ALo(11,"async"),e.TgZ(12,"div",8),e._uU(13,"Show weekends"),e.qZA()(),e._UZ(14,"div",9),e.TgZ(15,"date-options",10),e.NdJ("dateChange",function(a){return n.setDate(a)}),e.qZA()),2&t){let s;e.xp6(7),e.Q6J("ngModel",n.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,3,n.levels)),e.xp6(2),e.Q6J("ngModel",null==(s=e.lcZ(11,5,n.options))?null:s.show_weekends)}},dependencies:[c.sg,f.JJ,f.On,b.E,P.KE,J.gD,w.ey,Y.Rr,w.wG,L.o,c.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}\n/*# sourceMappingURL=week-view-topbar.component.ts-angular-inline--65.css.map*/"]});var F=i(914),Q=i(1294),C=i(312),T=i(8031),I=i(3200),N=i(4505),z=i(7716),Z=i(6942);function D(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.view(a.event))}),e.TgZ(1,"div",2),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",3),e._uU(7),e.qZA()()}if(2&o){const n=e.oxw();e.Tol("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===(null==n.event?null:n.event.state)?"done":null==n.event?null:n.event.type)),e.xp6(2),e.Oqu(null==n.event?null:n.event.title),e.xp6(2),e.Oqu(e.xi3(5,6,null==n.event?null:n.event.date,"shortTime")),e.xp6(3),e.AsE(" ",null==n.event?null:n.event.attendees.length," Attendee",1===(null==n.event?null:n.event.attendees.length)?"":"s"," ")}}i(9830);class p{constructor(t){this._state=t,this.view=n=>this._state.setEvent(n)}}function R(o,t){1&o&&e._UZ(0,"week-view-event",5),2&o&&e.Q6J("event",t.$implicit)}function B(o,t){if(1&o&&(e.ynx(0),e.YNc(1,R,1,1,"week-view-event",4),e.ALo(2,"async"),e.BQk()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.events))}}function j(o,t){1&o&&(e.TgZ(0,"p",6),e._uU(1,"No events"),e.qZA())}p.\u0275fac=function(t){return new(t||p)(e.Y36(u.Y))},p.\u0275cmp=e.Xpm({type:p,selectors:[["week-view-event"]],inputs:{event:"event"},decls:1,vars:1,consts:[["content","","matRipple","",3,"class","click",4,"ngIf"],["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(t,n){1&t&&e.YNc(0,D,8,9,"div",0),2&t&&e.Q6J("ngIf",n.event)},dependencies:[c.O5,w.wG,c.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}\n/*# sourceMappingURL=week-view-event.component.ts-angular-inline--68.css.map*/"]});class m{constructor(t){this._state=t,this._index=new N.X(0),this.date=this._state.date.pipe((0,Z.U)(n=>(0,C.Z)((0,T.Z)(n),this.index).valueOf())),this.events=(0,z.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,Z.U)(([n,s,a])=>{const l=(0,C.Z)((0,T.Z)(s),a).valueOf(),q=(0,I.Z)(l).valueOf();return n.filter(x=>(0,y.MZ)(l,q,x.date,x.date+60*x.duration*1e3))}))}ngOnChanges(t){t.index&&this._index.next(this.index)}}function X(o,t){if(1&o&&(e.ynx(0),e._UZ(1,"week-view-day",5),e.BQk()),2&o){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("index",n)}}function G(o,t){if(1&o&&(e.ynx(0),e.YNc(1,X,2,1,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&o){const n=t.$implicit,s=e.oxw();e.xp6(1),e.Q6J("ngIf",0!==n&&6!==n||e.lcZ(2,1,s.options).show_weekends)}}function S(o,t){1&o&&e._UZ(0,"mat-progress-bar",6)}function $(o,t){if(1&o&&(e._UZ(0,"view-event-details",7),e.ALo(1,"async")),2&o){const n=e.oxw();e.Q6J("event",e.lcZ(1,1,n.event))}}m.\u0275fac=function(t){return new(t||m)(e.Y36(u.Y))},m.\u0275cmp=e.Xpm({type:m,selectors:[["week-view-day"]],inputs:{index:"index"},features:[e.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(t,n){if(1&t&&(e.TgZ(0,"header",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,B,3,3,"ng-container",2),e.ALo(6,"async"),e.qZA(),e.YNc(7,j,2,0,"ng-template",null,3,e.W1O)),2&t){const s=e.MAs(8);let a;e.xp6(1),e.hij(" ",e.xi3(2,3,e.lcZ(3,6,n.date),"EEE, MMM d, y")," "),e.xp6(4),e.Q6J("ngIf",null==(a=e.lcZ(6,8,n.events))?null:a.length)("ngIfElse",s)}},dependencies:[c.sg,c.O5,p,c.Ov,c.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}\n/*# sourceMappingURL=week-view-day.component.ts-angular-inline--67.css.map*/"]});class g{constructor(t){this._state=t,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}}g.\u0275fac=function(t){return new(t||g)(e.Y36(u.Y))},g.\u0275cmp=e.Xpm({type:g,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,G,3,3,"ng-container",1),e.qZA(),e.YNc(2,S,1,0,"mat-progress-bar",2),e.ALo(3,"async"),e.YNc(4,$,2,3,"view-event-details",3),e.ALo(5,"async")),2&t&&(e.xp6(1),e.Q6J("ngForOf",n.weekdays),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,n.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,n.event)))},dependencies:[c.sg,c.O5,F.E,Q.pW,m,c.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}\n/*# sourceMappingURL=week-view-timeline.component.ts-angular-inline--66.css.map*/"]});class v{}v.\u0275fac=function(t){return new(t||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["","app-weekview",""]],attrs:["app-weekview",""],decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(t,n){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"week-view-topbar")(3,"week-view-timeline"),e.qZA())},dependencies:[W.k,d,g],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=week-view.component.ts-angular-inline--64.css.map*/"]});const H=[{path:"",component:v}];class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,f.u5,k.v,O.YR,M.PP,h.Bz.forChild(H)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map