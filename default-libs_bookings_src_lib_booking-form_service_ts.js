"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_lib_booking-form_service_ts"],{2084:($,B,t)=>{t.d(B,{f:()=>X});var e=t(1415),S=t(3473),p=t(9112),y=t(1091),s=t(7895),F=t(7807),L=t(4875),R=t(7647),T=t(8406),C=t(3815),m=t(8005),f=t(7693),r=t(572),h=t(1230),M=t(3800),A=t(1265),D=t(9258),v=t(4266),x=t(3155),Z=t(2629),G=t(565),K=t(6962),U=t(1980),k=t(354),w=t(4282),W=t(8871),V=t(4367),P=t(9609),Q=t(6053);const z=["book/desks","book/parking","book/newdesk","book/new-parking"];let X=(()=>{class N extends p.KG{constructor(o,n,_,i,g){super(),this._router=o,this._settings=n,this._org=_,this._dialog=i,this._payments=g,this._view=new T.X("form"),this._options=new T.X({type:"desk"}),this._form=new T.X((0,U.PR)()),this._booking=new T.X(null),this._loading=new T.X(""),this.last_success=new K.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,f.d)(1)),this.assets=this.options.pipe((0,r.b)(300),(0,h.g)("type"),(0,M.w)(({type:a})=>{if(!this._org.building)return(0,C.of)([]);switch(a){case"desk":return this._loading.next("Loading desks..."),this.loadAssets("desks");case"parking":return this._loading.next("Loading parking spaces..."),this.loadAssets("parking_spaces")}return(0,C.of)([])}),(0,A.b)(()=>this._loading.next("")),(0,f.d)(1)),this.features=this.assets.pipe((0,D.U)(a=>{const l=[];for(const{features:u}of a)u instanceof Array&&u.forEach(d=>l.push(d));return(0,p.Tw)(l).sort((u,d)=>u.localeCompare(d))}),(0,f.d)(1)),this.available_assets=(0,m.aj)([this.options,this.assets,this._form]).pipe((0,v.h)(([a,l,u])=>u.getRawValue().date>0&&u.getRawValue().duration>0),(0,r.b)(500),(0,A.b)(([{type:a}])=>this._loading.next(`Checking ${a} availability...`)),(0,M.w)(([a,l,u])=>(0,k.F2)({period_start:(0,s.Z)(u.getRawValue().date),period_end:(0,s.Z)((0,F.Z)(u.getRawValue().date,u.getRawValue().duration||1440)),type:a.type,zones:a.zone_id}).pipe((0,D.U)(d=>l.filter(c=>!1!==c.bookable&&(!a.features||a.features?.every(O=>c.features.includes(O)))&&(!a.zone_id||a.zone_id===c.zone?.id||a.zone_id===c.zone?.parent_id)&&!d.find(O=>O.asset_id===c.id&&"declined"!==O.status))))),(0,A.b)(()=>this._loading.next("")),(0,f.d)(1)),this.grouped_availability=(0,m.aj)([this.options,this.available_assets]).pipe((0,D.U)(([a,l])=>{const u=[],d=[...l].sort((O,E)=>O.zone?.id?.localeCompare(E.zone?.id)),c=a.members?.length?a.members:[(0,p.ar)()];for(;d.length;){const O=[];let E=d.pop();for(;O.length<c.length&&(!O.length||O.find(b=>b.zone?.id===E.zone?.id));)O.push(E),E=d.pop();O.length<c.length||u.push(O)}return u})),this.subscription("router.bookings",this._router.events.subscribe(a=>{a instanceof S.m2&&!z.find(l=>a.url.includes(l))&&this.clearForm()})),this._org.initialised.pipe((0,x.P)(a=>a)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}newForm(o=new K.$){this._form.next((0,U.PR)(o)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(o),this._options.next({type:this._options.getValue().type})}setView(o){this._view.next(o)}setOptions(o){this._options.next({...this._options.getValue(),...o})}setFeature(o,n){if(!o?.length)return;const _=this._options.getValue()?.features||[];n&&!_.includes(o)&&_.push(o),!n&&_.includes(o)&&_.splice(_.findIndex(i=>i===o),1),this.setOptions({features:_})}resetForm(){this._form.getValue()||this.newForm();const o=this._booking.getValue();this._form.getValue().patchValue({...o||{},...o?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}openBookingLinkModal(o=!1){const n=this._form.getValue();if(n.markAllAsTouched(),!n.valid&&!o)return;const _=new K.$({...this.booking,...n.getRawValue()});this._dialog.open(V.w,{data:_})}confirmPost(){var o=this;return(0,e.Z)(function*(){yield o.checkQuestions();const n=o._options.getValue(),i=o._form.getValue().getRawValue();let g=`Would you like to book the ${n.type} ${i.asset_name} for ${(0,L.Z)(i.date,"dd MMM yyyy")}${i.duration<720?" at "+(0,L.Z)(i.date,"h:mm a"):""}`;n.group&&(g=`${g}.<br>You group members will be assigned desks nearby your selected desk.`);const a=yield(0,p._5)({title:`Book ${n.type}`,content:g,icon:{content:"event_available"}},o._dialog);if("done"!==a?.reason)throw"User cancelled";a.loading("Performing booking request..."),n.group?yield o.postFormForGroup().catch(l=>{throw(0,p.cB)(l),a.close(),l}):yield o.postForm().catch(l=>{throw(0,p.cB)(l),a.close(),l}),a.close()})()}postForm(o=!1){var n=this;return(0,e.Z)(function*(){const _=n._form.getValue();if(!_)throw"No form for booking";if(!_.valid)throw`Some form fields are invalid. [${(0,p.RD)(_).join(", ")}]`;_.patchValue({booking_type:_.getRawValue().booking_type||n._options.getValue().type});const i=_.getRawValue();if(o||(yield n.checkResourceAvailable(i,n._options.getValue().type)),(i.duration>=720||i.all_day)&&_.patchValue({date:(0,R.Z)(i.date,{hours:11,minutes:59}).valueOf(),duration:720}),n._payments.payment_module){const l=yield n._payments.makePayment({type:n._options.getValue().type,resource_name:i.asset_name,date:i.date,duration:i.duration,all_day:i.all_day});if(!l?.success)return;i.extension_data={invoice:l,invoice_id:l.invoice_id}}n._loading.next("Saving booking");const g=yield(0,k.km)(new K.$({...n._options.getValue(),...i,approved:!!n._settings.get("app.bookings.no_approval")})).toPromise();n._loading.next("");const{booking_type:a}=i;return n.clearForm(),_?.patchValue({booking_type:a}),n.last_success=g,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(g)),n.setView("success"),g})()}postFormForGroup(){var o=this;return(0,e.Z)(function*(){const{members:n,group:_,type:i}=o._options.getValue();if(!_)throw"No group available to book for";const g=n.filter(E=>E.email!==(0,p.ar)().email);if(g.length<=0)throw"No members in your group to book for.";const a=o._form.getValue().value,l=yield o.available_assets.pipe((0,Z.q)(1)).toPromise(),u=l.find(E=>E.id===a.asset_id||E.map_id===a.asset_id),d=o._org.levelWithID([u.zone?.id]),c=[u,...yield o._getNearbyResources(d.map_id,a.asset_id,l,g.length)],O=[(0,p.ar)(),...g];yield Promise.all(O.map((E,b)=>o.checkResourceAvailable({...a,asset_id:c[b].map_id||c[b].id,user_email:E.email},i)));for(let E=0;E<O.length;E++){const b=O[E],I=c[E];o._form.getValue().patchValue({...a,user:b,asset_id:I?.id,asset_name:I.name,map_id:I?.map_id||I?.id,description:I.name,zones:I.zone?[I.zone?.parent_id,I.zone?.id]:[]}),o.postForm(!0)}})()}checkQuestions(){var o=this;return(0,e.Z)(function*(){if(!1!==o._settings.get("app.desks.ignore_questions"))return;const n=o._dialog.open(w.I);if("done"!==(yield Promise.race([n.componentInstance.event.pipe((0,x.P)(g=>"done"===g.reason)).toPromise(),n.afterClosed().toPromise()]))?.reason)throw"User cancelled";const i=n.componentInstance.form.getRawValue();for(const g in i)if(i[g])throw"User failed questionaire";n.close()})()}checkResourceAvailable({asset_id:o,date:n,duration:_,user_email:i,all_day:g},a){var l=this;return(0,e.Z)(function*(){_=g?720:_||60;const u=yield(0,k.F2)({period_start:(0,s.Z)(n),period_end:(0,s.Z)(n+60*_*1e3),type:a}).toPromise();if(u.find(c=>c.asset_id===o))throw o.includes("@")?`${o} already has an invite for the selected time`:`${o} is not available at the selected time`;const d=l._settings.get(`app.booking.allowed_daily_${a}_count`)??1;if(d>0&&u.filter(c=>c.user_email===(i||(0,p.ar)()?.email)&&"declined"!==c.status).length>=d){const c=i===(0,p.ar)()?.email;throw`${c?"You":i} already ${c?"have":"has"} a ${a} booked`}return!0})()}loadAssets(o){return(0,y.BW_)(this._org.building.id,{name:o}).pipe((0,D.U)(n=>(0,p.xH)(n.map(_=>(_.metadata[o]?.details instanceof Array?_.metadata[o]?.details:[]).map(i=>({...i,zone:_.zone}))))))}_getNearbyResources(o,n,_,i){return(0,e.Z)(function*(){const g=[];let a=_.filter(l=>l.id!==n&&l.map_id!==n);for(let l=0;l<i;l++){const u=yield(0,U.gV)(o,n,a.map(d=>d.map_id||d.id));u&&(g.push(_.find(d=>d.id===u||d.map_id===u)),a=a.filter(d=>d.id!==u&&d.map_id!==u))}return g})()}}return N.\u0275fac=function(o){return new(o||N)(P.LFG(S.F0),P.LFG(p.gb),P.LFG(G.w),P.LFG(Q.uw),P.LFG(W.c))},N.\u0275prov=P.Yz7({token:N,factory:N.\u0275fac,providedIn:"root"}),N})()},4367:($,B,t)=>{t.d(B,{w:()=>C});var e=t(6053),S=t(719),p=t(9497),s=(t(6962),t(9609)),F=t(5432),L=t(5306),R=t(158),T=t(7202);let C=(()=>{class m{constructor(r,h){this._event=r,this._settings=h,this.outlook_link=(0,p.Y$)(this._event),this.google_link=(0,p.T$)(this._event),this.ical_link=(0,p.KS)(this._event)}}return m.\u0275fac=function(r){return new(r||m)(s.Y36(e.WI),s.Y36(S.g))},m.\u0275cmp=s.Xpm({type:m,selectors:[["booking-link-modal"]],decls:22,vars:12,consts:function(){let f,r,h;return f=$localize`:␟34c16b14ad0e33db574c8bea543e66e766aa3a01␟4015832758698516701:Create in Outlook`,r=$localize`:␟f745484670e6b6bbb8a1c327c222e665fb25b863␟3788591245559456526:Create in Google Calendar`,h=$localize`:␟1af54061e7f4bcfb1048ffaa05c9b8f7c4b41679␟4894641609416495396:Download iCal File`,[[1,"p-4","w-full","pb-2"],[1,"flex","flex-col","items-center","space-y-4","p-4","relative"],["button","","matRipple","","target","_blank","rel","noopener noreferer",1,"flex","items-center","p-2","space-x-2","pr-4","w-64","rounded","inverse",3,"href"],["src","assets/icons/outlook.svg",1,"w-6"],f,["src","assets/icons/gcal.svg",1,"w-6"],r,[1,"text-xl"],h,["mat-icon-button","","mat-dialog-close","",1,"absolute","top-2","right-0"]]},template:function(r,h){1&r&&(s.TgZ(0,"div",0),s._uU(1," Add event to your calendar "),s.qZA(),s.TgZ(2,"div",1)(3,"a",2),s.ALo(4,"sanitize"),s._UZ(5,"img",3),s.TgZ(6,"span"),s.SDv(7,4),s.qZA()(),s.TgZ(8,"a",2),s.ALo(9,"sanitize"),s._UZ(10,"img",5),s.TgZ(11,"span"),s.SDv(12,6),s.qZA()(),s.TgZ(13,"a",2),s.ALo(14,"safe"),s.TgZ(15,"app-icon",7),s._uU(16,"download"),s.qZA(),s.TgZ(17,"span"),s.SDv(18,8),s.qZA()()(),s.TgZ(19,"button",9)(20,"app-icon"),s._uU(21,"close"),s.qZA()()),2&r&&(s.xp6(3),s.Q6J("href",s.xi3(4,3,h.outlook_link,"url"),s.LSH),s.xp6(5),s.Q6J("href",s.xi3(9,6,h.google_link,"url"),s.LSH),s.xp6(5),s.Q6J("href",s.xi3(14,9,h.ical_link,"url"),s.LSH))},dependencies:[F.lW,e.ZT,L.o,R.y,T.n],styles:["[_nghost-%COMP%]{position:relative}\n/*# sourceMappingURL=booking-link-modal.component.ts-angular-inline--62.css.map*/"]}),m})()},4282:($,B,t)=>{t.d(B,{I:()=>C});var e=t(9609),S=t(3557),y=(t(9112),t(2954)),s=t(8281),F=t(5432),L=t(6053);function R(m,f){if(1&m){const r=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e.SDv(2,4),e.qZA(),e.TgZ(3,"main",5)(4,"div",6)(5,"label"),e.tHW(6,7),e._UZ(7,"span"),e.N_p(),e.qZA(),e.TgZ(8,"mat-radio-group",8)(9,"mat-radio-button",9),e._uU(10,"Yes"),e.qZA(),e.TgZ(11,"mat-radio-button",9),e._uU(12,"No"),e.qZA()()(),e.TgZ(13,"div",6)(14,"label"),e.tHW(15,10),e._UZ(16,"span"),e.N_p(),e.qZA(),e.TgZ(17,"mat-radio-group",11)(18,"mat-radio-button",9),e._uU(19,"Yes"),e.qZA(),e.TgZ(20,"mat-radio-button",9),e._uU(21,"No"),e.qZA()()(),e.TgZ(22,"div",12)(23,"label"),e.tHW(24,13),e._UZ(25,"span"),e.N_p(),e.qZA(),e.TgZ(26,"mat-radio-group",14)(27,"mat-radio-button",9),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"mat-radio-button",9),e._uU(30,"No"),e.qZA()()()(),e.TgZ(31,"footer",15)(32,"button",16),e.NdJ("click",function(){e.CHM(r);const M=e.oxw();return e.KtG(M.submit())}),e.SDv(33,17),e.qZA()(),e.TgZ(34,"button",18)(35,"i",19),e._uU(36,"close"),e.qZA()()()}if(2&m){const r=e.oxw();e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(6),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function T(m,f){1&m&&(e.TgZ(0,"main",20)(1,"p",21),e.SDv(2,22),e.qZA(),e.TgZ(3,"button",18)(4,"i",19),e._uU(5,"close"),e.qZA()()())}let C=(()=>{class m{constructor(){this.event=new e.vpe,this.form=new S.cw({travelled:new S.NI(!1),unwell:new S.NI(!1),contact:new S.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(r=>!0===this.form.value[r]||"true"===this.form.value[r])?this.failure=!0:this.event.emit({reason:"done"})}}return m.\u0275fac=function(r){return new(r||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:function(){let f,r,h,M,A,D;return f=$localize`:␟02006a13b8e6aacb7a6e15bafd8004ed529f5d81␟877348132538805077:COVID-19 Questionnaire`,r=$localize`:␟dad7efbd2320e5ea935aef911f18cbcb24690133␟1650520403092579087: Have you travelled overseas within the last 14 days?${"\ufffd#7\ufffd"}:START_TAG_SPAN:*${"\ufffd/#7\ufffd"}:CLOSE_TAG_SPAN:`,h=$localize`:␟cf50bf8de6c6db836da440c89a375631f7ba3fb0␟1182497320820036810: Are you unwell or experiencing any cold or flu-like symptoms?${"\ufffd#16\ufffd"}:START_TAG_SPAN:*${"\ufffd/#16\ufffd"}:CLOSE_TAG_SPAN:`,M=$localize`:␟273153c91358de15d124ff2966859d9949080f4c␟737527639567676154: Have you had contact with anyone with suspected COVID-19?${"\ufffd#25\ufffd"}:START_TAG_SPAN:*${"\ufffd/#25\ufffd"}:CLOSE_TAG_SPAN:`,A=$localize`:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`,D=$localize`:␟17d62f424c2c025579e1ec0e3f5ad971f57681df␟4401678084033805848: Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. `,[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],f,[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],r,["formControlName","travelled",1,"space-x-2"],[3,"value"],h,["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],M,["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],A,["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"],D]},template:function(r,h){if(1&r&&(e.YNc(0,R,37,7,"div",0),e.YNc(1,T,6,0,"ng-template",null,1,e.W1O)),2&r){const M=e.MAs(2);e.Q6J("ngIf",!h.failure)("ngIfElse",M)}},dependencies:[y.O5,S.JJ,S.JL,S.sg,S.u,s.VQ,s.U0,F.lW,L.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--61.css.map*/"]}),m})()}}]);
//# sourceMappingURL=default-libs_bookings_src_lib_booking-form_service_ts.js.map