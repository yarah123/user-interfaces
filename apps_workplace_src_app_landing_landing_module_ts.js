"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{6382:(dt,y,o)=>{o.r(y),o.d(y,{AppLandingModule:()=>lt});var r=o(8267),f=o(525),O=o(2805),d=o(8806),u=o(8222),v=o(1119),w=o(8252),F=o(9820),S=o(9026),q=o(592),M=o(8537),P=o(4452),Q=o(8027),E=o(8377),x=o(5012),g=o(867),J=o(7794),h=o(9148),Y=o(4555),j=o(8356),t=o(2222);let Z=(()=>{class e extends g.KG{constructor(n,i){super(),this._calendar=n,this._org=i,this._options=new v.X({}),this._free_spaces=new v.X([]),this._upcoming_events=new v.X([]),this._contacts=new v.X([]),this._level_occupancy=new v.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,F.b)(500),(0,S.w)(({search:a})=>a?(0,h.VE)(a):(0,w.of)([])),(0,q.K)(a=>[]),(0,M.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){return(0,d.mG)(this,void 0,void 0,function*(){if(yield this._org.initialised.pipe((0,P.P)(i=>i)).toPromise(),this.subscription("building",this._org.active_building.pipe((0,Q.h)(i=>!!i)).subscribe(()=>this.updateBuildingMetadata())),!this._org.organisation.bindings.area_management)return;const n=(0,u.rTZ)(this._org.organisation.bindings.area_management,"AreaManagement").binding("overview");n.listen().subscribe(i=>this.updateOccupancy(i||{})),n.bind()})}setOptions(n){this._options.next(Object.assign(Object.assign({},this._options.getValue()),n))}pollFreeSpaces(n=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),n)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(n=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),n)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){return(0,d.mG)(this,void 0,void 0,function*(){const n=yield(0,u.rlq)((0,g.ar)().id,"contacts").toPromise();this._contacts.next((n.details instanceof Array?n.details:[]).map(a=>new h.n5(a)))})}addContact(n){return(0,d.mG)(this,void 0,void 0,function*(){let i=[...this._contacts.getValue()];i.push(n),i=(0,g.Tw)(i,"email");const a=yield(0,u.Ymr)((0,g.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();this._contacts.next((a.details instanceof Array?a.details:[]).map(c=>new h.n5(c)))})}removeContact(n){return(0,d.mG)(this,void 0,void 0,function*(){let i=[...this._contacts.getValue()];i=i.filter(c=>c.email!==n.email);const a=yield(0,u.Ymr)((0,g.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();this._contacts.next((a.details instanceof Array?a.details:[]).map(c=>new h.n5(c)))})}updateOccupancy(n){return(0,d.mG)(this,void 0,void 0,function*(){const i=[...this._org.levels];i.sort((a,l)=>{var c,p;return(null===(c=n[a.id])||void 0===c?void 0:c.recommendation)-(null===(p=n[l.id])||void 0===p?void 0:p.recommendation)}),this._level_occupancy.next(i)})}updateFreeSpaces(){return(0,d.mG)(this,void 0,void 0,function*(){if(!this._org.building)return;const n=Math.floor((new Date).valueOf()/1e3),i=Math.floor((0,x.Z)(new Date).valueOf()/1e3),a=yield this._calendar.freeBusy({period_start:n,period_end:i,zone_ids:this._org.building.id}).pipe((0,E.U)(l=>l.filter(c=>!c.availability.length||c.availability.find(p=>"busy"!==p.status)))).toPromise();a.sort((l,c)=>l.capacity-c.capacity),this._free_spaces.next(a)})}updateUpcomingEvents(){return(0,d.mG)(this,void 0,void 0,function*(){const n=Math.floor((new Date).valueOf()/1e3),i=Math.floor((0,x.Z)(new Date).valueOf()/1e3),a=yield(0,J.u$)({period_start:n,period_end:i,calendars:(0,g.ar)().email}).toPromise();this._upcoming_events.next(a)})}updateBuildingMetadata(){return(0,d.mG)(this,void 0,void 0,function*(){const n=this._org.building,i=yield(0,u.rlq)(n.id,"bindings").toPromise();if(!i.details.occupancy)return;const a=i.details.occupancy,l=(0,u.rTZ)(a.sys,a.module,a.index);!l||(this._occupancy_binding&&this._occupancy_binding.unbind(),this._occupancy_binding=l.binding("occupancy"),this._occupancy_binding.bind(),this.subscription("occupancy_binding",this._occupancy_binding.listen().subscribe(c=>{const p=Object.keys(c).map(m=>Object.assign({id:m},c[m]));p.sort((m,rt)=>m.recommendation_factor-rt.recommendation_factor),this._level_occupancy.next(p.map(m=>this._org.levelWithID([m.id])))})))})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(j.ot),t.LFG(Y.w7))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var N=o(2157),k=o(9680);const _=function(){return["/explore"]},B=function(e){return{level:e}};function D(e,s){if(1&e&&(t.TgZ(0,"button",7),t._UZ(1,"div",8),t.TgZ(2,"div",9),t.TgZ(3,"div",10),t._uU(4),t.qZA(),t.TgZ(5,"div",11),t.TgZ(6,"app-icon",12),t._uU(7,"place"),t.qZA(),t.TgZ(8,"span"),t._uU(9,"Unknown Building"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=s.$implicit;t.Q6J("routerLink",t.DdM(3,_))("queryParams",t.VKq(4,B,n.id)),t.xp6(4),t.hij(" ",n.display_name||n.name," ")}}function G(e,s){1&e&&(t.TgZ(0,"span",13),t._uU(1," No free spaces "),t.qZA())}const I=function(e){return{space:e}};function X(e,s){if(1&e&&(t.TgZ(0,"button",7),t._UZ(1,"div",8),t.TgZ(2,"div",9),t.TgZ(3,"div",10),t._uU(4),t.qZA(),t.TgZ(5,"div",11),t.TgZ(6,"app-icon",12),t._uU(7,"place"),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=s.$implicit;t.Q6J("routerLink",t.DdM(4,_))("queryParams",t.VKq(5,I,n.email)),t.xp6(4),t.hij(" ",n.display_name||n.name," "),t.xp6(5),t.Oqu(n.level.display_name||n.level.name)}}function R(e,s){1&e&&(t.TgZ(0,"span",13),t._uU(1," No free rooms "),t.qZA())}let b=(()=>{class e{constructor(n){this._state=n,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){this._state.pollFreeSpaces()})}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["landing-availability"]],decls:17,vars:12,consts:[[1,"py-2"],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],[1,"text-sm","sm:text-base","px-4"],[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],[1,"text-sm","sm:text-base","my-2","px-4"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200"],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Available Now"),t.qZA(),t.TgZ(3,"div",2),t._uU(4,"Spaces"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,D,10,6,"button",4),t.ALo(7,"async"),t.YNc(8,G,2,0,"span",5),t.ALo(9,"async"),t.qZA(),t.TgZ(10,"div",6),t._uU(11,"Rooms"),t.qZA(),t.TgZ(12,"div",3),t.YNc(13,X,10,7,"button",4),t.ALo(14,"async"),t.YNc(15,R,2,0,"span",5),t.ALo(16,"async"),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngForOf",t.lcZ(7,4,i.levels_free)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(9,6,i.levels_free).length),t.xp6(5),t.Q6J("ngForOf",t.lcZ(14,8,i.space_list)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(16,10,i.space_list).length))},directives:[r.sg,r.O5,N.wG,f.rH,k.o],pipes:[r.Ov],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--50.css.map*/"]}),e})();var A=o(7752),V=o(7819);function $(e,s){if(1&e&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t._UZ(2,"a-user-avatar",8),t._UZ(3,"div",9),t.qZA(),t.TgZ(4,"div",10),t.TgZ(5,"div",11),t._uU(6),t.qZA(),t.TgZ(7,"div",12),t._uU(8),t.qZA(),t.TgZ(9,"div",13),t._uU(10),t.qZA(),t.qZA(),t.qZA()),2&e){const n=s.$implicit;t.xp6(2),t.Q6J("user",n),t.xp6(1),t.ekj("bg-error",!n.location)("bg-success",n.location),t.xp6(3),t.Oqu(n.name),t.xp6(2),t.hij(" ",n.organisation," "),t.xp6(2),t.hij(" ",n.location," ")}}let T=(()=>{class e{constructor(n){this._state=n,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=i=>this._state.addContact(i),this.removeUser=i=>this._state.removeContact(i),this.updateSearch=i=>this._state.setOptions({search:i})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["landing-colleagues"]],decls:9,vars:3,consts:[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","border-r","border-gray-200"],[1,"flex","items-center","justify-between","px-4","py-2"],[1,"font-medium"],["mat-button","",1,"inverse"],[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],["class","flex items-center px-4 space-x-4",4,"ngFor","ngForOf"],[1,"flex","items-center","px-4","space-x-4"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","absolute","bottom-1","right-1"],[1,"leading-tight"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"Colleagues"),t.qZA(),t.TgZ(4,"button",3),t._uU(5,"Add"),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,$,11,8,"div",5),t.ALo(8,"async"),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngForOf",t.lcZ(8,1,i.contacts)))},directives:[A.lW,r.sg,V.k],pipes:[r.Ov],encapsulation:2}),e})();var z=o(620),K=o(4260),W=o(7510);function H(e,s){if(1&e&&t._UZ(0,"event-card",12),2&e){const n=t.oxw().$implicit;t.Q6J("event",n)("show_day",!0)}}function tt(e,s){if(1&e&&t._UZ(0,"booking-card",13),2&e){const n=t.oxw(3);t.Q6J("booking",n.booking)("show_day",!0)}}function nt(e,s){if(1&e&&(t.ynx(0),t.ynx(1,9),t.YNc(2,H,1,2,"event-card",10),t.YNc(3,tt,1,2,"booking-card",11),t.BQk(),t.BQk()),2&e){const n=s.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngSwitch",i.type(n)),t.xp6(1),t.Q6J("ngSwitchCase","event"),t.xp6(1),t.Q6J("ngSwitchCase","booking")}}function et(e,s){if(1&e&&(t.ynx(0),t.YNc(1,nt,4,3,"ng-container",8),t.ALo(2,"slice"),t.ALo(3,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,t.lcZ(3,6,n.upcoming_events),0,3))("ngForTrackBy",n.trackByFn)}}function it(e,s){1&e&&(t.TgZ(0,"div",14),t._UZ(1,"img",15),t.TgZ(2,"p",16),t._uU(3,"You have no upcoming bookings"),t.qZA(),t.qZA())}const U=function(){return["/your-bookings"]};let L=(()=>{class e{constructor(n){this._state=n,this.upcoming_events=this._state.upcoming_events}type(n){return n instanceof z.$N?"booking":"event"}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(n,i){return null==i?void 0:i.id}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["landing-upcoming"]],decls:13,vars:8,consts:[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],["button","","mat-button","",1,"inverse","hidden","sm:block",3,"routerLink"],[1,"inverse","block","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day",4,"ngSwitchCase"],[3,"booking","show_day",4,"ngSwitchCase"],[3,"event","show_day"],[3,"booking","show_day"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Your Bookings"),t.qZA(),t.TgZ(4,"a",3),t._uU(5," View All "),t.qZA(),t.TgZ(6,"a",4),t._uU(7," View All "),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.YNc(9,et,4,8,"ng-container",6),t.ALo(10,"async"),t.qZA(),t.qZA(),t.YNc(11,it,4,0,"ng-template",null,7,t.W1O)),2&n){const a=t.MAs(12);let l;t.xp6(4),t.Q6J("routerLink",t.DdM(6,U)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,U)),t.xp6(3),t.Q6J("ngIf",null==(l=t.lcZ(10,4,i.upcoming_events))?null:l.length)("ngIfElse",a)}},directives:[A.zs,f.yS,r.O5,r.sg,r.RF,r.n9,K.j,W.E],pipes:[r.Ov,r.OU],styles:[""]}),e})();var ot=o(8644),st=o(7538),at=o(7411);const ct=[{path:"",component:(()=>{class e{get date(){return(0,ot.Z)(this.time||Date.now())}get user(){return(0,g.ar)()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:19,vars:5,consts:[[1,"flex","flex-1","h-1/2","bg-[#E5E5E5]"],[1,"h-full","hidden","sm:block"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","px-4","rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],[1,"text-sm","sm:text-base"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"]],template:function(n,i){1&n&&(t._UZ(0,"topbar"),t.TgZ(1,"div",0),t._UZ(2,"landing-colleagues",1),t.TgZ(3,"div",2),t.TgZ(4,"header",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"div",6),t._uU(12,"Sydney Australia"),t.qZA(),t.qZA(),t.TgZ(13,"div",7),t._UZ(14,"img",8),t.qZA(),t.qZA(),t._UZ(15,"landing-availability"),t._UZ(16,"div",9),t._UZ(17,"landing-upcoming"),t.qZA(),t.qZA(),t._UZ(18,"footer-menu")),2&n&&(t.xp6(7),t.hij("Hello ",null==i.user?null:i.user.name,","),t.xp6(2),t.Oqu(t.xi3(10,2,i.date,"fullDate")))},directives:[st.o,T,b,L,at.i],pipes:[r.uU],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--51.css.map*/"]}),e})()}];let lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,O.v,f.Bz.forChild(ct)]]}),e})()}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map