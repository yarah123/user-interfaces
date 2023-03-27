"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_catering_catering_module_ts"],{9526:(B,C,o)=>{o.r(C),o.d(C,{CateringModule:()=>c});var s=o(4666),m=o(2508),g=o(9885),b=o(5892),v=o(1169),x=o(3045),_=o(9112),t=o(2560),T=o(4945),f=o(207),Z=o(8501),y=o(2189),M=o(1670),z=o(5670),J=o(6221),d=o(1950),A=o(2481),U=o(1484),w=o(8441),I=o(5074),N=o(7371);function O(i,e){if(1&i&&(t.TgZ(0,"mat-option",3),t._uU(1),t.qZA()),2&i){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",n.display_name||n.name," ")}}function Y(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.addItem())}),t._uU(1," Add Item "),t.qZA()}}function Q(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.editConfig())}),t._uU(1," Edit Config "),t.qZA()}}function j(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.importMenu())}),t._uU(1," Import Menu "),t.qZA()}}function F(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.setRoomAvailability())}),t._uU(1," Room Availability "),t.qZA()}}function E(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.setChargeCodes())}),t._uU(1," Charge Codes "),t.qZA()}}class u extends _.cx{get building(){return this._org.building}constructor(e,n,a,r,h,K){super(),this._orders=e,this._catering=n,this._org=a,this._route=r,this._router=h,this._dialog=K,this.zones=[],this.levels=this._org.active_levels,this.setDate=p=>this._orders.filters={...this._orders.filters,date:p},this.updateZones=p=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:p.join(",")}}),this._orders.filters={...this._orders.filters,zones:[p]},this._catering.zone=p[0]||this._catering.zone},this.addItem=()=>this._catering.addItem(),this.editConfig=()=>this._catering.editConfig(),this.importMenu=()=>this._catering.importMenu()}ngOnInit(){var e=this;return(0,M.Z)(function*(){yield e._org.initialised.pipe((0,z.P)(n=>n)).toPromise(),e._catering.zone=(e._orders.filters?.zones||[])[0]||e._org.building?.id,e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const a=n.get("zone_ids").split(",");if(!a.length)return;const r=e._org.levelWithID(a);if(e.zones=a,!r)return;e._org.building=e._org.buildings.find(h=>h.id===r.parent_id)}})),e.subscription("route.params",e._route.paramMap.subscribe(n=>e.page=n.has("view")?n.get("view"):"")),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(a=>n.find(r=>r.id===a)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)}))})()}setRoomAvailability(){this._dialog.open(A.C)}setChargeCodes(){this._dialog.open(d.F7)}}function R(i,e){1&i&&(t.TgZ(0,"div",7),t._uU(1,' To edit the menu select "All Levels" from the top left '),t.qZA())}function k(i,e){1&i&&t._UZ(0,"catering-order-list",8)}function L(i,e){1&i&&t._UZ(0,"catering-menu",8)}u.\u0275fac=function(e){return new(e||u)(t.Y36(d.Ii),t.Y36(d.jW),t.Y36(J.w7),t.Y36(g.gz),t.Y36(g.F0),t.Y36(U.uw))},u.\u0275cmp=t.Xpm({type:u,selectors:[["catering-topbar"]],features:[t.qOj],decls:14,vars:10,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["btn","","matRipple","",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],["btn","","matRipple","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(r){return n.zones[0]=r})("ngModelChange",function(r){return n.updateZones([r])}),t.TgZ(3,"mat-option",3),t._uU(4," All Levels "),t.qZA(),t.YNc(5,O,2,2,"mat-option",4),t.ALo(6,"async"),t.qZA()(),t.YNc(7,Y,2,0,"button",5),t.YNc(8,Q,2,0,"button",5),t.YNc(9,j,2,0,"button",5),t.YNc(10,F,2,0,"button",5),t.YNc(11,E,2,0,"button",5),t._UZ(12,"div",6),t.TgZ(13,"date-options",7),t.NdJ("dateChange",function(r){return n.setDate(r)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",n.zones[0]),t.xp6(1),t.Q6J("value",null==n.building?null:n.building.id),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,8,n.levels)),t.xp6(2),t.Q6J("ngIf","menu"===n.page&&(!n.zones[0]||n.zones[0]===(null==n.building?null:n.building.id))),t.xp6(1),t.Q6J("ngIf","menu"===n.page),t.xp6(1),t.Q6J("ngIf","menu"===n.page),t.xp6(1),t.Q6J("ngIf","menu"===n.page),t.xp6(1),t.Q6J("ngIf","menu"===n.page))},dependencies:[s.sg,s.O5,m.JJ,m.On,w.E,I.KE,N.gD,f.ey,f.wG,s.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=catering-topbar.component.ts-angular-inline--123.css.map*/"]});const D=function(){return["/catering","menu"]},G=function(){return["/catering","orders"]};function S(i,e){1&i&&(t.TgZ(0,"div",9)(1,"a",10)(2,"div",11),t._UZ(3,"div",12),t.TgZ(4,"span",13),t._uU(5,"Menus and Pricing"),t.qZA()(),t.TgZ(6,"div",14),t._uU(7," View and Edit Menus and Pricing "),t.qZA()(),t.TgZ(8,"a",10)(9,"div",11),t._UZ(10,"div",12),t.TgZ(11,"span",13),t._uU(12,"Today's Orders"),t.qZA()(),t.TgZ(13,"div",14),t._uU(14," View Catering Orders and their statuses upon arrival "),t.qZA()()()),2&i&&(t.xp6(1),t.Q6J("routerLink",t.DdM(6,D)),t.xp6(1),t.Udp("background-image","url(assets/menus.jpg)"),t.xp6(6),t.Q6J("routerLink",t.DdM(7,G)),t.xp6(1),t.Udp("background-image","url(assets/orders.jpg)"))}class l extends _.cx{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}}l.\u0275fac=function(e){return new(e||l)(t.Y36(g.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["","app-catering",""]],features:[t.qOj],attrs:["app-catering",""],decls:9,vars:4,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"relative","z-10"],["class","p-2 flex items-center justify-center bg-blue-600 text-white text-sm",4,"ngIf"],[1,"flex","flex-1","h-1/2","w-full","overflow-auto"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"p-2","flex","items-center","justify-center","bg-blue-600","text-white","text-sm"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-white","dark:bg-neutral-700","shadow","text-black","dark:text-white",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-black","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(e,n){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"catering-topbar",1),t.YNc(3,R,2,0,"div",2),t.TgZ(4,"div",3),t.ynx(5,4),t.YNc(6,k,1,0,"catering-order-list",5),t.YNc(7,L,1,0,"catering-menu",5),t.YNc(8,S,15,8,"div",6),t.BQk(),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf","menu"===n.page),t.xp6(2),t.Q6J("ngSwitch",n.page),t.xp6(1),t.Q6J("ngSwitchCase","orders"),t.xp6(1),t.Q6J("ngSwitchCase","menu"))},dependencies:[s.O5,s.RF,s.n9,s.ED,T.k,f.wG,Z.B,y.I,g.rH,u],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{opacity:.8}a[_ngcontent-%COMP%]:first-child{margin:0}\n/*# sourceMappingURL=catering.component.ts-angular-inline--122.css.map*/"]});const H=[{path:"",component:l},{path:":view",component:l}];class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[s.ez,m.u5,x.v,b.Nh,v.Hi,d.uy,g.Bz.forChild(H)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map