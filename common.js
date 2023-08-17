"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["common"],{9519:(B,p,e)=>{e.d(p,{H:()=>D});var _=e(1670),m=e(308),k=e(4505),v=e(823),a=e(9095),f=e(6942),y=e(7418),E=e(9128),C=e(9377),I=e(3200),P=e(3861),l=e(5375),i=e(1426),O=e(5912),b=e(6168),u=e(6839),g=e(7486);let D=(()=>{class c extends i.cx{get new_desk_count(){return this._new_desks.getValue()?.length||0}constructor(s,n){super(),this._org=s,this._dialog=n,this._filters=new k.X({}),this._new_desks=new k.X([]),this._desk_bookings=[],this._loading=new k.X(!1),this.new_desks=this._new_desks.asObservable(),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,v.b)(500),(0,a.w)(o=>{const t=o.zones||[];return t&&!t.includes("All")?(0,m.rlq)(t[0],"desks").pipe((0,f.U)(r=>r.details)):(0,m.BW_)(this._org.building?.id,{name:"desks"}).pipe((0,f.U)(r=>r.map(d=>d.metadata.desks.details).reduce((d,A)=>[...d,...A],[])))}),(0,y.K)(o=>[]),(0,f.U)(o=>(o instanceof Array||(o=[]),o.sort((t,r)=>t.name?.localeCompare(r.name)),o.map(t=>new O.nk({...t,qr_code:""})))),(0,E.d)(1)),this.bookings=this._filters.pipe((0,v.b)(500),(0,a.w)(o=>{this._loading.next(!0);const t=o.date?new Date(o.date):new Date;let r=(o.zones||[]).filter(d=>-1!==d&&"-1"!==d&&"All"!==d);return r?.length||(r=this._org.levelsForBuilding(this._org.building).map(d=>d.id)),(0,l.F2)({period_start:Math.floor((0,C.Z)(t).valueOf()/1e3),period_end:Math.floor((0,I.Z)(t).valueOf()/1e3),type:"desk",zones:(r||[]).join(","),include_checked_out:!0})}),(0,f.U)(o=>(o.sort((t,r)=>t.date-r.date),this._desk_bookings=o.map(t=>new l.$N({...t,extension_data:{...t.extension_data,checkin_qr_code:(0,b.w)(`/workplace/#/book/code?asset_id=${encodeURIComponent(t.asset_id)}`)}})),this._loading.next(!1),o)),(0,E.d)(1))}setFilters(s){s.zones?.includes("All")?s.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:s.zones&&this._filters.getValue()?.zones?.includes("All")&&(s.zones=[]),this._filters.next({...this._filters.getValue(),...s})}startPolling(s=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),s)}stopPolling(){this.clearInterval("poll")}addDesks(s){this._new_desks.next(this._new_desks.getValue().concat(s))}clearNewDesks(){this._filters.next(this._filters.getValue()),this._new_desks.next([])}checkinDesk(s){return(0,_.Z)(function*(){"failed"===(yield(0,l.FD)(s.id,!0).toPromise().catch(o=>"failed"))?(0,i.cB)("Error checking in desk booking"):(0,i.t5)(`Checked in ${s.user_name}.`)})()}approveDesk(s){return(0,_.Z)(function*(){"failed"===(yield(0,l.jT)(s.id).toPromise().catch(o=>"failed"))?(0,i.cB)("Error approving in desk booking"):(0,i.t5)(`Approved desk booking for ${s.user_name} on ${(0,P.Z)(s.date,"MMM do")}.`)})()}rejectDesk(s){return(0,_.Z)(function*(){"failed"===(yield(0,l.FP)(s.id).toPromise().catch(o=>"failed"))?(0,i.cB)("Error rejecting in desk booking"):(0,i.t5)(`Rejected desk booking for ${s.user_name} on ${(0,P.Z)(s.date,"MMM do")}.`)})()}giveAccess(s){var n=this;return(0,_.Z)(function*(){const o=yield(0,l.km)(new l.$N({...s,access:!0})).toPromise().catch(t=>"failed");if("failed"===o)return(0,i.cB)("Error giving building access booking host");(0,i.t5)(`Successfully gave building access to ${s.user_name} for desk booking.`),n._desk_bookings=[...n._desk_bookings,o]})()}rejectAllDesks(){var s=this;return(0,_.Z)(function*(){const n=s._desk_bookings||[];if(n.length<=0)return(0,i.QD)("No desks to reject for the selected date");const o=yield(0,i._5)({title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},s._dialog);"done"===o.reason&&(o.loading("Rejecting all desks for selected date..."),yield Promise.all(n.map(t=>(0,l.FP)(t.id).toPromise())),(0,i.t5)("Successfully rejected all desk bookings for selected date."),o.close())})()}}return c.\u0275fac=function(s){return new(s||c)(u.LFG(O.w7),u.LFG(g.uw))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5375:(B,p,e)=>{e.d(p,{$N:()=>k.$,fy:()=>m.f,EP:()=>_.E,jT:()=>a.jT,FD:()=>a.FD,ad:()=>a.ad,kz:()=>v.kz,F2:()=>a.F2,FP:()=>a.FP,km:()=>a.km,Fo:()=>a.Fo,Wp:()=>a.Wp});var _=e(5554),m=e(8929),k=e(6962),v=e(1980),a=e(354);e(1426),e(3174),e(6165),e(4282),e(7121),e(8883),e(4088),e(7304)}}]);
//# sourceMappingURL=common.js.map