"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{66:(lt,O,a)=>{a.r(O),a.d(O,{COMPONENTS:()=>rt,StaffModule:()=>v});var l=a(4666),Z=a(2508),b=a(9885),f=a(1670),J=a(711),C=a(4505),M=a(7716),y=a(9232),T=a(6942),k=a(9095),U=a(9128),z=a(9377),L=a(3200),g=a(9112),F=a(6221),t=a(2560);class c extends g.cx{constructor(n){var e;super(),e=this,this._org=n,this._onsite={},this._events={},this._filters=new C.X({}),this._search=new C.X(""),this._loading=new C.X(!1),this._users=new C.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,M.aj)([this._search,this._users,this._filters]).pipe((0,T.U)(s=>{const[i,r,p]=s;return r.filter(x=>(!i||x.name.toLowerCase().includes(i)||x.email.toLowerCase().includes(i))&&(!p.only_onsite||this._onsite[x.email]))})),this.user_events=(0,M.aj)([this._filters]).pipe((0,k.w)(function(){var s=(0,f.Z)(function*(i){e._loading.next(!0);const r=yield(0,y.F2)({period_start:Math.floor((0,z.Z)(new Date).valueOf()/1e3),period_end:Math.floor((0,L.Z)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),p={},x=(new Date).valueOf();for(const u of r)(0,g.MZ)(x,x,u.date,u.date+60*u.duration*1e3)&&(p[u.asset_id]=u.checked_in,e._events[u.asset_id]=u);return e._onsite=p,e._loading.next(!1),p});return function(i){return s.apply(this,arguments)}}()),(0,U.d)()),this.loadUsers()}setFilters(n){this._filters.next({...this._filters.getValue(),...n})}setSearchString(n){this._search.next(n)}startPolling(n=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),n)}stopPolling(){this.clearInterval("poll")}checkin(n){var e=this;return(0,f.Z)(function*(){const s=yield(0,y.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,L.Z)(new Date).valueOf()/1e3),asset_id:n.email,title:"Checked-in Onsite",description:e._org.building.display_name||e._org.building.name,zones:[e._org.building.id],booking_type:"staff"}).toPromise();yield(0,y.FD)(s.id,!0),e._events[n.email]=s,e._onsite[n.email]=!0})()}checkout(n){var e=this;return(0,f.Z)(function*(){const s=e._events[n.email];if(s){const i=yield(0,y.km)({...s.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,y.FD)(i.id,!1).toPromise(),e._events[n.email]=i,e._onsite[n.email]=!1}})()}loadUsers(){var n=this;return(0,f.Z)(function*(){const e=yield(0,J.VE)("").toPromise();e.sort((s,i)=>s.name.localeCompare(i.name)),n._users.next(e)})()}}c.\u0275fac=function(n){return new(n||c)(t.LFG(F.w7))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var Q=a(4945),w=a(1294),N=a(5670),P=a(9396),I=a(5074),D=a(7371),A=a(207),Y=a(4714);function j(o,n){if(1&o&&(t.TgZ(0,"mat-option",8),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}class d extends g.cx{constructor(n,e,s,i){super(),this._state=n,this._org=e,this._route=s,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=r=>this._state.setFilters({date:r}),this.setFilters=r=>this._state.setFilters(r),this.setSearch=r=>this._state.setSearchString(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setFilters({zones:r})}}ngOnInit(){var n=this;return(0,f.Z)(function*(){yield n._org.initialised.pipe((0,N.P)(e=>e)).toPromise(),n.subscription("route.query",n._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const s=e.get("zone_ids").split(",");if(s.length){const i=n._org.levelWithID(s);if(!i)return;n._org.building=n._org.buildings.find(r=>r.id===i.parent_id),n.zones=s}}})),n.subscription("levels",n._org.active_levels.subscribe(e=>{n.zones=n.zones.filter(s=>e.find(i=>i.id===s)),!n.zones.length&&e.length&&n.zones.push(e[0].id),n.updateZones(n.zones)})),n.setSearch("")})()}}d.\u0275fac=function(n){return new(n||d)(t.Y36(c),t.Y36(F.w7),t.Y36(b.gz),t.Y36(b.F0))},d.\u0275cmp=t.Xpm({type:d,selectors:[["staff-topbar"]],features:[t.qOj],decls:11,vars:7,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(i){return e.zones=i})("ngModelChange",function(i){return e.updateZones(i)}),t.YNc(3,j,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-slide-toggle",4),t.NdJ("ngModelChange",function(i){return e.setFilters({only_onsite:i})}),t.ALo(6,"async"),t.TgZ(7,"div",5),t._uU(8,"Onsite Only"),t.qZA()(),t._UZ(9,"div",6),t.TgZ(10,"searchbar",7),t.NdJ("modelChange",function(i){return e.setSearch(i)}),t.qZA()()),2&n){let s;t.xp6(2),t.Q6J("ngModel",e.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,e.levels)),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(6,5,e.filters))?null:s.only_onsite)}},dependencies:[l.sg,Z.JJ,Z.On,P.U,I.KE,D.gD,A.ey,Y.Rr,l.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--119.css.map*/"]});var E=a(6896),R=a(1637),$=a(5306),B=a(9685);function X(o,n){1&o&&(t.TgZ(0,"div",11),t._uU(1,"Onsite"),t.qZA())}function G(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"a-user-avatar",2),t.TgZ(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()(),t.YNc(7,X,2,0,"div",6),t.TgZ(8,"div",7)(9,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onsite?i.checkout():i.checkin())}),t.qZA(),t.TgZ(10,"a",9)(11,"app-icon"),t._uU(12,"email"),t.qZA()(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"call"),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("user",e.user),t.xp6(3),t.Oqu(null==e.user?null:e.user.name),t.xp6(2),t.hij(" ",null==e.user?null:e.user.email," "),t.xp6(1),t.Q6J("ngIf",e.onsite),t.xp6(2),t.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.xp6(1),t.Q6J("href","mailto:"+(null==e.user?null:e.user.email),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.email)),t.xp6(3),t.Q6J("href","tel:"+(null==e.user?null:e.user.phone),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.phone))}}class m{constructor(n){var e=this;this._state=n,this.checkin=(0,f.Z)(function*(){e.loading=!0,yield e._state.checkin(e.user).catch(s=>(0,g.cB)("Error checking in Staff member")),e.loading=!1}),this.checkout=(0,f.Z)(function*(){e.loading=!0,yield e._state.checkout(e.user).catch(s=>(0,g.cB)("Error checking out Staff member")),e.loading=!1})}}m.\u0275fac=function(n){return new(n||m)(t.Y36(c))},m.\u0275cmp=t.Xpm({type:m,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-white dark:bg-neutral-700 border-b border-gray-200 dark:border-neutral-500 hover:opacity-80","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-white","dark:bg-neutral-700","border-b","border-gray-200","dark:border-neutral-500","hover:opacity-80"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["icon","","matRipple","","matTooltip","Email Staff",3,"href"],["icon","","matRipple","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(n,e){1&n&&t.YNc(0,G,16,11,"div",0),2&n&&t.Q6J("ngIf",e.user)},dependencies:[l.O5,E.gM,A.wG,R.m,$.o,B.k]});const H=["container"];function V(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.scrollTo(r))}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&o){const e=n.$implicit,s=t.oxw();t.ekj("disabled",t.lcZ(1,5,s.user_list)[e].length<=0)("active",e===s.active_group),t.xp6(2),t.hij(" ",e," ")}}function W(o,n){if(1&o&&(t._UZ(0,"staff-details",12),t.ALo(1,"async"),t.ALo(2,"async")),2&o){const e=n.$implicit,s=n.index,i=t.oxw(2).$implicit,r=t.oxw(2);t.Q6J("id","letter-"+i+"-"+s)("user",e)("onsite",!!t.lcZ(1,3,r.events)&&t.lcZ(2,5,r.events)[e.email])}}function K(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.YNc(3,W,3,7,"staff-details",11),t.ALo(4,"async"),t.BQk()),2&o){const e=t.oxw().$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("id","letter-"+("#"===e?"0":e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,s.user_list)[e])}}function q(o,n){if(1&o&&(t.ynx(0),t.YNc(1,K,5,5,"ng-container",9),t.ALo(2,"async"),t.BQk()),2&o){const e=n.$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,s.user_list)[e].length)}}function tt(o,n){if(1&o&&(t.ynx(0),t.YNc(1,q,3,3,"ng-container",8),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}function et(o,n){1&o&&t._UZ(0,"mat-progress-bar",13)}function nt(o,n){1&o&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"No matching staff members"),t.qZA()())}const S="#abcdefghijklmnopqrstuvwxyz".split("");class h extends g.cx{constructor(n){super(),this._state=n,this.active_group="#",this.groups=S,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,T.U)(e=>e.length)),this.user_list=this._state.filtered_users.pipe((0,T.U)(e=>{const s={};for(const i of S)s[i]=(e||[]).filter(r=>r.name.toLowerCase()[0].startsWith(i)||"#"===i&&!S.includes(r.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),s}))}onScroll(n){const e=this._el.nativeElement.scrollTop;for(const s of S){const i=document.querySelector(`#letter-${"#"===s?"0":s}`);if(i){if(i.offsetTop-e>0)break;this.active_group=s}}}scrollTo(n){const e=document.querySelector(`#letter-${n}-0`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=n)}}function ot(o,n){1&o&&t._UZ(0,"mat-progress-bar",4)}h.\u0275fac=function(n){return new(n||h)(t.Y36(c))},h.\u0275cmp=t.Xpm({type:h,selectors:[["staff-listings"]],viewQuery:function(n,e){if(1&n&&t.Gf(H,5),2&n){let s;t.iGM(s=t.CRH())&&(e._el=s.first)}},features:[t.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100","dark:bg-neutral-600",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","dark:bg-gray-700","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,V,3,7,"div",1),t.qZA(),t.TgZ(2,"div",2,3),t.NdJ("scroll",function(i){return e.onScroll(i)}),t.YNc(4,tt,2,1,"ng-container",4),t.ALo(5,"async"),t.qZA(),t.YNc(6,et,1,0,"mat-progress-bar",5),t.ALo(7,"async"),t.YNc(8,nt,3,0,"ng-template",null,6,t.W1O)),2&n){const s=t.MAs(9);t.xp6(1),t.Q6J("ngForOf",e.groups),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,4,e.user_count))("ngIfElse",s),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,e.loading))}},dependencies:[l.sg,l.O5,w.pW,m,l.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--120.css.map*/"]});class _{constructor(n){this._state=n,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}_.\u0275fac=function(n){return new(n||_)(t.Y36(c))},_.\u0275cmp=t.Xpm({type:_,selectors:[["","app-staff",""]],attrs:["app-staff",""],decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,e){1&n&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"staff-topbar",1)(3,"staff-listings",2),t.YNc(4,ot,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,e.loading)))},dependencies:[l.O5,Q.k,w.pW,d,h,l.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=staff.component.ts-angular-inline--118.css.map*/"]});var it=a(3045);const at=[{path:"",component:_}],rt=[_,d,h,m];class v{}v.\u0275fac=function(n){return new(n||v)},v.\u0275mod=t.oAB({type:v}),v.\u0275inj=t.cJS({imports:[l.ez,Z.u5,it.v,b.Bz.forChild(at)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map