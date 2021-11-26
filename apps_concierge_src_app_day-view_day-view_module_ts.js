"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{617:(ge,u,s)=>{s.r(u),s.d(u,{DayViewModule:()=>de});var r=s(8267),m=s(8346),h=s(1733),b=s(9323),e=s(4001),D=s(2146),A=s(8806),M=s(4452),f=s(3867),_=s(4555),v=s(1809),O=s(7752),w=s(9680),U=s(3981),y=s(1036),J=s(1232),Y=s(3928),x=s(2157);function F(n,i){if(1&n&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function I(n,i){if(1&n&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}const N=function(){return{class:"material-icons",content:"add"}};let P=(()=>{class n extends f.KG{constructor(t,o,a,l){super(),this._state=t,this._org=o,this._route=a,this._router=l,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(c=>`${c.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=c=>this._state.setDate(c),this.newBooking=c=>this._state.newBooking(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")}}),this._state.setZones(c)},this.updateTypes=c=>this._state.setFilters({hide_type:this.types.reduce((p,d)=>(c.includes(d.id)||p.push(d),p),[])})}updateUIOptions(t){this._state.setUIOptions(t)}ngOnInit(){return(0,A.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,M.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const o=t.get("zone_ids").split(",");if(o.length){this.zones=o;const a=this._org.levelWithID(o);if(!a)return;this._org.building=this._org.buildings.find(l=>l.id===a.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(t=>{this.zones=this.zones.filter(o=>t.find(a=>a.id===o)),!this.zones.length&&t.length&&this.zones.push(t[0].id),this.updateZones(this.zones)})),this.updateTypes(this.type_list)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y),e.Y36(_.w7),e.Y36(h.gz),e.Y36(h.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-topbar"]],features:[e.qOj],decls:24,vars:14,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","lg:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(t,o){if(1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(1,"div",1),e._UZ(2,"app-icon",2),e.TgZ(3,"div",3),e._uU(4,"New Booking"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"mat-form-field",4),e.TgZ(6,"mat-select",5),e.NdJ("ngModelChange",function(l){return o.zones=l})("ngModelChange",function(l){return o.updateZones(l)}),e.YNc(7,F,2,2,"mat-option",6),e.ALo(8,"async"),e.qZA(),e.qZA(),e.TgZ(9,"mat-form-field",4),e.TgZ(10,"mat-select",7),e.NdJ("ngModelChange",function(l){return o.type_list=l})("ngModelChange",function(l){return o.updateTypes(l)}),e.TgZ(11,"mat-select-trigger"),e._uU(12,"Legend"),e.qZA(),e.YNc(13,I,2,2,"mat-option",6),e.qZA(),e.qZA(),e.TgZ(14,"mat-slide-toggle",8),e.NdJ("ngModelChange",function(l){return o.updateUIOptions({show_overflow:l})}),e.ALo(15,"async"),e.TgZ(16,"div",9),e._uU(17,"Setup / Breakdown"),e.qZA(),e.qZA(),e.TgZ(18,"mat-slide-toggle",8),e.NdJ("ngModelChange",function(l){return o.updateUIOptions({show_cleaning:l})}),e.ALo(19,"async"),e.TgZ(20,"div",9),e._uU(21,"Cleaners View"),e.qZA(),e.qZA(),e._UZ(22,"div",10),e.TgZ(23,"date-options",11),e.NdJ("dateChange",function(l){return o.setDate(l)}),e.qZA()),2&t){let a,l;e.xp6(2),e.Q6J("icon",e.DdM(13,N)),e.xp6(4),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(8,7,o.levels)),e.xp6(3),e.Q6J("ngModel",o.type_list),e.xp6(3),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngModel",null==(a=e.lcZ(15,9,o.ui_options))?null:a.show_overflow),e.xp6(4),e.Q6J("ngModel",null==(l=e.lcZ(19,11,o.ui_options))?null:l.show_cleaning)}},directives:[O.lW,w.o,U.KE,y.gD,m.JJ,m.On,r.sg,y.$L,J.Rr,Y.E,x.ey],pipes:[r.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:initial;line-height:1.2em}\n/*# sourceMappingURL=dayview-topbar.component.ts-angular-inline--32.css.map*/"]}),n})();var Q=s(899),Z=s(8377),T=s(258),C=s(6613),E=s(5269),L=s(9735),z=s(3375);function q(n,i){if(1&n&&e._UZ(0,"div"),2&n){const t=e.oxw();e.Tol("overflow-block absolute rounded overflow-hidden w-full "+t.type),e.Udp("top",100*t.overflow_top+"%")("height",100*t.overflow_height+"%")}}function S(n,i){if(1&n&&(e.TgZ(0,"div",6),e.TgZ(1,"app-icon",7),e._uU(2,"title"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.event.title," ")}}function j(n,i){if(1&n&&(e.TgZ(0,"div",6),e.TgZ(1,"app-icon",7),e._uU(2,"schedule"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.time," ")}}function R(n,i){if(1&n&&(e.TgZ(0,"div",6),e.TgZ(1,"app-icon",7),e._uU(2,"people"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",t.event.attendees.length," Attendee",1===t.event.attendees.length?"":"s"," ")}}function B(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return a.view(a.event)}),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.YNc(3,S,4,1,"div",5),e.YNc(4,j,4,1,"div",5),e.YNc(5,R,4,2,"div",5),e.qZA()}if(2&n){const t=e.oxw();e.Tol("absolute rounded overflow-hidden text-sm border border-gray-200 shadow-sm z-10 hover:z-30 "+t.type),e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(2),e.Oqu(null==t.event.organiser?null:t.event.organiser.name),e.xp6(1),e.Q6J("ngIf",t.event.duration>30),e.xp6(1),e.Q6J("ngIf",t.event.duration>60),e.xp6(1),e.Q6J("ngIf",t.event.duration>90)}}function V(n,i){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"div"),e.TgZ(2,"app-icon"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"div",9),e._uU(5),e.ALo(6,"date"),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(1),e.Tol("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending "+t.event.ext("cleaning_status")),e.xp6(2),e.Oqu("done"===t.event.ext("cleaning_status")?"done":"warning"),e.xp6(2),e.AsE(" ","done"===t.event.ext("cleaning_status")?"Finished":"Scheduled to"," clean at ",e.xi3(6,9,t.event.ext("cleaning_time")||1e3*t.event.event_end,"shortTime")," ")}}s(7794);const g=1440;let $=(()=>{class n{constructor(t){this._state=t,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=o=>this._state.setEvent(o)}get time(){const t=new Date(this.event.date);return(0,C.Z)(t,"h:mm a")+" - "+(0,C.Z)((0,E.Z)(t,this.event.duration),"h:mm a")}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}ngOnChanges(t){if(t.event&&this.event){const o=(0,L.Z)(new Date(this.event.date)),a=(0,z.Z)(new Date(this.event.date),o);this.top=a/g,this.height=this.event.duration/g,this.overflow_top=(a-this.event.ext("setup"))/g,this.overflow_height=(this.event.duration+this.event.ext("setup")+this.event.ext("breakdown"))/g}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-event"]],inputs:{event:"event"},features:[e.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["event","","matRipple","",3,"class","top","height","click",4,"ngIf"],["cleaning","","class","absolute rounded overflow-hidden flex w-full shadow p-2 bg-white z-20",3,"top","height",4,"ngIf"],["event","","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],["cleaning","",1,"absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2","bg-white","z-20"],[1,"flex-1","w-1/2"]],template:function(t,o){if(1&t&&(e.YNc(0,q,1,6,"div",0),e.ALo(1,"async"),e.YNc(2,B,6,10,"div",1),e.YNc(3,V,7,12,"div",2),e.ALo(4,"async")),2&t){let a,l;e.Q6J("ngIf",null==(a=e.lcZ(1,3,o.ui_options))?null:a.show_overflow),e.xp6(2),e.Q6J("ngIf",o.event),e.xp6(1),e.Q6J("ngIf",o.event&&(null==(l=e.lcZ(4,5,o.ui_options))?null:l.show_cleaning))}},directives:[r.O5,x.wG,w.o],pipes:[r.Ov,r.uU],styles:["[event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f!important;cursor:pointer}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}\n/*# sourceMappingURL=dayview-event.component.ts-angular-inline--35.css.map*/"]}),n})();function K(n,i){1&n&&e._UZ(0,"dayview-event",2),2&n&&e.Q6J("event",i.$implicit)}function X(n,i){if(1&n&&(e.ynx(0),e.YNc(1,K,1,1,"dayview-event",1),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}let G=(()=>{class n extends f.KG{constructor(t){super(),this._state=t,this.events=this._state.filtered.pipe((0,Z.U)(o=>o.filter(a=>a.resources.find(l=>this.space.email===l.email))))}ngOnInit(){this.subscription("events",this._state.filtered.subscribe())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-space"]],inputs:{space:"space"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(t,o){1&t&&e.YNc(0,X,3,3,"ng-container",0),2&t&&e.Q6J("ngIf",o.space)},directives:[r.O5,r.sg,$],pipes:[r.Ov],styles:["[_nghost-%COMP%]{position:relative;border-right:1px solid rgba(0,0,0,.1)}\n/*# sourceMappingURL=dayview-space.component.ts-angular-inline--34.css.map*/"]}),n})();var k=s(3776),W=s(3174);function H(n,i){if(1&n&&(e.TgZ(0,"div",15),e.TgZ(1,"div",16),e._uU(2),e.qZA(),e._UZ(3,"div",17),e.qZA()),2&n){const t=i.$implicit,o=e.oxw();e.Udp("transform","translateY(-"+o.scroll.y+"px)"),e.xp6(2),e.hij(" ",t," ")}}function ee(n,i){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"div",19),e.TgZ(2,"div",20),e._uU(3),e.qZA(),e.qZA()),2&n){const t=i.$implicit,o=e.oxw();e.Udp("transform","translateX(-"+o.scroll.x+"px)"),e.xp6(3),e.hij(" ",t.display_name||t.name," ")}}function te(n,i){1&n&&e._UZ(0,"dayview-space",21),2&n&&e.Q6J("space",i.$implicit)}function ne(n,i){if(1&n&&(e._UZ(0,"div",22),e.ALo(1,"async")),2&n){const t=i.index,o=e.oxw();e.Udp("width",12*e.lcZ(1,4,o.space_list).length+"rem")("top",4*t+"rem")}}function oe(n,i){1&n&&e._UZ(0,"mat-progress-bar",23)}function ie(n,i){if(1&n&&(e._UZ(0,"view-event-details",24),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}const se=new Array(24).fill(0).map((n,i)=>(i%12==0?12:i%12)+(i>=12?" PM":" AM"));let ae=(()=>{class n extends f.KG{constructor(t,o,a){super(),this._org=t,this._spaces=o,this._state=a,this.blocks=se,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.space_list=(0,Q.aj)([this._org.active_building,this._spaces.list,this._state.zones]).pipe((0,Z.U)(([l,c,p])=>c.filter(d=>d.zones.includes(l.id)&&(!(null==p?void 0:p.length)||d.zones.find(ve=>p.includes(ve))))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(t){requestAnimationFrame(()=>this.scroll={x:t.srcElement.scrollLeft,y:t.srcElement.scrollTop})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.w7),e.Y36(T.sK),e.Y36(v.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-timeline"]],features:[e.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-gray-300 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-gray-300"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-gray-300","border-opacity-50","bg","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem] h-[96rem]",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-gray-300 h-px min-w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-gray-300","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-gray-300"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-gray-300"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]","h-[96rem]",3,"space"],[1,"absolute","bg-gray-300","h-px","min-w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"div",3),e.qZA(),e.YNc(4,H,4,3,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.YNc(8,ee,4,3,"div",8),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",9,10),e.NdJ("scroll",function(l){return o.onScroll(l)}),e.YNc(12,te,1,1,"dayview-space",11),e.ALo(13,"async"),e.YNc(14,ne,2,6,"div",12),e.qZA(),e.qZA(),e.YNc(15,oe,1,0,"mat-progress-bar",13),e.ALo(16,"async"),e.YNc(17,ie,2,3,"view-event-details",14),e.ALo(18,"async"),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.blocks),e.xp6(4),e.Q6J("ngForOf",e.lcZ(9,6,o.space_list)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(13,8,o.space_list)),e.xp6(2),e.Q6J("ngForOf",o.blocks),e.xp6(1),e.Q6J("ngIf",e.lcZ(16,10,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(18,12,o.event)))},directives:[r.sg,r.O5,G,k.pW,W.E],pipes:[r.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}.bg[_ngcontent-%COMP%]{background-color:#ecf1f5}[change-transform][_ngcontent-%COMP%]{will-change:transform}\n/*# sourceMappingURL=dayview-timeline.component.ts-angular-inline--33.css.map*/"]}),n})();const le=["app-dayview",""];let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-dayview",""]],attrs:le,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(t,o){1&t&&(e._UZ(0,"sidebar",0),e.TgZ(1,"main",1),e._UZ(2,"dayview-topbar"),e._UZ(3,"dayview-timeline"),e.qZA())},directives:[D.k,P,ae],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=day-view.component.ts-angular-inline--31.css.map*/"]}),n})();var ce=s(9148);const pe=[{path:"",component:re}];let de=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,m.u5,b.v,T.YR,ce.PP,h.Bz.forChild(pe)]]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map