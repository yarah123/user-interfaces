(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_workplace_src_app_dashboard_dashboard_module_ts"],{566:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DashboardModule:()=>ae});var i=n(1511),s=n(6073),o=n(6898),a=n(2619),c=n(4892),r=n(2142),l=n(4762),u=n(4554),d=n(8512),p=n(878),m=n(7701),g=n(4689),f=n(7727),h=n(8303),_=n(3530),v=n(3835),x=n(8125),b=n(9962),Z=n(3455),y=n(4587),O=n(3743),w=n(1496);let A=(()=>{class e extends b.KG{constructor(e,t){super(),this._calendar=e,this._org=t,this._options=new d.X({}),this._free_spaces=new d.X([]),this._upcoming_events=new d.X([]),this._contacts=new d.X([]),this._level_occupancy=new d.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,m.b)(500),(0,g.w)(({search:e})=>e?(0,y.VE)(e):(0,p.of)([])),(0,f.K)(e=>[]),(0,h.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){return(0,l.mG)(this,void 0,void 0,function*(){if(yield this._org.initialised.pipe((0,_.P)(e=>e)).toPromise(),this.subscription("building",this._org.active_building.pipe((0,v.h)(e=>!!e)).subscribe(()=>this.updateBuildingMetadata())),!this._org.organisation.bindings.area_management)return;const e=(0,u.rTZ)(this._org.organisation.bindings.area_management,"AreaManagement").binding("overview");e.listen().subscribe(e=>this.updateOccupancy(e||{})),e.bind()})}setOptions(e){this._options.next(Object.assign(Object.assign({},this._options.getValue()),e))}pollFreeSpaces(e=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),e)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(e=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),e)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){return(0,l.mG)(this,void 0,void 0,function*(){const e=yield(0,u.rlq)((0,b.ar)().id,{name:"contacts"}).toPromise();this._contacts.next((e.details instanceof Array?e.details:[]).map(e=>new y.n5(e)))})}addContact(e){return(0,l.mG)(this,void 0,void 0,function*(){let t=[...this._contacts.getValue()];t.push(e),t=(0,b.Tw)(t,"email");const n=yield(0,u.Ymr)((0,b.ar)().id,{name:"contacts",description:"Contacts for the User",details:t}).toPromise();this._contacts.next((n.details instanceof Array?n.details:[]).map(e=>new y.n5(e)))})}removeContact(e){return(0,l.mG)(this,void 0,void 0,function*(){let t=[...this._contacts.getValue()];t=t.filter(t=>t.email!==e.email);const n=yield(0,u.Ymr)((0,b.ar)().id,{name:"contacts",description:"Contacts for the User",details:t}).toPromise();this._contacts.next((n.details instanceof Array?n.details:[]).map(e=>new y.n5(e)))})}updateOccupancy(e){return(0,l.mG)(this,void 0,void 0,function*(){const t=[...this._org.levels];t.sort((t,n)=>{var i,s;return(null===(i=e[t.id])||void 0===i?void 0:i.recommendation)-(null===(s=e[n.id])||void 0===s?void 0:s.recommendation)}),this._level_occupancy.next(t)})}updateFreeSpaces(){return(0,l.mG)(this,void 0,void 0,function*(){if(!this._org.building)return;const e=Math.floor((new Date).valueOf()/1e3),t=Math.floor((0,x.Z)(new Date).valueOf()/1e3),n=yield this._calendar.freeBusy({period_start:e,period_end:t,zone_ids:this._org.building.id}).toPromise();n.sort((e,t)=>e.capacity-t.capacity),this._free_spaces.next(n)})}updateUpcomingEvents(){return(0,l.mG)(this,void 0,void 0,function*(){const e=Math.floor((new Date).valueOf()/1e3),t=Math.floor((0,x.Z)(new Date).valueOf()/1e3),n=yield(0,Z.u$)({period_start:e,period_end:t,calendars:(0,b.ar)().email}).toPromise();this._upcoming_events.next(n)})}updateBuildingMetadata(){return(0,l.mG)(this,void 0,void 0,function*(){const e=this._org.building,t=yield(0,u.rlq)(e.id,{name:"bindings"}).toPromise();if(!t.details.occupancy)return;const n=t.details.occupancy,i=(0,u.rTZ)(n.sys,n.module,n.index);i&&(this._occupancy_binding&&this._occupancy_binding.unbind(),this._occupancy_binding=i.binding("occupancy"),this._occupancy_binding.bind(),this.subscription("occupancy_binding",this._occupancy_binding.listen().subscribe(e=>{const t=Object.keys(e).map(t=>Object.assign({id:t},e[t]));t.sort((e,t)=>e.recommendation_factor-t.recommendation_factor),this._level_occupancy.next(t.map(e=>this._org.levelWithID([e.id])))})))})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(O.ot),a.LFG(w.w7))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=n(1548),T=n(5980);const U=function(){return["/explore"]},M=function(e){return{level:e}};function C(e,t){if(1&e&&(a.TgZ(0,"a",9),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("routerLink",a.DdM(3,U))("queryParams",a.VKq(4,M,e.id)),a.xp6(1),a.hij(" ",e.display_name||e.name," ")}}const P=function(e){return{space:e}};function k(e,t){if(1&e&&(a.TgZ(0,"a",9),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("routerLink",a.DdM(3,U))("queryParams",a.VKq(4,P,e.id)),a.xp6(1),a.hij("",e.display_name||e.name," ")}}function J(e,t){1&e&&(a.TgZ(0,"span",10),a._uU(1,"No free spaces"),a.qZA())}const F=function(){return{class:"material-icons",content:"crop_free"}},Q=function(){return{class:"material-icons",content:"av_timer"}};let L=(()=>{class e{constructor(e){this._state=e,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){this._state.pollFreeSpaces()})}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(A))},e.\u0275cmp=a.Xpm({type:e,selectors:[["a-dashboard-availability"]],decls:22,vars:21,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],[1,"bg-darken","rounded-lg","mr-2","text-2xl",3,"icon"],["free-levels","",1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","my-4","p-2"],[1,"items","space-y-2"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(e,t){1&e&&(a.TgZ(0,"h3",0),a._uU(1,"Available Now"),a.qZA(),a.TgZ(2,"div",1),a.TgZ(3,"div",2),a._UZ(4,"app-icon",3),a.TgZ(5,"div"),a._uU(6,"Most free space:"),a.qZA(),a.qZA(),a.TgZ(7,"div",4),a.YNc(8,C,2,6,"a",5),a.ALo(9,"slice"),a.ALo(10,"async"),a.qZA(),a.qZA(),a.TgZ(11,"div",6),a.TgZ(12,"div",2),a._UZ(13,"app-icon",3),a.TgZ(14,"div"),a._uU(15,"Free rooms now:"),a.qZA(),a.qZA(),a.TgZ(16,"div",7),a.YNc(17,k,2,6,"a",5),a.ALo(18,"slice"),a.ALo(19,"async"),a.YNc(20,J,2,0,"span",8),a.ALo(21,"async"),a.qZA(),a.qZA()),2&e&&(a.xp6(4),a.Q6J("icon",a.DdM(19,F)),a.xp6(4),a.Q6J("ngForOf",a.Dn7(9,5,a.lcZ(10,9,t.levels_free),0,2)),a.xp6(5),a.Q6J("icon",a.DdM(20,Q)),a.xp6(4),a.Q6J("ngForOf",a.Dn7(18,11,a.lcZ(19,15,t.space_list),0,3)),a.xp6(3),a.Q6J("ngIf",!a.lcZ(21,17,t.space_list).length))},directives:[q.o,i.sg,i.O5,T.zs,o.yS],pipes:[i.OU,i.Ov],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}"]}),e})();var D=n(8282),N=n(4608),I=n(6828),Y=n(5969);function G(e,t){1&e&&a._UZ(0,"a-user-avatar",15),2&e&&a.Q6J("user",t.$implicit)}function S(e,t){if(1&e&&(a.TgZ(0,"a",16),a._uU(1,"Join Call"),a.qZA()),2&e){const e=a.oxw().$implicit;a.Q6J("href",e.meeting_link,a.LSH)}}const j=function(){return{class:"material-icons",content:"room"}},E=function(){return{class:"material-icons",content:"group"}};function $(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",3),a._UZ(1,"div",4),a.TgZ(2,"div",5),a.TgZ(3,"div",6),a._uU(4),a.ALo(5,"date"),a.qZA(),a.TgZ(6,"div",7),a._uU(7),a.qZA(),a.TgZ(8,"div",8),a._UZ(9,"app-icon",9),a.TgZ(10,"a",10),a.NdJ("click",function(){const t=a.CHM(e).$implicit,n=a.oxw();return t.space?n.locateSpace(t.space):""}),a._uU(11),a.qZA(),a.qZA(),a.TgZ(12,"div",11),a._UZ(13,"app-icon",9),a._uU(14),a.qZA(),a.TgZ(15,"div",12),a.YNc(16,G,1,1,"a-user-avatar",13),a.qZA(),a.qZA(),a.YNc(17,S,2,1,"a",14),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(4),a.hij(" ",a.xi3(5,13,e.date,"shortTime")," "),a.xp6(3),a.hij(" ",e.title," "),a.xp6(2),a.Q6J("icon",a.DdM(16,j)),a.xp6(1),a.ekj("underline",!!e.space),a.Q6J("matTooltip",e.space?"Locate Space":""),a.xp6(1),a.AsE(" ",(null==e.space?null:e.space.display_name)||(null==e.space?null:e.space.name)||"<No Location>"," ",null!=e.space&&null!=e.space.level&&e.space.level.display_name||null!=e.space&&null!=e.space.level&&e.space.level.name?", "+e.space.level.display_name||0:""," "),a.xp6(2),a.Q6J("icon",a.DdM(17,E)),a.xp6(1),a.AsE(" ",e.guests.length," Guest",1===e.guests.length?"":"s"," "),a.xp6(2),a.Q6J("ngForOf",e.guests),a.xp6(1),a.Q6J("ngIf",e.meeting_link)}}function X(e,t){1&e&&(a.TgZ(0,"p",17),a._uU(1," No upcoming events for today "),a.qZA())}let z=(()=>{class e{constructor(e,t){this._state=e,this._dialog=t,this.upcoming_events=this._state.upcoming_events}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}locateSpace(e){this._dialog.open(D.p,{data:{item:e}})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(A),a.Y36(N.uw))},e.\u0275cmp=a.Xpm({type:e,selectors:[["a-dashboard-upcoming"]],decls:7,vars:10,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["class","text-dark-fade text-center w-full",4,"ngIf"],["name","event",1,"flex","bg-white","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"],[1,"text-dark-fade","text-center","w-full"]],template:function(e,t){1&e&&(a.TgZ(0,"h3",0),a._uU(1,"Today's Events"),a.qZA(),a.YNc(2,$,18,18,"div",1),a.ALo(3,"slice"),a.ALo(4,"async"),a.YNc(5,X,2,0,"p",2),a.ALo(6,"async")),2&e&&(a.xp6(2),a.Q6J("ngForOf",a.Dn7(3,2,a.lcZ(4,6,t.upcoming_events),0,3)),a.xp6(3),a.Q6J("ngIf",!a.lcZ(6,8,t.upcoming_events).length))},directives:[i.sg,i.O5,q.o,I.gM,Y.k,T.zs],pipes:[i.OU,i.Ov,i.uU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=time][_ngcontent-%COMP%]{color:#00529b}[name=event][_ngcontent-%COMP%]{padding:1rem 1rem 1rem 2rem}[name=status][_ngcontent-%COMP%]{top:1rem;left:-.8rem;height:2.5rem;width:1.6rem;background-color:#00529b}button[_ngcontent-%COMP%]{height:3em}app-icon[_ngcontent-%COMP%]{margin-left:-.25rem}"]}),e})();var V=n(8055);const K=["input"],B=function(){return{class:"material-icons",content:"close"}};function H(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",14),a._UZ(1,"a-user-avatar",15),a.TgZ(2,"div",16),a._uU(3),a.qZA(),a.TgZ(4,"div",17),a._UZ(5,"div",18),a._uU(6," Level 12 "),a.qZA(),a.TgZ(7,"button",19),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().removeUser(t)}),a._UZ(8,"app-icon",20),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(1),a.Q6J("user",e),a.xp6(2),a.hij(" ",e.name," "),a.xp6(5),a.Q6J("icon",a.DdM(3,B))}}function W(e,t){if(1&e&&(a.TgZ(0,"button",21),a._uU(1),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.hij(" ",e.search_str?'No matches for "'+e.search_str+'"':"Type to search for users..."," ")}}function R(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"button",22),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().addUser(t)}),a.TgZ(1,"div",23),a._UZ(2,"a-user-avatar",24),a.TgZ(3,"div",25),a.TgZ(4,"div"),a._uU(5),a.qZA(),a.TgZ(6,"div",26),a._uU(7),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(2),a.Q6J("user",e),a.xp6(3),a.Oqu(e.name),a.xp6(2),a.hij(" ",e.email," ")}}const ee=function(){return{class:"material-icons",content:"person_add"}};let te=(()=>{class e extends b.KG{constructor(e){super(),this._state=e,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=e=>this._state.addContact(e),this.removeUser=e=>this._state.removeContact(e),this.updateSearch=e=>this._state.setOptions({search:e}),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(A))},e.\u0275cmp=a.Xpm({type:e,selectors:[["a-dashboard-contacts"]],viewQuery:function(e,t){if(1&e&&a.Gf(K,5),2&e){let e;a.iGM(e=a.CRH())&&(t._input_el=e.first)}},features:[a.qOj],decls:20,vars:17,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["name","location",1,"flex","items-center","text-sm"],["name","dot",1,"mr-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(e,t){if(1&e&&(a.TgZ(0,"h3",0),a._uU(1,"Contacts"),a.qZA(),a.TgZ(2,"div",1),a.YNc(3,H,9,4,"div",2),a.ALo(4,"async"),a.TgZ(5,"button",3),a.NdJ("menuOpened",function(){return t.focusInput()})("menuClosed",function(){return t.clearInput()}),a.TgZ(6,"div",4),a._UZ(7,"app-icon",5),a.TgZ(8,"span",6),a._uU(9,"Click to add a person to contacts"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"mat-menu",7,8),a.TgZ(12,"div",9),a.NdJ("click",function(e){return e.stopPropagation(),e.preventDefault()}),a.TgZ(13,"input",10,11),a.NdJ("ngModelChange",function(e){return t.search_str=e})("ngModelChange",function(){return t.updateSearch(t.search_str)}),a.qZA(),a.qZA(),a.YNc(15,W,2,1,"button",12),a.ALo(16,"async"),a.YNc(17,R,8,3,"button",13),a.ALo(18,"slice"),a.ALo(19,"async"),a.qZA()),2&e){const e=a.MAs(11);let n;a.xp6(3),a.Q6J("ngForOf",a.lcZ(4,6,t.contacts)),a.xp6(2),a.Q6J("matMenuTriggerFor",e),a.xp6(2),a.Q6J("icon",a.DdM(16,ee)),a.xp6(6),a.Q6J("ngModel",t.search_str),a.xp6(2),a.Q6J("ngIf",!(null!=(n=a.lcZ(16,8,t.search_results))&&n.length)),a.xp6(2),a.Q6J("ngForOf",a.Dn7(18,10,a.lcZ(19,14,t.search_results),0,8))}},directives:[i.sg,T.lW,V.p6,q.o,V.VK,V.OP,s.Fj,s.JJ,s.On,i.O5,Y.k],pipes:[i.Ov,i.OU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=contact-list][_ngcontent-%COMP%]{padding:0 .5rem .5rem 0}[name=contact][_ngcontent-%COMP%]{min-width:8rem;width:8rem;margin-left:.5rem;margin-top:.5rem}[name=contact-name][_ngcontent-%COMP%]{font-weight:400}[name=dot][_ngcontent-%COMP%]{height:8px;width:8px;border-radius:8px;background-color:#22992e}button[name=close][_ngcontent-%COMP%]{position:absolute;display:none;top:.25rem;right:.25rem}[name=contact][_ngcontent-%COMP%]:hover   button[name=close][_ngcontent-%COMP%]{display:initial}button[name=contact][_ngcontent-%COMP%]{background-color:#f0f0f0;border:none;min-width:calc(100% - .5rem)!important}"]}),e})();const ne=["dashboard",""];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["","dashboard",""]],attrs:ne,decls:8,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-10"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-1","px-0","sm:px-8","flex-wrap","overflow-auto","h-px","sm:h-auto"],[1,"flex-1","min-w-64"]],template:function(e,t){1&e&&(a._UZ(0,"topbar"),a.TgZ(1,"div",0),a._UZ(2,"nav-menu",1),a.TgZ(3,"div",2),a.TgZ(4,"main",3),a._UZ(5,"a-dashboard-availability",4),a._UZ(6,"a-dashboard-upcoming",4),a._UZ(7,"a-dashboard-contacts",4),a.qZA(),a.qZA(),a.qZA())},directives:[c.o,r.D,L,z,te],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}a[button].tile[_ngcontent-%COMP%]{flex:1;border-radius:0;background-color:#fff;color:rgba(0,0,0,.85);border:none;border-right:1px solid #ccc}a[button].tile[_ngcontent-%COMP%]:last-child{border:none}"]}),e})();var se=n(1781);const oe=[{path:"",component:ie}];let ae=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,s.u5,se.v,o.Bz.forChild(oe)]]}),e})()}}]);
//# sourceMappingURL=apps_workplace_src_app_dashboard_dashboard_module_ts.js.map