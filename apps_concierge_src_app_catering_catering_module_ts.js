"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_catering_catering_module_ts"],{9526:(k,m,i)=>{i.r(m),i.d(m,{CateringModule:()=>L});var c=i(4666),u=i(2508),l=i(9885),v=i(5892),b=i(1169),x=i(3045),f=i(9112),t=i(2560),_=i(4945),h=i(207),T=i(8501),Z=i(2189),M=i(1670),y=i(5670),z=i(6221),p=i(9364),U=i(8441),J=i(4522),w=i(5074),O=i(7371);function A(n,a){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addItem())}),t._uU(1," Add Item "),t.qZA()}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.editConfig())}),t._uU(1," Edit Config "),t.qZA()}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.importMenu())}),t._uU(1," Import Menu "),t.qZA()}}let j=(()=>{class n extends f.KG{constructor(e,o,r,s,d){super(),this._orders=e,this._catering=o,this._org=r,this._route=s,this._router=d,this.zones=[],this.levels=this._org.active_levels,this.setDate=g=>this._orders.filters={...this._orders.filters,date:g},this.updateZones=g=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:g.join(",")}}),this._orders.filters={...this._orders.filters,zones:[g]}},this.addItem=()=>this._catering.addItem(),this.editConfig=()=>this._catering.editConfig(),this.importMenu=()=>this._catering.importMenu()}ngOnInit(){var e=this;return(0,M.Z)(function*(){yield e._org.initialised.pipe((0,y.P)(o=>o)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const r=o.get("zone_ids").split(",");if(!r.length)return;const s=e._org.levelWithID(r);if(e.zones=r,!s)return;e._org.building=e._org.buildings.find(d=>d.id===s.parent_id)}})),e.subscription("route.params",e._route.paramMap.subscribe(o=>e.page=o.has("view")?o.get("view"):"")),e.subscription("levels",e._org.active_levels.subscribe(o=>{e.zones=e.zones.filter(r=>o.find(s=>s.id===r)),!e.zones.length&&o.length&&e.zones.push(o[0].id),e.updateZones(e.zones)}))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.Ii),t.Y36(p.jW),t.Y36(z.w7),t.Y36(l.gz),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["catering-topbar"]],features:[t.qOj],decls:10,vars:7,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],["mat-button","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(s){return o.zones=s})("ngModelChange",function(s){return o.updateZones(s)}),t.YNc(3,A,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.YNc(5,I,2,0,"button",4),t.YNc(6,N,2,0,"button",4),t.YNc(7,Y,2,0,"button",4),t._UZ(8,"div",5),t.TgZ(9,"date-options",6),t.NdJ("dateChange",function(s){return o.setDate(s)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",o.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,5,o.levels)),t.xp6(2),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page))},dependencies:[c.sg,c.O5,u.JJ,u.On,U.E,J.lW,w.KE,O.gD,h.ey,c.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=catering-topbar.component.ts-angular-inline--119.css.map*/"]}),n})();const Q=["app-catering",""];function F(n,a){1&n&&t._UZ(0,"catering-order-list",6)}function P(n,a){1&n&&t._UZ(0,"catering-menu",6)}const E=function(){return["/catering","menu"]},S=function(){return["/catering","orders"]};function D(n,a){1&n&&(t.TgZ(0,"div",7)(1,"a",8)(2,"div",9),t._UZ(3,"div",10),t.TgZ(4,"span",11),t._uU(5,"Menus and Pricing"),t.qZA()(),t.TgZ(6,"div",12),t._uU(7," View and Edit Menus and Pricing "),t.qZA()(),t.TgZ(8,"a",8)(9,"div",9),t._UZ(10,"div",10),t.TgZ(11,"span",11),t._uU(12,"Today's Orders"),t.qZA()(),t.TgZ(13,"div",12),t._uU(14," View Catering Orders and their statuses upon arrival "),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.DdM(6,E)),t.xp6(1),t.Udp("background-image","url(assets/menus.jpg)"),t.xp6(6),t.Q6J("routerLink",t.DdM(7,S)),t.xp6(1),t.Udp("background-image","url(assets/orders.jpg)"))}let C=(()=>{class n extends f.KG{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","app-catering",""]],features:[t.qOj],attrs:Q,decls:8,vars:3,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"relative","z-10"],[1,"flex","flex-1","h-1/2","w-full","overflow-auto"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-white","dark:bg-neutral-700","shadow","text-black","dark:text-white",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-black","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(e,o){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"catering-topbar",1),t.TgZ(3,"div",2),t.ynx(4,3),t.YNc(5,F,1,0,"catering-order-list",4),t.YNc(6,P,1,0,"catering-menu",4),t.YNc(7,D,15,8,"div",5),t.BQk(),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngSwitch",o.page),t.xp6(1),t.Q6J("ngSwitchCase","orders"),t.xp6(1),t.Q6J("ngSwitchCase","menu"))},dependencies:[c.RF,c.n9,c.ED,_.k,h.wG,T.B,Z.I,l.yS,j],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{opacity:.8}a[_ngcontent-%COMP%]:first-child{margin:0}\n/*# sourceMappingURL=catering.component.ts-angular-inline--118.css.map*/"]}),n})();const G=[{path:"",component:C},{path:":view",component:C}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,u.u5,x.v,v.Nh,b.Hi,p.uy,l.Bz.forChild(G)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map