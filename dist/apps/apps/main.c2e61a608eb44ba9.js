var __webpack_modules__={4554:(l,m,c)=>{c.d(m,{UG:()=>_,Vs:()=>R});var d=c(655);let y={};const b={},p={};let C=!1;function x(f,g){return(0,d.mG)(this,void 0,void 0,function*(){return p[g]||(C||(yield c.I("default"),C=!0),yield f.init(c.S.default),p[g]=!0),f})}function w(f,g){return(0,d.mG)(this,void 0,void 0,function*(){if("string"==typeof f)return yield j(f,g);if("script"===f.type){const E=f;return yield j(E.remoteEntry,E.remoteName)}"module"===f.type&&(yield function S(f){return(0,d.mG)(this,void 0,void 0,function*(){return b[f]?Promise.resolve():yield import(f).then(g=>{x(g,f),b[f]=g})})}(f.remoteEntry))})}function j(f,g){return(0,d.mG)(this,void 0,void 0,function*(){return new Promise((E,I)=>{if(b[g])return void E();const T=document.createElement("script");T.src=f,T.onerror=I,T.onload=()=>{const U=window[g];x(U,g),b[g]=U,E()},document.body.appendChild(T)})})}function R(f){return(0,d.mG)(this,void 0,void 0,function*(){let g,E,I;if(f.type||(f.type="script"),"manifest"===f.type){const T=y[f.remoteName];if(!T)throw new Error("Manifest does not contain "+f.remoteName);f={type:T.type,exposedModule:f.exposedModule,remoteEntry:T.remoteEntry,remoteName:"script"===T.type?f.remoteName:void 0},I=T.remoteEntry}else I=f.remoteEntry;return"script"===f.type?(g={type:"script",remoteEntry:f.remoteEntry,remoteName:f.remoteName},E=f.remoteName):"module"===f.type&&(g={type:"module",remoteEntry:f.remoteEntry},E=f.remoteEntry),I&&(yield w(g)),yield function v(f,g){return(0,d.mG)(this,void 0,void 0,function*(){return(yield b[f].get(g))()})}(E,f.exposedModule)})}function _(f,g=!1){return(0,d.mG)(this,void 0,void 0,function*(){const E=yield fetch(f);if(!E.ok)throw Error("could not load configFile: "+f);y=function N(f){const g={};for(let E in f){const I=f[E];let T;T="string"==typeof I?{remoteEntry:I,type:"module"}:Object.assign(Object.assign({},I),{type:I.type||"module"}),g[E]=T}return g}(yield E.json()),g||(yield function $(){return(0,d.mG)(this,void 0,void 0,function*(){const f=[];for(let g in y){const E=y[g];f.push(w("module"===E.type?{type:"module",remoteEntry:E.remoteEntry}:{type:"script",remoteEntry:E.remoteEntry,remoteName:g}))}yield Promise.all(f)})}())})}},2954:(l,m,c)=>{(0,c(4554).UG)("/assets/mf.manifest.json").catch(y=>console.error(y)).then(y=>c.e(546).then(c.bind(c,1546))).catch(y=>console.error(y))},655:(l,m,c)=>{function w(o,a,e,r){return new(e||(e=Promise))(function(n,i){function u(M){try{s(r.next(M))}catch(A){i(A)}}function h(M){try{s(r.throw(M))}catch(A){i(A)}}function s(M){M.done?n(M.value):function t(n){return n instanceof e?n:new e(function(i){i(n)})}(M.value).then(u,h)}s((r=r.apply(o,a||[])).next())})}function f(o){return this instanceof f?(this.v=o,this):new f(o)}function g(o,a,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e.apply(o,a||[]),n=[];return t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t;function i(O){r[O]&&(t[O]=function(D){return new Promise(function(F,z){n.push([O,D,F,z])>1||u(O,D)})})}function u(O,D){try{!function h(O){O.value instanceof f?Promise.resolve(O.value.v).then(s,M):A(n[0][2],O)}(r[O](D))}catch(F){A(n[0][3],F)}}function s(O){u("next",O)}function M(O){u("throw",O)}function A(O,D){O(D),n.shift(),n.length&&u(n[0][0],n[0][1])}}function I(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,a=o[Symbol.asyncIterator];return a?a.call(o):(o=function V(o){var a="function"==typeof Symbol&&Symbol.iterator,e=a&&o[a],r=0;if(e)return e.call(o);if(o&&"number"==typeof o.length)return{next:function(){return o&&r>=o.length&&(o=void 0),{value:o&&o[r++],done:!o}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}(o),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=o[n]&&function(i){return new Promise(function(u,h){!function t(n,i,u,h){Promise.resolve(h).then(function(s){n({value:s,done:u})},i)}(u,h,(i=o[n](i)).done,i.value)})}}}c.d(m,{FC:()=>g,KL:()=>I,mG:()=>w,qq:()=>f})}},__webpack_module_cache__={};function __webpack_require__(l){var m=__webpack_module_cache__[l];if(void 0!==m)return m.exports;var c=__webpack_module_cache__[l]={exports:{}};return __webpack_modules__[l](c,c.exports,__webpack_require__),c.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(l,m)=>{for(var c in m)__webpack_require__.o(m,c)&&!__webpack_require__.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:m[c]})},__webpack_require__.f={},__webpack_require__.e=l=>Promise.all(Object.keys(__webpack_require__.f).reduce((m,c)=>(__webpack_require__.f[c](l,m),m),[])),__webpack_require__.u=l=>l+"."+{1:"cd4445059f59a6d6",66:"1cd0e164c17005e1",111:"4b69154422713b75",181:"2bdea0373dfefc2c",250:"b81b793b31cb911b",255:"4a3a9ca9a33348ba",274:"213925cc8b43887e",340:"f5e718abdb0e2a21",392:"c27beccc42ee8095",471:"823710f3417c7cb3",481:"f19c3556ab78750d",511:"b1a2f6beb651ac0b",529:"114c07a567dde725",546:"cb459649a3ed3932",559:"4a75e184f6df0d92",650:"05ec004170a50a1d",696:"94db0cfd75535545",762:"83bf97fa76bbf954",793:"b9ca80218ef42918",895:"f24855e41d8588c4",912:"ca887a296abd69e4",934:"5385618cd3c81a73",964:"385df37314036700",974:"4114497c65f22261",992:"4e2ccd548130d048"}[l]+".js",__webpack_require__.miniCssF=l=>{},__webpack_require__.o=(l,m)=>Object.prototype.hasOwnProperty.call(l,m),(()=>{var l={},m="apps:";__webpack_require__.l=(c,d,y,b)=>{if(l[c])l[c].push(d);else{var p,C;if(void 0!==y)for(var v=document.getElementsByTagName("script"),x=0;x<v.length;x++){var w=v[x];if(w.getAttribute("src")==c||w.getAttribute("data-webpack")==m+y){p=w;break}}p||(C=!0,(p=document.createElement("script")).type="module",p.charset="utf-8",p.timeout=120,__webpack_require__.nc&&p.setAttribute("nonce",__webpack_require__.nc),p.setAttribute("data-webpack",m+y),p.src=__webpack_require__.tu(c)),l[c]=[d];var S=(R,V)=>{p.onerror=p.onload=null,clearTimeout(j);var P=l[c];if(delete l[c],p.parentNode&&p.parentNode.removeChild(p),P&&P.forEach(_=>_(V)),R)return R(V)},j=setTimeout(S.bind(null,void 0,{type:"timeout",target:p}),12e4);p.onerror=S.bind(null,p.onerror),p.onload=S.bind(null,p.onload),C&&document.head.appendChild(p)}}})(),__webpack_require__.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var l={},m={};__webpack_require__.I=(c,d)=>{d||(d=[]);var y=m[c];if(y||(y=m[c]={}),!(d.indexOf(y)>=0)){if(d.push(y),l[c])return l[c];__webpack_require__.o(__webpack_require__.S,c)||(__webpack_require__.S[c]={});var b=__webpack_require__.S[c],C="apps",v=(S,j,R,V)=>{var P=b[S]=b[S]||{},_=P[j];(!_||!_.loaded&&(!V!=!_.eager?V:C>_.from))&&(P[j]={get:R,from:C,eager:!!V})},w=[];return"default"===c&&(v("@angular/animations/browser","14.1.1",()=>__webpack_require__.e(1).then(()=>()=>__webpack_require__(5001))),v("@angular/animations","14.1.1",()=>__webpack_require__.e(340).then(()=>()=>__webpack_require__(7340))),v("@angular/common/http","14.1.1",()=>__webpack_require__.e(529).then(()=>()=>__webpack_require__(529))),v("@angular/common","14.1.1",()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(6895))),v("@angular/core","14.1.1",()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),v("@angular/material/core","14.2.0",()=>__webpack_require__.e(66).then(()=>()=>__webpack_require__(6066))),v("@angular/material/icon","14.2.0",()=>__webpack_require__.e(392).then(()=>()=>__webpack_require__(7392))),v("@angular/platform-browser/animations","14.1.1",()=>__webpack_require__.e(934).then(()=>()=>__webpack_require__(4934))),v("@angular/platform-browser","14.1.1",()=>__webpack_require__.e(481).then(()=>()=>__webpack_require__(1481))),v("@angular/router","14.1.1",()=>__webpack_require__.e(793).then(()=>()=>__webpack_require__(4793))),v("ngx-liburg-frame-side","0.0.23",()=>__webpack_require__.e(250).then(()=>()=>__webpack_require__(9274))),v("ngx-liburg-icon","0.0.14",()=>__webpack_require__.e(964).then(()=>()=>__webpack_require__(7696))),v("rxjs/operators","7.5.0",()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),v("rxjs","7.5.0",()=>__webpack_require__.e(111).then(()=>()=>__webpack_require__(6111)))),l[c]=w.length?Promise.all(w).then(()=>l[c]=1):1}}})(),(()=>{var l;__webpack_require__.tt=()=>(void 0===l&&(l={createScriptURL:m=>m},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(l=trustedTypes.createPolicy("angular#bundler",l))),l)})(),__webpack_require__.tu=l=>__webpack_require__.tt().createScriptURL(l),(()=>{var l;if("string"==typeof import.meta.url&&(l=import.meta.url),!l)throw new Error("Automatic publicPath is not supported in this browser");l=l.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=l})(),(()=>{var l=e=>{var r=i=>i.split(".").map(u=>+u==u?+u:u),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},c=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(h=e[i]))[0]?"-":(n>0?".":"")+(n=2,h);return t}var u=[];for(i=1;i<e.length;i++){var h=e[i];u.push(0===h?"not("+s()+")":1===h?"("+s()+" || "+s()+")":2===h?u.pop()+" "+u.pop():c(h))}return s();function s(){return u.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,r)=>{if(0 in e){r=l(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var i=0,u=1,h=!0;;u++,i++){var s,M,A=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(M=(typeof(s=r[i]))[0]))return!h||("u"==A?u>t&&!n:""==A!=n);if("u"==M){if(!h||"u"!=A)return!1}else if(h)if(A==M)if(u<=t){if(s!=e[u])return!1}else{if(n?s>e[u]:s<e[u])return!1;s!=e[u]&&(h=!1)}else if("s"!=A&&"n"!=A){if(n||u<=t)return!1;h=!1,u--}else{if(u<=t||M<A!=n)return!1;h=!1}else"s"!=A&&"n"!=A&&(h=!1,u--)}}var O=[],D=O.pop.bind(O);for(i=1;i<e.length;i++){var F=e[i];O.push(1==F?D()|D():2==F?D()&D():F?d(F,r):!D())}return!!D()},p=(e,r)=>{var t=e[r];return Object.keys(t).reduce((n,i)=>!n||!t[n].loaded&&((e,r)=>{e=l(e),r=l(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],i=(typeof n)[0];if(t>=r.length)return"u"==i;var u=r[t],h=(typeof u)[0];if(i!=h)return"o"==i&&"n"==h||"s"==h||"u"==i;if("o"!=i&&"u"!=i&&n!=u)return n<u;t++}})(n,i)?i:n,0)},w=(e,r,t,n)=>{var i=p(e,t);if(!d(n,i))throw new Error(((e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+c(n)+")")(e,t,i,n));return P(e[t][i])},P=e=>(e.loaded=1,e.get()),G=(e=>function(r,t,n,i){var u=__webpack_require__.I(r);return u&&u.then?u.then(e.bind(e,r,__webpack_require__.S[r],t,n,i)):e(r,__webpack_require__.S[r],t,n,i)})((e,r,t,n,i)=>r&&__webpack_require__.o(r,t)?w(r,0,t,n):i()),L={},o={7355:()=>G("default","@angular/platform-browser",[2,14,1,1],()=>__webpack_require__.e(255).then(()=>()=>__webpack_require__(1481))),3185:()=>G("default","@angular/core",[2,14,1,1],()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),4211:()=>G("default","@angular/material/icon",[1,14,2,0],()=>__webpack_require__.e(762).then(()=>()=>__webpack_require__(7392))),6764:()=>G("default","ngx-liburg-frame-side",[4,0,0,23],()=>__webpack_require__.e(274).then(()=>()=>__webpack_require__(9274))),9614:()=>G("default","ngx-liburg-icon",[4,0,0,14],()=>__webpack_require__.e(696).then(()=>()=>__webpack_require__(7696))),8736:()=>G("default","@angular/common",[2,14,1,1],()=>__webpack_require__.e(181).then(()=>()=>__webpack_require__(6895))),7193:()=>G("default","@angular/router",[2,14,1,1],()=>__webpack_require__.e(511).then(()=>()=>__webpack_require__(4793))),3030:()=>G("default","@angular/animations",[2,14,1,1],()=>__webpack_require__.e(340).then(()=>()=>__webpack_require__(7340))),3970:()=>G("default","rxjs",[2,7,5,0],()=>__webpack_require__.e(111).then(()=>()=>__webpack_require__(6111))),6209:()=>G("default","rxjs/operators",[2,7,5,0],()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),8807:()=>G("default","@angular/platform-browser/animations",[2,14,1,1],()=>__webpack_require__.e(974).then(()=>()=>__webpack_require__(4934))),2027:()=>G("default","@angular/material/core",[1,14,2,0],()=>__webpack_require__.e(912).then(()=>()=>__webpack_require__(6066))),4766:()=>G("default","@angular/common/http",[2,14,1,1],()=>__webpack_require__.e(471).then(()=>()=>__webpack_require__(529))),2187:()=>G("default","@angular/animations/browser",[2,14,1,1],()=>__webpack_require__.e(992).then(()=>()=>__webpack_require__(5001)))},a={1:[3030,3185],66:[3185,3970,6209,8736,8807],250:[3185,3970,4211,7193,8736],255:[8736],274:[3970],392:[2027,3185,3970,4766,6209,7355,8736],471:[3970,6209,8736],481:[3185,8736],511:[3970,6209,7355,8736],529:[3185,3970,6209,8736],546:[7355,3185,4211,6764,9614,8736,7193],650:[3970,6209],696:[4766],762:[2027,3970,4766,6209,7355,8736],793:[3185,3970,6209,7355,8736],895:[3185],912:[8807],934:[2187,3030,3185,7355,8736],964:[3185,4211,4766,7193,7355],974:[2187,3030,7355]};__webpack_require__.f.consumes=(e,r)=>{__webpack_require__.o(a,e)&&a[e].forEach(t=>{if(__webpack_require__.o(L,t))return r.push(L[t]);var n=h=>{L[t]=0,__webpack_require__.m[t]=s=>{delete __webpack_require__.c[t],s.exports=h()}},i=h=>{delete L[t],__webpack_require__.m[t]=s=>{throw delete __webpack_require__.c[t],h}};try{var u=o[t]();u.then?r.push(L[t]=u.then(n).catch(i)):n(u)}catch(h){i(h)}})}})(),(()=>{var l={179:0};__webpack_require__.f.j=(d,y)=>{var b=__webpack_require__.o(l,d)?l[d]:void 0;if(0!==b)if(b)y.push(b[2]);else{var p=new Promise((w,S)=>b=l[d]=[w,S]);y.push(b[2]=p);var C=__webpack_require__.p+__webpack_require__.u(d),v=new Error;__webpack_require__.l(C,w=>{if(__webpack_require__.o(l,d)&&(0!==(b=l[d])&&(l[d]=void 0),b)){var S=w&&("load"===w.type?"missing":w.type),j=w&&w.target&&w.target.src;v.message="Loading chunk "+d+" failed.\n("+S+": "+j+")",v.name="ChunkLoadError",v.type=S,v.request=j,b[1](v)}},"chunk-"+d,d)}};var m=(d,y)=>{var v,x,[b,p,C]=y,w=0;if(b.some(j=>0!==l[j])){for(v in p)__webpack_require__.o(p,v)&&(__webpack_require__.m[v]=p[v]);C&&C(__webpack_require__)}for(d&&d(y);w<b.length;w++)__webpack_require__.o(l,x=b[w])&&l[x]&&l[x][0](),l[x]=0},c=self.webpackChunkapps=self.webpackChunkapps||[];c.forEach(m.bind(null,0)),c.push=m.bind(null,c.push.bind(c))})();var __webpack_exports__=__webpack_require__(2954);