(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),s=n(7426);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),l=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,g=e.replace,h=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),m=r(j,2),w=m[0],O=m[1],x=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);a.default.useEffect((function(){var e=O&&n&&c.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(o,d,p,{locale:t})}),[p,d,O,b,n,o]);var E={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,g,h,_,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof b?b:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=L||c.addBasePath(c.addLocale(p,P,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=o.useRef(),u=o.useState(!1),f=r(u,2),l=f[0],d=f[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!c&&!l){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},5809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return v}});n(3626),n(538),n(960);var o=n(9679),a=n.n(o),c=n(1664),i=n(9008),s=n(4298),u=n(5893),f=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.default,{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,u.jsx)(s.default,{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]})},l=n(7294);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=e.Component,n=e.pageProps;return(0,l.useEffect)((function(){document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")})),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f,{}),(0,u.jsx)(i.default,{children:(0,u.jsx)("meta",{property:"og:site_name",content:"\u307d\u3093\u30d6\u30ed\u30b0"})}),(0,u.jsxs)("div",{className:a().site,children:[(0,u.jsx)("header",{className:a().heading,children:(0,u.jsx)(c.default,{href:"/",children:(0,u.jsx)("a",{className:a().brand,children:"\u307d\u3093\u30d6\u30ed\u30b0"})})}),(0,u.jsx)("div",{className:a().content,children:(0,u.jsx)(t,p({},n))}),(0,u.jsxs)("footer",{className:a().footer,children:["\xa9 2021"," ",(0,u.jsx)(c.default,{href:"https://twitter.com/pon_dev",children:(0,u.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Pon"})})]})]})]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5809)}])},9679:function(e){e.exports={site:"_app_site__2sDJF",content:"_app_content__3DQzm",heading:"_app_heading__2ZT8S",brand:"_app_brand__3c8bj",footer:"_app_footer__12QKE"}},960:function(){},3626:function(){},538:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},4298:function(e,t,n){e.exports=n(7926)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);