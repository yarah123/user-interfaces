"use strict";(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["default-libs_explore_src_index_ts"],{6044:(se,R,_)=>{function T(A){var b=this;A="object"==typeof A?A:{},b.revision=3,b.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},b.toTable=A.toTable,b.domElement=b.toTable?document.createElement("div"):document.createElement("canvas"),b.url=A.url||"",b.size=A.size||280,b.qrc=!1,b.colorLight=A.colorLight||"#fff",b.colorDark=A.colorDark||"#000",b.ecclevel=A.ecclevel||1,b.noBorder=A.noBorder,b.borderSize=A.borderSize||4;var L,O,r,M,y,P,j,x=[],e=[],g=[],D=[],Z=[],k=[],C=function(m,s){var i;m>s&&(i=m,m=s,s=i),i=s,i*=s,i+=s,i>>=1,D[i+=m]=1},B=function(m,s){var i;for(g[m+r*s]=1,i=-2;i<2;i++)g[m+i+r*(s-2)]=1,g[m-2+r*(s+i+1)]=1,g[m+2+r*(s+i)]=1,g[m+i+1+r*(s+2)]=1;for(i=0;i<2;i++)C(m-1,s+i),C(m+1,s-i),C(m-i,s-1),C(m+i,s+1)},F=function(m){for(;m>=255;)m=((m-=255)>>8)+(255&m);return m},J=function(m,s,i,c){var p,S,h,U=T.gexp,$=T.glog;for(p=0;p<c;p++)x[i+p]=0;for(p=0;p<s;p++){if(255!=(h=$[x[m+p]^x[i]]))for(S=1;S<c;S++)x[i+S-1]=x[i+S]^U[F(h+k[c-S])];else for(S=i;S<i+c;S++)x[S]=x[S+1];x[i+c-1]=255==h?0:U[F(h+k[0])]}},z=function(m,s){var i;return m>s&&(i=m,m=s,s=i),i=s,i+=s*s,i>>=1,D[i+=m]},q=function(m){var s,i,c,p;switch(m){case 0:for(i=0;i<r;i++)for(s=0;s<r;s++)s+i&1||z(s,i)||(g[s+i*r]^=1);break;case 1:for(i=0;i<r;i++)for(s=0;s<r;s++)1&i||z(s,i)||(g[s+i*r]^=1);break;case 2:for(i=0;i<r;i++)for(c=0,s=0;s<r;s++,c++)3==c&&(c=0),c||z(s,i)||(g[s+i*r]^=1);break;case 3:for(p=0,i=0;i<r;i++,p++)for(3==p&&(p=0),c=p,s=0;s<r;s++,c++)3==c&&(c=0),c||z(s,i)||(g[s+i*r]^=1);break;case 4:for(i=0;i<r;i++)for(c=0,p=i>>1&1,s=0;s<r;s++,c++)3==c&&(c=0,p=!p),p||z(s,i)||(g[s+i*r]^=1);break;case 5:for(p=0,i=0;i<r;i++,p++)for(3==p&&(p=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(s&i&1)+!(!c|!p)||z(s,i)||(g[s+i*r]^=1);break;case 6:for(p=0,i=0;i<r;i++,p++)for(3==p&&(p=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(s&i&1)+(c&&c==p)&1||z(s,i)||(g[s+i*r]^=1);break;case 7:for(p=0,i=0;i<r;i++,p++)for(3==p&&(p=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(c&&c==p)+(s+i&1)&1||z(s,i)||(g[s+i*r]^=1)}},N=function(m){var s,i=0;for(s=0;s<=m;s++)Z[s]>=5&&(i+=T.N1+Z[s]-5);for(s=3;s<m-1;s+=2)Z[s-2]==Z[s+2]&&Z[s+2]==Z[s-1]&&Z[s-1]==Z[s+1]&&3*Z[s-1]==Z[s]&&(0==Z[s-3]||s+3>m||3*Z[s-3]>=4*Z[s]||3*Z[s+3]>=4*Z[s])&&(i+=T.N3);return i},W=function(){var m,s,i,c,p,S=0,h=0;for(s=0;s<r-1;s++)for(m=0;m<r-1;m++)(g[m+r*s]&&g[m+1+r*s]&&g[m+r*(s+1)]&&g[m+1+r*(s+1)]||!(g[m+r*s]||g[m+1+r*s]||g[m+r*(s+1)]||g[m+1+r*(s+1)]))&&(S+=T.N2);for(s=0;s<r;s++){for(Z[0]=0,i=c=m=0;m<r;m++)(p=g[m+r*s])==c?Z[i]++:Z[++i]=1,h+=(c=p)?1:-1;S+=N(i)}h<0&&(h=-h);var U=h,$=0;for(U+=U<<2,U<<=1;U>r*r;)U-=r*r,$++;for(S+=$*T.N4,m=0;m<r;m++){for(Z[0]=0,i=c=s=0;s<r;s++)(p=g[m+r*s])==c?Z[i]++:Z[++i]=1,c=p;S+=N(i)}return S};b.genframe=function(m){var s,i,c,p,S,h,U,$,V=T.eccblocks,G=T.gexp,H=T.glog;p=m.length,O=0;do{if(O++,c=4*(L-1)+16*(O-1),M=V[c++],y=V[c++],P=V[c++],j=V[c],p<=(c=P*(M+y)+y-3+(O<=9)))break}while(O<40);for(r=17+4*O,S=P+(P+j)*(M+y)+y,p=0;p<S;p++)e[p]=0;for(x=m.slice(0),p=0;p<r*r;p++)g[p]=0;for(p=0;p<(r*(r+1)+1)/2;p++)D[p]=0;for(p=0;p<3;p++){for(c=0,i=0,1==p&&(c=r-7),2==p&&(i=r-7),g[i+3+r*(c+3)]=1,s=0;s<6;s++)g[i+s+r*c]=1,g[i+r*(c+s+1)]=1,g[i+6+r*(c+s)]=1,g[i+s+1+r*(c+6)]=1;for(s=1;s<5;s++)C(i+s,c+1),C(i+1,c+s+1),C(i+5,c+s),C(i+s+1,c+5);for(s=2;s<4;s++)g[i+s+r*(c+2)]=1,g[i+2+r*(c+s+1)]=1,g[i+4+r*(c+s)]=1,g[i+s+1+r*(c+4)]=1}if(O>1)for(p=T.adelta[O],i=r-7;;){for(s=r-7;s>p-3&&(B(s,i),!(s<p));)s-=p;if(i<=p+9)break;B(6,i-=p),B(i,6)}for(g[8+r*(r-8)]=1,i=0;i<7;i++)C(7,i),C(r-8,i),C(7,i+r-7);for(s=0;s<8;s++)C(s,7),C(s+r-8,7),C(s,r-8);for(s=0;s<9;s++)C(s,8);for(s=0;s<8;s++)C(s+r-8,8),C(8,s);for(i=0;i<7;i++)C(8,i+r-7);for(s=0;s<r-14;s++)1&s?(C(8+s,6),C(6,8+s)):(g[8+s+6*r]=1,g[6+r*(8+s)]=1);if(O>6)for(p=T.vpat[O-7],c=17,s=0;s<6;s++)for(i=0;i<3;i++,c--)1&(c>11?O>>c-12:p>>c)?(g[5-s+r*(2-i+r-11)]=1,g[2-i+r-11+r*(5-s)]=1):(C(5-s,2-i+r-11),C(2-i+r-11,5-s));for(i=0;i<r;i++)for(s=0;s<=i;s++)g[s+r*i]&&C(s,i);for(S=x.length,h=0;h<S;h++)e[h]=x.charCodeAt(h);if(x=e.slice(0),S>=(s=P*(M+y)+y)-2&&(S=s-2,O>9&&S--),h=S,O>9){for(x[h+2]=0,x[h+3]=0;h--;)x[h+3]|=255&(p=x[h])<<4,x[h+2]=p>>4;x[2]|=255&S<<4,x[1]=S>>4,x[0]=64|S>>12}else{for(x[h+1]=0,x[h+2]=0;h--;)x[h+2]|=255&(p=x[h])<<4,x[h+1]=p>>4;x[1]|=255&S<<4,x[0]=64|S>>4}for(h=S+3-(O<10);h<s;)x[h++]=236,x[h++]=17;for(k[0]=1,h=0;h<j;h++){for(k[h+1]=1,U=h;U>0;U--)k[U]=k[U]?k[U-1]^G[F(H[k[U]]+h)]:k[U-1];k[0]=G[F(H[k[0]]+h)]}for(h=0;h<=j;h++)k[h]=H[k[h]];for(c=s,i=0,h=0;h<M;h++)J(i,P,c,j),i+=P,c+=j;for(h=0;h<y;h++)J(i,P+1,c,j),i+=P+1,c+=j;for(i=0,h=0;h<P;h++){for(U=0;U<M;U++)e[i++]=x[h+U*P];for(U=0;U<y;U++)e[i++]=x[M*P+h+U*(P+1)]}for(U=0;U<y;U++)e[i++]=x[M*P+h+U*(P+1)];for(h=0;h<j;h++)for(U=0;U<M+y;U++)e[i++]=x[s+h+U*j];for(x=e,s=i=r-1,c=S=1,$=(P+j)*(M+y)+y,h=0;h<$;h++)for(p=x[h],U=0;U<8;U++,p<<=1){128&p&&(g[s+r*i]=1);do{S?s--:(s++,c?0!=i?i--:(c=!c,6==(s-=2)&&(s--,i=9)):i!=r-1?i++:(c=!c,6==(s-=2)&&(s--,i-=8))),S=!S}while(z(s,i))}for(x=g.slice(0),p=0,i=3e4,c=0;c<8&&(q(c),(s=W())<i&&(i=s,p=c),7!=p);c++)g=x.slice(0);for(p!=c&&q(p),i=T.fmtword[p+(L-1<<3)],c=0;c<8;c++,i>>=1)1&i&&(g[r-1-c+8*r]=1,c<6?g[8+r*c]=1:g[8+r*(c+1)]=1);for(c=0;c<7;c++,i>>=1)1&i&&(g[8+r*(r-7+c)]=1,c?g[6-c+8*r]=1:g[7+8*r]=1);return g},b.init=function(){L=b.ecclevel;var m=b.genframe(b.url);b.toTable?b.tableWrite(m,r):b.canvasWrite(m,r)},b.init()}function v(A,b="#fff0",L="#000"){var O;const r=new T({url:A||"Hello",size:360,colorLight:b,colorDark:L,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0});return null===(O=null==r?void 0:r.toImage("svg+xml"))||void 0===O?void 0:O.src}_.d(R,{w:()=>v}),T.prototype={canvasWrite:function(A,b){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(A,b);var L=this.size,O=this.qrc;O.lineWidth=1;var r=L;r/=b+10,r=Math.round(r-.5);var M=4;this.noBorder?(O.canvas.width=O.canvas.height=r*b,M=0):O.canvas.width=O.canvas.height=L,O.clearRect(0,0,L,L),O.fillStyle=this.colorLight,O.fillRect(0,0,r*(b+8),r*(b+8)),O.fillStyle=this.colorDark;for(var y=0;y<b;y++)for(var P=0;P<b;P++)A[P*b+y]&&O.fillRect(r*(M+y),r*(M+P),r,r)},tableWrite:function(A,b){var L=this,O=Math.round(this.size/b-3.5)+"px",r=b+(L.noBorder?0:2*L.borderSize),M=L.borderSize,y="width:"+O+";height:"+O+";",P=L.colorLight,j=L.colorDark,x=document.createElement("table");x.style.cssText="border:0;border-collapse:collapse;";for(var e,g=document.createElement("tr"),D=document.createElement("td"),Z=function(){return D.cloneNode()},k=function(){var N=Z();return N.style.cssText=y+"background:"+P,N},C=function(N){for(var W=N.firstChild,m=0;m<M;m++)N.insertBefore(k(),W),N.appendChild(k())},B=0;B<b;B++){var F=g.cloneNode();x.appendChild(F);for(var J=0;J<b;J++)if(1===A[B*b+J]){var z=(e=void 0,(e=Z()).style.cssText=y+"background:"+j,e);F.appendChild(z)}else{var q=k();F.appendChild(q)}L.noBorder||C(F)}L.noBorder||function(N){for(var W=N.firstChild,m=0;m<L.borderSize;m++){for(var s=g.cloneNode(),i=0;i<r;i++){var c=k();s.appendChild(c)}N.appendChild(s),N.insertBefore(s.cloneNode(!0),W)}}(x),L.domElement.innerHTML="",L.domElement.appendChild(x)},getContext:function(A){return A.getContext&&A.getContext("2d")?A.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(A){if(this.qrc){var b=this.imageTypes[A];if(!b)throw new Error(A+" is not a valid image type ");var L=new Image;return L.src=this.domElement.toDataURL(b),L}}},T.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],T.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],T.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],T.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],T.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],T.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],T.N1=3,T.N2=3,T.N3=40,T.N4=10},9916:(se,R,_)=>{_.d(R,{Xp:()=>re,ck:()=>x.c,P2:()=>ut});var T=_(93),v=_(9298),A=_(56),b=_(9031),L=_(2297),O=_(6529),r=_(6807),M=_(3786),y=_(2247),P=_(8539),j=_(88),x=_(6667),e=_(1477);_(3259),_(3176),_(7820),_(6360);var q=_(2064),s=(_(3466),_(7592),_(3702),_(3927)),c=(_(412),_(3970)),G=_(8931);_(4603),_(6217);var ie=_(5159),ee=_(5306),de=(_(4813),_(1022));_(1039),_(6044);const te={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","not-bookable":"#757575",unknown:"#757575"};_(9627);var X=_(6491),ae=_(9097),le=_(9902),ge=_(8293),ve=_(1361),Le=_(6186),be=_(8703),qe=_(5660),xe=_(944),ze=_(8828),Fe=_(6800);const Be=["explore-device-info",""];function je(n,u){if(1&n&&(e.TgZ(0,"p",14),e.TgZ(1,"label"),e._uU(2,"Manufacturer:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function Je(n,u){if(1&n&&(e.TgZ(0,"p",15),e.TgZ(1,"label"),e._uU(2,"OS:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os,"")}}function Ne(n,u){if(1&n&&(e.TgZ(0,"p",16),e.TgZ(1,"label"),e._uU(2,"SSID:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid,"")}}function Ye(n,u){if(1&n&&(e.TgZ(0,"p",17),e.TgZ(1,"label"),e._uU(2,"Username:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function Qe(n,u){if(1&n&&(e.TgZ(0,"p",18),e.TgZ(1,"label"),e._uU(2,"Type:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function Ge(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("mouseleave",function(){return e.CHM(t),e.oxw().close()}),e._UZ(1,"div",6),e.TgZ(2,"div",7),e.TgZ(3,"p",8),e.TgZ(4,"label"),e._uU(5,"MAC:"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p"),e.TgZ(8,"label"),e._uU(9,"Accuracy:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p"),e.TgZ(12,"label"),e._uU(13,"Last Seen:"),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,je,4,1,"p",9),e.YNc(16,Je,4,1,"p",10),e.YNc(17,Ne,4,1,"p",11),e.YNc(18,Ye,4,1,"p",12),e.YNc(19,Qe,4,1,"p",13),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer),e.xp6(1),e.Q6J("ngIf",t.os),e.xp6(1),e.Q6J("ngIf",t.ssid),e.xp6(1),e.Q6J("ngIf",t.username),e.xp6(1),e.Q6J("ngIf",t.user)}}let ye=(()=>{class n extends y.KG{constructor(t,o){var a;super(),this._details=t,this._element=o,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=null===(a=this._details.variance)||void 0===a?void 0:a.toFixed(2),this.diameter=100*this._details.variance,this.bg_color=this._details.bg_color||this.distance_color}get last_seen(){return(0,ze.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get distance(){return Math.abs((0,Fe.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{var o;const a=null===(o=this._element.nativeElement.parentElement)||void 0===o?void 0:o.parentElement;if(!a)return this.ngOnInit(++t);const l_y=parseInt(a.style.top,10)/100,l_x=parseInt(a.style.left,10)/100;this.y_pos=l_y>=.5?"bottom":"top",this.x_pos=l_x>=.5?"end":"start"},200)}loadUser(){return(0,M.mG)(this,void 0,void 0,function*(){if(this.username)return;const t=(0,q.rTZ)(this._details.system,"LocationServices");if(t){this.username="Loading...";const o=yield t.execute("check_ownership_of",[this.mac]).catch(a=>null);this.username=o&&o.assigned_to?o.assigned_to:""}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:Be,decls:6,vars:9,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-4","border-dashed","border-blue-600","rounded-full",3,"mouseenter"],["name","dot",1,"h-2","w-2","absolute","center","rounded-full","shadow"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.NdJ("mouseenter",function(){return o.loadUser()}),e.qZA(),e._UZ(1,"div",1,2),e._UZ(3,"div",3),e.YNc(4,Ge,20,8,"ng-template",null,4,e.W1O)),2&t){const a=e.MAs(5);e.Akn("height: "+o.diameter+"%; width: "+o.diameter+"%;"),e.xp6(1),e.Udp("background-color",o.bg_color),e.xp6(2),e.Q6J("content",a)("backdrop",!1)("xPosition",o.x_pos)("yPosition",o.y_pos)("hover",!0)}},directives:[c.X,T.O5],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}"]}),n})();function $e(n,u){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function We(n,u){if(1&n&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function Xe(n,u){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4),e.TgZ(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,$e,2,1,"p",6),e.YNc(6,We,4,8,"p",7),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.Tol("absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.map_id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Ze=(()=>{class n{constructor(t,o){this._details=t,this._element=o,this.id=this._details.id,this.map_id=this._details.map_id,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{var o;const a=null===(o=this._element.nativeElement.parentElement)||void 0===o?void 0:o.parentElement;if(!a)return this.ngOnInit(++t);const l_y=parseInt(a.style.top,10)/100,l_x=parseInt(a.style.left,10)/100;this.y_pos=l_y>=.5?"bottom":"top",this.x_pos=l_x>=.5?"right":"left"},200)}get available_until(){return""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["explore-desk-info"]],decls:3,vars:6,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,Xe,7,6,"ng-template",null,1,e.W1O)),2&t){const a=e.MAs(2);e.Q6J("content",a)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",o.id)}},directives:[c.X,T.O5],pipes:[T.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}"]}),n})();var Ke=_(2306),Re=_(7303);const Ve=function(){return{standalone:!0}};function He(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"main",5),e.TgZ(1,"div",6),e.TgZ(2,"div",7),e.TgZ(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",9),e.TgZ(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().form.patchValue({date:a})}),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();let o;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,Ve)),e.xp6(4),e.Q6J("time",null==(o=t.form.get("date"))?null:o.value)("max",720)("min",60)("step",60)}}let Ce=(()=>{class n{constructor(t){this._data=t,this.book_until=this._data.until,this.form=new v.cw({date:new v.NI(t.date),duration:new v.NI(t.duration)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(G.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0),e.TgZ(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA(),e.qZA(),e.qZA(),e.YNc(6,He,16,9,"main",2),e.TgZ(7,"footer",3),e.TgZ(8,"button",4),e._uU(9,"Continue"),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.form),e.xp6(2),e.Q6J("mat-dialog-close",o.form.value))},directives:[ie.lW,G.ZT,ee.o,T.O5,v.JL,v.sg,Ke.Q,v.JJ,v.u,Re.N,v.On,de.B],styles:[""]}),n})(),re=(()=>{class n extends y.KG{constructor(t,o,a,l,d){super(),this._state=t,this._org=o,this._settings=a,this._bookings=l,this._dialog=d,this._in_use=new X.X([]),this._options=new X.X({}),this._desks=new X.X([]),this._reserved=new X.X([]),this._statuses={},this._users={},this._poll=new X.X(0),this._desk_bookings=(0,ae.aj)([this._state.level,this._poll]).pipe((0,le.w)(([f])=>(0,xe.F2)({period_start:(0,ve.Z)((0,Le.Z)(new Date)),period_end:(0,ve.Z)((0,be.Z)(new Date)),type:"desk",zones:f.id}))),this.desk_list=this._state.level.pipe((0,le.w)(f=>(0,q.rlq)(f.id,"desks").pipe((0,s.U)(E=>(E.details instanceof Array?E.details:[]).map(I=>new P.nk(Object.assign(Object.assign({},I),{zone:f})))))),(0,ge.K)(f=>[])),this._bind=this._state.level.pipe((0,s.U)(f=>{var E,I;if(this._statuses={},this.unsubWith("lvl"),!f)return;const w=this._org.buildings.find(K=>K.id===f.parent_id);if(!w)return;const Y=(null===(E=w.bindings)||void 0===E?void 0:E.area_management)||(null===(I=this._org.organisation.bindings)||void 0===I?void 0:I.area_management);if(!Y)return;let Q=(0,q.rTZ)(Y,"AreaManagement").binding(f.id);this.subscription("lvl-in_use",Q.listen().subscribe(K=>this.processBindingChange(K||{},Y))),this.subscription("lvl-in_use_bind",Q.bind()),Q=(0,q.rTZ)(Y,"AreaManagement").binding(`${f.id}:desk_ids`),this.subscription("lvl-desks_list",Q.listen().subscribe(K=>this._desks.next(K||[]))),this.subscription("lvl-desk_list_bind",Q.bind())})),this._state_change=(0,ae.aj)([this.desk_list,this._in_use,this._reserved,this._options]).pipe((0,s.U)(([f,E,I])=>{this._statuses={};for(const{id:w,bookable:Y}of f){const Q=E.some(oe=>w===oe),K=I.some(oe=>w===oe);this._statuses[w]=Y?Q?K?"reserved":"busy":"free":"not-bookable"}this.processDesks(f)})),this.init()}init(){return(0,M.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,j.P)(t=>t)).toPromise(),this.setOptions({enable_booking:!1!==this._settings.get("app.desks.enabled")}),this.subscription("bind",this._bind.subscribe()),this.subscription("changes",this._state_change.subscribe()),this.subscription("desks",this.desk_list.subscribe(t=>this.processDesks(t)))})}startPolling(t=3e4){this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(o=>this._in_use.next(o.map(a=>a.asset_id)))),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t)}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}processBindingChange({value:t},o){const a=(t||[]).filter(d=>!["desk","booking"].includes(d.location)),l=(t||[]).filter(d=>"desk"===d.location||"booking"===d.location&&"desk"===d.type);this._in_use.next(l.map(d=>d.map_id||d.asset_id)),this._reserved.next(l.filter(d=>!d.at_location).map(d=>d.map_id||d.asset_id)),this.processDevices(a,o),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},o=this._settings.get("app.explore.colors")||{};for(const a in this._statuses)!this._statuses[a]||(t[`#${a}`]={fill:o[`desk-${this._statuses[a]}`]||o[`${this._statuses[a]}`]||te[`${this._statuses[a]}`],opacity:.6});this._state.setStyles("desks",t)}processDevices(t,o){var a,l;const d=[];for(const f of t){const E=f.x/f.map_width,I=f.y/f.map_height;d.push({location:{x:(null===(a=f.coordinates_from)||void 0===a?void 0:a.includes("right"))?1-E:E,y:(null===(l=f.coordinates_from)||void 0===l?void 0:l.includes("bottom"))?1-I:I},content:ye,z_index:20,data:Object.assign(Object.assign({},f),{system:o})})}this._state.setFeatures("devices",d)}processDesks(t){const o=[],a=[],l=this._options.getValue();for(const d of t){if(o.push({location:d.id,content:Ze,full_size:!0,no_scale:!0,data:{id:d.map_id||d.id,map_id:d.name,user:this._users[d.map_id]||d.staff_name,status:this._statuses[d.map_id]},z_index:20}),!d.bookable)continue;const f=()=>(0,M.mG)(this,void 0,void 0,function*(){var E,I;this._bookings.newForm();const{date:w,duration:Y}=yield this._setBookingTime(this._bookings.form.value.date,this._bookings.form.value.duration);this._bookings.form.patchValue({asset_id:d.id,asset_name:d.name,date:w,duration:Y,map_id:(null==d?void 0:d.map_id)||(null==d?void 0:d.id),description:d.name,user:l.host||(0,y.ar)(),booking_type:"desk",zones:d.zone?[null===(E=d.zone)||void 0===E?void 0:E.parent_id,null===(I=d.zone)||void 0===I?void 0:I.id]:[]}),yield this._bookings.confirmPost(),(0,y.t5)(`Successfull booked desk ${d.name||d.id}`)});a.push({id:d.id,action:"click",callback:f}),a.push({id:d.id,action:"touchend",callback:f})}this._state.setActions("desks",this._options.getValue().enable_booking?a:[]),this._state.setFeatures("desks",o),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,o){return(0,M.mG)(this,void 0,void 0,function*(){if(this._settings.get("app.desks.allow_time_changes")){const a=(0,be.Z)((0,qe.Z)(Date.now(),this._settings.get("app.desks.available_period")||90)),d=yield this._dialog.open(Ce,{data:{date:t,duration:o,until:a}}).afterClosed().toPromise();if(!d)throw"User cancelled";t=d.date,o=d.duration}return{date:t,duration:o}})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x.c),e.LFG(P.w7),e.LFG(y.gb),e.LFG(xe.fy),e.LFG(G.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();_(9136),_(8461),_(1134),_(639),_(8636),_(2597),_(4618),_(9034);let ut=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[T.ez,A.Kk,v.u5,v.UX,b.rP,L.U8,O.eL,r.W9]]}),n})()},6667:(se,R,_)=>{_.d(R,{c:()=>x});var T=_(3786),v=_(6491),A=_(9097),b=_(3927),L=_(639),O=_(88),r=_(9170),M=_(2247),y=_(8539),P=_(7592),j=_(1477);let x=(()=>{class e extends M.KG{constructor(D,Z,k){super(),this._org=D,this._spaces=Z,this._settings=k,this._level=new v.X(null),this._positions=new v.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new v.X({}),this._features=new v.X({}),this._actions=new v.X({}),this._labels=new v.X({}),this._options=new v.X({disable:["zones","devices"]}),this._message=new v.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=(0,A.aj)([this._level,this._spaces.list]).pipe((0,b.U)(([C,B])=>B.filter(F=>F.zones.includes(null==C?void 0:C.id)))),this.map_url=this._level.pipe((0,b.U)(C=>(C?C.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,A.aj)([this._features,this._options]).pipe((0,L.b)(200),(0,b.U)(([C,B])=>{var F,J;let z=[];for(const q in C)(null===(F=B.disable)||void 0===F?void 0:F.includes(q))||(null===(J=B.disable_features)||void 0===J?void 0:J.includes(q))||(z=z.concat(C[q]));return z})),this.map_actions=(0,A.aj)([this._actions,this._options]).pipe((0,L.b)(200),(0,b.U)(([C,B])=>{var F,J;let z=[];for(const q in C)(null===(F=B.disable)||void 0===F?void 0:F.includes(q))||(null===(J=B.disable_actions)||void 0===J?void 0:J.includes(q))||(z=z.concat(C[q]));return z})),this.map_labels=(0,A.aj)([this._labels,this._options]).pipe((0,L.b)(200),(0,b.U)(([C,B])=>{var F,J;let z=[];for(const q in C)(null===(F=B.disable)||void 0===F?void 0:F.includes(q))||(null===(J=B.disable_labels)||void 0===J?void 0:J.includes(q))||(z=z.concat(C[q]));return z})),this.map_styles=(0,A.aj)([this._styles,this._options]).pipe((0,L.b)(200),(0,b.U)(([C,B])=>{var F,J,z;let q={text:{display:"none"}};for(const N in C)(null===(F=B.disable)||void 0===F?void 0:F.includes(N))||(null===(J=B.disable_styles)||void 0===J?void 0:J.includes(N))||(q=Object.assign(Object.assign({},q),C[N]));return(null===(z=B.disable)||void 0===z?void 0:z.includes("zones"))&&(q["#zones"]={display:"none"},q["#Zones"]={display:"none"}),q})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){return(0,T.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,O.P)(D=>D)).toPromise(),this._org.active_building.pipe((0,r.h)(D=>!!D)).subscribe(D=>{const Z=this._level.getValue(),k=this._org.levelsForBuilding(D);!k.find(B=>(null==Z?void 0:Z.id)===B.id)&&k.length&&this.setLevel(k[0].id),this._settings.get("app.explore.disable_actions")&&this.setOptions({disable_actions:this._settings.get("app.explore.disable_actions")}),this._settings.get("app.explore.disable_labels")&&this.setOptions({disable_labels:this._settings.get("app.explore.disable_labels")}),this._settings.get("app.explore.disable_features")&&this.setOptions({disable_features:this._settings.get("app.explore.disable_features")}),this._settings.get("app.explore.disable_styles")&&this.setOptions({disable_styles:this._settings.get("app.explore.disable_styles")})})})}setOptions(D){const Z=this._options.getValue(),k=(0,M.Tw)([...D.disable||Z.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next(Object.assign(Object.assign(Object.assign({},this._options.getValue()),D),{disable:k}))}setLevel(D){const Z=this._org.levelWithID([D]);Z&&this._level.next(Z)}setStyles(D,Z){const k=this._styles.getValue();k[D]=Z,this._styles.next(k)}setFeatures(D,Z){const k=this._features.getValue();k[D]=Z,this._features.next(k)}setActions(D,Z){const k=this._actions.getValue();k[D]=Z,this._actions.next(k)}setLabels(D,Z){const k=this._labels.getValue();k[D]=Z,this._labels.next(k)}setPositions(D,Z){this._positions.next({zoom:D,center:Z})}}return e.\u0275fac=function(D){return new(D||e)(j.LFG(y.w7),j.LFG(P.sK),j.LFG(M.gb))},e.\u0275prov=j.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8461:(se,R,_)=>{_.d(R,{s:()=>L});var T=_(6667),v=_(1477),A=_(5159),b=_(5306);let L=(()=>{class O{constructor(M){this._state=M,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return O.\u0275fac=function(M){return new(M||O)(v.Y36(T.c))},O.\u0275cmp=v.Xpm({type:O,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white",3,"click"],["z-out","","mat-icon-button","",1,"bg-white",3,"click"],["reset","","mat-icon-button","",1,"bg-white",3,"click"]],template:function(M,y){1&M&&(v.TgZ(0,"button",0),v.NdJ("click",function(){return y.zoomIn()}),v.TgZ(1,"app-icon"),v._uU(2,"add"),v.qZA(),v.qZA(),v.TgZ(3,"button",1),v.NdJ("click",function(){return y.zoomOut()}),v.TgZ(4,"app-icon"),v._uU(5,"remove"),v.qZA(),v.qZA(),v.TgZ(6,"button",2),v.NdJ("click",function(){return y.reset()}),v.TgZ(7,"app-icon"),v._uU(8,"autorenew"),v.qZA(),v.qZA())},directives:[A.lW,b.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}"]}),O})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map