"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[1222],{75184:(e,t,r)=>{r.d(t,{Z:()=>s});r(72791);var n=r(89743),o=r(2677),a=r(2461),i=r(80184);const s=e=>(0,i.jsx)(n.Z,{children:(0,i.jsx)(o.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(a.Z,{className:"m-0",children:[(0,i.jsx)(a.Z.Item,{href:"/",children:"Keja Plus"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?(0,i.jsx)(a.Z.Item,{active:!0,children:e.label},t):(0,i.jsx)(a.Z.Item,{href:e.path,children:e.label},t)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},82281:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(72791),o=r(63739),a=r(9140),i=r(39135),s=r(43360),l=r(12576),c=r(89743),p=r(2677),d=r(75184),u=r(80184);const f=()=>{const e=(0,u.jsx)(o.Z,{id:"popover-direction",children:(0,u.jsx)(o.Z.Body,{children:"And here's some amazing content. It's very engaging. Right?"})});return(0,u.jsx)(a.Z,{children:(0,u.jsxs)(a.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Popovers"}),(0,u.jsx)("p",{className:"sub-header",children:"Add small overlays of content, like those on the iPad, to any element for housing secondary information."}),([{placement:"top"},{placement:"bottom"},{placement:"right"},{placement:"left"}]||[]).map((e=>(0,u.jsx)(i.Z,{trigger:"click",placement:e.placement,overlay:(0,u.jsx)(o.Z,{popper:!0,id:`popover-positioned-${e.placement}`,children:(0,u.jsx)(o.Z.Body,{children:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."})}),children:(0,u.jsxs)(s.Z,{variant:"light",className:"me-1",children:["Popover on ",e.placement]})},e.placement))),(0,u.jsx)(i.Z,{trigger:"focus",placement:"right",overlay:e,children:(0,u.jsx)(s.Z,{children:"Dismissible popover"})})]})})},m=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Four Directions"}),(0,u.jsx)("p",{className:"text-muted font-14",children:"Four options are available: top, right, bottom, and left aligned."}),([{placement:"top"},{placement:"bottom"},{placement:"right"},{placement:"left"}]||[]).map((e=>(0,u.jsx)(i.Z,{placement:e.placement,overlay:(0,u.jsxs)(l.Z,{id:`tooltip-${e.placement}`,children:["Tooltip on ",(0,u.jsx)("strong",{children:e.placement}),"."]}),children:(0,u.jsxs)(s.Z,{variant:"light",className:"me-1",children:["Tooltip on ",e.placement]})},e.placement)))]}),h=()=>(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(d.Z,{breadCrumbItems:[{label:"Base UI",path:"/ui/tooltips-popovers"},{label:"Tooltips & Popovers",path:"/ui/tooltips-popovers",active:!0}],title:"Tooltips & Popovers"}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(p.Z,{children:(0,u.jsx)(f,{})})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(p.Z,{children:(0,u.jsx)(a.Z,{children:(0,u.jsx)(a.Z.Body,{children:(0,u.jsx)(m,{})})})})})]})},81012:(e,t,r)=>{function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function o(e){let{enabled:t,enableEvents:r,placement:o,flip:a,offset:i,fixed:s,containerPadding:l,arrowElement:c,popperConfig:p={}}=e;var d,u,f,m;const h=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(p.modifiers);return Object.assign({},p,{placement:o,enabled:t,strategy:s?"fixed":p.strategy,modifiers:n(Object.assign({},h,{eventListeners:{enabled:r},preventOverflow:Object.assign({},h.preventOverflow,{options:l?Object.assign({padding:l},null==(d=h.preventOverflow)?void 0:d.options):null==(u=h.preventOverflow)?void 0:u.options}),offset:{options:Object.assign({offset:i},null==(f=h.offset)?void 0:f.options)},arrow:Object.assign({},h.arrow,{enabled:!!c,options:Object.assign({},null==(m=h.arrow)?void 0:m.options,{element:c})}),flip:Object.assign({enabled:!!a},h.flip)}))})}r.d(t,{ZP:()=>o})},49933:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(72791),o=Object.prototype.hasOwnProperty;function a(e,t,r){for(r of e.keys())if(i(r,t))return r}function i(e,t){var r,n,s;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&i(e[n],t[n]););return-1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e){if((s=n)&&"object"===typeof s&&!(s=a(t,s)))return!1;if(!t.has(s))return!1}return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e){if((s=n[0])&&"object"===typeof s&&!(s=a(t,s)))return!1;if(!i(n[1],t.get(s)))return!1}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return-1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}if(!r||"object"===typeof e){for(r in n=0,e){if(o.call(e,r)&&++n&&!o.call(t,r))return!1;if(!(r in t)||!i(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!==e&&t!==t}var s=r(9084);const l=function(e){var t=(0,s.Z)();return[e[0],(0,n.useCallback)((function(r){if(t())return e[1](r)}),[t,e[1]])]};var c=r(78702),p=r(19224),d=r(71217),u=r(95468),f=r(41668),m=r(5934),h=r(60545),v=r(29790);const b=(0,r(40761).kZ)({defaultModifiers:[f.Z,h.Z,p.Z,d.Z,m.Z,u.Z,v.Z,c.Z]}),g=["enabled","placement","strategy","modifiers"];const y={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},j={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:e=>{let{state:t}=e;return()=>{const{reference:e,popper:r}=t.elements;if("removeAttribute"in e){const t=(e.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==r.id));t.length?e.setAttribute("aria-describedby",t.join(",")):e.removeAttribute("aria-describedby")}}},fn:e=>{let{state:t}=e;var r;const{popper:n,reference:o}=t.elements,a=null==(r=n.getAttribute("role"))?void 0:r.toLowerCase();if(n.id&&"tooltip"===a&&"setAttribute"in o){const e=o.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;o.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},x=[];const Z=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{enabled:o=!0,placement:a="bottom",strategy:s="absolute",modifiers:c=x}=r,p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,g);const d=(0,n.useRef)(c),u=(0,n.useRef)(),f=(0,n.useCallback)((()=>{var e;null==(e=u.current)||e.update()}),[]),m=(0,n.useCallback)((()=>{var e;null==(e=u.current)||e.forceUpdate()}),[]),[h,v]=l((0,n.useState)({placement:a,update:f,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),Z=(0,n.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:e=>{let{state:t}=e;const r={},n={};Object.keys(t.elements).forEach((e=>{r[e]=t.styles[e],n[e]=t.attributes[e]})),v({state:t,styles:r,attributes:n,update:f,forceUpdate:m,placement:t.placement})}})),[f,m,v]),w=(0,n.useMemo)((()=>(i(d.current,c)||(d.current=c),d.current)),[c]);return(0,n.useEffect)((()=>{u.current&&o&&u.current.setOptions({placement:a,strategy:s,modifiers:[...w,Z,y]})}),[s,a,Z,o,w]),(0,n.useEffect)((()=>{if(o&&null!=e&&null!=t)return u.current=b(e,t,Object.assign({},p,{placement:a,strategy:s,modifiers:[...w,j,Z]})),()=>{null!=u.current&&(u.current.destroy(),u.current=void 0,v((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[o,e,t]),h}},66595:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(53189),o=r(92899),a=r(78376),i=r(72791),s=r(22519),l=r(42391),c=r.n(l);const p=27,d=()=>{};const u=e=>e&&("current"in e?e.current:e);const f=function(e,t){let{disabled:r,clickTrigger:l="click"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const f=(0,i.useRef)(!1),m=t||d,h=(0,i.useCallback)((t=>{const r=u(e);var o;c()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),f.current=!r||!!((o=t).metaKey||o.altKey||o.ctrlKey||o.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,n.Z)(r,t.target)}),[e]),v=(0,s.Z)((e=>{f.current||m(e)})),b=(0,s.Z)((e=>{e.keyCode===p&&m(e)}));(0,i.useEffect)((()=>{if(r||null==e)return;let t=window.event;const n=(0,a.Z)(u(e)),i=(0,o.Z)(n,l,h,!0),s=(0,o.Z)(n,l,(e=>{e!==t?v(e):t=void 0})),c=(0,o.Z)(n,"keyup",(e=>{e!==t?b(e):t=void 0}));let p=[];return"ontouchstart"in n.documentElement&&(p=[].slice.call(n.body.children).map((e=>(0,o.Z)(e,"mousemove",d)))),()=>{i(),s(),c(),p.forEach((e=>e()))}}),[e,r,l,h,v,b])}},92176:e=>{e.exports=function(e,t,r,n,o,a,i,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,a,i,s],p=0;(l=new Error(t.replace(/%s/g,(function(){return c[p++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},43360:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(81694),o=r.n(n),a=r(72791),i=r(15341),s=r(10162),l=r(80184);const c=a.forwardRef(((e,t)=>{let{as:r,bsPrefix:n,variant:a,size:c,active:p,className:d,...u}=e;const f=(0,s.vE)(n,"btn"),[m,{tagName:h}]=(0,i.FT)({tagName:r,...u}),v=h;return(0,l.jsx)(v,{...u,...m,ref:t,className:o()(d,f,p&&"active",a&&`${f}-${a}`,c&&`${f}-${c}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1};const p=c},9140:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(81694),o=r.n(n),a=r(72791),i=r(10162),s=r(66543),l=r(27472),c=r(80184);const p=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,variant:a,as:s="img",...l}=e;const p=(0,i.vE)(r,"card-img");return(0,c.jsx)(s,{ref:t,className:o()(a?`${p}-${a}`:p,n),...l})}));p.displayName="CardImg";const d=p;var u=r(96040);const f=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...l}=e;const p=(0,i.vE)(r,"card-header"),d=(0,a.useMemo)((()=>({cardHeaderBsPrefix:p})),[p]);return(0,c.jsx)(u.Z.Provider,{value:d,children:(0,c.jsx)(s,{ref:t,...l,className:o()(n,p)})})}));f.displayName="CardHeader";const m=f,h=(0,l.Z)("h5"),v=(0,l.Z)("h6"),b=(0,s.Z)("card-body"),g=(0,s.Z)("card-title",{Component:h}),y=(0,s.Z)("card-subtitle",{Component:v}),j=(0,s.Z)("card-link",{Component:"a"}),x=(0,s.Z)("card-text",{Component:"p"}),Z=(0,s.Z)("card-footer"),w=(0,s.Z)("card-img-overlay"),N=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,bg:a,text:s,border:l,body:p,children:d,as:u="div",...f}=e;const m=(0,i.vE)(r,"card");return(0,c.jsx)(u,{ref:t,...f,className:o()(n,m,a&&`bg-${a}`,s&&`text-${s}`,l&&`border-${l}`),children:p?(0,c.jsx)(b,{children:d}):d})}));N.displayName="Card",N.defaultProps={body:!1};const P=Object.assign(N,{Img:d,Title:g,Subtitle:y,Body:b,Link:j,Text:x,Header:m,Footer:Z,ImgOverlay:w})},96040:(e,t,r)=>{r.d(t,{Z:()=>o});const n=r(72791).createContext(null);n.displayName="CardHeaderContext";const o=n},66543:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(81694),o=r.n(n),a=/-(.)/g;var i=r(72791),s=r(10162),l=r(80184);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e){let{displayName:t=c(e),Component:r,defaultProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=i.forwardRef(((t,n)=>{let{className:a,bsPrefix:i,as:c=r||"div",...p}=t;const d=(0,s.vE)(i,e);return(0,l.jsx)(c,{ref:n,className:o()(a,d),...p})}));return a.defaultProps=n,a.displayName=t,a}},27472:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(72791),o=r(81694),a=r.n(o),i=r(80184);const s=e=>n.forwardRef(((t,r)=>(0,i.jsx)("div",{...t,ref:r,className:a()(t.className,e)})))},23688:(e,t,r)=>{function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!==r&&void 0!==r?r:null}.bind(this))}function a(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var r=null,i=null,s=null;if("function"===typeof t.componentWillMount?r="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==r||null!==i||null!==s){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;p.call(this,e,t,n)}}return e}r.r(t),r.d(t,{polyfill:()=>i}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},32592:(e,t,r)=>{r.d(t,{Ch:()=>c,$c:()=>l});var n=r(87462),o=r(63366),a=r(72791);r(92176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function l(e,t,r){var n=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),i=o[0],s=o[1],l=void 0!==e,c=n.current;return n.current=l,!l&&c&&i!==t&&s(t),[l?e:i,(0,a.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];r&&r.apply(void 0,[e].concat(n)),s(e)}),[r])]}function c(e,t){return Object.keys(t).reduce((function(r,a){var c,p=r,d=p[i(a)],u=p[a],f=(0,o.Z)(p,[i(a),a].map(s)),m=t[a],h=l(u,d,e[m]),v=h[0],b=h[1];return(0,n.Z)({},f,((c={})[a]=v,c[m]=b,c))}),e)}r(23688)}}]);
//# sourceMappingURL=1222.077cbbaf.chunk.js.map