"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_building-manager_building-manager_module_ts"],{65397:(P,y,a)=>{a.r(y),a.d(y,{BuildingManagerModule:()=>At});var u=a(60316),c=a(34456),T=a(26842),R=a(40363),M=a(22168),F=a(68390),f=a(89204),m=a(82333),b=a(12185),d=a(3998),p=a(90521),w=a(42175),j=a(35443),_=a(12587),t=a(68559),v=a(69434),x=a(24950),B=a(87984),G=a(25175),h=a(85060),E=a(41134),S=a(79771);function X(i,r){if(1&i&&(t.j41(0,"mat-option",22),t.EFF(1),t.k0s()),2&i){const e=r.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}function V(i,r){if(1&i&&(t.j41(0,"div",10)(1,"label",20),t.pXf(2,5),t.k0s(),t.j41(3,"mat-form-field",12)(4,"mat-select",21)(5,"mat-option",22),t.EFF(6,"None"),t.k0s(),t.DNE(7,X,2,2,"mat-option",16),t.nI1(8,"async"),t.k0s()()()),2&i){const e=t.XpG(3);t.R7$(5),t.Y8G("value",e.default_parent),t.R7$(2),t.Y8G("ngForOf",t.bMT(8,2,e.region_list))}}function D(i,r){if(1&i&&(t.j41(0,"mat-option",22),t.EFF(1),t.k0s()),2&i){const e=r.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function $(i,r){1&i&&(t.j41(0,"mat-option",23),t.EFF(1," No matching timezones "),t.k0s()),2&i&&t.Y8G("disabled",!0)}function O(i,r){if(1&i&&(t.j41(0,"form",8),t.DNE(1,V,9,4,"div",9),t.nI1(2,"async"),t.j41(3,"div",10)(4,"label",11),t.pXf(5,2),t.k0s(),t.j41(6,"mat-form-field",12),t.nrm(7,"input",13),t.k0s()(),t.j41(8,"div",10)(9,"label",11),t.pXf(10,3),t.k0s(),t.j41(11,"mat-form-field",12)(12,"app-icon",14),t.EFF(13,"search"),t.k0s(),t.nrm(14,"input",15),t.k0s(),t.j41(15,"mat-autocomplete",null,1),t.DNE(17,D,2,2,"mat-option",16)(18,$,2,1,"mat-option",17),t.k0s()(),t.j41(19,"div",10)(20,"label",18),t.pXf(21,4),t.k0s(),t.j41(22,"mat-form-field",12),t.nrm(23,"input",19),t.k0s()()()),2&i){let e;const o=t.sdS(16),n=t.XpG(2);t.Y8G("formGroup",n.form),t.R7$(),t.Y8G("ngIf",null==(e=t.bMT(2,5,n.region_list))?null:e.length),t.R7$(13),t.Y8G("matAutocomplete",o),t.R7$(3),t.Y8G("ngForOf",n.filtered_timezones),t.R7$(),t.Y8G("ngIf",!n.timezones.length)}}function U(i,r){if(1&i&&(t.qex(0),t.DNE(1,O,24,7,"form",7),t.bVm()),2&i){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.form)}}function z(i,r){1&i&&(t.j41(0,"div",24),t.nrm(1,"mat-spinner",25),t.j41(2,"p",26),t.EFF(3,"Saving building..."),t.k0s()())}let Y=(()=>{class i extends m.Tv{get default_parent(){return this._org.organisation.id}constructor(e){super(),this._org=e,this.building=null,this.save=0,this.loading=!1,this.loadingChange=new t.bkB,this.done=new t.bkB,this.timezones=[],this.filtered_timezones=[],this.region_list=this._org.region_list,this.form=new c.gE({id:new c.MJ(""),parent_id:new c.MJ(this._org.organisation.id,[c.k0.required]),display_name:new c.MJ("",[c.k0.required]),timezone:new c.MJ(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),location:new c.MJ("")})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(()=>this._updateTimezoneList())),this.building&&this.form.patchValue(this.building)}ngOnChanges(e){e.building&&this.building&&this.form.patchValue(this.building),e.save&&this.save&&this.saveChanges()}saveChanges(){var e=this;return(0,f.A)(function*(){if(e.form.patchValue({parent_id:e.form.value.parent_id||e._org.organisation.id}),!e.form.valid)return(0,m.UG)(`Some form fields are invalid. [${(0,m.F7)(e.form).join(", ")}]`);const o=e.form.getRawValue();e.loading=!0,e.loadingChange.emit(!0);const n={...o,tags:["building"],name:`BLD ${(0,d.kup)().description} ${o.display_name}`},s=yield(o.id?(0,d.G5B)(o.id,n):(0,d.aP8)(n)).toPromise().catch(l=>{throw(0,m.UG)(`Error saving building: ${l.message||l.error||l}`),e.loading=!1,e.loadingChange.emit(!1),l});(0,m.VX)("Successfully saved building."),e.loading=!1,e.loadingChange.emit(!1),e.done.emit(s)})()}_updateTimezoneList(){const e=this.form?.value?.timezone||"";this.timezones=m.Rd,this.filtered_timezones=this.timezones.filter(o=>o.toLowerCase().includes(e.toLowerCase()))}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(b.yb))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["building-form"]],inputs:{building:"building",save:"save",loading:"loading"},outputs:{loadingChange:"loadingChange",done:"done"},features:[t.Vt3,t.OA$],decls:3,vars:2,consts:()=>{let e,o,n,s;return e=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,o=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,n=$localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `,s=$localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `,[["load_state",""],["auto","matAutocomplete"],e,o,n,s,[4,"ngIf","ngIfElse"],["building","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["building","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],["appearance","outline"],["matInput","","name","display-name","placeholder","Display Name","formControlName","display_name"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","address"],["matInput","","name","address","placeholder","Location or Address...","formControlName","location"],["for","region"],["name","region","formControlName","parent_id","placeholder","Select Region..."],[3,"value"],[3,"disabled"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(o,n){if(1&o&&t.DNE(0,U,2,1,"ng-container",6)(1,z,4,0,"ng-template",null,0,t.C5r),2&o){const s=t.sdS(2);t.Y8G("ngIf",!n.loading)("ngIfElse",s)}},dependencies:[u.Sq,u.bT,c.qT,c.me,c.BC,c.cb,x.rl,x.JW,B.fg,G.VO,h.wT,E.LG,S.$3,S.pN,c.j4,c.JD,v.R,u.Jj]})}return i})();function J(i,r){1&i&&(t.j41(0,"button",4)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function H(i,r){if(1&i){const e=t.RV6();t.j41(0,"footer",5)(1,"button",6),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.save())}),t.EFF(2,"Save"),t.k0s()()}}let Z=(()=>{class i{constructor(e,o){this._data=e,this._dialog_ref=o,this.loading=!1,this.save_state=0,this.building=this._data,this.close=n=>this._dialog_ref.close(n),this.save=()=>this.save_state=Date.now()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(_.Vh),t.rXU(_.CP))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["building-modal"]],decls:7,vars:6,consts:[["btn","","icon","","mat-dialog-close","",4,"ngIf"],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],[3,"loadingChange","done","building","save","loading"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"header")(1,"h2"),t.EFF(2),t.k0s(),t.DNE(3,J,3,0,"button",0),t.k0s(),t.j41(4,"main",1)(5,"building-form",2),t.mxI("loadingChange",function(l){return t.DH7(n.loading,l)||(n.loading=l),l}),t.bIt("done",function(l){return n.close(l)}),t.k0s()(),t.DNE(6,H,3,0,"footer",3)),2&o&&(t.R7$(2),t.SpI("",n.building.id?"Edit":"Add"," Building"),t.R7$(),t.Y8G("ngIf",!n.loading),t.R7$(2),t.Y8G("building",n.building)("save",n.save_state),t.R50("loading",n.loading),t.R7$(),t.Y8G("ngIf",!n.loading))},dependencies:[u.bT,_.tx,v.R,Y]})}return i})();var K=a(16252),N=a(53388),W=a(83476);function Q(i,r){1&i&&(t.j41(0,"button",6)(1,"app-icon",7),t.EFF(2,"close"),t.k0s()())}function q(i,r){if(1&i){const e=t.RV6();t.j41(0,"main",8)(1,"label"),t.EFF(2,"Notify Before Event"),t.k0s(),t.j41(3,"a-duration-field",9),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.settings.time_before,n)||(s.settings.time_before=n),t.Njj(n)}),t.k0s(),t.j41(4,"label"),t.EFF(5,"Cancel Event After"),t.k0s(),t.j41(6,"a-duration-field",9),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.settings.time_after,n)||(s.settings.time_after=n),t.Njj(n)}),t.k0s(),t.j41(7,"label"),t.EFF(8,"Event Types"),t.k0s(),t.j41(9,"mat-form-field",10)(10,"mat-select",11),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.settings.resources,n)||(s.settings.resources=n),t.Njj(n)}),t.j41(11,"mat-option",12),t.EFF(12," Desks "),t.k0s(),t.j41(13,"mat-option",13),t.EFF(14," Visitors "),t.k0s(),t.j41(15,"mat-option",14),t.EFF(16," Parking "),t.k0s()()()()}if(2&i){const e=t.XpG();t.R7$(3),t.Y8G("min",0),t.R50("ngModel",e.settings.time_before),t.R7$(3),t.Y8G("min",0),t.R50("ngModel",e.settings.time_after),t.R7$(4),t.R50("ngModel",e.settings.resources)}}function tt(i,r){if(1&i){const e=t.RV6();t.j41(0,"footer",15)(1,"button",16),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.save())}),t.EFF(2,"Save"),t.k0s()()}}function et(i,r){if(1&i&&(t.j41(0,"main",17),t.nrm(1,"mat-spinner",18),t.j41(2,"p"),t.EFF(3),t.k0s()()),2&i){const e=t.XpG();t.R7$(),t.Y8G("diameter",48),t.R7$(2),t.JRh(e.loading)}}let nt=(()=>{class i{constructor(e,o,n){this._id=e,this._dialog_ref=o,this._settings=n,this.loading="",this.id=this._id,this.settings={}}ngOnInit(){this.loadSettings(this.id)}loadSettings(e){var o=this;return(0,f.A)(function*(){o.loading="Loading auto-release settings for building...",o.settings={};const s=(yield(0,d.smE)({parent_id:e}).pipe((0,j.T)(l=>l.data)).toPromise()).find(l=>l.encryption_level===d.cor.None);if(s){try{o.settings=N.Hh(s.settings_string)?.auto_release||{}}catch{}o.loading=""}})()}save(){var e=this;return(0,f.A)(function*(){e.loading="Saving changes to auto-release settings...";let n=(yield(0,d.smE)({parent_id:e.id}).pipe((0,j.T)(I=>I.data)).toPromise()).find(I=>I.encryption_level===d.cor.None);n||(n=new d.ZOi({parent_id:e.id,encryption_level:d.cor.None,settings_string:""}));let s={};try{s=N.Hh(n.settings_string)||{}}catch{}n.settings_string=N.Bh({...s,auto_release:e.settings}),n.id?yield(0,d.Xx7)(n.id,n).toPromise():yield(0,d.PJ4)(n).toPromise();const l=e._settings.get("app.workplace_metadata_key")||"workplace_app",C=(yield(0,d.bpY)(e.id,l).toPromise()).details||{};C.auto_release=e.settings,yield(0,d.D58)(e.id,{name:l,details:C,description:""}).toPromise(),(0,m.VX)("Auto-release settings updated"),e.loading="",e._dialog_ref.close()})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(_.Vh),t.rXU(_.CP),t.rXU(m.h$))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["auto-release-modal"]],decls:8,vars:4,consts:[["load_state",""],[1,"flex","items-center","justify-between","border-b","border-gray-300","p-4"],[1,"text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","px-2 w-[20rem]",4,"ngIf","ngIfElse"],["class","p-4 flex justify-end",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"text-2xl"],[1,"px-2","w-[20rem]"],[3,"ngModelChange","min","ngModel"],["appearance","outline",1,"w-full"],["multiple","","placeholder","Set Event Types...",3,"ngModelChange","ngModel"],["value","desk"],["value","visitor"],["value","parking"],[1,"p-4","flex","justify-end"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","p-32","space-y-2"],[3,"diameter"]],template:function(o,n){if(1&o&&(t.j41(0,"header",1)(1,"h3",2),t.EFF(2,"Auto-Release Settings"),t.k0s(),t.DNE(3,Q,3,0,"button",3),t.k0s(),t.DNE(4,q,17,5,"main",4)(5,tt,3,0,"footer",5)(6,et,4,2,"ng-template",null,0,t.C5r)),2&o){const s=t.sdS(7);t.R7$(3),t.Y8G("ngIf",!n.loading),t.R7$(),t.Y8G("ngIf",!n.loading)("ngIfElse",s),t.R7$(),t.Y8G("ngIf",!n.loading)}},dependencies:[u.bT,c.BC,c.vS,x.rl,G.VO,h.wT,E.LG,_.tx,h.r6,W.y,v.R]})}return i})();var it=a(97024);function ot(i,r){1&i&&(t.j41(0,"button",6)(1,"app-icon",7),t.EFF(2,"close"),t.k0s()())}function st(i,r){if(1&i){const e=t.RV6();t.j41(0,"main",8)(1,"mat-form-field",9)(2,"textarea",10),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.induction_details,n)||(s.induction_details=n),t.Njj(n)}),t.k0s()(),t.j41(3,"mat-checkbox",11),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.is_enabled,n)||(s.is_enabled=n),t.Njj(n)}),t.EFF(4," Enable Induction for Building "),t.k0s()()}if(2&i){const e=t.XpG();t.R7$(2),t.R50("ngModel",e.induction_details),t.R7$(),t.R50("ngModel",e.is_enabled)}}function at(i,r){if(1&i){const e=t.RV6();t.j41(0,"footer",12)(1,"button",13),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.save())}),t.EFF(2,"Save"),t.k0s()()}}function lt(i,r){if(1&i&&(t.j41(0,"main",14),t.nrm(1,"mat-spinner",15),t.j41(2,"p"),t.EFF(3),t.k0s()()),2&i){const e=t.XpG();t.R7$(),t.Y8G("diameter",48),t.R7$(2),t.JRh(e.loading)}}let rt=(()=>{class i{constructor(e,o,n,s){this._zone_id=e,this._settings=o,this._org=n,this._dialog_ref=s,this.loading="",this.induction_details="",this.is_enabled=!1,this.settings={}}ngOnInit(){this._zone_id&&this.loadSettings()}loadSettings(){var e=this;return(0,f.A)(function*(){e.loading="Loading induction settings for building...";const o=e._settings.get("app.visitor_kiosk_app")||"visitor-kiosk_app";e.settings={};const[n,s,l]=yield Promise.all([yield(0,d.bpY)(e._zone_id,o).toPromise(),yield(0,d.bpY)(e._org.organisation.id,o).toPromise(),yield(0,d.bpY)(e._org.organisation.id,"settings").toPromise()]);e.settings={...l.details,...s.details,...n.details},e.induction_details=e.settings.induction_details||"",e.is_enabled=e.settings.induction_enabled??!1,e.loading=""})()}save(){var e=this;return(0,f.A)(function*(){e.loading="Saving induction settings...";const o=e._settings.get("app.visitor_kiosk_app")||"visitor-kiosk_app";e._dialog_ref.disableClose=!0;const n=yield(0,d.bpY)(e._zone_id,o).toPromise(),s={...n.details,induction_details:e.induction_details,induction_enabled:e.is_enabled},l=yield(0,d.D58)(e._zone_id,{name:n.name||o,description:n.description||"",details:s}).toPromise().catch(g=>{console.error(g),(0,m.UG)("Error saving induction settings")});e.loading="",l&&((0,m.VX)("Successfully saved induction settings"),e._dialog_ref.close())})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(_.Vh),t.rXU(m.h$),t.rXU(b.yb),t.rXU(_.CP))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["induction-settings-modal"]],decls:8,vars:4,consts:[["load_state",""],[1,"flex","items-center","justify-between","border-b","border-gray-300","p-4"],[1,"text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["class","px-4 pb-4 flex justify-end",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"text-2xl"],[1,"p-4","flex","flex-col","space-y-2"],["appearance","outline",1,"w-[36rem]","max-w-[80vw]","h-[50vh]"],["matInput","","placeholder","Induction Details",1,"w-[34rem]","max-w-[calc(80vw-2rem)]","h-[calc(50vh-2rem)]","resize-none",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[1,"px-4","pb-4","flex","justify-end"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","p-32","space-y-2"],[3,"diameter"]],template:function(o,n){if(1&o&&(t.j41(0,"header",1)(1,"h3",2),t.EFF(2,"Induction Settings"),t.k0s(),t.DNE(3,ot,3,0,"button",3),t.k0s(),t.DNE(4,st,5,2,"main",4)(5,at,3,0,"footer",5)(6,lt,4,2,"ng-template",null,0,t.C5r)),2&o){const s=t.sdS(7);t.R7$(3),t.Y8G("ngIf",!n.loading),t.R7$(),t.Y8G("ngIf",!n.loading)("ngIfElse",s),t.R7$(),t.Y8G("ngIf",!n.loading)}},dependencies:[u.bT,c.me,c.BC,c.vS,x.rl,B.fg,it.So,E.LG,_.tx,h.r6,v.R]})}return i})();var dt=a(80640);function ct(i,r){if(1&i){const e=t.RV6();t.j41(0,"div",6)(1,"input",7),t.mxI("ngModelChange",function(n){const s=t.eBV(e).index,l=t.XpG();return t.DH7(l.item_list[s].name,n)||(l.item_list[s].name=n),t.Njj(n)}),t.k0s(),t.j41(2,"input",8),t.mxI("ngModelChange",function(n){const s=t.eBV(e).index,l=t.XpG();return t.DH7(l.item_list[s].email,n)||(l.item_list[s].email=n),t.Njj(n)}),t.k0s(),t.j41(3,"button",9),t.bIt("click",function(){const n=t.eBV(e).index,s=t.XpG();return t.Njj(s.item_list.splice(n,1))}),t.j41(4,"app-icon"),t.EFF(5,"close"),t.k0s()()()}if(2&i){const e=r.index,o=t.XpG();t.R7$(),t.R50("ngModel",o.item_list[e].name),t.R7$(),t.R50("ngModel",o.item_list[e].email)}}let mt=(()=>{class i{constructor(e,o,n){this._bld_id=e,this._settings=o,this._dialog_ref=n,this.item_list=[],this.loading=!1,this.identify=(s,l)=>s}ngOnInit(){var e=this;return(0,f.A)(function*(){const o=e._settings.get("app.workplace_metadata_key")||"workplace_app",s=(yield(0,d.bpY)(e._bld_id,o).toPromise())?.details?.support_issue_types||[];e.item_list=s})()}save(){var e=this;return(0,f.A)(function*(){const o=e._settings.get("app.workplace_metadata_key")||"workplace_app";e.loading=!0;const n=e.item_list.filter(g=>g),s=yield(0,d.bpY)(e._bld_id,o).toPromise();s.details.support_issue_types=n;const l=yield(0,d.D58)(e._bld_id,{name:o,details:s.details,description:s.description||""}).toPromise().catch(g=>{(0,m.UG)(`Failed to save issue types. ${g}`)});e.loading=!1,l&&e._dialog_ref.close()})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(_.Vh),t.rXU(m.h$),t.rXU(_.CP))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["item-list-modal"]],decls:13,vars:2,consts:[["icon","","matRipple","","mat-dialog-close",""],[1,"w-[36rem]","overflow-auto","h-[50vh]","p-2","space-y-2"],["btn","","matRipple","",1,"w-full",3,"click"],["class","w-full flex items-center space-x-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","justify-end","p-2","border-t","border-base-200"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"w-full","flex","items-center","space-x-2"],["type","text","placeholder","Issue Name",1,"flex-1","border","border-base-200","px-4","py-3","rounded",3,"ngModelChange","ngModel"],["type","email","placeholder","Issue Email",1,"flex-[2]","border","border-base-200","px-4","py-3","rounded",3,"ngModelChange","ngModel"],["icon","","matRipple","","matTooltip","Remove Item",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"header")(1,"h2"),t.EFF(2,"Support Request Issue Types"),t.k0s(),t.j41(3,"button",0)(4,"app-icon"),t.EFF(5,"close"),t.k0s()()(),t.j41(6,"main",1)(7,"button",2),t.bIt("click",function(){return n.item_list.push({name:"",email:""})}),t.EFF(8," Add Item "),t.k0s(),t.DNE(9,ct,6,2,"div",3),t.k0s(),t.j41(10,"footer",4)(11,"button",5),t.bIt("click",function(){return n.save()}),t.EFF(12,"Save"),t.k0s()()),2&o&&(t.R7$(9),t.Y8G("ngForOf",n.item_list)("ngForTrackBy",n.identify))},dependencies:[u.Sq,c.me,c.BC,c.vS,dt.oV,_.tx,h.r6,v.R]})}return i})(),L=(()=>{class i{constructor(e,o){this._org=e,this._dialog=o,this._options=new p.t({}),this._change=new p.t(0),this.options=this._options.asObservable(),this.filtered_buildings=(0,w.zV)([this._org.region_list,this._org.building_list,this._options,this._org.initialised]).pipe((0,j.T)(([n,s,l])=>{l.zone&&(s=s.filter(g=>g.parent_id===l.zone)),l.search&&(s=s.filter(g=>g.name.toLowerCase().includes(l.search.toLowerCase())));for(const g of s){const C=n.find(I=>I.id===g.parent_id);C&&(g.region=C.display_name||C.name),g.level_count=this._org.levelsForBuilding(g)?.length||0}return s}))}setFilters(e){this._options.next({...this._options.getValue(),...e})}setSearchString(e){this._options.next({...this._options.getValue(),search:e})}editBuilding(e=new d.kMc){this._dialog.open(Z,{data:e}).afterClosed().subscribe(n=>{n&&this._org.addZone(n)})}editBuildingMetadata(e=new d.kMc){this._dialog.open(K.j,{data:{zone:e}}).afterClosed().subscribe(n=>{n&&setTimeout(()=>location.reload(),300)})}setAutoRelease(e){e?.id&&this._dialog.open(nt,{data:e.id})}setInduction(e){e?.id&&this._dialog.open(rt,{data:e.id})}setSupportIssueTypes(e){e?.id&&this._dialog.open(mt,{data:e.id})}removeBuilding(e){var o=this;return(0,f.A)(function*(){const n=yield(0,m.GE)({title:"Remove Building",content:`Are you sure you want to remove the building "${e.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},o._dialog);if("done"!==n.reason)return n.close();n.loading("Removing building..."),yield(0,d.ZhK)(e.id).toPromise(),o._org.removeZone({id:e.id,tags:["building"]}),(0,m.VX)("Successfully removed building."),n.close()})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.KVO(b.yb),t.KVO(_.bZ))};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var pt=a(45189),gt=a(96843),_t=a(52352),k=a(31034),ut=a(88328),ft=a(93208),ht=a(23666);const bt=i=>({key:"display_name",name:"Building Name",content:i}),vt=()=>({key:"location",name:"Location",size:"16rem"}),Ct=i=>({key:"timezone",name:"Timezone",size:"15rem",content:i}),It=()=>({key:"region",name:"Region",size:"12rem"}),yt=()=>({key:"level_count",name:"Levels",size:"6rem"}),xt=i=>({key:"actions",name:" ",content:i,size:"3rem",sortable:!1}),Rt=(i,r,e,o,n,s)=>[i,r,e,o,n,s];function Mt(i,r){if(1&i){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.copyToClipboard(n.id))}),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.j41(3,"div",11),t.EFF(4),t.k0s()()}if(2&i){const e=r.row,o=r.data;t.R7$(2),t.JRh(o),t.R7$(2),t.SpI(" ",e.id," ")}}function Ft(i,r){if(1&i&&(t.j41(0,"div",12),t.EFF(1),t.k0s()),2&i){const e=r.data;t.R7$(),t.JRh(e)}}function jt(i,r){if(1&i&&(t.EFF(0),t.nI1(1,"level"),t.nI1(2,"level")),2&i){let e;const o=r.data;t.SpI(" ",(null==(e=t.bMT(1,1,o))?null:e.display_name)||(null==(e=t.bMT(2,3,o))?null:e.name)," ")}}function Et(i,r){if(1&i&&t.nrm(0,"img",15),2&i){const e=t.XpG().data;t.Y8G("source",e[0])}}function Nt(i,r){1&i&&(t.j41(0,"span",16),t.EFF(1,"No Images"),t.k0s())}function kt(i,r){if(1&i&&t.DNE(0,Et,1,1,"img",13)(1,Nt,2,0,"span",14),2&i){const e=r.data;t.Y8G("ngIf",e.length),t.R7$(),t.Y8G("ngIf",!e.length)}}function Tt(i,r){if(1&i){const e=t.RV6();t.j41(0,"div",17)(1,"button",18)(2,"app-icon"),t.EFF(3,"more_vert"),t.k0s()(),t.j41(4,"mat-menu",null,5)(6,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.editBuildingMetadata(n))}),t.j41(7,"div",20)(8,"app-icon",21),t.EFF(9,"edit_square"),t.k0s(),t.j41(10,"span"),t.EFF(11,"App Configuration"),t.k0s()()(),t.j41(12,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.editBuilding(n))}),t.j41(13,"div",20)(14,"app-icon",21),t.EFF(15,"edit"),t.k0s(),t.j41(16,"span"),t.EFF(17,"Edit Building"),t.k0s()()(),t.j41(18,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.setAutoRelease(n))}),t.j41(19,"div",20)(20,"app-icon",22),t.EFF(21," release_alert "),t.k0s(),t.j41(22,"span"),t.EFF(23,"Auto-release Settings"),t.k0s()()(),t.j41(24,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.setInduction(n))}),t.j41(25,"div",20)(26,"app-icon",22),t.EFF(27," badge "),t.k0s(),t.j41(28,"span"),t.EFF(29,"Induction Settings"),t.k0s()()(),t.j41(30,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.setSupportIssueTypes(n))}),t.j41(31,"div",20)(32,"app-icon",22),t.EFF(33," support_agent "),t.k0s(),t.j41(34,"span"),t.EFF(35,"Support Request Types"),t.k0s()()(),t.j41(36,"button",19),t.bIt("click",function(){const n=t.eBV(e).row,s=t.XpG();return t.Njj(s.removeBuilding(n))}),t.j41(37,"div",23)(38,"app-icon",24),t.EFF(39," delete "),t.k0s(),t.j41(40,"span"),t.EFF(41,"Delete Building"),t.k0s()()()()()}if(2&i){const e=t.sdS(5);t.R7$(),t.Y8G("matMenuTriggerFor",e)}}let Bt=(()=>{class i{constructor(e,o,n){this._manager=e,this._settings=o,this._clipboard=n,this.buildings=this._manager.filtered_buildings,this.settings={},this.editBuilding=s=>this._manager.editBuilding(s),this.editBuildingMetadata=s=>this._manager.editBuildingMetadata(s),this.removeBuilding=s=>this._manager.removeBuilding(s),this.setAutoRelease=s=>this._manager.setAutoRelease(s),this.setInduction=s=>this._manager.setInduction(s),this.setSupportIssueTypes=s=>this._manager.setSupportIssueTypes(s),this.copyToClipboard=s=>{this._clipboard.copy(s)&&(0,m.VX)("Building ID copied to clipboard.")}}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(L),t.rXU(m.h$),t.rXU(_t.B0))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["building-list"]],decls:13,vars:19,consts:[["name_template",""],["timezone_template",""],["level_template",""],["image_template",""],["action_template",""],["menu","matMenu"],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No Buildings",1,"min-w-[72rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],[1,"p-4","font-mono","text-sm"],["auth","","class","max-h-[3rem] max-w-[8rem]",3,"source",4,"ngIf"],["class","opacity-30",4,"ngIf"],["auth","",1,"max-h-[3rem]","max-w-[8rem]",3,"source"],[1,"opacity-30"],[1,"w-full","flex","justify-end","space-x-2"],["icon","","matRipple","",1,"h-12","w-12","rounded",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-xl"],["className","material-symbols-rounded",1,"text-xl"],[1,"flex","items-center","space-x-2","text-red-500"],[1,"text-error","text-xl"]],template:function(o,n){if(1&o&&(t.j41(0,"div",6),t.nrm(1,"simple-table",7)(2,"div",8),t.k0s(),t.DNE(3,Mt,5,2,"ng-template",null,0,t.C5r)(5,Ft,2,1,"ng-template",null,1,t.C5r)(7,jt,3,5,"ng-template",null,2,t.C5r)(9,kt,2,2,"ng-template",null,3,t.C5r)(11,Tt,42,1,"ng-template",null,4,t.C5r)),2&o){const s=t.sdS(4),l=t.sdS(6),g=t.sdS(12);t.R7$(),t.Y8G("data",n.buildings)("columns",t.l4e(12,Rt,t.eq3(3,bt,s),t.lJ4(5,vt),t.eq3(6,Ct,l),t.lJ4(8,It),t.lJ4(9,yt),t.eq3(10,xt,g)))("sortable",!0)}},dependencies:[u.bT,k.kk,k.fb,k.Cp,h.r6,v.R,ut.O,ft.U,ht.D]})}return i})();const Gt=["app-building-manager",""];let A=(()=>{class i{constructor(e){this._state=e,this.newBuilding=()=>this._state.editBuilding()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(L))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["","app-building-manager",""]],attrs:Gt,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","px-8","pt-4","pb-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",1,"w-40",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(o,n){1&o&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1)(4,"header",2)(5,"h2",3),t.EFF(6,"Building Management"),t.k0s(),t.j41(7,"button",4),t.bIt("click",function(){return n.newBuilding()}),t.EFF(8," Add Building "),t.k0s()(),t.nrm(9,"building-list",5),t.k0s()())},dependencies:[pt.S,gt.c,h.r6,Bt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=building-manager.component.ts-angular-inline--188.css.map*/"]})}return i})();var St=a(12772);const Lt=[{path:"",component:A},{path:"new",component:A}];let At=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.$C({type:i});static#n=this.\u0275inj=t.G2t({imports:[u.MD,c.YN,R.r,M.lx,F.kR,St.YN,T.iI.forChild(Lt)]})}return i})()},68390:(P,y,a)=>{a.d(y,{g8:()=>M,kR:()=>u.k,Gp:()=>F.Gp,N8:()=>b.N8,SZ:()=>b.SZ,is:()=>m.is});var u=a(11081),R=(a(11543),a(7282),a(67450));class M{constructor(p={}){this.type=p.type||p.location||"other",this.position=p.position||p.map_id||p.asset_id||{x:p.x/p.map_width||0,y:p.y/p.map_height||0},this.variance=p.variance||0,this.last_seen=p.last_seen||(0,R.A)(new Date),this.level=p.level,this.building=p.building,this.at_location=!!p.at_location,this.coordinates_from=p.coordinates_from||"top-left"}}var F=a(93693),m=(a(24129),a(86039)),b=a(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_building-manager_building-manager_module_ts.js.map