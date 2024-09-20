"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[8976,1798,6148],{47904:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791);const o=function(e){var n=(0,r.useRef)(e);return(0,r.useEffect)((function(){n.current=e}),[e]),n}},39007:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(72791),o=t(47904);function a(e){var n=(0,o.Z)(e);return(0,r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},56236:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(72791),o=(t(66068),t(79096),t(22519));t(36656),t(92444);t(9084),t(37215);var a="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||a?r.useLayoutEffect:r.useEffect;new WeakMap;var i=t(15341),s=t(80184);const c=["onKeyDown"];const l=r.forwardRef(((e,n)=>{let{onKeyDown:t}=e,r=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,c);const[a]=(0,i.FT)(Object.assign({tagName:"a"},r)),l=(0,o.Z)((e=>{a.onKeyDown(e),null==t||t(e)}));return((u=r.href)&&"#"!==u.trim()||r.role)&&"button"!==r.role?(0,s.jsx)("a",Object.assign({ref:n},r,{onKeyDown:t})):(0,s.jsx)("a",Object.assign({ref:n},r,a,{onKeyDown:l}));var u}));l.displayName="Anchor";const u=l},15341:(e,n,t)=>{t.d(n,{FT:()=>i,ZP:()=>c});var r=t(72791),o=t(80184);const a=["as","disabled"];function i(e){let{tagName:n,disabled:t,href:r,target:o,rel:a,onClick:i,tabIndex:s=0,type:c}=e;n||(n=null!=r||null!=o||null!=a?"a":"button");const l={tagName:n};if("button"===n)return[{type:c||"button",disabled:t},l];const u=e=>{(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===n&&t?void 0:r,target:"a"===n?o:void 0,"aria-disabled":t||void 0,rel:"a"===n?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},l]}const s=r.forwardRef(((e,n)=>{let{as:t,disabled:r}=e,s=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);const[c,{tagName:l}]=i(Object.assign({tagName:t,disabled:r},s));return(0,o.jsx)(l,Object.assign({},s,c,{ref:n}))}));s.displayName="Button";const c=s},66068:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791);function o(){return(0,r.useState)(null)}},79096:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791);const o=function(e){var n=(0,r.useRef)(e);return(0,r.useEffect)((function(){n.current=e}),[e]),n}},22519:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(72791),o=t(79096);function a(e){var n=(0,o.Z)(e);return(0,r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},36656:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(72791),o=t(22519);function a(e,n,t,a){void 0===a&&(a=!1);var i=(0,o.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof e?e():e;return t.addEventListener(n,i,a),function(){return t.removeEventListener(n,i,a)}}),[e])}},92444:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(36656),o=t(72791);function a(e,n,t){void 0===t&&(t=!1);var a=(0,o.useCallback)((function(){return document}),[]);return(0,r.Z)(a,e,n,t)}},9084:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791);function o(){var e=(0,r.useRef)(!0),n=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}},37215:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791);function o(e){var n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current=e})),n.current}},92176:e=>{e.exports=function(e,n,t,r,o,a,i,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,a,i,s],u=0;(c=new Error(n.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},2469:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(81694),o=t.n(r),a=t(72791),i=t(32592),s=t(39007),c=t(56236),l=t(10162),u=t(72709),f=t(80473),d=t(27472),p=t(66543),v=t(80184);const m=(0,d.Z)("h4");m.displayName="DivStyledAsH4";const y=(0,p.Z)("alert-heading",{Component:m}),g=(0,p.Z)("alert-link",{Component:c.Z}),b={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},h=a.forwardRef(((e,n)=>{const{bsPrefix:t,show:r,closeLabel:a,closeVariant:c,className:d,children:p,variant:m,onClose:y,dismissible:g,transition:b,...h}=(0,i.Ch)(e,{show:"onClose"}),w=(0,l.vE)(t,"alert"),N=(0,s.Z)((e=>{y&&y(!1,e)})),Z=!0===b?u.Z:b,x=(0,v.jsxs)("div",{role:"alert",...Z?void 0:h,ref:n,className:o()(d,w,m&&`${w}-${m}`,g&&`${w}-dismissible`),children:[g&&(0,v.jsx)(f.Z,{onClick:N,"aria-label":a,variant:c}),p]});return Z?(0,v.jsx)(Z,{unmountOnExit:!0,...h,ref:void 0,in:r,children:x}):r?x:null}));h.displayName="Alert",h.defaultProps=b;const w=Object.assign(h,{Link:g,Heading:y})},43360:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81694),o=t.n(r),a=t(72791),i=t(15341),s=t(10162),c=t(80184);const l=a.forwardRef(((e,n)=>{let{as:t,bsPrefix:r,variant:a,size:l,active:u,className:f,...d}=e;const p=(0,s.vE)(r,"btn"),[v,{tagName:m}]=(0,i.FT)({tagName:t,...d}),y=m;return(0,c.jsx)(y,{...d,...v,ref:n,className:o()(f,p,u&&"active",a&&`${p}-${a}`,l&&`${p}-${l}`,d.href&&d.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1};const u=l},9140:(e,n,t)=>{t.d(n,{Z:()=>P});var r=t(81694),o=t.n(r),a=t(72791),i=t(10162),s=t(66543),c=t(27472),l=t(80184);const u=a.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,variant:a,as:s="img",...c}=e;const u=(0,i.vE)(t,"card-img");return(0,l.jsx)(s,{ref:n,className:o()(a?`${u}-${a}`:u,r),...c})}));u.displayName="CardImg";const f=u;var d=t(96040);const p=a.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:s="div",...c}=e;const u=(0,i.vE)(t,"card-header"),f=(0,a.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,l.jsx)(d.Z.Provider,{value:f,children:(0,l.jsx)(s,{ref:n,...c,className:o()(r,u)})})}));p.displayName="CardHeader";const v=p,m=(0,c.Z)("h5"),y=(0,c.Z)("h6"),g=(0,s.Z)("card-body"),b=(0,s.Z)("card-title",{Component:m}),h=(0,s.Z)("card-subtitle",{Component:y}),w=(0,s.Z)("card-link",{Component:"a"}),N=(0,s.Z)("card-text",{Component:"p"}),Z=(0,s.Z)("card-footer"),x=(0,s.Z)("card-img-overlay"),j=a.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,bg:a,text:s,border:c,body:u,children:f,as:d="div",...p}=e;const v=(0,i.vE)(t,"card");return(0,l.jsx)(d,{ref:n,...p,className:o()(r,v,a&&`bg-${a}`,s&&`text-${s}`,c&&`border-${c}`),children:u?(0,l.jsx)(g,{children:f}):f})}));j.displayName="Card",j.defaultProps={body:!1};const P=Object.assign(j,{Img:f,Title:b,Subtitle:h,Body:g,Link:w,Text:N,Header:v,Footer:Z,ImgOverlay:x})},80473:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(52007),o=t.n(r),a=t(72791),i=t(81694),s=t.n(i),c=t(80184);const l={"aria-label":o().string,onClick:o().func,variant:o().oneOf(["white"])},u=a.forwardRef(((e,n)=>{let{className:t,variant:r,...o}=e;return(0,c.jsx)("button",{ref:n,type:"button",className:s()("btn-close",r&&`btn-close-${r}`,t),...o})}));u.displayName="CloseButton",u.propTypes=l,u.defaultProps={"aria-label":"Close"};const f=u},2677:(e,n,t)=>{t.d(n,{Z:()=>f,r:()=>l});var r=t(81694),o=t.n(r),a=t(72791),i=t(10162),s=t(80184);const c=["xxl","xl","lg","md","sm","xs"];function l(e){let{as:n,bsPrefix:t,className:r,...a}=e;t=(0,i.vE)(t,"col");const s=[],l=[];return c.forEach((e=>{const n=a[e];let r,o,i;delete a[e],"object"===typeof n&&null!=n?({span:r,offset:o,order:i}=n):r=n;const c="xs"!==e?`-${e}`:"";r&&s.push(!0===r?`${t}${c}`:`${t}${c}-${r}`),null!=i&&l.push(`order${c}-${i}`),null!=o&&l.push(`offset${c}-${o}`)})),[{...a,className:o()(r,...s,...l)},{as:n,bsPrefix:t,spans:s}]}const u=a.forwardRef(((e,n)=>{const[{className:t,...r},{as:a="div",bsPrefix:i,spans:c}]=l(e);return(0,s.jsx)(a,{...r,ref:n,className:o()(t,!c.length&&i)})}));u.displayName="Col";const f=u},72709:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81694),o=t.n(r),a=t(72791),i=t(27726),s=t(71380),c=t(67202),l=t(85007),u=t(80184);const f={[i.d0]:"show",[i.cn]:"show"},d=a.forwardRef(((e,n)=>{let{className:t,children:r,transitionClasses:i={},...d}=e;const p=(0,a.useCallback)(((e,n)=>{(0,c.Z)(e),null==d.onEnter||d.onEnter(e,n)}),[d]);return(0,u.jsx)(l.Z,{ref:n,addEndListener:s.Z,...d,onEnter:p,childRef:r.ref,children:(e,n)=>a.cloneElement(r,{...n,className:o()("fade",t,r.props.className,f[e],i[e])})})}));d.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},d.displayName="Fade";const p=d},66543:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81694),o=t.n(r),a=/-(.)/g;var i=t(72791),s=t(10162),c=t(80184);const l=e=>{return e[0].toUpperCase()+(n=e,n.replace(a,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function u(e){let{displayName:n=l(e),Component:t,defaultProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=i.forwardRef(((n,r)=>{let{className:a,bsPrefix:i,as:l=t||"div",...u}=n;const f=(0,s.vE)(i,e);return(0,c.jsx)(l,{ref:r,className:o()(a,f),...u})}));return a.defaultProps=r,a.displayName=n,a}},27472:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(72791),o=t(81694),a=t.n(o),i=t(80184);const s=e=>r.forwardRef(((n,t)=>(0,i.jsx)("div",{...n,ref:t,className:a()(n.className,e)})))},33168:(e,n,t)=>{t.d(n,{$:()=>p});var r=t(70885),o=t(4942),a=t(72791),i=t(74909);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),s.apply(void 0,n))}function u(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,o=(0,a.useContext)(i.OO)||{},s=o.i18n,c=o.defaultNS,f=t||s||(0,i.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new i.zv),!f){l("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},v=[p,{},!1];return v.t=p,v.i18n={},v.ready=!1,v}f.options.react&&void 0!==f.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=d(d(d({},(0,i.JP)()),f.options.react),n),y=m.useSuspense,g=m.keyPrefix,b=e||c||f.options&&f.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(b);var h=(f.isInitialized||f.initializedStoreOnce)&&b.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return l("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!n.services.backendConnector.backend||!(!i(r,e)||o&&!i(a,e)))}(e,f,m)}));function w(){return f.getFixedT(null,"fallback"===m.nsMode?b:b[0],g)}var N=(0,a.useState)(w),Z=(0,r.Z)(N,2),x=Z[0],j=Z[1],P=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){P.current&&j(w)}return P.current=!0,h||y||u(f,b,(function(){P.current&&j(w)})),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){P.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,b.join()]);var C=(0,a.useRef)(!0);(0,a.useEffect)((function(){P.current&&!C.current&&j(w),C.current=!1}),[f]);var E=[x,f,h];if(E.t=x,E.i18n=f,E.ready=h,h)return E;if(!h&&!y)return E;throw new Promise((function(e){u(f,b,(function(){e()}))}))}},23688:(e,n,t)=>{function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function a(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}function i(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof n.getSnapshotBeforeUpdate)return e;var t=null,i=null,s=null;if("function"===typeof n.componentWillMount?t="componentWillMount":"function"===typeof n.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof n.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof n.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof n.componentWillUpdate?s="componentWillUpdate":"function"===typeof n.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==t||null!==i||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(n.componentWillMount=r,n.componentWillReceiveProps=o),"function"===typeof n.getSnapshotBeforeUpdate){if("function"!==typeof n.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");n.componentWillUpdate=a;var u=n.componentDidUpdate;n.componentDidUpdate=function(e,n,t){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,n,r)}}return e}t.r(n),t.d(n,{polyfill:()=>i}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},32592:(e,n,t)=>{t.d(n,{Ch:()=>l,$c:()=>c});var r=t(87462),o=t(63366),a=t(72791);t(92176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n,t){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(n),i=o[0],s=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&i!==n&&s(n),[c?e:i,(0,a.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}function l(e,n){return Object.keys(n).reduce((function(t,a){var l,u=t,f=u[i(a)],d=u[a],p=(0,o.Z)(u,[i(a),a].map(s)),v=n[a],m=c(d,f,e[v]),y=m[0],g=m[1];return(0,r.Z)({},p,((l={})[a]=y,l[v]=g,l))}),e)}t(23688)},42391:e=>{var n=function(){};e.exports=n},30907:(e,n,t)=>{function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:()=>r})},70885:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(40181);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,s=[],c=!0,l=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(30907);function o(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=8976.9012d0f2.chunk.js.map