(()=>{"use strict";var e,v={},m={};function r(e){var o=m[e];if(void 0!==o)return o.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(o,t,i,s)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,s]=e[n],d=!0,u=0;u<t.length;u++)(!1&s||a>=s)&&Object.keys(r.O).every(b=>r.O[b](t[u]))?t.splice(u--,1):(d=!1,s<a&&(a=s));if(d){e.splice(n--,1);var l=i();void 0!==l&&(o=l)}}return o}s=s||0;for(var n=e.length;n>0&&e[n-1][2]>s;n--)e[n]=e[n-1];e[n]=[t,i,s]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="visitor-kiosk:";r.l=(t,i,s,n)=>{if(e[t])e[t].push(i);else{var a,d;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==o+s){a=f;break}}a||(d=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+s),a.src=r.tu(t)),e[t]=[i];var c=(h,b)=>{a.onerror=a.onload=null,clearTimeout(p);var g=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(y=>y(b)),h)return h(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={runtime:0};r.f.j=(i,s)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)s.push(n[2]);else if("runtime"!=i){var a=new Promise((f,c)=>n=e[i]=[f,c]);s.push(n[2]=a);var d=r.p+r.u(i),u=new Error;r.l(d,f=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var c=f&&("load"===f.type?"missing":f.type),p=f&&f.target&&f.target.src;u.message="Loading chunk "+i+" failed.\n("+c+": "+p+")",u.name="ChunkLoadError",u.type=c,u.request=p,n[1](u)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var o=(i,s)=>{var u,l,[n,a,d]=s,f=0;if(n.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(d)var c=d(r)}for(i&&i(s);f<n.length;f++)r.o(e,l=n[f])&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},t=self.webpackChunkvisitor_kiosk=self.webpackChunkvisitor_kiosk||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();
//# sourceMappingURL=runtime.js.map