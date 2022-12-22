"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_whats-on_whats-on_module_ts"],{723:(M,f,i)=>{i.r(f),i.d(f,{WhatsOnModule:()=>l});var r=i(4666),h=i(2508),x=i(959),t=i(9676),g=i(4187),v=i(6012),y=i(8368),p=i(5148);class c{get user(){return(0,y.ar)()}get day(){return(0,p.Z)(Date.now(),"dd")}get month(){return(0,p.Z)(Date.now(),"MMM")}get year(){return(0,p.Z)(Date.now(),"yyyy")}get time(){return(0,p.Z)(Date.now(),"h:mm a")}}c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["whats-on-header"]],decls:13,vars:5,consts:[[1,"flex","items-center","justify-between","my-8","w-full"],[1,"text-4xl"],["time","",1,"flex","items-center","space-x-2","font-medium"],["day","",1,"text-4xl","font-normal"],["date","",1,""],[1,"text-primary","uppercase","leading-none"],[1,"text-base","leading-none"],["time","",1,"text-4xl","font-normal","pl-4"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._uU(5),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6),t._uU(10),t.qZA()(),t.TgZ(11,"div",7),t._uU(12),t.qZA()()()),2&n&&(t.xp6(2),t.hij("Hello, ",null==e.user?null:e.user.name,""),t.xp6(3),t.Oqu(e.day),t.xp6(3),t.hij(" ",e.month," "),t.xp6(2),t.Oqu(e.year),t.xp6(2),t.Oqu(e.time))}});var m=i(1299),w=i(5306),_=i(9159);const Z=["container"];function b(o,n){if(1&o&&(t.TgZ(0,"div",10),t._UZ(1,"div",11),t.TgZ(2,"div",12)(3,"div",13),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",14),t._uU(7),t.qZA(),t.TgZ(8,"div",15),t._uU(9),t.ALo(10,"slice"),t.qZA(),t.TgZ(11,"button",16)(12,"div",17)(13,"div"),t._uU(14,"Read more"),t.qZA(),t.TgZ(15,"app-icon"),t._uU(16,"arrow_forward"),t.qZA()()()()()),2&o){const e=n.$implicit,a=n.index,s=t.oxw(2);t.Udp("min-width","calc("+100/s.cards+"% - .45rem)")("max-width","calc("+100/s.cards+"% - .45rem)")("opacity",a>=s.index&&a<s.index+s.cards?1:0)("transform","translateX(calc(-"+100*s.index+"% - "+.45*s.index+"rem))"),t.xp6(4),t.hij(" ",t.xi3(5,11,null==e?null:e.date,"mediumDate")," "),t.xp6(3),t.hij(" ",(null==e?null:e.title)||"<No title>"," "),t.xp6(2),t.hij(" ",t.Dn7(10,14,(null==e?null:e.body)||"<No description>",0,320)," ")}}function C(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.index=s.index-s.cards)}),t.TgZ(1,"app-icon"),t._uU(2,"chevron_left"),t.qZA()()}}function O(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.index=s.index+s.cards)}),t.TgZ(1,"app-icon"),t._uU(2,"chevron_right"),t.qZA()()}}function T(o,n){if(1&o&&(t.ynx(0),t.YNc(1,b,17,18,"div",7),t.YNc(2,C,3,0,"button",8),t.YNc(3,O,3,0,"button",9),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.events),t.xp6(1),t.Q6J("ngIf",e.index>0),t.xp6(1),t.Q6J("ngIf",e.index+e.cards<e.events.length)}}function U(o,n){if(1&o&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" No ",e.title," events ")}}class d{constructor(){this.title="Upcoming",this.events=[new m.ym({title:"Welcome Event",body:"Today we welcome our new employees joining our extensive family."}),new m.ym({title:"Christmas Party",body:"Come together for our pre-Christmas party"}),new m.ym({title:"100 Year Celebration",body:"Celebrating our 100th year in business"}),new m.ym({title:"Chocolate Sharing Day",body:"Chocolate!"}),new m.ym({title:"Shoe Shine Day",body:"Good shoes deserve good care. Join us to have your shoe polished and shined by professionals."})],this.index=0}onResize(){this.index=0}get cards(){return Math.floor(this._el.nativeElement.clientWidth/240)||1}}d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["whats-on-event-list"]],viewQuery:function(n,e){if(1&n&&t.Gf(Z,7),2&n){let a;t.iGM(a=t.CRH())&&(e._el=a.first)}},hostBindings:function(n,e){1&n&&t.NdJ("resize",function(){return e.onResize()},!1,t.Jf7)},inputs:{title:"title",events:"events"},decls:9,vars:3,consts:[[1,"flex","items-center","space-x-4","mb-2"],[1,"text-xl","font-medium"],[1,"flex-1","h-0.5","w-px","bg-primary"],[1,"relative","flex","items-center","w-full","space-x-2","py-2"],["container",""],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center justify-center bg-white shadow h-[24rem]","card","",3,"min-width","max-width","opacity","transform",4,"ngFor","ngForOf"],["mat-icon-button","","class","absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["mat-icon-button","","class","absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["card","",1,"flex","flex-col","items-center","justify-center","bg-white","shadow","h-[24rem]"],[1,"w-full","h-40","bg-gray-400"],[1,"flex","flex-col","items-center","p-2","flex-1","h-1/2","w-full","space-y-2"],["date","",1,"w-full","uppercase","text-primary"],["title","",1,"w-full","font-medium"],["desc","",1,"flex-1","h-1/2","w-full","text-sm"],["mat-button","",1,"w-full"],[1,"flex","items-center"],["mat-icon-button","",1,"absolute","left-0","top-1/2","transform","-translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],["mat-icon-button","",1,"absolute","right-0","top-1/2","transform","translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],[1,"p-12","flex","items-center","justify-center","w-full","opacity-40"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.qZA(),t._UZ(3,"div",2),t.qZA(),t.TgZ(4,"div",3,4),t.YNc(6,T,4,3,"ng-container",5),t.qZA(),t.YNc(7,U,2,1,"ng-template",null,6,t.W1O)),2&n){const a=t.MAs(8);t.xp6(2),t.Oqu(e.title),t.xp6(4),t.Q6J("ngIf",null==e.events?null:e.events.length)("ngIfElse",a)}},dependencies:[r.sg,r.O5,w.o,_.eB,r.OU,r.uU],styles:["[card][_ngcontent-%COMP%]{transition:transform .2s,opacity .2s}\n/*# sourceMappingURL=whats-on-event-list.component.ts-angular-inline--124.css.map*/"]});class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["","dashboard",""]],attrs:["dashboard",""],decls:8,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-col","flex-1","px-0","sm:px-8","overflow-y-auto","overflow-x-hidden","h-px","sm:h-auto"],[1,"mb-4"],["title","Ongoing"]],template:function(n,e){1&n&&(t._UZ(0,"topbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"main",2),t._UZ(4,"whats-on-header")(5,"whats-on-event-list",3)(6,"whats-on-event-list",4),t.qZA()()(),t._UZ(7,"footer-menu"))},dependencies:[g.o,v.i,c,d],styles:["[_nghost-%COMP%]{position:absolute;inset:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}\n/*# sourceMappingURL=whats-on.component.ts-angular-inline--123.css.map*/"]});var E=i(8147);const L=[{path:"",component:u}];class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.ez,h.u5,E.v,x.Bz.forChild(L)]})}}]);
//# sourceMappingURL=apps_workplace_src_app_whats-on_whats-on_module_ts.js.map