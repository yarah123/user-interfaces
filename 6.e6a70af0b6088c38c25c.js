(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EA6B:function(e,t,s){"use strict";s.d(t,"b",(function(){return v})),s.d(t,"a",(function(){return b}));var n=s("EM62"),a=s("C05f"),o=s("TLy2"),i=s("wqq/"),l=s("jOdJ"),c=s("WPBw"),r=s("SQLt"),u=s("D8Xy"),f=s("KuCG"),d=s("20lr"),h=s("eZII"),m=s("mjT4"),p=s("7JBE"),g=s("dJst"),_=s("OZ4H");function v(){sessionStorage.removeItem("PLACEOS.event"),sessionStorage.removeItem("PLACEOS.event_form"),localStorage.removeItem("PLACEOS.event_filters")}let b=(()=>{class e extends d.b{constructor(e,t,s){super(),this._calendar=e,this._org=t,this._dialog=s,this._event=new a.a(null),this._form=new a.a(null),this._filters=new a.a({}),this._loading_spaces=new a.a(!1),this._loading_event=new a.a(!1),this.event=this._event.asObservable(),this.form=this._form.asObservable(),this.filters=this._filters.asObservable(),this.loading_spaces=this._loading_spaces.asObservable(),this.loading_event=this._loading_event.asObservable(),this.spaces=this._filters.pipe(Object(o.a)(e=>{var t,s;this._loading_spaces.next(!0);const n=this._form.getValue().value;n.date||(n.date=(new Date).valueOf());const a=Math.floor(new Date(n.date).valueOf()/1e3),o=Math.floor(Object(c.a)(new Date(n.date),n.duration||60).valueOf()/1e3),i=(null===(t=null==e?void 0:e.zones)||void 0===t?void 0:t.length)?e.zones:[null===(s=this._org.building)||void 0===s?void 0:s.id];return this._calendar.freeBusy({zone_ids:i.join(","),period_start:a,period_end:o}).toPromise().then(t=>(this._loading_spaces.next(!1),t.filter(t=>!e.capacity||e.capacity>=t.capacity)))}),Object(i.a)()),this.clearState=()=>v(),this.setEvent(new h.a({date:Object(r.a)(Object(c.a)(new Date,2),{nearestTo:5}).valueOf()}))}get event_form(){return this._form.getValue()}get event_filters(){return this._filters.getValue()}get is_future_date(){var e,t;const s=(null===(t=null===(e=this._form.getValue())||void 0===e?void 0:e.controls)||void 0===t?void 0:t.date.value)||(new Date).valueOf();return Object(u.a)(new Date(s),Object(f.a)(new Date))}setEvent(e){this._event.next(e);const t=Object(h.b)(e);this._form.next(t),this.subscription("form_change",()=>this.storeState())}setValue(e,t){const s=this._form.getValue();s&&s.controls[e]&&s.controls[e].setValue(t)}newAttendee(){const e=this._dialog.open(m.b,{width:"auto",height:"auto",data:{}}),t=this._form.getValue();e.componentInstance.event.pipe(Object(l.a)(e=>"done"===e.reason)).subscribe(s=>{const n=t.controls.attendees.value||[];n.push(s.metadata),t.controls.attendees.setValue(Object(d.y)(n,"email")),e.close()})}clearForm(){this.setEvent(this._event.getValue()),this._filters.next({})}updateFilters(e){this._filters.next(e)}storeState(){const e=this._form.getValue();sessionStorage.setItem("PLACEOS.event",JSON.stringify(this._event.getValue().toJSON())),sessionStorage.setItem("PLACEOS.event_form",JSON.stringify(e.value)),localStorage.setItem("PLACEOS.event_filters",JSON.stringify(this._filters.getValue()))}loadState(){const e=sessionStorage.getItem("PLACEOS.event")||"{}";e&&this._event.next(new h.a(JSON.parse(e)));const t=sessionStorage.getItem("PLACEOS.event_form");if(t){const e=Object(h.b)(this._event.getValue());e.patchValue(JSON.parse(t)),this._form.next(e)}const s=localStorage.getItem("PLACEOS.event_filters");s&&this._filters.next(JSON.parse(s))}save(){const e=this._form.getValue();if(e.markAllAsTouched(),e.controls.organiser.value&&e.controls.host.value||e.patchValue({organiser:Object(d.h)(),host:Object(d.h)().email}),e.controls.title.value||e.patchValue({title:Object(d.h)().email}),!e.valid){const t=[];for(const s in e.controls)e.controls[s].invalid&&t.push(s);return Promise.reject(Object(d.m)(`Some form fields are not valid: [${t.join(", ")}]`))}this._loading_event.next(!0);const t=new h.a(Object.assign(Object.assign({},this._event.getValue()),this._form.getValue().value));return Object(h.e)(t).toPromise().then(()=>this._loading_event.next(!1),()=>this._loading_event.next(!1))}}return e.\u0275fac=function(t){return new(t||e)(n.tc(p.a),n.tc(g.c),n.tc(_.b))},e.\u0275prov=n.cc({token:e,factory:e.\u0275fac}),e})()},dgxB:function(e,t,s){"use strict";s.r(t),s.d(t,"ControlModule",(function(){return E}));var n=s("EM62"),a=s("2kYt"),o=s("sEIs"),i=s("20lr"),l=s("EA6B"),c=s("e81E"),r=s("jOdJ"),u=s("6CBO"),f=s("dJst"),d=s("e4ff"),h=s("0/Ep"),m=s("PBFl"),p=s("81Qw");const g=function(){return["/explore"]},_=function(e){return{space:e}};function v(e,t){if(1&e&&(n.mc(0,"div",1),n.mc(1,"div",2),n.mc(2,"div",3),n.dd(3),n.lc(),n.mc(4,"div",4),n.mc(5,"div",5),n.dd(6),n.lc(),n.mc(7,"div",6),n.mc(8,"app-icon"),n.dd(9,"account_circle"),n.lc(),n.dd(10),n.lc(),n.lc(),n.lc(),n.mc(11,"div",7),n.mc(12,"a",8),n.Cc(13,"safe"),n.dd(14," Control "),n.lc(),n.mc(15,"a",9),n.dd(16," Find "),n.lc(),n.lc(),n.lc()),2&e){const e=n.Bc();n.Yb("with-image",e.show_image),n.Ub(3),n.ed(e.space.name),n.Ub(3),n.ed(e.location),n.Ub(4),n.fd(" ",e.space.capacity||"0"," "),n.Ub(2),n.Ic("href",n.Ec(13,8,e.space.support_url,"url"),n.Uc),n.Ub(3),n.Ic("routerLink",n.Lc(11,g))("queryParams",n.Mc(12,_,e.space.id))}}let b=(()=>{class e{constructor(e,t){this._settings=e,this._org=t}get show_image(){return this._settings.get("app.space_display.show_images")}get location(){if(!this.space)return"Unable to determine location";const e=this.space.level,t=this._org.buildings.find(t=>t.id===e.parent_id);return`${t?(t.display_name||t.name)+", ":""}${e.display_name||e.name}`}}return e.\u0275fac=function(t){return new(t||e)(n.gc(i.e),n.gc(f.c))},e.\u0275cmp=n.ac({type:e,selectors:[["a-control-space-list-item"]],inputs:{space:"space"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-2 pl-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-2","pl-4","mb-2"],[1,"flex","flex-col","flex-1"],[1,"text-xl"],[1,"flex","items-center","w-full","text-sm"],[1,"flex-1"],[1,"flex","items-center","text-lg"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["mat-button","","button","",1,"w-32","flex-1","sm:flex-none",3,"href"],["mat-button","","button","",1,"w-32","flex-1","sm:flex-none","inverse",3,"routerLink","queryParams"]],template:function(e,t){1&e&&n.bd(0,v,17,14,"div",0),2&e&&n.Ic("ngIf",t.space)},directives:[a.o,h.a,m.a,o.f],pipes:[p.b],styles:[""]}),e})();function w(e,t){1&e&&n.hc(0,"a-control-space-list-item",6),2&e&&n.Ic("space",t.$implicit)}function x(e,t){if(1&e&&(n.mc(0,"div",4),n.bd(1,w,1,1,"a-control-space-list-item",5),n.lc()),2&e){const e=n.Bc();n.Ub(1),n.Ic("ngForOf",e.filtered_list)}}function O(e,t){if(1&e&&(n.mc(0,"div",7),n.mc(1,"app-icon"),n.dd(2,"close"),n.lc(),n.mc(3,"p"),n.dd(4),n.lc(),n.lc()),2&e){const e=n.Bc();n.Ub(4),n.fd(" ",e.search_str?' No matches for "'+e.search_str+'"':"No controllable spaces"," ")}}let C=(()=>{class e extends i.b{constructor(e,t){super(),this._spaces=e,this._org=t,this.space_list=[]}ngOnInit(){this._spaces.initialised.pipe(Object(r.a)(e=>e)).subscribe(()=>{this.space_list=this._spaces.filter(e=>!!e.support_url),this.space_list.sort((e,t)=>{const s=this._org.buildings.find(t=>t.id===e.level.parent_id),n=(e.name||"").toLowerCase(),a=((e.level?e.level.name:"")||"").toLowerCase(),o=((s?s.name:"")||"").toLowerCase(),i=this._org.buildings.find(e=>e.id===t.level.parent_id),l=(t.name||"").toLowerCase(),c=((t.level?t.level.name:"")||"").toLowerCase(),r=((i?i.name:"")||"").toLowerCase();return o.localeCompare(r)||a.localeCompare(c)||n.localeCompare(l)})})}get filtered_list(){const e=(this.search_str||"").toLowerCase();return(this.space_list||[]).filter(t=>{const s=this._org.buildings.find(e=>e.id===t.level.parent_id),n=(t.name||"").toLowerCase(),a=((t.level?t.level.name:"")||"").toLowerCase(),o=((s?s.name:"")||"").toLowerCase();return n.indexOf(e)>=0||a&&a.indexOf(e)>=0||o&&o.indexOf(e)>=0})}}return e.\u0275fac=function(t){return new(t||e)(n.gc(u.d),n.gc(f.c))},e.\u0275cmp=n.ac({type:e,selectors:[["a-control-space-list"]],features:[n.Rb],decls:5,vars:5,consts:[[1,"w-full","flex","items-center","justify-center","p-2"],[3,"value","loading","autofocus","valueChange"],["class","flex flex-col flex-1 overflow-auto w-full",4,"ngIf","ngIfElse"],["empty_state",""],[1,"flex","flex-col","flex-1","overflow-auto","w-full"],[3,"space",4,"ngFor","ngForOf"],[3,"space"],[1,"flex","flex-col","items-center","p-8"]],template:function(e,t){if(1&e&&(n.mc(0,"div",0),n.mc(1,"a-searchbar",1),n.xc("valueChange",(function(e){return t.search_str=e})),n.lc(),n.lc(),n.bd(2,x,2,1,"div",2),n.bd(3,O,5,1,"ng-template",null,3,n.cd)),2&e){const e=n.Pc(4);n.Ub(1),n.Ic("value",t.search_str)("loading",t.loading)("autofocus",!0),n.Ub(1),n.Ic("ngIf",t.filtered_list.length)("ngIfElse",e)}},directives:[d.a,a.o,a.n,b,h.a],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }"]}),e})();var y=s("C9Ki"),I=s("d4mj");let S=(()=>{class e extends i.b{constructor(e){super(),this._settings=e}ngOnInit(){this._settings.title="Control",Object(l.b)()}}return e.\u0275fac=function(t){return new(t||e)(n.gc(i.e))},e.\u0275cmp=n.ac({type:e,selectors:[["app-control"]],features:[n.Rb],decls:5,vars:2,consts:[[1,"w-full",3,"menu","menuChange"],[1,"flex-1","h-1/2","w-full"],[1,"w-full",3,"show","showChange"]],template:function(e,t){1&e&&(n.mc(0,"a-topbar-header",0),n.xc("menuChange",(function(e){return t.show_menu=e})),n.lc(),n.mc(1,"main",1),n.hc(2,"a-control-space-list"),n.lc(),n.hc(3,"a-footer-menu"),n.mc(4,"a-overlay-menu",2),n.xc("showChange",(function(e){return t.show_menu=e})),n.lc()),2&e&&(n.Ic("menu",t.show_menu),n.Ub(4),n.Ic("show",t.show_menu))},directives:[c.a,C,y.a,I.a],styles:["[_nghost-%COMP%] {\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n        }"]}),e})();var j=s("R3Ii");const L=[{path:"",component:S}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.ec({type:e}),e.\u0275inj=n.dc({imports:[[a.c,o.g.forChild(L),j.a]]}),e})()}}]);