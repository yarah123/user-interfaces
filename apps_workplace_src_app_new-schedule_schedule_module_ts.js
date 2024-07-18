"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{1439:(De,x,s)=>{s.r(x),s.d(x,{AppScheduleModule:()=>Ne});var u=s(316),m=s(4456),N=s(9805),F=s(5244),H=s(6591),h=s(5323),e=s(8559),g=s(9434),b=s(5060),D=s(7024),E=s(597);let A=(()=>{class l{constructor(t,i){this._state=t,this._sheet_ref=i,this.filters=this._state.filters,this.toggleType=n=>this._state.toggleType(n),this.dismiss=()=>this._sheet_ref.dismiss()}static#e=this.\u0275fac=function(i){return new(i||l)(e.rXU(h.y),e.rXU(F.eN))};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["schedule-filter-card"]],decls:64,vars:42,consts:[[1,"flex","items-center","border-b","border-base-200","space-x-2","mb-4","text-xl"],["icon","","matRipple","",3,"click"],[1,"flex-1","w-1/2","text-center"],[1,"space-y-4","border-b","border-base-200","mb-4","pb-4"],["name","schedule-toggle-event-filter","matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"px-2","pb-2"],["btn","","matRipple","","name","schedule-apply-filter",1,"w-full",3,"click"]],template:function(i,n){if(1&i&&(e.j41(0,"div",0)(1,"button",1),e.bIt("click",function(){return n.dismiss()}),e.j41(2,"app-icon"),e.EFF(3,"chevron_left"),e.k0s()(),e.j41(4,"h2",2),e.EFF(5),e.nI1(6,"translate"),e.k0s(),e.nrm(7,"app-icon"),e.k0s(),e.j41(8,"div",3)(9,"button",4),e.bIt("click",function(){return n.toggleType("event")}),e.j41(10,"div",5)(11,"app-icon"),e.EFF(12,"meeting_room"),e.k0s()(),e.j41(13,"div",6)(14,"div",7),e.EFF(15),e.nI1(16,"translate"),e.k0s(),e.j41(17,"div",8),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.nrm(20,"mat-checkbox",9),e.nI1(21,"async"),e.k0s(),e.j41(22,"button",10),e.bIt("click",function(){return n.toggleType("desk")}),e.j41(23,"div",5),e.nrm(24,"img",11),e.k0s(),e.j41(25,"div",6)(26,"div",7),e.EFF(27),e.nI1(28,"translate"),e.k0s(),e.j41(29,"div",8),e.EFF(30),e.nI1(31,"translate"),e.k0s()(),e.nrm(32,"mat-checkbox",9),e.nI1(33,"async"),e.k0s(),e.j41(34,"button",12),e.bIt("click",function(){return n.toggleType("parking")}),e.j41(35,"div",5)(36,"app-icon"),e.EFF(37,"drive_eta"),e.k0s()(),e.j41(38,"div",6)(39,"div",7),e.EFF(40),e.nI1(41,"translate"),e.k0s(),e.j41(42,"div",8),e.EFF(43),e.nI1(44,"translate"),e.k0s()(),e.nrm(45,"mat-checkbox",9),e.nI1(46,"async"),e.k0s(),e.j41(47,"button",13),e.bIt("click",function(){return n.toggleType("visitor")}),e.j41(48,"div",5)(49,"app-icon"),e.EFF(50,"people"),e.k0s()(),e.j41(51,"div",6)(52,"div",7),e.EFF(53),e.nI1(54,"translate"),e.k0s(),e.j41(55,"div",8),e.EFF(56),e.nI1(57,"translate"),e.k0s()(),e.nrm(58,"mat-checkbox",9),e.nI1(59,"async"),e.k0s()(),e.j41(60,"div",14)(61,"button",15),e.bIt("click",function(){return n.dismiss()}),e.EFF(62),e.nI1(63,"translate"),e.k0s()()),2&i){let o,r,_,a;e.R7$(5),e.SpI(" ",e.bMT(6,14,"WPA.BOOKING_TYPES")," "),e.R7$(10),e.JRh(e.bMT(16,16,"WPA.ROOM")),e.R7$(3),e.SpI(" ",e.bMT(19,18,"WPA.SCHEULD_ROOM_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(o=e.bMT(21,20,n.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.R7$(7),e.JRh(e.bMT(28,22,"WPA.DESK")),e.R7$(3),e.SpI(" ",e.bMT(31,24,"WPA.SCHEDULE_DESK_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(r=e.bMT(33,26,n.filters))||null==r.shown_types?null:r.shown_types.includes("desk")),e.R7$(8),e.JRh(e.bMT(41,28,"WPA.PARKING")),e.R7$(3),e.SpI(" ",e.bMT(44,30,"WPA.SCHEDULE_PARKING_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(_=e.bMT(46,32,n.filters))||null==_.shown_types?null:_.shown_types.includes("parking")),e.R7$(8),e.JRh(e.bMT(54,34,"WPA.VISITORS")),e.R7$(3),e.SpI(" ",e.bMT(57,36,"WPA.SCHEDULE_VISITOR_FILTER"),"s "),e.R7$(2),e.Y8G("ngModel",null==(a=e.bMT(59,38,n.filters))||null==a.shown_types?null:a.shown_types.includes("visitor")),e.R7$(4),e.SpI(" ",e.bMT(63,40,"WPA.FILTERS_APPLY")," ")}},dependencies:[g.R,b.r6,D.So,m.BC,m.vS,u.Jj,E.D9],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--128.css.map*/"]})}return l})();var p=s(1157);function K(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",11),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("event",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.ROOMS")))}function J(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",12),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("desk",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.DESKS")))}function z(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",13),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("parking",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.PARKING")))}function Z(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",14),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("visitor",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.VISITORS")))}function Q(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",15),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("locker",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.LOCKERS")))}function q(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",15),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("group-event",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.GROUP_EVENT")))}function ee(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",17),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("event",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.ROOMS")))}function te(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",18),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("desk",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.DESKS")))}function ne(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",19),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("parking",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.PARKING")))}function le(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",20),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("visitor",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.VISITORS")))}function ie(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",21),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("locker",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.LOCKERS")))}function oe(l,c){if(1&l){const t=e.RV6();e.j41(0,"div",16)(1,"div"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"button",21),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("group-event",!0))}),e.j41(5,"app-icon"),e.EFF(6,"close"),e.k0s()()()}2&l&&(e.R7$(2),e.JRh(e.bMT(3,1,"WPA.GROUP_EVENTS")))}let G=(()=>{class l{hasFeature(t){return this._settings.get("app.features")?.includes(t)}constructor(t,i,n){this._sheet=t,this._state=i,this._settings=n,this.filters=this._state.filters,this.toggleType=(o,r=!1)=>this._state.toggleType(o,r)}openFilters(){this._sheet.open(A)}static#e=this.\u0275fac=function(i){return new(i||l)(e.rXU(F.VK),e.rXU(h.y),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["schedule-filters"]],decls:34,vars:39,consts:[[1,"hidden","sm:block","bg-base-100","border","border-base-200","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-base-200",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["btn","","matRipple","","name","schedule-open-filter-edit",1,"min-w-0","sm:w-24",3,"click"],[1,"flex","items-center","justify-center","space-x-2"],[1,"text-xl"],["class","flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-base-200"],[1,"px-2"],["icon","","name","schedule-remove-event-filter",3,"click"],["icon","","name","schedule-remove-desk-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-parking-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-visitor-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-locker-filter",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-base-200","bg-base-100","text-sm","pl-2"],["icon","","name","schedule-remove-event-filter-mobile",3,"click"],["icon","","name","schedule-remove-desk-filter-mobile",3,"click"],["icon","","name","schedule-remove-parking-filter-mobile",3,"click"],["icon","","name","schedule-remove-visitor-filter-mobile",3,"click"],["icon","","name","schedule-remove-locker-filter-mobile",3,"click"]],template:function(i,n){if(1&i&&(e.j41(0,"div",0)(1,"h3",1),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"div",2),e.DNE(5,K,7,3,"div",3),e.nI1(6,"async"),e.DNE(7,J,7,3,"div",3),e.nI1(8,"async"),e.DNE(9,z,7,3,"div",3),e.nI1(10,"async"),e.DNE(11,Z,7,3,"div",3),e.nI1(12,"async"),e.DNE(13,Q,7,3,"div",3),e.nI1(14,"async"),e.DNE(15,q,7,3,"div",3),e.nI1(16,"async"),e.k0s()(),e.j41(17,"div",4)(18,"button",5),e.bIt("click",function(){return n.openFilters()}),e.j41(19,"div",6)(20,"app-icon",7),e.EFF(21,"filter_list"),e.k0s()()(),e.DNE(22,ee,7,3,"div",8),e.nI1(23,"async"),e.DNE(24,te,7,3,"div",8),e.nI1(25,"async"),e.DNE(26,ne,7,3,"div",8),e.nI1(27,"async"),e.DNE(28,le,7,3,"div",8),e.nI1(29,"async"),e.DNE(30,ie,7,3,"div",8),e.nI1(31,"async"),e.DNE(32,oe,7,3,"div",8),e.nI1(33,"async"),e.k0s()),2&i){let o,r,_,a,d,I,C,y,M,j,P,$;e.R7$(2),e.SpI(" ",e.bMT(3,13,"WPA.SCHEDULE_CAT_FILTERS")," "),e.R7$(3),e.Y8G("ngIf",null==(o=e.bMT(6,15,n.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.R7$(2),e.Y8G("ngIf",(null==(r=e.bMT(8,17,n.filters))||null==r.shown_types?null:r.shown_types.includes("desk"))&&n.hasFeature("desks")),e.R7$(2),e.Y8G("ngIf",(null==(_=e.bMT(10,19,n.filters))||null==_.shown_types?null:_.shown_types.includes("parking"))&&n.hasFeature("parking")),e.R7$(2),e.Y8G("ngIf",(null==(a=e.bMT(12,21,n.filters))||null==a.shown_types?null:a.shown_types.includes("visitor"))&&n.hasFeature("visitor-invite")),e.R7$(2),e.Y8G("ngIf",(null==(d=e.bMT(14,23,n.filters))||null==d.shown_types?null:d.shown_types.includes("locker"))&&n.hasFeature("lockers")),e.R7$(2),e.Y8G("ngIf",(null==(I=e.bMT(16,25,n.filters))||null==I.shown_types?null:I.shown_types.includes("group-evnet"))&&n.hasFeature("group-events")),e.R7$(7),e.Y8G("ngIf",null==(C=e.bMT(23,27,n.filters))||null==C.shown_types?null:C.shown_types.includes("event")),e.R7$(2),e.Y8G("ngIf",(null==(y=e.bMT(25,29,n.filters))||null==y.shown_types?null:y.shown_types.includes("desk"))&&n.hasFeature("desks")),e.R7$(2),e.Y8G("ngIf",(null==(M=e.bMT(27,31,n.filters))||null==M.shown_types?null:M.shown_types.includes("parking"))&&n.hasFeature("parking")),e.R7$(2),e.Y8G("ngIf",(null==(j=e.bMT(29,33,n.filters))||null==j.shown_types?null:j.shown_types.includes("visitor"))&&n.hasFeature("visitor-invite")),e.R7$(2),e.Y8G("ngIf",(null==(P=e.bMT(31,35,n.filters))||null==P.shown_types?null:P.shown_types.includes("locker"))&&n.hasFeature("lockers")),e.R7$(2),e.Y8G("ngIf",(null==($=e.bMT(33,37,n.filters))||null==$.shown_types?null:$.shown_types.includes("group-event"))&&n.hasFeature("group-events"))}},dependencies:[u.bT,g.R,b.r6,u.Jj,E.D9]})}return l})();var se=s(9058);function ce(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",16),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("event"))}),e.j41(1,"div",17)(2,"app-icon"),e.EFF(3,"place"),e.k0s()(),e.j41(4,"div",18)(5,"div",19),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",20),e.EFF(9),e.nI1(10,"translate"),e.k0s()(),e.nrm(11,"mat-checkbox",21),e.nI1(12,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(6),e.JRh(e.bMT(7,3,"WPA.ROOM")),e.R7$(3),e.SpI(" ",e.bMT(10,5,"WPA.SCHEDULE_ROOM_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(t=e.bMT(12,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("event"))}}function re(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("desk"))}),e.j41(1,"div",17),e.nrm(2,"img",23),e.k0s(),e.j41(3,"div",18)(4,"div",19),e.EFF(5),e.nI1(6,"translate"),e.k0s(),e.j41(7,"div",20),e.EFF(8),e.nI1(9,"translate"),e.k0s()(),e.nrm(10,"mat-checkbox",21),e.nI1(11,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(5),e.JRh(e.bMT(6,3,"WPA.DESK")),e.R7$(3),e.SpI(" ",e.bMT(9,5,"WPA.SCHEDULE_DESK_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(t=e.bMT(11,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("desk"))}}function ae(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",24),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("parking"))}),e.j41(1,"div",17)(2,"app-icon"),e.EFF(3,"drive_eta"),e.k0s()(),e.j41(4,"div",18)(5,"div",19),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",20),e.EFF(9),e.nI1(10,"translate"),e.k0s()(),e.nrm(11,"mat-checkbox",21),e.nI1(12,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(6),e.JRh(e.bMT(7,3,"WPA.PARKING")),e.R7$(3),e.SpI(" ",e.bMT(10,5,"WPA.SCHEDULE_PARKING_FILTER")," "),e.R7$(2),e.Y8G("ngModel",null==(t=e.bMT(12,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("parking"))}}function _e(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",25),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("visitor"))}),e.j41(1,"div",17)(2,"app-icon"),e.EFF(3,"people"),e.k0s()(),e.j41(4,"div",18)(5,"div",19),e.pXf(6,1),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",20),e.pXf(9,2),e.nI1(10,"translate"),e.k0s()(),e.nrm(11,"mat-checkbox",21),e.nI1(12,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(7),e.uP7(e.bMT(7,3,"WPA.VISITORS")),e.nnv(6),e.R7$(3),e.uP7(e.bMT(10,5,"WPA.SCHEDULE_VISITOR_FILTER")),e.nnv(9),e.R7$(),e.Y8G("ngModel",null==(t=e.bMT(12,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("visitor"))}}function de(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",26),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("locker"))}),e.j41(1,"div",17)(2,"app-icon"),e.EFF(3,"door_back"),e.k0s()(),e.j41(4,"div",18)(5,"div",19),e.pXf(6,3),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",20),e.pXf(9,4),e.nI1(10,"translate"),e.k0s()(),e.nrm(11,"mat-checkbox",21),e.nI1(12,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(7),e.uP7(e.bMT(7,3,"WPA.LOCKERS")),e.nnv(6),e.R7$(3),e.uP7(e.bMT(10,5,"WPA.SCHEDULE_LOCKER_FILTER")),e.nnv(9),e.R7$(),e.Y8G("ngModel",null==(t=e.bMT(12,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("locker"))}}function ue(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",26),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleType("group-event"))}),e.j41(1,"div",17)(2,"app-icon"),e.EFF(3,"door_back"),e.k0s()(),e.j41(4,"div",18)(5,"div",19),e.pXf(6,5),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",20),e.pXf(9,6),e.nI1(10,"translate"),e.k0s()(),e.nrm(11,"mat-checkbox",21),e.nI1(12,"async"),e.k0s()}if(2&l){let t;const i=e.XpG();e.R7$(7),e.uP7(e.bMT(7,3,"WPA.GROUP_EVENT")),e.nnv(6),e.R7$(3),e.uP7(e.bMT(10,5,"WPA.SCHEDULE_GROUP_EVENT_FILTER")),e.nnv(9),e.R7$(),e.Y8G("ngModel",null==(t=e.bMT(12,7,i.filters))||null==t.shown_types?null:t.shown_types.includes("group-event"))}}let L=(()=>{class l{hasFeature(t){return this._settings.get("app.features")?.includes(t)}constructor(t,i){this._state=t,this._settings=i,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=n=>this._state.toggleType(n),this.setDate=n=>this._state.setDate(n)}static#e=this.\u0275fac=function(i){return new(i||l)(e.rXU(h.y),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["schedule-sidebar"]],decls:12,vars:9,consts:()=>{let t,i,n,o,r,_,a;return t=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,i=$localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\ufffd0\ufffd"}:INTERPOLATION: `,n=$localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\ufffd0\ufffd"}:INTERPOLATION: `,o=$localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\ufffd0\ufffd"}:INTERPOLATION: `,r=$localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\ufffd0\ufffd"}:INTERPOLATION: `,_=$localize`:␟8e8a186e6f6bf074d0c8cd68ecf385cb3b46fba4␟2082215832043440591: ${"\ufffd0\ufffd"}:INTERPOLATION: `,a=$localize`:␟c0572e59dd4e3290349c620fe79926580977d70d␟7788094696937337857: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[t,i,n,o,r,_,a,[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-base-100[#1F2021]","border-r","border-base-200"],[1,"border-b","border-base-200",3,"ngModelChange","ngModel"],[1,"mx-4","mt-4","font-medium"],[1,"p-4","space-y-4","flex-1","h-1/2","overflow-auto"],["matRipple","","name","schedule-toggle-event-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-desk-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-parking-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-visitor-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-locker-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-event-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-base-200","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["matRipple","","name","schedule-toggle-locker-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"]]},template:function(i,n){1&i&&(e.j41(0,"div",7)(1,"date-calendar",8),e.nI1(2,"async"),e.bIt("ngModelChange",function(r){return n.setDate(r)}),e.k0s(),e.j41(3,"h3",9),e.pXf(4,0),e.k0s(),e.j41(5,"div",10),e.DNE(6,ce,13,9,"button",11)(7,re,12,9,"button",12)(8,ae,13,9,"button",13)(9,_e,13,9,"button",14)(10,de,13,9,"button",15)(11,ue,13,9,"button",15),e.k0s()()),2&i&&(e.R7$(),e.Y8G("ngModel",e.bMT(2,7,n.date)),e.R7$(5),e.Y8G("ngIf",n.hasFeature("spaces")),e.R7$(),e.Y8G("ngIf",n.hasFeature("desks")),e.R7$(),e.Y8G("ngIf",n.hasFeature("parking")),e.R7$(),e.Y8G("ngIf",n.hasFeature("visitor-invite")),e.R7$(),e.Y8G("ngIf",n.hasFeature("lockers")),e.R7$(),e.Y8G("ngIf",n.hasFeature("group-events")))},dependencies:[u.bT,g.R,b.r6,D.So,se.I,m.BC,m.vS,u.Jj,E.D9],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--129.css.map*/"]})}return l})();var T=s(9204),S=s(7915),f=s(8113),R=s(1257),O=s(2730),w=s(5443),pe=s(2175),me=s(2587),fe=s(7434),he=s(895),ge=s(1765),be=s(7547),Ee=s(6354),v=s(3240),ve=s(6337),k=s(610),U=s(452),V=s(5882),X=s(9681),W=s(8797);function Fe(l,c){if(1&l&&(e.j41(0,"div",9),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&l){const t=c.$implicit;e.R7$(),e.SpI(" ",e.i5U(2,1,t.id,"EE")," ")}}function Te(l,c){1&l&&e.nrm(0,"div",12)}function Se(l,c){if(1&l){const t=e.RV6();e.j41(0,"button",10),e.bIt("click",function(){const n=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.setValue(n.id))}),e.DNE(1,Te,1,0,"div",11),e.EFF(2),e.nI1(3,"date"),e.k0s()}if(2&l){const t=c.$implicit,i=e.XpG();e.AVh("text-opacity-30",!t.is_month)("text-white",t.id===i.active_date)("text-black",t.id!==i.active_date)("dark:text-white",t.id!==i.active_date)("dark:text-opacity-30",!t.is_month)("bg-primary",t.id===i.active_date)("font-normal",t.id!==i.active_date),e.R7$(),e.Y8G("ngIf",t.is_today),e.R7$(),e.SpI(" ",e.i5U(3,16,t.id,"d")," ")}}let B=(()=>{class l{constructor(){this.active_date=(0,v.o)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,v.o)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,v.o)(t).valueOf(),this.offset=0,this.generateDates()}resetMonth(){this.changeMonth(-this.offset)}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,ve.P)(this.active_date,this.offset);let i=(0,k.k)((0,U.w)(t));const n=(0,v.o)(Date.now());let o=[];for(;o.length<42;)o.push({id:i.valueOf(),is_past:(0,V.Y)(i,n),is_month:(0,X.t)(i,t),is_today:(0,R.r)(Date.now(),i)}),i=(0,W.f)(i,1);for(this.date_list=o,i=(0,k.k)(0===this.offset?t:(0,U.w)(t)),o=[];o.length<7;)o.push({id:i.valueOf(),is_past:(0,V.Y)(i,n),is_month:(0,X.t)(i,t),is_today:(0,R.r)(Date.now(),i)}),i=(0,W.f)(i,1);this.short_list=o}static#e=this.\u0275fac=function(i){return new(i||l)};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["schedule-mobile-calendar"]],features:[e.Jv_([{provide:m.kq,useExisting:(0,e.Rfq)(()=>l),multi:!0}])],decls:20,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],["btn","","matRipple","",1,"clear","font-medium",3,"click"],[1,"flex","items-center"],["icon","","matRipple","",3,"click"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["icon","","matRipple","","class","min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible",3,"text-opacity-30","text-white","text-black","dark:text-white","dark:text-opacity-30","bg-primary","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["icon","","matRipple","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2","h-9","overflow-visible",3,"click"],["class","absolute -inset-0.5 border border-primary rounded-full",4,"ngIf"],[1,"absolute","-inset-0.5","border","border-primary","rounded-full"]],template:function(i,n){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"button",2),e.bIt("click",function(){return n.resetMonth()}),e.EFF(3),e.nI1(4,"date"),e.k0s(),e.j41(5,"div",3)(6,"button",4),e.bIt("click",function(){return n.changeMonth(-1)}),e.j41(7,"app-icon"),e.EFF(8,"chevron_left"),e.k0s()(),e.j41(9,"button",4),e.bIt("click",function(){return n.changeMonth(1)}),e.j41(10,"app-icon"),e.EFF(11,"chevron_right"),e.k0s()(),e.j41(12,"button",4),e.bIt("click",function(){return n.show_shortlist=!n.show_shortlist}),e.j41(13,"app-icon"),e.EFF(14,"arrow_drop_down"),e.k0s()()()(),e.j41(15,"div",5),e.DNE(16,Fe,3,4,"div",6),e.nI1(17,"slice"),e.k0s(),e.j41(18,"div",7),e.DNE(19,Se,4,19,"button",8),e.k0s()()),2&i&&(e.R7$(3),e.SpI(" ",e.i5U(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL YYYY")," "),e.R7$(13),e.Y8G("ngForOf",e.brH(17,6,n.date_list,0,7)),e.R7$(3),e.Y8G("ngForOf",n.list))},dependencies:[u.Sq,u.bT,g.R,b.r6,u.P9,u.vh]})}return l})();function Re(l,c){1&l&&e.nrm(0,"topbar")}function ke(l,c){1&l&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&l&&(e.R7$(),e.SpI("(",e.bMT(2,1,"COMMON.TODAY"),")"))}function Ie(l,c){if(1&l){const t=e.RV6();e.j41(0,"event-card",13),e.bIt("edit",function(){e.eBV(t);const n=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.edit(n))})("remove",function(n){e.eBV(t);const o=e.XpG().$implicit,r=e.XpG(2);return e.Njj(r.remove(o,n))}),e.k0s()}if(2&l){const t=e.XpG().$implicit;e.Y8G("event",t)}}function Ce(l,c){if(1&l){const t=e.RV6();e.j41(0,"booking-card",14),e.bIt("edit",function(){e.eBV(t);const n=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.editBooking(n))})("remove",function(){e.eBV(t);const n=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.remove(n))})("end",function(){e.eBV(t);const n=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.end(n))}),e.k0s()}if(2&l){const t=e.XpG().$implicit;e.Y8G("booking",t)}}function ye(l,c){if(1&l&&(e.qex(0),e.DNE(1,Ie,1,1,"event-card",12)(2,Ce,1,1,"ng-template",null,1,e.C5r),e.bVm()),2&l){const t=c.$implicit,i=e.sdS(3),n=e.XpG(2);e.R7$(),e.Y8G("ngIf",n.isEvent(t))("ngIfElse",i)}}function Me(l,c){if(1&l&&(e.qex(0),e.DNE(1,ye,4,2,"ng-container",11),e.nI1(2,"async"),e.bVm()),2&l){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,2,t.bookings))("ngForTrackBy",t.trackByFn)}}function je(l,c){1&l&&e.nrm(0,"mat-progress-bar",15)}function Pe(l,c){1&l&&e.nrm(0,"footer-menu")}function $e(l,c){if(1&l&&(e.j41(0,"div",16),e.nrm(1,"img",17),e.j41(2,"p",18),e.EFF(3),e.nI1(4,"translate"),e.nI1(5,"async"),e.nI1(6,"date"),e.k0s()()),2&l){const t=e.XpG();e.R7$(3),e.Lme(" ",e.bMT(4,2,"WPA.SCHEDULE_EMPTY")," ",e.i5U(6,6,e.bMT(5,4,t.date),"EEEE, dd LLL yyyy")," ")}}const xe=[{path:"",component:(()=>{class l extends p.Tv{isEvent(t){return t instanceof f.LR}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}constructor(t,i,n,o,r,_){super(),this._state=t,this._event_form=i,this._booking_form=n,this._router=o,this._dialog=r,this._settings=_,this.bookings=(0,pe.zV)([this._state.filtered_bookings,this._state.loading]).pipe((0,w.T)(([a,d])=>d?[]:a)),this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,w.T)(a=>(0,R.r)(a,Date.now()))),this.setDate=a=>this._state.setDate(a)}ngOnInit(){this._state.triggerPoll(),this.subscription("poll",this._state.startPolling())}trackByFn(t,i){return i?.id}edit(t){var i=this;return(0,T.A)(function*(){i._router.navigate(["/book","meeting","form"]),t.creator!==t.mailbox&&(t=(yield(0,f.UU)({period_start:t.event_start,period_end:t.event_end,ical_uid:t.ical_uid}).toPromise()).find(n=>n.ical_uid===t.ical_uid)||t),i._event_form.newForm(t)})()}editBooking(t){this._router.navigate(["/book",`new-${t.type}`]),this._booking_form.newForm(t),setTimeout(()=>{this._booking_form.form.patchValue({resources:[{id:t.asset_id,name:t.asset_name||t.description}],asset_id:t.asset_id})},100)}remove(t,i=!1){var n=this;return(0,T.A)(function*(){const o=`${(0,O.GP)(t.date,"dd MMM yyyy h:mma")}`,_=`Delete the ${i?"recurring series of ":""}booking for ${t instanceof f.LR?t.space?.display_name:t.asset_name||t.asset_id} at ${o}`,a=yield(0,p.GE)({title:"Delete booking",content:_,icon:{content:"delete"}},n._dialog);t instanceof f.LR&&t.creator!==t.mailbox&&(t=(yield(0,f.UU)({period_start:t.event_start,period_end:t.event_end,ical_uid:t.ical_uid}).toPromise()).find(d=>d.ical_uid===t.ical_uid)||t),"done"===a.reason&&(a.loading("Requesting booking deletion..."),yield(t instanceof f.LR?f.Nn:S.UN)(i?t.recurring_event_id:t.id,{calendar:n._settings.get("app.no_user_calendar")?null:t.calendar||(0,p.Ny)()?.email,system_id:t.system?.id}).toPromise().catch(d=>{throw(0,p.UG)(`Unable to delete booking. ${d}`),a.close(),d}),(0,p.VX)("Successfully deleted booking."),n._state.removeItem(t),n._dialog.closeAll())})()}end(t){var i=this;return(0,T.A)(function*(){const n=`${(0,O.GP)(t.date,"dd MMM yyyy h:mma")}`,r=`End the booking for ${t.asset_name||t.asset_id} at ${n}`,_=yield(0,p.GE)({title:"End booking",content:r,icon:{content:"delete"}},i._dialog);"done"===_.reason&&(_.loading("Ending booking..."),yield(0,S.Z$)(t.id,!1).toPromise().catch(a=>{throw(0,p.UG)(`Unable to end booking. ${a}`),_.close(),a}),(0,p.VX)("Successfully ended booking."),i._state.removeItem(t),i._dialog.closeAll())})()}static#e=this.\u0275fac=function(i){return new(i||l)(e.rXU(h.y),e.rXU(f.Ws),e.rXU(S.nx),e.rXU(N.Ix),e.rXU(me.bZ),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["app-schedule"]],features:[e.Vt3],decls:21,vars:21,consts:[["empty_state",""],["booking_card",""],[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-base-200","relative"],[1,"hidden","sm:block","bg-base-100"],[1,"w-full","bg-base-100","border-b","border-neutral","sm:hidden"],[3,"ngModelChange","ngModel"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],[3,"edit","remove","event"],[3,"edit","remove","end","booking"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(i,n){if(1&i){const o=e.RV6();e.DNE(0,Re,1,0,"topbar",2),e.j41(1,"div",3),e.nrm(2,"schedule-sidebar",4),e.j41(3,"div",5)(4,"schedule-mobile-calendar",6),e.nI1(5,"async"),e.bIt("ngModelChange",function(_){return e.eBV(o),e.Njj(n.setDate(_))}),e.k0s()(),e.j41(6,"div",7),e.nrm(7,"schedule-filters"),e.j41(8,"h3",8),e.EFF(9),e.nI1(10,"async"),e.nI1(11,"date"),e.DNE(12,ke,3,3,"span",2),e.nI1(13,"async"),e.k0s(),e.DNE(14,Me,3,4,"ng-container",9),e.nI1(15,"async"),e.k0s(),e.DNE(16,je,1,0,"mat-progress-bar",10),e.nI1(17,"async"),e.k0s(),e.DNE(18,Pe,1,0,"footer-menu",2)(19,$e,7,9,"ng-template",null,0,e.C5r)}if(2&i){let o;const r=e.sdS(20);e.Y8G("ngIf",!n.hide_nav),e.R7$(4),e.Y8G("ngModel",e.bMT(5,8,n.date)),e.R7$(5),e.SpI(" ",e.i5U(11,12,e.bMT(10,10,n.date),"EEE dd LLL yyyy")," "),e.R7$(3),e.Y8G("ngIf",e.bMT(13,15,n.is_today)),e.R7$(2),e.Y8G("ngIf",null==(o=e.bMT(15,17,n.bookings))?null:o.length)("ngIfElse",r),e.R7$(2),e.Y8G("ngIf",e.bMT(17,19,n.loading)),e.R7$(2),e.Y8G("ngIf",!n.hide_nav)}},dependencies:[u.Sq,u.bT,fe.G,he.e,ge.w,be.F,Ee.HM,m.BC,m.vS,L,G,B,u.Jj,u.vh,E.D9],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n\n/*# sourceMappingURL=schedule.component.ts-angular-inline--130.css.map*/"]})}return l})()},{path:"**",redirectTo:""}];let Ne=(()=>{class l{static#e=this.\u0275fac=function(i){return new(i||l)};static#t=this.\u0275mod=e.$C({type:l});static#n=this.\u0275inj=e.G2t({imports:[u.MD,H.p,m.YN,F.vF,N.iI.forChild(xe)]})}return l})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map