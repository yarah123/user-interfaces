"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{7797:(At,x,i)=>{i.r(x),i.d(x,{AppParkingModule:()=>xt});var p=i(6362),c=i(587),_=i(833),Z=i(2379),m=i(9481),q=i(3362),E=i(2656),u=i(4929),k=i(4099),g=i(3294),A=i(3619),T=i(3499),M=i(1810),G=i(9377),Q=i(3200),S=i(5148),b=i(4505),U=i(7716),N=i(6942),R=i(9151),O=i(9095),L=i(8759),I=i(9128),W=i(823),j=i(5670),z=i(3910),t=i(3184),f=i(5758),C=i(7317),y=i(5306),P=i(4770),V=i(4683),X=i(9697),$=i(4742);function K(n,r){1&n&&(t.TgZ(0,"button",6),t.TgZ(1,"app-icon"),t._uU(2,"close"),t.qZA(),t.qZA())}function H(n,r){if(1&n&&(t.TgZ(0,"main",7),t.TgZ(1,"label",8),t._uU(2,"Parking Space Name/Bay Number"),t.qZA(),t.TgZ(3,"mat-form-field",9),t._UZ(4,"input",10),t.TgZ(5,"mat-error"),t._uU(6,"A name is required for parking spaces"),t.qZA(),t.qZA(),t.TgZ(7,"label",11),t._uU(8,"Map ID"),t.qZA(),t.TgZ(9,"mat-form-field",9),t._UZ(10,"input",12),t.TgZ(11,"mat-error"),t._uU(12," A map ID is required for parking spaces "),t.qZA(),t.qZA(),t.TgZ(13,"label",13),t._uU(14,"Assigned User"),t.qZA(),t._UZ(15,"a-user-search-field",14),t.TgZ(16,"label",15),t._uU(17,"Notes"),t.qZA(),t.TgZ(18,"mat-form-field",9),t._UZ(19,"textarea",16),t.qZA(),t.TgZ(20,"label",17),t._uU(21,"Map Rotation"),t.qZA(),t.TgZ(22,"mat-form-field",9),t._UZ(23,"textarea",18),t.qZA(),t.TgZ(24,"div",19),t.TgZ(25,"button",20),t._uU(26," Cancel "),t.qZA(),t.TgZ(27,"button",21),t._uU(28,"Save"),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.Q6J("formGroup",e.form)}}function tt(n,r){1&n&&(t.TgZ(0,"main",22),t._UZ(1,"mat-spinner",23),t.TgZ(2,"p"),t._uU(3,"Saving parking space details..."),t.qZA(),t.qZA())}let w=(()=>{class n{constructor(e,o){this._data=e,this._dialog_ref=o,this.event=new t.vpe,this.form=new c.cw({id:new c.NI(""),name:new c.NI("",[c.kI.required]),map_id:new c.NI("",[c.kI.required]),assigned_user:new c.NI(null),assigned_to:new c.NI(""),assigned_name:new c.NI(""),notes:new c.NI(""),map_rotation:new c.NI(0)}),e&&this.form.patchValue(e)}get id(){var e;return(null===(e=this._data)||void 0===e?void 0:e.id)||""}postForm(){!this.form.valid||(this.loading=!0,this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:this.form.value}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.WI),t.Y36(f.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[[1,"w-[28rem]"],[1,"flex","items-center","justify-between","bg-secondary","px-2","w-full"],[1,"px-2"],["mat-icon-button","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],["mat-icon-button","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],["name","user","formControlName","assigned_user"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["mat-button","","mat-dialog-close","",1,"w-32","inverse"],["mat-button","",1,"w-32"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"header",1),t.TgZ(2,"h2",2),t._uU(3),t.qZA(),t.YNc(4,K,3,0,"button",3),t.qZA(),t.YNc(5,H,29,1,"main",4),t.qZA(),t.YNc(6,tt,4,0,"ng-template",null,5,t.W1O)),2&e){const s=t.MAs(7);t.xp6(3),t.hij("",o.id?"Edit":"New"," Parking Space"),t.xp6(1),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",!o.loading)("ngIfElse",s)}},directives:[p.O5,C.lW,f.ZT,y.o,c.JL,c.sg,P.KE,V.Nt,c.Fj,c.JJ,c.u,P.TO,X.d,$.$g],styles:[""]}),n})(),h=(()=>{class n extends g.KG{constructor(e,o){super(),this._org=e,this._dialog=o,this._poll=new b.X(0),this._options=new b.X({date:Date.now(),search:"",zones:[]}),this._loading=new b.X([]),this.levels=this._org.active_levels.pipe((0,N.U)(s=>s.filter(a=>a.tags.includes("parking")))),this.spaces=(0,U.aj)([this.levels,this._options]).pipe((0,R.h)(([s,a])=>{var l;return!(!a.zones[0]&&!(null===(l=s[0])||void 0===l?void 0:l.id))}),(0,O.w)(([s,a])=>{var l;return this._loading.next([...this._loading.getValue(),"spaces"]),(0,T.rlq)(a.zones[0]||(null===(l=s[0])||void 0===l?void 0:l.id),"parking-spaces")}),(0,N.U)(s=>s.details instanceof Array?s.details:[]),(0,L.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"spaces"!==s))),(0,I.d)(1)),this.bookings=(0,U.aj)([this._org.active_building,this._options,this._poll]).pipe((0,W.b)(500),(0,O.w)(([s,a])=>{var l;return this._loading.next([...this._loading.getValue(),"bookings"]),(0,k.F2)({period_start:(0,M.Z)((0,G.Z)(a.date)),period_end:(0,M.Z)((0,Q.Z)(a.date)),type:"parking",zones:(null===(l=a.zones)||void 0===l?void 0:l.length)?a.zones.join(","):null==s?void 0:s.id})}),(0,L.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"bookings"!==s))),(0,I.d)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(e){this._options.next(Object.assign(Object.assign({},this._options.getValue()),e))}startPolling(e=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),e),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(e){return(0,u.mG)(this,void 0,void 0,function*(){const o=this._dialog.open(w,{data:e}),s=yield Promise.race([o.afterClosed().toPromise(),o.componentInstance.event.pipe((0,j.P)(d=>"done"===d.reason))]);if("done"!==(null==s?void 0:s.reason))return;const a=this._options.getValue().zones[0],l=Object.assign(Object.assign({},s.metadata),{id:s.metadata.id||`parking-${a}.${(0,g.Iy)(999999)}`}),v=yield this.spaces.pipe((0,z.q)(1)).toPromise();yield(0,T.Ymr)(a,{name:"parking-spaces",details:[...v.filter(d=>d.id!==l.id),l],description:"List of available parking spaces"}).toPromise(),o.close()})}removeSpace(e){return(0,u.mG)(this,void 0,void 0,function*(){const o=yield(0,g._5)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${e.name}"?`,icon:{content:"delete"}},this._dialog);if("done"!==(null==o?void 0:o.reason))return;o.loading(!0);const s=this._options.getValue().zones[0],a=yield this.spaces.pipe((0,z.q)(1)).toPromise();yield(0,T.Ymr)(s,{name:"parking-spaces",details:a.filter(l=>l.id!==e.id),description:"List of available parking spaces"}).toPromise(),o.close()})}approveBooking(e){return(0,u.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,k.jT)(e.id).toPromise().catch(s=>"failed"))?(0,g.cB)("Error approving in desk booking"):(0,g.t5)(`Approved parking reservation for ${e.user_name} on ${(0,S.Z)(e.date,"MMM Do")}.`)})}rejectBooking(e){return(0,u.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,k.FP)(e.id).toPromise().catch(s=>"failed"))?(0,g.cB)("Error rejecting in desk booking"):(0,g.t5)(`Rejected parking reservation for ${e.user_name} on ${(0,S.Z)(e.date,"MMM Do")}.`)})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.w7),t.LFG(f.uw))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var J=i(1110),et=i(89);function nt(n,r){if(1&n&&t._uU(0),2&n){const e=r.row;t.hij(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," ")}}function ot(n,r){if(1&n&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&n){const e=r.data;t.ekj("bg-success","approved"===e)("bg-pending","tentative"===e)("bg-error","cancelled"===e||"declined"===e),t.xp6(1),t.hij(" ",e," ")}}function st(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"button",7),t.NdJ("click",function(){const a=t.CHM(e).row;return t.oxw().reject(a)}),t.TgZ(2,"app-icon"),t._uU(3,"event_busy"),t.qZA(),t.qZA(),t.TgZ(4,"button",8),t.NdJ("click",function(){const a=t.CHM(e).row;return t.oxw().approve(a)}),t.TgZ(5,"app-icon"),t._uU(6,"event_available"),t.qZA(),t.qZA(),t.qZA()}}function it(n,r){1&n&&t._UZ(0,"mat-progress-bar",9)}const at=function(){return["asset_name","booked_by_name","user_name","plate_number","status","actions"]},rt=function(){return["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "]},lt=function(){return["6r","flex","14r","8r","6r","10r"]},ct=function(n,r,e){return{plate_number:n,actions:r,status:e}};let B=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=o=>this._state.rejectBooking(o),this.approve=o=>this._state.approveBooking(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["plate_template",""],["status_template",""],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"w-full","flex","items-center","justify-end"],["mat-icon-button","","matTooltip","Reject Parking Reservation",3,"click"],["mat-icon-button","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,nt,1,1,"ng-template",null,1,t.W1O),t.YNc(5,ot,2,7,"ng-template",null,2,t.W1O),t.YNc(7,st,7,0,"ng-template",null,3,t.W1O),t.YNc(9,it,1,0,"mat-progress-bar",4),t.ALo(10,"async")),2&e){const s=t.MAs(4),a=t.MAs(6),l=t.MAs(8);let v,d;t.ekj("opacity-50",null==(v=t.lcZ(1,9,o.loading))?null:v.includes("bookings")),t.Q6J("dataSource",o.events)("columns",t.DdM(15,at))("display_column",t.DdM(16,rt))("filter",t.lcZ(2,11,o.options).search)("column_size",t.DdM(17,lt))("template",t.kEZ(18,ct,s,l,a)),t.xp6(9),t.Q6J("ngIf",null==(d=t.lcZ(10,13,o.loading))?null:d.includes("bookings"))}},directives:[J.C,C.lW,et.gM,y.o,p.O5,_.pW],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--101.css.map*/"]}),n})();function pt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"button",4),t.NdJ("click",function(){const a=t.CHM(e).row;return t.oxw().editSpace(a)}),t.TgZ(2,"app-icon"),t._uU(3,"edit"),t.qZA(),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){const a=t.CHM(e).row;return t.oxw().removeSpace(a)}),t.TgZ(5,"app-icon"),t._uU(6,"delete"),t.qZA(),t.qZA(),t.qZA()}}function gt(n,r){1&n&&t._UZ(0,"mat-progress-bar",5)}const mt=function(){return["name","map_id","assigned_to","notes","actions"]},dt=function(){return["Bay No.","Map ID","Assigned","Notes"," "]},ut=function(){return["8r","10r","14r","flex","10r"]},ft=function(n){return{actions:n}};let Y=(()=>{class n{constructor(e){this._state=e,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=o=>this._state.editSpace(o),this.removeSpace=o=>this._state.removeSpace(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-list"]],decls:7,vars:20,consts:[[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"w-full","flex","items-center","justify-end"],["mat-icon-button","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,pt,7,0,"ng-template",null,1,t.W1O),t.YNc(5,gt,1,0,"mat-progress-bar",2),t.ALo(6,"async")),2&e){const s=t.MAs(4);let a,l;t.ekj("opacity-50",null==(a=t.lcZ(1,9,o.loading))?null:a.includes("spaces")),t.Q6J("dataSource",o.spaces)("columns",t.DdM(15,mt))("display_column",t.DdM(16,dt))("column_size",t.DdM(17,ut))("template",t.VKq(18,ft,s))("filter",t.lcZ(2,11,o.options).search),t.xp6(5),t.Q6J("ngIf",null==(l=t.lcZ(6,13,o.loading))?null:l.includes("spaces"))}},directives:[J.C,C.lW,y.o,p.O5,_.pW],pipes:[p.Ov],encapsulation:2}),n})();var ht=i(1434),vt=i(1130),_t=i(9396),Zt=i(8441);function kt(n,r){if(1&n&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let D=(()=>{class n extends g.KG{constructor(e,o,s,a){super(),this._state=e,this._org=o,this._route=s,this._router=a,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=l=>this._state.setOptions({date:l}),this.setSearch=l=>this._state.setOptions({search:l}),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setOptions({zones:l})}}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,j.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const o=e.get("zone_ids").split(",");if(o.length){const s=this._org.levelWithID(o);if(this.zones=o,!s)return;this._org.building=this._org.buildings.find(a=>a.id===s.parent_id)}}})),this.subscription("levels",this._state.levels.subscribe(e=>{this.zones=this.zones.filter(o=>e.find(s=>s.id===o)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)}))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h),t.Y36(A.w7),t.Y36(m.gz),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-topbar"]],features:[t.qOj],decls:7,vars:4,consts:[["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-form-field",0),t.TgZ(1,"mat-select",1),t.NdJ("ngModelChange",function(a){return o.updateZones([a]),o.zones=[a]}),t.YNc(2,kt,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA(),t.qZA(),t._UZ(4,"div",3),t.TgZ(5,"searchbar",4),t.NdJ("modelChange",function(a){return o.setSearch(a)}),t.qZA(),t.TgZ(6,"date-options",5),t.NdJ("dateChange",function(a){return o.setDate(a)}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngModel",o.zones[0]),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,2,o.levels)))},directives:[P.KE,ht.gD,c.JJ,c.On,p.sg,vt.ey,_t.U,Zt.E],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--102.css.map*/"]}),n})();var Tt=i(4945);function bt(n,r){1&n&&(t.TgZ(0,"div",6),t.TgZ(1,"p"),t._uU(2,"No parking floors for the currently selected building"),t.qZA(),t.qZA())}const Ct=function(){return["/parking","events"]},yt=function(){return["/parking","spaces"]};const Pt=[{path:"",component:(()=>{class n extends g.KG{constructor(e,o){super(),this._state=e,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){var e;this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(s=>{var a;if(s instanceof m.m2){const l=(null===(a=this._router.url)||void 0===a?void 0:a.split("/"))||[""];this.path=l[o.length-1].split("?")[0]}}));const o=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.path=o[o.length-1].split("?")[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-parking"]],features:[t.qOj],decls:13,vars:9,consts:[[1,"relative","overflow-hidden"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-white/80","flex","flex-col","items-center","justify-center","z-50"]],template:function(e,o){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"parking-topbar"),t.TgZ(3,"div",1),t.TgZ(4,"nav",2),t.TgZ(5,"a",3),t._uU(6," Bookings "),t.qZA(),t.TgZ(7,"a",3),t._uU(8," Manage Spaces "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t._UZ(10,"router-outlet"),t.qZA(),t.YNc(11,bt,3,0,"div",5),t.ALo(12,"async"),t.qZA()),2&e){let s;t.xp6(5),t.Q6J("routerLink",t.DdM(7,Ct))("active","events"===o.path),t.xp6(2),t.Q6J("routerLink",t.DdM(8,yt))("active","spaces"===o.path),t.xp6(4),t.Q6J("ngIf",!(null!=(s=t.lcZ(12,5,o.levels))&&s.length))}},directives:[Tt.k,D,Z.BU,m.yS,Z.Nj,m.lC,p.O5],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=parking.component.ts-angular-inline--103.css.map*/"]}),n})(),children:[{path:"events",component:B},{path:"spaces",component:Y},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let xt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,E.v,c.u5,c.UX,q.W9,Z.Nh,_.Cv,m.Bz.forChild(Pt)]]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map