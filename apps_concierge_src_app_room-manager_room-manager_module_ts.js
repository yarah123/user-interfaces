"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_room-manager_room-manager_module_ts"],{9661:(He,v,_)=>{_.r(v),_.d(v,{RoomManagerModule:()=>Ve});var p=_(6575),m=_(8849),N=_(2649),B=_(7910),S=_(7049),W=_(8377),e=_(9039),K=_(2349),M=_(1670),E=_(3121),d=_(7298),b=_(462),x=_(8159),V=_(9681),H=_(5046),ee=_(6520),O=_(7422),oe=_(8175),te=_(680),T=_(554),f=_(7109),g=_(7401),A=_(1268),ne=_(9674),Z=_(162),R=_(257),ae=_(6658),h=_(702),ie=_(3910),L=_(9892),_e=_(8442),le=_(4035),P=_(4888),u=_(1757);function re(t,l){1&t&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function se(t,l){if(1&t&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&t){const o=l.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.display_name||o.name," ")}}function me(t,l){if(1&t&&(e.TgZ(0,"div",19)(1,"label",27),e.tHW(2,28),e._UZ(3,"span"),e.N_p(),e.qZA(),e.TgZ(4,"mat-form-field",21)(5,"mat-select",29),e.YNc(6,se,2,2,"mat-option",25),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"mat-error"),e._uU(9,"Level is required"),e.qZA()()()),2&t){const o=e.oxw(3);e.xp6(1),e.ekj("error",o.form.controls.zone.invalid&&o.form.controls.zone.touched),e.xp6(5),e.Q6J("ngForOf",e.lcZ(7,3,o.levels))}}function ce(t,l){1&t&&(e.TgZ(0,"mat-error"),e.SDv(1,36),e.qZA())}function de(t,l){if(1&t&&(e.TgZ(0,"div",31)(1,"label",32),e.tHW(2,33),e._UZ(3,"span"),e.N_p(),e.qZA(),e.TgZ(4,"mat-form-field",21),e._UZ(5,"input",34),e.YNc(6,ce,2,0,"mat-error",35),e.qZA()()),2&t){const o=e.oxw(3);e.xp6(1),e.ekj("error",o.form.controls.name.invalid&&o.form.controls.name.touched),e.xp6(5),e.Q6J("ngIf",o.form.controls.name.invalid)}}function fe(t,l){1&t&&(e.TgZ(0,"mat-error"),e.SDv(1,40),e.qZA())}function pe(t,l){if(1&t&&(e.TgZ(0,"div",31)(1,"label",37),e.SDv(2,38),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"input",39),e.YNc(5,fe,2,0,"mat-error",35),e.qZA()()),2&t){const o=e.oxw(3);e.xp6(1),e.ekj("error",o.form.controls.email.invalid&&o.form.controls.email.touched),e.xp6(4),e.Q6J("ngIf",o.form.controls.email.invalid)}}function ge(t,l){1&t&&(e.TgZ(0,"div",31)(1,"label",41),e.SDv(2,42),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"input",43),e.qZA()())}function ue(t,l){1&t&&(e.TgZ(0,"div",31)(1,"label",44),e.SDv(2,45),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"input",46),e.qZA()())}function Me(t,l){1&t&&(e.TgZ(0,"mat-error"),e.SDv(1,50),e.qZA())}function Oe(t,l){if(1&t&&(e.TgZ(0,"div",31)(1,"label",47),e.SDv(2,48),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"input",49),e.YNc(5,Me,2,0,"mat-error",35),e.qZA()()),2&t){const o=e.oxw(3);e.xp6(1),e.ekj("error",o.form.controls.capacity.invalid&&o.form.controls.capacity.touched),e.xp6(4),e.Q6J("ngIf",o.form.controls.capacity.invalid)}}function Ae(t,l){1&t&&(e.TgZ(0,"div",19)(1,"mat-checkbox",51),e.SDv(2,52),e.qZA()())}function Re(t,l){1&t&&(e.TgZ(0,"div",19)(1,"label",53),e.SDv(2,54),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"textarea",55),e.qZA()())}function Ce(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"mat-chip-row",61),e.NdJ("removed",function(){const i=e.CHM(o).$implicit,r=e.oxw(4);return e.KtG(r.removeFeature(i))}),e._uU(1),e.TgZ(2,"app-icon",62),e._uU(3,"close"),e.qZA()()}if(2&t){const o=l.$implicit;e.Q6J("selectable",!0)("removable",!0),e.xp6(1),e.hij(" ",o," ")}}function Ne(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"div",19)(1,"label"),e.SDv(2,56),e.qZA(),e.TgZ(3,"mat-form-field",21)(4,"mat-chip-grid",57,58),e.YNc(6,Ce,4,3,"mat-chip-row",59),e.TgZ(7,"input",60),e.NdJ("matChipInputTokenEnd",function(a){e.CHM(o);const i=e.oxw(3);return e.KtG(i.addFeature(a))}),e.qZA()()()()}if(2&t){const o=e.MAs(5),n=e.oxw(3);e.xp6(1),e.ekj("error",n.form.controls.features.invalid&&n.form.controls.features.touched),e.xp6(5),e.Q6J("ngForOf",n.feature_list),e.xp6(1),e.Q6J("matChipInputFor",o)("matChipInputSeparatorKeyCodes",n.separators)("matChipInputAddOnBlur",!0)}}function Ee(t,l){1&t&&(e.TgZ(0,"div",19)(1,"label",63),e.SDv(2,64),e.qZA(),e.TgZ(3,"mat-form-field",21),e._UZ(4,"input",65),e.qZA()())}function Te(t,l){if(1&t&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&t){const o=l.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function he(t,l){1&t&&(e.TgZ(0,"mat-option",66),e._uU(1," No matching timezones "),e.qZA()),2&t&&e.Q6J("disabled",!0)}function Pe(t,l){1&t&&(e.TgZ(0,"div",19)(1,"label",67),e.SDv(2,68),e.qZA(),e._UZ(3,"image-list-field",69),e.qZA())}function ve(t,l){if(1&t&&(e.TgZ(0,"form",7),e.YNc(1,me,10,5,"div",8),e.TgZ(2,"div",9),e.YNc(3,de,7,3,"div",10)(4,pe,6,3,"div",10),e.qZA(),e.TgZ(5,"div",9),e.YNc(6,ge,5,0,"div",10)(7,ue,5,0,"div",10),e.qZA(),e.TgZ(8,"div",11)(9,"div",12)(10,"label",13),e._uU(11," Default Setup Duration "),e.TgZ(12,"app-icon",14),e._uU(13," info_outline "),e.qZA()(),e._UZ(14,"a-duration-field",15),e.qZA(),e.TgZ(15,"div",12)(16,"label",16),e._uU(17," Default Breakdown Duration "),e.TgZ(18,"app-icon",17),e._uU(19," info_outline "),e.qZA()(),e._UZ(20,"a-duration-field",18),e.qZA()(),e.TgZ(21,"div",9),e.YNc(22,Oe,6,3,"div",10)(23,Ae,3,0,"div",8),e.qZA(),e.YNc(24,Re,5,0,"div",8)(25,Ne,8,6,"div",8)(26,Ee,5,0,"div",8),e.TgZ(27,"div",19)(28,"label",20),e._uU(29,"Timezone"),e.qZA(),e.TgZ(30,"mat-form-field",21)(31,"app-icon",22),e._uU(32,"search"),e.qZA(),e._UZ(33,"input",23),e.qZA(),e.TgZ(34,"mat-autocomplete",null,24),e.YNc(36,Te,2,2,"mat-option",25)(37,he,2,1,"mat-option",26),e.qZA()(),e.YNc(38,Pe,4,0,"div",8),e.qZA()),2&t){const o=e.MAs(35),n=e.oxw(2);e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("ngIf",n.form.controls.zone),e.xp6(2),e.Q6J("ngIf",n.form.controls.name),e.xp6(1),e.Q6J("ngIf",n.form.controls.email),e.xp6(2),e.Q6J("ngIf",n.form.controls.display_name),e.xp6(1),e.Q6J("ngIf",n.form.controls.display_name),e.xp6(1),e.Q6J("formGroup",n.settings_form),e.xp6(6),e.Q6J("min",0),e.xp6(6),e.Q6J("min",0),e.xp6(2),e.Q6J("ngIf",n.form.controls.capacity),e.xp6(1),e.Q6J("ngIf",n.form.controls.bookable),e.xp6(1),e.Q6J("ngIf",n.form.controls.description),e.xp6(1),e.Q6J("ngIf",n.form.controls.features),e.xp6(1),e.Q6J("ngIf",n.form.controls.map_id),e.xp6(7),e.Q6J("matAutocomplete",o),e.xp6(3),e.Q6J("ngForOf",n.filtered_timezones),e.xp6(1),e.Q6J("ngIf",!n.timezones.length),e.xp6(1),e.Q6J("ngIf",n.form.controls.images)}}function Se(t,l){if(1&t&&(e.TgZ(0,"main",5),e.YNc(1,ve,39,18,"form",6),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.form)}}function be(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"footer",70)(1,"button",71),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.save())}),e._uU(2,"Save"),e.qZA()()}}function xe(t,l){1&t&&(e.TgZ(0,"div",72),e._UZ(1,"mat-spinner",73),e.TgZ(2,"p",74),e._uU(3,"Saving room..."),e.qZA()())}let Ze=(()=>{class t extends f.cx{get feature_list(){return this.form.controls.features.value}constructor(o,n,a){super(),this._data=o,this._dialog_ref=n,this._org=a,this.loading=!1,this.timezones=[],this.filtered_timezones=[],this.levels=this._org.active_levels,this.form=(0,S.ji)(this._data.room),this.settings_form=new m.cw({setup:new m.NI(0),breakdown:new m.NI(0)}),this.encryption_levels=[{id:d.sUp.None,name:"None"},{id:d.sUp.Support,name:"Support"},{id:d.sUp.Admin,name:"Admin"},{id:d.sUp.NeverDisplay,name:"Never Display"}],this.query_fn=i=>(0,d.I0G)({q:i}).pipe((0,O.U)(r=>r.data)),this.separators=[T.K5,T.OC,T.L_]}ngOnInit(){var o=this;return(0,M.Z)(function*(){const{details:n}=yield(0,d.rlq)(o._org.organisation.id,"settings").toPromise(),a=(0,f.Wn)(["events","overflow"],n)||{};o._data.room.id&&a[o._data.room.id]&&o.settings_form.patchValue(a[o._data.room.id])})()}ngOnChanges(o){o.form&&(this.updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:n})=>this.filtered_timezones=this.timezones.filter(a=>a.toLowerCase().includes(n.toLowerCase())))))}addFeature(o){if(!this.form||!this.form.controls.features)return;const n=o.input,a=o.value,i=this.feature_list;(a||"").trim()&&(i.push(a),this.form.controls.features.setValue(i)),n&&(n.value="")}removeFeature(o){if(!this.form||!this.form.controls.features)return;const n=this.feature_list,a=n.indexOf(o);a>=0&&(n.splice(a,1),this.form.controls.features.setValue(n))}updateTimezoneList(){const o=this.form?.value?.timezone||"";this.timezones=f.sM,this.filtered_timezones=this.timezones.filter(n=>n.toLowerCase().includes(o.toLowerCase()))}save(){var o=this;return(0,M.Z)(function*(){if(!o.form.valid)return(0,f.cB)(`Some form fields are invalid. [${(0,f.RD)(o.form).join(", ")}]`);o.form.value.id||o.form.patchValue({display_name:o.form.value.display_name||o.form.value.name,zones:(0,f.Tw)([o._org.organisation.id,o._org.building.parent_id,o._org.building.id,`${o.form.value.zone?.id||o.form.value.zone||""}`]).filter(r=>r)}),o.loading=!0,o._dialog_ref.disableClose=!0;const n=o.form.getRawValue(),{details:a}=yield(0,d.rlq)(o._org.organisation.id,"settings").toPromise(),i=(0,f.Wn)(["events","overflow"],a)||{};i[n.id]=o.settings_form.value,yield(0,d.Ymr)(o._org.organisation.id,{name:"settings",details:{...a,events:{...a.events||{},overflow:i}},description:""}).toPromise(),yield(n.id?(0,d.EQg)(n.id,n):(0,d.tgw)(n)).toPromise(),o._dialog_ref.disableClose=!1,o._dialog_ref.close(!0),o.loading=!1})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(g.WI),e.Y36(g.so),e.Y36(E.w7))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["room-form-modal"]],features:[e.qOj,e.TTD],decls:8,vars:5,consts:()=>{let o,n,a,i,r,c,C,$,D,F,z,w,U,J,X,Q,q,Y,j,k;return o=$localize`:@@zoneLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,n=$localize`:@@nameLabel␟ce22d533a3bc86b04d363cdacf055e861f719107␟253967969926135345: Name${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,a=$localize`:@@systemNamePlaceholder␟412d74982a750ad38d528a416090cad259267cf7␟3270670506078615677:Room Name`,i=$localize`:@@systemNameError␟a76167ad44bb224b5e970e7cdce5e03ba50bbf34␟4944106304667909261:Room name is required`,r=$localize`:@@emailLabel␟7e7d6d1958ec577b1f852c495aa8abb88a5a4e8c␟3680148548084285501: Email: `,c=$localize`:@@systemEmailPlaceholder␟796480f8af4a196dc6343cf00d09c7841f270f3a␟3140960526772549616:Room Email`,C=$localize`:@@emailError␟66a4553914df830f0bc1dd1f0a42c57fd85864de␟6407494155279173358:A valid email is required`,$=$localize`:@@displayNameLabel␟e966586c3aadb81b0555b483a36f46776d9792c8␟6691873398244034720:Display Name: `,D=$localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`,F=$localize`:@@codeNameLabel␟61275d3a79a1234bf3fcb50f72d8dc798ef57e27␟7610172352109675938:Code: `,z=$localize`:@@codeNamePlaceholder␟68572de01b84c678be4bf8a27b990ecac2f41ce9␟8186013988289067040:Code`,w=$localize`:@@capacityLabel␟4fdfe5d0bf8898e5def2c3f9d5971f5e23e753d9␟255201359546348839: Capacity: `,U=$localize`:@@capacityPlaceholder␟ce9dfdc6dccb28dc75a78c704e09dc18fb02dcfa␟7825570888384392250:Capacity`,J=$localize`:@@capacityError␟dedde35e8848b99432791a4326aa103b8ec774c4␟8134498951699811316: A valid positive number is required `,X=$localize`:@@bookableLabel␟96462a3176e48f64fd7d25d58a6d49afe4628700␟414602767324525018: Bookable `,Q=$localize`:@@descriptionLabel␟4a22c6843133f0b0d7dc0d28f864f2f90c1de7ad␟6996799422725544865:Description:`,q=$localize`:@@featuresLabel␟048b3adb78b9aabee65dbb43d9c5aadcda49015f␟1939786999396738714: Features: `,Y=$localize`:@@mapIdLabel␟46a8087017d0d929ed6d398ba5d3a5ea1be7ab9b␟1613414518051599973:Map ID:`,j=$localize`:@@mapIdPlaceholder␟8936f99965a07edd4b09a0e4120f4dd5de79604d␟609514156045819245:Map SVG ID selector e.g. area-01.10-status`,k=$localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`,[["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["load_state",""],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","space-x-2"],["class","flex flex-col flex-1",4,"ngIf"],[1,"flex","space-x-2",3,"formGroup"],[1,"flex-1","flex","flex-col","space-y-2"],["for","setup",1,"flex","items-center"],["matTooltip","Time before a meeting needed for setup and preparation for the upcoming meeting",1,"ml-2"],["name","setup","formControlName","setup",3,"min"],["for","breakdown",1,"flex","items-center"],["matTooltip","Time after a meeting needed for cleaning and preparation for next meeting",1,"ml-2"],["name","breakdown","formControlName","breakdown",3,"min"],[1,"flex","flex-col"],["for","timezone"],["appearance","outline"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Room timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","zone"],o,["formControlName","zone","placeholder","Select Level"],[3,"value"],[1,"flex","flex-col","flex-1"],["for","system-name"],n,["matInput","","name","system-name","placeholder",a,"formControlName","name","required",""],[4,"ngIf"],i,["for","system-email"],r,["matInput","","name","system-email","placeholder",c,"formControlName","email"],C,["for","display-name"],$,["matInput","","name","display-name","placeholder",D,"formControlName","display_name"],["for","code-name"],F,["matInput","","name","code-name","placeholder",z,"formControlName","code"],["for","capacity"],w,["matInput","","name","capacity","type","number","placeholder",U,"formControlName","capacity"],J,["name","bookable","formControlName","bookable"],X,["for","description"],Q,["matInput","","name","description","placeholder","Description","formControlName","description"],q,["aria-label","Room features"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New feature...",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[3,"selectable","removable","removed"],["matChipRemove",""],["for","map_id"],Y,["matInput","","name","map_id","placeholder",j,"formControlName","map_id"],[3,"disabled"],["for","images"],k,["name","images","formControlName","images"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(n,a){if(1&n&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,re,3,0,"button",0),e.qZA(),e.YNc(4,Se,2,1,"main",1)(5,be,3,0,"footer",2)(6,xe,4,0,"ng-template",null,3,e.W1O)),2&n){const i=e.MAs(7);e.xp6(2),e.hij("",a.form.value.id?"Edit":"Add"," Room"),e.xp6(1),e.Q6J("ngIf",!a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading)("ngIfElse",i),e.xp6(1),e.Q6J("ngIf",!a.loading)}},dependencies:[p.sg,p.O5,m._Y,m.Fj,m.wV,m.JJ,m.JL,m.Q7,A.KE,A.TO,A.qo,ne.Nt,Z.gD,R.ey,ae.oG,h.gM,ie.Ou,g.ZT,L.XC,L.ZL,m.sg,m.u,_e.B,le.h,P.o,u.RA,u.oH,u.qH,u.z3,p.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{margin-top:2.5em;margin-bottom:1.5em}@media screen and (max-width: 640px){mat-checkbox[_ngcontent-%COMP%]{margin-top:0}}\n\n/*# sourceMappingURL=room-modal.component.ts-angular-inline--180.css.map*/"]})}return t})(),I=(()=>{class t{constructor(o,n){this._org=o,this._dialog=n,this._options=new b.X({}),this._change=new b.X(0),this.options=this._options.asObservable(),this.room_list=(0,x.aj)([this._org.active_building,this._change]).pipe((0,H.h)(([a])=>!!a?.id),(0,ee.w)(([a])=>(0,d.vIL)({zone_id:a.id}).pipe((0,O.U)(({data:i})=>i),(0,oe.K)(()=>(0,V.of)([])))),(0,O.U)(a=>a.filter(i=>this._org.levelWithID(i.zones)).sort((i,r)=>i.name.localeCompare(r.name))),(0,te.d)(1)),this.filtered_rooms=(0,x.aj)([this.room_list,this._options]).pipe((0,O.U)(([a,i])=>(i.zone&&(a=a.filter(r=>r.zones.includes(i.zone))),i.search&&(a=a.filter(r=>r.name.toLowerCase().includes(i.search.toLowerCase()))),a)))}setFilters(o){this._options.next({...this._options.getValue(),...o})}setSearchString(o){this._options.next({...this._options.getValue(),search:o})}editRoom(o=new d.G6j){this._dialog.open(Ze,{data:{room:o}}).afterClosed().subscribe(a=>{a&&setTimeout(()=>this._change.next(Date.now()),300)})}static#e=this.\u0275fac=function(n){return new(n||t)(e.LFG(E.w7),e.LFG(g.uw))};static#o=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Le=_(7627),Ie=_(6939),Ge=_(7232),ye=_(6410);function $e(t,l){if(1&t&&(e.TgZ(0,"mat-option",6),e._uU(1),e.qZA()),2&t){const o=l.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.display_name||o.name," ")}}let G=(()=>{class t extends f.cx{get building(){return this._org.building}constructor(o,n,a,i,r){super(),this._manager=o,this._org=n,this._route=a,this._router=i,this._dialog=r,this.levels=this._org.active_levels,this.filters=this._manager.options,this.setFilters=c=>this._manager.setFilters(c),this.setSearch=c=>this._manager.setSearchString(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_id:c}}),this._manager.setFilters({zone:c})},this.newRoom=()=>this._manager.editRoom()}manageRestrictions(){this._dialog.open(Ge.i,{data:{type:"room"}})}ngOnInit(){var o=this;return(0,M.Z)(function*(){yield o._org.initialised.pipe((0,Le.P)(n=>n)).toPromise(),o.subscription("route.query",o._route.queryParamMap.subscribe(function(){var n=(0,M.Z)(function*(a){if(a.has("zone_id")){const i=a.get("zone_id"),{zone:r}=yield o._manager.options.pipe((0,Ie.q)(1)).toPromise();if(i&&i!==r){const c=o._org.levelWithID([i]);if(!c)return;o._org.building=o._org.buildings.find(C=>C.id===c.parent_id),o.setFilters({zone:i})}}});return function(a){return n.apply(this,arguments)}}())),o.subscription("levels",o._org.active_levels.subscribe(n=>{var a=n.find(i=>i.id===a);!a&&n.length&&(a=n[0].id),o.updateZones(a)})),o.setSearch("")})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(I),e.Y36(E.w7),e.Y36(N.gz),e.Y36(N.F0),e.Y36(g.uw))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["room-manager-topbar"]],features:[e.qOj],decls:18,vars:7,consts:[[1,"flex","items-center","justify-between","p-4"],[1,"text-2xl","font-medium"],["btn","",1,"w-32",3,"click"],[1,"flex","items-center","bg-base-100","h-20","px-4","space-x-2"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-2"],["btn","","icon","","matRipple","","matTooltip","Room Restrictions",1,"bg-secondary","text-secondary-content","rounded",3,"click"],[1,"mr-2",3,"modelChange"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Room Management"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return a.newRoom()}),e._uU(4,"New Room"),e.qZA()(),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-select",5),e.NdJ("ngModelChange",function(r){return a.updateZones(r)}),e.ALo(8,"async"),e.TgZ(9,"mat-option",6),e._uU(10,"All Levels"),e.qZA(),e.YNc(11,$e,2,2,"mat-option",7),e.ALo(12,"async"),e.qZA()(),e._UZ(13,"div",8),e.TgZ(14,"button",9),e.NdJ("click",function(){return a.manageRestrictions()}),e.TgZ(15,"app-icon"),e._uU(16,"lock_open"),e.qZA()(),e.TgZ(17,"searchbar",10),e.NdJ("modelChange",function(r){return a.setSearch(r)}),e.qZA()()),2&n){let i;e.xp6(7),e.Q6J("ngModel",null==(i=e.lcZ(8,3,a.filters))?null:i.zone),e.xp6(2),e.Q6J("value",null==a.building?null:a.building.id),e.xp6(2),e.Q6J("ngForOf",e.lcZ(12,5,a.levels))}},dependencies:[p.sg,m.JJ,m.On,ye.U,A.KE,Z.gD,R.ey,h.gM,R.wG,P.o,p.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25rem}\n\n/*# sourceMappingURL=room-manager-topbar.component.ts-angular-inline--181.css.map*/"]})}return t})();var De=_(7442),Fe=_(6612);function ze(t,l){if(1&t&&(e._uU(0),e.ALo(1,"level"),e.ALo(2,"level")),2&t){const o=l.data;let n;e.hij(" ",(null==(n=e.lcZ(1,1,o))?null:n.display_name)||(null==(n=e.lcZ(2,3,o))?null:n.name)," ")}}function we(t,l){if(1&t&&(e.TgZ(0,"div",5)(1,"app-icon"),e._uU(2),e.qZA()()),2&t){const o=l.data;e.ekj("bg-error",!o)("bg-success",o),e.xp6(2),e.Oqu(o?"done":"close")}}function Ue(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"div",6)(1,"button",7),e.NdJ("click",function(){const i=e.CHM(o).row,r=e.oxw();return e.KtG(r.editRoom(i))}),e.TgZ(2,"app-icon"),e._uU(3,"edit"),e.qZA()()()}}const Je=()=>["display_name","zones","capacity","type","bookable","actions"],Xe=()=>["Room Name","Level","Capacity","Room Type","Bookable"," "],Qe=()=>["flex","8r","6r","8r","6r","3.75r"],qe=(t,l,o)=>({bookable:t,zones:l,actions:o});let y=(()=>{class t{constructor(o){this._manager=o,this.rooms=this._manager.filtered_rooms,this.editRoom=n=>this._manager.editRoom(n)}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(I))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["room-list"]],decls:8,vars:12,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No rooms for selected level or building",1,"block","min-w-[48rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["level_template",""],["bool_template",""],["action_template",""],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","text-white","mx-auto"],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","","matTooltip","Edit Room",3,"click"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,ze,3,5,"ng-template",null,2,e.W1O)(4,we,3,5,"ng-template",null,3,e.W1O)(6,Ue,4,0,"ng-template",null,4,e.W1O)),2&n){const i=e.MAs(3),r=e.MAs(5),c=e.MAs(7);e.xp6(1),e.Q6J("dataSource",a.rooms)("columns",e.DdM(5,Je))("display_column",e.DdM(6,Xe))("column_size",e.DdM(7,Qe))("template",e.kEZ(8,qe,r,i,c))}},dependencies:[h.gM,R.wG,P.o,De.C,Fe.M]})}return t})();const Ye=["app-room-manager",""];let je=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-room-manager",""]],attrs:Ye,decls:4,vars:0,consts:[[1,"relative","overflow-hidden","flex","flex-col"],[1,"block","w-full"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,a){1&n&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"room-manager-topbar",1)(3,"room-list",2),e.qZA())},dependencies:[K.k,G,y],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=room-manager.component.ts-angular-inline--179.css.map*/"]})}return t})();var ke=_(3005),Be=_(9842);const We=["app-new-room-manager",""],Ke=[{path:"",component:je},{path:"new",component:(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-new-room-manager",""]],attrs:We,decls:6,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"block","w-full"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,a){1&n&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1),e._UZ(4,"room-manager-topbar",2)(5,"room-list",3),e.qZA()())},dependencies:[ke.O,Be.u,G,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=new-room-manager.component.ts-angular-inline--182.css.map*/"]})}return t})()}];let Ve=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[p.ez,m.u5,B.v,S.YR,W.PP,u.Hi,N.Bz.forChild(Ke)]})}return t})()}}]);
//# sourceMappingURL=apps_concierge_src_app_room-manager_room-manager_module_ts.js.map