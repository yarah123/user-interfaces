(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_reports_reports_module_ts"],{5906:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ReportsModule:()=>re});var o=n(1511),s=n(6073),i=n(6898),a=n(787),r=n(3005),l=n(2619),c=n(1490),u=n(4762),d=n(3530),p=n(8223),g=n(634),f=n(6839),_=n(4266),h=n(205),Z=n(8125),m=n(5090),v=n(7953),y=n(6280),A=864e5;function x(t,e){(0,y.Z)(2,arguments);var n=(0,h.Z)(t),o=(0,h.Z)(e),s=n.getTime()-(0,v.Z)(n),i=o.getTime()-(0,v.Z)(o);return Math.round((s-i)/A)}function q(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function T(t,e){(0,y.Z)(2,arguments);var n=(0,m.Z)(t),o=(0,m.Z)(e),s=q(n,o),i=Math.abs(x(n,o));n.setDate(n.getDate()-s*i);var a=q(n,o)===-s,r=s*(i-a);return 0===r?0:r}var w=n(4441),U=n(5959),b=n(8512),O=n(878),M=n(3080),k=n(7701),L=n(4689),D=n(7727),J=n(9996),j=n(8303),Y=n(1496);let I=(()=>{class t{constructor(t){this._org=t,this._generate=new U.xQ,this._loading=new b.X(""),this._active_bookings=new b.X([]),this._options=new b.X({start:new Date,end:new Date}),this._bookings_list=this._generate.pipe((0,k.b)(500),(0,L.w)(t=>{var e;const n=this._options.getValue();if(this._loading.next("Loading report details..."),!(null==n?void 0:n.type)&&!(null===(e=null==n?void 0:n.zones)||void 0===e?void 0:e.length))return(0,O.of)([]);const o=(0,h.Z)((null==n?void 0:n.start)?new Date(n.start):new Date).valueOf(),s=(0,Z.Z)((null==n?void 0:n.end)?new Date(n.end):o).valueOf(),i=(null==n?void 0:n.zones)?n.zones.filter(t=>"All"!==t).join(","):"",a={period_start:Math.floor(o/1e3),period_end:Math.floor(s/1e3)};return"desks"===n.type?(0,f.F2)(Object.assign(Object.assign({},a),{zones:i,type:"desk"})):(0,_.u$)(Object.assign(Object.assign({},a),{zone_ids:i}))}),(0,D.K)(t=>[]),(0,J.U)(t=>(this._loading.next(""),(null==t?void 0:t.length)||(0,p.cB)("No bookings for the selected levels and period"),this._active_bookings.next(t||[]),t)),(0,j.d)()),this.loading=this._loading.asObservable(),this.options=this._options.asObservable(),this.bookings=this._active_bookings.asObservable(),this.counts=this._options.pipe((0,k.b)(500),(0,L.w)(t=>{const e=(t.zones||[]).filter(t=>-1!==t&&"All"!==t);return Promise.all(e.map(t=>(0,g.rlq)(t,{name:"desks"}).pipe((0,J.U)(e=>[t,e.details.length])).toPromise()))}),(0,D.K)(t=>[]),(0,J.U)(t=>{const e={};return this._active_bookings.next([]),t.forEach(([t,n])=>e[t]=n),e}),(0,j.d)()),this.stats=(0,M.aj)([this.counts,this.bookings]).pipe((0,J.U)(([t,e])=>e[0]instanceof _.ym?function(t,e=8){const n=t.reduce((t,e)=>t+e.attendees.length,0),o=t.reduce((t,e)=>{var n;return t+(null===(n=e.system)||void 0===n?void 0:n.capacity)},0),s=t.reduce((t,e)=>t+e.duration,0)/(60*e),i=n/o;return{count:t.length,avg_length:t.reduce((t,e)=>t+e.duration,0)/t.length,efficiency:(s+i)/2,total_users:n,total_capacity:o,occupancy:i,utilisation:s,events:t}}(e,8*this.duration):function(t,e=1,n={}){const o=Object.keys(n).reduce((t,e)=>t+(n[e]||0),0);return{total:o,count:t.length,utilisation:t.length/o,events:t}}(e||[],this.duration,t))),this._bookings_list.subscribe(t=>t)}get duration(){const t=this._options.getValue();return Math.abs(T(t.start,t.end))}generateReport(){this._generate.next((new Date).valueOf())}setOptions(t){var e,n,o,s,i,a,r;(null===(e=t.zones)||void 0===e?void 0:e.includes("All"))?t.zones=["All",...this._org.levelsForBuilding(this._org.building).map(t=>t.id)]:t.zones&&(null===(o=null===(n=this._options.getValue())||void 0===n?void 0:n.zones)||void 0===o?void 0:o.includes("All"))&&(t.zones=[]),(null===(s=t.start)||void 0===s?void 0:s.valueOf())!==(null===(i=this._options.getValue().start)||void 0===i?void 0:i.valueOf())&&(null===(a=t.end)||void 0===a?void 0:a.valueOf())!==(null===(r=this._options.getValue().end)||void 0===r?void 0:r.valueOf())&&this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}downloadReport(){const t=this._options.getValue(),e=this._active_bookings.getValue();(0,p.Sv)(`report+${t.type}+${(0,w.Z)(t.start,"yyyy-MM-dd")}+${(0,w.Z)(t.end,"yyyy-MM-dd")}.csv`,(0,p.o3)(e.map(t=>{const e=t.toJSON();return delete e.zones,delete e.server_names,e})))}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(Y.w7))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var z=n(6283),Q=n(4786),N=n(1522),C=n(5812),S=n(5980),P=n(7806);function E(t,e){if(1&t&&(l.TgZ(0,"mat-option",13),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("value",t.id),l.xp6(1),l.hij(" ",t.display_name||t.name," ")}}function R(t,e){1&t&&l._UZ(0,"mat-spinner",14),2&t&&l.Q6J("diameter",32)}function W(t,e){1&t&&(l.TgZ(0,"p"),l._uU(1,"Generate Report"),l.qZA())}let F=(()=>{class t extends p.KG{constructor(t,e,n){super(),this._state=t,this._org=e,this._route=n,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(t=>`${t.id}`),this.levels=this._org.active_levels,this.loading=this._state.loading,this.bookings=this._state.bookings,this.options=this._state.options,this.generateReport=()=>this._state.generateReport(),this.downloadReport=()=>this._state.downloadReport(),this.setStartDate=t=>this._state.setOptions({start:new Date(t)}),this.setEndDate=t=>this._state.setOptions({end:new Date(t)}),this.setZones=t=>this._state.setOptions({zones:t})}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,d.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const e=t.get("zone_ids").split(",");if(e.length){const t=this._org.levelWithID(e);if(!t)return;this._org.building=this._org.buildings.find(e=>e.id===t.parent_id),this.setZones(e)}}}))})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I),l.Y36(Y.w7),l.Y36(i.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["reports-options"]],features:[l.qOj],decls:27,vars:28,consts:[["appearance","outline",1,"w-48"],["multiple","","placeholder","Select Levels...",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"w-64"],[3,"rangePicker"],["matStartDate","","placeholder","Start date",3,"ngModel","ngModelChange"],["matEndDate","","placeholder","End date",3,"ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["mat-button","",1,"ml-4",3,"disabled","click"],[3,"diameter",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"diameter"]],template:function(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",0),l.TgZ(1,"mat-select",1),l.NdJ("ngModelChange",function(t){return e.setZones(t)}),l.ALo(2,"async"),l.TgZ(3,"mat-option",2),l._uU(4,"All Levels"),l.qZA(),l.YNc(5,E,2,2,"mat-option",3),l.ALo(6,"async"),l.qZA(),l.qZA(),l.TgZ(7,"mat-form-field",4),l.TgZ(8,"mat-date-range-input",5),l.TgZ(9,"input",6),l.NdJ("ngModelChange",function(t){return t?e.setStartDate(t):""}),l.ALo(10,"async"),l.qZA(),l.TgZ(11,"input",7),l.NdJ("ngModelChange",function(t){return t?e.setEndDate(t):""}),l.ALo(12,"async"),l.qZA(),l.qZA(),l._UZ(13,"mat-datepicker-toggle",8),l._UZ(14,"mat-date-range-picker",null,9),l.qZA(),l.TgZ(16,"button",10),l.NdJ("click",function(){return e.generateReport()}),l.ALo(17,"async"),l.ALo(18,"async"),l.YNc(19,R,1,1,"mat-spinner",11),l.ALo(20,"async"),l.YNc(21,W,2,0,"p",12),l.ALo(22,"async"),l.qZA(),l.TgZ(23,"button",10),l.NdJ("click",function(){return e.downloadReport()}),l.ALo(24,"async"),l.TgZ(25,"p"),l._uU(26,"Download Report"),l.qZA(),l.qZA()),2&t){const t=l.MAs(15);let n,o,s,i,a;l.xp6(1),l.Q6J("ngModel",null==(n=l.lcZ(2,10,e.options))?null:n.zones),l.xp6(4),l.Q6J("ngForOf",l.lcZ(6,12,e.levels)),l.xp6(3),l.Q6J("rangePicker",t),l.xp6(1),l.Q6J("ngModel",null==(o=l.lcZ(10,14,e.options))?null:o.start),l.xp6(2),l.Q6J("ngModel",null==(s=l.lcZ(12,16,e.options))?null:s.end),l.xp6(2),l.Q6J("for",t),l.xp6(3),l.Q6J("disabled",!!l.lcZ(17,18,e.loading)||!(null!=(i=l.lcZ(18,20,e.options))&&null!=i.zones&&i.zones.length)),l.xp6(3),l.Q6J("ngIf",l.lcZ(20,22,e.loading)),l.xp6(2),l.Q6J("ngIf",!l.lcZ(22,24,e.loading)),l.xp6(2),l.Q6J("disabled",!(null!=(a=l.lcZ(24,26,e.bookings))&&a.length))}},directives:[z.KE,Q.gD,s.JJ,s.On,N.ey,o.sg,C.wx,C.zY,s.Fj,C.By,C.nW,z.R9,C._g,S.lW,o.O5,P.$g],pipes:[o.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:normal;line-height:1.2em}"]}),t})();var X=n(1548);const B=function(){return["/reports","desks"]},G=function(){return["/reports","spaces"]},V=function(){return["/reports","catering"]};let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["reports-menu"],["","reports-menu",""]],decls:30,vars:6,consts:[["matRipple","",1,"h-64","w-64","m-4","p-4","flex","flex-col","items-center","justify-center","bg-white","rounded","shadow","hover:bg-gray-100",3,"routerLink"],[1,"text-8xl"],[1,"text-xl","font-bold","mb-4"],[1,"flex","items-center"],[1,"ml-2"]],template:function(t,e){1&t&&(l.TgZ(0,"a",0),l.TgZ(1,"app-icon",1),l._uU(2,"room"),l.qZA(),l.TgZ(3,"h3",2),l._uU(4,"Desks"),l.qZA(),l.TgZ(5,"div",3),l.TgZ(6,"p"),l._uU(7,"View Report"),l.qZA(),l.TgZ(8,"app-icon",4),l._uU(9,"chevron_right"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"a",0),l.TgZ(11,"app-icon",1),l._uU(12,"meeting_room"),l.qZA(),l.TgZ(13,"h3",2),l._uU(14,"Rooms"),l.qZA(),l.TgZ(15,"div",3),l.TgZ(16,"p"),l._uU(17,"View Report"),l.qZA(),l.TgZ(18,"app-icon",4),l._uU(19,"chevron_right"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"a",0),l.TgZ(21,"app-icon",1),l._uU(22,"room_service"),l.qZA(),l.TgZ(23,"h3",2),l._uU(24,"Catering"),l.qZA(),l.TgZ(25,"div",3),l.TgZ(26,"p"),l._uU(27,"View Report"),l.qZA(),l.TgZ(28,"app-icon",4),l._uU(29,"chevron_right"),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.Q6J("routerLink",l.DdM(3,B)),l.xp6(10),l.Q6J("routerLink",l.DdM(4,G)),l.xp6(10),l.Q6J("routerLink",l.DdM(5,V)))},directives:[i.yS,N.wG,X.o],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;background:var(--bg)}"]}),t})();const H=["app-reports",""];function K(t,e){1&t&&l._UZ(0,"div",4)}let tt=(()=>{class t{constructor(t){this._router=t}get path(){const t=this._router.url.split("/");return t[t.length-1]}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(i.F0))},t.\u0275cmp=l.Xpm({type:t,selectors:[["","app-reports",""]],attrs:H,decls:6,vars:1,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex-1","h-1/2","w-full","overflow-auto"],["reports-menu","","class","absolute inset-0",4,"ngIf"],["reports-menu","",1,"absolute","inset-0"]],template:function(t,e){1&t&&(l._UZ(0,"sidebar",0),l.TgZ(1,"main",1),l._UZ(2,"reports-options"),l.TgZ(3,"div",2),l._UZ(4,"router-outlet"),l.qZA(),l.YNc(5,K,1,0,"div",3),l.qZA()),2&t&&(l.xp6(5),l.Q6J("ngIf","reports"===e.path))},directives:[c.k,F,i.lC,o.O5,$],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),t})();var et=n(7209),nt=n(4587),ot=n(8276);let st=(()=>{class t{constructor(t){this._state=t,this.total_count=this._state.stats.pipe((0,J.U)(t=>t.count||0)),this.avg_length=this._state.stats.pipe((0,J.U)(t=>(0,ot.Z)({minutes:t.avg_length||0}))),this.efficiency=this._state.stats.pipe((0,J.U)(t=>(100*(t.efficiency||0)).toFixed(1))),this.total_users=this._state.stats.pipe((0,J.U)(t=>t.total_users||0)),this.total_capacity=this._state.stats.pipe((0,J.U)(t=>t.total_capacity||0)),this.occupancy=this._state.stats.pipe((0,J.U)(t=>(100*(t.occupancy||0)).toFixed(1))),this.utilisation=this._state.stats.pipe((0,J.U)(t=>(100*(t.utilisation||0)).toFixed(1)))}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["report-spaces-overall"]],decls:44,vars:21,consts:[[1,"m-4","p-4","rounded","bg-white","shadow","flex","justify-center","items-center","space-x-2"],[1,"flex","flex-col","items-center","flex-1"],[1,"flex-1","flex","flex-col","items-center","justify-center"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h3"),l._uU(3,"Total Bookings"),l.qZA(),l.TgZ(4,"p"),l._uU(5),l.ALo(6,"async"),l.qZA(),l.qZA(),l.TgZ(7,"div",1),l.TgZ(8,"h3"),l._uU(9,"Average Bookings Length"),l.qZA(),l.TgZ(10,"p"),l._uU(11),l.ALo(12,"async"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(13,"div",0),l.TgZ(14,"div",2),l.TgZ(15,"h3"),l._uU(16,"Overall Efficiency"),l.qZA(),l.TgZ(17,"p"),l._uU(18),l.ALo(19,"async"),l.qZA(),l.qZA(),l.TgZ(20,"div",2),l.TgZ(21,"h3"),l._uU(22,"Occupancy"),l.qZA(),l.TgZ(23,"p"),l._uU(24),l.ALo(25,"async"),l.qZA(),l.qZA(),l.TgZ(26,"div",2),l.TgZ(27,"h3"),l._uU(28,"Total Attendees"),l.qZA(),l.TgZ(29,"p"),l._uU(30),l.ALo(31,"async"),l.qZA(),l.qZA(),l.TgZ(32,"div",2),l.TgZ(33,"h3"),l._uU(34,"Total Capacity"),l.qZA(),l.TgZ(35,"p"),l._uU(36),l.ALo(37,"async"),l.qZA(),l.qZA(),l.TgZ(38,"div",2),l.TgZ(39,"h3"),l._uU(40,"Utilisation"),l.qZA(),l.TgZ(41,"p"),l._uU(42),l.ALo(43,"async"),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(5),l.Oqu(l.lcZ(6,7,e.total_count)||0),l.xp6(6),l.Oqu(l.lcZ(12,9,e.avg_length)||"None"),l.xp6(7),l.hij("",l.lcZ(19,11,e.efficiency)||0,"%"),l.xp6(6),l.hij("",l.lcZ(25,13,e.occupancy)||0,"%"),l.xp6(6),l.Oqu(l.lcZ(31,15,e.total_users)||0),l.xp6(6),l.Oqu(l.lcZ(37,17,e.total_capacity)||0),l.xp6(6),l.hij("",l.lcZ(43,19,e.utilisation)||0,"%"))},pipes:[o.Ov],styles:["h3[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]:not([simple]){font-size:1.75rem}"]}),t})();var it=n(611),at=n(1354);const rt=function(){return["name","capacity","count","utilisation","avg_attendees","occupancy"]},lt=function(){return["Name","Capacity","Meeting Count","Utilisation","Avg. Attendees","Occupancy"]},ct=function(){return["flex"]};let ut=(()=>{class t{constructor(t){this._reports=t,this.space_list=(0,M.aj)([this._reports.stats,this._reports.options]).pipe((0,k.b)(300),(0,J.U)(([t,{start:e,end:n}])=>{let o=[];for(const i of t.events){const t=i.resources||[];for(const e of t){o.find(t=>t.id===e.id)||o.push({id:e.id,name:e.display_name||e.name,capacity:e.capacity||1,count:0,attendees:0,avg_attendees:0,usage:0,utilisation:0,occupancy:0});const t=o.find(t=>t.id===e.id);t.count+=1,t.usage+=i.duration,t.attendees+=i.attendees.length}}const s=T(n,e);for(const i of o)i.avg_attendees=i.attendees/i.count,i.utilisation=i.usage/60/8/s,i.occupancy=i.avg_attendees/i.capacity;return o})),this.download=()=>(0,u.mG)(this,void 0,void 0,function*(){const t=yield this.space_list.pipe((0,it.q)(1)).toPromise();(0,p.Sv)("report-spaces-usage.csv",(0,p.o3)(t))})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["report-spaces-space-listing"]],decls:8,vars:8,consts:[[1,"m-4","rounded","bg-white","shadow","overflow-hidden"],[1,"border-b","border-gray-300","px-4","py-2","flex","items-center"],[1,"font-bold","text-xl","flex-1"],["mat-icon-button","",3,"click"],[3,"dataSource","pagination","columns","display_column","column_size"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h3",2),l._uU(3,"Space Utilisation"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){return e.download()}),l.TgZ(5,"app-icon"),l._uU(6,"download"),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"custom-table",4),l.qZA()),2&t&&(l.xp6(7),l.Q6J("dataSource",e.space_list)("pagination",!0)("columns",l.DdM(5,rt))("display_column",l.DdM(6,lt))("column_size",l.DdM(7,ct)))},directives:[S.lW,X.o,at.C],styles:[""]}),t})();const dt=function(){return["name","capacity","count","avg_attendees","occupancy"]},pt=function(){return["Name","Capacity","Meeting Count","Avg. Attendees","Occupancy"]},gt=function(){return["flex"]};let ft=(()=>{class t{constructor(t){this._reports=t,this.user_list=(0,M.aj)([this._reports.stats]).pipe((0,k.b)(300),(0,J.U)(([t])=>{let e=[];for(const n of t.events){const t=n.attendees||[],o=n.resources.reduce((t,e)=>t+e.capacity,0)||1;for(const s of t){e.find(t=>t.email===s.email)||e.push({id:s.email,name:s.name,capacity:o,count:0,attendees:0,avg_attendees:0,occupancy:0});const t=e.find(t=>t.id===s.email);t.count+=1,t.attendees+=n.attendees.length}}for(const n of e)n.avg_attendees=n.attendees/n.count,n.occupancy=n.avg_attendees/n.capacity;return e}),(0,j.d)(1)),this.download=()=>(0,u.mG)(this,void 0,void 0,function*(){const t=yield this.user_list.pipe((0,it.q)(1)).toPromise();(0,p.Sv)("report-space-attendee-usage.csv",(0,p.o3)(t))})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["report-spaces-user-listing"]],decls:8,vars:8,consts:[[1,"m-4","rounded","bg-white","shadow","overflow-hidden"],[1,"border-b","border-gray-300","px-4","py-2","flex","items-center"],[1,"font-bold","text-xl","flex-1"],["mat-icon-button","",3,"click"],[3,"dataSource","pagination","columns","display_column","column_size"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h3",2),l._uU(3,"Staff Utilisation"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){return e.download()}),l.TgZ(5,"app-icon"),l._uU(6,"download"),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"custom-table",4),l.qZA()),2&t&&(l.xp6(7),l.Q6J("dataSource",e.user_list)("pagination",!0)("columns",l.DdM(5,dt))("display_column",l.DdM(6,pt))("column_size",l.DdM(7,gt)))},directives:[S.lW,X.o,at.C],styles:[""]}),t})();const _t=["report-spaces",""];function ht(t,e){1&t&&(l.ynx(0),l._UZ(1,"report-spaces-overall"),l._UZ(2,"report-spaces-space-listing"),l._UZ(3,"report-spaces-user-listing"),l.BQk())}function Zt(t,e){if(1&t&&(l.ynx(0),l.YNc(1,ht,4,0,"ng-container",0),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(),e=l.MAs(5);l.xp6(1),l.Q6J("ngIf",l.lcZ(2,2,t.total_count))("ngIfElse",e)}}function mt(t,e){1&t&&(l.TgZ(0,"div",3),l._UZ(1,"mat-spinner",4),l.TgZ(2,"p",5),l._uU(3,"Loading report data..."),l.qZA(),l.qZA()),2&t&&(l.xp6(1),l.Q6J("diameter",32))}function vt(t,e){1&t&&(l.TgZ(0,"div",3),l.TgZ(1,"p",5),l._uU(2," Select levels and time period to generate a report. "),l.qZA(),l.qZA())}let yt=(()=>{class t{constructor(t){this._state=t,this.total_count=this._state.stats.pipe((0,J.U)(t=>t.count||0)),this.loading=this._state.loading}ngOnInit(){this._state.setOptions({type:"events"})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["","report-spaces",""]],attrs:_t,decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],[1,"h-full","w-full","flex","flex-col","items-center","p-8"],[1,"mb-4",3,"diameter"],["simple",""]],template:function(t,e){if(1&t&&(l.YNc(0,Zt,3,4,"ng-container",0),l.ALo(1,"async"),l.YNc(2,mt,4,1,"ng-template",null,1,l.W1O),l.YNc(4,vt,3,0,"ng-template",null,2,l.W1O)),2&t){const t=l.MAs(3);l.Q6J("ngIf",!l.lcZ(1,2,e.loading))("ngIfElse",t)}},directives:[o.O5,st,ut,ft,P.$g],pipes:[o.Ov],styles:[""]}),t})();var At=n(9310),xt=n(3848);const qt=function(){return["date","usage","approved","count","utilisation"]},Tt=function(){return["Date","Used Desks","Approved Bookings","Total Requests","Utilisation"]},wt=function(){return["flex"]};let Ut=(()=>{class t{constructor(t){this._state=t,this.day_list=(0,M.aj)([this._state.options,this._state.stats]).pipe((0,J.U)(([t,e])=>{const{start:n,end:o}=t;let s=n;const i=[];for(;(0,At.Z)(s,o);){const t=(0,h.Z)(s).valueOf(),n=(0,Z.Z)(t).valueOf(),o=e.events.filter(e=>(0,p.MZ)(t,n,e.date,e.date+60*e.duration*1e3));i.push({date:t,total:e.total,free:e.total-o.length,approved:o.reduce((t,e)=>t+(e.approved?1:0),0),count:o.length,utilisation:(o.length/e.total*100).toFixed(1)}),s=(0,xt.Z)(s,1)}return i}),(0,j.d)(1)),this.download=()=>(0,u.mG)(this,void 0,void 0,function*(){let t=yield this.day_list.pipe((0,it.q)(1)).toPromise();t=t.map(t=>Object.assign(Object.assign({},t),{date:(0,w.Z)(t.date,"MMMM d, y(EEE)")})),(0,p.Sv)("desks-usage.csv",(0,p.o3)(t))})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["report-desks-overall-list"]],decls:8,vars:8,consts:[[1,"m-4","rounded","bg-white","shadow","overflow-hidden"],[1,"border-b","border-gray-300","p-4","flex","items-center"],[1,"font-bold","text-xl","flex-1"],["mat-icon-button","",3,"click"],["red-header","",3,"dataSource","pagination","columns","display_column","column_size"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h3",2),l._uU(3,"Daily Utilisation"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){return e.download()}),l.TgZ(5,"app-icon"),l._uU(6,"download"),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"custom-table",4),l.qZA()),2&t&&(l.xp6(7),l.Q6J("dataSource",e.day_list)("pagination",!0)("columns",l.DdM(5,qt))("display_column",l.DdM(6,Tt))("column_size",l.DdM(7,wt)))},directives:[S.lW,X.o,at.C],encapsulation:2}),t})();const bt=function(){return["name","avg_usage","approved","count","utilisation"]},Ot=function(){return["Level","Avg. Used Desks","Approved Bookings","Total Requests","Utilisation"]},Mt=function(){return["flex"]};let kt=(()=>{class t{constructor(t,e){this._state=t,this._org=e,this.level_list=(0,M.aj)([this._state.options,this._state.stats,this._state.counts]).pipe((0,J.U)(([t,e,n])=>{const{start:o,end:s,zones:i}=t,a=T(s,o),r=[];for(const l of i){if("All"===l)continue;const t=this._org.levelWithID([l]),o=n[l]||0,s=e.events.filter(t=>t.zones.includes(l));let i=(o*a-s.length)/a;i%1!=0&&(i=i.toFixed(2)),r.push({name:(null==t?void 0:t.display_name)||(null==t?void 0:t.name),free:i,total:o,count:s.length,utilisation:(s.length/(o*a)*100||0).toFixed(2)})}return r}),(0,j.d)(1)),this.download=()=>(0,u.mG)(this,void 0,void 0,function*(){let t=yield this.level_list.pipe((0,it.q)(1)).toPromise();(0,p.Sv)("desks-levels-usage.csv",(0,p.o3)(t))})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I),l.Y36(Y.w7))},t.\u0275cmp=l.Xpm({type:t,selectors:[["report-desks-levels-list"]],decls:8,vars:8,consts:[[1,"m-4","rounded","bg-white","shadow","overflow-hidden"],[1,"border-b","border-gray-300","p-4","flex","items-center"],[1,"font-bold","text-xl","flex-1"],["mat-icon-button","",3,"click"],["red-header","",3,"dataSource","pagination","columns","display_column","column_size"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h3",2),l._uU(3,"Level Utilisation"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){return e.download()}),l.TgZ(5,"app-icon"),l._uU(6,"download"),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"custom-table",4),l.qZA()),2&t&&(l.xp6(7),l.Q6J("dataSource",e.level_list)("pagination",!0)("columns",l.DdM(5,bt))("display_column",l.DdM(6,Ot))("column_size",l.DdM(7,Mt)))},directives:[S.lW,X.o,at.C],encapsulation:2}),t})();const Lt=["report-desks",""];function Dt(t,e){if(1&t&&(l.ynx(0),l.TgZ(1,"div",3),l.TgZ(2,"div",4),l.TgZ(3,"h3"),l._uU(4,"Total Bookings"),l.qZA(),l.TgZ(5,"p"),l._uU(6),l.ALo(7,"async"),l.qZA(),l.qZA(),l.TgZ(8,"div",4),l.TgZ(9,"h3"),l._uU(10,"Utilisation"),l.qZA(),l.TgZ(11,"p"),l._uU(12),l.ALo(13,"async"),l.qZA(),l.qZA(),l.qZA(),l._UZ(14,"report-desks-overall-list"),l._UZ(15,"report-desks-levels-list"),l.BQk()),2&t){const t=l.oxw(2);l.xp6(6),l.Oqu(l.lcZ(7,2,t.total_count)||0),l.xp6(6),l.hij("",l.lcZ(13,4,t.utilisation)||0,"%")}}function Jt(t,e){if(1&t&&(l.ynx(0),l.YNc(1,Dt,16,6,"ng-container",0),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(),e=l.MAs(5);l.xp6(1),l.Q6J("ngIf",l.lcZ(2,2,t.total_count))("ngIfElse",e)}}function jt(t,e){1&t&&(l.TgZ(0,"div",5),l._UZ(1,"mat-spinner",6),l.TgZ(2,"p",7),l._uU(3,"Loading report data..."),l.qZA(),l.qZA()),2&t&&(l.xp6(1),l.Q6J("diameter",32))}function Yt(t,e){1&t&&(l.TgZ(0,"div",5),l.TgZ(1,"p",7),l._uU(2," Select levels and time period to generate a report. "),l.qZA(),l.qZA())}let It=(()=>{class t{constructor(t){this._state=t,this.total_count=this._state.stats.pipe((0,J.U)(t=>t.count||0)),this.utilisation=this._state.stats.pipe((0,J.U)(t=>(100*(t.utilisation||0)).toFixed(1))),this.loading=this._state.loading}ngOnInit(){this._state.setOptions({type:"desks"})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["","report-desks",""]],attrs:Lt,decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],[1,"m-4","p-4","rounded","bg-white","shadow","flex","justify-center","items-center","space-x-2"],[1,"flex","flex-col","items-center","flex-1"],[1,"h-full","w-full","flex","flex-col","items-center","p-8"],[1,"mb-4",3,"diameter"],["simple",""]],template:function(t,e){if(1&t&&(l.YNc(0,Jt,3,4,"ng-container",0),l.ALo(1,"async"),l.YNc(2,jt,4,1,"ng-template",null,1,l.W1O),l.YNc(4,Yt,3,0,"ng-template",null,2,l.W1O)),2&t){const t=l.MAs(3);l.Q6J("ngIf",!l.lcZ(1,2,e.loading))("ngIfElse",t)}},directives:[o.O5,Ut,kt,P.$g],pipes:[o.Ov],styles:["h3[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]:not([simple]){font-size:1.75rem}"]}),t})();var zt=n(5510);let Qt=(()=>{class t{constructor(t){this._reports=t,this.catering_orders=this._reports.bookings.pipe((0,J.U)(t=>{const e=(0,p.xH)(t.filter(t=>{var e,n;return null===(n=null===(e=t.extension_data)||void 0===e?void 0:e.catering)||void 0===n?void 0:n.length}).map(t=>{var e;return null===(e=t.extension_data)||void 0===e?void 0:e.catering.map(e=>new zt.GX(Object.assign(Object.assign({},e),{deliver_at:t.date,event:t})))}));return console.log("Orders:",e),e.filter(t=>t).sort((t,e)=>{var n,o;return(null===(n=t.event)||void 0===n?void 0:n.date)-(null===(o=e.event)||void 0===o?void 0:o.date)})}),(0,j.d)(1)),this.catering_items=this.catering_orders.pipe((0,J.U)(t=>{var e;const n=[];for(const o of t)for(const t of(null==o?void 0:o.items)||[]){const o=n.findIndex(e=>t.options_string===e.options_string);o>=0?t[o]=new zt.Ud(Object.assign(Object.assign({},t),{quantity:(null==t?void 0:t.quantity)+(null===(e=t[o])||void 0===e?void 0:e.quantity)})):n.push(t)}return n.sort((t,e)=>e.quantity-t.quantity)})),this.stats=(0,M.aj)([this.catering_orders,this.catering_items]).pipe((0,J.U)(([t,e])=>{const n=t.reduce((t,e)=>t+e.total_cost,0);return{order_count:t.length,unique_items:e.length,item_count:t.reduce((t,e)=>t+e.item_count,0),total_cost:n,avg_cost:n/t.length}}))}downloadOrders(){return(0,u.mG)(this,void 0,void 0,function*(){const t=yield this.catering_orders.pipe((0,it.q)(1)).toPromise(),e=(0,p.o3)(t);return(0,p.Sv)("catering-orders.csv",e)})}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(I))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Nt=(()=>{class t{constructor(t){this._report=t,this.stats=this._report.stats}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(Qt))},t.\u0275cmp=l.Xpm({type:t,selectors:[["catering-report-overall"]],decls:32,vars:19,consts:[[1,"bg-white","shadow","rounded","m-2","px-8","w-48","h-24","flex","flex-col","items-center","justify-center"],[1,"text-3xl"],[1,""]],template:function(t,e){if(1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l._uU(2),l.ALo(3,"async"),l.qZA(),l.TgZ(4,"div",2),l._uU(5,"Orders"),l.qZA(),l.qZA(),l.TgZ(6,"div",0),l.TgZ(7,"div",1),l._uU(8),l.ALo(9,"async"),l.qZA(),l.TgZ(10,"div",2),l._uU(11,"Unique Items"),l.qZA(),l.qZA(),l.TgZ(12,"div",0),l.TgZ(13,"div",1),l._uU(14),l.ALo(15,"async"),l.qZA(),l.TgZ(16,"div",2),l._uU(17,"Ordered Items"),l.qZA(),l.qZA(),l.TgZ(18,"div",0),l.TgZ(19,"div",1),l._uU(20),l.ALo(21,"currency"),l.ALo(22,"async"),l.qZA(),l.TgZ(23,"div",2),l._uU(24,"Total"),l.qZA(),l.qZA(),l.TgZ(25,"div",0),l.TgZ(26,"div",1),l._uU(27),l.ALo(28,"currency"),l.ALo(29,"async"),l.qZA(),l.TgZ(30,"div",2),l._uU(31,"Order Average"),l.qZA(),l.qZA()),2&t){let t,n,o,s,i;l.xp6(2),l.hij(" ",(null==(t=l.lcZ(3,5,e.stats))?null:t.order_count)||"0"," "),l.xp6(6),l.hij(" ",(null==(n=l.lcZ(9,7,e.stats))?null:n.unique_items)||"0"," "),l.xp6(6),l.Oqu((null==(o=l.lcZ(15,9,e.stats))?null:o.item_count)||"0"),l.xp6(6),l.hij(" ",l.lcZ(21,11,(null==(s=l.lcZ(22,13,e.stats))?null:s.total_cost)/100||0)," "),l.xp6(7),l.hij(" ",l.lcZ(28,15,(null==(i=l.lcZ(29,17,e.stats))?null:i.avg_cost)/100||0)," ")}},pipes:[o.Ov,o.H9],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:.5rem}"]}),t})();var Ct=n(6828);function St(t,e){if(1&t&&(l._uU(0),l.ALo(1,"date"),l.ALo(2,"date")),2&t){const t=e.data;l.AsE(" ",l.lcZ(1,2,t)," at ",l.xi3(2,4,t,"shortTime")," ")}}function Pt(t,e){1&t&&(l._uU(0),l.ALo(1,"currency")),2&t&&l.hij(" ",l.lcZ(1,1,e.data/100)," ")}const Et=function(){return["deliver_at","item_count","total_cost"]},Rt=function(){return["Date","Items","Total Cost"]},Wt=function(){return["flex"]},Ft=function(t,e){return{deliver_at:t,total_cost:e}};let Xt=(()=>{class t{constructor(t){this._report=t,this.orders=this._report.catering_orders,this.download=()=>this._report.downloadOrders()}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(Qt))},t.\u0275cmp=l.Xpm({type:t,selectors:[["catering-report-orders"]],decls:12,vars:12,consts:[[1,"w-[64rem]","max-w-[calc(100%-2rem)]","rounded","overflow-hidden","bg-white","shadow","mx-auto","my-2"],[1,"border-b","border-gray-200","flex","items-center","justify-between","px-4"],[1,"py-2","text-xl","font-medium"],["mat-button-icon","","matTooltip","Download list",3,"click"],["empty","No orders for selected period",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template","pagination"],["date_state",""],["cost_state",""]],template:function(t,e){if(1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h2",2),l._uU(3,"Orders"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){return e.download()}),l.TgZ(5,"app-icon"),l._uU(6,"download"),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"custom-table",4),l.YNc(8,St,3,7,"ng-template",null,5,l.W1O),l.YNc(10,Pt,2,3,"ng-template",null,6,l.W1O),l.qZA()),2&t){const t=l.MAs(9),n=l.MAs(11);l.xp6(7),l.Q6J("dataSource",e.orders)("columns",l.DdM(6,Et))("display_column",l.DdM(7,Rt))("column_size",l.DdM(8,Wt))("template",l.WLB(9,Ft,t,n))("pagination",!0)}},directives:[Ct.gM,X.o,at.C],pipes:[o.uU,o.H9],styles:[""]}),t})();function Bt(t,e){if(1&t&&(l.TgZ(0,"span",7),l._uU(1),l.qZA()),2&t){const t=l.oxw().data,e=l.oxw();l.Q6J("matTooltip",e.options(t)),l.xp6(1),l.hij(" ",t.length," option(s) ")}}function Gt(t,e){1&t&&l.YNc(0,Bt,2,2,"span",6),2&t&&l.Q6J("ngIf",e.data.length)}function Vt(t,e){1&t&&(l._uU(0),l.ALo(1,"currency")),2&t&&l.hij(" ",l.lcZ(1,1,(e.data||0)/100)," ")}const $t=function(){return["name","options","quantity","unit_price","total_cost"]},Ht=function(){return["Name","Options","Quantity","Unit Price","Total Cost"]},Kt=function(){return["flex"]},te=function(t,e,n){return{options:t,unit_price:e,total_cost:n}};let ee=(()=>{class t{constructor(t){this._report=t,this.items=this._report.catering_items}options(t){return t.map(t=>t.name).join("\n")}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(Qt))},t.\u0275cmp=l.Xpm({type:t,selectors:[["catering-report-items"]],decls:9,vars:13,consts:[[1,"w-[64rem]","max-w-[calc(100%-2rem)]","rounded","overflow-hidden","bg-white","shadow","mx-auto","my-2"],[1,"border-b","border-gray-200","flex","items-center","justify-between","px-4"],[1,"py-2","text-xl","font-medium"],["empty","No orders for selected period",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template","pagination"],["option_state",""],["cost_state",""],["class","text-xs px-2 py-1 rounded bg-gray-300",3,"matTooltip",4,"ngIf"],[1,"text-xs","px-2","py-1","rounded","bg-gray-300",3,"matTooltip"]],template:function(t,e){if(1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h2",2),l._uU(3,"Ordered Items"),l.qZA(),l.qZA(),l._UZ(4,"custom-table",3),l.YNc(5,Gt,1,1,"ng-template",null,4,l.W1O),l.YNc(7,Vt,2,3,"ng-template",null,5,l.W1O),l.qZA()),2&t){const t=l.MAs(6),n=l.MAs(8);l.xp6(4),l.Q6J("dataSource",e.items)("columns",l.DdM(6,$t))("display_column",l.DdM(7,Ht))("column_size",l.DdM(8,Kt))("template",l.kEZ(9,te,t,n,n))("pagination",!0)}},directives:[at.C,o.O5,Ct.gM],pipes:[o.H9],styles:[""]}),t})();function ne(t,e){1&t&&(l.TgZ(0,"div",4),l._UZ(1,"catering-report-overall"),l._UZ(2,"catering-report-orders"),l._UZ(3,"catering-report-items"),l.qZA())}function oe(t,e){if(1&t&&(l.ynx(0),l.YNc(1,ne,4,0,"div",3),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(),e=l.MAs(5);l.xp6(1),l.Q6J("ngIf",l.lcZ(2,2,t.total_count))("ngIfElse",e)}}function se(t,e){1&t&&(l.TgZ(0,"div",5),l._UZ(1,"mat-spinner",6),l.TgZ(2,"p",7),l._uU(3,"Loading report data..."),l.qZA(),l.qZA()),2&t&&(l.xp6(1),l.Q6J("diameter",32))}function ie(t,e){1&t&&(l.TgZ(0,"div",5),l.TgZ(1,"p",7),l._uU(2," Select levels and time period to generate a report. "),l.qZA(),l.qZA())}const ae=[{path:"",component:tt,children:[{path:""},{path:"spaces",component:yt},{path:"desks",component:It},{path:"catering",component:(()=>{class t{constructor(t){this._state=t,this.total_count=this._state.stats.pipe((0,J.U)(t=>t.count||0)),this.loading=this._state.loading}ngOnInit(){this._state.setOptions({type:"events"})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(I))},t.\u0275cmp=l.Xpm({type:t,selectors:[["catering-report"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],["class","h-full w-full",4,"ngIf","ngIfElse"],[1,"h-full","w-full"],[1,"h-full","w-full","flex","flex-col","items-center","p-8"],[1,"mb-4",3,"diameter"],["simple",""]],template:function(t,e){if(1&t&&(l.YNc(0,oe,3,4,"ng-container",0),l.ALo(1,"async"),l.YNc(2,se,4,1,"ng-template",null,1,l.W1O),l.YNc(4,ie,3,0,"ng-template",null,2,l.W1O)),2&t){const t=l.MAs(3);l.Q6J("ngIf",!l.lcZ(1,2,e.loading))("ngIfElse",t)}},directives:[o.O5,Nt,Xt,ee,P.$g],pipes:[o.Ov],styles:[""]}),t})()},{path:"**",redirectTo:"desks"}]}];let re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,s.u5,a.v,et.YR,nt.PP,r.TU,i.Bz.forChild(ae)]]}),t})()}}]);
//# sourceMappingURL=apps_concierge_src_app_reports_reports_module_ts.js.map