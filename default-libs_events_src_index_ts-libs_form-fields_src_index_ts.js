(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-libs_events_src_index_ts-libs_form-fields_src_index_ts"],{7141:(e,t,n)=>{"use strict";n.d(t,{ym:()=>r.y,rq:()=>i.rq,r7:()=>m,ry:()=>i.ry,Vh:()=>i.Vh,eJ:()=>i.eJ}),n(8223),n(9720);var r=n(9005),i=n(3499),s=n(6073),o=n(6925),a=n(1948),u=n(5090),c=n(6280),l=n(847),d=n(8774),p=n(804);const f=e=>{var t;return(null===(t=e.parent)||void 0===t?void 0:t.get("date"))&&(0,d.Z)(new Date,(0,p.Z)(e.parent.get("date").value,e.value))?{duration:!0}:null};function m(e){var t,n,r;const i=new s.cw({id:new s.NI(e.id),host:new s.NI(e.host||"",[s.kI.required]),organiser:new s.NI(e.organiser||{},[s.kI.required]),creator:new s.NI(e.creator,[s.kI.required]),calendar:new s.NI(e.calendar),attendees:new s.NI(e.attendees||[]),resources:new s.NI(e.resources||[]),title:new s.NI(e.title,[s.kI.required]),body:new s.NI(e.body),private:new s.NI(e.private),date:new s.NI(e.date,[s.kI.required]),duration:new s.NI(e.duration,[f]),all_day:new s.NI(e.all_day),recurring:new s.NI(e.recurring),recurrence:new s.NI(e.recurrence),recurring_master_id:new s.NI(e.recurring_master_id),master:new s.NI(e.master),attachments:new s.NI(e.attachments),catering:new s.NI((null===(t=e.extension_data)||void 0===t?void 0:t.catering)||[]),visitor_type:new s.NI(null===(n=e.extension_data)||void 0===n?void 0:n.visitor_type),location:new s.NI(e.location),needs_space:new s.NI(!0),needs_parking:new s.NI((null===(r=e.extension_data)||void 0===r?void 0:r.needs_parking)||!1),system:new s.NI(e.system)});return i.get("organiser").valueChanges.subscribe(e=>i.controls.host.setValue(null==e?void 0:e.email)),i.get("resources").valueChanges.subscribe(e=>i.controls.system.setValue(e.length?e[0]:null)),e.id&&(i.get("host").disable(),i.get("organiser").disable()),"started"===e.state&&i.get("date").disable(),i}n(391),(0,o.Z)(function(e,t){(0,c.Z)(2,arguments);var n=(0,u.Z)(e),r=(0,a.Z)(t);return n.setMinutes(r),n}((0,l.Z)(new Date,6),0),{days:-1}),n(1496)},3499:(e,t,n)=>{"use strict";n.d(t,{u$:()=>c,Vh:()=>l,eJ:()=>d,ry:()=>p,rq:()=>f});var r=n(6817),i=n(9996),s=n(2775),o=n(7271),a=n(9005);const u="/api/staff/v1/events";function c(e){const t=(0,s.U)(e);return(0,r.U2M)(`${u}${t?"?"+t:""}`).pipe((0,i.U)(e=>e.map(e=>new a.y(e))))}function l(e,t={}){const n=(0,s.U)(t);return(0,r.U2M)(`${u}/${encodeURIComponent(e)}${n?"?"+n:""}`).pipe((0,i.U)(e=>new a.y(e)))}function d(e,t,n={},o="patch"){const c=(0,s.U)(n);return("patch"===o?r.r$K:r.gzd)(`${u}/${encodeURIComponent(e)}${c?"?"+c:""}`,"patch"===o?t:new a.y(t).toJSON()).pipe((0,i.U)(e=>new a.y(e)))}const p=(e,t)=>{var n;return null===(n=e)||void 0===n||delete n.status,e.id?d(e.id,e,t):function(e){return(0,r.v_Q)(`${u}`,new a.y(e).toJSON()).pipe((0,i.U)(e=>new a.y(e)))}(e)};function f(e,t,n,a={}){const c=(0,s.U)(Object.assign(Object.assign({},a),{state:n}));return(0,r.v_Q)(`${u}/${encodeURIComponent(e)}/guests/${t}/checkin${c?"?"+c:""}`,"").pipe((0,i.U)(e=>new o.OO(e)))}},7341:(e,t,n)=>{"use strict";n.d(t,{W9:()=>f});var r=n(1511),i=n(6073),s=n(6283),o=n(6756),a=n(4786),u=n(84),c=n(8012),l=n(2619);n(1548),n(5135),n(7388),n(5445),n(8223),n(4441),n(5884),n(5090),n(6280),n(999),n(4941),n(8774),n(205),n(8125),n(804),n(5980),n(1522),n(3530),n(4587),n(4608),n(3881),n(5969);var d=n(6828);n(5842),n(33);var p=n(9236);let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.ez,i.u5,i.UX,s.lN,o.c,a.LD,u.Bb,d.AV,p.p9,c.Kk]]}),e})()},5135:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var r=n(2619),i=n(6073),s=n(5980),o=n(1548);let a=(()=>{class e{constructor(){this.step=1,this.max=10,this.min=0}add(){this.value||(this.value=this.min||0),this.value+=this.ctrl_key?100*this.step:this.shift_key?10*this.step:this.step||1,this.value>this.max&&(this.value=this.max||10),this.setValue(this.value)}remove(){this.value||(this.value=this.min||0),this.value-=this.ctrl_key?100*this.step:this.shift_key?10*this.step:this.step||1,this.value<this.min&&(this.value=this.min||0),this.setValue(this.value)}setValue(e){this.value=e,this._onChange&&this._onChange(e)}writeValue(e){this.value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["a-counter"]],inputs:{step:"step",max:"max",min:"min",render_fn:"render_fn"},features:[r._Bn([{provide:i.JU,useExisting:(0,r.Gpc)(()=>e),multi:!0}])],decls:9,vars:3,consts:[["counter","",1,"flex","items-center","text-base",3,"keydown.shift","keydown.control","keydown.meta","keyup.shift","keyup.control","keyup.meta"],["mat-icon-button","","name","remove","type","button",3,"disabled","click"],["value","",1,"p-1","text-center"],["mat-icon-button","","name","add","type","button",3,"disabled","click"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.NdJ("keydown.shift",function(){return t.shift_key=!0},!1,r.Jf7)("keydown.control",function(){return t.ctrl_key=!0},!1,r.Jf7)("keydown.meta",function(){return t.ctrl_key=!0},!1,r.Jf7)("keyup.shift",function(){return t.shift_key=!1},!1,r.Jf7)("keyup.control",function(){return t.ctrl_key=!1},!1,r.Jf7)("keyup.meta",function(){return t.ctrl_key=!1},!1,r.Jf7),r.TgZ(1,"button",1),r.NdJ("click",function(){return t.remove()}),r.TgZ(2,"app-icon"),r._uU(3,"remove"),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r._uU(5),r.qZA(),r.TgZ(6,"button",3),r.NdJ("click",function(){return t.add()}),r.TgZ(7,"app-icon"),r._uU(8,"add"),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(1),r.Q6J("disabled",!t.value||t.value===t.min),r.xp6(4),r.Oqu((t.render_fn?t.render_fn(t.value):t.value)||"0"),r.xp6(1),r.Q6J("disabled",t.value===t.max))},directives:[s.lW,o.o],styles:["[value][_ngcontent-%COMP%]{min-width:3em}"]}),e})()},7388:(e,t,n)=>{"use strict";n.d(t,{Q:()=>q});var r=n(2619),i=n(6073),s=n(1522),o=n(1948),a=n(3975),u=n(6280),c=n(5090),l=n(7212),d=n(9477);function p(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=(0,c.Z)(e);if(!(0,l.Z)(n))throw new RangeError("Invalid time value");var r=t||{},i=null==r.format?"extended":String(r.format),s=null==r.representation?"complete":String(r.representation);if("extended"!==i&&"basic"!==i)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==s&&"time"!==s&&"complete"!==s)throw new RangeError("representation must be 'date', 'time', or 'complete'");var o="",a="",u="extended"===i?"-":"",p="extended"===i?":":"";if("time"!==s){var f=(0,d.Z)(n.getDate(),2),m=(0,d.Z)(n.getMonth()+1,2),h=(0,d.Z)(n.getFullYear(),4);o="".concat(h).concat(u).concat(m).concat(u).concat(f)}if("date"!==s){var g=n.getTimezoneOffset();if(0!==g){var v=Math.abs(g),_=(0,d.Z)(Math.floor(v/60),2),Z=(0,d.Z)(v%60,2),w=g<0?"+":"-";a="".concat(w).concat(_,":").concat(Z)}else a="Z";var x=(0,d.Z)(n.getHours(),2),y=(0,d.Z)(n.getMinutes(),2),b=(0,d.Z)(n.getSeconds(),2),q=""===o?"":"T",A=[x,y,b].join(p);o="".concat(o).concat(q).concat(A).concat(a)}return o}var f=n(4441),m=n(205),h=n(8125),g=n(5884),v=n(6488),_=n(6283),Z=n(6756),w=n(5812);const x=["*"];let y=(()=>{class e extends s.LF{format(e,t){return(0,f.Z)(e,"input"===t?"MMMM d, yyyy":"MMM yyyy")}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=r.n5z(e)))(n||e)}}(),e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();const b={parse:{dateInput:"LL"},display:{dateInput:"input",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let q=(()=>{class e extends v.K{constructor(){super(...arguments),this._from=(new Date).valueOf(),this.position="right",this.offset="bottom"}get from(){return new Date(this._from)||(0,m.Z)(new Date)}get until(){return new Date(this._to)||function(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(t);return(0,a.Z)(e,12*n)}((0,h.Z)(new Date),1)}get date_string(){return(0,f.Z)(new Date(this.date),"DD MMM YYYY")}ngOnInit(){this.date=(new Date).toISOString()}setValue(e){const t=new Date(this.date);let n=(0,g.Z)(e,{hours:t.getHours(),minutes:t.getMinutes()}).valueOf();n<this.from.valueOf()&&(n=this.from.valueOf()),this.date=p(n||new Date),this._onChange&&this._onChange(n),this.show_tooltip=!1}writeValue(e){this.date=p(e||new Date),this.show_tooltip=!1}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}setDisabledState(e){this.disabled=e}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["a-date-field"]],inputs:{_from:["from","_from"],_to:["to","_to"],position:"position",offset:"offset",disabled:"disabled"},features:[r._Bn([{provide:s._A,useClass:y},{provide:s.sG,useValue:b},{provide:i.JU,useExisting:(0,r.Gpc)(()=>e),multi:!0}]),r.qOj],ngContentSelectors:x,decls:7,vars:6,consts:[["appearance","outline","overlay","",3,"click"],["matInput","",3,"ngModel","disabled","min","max","matDatepicker","ngModelChange"],["matSuffix","",3,"for"],["picker",""]],template:function(e,t){if(1&e){const e=r.EpF();r.F$t(),r.TgZ(0,"mat-form-field",0),r.NdJ("click",function(){return r.CHM(e),r.MAs(4).open()}),r.TgZ(1,"input",1),r.NdJ("ngModelChange",function(e){return t.setValue(e)}),r.qZA(),r._UZ(2,"mat-datepicker-toggle",2),r._UZ(3,"mat-datepicker",null,3),r.TgZ(5,"mat-error"),r.Hsn(6),r.qZA(),r.qZA()}if(2&e){const e=r.MAs(4);r.xp6(1),r.Q6J("ngModel",t.date)("disabled",t.disabled)("min",t.from)("max",t.until)("matDatepicker",e),r.xp6(1),r.Q6J("for",e)}},directives:[_.KE,Z.Nt,i.Fj,w.hl,i.JJ,i.On,w.nW,_.R9,w.Mq,_.TO],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})()},5445:(e,t,n)=>{"use strict";n.d(t,{B:()=>h});var r=n(2619),i=n(6073),s=n(672),o=["years","months","weeks","days","hours","minutes","seconds"];function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=t.format||o,r=t.locale||s.Z,i=t.zero||!1,a=t.delimiter||" ",u=n.reduce(function(t,n){var s="x".concat(n.replace(/(^.)/,function(e){return e.toUpperCase()}));return"number"==typeof e[n]&&(i||e[n])?t.concat(r.formatDistance(s,e[n])):t},[]).join(a);return u}var u=n(4312),c=n(6283),l=n(4786),d=n(1511),p=n(1522);function f(e,t){if(1&e&&(r.TgZ(0,"mat-option",5),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.name," ")}}const m=["*"];let h=(()=>{class e{constructor(){this.max=240,this.min=30,this.step=15,this.specialPreprops=[],this.duration=60}ngOnInit(){this.duration_options=this.generateDurationOptions(this.max,this.min,this.step)}ngOnChanges(e){(e.max||e.min||e.step||e.time)&&(this.duration_options=this.generateDurationOptions(this.max,this.min,this.step))}setValue(e){this.duration=e,this._onChange&&this._onChange(+e)}writeValue(e){this.duration=e}setDisabledState(e){this.disabled=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}generateDurationOptions(e,t,n){const r=[];let i=t;const s=this.time?u(this.time):null;for(const o of this.specialPreprops)r.push({id:o,name:s?`${s.add(o,"m").format("h:mm A")} (${a({hours:Math.floor(o/60),minutes:o%60})})`:`${a({hours:Math.floor(o/60),minutes:o%60})}`});for(;i<=e;)r.push({id:i,name:s?`${s.add(i,"m").format("h:mm A")} (${a({hours:Math.floor(i/60),minutes:i%60})})`:`${a({hours:Math.floor(i/60),minutes:i%60})}`}),i+=n;return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["a-duration-field"]],inputs:{max:"max",min:"min",step:"step",time:"time",disabled:"disabled",specialPreprops:"specialPreprops"},features:[r._Bn([{provide:i.JU,useExisting:(0,r.Gpc)(()=>e),multi:!0}]),r.TTD],ngContentSelectors:m,decls:7,vars:5,consts:[[1,"duration-field"],["appearance","outline"],[3,"value","disabled","placeholder","valueChange"],["select",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(r.F$t(),r.TgZ(0,"div",0),r.TgZ(1,"mat-form-field",1),r.TgZ(2,"mat-select",2,3),r.NdJ("valueChange",function(e){return t.setValue(e)}),r.YNc(4,f,2,2,"mat-option",4),r.qZA(),r.TgZ(5,"mat-error"),r.Hsn(6),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.uIk("disabled",t.disabled),r.xp6(2),r.Q6J("value",t.duration)("disabled",t.disabled)("placeholder",t.duration+" minutes"),r.xp6(2),r.Q6J("ngForOf",t.duration_options))},directives:[c.KE,l.gD,d.sg,c.TO,p.ey],styles:["[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})()},3881:(e,t,n)=>{"use strict";n.d(t,{d:()=>I});var r=n(2619),i=n(6073),s=n(5959),o=n(878),a=n(3148),u=n(7701),c=n(8720),l=n(4689),d=n(7727),p=n(9996),f=n(8223),m=n(4587),h=n(6283),g=n(6756),v=n(5205),_=n(84),Z=n(1548),w=n(1511),x=n(7806),y=n(1522);const b=["input"];function q(e,t){1&e&&r._UZ(0,"mat-spinner",11)}function A(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"mat-option",12),r.NdJ("click",function(){const t=r.CHM(e).$implicit,n=r.oxw();return n.setValue(t),n.blurInput()}),r.TgZ(1,"div",13),r._uU(2),r.qZA(),r.TgZ(3,"div",14),r._uU(4),r.qZA(),r.qZA()}if(2&e){const e=t.$implicit;r.xp6(2),r.Oqu(e.name),r.xp6(2),r.hij(" ",e.email," ")}}function T(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"mat-option",15),r.TgZ(1,"div",16),r.NdJ("mousedown",function(e){return e.stopPropagation(),e.preventDefault()})("touchstart",function(e){return e.stopPropagation(),e.preventDefault()})("click",function(t){r.CHM(e);const n=r.oxw();return n.setValue(n.search_str),t.stopPropagation(),t.preventDefault()}),r.TgZ(2,"div",17),r._uU(3),r.qZA(),r.qZA(),r.qZA()}if(2&e){const e=r.oxw();r.xp6(3),r.hij(' Add external attendee "',e.search_str,'" ')}}function U(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"mat-option",18),r.NdJ("click",function(){return r.CHM(e),r.oxw().empty_fn()}),r._uU(1),r.qZA()}if(2&e){const e=r.oxw();r.Q6J("disabled",!e.empty_fn),r.xp6(1),r.AsE(" ",e.search_str?"No users found.":""," ",e.error," ")}}let I=(()=>{class e extends f.KG{constructor(){super(...arguments),this.error="",this.query_fn=e=>(0,m.VE)(e),this.search$=new s.xQ,this.search_results$=this.search$.pipe((0,u.b)(400),(0,c.x)(),(0,l.w)(e=>(this.loading=!0,this.options&&this.options.length>0?(0,o.of)(this.options):e.length>=3?this.guests?(0,a.D)([(0,m.VE)(e),(0,m.jf)(e)]):this.query_fn(e):(0,o.of)([]))),(0,d.K)(e=>(0,o.of)([])),(0,p.U)(e=>{this.loading=!1,e=(0,f.xH)(e);const t=(this.search_str||"").toLowerCase();return e.filter(e=>!this.filter||this.filter(e,t))})),this.cancelReset=()=>this.clearTimeout("reset"),this.blurInput=()=>{this.timeout("blur",()=>{var e,t;return null===(t=null===(e=this._input_el)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.blur()})}}ngOnInit(){this.subscription("search_results",this.search_results$.subscribe(e=>this.user_list=e))}resetSearchString(){this.timeout("reset",()=>{var e;return this.search_str=(null===(e=this.active_user)||void 0===e?void 0:e.name)||""},100)}setValue(e,t){"string"==typeof e&&e===this.search_str&&(e=new m.n5({name:(this.search_str||t||"").split("@")[0],email:this.search_str||t||""})),e instanceof m.n5&&(this.active_user=e,this._onChange&&this._onChange(e),this.resetSearchString())}writeValue(e){this.active_user=e,this.resetSearchString()}setDisabledState(e){this.disabled=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["a-user-search-field"]],viewQuery:function(e,t){if(1&e&&r.Gf(b,5,r.SBq),2&e){let e;r.iGM(e=r.CRH())&&(t._input_el=e.first)}},inputs:{disabled:"disabled",placeholder:"placeholder",options:"options",guests:"guests",error:"error",validate:"validate",empty_fn:"empty_fn",filter:"filter",query_fn:"query_fn"},features:[r._Bn([{provide:i.JU,useExisting:(0,r.Gpc)(()=>e),multi:!0}]),r.qOj],decls:12,vars:8,consts:[["form-field","",1,"user-search-field","text-black"],["overlay","","appearance","outline"],["matInput","","keyboard","","name","user-search",3,"ngModel","disabled","placeholder","matAutocomplete","ngModelChange","keyup.enter","blur","focus"],["input",""],["matPrefix","",1,"text-2xl","relative"],["matSuffix","","diameter","16",4,"ngIf"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"click",4,"ngFor","ngForOf"],["class","relative pointer-events-none",4,"ngIf"],[3,"disabled","click",4,"ngIf"],["matSuffix","","diameter","16"],[3,"click"],[1,"leading-tight"],[1,"text-xs","text-black","opacity-60"],[1,"relative","pointer-events-none"],[1,"absolute","inset-0","px-4","pointer-events-auto",3,"mousedown","touchstart","click"],[1,"pointer-events-none"],[3,"disabled","click"]],template:function(e,t){if(1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"mat-form-field",1),r.TgZ(2,"input",2,3),r.NdJ("ngModelChange",function(e){return t.search_str=e})("ngModelChange",function(e){return t.search$.next(e||"")})("keyup.enter",function(){return t.validate&&t.validate(t.search_str)?t.setValue(t.search_str):""})("blur",function(){return t.resetSearchString()})("focus",function(){return t.cancelReset()}),r.qZA(),r.TgZ(4,"app-icon",4),r._uU(5,"search"),r.qZA(),r.YNc(6,q,1,0,"mat-spinner",5),r.qZA(),r.TgZ(7,"mat-autocomplete",6,7),r.NdJ("optionSelected",function(e){return t.setValue(e.option.value)}),r.YNc(9,A,5,2,"mat-option",8),r.YNc(10,T,4,1,"mat-option",9),r.YNc(11,U,2,3,"mat-option",10),r.qZA(),r.qZA()),2&e){const e=r.MAs(8);r.xp6(2),r.Q6J("ngModel",t.search_str)("disabled",t.disabled)("placeholder",t.placeholder||"Search for user...")("matAutocomplete",e),r.xp6(4),r.Q6J("ngIf",t.loading),r.xp6(3),r.Q6J("ngForOf",t.user_list),r.xp6(1),r.Q6J("ngIf",t.search_str&&t.validate&&t.validate(t.search_str)),r.xp6(1),r.Q6J("ngIf",!(null!=t.user_list&&t.user_list.length)&&(t.search_str||t.error))}},directives:[h.KE,g.Nt,v.U,i.Fj,_.ZL,i.JJ,i.On,Z.o,h.qo,w.O5,_.XC,w.sg,x.$g,h.R9,y.ey],styles:["[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}app-icon[_ngcontent-%COMP%]{top:.15em;left:-.15em}"]}),e})()},4587:(e,t,n)=>{"use strict";n.d(t,{Y:()=>k,rW:()=>d,U9:()=>a.U9,n5:()=>o.n5,en:()=>a.en,n2:()=>Y,jf:()=>$,VE:()=>S,pP:()=>E,w0:()=>Q}),n(8012);var r=n(2619),i=n(4608),s=n(8223),o=n(7271),a=n(1167);function u(e,t){if(1&e&&(r.TgZ(0,"main",6),r._UZ(1,"user-form",7),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("form",e.form)}}function c(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"footer",8),r.TgZ(1,"button",9),r._uU(2,"Cancel"),r.qZA(),r.TgZ(3,"button",10),r.NdJ("click",function(){return r.CHM(e),r.oxw().saveChanges()}),r._uU(4,"Save"),r.qZA(),r.qZA()}}function l(e,t){1&e&&(r.TgZ(0,"main",11),r._UZ(1,"mat-spinner",12),r.TgZ(2,"p"),r._uU(3,"Saving attendee..."),r.qZA(),r.qZA())}let d=(()=>{class e extends s.KG{constructor(e){super(),this._data=e,this.event=new r.vpe}ngOnInit(){this.user=this._data.user||{},this.form=(0,a.HO)(this.user)}saveChanges(){if(this.form.markAllAsTouched(),this.form.valid){const e=new o.n5(Object.assign(Object.assign({},this.form.value),{type:"external"}));this.event.emit({reason:"done",metadata:e})}}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(i.WI))},e.\u0275cmp=r.Xpm({type:e,selectors:[["new-user-modal"]],outputs:{event:"event"},features:[r.qOj],decls:11,vars:4,consts:[["mat-dialog-title","",1,"heading"],[1,"flex-1"],["mat-icon-button","","mat-dialog-close",""],["class","flex flex-col items-center w-full p-2",4,"ngIf","ngIfElse"],["class","flex items-center justify-center w-full p-2 border-t border-gray-300 space-x-2",4,"ngIf"],["load_state",""],[1,"flex","flex-col","items-center","w-full","p-2"],[3,"form"],[1,"flex","items-center","justify-center","w-full","p-2","border-t","border-gray-300","space-x-2"],["mat-button","","mat-dialog-close","",1,"inverse"],["mat-button","",3,"click"],[1,"flex","flex-col","items-center","w-full","p-2","space-y-2"],["diameter","32"]],template:function(e,t){if(1&e&&(r.TgZ(0,"header"),r.TgZ(1,"div",0),r._uU(2),r.qZA(),r._UZ(3,"div",1),r.TgZ(4,"button",2),r.TgZ(5,"app-icon"),r._uU(6,"close"),r.qZA(),r.qZA(),r.qZA(),r.YNc(7,u,2,1,"main",3),r.YNc(8,c,5,0,"footer",4),r.YNc(9,l,4,0,"ng-template",null,5,r.W1O)),2&e){const e=r.MAs(10);r.xp6(2),r.hij(" ",null!=t.user&&t.user.id?"Edit":"Add"," External Attendee "),r.xp6(5),r.Q6J("ngIf",!t.loading)("ngIfElse",e),r.xp6(1),r.Q6J("ngIf",!t.loading)}},styles:["main[_ngcontent-%COMP%]{min-height:20em!important;width:100%}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:8em}"]}),e})();var p=n(1511),f=n(6073),m=n(6283),h=n(6756),g=n(9236);function v(e,t){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"label",4),r._uU(2," Name"),r.TgZ(3,"span"),r._uU(4,"*"),r.qZA(),r._uU(5,": "),r.qZA(),r.TgZ(6,"mat-form-field",5),r._UZ(7,"input",6),r.TgZ(8,"mat-error"),r._uU(9,"Name is required"),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw(2);r.xp6(1),r.ekj("error",e.hasError("name"))}}function _(e,t){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"label",7),r._uU(2," Email"),r.TgZ(3,"span"),r._uU(4,"*"),r.qZA(),r._uU(5,": "),r.qZA(),r.TgZ(6,"mat-form-field",5),r._UZ(7,"input",8),r.TgZ(8,"mat-error"),r._uU(9,"A valid email is required"),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw(2);r.xp6(1),r.ekj("error",e.hasError("email"))}}function Z(e,t){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"label",9),r._uU(2," Organisation"),r.TgZ(3,"span"),r._uU(4,"*"),r.qZA(),r._uU(5,": "),r.qZA(),r.TgZ(6,"mat-form-field",5),r._UZ(7,"input",10),r.TgZ(8,"mat-error"),r._uU(9,"Organisation is required"),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw(2);r.xp6(1),r.ekj("error",e.hasError("organisation"))}}function w(e,t){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"label",11),r._uU(2," Phone: "),r.qZA(),r.TgZ(3,"mat-form-field",5),r._UZ(4,"input",12),r.TgZ(5,"mat-error"),r._uU(6,"Phone format is invalid"),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw(2);r.xp6(1),r.ekj("error",e.hasError("phone"))}}function x(e,t){1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"mat-checkbox",13),r._uU(2," Assistance required "),r.qZA(),r.qZA())}function y(e,t){1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"mat-checkbox",14),r._uU(2," Visit expected "),r.qZA(),r.qZA())}function b(e,t){if(1&e&&(r.TgZ(0,"form",1),r.YNc(1,v,10,2,"div",2),r.YNc(2,_,10,2,"div",2),r.YNc(3,Z,10,2,"div",2),r.YNc(4,w,7,2,"div",2),r.YNc(5,x,3,0,"div",2),r.YNc(6,y,3,0,"div",2),r.qZA()),2&e){const e=r.oxw();r.Q6J("formGroup",e.form),r.xp6(1),r.Q6J("ngIf",e.form.controls.name),r.xp6(1),r.Q6J("ngIf",e.form.controls.email),r.xp6(1),r.Q6J("ngIf",e.form.controls.organisation),r.xp6(1),r.Q6J("ngIf",e.form.controls.phone),r.xp6(1),r.Q6J("ngIf",e.form.controls.assistance_required),r.xp6(1),r.Q6J("ngIf",e.form.controls.visit_expected)}}let q=(()=>{class e{hasError(e){return this.form.controls[e].invalid&&this.form.controls[e].touched}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["user-form"]],inputs:{form:"form"},decls:1,vars:1,consts:[["user-form","",3,"formGroup",4,"ngIf"],["user-form","",3,"formGroup"],["class","field",4,"ngIf"],[1,"field"],["for","name"],["appearance","outline"],["matInput","","name","name","placeholder","Name","formControlName","name"],["for","email"],["matInput","","name","email","placeholder","Email Address","formControlName","email"],["for","org"],["matInput","","name","org","placeholder","Organisation","formControlName","organisation"],["for","phone"],["matInput","","name","phone","type","tel","placeholder","Phone","formControlName","phone"],["name","assistance-required","color","primary","formControlName","assistance_required"],["name","visit-expected","color","primary","formControlName","visit_expected"]],template:function(e,t){1&e&&r.YNc(0,b,7,7,"form",0),2&e&&r.Q6J("ngIf",t.form)},directives:[p.O5,f._Y,f.JL,f.sg,m.KE,h.Nt,f.Fj,f.JJ,f.u,m.TO,g.oG],styles:[".field[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})();var A=n(5980),T=n(1548),U=n(7806);r.B6R(d,[i.uh,A.lW,i.ZT,T.o,p.O5,q,U.$g],[]);var I=n(4914);class k{constructor(e={}){this.type=e.type||e.location||"other",this.position=e.position||e.map_id||{x:e.x/e.map_width||0,y:e.y/e.map_height||0},this.variance=e.variance||0,this.last_seen=e.last_seen||(0,I.Z)(new Date),this.level=e.level,this.building=e.building,this.at_location=!!e.at_location,this.coordinates_from=e.coordinates_from||"top-left"}}var O=n(6817),C=n(9996),N=n(9005),M=n(2775);const J="/api/staff/v1/guests";function $(e){const t=(0,M.U)({q:e});return(0,O.U2M)(`${J}${e?"?"+t:""}`).pipe((0,C.U)(e=>e.map(e=>new o.OO(e))))}function E(e){return(0,O.U2M)(`${J}/${encodeURIComponent(e)}`).pipe((0,C.U)(e=>new o.OO(e)))}function Y(e){return(0,O.U2M)(`${J}/${encodeURIComponent(e)}/meetings`).pipe((0,C.U)(e=>e.map(e=>new N.y(e))))}const D="/api/staff/v1/people";function S(e){const t=(0,M.U)({q:e});return(0,O.U2M)(`${D}${e?"?"+t:""}`).pipe((0,C.U)(e=>e.map(e=>new o.mO(e))))}function Q(e){return(0,O.U2M)(`${D}/${encodeURIComponent(e)}`).pipe((0,C.U)(e=>new o.mO(e)))}}}]);
//# sourceMappingURL=default-libs_events_src_index_ts-libs_form-fields_src_index_ts.js.map