(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[3177],{8851:(e,s,a)=>{"use strict";a.d(s,{Z:()=>p});var t=a(72791),r=a(11087),l=a(9140),n=a(89743),o=a(2677),i=a(57831),c=a(80184);const d=e=>{const[s,a]=(0,t.useState)([]),d=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=s<0?0:s,t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.ZP,{...e,onDrop:t=>(t=>{var r=t;e.showPreview&&((t||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:d(e.size)}))),(r=[...s]).push(...t),a(r)),e.onFileUpload&&e.onFileUpload(r)})(t),children:e=>{let{getRootProps:s,getInputProps:a}=e;return(0,c.jsx)("div",{className:"dropzone",children:(0,c.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,c.jsx)("input",{...a()}),(0,c.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,c.jsx)("h4",{children:"Drop files here or click to upload."}),(0,c.jsxs)("span",{className:"text-muted font-13",children:["(This is just a demo dropzone. Selected files are"," ",(0,c.jsx)("strong",{children:"not"})," actually uploaded.)"]})]})})}}),e.showPreview&&(0,c.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((t,i)=>(0,c.jsx)(l.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,c.jsx)("div",{className:"p-2",children:(0,c.jsxs)(n.Z,{className:"align-items-center",children:[t.preview&&(0,c.jsx)(o.Z,{className:"col-auto",children:(0,c.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:t.name,src:t.preview})}),!t.preview&&(0,c.jsx)(o.Z,{className:"col-auto",children:(0,c.jsx)("div",{className:"avatar-sm",children:(0,c.jsx)("span",{className:"avatar-title bg-primary rounded",children:t.type.split("/")[0]})})}),(0,c.jsxs)(o.Z,{className:"ps-0",children:[(0,c.jsx)(r.rU,{to:"#",className:"text-muted fw-bold",children:t.name}),(0,c.jsx)("p",{className:"mb-0",children:(0,c.jsx)("strong",{children:t.formattedSize})})]}),(0,c.jsx)(o.Z,{className:"text-end",children:(0,c.jsx)(r.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,c.jsx)("i",{className:"dripicons-cross",onClick:()=>(t=>{const r=[...s];r.splice(t,1),a(r),e.onFileUpload&&e.onFileUpload(r)})(i)})})})]})})},i+"-file")))})]})};d.defaultProps={showPreview:!0};const p=d},75184:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});a(72791);var t=a(89743),r=a(2677),l=a(2461),n=a(80184);const o=e=>(0,n.jsx)(t.Z,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(l.Z,{className:"m-0",children:[(0,n.jsx)(l.Z.Item,{href:"/",children:"Keja Plus"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,n.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,n.jsx)(l.Z.Item,{href:e.path,children:e.label},s)))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})},84222:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var t=a(72791),r=a(89743),l=a(2677),n=a(9140),o=a(75184),i=a(8851),c=a(80184);const d=()=>(0,c.jsxs)(t.Fragment,{children:[(0,c.jsx)(o.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"Form Upload",path:"/forms/upload",active:!0}],title:"Form Upload"}),(0,c.jsx)(r.Z,{children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(n.Z,{children:(0,c.jsxs)(n.Z.Body,{children:[(0,c.jsx)("h4",{className:"header-title mb-3",children:"Dropzone File Upload"}),(0,c.jsx)("p",{className:"text-muted font-13 m-b-30",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),(0,c.jsx)(i.Z,{onFileUpload:e=>{console.log("Uploaded files - ",e)}})]})})})})]})},80888:(e,s,a)=>{"use strict";var t=a(79047);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,s,a,r,l,n){if(n!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function s(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},52007:(e,s,a)=>{e.exports=a(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},96040:(e,s,a)=>{"use strict";a.d(s,{Z:()=>r});const t=a(72791).createContext(null);t.displayName="CardHeaderContext";const r=t},66543:(e,s,a)=>{"use strict";a.d(s,{Z:()=>d});var t=a(81694),r=a.n(t),l=/-(.)/g;var n=a(72791),o=a(10162),i=a(80184);const c=e=>{return e[0].toUpperCase()+(s=e,s.replace(l,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function d(e){let{displayName:s=c(e),Component:a,defaultProps:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=n.forwardRef(((s,t)=>{let{className:l,bsPrefix:n,as:c=a||"div",...d}=s;const p=(0,o.vE)(n,e);return(0,i.jsx)(c,{ref:t,className:r()(l,p),...d})}));return l.defaultProps=t,l.displayName=s,l}}}]);
//# sourceMappingURL=3177.ba96c6ac.chunk.js.map