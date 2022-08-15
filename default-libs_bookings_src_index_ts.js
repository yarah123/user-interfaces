"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_index_ts"],{9669:(Re,W,s)=>{s.d(W,{$N:()=>M.$,qz:()=>J,fy:()=>K,jT:()=>b.jT,FD:()=>b.FD,gV:()=>F.gV,F2:()=>b.F2,FP:()=>b.FP,km:()=>b.km,Fo:()=>b.Fo,Wp:()=>b.Wp});var H=s(2921),e=(s(6850),s(2560)),f=s(1506),w=s(3619),y=(s(5845),s(5148)),O=s(2317),Q=s(1799),T=s(1484),N=s(9885),k=s(4666),E=s(5306),Z=s(1670),M=s(6962),b=s(354),A=s(4522),V=s(1708),de=s(9136),ue=s(2581),q=s(8589);function ce(n,a){if(1&n&&(e.TgZ(0,"div",22)(1,"app-icon"),e._uU(2),e.qZA(),e.TgZ(3,"div",23),e._uU(4),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.booking.checked_in?"done":"arrow_back"),e.xp6(2),e.hij(" ",t.booking.checked_in?"Checked in":"Not checked in"," ")}}function me(n,a){1&n&&e._UZ(0,"mat-spinner",24),2&n&&e.Q6J("diameter",32)}function ge(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",17)(1,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleCheckedIn())}),e.YNc(2,ce,5,2,"div",19),e.YNc(3,me,1,1,"ng-template",null,20,e.W1O),e.qZA(),e.TgZ(5,"button",21)(6,"app-icon"),e._uU(7,"more_horiz"),e.qZA()()()}if(2&n){const t=e.MAs(4),o=e.oxw(),i=e.MAs(42);e.xp6(1),e.ekj("inverse",o.booking.checked_in),e.Q6J("disabled",o.checking_in),e.xp6(1),e.Q6J("ngIf",!o.checking_in)("ngIfElse",t),e.xp6(3),e.Q6J("matMenuTriggerFor",i)}}const pe=function(){return{disable_pan:!0,disable_zoom:!0}};let J=(()=>{class n{constructor(t,o){this._booking=t,this._org=o,this.edit=new e.vpe,this.remove=new e.vpe,this.booking=this._booking,this.checking_in=!1,this.features=[{location:this.booking?.asset_id,content:H.qL}]}get level(){return this._org.levelWithID(this.booking?.zones||[])}get building(){return this._org.buildings.find(t=>(this.booking?.zones||[]).includes(t.id))}get period(){const t=this.booking?.date||Date.now(),o=this.booking?.duration||60,i=(0,O.Z)(t,o),r=(0,Q.Z)({hours:Math.floor(o/60),minutes:o%60}).replace(" hour","hr").replace(" minute","min");return`${(0,y.Z)(t,"h:mm a")} - ${(0,y.Z)(i,"h:mm a")} (${r})`}toggleCheckedIn(){var t=this;return(0,Z.Z)(function*(){t.checking_in=!0,yield(0,b.FD)(t.booking.id,!t.booking.checked_in),t.booking.checked_in=!t.booking.checked_in,(0,f.t5)("Successfully "+(t.booking.checked_in?"checked in":"checked out")),t.checking_in=!1})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.WI),e.Y36(w.w7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["booking-details-modal"]],outputs:{edit:"edit",remove:"remove"},decls:48,vars:34,consts:[[1,"absolute","inset-0","sm:relative","sm:inset-auto","sm:w-[24rem]","sm:max-h-[80vh]","bg-white","dark:bg-neutral-600","sm:rounded","overflow-auto","space-y-2","pb-4"],[1,"bg-black/20","dark:bg-white/20","w-full","h-64"],[1,"w-full","h-64",3,"images"],["title","",1,"px-3","mt-2","text-xl","font-medium"],[1,"flex","m-2"],[1,"flex","items-center","bg-opacity-30","rounded-2xl","p-1","text-sm","space-x-2","pr-2","font-medium"],[1,"rounded-full","h-5","w-5","flex","items-center","justify-center","text-white"],[1,"pr-1"],["actions","","class","flex items-center space-x-2 px-2",4,"ngIf"],[1,"px-3","mt-2","text-lg","font-medium"],[1,"flex","items-center","px-2","space-x-2"],["map","",1,"mx-4","h-64","sm:h-48","relative","border","border-gray-200","overflow-hidden","rounded"],[1,"pointer-events-none",3,"src","features","options"],["mat-icon-button","","mat-dialog-close","",1,"absolute","top-2","left-2","bg-black/30","text-white"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2","text-base",3,"click"],["actions","",1,"flex","items-center","space-x-2","px-2"],["mat-button","",1,"flex-1","h-10",3,"disabled","click"],["class","flex items-center space-x-2 justify-center",4,"ngIf","ngIfElse"],["loading_state",""],["mat-icon-button","",1,"bg-primary","rounded","text-white","h-10","w-10",3,"matMenuTriggerFor"],[1,"flex","items-center","space-x-2","justify-center"],[1,"mr-2"],[1,"mx-auto",3,"diameter"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"image-carousel",2),e.qZA(),e.TgZ(3,"h3",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"app-icon"),e._uU(9),e.qZA()(),e.TgZ(10,"div",7),e._uU(11),e.qZA()()(),e.YNc(12,ge,8,6,"div",8),e.TgZ(13,"h3",9),e._uU(14,"Details"),e.qZA(),e.TgZ(15,"div",10)(16,"app-icon"),e._uU(17,"event"),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.ALo(20,"date"),e.qZA()(),e.TgZ(21,"div",10)(22,"app-icon"),e._uU(23,"schedule"),e.qZA(),e.TgZ(24,"div"),e._uU(25),e.qZA()(),e.TgZ(26,"div",10)(27,"app-icon"),e._uU(28,"map"),e.qZA(),e.TgZ(29,"div"),e._uU(30),e.qZA()(),e.TgZ(31,"div",10)(32,"app-icon"),e._uU(33,"place"),e.qZA(),e.TgZ(34,"div"),e._uU(35),e.qZA()(),e.TgZ(36,"div",11),e._UZ(37,"interactive-map",12),e.qZA(),e.TgZ(38,"button",13)(39,"app-icon"),e._uU(40,"close"),e.qZA()()(),e.TgZ(41,"mat-menu",14,15)(43,"button",16),e.NdJ("click",function(){return o.remove.emit()}),e.TgZ(44,"app-icon"),e._uU(45,"delete"),e.qZA(),e.TgZ(46,"div"),e._uU(47,"Delete booking"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("images",null==o.booking||null==o.booking.extension_data?null:o.booking.extension_data.images),e.xp6(2),e.Oqu(o.booking.title),e.xp6(2),e.ekj("bg-green-600",!o.booking.is_done&&"approved"===(null==o.booking?null:o.booking.status))("bg-yellow-500",!o.booking.is_done&&"tentative"===(null==o.booking?null:o.booking.status))("bg-red-600",!o.booking.is_done&&"declined"===(null==o.booking?null:o.booking.status))("bg-gray-300",o.booking.is_done),e.xp6(1),e.ekj("bg-success",!o.booking.is_done&&"approved"===(null==o.booking?null:o.booking.status))("text-pending",!o.booking.is_done&&"tentative"===(null==o.booking?null:o.booking.status))("bg-error",!o.booking.is_done&&"declined"===(null==o.booking?null:o.booking.status))("text-neutral-600",o.booking.is_done),e.xp6(2),e.hij(" ",o.booking.is_done?"not_interested":"approved"===(null==o.booking?null:o.booking.status)?"done":"tentative"===(null==o.booking?null:o.booking.status)?"warning":"close"," "),e.xp6(2),e.Oqu(o.period),e.xp6(1),e.Q6J("ngIf",!o.booking.is_done),e.xp6(7),e.Oqu(e.xi3(20,30,o.booking.date,"EEEE, dd LLLL y")),e.xp6(6),e.Oqu(o.period),e.xp6(5),e.AsE(" ",(null==o.level?null:o.level.display_name)||(null==o.level?null:o.level.name),", ",o.booking.asset_name||o.booking.asset_id," "),e.xp6(5),e.AsE(" ",(null==o.building?null:o.building.display_name)||(null==o.building?null:o.building.name),", ",null==o.building?null:o.building.address," "),e.xp6(2),e.Q6J("src",null==o.level?null:o.level.map_id)("features",o.features)("options",e.DdM(33,pe)))},dependencies:[k.O5,A.lW,T.ZT,V.Ou,E.o,de.p,ue.K,q.VK,q.OP,q.p6,k.uU]}),n})();var p=s(2508);s(5074),s(1267),s(2306),s(9697);var z=s(2922);function Te(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2,"COVID-19 Questionnaire"),e.qZA(),e.TgZ(3,"main",4)(4,"div",5)(5,"label"),e._uU(6," Have you travelled overseas within the last 14 days?"),e.TgZ(7,"span"),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-radio-group",6)(10,"mat-radio-button",7),e._uU(11,"Yes"),e.qZA(),e.TgZ(12,"mat-radio-button",7),e._uU(13,"No"),e.qZA()()(),e.TgZ(14,"div",5)(15,"label"),e._uU(16," Are you unwell or experiencing any cold or flu-like symptoms?"),e.TgZ(17,"span"),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"mat-radio-group",8)(20,"mat-radio-button",7),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"mat-radio-button",7),e._uU(23,"No"),e.qZA()()(),e.TgZ(24,"div",9)(25,"label"),e._uU(26," Have you had contact with anyone with suspected COVID-19?"),e.TgZ(27,"span"),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"mat-radio-group",10)(30,"mat-radio-button",7),e._uU(31,"Yes"),e.qZA(),e.TgZ(32,"mat-radio-button",7),e._uU(33,"No"),e.qZA()()()(),e.TgZ(34,"footer",11)(35,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(36,"Submit"),e.qZA()(),e.TgZ(37,"button",13)(38,"i",14),e._uU(39,"close"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function Ce(n,a){1&n&&(e.TgZ(0,"main",15)(1,"p",16),e._uU(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),e.qZA(),e.TgZ(3,"button",13)(4,"i",14),e._uU(5,"close"),e.qZA()()())}let j=(()=>{class n{constructor(){this.event=new e.vpe,this.form=new p.cw({travelled:new p.NI(!1),unwell:new p.NI(!1),contact:new p.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(t=>!0===this.form.value[t]||"true"===this.form.value[t])?this.failure=!0:this.event.emit({reason:"done"})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(t,o){if(1&t&&(e.YNc(0,Te,40,7,"div",0),e.YNc(1,Ce,6,0,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",!o.failure)("ngIfElse",i)}},dependencies:[k.O5,p.JJ,p.JL,p.sg,p.u,z.VQ,z.U0,A.lW,T.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--60.css.map*/"]}),n})();var we=s(3690),I=s(1810),Me=s(7485),C=s(4505),L=s(4139),R=s(7716),U=s(9128),Ae=s(6116),$=s(9095),D=s(6942),S=s(8759),Ie=s(9151),Ue=s(823),G=s(5670),De=s(3910),F=s(1980),Fe=s(530);const Ne=["book/desks"];let K=(()=>{class n extends f.KG{constructor(t,o,i,r,m){super(),this._router=t,this._settings=o,this._org=i,this._dialog=r,this._payments=m,this._view=new C.X("form"),this._options=new C.X({type:"desk"}),this._form=new C.X((0,F.PR)()),this._booking=new C.X(null),this._loading=new C.X(""),this.last_success=new M.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,U.d)(1)),this.assets=this.options.pipe((0,Ae.g)("zone_id"),(0,$.w)(({type:l})=>this._org.building&&"desk"===l?(this._loading.next("Loading desks..."),(0,we.BW_)(this._org.building.id,{name:"desks"}).pipe((0,D.U)(u=>(0,f.xH)(u.map(d=>(d.metadata.desks?.details instanceof Array?d.metadata.desks?.details:[]).map(c=>({...c,zone:d.zone}))))))):(0,L.of)([])),(0,S.b)(()=>this._loading.next("")),(0,U.d)(1)),this.features=this.assets.pipe((0,D.U)(l=>{const u=[];for(const{features:d}of l)d instanceof Array&&d.forEach(c=>u.push(c));return(0,f.Tw)(u).sort((d,c)=>d.localeCompare(c))}),(0,U.d)(1)),this.available_assets=(0,R.aj)([this.options,this.assets,this._form]).pipe((0,Ie.h)(([l,u,d])=>d.getRawValue().date>0&&d.getRawValue().duration>0),(0,Ue.b)(500),(0,S.b)(([{type:l}])=>this._loading.next(`Checking ${l} availability...`)),(0,$.w)(([l,u,d])=>(0,b.F2)({period_start:(0,I.Z)(d.getRawValue().date),period_end:(0,I.Z)((0,O.Z)(d.getRawValue().date,d.getRawValue().duration||1440)),type:l.type,zones:l.zone_id}).pipe((0,D.U)(c=>u.filter(g=>!1!==g.bookable&&(!l.features||l.features?.every(_=>g.features.includes(_)))&&(!l.zone_id||l.zone_id===g.zone?.id||l.zone_id===g.zone?.parent_id)&&!c.find(_=>_.asset_id===g.id&&"declined"!==_.status)&&(!l?.show_fav||this.favorite_desks.includes(g.id)))))),(0,S.b)(()=>this._loading.next("")),(0,U.d)(1)),this.grouped_availability=(0,R.aj)([this.options,this.available_assets]).pipe((0,D.U)(([l,u])=>{const d=[],c=[...u].sort((_,h)=>_.zone?.id?.localeCompare(h.zone?.id)),g=l.members?.length?l.members:[(0,f.ar)()];for(;c.length;){const _=[];let h=c.pop();for(;_.length<g.length&&(!_.length||_.find(v=>v.zone?.id===h.zone?.id));)_.push(h),h=c.pop();_.length<g.length||d.push(_)}return d})),this.subscription("router.bookings",this._router.events.subscribe(l=>{l instanceof N.m2&&!Ne.find(u=>l.url.includes(u))&&this.clearForm()})),this._org.initialised.pipe((0,G.P)(l=>l)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}get favorite_desks(){return this._settings.get("favourite_desks")||[]}newForm(t=new M.$){this._form.next((0,F.PR)(t)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(t),this._options.next({type:this._options.getValue().type})}setView(t){this._view.next(t)}setOptions(t){this._options.next({...this._options.getValue(),...t})}setFeature(t,o){if(!t?.length)return;const i=this._options.getValue()?.features||[];o&&!i.includes(t)&&i.push(t),!o&&i.includes(t)&&i.splice(i.findIndex(r=>r===t),1),this.setOptions({features:i})}resetForm(){this._form.getValue()||this.newForm();const t=this._booking.getValue();this._form.getValue().patchValue({...t||{},...t?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}confirmPost(){var t=this;return(0,Z.Z)(function*(){yield t.checkQuestions();const o=t._options.getValue(),r=t._form.getValue().getRawValue();let m=`Would you like to book the ${o.type} ${r.asset_name} for ${(0,y.Z)(r.date,"dd MMM yyyy")}${r.duration<720?" at "+(0,y.Z)(r.date,"h:mm a"):""}`;o.group&&(m=`${m}.<br>You group members will be assigned desks nearby your selected desk.`);const l=yield(0,f._5)({title:`Book ${o.type}`,content:m,icon:{content:"event_available"}},t._dialog);if("done"!==l?.reason)throw"User cancelled";l.loading("Performing booking request..."),o.group?yield t.postFormForGroup().catch(u=>{throw(0,f.cB)(u),l.close(),u}):yield t.postForm().catch(u=>{throw(0,f.cB)(u),l.close(),u}),l.close()})()}postForm(t=!1){var o=this;return(0,Z.Z)(function*(){const i=o._form.getValue();if(!i)throw"No form for booking";if(!i.valid)throw`Some form fields are invalid. [${(0,f.RD)(i).join(", ")}]`;const r=i.getRawValue();t||(yield o.checkResourceAvailable(r,o._options.getValue().type)),(r.duration>=720||r.all_day)&&i.patchValue({date:(0,Me.Z)(r.date,{hours:11,minutes:59}).valueOf(),duration:720}),o._payments.payment_module&&(yield o._payments.makePayment({type:"space",resource_name:r.asset_name,date:r.date,duration:r.duration,all_day:r.all_day})),o._loading.next("Saving booking");const m=yield(0,b.km)(new M.$({...r,approved:!!o._settings.get("app.bookings.no_approval")})).toPromise();o._loading.next("");const{booking_type:l}=r;return o.clearForm(),i?.patchValue({booking_type:l}),o.last_success=m,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(m)),o.setView("success"),m})()}postFormForGroup(){var t=this;return(0,Z.Z)(function*(){const{members:o,group:i,type:r}=t._options.getValue();if(!i)throw"No group available to book for";const m=o.filter(h=>h.email!==(0,f.ar)().email);if(m.length<=0)throw"No members in your group to book for.";const l=t._form.getValue().value,u=yield t.available_assets.pipe((0,De.q)(1)).toPromise(),d=u.find(h=>h.id===l.asset_id||h.map_id===l.asset_id),c=t._org.levelWithID([d.zone?.id]),g=[d,...yield t._getNearbyResources(c.map_id,l.asset_id,u,m.length)],_=[(0,f.ar)(),...m];yield Promise.all(_.map((h,v)=>t.checkResourceAvailable({...l,asset_id:g[v].map_id||g[v].id,user_email:h.email},r)));for(let h=0;h<_.length;h++){const v=_[h],x=g[h];t._form.getValue().patchValue({...l,user:v,asset_id:x?.id,asset_name:x.name,map_id:x?.map_id||x?.id,description:x.name,zones:x.zone?[x.zone?.parent_id,x.zone?.id]:[]}),t.postForm(!0)}})()}checkQuestions(){var t=this;return(0,Z.Z)(function*(){if(!1!==t._settings.get("app.desks.ignore_questions"))return;const o=t._dialog.open(j);if("done"!==(yield Promise.race([o.componentInstance.event.pipe((0,G.P)(m=>"done"===m.reason)).toPromise(),o.afterClosed().toPromise()]))?.reason)throw"User cancelled";const r=o.componentInstance.form.getRawValue();for(const m in r)if(r[m])throw"User failed questionaire";o.close()})()}checkResourceAvailable({asset_id:t,date:o,duration:i,user_email:r,all_day:m},l){var u=this;return(0,Z.Z)(function*(){i=m?720:i||60;const d=yield(0,b.F2)({period_start:(0,I.Z)(o),period_end:(0,I.Z)(o+60*i*1e3),type:l}).toPromise();if(d.find(g=>g.asset_id===t))throw`${t} is not available at the selected time`;const c=u._settings.get(`app.booking.allowed_daily_${l}_count`)??1;if(c>0&&d.filter(g=>g.user_email===(r||(0,f.ar)()?.email)&&"declined"!==g.status).length>=c){const g=r===(0,f.ar)()?.email;throw`${g?"You":r} already ${g?"have":"has"} a desk booked`}return!0})()}_getNearbyResources(t,o,i,r){return(0,Z.Z)(function*(){const m=[];let l=i.filter(u=>u.id!==o&&u.map_id!==o);for(let u=0;u<r;u++){const d=yield(0,F.gV)(t,o,l.map(c=>c.map_id||c.id));d&&(m.push(i.find(c=>c.id===d||c.map_id===d)),l=l.filter(c=>c.id!==d&&c.map_id!==d))}return m})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(N.F0),e.LFG(f.gb),e.LFG(w.w7),e.LFG(T.uw),e.LFG(Fe.cR))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();s(1022),s(7303),s(207),s(7371)}}]);
//# sourceMappingURL=default-libs_bookings_src_index_ts.js.map