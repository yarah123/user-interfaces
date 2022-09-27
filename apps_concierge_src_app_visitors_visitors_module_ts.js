"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{4513:(St,U,r)=>{r.r(U),r.d(U,{VisitorsModule:()=>Dt});var d=r(4666),w=r(2508),b=r(9885),E=r(3045),_=r(1670),v=r(4505),x=r(7716),L=r(823),J=r(9095),P=r(8759),G=r(9128),y=r(6942),F=r(3910),O=r(9377),N=r(312),Z=r(1810),Q=r(5148),u=r(9112),g=r(9830),p=r(711),t=r(2560),j=r(1484);let h=(()=>{class o extends u.KG{constructor(e){super(),this._dialog=e,this._poll=new v.X(0),this._filters=new v.X({}),this._search=new v.X(""),this._loading=new v.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.guests=(0,x.aj)([this._filters,this._poll]).pipe((0,L.b)(150),(0,J.w)(([n])=>{this._loading.next(!0);const i=n.date?new Date(n.date):new Date,s=(0,O.Z)(i),a=(0,N.Z)(s,n.period||1);return(0,p.ro)({period_start:(0,Z.Z)(s),period_end:(0,Z.Z)(a),zone_ids:(n.zones||[]).join(",")})}),(0,P.b)(()=>this._loading.next(!1)),(0,G.d)(1)),this.events=(0,x.aj)([this._filters,this._poll]).pipe((0,L.b)(150),(0,J.w)(([n])=>{this._loading.next(!0);const i=n.date?new Date(n.date):new Date,s=(0,O.Z)(i),a=(0,N.Z)(s,n.period||1);return(0,g.u$)({period_start:(0,Z.Z)(s),period_end:(0,Z.Z)(a),zone_ids:(n.zones||[]).join(",")})}),(0,y.U)(n=>(this._loading.next(!1),this._filters.getValue().all_bookings?n:n.filter(i=>i.guests?.length&&i.attendees?.length>1))),(0,G.d)(1)),this.filtered_events=(0,x.aj)([this._search,this.events]).pipe((0,y.U)(([n,i])=>{const s=n.toLowerCase();return i.filter(a=>a.attendees.find(c=>c.name?.toLowerCase().includes(s)||c.email?.toLowerCase().includes(s)))})),this.filtered_guests=(0,x.aj)([this._search,this.filtered_events,this.guests]).pipe((0,y.U)(([n,i,s])=>{const a=n.toLowerCase();return(0,u.xH)(i.map(c=>c.attendees.filter(m=>m.is_external&&(m.name?.toLowerCase().includes(a)||m.email?.toLowerCase().includes(a))).map(m=>{const T=s.find(C=>C.email===m.email)||{};return new p.OO({...m,...T,extension_data:{...m.extension_data,...T.extension_data,date:c.date,host:c.organiser?.name||c.organiser?.email||c.host}})})))}))}get search(){return this._search.getValue()}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}checkGuestIn(e,n){return(0,_.Z)(function*(){const i=yield(0,g.rq)(e.id,n.email,!0,{system_id:e.system?.id||e.resources[0]?.id}).toPromise().catch(a=>{throw(0,u.cB)(`Error checking in ${n.name} for ${e.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked in ${n.name} for ${e.organiser?.name}'s meeting`);const s=(0,u.Tw)([i,...e.attendees],"email");return s.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new g.ym({...e,attendees:s})})()}setExt(e,n,i){return(0,_.Z)(function*(){const s={...e.extension_data};s[n]=i,yield(0,p.sF)(e.id,{...e,extension_data:s}).toPromise()})()}approveVisitor(e){var n=this;return(0,_.Z)(function*(){const i=yield(0,u._5)({title:"Approve Visitor",content:`Approve attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,p.sF)(e.id,{...e,extension_data:{...e.extension_data,status:"approved"}}).toPromise(),i.close()})()}declineVisitor(e){var n=this;return(0,_.Z)(function*(){const i=yield(0,u._5)({title:"Decline Visitor",content:`Decline attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,p.sF)(e.id,{...e,extension_data:{...e.extension_data,status:"declined"}}).toPromise(),i.close()})()}checkGuestOut(e,n){return(0,_.Z)(function*(){const i=yield(0,g.rq)(e.id,n.email,!1,{system_id:e.system?.id||e.resources[0]?.id}).toPromise().catch(a=>{throw(0,u.cB)(`Error checking out ${n.name} from ${e.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked out ${n.name} from ${e.organiser?.name}'s meeting`);const s=(0,u.Tw)([i,...e.attendees],"email");return s.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new g.ym({...e,attendees:s})})()}checkAllGuestsIn(e){return(0,_.Z)(function*(){const n=e.attendees.filter(a=>a.is_external&&!a.checked_in);if(n.length<=0)throw new Error("No Guests to checkin");const i=yield Promise.all(n.map(a=>(0,g.rq)(e.id,a.email,!0,{system_id:e.system?.id||e.resources[0]?.id}).toPromise())).catch(a=>{throw(0,u.cB)(`Error checking in all guests for ${e.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked in all guests for ${e.organiser?.name}'s meeting`);const s=(0,u.Tw)([...i,...e.attendees],"email");return s.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new g.ym({...e,attendees:s})})()}checkAllGuestsOut(e){return(0,_.Z)(function*(){const n=e.attendees.filter(a=>a.is_external&&a.checked_in&&!a.organizer);if(n.length<=0)throw new Error("No Guests to checkout");const i=yield Promise.all(n.map(a=>(0,g.rq)(e.id,a.email,!1,{system_id:e.system?.id||e.resources[0]?.id}).toPromise())).catch(a=>{throw(0,u.cB)(`Error checking out all guests from ${e.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked out all guests from ${e.organiser?.name}'s meeting`);const s=(0,u.Tw)([...i,...e.attendees],"email");return s.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new g.ym({...e,attendees:s})})()}downloadVisitorsList(){var e=this;return(0,_.Z)(function*(){const n=yield e.filtered_guests.pipe((0,F.q)(1)).toPromise();if(!n.length)return;const{date:i}=e._filters.getValue(),s=n.map(c=>({Name:c.name,Email:c.email,"Checked In":c.checked_in,Host:c.extension_data?.host||"",Status:c.status,Date:(0,Q.Z)(c.extension_data?.date,"dd MMM h:mm a")})),a=(0,u.o3)(s);(0,u.Sv)(`visitor-list-${(0,Q.Z)(i||Date.now(),"MMM-dd")}.csv`,a)})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(j.uw))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Y=r(4945),D=r(1294),S=r(5670),z=r(6221),H=r(8441),K=r(9396),R=r(5074),$=r(7371),q=r(207),W=r(4714);function B(o,l){if(1&o&&(t.TgZ(0,"mat-option",4),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function X(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"mat-slide-toggle",5),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.setFilters({all_bookings:i}))}),t.ALo(1,"async"),t.TgZ(2,"div",6),t._uU(3,"All Bookings"),t.qZA()()}if(2&o){const e=t.oxw();let n;t.Q6J("ngModel",null==(n=t.lcZ(1,1,e.filters))?null:n.all_bookings)}}let tt=(()=>{class o extends u.KG{constructor(e,n,i,s){super(),this._state=e,this._org=n,this._route=i,this._router=s,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,_.Z)(function*(){yield e._org.initialised.pipe((0,S.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const i=n.get("zone_ids").split(",");if(i.length){const s=e._org.levelWithID(i);if(e.zones=i,!s)return;e._org.building=e._org.buildings.find(a=>a.id===s.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(i=>n.find(s=>s.id===i)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(z.w7),t.Y36(b.gz),t.Y36(b.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["visitors-topbar"]],features:[t.qOj],decls:22,vars:16,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModel","ngModelChange"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],["class","m-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-select",1),t.NdJ("ngModelChange",function(s){return n.zones=s})("ngModelChange",function(s){return n.updateZones(s)}),t.YNc(2,B,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA()(),t.TgZ(4,"mat-form-field",0)(5,"mat-select",3),t.NdJ("ngModelChange",function(s){return n.setFilters({period:s})}),t.ALo(6,"async"),t.TgZ(7,"mat-option",4),t._uU(8,"Show Day"),t.qZA(),t.TgZ(9,"mat-option",4),t._uU(10,"Show Week"),t.qZA(),t.TgZ(11,"mat-option",4),t._uU(12,"Show Month"),t.qZA()()(),t.TgZ(13,"mat-slide-toggle",5),t.NdJ("ngModelChange",function(s){return n.setFilters({show_guests:s})}),t.ALo(14,"async"),t.TgZ(15,"div",6),t._uU(16,"Only Guests"),t.qZA()(),t.YNc(17,X,4,3,"mat-slide-toggle",7),t.ALo(18,"async"),t._UZ(19,"div",8),t.TgZ(20,"searchbar",9),t.NdJ("modelChange",function(s){return n.setSearch(s)}),t.qZA(),t.TgZ(21,"date-options",10),t.NdJ("dateChange",function(s){return n.setDate(s)}),t.qZA()),2&e){let i,s,a;t.xp6(1),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,8,n.levels)),t.xp6(3),t.Q6J("ngModel",(null==(i=t.lcZ(6,10,n.filters))?null:i.period)||1),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",7),t.xp6(2),t.Q6J("value",30),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(14,12,n.filters))?null:s.show_guests),t.xp6(4),t.Q6J("ngIf",!(null!=(a=t.lcZ(18,14,n.filters))&&a.show_guests))}},dependencies:[d.sg,d.O5,w.JJ,w.On,H.E,K.U,R.KE,$.gD,q.ey,W.Rr,d.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--68.css.map*/"]}),o})();var f=r(4522),A=r(6896),k=r(1637),M=r(5306);function et(o,l){1&o&&(t.TgZ(0,"i",15),t._uU(1,"face"),t.qZA())}function nt(o,l){if(1&o&&(t.ynx(0),t.YNc(1,et,2,0,"i",14),t.BQk()),2&o){t.oxw();const e=t.MAs(4),n=t.oxw();t.xp6(1),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.checked_in))("ngIfElse",e)}}function it(o,l){1&o&&(t.TgZ(0,"i",16),t._uU(1,"done"),t.qZA())}function ot(o,l){1&o&&(t.TgZ(0,"i",17),t._uU(1,"assignment_ind"),t.qZA())}function st(o,l){if(1&o&&(t.TgZ(0,"div",18)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div")(4,"span"),t._uU(5,"Host:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"span"),t._uU(9,"Purpose:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"div")(12,"span"),t._uU(13,"Location:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div")(16,"span"),t._uU(17,"Issue Date:"),t.qZA(),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"div",19),t._UZ(21,"img",20),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),t.xp6(4),t.hij(" ",null==e.event?null:e.event.title,""),t.xp6(4),t.hij(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),t.xp6(4),t.hij(" ",t.xi3(19,6,e.today,"mediumDate")," "),t.xp6(3),t.Q6J("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",t.LSH)}}function lt(o,l){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,nt,2,2,"ng-container",2),t.YNc(3,it,2,0,"ng-template",null,3,t.W1O),t.YNc(5,ot,2,0,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6)(10,"action-icon",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggleRemote())}),t.qZA(),t.TgZ(11,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkin())}),t.qZA(),t.TgZ(12,"action-icon",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkout())}),t.qZA(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"email"),t.qZA()(),t.TgZ(16,"action-icon",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.printQRCode())}),t.qZA()(),t._UZ(17,"div",12),t.YNc(18,st,22,9,"div",13),t.BQk()}if(2&o){const e=t.MAs(6),n=t.oxw();t.xp6(2),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.organizer))("ngIfElse",e),t.xp6(6),t.hij(" ",(null==n.visitor?null:n.visitor.name)||(null==n.visitor?null:n.visitor.email)," "),t.xp6(2),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("matTooltip",n.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===n.loading)("content",n.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkin"===n.loading)("state",null!=n.visitor&&n.visitor.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkout"===n.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==n.visitor?null:n.visitor.email),t.LSH)("matTooltip",null!=n.visitor&&n.visitor.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!n.can_print),t.Q6J("loading","printing"===n.loading),t.xp6(2),t.Q6J("ngIf",n.show_qr_code)}}let at=(()=>{class o extends u.KG{constructor(e,n){var i;super(),i=this,this._state=e,this._settings=n,this.eventChange=new t.vpe,this.checkin=(0,_.Z)(function*(){i.loading="checkin",i.event=yield i._state.checkGuestIn(i.event,i.visitor).catch(s=>i.event),i.eventChange.emit(i.event),i.loading=""}),this.toggleRemote=(0,_.Z)(function*(){i.loading="remote";const s=i.event.ext("remote")?.filter(c=>c!==i.visitor.email)||[];i.remote||s.push(i.visitor.email);const a=new g.ym({...i.event.toJSON(),remote:s}).toJSON();i.event=yield(0,g.ry)(a).toPromise().catch(c=>((0,u.cB)(`Error setting visitor status. Error: ${c.statusText||c.message||c}`),i.event)),i.eventChange.emit(i.event),i.loading=""}),this.checkout=(0,_.Z)(function*(){i.loading="checkout",i.event=yield i._state.checkGuestOut(i.event,i.visitor).catch(s=>i.event),i.eventChange.emit(i.event),i.loading=""}),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}get can_print(){return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&this.visitor?.extension_data.qr}get today(){return Date.now()}get remote(){return!!this.event?.extension_data?.remote?.find(e=>e===this.visitor?.email)}ngOnChanges(e){e.visitor&&this.loadGuest()}loadGuest(e=0){var n=this;return(0,_.Z)(function*(){!n.visitor||(n.loading="printing",n.visitor.checked_in&&!(yield(0,p.pP)(n.visitor.email).toPromise().catch(s=>null))?.extension_data?.qr?.code&&e<5?n.timeout("load_guest",()=>n.loadGuest(++e),1e3):n.loading="")})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(u.gb))},o.\u0275cmp=t.Xpm({type:o,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[t.qOj,t.TTD],decls:1,vars:1,consts:[[4,"ngIf"],["details","",1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","py-2","flex","items-center","justify-end"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-14","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(e,n){1&e&&t.YNc(0,lt,19,21,"ng-container",0),2&e&&t.Q6J("ngIf",n.visitor)},dependencies:[d.O5,f.zs,A.gM,k.m,M.o,d.uU],styles:["[_nghost-%COMP%]{display:flex;align-items:center;width:100%;padding:0 .5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;border-bottom:1px solid #ccc;height:3.5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]:first-child{border:none}.invisible[_ngcontent-%COMP%]{opacity:0;pointer-events:none}\n/*# sourceMappingURL=visitor-details.component.ts-angular-inline--70.css.map*/"]}),o})();function rt(o,l){1&o&&(t.TgZ(0,"i",18),t._uU(1,"event"),t.qZA())}function ct(o,l){1&o&&(t.TgZ(0,"i",18),t._uU(1,"close"),t.qZA())}function ut(o,l){1&o&&(t.TgZ(0,"i",19),t._uU(1,"done"),t.qZA())}function dt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,rt,2,0,"i",6),t.YNc(3,ct,2,0,"i",6),t.YNc(4,ut,2,0,"i",7),t.qZA(),t.TgZ(5,"div",8),t._uU(6),t.ALo(7,"date"),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"div",9),t._uU(10),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.qZA(),t.TgZ(13,"div",11),t._uU(14),t.qZA(),t.TgZ(15,"div",12)(16,"action-icon",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkinGuests())}),t.qZA(),t.TgZ(17,"action-icon",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkoutGuests())}),t.qZA(),t.TgZ(18,"a",15)(19,"app-icon"),t._uU(20,"email"),t.qZA()()(),t.TgZ(21,"div",16)(22,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.show_attendees=!i.show_attendees)}),t.TgZ(23,"app-icon"),t._uU(24),t.qZA()()()()}if(2&o){const e=t.oxw();let n;t.xp6(2),t.Q6J("ngIf","declined"!==(null==e.event?null:e.event.status)&&"done"!==(null==e.event?null:e.event.state)),t.xp6(1),t.Q6J("ngIf","declined"===(null==e.event?null:e.event.status)),t.xp6(1),t.Q6J("ngIf","done"===(null==e.event?null:e.event.state)&&"declined"!==(null==e.event?null:e.event.status)),t.xp6(2),t.hij(" ",t.xi3(7,15,null==e.event?null:e.event.date,(null==(n=t.lcZ(8,18,e.filters))?null:n.period)>1?"MMM d, h:mm a":"shortTime")," "),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.email)," "),t.xp6(2),t.Oqu(null==e.event?null:e.event.title),t.xp6(2),t.Oqu(null==e.event?null:e.event.location),t.xp6(2),t.Q6J("loading","checkin"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("loading","checkout"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("href","mailto:"+(null==e.event||null==e.event.organiser?null:e.event.organiser.email),t.LSH),t.xp6(4),t.Q6J("disabled",!(null!=e.event&&null!=e.event.attendees&&e.event.attendees.length))("matTooltip",e.show_attendees||e.has_search?"Hide Attendees":"Show Attendees"),t.xp6(2),t.Oqu(e.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right")}}function _t(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t._UZ(1,"div",22),t.TgZ(2,"visitor-details",23),t.NdJ("eventChange",function(i){t.CHM(e);const s=t.oxw(2);return t.KtG(s.event=i)}),t.qZA()()}if(2&o){const e=l.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("visitor",e)("event",n.event),t.uIk("disabled",!n.matches[e.email])}}const gt=function(){return[]};function mt(o,l){if(1&o&&(t.ynx(0),t.YNc(1,_t,3,3,"div",20),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",(null==e.event?null:e.event.attendees)||t.DdM(1,gt))}}let pt=(()=>{class o extends u.KG{constructor(e){var n;super(),n=this,this._state=e,this.matches={},this.filters=this._state.filters,this.checkinGuests=(0,_.Z)(function*(){n.loading="checkin",n.event=yield n._state.checkAllGuestsIn(n.event).catch(i=>n.event),n.loading=""}),this.checkoutGuests=(0,_.Z)(function*(){n.loading="checkout",n.event=yield n._state.checkAllGuestsOut(n.event).catch(i=>n.event),n.loading=""})}get guestCount(){return this.event?.attendees?.reduce((e,n)=>e+(n.is_external&&!n.organizer?1:0),0)||0}get has_search(){return this._state.search}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){if(!this.event)return;this.matches={};const e=(this._state.search||"").toLowerCase();for(const n of this.event?.attendees||[])this.matches[n.email]=!e||n.email.toLowerCase().includes(e)||n.name.toLowerCase().includes(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["visitor-event"]],inputs:{event:"event"},features:[t.qOj],decls:4,vars:6,consts:[["event","","class","flex items-center px-2 bg-gray-100",4,"ngIf"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300"],["bar","",1,"absolute","top-0","bg-gray-400","z-10"],[4,"ngIf"],["event","",1,"flex","items-center","px-2","bg-gray-100"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400",4,"ngIf"],["class","p-2 rounded-full material-icons bg-gray-400 opacity-40",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","py-2","flex","items-center"],["checkin","","matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["checkout","","matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["mat-icon-button","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["mat-icon-button","",3,"disabled","matTooltip","click"],[1,"p-2","rounded-full","material-icons","bg-gray-400"],[1,"p-2","rounded-full","material-icons","bg-gray-400","opacity-40"],["visitor","","class","relative w-full pl-12 bg-gray-200",4,"ngFor","ngForOf"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200"],["l-bar","",1,"absolute","bg-gray-400"],[3,"visitor","event","eventChange"]],template:function(e,n){1&e&&(t.YNc(0,dt,25,20,"div",0),t.TgZ(1,"div",1),t._UZ(2,"div",2),t.YNc(3,mt,2,2,"ng-container",3),t.qZA()),2&e&&(t.Q6J("ngIf",n.event),t.xp6(1),t.Udp("height",n.show_attendees||n.has_search?3.5*(null==n.event||null==n.event.attendees?null:n.event.attendees.length)+"rem":"0rem"),t.xp6(1),t.Udp("height","calc("+(3.5*((null==n.event||null==n.event.attendees?null:n.event.attendees.length)-1)+1.75)+"rem + 1px)"),t.xp6(1),t.Q6J("ngIf",n.show_attendees||n.has_search))},dependencies:[d.sg,d.O5,f.lW,f.zs,A.gM,k.m,M.o,at,d.Ov,d.uU],styles:["[_nghost-%COMP%]{width:100%}visitor-details[_ngcontent-%COMP%]{transition:opacity .2s}[attendees][_ngcontent-%COMP%]{transition:height .2s}[visitor][_ngcontent-%COMP%]{height:3.5rem}[bar][_ngcontent-%COMP%]{width:2px;left:calc(2rem - 1px)}[l-bar][_ngcontent-%COMP%]{height:2px;left:2rem;top:calc(50% - 1px);width:1rem}[disabled=true][_ngcontent-%COMP%]{opacity:.35}\n/*# sourceMappingURL=visitor-event.component.ts-angular-inline--69.css.map*/"]}),o})();function ht(o,l){1&o&&t._UZ(0,"visitor-event",13),2&o&&t.Q6J("event",l.$implicit)}function ft(o,l){if(1&o&&(t.ynx(0),t.YNc(1,ht,1,1,"visitor-event",12),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function vt(o,l){1&o&&(t.TgZ(0,"div",14)(1,"p",15),t._uU(2," There are no visitors for the currently selected date. "),t.qZA()())}let xt=(()=>{class o{constructor(e){this._state=e,this.bookings=this._state.filtered_events}trackByFn(e,n){return n?n.id:void 0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto","h-1/2"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"Time"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Host"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",6),t._uU(10,"Location"),t.qZA(),t.TgZ(11,"div",7),t._uU(12,"Actions"),t.qZA(),t._UZ(13,"div",8),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,ft,3,4,"ng-container",10),t.ALo(16,"async"),t.qZA()(),t.YNc(17,vt,3,0,"ng-template",null,11,t.W1O)),2&e){const i=t.MAs(18);let s;t.xp6(15),t.Q6J("ngIf",null==(s=t.lcZ(16,2,n.bookings))?null:s.length)("ngIfElse",i)}},dependencies:[d.sg,d.O5,pt,d.Ov]}),o})();var V=r(8589),Zt=r(1110),Tt=r(3970);function Ct(o,l){1&o&&(t.TgZ(0,"i",12),t._uU(1,"face"),t.qZA())}function wt(o,l){1&o&&(t.TgZ(0,"i",13),t._uU(1,"done"),t.qZA())}function bt(o,l){if(1&o&&(t.YNc(0,Ct,2,0,"i",10),t.YNc(1,wt,2,0,"ng-template",null,11,t.W1O)),2&o){const e=l.row,n=t.MAs(2);t.Q6J("ngIf",!(null!=e&&e.checked_in))("ngIfElse",n)}}function yt(o,l){if(1&o&&t._uU(0),2&o){const e=l.row;t.hij(" ",null==e.extension_data?null:e.extension_data.host," ")}}function At(o,l){if(1&o&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&o){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.vaccination_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.vaccination_confirmed)?"Rejected":"Submitted"," ")}}function kt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(i,"vaccination_confirmed",!0))}),t._uU(3," Confirm Vaccination Proof "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(i,"vaccination_confirmed",!1))}),t._uU(5," Reject Vaccination Proof "),t.qZA()()}if(2&o){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url,t.LSH)}}function Mt(o,l){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,At,2,1,"button",15),t.qZA(),t.YNc(2,kt,6,1,"ng-template",null,16,t.W1O)),2&o){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url)}}function Vt(o,l){if(1&o&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&o){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Ut(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",23),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(i,"id_confirmed",!0))}),t._uU(3," Confirm ID "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(i,"id_confirmed",!1))}),t._uU(5," Reject ID "),t.qZA()()}if(2&o){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.LSH)}}function Lt(o,l){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,Vt,2,1,"button",15),t.qZA(),t.YNc(2,Ut,6,1,"ng-template",null,22,t.W1O)),2&o){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function Jt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",24)(1,"div",25)(2,"div",26),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",27),t._uU(5,"arrow_drop_down"),t.qZA()()(),t.TgZ(6,"mat-menu",null,28)(8,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row,a=t.oxw();return t.KtG(a.approveVisitor(s))}),t._uU(9," Approve Visitor "),t.qZA(),t.TgZ(10,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row,a=t.oxw();return t.KtG(a.declineVisitor(s))}),t._uU(11," Decline Visitor "),t.qZA()()}if(2&o){const e=l.row,n=t.MAs(7);t.ekj("bg-success","approved"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status)),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.hij(" ","approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function Gt(o,l){if(1&o&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&o){const e=l.row,n=t.oxw();let i;t.hij(" ",t.xi3(1,1,null==e.extension_data?null:e.extension_data.date,(null==(i=t.lcZ(2,4,n.filters))?null:i.period)>1?"MMM d, h:mm a":"shortTime")," ")}}function Ot(o,l){if(1&o&&(t.TgZ(0,"a",37),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.Oqu(e.name)}}function Nt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",30)(1,"app-icon"),t._uU(2,"attachment"),t.qZA()(),t.TgZ(3,"mat-menu",null,28),t.YNc(5,Ot,2,2,"a",31),t.qZA(),t.TgZ(6,"action-icon",32),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggleRemote())}),t.qZA(),t.TgZ(7,"action-icon",33),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkin())}),t.qZA(),t.TgZ(8,"action-icon",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.checkout())}),t.qZA(),t.TgZ(9,"a",35)(10,"app-icon"),t._uU(11,"email"),t.qZA()(),t.TgZ(12,"action-icon",36),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.printQRCode())}),t.qZA()}if(2&o){const e=l.row,n=t.MAs(4),i=t.oxw();t.Q6J("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngForOf",e.attachments),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("matTooltip",i.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===i.loading)("content",i.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkin"===i.loading)("state",null!=e&&e.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkout"===i.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==e?null:e.email),t.LSH)("matTooltip",null!=e&&e.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!i.can_print),t.Q6J("loading","printing"===i.loading)}}function Qt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.downloadVisitorList())}),t.TgZ(1,"app-icon"),t._uU(2,"download"),t.qZA()()}}const qt=function(o,l,e,n,i,s,a){return{state:o,status:l,date:e,host:n,vaccinated:i,id_data:s,actions:a}};let It=(()=>{class o{constructor(e,n){this._state=e,this._settings=n,this.guests=this._state.filtered_guests,this.search=this._state.search,this.filters=this._state.filters,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=i=>this._state.approveVisitor(i),this.declineVisitor=i=>this._state.declineVisitor(i),this.setExt=(i,s,a)=>this._state.setExt(i,s,a)}get columns(){return this._settings.get("app.guests.vaccine_check")?["state","date","name","host","email","vaccinated","id_data","status","actions"]:["state","date","name","host","email","status","actions"]}get display_columns(){const e={state:" ",date:"Date",name:"Person",host:"Host",email:"Email",vaccinated:"Vaccinated",id_data:"ID",status:"State",actions:" "};return this.columns.map(n=>e[n]||n)}get column_sizes(){const e={state:"3.5r",date:"8r",name:"12r",host:"12r",email:"flex",vaccinated:"8r",id_data:"8r",status:"10r",actions:"12r"};return this.columns.map(n=>e[n]||n)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(u.gb))},o.\u0275cmp=t.Xpm({type:o,selectors:[["guest-listings"]],decls:20,vars:22,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[88rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["state_template",""],["host_template",""],["vaccinated_template",""],["id_template",""],["status_template",""],["date_template",""],["action_template",""],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","mat-icon-button","",3,"click",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],["checkin_state",""],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["vaccine_confirmation",""],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-white","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","p-2","object-contain",3,"src"],["mat-button","",3,"click"],["mat-button","",1,"inverse","mt-2",3,"click"],["id_confirmation",""],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["mat-button","",1,"rounded-3xl","bg-pending","border-none",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","mat-icon-button","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t._UZ(1,"custom-table",1),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,bt,3,2,"ng-template",null,2,t.W1O),t.YNc(6,yt,1,1,"ng-template",null,3,t.W1O),t.YNc(8,Mt,4,2,"ng-template",null,4,t.W1O),t.YNc(10,Lt,4,2,"ng-template",null,5,t.W1O),t.YNc(12,Jt,12,6,"ng-template",null,6,t.W1O),t.YNc(14,Gt,3,6,"ng-template",null,7,t.W1O),t.YNc(16,Nt,13,20,"ng-template",null,8,t.W1O),t.YNc(18,Qt,3,0,"button",9),t.ALo(19,"async")),2&e){const i=t.MAs(5),s=t.MAs(7),a=t.MAs(9),c=t.MAs(11),I=t.MAs(13),m=t.MAs(15),T=t.MAs(17);let C;t.xp6(1),t.Q6J("dataSource",n.guests)("filter",t.lcZ(2,8,n.search))("columns",n.columns)("display_column",n.display_columns)("column_size",n.column_sizes)("template",t.Hh0(14,qt,i,I,m,s,a,c,T))("empty",t.lcZ(3,10,n.search)?"No matching visitors":"There are visitors for the currently selected date."),t.xp6(17),t.Q6J("ngIf",null==(C=t.lcZ(19,12,n.guests))?null:C.length)}},dependencies:[d.sg,d.O5,f.lW,f.zs,V.VK,V.OP,V.p6,A.gM,q.wG,k.m,M.o,Zt.C,Tt.X,d.Ov,d.uU]}),o})();const Et=["app-visitors",""];function Pt(o,l){1&o&&t._UZ(0,"visitor-listings",4)}function Ft(o,l){1&o&&t._UZ(0,"guest-listings",4)}function jt(o,l){1&o&&t._UZ(0,"mat-progress-bar",5)}const Yt=[{path:"",component:(()=>{class o{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["","app-visitors",""]],attrs:Et,decls:9,vars:9,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],["class","w-full flex-1 h-0",4,"ngIf"],["class","w-full","mode","indeterminate",4,"ngIf"],[1,"w-full","flex-1","h-0"],["mode","indeterminate",1,"w-full"]],template:function(e,n){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"visitors-topbar",1),t.YNc(3,Pt,1,0,"visitor-listings",2),t.ALo(4,"async"),t.YNc(5,Ft,1,0,"guest-listings",2),t.ALo(6,"async"),t.YNc(7,jt,1,0,"mat-progress-bar",3),t.ALo(8,"async"),t.qZA()),2&e){let i,s;t.xp6(3),t.Q6J("ngIf",!(null!=(i=t.lcZ(4,3,n.filters))&&i.show_guests)),t.xp6(2),t.Q6J("ngIf",null==(s=t.lcZ(6,5,n.filters))?null:s.show_guests),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,7,n.loading))}},dependencies:[d.O5,Y.k,D.pW,tt,xt,It,d.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=visitors.component.ts-angular-inline--67.css.map*/"]}),o})()}];let Dt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,w.u5,E.v,b.Bz.forChild(Yt)]}),o})()}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map