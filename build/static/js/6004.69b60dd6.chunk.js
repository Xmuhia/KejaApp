"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[6004],{38459:(e,s,a)=>{a.d(s,{y:()=>h,J:()=>n});var r=a(72791),t=a(87705),l=a(80184);const n=e=>{let{defaultValues:s,resolver:a,children:n,onSubmit:c,formClass:o}=e;const i=(0,t.cI)({defaultValues:s,resolver:a}),{handleSubmit:d,register:m,control:h,formState:{errors:u}}=i;return(0,l.jsx)("form",{onSubmit:d(c),className:o,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:u,control:h}}):e)):n})};var c=a(99410),o=a(21827),i=a(81694),d=a.n(i);const m=e=>{let{name:s,placeholder:a,refCallback:t,errors:n,control:i,register:m,className:h}=e;const[u,x]=(0,r.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z,{className:"mb-0",children:[(0,l.jsx)(o.Z.Control,{type:u?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{t&&t(e)},className:h,isInvalid:!(!n||!n[s]),...m?m(s):{},autoComplete:s}),(0,l.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{x(!u)}})})]})})},h=e=>{let{label:s,type:a,name:r,placeholder:t,register:n,errors:c,control:i,className:d,labelClassName:h,containerClass:u,refCallback:x,children:p,rows:j,...g}=e;const b="textarea"===a?"textarea":"select"===a?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===a?(0,l.jsx)("input",{type:a,name:r,...n?n(r):{},...g}):(0,l.jsx)(l.Fragment,{children:"password"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z.Group,{className:u,children:[s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(o.Z.Label,{className:h,children:s})," ",p," "]}):null,(0,l.jsx)(m,{name:r,placeholder:t,refCallback:x,errors:c,register:n,className:d}),c&&c[r]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:c[r].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===a||"radio"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z.Group,{className:u,children:[(0,l.jsx)(o.Z.Check,{type:a,label:s,name:r,id:r,ref:e=>{x&&x(e)},className:d,isInvalid:!(!c||!c[r]),...n?n(r):{},...g}),c&&c[r]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[r].message}):null]})}):(0,l.jsxs)(o.Z.Group,{className:u,children:[s?(0,l.jsx)(o.Z.Label,{className:h,children:s}):null,(0,l.jsx)(o.Z.Control,{type:a,placeholder:t,name:r,id:r,as:b,ref:e=>{x&&x(e)},className:d,isInvalid:!(!c||!c[r]),...n?n(r):{},rows:j,...g,autoComplete:r,children:p||null}),c&&c[r]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[r].message}):null]})})})})}},11234:(e,s,a)=>{a.d(s,{Z:()=>h});var r=a(72791),t=a(47022),l=a(89743),n=a(2677),c=a(9140),o=a(11087),i=a(42874),d=a(12007),m=a(80184);const h=e=>{let{helpText:s,bottomLinks:a,children:h,isCombineForm:u}=e;return(0,r.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,m.jsx)(t.Z,{children:(0,m.jsx)(l.Z,{className:"justify-content-center",children:(0,m.jsxs)(n.Z,{md:8,lg:6,xl:u?9:4,children:[(0,m.jsx)(c.Z,{className:"bg-pattern",children:(0,m.jsxs)(c.Z.Body,{className:"p-4",children:[(0,m.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,m.jsxs)("div",{className:"auth-brand",children:[(0,m.jsx)(o.rU,{to:"/",className:"logo logo-dark text-center",children:(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:i,alt:"",height:"22"})})}),(0,m.jsx)(o.rU,{to:"/",className:"logo logo-light text-center",children:(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:d,alt:"",height:"22"})})})]}),(0,m.jsx)("p",{className:"text-muted mb-4 mt-3",children:s})]}),h]})}),a]})})})}),(0,m.jsxs)("footer",{className:"footer footer-alt",children:["2015 - ",(new Date).getFullYear()," \xa9 UBold theme by"," ",(0,m.jsx)(o.rU,{to:"#",className:"text-white-50",children:"Coderthemes"})]})]})}},16004:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var r=a(72791),t=a(89743),l=a(2677),n=a(2469),c=a(43360),o=a(11087),i=a(81724),d=a(61265),m=a(33168),h=a(60364),u=a(50061),x=a(38459),p=a(11234),j=a(80184);const g=()=>{const{t:e}=(0,m.$)();return(0,j.jsx)(t.Z,{className:"mt-3",children:(0,j.jsx)(l.Z,{className:"text-center",children:(0,j.jsxs)("p",{className:"text-white-50",children:[e("Back to")," ",(0,j.jsx)(o.rU,{to:"/auth/login",className:"text-white ms-1",children:(0,j.jsx)("b",{children:e("Log in")})})]})})})},b=()=>{const e=(0,h.I0)(),{t:s}=(0,m.$)();(0,r.useEffect)((()=>{e((0,u.Li)())}),[e]);const{loading:a,passwordReset:t,resetPasswordSuccess:l,error:o}=(0,h.v9)((e=>({loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,passwordReset:e.Auth.passwordReset,resetPasswordSuccess:e.Auth.resetPasswordSuccess}))),b=(0,d.X)(i.Ry().shape({username:i.Z_().required(s("Please enter Username"))}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(p.Z,{helpText:s("Enter your email address and we'll send you an email with instructions to reset your password."),bottomLinks:(0,j.jsx)(g,{}),children:[l&&(0,j.jsx)(n.Z,{variant:"success",children:l.message}),o&&(0,j.jsx)(n.Z,{variant:"danger",className:"my-2",children:o}),!t&&(0,j.jsxs)(x.J,{onSubmit:s=>{e((0,u.gF)(s.username))},resolver:b,children:[(0,j.jsx)(x.y,{label:s("Username"),type:"text",name:"username",placeholder:s("Enter your username"),containerClass:"mb-3"}),(0,j.jsx)("div",{className:"d-grid text-center",children:(0,j.jsx)(c.Z,{variant:"primary",type:"submit",disabled:a,children:s("Reset Password")})})]})]})})}},42874:(e,s,a)=>{e.exports=a.p+"static/media/logo-dark.6c014d7473c54530ca01.png"},12007:(e,s,a)=>{e.exports=a.p+"static/media/logo-light.67aedb707107454c963d.png"}}]);
//# sourceMappingURL=6004.69b60dd6.chunk.js.map