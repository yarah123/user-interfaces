"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["common"],{9519:(R,M,t)=>{t.d(M,{H:()=>B});var r=t(4929),g=t(4505),u=t(823),E=t(9095),c=t(6942),m=t(7418),O=t(9128),p=t(5670),b=t(9377),A=t(3200),f=t(5148),d=t(4099),l=t(3294),D=t(3674),P=t(3619),C=t(5767),k=t(6168),h=t(3184),j=t(5758);let B=(()=>{class _ extends l.KG{constructor(e,i){super(),this._org=e,this._dialog=i,this._filters=new g.X({}),this._new_desks=new g.X([]),this._desk_bookings=[],this._desks=[],this._loading=new g.X(!1),this.new_desks=this._new_desks.asObservable(),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,u.b)(500),(0,E.w)(s=>{var o;const n=s.zones||[];return n.includes("All")?(0,D.BW_)(null===(o=this._org.building)||void 0===o?void 0:o.id,{name:"desks"}).pipe((0,c.U)(a=>a.map(v=>v.metadata.desks.details).reduce((v,U)=>[...v,...U],[]))):(0,D.rlq)(n[0],"desks").pipe((0,c.U)(a=>a.details))}),(0,m.K)(s=>[]),(0,c.U)(s=>(s instanceof Array||(s=[]),s.sort((o,n)=>o.name.localeCompare(n.name)),this._desks=s.map(o=>new P.nk(Object.assign(Object.assign({},o),{qr_code:(0,k.w)(`${location.origin}/workplace/#/book/code?checkin=${encodeURIComponent(o.id)}`)}))),this._desks)),(0,O.d)(1)),this.bookings=this._filters.pipe((0,u.b)(500),(0,E.w)(s=>{this._loading.next(!0);const o=s.date?new Date(s.date):new Date;let n=(s.zones||[]).filter(a=>-1!==a&&"-1"!==a&&"All"!==a);return(null==n?void 0:n.length)||(n=this._org.levelsForBuilding(this._org.building).map(a=>a.id)),(0,d.F2)({period_start:Math.floor((0,b.Z)(o).valueOf()/1e3),period_end:Math.floor((0,A.Z)(o).valueOf()/1e3),type:"desk",zones:(n||[]).join(",")})}),(0,c.U)(s=>(s.sort((o,n)=>o.date-n.date),this._desk_bookings=s.map(o=>new d.$N(Object.assign(Object.assign({},o),{extension_data:Object.assign(Object.assign({},o.extension_data),{checkin_qr_code:(0,k.w)(`/workplace/#/book/code?checkin=${encodeURIComponent(o.asset_id)}`)})}))),this._loading.next(!1),s)),(0,O.d)(1))}get new_desk_count(){var e;return(null===(e=this._new_desks.getValue())||void 0===e?void 0:e.length)||0}setFilters(e){var i,s,o;(null===(i=e.zones)||void 0===i?void 0:i.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:e.zones&&(null===(o=null===(s=this._filters.getValue())||void 0===s?void 0:s.zones)||void 0===o?void 0:o.includes("All"))&&(e.zones=[]),console.warn("Filters:",e),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}addDesks(e){this._new_desks.next(this._new_desks.getValue().concat(e))}clearNewDesks(){this._new_desks.next([])}checkinDesk(e){return(0,r.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,d.FD)(e.id,!0).toPromise().catch(s=>"failed"))?(0,l.cB)("Error checking in desk booking"):(0,l.t5)(`Checked in ${e.user_name}.`)})}approveDesk(e){return(0,r.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,d.jT)(e.id).toPromise().catch(s=>"failed"))?(0,l.cB)("Error approving in desk booking"):(0,l.t5)(`Approved desk booking for ${e.user_name} on ${(0,f.Z)(e.date,"MMM do")}.`)})}rejectDesk(e){return(0,r.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,d.FP)(e.id).toPromise().catch(s=>"failed"))?(0,l.cB)("Error rejecting in desk booking"):(0,l.t5)(`Rejected desk booking for ${e.user_name} on ${(0,f.Z)(e.date,"MMM do")}.`)})}giveAccess(e){return(0,r.mG)(this,void 0,void 0,function*(){const i=yield(0,d.km)(new d.$N(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(s=>"failed");if("failed"===i)return(0,l.cB)("Error giving building access booking host");(0,l.t5)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,i]})}rejectAllDesks(){return(0,r.mG)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const i=this._dialog.open(C.z5,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((s,o)=>{let n=!1;i.componentInstance.event.pipe((0,p.P)(a=>"done"===a.reason)).subscribe(()=>(0,r.mG)(this,void 0,void 0,function*(){i.componentInstance.loading="Rejecting all desks for selected date...",n=!0,yield Promise.all(e.map(a=>(0,d.FP)(a.id).toPromise())),s(""),(0,l.t5)("Successfull rejected all desk bookings for selected date."),i.close()})),i.afterClosed().toPromise().then(()=>{n||o()})})}(0,l.QD)("No desks to reject for the selected date")})}}return _.\u0275fac=function(e){return new(e||_)(h.LFG(P.w7),h.LFG(j.uw))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);
//# sourceMappingURL=common.js.map