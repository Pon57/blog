(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{92:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1997)}])},320:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(5786).createAsyncLocalStorage)()},368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return o},getHmrRefreshHash:function(){return i},getPrerenderResumeDataCache:function(){return a},getRenderResumeDataCache:function(){return u},workUnitAsyncStorage:function(){return n.workUnitAsyncStorageInstance}});let n=r(9277);function o(e){let t=n.workUnitAsyncStorageInstance.getStore();if(t){if("request"===t.type)return t;if("prerender"===t.type||"prerender-ppr"===t.type||"prerender-legacy"===t.type)throw Object.defineProperty(Error(`\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`),"__NEXT_ERROR_CODE",{value:"E401",enumerable:!1,configurable:!0});if("cache"===t.type)throw Object.defineProperty(Error(`\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E37",enumerable:!1,configurable:!0});if("unstable-cache"===t.type)throw Object.defineProperty(Error(`\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E69",enumerable:!1,configurable:!0})}throw Object.defineProperty(Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`),"__NEXT_ERROR_CODE",{value:"E251",enumerable:!1,configurable:!0})}function a(e){return"prerender"===e.type||"prerender-ppr"===e.type?e.prerenderResumeDataCache:null}function u(e){return"prerender-legacy"!==e.type&&"cache"!==e.type&&"unstable-cache"!==e.type?"request"===e.type?e.renderResumeDataCache:e.prerenderResumeDataCache:null}function i(e){var t;return"cache"===e.type?e.hmrRefreshHash:"request"===e.type?null==(t=e.cookies.get("__next_hmr_refresh_hash__"))?void 0:t.value:void 0}},565:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return n}}),r(9765).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},851:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return c.ReadonlyURLSearchParams},RedirectType:function(){return c.RedirectType},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},forbidden:function(){return c.forbidden},notFound:function(){return c.notFound},permanentRedirect:function(){return c.permanentRedirect},redirect:function(){return c.redirect},unauthorized:function(){return c.unauthorized},unstable_rethrow:function(){return c.unstable_rethrow},useParams:function(){return y},usePathname:function(){return f},useRouter:function(){return p},useSearchParams:function(){return d},useSelectedLayoutSegment:function(){return _},useSelectedLayoutSegments:function(){return b},useServerInsertedHTML:function(){return l.useServerInsertedHTML}});let n=r(4232),o=r(1890),a=r(523),u=r(851),i=r(4090),c=r(3773),s=r(8736),l=r(4269);function d(){let e=(0,n.useContext)(a.SearchParamsContext);return(0,n.useMemo)(()=>e?new c.ReadonlyURLSearchParams(e):null,[e])}function f(){return(0,s.useDynamicRouteParams)("usePathname()"),(0,n.useContext)(a.PathnameContext)}function p(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Object.defineProperty(Error("invariant expected app router to be mounted"),"__NEXT_ERROR_CODE",{value:"E238",enumerable:!1,configurable:!0});return e}function y(){return(0,s.useDynamicRouteParams)("useParams()"),(0,n.useContext)(a.PathParamsContext)}function b(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegments()");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let a;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)a=t[1][r];else{var c;let e=t[1];a=null!=(c=e.children)?c:Object.values(e)[0]}if(!a)return o;let s=a[0],l=(0,u.getSegmentValue)(s);return!l||l.startsWith(i.PAGE_SEGMENT_KEY)?o:(o.push(l),e(a,r,!1,o))}(t.parentTree,e):null}function _(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegment()");let t=b(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===i.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1303:(e,t)=>{"use strict";function r(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isHangingPromiseRejectionError:function(){return r},makeHangingPromise:function(){return a}});let n="HANGING_PROMISE_REJECTION";class o extends Error{constructor(e){super(`During prerendering, ${e} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${e} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`),this.expression=e,this.digest=n}}function a(e,t){let r=new Promise((r,n)=>{e.addEventListener("abort",()=>{n(new o(t))},{once:!0})});return r.catch(u),r}function u(){}},1997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(7876);r(7201),r(2246),r(5316);var o=r(2994),a=r.n(o),u=r(8230),i=r.n(u),c=r(5105),s=r.n(c);let l=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,n.jsx)(s(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]});var d=r(4232);r(4e3);let f=e=>{let{children:t}=e;return t};function p(e){let{Component:t,pageProps:r}=e;return(0,d.useEffect)(()=>{document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")}),(0,n.jsx)(f,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsxs)("div",{className:a().site,children:[(0,n.jsx)("header",{className:a().heading,children:(0,n.jsx)(i(),{href:"/",className:a().brand,children:"ぽんブログ"})}),(0,n.jsx)("div",{className:a().content,children:(0,n.jsx)(t,{...r})}),(0,n.jsxs)("footer",{className:a().footer,children:[(0,n.jsxs)("div",{className:a().link,children:[(0,n.jsx)(i(),{href:"/privacy-policy",children:"プライバシーポリシー"}),(0,n.jsx)(i(),{href:"/disclaimer",children:"免責事項"})]}),(0,n.jsxs)("div",{children:["\xa9 2021"," ",(0,n.jsx)(i(),{href:"https://twitter.com/pon_dev",target:"_blank",children:"Pon"})]})]})]})]})})}},2246:()=>{},2602:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{METADATA_BOUNDARY_NAME:function(){return r},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return n}});let r="__next_metadata_boundary__",n="__next_viewport_boundary__",o="__next_outlet_boundary__"},2994:e=>{e.exports={site:"_app_site__wQ_HZ",content:"_app_content__mHXSR",heading:"_app_heading__uRQQR",brand:"_app_brand__aiSQf",footer:"_app_footer___uvS6",link:"_app_link__Y_6XC"}},3773:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return l},RedirectType:function(){return o.RedirectType},forbidden:function(){return u.forbidden},notFound:function(){return a.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unauthorized:function(){return i.unauthorized},unstable_rethrow:function(){return c.unstable_rethrow}});let n=r(7496),o=r(2175),a=r(8660),u=r(565),i=r(5058),c=r(6946);class s extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class l extends URLSearchParams{append(){throw new s}delete(){throw new s}set(){throw new s}sort(){throw new s}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4e3:(e,t,r)=>{r(1282)},4030:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return o}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4129:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(4232);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4249:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(1501),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4269:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return a}});let n=r(8365)._(r(4232)),o=n.default.createContext(null);function a(e){let t=(0,n.useContext)(o);t&&t(e)}},5058:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return n}}),r(9765).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5105:(e,t,r)=>{e.exports=r(7004)},5316:()=>{},5782:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{StaticGenBailoutError:function(){return n},isStaticGenBailoutError:function(){return o}});let r="NEXT_STATIC_GEN_BAILOUT";class n extends Error{constructor(...e){super(...e),this.code=r}}function o(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5786:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{bindSnapshot:function(){return u},createAsyncLocalStorage:function(){return a},createSnapshot:function(){return i}});let r=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(e){return e}}let o="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function a(){return o?new o:new n}function u(e){return o?o.bind(e):n.bind(e)}function i(){return o?o.snapshot():function(e,...t){return e(...t)}}},6820:(e,t,r)=>{"use strict";var n=r(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{atLeastOneTask:function(){return u},scheduleImmediate:function(){return a},scheduleOnNextTick:function(){return o},waitAtLeastOneReactRenderTask:function(){return i}});let o=e=>{Promise.resolve().then(()=>{n.nextTick(e)})},a=e=>{setImmediate(e)};function u(){return new Promise(e=>a(e))}function i(){return new Promise(e=>setImmediate(e))}},6946:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,i.isNextRouterError)(t)||(0,u.isBailoutToCSRError)(t)||(0,n.isDynamicUsageError)(t)||(0,a.isPostpone)(t)||(0,o.isHangingPromiseRejectionError)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(9793),o=r(1303),a=r(9366),u=r(131),i=r(1767);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7049:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=r(320)},7201:()=>{},7496:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return d},getRedirectTypeFromError:function(){return l},getURLFromRedirectError:function(){return s},permanentRedirect:function(){return c},redirect:function(){return i}});let n=r(8264),o=r(4041),a=r(2175);function u(e,t,r){void 0===r&&(r=o.RedirectStatusCode.TemporaryRedirect);let n=Object.defineProperty(Error(a.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n.digest=a.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",n}function i(e,t){let r=n.actionAsyncStorage.getStore();throw u(e,t||((null==r?void 0:r.isAction)?a.RedirectType.push:a.RedirectType.replace),o.RedirectStatusCode.TemporaryRedirect)}function c(e,t){throw void 0===t&&(t=a.RedirectType.replace),u(e,t,o.RedirectStatusCode.PermanentRedirect)}function s(e){return(0,a.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function l(e){if(!(0,a.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return e.digest.split(";",2)[1]}function d(e){if(!(0,a.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(5786).createAsyncLocalStorage)()},8230:(e,t,r)=>{e.exports=r(9491)},8264:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorageInstance}});let n=r(8069)},8660:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return o}});let n=""+r(9765).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function o(){let e=Object.defineProperty(Error(n),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw e.digest=n,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8736:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Postpone:function(){return j},abortAndThrowOnSynchronousRequestDataAccess:function(){return O},abortOnSynchronousPlatformIOAccess:function(){return E},accessedDynamicData:function(){return A},annotateDynamicAccess:function(){return U},consumeDynamicAccess:function(){return C},createDynamicTrackingState:function(){return f},createDynamicValidationState:function(){return p},createHangingInputAbortSignal:function(){return L},createPostponedAbortSignal:function(){return I},formatDynamicAPIAccesses:function(){return k},getFirstDynamicReason:function(){return y},isDynamicPostpone:function(){return D},isPrerenderInterruptedError:function(){return M},markCurrentScopeAsDynamic:function(){return b},postponeWithTracking:function(){return P},throwIfDisallowedDynamic:function(){return F},throwToInterruptStaticGeneration:function(){return h},trackAllowedDynamicAccess:function(){return W},trackDynamicDataInDynamicRender:function(){return m},trackFallbackParamAccessed:function(){return _},trackSynchronousPlatformIOAccessInDev:function(){return R},trackSynchronousRequestDataAccessInDev:function(){return v},useDynamicRouteParams:function(){return $}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(4232)),o=r(4030),a=r(5782),u=r(368),i=r(7049),c=r(1303),s=r(2602),l=r(6820),d="function"==typeof n.default.unstable_postpone;function f(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicExpression:void 0,syncDynamicErrorWithStack:null}}function p(){return{hasSuspendedDynamic:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasSyncDynamicErrors:!1,dynamicErrors:[]}}function y(e){var t;return null==(t=e.dynamicAccesses[0])?void 0:t.expression}function b(e,t,r){if((!t||"cache"!==t.type&&"unstable-cache"!==t.type)&&!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(t){if("prerender-ppr"===t.type)P(e.route,r,t.dynamicTracking);else if("prerender-legacy"===t.type){t.revalidate=0;let n=Object.defineProperty(new o.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=r,e.dynamicUsageStack=n.stack,n}}}}function _(e,t){let r=u.workUnitAsyncStorage.getStore();r&&"prerender-ppr"===r.type&&P(e.route,t,r.dynamicTracking)}function h(e,t,r){let n=Object.defineProperty(new o.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw r.revalidate=0,t.dynamicUsageDescription=e,t.dynamicUsageStack=n.stack,n}function m(e,t){t&&"cache"!==t.type&&"unstable-cache"!==t.type&&("prerender"===t.type||"prerender-legacy"===t.type)&&(t.revalidate=0)}function g(e,t,r){let n=T(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);r.controller.abort(n);let o=r.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:t})}function E(e,t,r,n){let o=n.dynamicTracking;return o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r),g(e,t,n)}function R(e){e.prerenderPhase=!1}function O(e,t,r,n){let o=n.dynamicTracking;throw o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r,!0===n.validating&&(o.syncDynamicLogged=!0)),g(e,t,n),T(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)}let v=R;function j({reason:e,route:t}){let r=u.workUnitAsyncStorage.getStore();P(t,e,r&&"prerender-ppr"===r.type?r.dynamicTracking:null)}function P(e,t,r){N(),r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:t}),n.default.unstable_postpone(w(e,t))}function w(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function D(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&S(e.message)}function S(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===S(w("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let x="NEXT_PRERENDER_INTERRUPTED";function T(e){let t=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t.digest=x,t}function M(e){return"object"==typeof e&&null!==e&&e.digest===x&&"name"in e&&"message"in e&&e instanceof Error}function A(e){return e.length>0}function C(e,t){return e.dynamicAccesses.push(...t.dynamicAccesses),e.dynamicAccesses}function k(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:t})=>(t=t.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${t}`))}function N(){if(!d)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})}function I(e){N();let t=new AbortController;try{n.default.unstable_postpone(e)}catch(e){t.abort(e)}return t.signal}function L(e){let t=new AbortController;return e.cacheSignal?e.cacheSignal.inputReady().then(()=>{t.abort()}):(0,l.scheduleOnNextTick)(()=>t.abort()),t.signal}function U(e,t){let r=t.dynamicTracking;r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function $(e){if("undefined"==typeof window){let t=i.workAsyncStorage.getStore();if(t&&t.isStaticGeneration&&t.fallbackRouteParams&&t.fallbackRouteParams.size>0){let r=u.workUnitAsyncStorage.getStore();r&&("prerender"===r.type?n.default.use((0,c.makeHangingPromise)(r.renderSignal,e)):"prerender-ppr"===r.type?P(t.route,e,r.dynamicTracking):"prerender-legacy"===r.type&&h(e,t,r))}}}let X=/\n\s+at Suspense \(<anonymous>\)/,B=RegExp(`\\n\\s+at ${s.METADATA_BOUNDARY_NAME}[\\n\\s]`),H=RegExp(`\\n\\s+at ${s.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),G=RegExp(`\\n\\s+at ${s.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function W(e,t,r,n,o){if(!G.test(t)){if(B.test(t)){r.hasDynamicMetadata=!0;return}if(H.test(t)){r.hasDynamicViewport=!0;return}if(X.test(t)){r.hasSuspendedDynamic=!0;return}else if(n.syncDynamicErrorWithStack||o.syncDynamicErrorWithStack){r.hasSyncDynamicErrors=!0;return}else{let n=function(e,t){let r=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r.stack="Error: "+e+t,r}(`Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,t);r.dynamicErrors.push(n);return}}}function F(e,t,r,n){let o,u,i;if(r.syncDynamicErrorWithStack?(o=r.syncDynamicErrorWithStack,u=r.syncDynamicExpression,i=!0===r.syncDynamicLogged):n.syncDynamicErrorWithStack?(o=n.syncDynamicErrorWithStack,u=n.syncDynamicExpression,i=!0===n.syncDynamicLogged):(o=null,u=void 0,i=!1),t.hasSyncDynamicErrors&&o)throw i||console.error(o),new a.StaticGenBailoutError;let c=t.dynamicErrors;if(c.length){for(let e=0;e<c.length;e++)console.error(c[e]);throw new a.StaticGenBailoutError}if(!t.hasSuspendedDynamic){if(t.hasDynamicMetadata){if(o)throw console.error(o),Object.defineProperty(new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`),"__NEXT_ERROR_CODE",{value:"E608",enumerable:!1,configurable:!0});throw Object.defineProperty(new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`),"__NEXT_ERROR_CODE",{value:"E534",enumerable:!1,configurable:!0})}if(t.hasDynamicViewport){if(o)throw console.error(o),Object.defineProperty(new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`),"__NEXT_ERROR_CODE",{value:"E573",enumerable:!1,configurable:!0});throw Object.defineProperty(new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`),"__NEXT_ERROR_CODE",{value:"E590",enumerable:!1,configurable:!0})}}}},8880:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(4232),o=r(6655),a="function"==typeof IntersectionObserver,u=new Map,i=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!a,[l,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(s||l)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!l){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,l,f.current]),[p,l,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9277:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workUnitAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(5786).createAsyncLocalStorage)()},9366:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.postpone");function n(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},9491:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(4252),o=r(7876),a=n._(r(4232)),u=r(8321),i=r(5885),c=r(1008),s=r(7818),l=r(1423),d=r(6396),f=r(8880),p=r(4249),y=r(6956),b=r(4129),_=new Set;function h(e,t,r,n){if((0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(_.has(o))return;_.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let g=a.default.forwardRef(function(e,t){let r,n;let{href:c,as:_,children:g,prefetch:E=null,passHref:R,replace:O,shallow:v,scroll:j,locale:P,onClick:w,onMouseEnter:D,onTouchStart:S,legacyBehavior:x=!1,...T}=e;r=g,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=a.default.useContext(d.RouterContext),A=!1!==E,{href:C,as:k}=a.default.useMemo(()=>{if(!M){let e=m(c);return{href:e,as:_?m(_):e}}let[e,t]=(0,u.resolveHref)(M,c,!0);return{href:e,as:_?(0,u.resolveHref)(M,_):t||e}},[M,c,_]),N=a.default.useRef(C),I=a.default.useRef(k);x&&(n=a.default.Children.only(r));let L=x?n&&"object"==typeof n&&n.ref:t,[U,$,X]=(0,f.useIntersection)({rootMargin:"200px"}),B=a.default.useCallback(e=>{(I.current!==k||N.current!==C)&&(X(),I.current=k,N.current=C),U(e)},[k,C,X,U]),H=(0,b.useMergedRef)(B,L);a.default.useEffect(()=>{M&&$&&A&&h(M,C,k,{locale:P})},[k,C,$,P,A,null==M?void 0:M.locale,M]);let G={ref:H,onClick(e){x||"function"!=typeof w||w(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&!function(e,t,r,n,o,a,u,c){let{nodeName:s}=e.currentTarget;!("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,i.isLocalURL)(r)))&&(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,M,C,k,O,v,j,P)},onMouseEnter(e){x||"function"!=typeof D||D(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&h(M,C,k,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof S||S(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&h(M,C,k,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,s.isAbsoluteUrl)(k))G.href=k;else if(!x||R||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(k,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);G.href=t||(0,y.addBasePath)((0,l.addLocale)(k,e,null==M?void 0:M.defaultLocale))}return x?a.default.cloneElement(n,G):(0,o.jsx)("a",{...T,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9793:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return i}});let n=r(4030),o=r(131),a=r(1767),u=r(8736),i=e=>(0,n.isDynamicServerError)(e)||(0,o.isBailoutToCSRError)(e)||(0,a.isNextRouterError)(e)||(0,u.isDynamicPostpone)(e)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(92),t(7094))),_N_E=e.O()}]);