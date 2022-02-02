"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["common"],{9519:(R,m,t)=>{t.d(m,{H:()=>B});var c=t(4929),h=t(4505),E=t(823),u=t(9095),_=t(6942),k=t(7418),f=t(9128),p=t(5670),b=t(9377),A=t(3200),O=t(5148),r=t(4099),l=t(3294),D=t(3674),P=t(3619),C=t(5767),M=t(6168),g=t(3184),j=t(5758);let B=(()=>{class d extends l.KG{constructor(e,i){super(),this._org=e,this._dialog=i,this._filters=new h.X({}),this._desk_bookings=[],this._desks=[],this._loading=new h.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,E.b)(500),(0,u.w)(s=>{var o;const n=s.zones||[];return n.includes("All")?(0,D.BW_)(null===(o=this._org.building)||void 0===o?void 0:o.id,{name:"desks"}).pipe((0,_.U)(a=>a.map(v=>v.metadata.desks.details).reduce((v,U)=>[...v,...U],[]))):(0,D.rlq)(n[0],"desks").pipe((0,_.U)(a=>a.details))}),(0,k.K)(s=>[]),(0,_.U)(s=>(s instanceof Array||(s=[]),s.sort((o,n)=>o.name.localeCompare(n.name)),this._desks=s.map(o=>new P.nk(Object.assign(Object.assign({},o),{qr_code:(0,M.w)(`${location.origin}/workplace/#/book/code?checkin=${encodeURIComponent(o.id)}`)}))),this._desks)),(0,f.d)()),this.bookings=this._filters.pipe((0,E.b)(500),(0,u.w)(s=>{this._loading.next(!0);const o=s.date?new Date(s.date):new Date;let n=(s.zones||[]).filter(a=>-1!==a&&"-1"!==a&&"All"!==a);return(null==n?void 0:n.length)||(n=this._org.levelsForBuilding(this._org.building).map(a=>a.id)),(0,r.F2)({period_start:Math.floor((0,b.Z)(o).valueOf()/1e3),period_end:Math.floor((0,A.Z)(o).valueOf()/1e3),type:"desk",zones:(n||[]).join(",")})}),(0,_.U)(s=>(s.sort((o,n)=>o.date-n.date),this._desk_bookings=s.map(o=>new r.$N(Object.assign(Object.assign({},o),{extension_data:Object.assign(Object.assign({},o.extension_data),{checkin_qr_code:(0,M.w)(`/workplace/#/book/code?checkin=${encodeURIComponent(o.asset_id)}`)})}))),this._loading.next(!1),s)),(0,f.d)())}setFilters(e){var i,s,o;(null===(i=e.zones)||void 0===i?void 0:i.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:e.zones&&(null===(o=null===(s=this._filters.getValue())||void 0===s?void 0:s.zones)||void 0===o?void 0:o.includes("All"))&&(e.zones=[]),console.warn("Filters:",e),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return(0,c.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,r.FD)(e.id,!0).toPromise().catch(s=>"failed"))?(0,l.cB)("Error checking in desk booking"):(0,l.t5)(`Checked in ${e.user_name}.`)})}approveDesk(e){return(0,c.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,r.jT)(e.id).toPromise().catch(s=>"failed"))?(0,l.cB)("Error approving in desk booking"):(0,l.t5)(`Approved desk booking for ${e.user_name} on ${(0,O.Z)(e.date,"MMM Do")}.`)})}rejectDesk(e){return(0,c.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,r.FP)(e.id).toPromise().catch(s=>"failed"))?(0,l.cB)("Error rejecting in desk booking"):(0,l.t5)(`Rejected desk booking for ${e.user_name} on ${(0,O.Z)(e.date,"MMM Do")}.`)})}giveAccess(e){return(0,c.mG)(this,void 0,void 0,function*(){const i=yield(0,r.km)(new r.$N(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(s=>"failed");if("failed"===i)return(0,l.cB)("Error giving building access booking host");(0,l.t5)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,i]})}rejectAllDesks(){return(0,c.mG)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const i=this._dialog.open(C.z5,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((s,o)=>{let n=!1;i.componentInstance.event.pipe((0,p.P)(a=>"done"===a.reason)).subscribe(()=>(0,c.mG)(this,void 0,void 0,function*(){i.componentInstance.loading="Rejecting all desks for selected date...",n=!0,yield Promise.all(e.map(a=>(0,r.FP)(a.id).toPromise())),s(""),(0,l.t5)("Successfull rejected all desk bookings for selected date."),i.close()})),i.afterClosed().toPromise().then(()=>{n||o()})})}(0,l.QD)("No desks to reject for the selected date")})}}return d.\u0275fac=function(e){return new(e||d)(g.LFG(P.w7),g.LFG(j.uw))},d.\u0275prov=g.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);
//# sourceMappingURL=common.js.map