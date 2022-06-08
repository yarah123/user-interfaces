"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{6326:(be,Z,s)=>{s.r(Z),s.d(Z,{AppScheduleModule:()=>Ze});var v=s(5629),r=s(6362),h=s(587),u=s(9504),M=s(1992),p=s(4929),d=s(6365),J=s(8053),w=s(5845),I=s(312),b=s(6942),y=s(3910),D=s(8676),e=s(6723),T=s(4770),E=s(1434),O=s(1130),m=s(7317),A=s(2796),g=s(5306),q=s(4683),x=s(5818),f=s(4509),C=s(1233);const Q=["schedule-list-item",""];function V(n,o){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" No events for ",e.xi3(2,1,t.item.date,"longDate")," ")}}function F(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.YNc(4,V,3,4,"div",4),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.AsE(" ",e.xi3(3,3,t.item.date,"longDate")," (",t.item.duration,") "),e.xp6(2),e.Q6J("ngIf",!t.item.duration)}}function N(n,o){if(1&n&&(e.TgZ(0,"div",15)(1,"app-icon",16),e._uU(2,"place"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"slice"),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",e.Dn7(5,1,(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description),0,255)," ")}}const j=function(n,o){return["/schedule","view",n,o]};function Y(n,o){if(1&n&&(e.TgZ(0,"a",6)(1,"div",7)(2,"div",8)(3,"app-icon",9),e._uU(4),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"div",11),e._uU(9),e.qZA()(),e.TgZ(10,"div",12)(11,"div",13),e._uU(12),e.qZA(),e.YNc(13,N,6,5,"div",14),e.qZA()()()),2&n){const t=e.oxw();e.ekj("opacity-50",t.has_ended),e.Q6J("routerLink",e.WLB(17,j,null==t.item?null:t.item.id,t.type)),e.xp6(2),e.ekj("bg-success","approved"===t.status)("bg-pending","tentative"===t.status)("bg-error","declined"===t.status),e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.hij(" ",null!=t.item&&t.item.all_day?"All Day":e.xi3(7,14,null==t.item?null:t.item.date,"shortTime")," "),e.xp6(3),e.hij(" (",t.status,") "),e.xp6(3),e.hij(" ",(null==t.item?null:t.item.title)||"Untitled Event"," "),e.xp6(1),e.Q6J("ngIf",(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description))}}let B=(()=>{class n{get type(){return this.item instanceof f.$N?"booking":"event"}get has_ended(){return!this.item||"date"===this.item.id||(0,C.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"cancel";if(this.item.asset_id)switch(this.item.booking_type){case"desk":return"view_quilt";case"parking":return"local_parking"}return"event"}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:Q,decls:3,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],["class","flex items-center font-normal",4,"ngIf"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(t,i){1&t&&(e.ynx(0,0),e.YNc(1,F,5,6,"div",1),e.YNc(2,Y,14,20,"a",2),e.BQk()),2&t&&(e.Q6J("ngSwitch",null==i.item?null:i.item.id),e.xp6(1),e.Q6J("ngSwitchCase","date"))},directives:[r.RF,r.n9,r.O5,r.ED,m.zs,u.yS,g.o],pipes:[r.uU,r.OU],encapsulation:2}),n})();var P=s(833);function H(n,o){1&n&&e._UZ(0,"div",20),2&n&&e.Q6J("item",o.$implicit)}function $(n,o){1&n&&e._UZ(0,"mat-progress-bar",21)}let z=(()=>{class n{constructor(t){this._state=t,this.today=new Date,this.max_date=(0,J.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.date=this.options.pipe((0,b.U)(i=>new Date(i.start))),this.event_list=this._state.events.pipe((0,b.U)(i=>{let l=[],a=new Date(this.today);for(;a<this.max_date;){const c=i.filter(we=>(0,w.Z)(a,we.date));l=c.length?[...l,{id:"date",date:a.valueOf(),duration:c.length},...c]:[...l,{id:"date",date:a.valueOf(),duration:0}],a=(0,I.Z)(a,1)}return l}))}get user(){return(0,d.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(t){this._state.setOptions({start:t.valueOf()})}updateDate(t){return(0,p.mG)(this,void 0,void 0,function*(){const l=((yield this.event_list.pipe((0,y.q)(1)).toPromise())||[])[t]||{};l&&this.setDate(l.date)})}scrollTo(t){return(0,p.mG)(this,void 0,void 0,function*(){const i=yield this.event_list.pipe((0,y.q)(1)).toPromise(),l=i.findIndex(a=>"date"===a.id&&(0,w.Z)(a.date,t));if(l>=0&&this._viewport){let a=0;for(let c=0;c<i.length&&c<l;c++)a+=1;this._viewport.scrollTo({top:Math.round(88*a),behavior:"smooth"})}this.setDate(t)})}trackByFn(t,i){return i?`${i.id}|${i.date}`:void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(v.N7,7),2&t){let l;e.iGM(l=e.CRH())&&(i._viewport=l.first)}},decls:34,vars:17,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","border-b","border-gray-300","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"placeholder"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-gray-100"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2)(3,"mat-option"),e._uU(4),e.qZA()()(),e.TgZ(5,"div",3)(6,"button",4),e._uU(7," Legend "),e.qZA(),e.TgZ(8,"button",5,6)(10,"app-icon"),e._uU(11,"event"),e.qZA(),e.TgZ(12,"input",7),e.NdJ("ngModelChange",function(a){return i.scrollTo(a)}),e.ALo(13,"async"),e.qZA(),e._UZ(14,"mat-datepicker-toggle",8),e.qZA(),e._UZ(15,"mat-datepicker",null,9),e.qZA()(),e.TgZ(17,"div",10)(18,"cdk-virtual-scroll-viewport",11),e.NdJ("scrolledIndexChange",function(a){return i.updateDate(a)}),e.YNc(19,H,1,1,"div",12),e.ALo(20,"async"),e.qZA()(),e.YNc(21,$,1,0,"mat-progress-bar",13),e.ALo(22,"async"),e.TgZ(23,"mat-menu",14,15)(25,"div",16),e._UZ(26,"div",17),e._uU(27," Approved "),e.qZA(),e.TgZ(28,"div",16),e._UZ(29,"div",18),e._uU(30," Tentative "),e.qZA(),e.TgZ(31,"div",16),e._UZ(32,"div",19),e._uU(33," Declined "),e.qZA()()),2&t){const l=e.MAs(16),a=e.MAs(24);e.xp6(2),e.Q6J("placeholder",null==i.user?null:i.user.name),e.xp6(2),e.Oqu(null==i.user?null:i.user.name),e.xp6(2),e.Q6J("matMenuTriggerFor",a),e.xp6(6),e.Q6J("ngModel",e.lcZ(13,11,i.date))("matDatepicker",l)("min",i.today)("max",i.max_date),e.xp6(2),e.Q6J("for",l),e.xp6(5),e.Q6J("cdkVirtualForOf",e.lcZ(20,13,i.event_list))("cdkVirtualForTrackBy",i.trackByFn),e.xp6(2),e.Q6J("ngIf",e.lcZ(22,15,i.loading))}},directives:[T.KE,E.gD,O.ey,m.lW,A.p6,g.o,q.Nt,h.Fj,x.hl,h.JJ,h.On,x.nW,T.R9,x.Mq,v.N7,v.xd,v.x0,B,r.O5,P.pW,A.VK],pipes:[r.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule-list.component.ts-angular-inline--90.css.map*/"]}),n})();var U=s(1799),G=s(2317),S=s(8442),k=s(5758),L=s(4742);function R(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime")," ")}}function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).viewLocation()}),e._uU(1," Map "),e.qZA()}}function K(n,o){if(1&n&&(e.TgZ(0,"div",16)(1,"div",11)(2,"app-icon"),e._uU(3,"menu_book"),e.qZA()(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.YNc(6,W,2,0,"button",17),e.qZA()),2&n){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.event.description||"<No Asset>"," "),e.xp6(1),e.Q6J("ngIf",t.event.extension_data.map_id)}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function ee(n,o){if(1&n&&(e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,R,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",10)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.YNc(17,K,7,2,"div",14),e.YNc(18,X,3,2,"div",15),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,6,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day&&t.event.duration<720),e.xp6(6),e.Oqu(!t.event.all_day&&t.event.duration<720?t.duration:"All Day"),e.xp6(1),e.Q6J("ngIf",t.event.asset_id),e.xp6(1),e.Q6J("ngIf",!t.has_ended&&t.is_host)}}function te(n,o){1&n&&(e.TgZ(0,"div",21),e._UZ(1,"mat-spinner",22),e.TgZ(2,"p"),e._uU(3,"Loading booking data..."),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const ne=function(){return["/schedule"]};let ie=(()=>{class n extends d.KG{constructor(t,i,l,a){super(),this._route=t,this._router=i,this._dialog=l,this._bookings=a}get is_host(){var t,i;return(null===(t=this.event)||void 0===t?void 0:t.user_email)===(null===(i=(0,d.ar)())||void 0===i?void 0:i.email)}get duration(){var t,i;return this.event.all_day||this.event.duration>=720?"All Day":(0,U.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}get has_ended(){return this.event&&(0,C.Z)(new Date,(0,G.Z)(this.event.date,this.event.duration))}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,f.Fo)(t.get("id")).toPromise().catch(()=>null))}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(){this._dialog.open(S.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:{id:this.event.asset_id,map_id:this.event.extension_data.map_id,name:this.event.description,zones:this.event.zones}}})}editEvent(){this._bookings.newForm(this.event),this._router.navigate(["/book","desks","form"])}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing booking..."),yield(0,f.FP)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,d.cB)(`Error removing booking. ${i}`),i}),(0,d.t5)("Successfully removed booking."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(k.uw),e.Y36(f.fy))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-booking"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],["mat-button","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,ee,19,9,"div",6),e.qZA(),e.YNc(9,te,4,1,"ng-template",null,7,e.W1O)),2&t){const l=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,ne)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",l)}},directives:[m.zs,u.yS,g.o,r.O5,m.lW,L.Ou],pipes:[r.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-booking.component.ts-angular-inline--91.css.map*/"]}),n})();var _=s(8426),oe=s(8933),se=s(9685),le=s(7202);function ae(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE("at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime"),"")}}function re(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"span",12),e._uU(2),e.qZA(),e._UZ(3,"span",23),e.TgZ(4,"button",24),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).viewLocation(a)}),e._uU(5," Map "),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.display_name||t.name," [",(null==t.level?null:t.level.display_name)||(null==t.level?null:t.level.name),"] "),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function ce(n,o){if(1&n&&(e.TgZ(0,"div",25),e._UZ(1,"a-user-avatar",26),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e._UZ(4,"span",27),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.Oqu(t.name||t.email),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function de(n,o){if(1&n&&(e.TgZ(0,"div",10)(1,"div",11)(2,"app-icon"),e._uU(3,"event_note"),e.qZA()(),e._UZ(4,"div",28),e.ALo(5,"sanitize"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("innerHTML",e.lcZ(5,1,t.event.body),e.oJD)}}function ue(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).editEvent()}),e._uU(1," Edit Event "),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("disabled",t.loading)}}function pe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",29),e.YNc(1,ue,2,1,"button",30),e.TgZ(2,"button",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.is_host),e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function me(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,ae,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",10)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.TgZ(17,"div",14)(18,"div",15)(19,"div",11)(20,"app-icon"),e._uU(21,"place"),e.qZA()(),e.TgZ(22,"div",12),e._uU(23),e.qZA(),e.TgZ(24,"button",16),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return l.show_spaces=!l.show_spaces}),e._uU(25),e.qZA()(),e.TgZ(26,"div",17),e.YNc(27,re,6,8,"div",18),e.qZA()(),e.TgZ(28,"div",14)(29,"div",15)(30,"div",11)(31,"app-icon"),e._uU(32,"group"),e.qZA()(),e.TgZ(33,"div",12),e._uU(34),e.qZA(),e.TgZ(35,"button",16),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return l.show_people=!l.show_people}),e._uU(36),e.qZA()(),e.TgZ(37,"div",17),e.YNc(38,ce,5,8,"div",19),e.qZA(),e.YNc(39,de,6,3,"div",20),e.qZA(),e.YNc(40,pe,4,3,"div",21),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,18,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day),e.xp6(6),e.Oqu(t.duration),e.xp6(7),e.hij(" ",null==t.event.resources?null:t.event.resources.length," Space(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.resources&&t.event.resources.length)),e.xp6(1),e.hij(" ",t.show_spaces?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_spaces?2.5*(null==t.event.resources?null:t.event.resources.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.resources),e.xp6(7),e.hij(" ",(null==t.event.attendees?null:t.event.attendees.length)||0," Attendee(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.attendees&&t.event.attendees.length)),e.xp6(1),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_people?3*t.event.attendees.length+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.attendees),e.xp6(1),e.Q6J("ngIf",t.event.body),e.xp6(1),e.Q6J("ngIf","done"!==t.event.state)}}function ve(n,o){1&n&&(e.TgZ(0,"div",33),e._UZ(1,"mat-spinner",34),e.TgZ(2,"p"),e._uU(3,"Loading event data..."),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const he=function(){return["/schedule"]};let ge=(()=>{class n extends d.KG{constructor(t,i,l,a,c){super(),this._route=t,this._router=i,this._dialog=l,this._events=a,this._spaces=c}get is_host(){var t;return null===(t=this.event)||void 0===t?void 0:t.host}get duration(){var t,i;return this.event.all_day?"All Day":(0,U.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,_.Vh)(t.get("id")).toPromise())}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(t){t=this._spaces.find(t.id||t.email)||t,this._dialog.open(S.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:t}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing event..."),yield(0,_.xC)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,d.cB)(`Error removing event. ${i}`),i}),(0,d.t5)("Successfully removed event."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(k.uw),e.Y36(_.MH),e.Y36(oe.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-event"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],[1,"border-b","border-gray-200","w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],["class","flex items-center py-2 space-x-2 border-b border-gray-200 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],["notes","",1,"flex-1","w-1/2","overflow-auto",3,"innerHTML"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,me,41,21,"div",6),e.qZA(),e.YNc(9,ve,4,1,"ng-template",null,7,e.W1O)),2&t){const l=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,he)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",l)}},directives:[m.zs,u.yS,g.o,r.O5,m.lW,r.sg,se.k,L.Ou],pipes:[r.uU,le.n],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-event.component.ts-angular-inline--92.css.map*/"]}),n})();var fe=s(4187),xe=s(6012);const _e=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(t,i){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"main",1),e._UZ(3,"router-outlet"),e.qZA()(),e._UZ(4,"footer-menu"))},directives:[fe.o,u.lC,xe.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--93.css.map*/"]}),n})(),children:[{path:"",component:z},{path:"view/:id/booking",component:ie},{path:"view/:id/event",component:ge}]},{path:"*",redirectTo:""}];let Ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,h.u5,M.v,v.Cl,u.Bz.forChild(_e)]]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map