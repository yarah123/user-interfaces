"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_region-manager_region-manager_module_ts"],{555:(ie,h,i)=>{i.r(h),i.d(h,{RegionManagerModule:()=>ne});var f=i(6477),l=i(9542),Z=i(647),y=i(3045),E=i(1790),O=i(5533),R=i(1670),v=i(5912),m=i(2182),C=i(4505),I=i(7716),b=i(6942),g=i(7486),d=i(9743),e=i(6839),M=i(8750),G=i(380),u=i(7728),P=i(5312),x=i(2556),N=i(5306);function L(n,s){1&n&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function S(n,s){1&n&&(e.TgZ(0,"div",9)(1,"label",10),e.SDv(2,18),e.qZA(),e.TgZ(3,"mat-form-field",12),e._UZ(4,"input",19),e.qZA()())}function w(n,s){if(1&n&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function z(n,s){1&n&&(e.TgZ(0,"mat-option",21),e._uU(1," No matching timezones "),e.qZA()),2&n&&e.Q6J("disabled",!0)}function U(n,s){if(1&n&&(e.TgZ(0,"form",7),e.YNc(1,S,5,0,"div",8),e.TgZ(2,"div",9)(3,"label",10),e.SDv(4,11),e.qZA(),e.TgZ(5,"mat-form-field",12)(6,"app-icon",13),e._uU(7,"search"),e.qZA(),e._UZ(8,"input",14),e.qZA(),e.TgZ(9,"mat-autocomplete",null,15),e.YNc(11,w,2,2,"mat-option",16),e.YNc(12,z,2,1,"mat-option",17),e.qZA()()()),2&n){const t=e.MAs(10),o=e.oxw(2);e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("ngIf",o.form.controls.display_name),e.xp6(7),e.Q6J("matAutocomplete",t),e.xp6(3),e.Q6J("ngForOf",o.filtered_timezones),e.xp6(1),e.Q6J("ngIf",!o.timezones.length)}}function J(n,s){if(1&n&&(e.TgZ(0,"main",5),e.YNc(1,U,13,5,"form",6),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form)}}function $(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"footer",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.save())}),e._uU(2,"Save"),e.qZA()()}}function D(n,s){1&n&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.TgZ(2,"p",26),e._uU(3,"Saving region..."),e.qZA()())}let F=(()=>{class n extends d.cx{constructor(t,o,a){super(),this._org=t,this._data=o,this._dialog_ref=a,this.loading=!1,this.building_list=this._org.building_list,this.timezones=[],this.filtered_timezones=[],this.form=new l.cw({id:new l.NI(this._data?.id||""),display_name:new l.NI(this._data?.display_name||"",[l.kI.required]),timezone:new l.NI(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),parent_id:new l.NI(this._org.organisation.id)})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:t})=>this.filtered_timezones=this.timezones.filter(o=>o.toLowerCase().includes(t.toLowerCase()))))}save(){var t=this;return(0,R.Z)(function*(){if(!t.form.valid)return(0,d.cB)(`Some form fields are invalid. [${(0,d.RD)(t.form).join(", ")}]`);const o=t.form.getRawValue();o.tags=["region"],t.loading=!0;const a=yield(o.id?(0,m.BfP)(o.id,{...o,name:`REGION ${(0,m.N9E)().description} ${o.display_name}`}):(0,m.ri3)({...o,name:`REGION ${(0,m.N9E)().description} ${o.display_name}`})).toPromise().catch();a.id&&t._dialog_ref.close(a),t.loading=!1})()}_updateTimezoneList(){const t=this.form?.value?.timezone||"";this.timezones=d.sM,this.filtered_timezones=this.timezones.filter(o=>o.toLowerCase().includes(t.toLowerCase()))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.w7),e.Y36(g.WI),e.Y36(g.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["region-modal"]],features:[e.qOj],decls:8,vars:5,consts:function(){let s,t,o;return s=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,t=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,o=$localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`,[["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-gray-200",4,"ngIf"],["load_state",""],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],s,["appearance","outline"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],t,["matInput","","name","display-name","placeholder",o,"formControlName","display_name"],[3,"value"],[3,"disabled"],[1,"p-2","flex","justify-end","border-t","border-gray-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,L,3,0,"button",0),e.qZA(),e.YNc(4,J,2,1,"main",1),e.YNc(5,$,3,0,"footer",2),e.YNc(6,D,4,0,"ng-template",null,3,e.W1O)),2&t){const a=e.MAs(7);e.xp6(2),e.hij("",o.form.value.id?"Edit":"Add"," Region"),e.xp6(1),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading)("ngIfElse",a),e.xp6(1),e.Q6J("ngIf",!o.loading)}},dependencies:[f.sg,f.O5,l._Y,l.Fj,l.JJ,l.JL,M.KE,M.qo,G.Nt,u.ey,P.Ou,g.ZT,x.XC,x.ZL,l.sg,l.u,N.o]}),n})();var Y=i(5328);let T=(()=>{class n{constructor(t,o){this._org=t,this._dialog=o,this._options=new C.X({}),this._change=new C.X(0),this.options=this._options.asObservable(),this.filtered_regions=(0,I.aj)([this._org.building_list,this._org.region_list,this._options]).pipe((0,b.U)(([a,r,c])=>{c.search&&(r=r.filter(p=>p.name.toLowerCase().includes(c.search.toLowerCase())));for(const p of r)p.building_count=a.filter(oe=>oe.parent_id===p.id).length;return r}))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editRegion(t=new m.TT8){this._dialog.open(F,{data:t}).afterClosed().subscribe(a=>{a&&this._org.addZone(a)})}editRegionMetadata(t=new m.TT8){this._dialog.open(Y.K,{data:{zone:t}}).afterClosed().subscribe(a=>{a&&setTimeout(()=>location.reload(),300)})}removeRegion(t){var o=this;return(0,R.Z)(function*(){const a=yield(0,d._5)({title:"Remove Building",content:`Are you sure you want to remove the building "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},o._dialog);if("done"!==a.reason)return a.close();a.loading("Removing building..."),yield(0,m.Jwl)(t.id).toPromise(),o._org.removeZone({id:t.id,tags:["region"]}),(0,d.t5)("Successfully removed building."),a.close()})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.w7),e.LFG(g.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Q=i(6866),j=i(3320),_=i(9314),X=i(1110);function B(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",3)(1,"button",4)(2,"app-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,5)(6,"button",6),e.NdJ("click",function(){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.editRegionMetadata(r))}),e.TgZ(7,"div",7)(8,"app-icon"),e._uU(9,"edit_square"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"App Configuration"),e.qZA()()(),e.TgZ(12,"button",6),e.NdJ("click",function(){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.editRegion(r))}),e.TgZ(13,"div",7)(14,"app-icon"),e._uU(15,"edit"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Edit Region"),e.qZA()()(),e.TgZ(18,"button",6),e.NdJ("click",function(){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.removeRegion(r))}),e.TgZ(19,"div",8)(20,"app-icon"),e._uU(21,"delete"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Delete Region"),e.qZA()()()()()}if(2&n){const t=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",t)}}const K=function(){return["display_name","building_count","actions"]},H=function(){return["Name","Buildings"," "]},V=function(){return["flex","10r","3.75r"]},q=function(n){return{actions:n}};let W=(()=>{class n{constructor(t){this._manager=t,this.regions=this._manager.filtered_regions,this.editRegion=o=>this._manager.editRegion(o),this.removeRegion=o=>this._manager.removeRegion(o),this.editMetadata=o=>this._manager.editRegionMetadata(o)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["region-list"]],decls:4,vars:10,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No regions",1,"block","min-w-[32rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["action_template",""],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"flex","items-center","space-x-2","text-red-500"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,B,24,1,"ng-template",null,2,e.W1O)),2&t){const a=e.MAs(3);e.xp6(1),e.Q6J("dataSource",o.regions)("columns",e.DdM(5,K))("display_column",e.DdM(6,H))("column_size",e.DdM(7,V))("template",e.VKq(8,q,a))}},dependencies:[_.VK,_.OP,_.p6,u.wG,N.o,X.C]}),n})();const k=["app-region-manager",""];let A=(()=>{class n{constructor(t){this._state=t,this.newRegion=()=>this._state.editRegion()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-region-manager",""]],attrs:k,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","px-4","py-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(t,o){1&t&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"header",2)(5,"h2",3),e._uU(6,"Region Management"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.newRegion()}),e._uU(8," Add Region "),e.qZA()(),e._UZ(9,"region-list",5),e.qZA()())},dependencies:[Q.O,j.u,u.wG,W],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=region-manager.component.ts-angular-inline--180.css.map*/"]}),n})();var ee=i(1031);const te=[{path:"",component:A},{path:"new",component:A}];let ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,l.u5,y.v,E.YR,O.PP,ee.Hi,Z.Bz.forChild(te)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_region-manager_region-manager_module_ts.js.map