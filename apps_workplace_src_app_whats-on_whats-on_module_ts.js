"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_whats-on_whats-on_module_ts"],{723:(M,m,a)=>{a.r(m),a.d(m,{WhatsOnModule:()=>L});var l=a(4666),d=a(2508),u=a(959),t=a(9676),p=a(4187),h=a(6012),f=a(4549),c=a(5148);let x=(()=>{class n{get user(){return(0,f.ar)()}get day(){return(0,c.Z)(Date.now(),"dd")}get month(){return(0,c.Z)(Date.now(),"MMM")}get year(){return(0,c.Z)(Date.now(),"yyyy")}get time(){return(0,c.Z)(Date.now(),"h:mm a")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["whats-on-header"]],decls:13,vars:5,consts:[[1,"flex","items-center","justify-between","my-8","w-full"],[1,"text-4xl"],["time","",1,"flex","items-center","space-x-2","font-medium"],["day","",1,"text-4xl","font-normal"],["date","",1,""],[1,"text-primary","uppercase","leading-none"],[1,"text-base","leading-none"],["time","",1,"text-4xl","font-normal","pl-4"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._uU(5),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6),t._uU(10),t.qZA()(),t.TgZ(11,"div",7),t._uU(12),t.qZA()()()),2&e&&(t.xp6(2),t.hij("Hello, ",null==s.user?null:s.user.name,""),t.xp6(3),t.Oqu(s.day),t.xp6(3),t.hij(" ",s.month," "),t.xp6(2),t.Oqu(s.year),t.xp6(2),t.Oqu(s.time))}}),n})();var r=a(2995),g=a(5306),v=a(4522);const y=["container"];function w(n,i){if(1&n&&(t.TgZ(0,"div",10),t._UZ(1,"div",11),t.TgZ(2,"div",12)(3,"div",13),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",14),t._uU(7),t.qZA(),t.TgZ(8,"div",15),t._uU(9),t.ALo(10,"slice"),t.qZA(),t.TgZ(11,"button",16)(12,"div",17)(13,"div"),t._uU(14,"Read more"),t.qZA(),t.TgZ(15,"app-icon"),t._uU(16,"arrow_forward"),t.qZA()()()()()),2&n){const e=i.$implicit,s=i.index,o=t.oxw(2);t.Udp("min-width","calc("+100/o.cards+"% - .45rem)")("max-width","calc("+100/o.cards+"% - .45rem)")("opacity",s>=o.index&&s<o.index+o.cards?1:0)("transform","translateX(calc(-"+100*o.index+"% - "+.45*o.index+"rem))"),t.xp6(4),t.hij(" ",t.xi3(5,11,null==e?null:e.date,"mediumDate")," "),t.xp6(3),t.hij(" ",(null==e?null:e.title)||"<No title>"," "),t.xp6(2),t.hij(" ",t.Dn7(10,14,(null==e?null:e.body)||"<No description>",0,320)," ")}}function _(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.index=o.index-o.cards)}),t.TgZ(1,"app-icon"),t._uU(2,"chevron_left"),t.qZA()()}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.index=o.index+o.cards)}),t.TgZ(1,"app-icon"),t._uU(2,"chevron_right"),t.qZA()()}}function O(n,i){if(1&n&&(t.ynx(0),t.YNc(1,w,17,18,"div",7),t.YNc(2,_,3,0,"button",8),t.YNc(3,Z,3,0,"button",9),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.events),t.xp6(1),t.Q6J("ngIf",e.index>0),t.xp6(1),t.Q6J("ngIf",e.index+e.cards<e.events.length)}}function b(n,i){if(1&n&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" No ",e.title," events ")}}let T=(()=>{class n{constructor(){this.title="Upcoming",this.events=[new r.ym({title:"Welcome Event",body:"Today we welcome our new employees joining our extensive family."}),new r.ym({title:"Christmas Party",body:"Come together for our pre-Christmas party"}),new r.ym({title:"100 Year Celebration",body:"Celebrating our 100th year in business"}),new r.ym({title:"Chocolate Sharing Day",body:"Chocolate!"}),new r.ym({title:"Shoe Shine Day",body:"Good shoes deserve good care. Join us to have your shoe polished and shined by professionals."})],this.index=0}onResize(){this.index=0}get cards(){return Math.floor(this._el.nativeElement.clientWidth/240)||1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["whats-on-event-list"]],viewQuery:function(e,s){if(1&e&&t.Gf(y,7),2&e){let o;t.iGM(o=t.CRH())&&(s._el=o.first)}},hostBindings:function(e,s){1&e&&t.NdJ("resize",function(){return s.onResize()},!1,t.Jf7)},inputs:{title:"title",events:"events"},decls:9,vars:3,consts:[[1,"flex","items-center","space-x-4","mb-2"],[1,"text-xl","font-medium"],[1,"flex-1","h-0.5","w-px","bg-primary"],[1,"relative","flex","items-center","w-full","space-x-2","py-2"],["container",""],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center justify-center bg-white shadow h-[24rem]","card","",3,"min-width","max-width","opacity","transform",4,"ngFor","ngForOf"],["mat-icon-button","","class","absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["mat-icon-button","","class","absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["card","",1,"flex","flex-col","items-center","justify-center","bg-white","shadow","h-[24rem]"],[1,"w-full","h-40","bg-gray-400"],[1,"flex","flex-col","items-center","p-2","flex-1","h-1/2","w-full","space-y-2"],["date","",1,"w-full","uppercase","text-primary"],["title","",1,"w-full","font-medium"],["desc","",1,"flex-1","h-1/2","w-full","text-sm"],["mat-button","",1,"w-full"],[1,"flex","items-center"],["mat-icon-button","",1,"absolute","left-0","top-1/2","transform","-translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],["mat-icon-button","",1,"absolute","right-0","top-1/2","transform","translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],[1,"p-12","flex","items-center","justify-center","w-full","opacity-40"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.qZA(),t._UZ(3,"div",2),t.qZA(),t.TgZ(4,"div",3,4),t.YNc(6,O,4,3,"ng-container",5),t.qZA(),t.YNc(7,b,2,1,"ng-template",null,6,t.W1O)),2&e){const o=t.MAs(8);t.xp6(2),t.Oqu(s.title),t.xp6(4),t.Q6J("ngIf",null==s.events?null:s.events.length)("ngIfElse",o)}},dependencies:[l.sg,l.O5,g.o,v.lW,l.OU,l.uU],styles:["[card][_ngcontent-%COMP%]{transition:transform .2s,opacity .2s}\n/*# sourceMappingURL=whats-on-event-list.component.ts-angular-inline--107.css.map*/"]}),n})();const W=["dashboard",""];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["","dashboard",""]],attrs:W,decls:8,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-col","flex-1","px-0","sm:px-8","overflow-y-auto","overflow-x-hidden","h-px","sm:h-auto"],[1,"mb-4"],["title","Ongoing"]],template:function(e,s){1&e&&(t._UZ(0,"topbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"main",2),t._UZ(4,"whats-on-header")(5,"whats-on-event-list",3)(6,"whats-on-event-list",4),t.qZA()()(),t._UZ(7,"footer-menu"))},dependencies:[p.o,h.i,x,T],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}\n/*# sourceMappingURL=whats-on.component.ts-angular-inline--106.css.map*/"]}),n})();var A=a(1992);const E=[{path:"",component:U}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,d.u5,A.v,u.Bz.forChild(E)]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_whats-on_whats-on_module_ts.js.map