"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{596:(ye,f,a)=>{a.r(f),a.d(f,{DayViewModule:()=>fe});var c=a(4666),h=a(2508),p=a(9885),b=a(2656),d=a(9112),e=a(2560),D=a(4945),M=a(1670),O=a(5670),y=a(3619),v=a(3194),U=a(8441),A=a(4522),J=a(5074),w=a(7371),_=a(207),Y=a(4714),x=a(5306);function F(n,i){if(1&n&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function I(n,i){if(1&n&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}const N=function(){return{class:"material-icons",content:"add"}};let Q=(()=>{class n extends d.KG{constructor(t,o,s,l){super(),this._state=t,this._org=o,this._route=s,this._router=l,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(r=>`${r.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=r=>this._state.setDate(r),this.newBooking=r=>this._state.newBooking(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setZones(r)},this.updateTypes=r=>this._state.setFilters({hide_type:this.types.reduce((m,C)=>(r.includes(C.id)||m.push(C),m),[])})}updateUIOptions(t){this._state.setUIOptions(t)}ngOnInit(){var t=this;return(0,M.Z)(function*(){yield t._org.initialised.pipe((0,O.P)(o=>o)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const s=o.get("zone_ids").split(",");if(s.length){t.zones=s;const l=t._org.levelWithID(s);if(!l)return;t._org.building=t._org.buildings.find(r=>r.id===l.parent_id)}}})),t.subscription("levels",t._org.active_levels.subscribe(o=>{t.zones=t.zones.filter(s=>o.find(l=>l.id===s)),!t.zones.length&&o.length&&t.zones.push(o[0].id),t.updateZones(t.zones)})),t.updateTypes(t.type_list)})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y),e.Y36(y.w7),e.Y36(p.gz),e.Y36(p.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-topbar"]],features:[e.qOj],decls:25,vars:14,consts:[[1,"flex","items-center","px-4","h-20","bg-white","dark:bg-neutral-700","border-b","border-gray-200","dark:border-neutral-500"],["mat-button","","new","",1,"w-12","xl:w-auto","overflow-hidden",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(2,"div",2),e._UZ(3,"app-icon",3),e.TgZ(4,"div",4),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",5)(7,"mat-select",6),e.NdJ("ngModelChange",function(l){return o.zones=l})("ngModelChange",function(l){return o.updateZones(l)}),e.YNc(8,F,2,2,"mat-option",7),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-form-field",5)(11,"mat-select",8),e.NdJ("ngModelChange",function(l){return o.type_list=l})("ngModelChange",function(l){return o.updateTypes(l)}),e.TgZ(12,"mat-select-trigger"),e._uU(13,"Legend"),e.qZA(),e.YNc(14,I,2,2,"mat-option",7),e.qZA()(),e.TgZ(15,"mat-slide-toggle",9),e.NdJ("ngModelChange",function(l){return o.updateUIOptions({show_overflow:l})}),e.ALo(16,"async"),e.TgZ(17,"div",10),e._uU(18,"Setup / Breakdown"),e.qZA()(),e.TgZ(19,"mat-slide-toggle",9),e.NdJ("ngModelChange",function(l){return o.updateUIOptions({show_cleaning:l})}),e.ALo(20,"async"),e.TgZ(21,"div",10),e._uU(22,"Cleaners View"),e.qZA()(),e._UZ(23,"div",11),e.TgZ(24,"date-options",12),e.NdJ("dateChange",function(l){return o.setDate(l)}),e.qZA()()),2&t){let s,l;e.xp6(3),e.Q6J("icon",e.DdM(13,N)),e.xp6(4),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,7,o.levels)),e.xp6(3),e.Q6J("ngModel",o.type_list),e.xp6(3),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngModel",null==(s=e.lcZ(16,9,o.ui_options))?null:s.show_overflow),e.xp6(4),e.Q6J("ngModel",null==(l=e.lcZ(20,11,o.ui_options))?null:l.show_cleaning)}},dependencies:[c.sg,h.JJ,h.On,U.E,A.lW,J.KE,w.gD,w.$L,_.ey,Y.Rr,x.o,c.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:initial;line-height:1.2em}\n/*# sourceMappingURL=dayview-topbar.component.ts-angular-inline--43.css.map*/"]}),n})();var z=a(4139),E=a(7716),L=a(9151),P=a(9095),S=a(7418),u=a(6942),j=a(9128),T=a(6275),R=a(3690),B=a(914),V=a(1294),Z=a(5148),$=a(2317),K=a(9377),G=a(8987);function X(n,i){if(1&n&&e._UZ(0,"div"),2&n){const t=e.oxw();e.Tol("overflow-block absolute rounded overflow-hidden w-full "+t.type),e.Udp("top",100*t.overflow_top+"%")("height",100*t.overflow_height+"%")}}function k(n,i){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"title"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.event.title," ")}}function W(n,i){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"schedule"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.time," ")}}function H(n,i){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"people"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",t.event.attendees.length," Attendee",1===t.event.attendees.length?"":"s"," ")}}function q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.view(s.event))}),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.YNc(3,k,4,1,"div",5),e.YNc(4,W,4,1,"div",5),e.YNc(5,H,4,2,"div",5),e.qZA()}if(2&n){const t=e.oxw();e.Tol("absolute rounded overflow-hidden text-sm border border-gray-200 shadow-sm z-10 hover:z-30 "+t.type),e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(2),e.Oqu(null==t.event.organiser?null:t.event.organiser.name),e.xp6(1),e.Q6J("ngIf",t.event.duration>30),e.xp6(1),e.Q6J("ngIf",t.event.duration>60),e.xp6(1),e.Q6J("ngIf",t.event.duration>90)}}function ee(n,i){if(1&n&&(e.TgZ(0,"div",8)(1,"div")(2,"app-icon"),e._uU(3),e.qZA()(),e.TgZ(4,"div",9),e._uU(5),e.ALo(6,"date"),e.qZA()()),2&n){const t=e.oxw();e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(1),e.Tol("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending "+t.event.ext("cleaning_status")),e.xp6(2),e.Oqu("done"===t.event.ext("cleaning_status")?"done":"warning"),e.xp6(2),e.AsE(" ","done"===t.event.ext("cleaning_status")?"Finished":"Scheduled to"," clean at ",e.xi3(6,9,t.event.ext("cleaning_time")||1e3*t.event.event_end,"shortTime")," ")}}a(2052);const g=1440;let te=(()=>{class n{constructor(t){this._state=t,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=o=>this._state.setEvent(o)}get time(){const t=new Date(this.event.date);return(0,Z.Z)(t,"h:mm a")+" - "+(0,Z.Z)((0,$.Z)(t,this.event.duration),"h:mm a")}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}ngOnChanges(t){if(t.event&&this.event){const o=(0,K.Z)(new Date(this.event.date)),s=(0,G.Z)(new Date(this.event.date),o);this.top=s/g,this.height=this.event.duration/g,this.overflow_top=(s-this.event.ext("setup"))/g,this.overflow_height=(this.event.duration+this.event.ext("setup")+this.event.ext("breakdown"))/g}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-event"]],inputs:{event:"event"},features:[e.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["event","","matRipple","",3,"class","top","height","click",4,"ngIf"],["cleaning","","class","absolute rounded overflow-hidden flex w-full shadow p-2 bg-white z-20",3,"top","height",4,"ngIf"],["event","","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],["cleaning","",1,"absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2","bg-white","z-20"],[1,"flex-1","w-1/2"]],template:function(t,o){if(1&t&&(e.YNc(0,X,1,6,"div",0),e.ALo(1,"async"),e.YNc(2,q,6,10,"div",1),e.YNc(3,ee,7,12,"div",2),e.ALo(4,"async")),2&t){let s,l;e.Q6J("ngIf",null==(s=e.lcZ(1,3,o.ui_options))?null:s.show_overflow),e.xp6(2),e.Q6J("ngIf",o.event),e.xp6(1),e.Q6J("ngIf",o.event&&(null==(l=e.lcZ(4,5,o.ui_options))?null:l.show_cleaning))}},dependencies:[c.O5,_.wG,x.o,c.Ov,c.uU],styles:["[event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f!important;cursor:pointer}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}\n/*# sourceMappingURL=dayview-event.component.ts-angular-inline--46.css.map*/"]}),n})();function ne(n,i){1&n&&e._UZ(0,"dayview-event",2),2&n&&e.Q6J("event",i.$implicit)}function oe(n,i){if(1&n&&(e.ynx(0),e.YNc(1,ne,1,1,"dayview-event",1),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}let ie=(()=>{class n extends d.KG{constructor(t){super(),this._state=t,this.events=this._state.filtered.pipe((0,u.U)(o=>(console.log("Bookings:",o),o.filter(s=>s.resources.find(l=>this.space.email===l.email)))))}ngOnInit(){this.subscription("events",this._state.filtered.subscribe())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-space"]],inputs:{space:"space"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(t,o){1&t&&e.YNc(0,oe,3,3,"ng-container",0),2&t&&e.Q6J("ngIf",o.space)},dependencies:[c.sg,c.O5,te,c.Ov],styles:["[_nghost-%COMP%]{position:relative;border-right:1px solid rgba(0,0,0,.1)}\n/*# sourceMappingURL=dayview-space.component.ts-angular-inline--45.css.map*/"]}),n})();function se(n,i){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16),e._uU(2),e.qZA(),e._UZ(3,"div",17),e.qZA()),2&n){const t=i.$implicit,o=e.oxw();e.Udp("transform","translateY(-"+o.scroll.y+"px)"),e.xp6(2),e.hij(" ",t," ")}}function ae(n,i){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"div",19),e.TgZ(2,"div",20),e._uU(3),e.qZA()()),2&n){const t=i.$implicit,o=e.oxw();e.Udp("transform","translateX(-"+o.scroll.x+"px)"),e.xp6(3),e.hij(" ",t.display_name||t.name," ")}}function le(n,i){1&n&&e._UZ(0,"dayview-space",21),2&n&&e.Q6J("space",i.$implicit)}function re(n,i){if(1&n&&(e._UZ(0,"div",22),e.ALo(1,"async")),2&n){const t=i.index,o=e.oxw();let s;e.Udp("width",12*(null==(s=e.lcZ(1,4,o.space_list))?null:s.length)+"rem")("top",4*t+"rem")}}function ce(n,i){1&n&&e._UZ(0,"mat-progress-bar",23)}function pe(n,i){if(1&n&&(e._UZ(0,"view-event-details",24),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}const de=new Array(24).fill(0).map((n,i)=>(i%12==0?12:i%12)+(i>=12?" PM":" AM"));let ve=(()=>{class n extends d.KG{constructor(t,o){super(),this._org=t,this._state=o,this.blocks=de,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.spaces=this._org.active_building.pipe((0,L.h)(s=>!!s),(0,P.w)(({id:s})=>(0,R.vIL)({zone_id:s,limit:1e3}).pipe((0,S.K)(()=>(0,z.of)({data:[]})))),(0,u.U)(({data:s})=>s.map(l=>new T.T(l))),(0,j.d)(1)),this.space_list=(0,E.aj)([this.spaces,this._state.zones]).pipe((0,u.U)(([s,l])=>s.filter(r=>!l?.length||r.zones.find(m=>l.includes(m)))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(t){requestAnimationFrame(()=>this.scroll={x:t.srcElement.scrollLeft,y:t.srcElement.scrollTop})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.w7),e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-timeline"]],features:[e.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg-blue-100/20","dark:bg-neutral-700","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg-blue-100/20","dark:bg-neutral-700","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-gray-300 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-gray-300"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-gray-300","border-opacity-50","bg-blue-100/20","dark:bg-neutral-700","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem] h-[96rem]",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-gray-300 h-px min-w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-gray-300","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-gray-300"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-gray-300"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]","h-[96rem]",3,"space"],[1,"absolute","bg-gray-300","h-px","min-w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA(),e.YNc(4,se,4,3,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7),e.YNc(8,ae,4,3,"div",8),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",9,10),e.NdJ("scroll",function(l){return o.onScroll(l)}),e.YNc(12,le,1,1,"dayview-space",11),e.ALo(13,"async"),e.YNc(14,re,2,6,"div",12),e.qZA()(),e.YNc(15,ce,1,0,"mat-progress-bar",13),e.ALo(16,"async"),e.YNc(17,pe,2,3,"view-event-details",14),e.ALo(18,"async"),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.blocks),e.xp6(4),e.Q6J("ngForOf",e.lcZ(9,6,o.space_list)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(13,8,o.space_list)),e.xp6(2),e.Q6J("ngForOf",o.blocks),e.xp6(1),e.Q6J("ngIf",e.lcZ(16,10,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(18,12,o.event)))},dependencies:[c.sg,c.O5,B.E,V.pW,ie,c.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}[change-transform][_ngcontent-%COMP%]{will-change:transform}\n/*# sourceMappingURL=dayview-timeline.component.ts-angular-inline--44.css.map*/"]}),n})();const ge=["app-dayview",""];let me=(()=>{class n{constructor(t,o){this._settings=t,this._router=o}get links(){return this._settings.get("app.general.menu")||[]}ngOnInit(){this.links.find(t=>t.route.includes("day-view"))||this._router.navigate([`/${this.links[0].route}`])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.gb),e.Y36(p.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-dayview",""]],attrs:ge,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full","bg-gray-200","dark:bg-neutral-600"]],template:function(t,o){1&t&&(e._UZ(0,"sidebar",0),e.TgZ(1,"main",1),e._UZ(2,"dayview-topbar")(3,"dayview-timeline"),e.qZA())},dependencies:[D.k,Q,ve],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=day-view.component.ts-angular-inline--42.css.map*/"]}),n})();var he=a(9946);const ue=[{path:"",component:me}];let fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,h.u5,b.v,T.YR,he.PP,p.Bz.forChild(ue)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map