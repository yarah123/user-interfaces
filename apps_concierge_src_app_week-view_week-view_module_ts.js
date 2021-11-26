"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{763:(ee,v,o)=>{o.r(v),o.d(v,{DayViewModule:()=>H});var r=o(8267),d=o(8346),m=o(1733),C=o(9323),Z=o(258),T=o(9148),e=o(4001),k=o(2146),_=o(8806),x=o(4452),u=o(3867),M=o(4555),p=o(1809),O=o(7752),W=o(9680),V=o(3981),A=o(1036),U=o(1232),b=o(3928),h=o(2157);function P(n,s){if(1&n&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}let J=(()=>{class n extends u.KG{constructor(t,i,a,l){super(),this._state=t,this._org=i,this._route=a,this._router=l,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=c=>this._state.setDate(c),this.setWeekends=c=>this._state.setUIOptions({show_weekends:c}),this.newBooking=c=>this._state.newBooking(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")}}),this._state.setZones(c)}}ngOnInit(){return(0,_.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,x.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const i=t.get("zone_ids").split(",");if(i.length){const a=this._org.levelWithID(i);if(this.zones=i,!a)return;this._org.building=this._org.buildings.find(l=>l.id===a.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(t=>{this.zones=this.zones.filter(i=>t.find(a=>a.id===i)),!this.zones.length&&t.length&&this.zones.push(t[0].id),this.updateZones(this.zones)}))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Y),e.Y36(M.w7),e.Y36(m.gz),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-topbar"]],features:[e.qOj],decls:16,vars:7,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(t,i){if(1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.newBooking()}),e.TgZ(1,"div",1),e.TgZ(2,"app-icon",2),e._uU(3,"add"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"New Booking"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"mat-form-field",4),e.TgZ(7,"mat-select",5),e.NdJ("ngModelChange",function(l){return i.zones=l})("ngModelChange",function(l){return i.updateZones(l)}),e.YNc(8,P,2,2,"mat-option",6),e.ALo(9,"async"),e.qZA(),e.qZA(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("ngModelChange",function(l){return i.setWeekends(l)}),e.ALo(11,"async"),e.TgZ(12,"div",8),e._uU(13,"Show weekends"),e.qZA(),e.qZA(),e._UZ(14,"div",9),e.TgZ(15,"date-options",10),e.NdJ("dateChange",function(l){return i.setDate(l)}),e.qZA()),2&t){let a;e.xp6(7),e.Q6J("ngModel",i.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,3,i.levels)),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(11,5,i.options))?null:a.show_weekends)}},directives:[O.lW,W.o,V.KE,A.gD,d.JJ,d.On,r.sg,U.Rr,b.E,h.ey],pipes:[r.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}\n/*# sourceMappingURL=week-view-topbar.component.ts-angular-inline--37.css.map*/"]}),n})();var f=o(8975),w=o(9453),D=o(5012),Y=o(1119),L=o(899),y=o(8377);o(7794);let E=(()=>{class n{constructor(t){this._state=t,this.view=i=>this._state.setEvent(i)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-event"]],inputs:{event:"event"},decls:8,vars:9,consts:[["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return i.view(i.event)}),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",2),e._uU(7),e.qZA(),e.qZA()),2&t&&(e.Tol("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===(null==i.event?null:i.event.state)?"done":null==i.event?null:i.event.type)),e.xp6(2),e.Oqu(null==i.event?null:i.event.title),e.xp6(2),e.Oqu(e.xi3(5,6,null==i.event?null:i.event.date,"shortTime")),e.xp6(3),e.AsE(" ",null==i.event?null:i.event.attendees.length," Attendee",1===(null==i.event?null:i.event.attendees.length)?"":"s"," "))},directives:[h.wG],pipes:[r.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}\n/*# sourceMappingURL=week-view-event.component.ts-angular-inline--40.css.map*/"]}),n})();function F(n,s){1&n&&e._UZ(0,"week-view-event",5),2&n&&e.Q6J("event",s.$implicit)}function Q(n,s){if(1&n&&(e.ynx(0),e.YNc(1,F,1,1,"week-view-event",4),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}function z(n,s){1&n&&(e.TgZ(0,"p",6),e._uU(1,"No events"),e.qZA())}let N=(()=>{class n{constructor(t){this._state=t,this._index=new Y.X(0),this.date=this._state.date.pipe((0,y.U)(i=>(0,f.Z)((0,w.Z)(i),this.index).valueOf())),this.events=(0,L.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,y.U)(([i,a,l])=>{const c=(0,f.Z)((0,w.Z)(a),l).valueOf(),q=(0,D.Z)(c).valueOf();return i.filter(g=>(0,u.MZ)(c,q,g.date,g.date+60*g.duration*1e3))}))}ngOnChanges(t){t.index&&this._index.next(this.index)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-day"]],inputs:{index:"index"},features:[e.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(t,i){if(1&t&&(e.TgZ(0,"header",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,Q,3,3,"ng-container",2),e.ALo(6,"async"),e.qZA(),e.YNc(7,z,2,0,"ng-template",null,3,e.W1O)),2&t){const a=e.MAs(8);let l;e.xp6(1),e.hij(" ",e.xi3(2,3,e.lcZ(3,6,i.date),"EEE, MMM d, y")," "),e.xp6(4),e.Q6J("ngIf",null==(l=e.lcZ(6,8,i.events))?null:l.length)("ngIfElse",a)}},directives:[r.O5,r.sg,E],pipes:[r.uU,r.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}\n/*# sourceMappingURL=week-view-day.component.ts-angular-inline--39.css.map*/"]}),n})();var I=o(3776),B=o(3174);function R(n,s){if(1&n&&(e.ynx(0),e._UZ(1,"week-view-day",5),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("index",t)}}function j(n,s){if(1&n&&(e.ynx(0),e.YNc(1,R,2,1,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&n){const t=s.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",0!==t&&6!==t||e.lcZ(2,1,i.options).show_weekends)}}function X(n,s){1&n&&e._UZ(0,"mat-progress-bar",6)}function S(n,s){if(1&n&&(e._UZ(0,"view-event-details",7),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}let $=(()=>{class n{constructor(t){this._state=t,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,j,3,3,"ng-container",1),e.qZA(),e.YNc(2,X,1,0,"mat-progress-bar",2),e.ALo(3,"async"),e.YNc(4,S,2,3,"view-event-details",3),e.ALo(5,"async")),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.weekdays),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,i.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,i.event)))},directives:[r.sg,r.O5,N,I.pW,B.E],pipes:[r.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}\n/*# sourceMappingURL=week-view-timeline.component.ts-angular-inline--38.css.map*/"]}),n})();const G=["app-weekview",""],K=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-weekview",""]],attrs:G,decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(t,i){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"week-view-topbar"),e._UZ(3,"week-view-timeline"),e.qZA())},directives:[k.k,J,$],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=week-view.component.ts-angular-inline--36.css.map*/"]}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,d.u5,C.v,Z.YR,T.PP,m.Bz.forChild(K)]]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map