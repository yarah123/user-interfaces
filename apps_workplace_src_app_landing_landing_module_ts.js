"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{368:(je,F,l)=>{l.r(F),l.d(F,{AppLandingModule:()=>qe});var u=l(4666),Z=l(2508),f=l(959),j=l(8147),d=l(1670),v=l(3690),x=l(4505),M=l(4139),C=l(6942),I=l(823),P=l(9095),E=l(7418),$=l(8759),B=l(9128),G=l(5670),D=l(9151),R=l(3200),g=l(232),_=l(1299),y=l(1684),H=l(6221),K=l(9434),X=l(7625),e=l(9676);let L=(()=>{class n extends g.KG{constructor(t,o,i){super(),this._calendar=t,this._schedule=o,this._org=i,this._options=new x.X({}),this._loading=new x.X(""),this._free_spaces=new x.X([]),this._contacts=new x.X([]),this._level_occupancy=new x.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._schedule.filtered_bookings.pipe((0,C.U)(a=>a.filter(c=>c instanceof _.ym))),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.search_results=this._options.pipe((0,I.b)(500),(0,P.w)(({search:a})=>(this._loading.next("Loading users..."),a?(0,y.VE)(a).pipe((0,E.K)(()=>(0,M.of)([]))):(0,M.of)([]))),(0,$.b)(()=>this._loading.next("")),(0,B.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var t=this;return(0,d.Z)(function*(){yield t._org.initialised.pipe((0,G.P)(a=>a)).toPromise(),t.subscription("building",t._org.active_building.pipe((0,D.h)(a=>!!a)).subscribe(()=>t.updateBuildingMetadata()));let o=t._org.binding("area_management");if(!o)return;const i=(0,v.rTZ)(o,"AreaManagement").binding("overview");i.listen().subscribe(a=>t.updateOccupancy(a||{})),i.bind()})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}pollFreeSpaces(t=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),t)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(t=1e4){return this._schedule.setDate(Date.now()),this._schedule.startPolling(t)}stopPollingUpcomingEvents(){this._schedule.stopPolling()}updateContacts(){var t=this;return(0,d.Z)(function*(){const o=yield(0,v.rlq)((0,g.ar)().id,"contacts").toPromise();t._contacts.next((o.details instanceof Array?o.details:[]).map(a=>new y.n5(a)))})()}addContact(t){var o=this;return(0,d.Z)(function*(){let i=[...o._contacts.getValue()];i.push(t),i=(0,g.Tw)(i,"email");const a=yield(0,v.Ymr)((0,g.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();o._contacts.next((a.details instanceof Array?a.details:[]).map(r=>new y.n5(r)))})()}removeContact(t){var o=this;return(0,d.Z)(function*(){let i=[...o._contacts.getValue()];i=i.filter(r=>r.email!==t.email);const a=yield(0,v.Ymr)((0,g.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();o._contacts.next((a.details instanceof Array?a.details:[]).map(r=>new y.n5(r)))})()}updateOccupancy(t){var o=this;return(0,d.Z)(function*(){const i=[...o._org.levels];i.sort((a,c)=>t[a.id]?.recommendation-t[c.id]?.recommendation),o._level_occupancy.next(i)})()}updateFreeSpaces(){var t=this;return(0,d.Z)(function*(){if(!t._org.building)return;const o=Math.floor((new Date).valueOf()/1e3),i=Math.floor((0,R.Z)(new Date).valueOf()/1e3),a=yield t._calendar.freeBusy({period_start:o,period_end:i,zone_ids:t._org.building.id}).pipe((0,C.U)(c=>c.filter(r=>!r.availability.length||r.availability.find(p=>"busy"!==p.status)))).toPromise();a.sort((c,r)=>c.capacity-r.capacity),t._free_spaces.next(a)})()}updateBuildingMetadata(){var t=this;return(0,d.Z)(function*(){const o=t._org.building,i=yield(0,v.rlq)(o.id,"bindings").toPromise();if(!i.details.occupancy)return;const a=i.details.occupancy,c=(0,v.rTZ)(a.sys,a.module,a.index);!c||(t._occupancy_binding&&t._occupancy_binding.unbind(),t._occupancy_binding=c.binding("occupancy"),t._occupancy_binding.bind(),t.subscription("occupancy_binding",t._occupancy_binding.listen().subscribe(r=>{const p=Object.keys(r).map(m=>({id:m,...r[m]}));p.sort((m,A)=>m.recommendation_factor-A.recommendation_factor),t._level_occupancy.next(p.map(m=>t._org.levelWithID([m.id])))})))})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(K.ot),e.LFG(X.I),e.LFG(H.w7))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=l(5306),U=l(207),T=l(6198);const O=function(){return["/explore"]},V=function(n){return{level:n}};function z(n,s){if(1&n&&(e.TgZ(0,"button",7),e._UZ(1,"div",8),e.TgZ(2,"div",9)(3,"div",10),e._uU(4),e.qZA(),e.TgZ(5,"div",11)(6,"app-icon",12),e._uU(7,"place"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Unknown Building"),e.qZA()()()()),2&n){const t=s.$implicit;e.Q6J("routerLink",e.DdM(3,O))("queryParams",e.VKq(4,V,t.id)),e.xp6(4),e.hij(" ",t.display_name||t.name," ")}}function W(n,s){1&n&&(e.TgZ(0,"span",13),e._uU(1," No free spaces "),e.qZA())}function ee(n,s){if(1&n&&(e._UZ(0,"img",16),e.ALo(1,"async"),e.ALo(2,"space")),2&n){const t=e.oxw().$implicit;let o;e.Q6J("src",null==(o=e.lcZ(1,1,e.lcZ(2,3,t.id)))?null:o.images[0],e.LSH)}}const te=function(n){return{space:n}};function ne(n,s){if(1&n&&(e.TgZ(0,"button",7)(1,"div",14),e.YNc(2,ee,3,5,"img",15),e.ALo(3,"async"),e.ALo(4,"space"),e.qZA(),e.TgZ(5,"div",9)(6,"div",10),e._uU(7),e.qZA(),e.TgZ(8,"div",11)(9,"app-icon",12),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&n){const t=s.$implicit;let o;e.Q6J("routerLink",e.DdM(9,O))("queryParams",e.VKq(10,te,t.email)),e.xp6(2),e.Q6J("ngIf",null==(o=e.lcZ(3,5,e.lcZ(4,7,t.id)))||null==o.images?null:o.images.length),e.xp6(5),e.hij(" ",t.display_name||t.name," "),e.xp6(5),e.Oqu(t.level.display_name||t.level.name)}}function oe(n,s){1&n&&(e.TgZ(0,"span",13),e._uU(1," No free rooms "),e.qZA())}let k=(()=>{class n{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){var t=this;return(0,d.Z)(function*(){t._state.pollFreeSpaces()})()}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-availability"]],decls:17,vars:12,consts:[[1,"py-2"],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],[1,"text-sm","sm:text-base","px-4"],[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-neutral-800 shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],[1,"text-sm","sm:text-base","my-2","px-4"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-neutral-800","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-700"],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"text-dark-fade","text-sm","mb-2"],[1,"w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-700","overflow-hidden"],["class","min-h-full object-cover",3,"src",4,"ngIf"],[1,"min-h-full","object-cover",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Available Now"),e.qZA(),e.TgZ(3,"div",2),e._uU(4,"Spaces"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,z,10,6,"button",4),e.ALo(7,"async"),e.YNc(8,W,2,0,"span",5),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",6),e._uU(11,"Rooms"),e.qZA(),e.TgZ(12,"div",3),e.YNc(13,ne,13,12,"button",4),e.ALo(14,"async"),e.YNc(15,oe,2,0,"span",5),e.ALo(16,"async"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngForOf",e.lcZ(7,4,o.levels_free)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(9,6,o.levels_free).length),e.xp6(5),e.Q6J("ngForOf",e.lcZ(14,8,o.space_list)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(16,10,o.space_list).length))},dependencies:[u.sg,u.O5,b.o,U.wG,f.rH,u.Ov,T.X],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--69.css.map*/"]}),n})();var ie=l(7716),ae=l(9685),h=l(8589),w=l(4522),se=l(1708);const le=["search_input"];function ce(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15),e._UZ(2,"a-user-avatar",16)(3,"div",17),e.qZA(),e.TgZ(4,"div",18)(5,"div",19),e._uU(6),e.qZA(),e.TgZ(7,"div",20),e._uU(8),e.qZA(),e.TgZ(9,"div",21),e._uU(10),e.qZA()(),e.TgZ(11,"button",22)(12,"app-icon"),e._uU(13,"more_horiz"),e.qZA()(),e.TgZ(14,"mat-menu",23,24)(16,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.newMeeting(a))}),e.TgZ(17,"app-icon",26),e._uU(18,"today"),e.qZA(),e.TgZ(19,"div"),e._uU(20,"Create Meeting"),e.qZA()(),e.TgZ(21,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.removeContact(a))}),e.TgZ(22,"app-icon",26),e._uU(23,"cancel"),e.qZA(),e.TgZ(24,"div"),e._uU(25,"Remove Colleague"),e.qZA()()()()}if(2&n){const t=s.$implicit,o=e.MAs(15);e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," "),e.xp6(2),e.hij(" ",t.location," "),e.xp6(1),e.Q6J("matMenuTriggerFor",o)}}function re(n,s){if(1&n&&(e.ynx(0),e.YNc(1,ce,26,9,"div",13),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.contacts))}}function pe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(3);return e.KtG(c.addUser(a))}),e.TgZ(1,"div",30),e._UZ(2,"a-user-avatar",16)(3,"div",17),e.qZA(),e.TgZ(4,"div",31)(5,"div",19),e._uU(6),e.qZA(),e.TgZ(7,"div",20),e._uU(8),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," ")}}function ue(n,s){if(1&n&&(e.ynx(0),e.YNc(1,pe,9,7,"button",28),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.search_results))}}function ge(n,s){if(1&n&&(e.TgZ(0,"div",27),e.YNc(1,ue,3,3,"ng-container",3),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(),o=e.MAs(21);let i;e.xp6(1),e.Q6J("ngIf",null==(i=e.lcZ(2,2,t.search_results))?null:i.length)("ngIfElse",o)}}function de(n,s){1&n&&(e.TgZ(0,"div",32),e._UZ(1,"img",33),e.TgZ(2,"p",34),e._uU(3,' You have no colleagues added. Please select the "Add" button to get started. '),e.qZA()())}function me(n,s){if(1&n&&(e.TgZ(0,"div",32)(1,"p",34),e._uU(2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()()),2&n){const t=e.oxw();let o;e.xp6(2),e.hij(" ",null!=(o=e.lcZ(3,1,t.options))&&o.search?'Unable for find any users matching "'+(null==(o=e.lcZ(4,3,t.options))?null:o.search)+'"':"Start typing to search for users."," ")}}function _e(n,s){1&n&&(e.TgZ(0,"div",32),e._UZ(1,"mat-spinner",35),e.TgZ(2,"p",34),e._uU(3,"Searching users..."),e.qZA()())}let J=(()=>{class n extends g.KG{constructor(t,o,i,a){var c;super(),c=this,this._state=t,this._settings=o,this._event_form=i,this._router=a,this.show_search=!1,this.contacts=this._state.contacts,this.search_results=(0,ie.aj)([this._state.search_results,this._state.contacts]).pipe((0,C.U)(([r,p])=>r.filter(m=>!p.find(A=>A.id!==m.id&&A.email!==m.email)))),this.options=this._state.options,this.loading=this._state.loading,this.addUser=function(){var r=(0,d.Z)(function*(p){yield c._state.addContact(p),(0,g.t5)(`Successfully added "${p.name}" to contacts`),c.show_search=!1});return function(p){return r.apply(this,arguments)}}(),this.removeUser=function(){var r=(0,d.Z)(function*(p){yield c._state.removeContact(p),(0,g.t5)(`Successfully removed "${p.name}" from contacts`)});return function(p){return r.apply(this,arguments)}}(),this.updateSearch=r=>this._state.setOptions({search:r})}newMeeting(t){this._event_form.newForm(),this._event_form.form.patchValue({attendees:[t]}),this._settings.get("app.new_features")?this._router.navigate(["/book","meeting"]):this._router.navigate(["/book","spaces"])}openSearch(){this.updateSearch(""),this.show_search=!0,this.timeout("open",()=>this._input_el.nativeElement.focus(),100)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L),e.Y36(g.gb),e.Y36(_.MH),e.Y36(f.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-colleagues"]],viewQuery:function(t,o){if(1&t&&e.Gf(le,7),2&t){let i;e.iGM(i=e.CRH())&&(o._input_el=i.first)}},features:[e.qOj],decls:24,vars:16,consts:[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["mat-button","",1,"inverse","w-[calc(100%-1rem)]","m-2",3,"click"],["search","",1,"absolute","inset-x-2","top-2","bottom-[3.5rem]","rounded-lg","overflow-hidden","flex","flex-col","bg-white","dark:bg-neutral-600","shadow","border","border-gray-200"],["placeholder","Search for users...",1,"w-full","border-b","border-gray-200","p-2","rounded-t-lg",3,"ngModel","ngModelChange"],["search_input",""],["mat-icon-button","",1,"absolute","top-0","right-0",3,"click"],["class","overflow-auto flex-1 h-1/2 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["empty_state",""],["search_empty",""],["load_state",""],["class","flex items-center px-2 space-x-2 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-2","space-x-2","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight","flex-1"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"],["mat-icon-button","",1,"rounded","bg-gray-300",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],[1,"overflow-auto","flex-1","h-1/2","flex","flex-col","space-y-2"],["matRipple","","class","flex items-center p-2 space-x-2 w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","p-2","space-x-2","w-full","text-left",3,"click"],[1,"text-base","relative"],[1,"leading-tight"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-contacts.svg"],[1,"opacity-60","text-sm","text-center"],["diameter","32"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.ALo(3,"async"),e.qZA()(),e.TgZ(4,"div",2),e.YNc(5,re,3,3,"ng-container",3),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.openSearch()}),e._uU(8," Add "),e.qZA(),e.TgZ(9,"div",5)(10,"input",6,7),e.NdJ("ngModelChange",function(a){return o.updateSearch(a)}),e.ALo(12,"async"),e.qZA(),e.TgZ(13,"button",8),e.NdJ("click",function(){return o.show_search=!1}),e.TgZ(14,"app-icon"),e._uU(15,"close"),e.qZA()(),e.YNc(16,ge,3,4,"div",9),e.ALo(17,"async"),e.qZA(),e.YNc(18,de,4,0,"ng-template",null,10,e.W1O),e.YNc(20,me,5,5,"ng-template",null,11,e.W1O),e.YNc(22,_e,4,0,"ng-template",null,12,e.W1O)),2&t){const i=e.MAs(19),a=e.MAs(23);let c,r,p;e.xp6(2),e.hij("",(null==(c=e.lcZ(3,8,o.contacts))?null:c.length)||0," People"),e.xp6(3),e.Q6J("ngIf",null==(r=e.lcZ(6,10,o.contacts))?null:r.length)("ngIfElse",i),e.xp6(4),e.ekj("hidden",!o.show_search),e.xp6(1),e.Q6J("ngModel",null==(p=e.lcZ(12,12,o.options))?null:p.search),e.xp6(6),e.Q6J("ngIf",!e.lcZ(17,14,o.loading))("ngIfElse",a)}},dependencies:[u.sg,u.O5,b.o,ae.k,h.VK,h.OP,h.p6,w.lW,se.Ou,U.wG,Z.Fj,Z.JJ,Z.On,u.Ov],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-colleagues.component.ts-angular-inline--70.css.map*/"]}),n})();function fe(n,s){if(1&n&&(e._UZ(0,"img",22),e.ALo(1,"async"),e.ALo(2,"space")),2&n){const t=e.oxw().$implicit;let o;e.Q6J("src",null==(o=e.lcZ(1,1,e.lcZ(2,3,t)))?null:o.images[0],e.LSH)}}function ve(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e.YNc(3,fe,3,5,"img",9),e.ALo(4,"async"),e.ALo(5,"space"),e.qZA(),e.TgZ(6,"div",10)(7,"div",11),e._uU(8),e.ALo(9,"async"),e.ALo(10,"space"),e.ALo(11,"async"),e.ALo(12,"space"),e.qZA(),e.TgZ(13,"div",12)(14,"app-icon",13),e._uU(15,"place"),e.qZA(),e.TgZ(16,"div"),e._uU(17),e.ALo(18,"async"),e.ALo(19,"space"),e.qZA()(),e.TgZ(20,"div",14)(21,"app-icon",13),e._uU(22,"people"),e.qZA(),e.TgZ(23,"div"),e._uU(24),e.ALo(25,"async"),e.ALo(26,"space"),e.qZA()()()(),e.TgZ(27,"button",15),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.newSpaceMeeting(a))}),e._uU(28," Book "),e.qZA(),e.TgZ(29,"button",16)(30,"app-icon"),e._uU(31,"more_horiz"),e.qZA()(),e.TgZ(32,"mat-menu",17,18)(34,"button",19)(35,"app-icon",20),e._uU(36,"info"),e.qZA(),e.TgZ(37,"div"),e._uU(38,"View Details"),e.qZA()(),e.TgZ(39,"button",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleFavourite("space",i.id))}),e.TgZ(40,"app-icon",20),e._uU(41,"cancel"),e.qZA(),e.TgZ(42,"div"),e._uU(43,"Remove Favourite"),e.qZA()()()()}if(2&n){const t=s.$implicit,o=e.MAs(33);let i,a,c,r;e.xp6(3),e.Q6J("ngIf",null==(i=e.lcZ(4,5,e.lcZ(5,7,t)))||null==i.images?null:i.images.length),e.xp6(5),e.hij(" ",(null==(a=e.lcZ(9,9,e.lcZ(10,11,t)))?null:a.display_name)||(null==(a=e.lcZ(11,13,e.lcZ(12,15,t)))?null:a.name)," "),e.xp6(9),e.hij(" ",null==(c=e.lcZ(18,17,e.lcZ(19,19,t)))||null==c.level?null:c.level.display_name," "),e.xp6(7),e.hij(" ",(null==(r=e.lcZ(25,21,e.lcZ(26,23,t)))?null:r.capacity)||2," People "),e.xp6(5),e.Q6J("matMenuTriggerFor",o)}}function he(n,s){if(1&n&&(e.ynx(0),e.YNc(1,ve,44,25,"div",5),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.spaces)}}function xe(n,s){1&n&&(e.TgZ(0,"div",23),e._UZ(1,"img",24),e.TgZ(2,"p",25),e._uU(3," You have no favourites hearted. To add a favourites heart a room, desk or parking space. "),e.qZA()())}const Ze=[];let Y=(()=>{class n extends g.KG{constructor(t,o,i,a){super(),this._settings=t,this._space_pipe=o,this._event_form=i,this._router=a}get spaces(){return this._settings.get("favourite_spaces")||Ze}toggleFavourite(t,o){const i="space"===t?this.spaces:[],a="space"===t?"favourite_spaces":"";i.includes(o)?this._settings.saveUserSetting(a,i.filter(r=>r!==o)):this._settings.saveUserSetting(a,[...i,o])}newSpaceMeeting(t){var o=this;return(0,d.Z)(function*(){const i=yield o._space_pipe.transform(t);!i||(o._event_form.newForm(),o._event_form.form.patchValue({resources:[i]}),o._settings.get("app.new_features")?o._router.navigate(["/book","meeting"]):o._router.navigate(["/book","spaces"]))})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gb),e.Y36(T.X),e.Y36(_.MH),e.Y36(f.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-favourites"]],features:[e._Bn([T.X]),e.qOj],decls:7,vars:3,consts:[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],[1,"flex-1","h-1/2","w-full","space-y-2","overflow-auto","pt-4","divide-y","divide-gray-300"],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center mx-2 pt-4 space-y-2 relative","item","",4,"ngFor","ngForOf"],["item","",1,"flex","flex-col","items-center","mx-2","pt-4","space-y-2","relative"],[1,"flex","w-full","items-center","space-x-2","relative"],[1,"w-24","h-20","overflow-hidden","rounded","relative"],["class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full",3,"src",4,"ngIf"],[1,"h-20"],[1,"truncate","mb-4"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2","mb-2"],[1,"text-blue-500"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2"],["mat-button","",1,"w-full","inverse",3,"click"],["mat-icon-button","",1,"absolute","top-2","right-0","bg-gray-200","rounded","!m-0",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2"],[1,"text-2xl"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","object-cover","min-w-full","min-h-full",3,"src"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-favourites.svg"],[1,"opacity-60","text-sm","text-center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,he,2,1,"ng-container",3),e.qZA(),e.YNc(5,xe,4,0,"ng-template",null,4,e.W1O)),2&t){const i=e.MAs(6);e.xp6(2),e.hij("",(null==o.spaces?null:o.spaces.length)||0," Resources"),e.xp6(2),e.Q6J("ngIf",null==o.spaces?null:o.spaces.length)("ngIfElse",i)}},dependencies:[u.sg,u.O5,b.o,h.VK,h.OP,h.p6,w.lW,u.Ov,T.X],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-favourites.component.ts-angular-inline--71.css.map*/"]}),n})();var S=l(9638),ye=l(5148),be=l(1484),Te=l(2551),Ae=l(4088);function Ce(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"event-card",12),e.NdJ("edit",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.edit(i))})("remove",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.remove(i))}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("event",t)("show_day",!0)}}function Le(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"booking-card",13),e.NdJ("remove",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.remove(i))}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("booking",t)("show_day",!0)}}function Ue(n,s){if(1&n&&(e.ynx(0)(1,9),e.YNc(2,Ce,1,2,"event-card",10),e.YNc(3,Le,1,2,"booking-card",11),e.BQk()()),2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",o.type(t)),e.xp6(1),e.Q6J("ngSwitchCase","event"),e.xp6(1),e.Q6J("ngSwitchCase","booking")}}function we(n,s){if(1&n&&(e.ynx(0),e.YNc(1,Ue,4,3,"ng-container",8),e.ALo(2,"slice"),e.ALo(3,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,e.lcZ(3,6,t.upcoming_events),0,3))("ngForTrackBy",t.trackByFn)}}function Fe(n,s){1&n&&(e.TgZ(0,"div",14),e._UZ(1,"img",15),e.TgZ(2,"p",16),e._uU(3,"You have no upcoming bookings"),e.qZA()())}const N=function(){return["/your-bookings"]};let Q=(()=>{class n{constructor(t,o,i,a){this._state=t,this._event_form=o,this._router=i,this._dialog=a,this.upcoming_events=this._state.upcoming_events}type(t){return t instanceof S.$N?"booking":"event"}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(t,o){return o?.id}edit(t){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(t)}remove(t){var o=this;return(0,d.Z)(function*(){const i=`${(0,ye.Z)(t.date,"dd MMM yyyy h:mma")}`,c=`Delete the booking for ${t instanceof _.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${i}`,r=yield(0,g._5)({title:"Delete booking",content:c,icon:{content:"delete"}},o._dialog);"done"===r.reason&&(r.loading("Requesting booking deletion..."),yield(t instanceof _.ym?_.xC:S.pv)(t.id).toPromise().catch(p=>{throw(0,g.cB)(`Unable to delete booking. ${p}`),r.close(),p}),(0,g.t5)("Successfully deleted booking."),r.close())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L),e.Y36(_.MH),e.Y36(f.F0),e.Y36(be.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-upcoming"]],decls:13,vars:8,consts:[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],["button","","mat-button","",1,"inverse","hidden","sm:block",3,"routerLink"],[1,"inverse","block","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day","edit","remove",4,"ngSwitchCase"],[3,"booking","show_day","remove",4,"ngSwitchCase"],[3,"event","show_day","edit","remove"],[3,"booking","show_day","remove"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Your Bookings"),e.qZA(),e.TgZ(4,"a",3),e._uU(5," View All "),e.qZA(),e.TgZ(6,"a",4),e._uU(7," View All "),e.qZA()(),e.TgZ(8,"div",5),e.YNc(9,we,4,8,"ng-container",6),e.ALo(10,"async"),e.qZA()(),e.YNc(11,Fe,4,0,"ng-template",null,7,e.W1O)),2&t){const i=e.MAs(12);let a;e.xp6(4),e.Q6J("routerLink",e.DdM(6,N)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,N)),e.xp6(3),e.Q6J("ngIf",null==(a=e.lcZ(10,4,o.upcoming_events))?null:a.length)("ngIfElse",i)}},dependencies:[u.sg,u.O5,u.RF,u.n9,w.zs,Te.j,Ae.E,f.yS,u.Ov,u.OU]}),n})();var Me=l(6361),Oe=l(4187),ke=l(6012);function Je(n,s){1&n&&e._UZ(0,"topbar",16)}function Ye(n,s){1&n&&e._UZ(0,"landing-colleagues")}function Se(n,s){1&n&&e._UZ(0,"landing-favourites")}function Ne(n,s){1&n&&e._UZ(0,"footer-menu")}const Qe=[{path:"",component:(()=>{class n{constructor(){this.tab="people"}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}get date(){return(0,Me.Z)(this.time||Date.now())}get user(){return(0,g.ar)()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],decls:33,vars:25,consts:[["class","z-10",4,"ngIf"],[1,"flex","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-zinc-700"],[1,"relative","hidden","sm:flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-neutral-700","border-r","border-gray-200","dark:border-neutral-500"],[1,"flex","items-center","divide-x","divide-gray-300"],["matRipple","",1,"flex-1","font-medium","p-2","flex","items-center","justify-center","space-x-2",3,"click"],[1,"flex-1","w-full","h-1/2"],[4,"ngIf"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto","z-0"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","dark:bg-neutral-800","px-4","rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],["date","",1,"text-sm","sm:text-base"],[1,"text-sm","sm:text-base"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"],[1,"z-10"]],template:function(t,o){1&t&&(e.YNc(0,Je,1,0,"topbar",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),e.NdJ("click",function(){return o.tab="people"}),e.TgZ(5,"app-icon"),e._uU(6,"people"),e.qZA(),e.TgZ(7,"div"),e._uU(8,"Colleages"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return o.tab="fav"}),e.TgZ(10,"app-icon"),e._uU(11,"favorite"),e.qZA(),e.TgZ(12,"div"),e._uU(13,"Favourites"),e.qZA()()(),e.TgZ(14,"div",5),e.YNc(15,Ye,1,0,"landing-colleagues",6),e.YNc(16,Se,1,0,"landing-favourites",6),e.qZA()(),e.TgZ(17,"div",7)(18,"header",8)(19,"div",9)(20,"div",10),e._uU(21),e.qZA(),e.TgZ(22,"div",11),e._uU(23),e.ALo(24,"date"),e.qZA(),e.TgZ(25,"div",12),e._uU(26,"Sydney Australia"),e.qZA()(),e.TgZ(27,"div",13),e._UZ(28,"img",14),e.qZA()(),e._UZ(29,"landing-availability")(30,"div",15)(31,"landing-upcoming"),e.qZA()(),e.YNc(32,Ne,1,0,"footer-menu",6)),2&t&&(e.Q6J("ngIf",!o.hide_nav),e.xp6(4),e.ekj("border-b","people"!==o.tab)("border-gray-300","people"!==o.tab)("bg-black","people"!==o.tab)("bg-opacity-5","people"!==o.tab),e.xp6(5),e.ekj("border-b","fav"!==o.tab)("border-gray-300","fav"!==o.tab)("bg-black","fav"!==o.tab)("bg-opacity-5","fav"!==o.tab),e.xp6(6),e.Q6J("ngIf","people"===o.tab),e.xp6(1),e.Q6J("ngIf","fav"===o.tab),e.xp6(5),e.hij(" Hello ",null==o.user?null:o.user.name,", "),e.xp6(2),e.hij(" ",e.xi3(24,22,o.date,"fullDate")," "),e.xp6(9),e.Q6J("ngIf",!o.hide_nav))},dependencies:[u.O5,Oe.o,ke.i,b.o,U.wG,J,k,Q,Y,u.uU],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--72.css.map*/"]}),n})()}];let qe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,j.v,Z.u5,f.Bz.forChild(Qe)]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map