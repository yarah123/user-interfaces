(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[129],{7932:(k,j,s)=>{"use strict";s.d(j,{ym:()=>J.y,rq:()=>U.rq,r7:()=>T,ry:()=>U.ry,Vh:()=>U.Vh,eJ:()=>U.eJ}),s(7331),s(8539),s(6217);var J=s(3902),U=s(4211),f=s(4751),L=s(7776),t=s(207),A=s(4513),x=s(3463),R=s(2743),H=s(7920),B=s(4547);const w=_=>{var c;return(null===(c=_.parent)||void 0===c?void 0:c.get("date"))&&(0,H.Z)(new Date,(0,B.Z)(_.parent.get("date").value,_.value))?{duration:!0}:null};function T(_){var c,r,l;const i=new f.cw({id:new f.NI(_.id),host:new f.NI(_.host||"",[f.kI.required]),organiser:new f.NI(_.organiser||{},[f.kI.required]),creator:new f.NI(_.creator,[f.kI.required]),calendar:new f.NI(_.calendar),attendees:new f.NI(_.attendees||[]),resources:new f.NI(_.resources||[]),title:new f.NI(_.title,[f.kI.required]),body:new f.NI(_.body),private:new f.NI(_.private),date:new f.NI(_.date,[f.kI.required]),duration:new f.NI(_.duration,[w]),all_day:new f.NI(_.all_day),recurring:new f.NI(_.recurring),recurrence:new f.NI(_.recurrence),recurring_master_id:new f.NI(_.recurring_master_id),master:new f.NI(_.master),attachments:new f.NI(_.attachments),catering:new f.NI((null===(c=_.extension_data)||void 0===c?void 0:c.catering)||[]),visitor_type:new f.NI(null===(r=_.extension_data)||void 0===r?void 0:r.visitor_type),location:new f.NI(_.location),needs_space:new f.NI(!0),needs_parking:new f.NI((null===(l=_.extension_data)||void 0===l?void 0:l.needs_parking)||!1),system:new f.NI(_.system)});return i.get("organiser").valueChanges.subscribe(o=>i.controls.host.setValue(null==o?void 0:o.email)),i.get("resources").valueChanges.subscribe(o=>i.controls.system.setValue(o.length?o[0]:null)),_.id&&(i.get("host").disable(),i.get("organiser").disable()),"started"===_.state&&i.get("date").disable(),i}s(8025),(0,L.Z)(function(_,c){(0,x.Z)(2,arguments);var r=(0,A.Z)(_),l=(0,t.Z)(c);return r.setMinutes(l),r}((0,R.Z)(new Date,6),0),{days:-1})},4211:(k,j,s)=>{"use strict";s.d(j,{u$:()=>L,Vh:()=>t,eJ:()=>x,ry:()=>V,rq:()=>y});var e=s(4286),n=s(8002),$=s(5038),J=s(5197),U=s(3902);const f="/api/staff/v1/events";function L(O){const Z=(0,$.U)(O);return(0,e.U2M)(`${f}${Z?"?"+Z:""}`).pipe((0,n.U)(T=>T.map(D=>new U.y(D))))}function t(O,Z={}){const T=(0,$.U)(Z);return(0,e.U2M)(`${f}/${encodeURIComponent(O)}${T?"?"+T:""}`).pipe((0,n.U)(D=>new U.y(D)))}function x(O,Z,T={},D="patch"){const P=(0,$.U)(T);return("patch"===D?e.r$K:e.gzd)(`${f}/${encodeURIComponent(O)}${P?"?"+P:""}`,"patch"===D?Z:new U.y(Z).toJSON()).pipe((0,n.U)(F=>new U.y(F)))}const V=(O,Z)=>{var T;return null===(T=O)||void 0===T||delete T.status,O.id?x(O.id,O,Z):function(O){return(0,e.v_Q)(`${f}`,new U.y(O).toJSON()).pipe((0,n.U)(Z=>new U.y(Z)))}(O)};function y(O,Z,T,D={}){const P=(0,$.U)(Object.assign(Object.assign({},D),{state:T}));return(0,e.v_Q)(`${f}/${encodeURIComponent(O)}/guests/${Z}/checkin${P?"?"+P:""}`,"").pipe((0,n.U)(F=>new J.OO(F)))}},146:(k,j,s)=>{"use strict";s.d(j,{W9:()=>G});var e=s(2057),n=s(4751),$=s(6833),J=s(6113),U=s(1260),f=s(296),L=s(6504),t=s(292);s(5306),s(2793),s(5043),s(7163),s(2708),s(7331),s(8049),s(3702),s(592),s(9697),s(2895),s(9685);var E=s(4855);s(3328),s(3202);var Q=s(9713);let G=(()=>{class C{}return C.\u0275fac=function(a){return new(a||C)},C.\u0275mod=t.oAB({type:C}),C.\u0275inj=t.cJS({imports:[[e.ez,n.u5,n.UX,$.lN,J.c,U.LD,f.Bb,E.AV,Q.p9,L.Kk]]}),C})()},2793:(k,j,s)=>{"use strict";s.d(j,{R:()=>U});var e=s(292),n=s(4751),$=s(2895),J=s(5306);let U=(()=>{class f{constructor(){this.step=1,this.max=10,this.min=0}add(){this.value||(this.value=this.min||0),this.value+=this.ctrl_key?100*this.step:this.shift_key?10*this.step:this.step||1,this.value>this.max&&(this.value=this.max||10),this.setValue(this.value)}remove(){this.value||(this.value=this.min||0),this.value-=this.ctrl_key?100*this.step:this.shift_key?10*this.step:this.step||1,this.value<this.min&&(this.value=this.min||0),this.setValue(this.value)}setValue(t){this.value=t,this._onChange&&this._onChange(t)}writeValue(t){this.value=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouch=t}}return f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["a-counter"]],inputs:{step:"step",max:"max",min:"min",render_fn:"render_fn"},features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>f),multi:!0}])],decls:9,vars:3,consts:[["counter","",1,"flex","items-center","text-base",3,"keydown.shift","keydown.control","keydown.meta","keyup.shift","keyup.control","keyup.meta"],["mat-icon-button","","name","remove","type","button",3,"disabled","click"],["value","",1,"p-1","text-center"],["mat-icon-button","","name","add","type","button",3,"disabled","click"]],template:function(t,A){1&t&&(e.TgZ(0,"div",0),e.NdJ("keydown.shift",function(){return A.shift_key=!0},!1,e.Jf7)("keydown.control",function(){return A.ctrl_key=!0},!1,e.Jf7)("keydown.meta",function(){return A.ctrl_key=!0},!1,e.Jf7)("keyup.shift",function(){return A.shift_key=!1},!1,e.Jf7)("keyup.control",function(){return A.ctrl_key=!1},!1,e.Jf7)("keyup.meta",function(){return A.ctrl_key=!1},!1,e.Jf7),e.TgZ(1,"button",1),e.NdJ("click",function(){return A.remove()}),e.TgZ(2,"app-icon"),e._uU(3,"remove"),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e._uU(5),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return A.add()}),e.TgZ(7,"app-icon"),e._uU(8,"add"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("disabled",!A.value||A.value===A.min),e.xp6(4),e.Oqu((A.render_fn?A.render_fn(A.value):A.value)||"0"),e.xp6(1),e.Q6J("disabled",A.value===A.max))},directives:[$.lW,J.o],styles:["[value][_ngcontent-%COMP%]{min-width:3em}"]}),f})()},5043:(k,j,s)=>{"use strict";s.d(j,{Q:()=>E});var e=s(292),n=s(4751),$=s(7935),J=s(207),U=s(8815),f=s(3463),t=s(4513),A=s(9282),x=s(1421);function V(N,_){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var c=(0,t.Z)(N);if(!(0,A.Z)(c))throw new RangeError("Invalid time value");var r=_||{},l=null==r.format?"extended":String(r.format),i=null==r.representation?"complete":String(r.representation);if("extended"!==l&&"basic"!==l)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==i&&"time"!==i&&"complete"!==i)throw new RangeError("representation must be 'date', 'time', or 'complete'");var o="",u="",m="extended"===l?"-":"",g="extended"===l?":":"";if("time"!==i){var I=(0,x.Z)(c.getDate(),2),b=(0,x.Z)(c.getMonth()+1,2),Y=(0,x.Z)(c.getFullYear(),4);o="".concat(Y).concat(m).concat(b).concat(m).concat(I)}if("date"!==i){var Q=c.getTimezoneOffset();if(0!==Q){var K=Math.abs(Q),G=(0,x.Z)(Math.floor(K/60),2),C=(0,x.Z)(K%60,2),S=Q<0?"+":"-";u="".concat(S).concat(G,":").concat(C)}else u="Z";var a=(0,x.Z)(c.getHours(),2),p=(0,x.Z)(c.getMinutes(),2),M=(0,x.Z)(c.getSeconds(),2),d=""===o?"":"T",v=[a,p,M].join(g);o="".concat(o).concat(d).concat(v).concat(u)}return o}var R=s(776),H=s(3257),B=s(2094),w=s(194),y=s(8939),O=s(6833),Z=s(6113),T=s(8110);const D=["*"];let P=(()=>{class N extends $.LF{format(c,r){return(0,R.Z)(c,"input"===r?"MMMM d, yyyy":"MMM yyyy")}}return N.\u0275fac=function(){let _;return function(r){return(_||(_=e.n5z(N)))(r||N)}}(),N.\u0275prov=e.Yz7({token:N,factory:N.\u0275fac}),N})();const F={parse:{dateInput:"LL"},display:{dateInput:"input",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let E=(()=>{class N extends y.K{constructor(){super(...arguments),this._from=(new Date).valueOf(),this.position="right",this.offset="bottom"}get from(){return new Date(this._from)||(0,H.Z)(new Date)}get until(){return new Date(this._to)||function(N,_){(0,f.Z)(2,arguments);var c=(0,J.Z)(_);return(0,U.Z)(N,12*c)}((0,B.Z)(new Date),1)}get date_string(){return(0,R.Z)(new Date(this.date),"DD MMM YYYY")}ngOnInit(){this.date=(new Date).toISOString()}setValue(c){const r=new Date(this.date);let l=(0,w.Z)(c,{hours:r.getHours(),minutes:r.getMinutes()}).valueOf();l<this.from.valueOf()&&(l=this.from.valueOf()),this.date=V(l||new Date),this._onChange&&this._onChange(l),this.show_tooltip=!1}writeValue(c){this.date=V(c||new Date),this.show_tooltip=!1}registerOnChange(c){this._onChange=c}registerOnTouched(c){this._onTouch=c}setDisabledState(c){this.disabled=c}}return N.\u0275fac=function(){let _;return function(r){return(_||(_=e.n5z(N)))(r||N)}}(),N.\u0275cmp=e.Xpm({type:N,selectors:[["a-date-field"]],inputs:{_from:["from","_from"],_to:["to","_to"],position:"position",offset:"offset",disabled:"disabled"},features:[e._Bn([{provide:$._A,useClass:P},{provide:$.sG,useValue:F},{provide:n.JU,useExisting:(0,e.Gpc)(()=>N),multi:!0}]),e.qOj],ngContentSelectors:D,decls:7,vars:6,consts:[["appearance","outline","overlay","",3,"click"],["matInput","",3,"ngModel","disabled","min","max","matDatepicker","ngModelChange"],["matSuffix","",3,"for"],["picker",""]],template:function(c,r){if(1&c){const l=e.EpF();e.F$t(),e.TgZ(0,"mat-form-field",0),e.NdJ("click",function(){return e.CHM(l),e.MAs(4).open()}),e.TgZ(1,"input",1),e.NdJ("ngModelChange",function(o){return r.setValue(o)}),e.qZA(),e._UZ(2,"mat-datepicker-toggle",2),e._UZ(3,"mat-datepicker",null,3),e.TgZ(5,"mat-error"),e.Hsn(6),e.qZA(),e.qZA()}if(2&c){const l=e.MAs(4);e.xp6(1),e.Q6J("ngModel",r.date)("disabled",r.disabled)("min",r.from)("max",r.until)("matDatepicker",l),e.xp6(1),e.Q6J("for",l)}},directives:[O.KE,Z.Nt,n.Fj,T.hl,n.JJ,n.On,T.nW,O.R9,T.Mq,O.TO],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),N})()},7163:(k,j,s)=>{"use strict";s.d(j,{B:()=>H});var e=s(292),n=s(4751),$=s(8919),J=["years","months","weeks","days","hours","minutes","seconds"];function U(B,w){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var y=(null==w?void 0:w.format)||J,O=(null==w?void 0:w.locale)||$.Z,Z=(null==w?void 0:w.zero)||!1,T=(null==w?void 0:w.delimiter)||" ",D=y.reduce(function(P,F){var E="x".concat(F.replace(/(^.)/,function(_){return _.toUpperCase()}));return"number"==typeof B[F]&&(Z||B[F])?P.concat(O.formatDistance(E,B[F])):P},[]).join(T);return D}var f=s(8873),L=s(6833),t=s(1260),A=s(2057),x=s(7935);function V(B,w){if(1&B&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&B){const y=w.$implicit;e.Q6J("value",y.id),e.xp6(1),e.hij(" ",y.name," ")}}const R=["*"];let H=(()=>{class B{constructor(){this.max=240,this.min=30,this.step=15,this.specialPreprops=[],this.duration=60}ngOnInit(){this.duration_options=this.generateDurationOptions(this.max,this.min,this.step)}ngOnChanges(y){(y.max||y.min||y.step||y.time)&&(this.duration_options=this.generateDurationOptions(this.max,this.min,this.step))}setValue(y){this.duration=y,this._onChange&&this._onChange(+y)}writeValue(y){this.duration=y}setDisabledState(y){this.disabled=y}registerOnChange(y){this._onChange=y}registerOnTouched(y){this._onTouch=y}generateDurationOptions(y,O,Z){const T=[];let D=O;const P=this.time?f(this.time):null;for(const F of this.specialPreprops)T.push({id:F,name:P?`${P.add(F,"m").format("h:mm A")} (${U({hours:Math.floor(F/60),minutes:F%60})})`:`${U({hours:Math.floor(F/60),minutes:F%60})}`});for(;D<=y;)T.push({id:D,name:P?`${P.add(D,"m").format("h:mm A")} (${U({hours:Math.floor(D/60),minutes:D%60})})`:`${U({hours:Math.floor(D/60),minutes:D%60})}`}),D+=Z;return T}}return B.\u0275fac=function(y){return new(y||B)},B.\u0275cmp=e.Xpm({type:B,selectors:[["a-duration-field"]],inputs:{max:"max",min:"min",step:"step",time:"time",disabled:"disabled",specialPreprops:"specialPreprops"},features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>B),multi:!0}]),e.TTD],ngContentSelectors:R,decls:7,vars:5,consts:[[1,"duration-field"],["appearance","outline"],[3,"value","disabled","placeholder","valueChange"],["select",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(y,O){1&y&&(e.F$t(),e.TgZ(0,"div",0),e.TgZ(1,"mat-form-field",1),e.TgZ(2,"mat-select",2,3),e.NdJ("valueChange",function(T){return O.setValue(T)}),e.YNc(4,V,2,2,"mat-option",4),e.qZA(),e.TgZ(5,"mat-error"),e.Hsn(6),e.qZA(),e.qZA(),e.qZA()),2&y&&(e.uIk("disabled",O.disabled),e.xp6(2),e.Q6J("value",O.duration)("disabled",O.disabled)("placeholder",O.duration+" minutes"),e.xp6(2),e.Q6J("ngForOf",O.duration_options))},directives:[L.KE,t.gD,A.sg,L.TO,x.ey],styles:["[_nghost-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),B})()},2708:(k,j,s)=>{"use strict";s.d(j,{N:()=>c});var e=s(292),n=s(4751),$=s(7331),J=s(4513),U=s(3463);function f(r){(0,U.Z)(1,arguments);var l=(0,J.Z)(r);return l.setSeconds(0,0),l}var L=s(776),t=s(194),A=s(5164),x=s(2297),V=s(7920),R=s(3257),H=s(2094),B=s(4547),w=s(6833),y=s(6113),O=s(2895),Z=s(5306),T=s(2057),D=s(1260),P=s(7935);const F=["select"];function E(r,l){if(1&r&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&r){const i=l.$implicit;e.Q6J("value",i.id),e.xp6(1),e.hij(" ",i.name," ")}}function N(r,l){if(1&r){const i=e.EpF();e.TgZ(0,"mat-form-field",5),e.TgZ(1,"mat-select",6,7),e.NdJ("valueChange",function(u){return e.CHM(i),e.oxw().setValue(u)}),e.YNc(3,E,2,2,"mat-option",8),e.qZA(),e.qZA()}if(2&r){const i=e.oxw();e.xp6(1),e.Q6J("value",i.time)("disabled",i.disabled),e.xp6(2),e.Q6J("ngForOf",i.time_options)}}const _=["*"];let c=(()=>{class r extends $.KG{constructor(){super(...arguments),this.step=15,this.no_past_times=!0,this.date=(new Date).valueOf(),this.time=(0,L.Z)(new Date,"HH:mm")}ngOnInit(){this.show_select=!0,this._time_options=this.generateAvailableTimes(this.date,!this.no_past_times,this.step),this.timeout("hide",()=>this.show_select=!1)}ngOnChanges(i){(i.no_past_times||i.step)&&(this._time_options=this.generateAvailableTimes(this.date,!this.no_past_times,this.step))}get time_options(){const i=(this.time||"00:00").split(":"),o=(0,t.Z)(this.date,{hours:+i[0],minutes:+i[1]});return o.getMinutes()%15!=0&&!this._time_options.find(u=>u.id===(0,L.Z)(o,"HH:mm"))&&(this._time_options.push({name:`${(0,L.Z)(o,(0,$.hI)())}`,id:(0,L.Z)(o,"HH:mm")}),this._time_options.sort((u,m)=>`${u.id}`.localeCompare(`${m.id}`))),this._time_options}setValue(i){if(this.time=i,this._onChange){const o=(this.time||"00:00").split(":"),u=f((0,t.Z)(this.date,{hours:+o[0],minutes:+o[1]}));this._onChange(u.valueOf())}}writeValue(i){this.date=i||this.date;let o=f(this.date);o=(0,A.Z)(o,{nearestTo:5}),this.time=(0,L.Z)(o,"HH:mm"),this._time_options=this.generateAvailableTimes(this.date,!this.no_past_times,this.step)}setDisabledState(i){this.disabled=i}registerOnChange(i){this._onChange=i}registerOnTouched(i){this._onTouch=i}showSelect(){this.show_select=!0,this.timeout("on_shown",()=>{this.select_field&&(this.select_field.focus(),this.select_field.open(),this.subscription("listen_close",this.select_field.openedChange.subscribe(i=>{i||(this.show_select=!1)})))})}generateAvailableTimes(i,o,u=15){const m=new Date;let g=new Date(i);const I=[];o||!(0,x.Z)(g,m)&&(0,V.Z)(g,m)?g=(0,R.Z)(g):(0,V.Z)(g,m)&&(g=m),g=(0,A.Z)(g,{nearestTo:u});const b=(0,H.Z)(g);for(;(0,V.Z)(b,g);)I.push({name:`${(0,L.Z)(g,(0,$.hI)())}`,id:(0,L.Z)(g,"HH:mm")}),g=(0,B.Z)(g,u);return I}}return r.\u0275fac=function(){let l;return function(o){return(l||(l=e.n5z(r)))(o||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["a-time-field"]],viewQuery:function(i,o){if(1&i&&e.Gf(F,5),2&i){let u;e.iGM(u=e.CRH())&&(o.select_field=u.first)}},inputs:{step:"step",disabled:"disabled",no_past_times:"no_past_times"},features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>r),multi:!0}]),e.qOj,e.TTD],ngContentSelectors:_,decls:8,vars:5,consts:[["appearance","outline",3,"keydown.enter"],["matInput","","type","time",3,"disabled","ngModel","ngModelChange"],["mat-icon-button","","matSuffix","",1,"relative","top-1","-right-1",3,"click"],[1,"text-2xl","text-black","text-opacity-50"],["appearance","outline",4,"ngIf"],["appearance","outline"],[3,"value","disabled","valueChange"],["select",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,o){1&i&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e.NdJ("keydown.enter",function(){return o.showSelect()}),e.TgZ(1,"input",1),e.NdJ("ngModelChange",function(m){return o.setValue(m)}),e.qZA(),e.TgZ(2,"button",2),e.NdJ("click",function(){return o.showSelect()}),e.TgZ(3,"app-icon",3),e._uU(4," arrow_drop_down "),e.qZA(),e.qZA(),e.TgZ(5,"mat-error"),e.Hsn(6),e.qZA(),e.qZA(),e.YNc(7,N,4,3,"mat-form-field",4)),2&i&&(e.Udp("display",o.show_select?"none":""),e.xp6(1),e.Q6J("disabled",o.disabled)("ngModel",o.time),e.xp6(6),e.Q6J("ngIf",o.show_select))},directives:[w.KE,y.Nt,n.Fj,n.JJ,n.On,O.lW,w.R9,Z.o,w.TO,T.O5,D.gD,T.sg,P.ey],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),r})()},9697:(k,j,s)=>{"use strict";s.d(j,{d:()=>c});var e=s(292),n=s(4751),$=s(9765),J=s(5917),U=s(5758),f=s(4395),L=s(7519),t=s(3190),A=s(5304),x=s(8002),V=s(7331),R=s(3702),H=s(6833),B=s(6113),w=s(4618),y=s(296),O=s(5306),Z=s(2057),T=s(9453),D=s(7935);const P=["input"];function F(r,l){1&r&&e._UZ(0,"mat-spinner",11)}function E(r,l){if(1&r){const i=e.EpF();e.TgZ(0,"mat-option",12),e.NdJ("click",function(){const m=e.CHM(i).$implicit,g=e.oxw();return g.setValue(m),g.blurInput()}),e.TgZ(1,"div",13),e._uU(2),e.qZA(),e.TgZ(3,"div",14),e._uU(4),e.qZA(),e.qZA()}if(2&r){const i=l.$implicit;e.xp6(2),e.Oqu(i.name),e.xp6(2),e.hij(" ",i.email," ")}}function N(r,l){if(1&r){const i=e.EpF();e.TgZ(0,"mat-option",15),e.TgZ(1,"div",16),e.NdJ("mousedown",function(u){return u.stopPropagation(),u.preventDefault()})("touchstart",function(u){return u.stopPropagation(),u.preventDefault()})("click",function(u){e.CHM(i);const m=e.oxw();return m.setValue(m.search_str),u.stopPropagation(),u.preventDefault()}),e.TgZ(2,"div",17),e._uU(3),e.qZA(),e.qZA(),e.qZA()}if(2&r){const i=e.oxw();e.xp6(3),e.hij(' Add external attendee "',i.search_str,'" ')}}function _(r,l){if(1&r){const i=e.EpF();e.TgZ(0,"mat-option",18),e.NdJ("click",function(){return e.CHM(i),e.oxw().empty_fn()}),e._uU(1),e.qZA()}if(2&r){const i=e.oxw();e.Q6J("disabled",!i.empty_fn),e.xp6(1),e.AsE(" ",i.search_str?"No users found.":""," ",i.error," ")}}let c=(()=>{class r extends V.KG{constructor(){super(...arguments),this.error="",this.query_fn=i=>(0,R.VE)(i),this.search$=new $.xQ,this.search_results$=this.search$.pipe((0,f.b)(400),(0,L.x)(),(0,t.w)(i=>(this.loading=!0,this.options&&this.options.length>0?(0,J.of)(this.options):i.length>=3?this.guests?(0,U.D)([(0,R.VE)(i),(0,R.jf)(i)]):this.query_fn(i):(0,J.of)([]))),(0,A.K)(i=>(0,J.of)([])),(0,x.U)(i=>{this.loading=!1,i=(0,V.xH)(i);const o=(this.search_str||"").toLowerCase();return i.filter(u=>!this.filter||this.filter(u,o))})),this.cancelReset=()=>this.clearTimeout("reset"),this.blurInput=()=>{this.timeout("blur",()=>{var i,o;return null===(o=null===(i=this._input_el)||void 0===i?void 0:i.nativeElement)||void 0===o?void 0:o.blur()})}}ngOnInit(){this.subscription("search_results",this.search_results$.subscribe(i=>this.user_list=i))}resetSearchString(){this.timeout("reset",()=>{var i;return this.search_str=(null===(i=this.active_user)||void 0===i?void 0:i.name)||""},100)}setValue(i,o){"string"==typeof i&&i===this.search_str&&(i=new R.n5({name:(this.search_str||o||"").split("@")[0],email:this.search_str||o||""})),i instanceof R.n5&&(this.active_user=i,this._onChange&&this._onChange(i),this.resetSearchString())}writeValue(i){this.active_user=i,this.resetSearchString()}setDisabledState(i){this.disabled=i}registerOnChange(i){this._onChange=i}registerOnTouched(i){this._onTouch=i}}return r.\u0275fac=function(){let l;return function(o){return(l||(l=e.n5z(r)))(o||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["a-user-search-field"]],viewQuery:function(i,o){if(1&i&&e.Gf(P,5,e.SBq),2&i){let u;e.iGM(u=e.CRH())&&(o._input_el=u.first)}},inputs:{disabled:"disabled",placeholder:"placeholder",options:"options",guests:"guests",error:"error",validate:"validate",empty_fn:"empty_fn",filter:"filter",query_fn:"query_fn"},features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>r),multi:!0}]),e.qOj],decls:12,vars:8,consts:[["form-field","",1,"user-search-field","text-black"],["overlay","","appearance","outline"],["matInput","","keyboard","","name","user-search",3,"ngModel","disabled","placeholder","matAutocomplete","ngModelChange","keyup.enter","blur","focus"],["input",""],["matPrefix","",1,"text-2xl","relative"],["matSuffix","","diameter","16",4,"ngIf"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"click",4,"ngFor","ngForOf"],["class","relative pointer-events-none",4,"ngIf"],[3,"disabled","click",4,"ngIf"],["matSuffix","","diameter","16"],[3,"click"],[1,"leading-tight"],[1,"text-xs","text-black","opacity-60"],[1,"relative","pointer-events-none"],[1,"absolute","inset-0","px-4","pointer-events-auto",3,"mousedown","touchstart","click"],[1,"pointer-events-none"],[3,"disabled","click"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-form-field",1),e.TgZ(2,"input",2,3),e.NdJ("ngModelChange",function(m){return o.search_str=m})("ngModelChange",function(m){return o.search$.next(m||"")})("keyup.enter",function(){return o.validate&&o.validate(o.search_str)?o.setValue(o.search_str):""})("blur",function(){return o.resetSearchString()})("focus",function(){return o.cancelReset()}),e.qZA(),e.TgZ(4,"app-icon",4),e._uU(5,"search"),e.qZA(),e.YNc(6,F,1,0,"mat-spinner",5),e.qZA(),e.TgZ(7,"mat-autocomplete",6,7),e.NdJ("optionSelected",function(m){return o.setValue(m.option.value)}),e.YNc(9,E,5,2,"mat-option",8),e.YNc(10,N,4,1,"mat-option",9),e.YNc(11,_,2,3,"mat-option",10),e.qZA(),e.qZA()),2&i){const u=e.MAs(8);e.xp6(2),e.Q6J("ngModel",o.search_str)("disabled",o.disabled)("placeholder",o.placeholder||"Search for user...")("matAutocomplete",u),e.xp6(4),e.Q6J("ngIf",o.loading),e.xp6(3),e.Q6J("ngForOf",o.user_list),e.xp6(1),e.Q6J("ngIf",o.search_str&&o.validate&&o.validate(o.search_str)),e.xp6(1),e.Q6J("ngIf",!(null!=o.user_list&&o.user_list.length)&&(o.search_str||o.error))}},directives:[H.KE,B.Nt,w.U,n.Fj,y.ZL,n.JJ,n.On,O.o,H.qo,Z.O5,y.XC,Z.sg,T.$g,H.R9,D.ey],styles:["[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}app-icon[_ngcontent-%COMP%]{top:.15em;left:-.15em}"]}),r})()},3702:(k,j,s)=>{"use strict";s.d(j,{Y:()=>i,rW:()=>x,U9:()=>f.U9,n5:()=>U.n5,en:()=>f.en,n2:()=>C,jf:()=>b,VE:()=>a,pP:()=>Q,w0:()=>p}),s(6504);var n=s(292),$=s(592),J=s(7331),U=s(5197),f=s(9375);function L(d,v){if(1&d&&(n.TgZ(0,"main",6),n._UZ(1,"user-form",7),n.qZA()),2&d){const h=n.oxw();n.xp6(1),n.Q6J("form",h.form)}}function t(d,v){if(1&d){const h=n.EpF();n.TgZ(0,"footer",8),n.TgZ(1,"button",9),n._uU(2,"Cancel"),n.qZA(),n.TgZ(3,"button",10),n.NdJ("click",function(){return n.CHM(h),n.oxw().saveChanges()}),n._uU(4,"Save"),n.qZA(),n.qZA()}}function A(d,v){1&d&&(n.TgZ(0,"main",11),n._UZ(1,"mat-spinner",12),n.TgZ(2,"p"),n._uU(3,"Saving attendee..."),n.qZA(),n.qZA())}let x=(()=>{class d extends J.KG{constructor(h){super(),this._data=h,this.event=new n.vpe}ngOnInit(){this.user=this._data.user||{},this.form=(0,f.HO)(this.user)}saveChanges(){if(this.form.markAllAsTouched(),this.form.valid){const h=new U.n5(Object.assign(Object.assign({},this.form.value),{type:"external"}));this.event.emit({reason:"done",metadata:h})}}}return d.\u0275fac=function(h){return new(h||d)(n.Y36($.WI))},d.\u0275cmp=n.Xpm({type:d,selectors:[["new-user-modal"]],outputs:{event:"event"},features:[n.qOj],decls:11,vars:4,consts:[["mat-dialog-title","",1,"heading"],[1,"flex-1"],["mat-icon-button","","mat-dialog-close",""],["class","flex flex-col items-center w-full p-2",4,"ngIf","ngIfElse"],["class","flex items-center justify-center w-full p-2 border-t border-gray-300 space-x-2",4,"ngIf"],["load_state",""],[1,"flex","flex-col","items-center","w-full","p-2"],[3,"form"],[1,"flex","items-center","justify-center","w-full","p-2","border-t","border-gray-300","space-x-2"],["mat-button","","mat-dialog-close","",1,"inverse"],["mat-button","",3,"click"],[1,"flex","flex-col","items-center","w-full","p-2","space-y-2"],["diameter","32"]],template:function(h,W){if(1&h&&(n.TgZ(0,"header"),n.TgZ(1,"div",0),n._uU(2),n.qZA(),n._UZ(3,"div",1),n.TgZ(4,"button",2),n.TgZ(5,"app-icon"),n._uU(6,"close"),n.qZA(),n.qZA(),n.qZA(),n.YNc(7,L,2,1,"main",3),n.YNc(8,t,5,0,"footer",4),n.YNc(9,A,4,0,"ng-template",null,5,n.W1O)),2&h){const q=n.MAs(10);n.xp6(2),n.hij(" ",null!=W.user&&W.user.id?"Edit":"Add"," External Attendee "),n.xp6(5),n.Q6J("ngIf",!W.loading)("ngIfElse",q),n.xp6(1),n.Q6J("ngIf",!W.loading)}},styles:["main[_ngcontent-%COMP%]{min-height:20em!important;width:100%}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:8em}"]}),d})();var V=s(2057),R=s(4751),H=s(6833),B=s(6113),w=s(9713);function y(d,v){if(1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"label",4),n._uU(2," Name"),n.TgZ(3,"span"),n._uU(4,"*"),n.qZA(),n._uU(5,": "),n.qZA(),n.TgZ(6,"mat-form-field",5),n._UZ(7,"input",6),n.TgZ(8,"mat-error"),n._uU(9,"Name is required"),n.qZA(),n.qZA(),n.qZA()),2&d){const h=n.oxw(2);n.xp6(1),n.ekj("error",h.hasError("name"))}}function O(d,v){if(1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"label",7),n._uU(2," Email"),n.TgZ(3,"span"),n._uU(4,"*"),n.qZA(),n._uU(5,": "),n.qZA(),n.TgZ(6,"mat-form-field",5),n._UZ(7,"input",8),n.TgZ(8,"mat-error"),n._uU(9,"A valid email is required"),n.qZA(),n.qZA(),n.qZA()),2&d){const h=n.oxw(2);n.xp6(1),n.ekj("error",h.hasError("email"))}}function Z(d,v){if(1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"label",9),n._uU(2," Organisation"),n.TgZ(3,"span"),n._uU(4,"*"),n.qZA(),n._uU(5,": "),n.qZA(),n.TgZ(6,"mat-form-field",5),n._UZ(7,"input",10),n.TgZ(8,"mat-error"),n._uU(9,"Organisation is required"),n.qZA(),n.qZA(),n.qZA()),2&d){const h=n.oxw(2);n.xp6(1),n.ekj("error",h.hasError("organisation"))}}function T(d,v){if(1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"label",11),n._uU(2," Phone: "),n.qZA(),n.TgZ(3,"mat-form-field",5),n._UZ(4,"input",12),n.TgZ(5,"mat-error"),n._uU(6,"Phone format is invalid"),n.qZA(),n.qZA(),n.qZA()),2&d){const h=n.oxw(2);n.xp6(1),n.ekj("error",h.hasError("phone"))}}function D(d,v){1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"mat-checkbox",13),n._uU(2," Assistance required "),n.qZA(),n.qZA())}function P(d,v){1&d&&(n.TgZ(0,"div",3),n.TgZ(1,"mat-checkbox",14),n._uU(2," Visit expected "),n.qZA(),n.qZA())}function F(d,v){if(1&d&&(n.TgZ(0,"form",1),n.YNc(1,y,10,2,"div",2),n.YNc(2,O,10,2,"div",2),n.YNc(3,Z,10,2,"div",2),n.YNc(4,T,7,2,"div",2),n.YNc(5,D,3,0,"div",2),n.YNc(6,P,3,0,"div",2),n.qZA()),2&d){const h=n.oxw();n.Q6J("formGroup",h.form),n.xp6(1),n.Q6J("ngIf",h.form.controls.name),n.xp6(1),n.Q6J("ngIf",h.form.controls.email),n.xp6(1),n.Q6J("ngIf",h.form.controls.organisation),n.xp6(1),n.Q6J("ngIf",h.form.controls.phone),n.xp6(1),n.Q6J("ngIf",h.form.controls.assistance_required),n.xp6(1),n.Q6J("ngIf",h.form.controls.visit_expected)}}let E=(()=>{class d{hasError(h){return this.form.controls[h].invalid&&this.form.controls[h].touched}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["user-form"]],inputs:{form:"form"},decls:1,vars:1,consts:[["user-form","",3,"formGroup",4,"ngIf"],["user-form","",3,"formGroup"],["class","field",4,"ngIf"],[1,"field"],["for","name"],["appearance","outline"],["matInput","","name","name","placeholder","Name","formControlName","name"],["for","email"],["matInput","","name","email","placeholder","Email Address","formControlName","email"],["for","org"],["matInput","","name","org","placeholder","Organisation","formControlName","organisation"],["for","phone"],["matInput","","name","phone","type","tel","placeholder","Phone","formControlName","phone"],["name","assistance-required","color","primary","formControlName","assistance_required"],["name","visit-expected","color","primary","formControlName","visit_expected"]],template:function(h,W){1&h&&n.YNc(0,F,7,7,"form",0),2&h&&n.Q6J("ngIf",W.form)},directives:[V.O5,R._Y,R.JL,R.sg,H.KE,B.Nt,R.Fj,R.JJ,R.u,H.TO,w.oG],styles:[".field[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),d})();var N=s(2895),_=s(5306),c=s(9453);n.B6R(x,[$.uh,N.lW,$.ZT,_.o,V.O5,E,c.$g],[]);var l=s(3001);class i{constructor(v={}){this.type=v.type||v.location||"other",this.position=v.position||v.map_id||{x:v.x/v.map_width||0,y:v.y/v.map_height||0},this.variance=v.variance||0,this.last_seen=v.last_seen||(0,l.Z)(new Date),this.level=v.level,this.building=v.building,this.at_location=!!v.at_location,this.coordinates_from=v.coordinates_from||"top-left"}}var o=s(4286),u=s(8002),m=s(3902),g=s(5038);const I="/api/staff/v1/guests";function b(d){const v=(0,g.U)({q:d});return(0,o.U2M)(`${I}${d?"?"+v:""}`).pipe((0,u.U)(h=>h.map(W=>new U.OO(W))))}function Q(d){return(0,o.U2M)(`${I}/${encodeURIComponent(d)}`).pipe((0,u.U)(v=>new U.OO(v)))}function C(d){return(0,o.U2M)(`${I}/${encodeURIComponent(d)}/meetings`).pipe((0,u.U)(v=>v.map(h=>new m.y(h))))}const S="/api/staff/v1/people";function a(d){const v=(0,g.U)({q:d});return(0,o.U2M)(`${S}${d?"?"+v:""}`).pipe((0,u.U)(h=>h.map(W=>new U.mO(W))))}function p(d){return(0,o.U2M)(`${S}/${encodeURIComponent(d)}`).pipe((0,u.U)(v=>new U.mO(v)))}},2743:(k,j,s)=>{"use strict";s.d(j,{Z:()=>J});var e=s(207),n=s(4513),$=s(3463);function J(U,f){(0,$.Z)(2,arguments);var L=(0,n.Z)(U),t=(0,e.Z)(f);return L.setHours(t),L}},8873:function(k){k.exports=function(){"use strict";var s=6e4,e=36e5,n="millisecond",$="second",J="minute",U="hour",f="day",L="week",t="month",A="quarter",x="year",V="date",R="Invalid Date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,w={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(c,r,l){var i=String(c);return!i||i.length>=r?c:""+Array(r+1-i.length).join(l)+c},O={s:y,z:function(c){var r=-c.utcOffset(),l=Math.abs(r),i=Math.floor(l/60),o=l%60;return(r<=0?"+":"-")+y(i,2,"0")+":"+y(o,2,"0")},m:function c(r,l){if(r.date()<l.date())return-c(l,r);var i=12*(l.year()-r.year())+(l.month()-r.month()),o=r.clone().add(i,t),u=l-o<0,m=r.clone().add(i+(u?-1:1),t);return+(-(i+(l-o)/(u?o-m:m-o))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:t,y:x,w:L,d:f,D:V,h:U,m:J,s:$,ms:n,Q:A}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return void 0===c}},Z="en",T={};T[Z]=w;var D=function(c){return c instanceof N},P=function(c,r,l){var i;if(!c)return Z;if("string"==typeof c)T[c]&&(i=c),r&&(T[c]=r,i=c);else{var o=c.name;T[o]=c,i=o}return!l&&i&&(Z=i),i||!l&&Z},F=function(c,r){if(D(c))return c.clone();var l="object"==typeof r?r:{};return l.date=c,l.args=arguments,new N(l)},E=O;E.l=P,E.i=D,E.w=function(c,r){return F(c,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var N=function(){function c(l){this.$L=P(l.locale,null,!0),this.parse(l)}var r=c.prototype;return r.parse=function(l){this.$d=function(i){var o=i.date,u=i.utc;if(null===o)return new Date(NaN);if(E.u(o))return new Date;if(o instanceof Date)return new Date(o);if("string"==typeof o&&!/Z$/i.test(o)){var m=o.match(H);if(m){var g=m[2]-1||0,I=(m[7]||"0").substring(0,3);return u?new Date(Date.UTC(m[1],g,m[3]||1,m[4]||0,m[5]||0,m[6]||0,I)):new Date(m[1],g,m[3]||1,m[4]||0,m[5]||0,m[6]||0,I)}}return new Date(o)}(l),this.$x=l.x||{},this.init()},r.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},r.$utils=function(){return E},r.isValid=function(){return this.$d.toString()!==R},r.isSame=function(l,i){var o=F(l);return this.startOf(i)<=o&&o<=this.endOf(i)},r.isAfter=function(l,i){return F(l)<this.startOf(i)},r.isBefore=function(l,i){return this.endOf(i)<F(l)},r.$g=function(l,i,o){return E.u(l)?this[i]:this.set(o,l)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(l,i){var o=this,u=!!E.u(i)||i,m=E.p(l),g=function(S,a){var p=E.w(o.$u?Date.UTC(o.$y,a,S):new Date(o.$y,a,S),o);return u?p:p.endOf(f)},I=function(S,a){return E.w(o.toDate()[S].apply(o.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(a)),o)},b=this.$W,Y=this.$M,Q=this.$D,K="set"+(this.$u?"UTC":"");switch(m){case x:return u?g(1,0):g(31,11);case t:return u?g(1,Y):g(0,Y+1);case L:var G=this.$locale().weekStart||0,C=(b<G?b+7:b)-G;return g(u?Q-C:Q+(6-C),Y);case f:case V:return I(K+"Hours",0);case U:return I(K+"Minutes",1);case J:return I(K+"Seconds",2);case $:return I(K+"Milliseconds",3);default:return this.clone()}},r.endOf=function(l){return this.startOf(l,!1)},r.$set=function(l,i){var o,u=E.p(l),m="set"+(this.$u?"UTC":""),g=(o={},o[f]=m+"Date",o[V]=m+"Date",o[t]=m+"Month",o[x]=m+"FullYear",o[U]=m+"Hours",o[J]=m+"Minutes",o[$]=m+"Seconds",o[n]=m+"Milliseconds",o)[u],I=u===f?this.$D+(i-this.$W):i;if(u===t||u===x){var b=this.clone().set(V,1);b.$d[g](I),b.init(),this.$d=b.set(V,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](I);return this.init(),this},r.set=function(l,i){return this.clone().$set(l,i)},r.get=function(l){return this[E.p(l)]()},r.add=function(l,i){var o,u=this;l=Number(l);var m=E.p(i),g=function(Y){var Q=F(u);return E.w(Q.date(Q.date()+Math.round(Y*l)),u)};if(m===t)return this.set(t,this.$M+l);if(m===x)return this.set(x,this.$y+l);if(m===f)return g(1);if(m===L)return g(7);var I=(o={},o[J]=s,o[U]=e,o[$]=1e3,o)[m]||1,b=this.$d.getTime()+l*I;return E.w(b,this)},r.subtract=function(l,i){return this.add(-1*l,i)},r.format=function(l){var i=this,o=this.$locale();if(!this.isValid())return o.invalidDate||R;var u=l||"YYYY-MM-DDTHH:mm:ssZ",m=E.z(this),g=this.$H,I=this.$m,b=this.$M,Y=o.weekdays,Q=o.months,K=function(a,p,M,d){return a&&(a[p]||a(i,u))||M[p].substr(0,d)},G=function(a){return E.s(g%12||12,a,"0")},C=o.meridiem||function(a,p,M){var d=a<12?"AM":"PM";return M?d.toLowerCase():d},S={YY:String(this.$y).slice(-2),YYYY:this.$y,M:b+1,MM:E.s(b+1,2,"0"),MMM:K(o.monthsShort,b,Q,3),MMMM:K(Q,b),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:K(o.weekdaysMin,this.$W,Y,2),ddd:K(o.weekdaysShort,this.$W,Y,3),dddd:Y[this.$W],H:String(g),HH:E.s(g,2,"0"),h:G(1),hh:G(2),a:C(g,I,!0),A:C(g,I,!1),m:String(I),mm:E.s(I,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:m};return u.replace(B,function(a,p){return p||S[a]||m.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(l,i,o){var u,m=E.p(i),g=F(l),I=(g.utcOffset()-this.utcOffset())*s,b=this-g,Y=E.m(this,g);return Y=(u={},u[x]=Y/12,u[t]=Y,u[A]=Y/3,u[L]=(b-I)/6048e5,u[f]=(b-I)/864e5,u[U]=b/e,u[J]=b/s,u[$]=b/1e3,u)[m]||b,o?Y:E.a(Y)},r.daysInMonth=function(){return this.endOf(t).$D},r.$locale=function(){return T[this.$L]},r.locale=function(l,i){if(!l)return this.$L;var o=this.clone(),u=P(l,i,!0);return u&&(o.$L=u),o},r.clone=function(){return E.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},c}(),_=N.prototype;return F.prototype=_,[["$ms",n],["$s",$],["$m",J],["$H",U],["$W",f],["$M",t],["$y",x],["$D",V]].forEach(function(c){_[c[1]]=function(r){return this.$g(r,c[0],c[1])}}),F.extend=function(c,r){return c.$i||(c(r,N,F),c.$i=!0),F},F.locale=P,F.isDayjs=D,F.unix=function(c){return F(1e3*c)},F.en=T[Z],F.Ls=T,F.p={},F}()}}]);