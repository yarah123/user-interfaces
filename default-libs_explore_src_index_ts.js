"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{6168:(ne,W,d)=>{function x(I){var O=this;I="object"==typeof I?I:{},O.revision=3,O.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},O.toTable=I.toTable,O.domElement=O.toTable?document.createElement("div"):document.createElement("canvas"),O.url=I.url||"",O.size=I.size||280,O.qrc=!1,O.colorLight=I.colorLight||"#fff",O.colorDark=I.colorDark||"#000",O.ecclevel=I.ecclevel||1,O.noBorder=I.noBorder,O.borderSize=I.borderSize||4;var A,y,r,M,v,S,U,b=[],e=[],h=[],J=[],X=[],$=[],k=function(f,n){var a;f>n&&(a=f,f=n,n=a),a=n,a*=n,a+=n,a>>=1,J[a+=f]=1},F=function(f,n){var a;for(h[f+r*n]=1,a=-2;a<2;a++)h[f+a+r*(n-2)]=1,h[f-2+r*(n+a+1)]=1,h[f+2+r*(n+a)]=1,h[f+a+1+r*(n+2)]=1;for(a=0;a<2;a++)k(f-1,n+a),k(f+1,n-a),k(f-a,n-1),k(f+a,n+1)},z=function(f){for(;f>=255;)f=((f-=255)>>8)+(255&f);return f},C=function(f,n,a,c){var m,P,g,R=x.gexp,Y=x.glog;for(m=0;m<c;m++)b[a+m]=0;for(m=0;m<n;m++){if(255!=(g=Y[b[f+m]^b[a]]))for(P=1;P<c;P++)b[a+P-1]=b[a+P]^R[z(g+$[c-P])];else for(P=a;P<a+c;P++)b[P]=b[P+1];b[a+c-1]=255==g?0:R[z(g+$[0])]}},N=function(f,n){var a;return f>n&&(a=f,f=n,n=a),a=n,a+=n*n,a>>=1,J[a+=f]},B=function(f){var n,a,c,m;switch(f){case 0:for(a=0;a<r;a++)for(n=0;n<r;n++)n+a&1||N(n,a)||(h[n+a*r]^=1);break;case 1:for(a=0;a<r;a++)for(n=0;n<r;n++)1&a||N(n,a)||(h[n+a*r]^=1);break;case 2:for(a=0;a<r;a++)for(c=0,n=0;n<r;n++,c++)3==c&&(c=0),c||N(n,a)||(h[n+a*r]^=1);break;case 3:for(m=0,a=0;a<r;a++,m++)for(3==m&&(m=0),c=m,n=0;n<r;n++,c++)3==c&&(c=0),c||N(n,a)||(h[n+a*r]^=1);break;case 4:for(a=0;a<r;a++)for(c=0,m=a>>1&1,n=0;n<r;n++,c++)3==c&&(c=0,m=!m),m||N(n,a)||(h[n+a*r]^=1);break;case 5:for(m=0,a=0;a<r;a++,m++)for(3==m&&(m=0),c=0,n=0;n<r;n++,c++)3==c&&(c=0),(n&a&1)+!(!c|!m)||N(n,a)||(h[n+a*r]^=1);break;case 6:for(m=0,a=0;a<r;a++,m++)for(3==m&&(m=0),c=0,n=0;n<r;n++,c++)3==c&&(c=0),(n&a&1)+(c&&c==m)&1||N(n,a)||(h[n+a*r]^=1);break;case 7:for(m=0,a=0;a<r;a++,m++)for(3==m&&(m=0),c=0,n=0;n<r;n++,c++)3==c&&(c=0),(c&&c==m)+(n+a&1)&1||N(n,a)||(h[n+a*r]^=1)}},Z=function(f){var n,a=0;for(n=0;n<=f;n++)X[n]>=5&&(a+=x.N1+X[n]-5);for(n=3;n<f-1;n+=2)X[n-2]==X[n+2]&&X[n+2]==X[n-1]&&X[n-1]==X[n+1]&&3*X[n-1]==X[n]&&(0==X[n-3]||n+3>f||3*X[n-3]>=4*X[n]||3*X[n+3]>=4*X[n])&&(a+=x.N3);return a},w=function(){var f,n,a,c,m,P=0,g=0;for(n=0;n<r-1;n++)for(f=0;f<r-1;f++)(h[f+r*n]&&h[f+1+r*n]&&h[f+r*(n+1)]&&h[f+1+r*(n+1)]||!(h[f+r*n]||h[f+1+r*n]||h[f+r*(n+1)]||h[f+1+r*(n+1)]))&&(P+=x.N2);for(n=0;n<r;n++){for(X[0]=0,a=c=f=0;f<r;f++)(m=h[f+r*n])==c?X[a]++:X[++a]=1,g+=(c=m)?1:-1;P+=Z(a)}g<0&&(g=-g);var R=g,Y=0;for(R+=R<<2,R<<=1;R>r*r;)R-=r*r,Y++;for(P+=Y*x.N4,f=0;f<r;f++){for(X[0]=0,a=c=n=0;n<r;n++)(m=h[f+r*n])==c?X[a]++:X[++a]=1,c=m;P+=Z(a)}return P};O.genframe=function(f){var n,a,c,m,P,g,R,Y,Q=x.eccblocks,H=x.gexp,ee=x.glog;m=f.length,y=0;do{if(y++,c=4*(A-1)+16*(y-1),M=Q[c++],v=Q[c++],S=Q[c++],U=Q[c],m<=(c=S*(M+v)+v-3+(y<=9)))break}while(y<40);for(r=17+4*y,P=S+(S+U)*(M+v)+v,m=0;m<P;m++)e[m]=0;for(b=f.slice(0),m=0;m<r*r;m++)h[m]=0;for(m=0;m<(r*(r+1)+1)/2;m++)J[m]=0;for(m=0;m<3;m++){for(c=0,a=0,1==m&&(c=r-7),2==m&&(a=r-7),h[a+3+r*(c+3)]=1,n=0;n<6;n++)h[a+n+r*c]=1,h[a+r*(c+n+1)]=1,h[a+6+r*(c+n)]=1,h[a+n+1+r*(c+6)]=1;for(n=1;n<5;n++)k(a+n,c+1),k(a+1,c+n+1),k(a+5,c+n),k(a+n+1,c+5);for(n=2;n<4;n++)h[a+n+r*(c+2)]=1,h[a+2+r*(c+n+1)]=1,h[a+4+r*(c+n)]=1,h[a+n+1+r*(c+4)]=1}if(y>1)for(m=x.adelta[y],a=r-7;;){for(n=r-7;n>m-3&&(F(n,a),!(n<m));)n-=m;if(a<=m+9)break;F(6,a-=m),F(a,6)}for(h[8+r*(r-8)]=1,a=0;a<7;a++)k(7,a),k(r-8,a),k(7,a+r-7);for(n=0;n<8;n++)k(n,7),k(n+r-8,7),k(n,r-8);for(n=0;n<9;n++)k(n,8);for(n=0;n<8;n++)k(n+r-8,8),k(8,n);for(a=0;a<7;a++)k(8,a+r-7);for(n=0;n<r-14;n++)1&n?(k(8+n,6),k(6,8+n)):(h[8+n+6*r]=1,h[6+r*(8+n)]=1);if(y>6)for(m=x.vpat[y-7],c=17,n=0;n<6;n++)for(a=0;a<3;a++,c--)1&(c>11?y>>c-12:m>>c)?(h[5-n+r*(2-a+r-11)]=1,h[2-a+r-11+r*(5-n)]=1):(k(5-n,2-a+r-11),k(2-a+r-11,5-n));for(a=0;a<r;a++)for(n=0;n<=a;n++)h[n+r*a]&&k(n,a);for(P=b.length,g=0;g<P;g++)e[g]=b.charCodeAt(g);if(b=e.slice(0),P>=(n=S*(M+v)+v)-2&&(P=n-2,y>9&&P--),g=P,y>9){for(b[g+2]=0,b[g+3]=0;g--;)b[g+3]|=255&(m=b[g])<<4,b[g+2]=m>>4;b[2]|=255&P<<4,b[1]=P>>4,b[0]=64|P>>12}else{for(b[g+1]=0,b[g+2]=0;g--;)b[g+2]|=255&(m=b[g])<<4,b[g+1]=m>>4;b[1]|=255&P<<4,b[0]=64|P>>4}for(g=P+3-(y<10);g<n;)b[g++]=236,b[g++]=17;for($[0]=1,g=0;g<U;g++){for($[g+1]=1,R=g;R>0;R--)$[R]=$[R]?$[R-1]^H[z(ee[$[R]]+g)]:$[R-1];$[0]=H[z(ee[$[0]]+g)]}for(g=0;g<=U;g++)$[g]=ee[$[g]];for(c=n,a=0,g=0;g<M;g++)C(a,S,c,U),a+=S,c+=U;for(g=0;g<v;g++)C(a,S+1,c,U),a+=S+1,c+=U;for(a=0,g=0;g<S;g++){for(R=0;R<M;R++)e[a++]=b[g+R*S];for(R=0;R<v;R++)e[a++]=b[M*S+g+R*(S+1)]}for(R=0;R<v;R++)e[a++]=b[M*S+g+R*(S+1)];for(g=0;g<U;g++)for(R=0;R<M+v;R++)e[a++]=b[n+g+R*U];for(b=e,n=a=r-1,c=P=1,Y=(S+U)*(M+v)+v,g=0;g<Y;g++)for(m=b[g],R=0;R<8;R++,m<<=1){128&m&&(h[n+r*a]=1);do{P?n--:(n++,c?0!=a?a--:(c=!c,6==(n-=2)&&(n--,a=9)):a!=r-1?a++:(c=!c,6==(n-=2)&&(n--,a-=8))),P=!P}while(N(n,a))}for(b=h.slice(0),m=0,a=3e4,c=0;c<8&&(B(c),(n=w())<a&&(a=n,m=c),7!=m);c++)h=b.slice(0);for(m!=c&&B(m),a=x.fmtword[m+(A-1<<3)],c=0;c<8;c++,a>>=1)1&a&&(h[r-1-c+8*r]=1,c<6?h[8+r*c]=1:h[8+r*(c+1)]=1);for(c=0;c<7;c++,a>>=1)1&a&&(h[8+r*(r-7+c)]=1,c?h[6-c+8*r]=1:h[7+8*r]=1);return h},O.init=function(){A=O.ecclevel;var f=O.genframe(O.url);O.toTable?O.tableWrite(f,r):O.canvasWrite(f,r)},O.init()}function L(I,O="#fff0",A="#000"){return new x({url:I||"Hello",size:360,colorLight:O,colorDark:A,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0})?.toImage("svg+xml")?.src}d.d(W,{w:()=>L}),x.prototype={canvasWrite:function(I,O){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(I,O);var A=this.size,y=this.qrc;y.lineWidth=1;var r=A;r/=O+10,r=Math.round(r-.5);var M=4;this.noBorder?(y.canvas.width=y.canvas.height=r*O,M=0):y.canvas.width=y.canvas.height=A,y.clearRect(0,0,A,A),y.fillStyle=this.colorLight,y.fillRect(0,0,r*(O+8),r*(O+8)),y.fillStyle=this.colorDark;for(var v=0;v<O;v++)for(var S=0;S<O;S++)I[S*O+v]&&y.fillRect(r*(M+v),r*(M+S),r,r)},tableWrite:function(I,O){var A=this,y=Math.round(this.size/O-3.5)+"px",r=O+(A.noBorder?0:2*A.borderSize),M=A.borderSize,v="width:"+y+";height:"+y+";",S=A.colorLight,U=A.colorDark,b=document.createElement("table");b.style.cssText="border:0;border-collapse:collapse;";for(var e,h=document.createElement("tr"),J=document.createElement("td"),X=function(){return J.cloneNode()},$=function(){var Z=X();return Z.style.cssText=v+"background:"+S,Z},k=function(Z){for(var w=Z.firstChild,f=0;f<M;f++)Z.insertBefore($(),w),Z.appendChild($())},F=0;F<O;F++){var z=h.cloneNode();b.appendChild(z);for(var C=0;C<O;C++)if(1===I[F*O+C]){var N=(e=void 0,(e=X()).style.cssText=v+"background:"+U,e);z.appendChild(N)}else{var B=$();z.appendChild(B)}A.noBorder||k(z)}A.noBorder||function(Z){for(var w=Z.firstChild,f=0;f<A.borderSize;f++){for(var n=h.cloneNode(),a=0;a<r;a++){var c=$();n.appendChild(c)}Z.appendChild(n),Z.insertBefore(n.cloneNode(!0),w)}}(b),A.domElement.innerHTML="",A.domElement.appendChild(b)},getContext:function(I){return I.getContext&&I.getContext("2d")?I.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(I){if(this.qrc){var O=this.imageTypes[I];if(!O)throw new Error(I+" is not a valid image type ");var A=new Image;return A.src=this.domElement.toDataURL(O),A}}},x.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],x.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],x.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],x.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],x.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],x.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],x.N1=3,x.N2=3,x.N3=40,x.N4=10},1709:(ne,W,d)=>{d.d(W,{Xp:()=>_e,ck:()=>b.c,P2:()=>St});var x=d(4666),L=d(2508),I=d(2921),O=d(4714),A=d(5895),y=d(7520),r=d(5170),M=d(1670),v=d(9112),S=d(5670),U=d(565),b=d(6667),e=d(2560);d(9885),d(207),d(5074),d(7371);var B=d(3690),m=(d(3910),d(711),d(73),d(4702),d(3159),d(6198),d(6942)),Q=(d(8296),d(656),d(3902),d(719),d(9136)),H=d(3970),j=d(1484),te=(d(8943),d(5306)),se=d(4522),me=(d(1267),d(1708),d(1022));d(6168);const ie={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","signs-of-life":"#1565c0","not-bookable":"#757575",unknown:"#757575"};d(9627);var xe=d(1810),Qe=d(9377),Oe=d(3200),je=d(312),K=d(4505),ae=d(7716),oe=d(9095),le=d(9128),re=d(7418),Ke=d(8929),Ve=d(354),We=d(9502),qe=d(2306),He=d(7303);const et=function(){return{standalone:!0}};function tt(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"main",5)(1,"div",6)(2,"div",7)(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",9)(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.form.patchValue({date:i}))}),e.qZA()(),e.TgZ(12,"div",9)(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA()()()}if(2&s){const t=e.oxw();let o;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,et)),e.xp6(4),e.Q6J("time",null==(o=t.form.get("date"))?null:o.value)("max",720)("min",60)("step",60)}}let Ce=(()=>{class s{constructor(t){this._data=t,this.form=new L.cw({date:new L.NI(this._data.date),duration:new L.NI(this._data.duration)}),this.book_until=this._data.until}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(j.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,tt,16,9,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9,"Continue"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.form),e.xp6(2),e.Q6J("mat-dialog-close",o.form.value))},dependencies:[x.O5,te.o,se.lW,j.ZT,L.JJ,L.JL,L.On,L.sg,L.u,qe.Q,me.B,He.N]}),s})();function ot(s,_){if(1&s&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function nt(s,_){if(1&s&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function st(s,_){if(1&s&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,ot,2,1,"p",6),e.YNc(6,nt,4,8,"p",7),e.qZA()()),2&s){const t=e.oxw();e.Tol("absolute rounded bg-white dark:bg-neutral-800 p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.name||t.map_id||t.id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Le=(()=>{class s{constructor(t,o){this._details=t,this._element=o,this.id=this._details.id,this.map_id=this._details.map_id,this.name=this._details.name,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{const o=this._element.nativeElement.parentElement?.parentElement;if(!o)return this.ngOnInit(++t);const i_y=parseInt(o.style.top,10)/100,i_x=parseInt(o.style.left,10)/100;this.y_pos=i_y>=.5?"bottom":"top",this.x_pos=i_x>=.5?"right":"left"},200)}get available_until(){return""}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(Q.u),e.Y36(e.SBq))},s.\u0275cmp=e.Xpm({type:s,selectors:[["explore-desk-info"]],decls:3,vars:7,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,st,7,6,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("content",i)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",o.id)("map_id",o.map_id)}},dependencies:[x.O5,H.X,x.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}\n/*# sourceMappingURL=explore-desk-info.component.ts-angular-inline--62.css.map*/"]}),s})();var it=d(9380),at=d(8987);const lt=["explore-device-info",""];function rt(s,_){if(1&s&&(e.TgZ(0,"p",18)(1,"label"),e.SDv(2,19),e.qZA(),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function _t(s,_){if(1&s&&(e.TgZ(0,"p",20)(1,"label"),e.SDv(2,21),e.qZA(),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os," ")}}function ct(s,_){if(1&s&&(e.TgZ(0,"p",22)(1,"label"),e.SDv(2,23),e.qZA(),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid," ")}}function pt(s,_){if(1&s&&(e.TgZ(0,"p",24)(1,"label"),e.SDv(2,25),e.qZA(),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function dt(s,_){if(1&s&&(e.TgZ(0,"p",26)(1,"label"),e.SDv(2,27),e.qZA(),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function ut(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"p",9)(4,"label"),e.SDv(5,10),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p")(8,"label"),e.SDv(9,11),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"label"),e.SDv(13,12),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,rt,4,1,"p",13),e.YNc(16,_t,4,1,"p",14),e.YNc(17,ct,4,1,"p",15),e.YNc(18,pt,4,1,"p",16),e.YNc(19,dt,4,1,"p",17),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer&&!t.hide_fields.includes("manufacturer")),e.xp6(1),e.Q6J("ngIf",t.os&&!t.hide_fields.includes("os")),e.xp6(1),e.Q6J("ngIf",t.ssid&&!t.hide_fields.includes("ssid")),e.xp6(1),e.Q6J("ngIf",t.username&&!t.hide_fields.includes("username")),e.xp6(1),e.Q6J("ngIf",t.user&&!t.hide_fields.includes("user"))}}const ft=[];let Te=(()=>{class s extends v.KG{constructor(t,o,i){super(),this._details=t,this._settings=o,this._element=i,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}get hide_fields(){return this._settings.get("app.explore.hide_device_fields")||ft}get last_seen(){return(0,it.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,at.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{const o=this._element.nativeElement.parentElement?.parentElement;if(!o)return this.ngOnInit(++t);const i_y=parseInt(o.style.top,10)/100,i_x=parseInt(o.style.left,10)/100;this.y_pos=i_y>=.5?"bottom":"top",this.x_pos=i_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(l=>this.zoom=l))},200)}loadUser(){var t=this;return(0,M.Z)(function*(){if(t.username)return;const o=(0,B.rTZ)(t._details.system,"LocationServices");if(!o)return;t.username="Loading...";const i=yield o.execute("check_ownership_of",[t.mac]).catch(l=>null);t.username=i&&i.assigned_to?i.assigned_to:""})()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(Q.u),e.Y36(v.gb),e.Y36(e.SBq))},s.\u0275cmp=e.Xpm({type:s,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:lt,decls:7,vars:9,consts:function(){let _,t,o,i,l,p,u,T;return _=$localize`:␟14802d5580219b4522c9c50e1a9f401aee191e1e␟5080596488336446120:MAC:`,t=$localize`:␟4e79bc7b2a23c2e4e80d256c8167411cf124bd20␟1921442792032576180:Accuracy:`,o=$localize`:␟1c564bebf178f9c70f2c66a80393137bfa0d2ea8␟5291488112436395082:Last Seen:`,i=$localize`:␟a082daef9c0b66268ce56dfa8d96d47a04d2c4b1␟6296767522110275448:Manufacturer:`,l=$localize`:␟5544405b325c518c94412239610d44250d5a223a␟2346706060395913038:OS:`,p=$localize`:␟afd0fc7b37f54299537ba2abc9babf749adf383e␟4345272263810420547:SSID:`,u=$localize`:␟67fc3fe0566f8700b84a908c35497759db78addc␟140822705245800362:Username:`,T=$localize`:␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`,[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","dark:bg-neutral-800","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],_,t,o,["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],i,["os",""],l,["ssid",""],p,["username",""],u,["user",""],T]},template:function(t,o){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return o.loadUser()}),e.qZA(),e.YNc(5,ut,20,8,"ng-template",null,5,e.W1O)),2&t){const i=e.MAs(6);e.Akn("height: "+o.diameter+"%; width: "+o.diameter+"%;"),e.xp6(2),e.Udp("background-color",o.bg_color),e.xp6(2),e.Q6J("content",i)("backdrop",!1)("xPosition",o.x_pos)("yPosition",o.y_pos)("hover",!0)}},dependencies:[x.O5,H.X],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--63.css.map*/"]}),s})(),_e=(()=>{class s extends v.KG{constructor(t,o,i,l,p){super(),this._state=t,this._org=o,this._settings=i,this._bookings=l,this._dialog=p,this._in_use=new K.X([]),this._options=new K.X({}),this._presence=new K.X([]),this._signs_of_life=new K.X([]),this._statuses={},this._users={},this._poll=new K.X(0),this._checked_in=new K.X([]),this._desk_bookings=(0,ae.aj)([this._state.level,this._poll]).pipe((0,oe.w)(([u])=>(0,Ve.F2)({period_start:(0,xe.Z)((0,Qe.Z)(new Date)),period_end:(0,xe.Z)((0,Oe.Z)(new Date)),type:"desk",zones:u.id})),(0,le.d)(1)),this.desk_list=this._state.level.pipe((0,oe.w)(u=>(0,B.rlq)(u.id,"desks").pipe((0,m.U)(T=>(T.details instanceof Array?T.details:[]).map(E=>new We.n({...E,zone:u}))))),(0,re.K)(u=>[]),(0,le.d)(1)),this._bind=this._state.level.pipe((0,m.U)(u=>{if(this._statuses={},this.unsubWith("lvl"),!u)return;const T=this._org.binding("area_management");if(!T)return;let E=(0,B.rTZ)(T,"AreaManagement").binding(u.id);this.subscription("lvl-in_use",E.listen().subscribe(D=>this.processBindingChange(D||{},T))),this.subscription("lvl-in_use_bind",E.bind())})),this._state_change=(0,ae.aj)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this._options]).pipe((0,m.U)(([u,T,E,D,G])=>{this._statuses={};for(const{id:V,bookable:Ie}of u){const yt=T.some(q=>V===q),Pe=E.some(q=>V===q),It=G.some(q=>V===q),Re=D.some(q=>V===q);this._statuses[V]=Ie?yt||Pe||Re?Pe||Re?"busy":"pending":It?"signs-of-life":"free":"not-bookable"}this.processDesks(u)})),this.init()}init(){var t=this;return(0,M.Z)(function*(){yield t._org.initialised.pipe((0,S.P)(o=>o)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bind",t._bind.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(o=>t.processDesks(o)))})()}startPolling(t=1e4){return this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(o=>{const i=o.filter(l=>!(l.rejected||l.deleted||"ended"===l.extension_data.current_state));this._in_use.next(i.map(l=>l.asset_id)),this._checked_in.next(i.filter(l=>l.checked_in).map(l=>l.asset_id))})),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},o){const i=(t||[]).filter(p=>!["desk","booking"].includes(p.location)),l=(t||[]).filter(p=>"desk"===p.location||"booking"===p.location&&"desk"===p.type);this._presence.next(l.filter(p=>p.at_location).map(p=>p.map_id||p.asset_id)),this._signs_of_life.next(l.filter(p=>p.signs_of_life).map(p=>p.map_id||p.asset_id)),this.processDevices(i,o),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},o=this._settings.get("app.explore.colors")||{};for(const i in this._statuses)!this._statuses[i]||(t[`#${i}`]={fill:o[`desk-${this._statuses[i]}`]||o[`${this._statuses[i]}`]||ie[`${this._statuses[i]}`]});this._state.setStyles("desks",t)}processDevices(t,o){const i=[];for(const l of t){const p=l.x/l.map_width,u=l.y/l.map_height;i.push({location:{x:l.coordinates_from?.includes("right")?1-p:p,y:l.coordinates_from?.includes("bottom")?1-u:u},content:Te,z_index:20,data:{...l,system:o}})}this._state.setFeatures("devices",i)}processDesks(t){var o=this;const i=[],l=[],p=this._options.getValue();for(const u of t){if(i.push({location:u.id,content:Le,full_size:!0,no_scale:!0,data:{id:u.map_id||u.id,map_id:u.name,name:u.name||u.map_id,user:this._users[u.map_id]||u.staff_name,status:this._statuses[u.map_id]},z_index:20}),!u.bookable)continue;const T=function(){var E=(0,M.Z)(function*(){o._bookings.newForm(),o._bookings.setOptions({type:"desk"});const{date:D,duration:G}=yield o._setBookingTime(o._bookings.form.value.date,o._bookings.form.value.duration);o._bookings.form.patchValue({asset_id:u.id,asset_name:u.name,date:D,duration:G,map_id:u?.map_id||u?.id,description:u.name,user:p.host||(0,v.ar)(),booking_type:"desk",zones:u.zone?[u.zone?.parent_id,u.zone?.id]:[]}),yield o._bookings.confirmPost(),o._users[u.map_id]=(p.host||(0,v.ar)())?.name,(0,v.t5)(`Successfull booked desk ${u.name||u.id}`)});return function(){return E.apply(this,arguments)}}();l.push({id:u.id,action:"click",callback:T}),l.push({id:u.id,action:"touchend",callback:T})}this._state.setActions("desks",this._options.getValue().enable_booking?l:[]),this._state.setFeatures("desks",i),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,o){var i=this;return(0,M.Z)(function*(){if(i._settings.get("app.desks.allow_time_changes")){const l=(0,Oe.Z)((0,je.Z)(Date.now(),i._settings.get("app.desks.available_period")||90)),u=yield i._dialog.open(Ce,{data:{date:t,duration:o,until:l}}).afterClosed().toPromise();if(!u)throw"User cancelled";t=u.date,o=u.duration}return{date:t,duration:o}})()}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(b.c),e.LFG(U.w),e.LFG(v.gb),e.LFG(Ke.f),e.LFG(j.uw))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})();d(8461),d(4139),d(823),d(8759),d(9012),d(4618),d(8550);let St=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[x.ez,I.Kk,L.u5,L.UX,O.rP,A.U8,y.eL,r.W]}),s})()},6667:(ne,W,d)=>{d.d(W,{c:()=>k});var x=d(1670),L=d(3690),I=d(4505),O=d(4139),A=d(7716),y=d(9095),r=d(6942),M=d(7418),v=d(9128),S=d(823),U=d(5670),b=d(9151),e=d(9112),h=d(565),J=d(656),X=d(73),$=d(2560);let k=(()=>{class F extends e.KG{constructor(C,N,B){super(),this._org=C,this._spaces=N,this._settings=B,this._level=new I.X(null),this._positions=new I.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new I.X({}),this._features=new I.X({}),this._actions=new I.X({}),this._labels=new I.X({}),this._options=new I.X({disable:["zones","devices"]}),this._message=new I.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=this._level.pipe((0,y.w)(Z=>(0,L.vIL)({zone_id:Z?.id,limit:50}).pipe((0,r.U)(({data:w})=>w.map(f=>new J.T(f))),(0,M.K)(w=>(0,O.of)([])))),(0,v.d)(1)),this.map_url=this._level.pipe((0,r.U)(Z=>(Z?Z.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,A.aj)([this._features,this._options]).pipe((0,S.b)(200),(0,r.U)(([Z,w])=>{let f=[];for(const n in Z)w.disable?.includes(n)||w.disable_features?.includes(n)||(f=f.concat(Z[n]));return f})),this.map_actions=(0,A.aj)([this._actions,this._options]).pipe((0,S.b)(200),(0,r.U)(([Z,w])=>{let f=[];for(const n in Z)w.disable?.includes(n)||w.disable_actions?.includes(n)||(f=f.concat(Z[n]));return f})),this.map_labels=(0,A.aj)([this._labels,this._options]).pipe((0,S.b)(200),(0,r.U)(([Z,w])=>{let f=[];for(const n in Z)w.disable?.includes(n)||w.disable_labels?.includes(n)||(f=f.concat(Z[n]));return f})),this.map_styles=(0,A.aj)([this._styles,this._options]).pipe((0,S.b)(200),(0,r.U)(([Z,w])=>{let f={text:{display:"none"}};for(const n in Z)w.disable?.includes(n)||w.disable_styles?.includes(n)||(f={...f,...Z[n]});return w.disable?.includes("zones")&&(f["#zones"]={display:"none"},f["#Zones"]={display:"none"}),f})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){var C=this;return(0,x.Z)(function*(){yield C._org.initialised.pipe((0,U.P)(N=>N)).toPromise(),C._org.active_building.pipe((0,b.h)(N=>!!N)).subscribe(N=>{const B=C._level.getValue(),Z=C._org.levelsForBuilding(N);!Z.find(f=>B?.id===f.id)&&Z.length&&C.setLevel(Z[0].id),C._settings.get("app.explore.disable_actions")&&C.setOptions({disable_actions:C._settings.get("app.explore.disable_actions")}),C._settings.get("app.explore.disable_labels")&&C.setOptions({disable_labels:C._settings.get("app.explore.disable_labels")}),C._settings.get("app.explore.disable_features")&&C.setOptions({disable_features:C._settings.get("app.explore.disable_features")}),C._settings.get("app.explore.disable_styles")&&C.setOptions({disable_styles:C._settings.get("app.explore.disable_styles")})})})()}setOptions(C){const N=this._options.getValue(),B=(0,e.Tw)([...C.disable||N.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next({...this._options.getValue(),...C,disable:B})}reset(){this._styles.next({}),this._features.next({}),this._labels.next({}),this._actions.next({}),this.setPositions(1,{x:.5,y:.5})}setLevel(C){const N=this._org.levelWithID([C]);N&&this._level.next(N)}setStyles(C,N){const B=this._styles.getValue();B[C]=N,this._styles.next(B)}setFeatures(C,N){const B=this._features.getValue();B[C]=N,this._features.next(B)}setActions(C,N){const B=this._actions.getValue();B[C]=N,this._actions.next(B)}setLabels(C,N){const B=this._labels.getValue();B[C]=N,this._labels.next(B)}setPositions(C,N){this._positions.next({zoom:C,center:N})}}return F.\u0275fac=function(C){return new(C||F)($.LFG(h.w),$.LFG(X.s),$.LFG(e.gb))},F.\u0275prov=$.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()},8461:(ne,W,d)=>{d.d(W,{s:()=>A});var x=d(6667),L=d(2560),I=d(5306),O=d(4522);let A=(()=>{class y{constructor(M){this._state=M,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return y.\u0275fac=function(M){return new(M||y)(L.Y36(x.c))},y.\u0275cmp=L.Xpm({type:y,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:function(){let r,M,v;return r=$localize`:␟34fb6028a6630cf3a7308084b31e86e89d057965␟1470758907984185227:Zoom In`,M=$localize`:␟677ce9c57b5558cb10f0b39327d5a965bfb21dc5␟1356460275822781324:Zoom Out`,v=$localize`:␟77981432124895c410e5b9157b3deb948831ffc6␟5016012668378976433:Reset Zoom & Center`,[["z-in","","mat-icon-button","","matTooltip",r,1,"bg-white","dark:bg-neutral-800",3,"click"],["z-out","","mat-icon-button","","matTooltip",M,1,"bg-white","dark:bg-neutral-800",3,"click"],["reset","","mat-icon-button","","matTooltip",v,1,"bg-white","dark:bg-neutral-800",3,"click"]]},template:function(M,v){1&M&&(L.TgZ(0,"button",0),L.NdJ("click",function(){return v.zoomIn()}),L.TgZ(1,"app-icon"),L._uU(2,"add"),L.qZA()(),L.TgZ(3,"button",1),L.NdJ("click",function(){return v.zoomOut()}),L.TgZ(4,"app-icon"),L._uU(5,"remove"),L.qZA()(),L.TgZ(6,"button",2),L.NdJ("click",function(){return v.reset()}),L.TgZ(7,"app-icon"),L._uU(8,"autorenew"),L.qZA()())},dependencies:[I.o,O.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}button[_ngcontent-%COMP%]{border:1px solid #9998;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--66.css.map*/"]}),y})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map