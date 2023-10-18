"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_points_points_module_ts"],{8024:(Ue,M,a)=>{a.r(M),a.d(M,{PointsModule:()=>Oe});var p=a(6477),c=a(9542),I=a(1031),m=a(2128),d=a(647),S=a(3045),T=a(5912),P=a(1670),u=a(9743),q=a(4505),w=a(5670),e=a(6839),f=a(7486),Q=a(1790),F=a(8325),L=a(1170);function b(n){(0,L.Z)(1,arguments);var s=(0,F.Z)(n);return s.setMinutes(0,0,0),s}var Y=a(2757),R=a(7716),j=a(6942),D=a(8759),G=a(9128),H=a(9519),h=a(8750),E=a(380),$=a(6508),g=a(7728),K=a(7672),z=a(5312),y=a(2556),O=a(2793),X=a(7303),v=a(5306);function B(n,s){1&n&&e._UZ(0,"mat-spinner",29),2&n&&e.Q6J("diameter",32)}function W(n,s){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",(null==t?null:t.display_name)||(null==t?null:t.name)),e.xp6(1),e.hij(" ",(null==t?null:t.display_name)||(null==t?null:t.name)," ")}}function V(n,s){1&n&&(e.TgZ(0,"mat-option",31),e._uU(1," No matching options "),e.qZA()),2&n&&e.Q6J("disabled",!0)}const _=function(){return{standalone:!0}};function ee(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a-time-field",43),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.second=i)}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("ngModel",t.second)("from",t.first)("ngModelOptions",e.DdM(3,_))}}function te(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"mat-form-field",34)(3,"mat-select",35),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.type=i)}),e.TgZ(4,"mat-option",36),e._uU(5," Before "),e.qZA(),e.TgZ(6,"mat-option",37),e._uU(7," Between "),e.qZA(),e.TgZ(8,"mat-option",38),e._uU(9," After "),e.qZA()()(),e.TgZ(10,"a-time-field",39),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.first=i)}),e.qZA(),e.YNc(11,ee,1,4,"a-time-field",40),e.qZA(),e.TgZ(12,"span",41),e._uU(13,"@"),e.qZA(),e.TgZ(14,"a-counter",42),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.rate=i)}),e.qZA()()}if(2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.type)("ngModelOptions",e.DdM(11,_)),e.xp6(7),e.Q6J("ngModel",t.first)("ngModelOptions",e.DdM(12,_)),e.xp6(1),e.Q6J("ngIf","between"===t.type),e.xp6(3),e.Q6J("ngModel",t.rate)("ngModelOptions",e.DdM(13,_))("min",0)("max",300)("step",5)("render_fn",o.renderPercent)}}const ne=function(){return[]};function oe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"main",5)(1,"section",6)(2,"div",7)(3,"label",8),e._uU(4,"Asset Type"),e.qZA(),e.TgZ(5,"mat-form-field",9)(6,"mat-select",10)(7,"mat-option",11),e._uU(8,"Space"),e.qZA(),e.TgZ(9,"mat-option",12),e._uU(10,"Desk"),e.qZA()()()(),e.TgZ(11,"div",7)(12,"label",8),e._uU(13,"Asset"),e.qZA(),e.TgZ(14,"mat-form-field",9)(15,"app-icon",13),e._uU(16,"search"),e.qZA(),e._UZ(17,"input",14),e.YNc(18,B,1,1,"mat-spinner",15),e.qZA(),e.TgZ(19,"mat-autocomplete",null,16),e.YNc(21,W,2,2,"mat-option",17),e.ALo(22,"async"),e.YNc(23,V,2,1,"mat-option",18),e.ALo(24,"async"),e.qZA()()(),e.TgZ(25,"section",19)(26,"div",7)(27,"label",20),e._uU(28,"Standard hourly rate"),e.qZA(),e._UZ(29,"a-counter",21),e.qZA(),e.TgZ(30,"div",22)(31,"h2"),e._uU(32,"Rate Rules"),e.qZA(),e.TgZ(33,"div"),e.YNc(34,te,15,14,"div",23),e.qZA(),e.TgZ(35,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.newRule())}),e.TgZ(36,"div",25)(37,"app-icon",0),e._uU(38,"add"),e.qZA(),e.TgZ(39,"span",26),e._uU(40,"Add new rule"),e.qZA()()()()(),e.TgZ(41,"section",19)(42,"div",7)(43,"label"),e._uU(44,"Accept Points?"),e.qZA(),e._UZ(45,"mat-checkbox",27),e.qZA(),e.TgZ(46,"div",7)(47,"label",20),e._uU(48,"Discount Cap"),e.qZA(),e._UZ(49,"a-counter",28),e.qZA()()()}if(2&n){const t=e.MAs(20),o=e.oxw();let i,r;e.Q6J("formGroup",o.form),e.xp6(15),e.ekj("opacity-30",!o.form.get("type").value),e.xp6(2),e.Q6J("matAutocomplete",t),e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(3),e.Q6J("ngForOf",e.lcZ(22,16,o.asset_options)),e.xp6(2),e.Q6J("ngIf",!(null!=(i=e.lcZ(24,18,o.asset_options))&&i.length)),e.xp6(6),e.Q6J("min",500)("max",8e4)("step",500)("render_fn",o.renderPrice),e.xp6(5),e.Q6J("ngForOf",(null==(r=o.form.get("custom_rates"))?null:r.value)||e.DdM(20,ne)),e.xp6(15),e.Q6J("min",0)("max",100)("step",5)("render_fn",o.renderPercent)}}let se=(()=>{class n extends u.cx{constructor(t,o,i){super(),this._spaces=t,this._desks=o,this._data=i,this.event=new e.vpe,this.form=new c.cw({id:new c.NI(this._data.asset?.id||""),asset_id:new c.NI(this._data.asset?.asset_id||""),name:new c.NI(this._data.asset?.name||""),type:new c.NI(this._data.asset?.type||""),accept_points:new c.NI(this._data.asset?.accept_points??!1),discount_cap:new c.NI(this._data.asset?.discount_cap||50),unit_price:new c.NI(this._data.asset?.unit_price||1e3),custom_rates:new c.NI(this._data.asset?.custom_rates||[])}),this.asset_options=(0,R.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,j.U)(([{type:r,name:l},C,A])=>{this.loading=!0;const k=(l||"").toLowerCase();return r?"space"===r?C.filter(x=>x.name.toLowerCase().includes(k)):A.filter(x=>x.name.toLowerCase().includes(k)):[]}),(0,D.b)(()=>this.loading=!1),(0,G.d)(1)),this._desks.setFilters({zones:["All"]}),this.subscription("type_change",this.form.get("type").valueChanges.subscribe(r=>{const l=this.form.get("name");r?l.enable():l.disable()}))}renderPrice(t=0){return`$${(t/100).toFixed(2)}`}renderPercent(t=0){return`${t}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:b(new Date),second:(0,Y.Z)(b(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:{...this.form.value}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Q.sK),e.Y36(H.H),e.Y36(f.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["points-asset-modal"]],outputs:{event:"event"},features:[e.qOj],decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-gray-200"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","flex-1"],["matRipple","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-gray-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["btn","","matRipple","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-gray-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"header")(1,"h2",0),e._uU(2),e.qZA()(),e.YNc(3,oe,50,21,"main",1),e.TgZ(4,"footer",2)(5,"button",3),e._uU(6," Cancel "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.save()}),e._uU(8," Save "),e.qZA()()),2&t&&(e.xp6(2),e.hij(" ",null!=o.form&&null!=o.form.value&&o.form.value.id?"Edit":"New"," Points Asset "),e.xp6(1),e.Q6J("ngIf",o.form),e.xp6(4),e.Q6J("disabled",!o.form.value.name))},dependencies:[p.sg,p.O5,c.Fj,c.JJ,c.JL,c.On,c.sg,c.u,h.KE,h.qo,h.R9,E.Nt,$.gD,g.ey,K.oG,z.Ou,f.ZT,y.XC,y.ZL,g.wG,O.R,X.N,v.o,p.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}\n/*# sourceMappingURL=asset-modal.component.ts-angular-inline--149.css.map*/"]}),n})(),Z=(()=>{class n{constructor(t){this._dialog=t,this._assets=new q.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(o=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(o))})}newAsset(t){var o=this;return(0,P.Z)(function*(){const i=o._dialog.open(se,{data:{asset:t}}),r=yield Promise.race([i.componentInstance.event.pipe((0,w.P)(l=>"done"===l.reason)).toPromise(),i.afterClosed().toPromise()]);if("done"!==r.reason)return i.close();o._assets.next([...o._assets.getValue().filter(l=>l.id!==t?.id),{...r.metadata,id:r.metadata.id||`PA-${(0,u.Iy)(999999999)}`}]),i.close()})()}removeAsset(t){this._assets.next(this._assets.getValue().filter(o=>o.id!==t))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ie=a(1110);function ae(n,s){if(1&n&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&n){const t=s.data;e.xp6(1),e.Oqu(t)}}function re(n,s){if(1&n&&(e.TgZ(0,"span",7),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&n){const t=s.data,o=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t/100,o.code)," per hour ")}}function le(n,s){if(1&n&&(e.TgZ(0,"div",8)(1,"app-icon",9),e._uU(2),e.qZA()()),2&n){const t=s.data;e.xp6(1),e.ekj("text-success",t)("text-error",!t),e.xp6(1),e.hij(" ",t?"check_circle":"cancel"," ")}}function ce(n,s){if(1&n&&(e.TgZ(0,"div",10),e._uU(1),e.qZA()),2&n){const t=s.data;e.xp6(1),e.hij("",t,"%")}}function pe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.edit(r))}),e.TgZ(2,"app-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.remove(r))}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()()()}}const de=function(){return["name","type","unit_price","accept_points","discount_cap","actions"]},me=function(){return["Name","Type","Unit Price","Accepts Points","Discount %"," "]},ue=function(){return["flex"]},ge=function(n,s,t,o,i){return{type:n,unit_price:s,accept_points:t,discount_cap:o,actions:i}};let U=(()=>{class n{get code(){return this._org.currency_code}constructor(t,o){this._state=t,this._org=o,this.asset_list=this._state.assets,this.edit=i=>this._state.newAsset(i),this.remove=i=>this._state.removeAsset(i?.id)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(T.w7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-gray-200","dark:bg-neutral-500","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["icon","",3,"click"]],template:function(t,o){if(1&t&&(e._UZ(0,"custom-table",0),e.YNc(1,ae,2,1,"ng-template",null,1,e.W1O),e.YNc(3,re,3,4,"ng-template",null,2,e.W1O),e.YNc(5,le,3,5,"ng-template",null,3,e.W1O),e.YNc(7,ce,2,1,"ng-template",null,4,e.W1O),e.YNc(9,pe,7,0,"ng-template",null,5,e.W1O)),2&t){const i=e.MAs(2),r=e.MAs(4),l=e.MAs(6),C=e.MAs(8),A=e.MAs(10);e.Q6J("dataSource",o.asset_list)("columns",e.DdM(5,de))("display_column",e.DdM(6,me))("column_size",e.DdM(7,ue))("template",e.qbA(8,ge,i,r,l,C,A))}},dependencies:[v.o,ie.C,p.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}\n/*# sourceMappingURL=points-assets.component.ts-angular-inline--150.css.map*/"]}),n})();var _e=a(2423);let N=(()=>{class n{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(t=0){return`$${t?.toFixed(2)}`}loadPoints(){this.points={...this.points,...JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}")}}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-white","dark:bg-neutral-700","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-white","dark:bg-neutral-700","rounded","border","border-gray-200","dark:border-neutral-500",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-white","dark:bg-neutral-700","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-gray-200","dark:border-neutral-500"],[1,"bg-white","dark:bg-neutral-700","rounded","border","border-gray-200","dark:border-neutral-500",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1," Point Overview "),e.qZA(),e.TgZ(2,"section",1)(3,"h2",2),e._uU(4,"Point Value"),e.qZA(),e.TgZ(5,"div",3)(6,"span"),e._uU(7,"1 point ="),e.qZA(),e.TgZ(8,"a-counter",4),e.NdJ("ngModelChange",function(r){return o.points.value=r})("ngModelChange",function(){return o.storePoints()}),e.qZA(),e.TgZ(9,"app-icon",5),e._uU(10," info "),e.qZA()()(),e.TgZ(11,"section",6)(12,"h2",2),e._uU(13,"Automatic Rewards"),e.qZA(),e.TgZ(14,"div",7)(15,"div",8)(16,"a-counter",9),e.NdJ("ngModelChange",function(r){return o.points.desk_checkin=r})("ngModelChange",function(){return o.storePoints()}),e.qZA(),e.TgZ(17,"span"),e._uU(18,"Points for desk check-in"),e.qZA()(),e.TgZ(19,"div",8)(20,"a-counter",9),e.NdJ("ngModelChange",function(r){return o.points.room_checkin=r})("ngModelChange",function(){return o.storePoints()}),e.qZA(),e.TgZ(21,"span"),e._uU(22,"Points for room check-in"),e.qZA()(),e.TgZ(23,"div",8)(24,"a-counter",9),e.NdJ("ngModelChange",function(r){return o.points.booking_cancel=r})("ngModelChange",function(){return o.storePoints()}),e.qZA(),e.TgZ(25,"span"),e._uU(26,"Points for booking cancellation with 24 hour notice"),e.qZA()(),e.TgZ(27,"div",10)(28,"a-counter",9),e.NdJ("ngModelChange",function(r){return o.points.wellness_card=r})("ngModelChange",function(){return o.storePoints()}),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Points for completing wellness card"),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("step",.1)("ngModel",o.points.value)("render_fn",o.renderPrice),e.xp6(8),e.Q6J("ngModel",o.points.desk_checkin),e.xp6(4),e.Q6J("ngModel",o.points.room_checkin),e.xp6(4),e.Q6J("ngModel",o.points.booking_cancel),e.xp6(4),e.Q6J("ngModel",o.points.wellness_card))},dependencies:[c.JJ,c.On,_e.gM,O.R,v.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n/*# sourceMappingURL=points-overview.component.ts-angular-inline--151.css.map*/"]}),n})();var fe=a(4945),he=a(8441);const ve=["*"];let J=(()=>{class n extends u.cx{constructor(t){super(),this._org=t}ngOnInit(){var t=this;return(0,P.Z)(function*(){yield t._org.initialised.pipe((0,w.P)(o=>o)).toPromise()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.w7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["points-topbar"]],features:[e.qOj],ngContentSelectors:ve,decls:4,vars:0,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],[1,"flex-1","w-2"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA(),e._UZ(3,"date-options"),e.qZA())},dependencies:[he.E],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=points-topbar.component.ts-angular-inline--152.css.map*/"]}),n})();function Ze(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.newAsset())}),e._uU(1," New Asset "),e.qZA()}}const Ce=function(){return["/points","overview"]},Ae=function(){return["/points","assets"]};let xe=(()=>{class n extends u.cx{constructor(t,o){super(),this._state=t,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const t=this._router.url?.split("/")||[""];this.page=t[t.length-1]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["placeos-points"]],features:[e.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(t,o){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0)(2,"points-topbar",1),e.YNc(3,Ze,2,0,"button",2),e.qZA(),e.TgZ(4,"nav",3)(5,"a",4),e._uU(6," Overview "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Assets "),e.qZA()(),e.TgZ(9,"div",5),e._UZ(10,"router-outlet"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf","assets"===o.page),e.xp6(2),e.Q6J("routerLink",e.DdM(5,Ce))("active","overview"===o.page),e.xp6(2),e.Q6J("routerLink",e.DdM(6,Ae))("active","assets"===o.page))},dependencies:[p.O5,fe.k,g.wG,m.BU,m.Nj,d.lC,d.rH,J],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=points.component.ts-angular-inline--153.css.map*/"]}),n})();var Me=a(6866),Te=a(3320);function Pe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.newAsset())}),e._uU(1," New Asset "),e.qZA()}}const we=function(){return["/entertainment","points","overview"]},be=function(){return["/entertainment","points","assets"]},ye=[{path:"",component:xe,children:[{path:"assets",component:U},{path:"overview",component:N},{path:"**",redirectTo:"overview",pathMatch:"full"}]},{path:"new",component:(()=>{class n extends u.cx{constructor(t,o){super(),this._state=t,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const t=this._router.url?.split("/")||[""];this.page=t[t.length-1]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["placeos-new-points"]],features:[e.qOj],decls:13,vars:7,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(t,o){1&t&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"points-topbar",2),e.YNc(5,Pe,2,0,"button",3),e.qZA(),e.TgZ(6,"nav",4)(7,"a",5),e._uU(8," Overview "),e.qZA(),e.TgZ(9,"a",5),e._uU(10," Assets "),e.qZA()(),e.TgZ(11,"div",6),e._UZ(12,"router-outlet"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngIf","assets"===o.page),e.xp6(2),e.Q6J("routerLink",e.DdM(5,we))("active","overview"===o.page),e.xp6(2),e.Q6J("routerLink",e.DdM(6,be))("active","assets"===o.page))},dependencies:[p.O5,Me.O,Te.u,g.wG,m.BU,m.Nj,d.lC,d.rH,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}\n/*# sourceMappingURL=new-points.component.ts-angular-inline--154.css.map*/"]}),n})(),children:[{path:"assets",component:U},{path:"overview",component:N},{path:"**",redirectTo:"overview",pathMatch:"full"}]}];let Oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,c.u5,c.UX,S.v,m.Nh,I.Hi,d.Bz.forChild(ye)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map