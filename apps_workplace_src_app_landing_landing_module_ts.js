"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{368:(st,D,c)=>{c.r(D),c.d(D,{AppLandingModule:()=>C});var p=c(4666),U=c(2508),v=c(959),K=c(8147),u=c(8368),J=c(3874),I=c(6221),d=c(3918),m=c(7502),N=c(4505),M=c(7716),Y=c(4139),Q=c(9151),$=c(9095),h=c(6942),O=c(9128),j=c(8759),X=c(823),B=c(7418),H=c(5670),z=c(3910),ee=c(2886),P=c(3149),te=c(9434),ne=c(7625),e=c(9676);class f extends u.KG{constructor(n,t,o,a){super(),this._calendar=n,this._schedule=t,this._org=o,this._settings=a,this._options=new N.X({}),this._loading=new N.X(""),this._loading_spaces=new N.X(!1),this._contacts=new N.X([]),this._level_occupancy=new N.X([]),this._space_list=this._org.active_building.pipe((0,Q.h)(s=>!!s),(0,$.w)(s=>(0,ee.u2)(s.id)),(0,h.U)(s=>s.filter(l=>l.bookable)),(0,O.d)(1)),this._space_statuses=this._space_list.pipe((0,j.b)(s=>this.unsubWith("bind:")),(0,$.w)(s=>(0,M.aj)((s||[]).map(l=>{const r=(0,m.rTZ)(l.id,"Bookings").binding("status"),g=r.listen();return this.subscription(`bind:${l.id}`,r.bind()),g}))),(0,O.d)(1)),this.free_space_list=(0,M.aj)([this._space_list,this._space_statuses]).pipe((0,h.U)(([s,l])=>(s||[]).filter((r,g)=>"free"===l[g]).sort((r,g)=>r.capacity-g.capacity)),(0,O.d)(1)),this.upcoming_events=this._schedule.filtered_bookings.pipe((0,h.U)(s=>s.filter(l=>"done"!==l.state))),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.loading_spaces=this._loading_spaces.asObservable(),this.search_fn=s=>this._settings.get("app.basic_user_search")?(0,m.E4d)({q:s,authority_id:(0,m.N9E)()?.id}).pipe((0,h.U)(({data:l})=>l.map(r=>new P.mO(r)))):(0,P.VE)(s),this.search_results=this._options.pipe((0,X.b)(500),(0,$.w)(({search:s})=>(this._loading.next("Loading users..."),s?this.search_fn(s).pipe((0,B.K)(()=>(0,Y.of)([]))):(0,Y.of)([]))),(0,j.b)(()=>this._loading.next("")),(0,O.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var n=this;return(0,d.Z)(function*(){yield n._org.initialised.pipe((0,H.P)(a=>a)).toPromise(),n.updateContacts(),n.subscription("building",n._org.active_building.pipe((0,Q.h)(a=>!!a)).subscribe(()=>{n.updateBuildingMetadata(),n.updateOccupancy({})}));let t=n._org.binding("area_management");if(!t)return;const o=(0,m.rTZ)(t,"AreaManagement").binding("overview");o.listen().subscribe(a=>n.updateOccupancy(a||{})),o.bind()})()}setOptions(n){this._options.next({...this._options.getValue(),...n})}pollUpcomingEvents(n=3e5){return this._schedule.setDate(Date.now()),this._schedule.startPolling(n)}stopPollingUpcomingEvents(){this._schedule.stopPolling()}refreshUpcomingEvents(){this._schedule.triggerPoll()}updateContacts(){var n=this;return(0,d.Z)(function*(){const t=yield(0,m.rlq)((0,u.ar)().id,"contacts").toPromise();n._contacts.next((t.details instanceof Array?t.details:[]).map(a=>new P.n5(a)))})()}addContact(n){var t=this;return(0,d.Z)(function*(){let o=[...t._contacts.getValue()];o.push(n),o=(0,u.Tw)(o,"email");const a=yield(0,m.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();t._contacts.next((a.details instanceof Array?a.details:[]).map(l=>new P.n5(l)))})()}removeContact(n){var t=this;return(0,d.Z)(function*(){let o=[...t._contacts.getValue()];o=o.filter(l=>l.email!==n.email);const a=yield(0,m.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();t._contacts.next((a.details instanceof Array?a.details:[]).map(l=>new P.n5(l)))})()}updateOccupancy(n){var t=this;return(0,d.Z)(function*(){const o=[...yield t._org.active_levels.pipe((0,z.q)(1)).toPromise()];o.sort((a,s)=>n[a.id]?.recommendation-n[s.id]?.recommendation),t._level_occupancy.next(o)})()}updateBuildingMetadata(){var n=this;return(0,d.Z)(function*(){n._level_occupancy.next([]);const t=n._org.binding("occupancy");if(!t)return;const{sys:o,module:a,index:s}=t,l=(0,m.rTZ)(o,a,s);!l||(n._occupancy_binding&&n._occupancy_binding.unbind(),n._occupancy_binding=l.binding("occupancy"),n._occupancy_binding.bind(),n.subscription("occupancy_binding",n._occupancy_binding.listen().subscribe(r=>{const g=Object.keys(r).map(_=>({id:_,...r[_]}));g.sort((_,k)=>_.recommendation_factor-k.recommendation_factor),n._level_occupancy.next(g.map(_=>n._org.levelWithID([_.id])))})))})()}}f.\u0275fac=function(n){return new(n||f)(e.LFG(te.ot),e.LFG(ne.I),e.LFG(I.w7),e.LFG(u.gb))},f.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"});var S=c(5306),w=c(207),W=c(1708),F=c(8699),R=c(6198);function ie(i,n){1&i&&(e.TgZ(0,"div",5),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.AVAILABLE_NOW")," "))}function oe(i,n){1&i&&(e.TgZ(0,"div",6)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.SPACES")))}function se(i,n){if(1&i&&e._UZ(0,"img",18),2&i){const t=e.oxw().$implicit;e.Q6J("src",null==t?null:t.images[0],e.LSH)}}function ae(i,n){1&i&&e._UZ(0,"img",19)}const le=function(){return["/explore"]},ce=function(i){return{level:i}};function re(i,n){if(1&i&&(e.TgZ(0,"button",10)(1,"div",11),e.YNc(2,se,1,1,"img",12),e.YNc(3,ae,1,0,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(5,"div",14)(6,"div",15),e._uU(7),e.qZA(),e.TgZ(8,"div",16)(9,"app-icon",17),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&i){const t=n.$implicit,o=e.MAs(4),a=e.oxw(2);let s;e.Q6J("routerLink",e.DdM(6,le))("queryParams",e.VKq(7,ce,t.id)),e.xp6(2),e.Q6J("ngIf",null==t||null==t.images?null:t.images.length)("ngIfElse",o),e.xp6(5),e.hij(" ",t.display_name||t.name," "),e.xp6(5),e.Oqu((null==(s=a.building(t.parent_id))?null:s.display_name)||(null==(s=a.building(t.parent_id))?null:s.name))}}function _e(i,n){1&i&&(e.TgZ(0,"span",20),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.NO_FREE_SPACES")," "))}function pe(i,n){if(1&i&&(e.TgZ(0,"div",7),e.YNc(1,re,13,9,"button",8),e.ALo(2,"async"),e.YNc(3,_e,3,3,"span",9),e.ALo(4,"async"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.levels_free)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(4,4,t.levels_free).length)}}function ge(i,n){1&i&&e._UZ(0,"mat-spinner",22)}function ue(i,n){if(1&i&&(e.TgZ(0,"div",6)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,ge,1,0,"mat-spinner",21),e.ALo(5,"async"),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,2,"WPA.ROOMS")),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,4,t.loading_spaces))}}function de(i,n){if(1&i&&(e._UZ(0,"img",18),e.ALo(1,"async"),e.ALo(2,"space")),2&i){const t=e.oxw().$implicit;let o;e.Q6J("src",null==(o=e.lcZ(1,1,e.lcZ(2,3,t.id)))?null:o.images[0],e.LSH)}}function me(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.book(s))}),e.TgZ(1,"div",25),e.YNc(2,de,3,5,"img",12),e.ALo(3,"async"),e.ALo(4,"space"),e.qZA(),e.TgZ(5,"div",14)(6,"div",15),e._uU(7),e.qZA(),e.TgZ(8,"div",16)(9,"app-icon",17),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()}if(2&i){const t=n.$implicit,o=e.oxw(2),a=e.MAs(7);let s,l;e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(3,4,e.lcZ(4,6,t.id)))||null==s.images?null:s.images.length)("ngIfElse",a),e.xp6(5),e.hij(" ",t.display_name||t.name," "),e.xp6(5),e.Oqu((null==(l=o.level(t.zones))?null:l.display_name)||(null==(l=o.level(t.zones))?null:l.name))}}function fe(i,n){1&i&&(e.TgZ(0,"span",20),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.NO_FREE_ROOMS")," "))}function ve(i,n){if(1&i&&(e.TgZ(0,"div",7),e.YNc(1,me,13,8,"button",23),e.ALo(2,"async"),e.YNc(3,fe,3,3,"span",9),e.ALo(4,"async"),e.qZA()),2&i){const t=e.oxw();let o;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,3,t.space_list))("ngForTrackBy",t.trackBySpaceId),e.xp6(2),e.Q6J("ngIf",!(null!=(o=e.lcZ(4,5,t.space_list))&&o.length))}}function he(i,n){1&i&&e._UZ(0,"img",26)}class x{constructor(n,t,o,a){this._state=n,this._org=t,this._settings=o,this._explore=a,this.space_list=this._state.free_space_list,this.loading_spaces=this._state.loading_spaces,this.levels_free=this._state.level_occupancy,this.book=s=>this._explore.bookSpace(s)}trackBySpaceId(n,t){return t.id}level(n){return this._org.levelWithID(n)}building(n){return this._org.buildings.find(t=>t.id===n)}get hide_spaces(){return this._settings.get("app.general.hide_spaces")}get hide_rooms(){return this._settings.get("app.general.hide_rooms")}}x.\u0275fac=function(n){return new(n||x)(e.Y36(f),e.Y36(I.w7),e.Y36(u.gb),e.Y36(J.aB))},x.\u0275cmp=e.Xpm({type:x,selectors:[["landing-availability"]],features:[e._Bn([J.aB])],decls:8,vars:5,consts:[[1,"py-2"],["class","sm:text-lg font-medium mb-2 sm:mb-4 px-4",4,"ngIf"],["class","flex items-center text-sm sm:text-base px-4 space-x-2",4,"ngIf"],["class","w-full overflow-auto flex items-center space-x-4 px-4 py-2",4,"ngIf"],["space_placeholder",""],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],[1,"flex","items-center","text-sm","sm:text-base","px-4","space-x-2"],[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","opacity-60 text-sm mb-2",4,"ngIf"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-[#1F2021]","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","flex","items-center","justify-center"],["class","min-h-full object-cover",3,"src",4,"ngIf","ngIfElse"],["placeholder",""],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"min-h-full","object-cover",3,"src"],["src","assets/icons/desk-placeholder.svg",1,"m-auto"],[1,"opacity-60","text-sm","mb-2"],["diameter","24",4,"ngIf"],["diameter","24"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-[#1F2021]","shadow","p-4","space-x-2",3,"click"],[1,"w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","overflow-hidden","flex","items-center","justify-center"],["src","assets/icons/room-placeholder.svg",1,"m-auto"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,ie,3,3,"div",1),e.YNc(2,oe,4,3,"div",2),e.YNc(3,pe,5,6,"div",3),e.YNc(4,ue,6,6,"div",2),e.YNc(5,ve,5,7,"div",3),e.qZA(),e.YNc(6,he,1,0,"ng-template",null,4,e.W1O)),2&n&&(e.xp6(1),e.Q6J("ngIf",!t.hide_rooms||!t.hide_spaces),e.xp6(1),e.Q6J("ngIf",!t.hide_spaces),e.xp6(1),e.Q6J("ngIf",!t.hide_spaces),e.xp6(1),e.Q6J("ngIf",!t.hide_rooms),e.xp6(1),e.Q6J("ngIf",!t.hide_rooms))},dependencies:[p.sg,p.O5,S.o,w.wG,W.Ou,v.rH,p.Ov,F.X$,R.X],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--73.css.map*/"]});var A=c(1299),xe=c(9685),b=c(8589),Ae=c(6896);const be=["search_input"];function Le(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",19)(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA(),e.TgZ(9,"div",22),e._uU(10),e.qZA()(),e.TgZ(11,"button",23)(12,"app-icon"),e._uU(13,"more_horiz"),e.qZA()(),e.TgZ(14,"mat-menu",24,25)(16,"button",26),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.newMeeting(s))}),e.TgZ(17,"app-icon",27),e._uU(18,"today"),e.qZA(),e.TgZ(19,"div"),e._uU(20),e.ALo(21,"translate"),e.qZA()(),e.TgZ(22,"button",26),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.removeUser(s))}),e.TgZ(23,"app-icon",27),e._uU(24,"cancel"),e.qZA(),e.TgZ(25,"div"),e._uU(26),e.ALo(27,"translate"),e.qZA()()()()}if(2&i){const t=n.$implicit,o=e.MAs(15);e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(2),e.Q6J("matTooltip",t.name),e.xp6(1),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("matTooltip",t.organisation),e.xp6(1),e.hij(" ",t.organisation," "),e.xp6(2),e.hij(" ",t.location," "),e.xp6(1),e.Q6J("matMenuTriggerFor",o),e.xp6(9),e.Oqu(e.lcZ(21,13,"WPA.CREATE_MEETING")),e.xp6(6),e.Oqu(e.lcZ(27,15,"WPA.REMOVE_COLLEAGUE"))}}function Ze(i,n){if(1&i&&(e.ynx(0),e.YNc(1,Le,28,17,"div",14),e.ALo(2,"async"),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.contacts))}}function Te(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.addUser(s))}),e.TgZ(1,"div",31),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",32)(5,"div",33),e._uU(6),e.qZA(),e.TgZ(7,"div",34),e._uU(8),e.qZA()()()}if(2&i){const t=n.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," ")}}function ye(i,n){if(1&i&&(e.ynx(0),e.YNc(1,Te,9,7,"button",29),e.ALo(2,"async"),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.search_results))}}function Ce(i,n){if(1&i&&(e.TgZ(0,"div",28),e.YNc(1,ye,3,3,"ng-container",4),e.ALo(2,"async"),e.qZA()),2&i){const t=e.oxw(),o=e.MAs(23);let a;e.xp6(1),e.Q6J("ngIf",null==(a=e.lcZ(2,2,t.search_results))?null:a.length)("ngIfElse",o)}}function Ne(i,n){1&i&&(e.TgZ(0,"div",35),e._UZ(1,"img",36),e.TgZ(2,"p",37),e.SDv(3,38),e.ALo(4,"translate"),e.qZA()()),2&i&&(e.xp6(4),e.pQV(e.lcZ(4,1,"WPA.COLLEAGUES_EMPTY")),e.QtT(3))}function Oe(i,n){if(1&i&&(e.TgZ(0,"div",35)(1,"p",37),e._uU(2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()()),2&i){const t=e.oxw();let o;e.xp6(2),e.hij(" ",null!=(o=e.lcZ(3,1,t.options))&&o.search?'Unable for find any users matching "'+(null==(o=e.lcZ(4,3,t.options))?null:o.search)+'"':"Start typing to search for users."," ")}}function Pe(i,n){1&i&&(e.TgZ(0,"div",35),e._UZ(1,"mat-spinner",39),e.TgZ(2,"p",37),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&i&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"WPA.COLLEAGUES_SEARCHING")," "))}class L extends u.KG{constructor(n,t,o,a){var s;super(),s=this,this._state=n,this._settings=t,this._event_form=o,this._router=a,this.show_search=!1,this.contacts=this._state.contacts,this.search_results=(0,M.aj)([this._state.search_results,this._state.contacts]).pipe((0,h.U)(([l,r])=>l.filter(g=>!r.find(_=>_.id===g.id||_.email===g.email)))),this.options=this._state.options,this.loading=this._state.loading,this.addUser=function(){var l=(0,d.Z)(function*(r){yield s._state.addContact(r),(0,u.t5)(`Successfully added "${r.name}" to contacts`),s.show_search=!1});return function(r){return l.apply(this,arguments)}}(),this.removeUser=function(){var l=(0,d.Z)(function*(r){yield s._state.removeContact(r),(0,u.t5)(`Successfully removed "${r.name}" from contacts`)});return function(r){return l.apply(this,arguments)}}(),this.updateSearch=l=>this._state.setOptions({search:l})}newMeeting(n){this._event_form.newForm(),this._event_form.form.patchValue({attendees:[n]}),this._settings.get("app.new_features")?this._router.navigate(["/book","meeting"]):this._router.navigate(["/book","spaces"])}openSearch(){this.updateSearch(""),this.show_search=!0,this.timeout("open",()=>this._input_el.nativeElement.focus(),100)}}L.\u0275fac=function(n){return new(n||L)(e.Y36(f),e.Y36(u.gb),e.Y36(A.MH),e.Y36(v.F0))},L.\u0275cmp=e.Xpm({type:L,selectors:[["landing-colleagues"]],viewQuery:function(n,t){if(1&n&&e.Gf(be,7),2&n){let o;e.iGM(o=e.CRH())&&(t._input_el=o.first)}},features:[e.qOj],decls:26,vars:22,consts:function(){let i,n,t;return i=$localize`:␟c0f95f99e44be18320d55d7ea3b39d521c5e847f␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,i=e.Zx4(i,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟df63d46581a56aeb689b521513ff65c896b6c618␟6964084933612300643: ${"\ufffd0\ufffd"}:INTERPOLATION: ${i}:ICU: `,t=$localize`:␟082b183958aaf6c9cda3dd1caba0bb3821480348␟5990245187139880203: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["btn","","matRipple","",1,"inverse","w-[calc(100%-1rem)]","m-2",3,"click"],["search","",1,"absolute","inset-x-2","top-2","bottom-[3.5rem]","rounded-lg","overflow-hidden","flex","flex-col","bg-white","dark:bg-neutral-600","shadow","border","border-gray-200"],["placeholder","Search for users...",1,"w-full","border-b","border-gray-200","p-2","rounded-t-lg",3,"ngModel","ngModelChange"],["search_input",""],["icon","",1,"absolute","top-0","right-0",3,"click"],["class","overflow-auto flex-1 h-1/2 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["empty_state",""],["search_empty",""],["load_state",""],["class","flex items-center px-2 space-x-2 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-2","space-x-2","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight","flex-1","w-1/2"],[1,"truncate",3,"matTooltip"],[1,"text-sm","truncate",3,"matTooltip"],[1,"text-xs","opacity-60","truncate"],["icon","",1,"!rounded","bg-gray-300",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],[1,"overflow-auto","flex-1","h-1/2","flex","flex-col","space-y-2"],["matRipple","","class","flex items-center p-2 space-x-2 w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","p-2","space-x-2","w-full","text-left",3,"click"],[1,"text-base","relative"],[1,"leading-tight"],[1,"truncate"],[1,"text-sm","truncate"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-contacts.svg"],[1,"opacity-60","text-sm","text-center"],t,["diameter","32"]]},template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div",3),e.YNc(6,Ze,3,3,"ng-container",4),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSearch()}),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"div",6)(12,"input",7,8),e.NdJ("ngModelChange",function(a){return t.updateSearch(a)}),e.ALo(14,"async"),e.qZA(),e.TgZ(15,"button",9),e.NdJ("click",function(){return t.show_search=!1}),e.TgZ(16,"app-icon"),e._uU(17,"close"),e.qZA()(),e.YNc(18,Ce,3,4,"div",10),e.ALo(19,"async"),e.qZA(),e.YNc(20,Ne,5,3,"ng-template",null,11,e.W1O),e.YNc(22,Oe,5,5,"ng-template",null,12,e.W1O),e.YNc(24,Pe,5,3,"ng-template",null,13,e.W1O)),2&n){const o=e.MAs(21),a=e.MAs(25);let s,l,r,g;e.xp6(4),e.pQV((null==(s=e.lcZ(3,10,t.contacts))?null:s.length)||0)(null==(l=e.lcZ(4,12,t.contacts))?null:l.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",null==(r=e.lcZ(7,14,t.contacts))?null:r.length)("ngIfElse",o),e.xp6(3),e.hij(" ",e.lcZ(10,16,"WPA.ADD")," "),e.xp6(2),e.ekj("hidden",!t.show_search),e.xp6(1),e.Q6J("ngModel",null==(g=e.lcZ(14,18,t.options))?null:g.search),e.xp6(6),e.Q6J("ngIf",!e.lcZ(19,20,t.loading))("ngIfElse",a)}},dependencies:[p.sg,p.O5,S.o,xe.k,b.VK,b.OP,b.p6,w.wG,W.Ou,Ae.gM,U.Fj,U.JJ,U.On,p.Ov,F.X$],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-colleagues.component.ts-angular-inline--74.css.map*/"]});var E=c(9638),q=c(6485);function Fe(i,n){if(1&i&&(e._UZ(0,"img",24),e.ALo(1,"async"),e.ALo(2,"space")),2&i){const t=e.oxw().$implicit;let o;e.Q6J("src",null==(o=e.lcZ(1,1,e.lcZ(2,3,t)))?null:o.images[0],e.LSH)}}function Ee(i,n){1&i&&e._UZ(0,"img",25)}function Ue(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,Fe,3,5,"img",10),e.ALo(4,"async"),e.ALo(5,"space"),e.YNc(6,Ee,1,0,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(8,"div",12)(9,"div",13),e._uU(10),e.ALo(11,"async"),e.ALo(12,"space"),e.ALo(13,"async"),e.ALo(14,"space"),e.qZA(),e.TgZ(15,"div",14)(16,"app-icon",15),e._uU(17,"place"),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.ALo(20,"async"),e.ALo(21,"space"),e.qZA()(),e.TgZ(22,"div",16)(23,"app-icon",15),e._uU(24,"people"),e.qZA(),e.TgZ(25,"div"),e.SDv(26,17),e.ALo(27,"async"),e.ALo(28,"space"),e.ALo(29,"async"),e.ALo(30,"space"),e.qZA()()()(),e.TgZ(31,"button",18),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.newSpaceMeeting(s))}),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"button",19)(35,"app-icon"),e._uU(36,"more_horiz"),e.qZA()(),e.TgZ(37,"mat-menu",20,21)(39,"button",22),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.toggleFavourite("space",s))}),e.TgZ(40,"app-icon",23),e._uU(41,"cancel"),e.qZA(),e.TgZ(42,"div"),e._uU(43),e.ALo(44,"translate"),e.qZA()()()()}if(2&i){const t=n.$implicit,o=e.MAs(7),a=e.MAs(38),s=e.oxw(2);let l,r,g,_,k;e.xp6(3),e.Q6J("ngIf",null==(l=e.lcZ(4,9,e.lcZ(5,11,t)))||null==l.images?null:l.images.length)("ngIfElse",o),e.xp6(7),e.hij(" ",(null==(r=e.lcZ(11,13,e.lcZ(12,15,t)))?null:r.display_name)||(null==(r=e.lcZ(13,17,e.lcZ(14,19,t)))?null:r.name)," "),e.xp6(9),e.hij(" ",null==(g=s.level(e.lcZ(20,21,e.lcZ(21,23,t))))?null:g.display_name," "),e.xp6(11),e.pQV((null==(_=e.lcZ(27,25,e.lcZ(28,27,t)))?null:_.capacity)||2)((null==(k=e.lcZ(29,29,e.lcZ(30,31,t)))?null:k.capacity)||2),e.QtT(26),e.xp6(2),e.hij(" ",e.lcZ(33,33,"WPA.BOOK")," "),e.xp6(2),e.Q6J("matMenuTriggerFor",a),e.xp6(9),e.Oqu(e.lcZ(44,35,"WPA.FAVOURITES_REMOVE"))}}function Ie(i,n){if(1&i&&e._UZ(0,"img",24),2&i){const t=e.oxw().$implicit;e.Q6J("src",null==t?null:t.images[0],e.LSH)}}function Me(i,n){if(1&i&&e._UZ(0,"img",30),2&i){const t=e.oxw().$implicit;e.Q6J("src","assets/icons/"+("desk"===t.type?"desk":"car")+"-placeholder.svg",e.LSH)}}function Se(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,Ie,1,1,"img",10),e.YNc(4,Me,1,1,"ng-template",null,26,e.W1O),e.qZA(),e.TgZ(6,"div",27)(7,"div",28),e._uU(8),e.qZA(),e.TgZ(9,"div",14)(10,"app-icon",15),e._uU(11,"place"),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.qZA()()()(),e.TgZ(14,"button",18),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.newBooking(s.type,s))}),e.SDv(15,29),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"button",19)(18,"app-icon"),e._uU(19,"more_horiz"),e.qZA()(),e.TgZ(20,"mat-menu",20,21)(22,"button",22),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.toggleFavourite(s.type,s.id))}),e.TgZ(23,"app-icon",23),e._uU(24,"cancel"),e.qZA(),e.TgZ(25,"div"),e._uU(26),e.ALo(27,"translate"),e.qZA()()()()}if(2&i){const t=n.$implicit,o=e.MAs(5),a=e.MAs(21);e.xp6(3),e.Q6J("ngIf",null==t||null==t.images?null:t.images.length)("ngIfElse",o),e.xp6(5),e.hij(" ",(null==t?null:t.display_name)||(null==t?null:t.name)," "),e.xp6(5),e.hij(" ",null==t||null==t.zone?null:t.zone.display_name," "),e.xp6(3),e.pQV(e.lcZ(16,7,"WPA.BOOK")),e.QtT(15),e.xp6(1),e.Q6J("matMenuTriggerFor",a),e.xp6(9),e.Oqu(e.lcZ(27,9,"WPA.FAVOURITES_REMOVE"))}}function we(i,n){if(1&i&&(e.ynx(0),e.YNc(1,Ue,45,37,"div",6),e.YNc(2,Se,28,11,"div",6),e.ALo(3,"async"),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.spaces),e.xp6(1),e.Q6J("ngForOf",e.lcZ(3,2,t.assets))}}function Re(i,n){1&i&&(e.TgZ(0,"div",31),e._UZ(1,"img",32),e.TgZ(2,"p",33),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&i&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"WPA.FAVOURITES_EMPTY")," "))}const G=[];class Z extends u.KG{constructor(n,t,o,a,s,l){super(),this._org=n,this._settings=t,this._space_pipe=o,this._event_form=a,this._booking_form=s,this._router=l,this.assets=(0,M.aj)([this._booking_form.loadAssets("desks"),this._booking_form.loadAssets("parking_spaces")]).pipe((0,h.U)(([r,g])=>[...r.filter(({id:_})=>this.desks.includes(_)).map(_=>({..._,type:"desk"})),...g.filter(({id:_})=>this.parking_spaces.includes(_)).map(_=>({..._,type:"parking"}))]),(0,O.d)(1))}get spaces(){return this._settings.get("favourite_spaces")||G}get desks(){return this._settings.get(q.v)||G}get parking_spaces(){return this._settings.get(E.Bi)||G}level(n){return this._org.levelWithID(n?.zones||[])}ngOnInit(){}toggleFavourite(n,t){let o=this.spaces,a="favourite_spaces";switch(n){case"desk":o=this.desks,a=q.v;break;case"parking":o=this.parking_spaces,a=E.Bi}o.includes(t)?this._settings.saveUserSetting(a,o.filter(l=>l!==t)):this._settings.saveUserSetting(a,[...o,t])}newSpaceMeeting(n){var t=this;return(0,d.Z)(function*(){const o=yield t._space_pipe.transform(n);!o||(t._event_form.newForm(),t._event_form.form.patchValue({resources:[o]}),t._settings.get("app.new_features")?t._router.navigate(["/book","meeting"]):t._router.navigate(["/book","spaces"]))})()}newBooking(n,t){var o=this;return(0,d.Z)(function*(){!t||(o._booking_form.newForm(),o._booking_form.setOptions({type:n}),o._booking_form.form.patchValue({asset_id:t,booking_type:n}),o._settings.get("app.new_features")?o._router.navigate(["/book","desk"===n?"newdesk":"new-parking"]):o._router.navigate(["/book","desk"===n?"desks":"parking"]))})()}}Z.\u0275fac=function(n){return new(n||Z)(e.Y36(I.w7),e.Y36(u.gb),e.Y36(R.X),e.Y36(A.MH),e.Y36(E.fy),e.Y36(v.F0))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["landing-favourites"]],features:[e._Bn([R.X]),e.qOj],decls:8,vars:6,consts:function(){let i,n,t,o,a;return i=$localize`:␟e5191f926bd1e4e3a04904f3ed70be128d0df68e␟8885797130863755638:{VAR_PLURAL, plural, =1 {Resource } other {Resources }}`,i=e.Zx4(i,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟9cfeafbe7fccbc1ea0e77b117ee30a235d3fbcbb␟1802740986701741685: ${"\ufffd0\ufffd"}:INTERPOLATION: ${i}:ICU: `,t=$localize`:␟292b0c8f5459f832824fbde4939054e5d313cfac␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,t=e.Zx4(t,{VAR_PLURAL:"\ufffd1\ufffd"}),o=$localize`:␟3debb02c945d77818d916bf21e734def0311a492␟5508454923022029915: ${"\ufffd0\ufffd"}:INTERPOLATION: ${t}:ICU: `,a=$localize`:␟477a2990dc9e7a47c36b57d54f8150408a0c309b␟8490385903680845804: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-2","overflow-auto","pt-4","divide-y","divide-gray-300"],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center mx-2 pt-4 space-y-2 relative","item","",4,"ngFor","ngForOf"],["item","",1,"flex","flex-col","items-center","mx-2","pt-4","space-y-2","relative"],[1,"flex","w-full","items-center","space-x-2","relative"],[1,"w-20","h-20","overflow-hidden","rounded","relative","flex","items-center","justify-center","bg-black/10","dark:bg-white/5"],["class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full",3,"src",4,"ngIf","ngIfElse"],["space_placeholder",""],[1,"h-20","flex-1","w-1/2"],[1,"truncate","mb-4","w-full","pr-12"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2","mb-2"],[1,"text-blue-500"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2"],o,["btn","","matRipple","",1,"w-full","inverse",3,"click"],["icon","",1,"absolute","top-2","right-0","bg-gray-200","dark:bg-neutral-600","!rounded","!m-0",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","object-cover","min-w-full","min-h-full",3,"src"],["src","assets/icons/room-placeholder.svg",1,"m-auto"],["asset_placeholder",""],[1,"h-20"],[1,"truncate","mb-4"],a,[1,"m-auto",3,"src"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-favourites.svg"],[1,"opacity-60","text-sm","text-center"]]},template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.qZA()(),e.TgZ(3,"div",3),e.YNc(4,we,4,4,"ng-container",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,Re,5,3,"ng-template",null,5,e.W1O)),2&n){const o=e.MAs(7);let a;e.xp6(2),e.pQV((null==t.spaces?null:t.spaces.length)||0)(null==t.spaces?null:t.spaces.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",(null==t.spaces?null:t.spaces.length)||(null==(a=e.lcZ(5,4,t.assets))?null:a.length))("ngIfElse",o)}},dependencies:[p.sg,p.O5,S.o,b.VK,b.OP,b.p6,w.wG,p.Ov,F.X$,R.X],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-favourites.component.ts-angular-inline--75.css.map*/"]});var ke=c(5148),$e=c(5699),Ge=c(2551),De=c(4088);function Je(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"event-card",12),e.NdJ("edit",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(a))})("remove",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(a))}),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.Q6J("event",t)("show_day",!0)}}function Ye(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"booking-card",13),e.NdJ("remove",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(a))}),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.Q6J("booking",t)("show_day",!0)}}function Qe(i,n){if(1&i&&(e.ynx(0)(1,9),e.YNc(2,Je,1,2,"event-card",10),e.YNc(3,Ye,1,2,"booking-card",11),e.BQk()()),2&i){const t=n.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",o.type(t)),e.xp6(1),e.Q6J("ngSwitchCase","event"),e.xp6(1),e.Q6J("ngSwitchCase","booking")}}function je(i,n){if(1&i&&(e.ynx(0),e.YNc(1,Qe,4,3,"ng-container",8),e.ALo(2,"slice"),e.ALo(3,"async"),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,e.lcZ(3,6,t.upcoming_events),0,5))("ngForTrackBy",t.trackByFn)}}function We(i,n){1&i&&(e.TgZ(0,"div",14),e._UZ(1,"img",15),e.TgZ(2,"p",16),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&i&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"WPA.NO_UPCOMING_BOOKINGS")," "))}const V=function(){return["/your-bookings"]};class T{constructor(n,t,o,a){this._state=n,this._event_form=t,this._router=o,this._dialog=a,this.upcoming_events=this._state.upcoming_events}type(n){return n instanceof E.$N?"booking":"event"}ngOnInit(){this._state.refreshUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(n,t){return t?.id}edit(n){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(n)}remove(n){var t=this;return(0,d.Z)(function*(){const o=`${(0,ke.Z)(n.date,"dd MMM yyyy h:mma")}`,s=`Delete the booking for ${n instanceof A.ym?n.space?.display_name:n.asset_name||n.asset_id} at ${o}`,l=yield(0,u._5)({title:"Delete booking",content:s,icon:{content:"delete"}},t._dialog);"done"===l.reason&&(l.loading("Requesting booking deletion..."),yield(n instanceof A.ym?A.xC:E.pv)(n.id).toPromise().catch(r=>{throw(0,u.cB)(`Unable to delete booking. ${r}`),l.close(),r}),(0,u.t5)("Successfully deleted booking."),l.close())})()}}T.\u0275fac=function(n){return new(n||T)(e.Y36(f),e.Y36(A.MH),e.Y36(v.F0),e.Y36($e.uw))},T.\u0275cmp=e.Xpm({type:T,selectors:[["landing-upcoming"]],decls:16,vars:17,consts:[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],["btn","",1,"inverse","hidden","sm:flex",3,"routerLink"],[1,"inverse","flex","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day","edit","remove",4,"ngSwitchCase"],[3,"booking","show_day","remove",4,"ngSwitchCase"],[3,"event","show_day","edit","remove"],[3,"booking","show_day","remove"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"a",3),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"a",4),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"div",5),e.YNc(12,je,4,8,"ng-container",6),e.ALo(13,"async"),e.qZA()(),e.YNc(14,We,5,3,"ng-template",null,7,e.W1O)),2&n){const o=e.MAs(15);let a;e.xp6(3),e.hij(" ",e.lcZ(4,7,"WPA.YOUR_BOOKINGS")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(15,V)),e.xp6(1),e.hij(" ",e.lcZ(7,9,"WPA.VIEW_ALL")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(16,V)),e.xp6(1),e.hij(" ",e.lcZ(10,11,"WPA.VIEW_ALL")," "),e.xp6(3),e.Q6J("ngIf",null==(a=e.lcZ(13,13,t.upcoming_events))?null:a.length)("ngIfElse",o)}},dependencies:[p.sg,p.O5,p.RF,p.n9,Ge.j,De.E,v.rH,p.Ov,p.OU,F.X$]});var qe=c(6361),Ve=c(4187),Ke=c(6012);function Xe(i,n){1&i&&e._UZ(0,"topbar",13)}function Be(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.tab="people")}),e.TgZ(1,"app-icon"),e._uU(2,"people"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"translate"),e.ALo(6,"uppercase"),e.qZA()()}if(2&i){const t=e.oxw(2);e.ekj("border-b","people"!==t.tab)("border-gray-300","people"!==t.tab)("bg-black","people"!==t.tab)("bg-opacity-5","people"!==t.tab),e.xp6(4),e.hij(" ",e.lcZ(5,9,e.lcZ(6,11,"WPA.COLLEAGUES"))," ")}}function He(i,n){1&i&&e._UZ(0,"landing-colleagues")}function ze(i,n){1&i&&e._UZ(0,"landing-favourites")}function et(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15),e.YNc(2,Be,7,13,"button",16),e.TgZ(3,"button",17),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.tab="fav")}),e.TgZ(4,"app-icon"),e._uU(5,"favorite"),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"div",18),e.YNc(10,He,1,0,"landing-colleagues",12),e.YNc(11,ze,1,0,"landing-favourites",12),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",!t.hide_colleagues),e.xp6(1),e.ekj("border-b","fav"!==t.tab)("border-gray-300","fav"!==t.tab)("bg-black","fav"!==t.tab)("bg-opacity-5","fav"!==t.tab),e.xp6(4),e.Oqu(e.lcZ(8,12,"WPA.FAVOURITES")),e.xp6(3),e.Q6J("ngIf","people"===t.tab&&!t.hide_colleagues),e.xp6(1),e.Q6J("ngIf","fav"===t.tab||t.hide_colleagues)}}function tt(i,n){if(1&i&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.building.address||t.building.display_name||t.building.name," ")}}function nt(i,n){1&i&&e._UZ(0,"footer-menu")}const it=function(i){return{name:i}};class y{constructor(n,t){this._org=n,this._settings=t,this.tab="people"}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}get date(){return(0,qe.Z)(this.time||Date.now())}get user(){return(0,u.ar)()}get building(){return this._org.building}get hide_landing_sidebar(){return this._settings.get("app.general.hide_landing_sidebar")}get hide_colleagues(){return this._settings.get("app.general.hide_colleagues")}}y.\u0275fac=function(n){return new(n||y)(e.Y36(I.w7),e.Y36(u.gb))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-dashboard"]],decls:19,vars:14,consts:[["class","z-10",4,"ngIf"],[1,"flex","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900"],["class","relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-[#1F2021] border-r border-gray-200 dark:border-neutral-700",4,"ngIf"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto","z-0"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","dark:bg-zinc-800","px-4","sm:rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],["date","",1,"text-sm","sm:text-base"],["class","text-sm sm:text-base",4,"ngIf"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"],[4,"ngIf"],[1,"z-10"],[1,"relative","hidden","sm:flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-200","dark:border-neutral-700"],[1,"flex","items-center","divide-x","divide-gray-300"],["matRipple","","class","flex-1 font-medium p-2 flex items-center justify-center space-x-2",3,"border-b","border-gray-300","bg-black","bg-opacity-5","click",4,"ngIf"],["matRipple","",1,"flex-1","font-medium","p-2","flex","items-center","justify-center","space-x-2",3,"click"],[1,"flex-1","w-full","h-1/2"],[1,"text-sm","sm:text-base"]],template:function(n,t){1&n&&(e.YNc(0,Xe,1,0,"topbar",0),e.TgZ(1,"div",1),e.YNc(2,et,12,14,"div",2),e.TgZ(3,"div",3)(4,"header",4)(5,"div",5)(6,"div",6),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"div",7),e._uU(10),e.ALo(11,"date"),e.qZA(),e.YNc(12,tt,2,1,"div",8),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"img",10),e.qZA()(),e._UZ(15,"landing-availability")(16,"div",11)(17,"landing-upcoming"),e.qZA()(),e.YNc(18,nt,1,0,"footer-menu",12)),2&n&&(e.Q6J("ngIf",!t.hide_nav),e.xp6(2),e.Q6J("ngIf",!t.hide_landing_sidebar),e.xp6(5),e.hij(" ",e.xi3(8,6,"WPA.WELCOME_MESSAGE",e.VKq(12,it,null==t.user?null:t.user.name))," "),e.xp6(3),e.hij(" ",e.xi3(11,9,t.date,"fullDate")," "),e.xp6(2),e.Q6J("ngIf",(null==t.building?null:t.building.address)||(null==t.building?null:t.building.name)),e.xp6(6),e.Q6J("ngIf",!t.hide_nav))},dependencies:[p.O5,Ve.o,Ke.i,S.o,w.wG,L,x,T,Z,p.gd,p.uU,F.X$],styles:["[_nghost-%COMP%]{position:absolute;inset:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--76.css.map*/"]});const ot=[{path:"",component:y}];class C{}C.\u0275fac=function(n){return new(n||C)},C.\u0275mod=e.oAB({type:C}),C.\u0275inj=e.cJS({imports:[p.ez,K.v,U.u5,v.Bz.forChild(ot)]})}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map