"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_lib_booking-form_service_ts"],{8929:(k,B,n)=>{n.d(B,{f:()=>N});var e=n(1670),h=n(9885),c=n(9112),L=n(308),a=n(1810),R=n(2317),P=n(3861),y=n(7485),T=n(4505),E=n(4139),m=n(7716),r=n(8623),f=n(5398),S=n(9128),v=n(823),F=n(6116),I=n(9095),U=n(8759),K=n(6942),Z=n(9151),x=n(5670),w=n(3910),W=n(565),C=n(6962),G=n(1980),$=n(354),V=n(4282),Q=n(8871),z=n(4367),X=n(1562),A=n(2560),J=n(1484);const j=["book/desks","book/parking","book/new-desks","book/new-parking"];class N extends c.cx{get view(){return this._view.getValue()}get booking(){return this._booking.getValue()}newForm(o=new C.$){this.form.reset(),this.form.patchValue((0,L.sWL)({...o,...o.extension_data},[null,void 0,""])),this.subscription("form_change",this.form.valueChanges.subscribe(()=>this.storeForm())),this._booking.next(o),this._options.next({type:this._options.getValue().type})}constructor(o,t,s,d,l){super(),this._router=o,this._settings=t,this._org=s,this._dialog=d,this._payments=l,this._view=new T.X("form"),this._options=new T.X({type:"desk"}),this._booking=new T.X(null),this._loading=new T.X(""),this.last_success=new C.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,S.d)(1)),this.form=(0,G.PR)(),this.resource=this.options.pipe((0,v.b)(300),(0,F.g)("type"),(0,I.w)(({type:i})=>{if(!this._org.building)return(0,E.of)([]);switch(i){case"desk":return this._loading.next("Loading desks..."),this.loadResourceList("desks");case"parking":return this._loading.next("Loading parking spaces..."),this.loadResourceList("parking_spaces")}return(0,E.of)([])}),(0,U.b)(()=>this._loading.next("")),(0,S.d)(1)),this.features=this.resource.pipe((0,K.U)(i=>{const u=[];for(const{features:g}of i)g instanceof Array&&g.forEach(_=>u.push(_));return(0,c.Tw)(u).sort((g,_)=>g.localeCompare(_))}),(0,S.d)(1)),this.available_resources=(0,m.aj)([this.options,this.resource,(0,r.T)(this.form.valueChanges,(0,f.H)(1e3))]).pipe((0,Z.h)(()=>this.form.getRawValue().date>0&&this.form.getRawValue().duration>0),(0,v.b)(500),(0,U.b)(([{type:i}])=>this._loading.next(`Checking ${i} availability...`)),(0,I.w)(([i,u])=>(0,$.F2)({period_start:(0,a.Z)(this.form.getRawValue().date),period_end:(0,a.Z)((0,R.Z)(this.form.getRawValue().date,this.form.getRawValue().duration||1440)),type:i.type,zones:i.zone_id}).pipe((0,K.U)(g=>u.filter(_=>!1!==_.bookable&&(!i.features||i.features?.every(p=>_.features.includes(p)))&&(!i.zone_id||i.zone_id===_.zone?.id||i.zone_id===_.zone?.parent_id)&&!g.find(p=>p.asset_id===_.id&&"declined"!==p.status))))),(0,U.b)(()=>this._loading.next("")),(0,S.d)(1)),this.grouped_availability=(0,m.aj)([this.options,this.available_resources]).pipe((0,K.U)(([i,u])=>{const g=[],_=[...u].sort((M,O)=>M.zone?.id?.localeCompare(O.zone?.id)),p=i.members?.length?i.members:[(0,c.ar)()];for(;_.length;){const M=[];let O=_.pop();for(;M.length<p.length&&(!M.length||M.find(b=>b.zone?.id===O.zone?.id));)M.push(O),O=_.pop();M.length<p.length||g.push(M)}return g})),this.subscription("router.bookings",this._router.events.subscribe(i=>{i instanceof h.m2&&!j.find(u=>i.url.includes(u))&&this.clearForm()})),this._org.initialised.pipe((0,x.P)(i=>i)).subscribe(()=>this.setOptions({}))}setView(o){this._view.next(o)}setOptions(o){this._options.next({...this._options.getValue(),...o})}setFeature(o,t){if(!o?.length)return;const s=this._options.getValue()?.features||[];t&&!s.includes(o)&&s.push(o),!t&&s.includes(o)&&s.splice(s.findIndex(d=>d===o),1),this.setOptions({features:s})}resetForm(){const o=this._booking.getValue();this.form.reset(),this.form.patchValue((0,L.sWL)({...o||{},...o?.extension_data||{}},[null,void 0,""])),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this.form.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this.form.reset();const o=JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}"),t=new C.$(o);this._booking.next(t),this.form.patchValue((0,L.sWL)({...t||{},...t?.extension_data||{}},[null,void 0,""])),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}clearOldState(){sessionStorage.removeItem("PLACEOS.last_booked_booking"),this.last_success=new C.$}openBookingLinkModal(o=!1){if(this.form.markAllAsTouched(),!this.form.valid&&!o)return;const t=new C.$({...this.booking,...this.form.getRawValue()});this._dialog.open(z.w,{data:t})}confirmPost(){var o=this;return(0,e.Z)(function*(){yield o.checkQuestions();const t=o._options.getValue(),s=o.form.getRawValue();let d=`Would you like to book the ${t.type} ${s.asset_name} for ${(0,P.Z)(s.date,"dd MMM yyyy")}${s.duration<720?" at "+(0,P.Z)(s.date,"h:mm a"):""}`;t.group&&(d=`${d}.<br>You group members will be assigned desks nearby your selected desk.`);const l=yield(0,c._5)({title:`Book ${t.type}`,content:d,icon:{content:"event_available"}},o._dialog);if("done"!==l?.reason)throw"User cancelled";l.loading("Performing booking request..."),t.group?yield o.postFormForGroup().catch(i=>{throw(0,c.cB)(JSON.stringify(i)),l.close(),i}):yield o.postForm().catch(i=>{throw(0,c.cB)(JSON.stringify(i)),l.close(),i}),l.close()})()}postForm(o=!1){var t=this;return(0,e.Z)(function*(){if(!t.form)throw"No form for booking";if(!t.form.valid)throw`Some form fields are invalid. [${(0,c.RD)(t.form).join(", ")}]`;t.form.patchValue({booking_type:t.form.getRawValue().booking_type||t._options.getValue().type});let s=t.form.getRawValue(),d=t._booking.getValue()||new C.$;if(o||(yield t.checkResourceAvailable(s,t._options.getValue().type)),(s.duration>=720||s.all_day)&&(t.form.patchValue({date:(0,y.Z)(s.date,{hours:11,minutes:59}).valueOf(),duration:720}),s=t.form.getRawValue()),t._payments.payment_module){const u=yield t._payments.makePayment({type:t._options.getValue().type,resource_name:s.asset_name,date:s.date,duration:s.duration,all_day:s.all_day});if(!u?.success)return;s.extension_data={invoice:u,invoice_id:u.invoice_id}}(s.assets?.length||d.extension_data.assets?.length)&&(yield(0,X.cd)(`${s.booked_by_email}|${s.date}`,{date:s.date,duration:s.duration,host:s.booked_by_email},s.assets,d.extension_data.assets)),t._loading.next("Saving booking");const l=yield(0,$.km)(new C.$({...t._options.getValue(),...s,description:s.asset_name||s.description,user_name:s.user?.name,user_id:(s.user?.id?.includes("@")?"":s?.user?.id)||(0,c.ar)()?.id,extension_data:{...s.extension_data||{},department:s.user?.department||(0,c.ar)()?.department},approved:!!t._settings.get("app.bookings.no_approval")})).toPromise();t._loading.next("");const{booking_type:i}=s;return t.clearForm(),t.form?.patchValue({booking_type:i}),t.last_success=l,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(l)),t.setView("success"),l})()}postFormForGroup(){var o=this;return(0,e.Z)(function*(){const{members:t,group:s,type:d}=o._options.getValue();if(!s)throw"No group available to book for";const l=t.filter(O=>O.email!==(0,c.ar)().email);if(l.length<=0)throw"No members in your group to book for.";const i=o.form.value,u=yield o.available_resources.pipe((0,w.q)(1)).toPromise(),g=u.find(O=>O.id===i.asset_id||O.map_id===i.asset_id),_=o._org.levelWithID([g.zone?.id]),p=[g,...yield o._getNearbyResources(_.map_id,i.asset_id,u,l.length)],M=(0,c.Tw)([(0,c.ar)(),...l],"email");yield Promise.all(M.map((O,b)=>o.checkResourceAvailable({...i,asset_id:p[b].map_id||p[b].id,user_email:O.email},d)));for(let O=0;O<M.length;O++){const b=M[O],D=p[O];o.form.patchValue({...i,user:b,asset_id:D?.id,asset_name:D.name,description:D.name,map_id:D?.map_id||D?.id,zones:D.zone?(0,c.Tw)([o._org.organisation.id,D.zone?.parent_id,D.zone?.id]):[o._org.organisation.id]}),o.postForm(!0)}})()}checkQuestions(){var o=this;return(0,e.Z)(function*(){if(!1!==o._settings.get("app.desks.ignore_questions"))return;const t=o._dialog.open(V.I);if("done"!==(yield Promise.race([t.componentInstance.event.pipe((0,x.P)(l=>"done"===l.reason)).toPromise(),t.afterClosed().toPromise()]))?.reason)throw"User cancelled";const d=t.componentInstance.form.getRawValue();for(const l in d)if(d[l])throw"User failed questionaire";t.close()})()}checkResourceAvailable({asset_id:o,date:t,duration:s,user_email:d,all_day:l},i){var u=this;return(0,e.Z)(function*(){s=l?720:s||60;const g=yield(0,$.F2)({period_start:(0,a.Z)(t),period_end:(0,a.Z)(t+60*s*1e3),type:i}).toPromise();if(g.find(p=>p.asset_id===o))throw o.includes("@")?`${o} already has an invite for the selected time`:`${o} is not available at the selected time`;const _=u._settings.get(`app.booking.allowed_daily_${i}_count`)??1;if(_>0&&g.filter(p=>p.user_email===(d||(0,c.ar)()?.email)&&"declined"!==p.status).length>=_){const p=d===(0,c.ar)()?.email;throw`${p?"You":d} already ${p?"have":"has"} a ${i} booked`}return!0})()}loadResourceList(o){return(0,L.BW_)(this._org.building.id,{name:o}).pipe((0,K.U)(t=>(0,c.xH)(t.map(s=>(s.metadata[o]?.details instanceof Array?s.metadata[o]?.details:[]).map(d=>({...d,zone:s.zone}))))))}_getNearbyResources(o,t,s,d){return(0,e.Z)(function*(){const l=[];let i=s.filter(u=>u.id!==t&&u.map_id!==t);for(let u=0;u<d;u++){const g=yield(0,G.gV)(o,t,i.map(_=>_.map_id||_.id));g&&(l.push(s.find(_=>_.id===g||_.map_id===g)),i=i.filter(_=>_.id!==g&&_.map_id!==g))}return l})()}}N.\u0275fac=function(o){return new(o||N)(A.LFG(h.F0),A.LFG(c.gb),A.LFG(W.w),A.LFG(J.uw),A.LFG(Q.c))},N.\u0275prov=A.Yz7({token:N,factory:N.\u0275fac,providedIn:"root"})},4367:(k,B,n)=>{n.d(B,{w:()=>E});var e=n(1484),h=n(719),c=n(9497),a=(n(6962),n(2560)),R=n(5306),P=n(207),y=n(158),T=n(7202);class E{constructor(r,f){this._event=r,this._settings=f,this.outlook_link=(0,c.Y$)(this._event),this.google_link=(0,c.T$)(this._event),this.ical_link=(0,c.KS)(this._event)}}E.\u0275fac=function(r){return new(r||E)(a.Y36(e.WI),a.Y36(h.g))},E.\u0275cmp=a.Xpm({type:E,selectors:[["booking-link-modal"]],decls:22,vars:12,consts:function(){let m,r,f;return m=$localize`:␟34c16b14ad0e33db574c8bea543e66e766aa3a01␟4015832758698516701:Create in Outlook`,r=$localize`:␟f745484670e6b6bbb8a1c327c222e665fb25b863␟3788591245559456526:Create in Google Calendar`,f=$localize`:␟1af54061e7f4bcfb1048ffaa05c9b8f7c4b41679␟4894641609416495396:Download iCal File`,[[1,"p-4","w-full","pb-2"],[1,"flex","flex-col","items-center","space-y-4","p-4","relative"],["button","","matRipple","","target","_blank","rel","noopener noreferer",1,"flex","items-center","p-2","space-x-2","pr-4","w-64","rounded","inverse",3,"href"],["src","assets/icons/outlook.svg",1,"w-6"],m,["src","assets/icons/gcal.svg",1,"w-6"],r,[1,"text-xl"],f,["icon","","mat-dialog-close","",1,"absolute","top-2","right-0"]]},template:function(r,f){1&r&&(a.TgZ(0,"div",0),a._uU(1,"Add event to your calendar"),a.qZA(),a.TgZ(2,"div",1)(3,"a",2),a.ALo(4,"sanitize"),a._UZ(5,"img",3),a.TgZ(6,"span"),a.SDv(7,4),a.qZA()(),a.TgZ(8,"a",2),a.ALo(9,"sanitize"),a._UZ(10,"img",5),a.TgZ(11,"span"),a.SDv(12,6),a.qZA()(),a.TgZ(13,"a",2),a.ALo(14,"safe"),a.TgZ(15,"app-icon",7),a._uU(16,"download"),a.qZA(),a.TgZ(17,"span"),a.SDv(18,8),a.qZA()()(),a.TgZ(19,"button",9)(20,"app-icon"),a._uU(21,"close"),a.qZA()()),2&r&&(a.xp6(3),a.Q6J("href",a.xi3(4,3,f.outlook_link,"url"),a.LSH),a.xp6(5),a.Q6J("href",a.xi3(9,6,f.google_link,"url"),a.LSH),a.xp6(5),a.Q6J("href",a.xi3(14,9,f.ical_link,"url"),a.LSH))},dependencies:[e.ZT,R.o,P.wG,y.y,T.n],styles:["[_nghost-%COMP%]{position:relative}\n/*# sourceMappingURL=booking-link-modal.component.ts-angular-inline--62.css.map*/"]})},4282:(k,B,n)=>{n.d(B,{I:()=>E});var e=n(2560),h=n(2508),L=(n(9112),n(4666)),a=n(2922),R=n(1484),P=n(207);function y(m,r){if(1&m){const f=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e.SDv(2,4),e.qZA(),e.TgZ(3,"main",5)(4,"div",6)(5,"label"),e.tHW(6,7),e._UZ(7,"span"),e.N_p(),e.qZA(),e.TgZ(8,"mat-radio-group",8)(9,"mat-radio-button",9),e._uU(10,"Yes"),e.qZA(),e.TgZ(11,"mat-radio-button",9),e._uU(12,"No"),e.qZA()()(),e.TgZ(13,"div",6)(14,"label"),e.tHW(15,10),e._UZ(16,"span"),e.N_p(),e.qZA(),e.TgZ(17,"mat-radio-group",11)(18,"mat-radio-button",9),e._uU(19,"Yes"),e.qZA(),e.TgZ(20,"mat-radio-button",9),e._uU(21,"No"),e.qZA()()(),e.TgZ(22,"div",12)(23,"label"),e.tHW(24,13),e._UZ(25,"span"),e.N_p(),e.qZA(),e.TgZ(26,"mat-radio-group",14)(27,"mat-radio-button",9),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"mat-radio-button",9),e._uU(30,"No"),e.qZA()()()(),e.TgZ(31,"footer",15)(32,"button",16),e.NdJ("click",function(){e.CHM(f);const v=e.oxw();return e.KtG(v.submit())}),e.SDv(33,17),e.qZA()(),e.TgZ(34,"button",18)(35,"i",19),e._uU(36,"close"),e.qZA()()()}if(2&m){const f=e.oxw();e.xp6(3),e.Q6J("formGroup",f.form),e.xp6(6),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function T(m,r){1&m&&(e.TgZ(0,"main",20)(1,"p",21),e.SDv(2,22),e.qZA(),e.TgZ(3,"button",18)(4,"i",19),e._uU(5,"close"),e.qZA()()())}class E{constructor(){this.event=new e.vpe,this.form=new h.cw({travelled:new h.NI(!1),unwell:new h.NI(!1),contact:new h.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(r=>!0===this.form.value[r]||"true"===this.form.value[r])?this.failure=!0:this.event.emit({reason:"done"})}}E.\u0275fac=function(r){return new(r||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:function(){let m,r,f,S,v,F;return m=$localize`:␟02006a13b8e6aacb7a6e15bafd8004ed529f5d81␟877348132538805077:COVID-19 Questionnaire`,r=$localize`:␟dad7efbd2320e5ea935aef911f18cbcb24690133␟1650520403092579087: Have you travelled overseas within the last 14 days?${"\ufffd#7\ufffd"}:START_TAG_SPAN:*${"\ufffd/#7\ufffd"}:CLOSE_TAG_SPAN:`,f=$localize`:␟cf50bf8de6c6db836da440c89a375631f7ba3fb0␟1182497320820036810: Are you unwell or experiencing any cold or flu-like symptoms?${"\ufffd#16\ufffd"}:START_TAG_SPAN:*${"\ufffd/#16\ufffd"}:CLOSE_TAG_SPAN:`,S=$localize`:␟273153c91358de15d124ff2966859d9949080f4c␟737527639567676154: Have you had contact with anyone with suspected COVID-19?${"\ufffd#25\ufffd"}:START_TAG_SPAN:*${"\ufffd/#25\ufffd"}:CLOSE_TAG_SPAN:`,v=$localize`:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`,F=$localize`:␟17d62f424c2c025579e1ec0e3f5ad971f57681df␟4401678084033805848: Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. `,[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],m,[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],r,["formControlName","travelled",1,"space-x-2"],[3,"value"],f,["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],S,["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["btn","","matRipple","",3,"click"],v,["close","","icon","","matRipple","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"],F]},template:function(r,f){if(1&r&&(e.YNc(0,y,37,7,"div",0),e.YNc(1,T,6,0,"ng-template",null,1,e.W1O)),2&r){const S=e.MAs(2);e.Q6J("ngIf",!f.failure)("ngIfElse",S)}},dependencies:[L.O5,h.JJ,h.JL,h.sg,h.u,a.VQ,a.U0,R.ZT,P.wG],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--61.css.map*/"]})}}]);
//# sourceMappingURL=default-libs_bookings_src_lib_booking-form_service_ts.js.map