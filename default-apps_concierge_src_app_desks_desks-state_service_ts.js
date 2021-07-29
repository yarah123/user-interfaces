(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-apps_concierge_src_app_desks_desks-state_service_ts"],{9497:(e,o,r)=>{"use strict";r.d(o,{H:()=>C});var t=r(4762),i=r(8512),n=r(7701),s=r(4689),a=r(9996),l=r(7727),c=r(8303),d=r(3530),f=r(205),g=r(8125),h=r(4441),u=r(6839),v=r(8223),p=r(6817),m=r(1496),k=r(2347),b=r(3054);function _(e){var o;return null===(o=new b.VanillaQR({url:e||"Hello",size:360,colorLight:"#ffffff",colorDark:"#000000",toTable:!1,ecclevel:1,noBorder:!0,borderSize:0}).toImage("svg+xml"))||void 0===o?void 0:o.src}var w=r(2619),j=r(4608);let C=(()=>{class e extends v.KG{constructor(e,o){super(),this._org=e,this._dialog=o,this._filters=new i.X({}),this._desk_bookings=[],this._desks=[],this._loading=new i.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,n.b)(500),(0,s.w)(e=>{var o;const r=e.zones||[];return r.includes("All")?(0,p.BW_)(null===(o=this._org.building)||void 0===o?void 0:o.id,{name:"desks"}).pipe((0,a.U)(e=>e.map(e=>e.metadata.desks.details).reduce((e,o)=>[...e,...o],[]))):(0,p.rlq)(r[0],{name:"desks"}).pipe((0,a.U)(e=>e.details))}),(0,l.K)(e=>[]),(0,a.U)(e=>(e instanceof Array||(e=[]),e.sort((e,o)=>e.name.localeCompare(o.name)),this._desks=e.map(e=>new m.nk(Object.assign(Object.assign({},e),{qr_code:_(`/workplace/#/book/code?checkin=${encodeURIComponent(e.id)}`)}))),this._desks)),(0,c.d)()),this.bookings=this._filters.pipe((0,n.b)(500),(0,s.w)(e=>{this._loading.next(!0);const o=e.date?new Date(e.date):new Date;let r=(e.zones||[]).filter(e=>-1!==e&&"-1"!==e&&"All"!==e);return(null==r?void 0:r.length)||(r=this._org.levelsForBuilding(this._org.building).map(e=>e.id)),(0,u.F2)({period_start:Math.floor((0,f.Z)(o).valueOf()/1e3),period_end:Math.floor((0,g.Z)(o).valueOf()/1e3),type:"desk",zones:(r||[]).join(",")})}),(0,a.U)(e=>(e.sort((e,o)=>e.date-o.date),this._desk_bookings=e.map(e=>new u.$N(Object.assign(Object.assign({},e),{extension_data:Object.assign(Object.assign({},e.extension_data),{checkin_qr_code:_(`/workplace/#/book/code?checkin=${encodeURIComponent(e.asset_id)}`)})}))),this._loading.next(!1),e)),(0,c.d)())}setFilters(e){var o,r,t;(null===(o=e.zones)||void 0===o?void 0:o.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(e=>e.id)]:e.zones&&(null===(t=null===(r=this._filters.getValue())||void 0===r?void 0:r.zones)||void 0===t?void 0:t.includes("All"))&&(e.zones=[]),console.warn("Filters:",e),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return(0,t.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,u.FD)(e.id,!0).toPromise().catch(e=>"failed"))?(0,v.cB)("Error checking in desk booking"):(0,v.t5)(`Checked in ${e.user_name}.`)})}approveDesk(e){return(0,t.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,u.jT)(e.id).toPromise().catch(e=>"failed"))?(0,v.cB)("Error approving in desk booking"):(0,v.t5)(`Approved desk booking for ${e.user_name} on ${(0,h.Z)(e.date,"MMM Do")}.`)})}rejectDesk(e){return(0,t.mG)(this,void 0,void 0,function*(){"failed"===(yield(0,u.FP)(e.id).toPromise().catch(e=>"failed"))?(0,v.cB)("Error rejecting in desk booking"):(0,v.t5)(`Rejected desk booking for ${e.user_name} on ${(0,h.Z)(e.date,"MMM Do")}.`)})}giveAccess(e){return(0,t.mG)(this,void 0,void 0,function*(){const o=yield(0,u.km)(new u.$N(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(e=>"failed");if("failed"===o)return(0,v.cB)("Error giving building access booking host");(0,v.t5)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,o]})}rejectAllDesks(){return(0,t.mG)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const o=this._dialog.open(k.z5,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((r,i)=>{let n=!1;o.componentInstance.event.pipe((0,d.P)(e=>"done"===e.reason)).subscribe(()=>(0,t.mG)(this,void 0,void 0,function*(){o.componentInstance.loading="Rejecting all desks for selected date...",n=!0,yield Promise.all(e.map(e=>(0,u.FP)(e.id).toPromise())),r(""),(0,v.t5)("Successfull rejected all desk bookings for selected date."),o.close()})),o.afterClosed().toPromise().then(()=>{n||i()})})}(0,v.QD)("No desks to reject for the selected date")})}}return e.\u0275fac=function(o){return new(o||e)(w.LFG(m.w7),w.LFG(j.uw))},e.\u0275prov=w.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3054:()=>{function e(o){var r=this;o="object"==typeof o?o:{},r.revision=3,r.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},r.toTable=o.toTable,r.domElement=r.toTable?document.createElement("div"):document.createElement("canvas"),r.url=o.url||"",r.size=o.size||280,r.qrc=!1,r.colorLight=o.colorLight||"#fff",r.colorDark=o.colorDark||"#000",r.ecclevel=o.ecclevel||1,r.noBorder=o.noBorder,r.borderSize=o.borderSize||4;var t,i,n,s,a,l,c,d=[],f=[],g=[],h=[],u=[],v=[],p=function(e,o){var r;e>o&&(r=e,e=o,o=r),r=o,r*=o,r+=o,r>>=1,h[r+=e]=1},m=function(e,o){var r;for(g[e+n*o]=1,r=-2;r<2;r++)g[e+r+n*(o-2)]=1,g[e-2+n*(o+r+1)]=1,g[e+2+n*(o+r)]=1,g[e+r+1+n*(o+2)]=1;for(r=0;r<2;r++)p(e-1,o+r),p(e+1,o-r),p(e-r,o-1),p(e+r,o+1)},k=function(e){for(;e>=255;)e=((e-=255)>>8)+(255&e);return e},b=function(o,r,t,i){var n,s,a,l=e.gexp,c=e.glog;for(n=0;n<i;n++)d[t+n]=0;for(n=0;n<r;n++){if(255!=(a=c[d[o+n]^d[t]]))for(s=1;s<i;s++)d[t+s-1]=d[t+s]^l[k(a+v[i-s])];else for(s=t;s<t+i;s++)d[s]=d[s+1];d[t+i-1]=255==a?0:l[k(a+v[0])]}},_=function(e,o){var r;return e>o&&(r=e,e=o,o=r),r=o,r+=o*o,r>>=1,h[r+=e]},w=function(e){var o,r,t,i;switch(e){case 0:for(r=0;r<n;r++)for(o=0;o<n;o++)o+r&1||_(o,r)||(g[o+r*n]^=1);break;case 1:for(r=0;r<n;r++)for(o=0;o<n;o++)1&r||_(o,r)||(g[o+r*n]^=1);break;case 2:for(r=0;r<n;r++)for(t=0,o=0;o<n;o++,t++)3==t&&(t=0),t||_(o,r)||(g[o+r*n]^=1);break;case 3:for(i=0,r=0;r<n;r++,i++)for(3==i&&(i=0),t=i,o=0;o<n;o++,t++)3==t&&(t=0),t||_(o,r)||(g[o+r*n]^=1);break;case 4:for(r=0;r<n;r++)for(t=0,i=r>>1&1,o=0;o<n;o++,t++)3==t&&(t=0,i=!i),i||_(o,r)||(g[o+r*n]^=1);break;case 5:for(i=0,r=0;r<n;r++,i++)for(3==i&&(i=0),t=0,o=0;o<n;o++,t++)3==t&&(t=0),(o&r&1)+!(!t|!i)||_(o,r)||(g[o+r*n]^=1);break;case 6:for(i=0,r=0;r<n;r++,i++)for(3==i&&(i=0),t=0,o=0;o<n;o++,t++)3==t&&(t=0),(o&r&1)+(t&&t==i)&1||_(o,r)||(g[o+r*n]^=1);break;case 7:for(i=0,r=0;r<n;r++,i++)for(3==i&&(i=0),t=0,o=0;o<n;o++,t++)3==t&&(t=0),(t&&t==i)+(o+r&1)&1||_(o,r)||(g[o+r*n]^=1)}},j=function(o){var r,t=0;for(r=0;r<=o;r++)u[r]>=5&&(t+=e.N1+u[r]-5);for(r=3;r<o-1;r+=2)u[r-2]==u[r+2]&&u[r+2]==u[r-1]&&u[r-1]==u[r+1]&&3*u[r-1]==u[r]&&(0==u[r-3]||r+3>o||3*u[r-3]>=4*u[r]||3*u[r+3]>=4*u[r])&&(t+=e.N3);return t},C=function(){var o,r,t,i,s,a=0,l=0;for(r=0;r<n-1;r++)for(o=0;o<n-1;o++)(g[o+n*r]&&g[o+1+n*r]&&g[o+n*(r+1)]&&g[o+1+n*(r+1)]||!(g[o+n*r]||g[o+1+n*r]||g[o+n*(r+1)]||g[o+1+n*(r+1)]))&&(a+=e.N2);for(r=0;r<n;r++){for(u[0]=0,t=i=o=0;o<n;o++)(s=g[o+n*r])==i?u[t]++:u[++t]=1,l+=(i=s)?1:-1;a+=j(t)}l<0&&(l=-l);var c=l,d=0;for(c+=c<<2,c<<=1;c>n*n;)c-=n*n,d++;for(a+=d*e.N4,o=0;o<n;o++){for(u[0]=0,t=i=r=0;r<n;r++)(s=g[o+n*r])==i?u[t]++:u[++t]=1,i=s;a+=j(t)}return a};r.genframe=function(o){var r,u,j,x,y,z,B,E,D=e.eccblocks,N=e.gexp,O=e.glog;x=o.length,i=0;do{if(i++,j=4*(t-1)+16*(i-1),s=D[j++],a=D[j++],l=D[j++],c=D[j],x<=(j=l*(s+a)+a-3+(i<=9)))break}while(i<40);for(n=17+4*i,y=l+(l+c)*(s+a)+a,x=0;x<y;x++)f[x]=0;for(d=o.slice(0),x=0;x<n*n;x++)g[x]=0;for(x=0;x<(n*(n+1)+1)/2;x++)h[x]=0;for(x=0;x<3;x++){for(j=0,u=0,1==x&&(j=n-7),2==x&&(u=n-7),g[u+3+n*(j+3)]=1,r=0;r<6;r++)g[u+r+n*j]=1,g[u+n*(j+r+1)]=1,g[u+6+n*(j+r)]=1,g[u+r+1+n*(j+6)]=1;for(r=1;r<5;r++)p(u+r,j+1),p(u+1,j+r+1),p(u+5,j+r),p(u+r+1,j+5);for(r=2;r<4;r++)g[u+r+n*(j+2)]=1,g[u+2+n*(j+r+1)]=1,g[u+4+n*(j+r)]=1,g[u+r+1+n*(j+4)]=1}if(i>1)for(x=e.adelta[i],u=n-7;;){for(r=n-7;r>x-3&&(m(r,u),!(r<x));)r-=x;if(u<=x+9)break;m(6,u-=x),m(u,6)}for(g[8+n*(n-8)]=1,u=0;u<7;u++)p(7,u),p(n-8,u),p(7,u+n-7);for(r=0;r<8;r++)p(r,7),p(r+n-8,7),p(r,n-8);for(r=0;r<9;r++)p(r,8);for(r=0;r<8;r++)p(r+n-8,8),p(8,r);for(u=0;u<7;u++)p(8,u+n-7);for(r=0;r<n-14;r++)1&r?(p(8+r,6),p(6,8+r)):(g[8+r+6*n]=1,g[6+n*(8+r)]=1);if(i>6)for(x=e.vpat[i-7],j=17,r=0;r<6;r++)for(u=0;u<3;u++,j--)1&(j>11?i>>j-12:x>>j)?(g[5-r+n*(2-u+n-11)]=1,g[2-u+n-11+n*(5-r)]=1):(p(5-r,2-u+n-11),p(2-u+n-11,5-r));for(u=0;u<n;u++)for(r=0;r<=u;r++)g[r+n*u]&&p(r,u);for(y=d.length,z=0;z<y;z++)f[z]=d.charCodeAt(z);if(d=f.slice(0),y>=(r=l*(s+a)+a)-2&&(y=r-2,i>9&&y--),z=y,i>9){for(d[z+2]=0,d[z+3]=0;z--;)d[z+3]|=255&(x=d[z])<<4,d[z+2]=x>>4;d[2]|=255&y<<4,d[1]=y>>4,d[0]=64|y>>12}else{for(d[z+1]=0,d[z+2]=0;z--;)d[z+2]|=255&(x=d[z])<<4,d[z+1]=x>>4;d[1]|=255&y<<4,d[0]=64|y>>4}for(z=y+3-(i<10);z<r;)d[z++]=236,d[z++]=17;for(v[0]=1,z=0;z<c;z++){for(v[z+1]=1,B=z;B>0;B--)v[B]=v[B]?v[B-1]^N[k(O[v[B]]+z)]:v[B-1];v[0]=N[k(O[v[0]]+z)]}for(z=0;z<=c;z++)v[z]=O[v[z]];for(j=r,u=0,z=0;z<s;z++)b(u,l,j,c),u+=l,j+=c;for(z=0;z<a;z++)b(u,l+1,j,c),u+=l+1,j+=c;for(u=0,z=0;z<l;z++){for(B=0;B<s;B++)f[u++]=d[z+B*l];for(B=0;B<a;B++)f[u++]=d[s*l+z+B*(l+1)]}for(B=0;B<a;B++)f[u++]=d[s*l+z+B*(l+1)];for(z=0;z<c;z++)for(B=0;B<s+a;B++)f[u++]=d[r+z+B*c];for(d=f,r=u=n-1,j=y=1,E=(l+c)*(s+a)+a,z=0;z<E;z++)for(x=d[z],B=0;B<8;B++,x<<=1){128&x&&(g[r+n*u]=1);do{y?r--:(r++,j?0!=u?u--:(j=!j,6==(r-=2)&&(r--,u=9)):u!=n-1?u++:(j=!j,6==(r-=2)&&(r--,u-=8))),y=!y}while(_(r,u))}for(d=g.slice(0),x=0,u=3e4,j=0;j<8&&(w(j),(r=C())<u&&(u=r,x=j),7!=x);j++)g=d.slice(0);for(x!=j&&w(x),u=e.fmtword[x+(t-1<<3)],j=0;j<8;j++,u>>=1)1&u&&(g[n-1-j+8*n]=1,j<6?g[8+n*j]=1:g[8+n*(j+1)]=1);for(j=0;j<7;j++,u>>=1)1&u&&(g[8+n*(n-7+j)]=1,j?g[6-j+8*n]=1:g[7+8*n]=1);return g},r.init=function(){t=r.ecclevel;var e=r.genframe(r.url);r.toTable?r.tableWrite(e,n):r.canvasWrite(e,n)},r.init()}e.prototype={canvasWrite:function(e,o){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(e,o);var r=this.size,t=this.qrc;t.lineWidth=1;var i=r;i/=o+10,i=Math.round(i-.5);var n=4;this.noBorder?(t.canvas.width=t.canvas.height=i*o,n=0):t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r),t.fillStyle=this.colorLight,t.fillRect(0,0,i*(o+8),i*(o+8)),t.fillStyle=this.colorDark;for(var s=0;s<o;s++)for(var a=0;a<o;a++)e[a*o+s]&&t.fillRect(i*(n+s),i*(n+a),i,i)},tableWrite:function(e,o){var r=this,t=Math.round(this.size/o-3.5)+"px",i=o+(r.noBorder?0:2*r.borderSize),n=r.borderSize,s="width:"+t+";height:"+t+";",a=r.colorLight,l=r.colorDark,c=document.createElement("table");c.style.cssText="border:0;border-collapse:collapse;";for(var d,f=document.createElement("tr"),g=document.createElement("td"),h=function(){return g.cloneNode()},u=function(){var e=h();return e.style.cssText=s+"background:"+a,e},v=function(e){for(var o=e.firstChild,r=0;r<n;r++)e.insertBefore(u(),o),e.appendChild(u())},p=0;p<o;p++){var m=f.cloneNode();c.appendChild(m);for(var k=0;k<o;k++)if(1===e[p*o+k]){var b=(d=void 0,(d=h()).style.cssText=s+"background:"+l,d);m.appendChild(b)}else{var _=u();m.appendChild(_)}r.noBorder||v(m)}r.noBorder||function(e){for(var o=e.firstChild,t=0;t<r.borderSize;t++){for(var n=f.cloneNode(),s=0;s<i;s++){var a=u();n.appendChild(a)}e.appendChild(n),e.insertBefore(n.cloneNode(!0),o)}}(c),r.domElement.innerHTML="",r.domElement.appendChild(c)},getContext:function(e){return e.getContext&&e.getContext("2d")?e.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(e){if(this.qrc){var o=this.imageTypes[e];if(!o)throw new Error(e+" is not a valid image type ");var r=new Image;return r.src=this.domElement.toDataURL(o),r}}},e.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],e.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],e.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],e.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],e.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],e.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],e.N1=3,e.N2=3,e.N3=40,e.N4=10}}]);
//# sourceMappingURL=default-apps_concierge_src_app_desks_desks-state_service_ts.js.map