(self.webpackChunkapps=self.webpackChunkapps||[]).push([[964,696],{7696:(g,a,n)=>{n.r(a),n.d(a,{GlobalErrorHandleService:()=>l,IconCoreModule:()=>_});var r=n(3185),c=n(7193),i=n(4766),d=n(7355),u=n(4211);let l=(()=>{class e{constructor(o){this._injectable=o}handleError(o){const t=this._injectable.get(c.Router);console.warn(`${t.url}`),o instanceof i.HttpErrorResponse?(console.log(`Error from backend ${o.status}`),console.log(`Response body ${o.message}`)):console.warn(`An error occurred ${o.message}`)}}return e.\u0275fac=function(o){return new(o||e)(r.\u0275\u0275inject(r.Injector))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),_=(()=>{class e{constructor(o,t){this._domSanitizer=o,this._matIconRegistry=t,this._matIconRegistry.addSvgIconSetInNamespace("fa_brands",this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/svgs/brands.svg")),this._matIconRegistry.addSvgIconSetInNamespace("fa_regular",this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/svgs/regular.svg")),this._matIconRegistry.addSvgIconSetInNamespace("fa_solid",this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/svgs/solid.svg"))}}return e.\u0275fac=function(o){return new(o||e)(r.\u0275\u0275inject(d.DomSanitizer),r.\u0275\u0275inject(u.MatIconRegistry))},e.\u0275mod=r.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:r.ErrorHandler,useClass:l}],imports:[i.HttpClientModule,c.RouterModule]}),e})()}}]);