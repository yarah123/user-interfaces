"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{6168:(oe,G,m)=>{function C(k){var b=this;k="object"==typeof k?k:{},b.revision=3,b.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},b.toTable=k.toTable,b.domElement=b.toTable?document.createElement("div"):document.createElement("canvas"),b.url=k.url||"",b.size=k.size||280,b.qrc=!1,b.colorLight=k.colorLight||"#fff",b.colorDark=k.colorDark||"#000",b.ecclevel=k.ecclevel||1,b.noBorder=k.noBorder,b.borderSize=k.borderSize||4;var F,T,l,M,v,S,N,x=[],e=[],g=[],q=[],I=[],J=[],P=function(_,o){var i;_>o&&(i=_,_=o,o=i),i=o,i*=o,i+=o,i>>=1,q[i+=_]=1},Q=function(_,o){var i;for(g[_+l*o]=1,i=-2;i<2;i++)g[_+i+l*(o-2)]=1,g[_-2+l*(o+i+1)]=1,g[_+2+l*(o+i)]=1,g[_+i+1+l*(o+2)]=1;for(i=0;i<2;i++)P(_-1,o+i),P(_+1,o-i),P(_-i,o-1),P(_+i,o+1)},Z=function(_){for(;_>=255;)_=((_-=255)>>8)+(255&_);return _},B=function(_,o,i,c){var u,w,f,O=C.gexp,R=C.glog;for(u=0;u<c;u++)x[i+u]=0;for(u=0;u<o;u++){if(255!=(f=R[x[_+u]^x[i]]))for(w=1;w<c;w++)x[i+w-1]=x[i+w]^O[Z(f+J[c-w])];else for(w=i;w<i+c;w++)x[w]=x[w+1];x[i+c-1]=255==f?0:O[Z(f+J[0])]}},D=function(_,o){var i;return _>o&&(i=_,_=o,o=i),i=o,i+=o*o,i>>=1,q[i+=_]},U=function(_){var o,i,c,u;switch(_){case 0:for(i=0;i<l;i++)for(o=0;o<l;o++)o+i&1||D(o,i)||(g[o+i*l]^=1);break;case 1:for(i=0;i<l;i++)for(o=0;o<l;o++)1&i||D(o,i)||(g[o+i*l]^=1);break;case 2:for(i=0;i<l;i++)for(c=0,o=0;o<l;o++,c++)3==c&&(c=0),c||D(o,i)||(g[o+i*l]^=1);break;case 3:for(u=0,i=0;i<l;i++,u++)for(3==u&&(u=0),c=u,o=0;o<l;o++,c++)3==c&&(c=0),c||D(o,i)||(g[o+i*l]^=1);break;case 4:for(i=0;i<l;i++)for(c=0,u=i>>1&1,o=0;o<l;o++,c++)3==c&&(c=0,u=!u),u||D(o,i)||(g[o+i*l]^=1);break;case 5:for(u=0,i=0;i<l;i++,u++)for(3==u&&(u=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(o&i&1)+!(!c|!u)||D(o,i)||(g[o+i*l]^=1);break;case 6:for(u=0,i=0;i<l;i++,u++)for(3==u&&(u=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(o&i&1)+(c&&c==u)&1||D(o,i)||(g[o+i*l]^=1);break;case 7:for(u=0,i=0;i<l;i++,u++)for(3==u&&(u=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(c&&c==u)+(o+i&1)&1||D(o,i)||(g[o+i*l]^=1)}},L=function(_){var o,i=0;for(o=0;o<=_;o++)I[o]>=5&&(i+=C.N1+I[o]-5);for(o=3;o<_-1;o+=2)I[o-2]==I[o+2]&&I[o+2]==I[o-1]&&I[o-1]==I[o+1]&&3*I[o-1]==I[o]&&(0==I[o-3]||o+3>_||3*I[o-3]>=4*I[o]||3*I[o+3]>=4*I[o])&&(i+=C.N3);return i},z=function(){var _,o,i,c,u,w=0,f=0;for(o=0;o<l-1;o++)for(_=0;_<l-1;_++)(g[_+l*o]&&g[_+1+l*o]&&g[_+l*(o+1)]&&g[_+1+l*(o+1)]||!(g[_+l*o]||g[_+1+l*o]||g[_+l*(o+1)]||g[_+1+l*(o+1)]))&&(w+=C.N2);for(o=0;o<l;o++){for(I[0]=0,i=c=_=0;_<l;_++)(u=g[_+l*o])==c?I[i]++:I[++i]=1,f+=(c=u)?1:-1;w+=L(i)}f<0&&(f=-f);var O=f,R=0;for(O+=O<<2,O<<=1;O>l*l;)O-=l*l,R++;for(w+=R*C.N4,_=0;_<l;_++){for(I[0]=0,i=c=o=0;o<l;o++)(u=g[_+l*o])==c?I[i]++:I[++i]=1,c=u;w+=L(i)}return w};b.genframe=function(_){var o,i,c,u,w,f,O,R,V=C.eccblocks,ee=C.gexp,H=C.glog;u=_.length,T=0;do{if(T++,c=4*(F-1)+16*(T-1),M=V[c++],v=V[c++],S=V[c++],N=V[c],u<=(c=S*(M+v)+v-3+(T<=9)))break}while(T<40);for(l=17+4*T,w=S+(S+N)*(M+v)+v,u=0;u<w;u++)e[u]=0;for(x=_.slice(0),u=0;u<l*l;u++)g[u]=0;for(u=0;u<(l*(l+1)+1)/2;u++)q[u]=0;for(u=0;u<3;u++){for(c=0,i=0,1==u&&(c=l-7),2==u&&(i=l-7),g[i+3+l*(c+3)]=1,o=0;o<6;o++)g[i+o+l*c]=1,g[i+l*(c+o+1)]=1,g[i+6+l*(c+o)]=1,g[i+o+1+l*(c+6)]=1;for(o=1;o<5;o++)P(i+o,c+1),P(i+1,c+o+1),P(i+5,c+o),P(i+o+1,c+5);for(o=2;o<4;o++)g[i+o+l*(c+2)]=1,g[i+2+l*(c+o+1)]=1,g[i+4+l*(c+o)]=1,g[i+o+1+l*(c+4)]=1}if(T>1)for(u=C.adelta[T],i=l-7;;){for(o=l-7;o>u-3&&(Q(o,i),!(o<u));)o-=u;if(i<=u+9)break;Q(6,i-=u),Q(i,6)}for(g[8+l*(l-8)]=1,i=0;i<7;i++)P(7,i),P(l-8,i),P(7,i+l-7);for(o=0;o<8;o++)P(o,7),P(o+l-8,7),P(o,l-8);for(o=0;o<9;o++)P(o,8);for(o=0;o<8;o++)P(o+l-8,8),P(8,o);for(i=0;i<7;i++)P(8,i+l-7);for(o=0;o<l-14;o++)1&o?(P(8+o,6),P(6,8+o)):(g[8+o+6*l]=1,g[6+l*(8+o)]=1);if(T>6)for(u=C.vpat[T-7],c=17,o=0;o<6;o++)for(i=0;i<3;i++,c--)1&(c>11?T>>c-12:u>>c)?(g[5-o+l*(2-i+l-11)]=1,g[2-i+l-11+l*(5-o)]=1):(P(5-o,2-i+l-11),P(2-i+l-11,5-o));for(i=0;i<l;i++)for(o=0;o<=i;o++)g[o+l*i]&&P(o,i);for(w=x.length,f=0;f<w;f++)e[f]=x.charCodeAt(f);if(x=e.slice(0),w>=(o=S*(M+v)+v)-2&&(w=o-2,T>9&&w--),f=w,T>9){for(x[f+2]=0,x[f+3]=0;f--;)x[f+3]|=255&(u=x[f])<<4,x[f+2]=u>>4;x[2]|=255&w<<4,x[1]=w>>4,x[0]=64|w>>12}else{for(x[f+1]=0,x[f+2]=0;f--;)x[f+2]|=255&(u=x[f])<<4,x[f+1]=u>>4;x[1]|=255&w<<4,x[0]=64|w>>4}for(f=w+3-(T<10);f<o;)x[f++]=236,x[f++]=17;for(J[0]=1,f=0;f<N;f++){for(J[f+1]=1,O=f;O>0;O--)J[O]=J[O]?J[O-1]^ee[Z(H[J[O]]+f)]:J[O-1];J[0]=ee[Z(H[J[0]]+f)]}for(f=0;f<=N;f++)J[f]=H[J[f]];for(c=o,i=0,f=0;f<M;f++)B(i,S,c,N),i+=S,c+=N;for(f=0;f<v;f++)B(i,S+1,c,N),i+=S+1,c+=N;for(i=0,f=0;f<S;f++){for(O=0;O<M;O++)e[i++]=x[f+O*S];for(O=0;O<v;O++)e[i++]=x[M*S+f+O*(S+1)]}for(O=0;O<v;O++)e[i++]=x[M*S+f+O*(S+1)];for(f=0;f<N;f++)for(O=0;O<M+v;O++)e[i++]=x[o+f+O*N];for(x=e,o=i=l-1,c=w=1,R=(S+N)*(M+v)+v,f=0;f<R;f++)for(u=x[f],O=0;O<8;O++,u<<=1){128&u&&(g[o+l*i]=1);do{w?o--:(o++,c?0!=i?i--:(c=!c,6==(o-=2)&&(o--,i=9)):i!=l-1?i++:(c=!c,6==(o-=2)&&(o--,i-=8))),w=!w}while(D(o,i))}for(x=g.slice(0),u=0,i=3e4,c=0;c<8&&(U(c),(o=z())<i&&(i=o,u=c),7!=u);c++)g=x.slice(0);for(u!=c&&U(u),i=C.fmtword[u+(F-1<<3)],c=0;c<8;c++,i>>=1)1&i&&(g[l-1-c+8*l]=1,c<6?g[8+l*c]=1:g[8+l*(c+1)]=1);for(c=0;c<7;c++,i>>=1)1&i&&(g[8+l*(l-7+c)]=1,c?g[6-c+8*l]=1:g[7+8*l]=1);return g},b.init=function(){F=b.ecclevel;var _=b.genframe(b.url);b.toTable?b.tableWrite(_,l):b.canvasWrite(_,l)},b.init()}function y(k,b="#fff0",F="#000"){return new C({url:k||"Hello",size:360,colorLight:b,colorDark:F,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0})?.toImage("svg+xml")?.src}m.d(G,{w:()=>y}),C.prototype={canvasWrite:function(k,b){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(k,b);var F=this.size,T=this.qrc;T.lineWidth=1;var l=F;l/=b+10,l=Math.round(l-.5);var M=4;this.noBorder?(T.canvas.width=T.canvas.height=l*b,M=0):T.canvas.width=T.canvas.height=F,T.clearRect(0,0,F,F),T.fillStyle=this.colorLight,T.fillRect(0,0,l*(b+8),l*(b+8)),T.fillStyle=this.colorDark;for(var v=0;v<b;v++)for(var S=0;S<b;S++)k[S*b+v]&&T.fillRect(l*(M+v),l*(M+S),l,l)},tableWrite:function(k,b){var F=this,T=Math.round(this.size/b-3.5)+"px",l=b+(F.noBorder?0:2*F.borderSize),M=F.borderSize,v="width:"+T+";height:"+T+";",S=F.colorLight,N=F.colorDark,x=document.createElement("table");x.style.cssText="border:0;border-collapse:collapse;";for(var e,g=document.createElement("tr"),q=document.createElement("td"),I=function(){return q.cloneNode()},J=function(){var L=I();return L.style.cssText=v+"background:"+S,L},P=function(L){for(var z=L.firstChild,_=0;_<M;_++)L.insertBefore(J(),z),L.appendChild(J())},Q=0;Q<b;Q++){var Z=g.cloneNode();x.appendChild(Z);for(var B=0;B<b;B++)if(1===k[Q*b+B]){var D=(e=void 0,(e=I()).style.cssText=v+"background:"+N,e);Z.appendChild(D)}else{var U=J();Z.appendChild(U)}F.noBorder||P(Z)}F.noBorder||function(L){for(var z=L.firstChild,_=0;_<F.borderSize;_++){for(var o=g.cloneNode(),i=0;i<l;i++){var c=J();o.appendChild(c)}L.appendChild(o),L.insertBefore(o.cloneNode(!0),z)}}(x),F.domElement.innerHTML="",F.domElement.appendChild(x)},getContext:function(k){return k.getContext&&k.getContext("2d")?k.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(k){if(this.qrc){var b=this.imageTypes[k];if(!b)throw new Error(k+" is not a valid image type ");var F=new Image;return F.src=this.domElement.toDataURL(b),F}}},C.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],C.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],C.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],C.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],C.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],C.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],C.N1=3,C.N2=3,C.N3=40,C.N4=10},6125:(oe,G,m)=>{m.d(G,{Xp:()=>ce,ck:()=>x.c,P2:()=>xt});var C=m(4666),y=m(2508),k=m(2921),b=m(4714),F=m(5895),T=m(7520),l=m(6850),M=m(1670),v=m(1506),S=m(3619),N=m(5670),x=m(6667),e=m(2560);m(9885),m(207),m(5074),m(7371);var U=m(3690),o=(m(3910),m(8215),m(9946),m(6942)),u=(m(8296),m(2052),m(3970)),W=m(1484);m(4603),m(6217);var te=m(5306),ne=m(4522),me=(m(1267),m(1708),m(1022));m(6168);const ie={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","signs-of-life":"#1565c0","not-bookable":"#757575",unknown:"#757575"};m(9627);var be=m(1810),je=m(9377),ye=m(3200),Qe=m(312),K=m(4505),ae=m(7716),se=m(9095),re=m(9128),le=m(7418),Ce=m(9669),qe=m(2306),$e=m(7303);const Re=function(){return{standalone:!0}};function We(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"main",5)(1,"div",6)(2,"div",7)(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",9)(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.form.patchValue({date:a}))}),e.qZA()(),e.TgZ(12,"div",9)(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA()()()}if(2&n){const t=e.oxw();let s;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,Re)),e.xp6(4),e.Q6J("time",null==(s=t.form.get("date"))?null:s.value)("max",720)("min",60)("step",60)}}let Ze=(()=>{class n{constructor(t){this._data=t,this.form=new y.cw({date:new y.NI(this._data.date),duration:new y.NI(this._data.duration)}),this.book_until=this._data.until}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(W.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,s){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,We,16,9,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9,"Continue"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",s.form),e.xp6(2),e.Q6J("mat-dialog-close",s.form.value))},dependencies:[C.O5,te.o,ne.lW,W.ZT,y.JJ,y.JL,y.On,y.sg,y.u,qe.Q,me.B,$e.N]}),n})();function Ke(n,d){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function Ge(n,d){if(1&n&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function Xe(n,d){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,Ke,2,1,"p",6),e.YNc(6,Ge,4,8,"p",7),e.qZA()()),2&n){const t=e.oxw();e.Tol("absolute rounded bg-white dark:bg-neutral-800 p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.name||t.map_id||t.id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Ee=(()=>{class n{constructor(t,s){this._details=t,this._element=s,this.id=this._details.id,this.map_id=this._details.map_id,this.name=this._details.name,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{const s=this._element.nativeElement.parentElement?.parentElement;if(!s)return this.ngOnInit(++t);const a_y=parseInt(s.style.top,10)/100,a_x=parseInt(s.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"right":"left"},200)}get available_until(){return""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["explore-desk-info"]],decls:3,vars:7,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,s){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,Xe,7,6,"ng-template",null,1,e.W1O)),2&t){const a=e.MAs(2);e.Q6J("content",a)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",s.id)("map_id",s.map_id)}},dependencies:[C.O5,u.X,C.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}\n/*# sourceMappingURL=explore-desk-info.component.ts-angular-inline--61.css.map*/"]}),n})();var Ve=m(9380),He=m(8987);const et=["explore-device-info",""];function tt(n,d){if(1&n&&(e.TgZ(0,"p",15)(1,"label"),e._uU(2,"Manufacturer:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function st(n,d){if(1&n&&(e.TgZ(0,"p",16)(1,"label"),e._uU(2,"OS:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os,"")}}function ot(n,d){if(1&n&&(e.TgZ(0,"p",17)(1,"label"),e._uU(2,"SSID:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid,"")}}function nt(n,d){if(1&n&&(e.TgZ(0,"p",18)(1,"label"),e._uU(2,"Username:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function it(n,d){if(1&n&&(e.TgZ(0,"p",19)(1,"label"),e._uU(2,"Type:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function at(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.close())}),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"p",9)(4,"label"),e._uU(5,"MAC:"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p")(8,"label"),e._uU(9,"Accuracy:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"label"),e._uU(13,"Last Seen:"),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,tt,4,1,"p",10),e.YNc(16,st,4,1,"p",11),e.YNc(17,ot,4,1,"p",12),e.YNc(18,nt,4,1,"p",13),e.YNc(19,it,4,1,"p",14),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer),e.xp6(1),e.Q6J("ngIf",t.os),e.xp6(1),e.Q6J("ngIf",t.ssid),e.xp6(1),e.Q6J("ngIf",t.username),e.xp6(1),e.Q6J("ngIf",t.user)}}let Te=(()=>{class n extends v.KG{constructor(t,s){super(),this._details=t,this._element=s,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}get last_seen(){return(0,Ve.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,He.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{const s=this._element.nativeElement.parentElement?.parentElement;if(!s)return this.ngOnInit(++t);const a_y=parseInt(s.style.top,10)/100,a_x=parseInt(s.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(r=>this.zoom=r))},200)}loadUser(){var t=this;return(0,M.Z)(function*(){if(t.username)return;const s=(0,U.rTZ)(t._details.system,"LocationServices");if(!s)return;t.username="Loading...";const a=yield s.execute("check_ownership_of",[t.mac]).catch(r=>null);t.username=a&&a.assigned_to?a.assigned_to:""})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:et,decls:7,vars:9,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","dark:bg-neutral-800","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,s){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return s.loadUser()}),e.qZA(),e.YNc(5,at,20,8,"ng-template",null,5,e.W1O)),2&t){const a=e.MAs(6);e.Akn("height: "+s.diameter+"%; width: "+s.diameter+"%;"),e.xp6(2),e.Udp("background-color",s.bg_color),e.xp6(2),e.Q6J("content",a)("backdrop",!1)("xPosition",s.x_pos)("yPosition",s.y_pos)("hover",!0)}},dependencies:[C.O5,u.X],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--62.css.map*/"]}),n})(),ce=(()=>{class n extends v.KG{constructor(t,s,a,r,p){super(),this._state=t,this._org=s,this._settings=a,this._bookings=r,this._dialog=p,this._in_use=new K.X([]),this._options=new K.X({}),this._presence=new K.X([]),this._signs_of_life=new K.X([]),this._statuses={},this._users={},this._poll=new K.X(0),this._checked_in=new K.X([]),this._desk_bookings=(0,ae.aj)([this._state.level,this._poll]).pipe((0,se.w)(([h])=>(0,Ce.F2)({period_start:(0,be.Z)((0,je.Z)(new Date)),period_end:(0,be.Z)((0,ye.Z)(new Date)),type:"desk",zones:h.id})),(0,re.d)(1)),this.desk_list=this._state.level.pipe((0,se.w)(h=>(0,U.rlq)(h.id,"desks").pipe((0,o.U)(A=>(A.details instanceof Array?A.details:[]).map(E=>new S.nk({...E,zone:h}))))),(0,le.K)(h=>[]),(0,re.d)(1)),this._bind=this._state.level.pipe((0,o.U)(h=>{if(this._statuses={},this.unsubWith("lvl"),!h)return;const A=this._org.binding("area_management");if(!A)return;let E=(0,U.rTZ)(A,"AreaManagement").binding(h.id);this.subscription("lvl-in_use",E.listen().subscribe(Y=>this.processBindingChange(Y||{},A))),this.subscription("lvl-in_use_bind",E.bind())})),this._state_change=(0,ae.aj)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this._options]).pipe((0,o.U)(([h,A,E,Y,j])=>{this._statuses={};for(const{id:$,bookable:_e}of h){const bt=A.some(X=>$===X),Ae=E.some(X=>$===X),yt=j.some(X=>$===X),Se=Y.some(X=>$===X);this._statuses[$]=_e?bt||Ae||Se?Ae||Se?"busy":"pending":yt?"signs-of-life":"free":"not-bookable"}this.processDesks(h)})),this.init()}init(){var t=this;return(0,M.Z)(function*(){yield t._org.initialised.pipe((0,N.P)(s=>s)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bind",t._bind.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(s=>t.processDesks(s)))})()}startPolling(t=1e4){return this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(s=>{const a=s.filter(r=>!(r.rejected||r.deleted||"ended"===r.extension_data.current_state));this._in_use.next(a.map(r=>r.asset_id)),this._checked_in.next(a.filter(r=>r.checked_in).map(r=>r.asset_id))})),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},s){const a=(t||[]).filter(p=>!["desk","booking"].includes(p.location)),r=(t||[]).filter(p=>"desk"===p.location||"booking"===p.location&&"desk"===p.type);this._presence.next(r.filter(p=>p.at_location).map(p=>p.map_id||p.asset_id)),this._signs_of_life.next(r.filter(p=>p.signs_of_life).map(p=>p.map_id||p.asset_id)),this.processDevices(a,s),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},s=this._settings.get("app.explore.colors")||{};for(const a in this._statuses)!this._statuses[a]||(t[`#${a}`]={fill:s[`desk-${this._statuses[a]}`]||s[`${this._statuses[a]}`]||ie[`${this._statuses[a]}`]});this._state.setStyles("desks",t)}processDevices(t,s){const a=[];for(const r of t){const p=r.x/r.map_width,h=r.y/r.map_height;a.push({location:{x:r.coordinates_from?.includes("right")?1-p:p,y:r.coordinates_from?.includes("bottom")?1-h:h},content:Te,z_index:20,data:{...r,system:s}})}this._state.setFeatures("devices",a)}processDesks(t){var s=this;const a=[],r=[],p=this._options.getValue();for(const h of t){if(a.push({location:h.id,content:Ee,full_size:!0,no_scale:!0,data:{id:h.map_id||h.id,map_id:h.name,name:h.name||h.map_id,user:this._users[h.map_id]||h.staff_name,status:this._statuses[h.map_id]},z_index:20}),!h.bookable)continue;const A=function(){var E=(0,M.Z)(function*(){s._bookings.newForm(),s._bookings.setOptions({type:"desk"});const{date:Y,duration:j}=yield s._setBookingTime(s._bookings.form.value.date,s._bookings.form.value.duration);s._bookings.form.patchValue({asset_id:h.id,asset_name:h.name,date:Y,duration:j,map_id:h?.map_id||h?.id,description:h.name,user:p.host||(0,v.ar)(),booking_type:"desk",zones:h.zone?[h.zone?.parent_id,h.zone?.id]:[]}),yield s._bookings.confirmPost(),s._users[h.map_id]=(p.host||(0,v.ar)())?.name,(0,v.t5)(`Successfull booked desk ${h.name||h.id}`)});return function(){return E.apply(this,arguments)}}();r.push({id:h.id,action:"click",callback:A}),r.push({id:h.id,action:"touchend",callback:A})}this._state.setActions("desks",this._options.getValue().enable_booking?r:[]),this._state.setFeatures("desks",a),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,s){var a=this;return(0,M.Z)(function*(){if(a._settings.get("app.desks.allow_time_changes")){const r=(0,ye.Z)((0,Qe.Z)(Date.now(),a._settings.get("app.desks.available_period")||90)),h=yield a._dialog.open(Ze,{data:{date:t,duration:s,until:r}}).afterClosed().toPromise();if(!h)throw"User cancelled";t=h.date,s=h.duration}return{date:t,duration:s}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x.c),e.LFG(S.w7),e.LFG(v.gb),e.LFG(Ce.fy),e.LFG(W.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();m(6198),m(9136),m(8461),m(4139),m(823),m(8759),m(4618),m(8550);let xt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[C.ez,k.Kk,y.u5,y.UX,b.rP,F.U8,T.eL,l.W9]}),n})()},6667:(oe,G,m)=>{m.d(G,{c:()=>J});var C=m(1670),y=m(4505),k=m(4139),b=m(7716),F=m(9095),T=m(6942),l=m(7418),M=m(9128),v=m(823),S=m(5670),N=m(9151),x=m(1506),e=m(3619),g=m(8215),q=m(3690),I=m(2560);let J=(()=>{class P extends x.KG{constructor(Z,B,D){super(),this._org=Z,this._spaces=B,this._settings=D,this._level=new y.X(null),this._positions=new y.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new y.X({}),this._features=new y.X({}),this._actions=new y.X({}),this._labels=new y.X({}),this._options=new y.X({disable:["zones","devices"]}),this._message=new y.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=this._level.pipe((0,F.w)(U=>(0,q.vIL)({zone_id:U?.id,limit:50}).pipe((0,T.U)(({data:L})=>L.map(z=>new g.T(z))),(0,l.K)(L=>(0,k.of)([])))),(0,M.d)(1)),this.map_url=this._level.pipe((0,T.U)(U=>(U?U.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,b.aj)([this._features,this._options]).pipe((0,v.b)(200),(0,T.U)(([U,L])=>{let z=[];for(const _ in U)L.disable?.includes(_)||L.disable_features?.includes(_)||(z=z.concat(U[_]));return z})),this.map_actions=(0,b.aj)([this._actions,this._options]).pipe((0,v.b)(200),(0,T.U)(([U,L])=>{let z=[];for(const _ in U)L.disable?.includes(_)||L.disable_actions?.includes(_)||(z=z.concat(U[_]));return z})),this.map_labels=(0,b.aj)([this._labels,this._options]).pipe((0,v.b)(200),(0,T.U)(([U,L])=>{let z=[];for(const _ in U)L.disable?.includes(_)||L.disable_labels?.includes(_)||(z=z.concat(U[_]));return z})),this.map_styles=(0,b.aj)([this._styles,this._options]).pipe((0,v.b)(200),(0,T.U)(([U,L])=>{let z={text:{display:"none"}};for(const _ in U)L.disable?.includes(_)||L.disable_styles?.includes(_)||(z={...z,...U[_]});return L.disable?.includes("zones")&&(z["#zones"]={display:"none"},z["#Zones"]={display:"none"}),z})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){var Z=this;return(0,C.Z)(function*(){yield Z._org.initialised.pipe((0,S.P)(B=>B)).toPromise(),Z._org.active_building.pipe((0,N.h)(B=>!!B)).subscribe(B=>{const D=Z._level.getValue(),U=Z._org.levelsForBuilding(B);!U.find(z=>D?.id===z.id)&&U.length&&Z.setLevel(U[0].id),Z._settings.get("app.explore.disable_actions")&&Z.setOptions({disable_actions:Z._settings.get("app.explore.disable_actions")}),Z._settings.get("app.explore.disable_labels")&&Z.setOptions({disable_labels:Z._settings.get("app.explore.disable_labels")}),Z._settings.get("app.explore.disable_features")&&Z.setOptions({disable_features:Z._settings.get("app.explore.disable_features")}),Z._settings.get("app.explore.disable_styles")&&Z.setOptions({disable_styles:Z._settings.get("app.explore.disable_styles")})})})()}setOptions(Z){const B=this._options.getValue(),D=(0,x.Tw)([...Z.disable||B.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next({...this._options.getValue(),...Z,disable:D})}reset(){this._styles.next({}),this._features.next({}),this._labels.next({}),this._actions.next({}),this.setPositions(1,{x:.5,y:.5})}setLevel(Z){const B=this._org.levelWithID([Z]);B&&this._level.next(B)}setStyles(Z,B){const D=this._styles.getValue();D[Z]=B,this._styles.next(D)}setFeatures(Z,B){const D=this._features.getValue();D[Z]=B,this._features.next(D)}setActions(Z,B){const D=this._actions.getValue();D[Z]=B,this._actions.next(D)}setLabels(Z,B){const D=this._labels.getValue();D[Z]=B,this._labels.next(D)}setPositions(Z,B){this._positions.next({zoom:Z,center:B})}}return P.\u0275fac=function(Z){return new(Z||P)(I.LFG(e.w7),I.LFG(g.sK),I.LFG(x.gb))},P.\u0275prov=I.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),P})()},8461:(oe,G,m)=>{m.d(G,{s:()=>F});var C=m(6667),y=m(2560),k=m(5306),b=m(4522);let F=(()=>{class T{constructor(M){this._state=M,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return T.\u0275fac=function(M){return new(M||T)(y.Y36(C.c))},T.\u0275cmp=y.Xpm({type:T,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"],["z-out","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"],["reset","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"]],template:function(M,v){1&M&&(y.TgZ(0,"button",0),y.NdJ("click",function(){return v.zoomIn()}),y.TgZ(1,"app-icon"),y._uU(2,"add"),y.qZA()(),y.TgZ(3,"button",1),y.NdJ("click",function(){return v.zoomOut()}),y.TgZ(4,"app-icon"),y._uU(5,"remove"),y.qZA()(),y.TgZ(6,"button",2),y.NdJ("click",function(){return v.reset()}),y.TgZ(7,"app-icon"),y._uU(8,"autorenew"),y.qZA()())},dependencies:[k.o,b.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--65.css.map*/"]}),T})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map