"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{8385:(Re,q,c)=>{c.r(q),c.d(q,{AppScheduleModule:()=>S});var r=c(4666),u=c(2508),$=c(959),M=c(4865),j=c(8147),e=c(9676),p=c(9377),W=c(8053),F=c(8325),B=c(7367),U=c(1170),X=c(5380);function L(l,n){var t,o,i,s,a,d,Z,x;(0,U.Z)(1,arguments);var y=(0,X.j)(),f=(0,B.Z)(null!==(t=null!==(o=null!==(i=null!==(s=n?.weekStartsOn)&&void 0!==s?s:null==n||null===(a=n.locale)||void 0===a||null===(d=a.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==i?i:y.weekStartsOn)&&void 0!==o?o:null===(Z=y.locale)||void 0===Z||null===(x=Z.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==t?t:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=(0,F.Z)(l),G=g.getDay(),Pe=(G<f?7:0)+G-f;return g.setDate(g.getDate()-Pe),g.setHours(0,0,0,0),g}function N(l){(0,U.Z)(1,arguments);var n=(0,F.Z)(l);return n.setDate(1),n.setHours(0,0,0,0),n}var P=c(475);function R(l,n){(0,U.Z)(2,arguments);var t=(0,F.Z)(l),o=(0,F.Z)(n);return t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth()}var I=c(312),E=c(5306),k=c(207);function V(l,n){if(1&l&&(e.TgZ(0,"div",10),e._uU(1),e.ALo(2,"date"),e.qZA()),2&l){const t=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function z(l,n){1&l&&e._UZ(0,"div",13)}function ee(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e._uU(1),e.ALo(2,"date"),e.YNc(3,z,1,0,"div",12),e.qZA()}if(2&l){const t=n.$implicit,o=e.oxw();e.ekj("hover:bg-blue-600",t.id!==o.active_date)("hover:bg-opacity-20",t.id!==o.active_date)("text-opacity-30",!t.is_month)("text-white",t.id===o.active_date)("text-black",t.id!==o.active_date)("dark:text-white",t.id!==o.active_date)("dark:text-opacity-30",!t.is_month)("bg-primary",t.id===o.active_date)("font-normal",t.id!==o.active_date),e.xp6(1),e.hij(" ",e.xi3(2,20,t.id,"d")," "),e.xp6(2),e.Q6J("ngIf",o.today===t.id)}}class h{constructor(){this.active_date=(0,p.Z)(Date.now()).valueOf(),this.today=(0,p.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=n=>this._onChange=n,this.registerOnTouched=n=>this._onTouch=n}ngOnInit(){this.generateDates()}setValue(n){this.active_date=(0,p.Z)(n).valueOf(),this.offset=0,this.generateDates(),this._onChange&&this._onChange(n)}writeValue(n){this.active_date=(0,p.Z)(n).valueOf(),this.offset=0,this.generateDates()}changeMonth(n){this.offset+=n,this.generateDates()}generateDates(){const n=(0,W.Z)(this.active_date,this.offset);let t=L(N(n));const o=(0,p.Z)(Date.now()),i=[];for(;i.length<42;)i.push({id:t.valueOf(),is_past:(0,P.Z)(t,o),is_month:R(t,n)}),t=(0,I.Z)(t,1);this.date_list=i}}h.\u0275fac=function(n){return new(n||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>h),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,"flex","items-center"],["icon","","matRipple","","name","schedule-next-month",3,"click"],["icon","","matRipple","","name","schedule-previous-month",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["icon","","name","schedule-set-date","class","min-w-[14%] flex-1 relative overflow-visible",3,"hover:bg-blue-600","hover:bg-opacity-20","text-opacity-30","text-white","text-black","dark:text-white","dark:text-opacity-30","bg-primary","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["icon","","name","schedule-set-date",1,"min-w-[14%]","flex-1","relative","overflow-visible",3,"click"],["class","absolute -inset-[2px] border border-primary rounded-full overflow-hidden","matRipple","",4,"ngIf"],["matRipple","",1,"absolute","-inset-[2px]","border","border-primary","rounded-full","overflow-hidden"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return t.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",5),e.NdJ("click",function(){return t.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",6),e.YNc(13,V,3,4,"div",7),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",8),e.YNc(16,ee,4,23,"button",9),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==t.date_list[6]?null:t.date_list[6].id)||t.active_date,"LLLL YYYY")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,t.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",t.date_list))},dependencies:[r.sg,r.O5,E.o,k.wG,r.OU,r.uU]});var w=c(7625),H=c(4792),O=c(8699);class T{constructor(n,t){this._state=n,this._sheet_ref=t,this.filters=this._state.filters,this.toggleType=o=>this._state.toggleType(o),this.dismiss=()=>this._sheet_ref.dismiss()}}T.\u0275fac=function(n){return new(n||T)(e.Y36(w.I),e.Y36(M.oL))},T.\u0275cmp=e.Xpm({type:T,selectors:[["schedule-filter-card"]],decls:64,vars:42,consts:[[1,"flex","items-center","border-b","border-gray-300","dark:bg-neutral-700","space-x-2","mb-4","text-xl"],["icon","","matRipple","",3,"click"],[1,"flex-1","w-1/2","text-center"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4","dark:bg-neutral-700"],["name","schedule-toggle-event-filter","matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"px-2","pb-2"],["btn","","matRipple","","name","schedule-apply-filter",1,"w-full",3,"click"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return t.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"app-icon"),e.qZA(),e.TgZ(8,"div",3)(9,"button",4),e.NdJ("click",function(){return t.toggleType("event")}),e.TgZ(10,"div",5)(11,"app-icon"),e._uU(12,"meeting_room"),e.qZA()(),e.TgZ(13,"div",6)(14,"div",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",8),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e._UZ(20,"mat-checkbox",9),e.ALo(21,"async"),e.qZA(),e.TgZ(22,"button",10),e.NdJ("click",function(){return t.toggleType("desk")}),e.TgZ(23,"div",5),e._UZ(24,"img",11),e.qZA(),e.TgZ(25,"div",6)(26,"div",7),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",8),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e._UZ(32,"mat-checkbox",9),e.ALo(33,"async"),e.qZA(),e.TgZ(34,"button",12),e.NdJ("click",function(){return t.toggleType("parking")}),e.TgZ(35,"div",5)(36,"app-icon"),e._uU(37,"drive_eta"),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"div",8),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e._UZ(45,"mat-checkbox",9),e.ALo(46,"async"),e.qZA(),e.TgZ(47,"button",13),e.NdJ("click",function(){return t.toggleType("visitor")}),e.TgZ(48,"div",5)(49,"app-icon"),e._uU(50,"people"),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"div",8),e._uU(56),e.ALo(57,"translate"),e.qZA()(),e._UZ(58,"mat-checkbox",9),e.ALo(59,"async"),e.qZA()(),e.TgZ(60,"div",14)(61,"button",15),e.NdJ("click",function(){return t.dismiss()}),e._uU(62),e.ALo(63,"translate"),e.qZA()()),2&n){let o,i,s,a;e.xp6(5),e.hij(" ",e.lcZ(6,14,"WPA.BOOKING_TYPES")," "),e.xp6(10),e.Oqu(e.lcZ(16,16,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(19,18,"WPA.SCHEULD_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(o=e.lcZ(21,20,t.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.xp6(7),e.Oqu(e.lcZ(28,22,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(31,24,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(33,26,t.filters))||null==i.shown_types?null:i.shown_types.includes("desk")),e.xp6(8),e.Oqu(e.lcZ(41,28,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(44,30,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(s=e.lcZ(46,32,t.filters))||null==s.shown_types?null:s.shown_types.includes("parking")),e.xp6(8),e.Oqu(e.lcZ(54,34,"WPA.VISITORS")),e.xp6(3),e.hij(" ",e.lcZ(57,36,"WPA.SCHEDULE_VISITOR_FILTER"),"s "),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(59,38,t.filters))||null==a.shown_types?null:a.shown_types.includes("visitor")),e.xp6(4),e.hij(" ",e.lcZ(63,40,"WPA.FILTERS_APPLY")," ")}},dependencies:[E.o,k.wG,H.oG,u.JJ,u.On,r.Ov,O.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--124.css.map*/"]});var _=c(232);function te(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function ne(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function le(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function oe(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function ie(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("locker",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.LOCKERS")))}function se(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function ce(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function ae(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function re(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function de(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("locker",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.LOCKERS")))}class A{hasFeature(n){return this._settings.get("app.features")?.includes(n)}constructor(n,t,o){this._sheet=n,this._state=t,this._settings=o,this.filters=this._state.filters,this.toggleType=(i,s=!1)=>this._state.toggleType(i,s)}openFilters(){this._sheet.open(T)}}function _e(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"place"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let o;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(o=e.lcZ(12,7,t.filters))||null==o.shown_types?null:o.shown_types.includes("event"))}}function ue(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk"))}),e.TgZ(1,"div",11),e._UZ(2,"img",17),e.qZA(),e.TgZ(3,"div",12)(4,"div",13),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",14),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e._UZ(10,"mat-checkbox",15),e.ALo(11,"async"),e.qZA()}if(2&l){const t=e.oxw();let o;e.xp6(5),e.Oqu(e.lcZ(6,3,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(9,5,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(o=e.lcZ(11,7,t.filters))||null==o.shown_types?null:o.shown_types.includes("desk"))}}function pe(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"drive_eta"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let o;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(o=e.lcZ(12,7,t.filters))||null==o.shown_types?null:o.shown_types.includes("parking"))}}function ge(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("visitor"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"people"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e.SDv(6,20),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e.SDv(9,21),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let o;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.VISITORS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_VISITOR_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(o=e.lcZ(12,7,t.filters))||null==o.shown_types?null:o.shown_types.includes("visitor"))}}function me(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("locker"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"door_back"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e.SDv(6,23),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e.SDv(9,24),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let o;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.LOCKERS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_LOCKER_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(o=e.lcZ(12,7,t.filters))||null==o.shown_types?null:o.shown_types.includes("locker"))}}A.\u0275fac=function(n){return new(n||A)(e.Y36(M.ch),e.Y36(w.I),e.Y36(_.gb))},A.\u0275cmp=e.Xpm({type:A,selectors:[["schedule-filters"]],decls:30,vars:33,consts:[[1,"hidden","sm:block","bg-white","dark:bg-neutral-800","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["btn","","matRipple","","name","schedule-open-filter-edit",1,"min-w-0","sm:w-24",3,"click"],[1,"flex","items-center","justify-center","space-x-2"],[1,"text-xl"],["class","flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["icon","","name","schedule-remove-event-filter",3,"click"],["icon","","name","schedule-remove-desk-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-parking-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-visitor-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-locker-filter",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","dark:bg-neutral-700","text-sm","pl-2"],["icon","","name","schedule-remove-event-filter-mobile",3,"click"],["icon","","name","schedule-remove-desk-filter-mobile",3,"click"],["icon","","name","schedule-remove-parking-filter-mobile",3,"click"],["icon","","name","schedule-remove-visitor-filter-mobile",3,"click"],["icon","","name","schedule-remove-locker-filter-mobile",3,"click"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,te,7,3,"div",3),e.ALo(6,"async"),e.YNc(7,ne,7,3,"div",3),e.ALo(8,"async"),e.YNc(9,le,7,3,"div",3),e.ALo(10,"async"),e.YNc(11,oe,7,3,"div",3),e.ALo(12,"async"),e.YNc(13,ie,7,3,"div",3),e.ALo(14,"async"),e.qZA()(),e.TgZ(15,"div",4)(16,"button",5),e.NdJ("click",function(){return t.openFilters()}),e.TgZ(17,"div",6)(18,"app-icon",7),e._uU(19,"filter_list"),e.qZA()()(),e.YNc(20,se,7,3,"div",8),e.ALo(21,"async"),e.YNc(22,ce,7,3,"div",8),e.ALo(23,"async"),e.YNc(24,ae,7,3,"div",8),e.ALo(25,"async"),e.YNc(26,re,7,3,"div",8),e.ALo(27,"async"),e.YNc(28,de,7,3,"div",8),e.ALo(29,"async"),e.qZA()),2&n){let o,i,s,a,d,Z,x,y,f,g;e.xp6(2),e.hij(" ",e.lcZ(3,11,"WPA.SCHEDULE_CAT_FILTERS")," "),e.xp6(3),e.Q6J("ngIf",null==(o=e.lcZ(6,13,t.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(i=e.lcZ(8,15,t.filters))||null==i.shown_types?null:i.shown_types.includes("desk"))&&t.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(s=e.lcZ(10,17,t.filters))||null==s.shown_types?null:s.shown_types.includes("parking"))&&t.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(a=e.lcZ(12,19,t.filters))||null==a.shown_types?null:a.shown_types.includes("visitor"))&&t.hasFeature("visitor-invite")),e.xp6(2),e.Q6J("ngIf",(null==(d=e.lcZ(14,21,t.filters))||null==d.shown_types?null:d.shown_types.includes("locker"))&&t.hasFeature("lockers")),e.xp6(7),e.Q6J("ngIf",null==(Z=e.lcZ(21,23,t.filters))||null==Z.shown_types?null:Z.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(x=e.lcZ(23,25,t.filters))||null==x.shown_types?null:x.shown_types.includes("desk"))&&t.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(y=e.lcZ(25,27,t.filters))||null==y.shown_types?null:y.shown_types.includes("parking"))&&t.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(f=e.lcZ(27,29,t.filters))||null==f.shown_types?null:f.shown_types.includes("visitor"))&&t.hasFeature("visitor-invite")),e.xp6(2),e.Q6J("ngIf",(null==(g=e.lcZ(29,31,t.filters))||null==g.shown_types?null:g.shown_types.includes("locker"))&&t.hasFeature("lockers"))}},dependencies:[r.O5,E.o,k.wG,r.Ov,O.X$]});class b{hasFeature(n){return this._settings.get("app.features")?.includes(n)}constructor(n,t){this._state=n,this._settings=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=o=>this._state.toggleType(o),this.setDate=o=>this._state.setDate(o)}}b.\u0275fac=function(n){return new(n||b)(e.Y36(w.I),e.Y36(_.gb))},b.\u0275cmp=e.Xpm({type:b,selectors:[["schedule-sidebar"]],decls:11,vars:8,consts:function(){let l,n,t,o,i;return l=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,n=$localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\ufffd0\ufffd"}:INTERPOLATION: `,t=$localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\ufffd0\ufffd"}:INTERPOLATION: `,o=$localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\ufffd0\ufffd"}:INTERPOLATION: `,i=$localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-300","dark:border-neutral-800"],[1,"border-b","border-gray-200","dark:border-neutral-800",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],l,[1,"p-4","space-y-4"],["matRipple","","name","schedule-toggle-event-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-desk-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-parking-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-visitor-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-locker-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-event-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","dark:bg-neutral-800","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],n,t,["matRipple","","name","schedule-toggle-locker-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],o,i]},template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(i){return t.setDate(i)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e.SDv(4,3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,_e,13,9,"button",5),e.YNc(7,ue,12,9,"button",6),e.YNc(8,pe,13,9,"button",7),e.YNc(9,ge,13,9,"button",8),e.YNc(10,me,13,9,"button",9),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngModel",e.lcZ(2,6,t.date)),e.xp6(5),e.Q6J("ngIf",t.hasFeature("spaces")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("desks")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("parking")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("visitor-invite")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("lockers")))},dependencies:[r.O5,E.o,k.wG,H.oG,u.JJ,u.On,h,r.Ov,O.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--125.css.map*/"]});var D=c(1670),Y=c(3496),m=c(1299),J=c(5845),Q=c(5148),K=c(6942),fe=c(7716),he=c(1484),ve=c(4187),Ze=c(6012),xe=c(2551),Te=c(4088),Ae=c(1294);function be(l,n){if(1&l&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&l){const t=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function Ce(l,n){1&l&&e._UZ(0,"div",12)}function Se(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e.YNc(1,Ce,1,0,"div",11),e._uU(2),e.ALo(3,"date"),e.qZA()}if(2&l){const t=n.$implicit,o=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-white",t.id===o.active_date)("text-black",t.id!==o.active_date)("dark:text-white",t.id!==o.active_date)("dark:text-opacity-30",!t.is_month)("bg-primary",t.id===o.active_date)("font-normal",t.id!==o.active_date),e.xp6(1),e.Q6J("ngIf",t.is_today),e.xp6(1),e.hij(" ",e.xi3(3,16,t.id,"d")," ")}}class v{constructor(){this.active_date=(0,p.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=n=>this._onChange=n,this.registerOnTouched=n=>this._onTouch=n}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(n){this.active_date=(0,p.Z)(n).valueOf(),this.offset=0,this._onChange&&this._onChange(n)}writeValue(n){this.active_date=(0,p.Z)(n).valueOf(),this.offset=0,this.generateDates()}resetMonth(){this.changeMonth(-this.offset)}changeMonth(n){this.offset+=n,this.generateDates()}generateDates(){const n=(0,W.Z)(this.active_date,this.offset);let t=L(N(n));const o=(0,p.Z)(Date.now());let i=[];for(;i.length<42;)i.push({id:t.valueOf(),is_past:(0,P.Z)(t,o),is_month:R(t,n),is_today:(0,J.Z)(Date.now(),t)}),t=(0,I.Z)(t,1);for(this.date_list=i,t=L(0===this.offset?n:N(n)),i=[];i.length<7;)i.push({id:t.valueOf(),is_past:(0,P.Z)(t,o),is_month:R(t,n),is_today:(0,J.Z)(Date.now(),t)}),t=(0,I.Z)(t,1);this.short_list=i}}function ye(l,n){1&l&&e._UZ(0,"topbar")}function Ee(l,n){1&l&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"COMMON.TODAY"),")"))}function ke(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"event-card",13),e.NdJ("edit",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(i))})("remove",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))}),e.qZA()}if(2&l){const t=e.oxw().$implicit;e.Q6J("event",t)}}function Fe(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"booking-card",14),e.NdJ("remove",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))})("end",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.end(i))}),e.qZA()}if(2&l){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function Le(l,n){if(1&l&&(e.ynx(0),e.YNc(1,ke,1,1,"event-card",11),e.YNc(2,Fe,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&l){const t=n.$implicit,o=e.MAs(3),i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.isEvent(t))("ngIfElse",o)}}function we(l,n){if(1&l&&(e.ynx(0),e.YNc(1,Le,4,2,"ng-container",10),e.ALo(2,"async"),e.BQk()),2&l){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.bookings))("ngForTrackBy",t.trackByFn)}}function Oe(l,n){1&l&&e._UZ(0,"mat-progress-bar",15)}function Me(l,n){1&l&&e._UZ(0,"footer-menu")}function Ue(l,n){if(1&l&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"translate"),e.ALo(5,"date"),e.ALo(6,"async"),e.qZA()()),2&l){const t=e.oxw();e.xp6(3),e.AsE(" ",e.lcZ(4,2,"WPA.SCHEDULE_EMPTY")," ",e.xi3(5,4,e.lcZ(6,7,t.date),"EEEE, dd LLL yyyy")," ")}}v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0}])],decls:20,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],["btn","","matRipple","",1,"clear","font-medium",3,"click"],[1,"flex","items-center"],["icon","","matRipple","",3,"click"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["icon","","matRipple","","class","min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible",3,"text-opacity-30","text-white","text-black","dark:text-white","dark:text-opacity-30","bg-primary","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["icon","","matRipple","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2","h-9","overflow-visible",3,"click"],["class","absolute -inset-0.5 border border-primary rounded-full",4,"ngIf"],[1,"absolute","-inset-0.5","border","border-primary","rounded-full"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return t.resetMonth()}),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return t.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return t.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()(),e.TgZ(12,"button",4),e.NdJ("click",function(){return t.show_shortlist=!t.show_shortlist}),e.TgZ(13,"app-icon"),e._uU(14,"arrow_drop_down"),e.qZA()()()(),e.TgZ(15,"div",5),e.YNc(16,be,3,4,"div",6),e.ALo(17,"slice"),e.qZA(),e.TgZ(18,"div",7),e.YNc(19,Se,4,19,"button",8),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==t.date_list[6]?null:t.date_list[6].id)||t.active_date,"LLLL YYYY")," "),e.xp6(13),e.Q6J("ngForOf",e.Dn7(17,6,t.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",t.list))},dependencies:[r.sg,r.O5,E.o,k.wG,r.OU,r.uU]});class C extends _.cx{isEvent(n){return n instanceof m.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}constructor(n,t,o,i,s){super(),this._state=n,this._event_form=t,this._router=o,this._dialog=i,this._settings=s,this.bookings=(0,fe.aj)([this._state.filtered_bookings,this._state.loading]).pipe((0,K.U)(([a,d])=>d?[]:a)),this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,K.U)(a=>(0,J.Z)(a,Date.now()))),this.setDate=a=>this._state.setDate(a)}ngOnInit(){this._state.triggerPoll(),this.subscription("poll",this._state.startPolling())}trackByFn(n,t){return t?.id}edit(n){var t=this;return(0,D.Z)(function*(){t._router.navigate(["/book","meeting","form"]),n.creator!==n.mailbox&&(n=(yield(0,m.u$)({period_start:n.event_start,period_end:n.event_end,ical_uid:n.ical_uid}).toPromise())[0]||n),t._event_form.newForm(n)})()}remove(n){var t=this;return(0,D.Z)(function*(){const o=`${(0,Q.Z)(n.date,"dd MMM yyyy h:mma")}`,s=`Delete the booking for ${n instanceof m.ym?n.space?.display_name:n.asset_name||n.asset_id} at ${o}`,a=yield(0,_._5)({title:"Delete booking",content:s,icon:{content:"delete"}},t._dialog);n instanceof m.ym&&n.creator!==n.mailbox&&(n=(yield(0,m.u$)({period_start:n.event_start,period_end:n.event_end,ical_uid:n.ical_uid}).toPromise())[0]||n),"done"===a.reason&&(a.loading("Requesting booking deletion..."),yield(n instanceof m.ym?m.xC:Y.pv)(n.id,t._settings.get("app.no_user_calendar")?{system_id:n.system?.id}:void 0).toPromise().catch(d=>{throw(0,_.cB)(`Unable to delete booking. ${d}`),a.close(),d}),(0,_.t5)("Successfully deleted booking."),t._state.removeItem(n),t._dialog.closeAll())})()}end(n){var t=this;return(0,D.Z)(function*(){const o=`${(0,Q.Z)(n.date,"dd MMM yyyy h:mma")}`,s=`End the booking for ${n.asset_name||n.asset_id} at ${o}`,a=yield(0,_._5)({title:"End booking",content:s,icon:{content:"delete"}},t._dialog);"done"===a.reason&&(a.loading("Ending booking..."),yield(0,Y.FD)(n.id,!1).toPromise().catch(d=>{throw(0,_.cB)(`Unable to end booking. ${d}`),a.close(),d}),(0,_.t5)("Successfully ended booking."),t._state.removeItem(n),t._dialog.closeAll())})()}}C.\u0275fac=function(n){return new(n||C)(e.Y36(w.I),e.Y36(m.MH),e.Y36($.F0),e.Y36(he.uw),e.Y36(_.gb))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-schedule"]],features:[e.qOj],decls:21,vars:21,consts:[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","dark:bg-[#1F2021]","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","remove","end"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(n,t){if(1&n&&(e.YNc(0,ye,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(i){return t.setDate(i)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,Ee,3,3,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,we,3,4,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,Oe,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,Me,1,0,"footer-menu",0),e.YNc(19,Ue,7,9,"ng-template",null,9,e.W1O)),2&n){const o=e.MAs(20);let i;e.Q6J("ngIf",!t.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,t.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,t.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,t.is_today)),e.xp6(2),e.Q6J("ngIf",null==(i=e.lcZ(15,17,t.bookings))?null:i.length)("ngIfElse",o),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,t.loading)),e.xp6(2),e.Q6J("ngIf",!t.hide_nav)}},dependencies:[r.sg,r.O5,ve.o,Ze.i,xe.j,Te.E,Ae.pW,u.JJ,u.On,b,A,v,r.Ov,r.uU,O.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--126.css.map*/"]});const Ne=[{path:"",component:C},{path:"**",redirectTo:""}];class S{}S.\u0275fac=function(n){return new(n||S)},S.\u0275mod=e.oAB({type:S}),S.\u0275inj=e.cJS({imports:[r.ez,j.v,u.u5,M._r,$.Bz.forChild(Ne)]})}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map