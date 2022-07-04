"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_directory_directory_module_ts"],{6027:(H,p,s)=>{s.r(p),s.d(p,{DirectoryModule:()=>K});var a=s(4666),f=s(959),g=s(2218),h=s(823),d=s(3298),x=s(9095),_=s(6942),m=s(6365),v=s(6862),e=s(9676),l=s(2508),y=s(4187),U=s(6012),C=s(5306),u=s(5074),L=s(1267),T=s(1708),Z=s(9685),D=s(4522),w=s(158);function I(n,o){if(1&n&&e._UZ(0,"a-user-avatar",9),2&n){const t=e.oxw(2);e.Q6J("user",t.user)}}function J(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.sendCallEvent())}),e.ALo(1,"safe"),e._uU(2," Call "),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("href",e.xi3(1,1,"tel:"+t.user.phone,"url"),e.LSH)}}const M=function(){return["/explore"]},Q=function(n){return{user:n}};function A(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",1),e.YNc(1,I,1,1,"a-user-avatar",2),e.TgZ(2,"div",3)(3,"div",4),e._uU(4),e.qZA(),e.TgZ(5,"a",5),e.ALo(6,"safe"),e._uU(7),e.qZA()(),e.TgZ(8,"div",6)(9,"a",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.sendLocateEvent())}),e._uU(10," Locate "),e.qZA(),e.YNc(11,J,3,4,"a",8),e.qZA()()}if(2&n){const t=e.oxw();e.ekj("with-image",t.show_image),e.xp6(1),e.Q6J("ngIf",t.show_image),e.xp6(3),e.Oqu(t.user.name),e.xp6(1),e.Q6J("href",e.xi3(6,9,"mailto:"+t.user.email,"url"),e.LSH),e.xp6(2),e.hij(" ",t.user.email," "),e.xp6(2),e.Q6J("routerLink",e.DdM(12,M))("queryParams",e.VKq(13,Q,t.user.email)),e.xp6(2),e.Q6J("ngIf",t.user.phone)}}let O=(()=>{class n{constructor(t){this._settings=t}get show_image(){return this._settings.get("app.users.show_avatars")}sendLocateEvent(){}sendCallEvent(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-directory-user-list-item"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-4","mb-2"],[3,"user",4,"ngIf"],[1,"flex","flex-col","flex-1","w-1/2","ml-4","sm:ml-0"],[1,"name"],["name","email",1,"text-sm","underline",3,"href"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["mat-button","","button","","locate","",1,"w-32","flex-1","sm:flex-none",3,"routerLink","queryParams","click"],["mat-button","","button","","class","w-32 flex-1 sm:flex-nones","call","",3,"href","click",4,"ngIf"],[3,"user"],["mat-button","","button","","call","",1,"w-32","flex-1","sm:flex-nones",3,"href","click"]],template:function(t,r){1&t&&e.YNc(0,A,12,15,"div",0),2&t&&e.Q6J("ngIf",r.user)},dependencies:[a.O5,f.yS,Z.k,D.zs,w.y]}),n})();const N=["a-directory-user-list",""];function E(n,o){1&n&&e._UZ(0,"mat-spinner",10),2&n&&e.Q6J("diameter",32)}function F(n,o){1&n&&e._UZ(0,"a-directory-user-list-item",15),2&n&&e.Q6J("user",o.$implicit)}function Y(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",13),e._uU(2),e.qZA(),e.YNc(3,F,1,1,"a-directory-user-list-item",14),e.BQk()),2&n){const t=e.oxw().$implicit,r=e.oxw(2);e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngForOf",r.groupedUsers[t])}}function S(n,o){if(1&n&&(e.ynx(0),e.YNc(1,Y,4,2,"ng-container",12),e.BQk()),2&n){const t=o.$implicit,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.groupedUsers[t].length)}}function j(n,o){if(1&n&&(e.ynx(0),e.YNc(1,S,2,1,"ng-container",11),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.letters)}}function $(n,o){if(1&n&&(e.TgZ(0,"div",16)(1,"app-icon",17),e._uU(2),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.search_str&&t.search_str.length>=t.min_search_length?"close":"arrow_upward"),e.xp6(2),e.hij(" ",t.search_str&&t.search_str.length>=t.min_search_length?' No matches for "'+t.search_str+'"':"Type above to search for users"," ")}}const b="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");let P=(()=>{class n extends m.KG{constructor(t){super(),this._settings=t,this.user_list=[],this.groupedUsers={},this.search$=new g.xQ,this.search_results$=this.search$.pipe((0,h.b)(400),(0,d.x)(),(0,x.w)(r=>(this.loading=!0,r.length>=this.min_search_length?(0,v.VE)(r).toPromise().catch(()=>[]):Promise.resolve(this.user_list||[]))),(0,_.U)(r=>(this.loading=!1,r)))}get min_search_length(){const t=this._settings.get("app.users.min_search_length");return"number"==typeof t&&t>=0?t:3}ngOnInit(){this.subscription("search_results",this.search_results$.subscribe(t=>{this.user_list=t,this.buildGroups(this.user_list)})),this.search$.next("")}get letters(){return b}buildGroups(t){const r=t.sort((i,c)=>i.name.localeCompare(c.name));for(const i of this.letters)this.groupedUsers[i]=r.filter(c=>c.name.startsWith(i))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","a-directory-user-list",""]],features:[e.qOj],attrs:N,decls:14,vars:4,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search for a person...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],[1,"flex-1","h-1/2","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"py-2","px-4","font-medium"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],[1,"flex","flex-col","items-center","p-8"],[1,"text-5xl"],[1,"text"]],template:function(t,r){if(1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"mat-form-field",3)(5,"app-icon",4),e._uU(6,"search"),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(c){return r.search_str=c})("ngModelChange",function(c){return r.search$.next(c)}),e.qZA(),e.YNc(8,E,1,1,"mat-spinner",6),e.qZA()(),e.TgZ(9,"main",7),e.YNc(10,j,2,1,"ng-container",8),e.qZA()()(),e._UZ(11,"footer-menu"),e.YNc(12,$,5,2,"ng-template",null,9,e.W1O)),2&t){const i=e.MAs(13);e.xp6(7),e.Q6J("ngModel",r.search_str),e.xp6(1),e.Q6J("ngIf",r.loading),e.xp6(2),e.Q6J("ngIf",r.groupedUsers&&r.user_list.length)("ngIfElse",i)}},dependencies:[a.sg,a.O5,l.Fj,l.JJ,l.On,y.o,U.i,C.o,u.KE,u.qo,u.R9,L.Nt,T.Ou,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}mat-form-field[_ngcontent-%COMP%]{width:768px;max-width:calc(100% - 2rem)}\n/*# sourceMappingURL=user-list.component.ts-angular-inline--91.css.map*/"]}),n})();var B=s(1992);const G=[{path:"",component:P}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,l.u5,f.Bz.forChild(G),B.v]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_directory_directory_module_ts.js.map