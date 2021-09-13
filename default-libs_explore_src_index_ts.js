(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-libs_explore_src_index_ts"],{3775:(t,s,e)=>{"use strict";e.d(s,{Xp:()=>F,ck:()=>g.c,P2:()=>J});var i=e(1511),n=e(6073),o=e(2347),a=e(7521),l=e(2522),r=e(6899),c=e(9604),d=e(4762),u=e(8223),h=e(3530),p=e(2619),_=e(1496),g=e(8284);e(6898),e(6283),e(4786),e(1522);var b=e(6817),f=(e(611),e(4587),e(9996));e(4266),e(9633),e(4608),e(8239),e(9720),e(5980),e(1548),e(6756),e(9980),e(7806);const m={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","not-bookable":"#757575",unknown:"#757575"};e(1314);var v=e(8512),x=e(3080),k=e(4689),y=e(7727),Z=e(4914),w=e(205),O=e(8125),U=e(6839),T=e(5087),A=e(3779);const q=["dot"],P=["explore-device-info",""];function I(t,s){if(1&t&&(p.TgZ(0,"p",12),p.TgZ(1,"label"),p._uU(2,"Manufacturer:"),p.qZA(),p._uU(3),p.qZA()),2&t){const t=p.oxw(2);p.xp6(3),p.hij(" ",t.manufacturer," ")}}function j(t,s){if(1&t&&(p.TgZ(0,"p",13),p.TgZ(1,"label"),p._uU(2,"OS:"),p.qZA(),p._uU(3),p.qZA()),2&t){const t=p.oxw(2);p.xp6(3),p.hij(" ",t.os,"")}}function C(t,s){if(1&t&&(p.TgZ(0,"p",14),p.TgZ(1,"label"),p._uU(2,"SSID:"),p.qZA(),p._uU(3),p.qZA()),2&t){const t=p.oxw(2);p.xp6(3),p.hij(" ",t.ssid,"")}}function z(t,s){if(1&t&&(p.TgZ(0,"p",15),p.TgZ(1,"label"),p._uU(2,"Username:"),p.qZA(),p._uU(3),p.qZA()),2&t){const t=p.oxw(2);p.xp6(3),p.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function M(t,s){if(1&t&&(p.TgZ(0,"p",16),p.TgZ(1,"label"),p._uU(2,"Type:"),p.qZA(),p._uU(3),p.qZA()),2&t){const t=p.oxw(2);p.xp6(3),p.hij(" ",t.user.type," ")}}function X(t,s){if(1&t){const t=p.EpF();p.TgZ(0,"div",4),p.NdJ("mouseleave",function(){return p.CHM(t),p.oxw().close()}),p._UZ(1,"div",5),p.TgZ(2,"div",6),p.TgZ(3,"p"),p.TgZ(4,"label"),p._uU(5,"MAC:"),p.qZA(),p._uU(6),p.qZA(),p.TgZ(7,"p"),p.TgZ(8,"label"),p._uU(9,"Accuracy:"),p.qZA(),p._uU(10),p.qZA(),p.TgZ(11,"p"),p.TgZ(12,"label"),p._uU(13,"Last Seen:"),p.qZA(),p._uU(14),p.qZA(),p.YNc(15,I,4,1,"p",7),p.YNc(16,j,4,1,"p",8),p.YNc(17,C,4,1,"p",9),p.YNc(18,z,4,1,"p",10),p.YNc(19,M,4,1,"p",11),p.qZA(),p.qZA()}if(2&t){const t=p.oxw();p.xp6(6),p.hij(" ",t.mac,""),p.xp6(4),p.hij(" ",t.variance,"m"),p.xp6(4),p.hij(" ",t.last_seen,""),p.xp6(1),p.Q6J("ngIf",t.manufacturer),p.xp6(1),p.Q6J("ngIf",t.os),p.xp6(1),p.Q6J("ngIf",t.ssid),p.xp6(1),p.Q6J("ngIf",t.username),p.xp6(1),p.Q6J("ngIf",t.user)}}let L=(()=>{class t{constructor(t,s,e){var i;this._details=t,this._element=s,this._overlay=e,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=null===(i=this._details.variance)||void 0===i?void 0:i.toFixed(2),this.diameter=100*this._details.variance,this.bg_color=this._details.bg_color||this.distance_color,this.overlay_ref=null,this.onEnter=()=>this.loadUser(),this.onLeave=()=>this.close(),this.onClick=()=>this.loadUser(),this.onTouch=()=>this.loadUser()}get last_seen(){return(0,T.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get distance(){return Math.abs((0,A.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{var s;const e=null===(s=this._element.nativeElement.parentElement)||void 0===s?void 0:s.parentElement;if(!e)return this.ngOnInit(++t);const i=parseInt(e.style.top,10)/100,n=parseInt(e.style.left,10)/100;this.y_pos=i>=.5?"bottom":"top",this.x_pos=n>=.5?"end":"start"},200)}loadUser(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.open(),this.username)return;const t=(0,b.rTZ)(this._details.system,"LocationServices");if(t){this.username="Loading...";const s=yield t.execute("check_ownership_of",[this.mac]).catch(t=>null);this.username=s&&s.assigned_to?s.assigned_to:""}})}open(){this.overlay_ref&&this.close(),this._portal&&(this.overlay_ref=this._overlay.create({positionStrategy:this._overlay.position().flexibleConnectedTo(this._dot).withPositions([{originX:"start"===this.x_pos?"end":"start",originY:"top"===this.y_pos?"bottom":"top",overlayX:this.x_pos||"end",overlayY:this.y_pos||"bottom"}])}),this.overlay_ref.attach(this._portal))}close(){this.overlay_ref&&(this.overlay_ref.dispose(),this.overlay_ref=null)}}return t.\u0275fac=function(s){return new(s||t)(p.Y36(o.ui),p.Y36(p.SBq),p.Y36(l.aV))},t.\u0275cmp=p.Xpm({type:t,selectors:[["","explore-device-info",""]],viewQuery:function(t,s){if(1&t&&(p.Gf(r.ig,5),p.Gf(q,5)),2&t){let t;p.iGM(t=p.CRH())&&(s._portal=t.first),p.iGM(t=p.CRH())&&(s._dot=t.first)}},hostBindings:function(t,s){1&t&&p.NdJ("mouseenter",function(){return s.onEnter()})("mouseleave",function(){return s.onLeave()})("click",function(){return s.onClick()})("touchend",function(){return s.onTouch()})},attrs:P,decls:4,vars:4,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-4","border-dashed","border-blue-600","rounded-full",3,"mouseenter"],["name","dot",1,"h-2","w-2","absolute","center","rounded-full","pointer-events-auto","shadow"],["dot",""],["cdk-portal",""],["name","device-info",1,"w-64","rounded","bg-white","p-4","top-0","left-0","shadow","pointer-events-none",3,"mouseleave"],[1,"arrow"],[1,"details"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,s){1&t&&(p.TgZ(0,"div",0),p.NdJ("mouseenter",function(){return s.loadUser()}),p.qZA(),p._UZ(1,"div",1,2),p.YNc(3,X,20,8,"ng-template",3)),2&t&&(p.Akn("height: "+s.diameter+"%; width: "+s.diameter+"%;"),p.xp6(1),p.Udp("background-color",s.bg_color))},directives:[r.bH,i.O5],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}"]}),t})();function Y(t,s){if(1&t&&(p.TgZ(0,"p",6),p._uU(1),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.Oqu(t.user)}}function G(t,s){if(1&t&&(p.TgZ(0,"p",7),p._uU(1),p.ALo(2,"date"),p.ALo(3,"date"),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.AsE(" ",p.xi3(2,2,t.start,"shortTime")," \u2013 ",p.xi3(3,5,t.end,"shortTime")," ")}}let S=(()=>{class t{constructor(t,s){this._details=t,this._element=s,this.map_id=this._details.map_id,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{var s;const e=null===(s=this._element.nativeElement.parentElement)||void 0===s?void 0:s.parentElement;if(!e)return this.ngOnInit(++t);const i=parseInt(e.style.top,10)/100,n=parseInt(e.style.left,10)/100;this.y_pos=i>=.5?"bottom":"top",this.x_pos=n>=.5?"right":"left"},200)}get available_until(){return""}}return t.\u0275fac=function(s){return new(s||t)(p.Y36(o.ui),p.Y36(p.SBq))},t.\u0275cmp=p.Xpm({type:t,selectors:[["explore-desk-info"]],decls:7,vars:6,consts:[["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,s){1&t&&(p.TgZ(0,"div",0),p._UZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"h4",3),p._uU(4),p.qZA(),p.YNc(5,Y,2,1,"p",4),p.YNc(6,G,4,8,"p",5),p.qZA(),p.qZA()),2&t&&(p.Tol("absolute rounded bg-white p-4 top-0 left-0 shadow "+s.x_pos+" "+s.y_pos),p.Q6J("id",s.map_id),p.xp6(4),p.Oqu(s.map_id),p.xp6(1),p.Q6J("ngIf",s.user),p.xp6(1),p.Q6J("ngIf",s.start))},directives:[i.O5],pipes:[i.uU],styles:["[_nghost-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:1}[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}"]}),t})(),F=(()=>{class t extends u.KG{constructor(t,s,e,i){super(),this._state=t,this._org=s,this._settings=e,this._bookings=i,this._in_use=new v.X([]),this._options=new v.X({}),this._desks=new v.X([]),this._reserved=new v.X([]),this._statuses={},this._users={},this._poll=new v.X(0),this._desk_bookings=(0,x.aj)([this._state.level,this._poll]).pipe((0,k.w)(([t])=>(0,U.F2)({period_start:(0,Z.Z)((0,w.Z)(new Date)),period_end:(0,Z.Z)((0,O.Z)(new Date)),type:"desk",zones:t.id}))),this.desk_list=this._state.level.pipe((0,k.w)(t=>(0,b.rlq)(t.id,{name:"desks"}).pipe((0,f.U)(s=>(s.details instanceof Array?s.details:[]).map(s=>new _.nk(Object.assign(Object.assign({},s),{zone:t})))))),(0,y.K)(t=>[])),this._bind=this._state.level.pipe((0,f.U)(t=>{var s,e;if(this._statuses={},this.unsubWith("lvl"),!t)return;const i=this._org.buildings.find(s=>s.id===t.parent_id);if(!i)return;const n=(null===(s=i.bindings)||void 0===s?void 0:s.area_management)||(null===(e=this._org.organisation.bindings)||void 0===e?void 0:e.area_management);if(!n)return;let o=(0,b.rTZ)(n,"AreaManagement").binding(t.id);this.subscription("lvl-in_use",o.listen().subscribe(t=>this.processBindingChange(t||{},n))),this.subscription("lvl-in_use_bind",o.bind()),o=(0,b.rTZ)(n,"AreaManagement").binding(`${t.id}:desk_ids`),this.subscription("lvl-desks_list",o.listen().subscribe(t=>this._desks.next(t||[]))),this.subscription("lvl-desk_list_bind",o.bind())})),this._state_change=(0,x.aj)([this.desk_list,this._in_use,this._reserved,this._options]).pipe((0,f.U)(([t,s,e])=>{this._statuses={};for(const{id:i,bookable:n}of t){const t=s.some(t=>i===t),o=e.some(t=>i===t);this._statuses[i]=n?t?o?"reserved":"busy":"free":"not-bookable"}this.processDesks(t)})),this.init()}init(){return(0,d.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,h.P)(t=>t)).toPromise(),this.setOptions({enable_booking:!1!==this._settings.get("app.desks.enabled")}),this.subscription("bind",this._bind.subscribe()),this.subscription("changes",this._state_change.subscribe()),this.subscription("desks",this.desk_list.subscribe(t=>this.processDesks(t)))})}startPolling(t=3e4){this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(t=>this._in_use.next(t.map(t=>t.asset_id)))),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t)}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}processBindingChange({value:t},s){const e=(t||[]).filter(t=>!["desk","booking"].includes(t.location)),i=(t||[]).filter(t=>"desk"===t.location||"booking"===t.location&&"desk"===t.type);this._in_use.next(i.map(t=>t.map_id||t.asset_id)),this._reserved.next(i.filter(t=>!t.at_location).map(t=>t.map_id||t.asset_id)),this.processDevices(e,s),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},s=this._settings.get("app.explore.colors")||{};for(const e in this._statuses)this._statuses[e]&&(t[`#${e}`]={fill:s[`desk-${this._statuses[e]}`]||s[`${this._statuses[e]}`]||m[`${this._statuses[e]}`],opacity:.6});this._state.setStyles("desks",t)}processDevices(t,s){var e,i;const n=[];for(const o of t){const t=o.x/o.map_width,a=o.y/o.map_height;n.push({location:{x:(null===(e=o.coordinates_from)||void 0===e?void 0:e.includes("right"))?1-t:t,y:(null===(i=o.coordinates_from)||void 0===i?void 0:i.includes("bottom"))?1-a:a},content:L,data:Object.assign(Object.assign({},o),{system:s})})}this._state.setFeatures("devices",n)}processDesks(t){const s=[],e=[],i=this._options.getValue();for(const n of t){s.push({location:n.id,content:S,hover:!0,data:{map_id:n.name,user:this._users[n.map_id]||n.staff_name,status:this._statuses[n.map_id]},z_index:20});const t=()=>(0,d.mG)(this,void 0,void 0,function*(){var t,s;this._bookings.newForm(),this._bookings.form.patchValue({asset_id:n.id,user:i.host||(0,u.ar)(),booking_type:"desk",zones:n.zone?[null===(t=n.zone)||void 0===t?void 0:t.parent_id,null===(s=n.zone)||void 0===s?void 0:s.id]:[]}),yield this._bookings.confirmPost(),(0,u.t5)(`Successfull booked desk ${n.name||n.id}`)});e.push({id:n.id,action:"click",callback:t}),e.push({id:n.id,action:"touchend",callback:t})}this._state.setActions("desks",this._options.getValue().enable_booking?e:[]),this._state.setFeatures("desks",s),this.timeout("update",()=>this.updateStatus(),100)}}return t.\u0275fac=function(s){return new(s||t)(p.LFG(g.c),p.LFG(_.w7),p.LFG(u.gb),p.LFG(U.fy))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac}),t})();e(7209),e(7256),e(2571),e(878),e(7701),e(4019),e(8303),e(5205),e(84);let J=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[i.ez,o.Kk,n.u5,n.UX,a.rP,l.U8,r.eL,c.W9]]}),t})()},8284:(t,s,e)=>{"use strict";e.d(s,{c:()=>_});var i=e(4762),n=e(8512),o=e(3080),a=e(9996),l=e(7701),r=e(3530),c=e(3835),d=e(8223),u=e(2619),h=e(1496),p=e(7209);let _=(()=>{class t extends d.KG{constructor(t,s,e){super(),this._org=t,this._spaces=s,this._settings=e,this._level=new n.X(null),this._positions=new n.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new n.X({}),this._features=new n.X({}),this._actions=new n.X({}),this._labels=new n.X({}),this._options=new n.X({disable:["zones","devices"]}),this._message=new n.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=(0,o.aj)([this._level,this._spaces.list]).pipe((0,a.U)(([t,s])=>s.filter(s=>s.zones.includes(null==t?void 0:t.id)))),this.map_url=this._level.pipe((0,a.U)(t=>(t?t.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,o.aj)([this._features,this._options]).pipe((0,l.b)(200),(0,a.U)(([t,s])=>{var e,i;let n=[];for(const o in t)(null===(e=s.disable)||void 0===e?void 0:e.includes(o))||(null===(i=s.disable_features)||void 0===i?void 0:i.includes(o))||(n=n.concat(t[o]));return n})),this.map_actions=(0,o.aj)([this._actions,this._options]).pipe((0,l.b)(200),(0,a.U)(([t,s])=>{var e,i;let n=[];for(const o in t)(null===(e=s.disable)||void 0===e?void 0:e.includes(o))||(null===(i=s.disable_actions)||void 0===i?void 0:i.includes(o))||(n=n.concat(t[o]));return n})),this.map_labels=(0,o.aj)([this._labels,this._options]).pipe((0,l.b)(200),(0,a.U)(([t,s])=>{var e,i;let n=[];for(const o in t)(null===(e=s.disable)||void 0===e?void 0:e.includes(o))||(null===(i=s.disable_labels)||void 0===i?void 0:i.includes(o))||(n=n.concat(t[o]));return n})),this.map_styles=(0,o.aj)([this._styles,this._options]).pipe((0,l.b)(200),(0,a.U)(([t,s])=>{var e,i,n;let o={text:{display:"none"}};for(const a in t)(null===(e=s.disable)||void 0===e?void 0:e.includes(a))||(null===(i=s.disable_styles)||void 0===i?void 0:i.includes(a))||(o=Object.assign(Object.assign({},o),t[a]));return(null===(n=s.disable)||void 0===n?void 0:n.includes("zones"))&&(o["#zones"]={display:"none"},o["#Zones"]={display:"none"}),o})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){return(0,i.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,r.P)(t=>t)).toPromise(),this._org.active_building.pipe((0,c.h)(t=>!!t)).subscribe(t=>{const s=this._level.getValue(),e=this._org.levelsForBuilding(t);!e.find(t=>(null==s?void 0:s.id)===t.id)&&e.length&&this.setLevel(e[0].id),this._settings.get("app.explore.disable_actions")&&this.setOptions({disable_actions:this._settings.get("app.explore.disable_actions")}),this._settings.get("app.explore.disable_labels")&&this.setOptions({disable_labels:this._settings.get("app.explore.disable_labels")}),this._settings.get("app.explore.disable_features")&&this.setOptions({disable_features:this._settings.get("app.explore.disable_features")}),this._settings.get("app.explore.disable_styles")&&this.setOptions({disable_styles:this._settings.get("app.explore.disable_styles")})})})}setOptions(t){const s=this._options.getValue(),e=(0,d.Tw)([...t.disable||s.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next(Object.assign(Object.assign(Object.assign({},this._options.getValue()),t),{disable:e}))}setLevel(t){const s=this._org.levelWithID([t]);s&&this._level.next(s)}setStyles(t,s){const e=this._styles.getValue();e[t]=s,this._styles.next(e)}setFeatures(t,s){const e=this._features.getValue();e[t]=s,this._features.next(e)}setActions(t,s){const e=this._actions.getValue();e[t]=s,this._actions.next(e)}setLabels(t,s){const e=this._labels.getValue();e[t]=s,this._labels.next(e)}setPositions(t,s){this._positions.next({zoom:t,center:s})}}return t.\u0275fac=function(s){return new(s||t)(u.LFG(h.w7),u.LFG(p.sK),u.LFG(d.gb))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2571:(t,s,e)=>{"use strict";e.d(s,{s:()=>l});var i=e(2619),n=e(8284),o=e(5980),a=e(1548);let l=(()=>{class t{constructor(t){this._state=t,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return t.\u0275fac=function(s){return new(s||t)(i.Y36(n.c))},t.\u0275cmp=i.Xpm({type:t,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white",3,"click"],["z-out","","mat-icon-button","",1,"bg-white",3,"click"],["reset","","mat-icon-button","",1,"bg-white",3,"click"]],template:function(t,s){1&t&&(i.TgZ(0,"button",0),i.NdJ("click",function(){return s.zoomIn()}),i.TgZ(1,"app-icon"),i._uU(2,"add"),i.qZA(),i.qZA(),i.TgZ(3,"button",1),i.NdJ("click",function(){return s.zoomOut()}),i.TgZ(4,"app-icon"),i._uU(5,"remove"),i.qZA(),i.qZA(),i.TgZ(6,"button",2),i.NdJ("click",function(){return s.reset()}),i.TgZ(7,"app-icon"),i._uU(8,"autorenew"),i.qZA(),i.qZA())},directives:[o.lW,a.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}"]}),t})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map