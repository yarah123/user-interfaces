"use strict";(self.webpackChunkvisitor_kiosk=self.webpackChunkvisitor_kiosk||[]).push([["default-libs_users_src_index_ts"],{5533:(me,E,o)=>{o.d(E,{Y:()=>ue,en:()=>he.en,n2:()=>c.n2,pP:()=>c.pP,w0:()=>y.w0}),o(9861),o(5372),o(9645),o(9036),o(1670);var c=o(4283),y=o(9012),P=o(5197),e=o(9445);new P.n5;var x=o(3754),h=o(7486),j=o(1426),L=o(5845),f=o(1810),Q=o(9377),R=o(3200),N=o(8325),z=o(7367),X=o(1170);function p(s){(0,X.Z)(1,arguments);var n=(0,z.Z)(s);return(0,N.Z)(1e3*n)}var I=o(8987),Y=o(2317),B=o(8313),G=o(4505),H=o(4139),W=o(823),V=o(9095),$=o(7418),K=o(6942),k=o(9701),q=o(9128);const ee=["container"],w=function(){return[]};function te(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div",26),e._UZ(1,"a-user-avatar",11),e.TgZ(2,"div",27),e._uU(3),e.qZA(),e.TgZ(4,"button",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.removeUser(r))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()(),e._UZ(7,"user-availability-list",29),e.ALo(8,"async"),e.ALo(9,"async"),e.qZA()}if(2&s){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("user",t),e.xp6(2),e.hij(" ",t.name||i.host.email," "),e.xp6(4),e.Q6J("user",t)("availability",e.lcZ(8,7,i.availability)?e.lcZ(9,9,i.availability)[t.email.toLowerCase()]:e.DdM(11,w))("date",i.date)("offset",i.offset)("width",i.width)}}function ie(s,n){if(1&s&&(e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA()()),2&s){const t=n.index,i=e.oxw();e.uIk("hour",t)("disabled",i.today&&t<i.current_hour),e.xp6(2),e.AsE(" ",t%12?t%12:"12","",t>=12?"pm":"am"," ")}}function oe(s,n){if(1&s&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t.date,"shortTime")," ")}}let Z=(()=>{class s extends j.cx{get today(){return(0,L.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const t=new Date(this.date);return 5*(t.getHours()+t.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}constructor(t,i,a){super(),this._data=t,this._renderer=i,this._dialog_ref=a,this.users=new G.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.availability=this.users.pipe((0,W.b)(300),(0,V.w)(r=>(0,B.LE)({calendars:[this.host.email,...r.map(d=>d.email.toLowerCase())].join(","),period_start:(0,f.Z)((0,Q.Z)(this.date)),period_end:(0,f.Z)((0,R.Z)(this.date))}).pipe((0,$.K)(()=>(0,H.of)([])))),(0,K.U)(r=>{const d={};for(const C of r)d[C.id]=C.availability.filter(u=>"busy"===u.status).map(u=>{const b=p(u.starts_at),F=(0,I.Z)(p(u.ends_at),p(u.starts_at));return{date:b,duration:F,start:(b.getHours()+b.getMinutes()/60)/24*100,size:F/60/24*100}});return d}),(0,k.d)({}),(0,q.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0,this.users.next([...this._data.users])}addUser(t){this.users.next([...this.users.getValue().filter(i=>i.email!==t.email),t]),this.user=null}removeUser(t){this.users.next(this.users.getValue().filter(i=>i.email!==t.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const t=new Date(this.date);this.timeout("init",()=>{const i=this._container_el.nativeElement.querySelector(`[hour="${t.getHours()}"]`);if(i){const a=this._container_el.nativeElement.getBoundingClientRect(),r=i.getBoundingClientRect();this._container_el.nativeElement.scrollTo(r.left-128-a.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const t=this._container_el.nativeElement.getBoundingClientRect().width,i=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(t-i),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(t){t.preventDefault(),t.stopPropagation(),this.updateWidth(),this._move_last=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,this.move_time=!0,this._start_time=this.date,t instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMovePeriod(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMovePeriod(i))),t instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(t){t.preventDefault(),t.stopPropagation(),this.updateWidth(),this._move_last=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,this._start_time=this.duration,t instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMoveDuration(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMoveDuration(i))),t instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(t){const i=this._move_last-(t instanceof MouseEvent?t.clientX:t.touches[0].clientX),r=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;if(r){const d=this.date;this.date=(0,Y.Z)(this._start_time,r).valueOf(),this.date<Date.now()&&(this.date=d)}}_onMoveDuration(t){const i=this._move_last-(t instanceof MouseEvent?t.clientX:t.touches[0].clientX),r=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;r&&(this.duration=Math.max(30,this._start_time+r))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(h.WI),e.Y36(e.Qsj),e.Y36(h.so))},s.\u0275cmp=e.Xpm({type:s,selectors:[["find-availability-modal"]],viewQuery:function(t,i){if(1&t&&e.Gf(ee,7),2&t){let a;e.iGM(a=e.CRH())&&(i._container_el=a.first)}},features:[e.qOj],decls:38,vars:27,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-auto","divide-x","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","dark:bg-neutral-700","border-r","border-gray-300","dark:border-neutral-500","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300","dark:border-neutral-500"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","availability","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","availability","date","offset","width"],[1,"min-w-[5rem]","bg-gray-50","dark:bg-neutral-600","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","dark:border-neutral-500","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"h2",1),e._uU(2,"Find Availability"),e.qZA(),e.TgZ(3,"button",2)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",3),e.NdJ("resize",function(){return i.updateWidth()},!1,e.Jf7),e.TgZ(7,"div",4)(8,"a-date-field",5),e.NdJ("ngModelChange",function(r){return i.date=r}),e.qZA(),e.TgZ(9,"a-user-search-field",5),e.NdJ("ngModelChange",function(r){return i.user=r})("ngModelChange",function(r){return i.addUser(r)}),e.qZA()(),e.TgZ(10,"div",6,7),e.NdJ("scroll",function(){return i.updateScroll()}),e.TgZ(12,"div",8),e._UZ(13,"div",9),e.TgZ(14,"div",10),e._UZ(15,"a-user-avatar",11),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e._UZ(18,"user-availability-list",13),e.ALo(19,"async"),e.ALo(20,"async"),e.qZA(),e.YNc(21,te,10,12,"div",14),e.ALo(22,"async"),e.qZA(),e.YNc(23,ie,3,4,"div",15),e.TgZ(24,"div",16),e.NdJ("mousedown",function(r){return i.startMovePeriod(r)})("touchstart",function(r){return i.startMovePeriod(r)}),e._UZ(25,"div",17),e.TgZ(26,"div",18),e.NdJ("mousedown",function(r){return i.startMoveDuration(r)})("touchstart",function(r){return i.startMoveDuration(r)}),e.qZA(),e.TgZ(27,"div",19),e._uU(28),e.ALo(29,"duration"),e.qZA(),e.YNc(30,oe,3,4,"div",20),e.qZA()()(),e.TgZ(31,"footer",21)(32,"button",22)(33,"div",23)(34,"app-icon",24),e._uU(35,"arrow_back"),e.qZA(),e.TgZ(36,"div",25),e._uU(37,"Back to form"),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("ngModel",i.date),e.xp6(1),e.Q6J("ngModel",i.user),e.xp6(6),e.Q6J("user",i.host),e.xp6(2),e.hij(" ",i.host.name||i.host.email," "),e.xp6(1),e.Q6J("user",i.host)("date",i.date)("offset",i.offset)("availability",e.lcZ(19,18,i.availability)?e.lcZ(20,20,i.availability)[i.host.email]:e.DdM(26,w))("width",i.width),e.xp6(3),e.Q6J("ngForOf",e.lcZ(22,22,i.users)),e.xp6(2),e.Q6J("ngForOf",i.hours),e.xp6(1),e.Udp("left",i.selection_left+"rem")("width",i.selection_width+"rem"),e.xp6(4),e.hij(" ",e.lcZ(29,24,i.duration)," "),e.xp6(2),e.Q6J("ngIf",i.move_time),e.xp6(2),e.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--32.css.map*/"]}),s})();var l=o(6477);function ne(s,n){if(1&s&&(e.TgZ(0,"div",3)(1,"div",4),e._uU(2,"Unavailable"),e.qZA(),e.TgZ(3,"div",5),e._uU(4),e.ALo(5,"date"),e.ALo(6,"date"),e.qZA()()),2&s){const t=n.$implicit;e.Udp("left",t.start+"%")("width",t.size+"%"),e.xp6(4),e.AsE(" ",e.xi3(5,6,t.date,"shortTime")," - ",e.xi3(6,9,t.date.valueOf()+60*t.duration*1e3,"shortTime")," ")}}let A=(()=>{class s{constructor(){this.availability=[],this.date=Date.now(),this.offset=0,this.width=0}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date",offset:"offset",width:"width"},decls:3,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-500","h-full","pointer-events-none"],[1,"absolute","w-[120rem]","h-full","inset-y-0"],["event","","class","absolute inset-y-0 bg-primary text-white p-2 overflow-hidden border border-white rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","text-white","p-2","overflow-hidden","border","border-white","rounded"],[1,"text-xs"],[1,"text-xs","max-w-full"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,ne,7,12,"div",2),e.qZA()()),2&t&&(e.Udp("width",i.width+"px"),e.xp6(1),e.Udp("left",-i.offset+"px"),e.xp6(1),e.Q6J("ngForOf",i.availability))},dependencies:[l.sg,l.uU]}),s})();var m=o(9542),U=o(5306),T=o(9685),g=o(9314),_=o(7728),se=o(5312),re=o(7672),ae=o(2306),le=o(9697),de=o(2193);e.B6R(x.J,[l.sg,l.O5,m.JJ,m.On,h.ZT,U.o,T.k,g.VK,g.OP,g.p6,_.wG,se.Ou,re.oG],[l.uU]),e.B6R(Z,[l.sg,l.O5,m.JJ,m.On,h.ZT,ae.Q,le.d,U.o,T.k,_.wG,A],[l.Ov,l.uU,de.u]);class ue{constructor(n={}){this.type=n.type||n.location||"other",this.position=n.position||n.map_id||n.asset_id||{x:n.x/n.map_width||0,y:n.y/n.map_height||0},this.variance=n.variance||0,this.last_seen=n.last_seen||(0,f.Z)(new Date),this.level=n.level,this.building=n.building,this.at_location=!!n.at_location,this.coordinates_from=n.coordinates_from||"top-left"}}var he=o(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map