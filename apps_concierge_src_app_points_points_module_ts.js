(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_points_points_module_ts"],{1287:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PointsModule:()=>me});var o=n(1511),s=n(6073),i=n(33),r=n(5109),a=n(6898),l=n(787),c=n(2619),u=n(4762),d=n(8223),p=n(8512),g=n(3530),m=n(4608),f=n(5090),Z=n(6280);function _(e){(0,Z.Z)(1,arguments);var t=(0,f.Z)(e);return t.setMinutes(0,0,0),t}var h=n(6547),v=n(3080),A=n(9996),x=n(4019),w=n(8303),T=n(7209),q=n(5320),b=n(5980),M=n(6283),y=n(4786),C=n(1522),O=n(1548),N=n(6756),J=n(84),U=n(5135),k=n(9236),P=n(7806),I=n(5089);function Q(e,t){1&e&&c._UZ(0,"mat-spinner",29),2&e&&c.Q6J("diameter",32)}function S(e,t){if(1&e&&(c.TgZ(0,"mat-option",30),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",(null==e?null:e.display_name)||(null==e?null:e.name)),c.xp6(1),c.hij(" ",(null==e?null:e.display_name)||(null==e?null:e.name)," ")}}function j(e,t){1&e&&(c.TgZ(0,"mat-option",31),c._uU(1," No matching options "),c.qZA()),2&e&&c.Q6J("disabled",!0)}const Y=function(){return{standalone:!0}};function F(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"a-time-field",43),c.NdJ("ngModelChange",function(t){return c.CHM(e),c.oxw().$implicit.second=t}),c.qZA()}if(2&e){const e=c.oxw().$implicit;c.Q6J("ngModel",e.second)("from",e.first)("ngModelOptions",c.DdM(3,Y))}}function D(e,t){if(1&e&&(c.TgZ(0,"div",32),c.TgZ(1,"div",33),c.TgZ(2,"mat-form-field",34),c.TgZ(3,"mat-select",35),c.NdJ("ngModelChange",function(e){return t.$implicit.type=e}),c.TgZ(4,"mat-option",36),c._uU(5," Before "),c.qZA(),c.TgZ(6,"mat-option",37),c._uU(7," Between "),c.qZA(),c.TgZ(8,"mat-option",38),c._uU(9," After "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"a-time-field",39),c.NdJ("ngModelChange",function(e){return t.$implicit.first=e}),c.qZA(),c.YNc(11,F,1,4,"a-time-field",40),c.qZA(),c.TgZ(12,"span",41),c._uU(13,"@"),c.qZA(),c.TgZ(14,"a-counter",42),c.NdJ("ngModelChange",function(e){return t.$implicit.rate=e}),c.qZA(),c.qZA()),2&e){const e=t.$implicit,n=c.oxw(2);c.xp6(3),c.Q6J("ngModel",e.type)("ngModelOptions",c.DdM(11,Y)),c.xp6(7),c.Q6J("ngModel",e.first)("ngModelOptions",c.DdM(12,Y)),c.xp6(1),c.Q6J("ngIf","between"===e.type),c.xp6(3),c.Q6J("ngModel",e.rate)("ngModelOptions",c.DdM(13,Y))("min",0)("max",300)("step",5)("render_fn",n.renderPercent)}}const L=function(){return[]};function $(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"main",5),c.TgZ(1,"section",6),c.TgZ(2,"div",7),c.TgZ(3,"label",8),c._uU(4,"Asset Type"),c.qZA(),c.TgZ(5,"mat-form-field",9),c.TgZ(6,"mat-select",10),c.TgZ(7,"mat-option",11),c._uU(8,"Space"),c.qZA(),c.TgZ(9,"mat-option",12),c._uU(10,"Desk"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"div",7),c.TgZ(12,"label",8),c._uU(13,"Asset"),c.qZA(),c.TgZ(14,"mat-form-field",9),c.TgZ(15,"app-icon",13),c._uU(16,"search"),c.qZA(),c._UZ(17,"input",14),c.YNc(18,Q,1,1,"mat-spinner",15),c.qZA(),c.TgZ(19,"mat-autocomplete",null,16),c.YNc(21,S,2,2,"mat-option",17),c.ALo(22,"async"),c.YNc(23,j,2,1,"mat-option",18),c.ALo(24,"async"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"section",19),c.TgZ(26,"div",7),c.TgZ(27,"label",20),c._uU(28,"Standard hourly rate"),c.qZA(),c._UZ(29,"a-counter",21),c.qZA(),c.TgZ(30,"div",22),c.TgZ(31,"h2"),c._uU(32,"Rate Rules"),c.qZA(),c.TgZ(33,"div"),c.YNc(34,D,15,14,"div",23),c.qZA(),c.TgZ(35,"button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().newRule()}),c.TgZ(36,"div",25),c.TgZ(37,"app-icon",0),c._uU(38,"add"),c.qZA(),c.TgZ(39,"span",26),c._uU(40,"Add new rule"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(41,"section",19),c.TgZ(42,"div",7),c.TgZ(43,"label"),c._uU(44,"Accept Points?"),c.qZA(),c._UZ(45,"mat-checkbox",27),c.qZA(),c.TgZ(46,"div",7),c.TgZ(47,"label",20),c._uU(48,"Discount Cap"),c.qZA(),c._UZ(49,"a-counter",28),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.MAs(20),t=c.oxw();let n,o;c.Q6J("formGroup",t.form),c.xp6(15),c.ekj("opacity-30",!t.form.get("type").value),c.xp6(2),c.Q6J("disabled",!t.form.get("type").value)("matAutocomplete",e),c.xp6(1),c.Q6J("ngIf",t.loading),c.xp6(3),c.Q6J("ngForOf",c.lcZ(22,17,t.asset_options)),c.xp6(2),c.Q6J("ngIf",!(null!=(n=c.lcZ(24,19,t.asset_options))&&n.length)),c.xp6(6),c.Q6J("min",500)("max",8e4)("step",500)("render_fn",t.renderPrice),c.xp6(5),c.Q6J("ngForOf",(null==(o=t.form.get("custom_rates"))?null:o.value)||c.DdM(21,L)),c.xp6(15),c.Q6J("min",0)("max",100)("step",5)("render_fn",t.renderPercent)}}let E=(()=>{class e{constructor(e,t,n){var o,i,r,a,l,u,d,p,g;this._spaces=e,this._desks=t,this._data=n,this.event=new c.vpe,this.form=new s.cw({id:new s.NI((null===(o=this._data.asset)||void 0===o?void 0:o.id)||""),asset_id:new s.NI((null===(i=this._data.asset)||void 0===i?void 0:i.asset_id)||""),name:new s.NI((null===(r=this._data.asset)||void 0===r?void 0:r.name)||""),type:new s.NI((null===(a=this._data.asset)||void 0===a?void 0:a.type)||""),accept_points:new s.NI(null!==(u=null===(l=this._data.asset)||void 0===l?void 0:l.accept_points)&&void 0!==u&&u),discount_cap:new s.NI((null===(d=this._data.asset)||void 0===d?void 0:d.discount_cap)||50),unit_price:new s.NI((null===(p=this._data.asset)||void 0===p?void 0:p.unit_price)||1e3),custom_rates:new s.NI((null===(g=this._data.asset)||void 0===g?void 0:g.custom_rates)||[])}),this.asset_options=(0,v.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,A.U)(([{type:e,name:t},n,o])=>{this.loading=!0;const s=(t||"").toLowerCase();return e?"space"===e?n.filter(e=>e.name.toLowerCase().includes(s)):o.filter(e=>e.name.toLowerCase().includes(s)):[]}),(0,x.b)(()=>this.loading=!1),(0,w.d)(1)),this._desks.setFilters({zones:["All"]})}renderPrice(e=0){var t;return`$${null===(t=e/100)||void 0===t?void 0:t.toFixed(2)}`}renderPercent(e=0){return`${e}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:_(new Date),second:(0,h.Z)(_(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:Object.assign({},this.form.value)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(T.sK),c.Y36(q.H),c.Y36(m.WI))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-asset-modal"]],outputs:{event:"event"},decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-gray-200"],["mat-button","","mat-dialog-close","",1,"inverse","flex-1"],["mat-button","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"disabled","matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-gray-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["mat-button","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-gray-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(e,t){1&e&&(c.TgZ(0,"header"),c.TgZ(1,"h2",0),c._uU(2),c.qZA(),c.qZA(),c.YNc(3,$,50,22,"main",1),c.TgZ(4,"footer",2),c.TgZ(5,"button",3),c._uU(6," Cancel "),c.qZA(),c.TgZ(7,"button",4),c.NdJ("click",function(){return t.save()}),c._uU(8," Save "),c.qZA(),c.qZA()),2&e&&(c.xp6(2),c.hij(" ",null!=t.form&&null!=t.form.value&&t.form.value.id?"Edit":"New"," Points Asset "),c.xp6(1),c.Q6J("ngIf",t.form),c.xp6(4),c.Q6J("disabled",!t.form.value.name))},directives:[o.O5,b.lW,m.ZT,s.JL,s.sg,M.KE,y.gD,s.JJ,s.u,C.ey,O.o,M.qo,N.Nt,s.Fj,J.ZL,J.XC,o.sg,U.R,k.oG,P.$g,M.R9,s.On,I.N],pipes:[o.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}"]}),e})(),G=(()=>{class e{constructor(e){this._dialog=e,this._assets=new p.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(e=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(e))})}newAsset(e){return(0,u.mG)(this,void 0,void 0,function*(){const t=this._dialog.open(E,{data:{asset:e}}),n=yield Promise.race([t.componentInstance.event.pipe((0,g.P)(e=>"done"===e.reason)).toPromise(),t.afterClosed().toPromise()]);if("done"!==n.reason)return t.close();this._assets.next([...this._assets.getValue().filter(t=>t.id!==(null==e?void 0:e.id)),Object.assign(Object.assign({},n.metadata),{id:n.metadata.id||`PA-${(0,d.Iy)(999999999)}`})]),t.close()})}removeAsset(e){this._assets.next(this._assets.getValue().filter(t=>t.id!==e))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(m.uw))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var H=n(1354);function W(e,t){if(1&e&&(c.TgZ(0,"span",6),c._uU(1),c.qZA()),2&e){const e=t.data;c.xp6(1),c.Oqu(e)}}function z(e,t){if(1&e&&(c.TgZ(0,"span",7),c._uU(1),c.ALo(2,"currency"),c.qZA()),2&e){const e=t.data;c.xp6(1),c.hij(" ",c.lcZ(2,1,e/100)," per hour ")}}function R(e,t){if(1&e&&(c.TgZ(0,"div",8),c.TgZ(1,"app-icon",9),c._uU(2),c.qZA(),c.qZA()),2&e){const e=t.data;c.xp6(1),c.ekj("text-success",e)("text-error",!e),c.xp6(1),c.hij(" ",e?"check_circle":"cancel"," ")}}function X(e,t){if(1&e&&(c.TgZ(0,"div",10),c._uU(1),c.qZA()),2&e){const e=t.data;c.xp6(1),c.hij("",e,"%")}}function B(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",11),c.TgZ(1,"button",12),c.NdJ("click",function(){const t=c.CHM(e).row;return c.oxw().edit(t)}),c.TgZ(2,"app-icon"),c._uU(3,"edit"),c.qZA(),c.qZA(),c.TgZ(4,"button",12),c.NdJ("click",function(){const t=c.CHM(e).row;return c.oxw().remove(t)}),c.TgZ(5,"app-icon"),c._uU(6,"delete"),c.qZA(),c.qZA(),c.qZA()}}const K=function(){return["name","type","unit_price","accept_points","discount_cap","actions"]},V=function(){return["Name","Type","Unit Price","Accepts Points","Discount %"," "]},ee=function(){return["flex"]},te=function(e,t,n,o,s){return{type:e,unit_price:t,accept_points:n,discount_cap:o,actions:s}};let ne=(()=>{class e{constructor(e){this._state=e,this.asset_list=this._state.assets,this.edit=e=>this._state.newAsset(e),this.remove=e=>this._state.removeAsset(null==e?void 0:e.id)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(G))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-gray-200","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["mat-icon-button","",3,"click"]],template:function(e,t){if(1&e&&(c._UZ(0,"custom-table",0),c.YNc(1,W,2,1,"ng-template",null,1,c.W1O),c.YNc(3,z,3,3,"ng-template",null,2,c.W1O),c.YNc(5,R,3,5,"ng-template",null,3,c.W1O),c.YNc(7,X,2,1,"ng-template",null,4,c.W1O),c.YNc(9,B,7,0,"ng-template",null,5,c.W1O)),2&e){const e=c.MAs(2),n=c.MAs(4),o=c.MAs(6),s=c.MAs(8),i=c.MAs(10);c.Q6J("dataSource",t.asset_list)("columns",c.DdM(5,K))("display_column",c.DdM(6,V))("column_size",c.DdM(7,ee))("template",c.qbA(8,te,e,n,o,s,i))}},directives:[H.C,O.o,b.lW],pipes:[o.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}"]}),e})();var oe=n(6828);let se=(()=>{class e{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(e=0){return`$${null==e?void 0:e.toFixed(2)}`}loadPoints(){this.points=Object.assign(Object.assign({},this.points),JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}"))}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-white","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-white","rounded","border","border-gray-200",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-white","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-gray-200"],[1,"bg-white","rounded","border","border-gray-200",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(e,t){1&e&&(c.TgZ(0,"h2",0),c._uU(1," Point Overview "),c.qZA(),c.TgZ(2,"section",1),c.TgZ(3,"h2",2),c._uU(4,"Point Value"),c.qZA(),c.TgZ(5,"div",3),c.TgZ(6,"span"),c._uU(7,"1 point ="),c.qZA(),c.TgZ(8,"a-counter",4),c.NdJ("ngModelChange",function(e){return t.points.value=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(9,"app-icon",5),c._uU(10," info "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"section",6),c.TgZ(12,"h2",2),c._uU(13,"Automatic Rewards"),c.qZA(),c.TgZ(14,"div",7),c.TgZ(15,"div",8),c.TgZ(16,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.desk_checkin=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(17,"span"),c._uU(18,"Points for desk check-in"),c.qZA(),c.qZA(),c.TgZ(19,"div",8),c.TgZ(20,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.room_checkin=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(21,"span"),c._uU(22,"Points for room check-in"),c.qZA(),c.qZA(),c.TgZ(23,"div",8),c.TgZ(24,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.booking_cancel=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(25,"span"),c._uU(26,"Points for booking cancellation with 24 hour notice"),c.qZA(),c.qZA(),c.TgZ(27,"div",10),c.TgZ(28,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.wellness_card=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(29,"span"),c._uU(30,"Points for completing wellness card"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(8),c.Q6J("step",.1)("ngModel",t.points.value)("render_fn",t.renderPrice),c.xp6(8),c.Q6J("ngModel",t.points.desk_checkin),c.xp6(4),c.Q6J("ngModel",t.points.room_checkin),c.xp6(4),c.Q6J("ngModel",t.points.booking_cancel),c.xp6(4),c.Q6J("ngModel",t.points.wellness_card))},directives:[U.R,s.JJ,s.On,O.o,oe.gM],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),e})();var ie=n(1490),re=n(1496),ae=n(1521);const le=["*"];let ce=(()=>{class e extends d.KG{constructor(e){super(),this._org=e}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,g.P)(e=>e)).toPromise()})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(re.w7))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-topbar"]],features:[c.qOj],ngContentSelectors:le,decls:3,vars:0,consts:[[1,"flex-1","w-2"]],template:function(e,t){1&e&&(c.F$t(),c.TgZ(0,"div",0),c.Hsn(1),c.qZA(),c._UZ(2,"date-options"))},directives:[ae.E],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),e})();function ue(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",6),c.NdJ("click",function(){return c.CHM(e),c.oxw().newAsset()}),c._uU(1," New Asset "),c.qZA()}}const de=function(){return["/points","overview"]},pe=function(){return["/points","assets"]},ge=[{path:"",component:(()=>{class e extends d.KG{constructor(e,t){super(),this._state=e,this._router=t,this.newAsset=()=>this._state.newAsset()}ngOnInit(){var e;this.subscription("route.params",this._router.events.subscribe(()=>{var e;const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.page=t[t.length-1]}));const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.page=t[t.length-1]}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(G),c.Y36(a.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["placeos-points"]],features:[c.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col"],[1,"relative","z-10"],["mat-button","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["mat-button","",3,"click"]],template:function(e,t){1&e&&(c._UZ(0,"sidebar"),c.TgZ(1,"main",0),c.TgZ(2,"points-topbar",1),c.YNc(3,ue,2,0,"button",2),c.qZA(),c.TgZ(4,"nav",3),c.TgZ(5,"a",4),c._uU(6," Overview "),c.qZA(),c.TgZ(7,"a",4),c._uU(8," Assets "),c.qZA(),c.qZA(),c.TgZ(9,"div",5),c._UZ(10,"router-outlet"),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Q6J("ngIf","assets"===t.page),c.xp6(2),c.Q6J("routerLink",c.DdM(5,de))("active","overview"===t.page),c.xp6(2),c.Q6J("routerLink",c.DdM(6,pe))("active","assets"===t.page))},directives:[ie.k,ce,o.O5,r.BU,a.yS,r.Nj,a.lC,b.lW],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})(),children:[{path:"",redirectTo:"overview"},{path:"assets",component:ne},{path:"overview",component:se},{path:"*",redirectTo:"overview"}]}];let me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,s.u5,s.UX,l.v,r.Nh,i.Hi,a.Bz.forChild(ge)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map