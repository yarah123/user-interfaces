(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9yMy":function(t,e,s){"use strict";s.r(e),s.d(e,"COMPONENTS",function(){return B}),s.d(e,"StaffModule",function(){return H});var n=s("SVse"),i=s("s7LF"),o=s("iInd"),c=s("8Y7J"),r=s("mrSG"),l=s("qdGH"),a=s("2Vo4"),u=s("itXk"),f=s("Qfz5"),h=s("lJxs"),b=s("eIep"),d=s("UXun"),g=s("M34a"),p=s("piIK"),m=s("grfs"),_=s("InVF");let v=(()=>{class t extends m.b{constructor(t){super(),this._org=t,this._onsite={},this._events={},this._filters=new a.a({}),this._search=new a.a(""),this._loading=new a.a(!1),this._users=new a.a([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=Object(u.a)([this._search,this._users,this._filters]).pipe(Object(h.a)(t=>{const[e,s,n]=t;return s.filter(t=>(!e||t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e))&&(!n.only_onsite||this._onsite[t.email]))})),this.user_events=Object(u.a)([this._filters]).pipe(Object(b.a)(t=>Object(r.a)(this,void 0,void 0,function*(){this._loading.next(!0);const t=yield Object(f.e)({period_start:Math.floor(Object(g.a)(new Date).valueOf()/1e3),period_end:Math.floor(Object(p.a)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),e={},s=(new Date).valueOf();for(const n of t)Object(m.w)(s,s,n.date,n.date+60*n.duration*1e3)&&(e[n.asset_id]=n.checked_in,this._events[n.asset_id]=n);return this._onsite=e,this._loading.next(!1),e})),Object(d.a)()),this.loadUsers()}setFilters(t){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),t))}setSearchString(t){this._search.next(t)}startPolling(t=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),t)}stopPolling(){this.clearInterval("poll")}checkin(t){return Object(r.a)(this,void 0,void 0,function*(){const e=yield Object(f.g)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor(Object(p.a)(new Date).valueOf()/1e3),asset_id:t.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"}).toPromise();yield Object(f.d)(e.id,!0),this._events[t.email]=e,this._onsite[t.email]=!0})}checkout(t){return Object(r.a)(this,void 0,void 0,function*(){const e=this._events[t.email];if(e){const s=yield Object(f.g)(Object.assign(Object.assign({},e.toJSON()),{booking_end:Math.floor((new Date).valueOf()/1e3)})).toPromise();yield Object(f.d)(s.id,!1).toPromise(),this._events[t.email]=s,this._onsite[t.email]=!1}})}loadUsers(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield Object(l.g)("").toPromise();t.sort((t,e)=>t.name.localeCompare(e.name)),this._users.next(t)})}}return t.\u0275fac=function(e){return new(e||t)(c.ec(_.c))},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=s("ORrl"),y=s("SxV6"),x=s("Q2Ze"),w=s("ZTz/"),F=s("jMqV"),j=s("yJcF"),C=s("UhP/");function M(t,e){if(1&t&&(c.Xb(0,"mat-option",7),c.Lc(1),c.Wb()),2&t){const t=e.$implicit;c.sc("value",t.id),c.Fb(1),c.Nc(" ",t.display_name||t.name," ")}}let k=(()=>{class t extends m.b{constructor(t,e,s,n){super(),this._state=t,this._org=e,this._route=s,this._router=n,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=t=>this._state.setFilters({date:t}),this.setFilters=t=>this._state.setFilters(t),this.setSearch=t=>this._state.setSearchString(t),this.updateZones=t=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:t.join(",")}}),this._state.setFilters({zones:t})}}ngOnInit(){return Object(r.a)(this,void 0,void 0,function*(){yield this._org.initialised.pipe(Object(y.a)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const e=t.get("zone_ids").split(",");if(e.length){const t=this._org.levelWithID(e);if(!t)return;this._org.building=this._org.buildings.find(e=>e.id===t.parent_id),this.zones=e}}})),this.subscription("levels",this._org.active_levels.subscribe(t=>{this.zones=this.zones.filter(e=>t.find(t=>t.id===e)),!this.zones.length&&t.length&&this.zones.push(t[0].id),this.updateZones(this.zones)})),this.setSearch("")})}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(v),c.Rb(_.c),c.Rb(o.a),c.Rb(o.d))},t.\u0275cmp=c.Lb({type:t,selectors:[["staff-topbar"]],features:[c.Cb],decls:10,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(t,e){if(1&t&&(c.Xb(0,"mat-form-field",0),c.Xb(1,"mat-select",1),c.ic("ngModelChange",function(t){return e.zones=t})("ngModelChange",function(t){return e.updateZones(t)}),c.Jc(2,M,2,2,"mat-option",2),c.nc(3,"async"),c.Wb(),c.Wb(),c.Xb(4,"mat-slide-toggle",3),c.ic("ngModelChange",function(t){return e.setFilters({only_onsite:t})}),c.nc(5,"async"),c.Xb(6,"div",4),c.Lc(7,"Onsite Only"),c.Wb(),c.Wb(),c.Sb(8,"div",5),c.Xb(9,"searchbar",6),c.ic("modelChange",function(t){return e.setSearch(t)}),c.Wb()),2&t){let t=null;c.Fb(1),c.sc("ngModel",e.zones),c.Fb(1),c.sc("ngForOf",c.oc(3,3,e.levels)),c.Fb(2),c.sc("ngModel",null==(t=c.oc(5,5,e.filters))?null:t.only_onsite)}},directives:[x.c,w.a,i.l,i.o,n.m,F.a,j.a,C.l],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),t})();var S=s("QtqI"),P=s("VCaO"),W=s("ZFy/"),X=s("Dxy4"),z=s("z03u");function I(t,e){1&t&&(c.Xb(0,"div",10),c.Lc(1,"Onsite"),c.Wb())}let L=(()=>{class t{constructor(t){this._state=t,this.checkin=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkin(this.user).catch(t=>Object(m.m)("Error checking in Staff member")),this.loading=!1}),this.checkout=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkout(this.user).catch(t=>Object(m.m)("Error checking out Staff member")),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(v))},t.\u0275cmp=c.Lb({type:t,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:16,vars:11,consts:[[1,"w-full","flex","items-center","px-4","py-2","bg-white","border-b","border-gray-200"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["mat-icon-button","","matTooltip","Email Staff",3,"disabled","href"],["mat-icon-button","","matTooltip","Phone Staff",3,"disabled","href"],[1,"text-xs","opacity-50","px-4"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Sb(1,"a-user-avatar",1),c.Xb(2,"div",2),c.Xb(3,"div",3),c.Lc(4),c.Wb(),c.Xb(5,"div",4),c.Lc(6),c.Wb(),c.Wb(),c.Jc(7,I,2,0,"div",5),c.Xb(8,"div",6),c.Xb(9,"action-icon",7),c.ic("click",function(){return e.onsite?e.checkout():e.checkin()}),c.Wb(),c.Xb(10,"a",8),c.Xb(11,"app-icon"),c.Lc(12,"email"),c.Wb(),c.Wb(),c.Xb(13,"a",9),c.Xb(14,"app-icon"),c.Lc(15,"call"),c.Wb(),c.Wb(),c.Wb(),c.Wb()),2&t&&(c.Fb(1),c.sc("user",e.user),c.Fb(3),c.Mc(null==e.user?null:e.user.name),c.Fb(2),c.Mc(null==e.user?null:e.user.email),c.Fb(1),c.sc("ngIf",e.onsite),c.Fb(2),c.sc("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),c.Fb(1),c.sc("disabled",!(null!=e.user&&e.user.email))("href","mailto:"+(null==e.user?null:e.user.email),c.Cc),c.Fb(3),c.sc("disabled",!(null!=e.user&&e.user.phone))("href","tel:"+(null==e.user?null:e.user.phone),c.Cc))},directives:[S.a,n.n,P.a,W.a,X.a,z.a],styles:["[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n            background-color: #f0f0f0 !important;\n        }"]}),t})();var J=s("BTe0");const V=["container"];function T(t,e){if(1&t){const t=c.Yb();c.Xb(0,"div",7),c.ic("click",function(){c.Ac(t);const s=e.$implicit;return c.mc().scrollTo(s)}),c.nc(1,"async"),c.Lc(2),c.Wb()}if(2&t){const t=e.$implicit,s=c.mc();c.Jb("disabled",c.oc(1,5,s.user_list)[t].length<=0)("active",t===s.active_group),c.Fb(2),c.Nc(" ",t," ")}}function D(t,e){if(1&t&&(c.Sb(0,"staff-details",12),c.nc(1,"async"),c.nc(2,"async")),2&t){const t=e.$implicit,s=e.index,n=c.mc(2).$implicit,i=c.mc(2);c.sc("id","letter-"+n+"-"+s)("user",t)("onsite",!!c.oc(1,3,i.events)&&c.oc(2,5,i.events)[t.email])}}function q(t,e){if(1&t&&(c.Vb(0),c.Xb(1,"div",10),c.Lc(2),c.Wb(),c.Jc(3,D,3,7,"staff-details",11),c.nc(4,"async"),c.Ub()),2&t){const t=c.mc().$implicit,e=c.mc(2);c.Fb(1),c.sc("id","letter-"+("#"===t?"0":t)),c.Fb(1),c.Nc(" ",t," "),c.Fb(1),c.sc("ngForOf",c.oc(4,3,e.user_list)[t])}}function R(t,e){if(1&t&&(c.Vb(0),c.Jc(1,q,5,5,"ng-container",9),c.nc(2,"async"),c.Ub()),2&t){const t=e.$implicit,s=c.mc(2);c.Fb(1),c.sc("ngIf",c.oc(2,1,s.user_list)[t].length)}}function $(t,e){if(1&t&&(c.Vb(0),c.Jc(1,R,3,3,"ng-container",8),c.Ub()),2&t){const t=c.mc();c.Fb(1),c.sc("ngForOf",t.groups)}}function N(t,e){1&t&&c.Sb(0,"mat-progress-bar",13)}function U(t,e){1&t&&(c.Xb(0,"div",14),c.Xb(1,"p"),c.Lc(2,"No matching staff members"),c.Wb(),c.Wb())}const E="#abcdefghijklmnopqrstuvwxyz".split("");let Z=(()=>{class t extends m.b{constructor(t){super(),this._state=t,this.active_group="#",this.groups=E,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe(Object(h.a)(t=>t.length)),this.user_list=this._state.filtered_users.pipe(Object(h.a)(t=>{const e={};for(const s of E)e[s]=(t||[]).filter(t=>t.name.toLowerCase()[0].startsWith(s)||"#"===s&&!E.includes(t.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),e}))}onScroll(t){const e=this._el.nativeElement.scrollTop;for(const s of E){const t=document.querySelector(`#letter-${"#"===s?"0":s}`);if(t){if(t.offsetTop-e>0)break;this.active_group=s}}}scrollTo(t){const e=document.querySelector(`#letter-${t}-0`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=t)}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(v))},t.\u0275cmp=c.Lb({type:t,selectors:[["staff-listings"]],viewQuery:function(t,e){if(1&t&&c.Qc(V,1),2&t){let t;c.wc(t=c.jc())&&(e._el=t.first)}},features:[c.Cb],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(t,e){if(1&t&&(c.Xb(0,"div",0),c.Jc(1,T,3,7,"div",1),c.Wb(),c.Xb(2,"div",2,3),c.ic("scroll",function(t){return e.onScroll(t)}),c.Jc(4,$,2,1,"ng-container",4),c.nc(5,"async"),c.Wb(),c.Jc(6,N,1,0,"mat-progress-bar",5),c.nc(7,"async"),c.Jc(8,U,3,0,"ng-template",null,6,c.Kc)),2&t){const t=c.xc(9);c.Fb(1),c.sc("ngForOf",e.groups),c.Fb(3),c.sc("ngIf",c.oc(5,4,e.user_count))("ngIfElse",t),c.Fb(2),c.sc("ngIf",c.oc(7,6,e.loading))}},directives:[n.m,n.n,L,J.a],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 50%;\n            }\n\n            [letter][_ngcontent-%COMP%] {\n                transition: font-size 200ms, color 200ms;\n            }\n\n            [group][_ngcontent-%COMP%] {\n                border-color: #ccc;\n                padding: 0.5rem 1.65rem;\n            }\n\n            .disabled[_ngcontent-%COMP%] {\n                opacity: 0.2;\n                pointer-events: none;\n            }\n\n            .active[_ngcontent-%COMP%] {\n                font-size: 1.25rem;\n                opacity: 1;\n                color: #d81b60;\n            }"]}),t})();const Q=["app-staff",""];function K(t,e){1&t&&c.Sb(0,"mat-progress-bar",4)}let A=(()=>{class t{constructor(t){this._state=t,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(v))},t.\u0275cmp=c.Lb({type:t,selectors:[["","app-staff",""]],attrs:Q,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,e){1&t&&(c.Sb(0,"sidebar"),c.Xb(1,"main",0),c.Sb(2,"staff-topbar",1),c.Sb(3,"staff-listings",2),c.Jc(4,K,1,0,"mat-progress-bar",3),c.nc(5,"async"),c.Wb()),2&t&&(c.Fb(4),c.sc("ngIf",c.oc(5,1,e.loading)))},directives:[O.a,k,Z,n.n,J.a],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),t})();var G=s("URK9");const Y=[{path:"",component:A}],B=[A,k,Z,L];let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({imports:[[n.c,i.h,G.a,o.g.forChild(Y)]]}),t})()}}]);
//# sourceMappingURL=staff-staff-module.js.map