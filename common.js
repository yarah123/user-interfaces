"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{7625:(m,T,t)=>{t.d(T,{I:()=>_});var x=t(3918),M=t(9638),D=t(8368),u=t(1299),I=t(6221),B=t(2886),U=t(7502),A=t(5845),l=t(1810),c=t(9377),L=t(3200),f=t(4505),P=t(7716),h=t(823),p=t(8759),g=t(9151),C=t(6116),n=t(9095),y=t(3298),a=t(6942),r=t(9128),K=t(7418),d=t(9676);class _ extends D.KG{constructor(i,E){super(),this._settings=i,this._org=E,this._poll=new f.X(0),this._poll_type=new f.X("api"),this._loading=new f.X(!1),this._filters=new f.X({shown_types:["event","desk","parking","visitor"]}),this._date=new f.X(Date.now()),this._update=(0,P.aj)([this._date,this._poll]).pipe((0,h.b)(500),(0,p.b)(s=>this._loading.next(!0))),this._space_bookings=this._org.active_building.pipe((0,g.h)(s=>!!s),(0,C.g)("id"),(0,h.b)(300),(0,p.b)(s=>this.unsubWith("bind:")),(0,n.w)(({id:s})=>(this._loading.next(!0),(0,B.u2)(s))),(0,y.x)(([s],[e])=>s!==e),(0,n.w)(s=>(this._loading.next(!1),(0,P.aj)((s||[]).map(e=>{const o=(0,U.rTZ)(e.id,"Bookings").binding("bookings"),O=o.listen().pipe((0,a.U)(R=>(R||[]).map(W=>new u.ym({...W,resources:W.attendees.filter(Z=>Z.email===e.email||Z.resource),system:e}))));return this.hasSubscription(`bind:${e.id}`)||this.subscription(`bind:${e.id}`,o.bind()),O})))),(0,a.U)(s=>(0,D.xH)(s)),(0,r.d)(1)),this.ws_events=(0,P.aj)([this._space_bookings,this._update]).pipe((0,a.U)(([s,[e]])=>{const o=(0,D.ar)();return s.filter(O=>(0,A.Z)(O.date,e)&&(O.host.toLowerCase()===o.email.toLowerCase()||O.attendees.find(R=>R.email.toLowerCase()===o.email.toLowerCase())))})),this.api_events=this._update.pipe((0,n.w)(([s])=>{const e={period_start:(0,l.Z)((0,c.Z)(s)),period_end:(0,l.Z)((0,L.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,M.F2)({...e,type:"room"}).pipe((0,a.U)(o=>o.map(O=>(0,u.Yd)(O))),(0,K.K)(o=>[])):(0,u.u$)({...e}).pipe((0,K.K)(o=>[]))}),(0,r.d)(1)),this.events=(0,P.aj)([this._poll_type]).pipe((0,n.w)(([s])=>"api"===s?this.api_events:this.ws_events),(0,p.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,r.d)(1)),this.visitors=this._update.pipe((0,n.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,c.Z)(s)),period_end:(0,l.Z)((0,L.Z)(s)),type:"visitor"}).pipe((0,K.K)(e=>(console.error(e),[])))),(0,p.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,r.d)(1)),this.desks=this._update.pipe((0,n.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,c.Z)(s)),period_end:(0,l.Z)((0,L.Z)(s)),include_checked_out:!0,type:"desk"}).pipe((0,K.K)(e=>(console.error(e),[])))),(0,p.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,r.d)(1)),this.parking=this._update.pipe((0,n.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,c.Z)(s)),period_end:(0,l.Z)((0,L.Z)(s)),type:"parking"}).pipe((0,K.K)(e=>[]))),(0,p.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,r.d)(1)),this.bookings=(0,P.aj)([this.events,this.visitors,this.desks,this.parking]).pipe((0,a.U)(([s,e,o,O])=>[...s,...e,...o,...O].sort((R,W)=>R.date-W.date))),this.filtered_bookings=(0,P.aj)([this.bookings,this._filters]).pipe((0,a.U)(([s,e])=>s.filter(o=>o instanceof u.ym&&e?.shown_types?.includes("event")||e?.shown_types?.includes(o.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api")))}triggerPoll(){this._poll.next(Date.now())}startPolling(i=6e4){return this.interval("poll",()=>{"visible"===document.visibilityState&&this._poll.next(Date.now())},i),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(i){this._date.next(i)}removeItem(i){this._poll.next(Date.now())}toggleType(i,E=!1){var s=this;return(0,x.Z)(function*(){const e=s._filters.getValue()||{shown_types:[]},{shown_types:o}=e;o&&(o.includes(i)||E)?s._filters.next({...e,shown_types:o.filter(O=>O!==i)}):s._filters.next({...e,shown_types:[...o,i]})})()}}_.\u0275fac=function(i){return new(i||_)(d.LFG(D.gb),d.LFG(I.w7))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})},8676:(m,T,t)=>{t.d(T,{I:()=>r});var x=t(9638),M=t(9434),D=t(8368),u=t(1299),I=t(1810),B=t(9377),U=t(312),A=t(3200),l=t(4505),c=t(1942),L=t(7716),f=t(4350),P=t(9095),h=t(9128),p=t(823),g=t(522),C=t(6942),n=t(7418),y=t(8759),a=t(9676);class r extends D.KG{constructor(d){super(),this._settings=d,this._poll=new l.X(0),this._options=new l.X({start:Date.now()}),this._loading=new l.X(""),this._schedule=new l.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,c.H)(1e3).pipe((0,P.w)(_=>(0,M.yJ)()),(0,h.d)(1)),this.events=(0,L.aj)([this._options,this._poll]).pipe((0,p.b)(1e3),(0,g.zg)(([_])=>{this._loading.next("Loading schedule...");const v={period_start:(0,I.Z)((0,B.Z)(_.start)),period_end:(0,I.Z)((0,U.Z)((0,A.Z)(_.start),6))};return _.calendar&&(v.calendar=_.calendar),this._schedule.next(this._schedule.getValue().filter(i=>!(0,D.MZ)(1e3*v.period_start,1e3*v.period_end,i.date,i.date+60*i.duration*1e3))),(0,f.D)([!0===this._settings.get("app.events.use_bookings")?(0,x.F2)({...v,type:"room"}).pipe((0,C.U)(i=>i.map(E=>(0,u.Yd)(E)))):(0,u.u$)({...v}),(0,x.F2)({...v,type:"desk"}),(0,x.F2)({...v,type:"parking"})]).pipe((0,n.K)(i=>[]))}),(0,C.U)(([_,v])=>{const i=[...this._schedule.getValue(),..._,...v.filter(E=>"declined"!==E.status)].sort((E,s)=>E.date-s.date);return this._schedule.next((0,D.Tw)(i,"id")),i}),(0,n.K)(_=>[]),(0,y.b)(_=>this._loading.next("")),(0,h.d)(1))}startPolling(d=15e3){this.interval("poll",()=>this._poll.next(Date.now()),d)}stopPolling(){this.clearInterval("poll")}setOptions(d){this._options.next({...this._options.getValue(),...d})}}r.\u0275fac=function(d){return new(d||r)(a.LFG(D.gb))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})},9434:(m,T,t)=>{t.d(T,{ot:()=>g,yJ:()=>h.yJ}),t(4603);var M=t(3918),D=t(4505),u=t(8759),I=t(9128),B=t(5670),U=t(1810),A=t(9377),l=t(3200),c=t(2317),L=t(8939),f=t(719),P=t(565),h=t(6217),p=t(9676);class g extends L.K{constructor(n,y){super(),this._org=n,this._settings=y,this._calendars=new D.X([]),this.calendar_list=(0,h.yJ)().pipe((0,u.b)(a=>this._calendars.next(a)),(0,I.d)(1)),this.query=()=>(0,h.yJ)(),this.freeBusy=a=>(0,h.tS)(a,this._org),this.availability=a=>(0,h.v7)(a),this._org.initialised.pipe((0,B.P)(a=>a)).subscribe(()=>this.init())}init(){var n=this;return(0,M.Z)(function*(){n._settings.get("app.events.use_bookings")||n._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(n,y){return(0,h.tS)({period_start:(0,U.Z)((0,A.Z)(n)),period_end:(0,U.Z)((0,l.Z)(n)),calendars:y},this._org)}checkSpacesAvailability(n,y,a,r){return(0,M.Z)(function*(){const K=yield(0,h.v7)({period_start:y,period_end:a,system_ids:n.join(",")}).toPromise(),d=new Date(r?.date).valueOf(),_=(0,c.Z)(d,r?.duration).valueOf();return!!K.every(i=>{const E=i.availability;if(r&&i.id===r.system?.email){const s=E.findIndex(e=>e.date>=d&&(0,c.Z)(e.date,e.duration).valueOf()<=_);-1!==s&&E.splice(s,1)}return!E.length})})()}}g.\u0275fac=function(n){return new(n||g)(p.LFG(P.w),p.LFG(f.g))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}}]);
//# sourceMappingURL=common.js.map