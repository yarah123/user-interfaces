(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-apps_concierge_src_app_desks_desks-state_service_ts"],{7450:(e,o,t)=>{"use strict";t.d(o,{H:()=>B});var i=t(4762),r=t(8512),n=t(7701),s=t(4689),a=t(9996),l=t(7727),d=t(8303),c=t(3530),f=t(205),g=t(8125),u=t(4441),h=t(6839),p=t(8223),v=t(6817),m=t(1496),b=t(1950),k=t(4608),_=t(3080),w=t(2619),x=t(5980),Z=t(1548),A=t(1511),C=t(2319),T=t(9236),y=t(6073),q=t(7789),j=t(7806);function U(e,o){if(1&e&&(w.TgZ(0,"div",22),w.TgZ(1,"div",14),w._uU(2),w.qZA(),w.TgZ(3,"div",15),w._uU(4),w.qZA(),w.TgZ(5,"div",16),w.TgZ(6,"mat-checkbox",23),w.NdJ("ngModelChange",function(e){return o.$implicit.bookable=e}),w.qZA(),w.qZA(),w.TgZ(7,"div",24),w.TgZ(8,"item-list-field",25),w.NdJ("ngModelChange",function(e){return o.$implicit.groups=e}),w.qZA(),w.qZA(),w.qZA()),2&e){const e=o.$implicit;w.xp6(2),w.hij(" ",e.id," "),w.xp6(2),w.Oqu(e.name),w.xp6(2),w.Q6J("ngModel",e.bookable),w.xp6(2),w.Q6J("ngModel",e.groups)}}function M(e,o){if(1&e){const e=w.EpF();w.ynx(0),w.TgZ(1,"main",5),w.TgZ(2,"div",6),w.TgZ(3,"searchbar",7),w.NdJ("modelChange",function(o){return w.CHM(e),w.oxw().filter$.next(o)}),w.ALo(4,"async"),w.qZA(),w._UZ(5,"div",8),w.TgZ(6,"button",9),w._uU(7," Upload List "),w.TgZ(8,"input",10),w.NdJ("change",function(o){return w.CHM(e),w.oxw().upload(o)}),w.qZA(),w.qZA(),w.TgZ(9,"button",11),w.NdJ("click",function(){return w.CHM(e),w.oxw().download()}),w._uU(10," Download List "),w.qZA(),w.qZA(),w.TgZ(11,"div",12),w.TgZ(12,"div",13),w.TgZ(13,"div",14),w._uU(14,"ID"),w.qZA(),w.TgZ(15,"div",15),w._uU(16,"Name"),w.qZA(),w.TgZ(17,"div",16),w._uU(18,"Bookable"),w.qZA(),w.TgZ(19,"div",17),w._uU(20,"Groups"),w.qZA(),w.qZA(),w.TgZ(21,"div",18),w.YNc(22,U,9,4,"div",19),w.ALo(23,"async"),w.qZA(),w.qZA(),w.qZA(),w.TgZ(24,"footer",20),w.TgZ(25,"button",21),w.NdJ("click",function(){return w.CHM(e),w.oxw().save()}),w._uU(26,"Save"),w.qZA(),w.qZA(),w.BQk()}if(2&e){const e=w.oxw();w.xp6(3),w.Q6J("model",w.lcZ(4,2,e.filter$)),w.xp6(19),w.Q6J("ngForOf",w.lcZ(23,4,e.desk_list))}}function $(e,o){if(1&e&&(w.TgZ(0,"main",26),w._UZ(1,"mat-spinner",27),w.TgZ(2,"p"),w._uU(3),w.qZA(),w.qZA()),2&e){const e=w.oxw();w.xp6(1),w.Q6J("diameter",48),w.xp6(2),w.Oqu(e.loading)}}let N=(()=>{class e{constructor(e,o){this._data=e,this._dialog_ref=o,this.building=this._data.building,this.level=this._data.level,this.desks$=new r.X(this._data.desks),this.filter$=new r.X(""),this.desk_list=(0,_.aj)([this.filter$,this.desks$]).pipe((0,a.U)(e=>{const[o,t]=e;return t.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())||e.id.toLowerCase().includes(o.toLowerCase()))}))}download(){const e=this.desks$.getValue().map(e=>e.format()),o=(0,p.o3)(e),t=this.level.display_name.split(" ").join("-").toLowerCase();(0,p.Sv)(`desks_${t}.csv`,o)}upload(e){if(e.target){const o=e.target.files[0];if(o){this.loading="Uploading...";const e=new FileReader;e.readAsText(o,"UTF-8"),e.onload=()=>{this.processCSV(e.result),this.loading=""},e.onerror=e=>{this.loading="",(0,p.cB)("Error reading file.")}}}}save(){return(0,i.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...",yield(0,v.Ymr)(this.level.id,{name:"desks",description:"desks",details:this.desks$.getValue()}).toPromise().catch(e=>{throw this.loading="",(0,p.cB)(`Error saving desk data. Error: ${e.message||e}`),e}),(0,p.t5)("Successfully updated desks"),this.loading="",this._dialog_ref.close()})}processCSV(e){const o=(0,p.n5)(e);this.desks$.next(o.map(e=>new m.nk(e))),(0,p.t5)("Upload was sucessful. Click Save Button to save the changes")}}return e.\u0275fac=function(o){return new(o||e)(w.Y36(k.WI),w.Y36(k.so))},e.\u0275cmp=w.Xpm({type:e,selectors:[["desk-list-modal"]],decls:11,vars:4,consts:[[1,"flex","items-center"],[2,"margin-right","1rem"],["mat-icon-button","","mat-dialog-close",""],[4,"ngIf","ngIfElse"],["load_state",""],[1,"flex","flex-col"],[1,"flex","items-center","p-2","space-x-2","w-full","border-b","border-gray-300"],[3,"model","modelChange"],[1,"flex-1","w-0"],["mat-button","",1,"relative"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"],["mat-button","",3,"click"],[1,"flex","flex-col","flex-1","w-full"],[1,"flex","items-center","p-2","border-b","border-gray-300","font-medium"],["flex","",1,"w-40","p-1","flex-1"],[1,"w-32","p-1"],[1,"w-24","p-1"],[1,"w-52","p-1"],["table","",1,"flex-1","overflow-auto"],["class","flex item-center p-2 border-b border-gray-200",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","space-x-2","p-2","border-t","border-gray-300"],["mat-button","",1,"w-32",3,"click"],[1,"flex","item-center","p-2","border-b","border-gray-200"],[3,"ngModel","ngModelChange"],[1,"w-52"],["hide-outline","","no-wrapper","",3,"ngModel","ngModelChange"],[1,"w-64","h-48","mx-auto","flex","flex-col","items-center","justify-center"],[1,"m-4",3,"diameter"]],template:function(e,o){if(1&e&&(w.TgZ(0,"header",0),w.TgZ(1,"h2",1),w.TgZ(2,"strong"),w._uU(3,"List of Desks"),w.qZA(),w._uU(4),w.qZA(),w.TgZ(5,"button",2),w.TgZ(6,"app-icon"),w._uU(7,"close"),w.qZA(),w.qZA(),w.qZA(),w.YNc(8,M,27,6,"ng-container",3),w.YNc(9,$,4,2,"ng-template",null,4,w.W1O)),2&e){const e=w.MAs(10);w.xp6(4),w.AsE(" - ",o.building.display_name||o.building.name,", ",o.level.display_name||o.level.name," "),w.xp6(4),w.Q6J("ngIf",!o.loading)("ngIfElse",e)}},directives:[x.lW,k.ZT,Z.o,A.O5,C.U,A.sg,T.oG,y.JJ,y.On,q.q9,j.$g],pipes:[A.Ov],styles:["main[_ngcontent-%COMP%]{max-height:65vh}[table][_ngcontent-%COMP%]{height:1px;max-height:50vh}"]}),e})();function E(e){var o=this;e="object"==typeof e?e:{},o.revision=3,o.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},o.toTable=e.toTable,o.domElement=o.toTable?document.createElement("div"):document.createElement("canvas"),o.url=e.url||"",o.size=e.size||280,o.qrc=!1,o.colorLight=e.colorLight||"#fff",o.colorDark=e.colorDark||"#000",o.ecclevel=e.ecclevel||1,o.noBorder=e.noBorder,o.borderSize=e.borderSize||4;var t,i,r,n,s,a,l,d=[],c=[],f=[],g=[],u=[],h=[],p=function(e,o){var t;e>o&&(t=e,e=o,o=t),t=o,t*=o,t+=o,t>>=1,g[t+=e]=1},v=function(e,o){var t;for(f[e+r*o]=1,t=-2;t<2;t++)f[e+t+r*(o-2)]=1,f[e-2+r*(o+t+1)]=1,f[e+2+r*(o+t)]=1,f[e+t+1+r*(o+2)]=1;for(t=0;t<2;t++)p(e-1,o+t),p(e+1,o-t),p(e-t,o-1),p(e+t,o+1)},m=function(e){for(;e>=255;)e=((e-=255)>>8)+(255&e);return e},b=function(e,o,t,i){var r,n,s,a=E.gexp,l=E.glog;for(r=0;r<i;r++)d[t+r]=0;for(r=0;r<o;r++){if(255!=(s=l[d[e+r]^d[t]]))for(n=1;n<i;n++)d[t+n-1]=d[t+n]^a[m(s+h[i-n])];else for(n=t;n<t+i;n++)d[n]=d[n+1];d[t+i-1]=255==s?0:a[m(s+h[0])]}},k=function(e,o){var t;return e>o&&(t=e,e=o,o=t),t=o,t+=o*o,t>>=1,g[t+=e]},_=function(e){var o,t,i,n;switch(e){case 0:for(t=0;t<r;t++)for(o=0;o<r;o++)o+t&1||k(o,t)||(f[o+t*r]^=1);break;case 1:for(t=0;t<r;t++)for(o=0;o<r;o++)1&t||k(o,t)||(f[o+t*r]^=1);break;case 2:for(t=0;t<r;t++)for(i=0,o=0;o<r;o++,i++)3==i&&(i=0),i||k(o,t)||(f[o+t*r]^=1);break;case 3:for(n=0,t=0;t<r;t++,n++)for(3==n&&(n=0),i=n,o=0;o<r;o++,i++)3==i&&(i=0),i||k(o,t)||(f[o+t*r]^=1);break;case 4:for(t=0;t<r;t++)for(i=0,n=t>>1&1,o=0;o<r;o++,i++)3==i&&(i=0,n=!n),n||k(o,t)||(f[o+t*r]^=1);break;case 5:for(n=0,t=0;t<r;t++,n++)for(3==n&&(n=0),i=0,o=0;o<r;o++,i++)3==i&&(i=0),(o&t&1)+!(!i|!n)||k(o,t)||(f[o+t*r]^=1);break;case 6:for(n=0,t=0;t<r;t++,n++)for(3==n&&(n=0),i=0,o=0;o<r;o++,i++)3==i&&(i=0),(o&t&1)+(i&&i==n)&1||k(o,t)||(f[o+t*r]^=1);break;case 7:for(n=0,t=0;t<r;t++,n++)for(3==n&&(n=0),i=0,o=0;o<r;o++,i++)3==i&&(i=0),(i&&i==n)+(o+t&1)&1||k(o,t)||(f[o+t*r]^=1)}},w=function(e){var o,t=0;for(o=0;o<=e;o++)u[o]>=5&&(t+=E.N1+u[o]-5);for(o=3;o<e-1;o+=2)u[o-2]==u[o+2]&&u[o+2]==u[o-1]&&u[o-1]==u[o+1]&&3*u[o-1]==u[o]&&(0==u[o-3]||o+3>e||3*u[o-3]>=4*u[o]||3*u[o+3]>=4*u[o])&&(t+=E.N3);return t},x=function(){var e,o,t,i,n,s=0,a=0;for(o=0;o<r-1;o++)for(e=0;e<r-1;e++)(f[e+r*o]&&f[e+1+r*o]&&f[e+r*(o+1)]&&f[e+1+r*(o+1)]||!(f[e+r*o]||f[e+1+r*o]||f[e+r*(o+1)]||f[e+1+r*(o+1)]))&&(s+=E.N2);for(o=0;o<r;o++){for(u[0]=0,t=i=e=0;e<r;e++)(n=f[e+r*o])==i?u[t]++:u[++t]=1,a+=(i=n)?1:-1;s+=w(t)}a<0&&(a=-a);var l=a,d=0;for(l+=l<<2,l<<=1;l>r*r;)l-=r*r,d++;for(s+=d*E.N4,e=0;e<r;e++){for(u[0]=0,t=i=o=0;o<r;o++)(n=f[e+r*o])==i?u[t]++:u[++t]=1,i=n;s+=w(t)}return s};o.genframe=function(e){var o,u,w,Z,A,C,T,y,q=E.eccblocks,j=E.gexp,U=E.glog;Z=e.length,i=0;do{if(i++,w=4*(t-1)+16*(i-1),n=q[w++],s=q[w++],a=q[w++],l=q[w],Z<=(w=a*(n+s)+s-3+(i<=9)))break}while(i<40);for(r=17+4*i,A=a+(a+l)*(n+s)+s,Z=0;Z<A;Z++)c[Z]=0;for(d=e.slice(0),Z=0;Z<r*r;Z++)f[Z]=0;for(Z=0;Z<(r*(r+1)+1)/2;Z++)g[Z]=0;for(Z=0;Z<3;Z++){for(w=0,u=0,1==Z&&(w=r-7),2==Z&&(u=r-7),f[u+3+r*(w+3)]=1,o=0;o<6;o++)f[u+o+r*w]=1,f[u+r*(w+o+1)]=1,f[u+6+r*(w+o)]=1,f[u+o+1+r*(w+6)]=1;for(o=1;o<5;o++)p(u+o,w+1),p(u+1,w+o+1),p(u+5,w+o),p(u+o+1,w+5);for(o=2;o<4;o++)f[u+o+r*(w+2)]=1,f[u+2+r*(w+o+1)]=1,f[u+4+r*(w+o)]=1,f[u+o+1+r*(w+4)]=1}if(i>1)for(Z=E.adelta[i],u=r-7;;){for(o=r-7;o>Z-3&&(v(o,u),!(o<Z));)o-=Z;if(u<=Z+9)break;v(6,u-=Z),v(u,6)}for(f[8+r*(r-8)]=1,u=0;u<7;u++)p(7,u),p(r-8,u),p(7,u+r-7);for(o=0;o<8;o++)p(o,7),p(o+r-8,7),p(o,r-8);for(o=0;o<9;o++)p(o,8);for(o=0;o<8;o++)p(o+r-8,8),p(8,o);for(u=0;u<7;u++)p(8,u+r-7);for(o=0;o<r-14;o++)1&o?(p(8+o,6),p(6,8+o)):(f[8+o+6*r]=1,f[6+r*(8+o)]=1);if(i>6)for(Z=E.vpat[i-7],w=17,o=0;o<6;o++)for(u=0;u<3;u++,w--)1&(w>11?i>>w-12:Z>>w)?(f[5-o+r*(2-u+r-11)]=1,f[2-u+r-11+r*(5-o)]=1):(p(5-o,2-u+r-11),p(2-u+r-11,5-o));for(u=0;u<r;u++)for(o=0;o<=u;o++)f[o+r*u]&&p(o,u);for(A=d.length,C=0;C<A;C++)c[C]=d.charCodeAt(C);if(d=c.slice(0),A>=(o=a*(n+s)+s)-2&&(A=o-2,i>9&&A--),C=A,i>9){for(d[C+2]=0,d[C+3]=0;C--;)d[C+3]|=255&(Z=d[C])<<4,d[C+2]=Z>>4;d[2]|=255&A<<4,d[1]=A>>4,d[0]=64|A>>12}else{for(d[C+1]=0,d[C+2]=0;C--;)d[C+2]|=255&(Z=d[C])<<4,d[C+1]=Z>>4;d[1]|=255&A<<4,d[0]=64|A>>4}for(C=A+3-(i<10);C<o;)d[C++]=236,d[C++]=17;for(h[0]=1,C=0;C<l;C++){for(h[C+1]=1,T=C;T>0;T--)h[T]=h[T]?h[T-1]^j[m(U[h[T]]+C)]:h[T-1];h[0]=j[m(U[h[0]]+C)]}for(C=0;C<=l;C++)h[C]=U[h[C]];for(w=o,u=0,C=0;C<n;C++)b(u,a,w,l),u+=a,w+=l;for(C=0;C<s;C++)b(u,a+1,w,l),u+=a+1,w+=l;for(u=0,C=0;C<a;C++){for(T=0;T<n;T++)c[u++]=d[C+T*a];for(T=0;T<s;T++)c[u++]=d[n*a+C+T*(a+1)]}for(T=0;T<s;T++)c[u++]=d[n*a+C+T*(a+1)];for(C=0;C<l;C++)for(T=0;T<n+s;T++)c[u++]=d[o+C+T*l];for(d=c,o=u=r-1,w=A=1,y=(a+l)*(n+s)+s,C=0;C<y;C++)for(Z=d[C],T=0;T<8;T++,Z<<=1){128&Z&&(f[o+r*u]=1);do{A?o--:(o++,w?0!=u?u--:(w=!w,6==(o-=2)&&(o--,u=9)):u!=r-1?u++:(w=!w,6==(o-=2)&&(o--,u-=8))),A=!A}while(k(o,u))}for(d=f.slice(0),Z=0,u=3e4,w=0;w<8&&(_(w),(o=x())<u&&(u=o,Z=w),7!=Z);w++)f=d.slice(0);for(Z!=w&&_(Z),u=E.fmtword[Z+(t-1<<3)],w=0;w<8;w++,u>>=1)1&u&&(f[r-1-w+8*r]=1,w<6?f[8+r*w]=1:f[8+r*(w+1)]=1);for(w=0;w<7;w++,u>>=1)1&u&&(f[8+r*(r-7+w)]=1,w?f[6-w+8*r]=1:f[7+8*r]=1);return f},o.init=function(){t=o.ecclevel;var e=o.genframe(o.url);o.toTable?o.tableWrite(e,r):o.canvasWrite(e,r)},o.init()}E.prototype={canvasWrite:function(e,o){var t=this;if(!t.qrc&&(t.qrc=t.getContext(t.domElement),!t.qrc))return t.toTable=!0,t.domElement=document.createElement("div"),void t.tableWrite(e,o);var i=t.size,r=t.qrc;r.lineWidth=1;var n=i;n/=o+10,n=Math.round(n-.5);var s=4;t.noBorder?(r.canvas.width=r.canvas.height=n*o,s=0):r.canvas.width=r.canvas.height=i,r.clearRect(0,0,i,i),r.fillStyle=t.colorLight,r.fillRect(0,0,n*(o+8),n*(o+8)),r.fillStyle=t.colorDark;for(var a=0;a<o;a++)for(var l=0;l<o;l++)e[l*o+a]&&r.fillRect(n*(s+a),n*(s+l),n,n)},tableWrite:function(e,o){var t=this,i=Math.round(this.size/o-3.5)+"px",r=o+(t.noBorder?0:2*t.borderSize),n=t.borderSize,s="width:"+i+";height:"+i+";",a=t.colorLight,l=t.colorDark,d=document.createElement("table");d.style.cssText="border:0;border-collapse:collapse;";for(var c,f=document.createElement("tr"),g=document.createElement("td"),u=function(){return g.cloneNode()},h=function(){var e=u();return e.style.cssText=s+"background:"+a,e},p=function(e){for(var o=e.firstChild,t=0;t<n;t++)e.insertBefore(h(),o),e.appendChild(h())},v=0;v<o;v++){var m=f.cloneNode();d.appendChild(m);for(var b=0;b<o;b++)if(1===e[v*o+b]){var k=(c=void 0,(c=u()).style.cssText=s+"background:"+l,c);m.appendChild(k)}else{var _=h();m.appendChild(_)}t.noBorder||p(m)}t.noBorder||function(e){for(var o=e.firstChild,i=0;i<t.borderSize;i++){for(var n=f.cloneNode(),s=0;s<r;s++){var a=h();n.appendChild(a)}e.appendChild(n),e.insertBefore(n.cloneNode(!0),o)}}(d),t.domElement.innerHTML="",t.domElement.appendChild(d)},getContext:function(e){return e.getContext&&e.getContext("2d")?e.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(e){if(this.qrc){var o=this.imageTypes[e];if(!o)throw new Error(e+" is not a valid image type ");var t=new Image;return t.src=this.domElement.toDataURL(o),t}}},E.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],E.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],E.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],E.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],E.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],E.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],E.N1=3,E.N2=3,E.N3=40,E.N4=10;const O=E;function z(e){var o;return null===(o=new O({url:e||"Hello",size:360,colorLight:"#ffffff",colorDark:"#000000",toTable:!1,ecclevel:1,noBorder:!0,borderSize:0}).toImage("svg+xml"))||void 0===o?void 0:o.src}let B=(()=>{class e extends p.KG{constructor(e,o){super(),this._org=e,this._dialog=o,this._filters=new r.X({}),this._desk_bookings=[],this._desks=[],this._loading=new r.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,n.b)(500),(0,s.w)(e=>{var o;const t=e.zones||[];return t.includes("All")?(0,v.BW_)(null===(o=this._org.building)||void 0===o?void 0:o.id,{name:"desks"}).pipe((0,a.U)(e=>e.map(e=>e.metadata.desks.details).reduce((e,o)=>[...e,...o],[]))):(0,v.rlq)(t[0],{name:"desks"}).pipe((0,a.U)(e=>e.details))}),(0,l.K)(e=>[]),(0,a.U)(e=>(e instanceof Array||(e=[]),e.sort((e,o)=>e.name.localeCompare(o.name)),this._desks=e.map(e=>new m.nk(Object.assign(Object.assign({},e),{qr_code:z(`/workplace/#/book/code?checkin=${encodeURIComponent(e.id)}`)}))),this._desks)),(0,d.d)()),this.bookings=this._filters.pipe((0,n.b)(500),(0,s.w)(e=>{this._loading.next(!0);const o=e.date?new Date(e.date):new Date;let t=(e.zones||[]).filter(e=>-1!==e&&"-1"!==e&&"All"!==e);return(null==t?void 0:t.length)||(t=this._org.levelsForBuilding(this._org.building).map(e=>e.id)),(0,h.F2)({period_start:Math.floor((0,f.Z)(o).valueOf()/1e3),period_end:Math.floor((0,g.Z)(o).valueOf()/1e3),type:"desk",zones:(t||[]).join(",")})}),(0,a.U)(e=>(e.sort((e,o)=>e.date-o.date),this._desk_bookings=e.map(e=>new h.$N(Object.assign(Object.assign({},e),{extension_data:Object.assign(Object.assign({},e.extension_data),{checkin_qr_code:z(`/workplace/#/book/code?checkin=${encodeURIComponent(e.asset_id)}`)})}))),this._loading.next(!1),e)),(0,d.d)())}setFilters(e){var o,t,i;(null===(o=e.zones)||void 0===o?void 0:o.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(e=>e.id)]:e.zones&&(null===(i=null===(t=this._filters.getValue())||void 0===t?void 0:t.zones)||void 0===i?void 0:i.includes("All"))&&(e.zones=[]),console.warn("Filters:",e),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return(0,i.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,h.FD)(e.id,!0).toPromise().catch(e=>"failed"))?(0,p.cB)("Error checking in desk booking"):(0,p.t5)(`Checked in ${e.user_name}.`)})}approveDesk(e){return(0,i.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,h.jT)(e.id).toPromise().catch(e=>"failed"))?(0,p.cB)("Error approving in desk booking"):(0,p.t5)(`Approved desk booking for ${e.user_name} on ${(0,u.Z)(e.date,"MMM Do")}.`)})}rejectDesk(e){return(0,i.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,h.FP)(e.id).toPromise().catch(e=>"failed"))?(0,p.cB)("Error rejecting in desk booking"):(0,p.t5)(`Rejected desk booking for ${e.user_name} on ${(0,u.Z)(e.date,"MMM Do")}.`)})}giveAccess(e){return(0,i.mG)(this,void 0,void 0,function*(){const o=yield(0,h.km)(new h.$N(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(e=>"failed");if("failed"===o)return(0,p.cB)("Error giving building access booking host");(0,p.t5)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,o]})}rejectAllDesks(){return(0,i.mG)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const o=this._dialog.open(b.z5,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((t,r)=>(0,i.mG)(this,void 0,void 0,function*(){let n=!1;o.componentInstance.event.pipe((0,c.P)(e=>"done"===e.reason)).subscribe(()=>(0,i.mG)(this,void 0,void 0,function*(){o.componentInstance.loading="Rejecting all desks for selected date...",n=!0,yield Promise.all(e.map(e=>(0,h.FP)(e.id).toPromise())),t(""),(0,p.t5)("Successfull rejected all desk bookings for selected date."),o.close()})),yield o.afterClosed().toPromise(),n||r()}))}(0,p.QD)("No desks to reject for the selected date")})}updateDesks(){return(0,i.mG)(this,void 0,void 0,function*(){const e=this._dialog.open(N,{data:{level:this._org.levelWithID(this._filters.getValue().zones)||this._org.level_list[0],building:this._org.building,desks:this._desks}});yield e.afterClosed().toPromise(),this._desks=e.componentInstance.desks$.getValue()})}}return e.\u0275fac=function(o){return new(o||e)(w.LFG(m.w7),w.LFG(k.uw))},e.\u0275prov=w.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=default-apps_concierge_src_app_desks_desks-state_service_ts.js.map