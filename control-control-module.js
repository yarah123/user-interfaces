(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{PBZY:function(e,t,s){"use strict";s.r(t),s.d(t,"ControlModule",function(){return E});var n=s("SVse"),a=s("iInd"),i=s("grfs"),o=s("peti"),r=s("8Y7J"),l=s("T7LW"),c=s("SxV6"),f=s("EE6m"),u=s("InVF"),h=s("Q2Ze"),p=s("z03u"),d=s("e6WT"),m=s("s7LF"),b=s("pu8Q"),g=s("Dxy4"),_=s("TmgH");const v=function(){return["/explore"]},w=function(e){return{space:e}};function x(e,t){if(1&e&&(r.Xb(0,"div",1),r.Xb(1,"div",2),r.Xb(2,"div",3),r.Pc(3),r.Wb(),r.Xb(4,"div",4),r.Xb(5,"div",5),r.Pc(6),r.Wb(),r.Xb(7,"div",6),r.Xb(8,"app-icon"),r.Pc(9,"account_circle"),r.Wb(),r.Pc(10),r.Wb(),r.Wb(),r.Wb(),r.Xb(11,"div",7),r.Xb(12,"a",8),r.nc(13,"safe"),r.Pc(14," Control "),r.Wb(),r.Xb(15,"a",9),r.Pc(16," Find "),r.Wb(),r.Wb(),r.Wb()),2&e){const e=r.mc();r.Jb("with-image",e.show_image),r.Fb(3),r.Qc(e.space.name),r.Fb(3),r.Qc(e.location),r.Fb(4),r.Rc(" ",e.space.capacity||"0"," "),r.Fb(2),r.tc("href",r.pc(13,8,e.space.support_url,"url"),r.Gc),r.Fb(3),r.tc("routerLink",r.wc(11,v))("queryParams",r.xc(12,w,e.space.id))}}let O=(()=>{class e{constructor(e,t){this._settings=e,this._org=t}get show_image(){return this._settings.get("app.space_display.show_images")}get location(){if(!this.space)return"Unable to determine location";const e=this.space.level,t=this._org.buildings.find(t=>t.id===e.parent_id);return`${t?(t.display_name||t.name)+", ":""}${e.display_name||e.name}`}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(i.e),r.Rb(u.c))},e.\u0275cmp=r.Lb({type:e,selectors:[["a-control-space-list-item"]],inputs:{space:"space"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-2 pl-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-2","pl-4","mb-2"],[1,"flex","flex-col","flex-1"],[1,"text-xl"],[1,"flex","items-center","w-full","text-sm"],[1,"flex-1"],[1,"flex","items-center","text-lg"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["mat-button","","button","",1,"w-32","flex-1","sm:flex-none",3,"href"],["mat-button","","button","",1,"w-32","flex-1","sm:flex-none","inverse",3,"routerLink","queryParams"]],template:function(e,t){1&e&&r.Nc(0,x,17,14,"div",0),2&e&&r.tc("ngIf",t.space)},directives:[n.o,p.a,g.a,a.f],pipes:[_.a],styles:[""]}),e})();function S(e,t){1&e&&r.Sb(0,"mat-spinner",7),2&e&&r.tc("diameter",32)}function C(e,t){1&e&&r.Sb(0,"a-control-space-list-item",10),2&e&&r.tc("space",t.$implicit)}function y(e,t){if(1&e&&(r.Xb(0,"div",8),r.Nc(1,C,1,1,"a-control-space-list-item",9),r.Wb()),2&e){const e=r.mc();r.Fb(1),r.tc("ngForOf",e.filtered_list)}}function I(e,t){if(1&e&&(r.Xb(0,"div",11),r.Xb(1,"app-icon"),r.Pc(2,"close"),r.Wb(),r.Xb(3,"p"),r.Pc(4),r.Wb(),r.Wb()),2&e){const e=r.mc();r.Fb(4),r.Rc(" ",e.search_str?' No matches for "'+e.search_str+'"':"No controllable spaces"," ")}}let P=(()=>{class e extends i.b{constructor(e,t){super(),this._spaces=e,this._org=t,this.space_list=[]}ngOnInit(){this._spaces.initialised.pipe(Object(c.a)(e=>e)).subscribe(()=>{this.space_list=this._spaces.filter(e=>!!e.support_url),this.space_list.sort((e,t)=>{const s=this._org.buildings.find(t=>t.id===e.level.parent_id),n=(e.name||"").toLowerCase(),a=((e.level?e.level.name:"")||"").toLowerCase(),i=((s?s.name:"")||"").toLowerCase(),o=this._org.buildings.find(e=>e.id===t.level.parent_id),r=(t.name||"").toLowerCase(),l=((t.level?t.level.name:"")||"").toLowerCase(),c=((o?o.name:"")||"").toLowerCase();return i.localeCompare(c)||a.localeCompare(l)||n.localeCompare(r)})})}get filtered_list(){const e=(this.search_str||"").toLowerCase();return(this.space_list||[]).filter(t=>{const s=this._org.buildings.find(e=>e.id===t.level.parent_id),n=(t.name||"").toLowerCase(),a=((t.level?t.level.name:"")||"").toLowerCase(),i=((s?s.name:"")||"").toLowerCase();return n.indexOf(e)>=0||a&&a.indexOf(e)>=0||i&&i.indexOf(e)>=0})}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(f.d),r.Rb(u.c))},e.\u0275cmp=r.Lb({type:e,selectors:[["a-control-space-list"]],features:[r.Cb],decls:9,vars:4,consts:[[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],["class","flex flex-col flex-1 overflow-auto w-full",4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[1,"flex","flex-col","flex-1","overflow-auto","w-full"],[3,"space",4,"ngFor","ngForOf"],[3,"space"],[1,"flex","flex-col","items-center","p-8"]],template:function(e,t){if(1&e&&(r.Xb(0,"div",0),r.Xb(1,"mat-form-field",1),r.Xb(2,"app-icon",2),r.Pc(3,"search"),r.Wb(),r.Xb(4,"input",3),r.ic("ngModelChange",function(e){return t.search_str=e}),r.Wb(),r.Nc(5,S,1,1,"mat-spinner",4),r.Wb(),r.Wb(),r.Nc(6,y,2,1,"div",5),r.Nc(7,I,5,1,"ng-template",null,6,r.Oc)),2&e){const e=r.Ac(8);r.Fb(4),r.tc("ngModel",t.search_str),r.Fb(1),r.tc("ngIf",t.loading),r.Fb(1),r.tc("ngIf",t.filtered_list.length)("ngIfElse",e)}},directives:[h.c,p.a,h.f,d.b,m.c,m.l,m.o,n.o,b.b,h.g,n.n,O],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 768px;\n                max-width: calc(100% - 2rem);\n            }"]}),e})();var L=s("l7nu"),V=s("b6yr");const j=["app-control",""];let W=(()=>{class e extends i.b{constructor(e){super(),this._settings=e}ngOnInit(){this._settings.title="Control",Object(o.b)()}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(i.e))},e.\u0275cmp=r.Lb({type:e,selectors:[["","app-control",""]],features:[r.Cb],attrs:j,decls:5,vars:2,consts:[[1,"w-full",3,"menu","menuChange"],[1,"flex-1","h-1/2","w-full"],[1,"w-full",3,"show","showChange"]],template:function(e,t){1&e&&(r.Xb(0,"a-topbar-header",0),r.ic("menuChange",function(e){return t.show_menu=e}),r.Wb(),r.Xb(1,"main",1),r.Sb(2,"a-control-space-list"),r.Wb(),r.Sb(3,"a-footer-menu"),r.Xb(4,"a-overlay-menu",2),r.ic("showChange",function(e){return t.show_menu=e}),r.Wb()),2&e&&(r.tc("menu",t.show_menu),r.Fb(4),r.tc("show",t.show_menu))},directives:[l.a,P,L.a,V.a],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background: #f0f0f0;\n            }"]}),e})();var X=s("Ef91");const F=[{path:"",component:W}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({imports:[[n.c,m.h,a.g.forChild(F),X.a]]}),e})()},peti:function(e,t,s){"use strict";s.d(t,"b",function(){return _}),s.d(t,"a",function(){return v});var n=s("2Vo4"),a=s("eIep"),i=s("UXun"),o=s("SxV6"),r=s("IYaI"),l=s("ILtH"),c=s("EhJz"),f=s("piIK"),u=s("grfs"),h=s("D01k"),p=s("qdGH"),d=s("8Y7J"),m=s("VNFA"),b=s("InVF"),g=s("iELJ");function _(){sessionStorage.removeItem("PLACEOS.event"),sessionStorage.removeItem("PLACEOS.event_form"),localStorage.removeItem("PLACEOS.event_filters")}let v=(()=>{class e extends u.b{constructor(e,t,s){super(),this._calendar=e,this._org=t,this._dialog=s,this._event=new n.a(null),this._form=new n.a(null),this._filters=new n.a({}),this._loading_spaces=new n.a(!1),this._loading_event=new n.a(!1),this.event=this._event.asObservable(),this.form=this._form.asObservable(),this.filters=this._filters.asObservable(),this.loading_spaces=this._loading_spaces.asObservable(),this.loading_event=this._loading_event.asObservable(),this.spaces=this._filters.pipe(Object(a.a)(e=>{var t,s;this._loading_spaces.next(!0);const n=this._form.getValue().value;n.date||(n.date=(new Date).valueOf());const a=Math.floor(new Date(n.date).valueOf()/1e3),i=Math.floor(Object(r.a)(new Date(n.date),n.duration||60).valueOf()/1e3),o=(null===(t=null==e?void 0:e.zones)||void 0===t?void 0:t.length)?e.zones:[null===(s=this._org.building)||void 0===s?void 0:s.id];return this._calendar.freeBusy({zone_ids:o.join(","),period_start:a,period_end:i}).toPromise().then(t=>(this._loading_spaces.next(!1),t.filter(t=>!e.capacity||e.capacity>=t.capacity)))}),Object(i.a)()),this.clearState=()=>_(),this.setEvent(new h.a({date:Object(l.a)(Object(r.a)(new Date,2),{nearestTo:5}).valueOf()}))}get event_form(){return this._form.getValue()}get event_filters(){return this._filters.getValue()}get is_future_date(){var e,t;const s=(null===(t=null===(e=this._form.getValue())||void 0===e?void 0:e.controls)||void 0===t?void 0:t.date.value)||(new Date).valueOf();return Object(c.a)(new Date(s),Object(f.a)(new Date))}setEvent(e){this._event.next(e);const t=Object(h.b)(e);this._form.next(t),this.subscription("form_change",()=>this.storeState())}setValue(e,t){const s=this._form.getValue();s&&s.controls[e]&&s.controls[e].setValue(t)}newAttendee(){const e=this._dialog.open(p.b,{width:"auto",height:"auto",data:{}}),t=this._form.getValue();e.componentInstance.event.pipe(Object(o.a)(e=>"done"===e.reason)).subscribe(s=>{const n=t.controls.attendees.value||[];n.push(s.metadata),t.controls.attendees.setValue(Object(u.y)(n,"email")),e.close()})}clearForm(){this.setEvent(this._event.getValue()),this._filters.next({})}updateFilters(e){this._filters.next(e)}storeState(){const e=this._form.getValue();sessionStorage.setItem("PLACEOS.event",JSON.stringify(this._event.getValue().toJSON())),sessionStorage.setItem("PLACEOS.event_form",JSON.stringify(e.value)),localStorage.setItem("PLACEOS.event_filters",JSON.stringify(this._filters.getValue()))}loadState(){const e=sessionStorage.getItem("PLACEOS.event")||"{}";e&&this._event.next(new h.a(JSON.parse(e)));const t=sessionStorage.getItem("PLACEOS.event_form");if(t){const e=Object(h.b)(this._event.getValue());e.patchValue(JSON.parse(t)),this._form.next(e)}const s=localStorage.getItem("PLACEOS.event_filters");s&&this._filters.next(JSON.parse(s))}save(){const e=this._form.getValue();if(e.markAllAsTouched(),e.controls.organiser.value&&e.controls.host.value||e.patchValue({organiser:Object(u.h)(),host:Object(u.h)().email}),e.controls.title.value||e.patchValue({title:Object(u.h)().email}),!e.valid){const t=[];for(const s in e.controls)e.controls[s].invalid&&t.push(s);return Promise.reject(Object(u.m)(`Some form fields are not valid: [${t.join(", ")}]`))}this._loading_event.next(!0);const t=new h.a(Object.assign(Object.assign({},this._event.getValue()),this._form.getValue().value));return Object(h.f)(t).toPromise().then(()=>this._loading_event.next(!1),()=>this._loading_event.next(!1))}}return e.\u0275fac=function(t){return new(t||e)(d.ec(m.a),d.ec(b.c),d.ec(g.b))},e.\u0275prov=d.Nb({token:e,factory:e.\u0275fac}),e})()}}]);
//# sourceMappingURL=control-control-module.js.map