(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(7934)}])},1551:function(d,a,b){"use strict";function g(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function h(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||i(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,c){if(a){if("string"==typeof a)return g(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return g(a,c)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c,e=(c=b(7294))&&c.__esModule?c:{default:c},j=b(1003),k=b(880),l=b(9246),m={};function n(a,c,d,b){if(a&&j.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;m[c+"%"+d+(e?"%"+e:"")]=!0}}var f=e.default.forwardRef(function(a,u){var d,c,r=a.legacyBehavior,f=void 0===r?!0!==Boolean(!1):r,v=a.href,w=a.as,x=a.children,y=a.prefetch,z=a.passHref,I=a.replace,J=a.shallow,K=a.scroll,i=a.locale,L=a.onClick,M=a.onMouseEnter,A=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);d=x,f&&"string"==typeof d&&(d=e.default.createElement("a",null,d));var B=!1!==y,b=k.useRouter(),s=e.default.useMemo(function(){var a=h(j.resolveHref(b,v,!0),2),c=a[0],d=a[1];return{href:c,as:w?j.resolveHref(b,w):d||c}},[b,v,w]),o=s.href,g=s.as,N=e.default.useRef(o),O=e.default.useRef(g);f&&(c=e.default.Children.only(d));var C=f?c&&"object"==typeof c&&c.ref:u,p=h(l.useIntersection({rootMargin:"200px"}),3),D=p[0],E=p[1],F=p[2],G=e.default.useCallback(function(a){(O.current!==g||N.current!==o)&&(F(),O.current=g,N.current=o),D(a),C&&("function"==typeof C?C(a):"object"==typeof C&&(C.current=a))},[g,C,o,F,D]);e.default.useEffect(function(){var c=E&&B&&j.isLocalURL(o),a=void 0!==i?i:b&&b.locale,d=m[o+"%"+g+(a?"%"+a:"")];c&&!d&&n(b,o,g,{locale:a})},[g,o,E,i,B,b]);var q={ref:G,onClick:function(d){var e,k,h,l,m,n,p,q,a,r;f||"function"!=typeof L||L(d),f&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(d),d.defaultPrevented||(e=d,k=b,h=o,l=g,m=I,n=J,p=K,q=i,"A"===e.currentTarget.nodeName.toUpperCase()&&((r=(a=e).currentTarget.target)&&"_self"!==r||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which||!j.isLocalURL(h))||(e.preventDefault(),k[m?"replace":"push"](h,l,{shallow:n,locale:q,scroll:p})))},onMouseEnter:function(a){f||"function"!=typeof M||M(a),f&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(a),j.isLocalURL(o)&&n(b,o,g,{priority:!0})}};if(!f||z||"a"===c.type&&!("href"in c.props)){var t=void 0!==i?i:b&&b.locale,H=b&&b.isLocaleDomain&&j.getDomainLocale(g,t,b&&b.locales,b&&b.domainLocales);q.href=H||j.addBasePath(j.addLocale(g,t,b&&b.defaultLocale))}return f?e.default.cloneElement(c,q):e.default.createElement("a",Object.assign({},A,q),d)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),d.exports=a.default)},9246:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||f(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var b=a.rootRef,k=a.rootMargin,l=a.disabled||!i,p=g.useRef(),d=e(g.useState(!1),2),c=d[0],q=d[1],f=e(g.useState(b?b.current:null),2),m=f[0],r=f[1],n=g.useCallback(function(a){p.current&&(p.current(),p.current=void 0),!l&&!c&&a&&a.tagName&&(p.current=j(a,function(a){return a&&q(a)},{root:m,rootMargin:k}))},[l,m,k,c]),o=g.useCallback(function(){q(!1)},[]);return g.useEffect(function(){if(!i&&!c){var a=h.requestIdleCallback(function(){return q(!0)});return function(){return h.cancelIdleCallback(a)}}},[c]),g.useEffect(function(){b&&r(b.current)},[b]),[n,c,o]};var g=b(7294),h=b(4686),i="undefined"!=typeof IntersectionObserver;function j(b,c,d){var a=m(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),k.delete(g);var a=l.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&l.splice(a,1)}}}var k=new Map,l=[];function m(c){var a,b={root:c.root||null,margin:c.rootMargin||""},d=l.find(function(a){return a.root===b.root&&a.margin===b.margin});if(d?a=k.get(d):(a=k.get(b),l.push(b)),a)return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},c);return k.set(b,a={id:b,observer:f,elements:e}),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),c.exports=a.default)},7934:function(f,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return n}});var g=a(5893);a(5604),a(4139),a(7811);var c=a(5926),h=a.n(c),d=a(1664),i=a.n(d),e=a(4298),j=a.n(e),k=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD",strategy:"afterInteractive"}),(0,g.jsx)(j(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n            \n              gtag('config', 'G-D8WPT311QD');\n          "})]})},l=a(7294);function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a){var b=a.Component,c=a.pageProps;return(0,l.useEffect)(function(){document.documentElement.setAttribute("prefix","og: http://ogp.me/ns#")}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{}),(0,g.jsxs)("div",{className:h().site,children:[(0,g.jsx)("header",{className:h().heading,children:(0,g.jsx)(i(),{href:"/",children:(0,g.jsx)("a",{className:h().brand,children:"\u307D\u3093\u30D6\u30ED\u30B0"})})}),(0,g.jsx)("div",{className:h().content,children:(0,g.jsx)(b,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){m(d,a,c[a])})}return d}({},c))}),(0,g.jsxs)("footer",{className:h().footer,children:["\xa9 2021"," ",(0,g.jsx)(i(),{href:"https://twitter.com/pon_dev",children:(0,g.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Pon"})})]})]})]})}},5926:function(a){a.exports={site:"_app_site__jPXzT",content:"_app_content__ey6bu",heading:"_app_heading__u1cWZ",brand:"_app_brand__F_5Hf",footer:"_app_footer__clEfD"}},7811:function(){},5604:function(){},4139:function(){},1664:function(a,c,b){a.exports=b(1551)},4298:function(a,c,b){a.exports=b(3573)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(880)}),_N_E=a.O()}])