(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{oOUL:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",function(){return G});var c=e("SVse"),o=e("s7LF"),a=e("iInd"),i=e("Ef91"),s=e("sWYD"),r=e("8Y7J"),l=e("grfs"),b=e("T7LW"),u=e("mrSG"),m=e("oHTx"),d=e("z03u"),p=e("Dxy4");const f=function(){return["/explore"]},g=function(t){return{level:t}};function h(t,n){if(1&t&&(r.Xb(0,"a",9),r.Pc(1),r.Wb()),2&t){const t=n.$implicit;r.tc("routerLink",r.wc(3,f))("queryParams",r.xc(4,g,t.id)),r.Fb(1),r.Rc(" ",t.display_name||t.name," ")}}const x=function(t){return{space:t}};function v(t,n){if(1&t&&(r.Xb(0,"a",9),r.Pc(1),r.Wb()),2&t){const t=n.$implicit;r.tc("routerLink",r.wc(3,f))("queryParams",r.xc(4,x,t.id)),r.Fb(1),r.Rc("",t.display_name||t.name," ")}}function _(t,n){1&t&&(r.Xb(0,"span",10),r.Pc(1,"No free spaces"),r.Wb())}const w=function(){return{class:"material-icons",content:"crop_free"}},F=function(){return{class:"material-icons",content:"av_timer"}};let W=(()=>{class t{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return Object(u.a)(this,void 0,void 0,function*(){this._state.pollFreeSpaces()})}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return t.\u0275fac=function(n){return new(n||t)(r.Rb(m.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["dashboard-availability"]],decls:22,vars:21,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],[1,"bg-darken","rounded-lg","mr-2","text-2xl",3,"icon"],["free-levels","",1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","my-4","p-2"],[1,"items","space-y-2"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(t,n){1&t&&(r.Xb(0,"h3",0),r.Pc(1,"Available Now"),r.Wb(),r.Xb(2,"div",1),r.Xb(3,"div",2),r.Sb(4,"app-icon",3),r.Xb(5,"div"),r.Pc(6,"Most free space:"),r.Wb(),r.Wb(),r.Xb(7,"div",4),r.Nc(8,h,2,6,"a",5),r.nc(9,"slice"),r.nc(10,"async"),r.Wb(),r.Wb(),r.Xb(11,"div",6),r.Xb(12,"div",2),r.Sb(13,"app-icon",3),r.Xb(14,"div"),r.Pc(15,"Free rooms now:"),r.Wb(),r.Wb(),r.Xb(16,"div",7),r.Nc(17,v,2,6,"a",5),r.nc(18,"slice"),r.nc(19,"async"),r.Nc(20,_,2,0,"span",8),r.nc(21,"async"),r.Wb(),r.Wb()),2&t&&(r.Fb(4),r.tc("icon",r.wc(19,w)),r.Fb(4),r.tc("ngForOf",r.qc(9,5,r.oc(10,9,n.levels_free),0,2)),r.Fb(5),r.tc("icon",r.wc(20,F)),r.Fb(4),r.tc("ngForOf",r.qc(18,11,r.oc(19,15,n.space_list),0,3)),r.Fb(3),r.tc("ngIf",!r.oc(21,17,n.space_list).length))},directives:[d.a,c.n,c.o,p.a,a.f],pipes:[c.w,c.b],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }"]}),t})();var P=e("bCuN"),y=e("iELJ"),X=e("ZFy/"),O=e("QtqI");function C(t,n){1&t&&r.Sb(0,"a-user-avatar",15),2&t&&r.tc("user",n.$implicit)}function k(t,n){if(1&t&&(r.Xb(0,"a",16),r.Pc(1,"Join Call"),r.Wb()),2&t){const t=r.mc().$implicit;r.tc("href",t.meeting_link,r.Gc)}}const M=function(){return{class:"material-icons",content:"room"}},S=function(){return{class:"material-icons",content:"group"}};function L(t,n){if(1&t){const t=r.Yb();r.Xb(0,"div",3),r.Sb(1,"div",4),r.Xb(2,"div",5),r.Xb(3,"div",6),r.Pc(4),r.nc(5,"date"),r.Wb(),r.Xb(6,"div",7),r.Pc(7),r.Wb(),r.Xb(8,"div",8),r.Sb(9,"app-icon",9),r.Xb(10,"a",10),r.ic("click",function(){r.Ec(t);const e=n.$implicit,c=r.mc();return e.space?c.locateSpace(e.space):""}),r.Pc(11),r.Wb(),r.Wb(),r.Xb(12,"div",11),r.Sb(13,"app-icon",9),r.Pc(14),r.Wb(),r.Xb(15,"div",12),r.Nc(16,C,1,1,"a-user-avatar",13),r.Wb(),r.Wb(),r.Nc(17,k,2,1,"a",14),r.Wb()}if(2&t){const t=n.$implicit;r.Fb(4),r.Qc(r.pc(5,13,t.date,"shortTime")),r.Fb(3),r.Qc(t.title),r.Fb(2),r.tc("icon",r.wc(16,M)),r.Fb(1),r.Jb("underline",!!t.space),r.tc("matTooltip",t.space?"Locate Space":""),r.Fb(1),r.Sc(" ",(null==t.space?null:t.space.display_name)||(null==t.space?null:t.space.name)||"<No Location>"," ",null!=t.space&&null!=t.space.level&&t.space.level.display_name||null!=t.space&&null!=t.space.level&&t.space.level.name?", "+t.space.level.display_name||!1:""," "),r.Fb(2),r.tc("icon",r.wc(17,S)),r.Fb(1),r.Sc(" ",t.guests.length," Guest",1===t.guests.length?"":"s"," "),r.Fb(2),r.tc("ngForOf",t.guests),r.Fb(1),r.tc("ngIf",t.meeting_link)}}function I(t,n){1&t&&(r.Xb(0,"p",17),r.Pc(1," No upcoming events for today "),r.Wb())}let N=(()=>{class t{constructor(t,n){this._state=t,this._dialog=n,this.upcoming_events=this._state.upcoming_events}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}locateSpace(t){this._dialog.open(P.a,{data:{space:t}})}}return t.\u0275fac=function(n){return new(n||t)(r.Rb(m.a),r.Rb(y.b))},t.\u0275cmp=r.Lb({type:t,selectors:[["dashboard-upcoming"]],decls:7,vars:10,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["class","text-dark-fade text-center w-full",4,"ngIf"],["name","event",1,"flex","bg-white","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"],[1,"text-dark-fade","text-center","w-full"]],template:function(t,n){1&t&&(r.Xb(0,"h3",0),r.Pc(1,"Today's Events"),r.Wb(),r.Nc(2,L,18,18,"div",1),r.nc(3,"slice"),r.nc(4,"async"),r.Nc(5,I,2,0,"p",2),r.nc(6,"async")),2&t&&(r.Fb(2),r.tc("ngForOf",r.qc(3,2,r.oc(4,6,n.upcoming_events),0,3)),r.Fb(3),r.tc("ngIf",!r.oc(6,8,n.upcoming_events).length))},directives:[c.n,c.o,d.a,X.a,O.a,p.a],pipes:[c.w,c.b,c.f],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='time'][_ngcontent-%COMP%] {\n                color: #00529b;\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                padding: 1rem 1rem 1rem 2rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                top: 1rem;\n                left: -0.8rem;\n                height: 2.5rem;\n                width: 1.6rem;\n                background-color: #00529b;\n            }\n\n            button[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                margin-left: -0.25rem;\n            }"]}),t})();var E=e("rJgo");const $=["input"],q=function(){return{class:"material-icons",content:"close"}};function Q(t,n){if(1&t){const t=r.Yb();r.Xb(0,"div",14),r.Sb(1,"a-user-avatar",15),r.Xb(2,"div",16),r.Pc(3),r.Wb(),r.Xb(4,"div",17),r.Sb(5,"div",18),r.Pc(6," Level 12 "),r.Wb(),r.Xb(7,"button",19),r.ic("click",function(){r.Ec(t);const e=n.$implicit;return r.mc().removeUser(e)}),r.Sb(8,"app-icon",20),r.Wb(),r.Wb()}if(2&t){const t=n.$implicit;r.Fb(1),r.tc("user",t),r.Fb(2),r.Qc(t.name),r.Fb(5),r.tc("icon",r.wc(3,q))}}function T(t,n){if(1&t&&(r.Xb(0,"button",21),r.Pc(1),r.Wb()),2&t){const t=r.mc();r.Fb(1),r.Rc(" ",t.search_str?'No matches for "'+t.search_str+'"':"Type to search for users..."," ")}}function R(t,n){if(1&t){const t=r.Yb();r.Xb(0,"button",22),r.ic("click",function(){r.Ec(t);const e=n.$implicit;return r.mc().addUser(e)}),r.Xb(1,"div",23),r.Sb(2,"a-user-avatar",24),r.Xb(3,"div",25),r.Xb(4,"div"),r.Pc(5),r.Wb(),r.Xb(6,"div",26),r.Pc(7),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&t){const t=n.$implicit;r.Fb(2),r.tc("user",t),r.Fb(3),r.Qc(t.name),r.Fb(2),r.Qc(t.email)}}const U=function(){return{class:"material-icons",content:"person_add"}};let D=(()=>{class t extends l.b{constructor(t){super(),this._state=t,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=t=>this._state.addContact(t),this.removeUser=t=>this._state.removeContact(t),this.updateSearch=t=>this._state.setOptions({search:t}),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return t.\u0275fac=function(n){return new(n||t)(r.Rb(m.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["dashboard-contacts"]],viewQuery:function(t,n){if(1&t&&r.Uc($,1),2&t){let t;r.zc(t=r.jc())&&(n._input_el=t.first)}},features:[r.Cb],decls:20,vars:17,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["name","location",1,"flex","items-center","text-sm"],["name","dot",1,"mr-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(t,n){if(1&t&&(r.Xb(0,"h3",0),r.Pc(1,"Contacts"),r.Wb(),r.Xb(2,"div",1),r.Nc(3,Q,9,4,"div",2),r.nc(4,"async"),r.Xb(5,"button",3),r.ic("menuOpened",function(){return n.focusInput()})("menuClosed",function(){return n.clearInput()}),r.Xb(6,"div",4),r.Sb(7,"app-icon",5),r.Xb(8,"span",6),r.Pc(9,"Click to add a person to contacts"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(10,"mat-menu",7,8),r.Xb(12,"div",9),r.ic("click",function(t){return t.stopPropagation(),t.preventDefault()}),r.Xb(13,"input",10,11),r.ic("ngModelChange",function(t){return n.search_str=t})("ngModelChange",function(){return n.updateSearch(n.search_str)}),r.Wb(),r.Wb(),r.Nc(15,T,2,1,"button",12),r.nc(16,"async"),r.Nc(17,R,8,3,"button",13),r.nc(18,"slice"),r.nc(19,"async"),r.Wb()),2&t){const t=r.Ac(11);let e=null;r.Fb(3),r.tc("ngForOf",r.oc(4,6,n.contacts)),r.Fb(2),r.tc("matMenuTriggerFor",t),r.Fb(2),r.tc("icon",r.wc(16,U)),r.Fb(6),r.tc("ngModel",n.search_str),r.Fb(2),r.tc("ngIf",!(null!=(e=r.oc(16,8,n.search_results))&&e.length)),r.Fb(2),r.tc("ngForOf",r.qc(18,10,r.oc(19,14,n.search_results),0,8))}},directives:[c.n,p.b,E.d,d.a,E.a,E.b,o.c,o.l,o.o,c.o,O.a],pipes:[c.b,c.w],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='contact-list'][_ngcontent-%COMP%] {\n                padding: 0 0.5rem 0.5rem 0;\n            }\n\n            [name='contact'][_ngcontent-%COMP%] {\n                min-width: 8rem;\n                width: 8rem;\n                margin-left: 0.5rem;\n                margin-top: 0.5rem;\n            }\n\n            [name='contact-name'][_ngcontent-%COMP%] {\n                font-weight: 400;\n            }\n\n            [name='dot'][_ngcontent-%COMP%] {\n                height: 8px;\n                width: 8px;\n                border-radius: 8px;\n                background-color: #22992e;\n            }\n\n            button[name='close'][_ngcontent-%COMP%] {\n                position: absolute;\n                display: none;\n                top: .25rem;\n                right: .25rem;\n            }\n\n            [name='contact'][_ngcontent-%COMP%]:hover   button[name='close'][_ngcontent-%COMP%] {\n                display: initial;\n            }\n\n            button[name='contact'][_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                border: none;\n                min-width: calc(100% - 0.5rem) !important;\n            }"]}),t})();var J=e("b6yr");function j(t,n){if(1&t&&(r.Xb(0,"a",9),r.Xb(1,"div",10),r.Sb(2,"app-icon",11),r.Xb(3,"span",12),r.Pc(4),r.Wb(),r.Wb(),r.Wb()),2&t){const t=n.$implicit;r.tc("routerLink",t.route),r.Fb(2),r.tc("icon",t.icon),r.Fb(2),r.Qc(t.name)}}const Y=[{path:"",component:(()=>{class t{constructor(t){this._settings=t}get tiles(){return this._settings.get("app.home.tiles")||[]}get datetime(){return Object(s.a)(new Date,"EEEE, h:mma")}}return t.\u0275fac=function(n){return new(n||t)(r.Rb(l.e))},t.\u0275cmp=r.Lb({type:t,selectors:[["dashboard"]],decls:14,vars:4,consts:[[3,"menu","menuChange"],[1,"top","relative","flex","flex-col","justify-center","text-white","px-12","py-4"],[1,"row","location"],[1,"row","text-2xl","text-bold","uppercase"],[1,"flex","flex-1","px-8","flex-wrap","overflow-auto"],[1,"flex-1","min-w-64"],[1,"flex"],["button","","mat-button","","class","tile text-2xl",3,"routerLink",4,"ngFor","ngForOf"],[3,"show","showChange"],["button","","mat-button","",1,"tile","text-2xl",3,"routerLink"],[1,"flex","flex-col","items-center"],[3,"icon"],[1,"text-lg"]],template:function(t,n){1&t&&(r.Xb(0,"header"),r.Xb(1,"a-topbar-header",0),r.ic("menuChange",function(t){return n.show_menu=t}),r.Wb(),r.Xb(2,"div",1),r.Xb(3,"div",2),r.Pc(4,"Sydney"),r.Wb(),r.Xb(5,"div",3),r.Pc(6),r.Wb(),r.Wb(),r.Wb(),r.Xb(7,"main",4),r.Sb(8,"dashboard-availability",5),r.Sb(9,"dashboard-upcoming",5),r.Sb(10,"dashboard-contacts",5),r.Wb(),r.Xb(11,"footer",6),r.Nc(12,j,5,3,"a",7),r.Wb(),r.Xb(13,"a-overlay-menu",8),r.ic("showChange",function(t){return n.show_menu=t}),r.Wb()),2&t&&(r.Fb(1),r.tc("menu",n.show_menu),r.Fb(5),r.Qc(n.datetime),r.Fb(6),r.tc("ngForOf",n.tiles),r.Fb(1),r.tc("show",n.show_menu))},directives:[b.a,W,N,D,c.n,J.a,p.a,a.f,d.a],styles:["[_nghost-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n        }\n\n        main[_ngcontent-%COMP%] {\n            min-height: 50%;\n            background: #f0f0f0;\n        }\n\n        .top[_ngcontent-%COMP%] {\n            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%\n                no-repeat padding-box;\n        }\n\n        a[button].tile[_ngcontent-%COMP%] {\n            flex: 1;\n            border-radius: 0;\n            background-color: #fff;\n            color: rgba(0,0,0,.85);\n            border: none;\n            border-right: 1px solid #ccc;\n        }\n\n        a[button].tile[_ngcontent-%COMP%]:last-child {\n            border: none;\n        }"]}),t})()}];let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.Pb({type:t}),t.\u0275inj=r.Ob({imports:[[c.c,o.h,i.a,a.g.forChild(Y)]]}),t})()}}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map