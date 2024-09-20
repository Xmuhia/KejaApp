"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[7571],{11234:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(72791),s=n(47022),a=n(89743),o=n(2677),c=n(9140),i=n(11087),l=n(42874),d=n(12007),u=n(80184);const f=e=>{let{helpText:t,bottomLinks:n,children:f,isCombineForm:m}=e;return(0,r.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(a.Z,{className:"justify-content-center",children:(0,u.jsxs)(o.Z,{md:8,lg:6,xl:m?9:4,children:[(0,u.jsx)(c.Z,{className:"bg-pattern",children:(0,u.jsxs)(c.Z.Body,{className:"p-4",children:[(0,u.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,u.jsxs)("div",{className:"auth-brand",children:[(0,u.jsx)(i.rU,{to:"/",className:"logo logo-dark text-center",children:(0,u.jsx)("span",{className:"logo-lg",children:(0,u.jsx)("img",{src:l,alt:"",height:"22"})})}),(0,u.jsx)(i.rU,{to:"/",className:"logo logo-light text-center",children:(0,u.jsx)("span",{className:"logo-lg",children:(0,u.jsx)("img",{src:d,alt:"",height:"22"})})})]}),(0,u.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),f]})}),n]})})})}),(0,u.jsxs)("footer",{className:"footer footer-alt",children:["2015 - ",(new Date).getFullYear()," \xa9 UBold theme by"," ",(0,u.jsx)(i.rU,{to:"#",className:"text-white-50",children:"Coderthemes"})]})]})}},7571:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(72791),s=n(89743),a=n(2677),o=n(11087),c=n(33168),i=n(60364),l=n(50061),d=n(11234),u=n(80184);const f=()=>(0,u.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[" ",(0,u.jsx)("circle",{className:"path circle",fill:"none",stroke:"#4bd396",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"})," ",(0,u.jsx)("polyline",{className:"path check",fill:"none",stroke:"#4bd396",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})," "]}),m=()=>{const{t:e}=(0,c.$)();return(0,u.jsx)(s.Z,{className:"mt-3",children:(0,u.jsx)(a.Z,{className:"text-center",children:(0,u.jsxs)("p",{className:"text-white-50",children:[e("Back to")," ",(0,u.jsx)(o.rU,{to:"/auth/login",className:"text-white ms-1",children:(0,u.jsx)("b",{children:e("Sign In")})})]})})})},p=()=>{const{t:e}=(0,c.$)(),t=(0,i.I0)();return(0,r.useEffect)((()=>{t((0,l.Li)())}),[t]),(0,r.useEffect)((()=>{t((0,l.TX)())}),[t]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d.Z,{bottomLinks:(0,u.jsx)(m,{}),children:(0,u.jsxs)("div",{className:"text-center",children:[(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("div",{className:"logout-checkmark",children:(0,u.jsx)(f,{})})}),(0,u.jsx)("h3",{children:e("See you again !")}),(0,u.jsxs)("p",{className:"text-muted",children:[" ",e("You are now successfully sign out.")," "]})]})})})}},9140:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(81694),s=n.n(r),a=n(72791),o=n(10162),c=n(66543),i=n(27472),l=n(80184);const d=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,variant:a,as:c="img",...i}=e;const d=(0,o.vE)(n,"card-img");return(0,l.jsx)(c,{ref:t,className:s()(a?`${d}-${a}`:d,r),...i})}));d.displayName="CardImg";const u=d;var f=n(96040);const m=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:c="div",...i}=e;const d=(0,o.vE)(n,"card-header"),u=(0,a.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(f.Z.Provider,{value:u,children:(0,l.jsx)(c,{ref:t,...i,className:s()(r,d)})})}));m.displayName="CardHeader";const p=m,g=(0,i.Z)("h5"),h=(0,i.Z)("h6"),x=(0,c.Z)("card-body"),b=(0,c.Z)("card-title",{Component:g}),v=(0,c.Z)("card-subtitle",{Component:h}),y=(0,c.Z)("card-link",{Component:"a"}),j=(0,c.Z)("card-text",{Component:"p"}),N=(0,c.Z)("card-footer"),w=(0,c.Z)("card-img-overlay"),Z=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,bg:a,text:c,border:i,body:d,children:u,as:f="div",...m}=e;const p=(0,o.vE)(n,"card");return(0,l.jsx)(f,{ref:t,...m,className:s()(r,p,a&&`bg-${a}`,c&&`text-${c}`,i&&`border-${i}`),children:d?(0,l.jsx)(x,{children:u}):u})}));Z.displayName="Card",Z.defaultProps={body:!1};const k=Object.assign(Z,{Img:u,Title:b,Subtitle:v,Body:x,Link:y,Text:j,Header:p,Footer:N,ImgOverlay:w})},96040:(e,t,n)=>{n.d(t,{Z:()=>s});const r=n(72791).createContext(null);r.displayName="CardHeaderContext";const s=r},2677:(e,t,n)=>{n.d(t,{Z:()=>u,r:()=>l});var r=n(81694),s=n.n(r),a=n(72791),o=n(10162),c=n(80184);const i=["xxl","xl","lg","md","sm","xs"];function l(e){let{as:t,bsPrefix:n,className:r,...a}=e;n=(0,o.vE)(n,"col");const c=[],l=[];return i.forEach((e=>{const t=a[e];let r,s,o;delete a[e],"object"===typeof t&&null!=t?({span:r,offset:s,order:o}=t):r=t;const i="xs"!==e?`-${e}`:"";r&&c.push(!0===r?`${n}${i}`:`${n}${i}-${r}`),null!=o&&l.push(`order${i}-${o}`),null!=s&&l.push(`offset${i}-${s}`)})),[{...a,className:s()(r,...c,...l)},{as:t,bsPrefix:n,spans:c}]}const d=a.forwardRef(((e,t)=>{const[{className:n,...r},{as:a="div",bsPrefix:o,spans:i}]=l(e);return(0,c.jsx)(a,{...r,ref:t,className:s()(n,!i.length&&o)})}));d.displayName="Col";const u=d},89743:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81694),s=n.n(r),a=n(72791),o=n(10162),c=n(80184);const i=["xxl","xl","lg","md","sm","xs"],l=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:a="div",...l}=e;const d=(0,o.vE)(n,"row"),u=`${d}-cols`,f=[];return i.forEach((e=>{const t=l[e];let n;delete l[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r="xs"!==e?`-${e}`:"";null!=n&&f.push(`${u}${r}-${n}`)})),(0,c.jsx)(a,{ref:t,...l,className:s()(r,d,...f)})}));l.displayName="Row";const d=l},66543:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81694),s=n.n(r),a=/-(.)/g;var o=n(72791),c=n(10162),i=n(80184);const l=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){let{displayName:t=l(e),Component:n,defaultProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=o.forwardRef(((t,r)=>{let{className:a,bsPrefix:o,as:l=n||"div",...d}=t;const u=(0,c.vE)(o,e);return(0,i.jsx)(l,{ref:r,className:s()(a,u),...d})}));return a.defaultProps=r,a.displayName=t,a}},27472:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(72791),s=n(81694),a=n.n(s),o=n(80184);const c=e=>r.forwardRef(((t,n)=>(0,o.jsx)("div",{...t,ref:n,className:a()(t.className,e)})))},33168:(e,t,n)=>{n.d(t,{$:()=>m});var r=n(70885),s=n(4942),a=n(72791),o=n(74909);function c(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var i={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&i[t[0]]||("string"===typeof t[0]&&(i[t[0]]=new Date),c.apply(void 0,t))}function d(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,s=(0,a.useContext)(o.OO)||{},c=s.i18n,i=s.defaultNS,u=n||c||(0,o.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new o.zv),!u){l("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[m,{},!1];return p.t=m,p.i18n={},p.ready=!1,p}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=f(f(f({},(0,o.JP)()),u.options.react),t),h=g.useSuspense,x=g.keyPrefix,b=e||i||u.options&&u.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(b);var v=(u.isInitialized||u.initializedStoreOnce)&&b.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],s=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||!(!o(r,e)||s&&!o(a,e)))}(e,u,g)}));function y(){return u.getFixedT(null,"fallback"===g.nsMode?b:b[0],x)}var j=(0,a.useState)(y),N=(0,r.Z)(j,2),w=N[0],Z=N[1],k=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function n(){k.current&&Z(y)}return k.current=!0,v||h||d(u,b,(function(){k.current&&Z(y)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){k.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,b.join()]);var C=(0,a.useRef)(!0);(0,a.useEffect)((function(){k.current&&!C.current&&Z(y),C.current=!1}),[u]);var O=[w,u,v];if(O.t=w,O.i18n=u,O.ready=v,v)return O;if(!v&&!h)return O;throw new Promise((function(e){d(u,b,(function(){e()}))}))}},42874:(e,t,n)=>{e.exports=n.p+"static/media/logo-dark.6c014d7473c54530ca01.png"},12007:(e,t,n)=>{e.exports=n.p+"static/media/logo-light.67aedb707107454c963d.png"},30907:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},70885:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(40181);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a,o,c=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(d){l=!0,s=d}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw s}}return c}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(30907);function s(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=7571.e0861903.chunk.js.map