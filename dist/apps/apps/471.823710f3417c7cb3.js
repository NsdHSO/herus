(self.webpackChunkapps=self.webpackChunkapps||[]).push([[471],{529:(He,X,b)=>{b.r(X),b.d(X,{HTTP_INTERCEPTORS:()=>R,HttpBackend:()=>j,HttpClient:()=>Y,HttpClientJsonpModule:()=>ve,HttpClientModule:()=>be,HttpClientXsrfModule:()=>te,HttpContext:()=>$,HttpContextToken:()=>ie,HttpErrorResponse:()=>k,HttpEventType:()=>d,HttpHandler:()=>S,HttpHeaderResponse:()=>x,HttpHeaders:()=>m,HttpParams:()=>g,HttpRequest:()=>w,HttpResponse:()=>T,HttpResponseBase:()=>P,HttpUrlEncodingCodec:()=>z,HttpXhrBackend:()=>_,HttpXsrfTokenExtractor:()=>U,JsonpClientBackend:()=>A,JsonpInterceptor:()=>q,XhrFactory:()=>we,\u0275HttpInterceptingHandler:()=>ee});var N=b(8736),l=b(3185),M=b(3970),v=b(6209);class S{}class j{}class m{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),a=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof m?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new m;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof m?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let a=this.headers.get(e);if(!a)return;a=a.filter(h=>-1===o.indexOf(h)),0===a.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class z{encodeKey(t){return K(t)}encodeValue(t){return K(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const re=/%(\d[a-f0-9])/gi,oe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function K(s){return encodeURIComponent(s).replace(re,(t,e)=>oe[e]??t)}function O(s){return`${s}`}class g{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new z,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ne(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[a,h]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],i=e.get(a)||[];i.push(h),e.set(a,i)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],n=Array.isArray(r)?r.map(O):[O(r)];this.map.set(e,n)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new g({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(O(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(O(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ie{constructor(t){this.defaultValue=t}}class ${constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function V(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function W(s){return typeof Blob<"u"&&s instanceof Blob}function G(s){return typeof FormData<"u"&&s instanceof FormData}class w{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function ae(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new m),this.context||(this.context=new $),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+a}}else this.params=new g,this.urlWithParams=e}serializeBody(){return null===this.body?null:V(this.body)||W(this.body)||G(this.body)||function le(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||G(this.body)?null:W(this.body)?this.body.type||null:V(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let i=t.headers||this.headers,p=t.params||this.params;const C=t.context??this.context;return void 0!==t.setHeaders&&(i=Object.keys(t.setHeaders).reduce((E,y)=>E.set(y,t.setHeaders[y]),i)),t.setParams&&(p=Object.keys(t.setParams).reduce((E,y)=>E.set(y,t.setParams[y]),p)),new w(e,r,o,{params:p,headers:i,context:C,reportProgress:h,responseType:n,withCredentials:a})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class P{constructor(t,e=200,r="OK"){this.headers=t.headers||new m,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class x extends P{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new x({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class T extends P{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new T({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class k extends P{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function D(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let Y=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof w)o=e;else{let i,p;i=n.headers instanceof m?n.headers:new m(n.headers),n.params&&(p=n.params instanceof g?n.params:new g({fromObject:n.params})),o=new w(e,r,void 0!==n.body?n.body:null,{headers:i,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const a=(0,M.of)(o).pipe((0,v.concatMap)(i=>this.handler.handle(i)));if(e instanceof w||"events"===n.observe)return a;const h=a.pipe((0,v.filter)(i=>i instanceof T));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,v.map)(i=>{if(null!==i.body&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return h.pipe((0,v.map)(i=>{if(null!==i.body&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return h.pipe((0,v.map)(i=>{if(null!==i.body&&"string"!=typeof i.body)throw new Error("Response is not a string.");return i.body}));default:return h.pipe((0,v.map)(i=>i.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new g).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,D(n,r))}post(e,r,n={}){return this.request("POST",e,D(n,r))}put(e,r,n={}){return this.request("PUT",e,D(n,r))}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(S))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class Q{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const R=new l.InjectionToken("HTTP_INTERCEPTORS");let I,de=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ce=0;class Z{}let A=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+ce++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new M.Observable(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),a=this.document.createElement("script");a.src=o;let h=null,i=!1;this.callbackMap[n]=y=>{delete this.callbackMap[n],h=y,i=!0};const p=()=>{a.parentNode&&a.parentNode.removeChild(a),delete this.callbackMap[n]};return a.addEventListener("load",y=>{this.resolvedPromise.then(()=>{p(),i?(r.next(new T({body:h,status:200,statusText:"OK",url:o})),r.complete()):r.error(new k({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),a.addEventListener("error",y=>{p(),r.error(new k({error:y,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(a),r.next({type:d.Sent}),()=>{i||this.removeListeners(a),p()}})}removeListeners(e){I||(I=this.document.implementation.createHTMLDocument()),I.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(Z),l.\u0275\u0275inject(N.DOCUMENT))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),q=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(A))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ye=/^\)\]\}',?\n/;let _=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new M.Observable(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((c,u)=>n.setRequestHeader(c,u.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const c=e.detectContentTypeHeader();null!==c&&n.setRequestHeader("Content-Type",c)}if(e.responseType){const c=e.responseType.toLowerCase();n.responseType="json"!==c?c:"text"}const o=e.serializeBody();let a=null;const h=()=>{if(null!==a)return a;const c=n.statusText||"OK",u=new m(n.getAllResponseHeaders()),H=function me(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return a=new x({headers:u,status:n.status,statusText:c,url:H}),a},i=()=>{let{headers:c,status:u,statusText:H,url:se}=h(),f=null;204!==u&&(f=typeof n.response>"u"?n.responseText:n.response),0===u&&(u=f?200:0);let J=u>=200&&u<300;if("json"===e.responseType&&"string"==typeof f){const Te=f;f=f.replace(ye,"");try{f=""!==f?JSON.parse(f):null}catch(Ce){f=Te,J&&(J=!1,f={error:Ce,text:f})}}J?(r.next(new T({body:f,headers:c,status:u,statusText:H,url:se||void 0})),r.complete()):r.error(new k({error:f,headers:c,status:u,statusText:H,url:se||void 0}))},p=c=>{const{url:u}=h(),H=new k({error:c,status:n.status||0,statusText:n.statusText||"Unknown Error",url:u||void 0});r.error(H)};let C=!1;const E=c=>{C||(r.next(h()),C=!0);let u={type:d.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),"text"===e.responseType&&!!n.responseText&&(u.partialText=n.responseText),r.next(u)},y=c=>{let u={type:d.UploadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),r.next(u)};return n.addEventListener("load",i),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),e.reportProgress&&(n.addEventListener("progress",E),null!==o&&n.upload&&n.upload.addEventListener("progress",y)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",i),n.removeEventListener("timeout",p),e.reportProgress&&(n.removeEventListener("progress",E),null!==o&&n.upload&&n.upload.removeEventListener("progress",y)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(N.XhrFactory))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const L=new l.InjectionToken("XSRF_COOKIE_NAME"),F=new l.InjectionToken("XSRF_HEADER_NAME");class U{}let ge=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,N.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(N.DOCUMENT),l.\u0275\u0275inject(l.PLATFORM_ID),l.\u0275\u0275inject(L))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),B=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(U),l.\u0275\u0275inject(F))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ee=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(R,[]);this.chain=r.reduceRight((n,o)=>new Q(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(l.\u0275\u0275inject(j),l.\u0275\u0275inject(l.Injector))},s.\u0275prov=l.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Ee(){return"object"==typeof window?window:{}}let te=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:B,useClass:de}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:L,useValue:e.cookieName}:[],e.headerName?{provide:F,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=l.\u0275\u0275defineInjector({providers:[B,{provide:R,useExisting:B,multi:!0},{provide:U,useClass:ge},{provide:L,useValue:"XSRF-TOKEN"},{provide:F,useValue:"X-XSRF-TOKEN"}]}),s})(),be=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=l.\u0275\u0275defineInjector({providers:[Y,{provide:S,useClass:ee},_,{provide:j,useExisting:_}],imports:[te.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),s})(),ve=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=l.\u0275\u0275defineInjector({providers:[A,{provide:Z,useFactory:Ee},{provide:R,useClass:q,multi:!0}]}),s})();const we=N.XhrFactory}}]);