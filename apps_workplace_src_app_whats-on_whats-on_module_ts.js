(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_workplace_src_app_whats-on_whats-on_module_ts"],{2996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WhatsOnModule:()=>T});var o=n(1511),i=n(6073),s=n(6898),l=n(2619),r=n(4892),a=n(3730),c=n(4441);let u=(()=>{class e{get user(){return(0,a.ar)()}get day(){return(0,c.Z)(Date.now(),"dd")}get month(){return(0,c.Z)(Date.now(),"MMM")}get year(){return(0,c.Z)(Date.now(),"yyyy")}get time(){return(0,c.Z)(Date.now(),"h:mm a")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["whats-on-header"]],decls:13,vars:5,consts:[[1,"flex","items-center","justify-between","my-8","w-full"],[1,"text-4xl"],["time","",1,"flex","items-center","space-x-2","font-medium"],["day","",1,"text-4xl","font-normal"],["date","",1,""],[1,"text-primary","uppercase","leading-none"],[1,"text-base","leading-none"],["time","",1,"text-4xl","font-normal","pl-4"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"h1",1),l._uU(2),l.qZA(),l.TgZ(3,"div",2),l.TgZ(4,"div",3),l._uU(5),l.qZA(),l.TgZ(6,"div",4),l.TgZ(7,"div",5),l._uU(8),l.qZA(),l.TgZ(9,"div",6),l._uU(10),l.qZA(),l.qZA(),l.TgZ(11,"div",7),l._uU(12),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(2),l.hij("Hello, ",null==t.user?null:t.user.name,""),l.xp6(3),l.Oqu(t.day),l.xp6(3),l.hij(" ",t.month," "),l.xp6(2),l.Oqu(t.year),l.xp6(2),l.Oqu(t.time))},styles:[""]}),e})();var d=n(4266),f=n(5980),m=n(1548);const p=["container"];function h(e,t){if(1&e&&(l.TgZ(0,"div",10),l._UZ(1,"div",11),l.TgZ(2,"div",12),l.TgZ(3,"div",13),l._uU(4),l.ALo(5,"date"),l.qZA(),l.TgZ(6,"div",14),l._uU(7),l.qZA(),l.TgZ(8,"div",15),l._uU(9),l.ALo(10,"slice"),l.qZA(),l.TgZ(11,"button",16),l.TgZ(12,"div",17),l.TgZ(13,"div"),l._uU(14,"Read more"),l.qZA(),l.TgZ(15,"app-icon"),l._uU(16,"arrow_forward"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){const e=t.$implicit,n=t.index,o=l.oxw(2);l.Udp("min-width","calc("+100/o.cards+"% - .45rem)")("max-width","calc("+100/o.cards+"% - .45rem)")("opacity",n>=o.index&&n<o.index+o.cards?1:0)("transform","translateX(calc(-"+100*o.index+"% - "+.45*o.index+"rem))"),l.xp6(4),l.hij(" ",l.xi3(5,11,null==e?null:e.date,"mediumDate")," "),l.xp6(3),l.hij(" ",(null==e?null:e.title)||"<No title>"," "),l.xp6(2),l.hij(" ",l.Dn7(10,14,(null==e?null:e.body)||"<No description>",0,320)," ")}}function x(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"button",18),l.NdJ("click",function(){l.CHM(e);const t=l.oxw(2);return t.index=t.index-t.cards}),l.TgZ(1,"app-icon"),l._uU(2,"chevron_left"),l.qZA(),l.qZA()}}function g(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"button",19),l.NdJ("click",function(){l.CHM(e);const t=l.oxw(2);return t.index=t.index+t.cards}),l.TgZ(1,"app-icon"),l._uU(2,"chevron_right"),l.qZA(),l.qZA()}}function Z(e,t){if(1&e&&(l.ynx(0),l.YNc(1,h,17,18,"div",7),l.YNc(2,x,3,0,"button",8),l.YNc(3,g,3,0,"button",9),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngForOf",e.events),l.xp6(1),l.Q6J("ngIf",e.index>0),l.xp6(1),l.Q6J("ngIf",e.index+e.cards<e.events.length)}}function w(e,t){if(1&e&&(l.TgZ(0,"div",20),l._uU(1),l.qZA()),2&e){const e=l.oxw();l.xp6(1),l.hij(" No ",e.title," events ")}}let y=(()=>{class e{constructor(){this.title="Upcoming",this.events=[new d.ym({title:"Welcome Event",body:"Today we welcome our new employees joining our extensive family."}),new d.ym({title:"Christmas Party",body:"Come together for our pre-Christmas party"}),new d.ym({title:"100 Year Celebration",body:"Celebrating our 100th year in business"}),new d.ym({title:"Chocolate Sharing Day",body:"Chocolate!"}),new d.ym({title:"Shoe Shine Day",body:"Good shoes deserve good care. Join us to have your shoe polished and shined by professionals."})],this.index=0}onResize(){this.index=0}get cards(){return Math.floor(this._el.nativeElement.clientWidth/240)||1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["whats-on-event-list"]],viewQuery:function(e,t){if(1&e&&l.Gf(p,7),2&e){let e;l.iGM(e=l.CRH())&&(t._el=e.first)}},hostBindings:function(e,t){1&e&&l.NdJ("resize",function(){return t.onResize()},!1,l.Jf7)},inputs:{title:"title",events:"events"},decls:9,vars:3,consts:[[1,"flex","items-center","space-x-4","mb-2"],[1,"text-xl","font-medium"],[1,"flex-1","h-0.5","w-px","bg-primary"],[1,"relative","flex","items-center","w-full","space-x-2","py-2"],["container",""],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center justify-center bg-white shadow h-[24rem]","card","",3,"min-width","max-width","opacity","transform",4,"ngFor","ngForOf"],["mat-icon-button","","class","absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["mat-icon-button","","class","absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-16 bg-white shadow",3,"click",4,"ngIf"],["card","",1,"flex","flex-col","items-center","justify-center","bg-white","shadow","h-[24rem]"],[1,"w-full","h-40","bg-gray-400"],[1,"flex","flex-col","items-center","p-2","flex-1","h-1/2","w-full","space-y-2"],["date","",1,"w-full","uppercase","text-primary"],["title","",1,"w-full","font-medium"],["desc","",1,"flex-1","h-1/2","w-full","text-sm"],["mat-button","",1,"w-full"],[1,"flex","items-center"],["mat-icon-button","",1,"absolute","left-0","top-1/2","transform","-translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],["mat-icon-button","",1,"absolute","right-0","top-1/2","transform","translate-x-1/2","-translate-y-16","bg-white","shadow",3,"click"],[1,"p-12","flex","items-center","justify-center","w-full","opacity-40"]],template:function(e,t){if(1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"h3",1),l._uU(2),l.qZA(),l._UZ(3,"div",2),l.qZA(),l.TgZ(4,"div",3,4),l.YNc(6,Z,4,3,"ng-container",5),l.qZA(),l.YNc(7,w,2,1,"ng-template",null,6,l.W1O)),2&e){const e=l.MAs(8);l.xp6(2),l.Oqu(t.title),l.xp6(4),l.Q6J("ngIf",null==t.events?null:t.events.length)("ngIfElse",e)}},directives:[o.O5,o.sg,f.lW,m.o],pipes:[o.uU,o.OU],styles:["[card][_ngcontent-%COMP%]{transition:transform .2s,opacity .2s}"]}),e})();var v=n(9676);const b=["dashboard",""];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["","dashboard",""]],attrs:b,decls:8,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-col","flex-1","px-0","sm:px-8","overflow-y-auto","overflow-x-hidden","h-px","sm:h-auto"],[1,"mb-4"],["title","Ongoing"]],template:function(e,t){1&e&&(l._UZ(0,"topbar"),l.TgZ(1,"div",0),l.TgZ(2,"div",1),l.TgZ(3,"main",2),l._UZ(4,"whats-on-header"),l._UZ(5,"whats-on-event-list",3),l._UZ(6,"whats-on-event-list",4),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"footer-menu"))},directives:[r.o,u,y,v.i],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}"]}),e})();var q=n(1781);const A=[{path:"",component:_}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[o.ez,i.u5,q.v,s.Bz.forChild(A)]]}),e})()}}]);
//# sourceMappingURL=apps_workplace_src_app_whats-on_whats-on_module_ts.js.map