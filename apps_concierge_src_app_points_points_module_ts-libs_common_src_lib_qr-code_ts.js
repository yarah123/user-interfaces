"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_points_points_module_ts-libs_common_src_lib_qr-code_ts"],{1881:(oe,B,f)=>{f.r(B),f.d(B,{PointsModule:()=>Ue});var Z=f(6362),y=f(587),A=f(1196),m=f(2379),M=f(9481),C=f(2656),o=f(4929),O=f(3294),w=f(4505),P=f(5670),e=f(3184),u=f(5758),J=f(8933),p=f(8325),F=f(1170);function T(a){(0,F.Z)(1,arguments);var g=(0,p.Z)(a);return g.setMinutes(0,0,0),g}var N=f(2757),b=f(7716),q=f(6942),I=f(8759),j=f(9128),S=f(9519),L=f(4770),U=f(1434),D=f(1130),c=f(5306),t=f(4683),n=f(3188),s=f(4742),r=f(2793),v=f(7303),d=f(7317),h=f(1534);function Q(a,g){1&a&&e._UZ(0,"mat-spinner",29),2&a&&e.Q6J("diameter",32)}function R(a,g){if(1&a&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&a){const i=g.$implicit;e.Q6J("value",(null==i?null:i.display_name)||(null==i?null:i.name)),e.xp6(1),e.hij(" ",(null==i?null:i.display_name)||(null==i?null:i.name)," ")}}function H(a,g){1&a&&(e.TgZ(0,"mat-option",31),e._uU(1," No matching options "),e.qZA()),2&a&&e.Q6J("disabled",!0)}const E=function(){return{standalone:!0}};function se(a,g){if(1&a){const i=e.EpF();e.TgZ(0,"a-time-field",43),e.NdJ("ngModelChange",function(_){return e.CHM(i),e.oxw().$implicit.second=_}),e.qZA()}if(2&a){const i=e.oxw().$implicit;e.Q6J("ngModel",i.second)("from",i.first)("ngModelOptions",e.DdM(3,E))}}function ie(a,g){if(1&a){const i=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"mat-form-field",34)(3,"mat-select",35),e.NdJ("ngModelChange",function(_){return e.CHM(i).$implicit.type=_}),e.TgZ(4,"mat-option",36),e._uU(5," Before "),e.qZA(),e.TgZ(6,"mat-option",37),e._uU(7," Between "),e.qZA(),e.TgZ(8,"mat-option",38),e._uU(9," After "),e.qZA()()(),e.TgZ(10,"a-time-field",39),e.NdJ("ngModelChange",function(_){return e.CHM(i).$implicit.first=_}),e.qZA(),e.YNc(11,se,1,4,"a-time-field",40),e.qZA(),e.TgZ(12,"span",41),e._uU(13,"@"),e.qZA(),e.TgZ(14,"a-counter",42),e.NdJ("ngModelChange",function(_){return e.CHM(i).$implicit.rate=_}),e.qZA()()}if(2&a){const i=g.$implicit,l=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.type)("ngModelOptions",e.DdM(11,E)),e.xp6(7),e.Q6J("ngModel",i.first)("ngModelOptions",e.DdM(12,E)),e.xp6(1),e.Q6J("ngIf","between"===i.type),e.xp6(3),e.Q6J("ngModel",i.rate)("ngModelOptions",e.DdM(13,E))("min",0)("max",300)("step",5)("render_fn",l.renderPercent)}}const re=function(){return[]};function ae(a,g){if(1&a){const i=e.EpF();e.TgZ(0,"main",5)(1,"section",6)(2,"div",7)(3,"label",8),e._uU(4,"Asset Type"),e.qZA(),e.TgZ(5,"mat-form-field",9)(6,"mat-select",10)(7,"mat-option",11),e._uU(8,"Space"),e.qZA(),e.TgZ(9,"mat-option",12),e._uU(10,"Desk"),e.qZA()()()(),e.TgZ(11,"div",7)(12,"label",8),e._uU(13,"Asset"),e.qZA(),e.TgZ(14,"mat-form-field",9)(15,"app-icon",13),e._uU(16,"search"),e.qZA(),e._UZ(17,"input",14),e.YNc(18,Q,1,1,"mat-spinner",15),e.qZA(),e.TgZ(19,"mat-autocomplete",null,16),e.YNc(21,R,2,2,"mat-option",17),e.ALo(22,"async"),e.YNc(23,H,2,1,"mat-option",18),e.ALo(24,"async"),e.qZA()()(),e.TgZ(25,"section",19)(26,"div",7)(27,"label",20),e._uU(28,"Standard hourly rate"),e.qZA(),e._UZ(29,"a-counter",21),e.qZA(),e.TgZ(30,"div",22)(31,"h2"),e._uU(32,"Rate Rules"),e.qZA(),e.TgZ(33,"div"),e.YNc(34,ie,15,14,"div",23),e.qZA(),e.TgZ(35,"button",24),e.NdJ("click",function(){return e.CHM(i),e.oxw().newRule()}),e.TgZ(36,"div",25)(37,"app-icon",0),e._uU(38,"add"),e.qZA(),e.TgZ(39,"span",26),e._uU(40,"Add new rule"),e.qZA()()()()(),e.TgZ(41,"section",19)(42,"div",7)(43,"label"),e._uU(44,"Accept Points?"),e.qZA(),e._UZ(45,"mat-checkbox",27),e.qZA(),e.TgZ(46,"div",7)(47,"label",20),e._uU(48,"Discount Cap"),e.qZA(),e._UZ(49,"a-counter",28),e.qZA()()()}if(2&a){const i=e.MAs(20),l=e.oxw();let _,x;e.Q6J("formGroup",l.form),e.xp6(15),e.ekj("opacity-30",!l.form.get("type").value),e.xp6(2),e.Q6J("disabled",!l.form.get("type").value)("matAutocomplete",i),e.xp6(1),e.Q6J("ngIf",l.loading),e.xp6(3),e.Q6J("ngForOf",e.lcZ(22,17,l.asset_options)),e.xp6(2),e.Q6J("ngIf",!(null!=(_=e.lcZ(24,19,l.asset_options))&&_.length)),e.xp6(6),e.Q6J("min",500)("max",8e4)("step",500)("render_fn",l.renderPrice),e.xp6(5),e.Q6J("ngForOf",(null==(x=l.form.get("custom_rates"))?null:x.value)||e.DdM(21,re)),e.xp6(15),e.Q6J("min",0)("max",100)("step",5)("render_fn",l.renderPercent)}}let le=(()=>{class a{constructor(i,l,_){var x,k,z,Y,W,$,G,X,V;this._spaces=i,this._desks=l,this._data=_,this.event=new e.vpe,this.form=new y.cw({id:new y.NI((null===(x=this._data.asset)||void 0===x?void 0:x.id)||""),asset_id:new y.NI((null===(k=this._data.asset)||void 0===k?void 0:k.asset_id)||""),name:new y.NI((null===(z=this._data.asset)||void 0===z?void 0:z.name)||""),type:new y.NI((null===(Y=this._data.asset)||void 0===Y?void 0:Y.type)||""),accept_points:new y.NI(null!==($=null===(W=this._data.asset)||void 0===W?void 0:W.accept_points)&&void 0!==$&&$),discount_cap:new y.NI((null===(G=this._data.asset)||void 0===G?void 0:G.discount_cap)||50),unit_price:new y.NI((null===(X=this._data.asset)||void 0===X?void 0:X.unit_price)||1e3),custom_rates:new y.NI((null===(V=this._data.asset)||void 0===V?void 0:V.custom_rates)||[])}),this.asset_options=(0,b.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,q.U)(([{type:te,name:Je},Se,ke])=>{this.loading=!0;const ne=(Je||"").toLowerCase();return te?"space"===te?Se.filter(K=>K.name.toLowerCase().includes(ne)):ke.filter(K=>K.name.toLowerCase().includes(ne)):[]}),(0,I.b)(()=>this.loading=!1),(0,j.d)(1)),this._desks.setFilters({zones:["All"]})}renderPrice(i=0){var l;return`$${null===(l=i/100)||void 0===l?void 0:l.toFixed(2)}`}renderPercent(i=0){return`${i}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:T(new Date),second:(0,N.Z)(T(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:Object.assign({},this.form.value)})}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(J.sK),e.Y36(S.H),e.Y36(u.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["points-asset-modal"]],outputs:{event:"event"},decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-gray-200"],["mat-button","","mat-dialog-close","",1,"inverse","flex-1"],["mat-button","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"disabled","matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-gray-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["mat-button","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-gray-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(i,l){1&i&&(e.TgZ(0,"header")(1,"h2",0),e._uU(2),e.qZA()(),e.YNc(3,ae,50,22,"main",1),e.TgZ(4,"footer",2)(5,"button",3),e._uU(6," Cancel "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return l.save()}),e._uU(8," Save "),e.qZA()()),2&i&&(e.xp6(2),e.hij(" ",null!=l.form&&null!=l.form.value&&l.form.value.id?"Edit":"New"," Points Asset "),e.xp6(1),e.Q6J("ngIf",l.form),e.xp6(4),e.Q6J("disabled",!l.form.value.name))},directives:[Z.O5,y.JL,y.sg,L.KE,U.gD,y.JJ,y.u,D.ey,c.o,L.qo,t.Nt,y.Fj,n.ZL,s.Ou,L.R9,n.XC,Z.sg,r.R,y.On,v.N,d.lW,h.oG,u.ZT],pipes:[Z.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}\n/*# sourceMappingURL=asset-modal.component.ts-angular-inline--102.css.map*/"]}),a})(),ee=(()=>{class a{constructor(i){this._dialog=i,this._assets=new w.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(l=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(l))})}newAsset(i){return(0,o.mG)(this,void 0,void 0,function*(){const l=this._dialog.open(le,{data:{asset:i}}),_=yield Promise.race([l.componentInstance.event.pipe((0,P.P)(x=>"done"===x.reason)).toPromise(),l.afterClosed().toPromise()]);if("done"!==_.reason)return l.close();this._assets.next([...this._assets.getValue().filter(x=>x.id!==(null==i?void 0:i.id)),Object.assign(Object.assign({},_.metadata),{id:_.metadata.id||`PA-${(0,O.Iy)(999999999)}`})]),l.close()})}removeAsset(i){this._assets.next(this._assets.getValue().filter(l=>l.id!==i))}}return a.\u0275fac=function(i){return new(i||a)(e.LFG(u.uw))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var ce=f(1110);function de(a,g){if(1&a&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&a){const i=g.data;e.xp6(1),e.Oqu(i)}}function pe(a,g){if(1&a&&(e.TgZ(0,"span",7),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&a){const i=g.data;e.xp6(1),e.hij(" ",e.lcZ(2,1,i/100)," per hour ")}}function me(a,g){if(1&a&&(e.TgZ(0,"div",8)(1,"app-icon",9),e._uU(2),e.qZA()()),2&a){const i=g.data;e.xp6(1),e.ekj("text-success",i)("text-error",!i),e.xp6(1),e.hij(" ",i?"check_circle":"cancel"," ")}}function ue(a,g){if(1&a&&(e.TgZ(0,"div",10),e._uU(1),e.qZA()),2&a){const i=g.data;e.xp6(1),e.hij("",i,"%")}}function fe(a,g){if(1&a){const i=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){const x=e.CHM(i).row;return e.oxw().edit(x)}),e.TgZ(2,"app-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",12),e.NdJ("click",function(){const x=e.CHM(i).row;return e.oxw().remove(x)}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()()()}}const ge=function(){return["name","type","unit_price","accept_points","discount_cap","actions"]},_e=function(){return["Name","Type","Unit Price","Accepts Points","Discount %"," "]},ve=function(){return["flex"]},he=function(a,g,i,l,_){return{type:a,unit_price:g,accept_points:i,discount_cap:l,actions:_}};let Ce=(()=>{class a{constructor(i){this._state=i,this.asset_list=this._state.assets,this.edit=l=>this._state.newAsset(l),this.remove=l=>this._state.removeAsset(null==l?void 0:l.id)}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(ee))},a.\u0275cmp=e.Xpm({type:a,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-gray-200","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["mat-icon-button","",3,"click"]],template:function(i,l){if(1&i&&(e._UZ(0,"custom-table",0),e.YNc(1,de,2,1,"ng-template",null,1,e.W1O),e.YNc(3,pe,3,3,"ng-template",null,2,e.W1O),e.YNc(5,me,3,5,"ng-template",null,3,e.W1O),e.YNc(7,ue,2,1,"ng-template",null,4,e.W1O),e.YNc(9,fe,7,0,"ng-template",null,5,e.W1O)),2&i){const _=e.MAs(2),x=e.MAs(4),k=e.MAs(6),z=e.MAs(8),Y=e.MAs(10);e.Q6J("dataSource",l.asset_list)("columns",e.DdM(5,ge))("display_column",e.DdM(6,_e))("column_size",e.DdM(7,ve))("template",e.qbA(8,he,_,x,k,z,Y))}},directives:[ce.C,c.o,d.lW],pipes:[Z.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}\n/*# sourceMappingURL=points-assets.component.ts-angular-inline--103.css.map*/"]}),a})();var xe=f(89);let Ze=(()=>{class a{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(i=0){return`$${null==i?void 0:i.toFixed(2)}`}loadPoints(){this.points=Object.assign(Object.assign({},this.points),JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}"))}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-white","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-white","rounded","border","border-gray-200",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-white","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-gray-200"],[1,"bg-white","rounded","border","border-gray-200",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(i,l){1&i&&(e.TgZ(0,"h2",0),e._uU(1," Point Overview "),e.qZA(),e.TgZ(2,"section",1)(3,"h2",2),e._uU(4,"Point Value"),e.qZA(),e.TgZ(5,"div",3)(6,"span"),e._uU(7,"1 point ="),e.qZA(),e.TgZ(8,"a-counter",4),e.NdJ("ngModelChange",function(x){return l.points.value=x})("ngModelChange",function(){return l.storePoints()}),e.qZA(),e.TgZ(9,"app-icon",5),e._uU(10," info "),e.qZA()()(),e.TgZ(11,"section",6)(12,"h2",2),e._uU(13,"Automatic Rewards"),e.qZA(),e.TgZ(14,"div",7)(15,"div",8)(16,"a-counter",9),e.NdJ("ngModelChange",function(x){return l.points.desk_checkin=x})("ngModelChange",function(){return l.storePoints()}),e.qZA(),e.TgZ(17,"span"),e._uU(18,"Points for desk check-in"),e.qZA()(),e.TgZ(19,"div",8)(20,"a-counter",9),e.NdJ("ngModelChange",function(x){return l.points.room_checkin=x})("ngModelChange",function(){return l.storePoints()}),e.qZA(),e.TgZ(21,"span"),e._uU(22,"Points for room check-in"),e.qZA()(),e.TgZ(23,"div",8)(24,"a-counter",9),e.NdJ("ngModelChange",function(x){return l.points.booking_cancel=x})("ngModelChange",function(){return l.storePoints()}),e.qZA(),e.TgZ(25,"span"),e._uU(26,"Points for booking cancellation with 24 hour notice"),e.qZA()(),e.TgZ(27,"div",10)(28,"a-counter",9),e.NdJ("ngModelChange",function(x){return l.points.wellness_card=x})("ngModelChange",function(){return l.storePoints()}),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Points for completing wellness card"),e.qZA()()()()),2&i&&(e.xp6(8),e.Q6J("step",.1)("ngModel",l.points.value)("render_fn",l.renderPrice),e.xp6(8),e.Q6J("ngModel",l.points.desk_checkin),e.xp6(4),e.Q6J("ngModel",l.points.room_checkin),e.xp6(4),e.Q6J("ngModel",l.points.booking_cancel),e.xp6(4),e.Q6J("ngModel",l.points.wellness_card))},directives:[r.R,y.JJ,y.On,c.o,xe.gM],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n/*# sourceMappingURL=points-overview.component.ts-angular-inline--104.css.map*/"]}),a})();var Me=f(4945),Ae=f(3619),Te=f(8441);const be=["*"];let Pe=(()=>{class a extends O.KG{constructor(i){super(),this._org=i}ngOnInit(){return(0,o.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,P.P)(i=>i)).toPromise()})}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(Ae.w7))},a.\u0275cmp=e.Xpm({type:a,selectors:[["points-topbar"]],features:[e.qOj],ngContentSelectors:be,decls:3,vars:0,consts:[[1,"flex-1","w-2"]],template:function(i,l){1&i&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA(),e._UZ(2,"date-options"))},directives:[Te.E],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=points-topbar.component.ts-angular-inline--105.css.map*/"]}),a})();function we(a,g){if(1&a){const i=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){return e.CHM(i),e.oxw().newAsset()}),e._uU(1," New Asset "),e.qZA()}}const ye=function(){return["/points","overview"]},Oe=function(){return["/points","assets"]},Ne=[{path:"",component:(()=>{class a extends O.KG{constructor(i,l){super(),this._state=i,this._router=l,this.newAsset=()=>this._state.newAsset()}ngOnInit(){var i;this.subscription("route.params",this._router.events.subscribe(()=>{var _;const x=(null===(_=this._router.url)||void 0===_?void 0:_.split("/"))||[""];this.page=x[x.length-1]}));const l=(null===(i=this._router.url)||void 0===i?void 0:i.split("/"))||[""];this.page=l[l.length-1]}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(ee),e.Y36(M.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["placeos-points"]],features:[e.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col"],[1,"relative","z-10"],["mat-button","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["mat-button","",3,"click"]],template:function(i,l){1&i&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0)(2,"points-topbar",1),e.YNc(3,we,2,0,"button",2),e.qZA(),e.TgZ(4,"nav",3)(5,"a",4),e._uU(6," Overview "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Assets "),e.qZA()(),e.TgZ(9,"div",5),e._UZ(10,"router-outlet"),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("ngIf","assets"===l.page),e.xp6(2),e.Q6J("routerLink",e.DdM(5,ye))("active","overview"===l.page),e.xp6(2),e.Q6J("routerLink",e.DdM(6,Oe))("active","assets"===l.page))},directives:[Me.k,Pe,Z.O5,d.lW,m.BU,M.yS,m.Nj,M.lC],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=points.component.ts-angular-inline--106.css.map*/"]}),a})(),children:[{path:"",redirectTo:"overview"},{path:"assets",component:Ce},{path:"overview",component:Ze},{path:"*",redirectTo:"overview"}]}];let Ue=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[Z.ez,y.u5,y.UX,C.v,m.Nh,A.Hi,M.Bz.forChild(Ne)]]}),a})()},6168:(oe,B,f)=>{function Z(A){var m=this;A="object"==typeof A?A:{},m.revision=3,m.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},m.toTable=A.toTable,m.domElement=m.toTable?document.createElement("div"):document.createElement("canvas"),m.url=A.url||"",m.size=A.size||280,m.qrc=!1,m.colorLight=A.colorLight||"#fff",m.colorDark=A.colorDark||"#000",m.ecclevel=A.ecclevel||1,m.noBorder=A.noBorder,m.borderSize=A.borderSize||4;var M,C,o,O,w,P,e,u=[],J=[],p=[],F=[],T=[],N=[],b=function(c,t){var n;c>t&&(n=c,c=t,t=n),n=t,n*=t,n+=t,n>>=1,F[n+=c]=1},q=function(c,t){var n;for(p[c+o*t]=1,n=-2;n<2;n++)p[c+n+o*(t-2)]=1,p[c-2+o*(t+n+1)]=1,p[c+2+o*(t+n)]=1,p[c+n+1+o*(t+2)]=1;for(n=0;n<2;n++)b(c-1,t+n),b(c+1,t-n),b(c-n,t-1),b(c+n,t+1)},I=function(c){for(;c>=255;)c=((c-=255)>>8)+(255&c);return c},j=function(c,t,n,s){var r,v,d,h=Z.gexp,Q=Z.glog;for(r=0;r<s;r++)u[n+r]=0;for(r=0;r<t;r++){if(255!=(d=Q[u[c+r]^u[n]]))for(v=1;v<s;v++)u[n+v-1]=u[n+v]^h[I(d+N[s-v])];else for(v=n;v<n+s;v++)u[v]=u[v+1];u[n+s-1]=255==d?0:h[I(d+N[0])]}},S=function(c,t){var n;return c>t&&(n=c,c=t,t=n),n=t,n+=t*t,n>>=1,F[n+=c]},L=function(c){var t,n,s,r;switch(c){case 0:for(n=0;n<o;n++)for(t=0;t<o;t++)t+n&1||S(t,n)||(p[t+n*o]^=1);break;case 1:for(n=0;n<o;n++)for(t=0;t<o;t++)1&n||S(t,n)||(p[t+n*o]^=1);break;case 2:for(n=0;n<o;n++)for(s=0,t=0;t<o;t++,s++)3==s&&(s=0),s||S(t,n)||(p[t+n*o]^=1);break;case 3:for(r=0,n=0;n<o;n++,r++)for(3==r&&(r=0),s=r,t=0;t<o;t++,s++)3==s&&(s=0),s||S(t,n)||(p[t+n*o]^=1);break;case 4:for(n=0;n<o;n++)for(s=0,r=n>>1&1,t=0;t<o;t++,s++)3==s&&(s=0,r=!r),r||S(t,n)||(p[t+n*o]^=1);break;case 5:for(r=0,n=0;n<o;n++,r++)for(3==r&&(r=0),s=0,t=0;t<o;t++,s++)3==s&&(s=0),(t&n&1)+!(!s|!r)||S(t,n)||(p[t+n*o]^=1);break;case 6:for(r=0,n=0;n<o;n++,r++)for(3==r&&(r=0),s=0,t=0;t<o;t++,s++)3==s&&(s=0),(t&n&1)+(s&&s==r)&1||S(t,n)||(p[t+n*o]^=1);break;case 7:for(r=0,n=0;n<o;n++,r++)for(3==r&&(r=0),s=0,t=0;t<o;t++,s++)3==s&&(s=0),(s&&s==r)+(t+n&1)&1||S(t,n)||(p[t+n*o]^=1)}},U=function(c){var t,n=0;for(t=0;t<=c;t++)T[t]>=5&&(n+=Z.N1+T[t]-5);for(t=3;t<c-1;t+=2)T[t-2]==T[t+2]&&T[t+2]==T[t-1]&&T[t-1]==T[t+1]&&3*T[t-1]==T[t]&&(0==T[t-3]||t+3>c||3*T[t-3]>=4*T[t]||3*T[t+3]>=4*T[t])&&(n+=Z.N3);return n},D=function(){var c,t,n,s,r,v=0,d=0;for(t=0;t<o-1;t++)for(c=0;c<o-1;c++)(p[c+o*t]&&p[c+1+o*t]&&p[c+o*(t+1)]&&p[c+1+o*(t+1)]||!(p[c+o*t]||p[c+1+o*t]||p[c+o*(t+1)]||p[c+1+o*(t+1)]))&&(v+=Z.N2);for(t=0;t<o;t++){for(T[0]=0,n=s=c=0;c<o;c++)(r=p[c+o*t])==s?T[n]++:T[++n]=1,d+=(s=r)?1:-1;v+=U(n)}d<0&&(d=-d);var h=d,Q=0;for(h+=h<<2,h<<=1;h>o*o;)h-=o*o,Q++;for(v+=Q*Z.N4,c=0;c<o;c++){for(T[0]=0,n=s=t=0;t<o;t++)(r=p[c+o*t])==s?T[n]++:T[++n]=1,s=r;v+=U(n)}return v};m.genframe=function(c){var t,n,s,r,v,d,h,Q,R=Z.eccblocks,H=Z.gexp,E=Z.glog;r=c.length,C=0;do{if(C++,s=4*(M-1)+16*(C-1),O=R[s++],w=R[s++],P=R[s++],e=R[s],r<=(s=P*(O+w)+w-3+(C<=9)))break}while(C<40);for(o=17+4*C,v=P+(P+e)*(O+w)+w,r=0;r<v;r++)J[r]=0;for(u=c.slice(0),r=0;r<o*o;r++)p[r]=0;for(r=0;r<(o*(o+1)+1)/2;r++)F[r]=0;for(r=0;r<3;r++){for(s=0,n=0,1==r&&(s=o-7),2==r&&(n=o-7),p[n+3+o*(s+3)]=1,t=0;t<6;t++)p[n+t+o*s]=1,p[n+o*(s+t+1)]=1,p[n+6+o*(s+t)]=1,p[n+t+1+o*(s+6)]=1;for(t=1;t<5;t++)b(n+t,s+1),b(n+1,s+t+1),b(n+5,s+t),b(n+t+1,s+5);for(t=2;t<4;t++)p[n+t+o*(s+2)]=1,p[n+2+o*(s+t+1)]=1,p[n+4+o*(s+t)]=1,p[n+t+1+o*(s+4)]=1}if(C>1)for(r=Z.adelta[C],n=o-7;;){for(t=o-7;t>r-3&&(q(t,n),!(t<r));)t-=r;if(n<=r+9)break;q(6,n-=r),q(n,6)}for(p[8+o*(o-8)]=1,n=0;n<7;n++)b(7,n),b(o-8,n),b(7,n+o-7);for(t=0;t<8;t++)b(t,7),b(t+o-8,7),b(t,o-8);for(t=0;t<9;t++)b(t,8);for(t=0;t<8;t++)b(t+o-8,8),b(8,t);for(n=0;n<7;n++)b(8,n+o-7);for(t=0;t<o-14;t++)1&t?(b(8+t,6),b(6,8+t)):(p[8+t+6*o]=1,p[6+o*(8+t)]=1);if(C>6)for(r=Z.vpat[C-7],s=17,t=0;t<6;t++)for(n=0;n<3;n++,s--)1&(s>11?C>>s-12:r>>s)?(p[5-t+o*(2-n+o-11)]=1,p[2-n+o-11+o*(5-t)]=1):(b(5-t,2-n+o-11),b(2-n+o-11,5-t));for(n=0;n<o;n++)for(t=0;t<=n;t++)p[t+o*n]&&b(t,n);for(v=u.length,d=0;d<v;d++)J[d]=u.charCodeAt(d);if(u=J.slice(0),v>=(t=P*(O+w)+w)-2&&(v=t-2,C>9&&v--),d=v,C>9){for(u[d+2]=0,u[d+3]=0;d--;)u[d+3]|=255&(r=u[d])<<4,u[d+2]=r>>4;u[2]|=255&v<<4,u[1]=v>>4,u[0]=64|v>>12}else{for(u[d+1]=0,u[d+2]=0;d--;)u[d+2]|=255&(r=u[d])<<4,u[d+1]=r>>4;u[1]|=255&v<<4,u[0]=64|v>>4}for(d=v+3-(C<10);d<t;)u[d++]=236,u[d++]=17;for(N[0]=1,d=0;d<e;d++){for(N[d+1]=1,h=d;h>0;h--)N[h]=N[h]?N[h-1]^H[I(E[N[h]]+d)]:N[h-1];N[0]=H[I(E[N[0]]+d)]}for(d=0;d<=e;d++)N[d]=E[N[d]];for(s=t,n=0,d=0;d<O;d++)j(n,P,s,e),n+=P,s+=e;for(d=0;d<w;d++)j(n,P+1,s,e),n+=P+1,s+=e;for(n=0,d=0;d<P;d++){for(h=0;h<O;h++)J[n++]=u[d+h*P];for(h=0;h<w;h++)J[n++]=u[O*P+d+h*(P+1)]}for(h=0;h<w;h++)J[n++]=u[O*P+d+h*(P+1)];for(d=0;d<e;d++)for(h=0;h<O+w;h++)J[n++]=u[t+d+h*e];for(u=J,t=n=o-1,s=v=1,Q=(P+e)*(O+w)+w,d=0;d<Q;d++)for(r=u[d],h=0;h<8;h++,r<<=1){128&r&&(p[t+o*n]=1);do{v?t--:(t++,s?0!=n?n--:(s=!s,6==(t-=2)&&(t--,n=9)):n!=o-1?n++:(s=!s,6==(t-=2)&&(t--,n-=8))),v=!v}while(S(t,n))}for(u=p.slice(0),r=0,n=3e4,s=0;s<8&&(L(s),(t=D())<n&&(n=t,r=s),7!=r);s++)p=u.slice(0);for(r!=s&&L(r),n=Z.fmtword[r+(M-1<<3)],s=0;s<8;s++,n>>=1)1&n&&(p[o-1-s+8*o]=1,s<6?p[8+o*s]=1:p[8+o*(s+1)]=1);for(s=0;s<7;s++,n>>=1)1&n&&(p[8+o*(o-7+s)]=1,s?p[6-s+8*o]=1:p[7+8*o]=1);return p},m.init=function(){M=m.ecclevel;var c=m.genframe(m.url);m.toTable?m.tableWrite(c,o):m.canvasWrite(c,o)},m.init()}function y(A,m="#fff0",M="#000"){var C;const o=new Z({url:A||"Hello",size:360,colorLight:m,colorDark:M,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0});return null===(C=null==o?void 0:o.toImage("svg+xml"))||void 0===C?void 0:C.src}f.d(B,{w:()=>y}),Z.prototype={canvasWrite:function(A,m){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(A,m);var M=this.size,C=this.qrc;C.lineWidth=1;var o=M;o/=m+10,o=Math.round(o-.5);var O=4;this.noBorder?(C.canvas.width=C.canvas.height=o*m,O=0):C.canvas.width=C.canvas.height=M,C.clearRect(0,0,M,M),C.fillStyle=this.colorLight,C.fillRect(0,0,o*(m+8),o*(m+8)),C.fillStyle=this.colorDark;for(var w=0;w<m;w++)for(var P=0;P<m;P++)A[P*m+w]&&C.fillRect(o*(O+w),o*(O+P),o,o)},tableWrite:function(A,m){var M=this,C=Math.round(this.size/m-3.5)+"px",o=m+(M.noBorder?0:2*M.borderSize),O=M.borderSize,w="width:"+C+";height:"+C+";",P=M.colorLight,e=M.colorDark,u=document.createElement("table");u.style.cssText="border:0;border-collapse:collapse;";for(var J,p=document.createElement("tr"),F=document.createElement("td"),T=function(){return F.cloneNode()},N=function(){var U=T();return U.style.cssText=w+"background:"+P,U},b=function(U){for(var D=U.firstChild,c=0;c<O;c++)U.insertBefore(N(),D),U.appendChild(N())},q=0;q<m;q++){var I=p.cloneNode();u.appendChild(I);for(var j=0;j<m;j++)if(1===A[q*m+j]){var S=(J=void 0,(J=T()).style.cssText=w+"background:"+e,J);I.appendChild(S)}else{var L=N();I.appendChild(L)}M.noBorder||b(I)}M.noBorder||function(U){for(var D=U.firstChild,c=0;c<M.borderSize;c++){for(var t=p.cloneNode(),n=0;n<o;n++){var s=N();t.appendChild(s)}U.appendChild(t),U.insertBefore(t.cloneNode(!0),D)}}(u),M.domElement.innerHTML="",M.domElement.appendChild(u)},getContext:function(A){return A.getContext&&A.getContext("2d")?A.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(A){if(this.qrc){var m=this.imageTypes[A];if(!m)throw new Error(A+" is not a valid image type ");var M=new Image;return M.src=this.domElement.toDataURL(m),M}}},Z.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],Z.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],Z.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],Z.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],Z.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],Z.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],Z.N1=3,Z.N2=3,Z.N3=40,Z.N4=10}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts-libs_common_src_lib_qr-code_ts.js.map