"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([[798],{6798:(B,h,s)=>{s.r(h),s.d(h,{ControlModule:()=>z});var r=s(6814),x=s(4641),f=s(6129),e=s(7691),_=s(3299),w=s(9252),Z=s(5861),L=s(8419),v=s(3121),y=s(7049),p=s(6223),C=s(4888),d=s(4170),T=s(8582),O=s(5940),S=s(3680),b=s(6318);const A=()=>["/explore"],U=n=>({space:n});function I(n,c){if(1&n&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._uU(3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6)(8,"app-icon"),e._uU(9,"account_circle"),e.qZA(),e._uU(10),e.qZA()()(),e.TgZ(11,"div",7)(12,"a",8),e.ALo(13,"safe"),e._uU(14," Control "),e.qZA(),e.TgZ(15,"a",9),e._uU(16," Find "),e.qZA()()()),2&n){const t=e.oxw();e.ekj("with-image",t.show_image),e.xp6(3),e.Oqu(t.space.name),e.xp6(3),e.Oqu(t.location),e.xp6(4),e.hij(" ",t.space.capacity||"0"," "),e.xp6(2),e.Q6J("href",e.xi3(13,8,t.space.support_url,"url"),e.LSH),e.xp6(3),e.Q6J("routerLink",e.DdM(11,A))("queryParams",e.VKq(12,U,t.space.id))}}let J=(()=>{class n{get show_image(){return this._settings.get("app.spaces.show_images")}get location(){if(!this.space)return"Unable to determine location";const t=this.space.level,o=this._org.buildings.find(l=>l.id===t.parent_id);return`${o?(o.display_name||o.name)+", ":""}${t?.display_name||t?.name||"<No Level>"}`}constructor(t,o){this._settings=t,this._org=o}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(f.gb),e.Y36(v.w7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["a-control-space-list-item"]],inputs:{space:"space"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-base-100 hover:bg-base-200 overflow-hidden p-2 pl-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-base-100","hover:bg-base-200","overflow-hidden","p-2","pl-4","mb-2"],[1,"flex","flex-col","flex-1"],[1,"text-xl"],[1,"flex","items-center","w-full","text-sm"],[1,"flex-1"],[1,"flex","items-center","text-lg"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["btn","","matRipple","","control","",1,"w-32","flex-1","sm:flex-none",3,"href"],["btn","","matRipple","","locate","",1,"w-32","flex-1","sm:flex-none","inverse",3,"routerLink","queryParams"]],template:function(o,l){1&o&&e.YNc(0,I,17,14,"div",0),2&o&&e.Q6J("ngIf",l.space)},dependencies:[r.O5,x.rH,C.o,S.wG,b.y]})}return n})();function M(n,c){1&n&&e._UZ(0,"mat-spinner",7),2&n&&e.Q6J("diameter",32)}function F(n,c){1&n&&e._UZ(0,"a-control-space-list-item",10),2&n&&e.Q6J("space",c.$implicit)}function N(n,c){if(1&n&&(e.TgZ(0,"div",8),e.YNc(1,F,1,1,"a-control-space-list-item",9),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.filtered_list)}}function Q(n,c){if(1&n&&(e.TgZ(0,"div",11)(1,"app-icon"),e._uU(2,"close"),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.search_str?' No matches for "'+t.search_str+'"':"No controllable spaces"," ")}}let Y=(()=>{class n extends f.cx{constructor(t,o){super(),this._spaces=t,this._org=o,this.space_list=[]}ngOnInit(){var t=this;return(0,Z.Z)(function*(){yield t._spaces.initialised.pipe((0,L.P)(o=>o)).toPromise(),t.space_list=t._spaces.filter(o=>!!o.support_url),t.space_list.sort((o,l)=>t.sortSpaces(o,l))})()}get filtered_list(){const t=(this.search_str||"").toLowerCase();return(this.space_list||[]).filter(o=>{const l=this._org.buildings.find(u=>u.id===o.level.parent_id),a=(o.name||"").toLowerCase(),i=((o.level?o.level.name:"")||"").toLowerCase(),m=((l?l.name:"")||"").toLowerCase();return a.indexOf(t)>=0||i&&i.indexOf(t)>=0||m&&m.indexOf(t)>=0})}sortSpaces(t,o){const l=this._org.buildings.find(g=>g.id===t.level?.parent_id),a=(t.name||"").toLowerCase(),i=((t.level?t.level.name:"")||"").toLowerCase(),m=(l?.name||"").toLowerCase(),u=this._org.buildings.find(g=>g.id===o.level?.parent_id),K=(o.name||"").toLowerCase(),X=((o.level?o.level.name:"")||"").toLowerCase(),$=(u?.name||"").toLowerCase();return m.localeCompare($)||i.localeCompare(X)||a.localeCompare(K)}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(y.sK),e.Y36(v.w7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["a-control-space-list"]],features:[e.qOj],decls:9,vars:4,consts:[[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded","h-12"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],["class","flex flex-col flex-1 overflow-auto w-full",4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[1,"flex","flex-col","flex-1","overflow-auto","w-full"],[3,"space",4,"ngFor","ngForOf"],[3,"space"],[1,"flex","flex-col","items-center","p-8"]],template:function(o,l){if(1&o&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"app-icon",2),e._uU(3,"search"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(i){return l.search_str=i}),e.qZA(),e.YNc(5,M,1,1,"mat-spinner",4),e.qZA()(),e.YNc(6,N,2,1,"div",5)(7,Q,5,1,"ng-template",null,6,e.W1O)),2&o){const a=e.MAs(8);e.xp6(4),e.Q6J("ngModel",l.search_str),e.xp6(1),e.Q6J("ngIf",l.loading),e.xp6(1),e.Q6J("ngIf",l.filtered_list.length)("ngIfElse",a)}},dependencies:[r.sg,r.O5,p.Fj,p.JJ,p.On,C.o,d.KE,d.qo,d.R9,T.Nt,O.Ou,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}mat-form-field[_ngcontent-%COMP%]{width:48rem;max-width:calc(100% - 2rem)}"]})}return n})();const P=["app-control",""];let j=(()=>{class n{constructor(t){this._settings=t}ngOnInit(){this._settings.title="Control"}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(f.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-control",""]],attrs:P,decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(o,l){1&o&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"main",1),e._UZ(3,"a-control-space-list"),e.qZA()(),e._UZ(4,"footer-menu"))},dependencies:[_.o,w.i,Y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}"]})}return n})();var E=s(7427);const R=[{path:"",component:j}];let z=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[r.ez,p.u5,x.Bz.forChild(R),E.v]})}return n})()}}]);