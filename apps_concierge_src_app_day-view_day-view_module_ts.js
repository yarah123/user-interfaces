"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{6651:(pt,U,r)=>{r.r(U),r.d(U,{DayViewModule:()=>ct});var p=r(6575),h=r(8849),u=r(2649),I=r(7910),d=r(7109),e=r(9039),N=r(2349),f=r(1670),L=r(7627),w=r(3121),_=r(1433),k=r(1771),O=r(1268),T=r(162),v=r(257),M=r(9293),b=r(4888);function j(n,l){if(1&n&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function z(n,l){if(1&n&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function q(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",13),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.updateUIOptions({show_overflow:o}))}),e.ALo(1,"async"),e.TgZ(2,"div",14),e._uU(3,"Setup / Breakdown"),e.qZA()()}if(2&n){const t=e.oxw();let i;e.Q6J("ngModel",null==(i=e.lcZ(1,1,t.ui_options))?null:i.show_overflow)}}const E=()=>({class:"material-icons",content:"add"});let P=(()=>{class n extends d.cx{updateUIOptions(t){this._state.setUIOptions(t)}get allow_setup_breakdown(){return this._settings.get("app.events.allow_setup_breakdown")}constructor(t,i,o,s,a){super(),this._state=t,this._org=i,this._route=o,this._router=s,this._settings=a,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(c=>`${c.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=c=>this._state.setDate(c),this.newBooking=c=>this._state.newBooking(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")}}),this._state.setZones(c)},this.updateTypes=c=>this._state.setFilters({hide_type:this.types.reduce((g,m)=>(c.includes(m.id)||g.push(m),g),[])})}ngOnInit(){var t=this;return(0,f.Z)(function*(){yield t._org.initialised.pipe((0,L.P)(i=>i)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(i=>{if(i.has("zone_ids")){const o=i.get("zone_ids").split(",");if(o.length){t.zones=o;const s=t._org.levelWithID(o);if(!s)return;t._org.building=t._org.buildings.find(a=>a.id===s.parent_id)}}})),t.subscription("levels",t._org.active_levels.subscribe(i=>{t.zones=t.zones.filter(o=>i.find(s=>s.id===o)),!t.zones.length&&i.length&&t.zones.push(i[0].id),t.updateZones(t.zones)})),t.updateTypes(t.type_list)})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.Y),e.Y36(w.w7),e.Y36(u.gz),e.Y36(u.F0),e.Y36(d.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-topbar"]],features:[e.qOj],decls:18,vars:9,consts:[[1,"flex","items-center","px-4","h-20","bg-base-100","border-b","border-base-200"],["btn","","matRipple","","new","",1,"w-12","xl:w-auto","overflow-hidden",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],["class","m-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(2,"div",2),e._UZ(3,"app-icon",3),e.TgZ(4,"div",4),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",5)(7,"mat-select",6),e.NdJ("ngModelChange",function(a){return o.zones=a})("ngModelChange",function(a){return o.updateZones(a)}),e.YNc(8,j,2,2,"mat-option",7),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-form-field",5)(11,"mat-select",8),e.NdJ("ngModelChange",function(a){return o.type_list=a})("ngModelChange",function(a){return o.updateTypes(a)}),e.TgZ(12,"mat-select-trigger"),e._uU(13,"Legend"),e.qZA(),e.YNc(14,z,2,2,"mat-option",7),e.qZA()(),e.YNc(15,q,4,3,"mat-slide-toggle",9),e._UZ(16,"div",10),e.TgZ(17,"date-options",11),e.NdJ("dateChange",function(a){return o.setDate(a)}),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("icon",e.DdM(8,E)),e.xp6(4),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,6,o.levels)),e.xp6(3),e.Q6J("ngModel",o.type_list),e.xp6(3),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngIf",o.allow_setup_breakdown))},dependencies:[p.sg,p.O5,h.JJ,h.On,k.E,O.KE,T.gD,T.$L,v.ey,M.Rr,v.wG,b.o,p.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:initial;line-height:1.2em}\n\n/*# sourceMappingURL=dayview-topbar.component.ts-angular-inline--56.css.map*/"]})}return n})();var C=r(7298),$=r(9681),J=r(8159),S=r(5046),G=r(6520),H=r(8175),x=r(7422),F=r(680),R=r(7049),K=r(670),X=r(8173),y=r(4884),V=r(8415),D=r(7016),B=r(9737),A=r(9916);function W(n,l){if(1&n&&e._UZ(0,"div"),2&n){const t=e.oxw();e.Tol("overflow-block absolute rounded overflow-hidden w-full "+t.type),e.Udp("top",100*t.overflow_top+"%")("height",100*t.overflow_height+"%")}}function ee(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"title"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.event.title," ")}}function te(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"schedule"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.time," ")}}function ne(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"people"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",t.event.attendees.length," Attendee",1===t.event.attendees.length?"":"s"," ")}}function oe(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.view(o.event))}),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.YNc(3,ee,4,1,"div",5)(4,te,4,1,"div",5)(5,ne,4,2,"div",5),e.qZA()}if(2&n){const t=e.oxw();e.Tol("absolute rounded overflow-hidden text-sm border border-base-200 shadow-sm z-10 hover:z-30 "+t.type),e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(2),e.Oqu(null==t.event.organiser?null:t.event.organiser.name),e.xp6(1),e.Q6J("ngIf",t.event.duration>30),e.xp6(1),e.Q6J("ngIf",t.event.duration>60),e.xp6(1),e.Q6J("ngIf",t.event.duration>90)}}function ie(n,l){if(1&n&&(e.TgZ(0,"div",8)(1,"div")(2,"app-icon"),e._uU(3),e.qZA()(),e.TgZ(4,"div",9),e._uU(5),e.ALo(6,"date"),e.qZA()()),2&n){const t=e.oxw();e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(1),e.Tol("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending "+t.event.ext("cleaning_status")),e.xp6(2),e.Oqu("done"===t.event.ext("cleaning_status")?"done":"warning"),e.xp6(2),e.AsE(" ","done"===t.event.ext("cleaning_status")?"Finished":"Scheduled to"," clean at ",e.xi3(6,9,t.event.ext("cleaning_time")||1e3*t.event.event_end,t.time_format)," ")}}const Z=1440;let se=(()=>{class n{get time(){const t=new Date(this.event.date);return(0,y.Z)(t,this.time_format)+" - "+(0,y.Z)((0,V.Z)(t,this.event.duration),this.time_format)}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}get time_format(){return this._settings.time_format}constructor(t,i){this._state=t,this._settings=i,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=o=>this._state.setEvent(o)}ngOnChanges(t){if(t.event&&this.event){const i=(0,D.Z)(new Date(this.event.date)),o=(0,B.Z)(new Date(this.event.date),i);this.top=o/Z,this.height=this.event.duration/Z,this.overflow_top=(o-(this.event.setup_time||0))/Z,this.overflow_height=(this.event.duration+(this.event.setup_time||0)+(this.event.breakdown_time||0))/Z}}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.Y),e.Y36(d.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-event"]],inputs:{event:"event"},features:[e.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["event","","matRipple","",3,"class","top","height","click",4,"ngIf"],["cleaning","","class","absolute rounded overflow-hidden flex w-full shadow p-2 bg-base-100 z-20 hover:!h-48",3,"top","height",4,"ngIf"],["event","","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],["cleaning","",1,"absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2","bg-base-100","z-20","hover:!h-48"],[1,"flex-1","w-1/2"]],template:function(i,o){if(1&i&&(e.YNc(0,W,1,6,"div",0),e.ALo(1,"async"),e.YNc(2,oe,6,10,"div",1)(3,ie,7,12,"div",2),e.ALo(4,"async")),2&i){let s,a;e.Q6J("ngIf",null==(s=e.lcZ(1,3,o.ui_options))?null:s.show_overflow),e.xp6(2),e.Q6J("ngIf",o.event),e.xp6(1),e.Q6J("ngIf",o.event&&(null==(a=e.lcZ(4,5,o.ui_options))?null:a.show_cleaning))}},dependencies:[p.O5,v.wG,b.o,p.Ov,p.uU],styles:["[event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f!important;cursor:pointer}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}\n\n/*# sourceMappingURL=dayview-event.component.ts-angular-inline--59.css.map*/"]})}return n})();function le(n,l){1&n&&e._UZ(0,"dayview-event",2),2&n&&e.Q6J("event",l.$implicit)}function ae(n,l){if(1&n&&(e.ynx(0),e.YNc(1,le,1,1,"dayview-event",1),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}let re=(()=>{class n extends d.cx{constructor(t){super(),this._state=t,this.events=this._state.filtered.pipe((0,x.U)(i=>i.filter(o=>o.resources.find(s=>this.space.email===s.email))))}ngOnInit(){this.subscription("events",this._state.filtered.subscribe())}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.Y))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-space"]],inputs:{space:"space"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(i,o){1&i&&e.YNc(0,ae,3,3,"ng-container",0),2&i&&e.Q6J("ngIf",o.space)},dependencies:[p.sg,p.O5,se,p.Ov],styles:["[_nghost-%COMP%]{position:relative}\n\n/*# sourceMappingURL=dayview-space.component.ts-angular-inline--58.css.map*/"]})}return n})();function ce(n,l){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16),e._uU(2),e.qZA(),e._UZ(3,"div",17),e.qZA()),2&n){const t=l.$implicit,i=e.oxw();e.Udp("transform","translateY(-"+i.scroll.y+"px)"),e.xp6(2),e.hij(" ",t," ")}}function pe(n,l){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"div",19),e.TgZ(2,"div",20),e._uU(3),e.qZA()()),2&n){const t=l.$implicit,i=e.oxw();e.Udp("transform","translateX(-"+i.scroll.x+"px)"),e.xp6(3),e.hij(" ",t.display_name||t.name," ")}}function de(n,l){1&n&&e._UZ(0,"dayview-space",21),2&n&&e.Q6J("space",l.$implicit)}function ge(n,l){if(1&n&&(e._UZ(0,"div",22),e.ALo(1,"async")),2&n){const t=l.index,i=e.oxw();let o;e.Udp("width",12*(null==(o=e.lcZ(1,4,i.space_list))?null:o.length)+"rem")("top",4*t+"rem")}}function me(n,l){1&n&&e._UZ(0,"mat-progress-bar",23)}function _e(n,l){if(1&n&&(e._UZ(0,"view-event-details",24),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}const ue=new Array(24).fill(0).map((n,l)=>(l%12==0?12:l%12)+(l>=12?" PM":" AM"));let fe=(()=>{class n extends d.cx{constructor(t,i){super(),this._org=t,this._state=i,this.blocks=ue,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.spaces=this._org.active_building.pipe((0,S.h)(o=>!!o),(0,G.w)(({id:o})=>(0,C.vIL)({zone_id:o,limit:1e3}).pipe((0,H.K)(()=>(0,$.of)({data:[]})))),(0,x.U)(({data:o})=>o.map(s=>new R.T({...s,level:this._org.levelWithID(s.zones)}))),(0,F.d)(1)),this.space_list=(0,J.aj)([this.spaces,this._state.zones]).pipe((0,x.U)(([o,s])=>o.filter(a=>!s?.length||a.zones.find(c=>s.includes(c)))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(t){requestAnimationFrame(()=>this.scroll={x:t.srcElement.scrollLeft,y:t.srcElement.scrollTop})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(w.w7),e.Y36(_.Y))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-timeline"]],features:[e.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg-base-100","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg-base-100","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-base-300 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-base-300"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-base-300","border-opacity-50","bg-base-100","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem] h-[96rem] border-r border-base-300",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-base-300 h-px min-w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-base-300","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-base-300"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-base-300"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]","h-[96rem]","border-r","border-base-300",3,"space"],[1,"absolute","bg-base-300","h-px","min-w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA(),e.YNc(4,ce,4,3,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7),e.YNc(8,pe,4,3,"div",8),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",9,10),e.NdJ("scroll",function(a){return o.onScroll(a)}),e.YNc(12,de,1,1,"dayview-space",11),e.ALo(13,"async"),e.YNc(14,ge,2,6,"div",12),e.qZA()(),e.YNc(15,me,1,0,"mat-progress-bar",13),e.ALo(16,"async"),e.YNc(17,_e,2,3,"view-event-details",14),e.ALo(18,"async"),e.qZA()),2&i&&(e.xp6(4),e.Q6J("ngForOf",o.blocks),e.xp6(4),e.Q6J("ngForOf",e.lcZ(9,6,o.space_list)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(13,8,o.space_list)),e.xp6(2),e.Q6J("ngForOf",o.blocks),e.xp6(1),e.Q6J("ngIf",e.lcZ(16,10,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(18,12,o.event)))},dependencies:[p.sg,p.O5,K.E,X.pW,re,p.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}[change-transform][_ngcontent-%COMP%]{will-change:transform}\n\n/*# sourceMappingURL=dayview-timeline.component.ts-angular-inline--57.css.map*/"]})}return n})();const ve=["app-dayview",""];let he=(()=>{class n{get links(){return this._settings.get("app.general.menu")||[]}constructor(t,i){this._settings=t,this._router=i}ngOnInit(){this.links.find(t=>t.route.includes("day-view"))||this._router.navigate([`/${this.links[0].route}`])}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.gb),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-dayview",""]],attrs:ve,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full","bg-base-200"]],template:function(i,o){1&i&&(e._UZ(0,"sidebar",0),e.TgZ(1,"main",1),e._UZ(2,"dayview-topbar")(3,"dayview-timeline"),e.qZA())},dependencies:[N.k,P,fe],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=day-view.component.ts-angular-inline--55.css.map*/"]})}return n})();var xe=r(8377),ye=r(1311),we=r(3005),be=r(9842),Ze=r(6939),Te=r(6658),Q=r(8128),Ce=r(5702),Ae=r(8139),Ue=r(4562),ke=r(7401);const Oe=["scroll_container"];function Me(n,l){1&n&&(e.TgZ(0,"div",24),e._uU(1," Today "),e.qZA())}function Je(n,l){if(1&n&&(e.TgZ(0,"div",25),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Fe(n,l){if(1&n&&(e.TgZ(0,"div",26),e._UZ(1,"div",27),e.TgZ(2,"div",28),e._uU(3),e.qZA()()),2&n){const t=l.$implicit,i=e.oxw();e.xp6(3),e.hij(" ",i.formatHour(t)," ")}}function Re(n,l){if(1&n&&e._UZ(0,"div",29),2&n){const t=e.oxw();e.Udp("top",t.timeToOffset(t.now)+"px")}}function De(n,l){1&n&&e._UZ(0,"div",30)}function Be(n,l){1&n&&e._UZ(0,"div",31)}function Qe(n,l){if(1&n&&(e.TgZ(0,"div",32),e._UZ(1,"div",33),e.qZA()),2&n){const t=e.oxw();e.Udp("top",t.timeToOffset(t.now)-t.offset_y-(48-t.offset_y%48)+48+"px")}}function Ye(n,l){1&n&&(e.ynx(0),e._UZ(1,"div",38),e.BQk())}function Ie(n,l){if(1&n&&(e.ynx(0),e._UZ(1,"div",39),e.TgZ(2,"p",40),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"p",40),e._uU(6),e.qZA(),e.BQk()),2&n){const t=e.oxw(2).$implicit,i=e.oxw(2);e.xp6(1),e.ekj("bg-secondary","cancelled"!==t.status)("bg-error","cancelled"===t.status),e.xp6(1),e.ekj("opacity-60","cancelled"===t.status),e.xp6(1),e.AsE(" ",t.all_day?"All Day":e.xi3(4,11,t.date,i.time_format)," \u2013 ",(null==t.organiser?null:t.organiser.name)||t.hjost," "),e.xp6(2),e.ekj("opacity-60","cancelled"===t.status),e.xp6(1),e.hij(" ",t.title," ")}}function Ne(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",35),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw().$implicit,a=e.oxw();return e.KtG(a.viewEvent(o,s.id))}),e.TgZ(1,"div",36),e.YNc(2,Ye,2,0,"ng-container",37)(3,Ie,7,14,"ng-container",37),e.qZA()()}if(2&n){const t=e.oxw().$implicit,i=e.oxw().index,o=e.oxw();e.Udp("left",14*i+.125+"rem")("top",o.timeToOffset(t.date)+"px")("height",o.endToOffset(t.duration)+"px"),e.ekj("pointer-events-none",t.is_system_event),e.xp6(1),e.ekj("opacity-60","done"===t.state)("!rounded-none",t.is_system_event)("!border-secondary",t.is_system_event),e.xp6(1),e.Q6J("ngIf",t.is_system_event),e.xp6(1),e.Q6J("ngIf",!t.is_system_event)}}function Le(n,l){if(1&n&&(e.ynx(0),e.YNc(1,Ne,4,16,"div",34),e.ALo(2,"async"),e.BQk()),2&n){const t=l.$implicit,i=e.oxw(2);let o;e.xp6(1),e.Q6J("ngIf",!t.is_system_event||(null==(o=e.lcZ(2,1,i.ui_options))?null:o.show_overflow))}}const je=()=>[];function ze(n,l){if(1&n&&(e.ynx(0),e.YNc(1,Le,3,3,"ng-container",23),e.ALo(2,"async"),e.BQk()),2&n){const t=l.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,i.events)[t.id]||e.DdM(3,je))}}let qe=(()=>{class n extends d.cx{get now(){return(0,Ce.Z)(Date.now()).valueOf()}get time_format(){return this._settings.time_format}constructor(t,i,o){super(),this._state=t,this._dialog=i,this._settings=o,this.offset_x=0,this.offset_y=0,this.w_slots=[],this.h_slots=[],this.hours=Array.from({length:24},(s,a)=>a),this.ui_options=this._state.options,this.spaces=this._state.spaces,this.date=this._state.date,this.is_today=this.date.pipe((0,x.U)(s=>(0,Ae.Z)(s,Date.now()))),this.events=(0,J.aj)([this._state.spaces,this._state.filtered]).pipe((0,x.U)(([s,a])=>{const c={};for(const g of s)c[g.id]=a.filter(m=>m.resources.find(Y=>Y.id===g.id||Y.email===g.email)||m.system?.id===g.id||m.system?.email===g.email);return c}),(0,F.d)(1)),this.edit=s=>this._state.newBooking(s),this.setDate=s=>this._state.setDate(s)}formatHour(t){const i=(0,Ue.Z)(Date.now(),t);return this._settings.get("app.use_24_hour_time")?(0,y.Z)(i,"HH:00"):(0,y.Z)(i,"h a")}ngOnInit(){this.subscription("poll",this._state.startPolling()),this.interval("scroll",()=>this.onScroll(),1e3),Date.now(),this.onResize()}timeToOffset(t){const i=(0,B.Z)(t,(0,D.Z)(t));return 48*Math.max(0,i/60)}endToOffset(t){return 48*Math.min(24,t/60)}onResize(){const t=Math.floor(window.innerWidth/224)+1,i=Math.floor(window.innerHeight/48);this.w_slots=Array.from({length:t},(o,s)=>s),this.h_slots=Array.from({length:i},(o,s)=>s)}onScroll(){this.offset_x=this._scroll_container.nativeElement.scrollLeft,this.offset_y=this._scroll_container.nativeElement.scrollTop}viewEvent(t,i){var o=this;if(t.is_system_event)return;const s=this._dialog.open(A.$o,{data:t});s.componentInstance.hide_edit=!0,this.subscription("remove",s.componentInstance.remove.subscribe(()=>this.remove(t,i))),this.subscription("actions",s.componentInstance.action.subscribe(function(){var a=(0,f.Z)(function*(c){if(!c.includes("breakdown"))return;const m=yield o._dialog.open(A.R2,{data:t}).afterClosed().toPromise();m&&o._state.replace(m)});return function(c){return a.apply(this,arguments)}}()))}remove(t,i){var o=this;return(0,f.Z)(function*(){const s=`${(0,y.Z)(t.date,"dd MMM yyyy "+o.time_format)}`,c=`Delete the booking for ${t.space?.display_name} at ${s}`,g=yield(0,d._5)({title:"Delete booking",content:c,icon:{content:"delete"}},o._dialog);"done"===g.reason&&(g.loading("Requesting booking deletion..."),yield(0,A.XF)(t.id,{calendar:t.calendar||t.mailbox||t.host,system_id:i}).toPromise().catch(m=>{throw(0,d.cB)(`Unable to delete booking. ${m}`),g.close(),m}),(0,d.t5)("Successfully deleted booking."),o._dialog.closeAll())})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.Y),e.Y36(ke.uw),e.Y36(d.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings-timeline"]],viewQuery:function(i,o){if(1&i&&e.Gf(Oe,7),2&i){let s;e.iGM(s=e.CRH())&&(o._scroll_container=s.first)}},features:[e.qOj],decls:34,vars:42,consts:[[1,"relative","flex","items-center","justify-center","p-2","space-x-2","border-b","border-base-200"],[3,"date","is_new","dateChange"],["class","absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm",4,"ngIf"],[1,"flex","flex-col","w-full","flex-1","overflow-hidden",3,"resize"],["header","",1,"flex","items-center","w-full","h-16"],["times","",1,"w-16","h-full","flex","flex-col","items-center","justify-end","text-xs","pb-2","opacity-60"],["spaces","",1,"relative","flex-1","h-full","overflow-hidden","border-r","border-base-200"],[1,"flex","absolute","inset-y-0"],["class","flex flex-col items-center justify-center h-full w-56",4,"ngFor","ngForOf"],["content","",1,"flex","w-full","flex-1","h-px"],["times","",1,"relative","w-16","h-full","overflow-y-hidden","overflow-x-visible","border-r","border-base-200"],[1,"absolute","inset-x-0"],["class","relative block h-12",4,"ngFor","ngForOf"],["class","absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full z-30",3,"top",4,"ngIf"],["spaces","",1,"relative","flex-1","h-full","overflow-hidden","w-px"],[1,"absolute","top-0","flex","h-full","pointer-events-none"],["class","w-56 h-full border-r border-base-200",4,"ngFor","ngForOf"],[1,"absolute","left-0","w-full","pointer-events-none"],["class","h-12 w-full border-t border-base-200",4,"ngFor","ngForOf"],["class","absolute inset-x-0 -translate-y-px h-0.5 bg-secondary z-30",3,"top",4,"ngIf"],[1,"relative","w-full","h-full","overflow-auto","z-10",3,"scroll"],["scroll_container",""],[1,"overflow-hidden","relative"],[4,"ngFor","ngForOf"],[1,"absolute","top-1/2","-translate-y-1/2","left-4","text-info","text-sm"],[1,"flex","flex-col","items-center","justify-center","h-full","w-56"],[1,"relative","block","h-12"],[1,"absolute","top-0","right-0","w-2","h-px","bg-base-200"],[1,"absolute","top-0","right-3","-translate-y-1/2","text-xs","opacity-60"],[1,"absolute","bg-secondary","right-0","translate-x-1/2","-translate-y-1/2","h-2","w-2","rounded-full","z-30"],[1,"w-56","h-full","border-r","border-base-200"],[1,"h-12","w-full","border-t","border-base-200"],[1,"absolute","inset-x-0","-translate-y-px","h-0.5","bg-secondary","z-30"],[1,"absolute","bg-secondary","top-1/2","left-0","-translate-x-1/2","-translate-y-1/2","h-2","w-2","rounded-full"],["event","","class","absolute w-[13.625rem] hover:opacity-90",3,"left","top","height","pointer-events-none","click",4,"ngIf"],["event","",1,"absolute","w-[13.625rem]","hover:opacity-90",3,"click"],[1,"relative","w-full","h-full","shadow","bg-base-100","border","border-base-200","hover:bg-base-200","rounded-lg","overflow-hidden","px-3","py-1","text-xs"],[4,"ngIf"],[1,"absolute","inset-0","bg-secondary","opacity-50"],[1,"absolute","left-0","inset-y-0","w-1"],[1,"truncate"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0)(1,"date-options",1),e.NdJ("dateChange",function(a){return o.setDate(a)}),e.ALo(2,"async"),e.qZA(),e.YNc(3,Me,2,0,"div",2),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",3),e.NdJ("resize",function(){return o.onResize()},!1,e.Jf7),e.TgZ(6,"div",4)(7,"div",5),e._uU(8),e.ALo(9,"date"),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"div",6)(12,"div",7),e.YNc(13,Je,2,1,"div",8),e.ALo(14,"async"),e.qZA()()(),e.TgZ(15,"div",9)(16,"div",10)(17,"div",11),e.YNc(18,Fe,4,1,"div",12)(19,Re,1,2,"div",13),e.ALo(20,"async"),e.qZA()(),e.TgZ(21,"div",14)(22,"div",15),e.YNc(23,De,1,0,"div",16),e.qZA(),e.TgZ(24,"div",17),e.YNc(25,Be,1,0,"div",18)(26,Qe,2,2,"div",19),e.ALo(27,"async"),e.qZA(),e.TgZ(28,"div",20,21),e.NdJ("scroll",function(){return o.onScroll()}),e.TgZ(30,"div",22),e.ALo(31,"async"),e.YNc(32,ze,3,4,"ng-container",23),e.ALo(33,"async"),e.qZA()()()()()),2&i){let s;e.xp6(1),e.Q6J("date",e.lcZ(2,23,o.date))("is_new",!0),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,25,o.is_today)),e.xp6(5),e.hij(" ",e.xi3(9,27,e.lcZ(10,30,o.date),"z")," "),e.xp6(4),e.Udp("left",-o.offset_x+"px"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(14,32,o.spaces)),e.xp6(4),e.Udp("top",-o.offset_y+"px"),e.xp6(1),e.Q6J("ngForOf",o.hours),e.xp6(1),e.Q6J("ngIf",e.lcZ(20,34,o.is_today)),e.xp6(3),e.Udp("left",-o.offset_x%224+"px"),e.xp6(1),e.Q6J("ngForOf",o.w_slots),e.xp6(1),e.Udp("top",-o.offset_y%48+"px"),e.xp6(1),e.Q6J("ngForOf",o.h_slots),e.xp6(1),e.Q6J("ngIf",e.lcZ(27,36,o.is_today)),e.xp6(4),e.Udp("height","72rem")("width",14*(null==(s=e.lcZ(31,38,o.spaces))?null:s.length)+"rem"),e.xp6(2),e.Q6J("ngForOf",e.lcZ(33,40,o.spaces))}},dependencies:[p.sg,p.O5,k.E,p.Ov,p.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n\n/*# sourceMappingURL=room-timeline.component.ts-angular-inline--70.css.map*/"]})}return n})();var Ee=r(3910),Pe=r(8075),$e=r(942);function Se(n,l){1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.TgZ(2,"p"),e._uU(3,"No pending requests"),e.qZA()())}function Ge(n,l){if(1&n&&(e._UZ(0,"img",25),e.ALo(1,"async"),e.ALo(2,"space")),2&n){const t=e.oxw().$implicit;let i;e.Q6J("source",null==(i=e.lcZ(1,1,e.lcZ(2,3,null==t.resources[0]?null:t.resources[0].email)))?null:i.images[0])}}function He(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",12)(1,"h3"),e._uU(2),e.qZA(),e.TgZ(3,"p",13),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",14),e.YNc(7,Ge,3,5,"img",15),e.qZA(),e.TgZ(8,"div",16)(9,"div",17)(10,"app-icon",18),e._uU(11,"place"),e.qZA()(),e.TgZ(12,"div",19),e._uU(13),e.ALo(14,"async"),e.ALo(15,"space"),e.ALo(16,"async"),e.ALo(17,"space"),e.qZA()(),e.TgZ(18,"div",16)(19,"div",17)(20,"app-icon",18),e._uU(21,"person"),e.qZA()(),e.TgZ(22,"div",19),e._uU(23),e.qZA()(),e.TgZ(24,"div",20)(25,"button",21),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.approve(s))}),e.TgZ(26,"div"),e._uU(27),e.qZA(),e.TgZ(28,"app-icon",22),e._uU(29,"done"),e.qZA()(),e.TgZ(30,"button",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.reject(s))}),e.TgZ(31,"div"),e._uU(32),e.qZA(),e.TgZ(33,"app-icon",24),e._uU(34,"close"),e.qZA()()()()}if(2&n){const t=l.$implicit,i=e.oxw();let o;e.xp6(2),e.Oqu(t.title),e.xp6(2),e.hij(" ",e.xi3(5,9,t.date,"medium")," "),e.xp6(3),e.Q6J("ngIf",t.resources.length),e.xp6(6),e.hij(" ",(null==(o=t.resources.length&&e.lcZ(14,12,e.lcZ(15,14,null==t.resources[0]?null:t.resources[0].email)))?null:o.display_name)||(null==(o=e.lcZ(16,16,e.lcZ(17,18,null==t.resources[0]?null:t.resources[0].email)))?null:o.name)||"No Location"," "),e.xp6(10),e.hij(" ",(null==t.organiser?null:t.organiser.name)||t.host," "),e.xp6(2),e.Q6J("disabled","accept"===i.status[t.id]),e.xp6(2),e.hij(" ","accept"===i.status[t.id]?"Approved":"Approve"," "),e.xp6(3),e.Q6J("disabled","decline"===i.status[t.id]),e.xp6(2),e.hij(" ","decline"===i.status[t.id]?"Declined":"Decline"," ")}}function Ke(n,l){1&n&&(e.TgZ(0,"div",26),e._UZ(1,"div",27)(2,"mat-spinner",28),e.TgZ(3,"p",29),e._uU(4,"Processing..."),e.qZA()())}function Xe(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.show=!o.show)}),e.TgZ(1,"app-icon"),e._uU(2,"chevron_left"),e.qZA()()}}let Ve=(()=>{class n{constructor(t,i){this._state=t,this._org=i,this.show=!0,this.loading=!1,this.status={},this.pending=this._state.pending}approve(t){var i=this;return(0,f.Z)(function*(){const o=i._org.binding("approvals");if(!o)return;const s=(0,C.rTZ)(o,"RoomBookingApproval",1);s&&(i.loading=!0,yield s.execute("accept_event",[t.mailbox,t.id]).catch(),i.loading=!1,i.status[t.id]="accept")})()}reject(t){var i=this;return(0,f.Z)(function*(){const o=i._org.binding("approvals");if(!o)return;const s=(0,C.rTZ)(o,"RoomBookingApproval",1);s&&(i.loading=!0,yield s.execute("decline_event",[t.mailbox,t.id]).catch(),i.loading=!1,i.status[t.id]="decline")})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.Y),e.Y36(w.w7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings-approvals"]],decls:18,vars:13,consts:[[1,"flex","flex-col","h-full","overflow-hidden","border-l","border-base-200"],[1,"flex","items-center","p-2","border-b","border-base-200","space-x-2"],["btn","","icon","","matRipple","",1,"bg-base-200",3,"click"],[1,"flex-1"],["btn","","icon","","matRipple",""],[1,"flex-1","overflow-auto","p-2","space-y-2"],["class","w-full h-full flex flex-col items-center justify-center space-y-2",4,"ngIf"],["class","relative border border-base-200 p-2 w-full rounded",4,"ngFor","ngForOf"],["class","absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center space-y-2",4,"ngIf"],["btn","","icon","","matRipple","","class","bg-warning absolute top-2 -left-8 shadow text-warning-content",3,"click",4,"ngIf"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2"],["src","assets/icons/no-pending.svg"],[1,"relative","border","border-base-200","p-2","w-full","rounded"],[1,"opacity-30","text-xs","mb-2"],[1,"w-64","h-32","overflow-hidden","mb-2","bg-base-200"],["auth","","class","object-cover min-w-full min-h-full",3,"source",4,"ngIf"],[1,"flex","items-center","space-x-2","mb-2"],[1,"h-8","w-8","bg-base-200","rounded-full","flex","items-center","justify-center"],[1,"text-xl"],[1,"flex-1","text-xs"],[1,"flex","items-center","space-x-2"],["btn","","matRipple","",1,"border-success","bg-success-light","text-black","flex","flex-1","items-center","space-x-2",3,"disabled","click"],[1,"text-success"],["btn","","matRipple","",1,"border-error","bg-error-light","text-black","flex","flex-1","items-center","space-x-2",3,"disabled","click"],[1,"text-error"],["auth","",1,"object-cover","min-w-full","min-h-full",3,"source"],[1,"absolute","bottom-0","left-0","right-0","top-14","p-2","flex","flex-col","items-center","justify-center","space-y-2"],[1,"absolute","inset-0","bg-base-100","opacity-80","z-0"],["diameter","32"],[1,"relative","z-10"],["btn","","icon","","matRipple","",1,"bg-warning","absolute","top-2","-left-8","shadow","text-warning-content",3,"click"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.show=!o.show}),e.TgZ(3,"app-icon"),e._uU(4,"chevron_right"),e.qZA()(),e.TgZ(5,"h3",3),e._uU(6),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",4)(9,"app-icon"),e._uU(10,"search"),e.qZA()()(),e.TgZ(11,"div",5),e.YNc(12,Se,4,0,"div",6),e.ALo(13,"async"),e.YNc(14,He,35,20,"div",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,Ke,5,0,"div",8),e.qZA(),e.YNc(17,Xe,3,0,"button",9)),2&i){let s,a;e.Udp("width",o.show?"":"0px"),e.xp6(6),e.hij(" Pending Approval (",(null==(s=e.lcZ(7,7,o.pending))?null:s.length)||"0",") "),e.xp6(6),e.Q6J("ngIf",!(null!=(a=e.lcZ(13,9,o.pending))&&a.length)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(15,11,o.pending)),e.xp6(2),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.show)}},dependencies:[p.sg,p.O5,Ee.Ou,v.wG,b.o,Pe.A,p.Ov,p.uU,$e.X],styles:["[_nghost-%COMP%]{display:block;position:relative;height:100%}\n\n/*# sourceMappingURL=room-approvals.component.ts-angular-inline--71.css.map*/"]})}return n})();function We(n,l){if(1&n&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function et(n,l){if(1&n){const t=e.EpF();e.ynx(0),e._UZ(1,"div",9),e.TgZ(2,"mat-slide-toggle",21),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.updateUIOptions({show_overflow:o}))}),e.ALo(3,"async"),e.TgZ(4,"div",22),e._uU(5,"Setup / Breakdown"),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw();let i;e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(3,1,t.ui_options))?null:i.show_overflow)}}function tt(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"mat-checkbox",23),e.NdJ("ngModelChange",function(o){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.setFilter(a.id,!o))}),e._uU(1),e.qZA()}if(2&n){const t=l.$implicit,i=e.oxw();e.Q6J("ngModel",!i.type_list.includes(t.id)),e.xp6(1),e.hij(" ",t.name," ")}}function nt(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",25),e._UZ(1,"div",26),e.TgZ(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setFilter(o.id,!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Udp("background-color",t.color),e.xp6(2),e.Oqu(t.name)}}function ot(n,l){if(1&n&&(e.ynx(0),e.YNc(1,nt,7,3,"div",24),e.BQk()),2&n){const t=l.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",!i.type_list.includes(t.id))}}function it(n,l){1&n&&e._UZ(0,"room-bookings-approvals")}const st=[];let lt=(()=>{class n extends d.cx{get type_list(){return this._state.filters.hide_type||st}get has_approvals(){return this._org.binding("approvals")}get allow_setup_breakdown(){return this._settings.get("app.events.allow_setup_breakdown")}constructor(t,i,o,s,a){super(),this._org=t,this._state=i,this._router=o,this._route=s,this._settings=a,this.zones=this._state.zones,this.ui_options=this._state.options,this.levels=this._org.active_levels,this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")}}),this._state.setZones(c)},this.updateUIOptions=c=>this._state.setUIOptions(c),this.newBooking=c=>this._state.newBooking(c),this.types=[{id:"internal",name:"Internal",color:"#D81B60"},{id:"external",name:"External",color:"#1E88E5"},{id:"cancelled",name:"Cancelled",color:"#eeeeee"}]}ngOnInit(){var t=this;this.subscription("route.query",this._route.queryParamMap.subscribe(i=>{if(i.has("zone_ids")){const o=i.get("zone_ids").split(",");if(o.length){const s=this._org.levelWithID(o);if(!s)return;this._org.building=this._org.buildings.find(a=>a.id===s.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(function(){var i=(0,f.Z)(function*(o){const s=(yield t.zones.pipe((0,Ze.q)(1)).toPromise()).filter(a=>o.find(c=>c.id===a));!s.length&&o.length&&s.push(o[0].id),t.updateZones(s)});return function(o){return i.apply(this,arguments)}}()))}setFilter(t,i){let s=this._state.filters.hide_type||[];s=s.filter(a=>a!==t),i&&s.push(t),this._state.setFilters({hide_type:s})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(w.w7),e.Y36(_.Y),e.Y36(u.F0),e.Y36(u.gz),e.Y36(d.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings"]],features:[e.qOj],decls:31,vars:11,consts:[[1,"absolute","inset-0","flex","flex-col","overflow-hidden","pl-8"],[1,"flex","items-center","justify-between","w-full","py-4","pr-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"w-full","flex","items-center"],["appearance","outline",1,"h-[3.5rem]"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"border-l","h-full","ml-8","mr-4"],[1,"flex","items-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"matMenuTriggerFor"],[1,"mx-2"],[1,""],["menu","matMenu"],[1,"flex","flex-col","space-y-2","overflow-hidden","w-48"],[3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"flex","w-full","flex-1","h-px","border-t","mt-4","border-base-200"],[1,"flex-1"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[3,"ngModel","ngModelChange"],["class","flex items-center border border-base-200 rounded-3xl",4,"ngIf"],[1,"flex","items-center","border","border-base-200","rounded-3xl"],[1,"h-4","w-4","m-2","rounded-full"],["icon","","matRipple","",3,"click"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Room Bookings"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(5,"div"),e._uU(6,"New Booking"),e.qZA(),e.TgZ(7,"app-icon"),e._uU(8,"add"),e.qZA()()(),e.TgZ(9,"div",4)(10,"mat-form-field",5)(11,"mat-select",6),e.NdJ("ngModelChange",function(a){return o.updateZones(a)}),e.ALo(12,"async"),e.YNc(13,We,2,2,"mat-option",7),e.ALo(14,"async"),e.qZA()(),e.YNc(15,et,6,3,"ng-container",8),e._UZ(16,"div",9),e.TgZ(17,"div",10)(18,"button",11)(19,"app-icon"),e._uU(20,"filter_list"),e.qZA(),e.TgZ(21,"div",12),e._uU(22,"Filters"),e.qZA()(),e.TgZ(23,"mat-menu",13,14)(25,"div",15),e.YNc(26,tt,2,2,"mat-checkbox",16),e.qZA()(),e.YNc(27,ot,2,1,"ng-container",17),e.qZA()(),e.TgZ(28,"div",18),e._UZ(29,"room-bookings-timeline",19),e.YNc(30,it,1,0,"room-bookings-approvals",8),e.qZA()()),2&i){const s=e.MAs(24);e.xp6(11),e.Q6J("ngModel",e.lcZ(12,7,o.zones)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,9,o.levels)),e.xp6(2),e.Q6J("ngIf",o.allow_setup_breakdown),e.xp6(3),e.Q6J("matMenuTriggerFor",s),e.xp6(8),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngForOf",o.types),e.xp6(3),e.Q6J("ngIf",o.has_approvals)}},dependencies:[p.sg,p.O5,h.JJ,h.On,O.KE,T.gD,v.ey,Te.oG,M.Rr,Q.VK,Q.p6,v.wG,b.o,qe,Ve,p.Ov]})}return n})();const at=["app-new-dayview",""],rt=[{path:"",component:he},{path:"new",component:(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-new-dayview",""]],attrs:at,decls:5,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"relative","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(i,o){1&i&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1),e._UZ(4,"room-bookings"),e.qZA()())},dependencies:[we.O,be.u,lt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-dayview.component.ts-angular-inline--72.css.map*/"]})}return n})()}];let ct=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.ez,h.u5,I.v,R.YR,xe.PP,ye.uy,u.Bz.forChild(rt)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map