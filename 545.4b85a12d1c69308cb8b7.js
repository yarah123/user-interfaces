"use strict";(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[545],{1545:(Ue,T,i)=>{i.r(T),i.d(T,{DashboardModule:()=>Ae});var l=i(2057),d=i(4751),C=i(5358),p=i(2610),e=i(292),M=i(4187),m=i(4762),g=i(4286),f=i(6215),q=i(5917),N=i(4395),F=i(3190),P=i(5304),J=i(7349),A=i(8049),I=i(5435),Q=i(8002),D=i(2094),L=i(7932),_=i(3702),S=i(8539),Y=i(7039);let b=(()=>{class n extends p.KG{constructor(t,o){super(),this._calendar=t,this._org=o,this._options=new f.X({}),this._free_spaces=new f.X([]),this._upcoming_events=new f.X([]),this._contacts=new f.X([]),this._level_occupancy=new f.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,N.b)(500),(0,F.w)(({search:s})=>s?(0,_.VE)(s):(0,q.of)([])),(0,P.K)(s=>[]),(0,J.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){return(0,m.mG)(this,void 0,void 0,function*(){if(yield this._org.initialised.pipe((0,A.P)(o=>o)).toPromise(),this.subscription("building",this._org.active_building.pipe((0,I.h)(o=>!!o)).subscribe(()=>this.updateBuildingMetadata())),!this._org.organisation.bindings.area_management)return;const t=(0,g.rTZ)(this._org.organisation.bindings.area_management,"AreaManagement").binding("overview");t.listen().subscribe(o=>this.updateOccupancy(o||{})),t.bind()})}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}pollFreeSpaces(t=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),t)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(t=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),t)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){return(0,m.mG)(this,void 0,void 0,function*(){const t=yield(0,g.rlq)((0,p.ar)().id,"contacts").toPromise();this._contacts.next((t.details instanceof Array?t.details:[]).map(s=>new _.n5(s)))})}addContact(t){return(0,m.mG)(this,void 0,void 0,function*(){let o=[...this._contacts.getValue()];o.push(t),o=(0,p.Tw)(o,"email");const s=yield(0,g.Ymr)((0,p.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();this._contacts.next((s.details instanceof Array?s.details:[]).map(c=>new _.n5(c)))})}removeContact(t){return(0,m.mG)(this,void 0,void 0,function*(){let o=[...this._contacts.getValue()];o=o.filter(c=>c.email!==t.email);const s=yield(0,g.Ymr)((0,p.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();this._contacts.next((s.details instanceof Array?s.details:[]).map(c=>new _.n5(c)))})}updateOccupancy(t){return(0,m.mG)(this,void 0,void 0,function*(){const o=[...this._org.levels];o.sort((s,r)=>{var c,u;return(null===(c=t[s.id])||void 0===c?void 0:c.recommendation)-(null===(u=t[r.id])||void 0===u?void 0:u.recommendation)}),this._level_occupancy.next(o)})}updateFreeSpaces(){return(0,m.mG)(this,void 0,void 0,function*(){if(!this._org.building)return;const t=Math.floor((new Date).valueOf()/1e3),o=Math.floor((0,D.Z)(new Date).valueOf()/1e3),s=yield this._calendar.freeBusy({period_start:t,period_end:o,zone_ids:this._org.building.id}).pipe((0,Q.U)(r=>r.filter(c=>!c.availability.length||c.availability.find(u=>"busy"!==u.status)))).toPromise();s.sort((r,c)=>r.capacity-c.capacity),this._free_spaces.next(s)})}updateUpcomingEvents(){return(0,m.mG)(this,void 0,void 0,function*(){const t=Math.floor((new Date).valueOf()/1e3),o=Math.floor((0,D.Z)(new Date).valueOf()/1e3),s=yield(0,L.u$)({period_start:t,period_end:o,calendars:(0,p.ar)().email}).toPromise();this._upcoming_events.next(s)})}updateBuildingMetadata(){return(0,m.mG)(this,void 0,void 0,function*(){const t=this._org.building,o=yield(0,g.rlq)(t.id,"bindings").toPromise();if(!o.details.occupancy)return;const s=o.details.occupancy,r=(0,g.rTZ)(s.sys,s.module,s.index);!r||(this._occupancy_binding&&this._occupancy_binding.unbind(),this._occupancy_binding=r.binding("occupancy"),this._occupancy_binding.bind(),this.subscription("occupancy_binding",this._occupancy_binding.listen().subscribe(c=>{const u=Object.keys(c).map(h=>Object.assign({id:h},c[h]));u.sort((h,De)=>h.recommendation_factor-De.recommendation_factor),this._level_occupancy.next(u.map(h=>this._org.levelWithID([h.id])))})))})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Y.ot),e.LFG(S.w7))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=i(2895);const U=function(){return["/explore"]},j=function(n){return{level:n}};function E(n,a){if(1&n&&(e.TgZ(0,"a",8),e.TgZ(1,"div",9),e._uU(2),e.qZA(),e.qZA()),2&n){const t=a.$implicit;e.Q6J("routerLink",e.DdM(3,U))("queryParams",e.VKq(4,j,t.id)),e.xp6(2),e.hij(" ",t.display_name||t.name,"\n")}}function G(n,a){1&n&&(e.TgZ(0,"span",10),e._uU(1,"No free spaces"),e.qZA())}const k=function(n){return{space:n}};function X(n,a){if(1&n&&(e.TgZ(0,"a",8),e.TgZ(1,"div",9),e._uU(2),e.qZA(),e.qZA()),2&n){const t=a.$implicit;e.Q6J("routerLink",e.DdM(3,U))("queryParams",e.VKq(4,k,t.id)),e.xp6(2),e.hij(" ",t.display_name||t.name," ")}}function $(n,a){1&n&&(e.TgZ(0,"span",10),e._uU(1,"No free rooms"),e.qZA())}let V=(()=>{class n{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this._state.pollFreeSpaces()})}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-availability"]],decls:22,vars:20,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","shadow","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],["free-levels","",1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","shadow","my-4","p-2"],[1,"items","space-y-2","w-full"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"max-w-full","truncate"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(t,o){1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Available Now"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"div"),e._uU(5,"Spaces"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.YNc(7,E,3,6,"a",4),e.ALo(8,"slice"),e.ALo(9,"async"),e.YNc(10,G,2,0,"span",5),e.ALo(11,"async"),e.qZA(),e.qZA(),e.TgZ(12,"div",6),e.TgZ(13,"div",2),e.TgZ(14,"div"),e._uU(15,"Rooms"),e.qZA(),e.qZA(),e.TgZ(16,"div",7),e.YNc(17,X,3,6,"a",4),e.ALo(18,"slice"),e.ALo(19,"async"),e.YNc(20,$,2,0,"span",5),e.ALo(21,"async"),e.qZA(),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngForOf",e.Dn7(8,4,e.lcZ(9,8,o.levels_free),0,2)),e.xp6(3),e.Q6J("ngIf",!e.lcZ(11,10,o.levels_free).length),e.xp6(7),e.Q6J("ngForOf",e.Dn7(18,12,e.lcZ(19,16,o.space_list),0,3)),e.xp6(3),e.Q6J("ngIf",!e.lcZ(21,18,o.space_list).length))},directives:[l.sg,l.O5,v.zs,C.yS],pipes:[l.OU,l.Ov],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}"]}),n})();var B=i(2878),Z=i(592),x=i(5306),H=i(4855),O=i(9685);function z(n,a){1&n&&e._UZ(0,"a-user-avatar",15),2&n&&e.Q6J("user",a.$implicit)}function K(n,a){if(1&n&&(e.TgZ(0,"a",16),e._uU(1,"Join Call"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("href",t.meeting_link,e.LSH)}}const R=function(){return{class:"material-icons",content:"room"}},W=function(){return{class:"material-icons",content:"group"}};function ee(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"div",5),e.TgZ(3,"div",6),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",7),e._uU(7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"app-icon",9),e.TgZ(10,"a",10),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw();return r.space?c.locateSpace(r.space):""}),e._uU(11),e.qZA(),e.qZA(),e.TgZ(12,"div",11),e._UZ(13,"app-icon",9),e._uU(14),e.qZA(),e.TgZ(15,"div",12),e.YNc(16,z,1,1,"a-user-avatar",13),e.qZA(),e.qZA(),e.YNc(17,K,2,1,"a",14),e.qZA()}if(2&n){const t=a.$implicit;e.xp6(4),e.hij(" ",e.xi3(5,13,t.date,"shortTime")," "),e.xp6(3),e.hij(" ",t.title," "),e.xp6(2),e.Q6J("icon",e.DdM(16,R)),e.xp6(1),e.ekj("underline",!!t.space),e.Q6J("matTooltip",t.space?"Locate Space":""),e.xp6(1),e.AsE(" ",(null==t.space?null:t.space.display_name)||(null==t.space?null:t.space.name)||"<No Location>"," ",null!=t.space&&null!=t.space.level&&t.space.level.display_name||null!=t.space&&null!=t.space.level&&t.space.level.name?", "+t.space.level.display_name||0:""," "),e.xp6(2),e.Q6J("icon",e.DdM(17,W)),e.xp6(1),e.AsE(" ",t.guests.length," Guest",1===t.guests.length?"":"s"," "),e.xp6(2),e.Q6J("ngForOf",t.guests),e.xp6(1),e.Q6J("ngIf",t.meeting_link)}}function te(n,a){1&n&&(e.TgZ(0,"p",17),e._uU(1," No upcoming events for today "),e.qZA())}let ne=(()=>{class n{constructor(t,o){this._state=t,this._dialog=o,this.upcoming_events=this._state.upcoming_events}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}locateSpace(t){this._dialog.open(B.p,{data:{item:Object.assign(Object.assign({},t),{level:null})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b),e.Y36(Z.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-upcoming"]],decls:7,vars:10,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white shadow rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["class","text-dark-fade text-center w-full",4,"ngIf"],["name","event",1,"flex","bg-white","shadow","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"],[1,"text-dark-fade","text-center","w-full"]],template:function(t,o){1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Your Bookings"),e.qZA(),e.YNc(2,ee,18,18,"div",1),e.ALo(3,"slice"),e.ALo(4,"async"),e.YNc(5,te,2,0,"p",2),e.ALo(6,"async")),2&t&&(e.xp6(2),e.Q6J("ngForOf",e.Dn7(3,2,e.lcZ(4,6,o.upcoming_events),0,3)),e.xp6(3),e.Q6J("ngIf",!e.lcZ(6,8,o.upcoming_events).length))},directives:[l.sg,l.O5,x.o,H.gM,O.k,v.zs],pipes:[l.OU,l.Ov,l.uU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=time][_ngcontent-%COMP%]{color:#00529b}[name=event][_ngcontent-%COMP%]{padding:1rem 1rem 1rem 2rem}[name=status][_ngcontent-%COMP%]{top:1rem;left:-.8rem;height:2.5rem;width:1.6rem;background-color:#00529b}button[_ngcontent-%COMP%]{height:3em}app-icon[_ngcontent-%COMP%]{margin-left:-.25rem}"]}),n})();var oe=i(6012),y=i(3021),w=i(6833),se=i(6113),ae=i(1260),ie=i(7935);let re=(()=>{class n{constructor(){this.events=new e.vpe,this.form=new d.cw({name:new d.NI("",[d.kI.required]),description:new d.NI(""),sender:new d.NI(""),priority:new d.NI("")})}register(){this.form.markAllAsTouched(),this.form.valid&&this.events.emit({reason:"done",metadata:this.form.value})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["dashboard-delivery-modal"]],outputs:{events:"events"},decls:47,vars:1,consts:[[1,"flex","items-center","justify-between"],["mat-icon-button","","mat-dialog-close",""],[1,"p-2","w-[24rem]",3,"formGroup"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Name of items being delivered","formControlName","name"],["matInput","","placeholder","Description of items being delivered","formControlName","description"],["matInput","","placeholder","Name of sender","formControlName","sender"],["placeholder","Low","formControlName","priority"],[1,"p-2","flex","items-center","justify-center","border-t","border-gray-100"],["mat-button","",1,"w-32",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0),e.TgZ(1,"h3"),e._uU(2,"Register Delivery"),e.qZA(),e.TgZ(3,"button",1),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"main",2),e.TgZ(7,"div"),e.TgZ(8,"label"),e._uU(9,"Name"),e.TgZ(10,"span"),e._uU(11,"*"),e.qZA(),e._uU(12,":"),e.qZA(),e.TgZ(13,"mat-form-field",3),e._UZ(14,"input",4),e.TgZ(15,"mat-error"),e._uU(16,"Name is required"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div"),e.TgZ(18,"label"),e._uU(19,"Description:"),e.qZA(),e.TgZ(20,"mat-form-field",3),e._UZ(21,"textarea",5),e.qZA(),e.qZA(),e.TgZ(22,"div"),e.TgZ(23,"label"),e._uU(24,"Sender:"),e.qZA(),e.TgZ(25,"mat-form-field",3),e._UZ(26,"input",6),e.TgZ(27,"mat-error"),e._uU(28,"Sender is required"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div"),e.TgZ(30,"label"),e._uU(31,"Priority:"),e.qZA(),e.TgZ(32,"mat-form-field",3),e.TgZ(33,"mat-select",7),e.TgZ(34,"mat-option"),e._uU(35,"Very Low"),e.qZA(),e.TgZ(36,"mat-option"),e._uU(37,"Low"),e.qZA(),e.TgZ(38,"mat-option"),e._uU(39,"Normal"),e.qZA(),e.TgZ(40,"mat-option"),e._uU(41,"High"),e.qZA(),e.TgZ(42,"mat-option"),e._uU(43,"Very Height"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(44,"footer",8),e.TgZ(45,"button",9),e.NdJ("click",function(){return o.register()}),e._uU(46," Register "),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("formGroup",o.form))},directives:[v.lW,Z.ZT,x.o,d.JL,d.sg,w.KE,se.Nt,d.Fj,d.JJ,d.u,w.TO,ae.gD,ie.ey],styles:[""]}),n})();function ce(n,a){if(1&n&&(e.TgZ(0,"div",7),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e._uU(3),e.qZA(),e.TgZ(4,"div",10),e._uU(5),e.ALo(6,"date"),e.qZA(),e.qZA(),e._UZ(7,"div",11),e.qZA()),2&n){const t=a.$implicit;e.xp6(3),e.hij(" ",(null==t?null:t.name)||"Untitled Delivery"," "),e.xp6(2),e.hij(" ",t&&t.received?e.xi3(6,6,t.received,"medium"):"Not received"," "),e.xp6(2),e.ekj("bg-pending",!t.received)("bg-success",t.received)}}function le(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",4),e.YNc(1,ce,8,9,"div",5),e.TgZ(2,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().registerDelivery()}),e._uU(3," Register Delivery "),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.deliveries)}}function de(n,a){1&n&&(e.TgZ(0,"div",12),e._uU(1," No registered deliveries "),e.qZA())}let me=(()=>{class n{constructor(t){this._dialog=t,this.deliveries=[{name:"USB-C Cables",received:Date.now()},{name:"Desk Fan"}]}registerDelivery(){return(0,m.mG)(this,void 0,void 0,function*(){const t=this._dialog.open(re),o=yield Promise.race([t.componentInstance.events.pipe((0,A.P)(s=>"done"===s.reason)).toPromise(),t.afterClosed().toPromise()]);"done"===o.reason&&(this.deliveries.push(o.metadata),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dashboard-deliveries"]],decls:6,vars:2,consts:[[1,"m-0","my-2","font-medium","text-xl"],[1,"bg-white","shadow","p-2","rounded"],["class","divide-y",4,"ngIf","ngIfElse"],["empty_state",""],[1,"divide-y"],["class","flex items-center py-2",4,"ngFor","ngForOf"],["mat-button","",1,"w-full","mt-2",3,"click"],[1,"flex","items-center","py-2"],[1,"flex-1","pl-2"],[1,""],[1,"text-xs","opacity-60"],[1,"m-4","h-2","w-2","rounded-full"],[1,"p-8","flex","items-center","justify-center","opacity-40"]],template:function(t,o){if(1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Deliveries"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,le,4,1,"div",2),e.qZA(),e.YNc(4,de,2,0,"ng-template",null,3,e.W1O)),2&t){const s=e.MAs(5);e.xp6(3),e.Q6J("ngIf",null==o.deliveries?null:o.deliveries.length)("ngIfElse",s)}},directives:[l.O5,l.sg,v.lW],pipes:[l.uU],styles:[""]}),n})();const pe=["input"],ue=function(){return{class:"material-icons",content:"close"}};function ge(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"a-user-avatar",16),e.TgZ(2,"div",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18),e._UZ(5,"div",19),e._uU(6," Level 12 "),e.qZA(),e.TgZ(7,"button",20),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().removeUser(r)}),e._UZ(8,"app-icon",21),e.qZA(),e.qZA()}if(2&n){const t=a.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.hij(" ",t.name," "),e.xp6(5),e.Q6J("icon",e.DdM(3,ue))}}function he(n,a){if(1&n&&(e.TgZ(0,"button",22),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.search_str?'No matches for "'+t.search_str+'"':"Type to search for users..."," ")}}function fe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().addUser(r)}),e.TgZ(1,"div",24),e._UZ(2,"a-user-avatar",25),e.TgZ(3,"div",26),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div",27),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=a.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.email," ")}}function ve(n,a){1&n&&e._UZ(0,"dashboard-deliveries")}const _e=function(){return{class:"material-icons",content:"person_add"}};let be=(()=>{class n extends p.KG{constructor(t,o){super(),this._state=t,this._settings=o,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=s=>this._state.addContact(s),this.removeUser=s=>this._state.removeContact(s),this.updateSearch=s=>this._state.setOptions({search:s}),this.search_str=""}get can_deliver(){return!!this._settings.get("app.can_deliver")}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b),e.Y36(p.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-contacts"]],viewQuery:function(t,o){if(1&t&&e.Gf(pe,5),2&t){let s;e.iGM(s=e.CRH())&&(o._input_el=s.first)}},features:[e.qOj],decls:21,vars:18,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","shadow","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["name","location",1,"flex","items-center","text-sm"],["name","dot",1,"mr-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(t,o){if(1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Colleagues"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,ge,9,4,"div",2),e.ALo(4,"async"),e.TgZ(5,"button",3),e.NdJ("menuOpened",function(){return o.focusInput()})("menuClosed",function(){return o.clearInput()}),e.TgZ(6,"div",4),e._UZ(7,"app-icon",5),e.TgZ(8,"span",6),e._uU(9,"Click to add a person to contacts"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"mat-menu",7,8),e.TgZ(12,"div",9),e.NdJ("click",function(r){return r.stopPropagation(),r.preventDefault()}),e.TgZ(13,"input",10,11),e.NdJ("ngModelChange",function(r){return o.search_str=r})("ngModelChange",function(){return o.updateSearch(o.search_str)}),e.qZA(),e.qZA(),e.YNc(15,he,2,1,"button",12),e.ALo(16,"async"),e.YNc(17,fe,8,3,"button",13),e.ALo(18,"slice"),e.ALo(19,"async"),e.qZA(),e.YNc(20,ve,1,0,"dashboard-deliveries",14)),2&t){const s=e.MAs(11);let r;e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,7,o.contacts)),e.xp6(2),e.Q6J("matMenuTriggerFor",s),e.xp6(2),e.Q6J("icon",e.DdM(17,_e)),e.xp6(6),e.Q6J("ngModel",o.search_str),e.xp6(2),e.Q6J("ngIf",!(null!=(r=e.lcZ(16,9,o.search_results))&&r.length)),e.xp6(2),e.Q6J("ngForOf",e.Dn7(18,11,e.lcZ(19,15,o.search_results),0,8)),e.xp6(3),e.Q6J("ngIf",o.can_deliver)}},directives:[l.sg,v.lW,y.p6,x.o,y.VK,y.OP,d.Fj,d.JJ,d.On,l.O5,O.k,me],pipes:[l.Ov,l.OU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=contact-list][_ngcontent-%COMP%]{padding:0 .5rem .5rem 0}[name=contact][_ngcontent-%COMP%]{min-width:8rem;width:8rem;margin-left:.5rem;margin-top:.5rem}[name=contact-name][_ngcontent-%COMP%]{font-weight:400}[name=dot][_ngcontent-%COMP%]{height:8px;width:8px;border-radius:8px;background-color:#22992e}button[name=close][_ngcontent-%COMP%]{position:absolute;display:none;top:.25rem;right:.25rem}[name=contact][_ngcontent-%COMP%]:hover   button[name=close][_ngcontent-%COMP%]{display:initial}button[name=contact][_ngcontent-%COMP%]{background-color:#f0f0f0;border:none;min-width:calc(100% - .5rem)!important}"]}),n})();const Ze=["dashboard",""];function xe(n,a){1&n&&e._UZ(0,"a-dashboard-contacts",3)}let ye=(()=>{class n{constructor(t){this._settings=t}get hide_contacts(){return!1!==this._settings.get("app.hide_contacts")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","dashboard",""]],attrs:Ze,decls:8,vars:1,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-1","px-0","sm:px-8","flex-wrap","overflow-auto","h-px","sm:h-auto"],[1,"flex-1","min-w-64"],["class","flex-1 min-w-64",4,"ngIf"]],template:function(t,o){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"main",2),e._UZ(4,"a-dashboard-availability",3),e._UZ(5,"a-dashboard-upcoming",3),e.YNc(6,xe,1,0,"a-dashboard-contacts",4),e.qZA(),e.qZA(),e.qZA(),e._UZ(7,"footer-menu")),2&t&&(e.xp6(6),e.Q6J("ngIf",!o.hide_contacts))},directives:[M.o,V,ne,l.O5,oe.i,be],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}a[button].tile[_ngcontent-%COMP%]{flex:1;border-radius:0;background-color:#fff;color:#000000d9;border:none;border-right:1px solid #ccc}a[button].tile[_ngcontent-%COMP%]:last-child{border:none}"]}),n})();var Te=i(2525);const Ce=[{path:"",component:ye}];let Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,d.u5,Te.v,d.UX,C.Bz.forChild(Ce)]]}),n})()}}]);