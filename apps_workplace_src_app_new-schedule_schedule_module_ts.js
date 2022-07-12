"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{5926:(Te,J,c)=>{c.r(J),c.d(J,{AppScheduleModule:()=>xe});var r=c(4666),p=c(2508),B=c(959),T=c(4865),H=c(1992),e=c(9676),d=c(9377),L=c(8053),Z=c(8325),N=c(7367),b=c(1170);function C(o,s){(0,b.Z)(1,arguments);var t=s||{},n=t.locale,i=n&&n.options&&n.options.weekStartsOn,l=null==i?0:(0,N.Z)(i),a=null==t.weekStartsOn?l:(0,N.Z)(t.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=(0,Z.Z)(o),g=u.getDay(),f=(g<a?7:0)+g-a;return u.setDate(u.getDate()-f),u.setHours(0,0,0,0),u}function D(o){(0,b.Z)(1,arguments);var s=(0,Z.Z)(o);return s.setDate(1),s.setHours(0,0,0,0),s}var k=c(475);function A(o,s){(0,b.Z)(2,arguments);var t=(0,Z.Z)(o),n=(0,Z.Z)(s);return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()}var S=c(312),m=c(5306),v=c(4522);function W(o,s){if(1&o&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function X(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(l.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=s.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,11,t.id,"d")," ")}}let E=(()=>{class o{constructor(){this.active_date=(0,d.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}setValue(t){this.active_date=(0,d.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,d.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,L.Z)(this.active_date,this.offset);let n=C(D(t));const i=(0,d.Z)(Date.now()),l=[];for(;l.length<42;)l.push({id:n.valueOf(),is_past:(0,k.Z)(n,i),is_month:A(n,t)}),n=(0,S.Z)(n,1);this.date_list=l}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:p.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,""],["mat-icon-button","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["mat-icon-button","","class","min-w-[14%] flex-1",3,"text-opacity-30","text-primary","text-black","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["mat-icon-button","",1,"min-w-[14%]","flex-1",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return n.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",5),e.YNc(13,W,3,4,"div",6),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",7),e.YNc(16,X,3,14,"button",8),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.date_list))},dependencies:[r.sg,m.o,v.lW,r.OU,r.uU]}),o})();var $=c(1670),q=c(2088),K=c(4549),w=c(8426),h=c(1810),U=c(3200),y=c(4505),_=c(7716),F=c(9095),M=c(6942),V=c(8759);let x=(()=>{class o extends K.KG{constructor(){super(),this._poll=new y.X(0),this._loading=new y.X(!1),this._filters=new y.X({shown_types:["event","desk","parking"]}),this._date=new y.X(Date.now()),this.events=(0,_.aj)([this._date,this._poll]).pipe((0,F.w)(([t])=>(0,w.u$)({period_start:(0,h.Z)((0,d.Z)(t)),period_end:(0,h.Z)((0,U.Z)(t))}))),this.desks=(0,_.aj)([this._date,this._poll]).pipe((0,F.w)(([t])=>(0,q.F2)({period_start:(0,h.Z)((0,d.Z)(t)),period_end:(0,h.Z)((0,U.Z)(t)),type:"desk"}))),this.parking=(0,_.aj)([this._date,this._poll]).pipe((0,F.w)(([t])=>(0,q.F2)({period_start:(0,h.Z)((0,d.Z)(t)),period_end:(0,h.Z)((0,U.Z)(t)),type:"parking"}))),this.bookings=(0,_.aj)([this.events,this.desks,this.parking]).pipe((0,M.U)(([t,n,i])=>[...t,...n,...i].sort((l,a)=>l.date-a.date)),(0,V.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1)))),this.filtered_bookings=(0,_.aj)([this.bookings,this._filters]).pipe((0,M.U)(([t,n])=>t.filter(i=>i instanceof w.ym&&n?.shown_types?.includes("event")||n?.shown_types?.includes(i.type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("date",(0,_.aj)([this._date,this._poll]).subscribe(t=>this._loading.next(!0)))}setDate(t){this._date.next(t)}toggleType(t,n=!1){var i=this;return(0,$.Z)(function*(){const l=i._filters.getValue()||{shown_types:[]},{shown_types:a}=l;a&&(a.includes(t)||n)?i._filters.next({...l,shown_types:a.filter(u=>u!==t)}):i._filters.next({...l,shown_types:[...a,t]})})()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var O=c(207),Q=c(4792);let Y=(()=>{class o{constructor(t,n){this._state=t,this._sheet_ref=n,this.filters=this._state.filters,this.toggleType=i=>this._state.toggleType(i),this.dismiss=()=>this._sheet_ref.dismiss()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x),e.Y36(T.oL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filter-card"]],decls:42,vars:9,consts:[[1,"flex","items-center","border-b","border-gray-300","space-x-2","mb-4"],["mat-icon-button","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],["mat-button","",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5,"Booking Types"),e.qZA(),e._UZ(6,"app-icon"),e.qZA(),e.TgZ(7,"div",3)(8,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(9,"div",5)(10,"app-icon"),e._uU(11,"meeting_room"),e.qZA()(),e.TgZ(12,"div",6)(13,"div",7),e._uU(14,"Room"),e.qZA(),e.TgZ(15,"div",8),e._uU(16," Room and meeting invites "),e.qZA()(),e._UZ(17,"mat-checkbox",9),e.ALo(18,"async"),e.qZA(),e.TgZ(19,"button",4),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(20,"div",5),e._UZ(21,"img",10),e.qZA(),e.TgZ(22,"div",6)(23,"div",7),e._uU(24,"Desk"),e.qZA(),e.TgZ(25,"div",8),e._uU(26,"Desk bookings"),e.qZA()(),e._UZ(27,"mat-checkbox",9),e.ALo(28,"async"),e.qZA(),e.TgZ(29,"button",4),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(30,"div",5)(31,"app-icon"),e._uU(32,"drive_eta"),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7),e._uU(35,"Parking"),e.qZA(),e.TgZ(36,"div",8),e._uU(37,"Car space bookings"),e.qZA()(),e._UZ(38,"mat-checkbox",9),e.ALo(39,"async"),e.qZA()(),e.TgZ(40,"button",11),e.NdJ("click",function(){return n.dismiss()}),e._uU(41," Apply Filters "),e.qZA()),2&t){let i,l,a;e.xp6(17),e.Q6J("ngModel",null==(i=e.lcZ(18,3,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(l=e.lcZ(28,5,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(39,7,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))}},dependencies:[m.o,v.lW,O.wG,Q.oG,p.JJ,p.On,r.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--92.css.map*/"]}),o})();function P(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e._uU(2,"Rooms"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function z(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e._uU(2,"Desks"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function ee(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e._uU(2,"Car Spaces"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function te(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div"),e._uU(2,"Rooms"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function ne(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div"),e._uU(2,"Desks"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function oe(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div"),e._uU(2,"Car"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}let j=(()=>{class o{constructor(t,n){this._sheet=t,this._state=n,this.filters=this._state.filters,this.toggleType=(i,l=!1)=>this._state.toggleType(i,l)}openFilters(){this._sheet.open(Y)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.ch),e.Y36(x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filters"]],decls:19,vars:18,consts:[[1,"hidden","sm:block","bg-white","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["mat-button","",1,"w-24",3,"click"],["class","flex items-center rounded-3xl border border-gray-300 bg-white text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["mat-icon-button","",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","text-sm","pl-2"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Category Filters"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,P,6,0,"div",3),e.ALo(5,"async"),e.YNc(6,z,6,0,"div",3),e.ALo(7,"async"),e.YNc(8,ee,6,0,"div",3),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",4)(11,"button",5),e.NdJ("click",function(){return n.openFilters()}),e._uU(12," Filters "),e.qZA(),e.YNc(13,te,6,0,"div",6),e.ALo(14,"async"),e.YNc(15,ne,6,0,"div",6),e.ALo(16,"async"),e.YNc(17,oe,6,0,"div",6),e.ALo(18,"async"),e.qZA()),2&t){let i,l,a,u,g,f;e.xp6(4),e.Q6J("ngIf",null==(i=e.lcZ(5,6,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(7,8,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(a=e.lcZ(9,10,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking")),e.xp6(5),e.Q6J("ngIf",null==(u=e.lcZ(14,12,n.filters))||null==u.shown_types?null:u.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(g=e.lcZ(16,14,n.filters))||null==g.shown_types?null:g.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(f=e.lcZ(18,16,n.filters))||null==f.shown_types?null:f.shown_types.includes("parking"))}},dependencies:[r.O5,m.o,v.lW,r.Ov]}),o})(),I=(()=>{class o{constructor(t){this._state=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=n=>this._state.toggleType(n),this.setDate=n=>this._state.setDate(n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-sidebar"]],decls:38,vars:12,consts:[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","border-r","border-gray-300"],[1,"border-b","border-gray-200",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],[1,"p-4","space-y-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(l){return n.setDate(l)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e._uU(4,"Filters"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(7,"div",5)(8,"app-icon"),e._uU(9,"meeting_room"),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7),e._uU(12,"Room"),e.qZA(),e.TgZ(13,"div",8),e._uU(14," Room and meeting invites "),e.qZA()(),e._UZ(15,"mat-checkbox",9),e.ALo(16,"async"),e.qZA(),e.TgZ(17,"button",4),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(18,"div",5),e._UZ(19,"img",10),e.qZA(),e.TgZ(20,"div",6)(21,"div",7),e._uU(22,"Desk"),e.qZA(),e.TgZ(23,"div",8),e._uU(24,"Desk bookings"),e.qZA()(),e._UZ(25,"mat-checkbox",9),e.ALo(26,"async"),e.qZA(),e.TgZ(27,"button",4),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(28,"div",5)(29,"app-icon"),e._uU(30,"drive_eta"),e.qZA()(),e.TgZ(31,"div",6)(32,"div",7),e._uU(33,"Parking"),e.qZA(),e.TgZ(34,"div",8),e._uU(35,"Car space bookings"),e.qZA()(),e._UZ(36,"mat-checkbox",9),e.ALo(37,"async"),e.qZA()()()),2&t){let i,l,a;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,4,n.date)),e.xp6(14),e.Q6J("ngModel",null==(i=e.lcZ(16,6,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(l=e.lcZ(26,8,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(37,10,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))}},dependencies:[m.o,O.wG,Q.oG,p.JJ,p.On,E,r.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--93.css.map*/"]}),o})();var ie=c(5845),se=c(4187),le=c(6012),ce=c(4502),ae=c(9371),re=c(1294);function de(o,s){if(1&o&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function ue(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const l=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(l.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=s.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,11,t.id,"d")," ")}}let G=(()=>{class o{constructor(){this.active_date=(0,d.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,d.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,d.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,L.Z)(this.active_date,this.offset);let n=C(D(t));const i=(0,d.Z)(Date.now());let l=[];for(;l.length<42;)l.push({id:n.valueOf(),is_past:(0,k.Z)(n,i),is_month:A(n,t)}),n=(0,S.Z)(n,1);for(this.date_list=l,n=C(t),l=[];l.length<7;)l.push({id:n.valueOf(),is_past:(0,k.Z)(n,i),is_month:A(n,t)}),n=(0,S.Z)(n,1);this.short_list=l}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:p.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:12,vars:10,consts:[[1,"p-2"],["matRipple","",1,"flex","items-center","w-full","p-2",3,"click"],[1,"px-2","font-medium"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["mat-icon-button","","class","min-w-10 h-10 mx-2",3,"text-opacity-30","text-primary","text-black","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["mat-icon-button","",1,"min-w-10","h-10","mx-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.show_shortlist=!n.show_shortlist}),e.TgZ(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"app-icon"),e._uU(6,"arrow_drop_down"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,de,3,4,"div",4),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",5),e.YNc(11,ue,3,14,"button",6),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(5),e.Q6J("ngForOf",e.Dn7(9,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.list))},dependencies:[r.sg,m.o,v.lW,O.wG,r.OU,r.uU]}),o})();function pe(o,s){1&o&&(e.TgZ(0,"span"),e._uU(1,"(Today)"),e.qZA())}function he(o,s){if(1&o&&e._UZ(0,"event-card",13),2&o){const t=e.oxw().$implicit;e.Q6J("event",t)}}function _e(o,s){if(1&o&&e._UZ(0,"booking-card",14),2&o){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function ge(o,s){if(1&o&&(e.ynx(0),e.YNc(1,he,1,1,"event-card",11),e.YNc(2,_e,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&o){const t=s.$implicit,n=e.MAs(3),i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.isEvent(t))("ngIfElse",n)}}const me=function(){return[]};function fe(o,s){if(1&o&&(e.ynx(0),e.YNc(1,ge,4,2,"ng-container",10),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.loading)?e.DdM(6,me):e.lcZ(3,4,t.bookings))("ngForTrackBy",t.trackByFn)}}function Ze(o,s){1&o&&e._UZ(0,"mat-progress-bar",15)}function ve(o,s){if(1&o&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"date"),e.ALo(5,"async"),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.hij(" No events and bookings for ",e.xi3(4,1,e.lcZ(5,4,t.date),"EEEE, dd LLL yyyy")," ")}}const ye=[{path:"",component:(()=>{class o{constructor(t){this._state=t,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,M.U)(n=>(0,ie.Z)(n,Date.now()))),this.setDate=n=>this._state.setDate(n)}isEvent(t){return t instanceof w.ym}trackByFn(t,n){return n?.id}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-schedule"]],decls:21,vars:19,consts:[[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#E5E5E5]","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event"],[3,"booking"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,n){if(1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0),e._UZ(2,"schedule-sidebar",1),e.TgZ(3,"div",2)(4,"schedule-mobile-calendar",3),e.NdJ("ngModelChange",function(l){return n.setDate(l)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",5),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,pe,2,0,"span",6),e.ALo(13,"async"),e.qZA(),e.YNc(14,fe,4,7,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,Ze,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e._UZ(18,"footer-menu"),e.YNc(19,ve,6,6,"ng-template",null,9,e.W1O)),2&t){const i=e.MAs(20);let l;e.xp6(4),e.Q6J("ngModel",e.lcZ(5,6,n.date)),e.xp6(5),e.hij(" ",e.xi3(10,8,e.lcZ(11,11,n.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,13,n.is_today)),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(15,15,n.bookings))?null:l.length)("ngIfElse",i),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,17,n.loading))}},dependencies:[r.sg,r.O5,se.o,le.i,ce.j,ae.E,re.pW,p.JJ,p.On,I,j,G,r.Ov,r.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--94.css.map*/"]}),o})()},{path:"**",redirectTo:""}];let xe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,H.v,p.u5,T._r,B.Bz.forChild(ye)]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map