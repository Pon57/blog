(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{92:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1511)}])},677:e=>{e.exports={site:"_app_site__wQ_HZ",content:"_app_content__mHXSR",heading:"_app_heading__uRQQR",brand:"_app_brand__aiSQf",footer:"_app_footer___uvS6",link:"_app_link__Y_6XC"}},1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let n=r(4232);function u(e,t){let r=(0,n.useRef)(null),u=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=u.current;t&&(u.current=null,t())}else e&&(r.current=o(e,n)),t&&(u.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1511:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(7876);r(6056),r(6021),r(5337);var u=r(677),o=r.n(u),l=r(8230),a=r.n(l),i=r(5105),f=r.n(i);let d=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,n.jsx)(f(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]});var c=r(4232);r(4e3);let s=e=>{let{children:t}=e;return t};function p(e){let{Component:t,pageProps:r}=e;return(0,c.useEffect)(()=>{document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")}),(0,n.jsx)(s,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsxs)("div",{className:o().site,children:[(0,n.jsx)("header",{className:o().heading,children:(0,n.jsx)(a(),{href:"/",className:o().brand,children:"ぽんブログ"})}),(0,n.jsx)("div",{className:o().content,children:(0,n.jsx)(t,{...r})}),(0,n.jsxs)("footer",{className:o().footer,children:[(0,n.jsxs)("div",{className:o().link,children:[(0,n.jsx)(a(),{href:"/privacy-policy",children:"プライバシーポリシー"}),(0,n.jsx)(a(),{href:"/disclaimer",children:"免責事項"})]}),(0,n.jsxs)("div",{children:["\xa9 2021"," ",(0,n.jsx)(a(),{href:"https://twitter.com/pon_dev",target:"_blank",children:"Pon"})]})]})]})]})})}},1639:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},useLinkStatus:function(){return j}});let n=r(8365),u=r(7876),o=n._(r(4232)),l=r(6658),a=r(1851),i=r(6225),f=r(8407),d=r(2696),c=r(8265),s=r(2343),p=r(8940),_=r(7469),b=r(1026);r(3724);let y=new Set;function h(e,t,r,n){if((0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(u))return;y.add(u)}e.prefetch(t,r,n).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let R=o.default.forwardRef(function(e,t){let r,n,{href:i,as:y,children:R,prefetch:g=null,passHref:j,replace:m,shallow:O,scroll:E,locale:P,onClick:x,onNavigate:M,onMouseEnter:C,onTouchStart:w,legacyBehavior:T=!1,...S}=e;r=R,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let L=o.default.useContext(c.RouterContext),D=!1!==g,{href:N,as:k}=o.default.useMemo(()=>{if(!L){let e=v(i);return{href:e,as:y?v(y):e}}let[e,t]=(0,l.resolveHref)(L,i,!0);return{href:e,as:y?(0,l.resolveHref)(L,y):t||e}},[L,i,y]),I=o.default.useRef(N),A=o.default.useRef(k);T&&(n=o.default.Children.only(r));let F=T?n&&"object"==typeof n&&n.ref:t,[H,U,X]=(0,s.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(A.current!==k||I.current!==N)&&(X(),A.current=k,I.current=N),H(e)},[k,N,X,H]),z=(0,b.useMergedRef)(K,F);o.default.useEffect(()=>{L&&U&&D&&h(L,N,k,{locale:P})},[k,N,U,P,D,null==L?void 0:L.locale,L]);let Q={ref:z,onClick(e){T||"function"!=typeof x||x(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&(e.defaultPrevented||function(e,t,r,n,u,o,l,i,f){let{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,a.isLocalURL)(r)){u&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(f){let e=!1;if(f({preventDefault:()=>{e=!0}}),e)return}let e=null==l||l;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:o,locale:i,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})})()}}(e,L,N,k,m,O,E,P,M))},onMouseEnter(e){T||"function"!=typeof C||C(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&h(L,N,k,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){T||"function"!=typeof w||w(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&h(L,N,k,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)(k))Q.href=k;else if(!T||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==L?void 0:L.locale;Q.href=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(k,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales)||(0,_.addBasePath)((0,d.addLocale)(k,e,null==L?void 0:L.defaultLocale))}return T?o.default.cloneElement(n,Q):(0,u.jsx)("a",{...S,...Q,children:r})}),g=(0,o.createContext)({pending:!1}),j=()=>(0,o.useContext)(g),m=R;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2202:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return n}}),r(3794).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2343:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(4232),u=r(4754),o="function"==typeof IntersectionObserver,l=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,f=i||!o,[d,c]=(0,n.useState)(!1),s=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{s.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(f||d)return;let e=s.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:o}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},a.push(r),l.set(r,t),t}(r);return o.set(e,t),u.observe(e),function(){if(o.delete(e),u.unobserve(e),0===o.size){u.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,u.requestIdleCallback)(()=>c(!0));return()=>(0,u.cancelIdleCallback)(e)}},[f,r,t,d,s.current]),[p,d,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2647:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return u}});let n=""+r(3794).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function u(){let e=Object.defineProperty(Error(n),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw e.digest=n,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3724:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4e3:(e,t,r)=>{r(4895)},4167:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return n}});let n=r(4685).unstable_rethrow;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4269:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return c},getRedirectTypeFromError:function(){return d},getURLFromRedirectError:function(){return f},permanentRedirect:function(){return i},redirect:function(){return a}});let n=r(8316),u=r(5318),o=void 0;function l(e,t,r){void 0===r&&(r=n.RedirectStatusCode.TemporaryRedirect);let o=Object.defineProperty(Error(u.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o.digest=u.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",o}function a(e,t){var r;throw null!=t||(t=(null==o||null==(r=o.getStore())?void 0:r.isAction)?u.RedirectType.push:u.RedirectType.replace),l(e,t,n.RedirectStatusCode.TemporaryRedirect)}function i(e,t){throw void 0===t&&(t=u.RedirectType.replace),l(e,t,n.RedirectStatusCode.PermanentRedirect)}function f(e){return(0,u.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function d(e){if(!(0,u.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return e.digest.split(";",2)[1]}function c(e){if(!(0,u.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4512:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return o}});let n=r(8365)._(r(4232)),u=n.default.createContext(null);function o(e){let t=(0,n.useContext)(u);t&&t(e)}},4685:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,u.isNextRouterError)(t)||(0,n.isBailoutToCSRError)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(5346),u=r(1670);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4895:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},RedirectType:function(){return i.RedirectType},ServerInsertedHTMLContext:function(){return f.ServerInsertedHTMLContext},forbidden:function(){return i.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect},unauthorized:function(){return i.unauthorized},unstable_rethrow:function(){return i.unstable_rethrow},useParams:function(){return _},usePathname:function(){return s},useRouter:function(){return p},useSearchParams:function(){return c},useSelectedLayoutSegment:function(){return y},useSelectedLayoutSegments:function(){return b},useServerInsertedHTML:function(){return f.useServerInsertedHTML}});let n=r(4232),u=r(2875),o=r(6394),l=r(5172),a=r(2835),i=r(6382),f=r(4512),d=void 0;function c(){let e=(0,n.useContext)(o.SearchParamsContext);return(0,n.useMemo)(()=>e?new i.ReadonlyURLSearchParams(e):null,[e])}function s(){return null==d||d("usePathname()"),(0,n.useContext)(o.PathnameContext)}function p(){let e=(0,n.useContext)(u.AppRouterContext);if(null===e)throw Object.defineProperty(Error("invariant expected app router to be mounted"),"__NEXT_ERROR_CODE",{value:"E238",enumerable:!1,configurable:!0});return e}function _(){return null==d||d("useParams()"),(0,n.useContext)(o.PathParamsContext)}function b(e){void 0===e&&(e="children"),null==d||d("useSelectedLayoutSegments()");let t=(0,n.useContext)(u.LayoutRouterContext);return t?function e(t,r,n,u){let o;if(void 0===n&&(n=!0),void 0===u&&(u=[]),n)o=t[1][r];else{var i;let e=t[1];o=null!=(i=e.children)?i:Object.values(e)[0]}if(!o)return u;let f=o[0],d=(0,l.getSegmentValue)(f);return!d||d.startsWith(a.PAGE_SEGMENT_KEY)?u:(u.push(d),e(o,r,!1,u))}(t.parentTree,e):null}function y(e){void 0===e&&(e="children"),null==d||d("useSelectedLayoutSegment()");let t=b(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===a.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5105:(e,t,r)=>{e.exports=r(7195)},5172:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5337:()=>{},6021:()=>{},6056:()=>{},6382:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return d},RedirectType:function(){return u.RedirectType},forbidden:function(){return l.forbidden},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unauthorized:function(){return a.unauthorized},unstable_rethrow:function(){return i.unstable_rethrow}});let n=r(4269),u=r(5318),o=r(2647),l=r(2202),a=r(8475),i=r(4167);class f extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class d extends URLSearchParams{append(){throw new f}delete(){throw new f}set(){throw new f}sort(){throw new f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8230:(e,t,r)=>{e.exports=r(1639)},8475:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return n}}),r(3794).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8940:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7810),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(92),t(8253))),_N_E=e.O()}]);