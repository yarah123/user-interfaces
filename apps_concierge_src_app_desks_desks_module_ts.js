(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{3822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DesksModule:()=>_e});var s=n(1511),i=n(6073),o=n(6898),a=n(4810),r=n(5109),l=n(3098),c=n(787),d=n(8223),u=n(2619),p=n(5320),g=n(1490),h=n(4762),m=n(3530),f=n(611),_=n(6839),Z=n(1496),v=n(6283),b=n(4786),k=n(1522),A=n(2319),x=n(1521);function y(e,t){if(1&e&&(u.TgZ(0,"mat-option",7),u._uU(1),u.qZA()),2&e){const e=t.$implicit;u.Q6J("value",e.id),u.xp6(1),u.hij(" ",e.display_name||e.name," ")}}const w=function(){return[]};let q=(()=>{class e extends d.KG{constructor(e,t,n,s){super(),this._desks=e,this._org=t,this._route=n,this._router=s,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.setDate=e=>this._desks.setFilters({date:e}),this.setFilters=e=>this._desks.setFilters(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:e})}}ngOnInit(){return(0,h.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,m.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){this.updateZones(t);const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id)}}e.has("date")&&this.setDate(new Date(+e.get("date"))),e.has("approve")?this.approve(e.get("approve")):e.has("reject")&&this.reject(e.get("reject"))})),this.subscription("levels",this._org.active_levels.subscribe(e=>(0,h.mG)(this,void 0,void 0,function*(){var t;const n=yield this.filters.pipe((0,f.q)(1)).toPromise(),s=(null===(t=null==n?void 0:n.zones)||void 0===t?void 0:t.filter(t=>e.find(e=>e.id===t)||"All"===t))||[];!s.length&&e.length&&s.push(e[0].id),this.updateZones(s)})))})}approve(e){return(0,h.mG)(this,void 0,void 0,function*(){const t=yield(0,_.Fo)(e).toPromise();t&&this._desks.approveDesk(t)})}reject(e){return(0,h.mG)(this,void 0,void 0,function*(){const t=yield(0,_.Fo)(e).toPromise();t&&this._desks.rejectDesk(t)})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.H),u.Y36(Z.w7),u.Y36(o.gz),u.Y36(o.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["desks-topbar"]],features:[u.qOj],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",0),u.TgZ(1,"mat-select",1),u.NdJ("ngModelChange",function(e){return t.updateZones(e)}),u.ALo(2,"async"),u.TgZ(3,"mat-option",2),u._uU(4,"All Levels"),u.qZA(),u.YNc(5,y,2,2,"mat-option",3),u.ALo(6,"async"),u.qZA(),u.qZA(),u._UZ(7,"div",4),u.TgZ(8,"searchbar",5),u.NdJ("modelChange",function(e){return t.setFilters({search:e})}),u.ALo(9,"async"),u.qZA(),u.TgZ(10,"date-options",6),u.NdJ("dateChange",function(e){return t.setDate(e)}),u.qZA()),2&e){let e;u.xp6(1),u.Q6J("ngModel",u.lcZ(2,3,t.filters).zones||u.DdM(9,w)),u.xp6(4),u.Q6J("ngForOf",u.lcZ(6,5,t.levels)),u.xp6(3),u.Q6J("model",null==(e=u.lcZ(9,7,t.filters))?null:e.search)}},directives:[v.KE,b.gD,i.JJ,i.On,k.ey,s.sg,A.U,x.E],pipes:[s.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),e})();var M=n(5994);const T=["app-desks",""];function O(e,t){1&e&&u._UZ(0,"mat-progress-bar",6)}const J=function(){return["/desks","events"]},C=function(){return["/desks","map"]},U=function(){return["/desks","manage"]};let N=(()=>{class e extends d.KG{constructor(e,t){super(),this._state=e,this._router=t,this.loading=this._state.loading}ngOnInit(){var e;this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(e=>{var n;if(e instanceof o.m2){const e=(null===(n=this._router.url)||void 0===n?void 0:n.split("/"))||[""];this.path=e[t.length-1].split("?")[0]}}));const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy(),this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.H),u.Y36(o.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["","app-desks",""]],features:[u.qOj],attrs:T,decls:14,vars:12,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col","dark"],[1,"w-full"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(u._UZ(0,"sidebar"),u.TgZ(1,"main",0),u._UZ(2,"desks-topbar",1),u.TgZ(3,"nav",2),u.TgZ(4,"a",3),u._uU(5," Bookings "),u.qZA(),u.TgZ(6,"a",3),u._uU(7," Map View "),u.qZA(),u.TgZ(8,"a",3),u._uU(9," Manage Desks "),u.qZA(),u.qZA(),u.TgZ(10,"div",4),u._UZ(11,"router-outlet"),u.qZA(),u.YNc(12,O,1,0,"mat-progress-bar",5),u.ALo(13,"async"),u.qZA()),2&e&&(u.xp6(4),u.Q6J("routerLink",u.DdM(9,J))("active","events"===t.path),u.xp6(2),u.Q6J("routerLink",u.DdM(10,C))("active","map"===t.path),u.xp6(2),u.Q6J("routerLink",u.DdM(11,U))("active","manage"===t.path),u.xp6(4),u.Q6J("ngIf",u.lcZ(13,7,t.loading)))},directives:[g.k,q,r.BU,o.yS,r.Nj,o.lC,s.O5,M.pW],pipes:[s.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})();var j=n(1354),D=n(5980),P=n(8055),F=n(1548),Y=n(9436);function Q(e,t){if(1&e&&(u._uU(0),u.ALo(1,"date"),u.ALo(2,"date")),2&e){const e=t.data;u.AsE(" ",u.lcZ(1,2,e)," at ",u.xi3(2,4,e,"shortTime")," ")}}function L(e,t){if(1&e&&(u.TgZ(0,"span",8),u._uU(1),u.qZA()),2&e){const e=t.data;u.ekj("bg-success","approved"===e)("bg-pending","tentative"===e)("bg-error","cancelled"===e||"declined"===e),u.xp6(1),u.hij(" ",e," ")}}function z(e,t){1&e&&u._uU(0),2&e&&u.hij(" ",t.data?"Yes":"No"," ")}function H(e,t){1&e&&(u.TgZ(0,"app-icon"),u._uU(1,"qr_code"),u.qZA())}function I(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",9),u.TgZ(1,"action-icon",10),u.NdJ("click",function(){const t=u.CHM(e).row;return u.oxw().checkin(t)}),u._uU(2,"how_to_reg"),u.qZA(),u.TgZ(3,"button",11),u.NdJ("click",function(){const t=u.CHM(e).row;return u.oxw().approve(t)}),u.TgZ(4,"app-icon"),u._uU(5,"event_available"),u.qZA(),u.qZA(),u.TgZ(6,"button",11),u.NdJ("click",function(){const t=u.CHM(e).row;return u.oxw().reject(t)}),u.TgZ(7,"app-icon"),u._uU(8,"event_busy"),u.qZA(),u.qZA(),u.TgZ(9,"button",12),u.YNc(10,H,2,0,"app-icon",13),u.qZA(),u.TgZ(11,"mat-menu",null,6),u.TgZ(13,"div",14),u._UZ(14,"img",15),u.qZA(),u.TgZ(15,"div",16),u.TgZ(16,"button",17),u._uU(17,"Print QR Code"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=t.row,n=u.MAs(12);u.xp6(9),u.Q6J("disabled",!(null!=e.extension_data&&e.extension_data.checkin_qr_code))("matMenuTriggerFor",n),u.xp6(1),u.Q6J("ngIf",null==e.extension_data?null:e.extension_data.checkin_qr_code),u.xp6(4),u.Q6J("src",null==e.extension_data?null:e.extension_data.checkin_qr_code,u.LSH)}}const G=function(){return["user_name","group","date","status","approver_name","checked_in","access","actions"]},S=function(){return["Person","Group","Date","Status","Approver","Checked In","Access"," "]},W=function(){return["flex","","12r","","10r","","","12r"]},E=function(e,t,n,s,i){return{date:e,status:t,checked_in:n,access:s,actions:i}};let X=(()=>{class e{constructor(e){this._state=e,this.filters=this._state.filters,this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.checkin=e=>this.runMethod("checkin",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.checkinDesk(e)})),this.approve=e=>this.runMethod("approve",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.approveDesk(e)})),this.reject=e=>this.runMethod("reject",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.rejectDesk(e)}))}runMethod(e,t){return(0,h.mG)(this,void 0,void 0,function*(){this.loading=e,yield t().catch(e=>null),this.loading=""})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.H))},e.\u0275cmp=u.Xpm({type:e,selectors:[["desk-bookings"]],decls:18,vars:21,consts:[[1,"min-w-[76rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["status_template",""],["bool_template",""],["action_template",""],["mat-icon-button","",1,"absolute","bottom-2","right-2","bg-white","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"flex","items-center","justify-end","space-x-2"],[3,"click"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"]],template:function(e,t){if(1&e&&(u._UZ(0,"custom-table",0),u.ALo(1,"async"),u.ALo(2,"async"),u.YNc(3,Q,3,7,"ng-template",null,1,u.W1O),u.YNc(5,L,2,7,"ng-template",null,2,u.W1O),u.YNc(7,z,1,1,"ng-template",null,3,u.W1O),u.YNc(9,I,18,4,"ng-template",null,4,u.W1O),u.TgZ(11,"button",5),u.TgZ(12,"app-icon"),u._uU(13,"more_vert"),u.qZA(),u.qZA(),u.TgZ(14,"mat-menu",null,6),u.TgZ(16,"button",7),u.NdJ("click",function(){return t.rejectAll()}),u._uU(17,"Reject All"),u.qZA(),u.qZA()),2&e){const e=u.MAs(4),n=u.MAs(6),s=u.MAs(8),i=u.MAs(10),o=u.MAs(15);let a,r;u.Q6J("dataSource",t.bookings)("filter",null==(a=u.lcZ(1,8,t.filters))?null:a.search)("columns",u.DdM(12,G))("display_column",u.DdM(13,S))("column_size",u.DdM(14,W))("template",u.qbA(15,E,e,n,s,s,i))("empty",null!=(r=u.lcZ(2,10,t.filters))&&r.search?"No matching desk bookings":"There are no desk booking for the currently selected date."),u.xp6(11),u.Q6J("matMenuTriggerFor",o)}},directives:[j.C,D.lW,P.p6,F.o,P.VK,P.OP,Y.m,s.O5],pipes:[s.Ov,s.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}"]}),e})();var B=n(7256),K=n(2571),R=n(3881);let V=(()=>{class e extends d.KG{constructor(e,t,n){super(),this._state=e,this._desk=t,this._desks_state=n,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=e=>this._desks_state.setOptions({host:e})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(e=>{this._desks_state.setOptions({date:e.date?new Date(e.date):new Date,zones:e.zones})}))}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(l.ck),u.Y36(p.H),u.Y36(l.Xp))},e.\u0275cmp=u.Xpm({type:e,selectors:[["desk-map-view"]],features:[u._Bn([l.Xp]),u.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u._UZ(1,"i-map",1),u.ALo(2,"async"),u.ALo(3,"async"),u.ALo(4,"async"),u.ALo(5,"async"),u.ALo(6,"async"),u.ALo(7,"async"),u._UZ(8,"explore-zoom-controls",2),u.TgZ(9,"div",3),u.TgZ(10,"a-user-search-field",4),u.NdJ("ngModelChange",function(e){return t.setHost(e)}),u.qZA(),u.qZA(),u.TgZ(11,"div",5),u._uU(12," Click/Tap an available desk to book it. "),u.qZA(),u.qZA()),2&e&&(u.xp6(1),u.Q6J("src",u.lcZ(2,7,t.url))("zoom",u.lcZ(3,9,t.positions).zoom)("center",u.lcZ(4,11,t.positions).center)("styles",u.lcZ(5,13,t.styles))("features",u.lcZ(6,15,t.features))("actions",u.lcZ(7,17,t.actions)),u.xp6(9),u.Q6J("ngModel",null))},directives:[B.p,K.s,R.d,i.JJ,i.On],pipes:[s.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}"]}),e})();var $=n(6817),ee=n(7789),te=n(6756),ne=n(9236),se=n(6828),ie=n(7806);function oe(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"item-list-field",7),u.NdJ("ngModelChange",function(t){const n=u.CHM(e),s=n.row,i=n.key,o=u.oxw();return(!o.changes[s.id]||!o.changes[s.id][i])&&(o.changes[s.id]={}),o.changes[s.id][i]=t}),u.qZA()}if(2&e){const e=t.data,n=t.row,s=t.key,i=u.oxw();let o;u.Q6J("placeholder","groups"===s?"User Groups":"Features")("ngModel",null!==(o=i.changes[n.id]?i.changes[n.id][s]:null)&&void 0!==o?o:e)}}function ae(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",8),u.TgZ(1,"mat-form-field",9),u.TgZ(2,"input",10),u.NdJ("ngModelChange",function(t){const n=u.CHM(e),s=n.row,i=n.key,o=u.oxw();return(!o.changes[s.id]||!o.changes[s.id][i])&&(o.changes[s.id]={}),o.changes[s.id][i]=t}),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=t.data,n=t.row,s=t.key,i=u.oxw();let o;u.xp6(2),u.Q6J("placeholder",s)("ngModel",null!==(o=i.changes[n.id]?i.changes[n.id][s]:null)&&void 0!==o?o:e)}}function re(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",11),u.TgZ(1,"mat-checkbox",12),u.NdJ("ngModelChange",function(t){const n=u.CHM(e).row,s=u.oxw();return s.changes[n.id]?s.changes[n.id].bookable=t:s.changes[n.id]={bookable:t}}),u.qZA(),u.qZA()}if(2&e){const e=t.data,n=t.row,s=u.oxw();let i;u.xp6(1),u.Q6J("ngModel",null!==(i=null==s.changes[n.id]?null:s.changes[n.id].bookable)&&void 0!==i?i:e)}}function le(e,t){1&e&&(u.TgZ(0,"app-icon"),u._uU(1,"qr_code"),u.qZA())}function ce(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",13),u.TgZ(1,"div",14),u.TgZ(2,"app-icon"),u._uU(3,"warning"),u.qZA(),u.qZA(),u.TgZ(4,"button",15),u.NdJ("click",function(){const t=u.CHM(e).row;return u.oxw().removeDesk(t)}),u.TgZ(5,"app-icon"),u._uU(6,"delete"),u.qZA(),u.qZA(),u.TgZ(7,"button",16),u.YNc(8,le,2,0,"app-icon",17),u.qZA(),u.TgZ(9,"mat-menu",null,18),u.TgZ(11,"div",19),u._UZ(12,"img",20),u.qZA(),u.TgZ(13,"div",21),u.TgZ(14,"button",22),u._uU(15,"Print QR Code"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=t.row,n=u.MAs(10),s=u.oxw();u.xp6(1),u.ekj("opacity-0",!s.changes[e.id]),u.xp6(6),u.Q6J("disabled",!e.qr_code)("matMenuTriggerFor",n),u.xp6(1),u.Q6J("ngIf",e.qr_code),u.xp6(4),u.Q6J("src",e.qr_code,u.LSH)}}function de(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",23),u.TgZ(1,"p",24),u._uU(2),u.qZA(),u.TgZ(3,"div",25),u.TgZ(4,"button",26),u.NdJ("click",function(){return u.CHM(e),u.oxw().save()}),u._uU(5,"Save Changes"),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=u.oxw();u.xp6(2),u.hij(" ",e.changed," Desk(s) with unsaved changes ")}}function ue(e,t){if(1&e&&(u.TgZ(0,"div",27),u._UZ(1,"mat-spinner",28),u.TgZ(2,"p"),u._uU(3),u.qZA(),u.qZA()),2&e){const e=u.oxw();u.xp6(3),u.Oqu(e.loading)}}const pe=function(){return["id","bookable","name","groups","features","actions"]},ge=function(){return["ID","Bookable","Name","Groups","Features"," "]},he=function(){return["8r","6r","12r","flex","16r","10r"]},me=function(e,t,n,s,i,o){return{id:e,name:t,bookable:n,groups:s,features:i,actions:o}},fe=[{path:"",component:N,children:[{path:"events",component:X},{path:"map",component:V},{path:"manage",component:(()=>{class e{constructor(e,t){this._state=e,this._org=t,this.changes={},this.filters=this._state.filters,this.desks=this._state.desks}get changed(){return Object.keys(this.changes).length}save(){return(0,h.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...";const e=(yield this.desks.pipe((0,f.q)(1)).toPromise()).map(e=>new Z.nk(Object.assign(Object.assign({},e),this.changes[e.id]||{})).toJSON()),t=yield this.filters.pipe((0,f.q)(1)).toPromise(),n=this._org.levelWithID(t.zones);yield(0,$.Ymr)(n.id,{name:"desks",description:"desks",details:e}).toPromise().catch(e=>{throw this.loading="",(0,d.cB)(`Error saving desk data. Error: ${e.message||e}`),e}),(0,d.t5)("Successfully updated desks"),this.loading="",this.changes={}})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.H),u.Y36(Z.w7))},e.\u0275cmp=u.Xpm({type:e,selectors:[["desks-manage"]],decls:13,vars:23,consts:[[1,"min-w-[72rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["list_edit_template",""],["text_edit_template",""],["bookable_edit_template",""],["action_template",""],["class","fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow",4,"ngIf"],["class","absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60",4,"ngIf"],["hide-outline","",1,"w-full",3,"placeholder","ngModel","ngModelChange"],["hide-outline","",1,"w-full","h-12"],["appearance","outline",1,"h-12","w-full"],["matInput","",3,"placeholder","ngModel","ngModelChange"],[1,"flex","items-center","justify-center","pl-4"],[3,"ngModel","ngModelChange"],[1,"flex","items-center","justify-end","space-x-2"],["matTooltip","Desk has unsaved changes",1,"p-2","text-2xl","text-pending"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],["menu","matMenu"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"],[1,"fixed","bottom-2","left-1/2","transform","-translate-x-1/2","p-4","rounded","bg-white","shadow"],[1,"mb-2","text-xl"],[1,"flex","items-center","justify-center"],["save","","mat-button","",3,"click"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","space-y-2","bg-white","bg-opacity-60"],["diameter","32"]],template:function(e,t){if(1&e&&(u._UZ(0,"custom-table",0),u.ALo(1,"async"),u.ALo(2,"async"),u.YNc(3,oe,1,2,"ng-template",null,1,u.W1O),u.YNc(5,ae,3,2,"ng-template",null,2,u.W1O),u.YNc(7,re,2,1,"ng-template",null,3,u.W1O),u.YNc(9,ce,16,6,"ng-template",null,4,u.W1O),u.YNc(11,de,6,1,"div",5),u.YNc(12,ue,4,1,"div",6)),2&e){const e=u.MAs(4),n=u.MAs(6),s=u.MAs(8),i=u.MAs(10);let o,a;u.Q6J("dataSource",t.desks)("filter",null==(o=u.lcZ(1,9,t.filters))?null:o.search)("columns",u.DdM(13,pe))("display_column",u.DdM(14,ge))("column_size",u.DdM(15,he))("template",u.HTZ(16,me,n,n,s,e,e,i))("empty",null!=(a=u.lcZ(2,11,t.filters))&&a.search?"No matching desks":"No desks for selected level"),u.xp6(11),u.Q6J("ngIf",t.changed>0),u.xp6(1),u.Q6J("ngIf",t.loading)}},directives:[j.C,s.O5,ee.q9,i.JJ,i.On,v.KE,te.Nt,i.Fj,ne.oG,se.gM,F.o,D.lW,P.p6,P.VK,P.OP,ie.$g],pipes:[s.Ov],styles:[""]}),e})()},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:"events"}];let _e=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[s.ez,i.u5,r.Nh,i.UX,c.v,l.P2,a.Fk,v.lN,ne.p9,te.c,o.Bz.forChild(fe)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map