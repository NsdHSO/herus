(self.webpackChunkapps=self.webpackChunkapps||[]).push([[69],{4554:(T,M,f)=>{f.d(M,{Vs:()=>w});var d=f(655);let b={};const y={},A={};let g=!1;function O(a,c){return(0,d.mG)(this,void 0,void 0,function*(){return A[c]||(g||(yield f.I("default"),g=!0),yield a.init(f.S.default),A[c]=!0),a})}function D(a,c){return(0,d.mG)(this,void 0,void 0,function*(){return new Promise((s,E)=>{if(y[c])return void s();const m=document.createElement("script");m.src=a,m.onerror=E,m.onload=()=>{const B=window[c];O(B,c),y[c]=B,s()},document.body.appendChild(m)})})}function w(a){return(0,d.mG)(this,void 0,void 0,function*(){let c,s,E;if(a.type||(a.type="script"),"manifest"===a.type){const m=b[a.remoteName];if(!m)throw new Error("Manifest does not contain "+a.remoteName);a={type:m.type,exposedModule:a.exposedModule,remoteEntry:m.remoteEntry,remoteName:"script"===m.type?a.remoteName:void 0},E=m.remoteEntry}else E=a.remoteEntry;return"script"===a.type?(c={type:"script",remoteEntry:a.remoteEntry,remoteName:a.remoteName},s=a.remoteName):"module"===a.type&&(c={type:"module",remoteEntry:a.remoteEntry},s=a.remoteEntry),E&&(yield function p(a,c){return(0,d.mG)(this,void 0,void 0,function*(){if("string"==typeof a)return yield D(a,c);if("script"===a.type){const s=a;return yield D(s.remoteEntry,s.remoteName)}"module"===a.type&&(yield function j(a){return(0,d.mG)(this,void 0,void 0,function*(){return y[a]?Promise.resolve():yield import(a).then(c=>{O(c,a),y[a]=c})})}(a.remoteEntry))})}(c)),yield function P(a,c){return(0,d.mG)(this,void 0,void 0,function*(){return(yield y[a].get(c))()})}(s,a.exposedModule)})}},2177:(T,M,f)=>{f.d(M,{q:()=>D});var d=f(417),y=f(5294),g=f(4554),P=f(4955),O=f(8944);const j=[{path:"",loadChildren:()=>(0,g.Vs)({type:"module",remoteEntry:`${P.N.apps.driver}remoteEntry.js`,exposedModule:"./Module"}).then(w=>w.DriverModule)}];let D=(()=>{class w{}return w.\u0275fac=function(x){return new(x||w)},w.\u0275mod=O.\u0275\u0275defineNgModule({type:w}),w.\u0275inj=O.\u0275\u0275defineInjector({imports:[d.CommonModule,y.RouterModule.forRoot(j),y.RouterModule]}),w})()},7992:(T,M,f)=>{f.d(M,{y:()=>g});var d=f(8944),y=f(5294);let g=(()=>{class P{constructor(){this.title="apps"}}return P.\u0275fac=function(p){return new(p||P)},P.\u0275cmp=d.\u0275\u0275defineComponent({type:P,selectors:[["frame-root"]],decls:1,vars:0,template:function(p,j){1&p&&d.\u0275\u0275element(0,"router-outlet")},dependencies:[y.RouterOutlet]}),P})()},3069:(T,M,f)=>{f.r(M),f.d(M,{AppModule:()=>O});var d=f(9806),y=f(2177),A=f(7992),g=f(8944);let O=(()=>{class p{}return p.\u0275fac=function(D){return new(D||p)},p.\u0275mod=g.\u0275\u0275defineNgModule({type:p,bootstrap:[A.y]}),p.\u0275inj=g.\u0275\u0275defineInjector({imports:[d.BrowserModule,y.q]}),p})()},4955:(T,M,f)=>{f.d(M,{N:()=>d});const d={production:!0,apps:{driver:"https://zechia.vercel.app/"}}},655:(T,M,f)=>{function p(t,e,n,r){return new(n||(n=Promise))(function(o,i){function _(v){try{l(r.next(v))}catch(C){i(C)}}function R(v){try{l(r.throw(v))}catch(C){i(C)}}function l(v){v.done?o(v.value):function u(o){return o instanceof n?o:new n(function(i){i(o)})}(v.value).then(_,R)}l((r=r.apply(t,e||[])).next())})}function a(t){return this instanceof a?(this.v=t,this):new a(t)}function c(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,r=n.apply(t,e||[]),o=[];return u={},i("next"),i("throw"),i("return"),u[Symbol.asyncIterator]=function(){return this},u;function i(h){r[h]&&(u[h]=function(I){return new Promise(function(U,G){o.push([h,I,U,G])>1||_(h,I)})})}function _(h,I){try{!function R(h){h.value instanceof a?Promise.resolve(h.value.v).then(l,v):C(o[0][2],h)}(r[h](I))}catch(U){C(o[0][3],U)}}function l(h){_("next",h)}function v(h){_("throw",h)}function C(h,I){h(I),o.shift(),o.length&&_(o[0][0],o[0][1])}}function E(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=function S(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(i){return new Promise(function(_,R){!function u(o,i,_,R){Promise.resolve(R).then(function(l){o({value:l,done:_})},i)}(_,R,(i=t[o](i)).done,i.value)})}}}f.d(M,{FC:()=>c,KL:()=>E,mG:()=>p,qq:()=>a})}}]);