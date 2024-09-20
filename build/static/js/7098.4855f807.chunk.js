"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[7098],{7098:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t(72791),r=t(11087),l=t(9140),o=t(89743),c=t(2677),n=t(42874),d=t(12007),i=t(80184);const x=()=>(0,i.jsxs)("svg",{viewBox:"0 0 600 200",children:[(0,i.jsx)("symbol",{id:"s-text",children:(0,i.jsx)("text",{textAnchor:"middle",x:"50%",y:"50%",dy:".35em",children:"404!"})}),(0,i.jsx)("use",{className:"text",href:"#s-text"}),(0,i.jsx)("use",{className:"text",href:"#s-text"}),(0,i.jsx)("use",{className:"text",href:"#s-text"}),(0,i.jsx)("use",{className:"text",href:"#s-text"}),(0,i.jsx)("use",{className:"text",href:"#s-text"})]}),m=()=>((0,a.useEffect)((()=>(document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern"),document.body&&document.body.classList.add("auth-fluid-pages","pb-0"),()=>{document.body&&document.body.classList.remove("auth-fluid-pages","pb-0")})),[]),(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)("div",{className:"auth-fluid",children:[(0,i.jsx)("div",{className:"auth-fluid-form-box",children:(0,i.jsx)("div",{className:"align-items-center d-flex h-100",children:(0,i.jsxs)(l.Z.Body,{children:[(0,i.jsx)("div",{className:"auth-brand text-center text-lg-start",children:(0,i.jsxs)("div",{className:"auth-logo",children:[(0,i.jsx)(r.rU,{to:"/",className:"logo logo-dark text-center outline-none",children:(0,i.jsx)("span",{className:"logo-lg",children:(0,i.jsx)("img",{src:n,alt:"",height:"22"})})}),(0,i.jsx)(r.rU,{to:"/",className:"logo logo-light text-center",children:(0,i.jsx)("span",{className:"logo-lg",children:(0,i.jsx)("img",{src:d,alt:"",height:"22"})})})]})}),(0,i.jsx)(o.Z,{className:"justify-content-center",children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("div",{className:"error-text-box",children:(0,i.jsx)(x,{})}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h3",{className:"mt-0 mb-2",children:"Whoops! Page not found "}),(0,i.jsx)("p",{className:"text-muted mb-3",children:"It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You might want to check your internet connection. Here's a little tip that might help you get back on track."}),(0,i.jsx)(r.rU,{to:"/",className:"btn btn-success waves-effect waves-light",children:"Back to Dashboard"})]})]})}),(0,i.jsx)("footer",{className:"footer footer-alt",children:(0,i.jsxs)("p",{className:"text-muted",children:["2015 - ",(new Date).getFullYear()," \xa9 UBold theme by"," ",(0,i.jsx)(r.rU,{to:"#",className:"text-muted",children:"Coderthemes"})]})})]})})}),(0,i.jsx)("div",{className:"auth-fluid-right text-center"})]})}))},9140:(e,s,t)=>{t.d(s,{Z:()=>w});var a=t(81694),r=t.n(a),l=t(72791),o=t(10162),c=t(66543),n=t(27472),d=t(80184);const i=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,variant:l,as:c="img",...n}=e;const i=(0,o.vE)(t,"card-img");return(0,d.jsx)(c,{ref:s,className:r()(l?`${i}-${l}`:i,a),...n})}));i.displayName="CardImg";const x=i;var m=t(96040);const h=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:c="div",...n}=e;const i=(0,o.vE)(t,"card-header"),x=(0,l.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,d.jsx)(m.Z.Provider,{value:x,children:(0,d.jsx)(c,{ref:s,...n,className:r()(a,i)})})}));h.displayName="CardHeader";const u=h,f=(0,n.Z)("h5"),p=(0,n.Z)("h6"),g=(0,c.Z)("card-body"),N=(0,c.Z)("card-title",{Component:f}),b=(0,c.Z)("card-subtitle",{Component:p}),j=(0,c.Z)("card-link",{Component:"a"}),v=(0,c.Z)("card-text",{Component:"p"}),y=(0,c.Z)("card-footer"),$=(0,c.Z)("card-img-overlay"),Z=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,bg:l,text:c,border:n,body:i,children:x,as:m="div",...h}=e;const u=(0,o.vE)(t,"card");return(0,d.jsx)(m,{ref:s,...h,className:r()(a,u,l&&`bg-${l}`,c&&`text-${c}`,n&&`border-${n}`),children:i?(0,d.jsx)(g,{children:x}):x})}));Z.displayName="Card",Z.defaultProps={body:!1};const w=Object.assign(Z,{Img:x,Title:N,Subtitle:b,Body:g,Link:j,Text:v,Header:u,Footer:y,ImgOverlay:$})},96040:(e,s,t)=>{t.d(s,{Z:()=>r});const a=t(72791).createContext(null);a.displayName="CardHeaderContext";const r=a},2677:(e,s,t)=>{t.d(s,{Z:()=>x,r:()=>d});var a=t(81694),r=t.n(a),l=t(72791),o=t(10162),c=t(80184);const n=["xxl","xl","lg","md","sm","xs"];function d(e){let{as:s,bsPrefix:t,className:a,...l}=e;t=(0,o.vE)(t,"col");const c=[],d=[];return n.forEach((e=>{const s=l[e];let a,r,o;delete l[e],"object"===typeof s&&null!=s?({span:a,offset:r,order:o}=s):a=s;const n="xs"!==e?`-${e}`:"";a&&c.push(!0===a?`${t}${n}`:`${t}${n}-${a}`),null!=o&&d.push(`order${n}-${o}`),null!=r&&d.push(`offset${n}-${r}`)})),[{...l,className:r()(a,...c,...d)},{as:s,bsPrefix:t,spans:c}]}const i=l.forwardRef(((e,s)=>{const[{className:t,...a},{as:l="div",bsPrefix:o,spans:n}]=d(e);return(0,c.jsx)(l,{...a,ref:s,className:r()(t,!n.length&&o)})}));i.displayName="Col";const x=i},89743:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(81694),r=t.n(a),l=t(72791),o=t(10162),c=t(80184);const n=["xxl","xl","lg","md","sm","xs"],d=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:l="div",...d}=e;const i=(0,o.vE)(t,"row"),x=`${i}-cols`,m=[];return n.forEach((e=>{const s=d[e];let t;delete d[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const a="xs"!==e?`-${e}`:"";null!=t&&m.push(`${x}${a}-${t}`)})),(0,c.jsx)(l,{ref:s,...d,className:r()(a,i,...m)})}));d.displayName="Row";const i=d},66543:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(81694),r=t.n(a),l=/-(.)/g;var o=t(72791),c=t(10162),n=t(80184);const d=e=>{return e[0].toUpperCase()+(s=e,s.replace(l,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function i(e){let{displayName:s=d(e),Component:t,defaultProps:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=o.forwardRef(((s,a)=>{let{className:l,bsPrefix:o,as:d=t||"div",...i}=s;const x=(0,c.vE)(o,e);return(0,n.jsx)(d,{ref:a,className:r()(l,x),...i})}));return l.defaultProps=a,l.displayName=s,l}},27472:(e,s,t)=>{t.d(s,{Z:()=>c});var a=t(72791),r=t(81694),l=t.n(r),o=t(80184);const c=e=>a.forwardRef(((s,t)=>(0,o.jsx)("div",{...s,ref:t,className:l()(s.className,e)})))},42874:(e,s,t)=>{e.exports=t.p+"static/media/logo-dark.6c014d7473c54530ca01.png"},12007:(e,s,t)=>{e.exports=t.p+"static/media/logo-light.67aedb707107454c963d.png"}}]);
//# sourceMappingURL=7098.4855f807.chunk.js.map