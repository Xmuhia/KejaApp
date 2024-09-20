"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[2709],{75058:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var r=a(72791),t=a(11087),l=a(89743),c=a(2677),o=a(9140),n=a(42874),d=a(12007),i=a(80184);const m=()=>(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(l.Z,{className:"justify-content-center",children:(0,i.jsx)(c.Z,{md:8,lg:6,xl:4,children:(0,i.jsx)(o.Z,{className:"bg-pattern",children:(0,i.jsxs)(o.Z.Body,{className:"p-4",children:[(0,i.jsxs)("div",{className:"auth-logo",children:[(0,i.jsx)(t.rU,{to:"/",className:"logo logo-dark text-center",children:(0,i.jsx)("span",{className:"logo-lg",children:(0,i.jsx)("img",{src:n,alt:"",height:"22"})})}),(0,i.jsx)(t.rU,{to:"/",className:"logo logo-light text-center",children:(0,i.jsx)("span",{className:"logo-lg",children:(0,i.jsx)("img",{src:d,alt:"",height:"22"})})})]}),(0,i.jsxs)("div",{className:"text-center mt-4",children:[(0,i.jsx)("h1",{className:"text-error",children:"500"}),(0,i.jsx)("h3",{className:"mt-3 mb-2",children:"Internal Server Error"}),(0,i.jsxs)("p",{className:"text-muted mb-3",children:["Why not try refreshing your page? or you can contact"," ",(0,i.jsx)(t.rU,{to:"#",className:"text-dark",children:(0,i.jsx)("b",{children:"Support"})})]}),(0,i.jsx)(t.rU,{to:"/",className:"btn btn-success waves-effect waves-light",children:"Back to Home"})]})]})})})})})}),(0,i.jsxs)("footer",{className:"footer footer-alt",children:["2015 - ",(new Date).getFullYear()," \xa9 UBold theme by"," ",(0,i.jsx)(t.rU,{to:"#",className:"text-white-50",children:"Coderthemes"})]})]})},9140:(e,s,a)=>{a.d(s,{Z:()=>C});var r=a(81694),t=a.n(r),l=a(72791),c=a(10162),o=a(66543),n=a(27472),d=a(80184);const i=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,variant:l,as:o="img",...n}=e;const i=(0,c.vE)(a,"card-img");return(0,d.jsx)(o,{ref:s,className:t()(l?`${i}-${l}`:i,r),...n})}));i.displayName="CardImg";const m=i;var x=a(96040);const f=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:o="div",...n}=e;const i=(0,c.vE)(a,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,d.jsx)(x.Z.Provider,{value:m,children:(0,d.jsx)(o,{ref:s,...n,className:t()(r,i)})})}));f.displayName="CardHeader";const h=f,p=(0,n.Z)("h5"),u=(0,n.Z)("h6"),N=(0,o.Z)("card-body"),g=(0,o.Z)("card-title",{Component:p}),j=(0,o.Z)("card-subtitle",{Component:u}),v=(0,o.Z)("card-link",{Component:"a"}),b=(0,o.Z)("card-text",{Component:"p"}),y=(0,o.Z)("card-footer"),Z=(0,o.Z)("card-img-overlay"),$=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,bg:l,text:o,border:n,body:i,children:m,as:x="div",...f}=e;const h=(0,c.vE)(a,"card");return(0,d.jsx)(x,{ref:s,...f,className:t()(r,h,l&&`bg-${l}`,o&&`text-${o}`,n&&`border-${n}`),children:i?(0,d.jsx)(N,{children:m}):m})}));$.displayName="Card",$.defaultProps={body:!1};const C=Object.assign($,{Img:m,Title:g,Subtitle:j,Body:N,Link:v,Text:b,Header:h,Footer:y,ImgOverlay:Z})},96040:(e,s,a)=>{a.d(s,{Z:()=>t});const r=a(72791).createContext(null);r.displayName="CardHeaderContext";const t=r},2677:(e,s,a)=>{a.d(s,{Z:()=>m,r:()=>d});var r=a(81694),t=a.n(r),l=a(72791),c=a(10162),o=a(80184);const n=["xxl","xl","lg","md","sm","xs"];function d(e){let{as:s,bsPrefix:a,className:r,...l}=e;a=(0,c.vE)(a,"col");const o=[],d=[];return n.forEach((e=>{const s=l[e];let r,t,c;delete l[e],"object"===typeof s&&null!=s?({span:r,offset:t,order:c}=s):r=s;const n="xs"!==e?`-${e}`:"";r&&o.push(!0===r?`${a}${n}`:`${a}${n}-${r}`),null!=c&&d.push(`order${n}-${c}`),null!=t&&d.push(`offset${n}-${t}`)})),[{...l,className:t()(r,...o,...d)},{as:s,bsPrefix:a,spans:o}]}const i=l.forwardRef(((e,s)=>{const[{className:a,...r},{as:l="div",bsPrefix:c,spans:n}]=d(e);return(0,o.jsx)(l,{...r,ref:s,className:t()(a,!n.length&&c)})}));i.displayName="Col";const m=i},89743:(e,s,a)=>{a.d(s,{Z:()=>i});var r=a(81694),t=a.n(r),l=a(72791),c=a(10162),o=a(80184);const n=["xxl","xl","lg","md","sm","xs"],d=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:l="div",...d}=e;const i=(0,c.vE)(a,"row"),m=`${i}-cols`,x=[];return n.forEach((e=>{const s=d[e];let a;delete d[e],null!=s&&"object"===typeof s?({cols:a}=s):a=s;const r="xs"!==e?`-${e}`:"";null!=a&&x.push(`${m}${r}-${a}`)})),(0,o.jsx)(l,{ref:s,...d,className:t()(r,i,...x)})}));d.displayName="Row";const i=d},66543:(e,s,a)=>{a.d(s,{Z:()=>i});var r=a(81694),t=a.n(r),l=/-(.)/g;var c=a(72791),o=a(10162),n=a(80184);const d=e=>{return e[0].toUpperCase()+(s=e,s.replace(l,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function i(e){let{displayName:s=d(e),Component:a,defaultProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=c.forwardRef(((s,r)=>{let{className:l,bsPrefix:c,as:d=a||"div",...i}=s;const m=(0,o.vE)(c,e);return(0,n.jsx)(d,{ref:r,className:t()(l,m),...i})}));return l.defaultProps=r,l.displayName=s,l}},27472:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(72791),t=a(81694),l=a.n(t),c=a(80184);const o=e=>r.forwardRef(((s,a)=>(0,c.jsx)("div",{...s,ref:a,className:l()(s.className,e)})))},42874:(e,s,a)=>{e.exports=a.p+"static/media/logo-dark.6c014d7473c54530ca01.png"},12007:(e,s,a)=>{e.exports=a.p+"static/media/logo-light.67aedb707107454c963d.png"}}]);
//# sourceMappingURL=2709.924adeb4.chunk.js.map