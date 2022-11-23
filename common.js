"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{7625:(A,L,t)=>{t.d(L,{I:()=>E});var x=t(1670),O=t(9638),P=t(232),f=t(1299),_=t(1810),u=t(9377),M=t(3200),y=t(4505),p=t(7716),U=t(823),c=t(8759),K=t(9095),I=t(6942),i=t(7418),D=t(9128),C=t(9676);let E=(()=>{class v extends P.KG{constructor(a){super(),this._settings=a,this._poll=new y.X(0),this._loading=new y.X(!1),this._filters=new y.X({shown_types:["event","desk","parking","visitor"]}),this._date=new y.X(Date.now()),this._update=(0,p.aj)([this._date,this._poll]).pipe((0,U.b)(500),(0,c.b)(s=>this._loading.next(!0))),this.events=this._update.pipe((0,K.w)(([s])=>{const e={period_start:(0,_.Z)((0,u.Z)(s)),period_end:(0,_.Z)((0,M.Z)(s))};return this._settings.get("app.no_user_calendar")?(0,O.F2)({...e,type:"room"}).pipe((0,I.U)(o=>o.map(n=>(0,f.Yd)(n))),(0,i.K)(o=>[])):(0,f.u$)({...e}).pipe((0,i.K)(o=>[]))}),(0,c.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.visitors=this._update.pipe((0,K.w)(([s])=>(0,O.F2)({period_start:(0,_.Z)((0,u.Z)(s)),period_end:(0,_.Z)((0,M.Z)(s)),type:"visitor"}).pipe((0,i.K)(e=>(console.error(e),[])))),(0,c.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.desks=this._update.pipe((0,K.w)(([s])=>(0,O.F2)({period_start:(0,_.Z)((0,u.Z)(s)),period_end:(0,_.Z)((0,M.Z)(s)),type:"desk"}).pipe((0,i.K)(e=>(console.error(e),[])))),(0,c.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.parking=this._update.pipe((0,K.w)(([s])=>(0,O.F2)({period_start:(0,_.Z)((0,u.Z)(s)),period_end:(0,_.Z)((0,M.Z)(s)),type:"parking"}).pipe((0,i.K)(e=>[]))),(0,c.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.bookings=(0,p.aj)([this.events,this.visitors,this.desks,this.parking]).pipe((0,I.U)(([s,e,o,n])=>[...s,...e,...o,...n].sort((l,d)=>l.date-d.date))),this.filtered_bookings=(0,p.aj)([this.bookings,this._filters]).pipe((0,I.U)(([s,e])=>s.filter(o=>o instanceof f.ym&&e?.shown_types?.includes("event")||e?.shown_types?.includes(o.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable()}triggerPoll(){this._poll.next(Date.now())}startPolling(a=15e3){return this.interval("poll",()=>this._poll.next(Date.now()),a),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(a){this._date.next(a)}removeItem(a){this._poll.next(Date.now())}toggleType(a,s=!1){var e=this;return(0,x.Z)(function*(){const o=e._filters.getValue()||{shown_types:[]},{shown_types:n}=o;n&&(n.includes(a)||s)?e._filters.next({...o,shown_types:n.filter(l=>l!==a)}):e._filters.next({...o,shown_types:[...n,a]})})()}}return v.\u0275fac=function(a){return new(a||v)(C.LFG(P.gb))},v.\u0275prov=C.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},8676:(A,L,t)=>{t.d(L,{I:()=>s});var x=t(9638),O=t(9434),P=t(232),f=t(1299),_=t(1810),u=t(9377),M=t(312),y=t(3200),p=t(4505),U=t(1942),c=t(7716),K=t(4350),I=t(9095),i=t(9128),D=t(823),C=t(522),E=t(6942),v=t(7418),r=t(8759),a=t(9676);let s=(()=>{class e extends P.KG{constructor(n){super(),this._settings=n,this._poll=new p.X(0),this._options=new p.X({start:Date.now()}),this._loading=new p.X(""),this._schedule=new p.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,U.H)(1e3).pipe((0,I.w)(l=>(0,O.yJ)()),(0,i.d)(1)),this.events=(0,c.aj)([this._options,this._poll]).pipe((0,D.b)(1e3),(0,C.zg)(([l])=>{this._loading.next("Loading schedule...");const d={period_start:(0,_.Z)((0,u.Z)(l.start)),period_end:(0,_.Z)((0,M.Z)((0,y.Z)(l.start),6))};return l.calendar&&(d.calendar=l.calendar),this._schedule.next(this._schedule.getValue().filter(h=>!(0,P.MZ)(1e3*d.period_start,1e3*d.period_end,h.date,h.date+60*h.duration*1e3))),(0,K.D)([!0===this._settings.get("app.no_user_calendar")?(0,x.F2)({...d,type:"room"}).pipe((0,E.U)(h=>h.map(g=>(0,f.Yd)(g)))):(0,f.u$)({...d}),(0,x.F2)({...d,type:"desk"}),(0,x.F2)({...d,type:"parking"})]).pipe((0,v.K)(h=>[]))}),(0,E.U)(([l,d])=>{const h=[...this._schedule.getValue(),...l,...d.filter(g=>"declined"!==g.status)].sort((g,T)=>g.date-T.date);return this._schedule.next((0,P.Tw)(h,"id")),h}),(0,v.K)(l=>[]),(0,r.b)(l=>this._loading.next("")),(0,i.d)(1))}startPolling(n=15e3){this.interval("poll",()=>this._poll.next(Date.now()),n)}stopPolling(){this.clearInterval("poll")}setOptions(n){this._options.next({...this._options.getValue(),...n})}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(P.gb))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9434:(A,L,t)=>{t.d(L,{ot:()=>C,yJ:()=>i.yJ}),t(4603);var O=t(1670),P=t(4505),f=t(8759),_=t(9128),u=t(5670),M=t(1810),y=t(9377),p=t(3200),U=t(2317),c=t(8939),K=t(719),I=t(565),i=t(6217),D=t(9676);let C=(()=>{class E extends c.K{constructor(r,a){super(),this._org=r,this._settings=a,this._calendars=new P.X([]),this.calendar_list=(0,i.yJ)().pipe((0,f.b)(s=>this._calendars.next(s)),(0,_.d)(1)),this.query=()=>(0,i.yJ)(),this.freeBusy=s=>(0,i.tS)(s,this._org),this.availability=s=>(0,i.v7)(s),this._org.initialised.pipe((0,u.P)(s=>s)).subscribe(()=>this.init())}init(){var r=this;return(0,O.Z)(function*(){r._settings.get("app.no_user_calendar")||r._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(r,a){return(0,i.tS)({period_start:(0,M.Z)((0,y.Z)(r)),period_end:(0,M.Z)((0,p.Z)(r)),calendars:a},this._org)}checkSpacesAvailability(r,a,s,e){return(0,O.Z)(function*(){const o=yield(0,i.v7)({period_start:a,period_end:s,system_ids:r.join(",")}).toPromise(),n=new Date(e?.date).valueOf(),l=(0,U.Z)(n,e?.duration).valueOf();return!!o.every(h=>{const g=h.availability;if(e&&h.id===e.system?.email){const T=g.findIndex(B=>B.date>=n&&(0,U.Z)(B.date,B.duration).valueOf()<=l);-1!==T&&g.splice(T,1)}return!g.length})})()}}return E.\u0275fac=function(r){return new(r||E)(D.LFG(I.w),D.LFG(K.g))},E.\u0275prov=D.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()}}]);
//# sourceMappingURL=common.js.map