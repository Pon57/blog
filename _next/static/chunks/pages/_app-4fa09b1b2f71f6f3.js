(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8106)}])},1539:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return o}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2499:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return u}});let n=r(3394),o=r(7511);function u(e){return(0,o.isRedirectError)(e)||(0,n.isNotFoundError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6432:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return c.ReadonlyURLSearchParams},RedirectType:function(){return c.RedirectType},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},notFound:function(){return c.notFound},permanentRedirect:function(){return c.permanentRedirect},redirect:function(){return c.redirect},unstable_rethrow:function(){return c.unstable_rethrow},useParams:function(){return y},usePathname:function(){return f},useRouter:function(){return p},useSearchParams:function(){return d},useSelectedLayoutSegment:function(){return g},useSelectedLayoutSegments:function(){return h},useServerInsertedHTML:function(){return l.useServerInsertedHTML}});let n=r(7294),o=r(257),u=r(2608),a=r(1288),i=r(6406),c=r(2717),s=r(7325),l=r(5988);function d(){let e=(0,n.useContext)(u.SearchParamsContext);return(0,n.useMemo)(()=>e?new c.ReadonlyURLSearchParams(e):null,[e])}function f(){return(0,s.useDynamicRouteParams)("usePathname()"),(0,n.useContext)(u.PathnameContext)}function p(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function y(){return(0,s.useDynamicRouteParams)("useParams()"),(0,n.useContext)(u.PathParamsContext)}function h(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegments()");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let u;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)u=t[1][r];else{var c;let e=t[1];u=null!=(c=e.children)?c:Object.values(e)[0]}if(!u)return o;let s=u[0],l=(0,a.getSegmentValue)(s);return!l||l.startsWith(i.PAGE_SEGMENT_KEY)?o:(o.push(l),e(u,r,!1,o))}(t.tree,e):null}function g(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegment()");let t=h(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===i.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2717:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unstable_rethrow:function(){return u.unstable_rethrow}});let n=r(7511),o=r(3394),u=r(5173);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3394:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4234:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7511:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return p},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return d},isRedirectError:function(){return l},permanentRedirect:function(){return s},redirect:function(){return c}});let o=r(5107),u=r(4234),a="NEXT_REDIRECT";function i(e,t,r){void 0===r&&(r=u.RedirectStatusCode.TemporaryRedirect);let n=Error(a);return n.digest=a+";"+t+";"+e+";"+r+";",n}function c(e,t){let r=o.actionAsyncStorage.getStore();throw i(e,t||((null==r?void 0:r.isAction)?"push":"replace"),u.RedirectStatusCode.TemporaryRedirect)}function s(e,t){throw void 0===t&&(t="replace"),i(e,t,u.RedirectStatusCode.PermanentRedirect)}function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,n]=t,o=t.slice(2,-2).join(";"),i=Number(t.at(-2));return r===a&&("replace"===n||"push"===n)&&"string"==typeof o&&!isNaN(i)&&i in u.RedirectStatusCode}function d(e){return l(e)?e.digest.split(";").slice(2,-2).join(";"):null}function f(e){if(!l(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function p(e){if(!l(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}!function(e){e.push="push",e.replace="replace"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1288:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8199:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return l},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",u="navigate",a="restore",i="server-patch",c="prefetch",s="hmr-refresh",l="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2700:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{StaticGenBailoutError:function(){return n},isStaticGenBailoutError:function(){return o}});let r="NEXT_STATIC_GEN_BAILOUT";class n extends Error{constructor(...e){super(...e),this.code=r}}function o(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,a.isNextRouterError)(t)||(0,u.isBailoutToCSRError)(t)||(0,n.isDynamicUsageError)(t)||(0,o.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(8195),o=r(6111),u=r(947),a=r(2499);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return E}});let n=r(8754),o=r(5893),u=n._(r(7294)),a=r(6075),i=r(3955),c=r(8041),s=r(9903),l=r(5490),d=r(1928),f=r(257),p=r(4229),y=r(7195),h=r(9470),g=r(8199),m=r(2145),b=new Set;function _(e,t,r,n,o,u){if(u||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!u){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let E=u.default.forwardRef(function(e,t){let r,n;let{href:c,as:b,children:E,prefetch:j=null,passHref:S,replace:P,shallow:R,scroll:w,locale:O,onClick:x,onMouseEnter:D,onTouchStart:M,legacyBehavior:A=!1,...T}=e;r=E,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=u.default.useContext(d.RouterContext),C=u.default.useContext(f.AppRouterContext),N=null!=k?k:C,L=!k,I=!1!==j,U=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:$,as:F}=u.default.useMemo(()=>{if(!k){let e=v(c);return{href:e,as:b?v(b):e}}let[e,t]=(0,a.resolveHref)(k,c,!0);return{href:e,as:b?(0,a.resolveHref)(k,b):t||e}},[k,c,b]),B=u.default.useRef($),G=u.default.useRef(F);A&&(n=u.default.Children.only(r));let W=A?n&&"object"==typeof n&&n.ref:t,[H,V,q]=(0,p.useIntersection)({rootMargin:"200px"}),Y=u.default.useCallback(e=>{(G.current!==F||B.current!==$)&&(q(),G.current=F,B.current=$),H(e)},[F,$,q,H]),K=(0,m.useMergedRef)(Y,W);u.default.useEffect(()=>{N&&V&&I&&_(N,$,F,{locale:O},{kind:U},L)},[F,$,V,O,I,null==k?void 0:k.locale,N,L,U]);let X={ref:K,onClick(e){A||"function"!=typeof x||x(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,a,c,s,l){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};l?u.default.startTransition(f):f()}(e,N,$,F,P,R,w,O,L)},onMouseEnter(e){A||"function"!=typeof D||D(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(I||!L)&&_(N,$,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){A||"function"!=typeof M||M(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(I||!L)&&_(N,$,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,s.isAbsoluteUrl)(F))X.href=F;else if(!A||S||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,y.getDomainLocale)(F,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);X.href=t||(0,h.addBasePath)((0,l.addLocale)(F,e,null==k?void 0:k.defaultLocale))}return A?u.default.cloneElement(n,X):(0,o.jsx)("a",{...T,...X,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(7294),o=r(4474),u="function"==typeof IntersectionObserver,a=new Map,i=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!u,[l,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(s||l)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!l){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,l,f.current]),[p,l,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2145:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(7294);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5988:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return u}});let n=r(1757)._(r(7294)),o=n.default.createContext(null);function u(e){let t=(0,n.useContext)(o);t&&t(e)}},8106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(5893);r(4071),r(2007),r(7776);var o=r(4647),u=r.n(o),a=r(1664),i=r.n(a),c=r(4298),s=r.n(c);let l=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,n.jsx)(s(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]});var d=r(7294);r(9332);let f=e=>{let{children:t}=e;return t};function p(e){let{Component:t,pageProps:r}=e;return(0,d.useEffect)(()=>{document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")}),(0,n.jsx)(f,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsxs)("div",{className:u().site,children:[(0,n.jsx)("header",{className:u().heading,children:(0,n.jsx)(i(),{href:"/",className:u().brand,children:"ぽんブログ"})}),(0,n.jsx)("div",{className:u().content,children:(0,n.jsx)(t,{...r})}),(0,n.jsxs)("footer",{className:u().footer,children:["\xa9 2021"," ",(0,n.jsx)(i(),{href:"https://twitter.com/pon_dev",target:"_blank",rel:"noreferrer",children:"Pon"})]})]})]})})}},7776:()=>{},4071:()=>{},2007:()=>{},4647:e=>{e.exports={site:"_app_site__wQ_HZ",content:"_app_content__mHXSR",heading:"_app_heading__uRQQR",brand:"_app_brand__aiSQf",footer:"_app_footer___uvS6"}},8195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return i}});let n=r(1539),o=r(947),u=r(2499),a=r(7325),i=e=>(0,n.isDynamicServerError)(e)||(0,o.isBailoutToCSRError)(e)||(0,u.isNextRouterError)(e)||(0,a.isDynamicPostpone)(e)},5086:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{METADATA_BOUNDARY_NAME:function(){return r},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return n}});let r="__next_metadata_boundary__",n="__next_viewport_boundary__",o="__next_outlet_boundary__"},1828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8280).createAsyncLocalStorage)()},5107:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorage}});let n=r(1828)},8280:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{bindSnapshot:function(){return a},createAsyncLocalStorage:function(){return u},createSnapshot:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(e){return e}}let o="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function u(){return o?new o:new n}function a(e){return o?o.bind(e):n.bind(e)}function i(){return o?o.snapshot():function(e,...t){return e(...t)}}},7325:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Postpone:function(){return S},abortAndThrowOnSynchronousRequestDataAccess:function(){return E},abortOnSynchronousPlatformIOAccess:function(){return _},accessedDynamicData:function(){return A},annotateDynamicAccess:function(){return L},consumeDynamicAccess:function(){return T},createDynamicTrackingState:function(){return d},createDynamicValidationState:function(){return f},createPostponedAbortSignal:function(){return N},formatDynamicAPIAccesses:function(){return k},getFirstDynamicReason:function(){return p},isDynamicPostpone:function(){return w},isPrerenderInterruptedError:function(){return M},markCurrentScopeAsDynamic:function(){return y},postponeWithTracking:function(){return P},throwIfDisallowedDynamic:function(){return W},throwToInterruptStaticGeneration:function(){return g},trackAllowedDynamicAccess:function(){return G},trackDynamicDataInDynamicRender:function(){return m},trackFallbackParamAccessed:function(){return h},trackSynchronousPlatformIOAccessInDev:function(){return v},trackSynchronousRequestDataAccessInDev:function(){return j},useDynamicRouteParams:function(){return I}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(7294)),o=r(1539),u=r(2700),a=r(1717),i=r(9927),c=r(1738),s=r(5086),l="function"==typeof n.default.unstable_postpone;function d(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicExpression:void 0,syncDynamicErrorWithStack:null}}function f(){return{hasSuspendedDynamic:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasSyncDynamicErrors:!1,dynamicErrors:[]}}function p(e){var t;return null==(t=e.dynamicAccesses[0])?void 0:t.expression}function y(e,t,r){if((!t||"cache"!==t.type&&"unstable-cache"!==t.type)&&!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw new u.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(t){if("prerender-ppr"===t.type)P(e.route,r,t.dynamicTracking);else if("prerender-legacy"===t.type){t.revalidate=0;let n=new o.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw e.dynamicUsageDescription=r,e.dynamicUsageStack=n.stack,n}}}}function h(e,t){let r=a.workUnitAsyncStorage.getStore();r&&"prerender-ppr"===r.type&&P(e.route,t,r.dynamicTracking)}function g(e,t,r){let n=new o.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw r.revalidate=0,t.dynamicUsageDescription=e,t.dynamicUsageStack=n.stack,n}function m(e,t){t&&"cache"!==t.type&&"unstable-cache"!==t.type&&("prerender"===t.type||"prerender-legacy"===t.type)&&(t.revalidate=0)}function b(e,t,r){let n=D(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);r.controller&&r.controller.abort(n);let o=r.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:t})}function _(e,t,r,n){let o=n.dynamicTracking;return o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r),b(e,t,n)}function v(e){e.prerenderPhase=!1}function E(e,t,r,n){let o=n.dynamicTracking;throw o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r,!0===n.validating&&(o.syncDynamicLogged=!0)),b(e,t,n),D(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)}let j=v;function S({reason:e,route:t}){let r=a.workUnitAsyncStorage.getStore();P(t,e,r&&"prerender-ppr"===r.type?r.dynamicTracking:null)}function P(e,t,r){C(),r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:t}),n.default.unstable_postpone(R(e,t))}function R(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function w(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&O(e.message)}function O(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===O(R("%%%","^^^")))throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");let x="NEXT_PRERENDER_INTERRUPTED";function D(e){let t=Error(e);return t.digest=x,t}function M(e){return"object"==typeof e&&null!==e&&e.digest===x&&"name"in e&&"message"in e&&e instanceof Error}function A(e){return e.length>0}function T(e,t){return e.dynamicAccesses.push(...t.dynamicAccesses),e.dynamicAccesses}function k(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:t})=>(t=t.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${t}`))}function C(){if(!l)throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")}function N(e){C();let t=new AbortController;try{n.default.unstable_postpone(e)}catch(e){t.abort(e)}return t.signal}function L(e,t){let r=t.dynamicTracking;r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function I(e){if("undefined"==typeof window){let t=i.workAsyncStorage.getStore();if(t&&t.isStaticGeneration&&t.fallbackRouteParams&&t.fallbackRouteParams.size>0){let r=a.workUnitAsyncStorage.getStore();r&&("prerender"===r.type?n.default.use((0,c.makeHangingPromise)(r.renderSignal,e)):"prerender-ppr"===r.type?P(t.route,e,r.dynamicTracking):"prerender-legacy"===r.type&&g(e,t,r))}}}let U=/\n\s+at Suspense \(<anonymous>\)/,$=RegExp(`\\n\\s+at ${s.METADATA_BOUNDARY_NAME}[\\n\\s]`),F=RegExp(`\\n\\s+at ${s.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),B=RegExp(`\\n\\s+at ${s.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function G(e,t,r,n,o){if(!B.test(t)){if($.test(t)){r.hasDynamicMetadata=!0;return}if(F.test(t)){r.hasDynamicViewport=!0;return}if(U.test(t)){r.hasSuspendedDynamic=!0;return}if(n.syncDynamicErrorWithStack||o.syncDynamicErrorWithStack){r.hasSyncDynamicErrors=!0;return}else{let n=function(e,t){let r=Error(e);return r.stack="Error: "+e+t,r}(`In Route "${e}" this component accessed data without a fallback UI available somewhere above it using Suspense.`,t);r.dynamicErrors.push(n);return}}}function W(e,t,r,n){let o,a,i;if(r.syncDynamicErrorWithStack?(o=r.syncDynamicErrorWithStack,a=r.syncDynamicExpression,i=!0===r.syncDynamicLogged):n.syncDynamicErrorWithStack?(o=n.syncDynamicErrorWithStack,a=n.syncDynamicExpression,i=!0===n.syncDynamicLogged):(o=null,a=void 0,i=!1),t.hasSyncDynamicErrors&&o)throw i||console.error(o),new u.StaticGenBailoutError;let c=t.dynamicErrors;if(c.length){for(let e=0;e<c.length;e++)console.error(c[e]);throw new u.StaticGenBailoutError}if(!t.hasSuspendedDynamic){if(t.hasDynamicMetadata){if(o)throw console.error(o),new u.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`);throw new u.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}if(t.hasDynamicViewport){if(o)throw console.error(o),new u.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`);throw new u.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}}}},2255:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8280).createAsyncLocalStorage)()},9927:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorage}});let n=r(2255)},3115:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workUnitAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8280).createAsyncLocalStorage)()},1717:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return o},workUnitAsyncStorage:function(){return n.workUnitAsyncStorage}});let n=r(3115);function o(e){let t=n.workUnitAsyncStorage.getStore();if(t){if("request"===t.type)return t;if("prerender"===t.type||"prerender-ppr"===t.type||"prerender-legacy"===t.type)throw Error(`\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`);if("cache"===t.type)throw Error(`\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);if("unstable-cache"===t.type)throw Error(`\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`)}throw Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`)}},1738:(e,t)=>{"use strict";function r(e,t){let r=new Promise((r,n)=>{e.addEventListener("abort",()=>{n(Error(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`))},{once:!0})});return r.catch(n),r}function n(){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"makeHangingPromise",{enumerable:!0,get:function(){return r}})},6111:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.postpone");function n(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},1664:(e,t,r)=>{e.exports=r(8342)},9332:(e,t,r)=>{r(6432)},4298:(e,t,r)=>{e.exports=r(3381)}},e=>{var t=t=>e(e.s=t);e.O(0,[774,179],()=>(t(6840),t(3079))),_N_E=e.O()}]);