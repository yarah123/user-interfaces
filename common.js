"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{8676:(x,p,t)=>{t.d(p,{I:()=>B});var d=t(3070),v=t(9434),r=t(4549),i=t(2995),O=t(1810),K=t(9377),c=t(312),C=t(3200),E=t(4505),I=t(1942),L=t(7716),U=t(4350),g=t(9095),D=t(8759),P=t(9128),T=t(823),A=t(522),M=t(6942),n=t(7418),h=t(9676);let B=(()=>{class e extends r.KG{constructor(o){super(),this._settings=o,this._poll=new E.X(0),this._options=new E.X({start:Date.now()}),this._loading=new E.X(""),this._schedule=new E.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,I.H)(1e3).pipe((0,g.w)(_=>(0,v.yJ)()),(0,D.b)(_=>console.log("Calendars:",_)),(0,P.d)(1)),this.events=(0,L.aj)([this._options,this._poll]).pipe((0,T.b)(1e3),(0,A.zg)(([_])=>{this._loading.next("Loading schedule...");const a={period_start:(0,O.Z)((0,K.Z)(_.start)),period_end:(0,O.Z)((0,c.Z)((0,C.Z)(_.start),6))};return _.calendar&&(a.calendar=_.calendar),this._schedule.next(this._schedule.getValue().filter(s=>!(0,r.MZ)(1e3*a.period_start,1e3*a.period_end,s.date,s.date+60*s.duration*1e3))),(0,U.D)([this._settings.get("app.no_user_calendar")?(0,d.F2)({...a,type:"room"}).pipe((0,M.U)(s=>s.map(l=>(0,i.Yd)(l))),(0,n.K)(s=>[])):(0,i.u$)({...a}).pipe((0,n.K)(s=>[])),(0,d.F2)({...a,type:"desk"}).pipe((0,n.K)(s=>[])),(0,d.F2)({...a,type:"parking"}).pipe((0,n.K)(s=>[]))])}),(0,M.U)(([_,a])=>{const s=[...this._schedule.getValue(),..._,...a.filter(l=>"declined"!==l.status)].sort((l,W)=>l.date-W.date);return this._schedule.next((0,r.Tw)(s,"id")),s}),(0,n.K)(_=>[]),(0,D.b)(_=>this._loading.next("")),(0,P.d)(1))}startPolling(o=15e3){this.interval("poll",()=>this._poll.next(Date.now()),o)}stopPolling(){this.clearInterval("poll")}setOptions(o){this._options.next({...this._options.getValue(),...o})}}return e.\u0275fac=function(o){return new(o||e)(h.LFG(r.gb))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=common.js.map