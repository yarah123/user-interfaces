"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["common"],{4381:(L,P,e)=>{e.d(P,{H:()=>I});var c=e(1670),D=e(7298),g=e(462),O=e(2484),a=e(8159),k=e(9681),M=e(5933),x=e(6520),_=e(7422),m=e(8175),y=e(680),C=e(5746),A=e(5083),U=e(6932),T=e(7343),R=e(7016),E=e(4512),u=e(4884),l=e(8466),r=e(2078),v=e(3121),p=(e(9680),e(1699)),B=e(7401);let I=(()=>{class d extends r.cx{get new_desk_count(){return this._new_desks.getValue()?.length||0}nextPage(){this._call_next_page.next(`NEXT_${Date.now()}`)}constructor(s,n){super(),this._org=s,this._dialog=n,this._filters=new g.X({}),this._new_desks=new g.X([]),this._desk_bookings=[],this._loading=new g.X(!1),this.new_desks=this._new_desks.asObservable(),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,M.b)(500),(0,x.w)(t=>{const o=t.zones||[];return o&&!o.includes("All")?(0,D.rlq)(o[0],"desks").pipe((0,_.U)(i=>i.details)):(0,D.BW_)(this._org.building?.id,{name:"desks"}).pipe((0,_.U)(i=>i.map(h=>h.metadata.desks.details).reduce((h,f)=>[...h,...f],[])))}),(0,m.K)(t=>[]),(0,_.U)(t=>(t instanceof Array||(t=[]),t.sort((o,i)=>o.name?.localeCompare(i.name)),t.map(o=>new v.nk({...o,qr_code:""})))),(0,y.d)(1)),this._next_page=new O.xQ,this._call_next_page=new O.xQ,this._all_zones_keys=["All",-1,"-1"],this.setup_paging=(0,a.aj)([this._filters,this._org.initialised]).pipe((0,M.b)(500),(0,C.b)(([t,o])=>{if(!o)return;const i=t.date||Date.now(),h=!t.zones||t.zones.some(f=>this._all_zones_keys.includes(f))?[this._org.building.id]:t.zones;this._next_page.next(()=>(0,l.pS)({period_start:(0,T.Z)((0,R.Z)(i)),period_end:(0,T.Z)((0,E.Z)(i)),type:"desk",zones:h.join(","),include_checked_out:!0}).pipe((0,m.K)(f=>(0,k.of)({data:[],total:0,next:null})))),this._call_next_page.next(`RESET_${Date.now()}`)})),this.paged_bookings=(0,a.aj)([this._next_page,this._call_next_page]).pipe((0,A.x)((t,o)=>t[1]===o[1]),(0,x.w)(([t,o])=>(this._loading.next(!0),t?o.includes("RESET")?t().pipe((0,_.U)(i=>({...i,reset:!0})),(0,m.K)(i=>(0,k.of)({data:[],total:0,next:null}))):t().pipe((0,_.U)(i=>({...i,reset:!1})),(0,m.K)(i=>(0,k.of)({data:[],total:0,next:null}))):(0,k.of)({data:[],total:0,next:null,reset:o.includes("RESET")}))),(0,U.R)((t,{data:o,total:i,next:h,reset:f})=>{const K=o;return this._next_page.next(h),f?{list:K,total:i}:{list:[...t.list,...K],total:i}},{list:[],total:0}),(0,C.b)(t=>this._loading.next(!1)),(0,y.d)(1)),this.has_more_pages=this.paged_bookings.pipe((0,_.U)(t=>t.list.length<t.total)),this.bookings=this.paged_bookings.pipe((0,_.U)(t=>t.list)),this.setup_paging.subscribe()}setFilters(s){s.zones?.includes("All")?s.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:s.zones&&this._filters.getValue()?.zones?.includes("All")&&(s.zones=[]),this._filters.next({...this._filters.getValue(),...s})}refresh(){this._loading.next(!0),this.timeout("poll",()=>this.setFilters(this._filters.getValue()))}addDesks(s){this._new_desks.next(this._new_desks.getValue().concat(s))}removeNewDesk(s){this._filters.next(this._filters.getValue()),this._new_desks.next(this._new_desks.getValue().filter(n=>n.id!==s.id))}clearNewDesks(){this._filters.next(this._filters.getValue()),this._new_desks.next([])}checkinDesk(s,n=!0){return(0,c.Z)(function*(){console.log("Check-in:",s);const t=yield(0,l.FD)(s.id,n??!0).toPromise().catch(o=>({failed:!0,error:o}));if(t.failed)throw(0,r.cB)(t.error?`Error: ${t.error}`:`Error checking ${n?"in":"out"} desk booking`),t.error;(0,r.t5)(`Checked ${n?"in":"out"} ${s.user_name}.`)})()}approveDesk(s){return(0,c.Z)(function*(){if("failed"===(yield(0,l.jT)(s.id).toPromise().catch(t=>"failed")))return(0,r.cB)("Error approving in desk booking");(0,r.t5)(`Approved desk booking for ${s.user_name} on ${(0,u.Z)(s.date,"MMM do")}.`),s.approved=!0,s.rejected=!1})()}rejectDesk(s){return(0,c.Z)(function*(){if("failed"===(yield(0,l.FP)(s.id).toPromise().catch(t=>"failed")))return(0,r.cB)("Error rejecting in desk booking");(0,r.t5)(`Rejected desk booking for ${s.user_name} on ${(0,u.Z)(s.date,"MMM do")}.`),s.approved=!1,s.rejected=!0})()}giveAccess(s){var n=this;return(0,c.Z)(function*(){const t=yield(0,l.km)(new l.$N({...s,access:!0})).toPromise().catch(o=>"failed");if("failed"===t)return(0,r.cB)("Error giving building access booking host");(0,r.t5)(`Successfully gave building access to ${s.user_name} for desk booking.`),n._desk_bookings=[...n._desk_bookings,t]})()}rejectAllDesks(){var s=this;return(0,c.Z)(function*(){const n=s._desk_bookings||[];if(n.length<=0)return(0,r.QD)("No desks to reject for the selected date");const t=yield(0,r._5)({title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},s._dialog);"done"===t.reason&&(t.loading("Rejecting all desks for selected date..."),yield Promise.all(n.map(o=>(0,l.FP)(o.id).toPromise())),(0,r.t5)("Successfully rejected all desk bookings for selected date."),t.close())})()}static#e=this.\u0275fac=function(n){return new(n||d)(p.LFG(v.w7),p.LFG(B.uw))};static#s=this.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},8466:(L,P,e)=>{e.d(P,{$N:()=>g.$,fy:()=>D.f,EP:()=>c.E,jT:()=>a.jT,FD:()=>a.FD,NP:()=>a.NP,F2:()=>a.F2,pS:()=>a.pS,FP:()=>a.FP,km:()=>a.km,Fo:()=>a.Fo,Wp:()=>a.Wp});var c=e(1290),D=e(3863),g=e(6049),a=(e(9645),e(5183));e(2078),e(4955),e(921),e(9165),e(1635),e(5713),e(2358),e(5033)}}]);
//# sourceMappingURL=common.js.map