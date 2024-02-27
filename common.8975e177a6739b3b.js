"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([[592],{6205:(J,b,t)=>{t.d(b,{I:()=>x});var m=t(5861),D=t(8466),g=t(6129),I=t(6975),T=t(3121),B=t(7049),W=t(618),F=t(3166),r=t(3740),U=t(9189),A=t(8372),R=t(5091),d=t(5125),h=t(2994),M=t(9193),C=t(4815),Z=t(6776),o=t(7927),u=t(7734),p=t(958),E=t(5222),K=t(2068),O=t(6124),l=t(2413),a=t(9185),_=t(7691),c=t(9347);let x=(()=>{class y extends g.cx{constructor(v,S,X,$){var f;super(),f=this,this._settings=v,this._org=S,this._lockers=X,this._dialog=$,this._poll=new d.X(0),this._poll_type=new d.X("api"),this._loading=new d.X(!1),this._filters=new d.X({shown_types:["event","desk","parking","visitor","locker"]}),this._date=new d.X(Date.now()),this._update=(0,h.aj)([this._date,this._poll]).pipe((0,Z.b)(500),(0,o.b)(s=>this._loading.next(!0))),this._deleted=[],this._space_bookings=this._org.active_building.pipe((0,u.h)(s=>!!s),(0,p.g)("id"),(0,Z.b)(300),(0,o.b)(s=>this.unsubWith("bind:")),(0,E.w)(({id:s})=>(this._loading.next(!0),(0,B.u2)(s))),(0,K.x)(([s],[i])=>s!==i),(0,E.w)(s=>(this._loading.next(!1),(0,h.aj)((s||[]).map(i=>{const e=(0,W.rTZ)(i.id,"Bookings").binding("bookings"),n=e.listen().pipe((0,O.U)(P=>(P||[]).map(j=>new I.ym({...j,resources:j.attendees.filter(L=>L.email===i.email||L.resource),system:i}))),(0,l.K)(P=>(0,M.of)([])));return this.hasSubscription(`bind:${i.id}`)||this.subscription(`bind:${i.id}`,e.bind()),n})))),(0,O.U)(s=>(0,g.xH)(s)),(0,a.d)(1)),this.ws_events=(0,h.aj)([this._space_bookings,this._update]).pipe((0,O.U)(([s,[i]])=>{const e=(0,g.ar)();return s.filter(n=>(0,F.Z)(n.date,i)&&(n.host.toLowerCase()===e.email.toLowerCase()||n.attendees.find(P=>P.email.toLowerCase()===e.email.toLowerCase())))})),this.api_events=this._update.pipe((0,E.w)(([s])=>{const i={period_start:(0,r.Z)((0,U.Z)(s)),period_end:(0,r.Z)((0,A.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,D.F2)({...i,type:"room"}).pipe((0,O.U)(e=>e.map(n=>(0,I.Yd)(n))),(0,l.K)(e=>(0,M.of)([]))):(0,I.u$)({...i}).pipe((0,l.K)(e=>(0,M.of)([])))}),(0,a.d)(1)),this.events=(0,h.aj)([this._poll_type]).pipe((0,E.w)(([s])=>"api"===s?this.api_events:this.ws_events),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,a.d)(1)),this.visitors=this._update.pipe((0,E.w)(([s])=>(0,D.F2)({period_start:(0,r.Z)((0,U.Z)(s)),period_end:(0,r.Z)((0,A.Z)(s)),type:"visitor"}).pipe((0,l.K)(i=>(0,M.of)([])))),(0,O.U)(s=>s.filter(i=>!i.parent_id&&!i.linked_event)),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,a.d)(1)),this.desks=this._update.pipe((0,E.w)(([s])=>(0,D.F2)({period_start:(0,r.Z)((0,U.Z)(s)),period_end:(0,r.Z)((0,A.Z)(s)),include_checked_out:!0,type:"desk"}).pipe((0,l.K)(i=>(0,M.of)([])))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,a.d)(1)),this.parking=this._update.pipe((0,E.w)(([s])=>(0,D.F2)({period_start:(0,r.Z)((0,U.Z)(s)),period_end:(0,r.Z)((0,A.Z)(s)),type:"parking"}).pipe((0,l.K)(i=>(0,M.of)([])))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,a.d)(1)),this.lockers=(0,h.aj)([this._org.active_building.pipe((0,u.h)(s=>!!s),(0,p.g)("id")),this._lockers.lockers$]).pipe((0,Z.b)(300),(0,E.w)(function(){var s=(0,m.Z)(function*([i,e]){const n=f._org.binding("lockers");return n?[yield(0,W.rTZ)(n,"LockerLocations").execute("lockers_allocated_to_me").catch(L=>[]),e]:[[],e]});return function(i){return s.apply(this,arguments)}}()),(0,O.U)(([s,i])=>s.map(e=>{const n=i.find(P=>P.id===e.locker_id);return n||e.level&&e.building?(e.level=e.level||n?.level_id,e.building=e.building||this._org.levelWithID([n?.level_id])?.parent_id,new D.$N({date:(0,U.Z)(Date.now()).valueOf(),duration:1439,title:"Locker Booking",description:e.locker_name,booking_type:"locker",all_day:!0,asset_id:n.map_id,asset_name:e.locker_name,zones:[e.building,e.level],extension_data:{}})):null}).filter(e=>e)),(0,l.K)(s=>(console.error(s),(0,M.of)([]))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,a.d)(1)),this.bookings=(0,h.aj)([this.events,this.visitors,this.desks,this.parking,this.lockers]).pipe((0,O.U)(([s,i,e,n,P])=>[...s.filter(L=>!e.find(G=>`${L.meeting_id}`==`${G.id}`)),...i,...e,...n,...P].sort((L,G)=>L.date-G.date))),this.filtered_bookings=(0,h.aj)([this.bookings,this._filters]).pipe((0,O.U)(([s,i])=>s.filter(e=>!this._deleted.includes(e.id)&&e instanceof I.ym&&i?.shown_types?.includes("event")||i?.shown_types?.includes(e.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this._ignore_cancel=[],this._checkCancel=(0,h.aj)([g.pN,(0,C.F)(6e4)]).pipe((0,u.h)(([s])=>!!s),(0,O.U)(function(){var s=(0,m.Z)(function*([i]){const e="wfo"!==i.location,n=f._settings.get("app.auto_release");if(n&&e&&n.time_after&&n.resources?.length)for(const P of n.resources){const j=yield(0,D.F2)({period_start:(0,r.Z)((0,R.Z)(Date.now(),n.time_before||0)),period_end:(0,r.Z)((0,R.Z)(Date.now(),n.time_after||5)),type:P}).toPromise();for(const L of j)f._ignore_cancel.includes(L.id)||(f._dialog.closeAll(),"done"===(yield(0,g._5)({title:`Keep ${P} booking`,content:`You have indicated you are not in the office. \n                                Your booking will be cancelled after ${n.time_after} minutes. \n                                Do you wish to keep this booking?`,icon:{content:"cancel"}},f._dialog)).reason?yield(0,D.FD)(L.id,!0).toPromise():f._ignore_cancel.push(L.id))}});return function(i){return s.apply(this,arguments)}}())),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api"))),this.subscription("chat_event",this._settings.listen("CHAT:task_complete").subscribe(()=>this.triggerPoll())),this.subscription("wfh_checks",this._checkCancel.subscribe()),this._deleted=JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted")||"[]")}triggerPoll(){this._poll.next(Date.now())}startPolling(v=6e4){return this.interval("poll",()=>this._poll.next(Date.now()),v),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(v){this._date.next(v)}removeItem(v){this.setAsDeleted(v.id),this._poll.next(Date.now())}setAsDeleted(v){this._deleted.push(v),sessionStorage.setItem("PLACEOS.events.deleted",JSON.stringify(this._deleted))}toggleType(v,S=!1){var X=this;return(0,m.Z)(function*(){const $=X._filters.getValue()||{shown_types:[]},{shown_types:f}=$;f&&(f.includes(v)||S)?X._filters.next({...$,shown_types:f.filter(s=>s!==v)}):X._filters.next({...$,shown_types:[...f,v]})})()}static#t=this.\u0275fac=function(S){return new(S||y)(_.LFG(g.gb),_.LFG(T.w7),_.LFG(D.At),_.LFG(c.uw))};static#s=this.\u0275prov=_.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},6386:(J,b,t)=>{t.d(b,{I:()=>E});var m=t(8466),D=t(8691),g=t(6129),I=t(6975),T=t(3740),B=t(9189),W=t(8584),F=t(8372),r=t(5125),U=t(1928),A=t(2994),R=t(7504),d=t(5222),h=t(9185),M=t(6776),C=t(6743),Z=t(6124),o=t(2413),u=t(7927),p=t(7691);let E=(()=>{class K extends g.cx{constructor(l){super(),this._settings=l,this._poll=new r.X(0),this._options=new r.X({start:Date.now()}),this._loading=new r.X(""),this._schedule=new r.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,U.H)(1e3).pipe((0,d.w)(a=>(0,D.yJ)()),(0,h.d)(1)),this.events=(0,A.aj)([this._options,this._poll]).pipe((0,M.b)(1e3),(0,C.zg)(([a])=>{this._loading.next("Loading schedule...");const _={period_start:(0,T.Z)((0,B.Z)(a.start)),period_end:(0,T.Z)((0,W.Z)((0,F.Z)(a.start),6))};return a.calendar&&(_.calendar=a.calendar),this._schedule.next(this._schedule.getValue().filter(c=>!(0,g.MZ)(1e3*_.period_start,1e3*_.period_end,c.date,c.date+60*c.duration*1e3))),(0,R.D)([!0===this._settings.get("app.events.use_bookings")?(0,m.F2)({..._,type:"room"}).pipe((0,Z.U)(c=>c.map(x=>(0,I.Yd)(x)))):(0,I.u$)({..._}),(0,m.F2)({..._,type:"desk"}),(0,m.F2)({..._,type:"parking"})]).pipe((0,o.K)(c=>[]))}),(0,Z.U)(([a,_])=>{const c=[...this._schedule.getValue(),...a,..._.filter(x=>"declined"!==x.status)].sort((x,y)=>x.date-y.date);return this._schedule.next((0,g.Tw)(c,"id")),c}),(0,o.K)(a=>[]),(0,u.b)(a=>this._loading.next("")),(0,h.d)(1))}startPolling(l=15e3){this.interval("poll",()=>this._poll.next(Date.now()),l)}stopPolling(){this.clearInterval("poll")}setOptions(l){this._options.next({...this._options.getValue(),...l})}static#t=this.\u0275fac=function(a){return new(a||K)(p.LFG(g.gb))};static#s=this.\u0275prov=p.Yz7({token:K,factory:K.\u0275fac,providedIn:"root"})}return K})()},8691:(J,b,t)=>{t.d(b,{ot:()=>M,yJ:()=>d.yJ});var m=t(5861),D=t(5125),g=t(7927),I=t(9185),T=t(8419),B=t(3740),W=t(9189),F=t(8372),r=t(5091),U=t(6474),A=t(4411),R=t(2120),d=t(6511),h=t(7691);let M=(()=>{class C extends U.c{constructor(o,u){super(),this._org=o,this._settings=u,this._calendars=new D.X([]),this.calendar_list=(0,d.yJ)().pipe((0,g.b)(p=>this._calendars.next(p)),(0,I.d)(1)),this.query=()=>(0,d.yJ)(),this.freeBusy=p=>(0,d.tS)(p,this._org),this.availability=p=>(0,d.v7)(p),this._org.initialised.pipe((0,T.P)(p=>p)).subscribe(()=>this.init())}init(){var o=this;return(0,m.Z)(function*(){o._settings.get("app.events.use_bookings")||o._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(o,u){return(0,d.tS)({period_start:(0,B.Z)((0,W.Z)(o)),period_end:(0,B.Z)((0,F.Z)(o)),calendars:u},this._org)}checkSpacesAvailability(o,u,p,E){return(0,m.Z)(function*(){const K=yield(0,d.v7)({period_start:u,period_end:p,system_ids:o.join(",")}).toPromise(),O=new Date(E?.date).valueOf(),l=(0,r.Z)(O,E?.duration).valueOf();return!!K.every(_=>{const c=_.availability;if(E&&_.id===E.system?.email){const x=c.findIndex(y=>y.date>=O&&(0,r.Z)(y.date,y.duration).valueOf()<=l);-1!==x&&c.splice(x,1)}return!c.length})})()}static#t=this.\u0275fac=function(u){return new(u||C)(h.LFG(R.w),h.LFG(A.g))};static#s=this.\u0275prov=h.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()}}]);