"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_room-manager_room-manager_module_ts"],{50444:(Q,C,i)=>{i.r(C),i.d(C,{RoomManagerModule:()=>io});var g=i(60316),d=i(34456),E=i(26842),T=i(40363),N=i(22168),S=i(68390),e=i(68559),b=i(74605),u=i(89204),h=i(12185),m=i(3998),L=i(90521),G=i(42175),q=i(71536),ee=i(8627),oe=i(71963),R=i(35443),te=i(29314),ne=i(7841),I=i(74879),p=i(82333),M=i(12587),A=i(24950),ae=i(87984),F=i(25175),v=i(85060),ie=i(97024),$=i(80640),se=i(41134),x=i(79771),le=i(83476),re=i(56864),y=i(69434),O=i(12772);function me(t,l){1&t&&(e.j41(0,"button",20)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function _e(t,l){if(1&t&&(e.j41(0,"mat-option",44),e.EFF(1),e.k0s()),2&t){const o=l.$implicit;e.Y8G("value",o.id),e.R7$(),e.SpI(" ",o.display_name||o.name," ")}}function ce(t,l){if(1&t&&(e.j41(0,"div",35)(1,"label",42),e.PLo(2,3),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",37)(5,"mat-select",43),e.DNE(6,_e,2,2,"mat-option",40),e.nI1(7,"async"),e.k0s(),e.j41(8,"mat-error"),e.EFF(9,"Level is required"),e.k0s()()()),2&t){const o=e.XpG(3);e.R7$(),e.AVh("error",o.form.controls.zone.invalid&&o.form.controls.zone.touched),e.R7$(5),e.Y8G("ngForOf",e.bMT(7,3,o.levels))}}function de(t,l){1&t&&(e.j41(0,"mat-error"),e.pXf(1,5),e.k0s())}function fe(t,l){if(1&t&&(e.j41(0,"div",45)(1,"label",46),e.PLo(2,4),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",37),e.nrm(5,"input",47),e.DNE(6,de,2,0,"mat-error",48),e.k0s()()),2&t){const o=e.XpG(3);e.R7$(),e.AVh("error",o.form.controls.name.invalid&&o.form.controls.name.touched),e.R7$(5),e.Y8G("ngIf",o.form.controls.name.invalid)}}function pe(t,l){1&t&&(e.j41(0,"mat-error"),e.pXf(1,7),e.k0s())}function ge(t,l){if(1&t&&(e.j41(0,"div",45)(1,"label",49),e.pXf(2,6),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"input",50),e.DNE(5,pe,2,0,"mat-error",48),e.k0s()()),2&t){const o=e.XpG(3);e.R7$(),e.AVh("error",o.form.controls.email.invalid&&o.form.controls.email.touched),e.R7$(4),e.Y8G("ngIf",o.form.controls.email.invalid)}}function ue(t,l){1&t&&(e.j41(0,"div",45)(1,"label",51),e.pXf(2,8),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"input",52),e.k0s()())}function Re(t,l){1&t&&(e.j41(0,"div",45)(1,"label",53),e.pXf(2,9),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"input",54),e.k0s()())}function Me(t,l){1&t&&(e.j41(0,"mat-error"),e.pXf(1,11),e.k0s())}function Oe(t,l){if(1&t&&(e.j41(0,"div",45)(1,"label",55),e.pXf(2,10),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"input",56),e.DNE(5,Me,2,0,"mat-error",48),e.k0s()()),2&t){const o=e.XpG(3);e.R7$(),e.AVh("error",o.form.controls.capacity.invalid&&o.form.controls.capacity.touched),e.R7$(4),e.Y8G("ngIf",o.form.controls.capacity.invalid)}}function Ce(t,l){1&t&&(e.j41(0,"div",35)(1,"mat-checkbox",57),e.pXf(2,12),e.k0s()())}function Ee(t,l){1&t&&(e.j41(0,"div",35)(1,"label",58),e.pXf(2,13),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"textarea",59),e.k0s()())}function Ne(t,l){if(1&t){const o=e.RV6();e.j41(0,"mat-chip-row",63),e.bIt("removed",function(){const a=e.eBV(o).$implicit,s=e.XpG(4);return e.Njj(s.removeFeature(a))}),e.EFF(1),e.j41(2,"app-icon",64),e.EFF(3,"close"),e.k0s()()}if(2&t){const o=l.$implicit;e.Y8G("selectable",!0)("removable",!0),e.R7$(),e.SpI(" ",o," ")}}function he(t,l){if(1&t){const o=e.RV6();e.j41(0,"div",35)(1,"label"),e.pXf(2,14),e.k0s(),e.j41(3,"mat-form-field",37)(4,"mat-chip-grid",60,2),e.DNE(6,Ne,4,3,"mat-chip-row",61),e.j41(7,"input",62),e.bIt("matChipInputTokenEnd",function(a){e.eBV(o);const s=e.XpG(3);return e.Njj(s.addFeature(a))}),e.k0s()()()()}if(2&t){const o=e.sdS(5),n=e.XpG(3);e.R7$(),e.AVh("error",n.form.controls.features.invalid&&n.form.controls.features.touched),e.R7$(5),e.Y8G("ngForOf",n.feature_list),e.R7$(),e.Y8G("matChipInputFor",o)("matChipInputSeparatorKeyCodes",n.separators)("matChipInputAddOnBlur",!0)}}function Ae(t,l){1&t&&(e.j41(0,"div",35)(1,"label",65),e.pXf(2,15),e.k0s(),e.j41(3,"mat-form-field",37),e.nrm(4,"input",66),e.k0s()())}function ve(t,l){if(1&t&&(e.j41(0,"mat-option",44),e.EFF(1),e.k0s()),2&t){const o=l.$implicit;e.Y8G("value",o),e.R7$(),e.JRh(o)}}function Pe(t,l){1&t&&(e.j41(0,"mat-option",67),e.EFF(1," No matching timezones "),e.k0s()),2&t&&e.Y8G("disabled",!0)}function Te(t,l){1&t&&(e.j41(0,"div",35)(1,"label",68),e.pXf(2,16),e.k0s(),e.nrm(3,"image-list-field",69),e.k0s())}function Se(t,l){if(1&t&&(e.j41(0,"form",23),e.DNE(1,ce,10,5,"div",24),e.j41(2,"div",25),e.DNE(3,fe,7,3,"div",26)(4,ge,6,3,"div",26),e.k0s(),e.j41(5,"div",25),e.DNE(6,ue,5,0,"div",26)(7,Re,5,0,"div",26),e.k0s(),e.j41(8,"div",27)(9,"div",28)(10,"label",29),e.EFF(11," Default Setup Duration "),e.j41(12,"app-icon",30),e.EFF(13," info_outline "),e.k0s()(),e.nrm(14,"a-duration-field",31),e.k0s(),e.j41(15,"div",28)(16,"label",32),e.EFF(17," Default Breakdown Duration "),e.j41(18,"app-icon",33),e.EFF(19," info_outline "),e.k0s()(),e.nrm(20,"a-duration-field",34),e.k0s()(),e.j41(21,"div",25),e.DNE(22,Oe,6,3,"div",26)(23,Ce,3,0,"div",24),e.k0s(),e.DNE(24,Ee,5,0,"div",24)(25,he,8,6,"div",24)(26,Ae,5,0,"div",24),e.j41(27,"div",35)(28,"label",36),e.EFF(29,"Timezone"),e.k0s(),e.j41(30,"mat-form-field",37)(31,"app-icon",38),e.EFF(32,"search"),e.k0s(),e.nrm(33,"input",39),e.k0s(),e.j41(34,"mat-autocomplete",null,1),e.DNE(36,ve,2,2,"mat-option",40)(37,Pe,2,1,"mat-option",41),e.k0s()(),e.DNE(38,Te,4,0,"div",24),e.k0s()),2&t){const o=e.sdS(35),n=e.XpG(2);e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngIf",n.form.controls.zone),e.R7$(2),e.Y8G("ngIf",n.form.controls.name),e.R7$(),e.Y8G("ngIf",n.form.controls.email),e.R7$(2),e.Y8G("ngIf",n.form.controls.display_name),e.R7$(),e.Y8G("ngIf",n.form.controls.display_name),e.R7$(),e.Y8G("formGroup",n.settings_form),e.R7$(6),e.Y8G("min",0),e.R7$(6),e.Y8G("min",0),e.R7$(2),e.Y8G("ngIf",n.form.controls.capacity),e.R7$(),e.Y8G("ngIf",n.form.controls.bookable),e.R7$(),e.Y8G("ngIf",n.form.controls.description),e.R7$(),e.Y8G("ngIf",n.form.controls.features),e.R7$(),e.Y8G("ngIf",n.form.controls.map_id),e.R7$(7),e.Y8G("matAutocomplete",o),e.R7$(3),e.Y8G("ngForOf",n.filtered_timezones),e.R7$(),e.Y8G("ngIf",!n.timezones.length),e.R7$(),e.Y8G("ngIf",n.form.controls.images)}}function be(t,l){if(1&t&&(e.j41(0,"main",21),e.DNE(1,Se,39,18,"form",22),e.k0s()),2&t){const o=e.XpG();e.R7$(),e.Y8G("ngIf",o.form)}}function Ge(t,l){if(1&t){const o=e.RV6();e.j41(0,"footer",70)(1,"button",71),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.save())}),e.EFF(2,"Save"),e.k0s()()}}function Ie(t,l){1&t&&(e.j41(0,"div",72),e.nrm(1,"mat-spinner",73),e.j41(2,"p",74),e.EFF(3,"Saving room..."),e.k0s()())}let $e=(()=>{class t extends p.Tv{get feature_list(){return this.form.controls.features.value}constructor(o,n,a){super(),this._data=o,this._dialog_ref=n,this._org=a,this.loading=!1,this.timezones=[],this.filtered_timezones=[],this.levels=this._org.active_levels,this.form=(0,N.fY)(this._data.room),this.settings_form=new d.gE({setup:new d.MJ(0),breakdown:new d.MJ(0)}),this.encryption_levels=[{id:m.cor.None,name:"None"},{id:m.cor.Support,name:"Support"},{id:m.cor.Admin,name:"Admin"},{id:m.cor.NeverDisplay,name:"Never Display"}],this.query_fn=s=>(0,m.smM)({q:s}).pipe((0,R.T)(r=>r.data)),this.separators=[I.Fm,I.KE,I.t6]}ngOnInit(){var o=this;return(0,u.A)(function*(){const{details:n}=yield(0,m.bpY)(o._org.organisation.id,"settings").toPromise(),a=(0,p.st)(["events","overflow"],n)||{};o._data.room.id&&a[o._data.room.id]&&o.settings_form.patchValue(a[o._data.room.id])})()}ngOnChanges(o){o.form&&(this.updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:n})=>this.filtered_timezones=this.timezones.filter(a=>a.toLowerCase().includes(n.toLowerCase())))))}addFeature(o){if(!this.form||!this.form.controls.features)return;const n=o.input,a=o.value,s=this.feature_list;(a||"").trim()&&(s.push(a),this.form.controls.features.setValue(s)),n&&(n.value="")}removeFeature(o){if(!this.form||!this.form.controls.features)return;const n=this.feature_list,a=n.indexOf(o);a>=0&&(n.splice(a,1),this.form.controls.features.setValue(n))}updateTimezoneList(){const o=this.form?.value?.timezone||"";this.timezones=p.Rd,this.filtered_timezones=this.timezones.filter(n=>n.toLowerCase().includes(o.toLowerCase()))}save(){var o=this;return(0,u.A)(function*(){if(!o.form.valid)return(0,p.UG)(`Some form fields are invalid. [${(0,p.F7)(o.form).join(", ")}]`);o.form.value.id||o.form.patchValue({display_name:o.form.value.display_name||o.form.value.name,zones:(0,p.Am)([o._org.organisation.id,o._org.building.parent_id,o._org.building.id,`${o.form.value.zone?.id||o.form.value.zone||""}`]).filter(r=>r)}),o.loading=!0,o._dialog_ref.disableClose=!0;const n=o.form.getRawValue(),{details:a}=yield(0,m.bpY)(o._org.organisation.id,"settings").toPromise(),s=(0,p.st)(["events","overflow"],a)||{};s[n.id]=o.settings_form.value,yield(0,m.D58)(o._org.organisation.id,{name:"settings",details:{...a,events:{...a.events||{},overflow:s}},description:""}).toPromise().catch(r=>(0,p.WS)("Unable to save room setup and breakdown times")),yield(n.id?(0,m.Pny)(n.id,n):(0,m.tEp)(n)).toPromise(),o._dialog_ref.disableClose=!1,o._dialog_ref.close(!0),o.loading=!1})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.rXU(M.Vh),e.rXU(M.CP),e.rXU(h.yb))};static#o=this.\u0275cmp=e.VBU({type:t,selectors:[["room-form-modal"]],features:[e.Vt3,e.OA$],decls:8,vars:5,consts:()=>{let o,n,a,s,r,c,f,P,k,z,Y,V,w,U,B,J,Z,K,W,H;return o=$localize`:@@zoneLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,n=$localize`:@@systemNamePlaceholder␟412d74982a750ad38d528a416090cad259267cf7␟3270670506078615677:Room Name`,a=$localize`:@@nameLabel␟ce22d533a3bc86b04d363cdacf055e861f719107␟253967969926135345: Name${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,s=$localize`:@@systemNameError␟a76167ad44bb224b5e970e7cdce5e03ba50bbf34␟4944106304667909261:Room name is required`,r=$localize`:@@systemEmailPlaceholder␟796480f8af4a196dc6343cf00d09c7841f270f3a␟3140960526772549616:Room Email`,c=$localize`:@@emailLabel␟7e7d6d1958ec577b1f852c495aa8abb88a5a4e8c␟3680148548084285501: Email: `,f=$localize`:@@emailError␟66a4553914df830f0bc1dd1f0a42c57fd85864de␟6407494155279173358:A valid email is required`,P=$localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`,k=$localize`:@@displayNameLabel␟e966586c3aadb81b0555b483a36f46776d9792c8␟6691873398244034720:Display Name: `,z=$localize`:@@codeNamePlaceholder␟68572de01b84c678be4bf8a27b990ecac2f41ce9␟8186013988289067040:Code`,Y=$localize`:@@codeNameLabel␟61275d3a79a1234bf3fcb50f72d8dc798ef57e27␟7610172352109675938:Code: `,V=$localize`:@@capacityPlaceholder␟ce9dfdc6dccb28dc75a78c704e09dc18fb02dcfa␟7825570888384392250:Capacity`,w=$localize`:@@capacityLabel␟4fdfe5d0bf8898e5def2c3f9d5971f5e23e753d9␟255201359546348839: Capacity: `,U=$localize`:@@capacityError␟dedde35e8848b99432791a4326aa103b8ec774c4␟8134498951699811316: A valid positive number is required `,B=$localize`:@@bookableLabel␟96462a3176e48f64fd7d25d58a6d49afe4628700␟414602767324525018: Bookable `,J=$localize`:@@descriptionLabel␟4a22c6843133f0b0d7dc0d28f864f2f90c1de7ad␟6996799422725544865:Description:`,Z=$localize`:@@featuresLabel␟048b3adb78b9aabee65dbb43d9c5aadcda49015f␟1939786999396738714: Features: `,K=$localize`:@@mapIdPlaceholder␟8936f99965a07edd4b09a0e4120f4dd5de79604d␟609514156045819245:Map SVG ID selector e.g. area-01.10-status`,W=$localize`:@@mapIdLabel␟46a8087017d0d929ed6d398ba5d3a5ea1be7ab9b␟1613414518051599973:Map ID:`,H=$localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`,[["load_state",""],["auto","matAutocomplete"],["chipList",""],o,a,s,c,f,k,Y,w,U,B,J,Z,W,H,["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","space-x-2"],["class","flex flex-col flex-1",4,"ngIf"],[1,"flex","space-x-2",3,"formGroup"],[1,"flex-1","flex","flex-col","space-y-2"],["for","setup",1,"flex","items-center"],["matTooltip","Time before a meeting needed for setup and preparation for the upcoming meeting",1,"ml-2"],["name","setup","formControlName","setup",3,"min"],["for","breakdown",1,"flex","items-center"],["matTooltip","Time after a meeting needed for cleaning and preparation for next meeting",1,"ml-2"],["name","breakdown","formControlName","breakdown",3,"min"],[1,"flex","flex-col"],["for","timezone"],["appearance","outline"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Room timezone",3,"matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","zone"],["formControlName","zone","placeholder","Select Level"],[3,"value"],[1,"flex","flex-col","flex-1"],["for","system-name"],["matInput","","name","system-name","placeholder",n,"formControlName","name","required",""],[4,"ngIf"],["for","system-email"],["matInput","","name","system-email","placeholder",r,"formControlName","email"],["for","display-name"],["matInput","","name","display-name","placeholder",P,"formControlName","display_name"],["for","code-name"],["matInput","","name","code-name","placeholder",z,"formControlName","code"],["for","capacity"],["matInput","","name","capacity","type","number","placeholder",V,"formControlName","capacity"],["name","bookable","formControlName","bookable"],["for","description"],["matInput","","name","description","placeholder","Description","formControlName","description"],["aria-label","Room features"],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New feature...",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[3,"removed","selectable","removable"],["matChipRemove",""],["for","map_id"],["matInput","","name","map_id","placeholder",K,"formControlName","map_id"],[3,"disabled"],["for","images"],["name","images","formControlName","images"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(n,a){if(1&n&&(e.j41(0,"header")(1,"h2"),e.EFF(2),e.k0s(),e.DNE(3,me,3,0,"button",17),e.k0s(),e.DNE(4,be,2,1,"main",18)(5,Ge,3,0,"footer",19)(6,Ie,4,0,"ng-template",null,0,e.C5r)),2&n){const s=e.sdS(7);e.R7$(2),e.SpI("",a.form.value.id?"Edit":"Add"," Room"),e.R7$(),e.Y8G("ngIf",!a.loading),e.R7$(),e.Y8G("ngIf",!a.loading)("ngIfElse",s),e.R7$(),e.Y8G("ngIf",!a.loading)}},dependencies:[g.Sq,g.bT,d.qT,d.me,d.Q0,d.BC,d.cb,d.YS,A.rl,A.TL,A.JW,ae.fg,F.VO,v.wT,ie.So,$.oV,se.LG,M.tx,x.$3,x.pN,d.j4,d.JD,le.y,re.$,y.R,O.HW,O.D7,O.Zv,O.jH,g.Jj],styles:["mat-checkbox[_ngcontent-%COMP%]{margin-top:2.5em;margin-bottom:1.5em}@media screen and (max-width: 640px){mat-checkbox[_ngcontent-%COMP%]{margin-top:0}}\n\n/*# sourceMappingURL=room-modal.component.ts-angular-inline--184.css.map*/"]})}return t})(),D=(()=>{class t{constructor(o,n,a){this._org=o,this._dialog=n,this._settings=a,this._options=new L.t({}),this._change=new L.t(0),this.options=this._options.asObservable(),this.room_list=(0,G.zV)([this._org.active_building,this._org.active_region,this._change]).pipe((0,ee.p)(([s,r])=>!!s?.id),(0,oe.n)(([s,r])=>(0,m.BbB)({zone_id:(this._settings.get("use_region")?r.id:"")||s.id}).pipe((0,R.T)(({data:c})=>c),(0,te.W)(()=>(0,q.of)([])))),(0,R.T)(s=>s.filter(r=>this._org.levelWithID(r.zones)).sort((r,c)=>r.name.localeCompare(c.name))),(0,ne.t)(1)),this.filtered_rooms=(0,G.zV)([this.room_list,this._options]).pipe((0,R.T)(([s,r])=>(r.zones?.length&&(s=s.filter(c=>r.zones.find(f=>c.zones.includes(f)))),r.search&&(s=s.filter(c=>c.name.toLowerCase().includes(r.search.toLowerCase()))),s)))}setFilters(o){this._options.next({...this._options.getValue(),...o})}setSearchString(o){this._options.next({...this._options.getValue(),search:o})}editRoom(o=new m.tYo){this._dialog.open($e,{data:{room:o}}).afterClosed().subscribe(a=>{a&&setTimeout(()=>this._change.next(Date.now()),300)})}static#e=this.\u0275fac=function(n){return new(n||t)(e.KVO(h.yb),e.KVO(M.bZ),e.KVO(p.h$))};static#o=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ye=i(57871),Le=i(46864),Fe=i(12236),xe=i(56062);function De(t,l){if(1&t&&(e.j41(0,"div",13),e.EFF(1),e.nI1(2,"building"),e.j41(3,"span",14),e.EFF(4," - "),e.k0s()()),2&t){let o;const n=e.XpG().$implicit;e.R7$(),e.SpI(" ",null==(o=e.bMT(2,1,n.parent_id))?null:o.display_name," ")}}function je(t,l){if(1&t&&(e.j41(0,"mat-option",10)(1,"div",11),e.DNE(2,De,5,3,"div",12),e.j41(3,"div"),e.EFF(4),e.k0s()()()),2&t){const o=l.$implicit,n=e.XpG();e.Y8G("value",o.id),e.R7$(2),e.Y8G("ngIf",n.use_region),e.R7$(2),e.SpI(" ",o.display_name||o.name," ")}}let j=(()=>{class t extends p.Tv{get building(){return this._org.building}get use_region(){return!!this._settings.get("app.use_region")}get root_zone(){return(this.use_region?this._org.region.id:"")||this._org.building.id}constructor(o,n,a,s,r,c){super(),this._manager=o,this._org=n,this._route=a,this._router=s,this._dialog=r,this._settings=c,this.levels=(0,G.zV)([this._org.active_building,this._org.active_region]).pipe((0,R.T)(([f,P])=>this.use_region?this._org.levelsForRegion(P):this._org.levelsForBuilding(f))),this.filters=this._manager.options,this.setFilters=f=>this._manager.setFilters(f),this.setSearch=f=>this._manager.setSearchString(f),this.updateZones=f=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:f.join(",")}})},this.newRoom=()=>this._manager.editRoom()}manageRestrictions(){this._dialog.open(Le.F,{data:{type:"room"}})}ngOnInit(){var o=this;return(0,u.A)(function*(){yield o._org.initialised.pipe((0,ye.$)(n=>n)).toPromise(),o.subscription("route.query",o._route.queryParamMap.subscribe(function(){var n=(0,u.A)(function*(a){if(a.has("zone_ids")){const r=(a.get("zone_ids")||"").split(",").filter(c=>c);o._manager.setFilters({zones:r})}});return function(a){return n.apply(this,arguments)}}())),o.setSearch("")})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.rXU(D),e.rXU(h.yb),e.rXU(E.nX),e.rXU(E.Ix),e.rXU(M.bZ),e.rXU(p.h$))};static#o=this.\u0275cmp=e.VBU({type:t,selectors:[["room-manager-topbar"]],features:[e.Vt3],decls:17,vars:6,consts:[[1,"flex","items-center","px-8","pt-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-2"],[3,"modelChange"],["btn","",1,"w-40",3,"click"],[1,"flex","items-center","bg-base-100","h-20","px-8","space-x-2"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["btn","","icon","","matRipple","","matTooltip","Room Restrictions",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"]],template:function(n,a){if(1&n&&(e.j41(0,"div",0)(1,"h2",1),e.EFF(2,"Room Management"),e.k0s(),e.nrm(3,"div",2),e.j41(4,"searchbar",3),e.bIt("modelChange",function(r){return a.setSearch(r)}),e.k0s(),e.j41(5,"button",4),e.bIt("click",function(){return a.newRoom()}),e.EFF(6,"New Room"),e.k0s()(),e.j41(7,"div",5)(8,"mat-form-field",6)(9,"mat-select",7),e.nI1(10,"async"),e.bIt("ngModelChange",function(r){return a.updateZones(r)}),e.DNE(11,je,5,3,"mat-option",8),e.nI1(12,"async"),e.k0s()(),e.nrm(13,"div",2),e.j41(14,"button",9),e.bIt("click",function(){return a.manageRestrictions()}),e.j41(15,"app-icon"),e.EFF(16,"lock_open"),e.k0s()()()),2&n){let s;e.R7$(9),e.Y8G("ngModel",null==(s=e.bMT(10,2,a.filters))?null:s.zones),e.R7$(2),e.Y8G("ngForOf",e.bMT(12,4,a.levels))}},dependencies:[g.Sq,g.bT,d.BC,d.vS,Fe.x,A.rl,F.VO,v.wT,$.oV,v.r6,y.R,g.Jj,xe.b],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25rem}\n\n/*# sourceMappingURL=room-manager-topbar.component.ts-angular-inline--185.css.map*/"]})}return t})();var Xe=i(52352),ke=i(88328),ze=i(23666);const Ye=t=>({key:"display_name",name:"Room Name",content:t}),Ve=t=>({key:"zones",name:"Level",size:"10rem",content:t}),we=()=>({key:"capacity",name:"Capacity",size:"6rem"}),Ue=()=>({key:"type",name:"Room Type",size:"8rem"}),Be=t=>({key:"bookable",name:"Bookable",size:"5.5rem",content:t,sortable:!1}),Je=t=>({key:"actions",name:" ",content:t,size:"3.5rem",sortable:!1}),Ze=(t,l,o,n,a,s)=>[t,l,o,n,a,s];function Ke(t,l){if(1&t){const o=e.RV6();e.j41(0,"button",7),e.bIt("click",function(){const a=e.eBV(o).row,s=e.XpG();return e.Njj(s.copyToClipboard(a.id))}),e.j41(1,"div",8),e.EFF(2),e.k0s(),e.j41(3,"div",9),e.EFF(4),e.k0s()()}if(2&t){const o=l.row,n=l.data;e.R7$(2),e.JRh(n),e.R7$(2),e.SpI(" ",o.id," ")}}function We(t,l){if(1&t&&(e.j41(0,"div",10),e.EFF(1),e.nI1(2,"level"),e.nI1(3,"level"),e.k0s()),2&t){let o;const n=l.data;e.R7$(),e.SpI(" ",(null==(o=e.bMT(2,1,n))?null:o.display_name)||(null==(o=e.bMT(3,3,n))?null:o.name)," ")}}function He(t,l){if(1&t&&(e.j41(0,"div",11)(1,"app-icon"),e.EFF(2),e.k0s()()),2&t){const o=l.data;e.AVh("bg-error",!o)("bg-success",o),e.R7$(2),e.JRh(o?"done":"close")}}function Qe(t,l){if(1&t){const o=e.RV6();e.j41(0,"div",12)(1,"button",13),e.bIt("click",function(){const a=e.eBV(o).row,s=e.XpG();return e.Njj(s.editRoom(a))}),e.j41(2,"app-icon"),e.EFF(3,"edit"),e.k0s()()()}}let X=(()=>{class t{constructor(o,n){this._manager=o,this._clipboard=n,this.rooms=this._manager.filtered_rooms,this.editRoom=a=>this._manager.editRoom(a),this.copyToClipboard=a=>{this._clipboard.copy(a)&&(0,p.VX)("Room ID copied to clipboard.")}}static#e=this.\u0275fac=function(n){return new(n||t)(e.rXU(D),e.rXU(Xe.B0))};static#o=this.\u0275cmp=e.VBU({type:t,selectors:[["room-list"]],decls:11,vars:20,consts:[["name_template",""],["level_template",""],["bool_template",""],["action_template",""],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No rooms for selected level or building",1,"min-w-[48rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],[1,"p-4"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","text-white","mx-auto"],[1,"w-full","flex","justify-end","space-x-2","p-2"],["btn","","icon","","matRipple","","matTooltip","Edit Room",3,"click"]],template:function(n,a){if(1&n&&(e.j41(0,"div",4),e.nrm(1,"simple-table",5)(2,"div",6),e.k0s(),e.DNE(3,Ke,5,2,"ng-template",null,0,e.C5r)(5,We,4,5,"ng-template",null,1,e.C5r)(7,He,3,5,"ng-template",null,2,e.C5r)(9,Qe,4,0,"ng-template",null,3,e.C5r)),2&n){const s=e.sdS(4),r=e.sdS(6),c=e.sdS(8),f=e.sdS(10);e.R7$(),e.Y8G("data",a.rooms)("columns",e.l4e(13,Ze,e.eq3(3,Ye,s),e.eq3(5,Ve,r),e.lJ4(7,we),e.lJ4(8,Ue),e.eq3(9,Be,c),e.eq3(11,Je,f)))("sortable",!0)}},dependencies:[$.oV,v.r6,y.R,ke.O,ze.D]})}return t})();const qe=["app-room-manager",""];let eo=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275cmp=e.VBU({type:t,selectors:[["","app-room-manager",""]],attrs:qe,decls:4,vars:0,consts:[[1,"relative","overflow-hidden","flex","flex-col"],[1,"block","w-full"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,a){1&n&&(e.nrm(0,"sidebar"),e.j41(1,"main",0),e.nrm(2,"room-manager-topbar",1)(3,"room-list",2),e.k0s())},dependencies:[b.k,j,X],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=room-manager.component.ts-angular-inline--183.css.map*/"]})}return t})();var oo=i(45189),to=i(96843);const no=["app-new-room-manager",""],ao=[{path:"",component:eo},{path:"new",component:(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275cmp=e.VBU({type:t,selectors:[["","app-new-room-manager",""]],attrs:no,decls:6,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"block","w-full"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,a){1&n&&(e.nrm(0,"app-topbar"),e.j41(1,"div",0),e.nrm(2,"app-sidebar"),e.j41(3,"main",1),e.nrm(4,"room-manager-topbar",2)(5,"room-list",3),e.k0s()())},dependencies:[oo.S,to.c,j,X],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=new-room-manager.component.ts-angular-inline--186.css.map*/"]})}return t})()}];let io=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({imports:[g.MD,d.YN,T.r,N.lx,S.kR,O.YN,E.iI.forChild(ao)]})}return t})()},68390:(Q,C,i)=>{i.d(C,{g8:()=>N,kR:()=>g.k,Gp:()=>S.Gp,N8:()=>u.N8,SZ:()=>u.SZ,is:()=>b.is});var g=i(11081),T=(i(11543),i(7282),i(67450));class N{constructor(m={}){this.type=m.type||m.location||"other",this.position=m.position||m.map_id||m.asset_id||{x:m.x/m.map_width||0,y:m.y/m.map_height||0},this.variance=m.variance||0,this.last_seen=m.last_seen||(0,T.A)(new Date),this.level=m.level,this.building=m.building,this.at_location=!!m.at_location,this.coordinates_from=m.coordinates_from||"top-left"}}var S=i(93693),b=(i(24129),i(86039)),u=i(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_room-manager_room-manager_module_ts.js.map