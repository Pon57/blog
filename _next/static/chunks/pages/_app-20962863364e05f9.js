(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3156)}])},6247:(e,t,r)=>{"use strict";function n(){throw Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return n}}),r(3167).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},958:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return o}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3750:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return c.ReadonlyURLSearchParams},RedirectType:function(){return c.RedirectType},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},forbidden:function(){return c.forbidden},notFound:function(){return c.notFound},permanentRedirect:function(){return c.permanentRedirect},redirect:function(){return c.redirect},unauthorized:function(){return c.unauthorized},unstable_rethrow:function(){return c.unstable_rethrow},useParams:function(){return y},usePathname:function(){return f},useRouter:function(){return p},useSearchParams:function(){return d},useSelectedLayoutSegment:function(){return m},useSelectedLayoutSegments:function(){return h},useServerInsertedHTML:function(){return l.useServerInsertedHTML}});let n=r(6540),o=r(9258),a=r(8519),u=r(4365),i=r(274),c=r(4531),s=r(8228),l=r(465);function d(){let e=(0,n.useContext)(a.SearchParamsContext);return(0,n.useMemo)(()=>e?new c.ReadonlyURLSearchParams(e):null,[e])}function f(){return(0,s.useDynamicRouteParams)("usePathname()"),(0,n.useContext)(a.PathnameContext)}function p(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function y(){return(0,s.useDynamicRouteParams)("useParams()"),(0,n.useContext)(a.PathParamsContext)}function h(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegments()");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let a;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)a=t[1][r];else{var c;let e=t[1];a=null!=(c=e.children)?c:Object.values(e)[0]}if(!a)return o;let s=a[0],l=(0,u.getSegmentValue)(s);return!l||l.startsWith(i.PAGE_SEGMENT_KEY)?o:(o.push(l),e(a,r,!1,o))}(t.tree,e):null}function m(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegment()");let t=h(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===i.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return l},RedirectType:function(){return o.RedirectType},forbidden:function(){return u.forbidden},notFound:function(){return a.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unauthorized:function(){return i.unauthorized},unstable_rethrow:function(){return c.unstable_rethrow}});let n=r(8600),o=r(8923),a=r(7966),u=r(6247),i=r(4730),c=r(8542);class s extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class l extends URLSearchParams{append(){throw new s}delete(){throw new s}set(){throw new s}sort(){throw new s}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7966:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return o}});let n=""+r(3167).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function o(){let e=Error(n);throw e.digest=n,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8600:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return d},getRedirectTypeFromError:function(){return l},getURLFromRedirectError:function(){return s},permanentRedirect:function(){return c},redirect:function(){return i}});let n=r(7860),o=r(4357),a=r(8923);function u(e,t,r){void 0===r&&(r=o.RedirectStatusCode.TemporaryRedirect);let n=Error(a.REDIRECT_ERROR_CODE);return n.digest=a.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",n}function i(e,t){let r=n.actionAsyncStorage.getStore();throw u(e,t||((null==r?void 0:r.isAction)?a.RedirectType.push:a.RedirectType.replace),o.RedirectStatusCode.TemporaryRedirect)}function c(e,t){throw void 0===t&&(t=a.RedirectType.replace),u(e,t,o.RedirectStatusCode.PermanentRedirect)}function s(e){return(0,a.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function l(e){if(!(0,a.isRedirectError)(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function d(e){if(!(0,a.isRedirectError)(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4365:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1480:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{StaticGenBailoutError:function(){return n},isStaticGenBailoutError:function(){return o}});let r="NEXT_STATIC_GEN_BAILOUT";class n extends Error{constructor(...e){super(...e),this.code=r}}function o(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4730:(e,t,r)=>{"use strict";function n(){throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return n}}),r(3167).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8542:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,u.isNextRouterError)(t)||(0,a.isBailoutToCSRError)(t)||(0,n.isDynamicUsageError)(t)||(0,o.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(8837),o=r(9222),a=r(8431),u=r(7643);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(7677),o=r(4848),a=n._(r(6540)),u=r(6847),i=r(7785),c=r(2772),s=r(1278),l=r(6185),d=r(7644),f=r(6334),p=r(5157),y=r(296),h=r(1903),m=new Set;function b(e,t,r,n){if((0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=a.default.forwardRef(function(e,t){let r,n;let{href:c,as:m,children:_,prefetch:v=null,passHref:E,replace:R,shallow:j,scroll:w,locale:P,onClick:S,onMouseEnter:O,onTouchStart:D,legacyBehavior:x=!1,...M}=e;r=_,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let A=a.default.useContext(d.RouterContext),T=!1!==v,{href:k,as:C}=a.default.useMemo(()=>{if(!A){let e=g(c);return{href:e,as:m?g(m):e}}let[e,t]=(0,u.resolveHref)(A,c,!0);return{href:e,as:m?(0,u.resolveHref)(A,m):t||e}},[A,c,m]),L=a.default.useRef(k),I=a.default.useRef(C);x&&(n=a.default.Children.only(r));let N=x?n&&"object"==typeof n&&n.ref:t,[U,$,B]=(0,f.useIntersection)({rootMargin:"200px"}),W=a.default.useCallback(e=>{(I.current!==C||L.current!==k)&&(B(),I.current=C,L.current=k),U(e)},[C,k,B,U]),F=(0,h.useMergedRef)(W,N);a.default.useEffect(()=>{A&&$&&T&&b(A,k,C,{locale:P})},[C,k,$,P,T,null==A?void 0:A.locale,A]);let G={ref:F,onClick(e){x||"function"!=typeof S||S(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,a,u,c){let{nodeName:s}=e.currentTarget;"A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,i.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,A,k,C,R,j,w,P)},onMouseEnter(e){x||"function"!=typeof O||O(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&b(A,k,C,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof D||D(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&b(A,k,C,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,s.isAbsoluteUrl)(C))G.href=C;else if(!x||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(C,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);G.href=t||(0,y.addBasePath)((0,l.addLocale)(C,e,null==A?void 0:A.defaultLocale))}return x?a.default.cloneElement(n,G):(0,o.jsx)("a",{...M,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(6540),o=r(4959),a="function"==typeof IntersectionObserver,u=new Map,i=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!a,[l,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(s||l)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!l){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,l,f.current]),[p,l,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(6540);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=a(e,n),o.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},465:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return a}});let n=r(544)._(r(6540)),o=n.default.createContext(null);function a(e){let t=(0,n.useContext)(o);t&&t(e)}},3156:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(4848);r(2231),r(6918),r(9426);var o=r(780),a=r.n(o),u=r(1106),i=r.n(u),c=r(8133),s=r.n(c);let l=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,n.jsx)(s(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]});var d=r(6540);r(6424);let f=e=>{let{children:t}=e;return t};function p(e){let{Component:t,pageProps:r}=e;return(0,d.useEffect)(()=>{document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")}),(0,n.jsx)(f,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsxs)("div",{className:a().site,children:[(0,n.jsx)("header",{className:a().heading,children:(0,n.jsx)(i(),{href:"/",className:a().brand,children:"ぽんブログ"})}),(0,n.jsx)("div",{className:a().content,children:(0,n.jsx)(t,{...r})}),(0,n.jsxs)("footer",{className:a().footer,children:["\xa9 2021"," ",(0,n.jsx)(i(),{href:"https://twitter.com/pon_dev",target:"_blank",rel:"noreferrer",children:"Pon"})]})]})]})})}},9426:()=>{},2231:()=>{},6918:()=>{},780:e=>{e.exports={site:"_app_site__wQ_HZ",content:"_app_content__mHXSR",heading:"_app_heading__uRQQR",brand:"_app_brand__aiSQf",footer:"_app_footer___uvS6"}},8837:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return i}});let n=r(958),o=r(8431),a=r(7643),u=r(8228),i=e=>(0,n.isDynamicServerError)(e)||(0,o.isBailoutToCSRError)(e)||(0,a.isNextRouterError)(e)||(0,u.isDynamicPostpone)(e)},8126:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{METADATA_BOUNDARY_NAME:function(){return r},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return n}});let r="__next_metadata_boundary__",n="__next_viewport_boundary__",o="__next_outlet_boundary__"},1913:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},7860:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorageInstance}});let n=r(1913)},8626:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{bindSnapshot:function(){return u},createAsyncLocalStorage:function(){return a},createSnapshot:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(e){return e}}let o="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function a(){return o?new o:new n}function u(e){return o?o.bind(e):n.bind(e)}function i(){return o?o.snapshot():function(e,...t){return e(...t)}}},8228:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Postpone:function(){return j},abortAndThrowOnSynchronousRequestDataAccess:function(){return E},abortOnSynchronousPlatformIOAccess:function(){return _},accessedDynamicData:function(){return A},annotateDynamicAccess:function(){return I},consumeDynamicAccess:function(){return T},createDynamicTrackingState:function(){return d},createDynamicValidationState:function(){return f},createPostponedAbortSignal:function(){return L},formatDynamicAPIAccesses:function(){return k},getFirstDynamicReason:function(){return p},isDynamicPostpone:function(){return S},isPrerenderInterruptedError:function(){return M},markCurrentScopeAsDynamic:function(){return y},postponeWithTracking:function(){return w},throwIfDisallowedDynamic:function(){return G},throwToInterruptStaticGeneration:function(){return m},trackAllowedDynamicAccess:function(){return F},trackDynamicDataInDynamicRender:function(){return b},trackFallbackParamAccessed:function(){return h},trackSynchronousPlatformIOAccessInDev:function(){return v},trackSynchronousRequestDataAccessInDev:function(){return R},useDynamicRouteParams:function(){return N}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(6540)),o=r(958),a=r(1480),u=r(3074),i=r(7305),c=r(2249),s=r(8126),l="function"==typeof n.default.unstable_postpone;function d(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicExpression:void 0,syncDynamicErrorWithStack:null}}function f(){return{hasSuspendedDynamic:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasSyncDynamicErrors:!1,dynamicErrors:[]}}function p(e){var t;return null==(t=e.dynamicAccesses[0])?void 0:t.expression}function y(e,t,r){if((!t||"cache"!==t.type&&"unstable-cache"!==t.type)&&!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(t){if("prerender-ppr"===t.type)w(e.route,r,t.dynamicTracking);else if("prerender-legacy"===t.type){t.revalidate=0;let n=new o.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw e.dynamicUsageDescription=r,e.dynamicUsageStack=n.stack,n}}}}function h(e,t){let r=u.workUnitAsyncStorage.getStore();r&&"prerender-ppr"===r.type&&w(e.route,t,r.dynamicTracking)}function m(e,t,r){let n=new o.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw r.revalidate=0,t.dynamicUsageDescription=e,t.dynamicUsageStack=n.stack,n}function b(e,t){t&&"cache"!==t.type&&"unstable-cache"!==t.type&&("prerender"===t.type||"prerender-legacy"===t.type)&&(t.revalidate=0)}function g(e,t,r){let n=x(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);r.controller.abort(n);let o=r.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:t})}function _(e,t,r,n){let o=n.dynamicTracking;return o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r),g(e,t,n)}function v(e){e.prerenderPhase=!1}function E(e,t,r,n){let o=n.dynamicTracking;throw o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r,!0===n.validating&&(o.syncDynamicLogged=!0)),g(e,t,n),x(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)}let R=v;function j({reason:e,route:t}){let r=u.workUnitAsyncStorage.getStore();w(t,e,r&&"prerender-ppr"===r.type?r.dynamicTracking:null)}function w(e,t,r){C(),r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:t}),n.default.unstable_postpone(P(e,t))}function P(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function S(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&O(e.message)}function O(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===O(P("%%%","^^^")))throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");let D="NEXT_PRERENDER_INTERRUPTED";function x(e){let t=Error(e);return t.digest=D,t}function M(e){return"object"==typeof e&&null!==e&&e.digest===D&&"name"in e&&"message"in e&&e instanceof Error}function A(e){return e.length>0}function T(e,t){return e.dynamicAccesses.push(...t.dynamicAccesses),e.dynamicAccesses}function k(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:t})=>(t=t.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${t}`))}function C(){if(!l)throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")}function L(e){C();let t=new AbortController;try{n.default.unstable_postpone(e)}catch(e){t.abort(e)}return t.signal}function I(e,t){let r=t.dynamicTracking;r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function N(e){if("undefined"==typeof window){let t=i.workAsyncStorage.getStore();if(t&&t.isStaticGeneration&&t.fallbackRouteParams&&t.fallbackRouteParams.size>0){let r=u.workUnitAsyncStorage.getStore();r&&("prerender"===r.type?n.default.use((0,c.makeHangingPromise)(r.renderSignal,e)):"prerender-ppr"===r.type?w(t.route,e,r.dynamicTracking):"prerender-legacy"===r.type&&m(e,t,r))}}}let U=/\n\s+at Suspense \(<anonymous>\)/,$=RegExp(`\\n\\s+at ${s.METADATA_BOUNDARY_NAME}[\\n\\s]`),B=RegExp(`\\n\\s+at ${s.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),W=RegExp(`\\n\\s+at ${s.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function F(e,t,r,n,o){if(!W.test(t)){if($.test(t)){r.hasDynamicMetadata=!0;return}if(B.test(t)){r.hasDynamicViewport=!0;return}if(U.test(t)){r.hasSuspendedDynamic=!0;return}if(n.syncDynamicErrorWithStack||o.syncDynamicErrorWithStack){r.hasSyncDynamicErrors=!0;return}else{let n=function(e,t){let r=Error(e);return r.stack="Error: "+e+t,r}(`Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,t);r.dynamicErrors.push(n);return}}}function G(e,t,r,n){let o,u,i;if(r.syncDynamicErrorWithStack?(o=r.syncDynamicErrorWithStack,u=r.syncDynamicExpression,i=!0===r.syncDynamicLogged):n.syncDynamicErrorWithStack?(o=n.syncDynamicErrorWithStack,u=n.syncDynamicExpression,i=!0===n.syncDynamicLogged):(o=null,u=void 0,i=!1),t.hasSyncDynamicErrors&&o)throw i||console.error(o),new a.StaticGenBailoutError;let c=t.dynamicErrors;if(c.length){for(let e=0;e<c.length;e++)console.error(c[e]);throw new a.StaticGenBailoutError}if(!t.hasSuspendedDynamic){if(t.hasDynamicMetadata){if(o)throw console.error(o),new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`);throw new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}if(t.hasDynamicViewport){if(o)throw console.error(o),new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`);throw new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}}}},2528:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},7305:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=r(2528)},8379:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workUnitAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},3074:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return o},getPrerenderResumeDataCache:function(){return a},getRenderResumeDataCache:function(){return u},workUnitAsyncStorage:function(){return n.workUnitAsyncStorageInstance}});let n=r(8379);function o(e){let t=n.workUnitAsyncStorageInstance.getStore();if(t){if("request"===t.type)return t;if("prerender"===t.type||"prerender-ppr"===t.type||"prerender-legacy"===t.type)throw Error(`\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`);if("cache"===t.type)throw Error(`\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);if("unstable-cache"===t.type)throw Error(`\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`)}throw Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`)}function a(e){return"prerender"===e.type||"prerender-ppr"===e.type?e.prerenderResumeDataCache:null}function u(e){return"prerender-legacy"!==e.type&&"cache"!==e.type&&"unstable-cache"!==e.type?"request"===e.type?e.renderResumeDataCache:e.prerenderResumeDataCache:null}},2249:(e,t)=>{"use strict";function r(e,t){let r=new Promise((r,n)=>{e.addEventListener("abort",()=>{n(Error(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`))},{once:!0})});return r.catch(n),r}function n(){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"makeHangingPromise",{enumerable:!0,get:function(){return r}})},9222:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.postpone");function n(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},1106:(e,t,r)=>{e.exports=r(6397)},6424:(e,t,r)=>{r(3750)},8133:(e,t,r)=>{e.exports=r(7610)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);