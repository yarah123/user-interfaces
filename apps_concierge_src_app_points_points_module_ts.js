"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_points_points_module_ts"],{54980:(Ut,T,i)=>{i.r(T),i.d(T,{PointsModule:()=>yt});var p=i(26575),c=i(28849),q=i(21757),d=i(60989),m=i(92649),Q=i(97910),w=i(93121),b=i(71670),u=i(22798),F=i(70462),P=i(17627),t=i(29039),h=i(17401),L=i(47049),S=i(47120),k=i(67265);function O(n){(0,k.Z)(1,arguments);var l=(0,S.Z)(n);return l.setMinutes(0,0,0),l}var R=i(15870),j=i(28159),Y=i(47422),D=i(15746),G=i(680),H=i(34381),v=i(71268),E=i(99674),$=i(96355),g=i(10257),K=i(56658),z=i(33910),y=i(99892),U=i(37594),X=i(59590),Z=i(94888);function B(n,l){1&n&&t._UZ(0,"mat-spinner",29),2&n&&t.Q6J("diameter",32)}function W(n,l){if(1&n&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.Q6J("value",(null==e?null:e.display_name)||(null==e?null:e.name)),t.xp6(),t.hij(" ",(null==e?null:e.display_name)||(null==e?null:e.name)," ")}}function V(n,l){1&n&&(t.TgZ(0,"mat-option",31),t._uU(1," No matching options "),t.qZA()),2&n&&t.Q6J("disabled",!0)}const _=()=>({standalone:!0});function tt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"a-time-field",43),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw().$implicit;return t.KtG(a.second=s)}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.second)("from",e.first)("ngModelOptions",t.DdM(3,_))}}function et(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"mat-form-field",34)(3,"mat-select",35),t.NdJ("ngModelChange",function(s){const r=t.CHM(e).$implicit;return t.KtG(r.type=s)}),t.TgZ(4,"mat-option",36),t._uU(5," Before "),t.qZA(),t.TgZ(6,"mat-option",37),t._uU(7," Between "),t.qZA(),t.TgZ(8,"mat-option",38),t._uU(9," After "),t.qZA()()(),t.TgZ(10,"a-time-field",39),t.NdJ("ngModelChange",function(s){const r=t.CHM(e).$implicit;return t.KtG(r.first=s)}),t.qZA(),t.YNc(11,tt,1,4,"a-time-field",40),t.qZA(),t.TgZ(12,"span",41),t._uU(13,"@"),t.qZA(),t.TgZ(14,"a-counter",42),t.NdJ("ngModelChange",function(s){const r=t.CHM(e).$implicit;return t.KtG(r.rate=s)}),t.qZA()()}if(2&n){const e=l.$implicit,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.type)("ngModelOptions",t.DdM(11,_)),t.xp6(7),t.Q6J("ngModel",e.first)("ngModelOptions",t.DdM(12,_)),t.xp6(),t.Q6J("ngIf","between"===e.type),t.xp6(3),t.Q6J("ngModel",e.rate)("ngModelOptions",t.DdM(13,_))("min",0)("max",300)("step",5)("render_fn",o.renderPercent)}}const nt=()=>[];function ot(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"main",5)(1,"section",6)(2,"div",7)(3,"label",8),t._uU(4,"Asset Type"),t.qZA(),t.TgZ(5,"mat-form-field",9)(6,"mat-select",10)(7,"mat-option",11),t._uU(8,"Space"),t.qZA(),t.TgZ(9,"mat-option",12),t._uU(10,"Desk"),t.qZA()()()(),t.TgZ(11,"div",7)(12,"label",8),t._uU(13,"Asset"),t.qZA(),t.TgZ(14,"mat-form-field",9)(15,"app-icon",13),t._uU(16,"search"),t.qZA(),t._UZ(17,"input",14),t.YNc(18,B,1,1,"mat-spinner",15),t.qZA(),t.TgZ(19,"mat-autocomplete",null,16),t.YNc(21,W,2,2,"mat-option",17),t.ALo(22,"async"),t.YNc(23,V,2,1,"mat-option",18),t.ALo(24,"async"),t.qZA()()(),t.TgZ(25,"section",19)(26,"div",7)(27,"label",20),t._uU(28,"Standard hourly rate"),t.qZA(),t._UZ(29,"a-counter",21),t.qZA(),t.TgZ(30,"div",22)(31,"h2"),t._uU(32,"Rate Rules"),t.qZA(),t.TgZ(33,"div"),t.YNc(34,et,15,14,"div",23),t.qZA(),t.TgZ(35,"button",24),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.newRule())}),t.TgZ(36,"div",25)(37,"app-icon",0),t._uU(38,"add"),t.qZA(),t.TgZ(39,"span",26),t._uU(40,"Add new rule"),t.qZA()()()()(),t.TgZ(41,"section",19)(42,"div",7)(43,"label"),t._uU(44,"Accept Points?"),t.qZA(),t._UZ(45,"mat-checkbox",27),t.qZA(),t.TgZ(46,"div",7)(47,"label",20),t._uU(48,"Discount Cap"),t.qZA(),t._UZ(49,"a-counter",28),t.qZA()()()}if(2&n){const e=t.MAs(20),o=t.oxw();let s,a;t.Q6J("formGroup",o.form),t.xp6(15),t.ekj("opacity-30",!o.form.get("type").value),t.xp6(2),t.Q6J("matAutocomplete",e),t.xp6(),t.Q6J("ngIf",o.loading),t.xp6(3),t.Q6J("ngForOf",t.lcZ(22,16,o.asset_options)),t.xp6(2),t.Q6J("ngIf",!(null!=(s=t.lcZ(24,18,o.asset_options))&&s.length)),t.xp6(6),t.Q6J("min",500)("max",8e4)("step",500)("render_fn",o.renderPrice),t.xp6(5),t.Q6J("ngForOf",(null==(a=o.form.get("custom_rates"))?null:a.value)||t.DdM(20,nt)),t.xp6(15),t.Q6J("min",0)("max",100)("step",5)("render_fn",o.renderPercent)}}let st=(()=>{class n extends u.cx{constructor(e,o,s){super(),this._spaces=e,this._desks=o,this._data=s,this.event=new t.vpe,this.form=new c.cw({id:new c.NI(this._data.asset?.id||""),asset_id:new c.NI(this._data.asset?.asset_id||""),name:new c.NI(this._data.asset?.name||""),type:new c.NI(this._data.asset?.type||""),accept_points:new c.NI(this._data.asset?.accept_points??!1),discount_cap:new c.NI(this._data.asset?.discount_cap||50),unit_price:new c.NI(this._data.asset?.unit_price||1e3),custom_rates:new c.NI(this._data.asset?.custom_rates||[])}),this.asset_options=(0,j.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,Y.U)(([{type:a,name:r},C,A])=>{this.loading=!0;const f=(r||"").toLowerCase();return a?"space"===a?C.filter(M=>M.name.toLowerCase().includes(f)):A.filter(M=>M.name.toLowerCase().includes(f)):[]}),(0,D.b)(()=>this.loading=!1),(0,G.d)(1)),this._desks.setFilters({zones:["All"]}),this.subscription("type_change",this.form.get("type").valueChanges.subscribe(a=>{const r=this.form.get("name");a?r.enable():r.disable()}))}renderPrice(e=0){return`$${(e/100).toFixed(2)}`}renderPercent(e=0){return`${e}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:O(new Date),second:(0,R.Z)(O(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:{...this.form.value}})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(L.sK),t.Y36(H.H),t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["points-asset-modal"]],outputs:{event:"event"},features:[t.qOj],decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","flex-1"],["matRipple","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-base-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-base-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["btn","","matRipple","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-base-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-base-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(o,s){1&o&&(t.TgZ(0,"header")(1,"h2",0),t._uU(2),t.qZA()(),t.YNc(3,ot,50,21,"main",1),t.TgZ(4,"footer",2)(5,"button",3),t._uU(6," Cancel "),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return s.save()}),t._uU(8," Save "),t.qZA()()),2&o&&(t.xp6(2),t.hij(" ",null!=s.form&&null!=s.form.value&&s.form.value.id?"Edit":"New"," Points Asset "),t.xp6(),t.Q6J("ngIf",s.form),t.xp6(4),t.Q6J("disabled",!s.form.value.name))},dependencies:[p.sg,p.O5,c.Fj,c.JJ,c.JL,c.On,c.sg,c.u,v.KE,v.qo,v.R9,E.Nt,$.gD,g.ey,K.oG,z.Ou,h.ZT,y.XC,y.ZL,g.wG,U.R,X.N,Z.o,p.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}\n\n/*# sourceMappingURL=asset-modal.component.ts-angular-inline--154.css.map*/"]})}return n})(),x=(()=>{class n{constructor(e){this._dialog=e,this._assets=new F.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(o=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(o))})}newAsset(e){var o=this;return(0,b.Z)(function*(){const s=o._dialog.open(st,{data:{asset:e}}),a=yield Promise.race([s.componentInstance.event.pipe((0,P.P)(r=>"done"===r.reason)).toPromise(),s.afterClosed().toPromise()]);if("done"!==a.reason)return s.close();o._assets.next([...o._assets.getValue().filter(r=>r.id!==e?.id),{...a.metadata,id:a.metadata.id||`PA-${(0,u.Iy)(999999999)}`}]),s.close()})()}removeAsset(e){this._assets.next(this._assets.getValue().filter(o=>o.id!==e))}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(h.uw))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var it=i(27442);function at(n,l){if(1&n&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&n){const e=l.data;t.xp6(),t.Oqu(e)}}function rt(n,l){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=l.data,o=t.oxw();t.xp6(),t.hij(" ",t.xi3(2,1,e/100,o.code)," per hour ")}}function lt(n,l){if(1&n&&(t.TgZ(0,"div",8)(1,"app-icon",9),t._uU(2),t.qZA()()),2&n){const e=l.data;t.xp6(),t.ekj("text-success",e)("text-error",!e),t.xp6(),t.hij(" ",e?"check_circle":"cancel"," ")}}function ct(n,l){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const e=l.data;t.xp6(),t.hij("",e,"%")}}function pt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",11)(1,"button",12),t.NdJ("click",function(){const a=t.CHM(e).row,r=t.oxw();return t.KtG(r.edit(a))}),t.TgZ(2,"app-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",12),t.NdJ("click",function(){const a=t.CHM(e).row,r=t.oxw();return t.KtG(r.remove(a))}),t.TgZ(5,"app-icon"),t._uU(6,"delete"),t.qZA()()()}}const mt=()=>["name","type","unit_price","accept_points","discount_cap","actions"],dt=()=>["Name","Type","Unit Price","Accepts Points","Discount %"," "],ut=()=>["flex"],gt=(n,l,e,o,s)=>({type:n,unit_price:l,accept_points:e,discount_cap:o,actions:s});let N=(()=>{class n{get code(){return this._org.currency_code}constructor(e,o){this._state=e,this._org=o,this.asset_list=this._state.assets,this.edit=s=>this._state.newAsset(s),this.remove=s=>this._state.removeAsset(s?.id)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(x),t.Y36(w.w7))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-base-200","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["icon","",3,"click"]],template:function(o,s){if(1&o&&(t._UZ(0,"custom-table",0),t.YNc(1,at,2,1,"ng-template",null,1,t.W1O)(3,rt,3,4,"ng-template",null,2,t.W1O)(5,lt,3,5,"ng-template",null,3,t.W1O)(7,ct,2,1,"ng-template",null,4,t.W1O)(9,pt,7,0,"ng-template",null,5,t.W1O)),2&o){const a=t.MAs(2),r=t.MAs(4),C=t.MAs(6),A=t.MAs(8),f=t.MAs(10);t.Q6J("dataSource",s.asset_list)("columns",t.DdM(5,mt))("display_column",t.DdM(6,dt))("column_size",t.DdM(7,ut))("template",t.qbA(8,gt,a,r,C,A,f))}},dependencies:[Z.o,it.C,p.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}\n\n/*# sourceMappingURL=points-assets.component.ts-angular-inline--155.css.map*/"]})}return n})();var _t=i(60702);let J=(()=>{class n{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(e=0){return`$${e?.toFixed(2)}`}loadPoints(){this.points={...this.points,...JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}")}}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-base-100","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-base-100","rounded","border","border-base-200",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-base-100","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-base-200"],[1,"bg-base-100","rounded","border","border-base-200",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(o,s){1&o&&(t.TgZ(0,"h2",0),t._uU(1," Point Overview "),t.qZA(),t.TgZ(2,"section",1)(3,"h2",2),t._uU(4,"Point Value"),t.qZA(),t.TgZ(5,"div",3)(6,"span"),t._uU(7,"1 point ="),t.qZA(),t.TgZ(8,"a-counter",4),t.NdJ("ngModelChange",function(r){return s.points.value=r})("ngModelChange",function(){return s.storePoints()}),t.qZA(),t.TgZ(9,"app-icon",5),t._uU(10," info "),t.qZA()()(),t.TgZ(11,"section",6)(12,"h2",2),t._uU(13,"Automatic Rewards"),t.qZA(),t.TgZ(14,"div",7)(15,"div",8)(16,"a-counter",9),t.NdJ("ngModelChange",function(r){return s.points.desk_checkin=r})("ngModelChange",function(){return s.storePoints()}),t.qZA(),t.TgZ(17,"span"),t._uU(18,"Points for desk check-in"),t.qZA()(),t.TgZ(19,"div",8)(20,"a-counter",9),t.NdJ("ngModelChange",function(r){return s.points.room_checkin=r})("ngModelChange",function(){return s.storePoints()}),t.qZA(),t.TgZ(21,"span"),t._uU(22,"Points for room check-in"),t.qZA()(),t.TgZ(23,"div",8)(24,"a-counter",9),t.NdJ("ngModelChange",function(r){return s.points.booking_cancel=r})("ngModelChange",function(){return s.storePoints()}),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Points for booking cancellation with 24 hour notice"),t.qZA()(),t.TgZ(27,"div",10)(28,"a-counter",9),t.NdJ("ngModelChange",function(r){return s.points.wellness_card=r})("ngModelChange",function(){return s.storePoints()}),t.qZA(),t.TgZ(29,"span"),t._uU(30,"Points for completing wellness card"),t.qZA()()()()),2&o&&(t.xp6(8),t.Q6J("step",.1)("ngModel",s.points.value)("render_fn",s.renderPrice),t.xp6(8),t.Q6J("ngModel",s.points.desk_checkin),t.xp6(4),t.Q6J("ngModel",s.points.room_checkin),t.xp6(4),t.Q6J("ngModel",s.points.booking_cancel),t.xp6(4),t.Q6J("ngModel",s.points.wellness_card))},dependencies:[c.JJ,c.On,_t.gM,U.R,Z.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n\n/*# sourceMappingURL=points-overview.component.ts-angular-inline--156.css.map*/"]})}return n})();var ft=i(42349),ht=i(11771);const vt=["*"];let I=(()=>{class n extends u.cx{constructor(e){super(),this._org=e}ngOnInit(){var e=this;return(0,b.Z)(function*(){yield e._org.initialised.pipe((0,P.P)(o=>o)).toPromise()})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(w.w7))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["points-topbar"]],features:[t.qOj],ngContentSelectors:vt,decls:4,vars:0,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],[1,"flex-1","w-2"]],template:function(o,s){1&o&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t._UZ(3,"date-options"),t.qZA())},dependencies:[ht.E],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=points-topbar.component.ts-angular-inline--157.css.map*/"]})}return n})();function Zt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.newAsset())}),t._uU(1," New Asset "),t.qZA()}}const xt=()=>["/points","overview"],Ct=()=>["/points","assets"];let At=(()=>{class n extends u.cx{constructor(e,o){super(),this._state=e,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const e=this._router.url?.split("/")||[""];this.page=e[e.length-1]}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(x),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["placeos-points"]],features:[t.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(o,s){1&o&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0)(2,"points-topbar",1),t.YNc(3,Zt,2,0,"button",2),t.qZA(),t.TgZ(4,"nav",3)(5,"a",4),t._uU(6," Overview "),t.qZA(),t.TgZ(7,"a",4),t._uU(8," Assets "),t.qZA()(),t.TgZ(9,"div",5),t._UZ(10,"router-outlet"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngIf","assets"===s.page),t.xp6(2),t.Q6J("routerLink",t.DdM(5,xt))("active","overview"===s.page),t.xp6(2),t.Q6J("routerLink",t.DdM(6,Ct))("active","assets"===s.page))},dependencies:[p.O5,ft.k,g.wG,d.BU,d.Nj,m.lC,m.rH,I],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=points.component.ts-angular-inline--158.css.map*/"]})}return n})();var Mt=i(33005),Tt=i(19842);function wt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.newAsset())}),t._uU(1," New Asset "),t.qZA()}}const bt=()=>["/entertainment","points","overview"],Pt=()=>["/entertainment","points","assets"],Ot=[{path:"",component:At,children:[{path:"assets",component:N},{path:"overview",component:J},{path:"**",redirectTo:"overview",pathMatch:"full"}]},{path:"new",component:(()=>{class n extends u.cx{constructor(e,o){super(),this._state=e,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const e=this._router.url?.split("/")||[""];this.page=e[e.length-1]}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(x),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["placeos-new-points"]],features:[t.qOj],decls:13,vars:7,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(o,s){1&o&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1)(4,"points-topbar",2),t.YNc(5,wt,2,0,"button",3),t.qZA(),t.TgZ(6,"nav",4)(7,"a",5),t._uU(8," Overview "),t.qZA(),t.TgZ(9,"a",5),t._uU(10," Assets "),t.qZA()(),t.TgZ(11,"div",6),t._UZ(12,"router-outlet"),t.qZA()()()),2&o&&(t.xp6(5),t.Q6J("ngIf","assets"===s.page),t.xp6(2),t.Q6J("routerLink",t.DdM(5,bt))("active","overview"===s.page),t.xp6(2),t.Q6J("routerLink",t.DdM(6,Pt))("active","assets"===s.page))},dependencies:[p.O5,Mt.O,Tt.u,g.wG,d.BU,d.Nj,m.lC,m.rH,I],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-points.component.ts-angular-inline--159.css.map*/"]})}return n})(),children:[{path:"assets",component:N},{path:"overview",component:J},{path:"**",redirectTo:"overview",pathMatch:"full"}]}];let yt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[p.ez,c.u5,c.UX,Q.v,d.Nh,q.Hi,m.Bz.forChild(Ot)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map