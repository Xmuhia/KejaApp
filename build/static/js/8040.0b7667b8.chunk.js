"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[8040],{33976:(e,t,a)=>{a.d(t,{Z:()=>x});var s=a(72791),n=a(59513),r=a.n(n),i=a(81694),l=a.n(i),c=(a(68639),a(80184));const d=(0,s.forwardRef)(((e,t)=>(0,c.jsx)("input",{type:"text",className:l()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:()=>{console.log("date value changed")},ref:t}))),o=(0,s.forwardRef)(((e,t)=>(0,c.jsxs)("div",{className:"input-group input-group-sm",ref:t,children:[(0,c.jsx)("input",{type:"text",className:l()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),(0,c.jsx)("span",{className:"input-group-text bg-blue border-blue text-white",children:(0,c.jsx)("i",{className:"mdi mdi-calendar-range"})})]}))),x=e=>{var t,a;const s=!0===(e.hideAddon||!1)?(0,c.jsx)(d,{inputClass:e.inputClass,value:null===(t=e.value)||void 0===t?void 0:t.toDateString()}):(0,c.jsx)(o,{inputClass:e.inputClass,value:null===(a=e.value)||void 0===a?void 0:a.toDateString()});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r(),{customInput:s,timeIntervals:e.tI,selected:e.value,value:e.value.toDateString(),onChange:t=>e.onChange(t),showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},38359:(e,t,a)=>{a.d(t,{Z:()=>o});a(72791);var s=a(9140),n=a(89743),r=a(2677),i=a(81694),l=a.n(i),c=a(40835),d=a(80184);const o=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Z,{className:"widget-rounded-circle",children:(0,d.jsx)(s.Z.Body,{children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(r.Z,{className:"col-6",children:(0,d.jsx)("div",{className:l()("avatar-lg","rounded-circle","bg-soft-"+e.variant,"border-"+e.variant,"border"),children:(0,d.jsx)("i",{className:l()(e.icon,"avatar-title","font-22","text-"+e.variant)})})}),(0,d.jsx)(r.Z,{className:"col-6",children:(0,d.jsxs)("div",{className:"text-end",children:[(0,d.jsx)("h3",{className:"text-dark mt-1",children:(0,d.jsx)("span",{children:(0,d.jsx)(c.ZP,{duration:1,end:e.stats,...e.counterOptions})})}),(0,d.jsx)("p",{className:"text-muted mb-1 text-truncate",children:e.description})]})})]})})})})},68040:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var s=a(72791),n=a(89743),r=a(2677),i=a(33976),l=a(38359),c=a(80184);const d=()=>(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(r.Z,{md:6,xl:3,children:(0,c.jsx)(l.Z,{variant:"primary",counterOptions:{prefix:"$"},description:"Total Rent Collected",stats:"58947",icon:"fe-dollar-sign"})}),(0,c.jsx)(r.Z,{md:6,xl:3,children:(0,c.jsx)(l.Z,{variant:"success",description:"Occupancy Rate",stats:"94.5",counterOptions:{suffix:"%",decimals:1},icon:"fe-home"})}),(0,c.jsx)(r.Z,{md:6,xl:3,children:(0,c.jsx)(l.Z,{variant:"info",description:"Maintenance Requests",stats:"28",icon:"fe-tool"})}),(0,c.jsx)(r.Z,{md:6,xl:3,children:(0,c.jsx)(l.Z,{variant:"warning",description:"Property Value",stats:"5.2",counterOptions:{prefix:"$",suffix:"M",decimals:1},icon:"fe-trending-up"})})]});var o=a(9140),x=a(55353),m=a(13496),h=a(7111);const j=()=>{const e=5e4,t=42500,a=7500,s=85,i={chart:{height:242,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"65%"},dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Collected",formatter:function(e){return s.toFixed(1)+"%"}}}}},colors:["#1abc9c"],labels:["Rent Collection"]},l=[s];return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)(x.Z,{className:"float-end",align:"end",children:[(0,c.jsx)(x.Z.Toggle,{as:"a",className:"cursor-pointer card-drop",children:(0,c.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,c.jsxs)(x.Z.Menu,{children:[(0,c.jsx)(x.Z.Item,{children:"Generate Report"}),(0,c.jsx)(x.Z.Item,{children:"Export Data"}),(0,c.jsx)(x.Z.Item,{children:"Set Reminders"})]})]}),(0,c.jsx)("h4",{className:"header-title mb-0",children:"Rent Collection Progress"}),(0,c.jsxs)("div",{className:"widget-chart text-center",dir:"ltr",children:[(0,c.jsx)(m.Z,{options:i,series:l,type:"radialBar",height:242,className:"apex-charts mt-0"}),(0,c.jsx)("h5",{className:"text-muted mt-0",children:"Total Rent Collected This Month"}),(0,c.jsxs)("h2",{children:["$",t.toLocaleString()]}),(0,c.jsx)("p",{className:"text-muted w-75 mx-auto sp-line-2",children:"Keep track of your monthly rent collection progress and outstanding payments."}),(0,c.jsxs)(n.Z,{className:"mt-3",children:[(0,c.jsx)(r.Z,{className:"col-4",children:(0,c.jsx)(h.Z,{title:"Total Rent",stats:`$${e.toLocaleString()}`,icon:"fe-arrow-up",variant:"success"})}),(0,c.jsx)(r.Z,{className:"col-4",children:(0,c.jsx)(h.Z,{title:"Outstanding",stats:`$${a.toLocaleString()}`,icon:"fe-arrow-down",variant:"danger"})}),(0,c.jsx)(r.Z,{className:"col-4",children:(0,c.jsx)(h.Z,{title:"Late Payments",stats:`$${3500..toLocaleString()}`,icon:"fe-alert-triangle",variant:"warning"})})]})]})]})})},u=()=>{const e=[92,94,95,97,98,98,99,98,96,95,96,97],t={chart:{height:378,type:"line",zoom:{enabled:!1}},stroke:{curve:"smooth",width:[0,3]},plotOptions:{bar:{columnWidth:"50%"}},colors:["#1abc9c","#4a81d4"],series:[{name:"Rental Income",type:"column",data:[45e3,47e3,48e3,5e4,52e3,53e3,55e3,54e3,52e3,5e4,51e3,53e3]},{name:"Occupancy Rate",type:"line",data:e}],fill:{opacity:[.85,1]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],markers:{size:0},xaxis:{type:"category"},yaxis:[{title:{text:"Rental Income ($)"}},{opposite:!0,title:{text:"Occupancy Rate (%)"},min:80,max:100}],tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+(t===e[0]?"%":"$"):t}}},grid:{borderColor:"#f1f3fa"},legend:{offsetY:7}};return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsx)("div",{className:"float-end d-none d-md-inline-block",children:(0,c.jsxs)("div",{className:"btn-group mb-2",children:[(0,c.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Today"}),(0,c.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Weekly"}),(0,c.jsx)("button",{type:"button",className:"btn btn-xs btn-secondary",children:"Monthly"})]})}),(0,c.jsx)("h4",{className:"header-title mb-3",children:"Occupancy Trends"}),(0,c.jsx)("div",{dir:"ltr",children:(0,c.jsx)(m.Z,{options:t,series:t.series,type:"line",height:380,className:"apex-charts"})})]})})};var p=a(11087),A=a(81694),b=a.n(A);const g=e=>{let{tenants:t}=e;return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)(x.Z,{className:"float-end",align:"end",children:[(0,c.jsx)(x.Z.Toggle,{as:"a",className:"card-drop cursor-pointer",children:(0,c.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,c.jsxs)(x.Z.Menu,{children:[(0,c.jsx)(x.Z.Item,{children:"Generate Report"}),(0,c.jsx)(x.Z.Item,{children:"Export Data"}),(0,c.jsx)(x.Z.Item,{children:"Send Notifications"})]})]}),(0,c.jsx)("h4",{className:"header-title mb-3",children:"Top Tenants"}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table table-borderless table-hover table-nowrap table-centered m-0",children:[(0,c.jsx)("thead",{className:"table-light",children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Tenant"}),(0,c.jsx)("th",{children:"Unit"}),(0,c.jsx)("th",{children:"Rent Amount"}),(0,c.jsx)("th",{children:"Payment Status"}),(0,c.jsx)("th",{children:"Tenancy Length"}),(0,c.jsx)("th",{children:"Action"})]})}),(0,c.jsx)("tbody",{children:t.map(((e,t)=>{const a=Math.floor(((new Date).getTime()-new Date(e.tenancyStartDate).getTime())/2592e6);return(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{children:[(0,c.jsx)("img",{src:e.avatar,alt:"contact-img",title:"contact-img",className:"rounded-circle avatar-sm me-2"}),(0,c.jsx)("span",{className:"fw-semibold",children:e.name})]}),(0,c.jsx)("td",{children:e.unitNumber}),(0,c.jsxs)("td",{children:["$",e.rentAmount.toLocaleString()]}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:b()("badge",{"bg-success":"Paid"===e.paymentStatus,"bg-warning":"Pending"===e.paymentStatus,"bg-danger":"Late"===e.paymentStatus}),children:e.paymentStatus})}),(0,c.jsxs)("td",{children:[a," months"]}),(0,c.jsx)("td",{children:(0,c.jsx)(p.rU,{to:"#",className:"btn btn-xs btn-light",children:(0,c.jsx)("i",{className:"mdi mdi-eye"})})})]},t)}))})]})})]})})},N=e=>{let{transactions:t}=e;return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)(x.Z,{className:"float-end",align:"end",children:[(0,c.jsx)(x.Z.Toggle,{as:"a",className:"card-drop cursor-pointer",children:(0,c.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,c.jsxs)(x.Z.Menu,{children:[(0,c.jsx)(x.Z.Item,{children:"Generate Report"}),(0,c.jsx)(x.Z.Item,{children:"Export Transactions"}),(0,c.jsx)(x.Z.Item,{children:"Set Alerts"})]})]}),(0,c.jsx)("h4",{className:"header-title mb-3",children:"Recent Transactions"}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table table-borderless table-hover table-nowrap table-centered m-0",children:[(0,c.jsx)("thead",{className:"table-light",children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Transaction Type"}),(0,c.jsx)("th",{children:"Property"}),(0,c.jsx)("th",{children:"Amount"}),(0,c.jsx)("th",{children:"Date"}),(0,c.jsx)("th",{children:"Status"}),(0,c.jsx)("th",{children:"Action"})]})}),(0,c.jsx)("tbody",{children:t.map(((e,t)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e.transactionType}),(0,c.jsx)("td",{children:e.property}),(0,c.jsxs)("td",{children:["$",e.amount.toLocaleString()]}),(0,c.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:b()("badge",{"bg-success":"Completed"===e.status,"bg-warning":"Pending"===e.status,"bg-danger":"Failed"===e.status}),children:e.status})}),(0,c.jsx)("td",{children:(0,c.jsx)(p.rU,{to:"#",className:"btn btn-xs btn-light",children:(0,c.jsx)("i",{className:"mdi mdi-eye"})})})]},t)))})]})})]})})};var y=a(3593);const f=15,Z=8,v=27,S=3.5,R=()=>{const e=f+Z+v;return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)(x.Z,{className:"float-end",align:"end",children:[(0,c.jsx)(x.Z.Toggle,{as:"a",className:"cursor-pointer card-drop",children:(0,c.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,c.jsxs)(x.Z.Menu,{children:[(0,c.jsx)(x.Z.Item,{children:"Generate Report"}),(0,c.jsx)(x.Z.Item,{children:"Export Data"}),(0,c.jsx)(x.Z.Item,{children:"Set Priority Levels"})]})]}),(0,c.jsx)("h4",{className:"header-title mb-3",children:"Maintenance Overview"}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("h5",{children:"Pending Requests"}),(0,c.jsx)(y.Z,{now:f/e*100,variant:"danger",label:`${f}`})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("h5",{children:"In Progress"}),(0,c.jsx)(y.Z,{now:Z/e*100,variant:"warning",label:`${Z}`})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("h5",{children:"Completed"}),(0,c.jsx)(y.Z,{now:v/e*100,variant:"success",label:`${v}`})]}),(0,c.jsxs)("div",{className:"mt-4",children:[(0,c.jsx)("h5",{children:"Average Resolution Time"}),(0,c.jsxs)("p",{className:"text-muted mb-0",children:[S," days"]})]}),(0,c.jsx)("div",{className:"mt-4 text-center",children:(0,c.jsxs)("p",{className:"text-muted mb-0",children:["Total maintenance requests: ",e]})})]})})},w=[{x:"Next 30 days",y:5},{x:"31-60 days",y:8},{x:"61-90 days",y:12},{x:"Beyond 90 days",y:25}],H=()=>{const e={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!0,distributed:!0,dataLabels:{position:"top"}}},colors:["#ff4560","#feb019","#00e396","#008ffb"],dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},legend:{show:!1},xaxis:{categories:w.map((e=>e.x))},yaxis:{title:{text:"Number of Leases Expiring"}}},t=[{data:w.map((e=>e.y))}];return(0,c.jsx)(o.Z,{children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)(x.Z,{className:"float-end",align:"end",children:[(0,c.jsx)(x.Z.Toggle,{as:"a",className:"cursor-pointer card-drop",children:(0,c.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,c.jsxs)(x.Z.Menu,{children:[(0,c.jsx)(x.Z.Item,{children:"Generate Report"}),(0,c.jsx)(x.Z.Item,{children:"Export Data"}),(0,c.jsx)(x.Z.Item,{children:"Set Reminders"})]})]}),(0,c.jsx)("h4",{className:"header-title mb-3",children:"Lease Expiry Timeline"}),(0,c.jsx)(m.Z,{options:e,series:t,type:"bar",height:350}),(0,c.jsx)("div",{className:"mt-3 text-center",children:(0,c.jsxs)("p",{className:"text-muted mb-0",children:["Total leases expiring in next 90 days: ",w.slice(0,3).reduce(((e,t)=>e+t.y),0)]})})]})})};const k=[{id:1,avatar:a(83563),name:"John Doe",unitNumber:"A101",rentAmount:1500,paymentStatus:"Paid",tenancyStartDate:"2022-01-01"},{id:2,avatar:a(96952),name:"Jane Smith",unitNumber:"B205",rentAmount:1800,paymentStatus:"Pending",tenancyStartDate:"2021-06-15"},{id:3,avatar:a(84915),name:"Robert Johnson",unitNumber:"C310",rentAmount:2e3,paymentStatus:"Late",tenancyStartDate:"2023-03-01"},{id:4,avatar:a(312),name:"Emily Brown",unitNumber:"A205",rentAmount:1600,paymentStatus:"Paid",tenancyStartDate:"2022-11-01"},{id:5,avatar:a(72508),name:"Michael Wilson",unitNumber:"B410",rentAmount:2200,paymentStatus:"Paid",tenancyStartDate:"2023-01-15"}],C=[{id:1,transactionType:"Rent",property:"Sunrise Apartments",amount:1500,date:"2024-08-01",status:"Completed"},{id:2,transactionType:"Maintenance",property:"Sunset Condos",amount:250,date:"2024-07-28",status:"Pending"},{id:3,transactionType:"Deposit",property:"Lakeside Villas",amount:2e3,date:"2024-07-25",status:"Completed"},{id:4,transactionType:"Rent",property:"Downtown Lofts",amount:1800,date:"2024-07-20",status:"Failed"},{id:5,transactionType:"Refund",property:"Hillside Apartments",amount:500,date:"2024-07-15",status:"Completed"},{id:6,transactionType:"Rent",property:"Riverside Apartments",amount:1700,date:"2024-07-10",status:"Completed"}],D=()=>{const[e,t]=(0,s.useState)(new Date);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{children:(0,c.jsx)(r.Z,{children:(0,c.jsxs)("div",{className:"page-title-box",children:[(0,c.jsx)("div",{className:"page-title-right",children:(0,c.jsxs)("form",{className:"d-flex align-items-center mb-3",children:[(0,c.jsx)("div",{className:"input-group input-group-sm",children:(0,c.jsx)(i.Z,{value:e,inputClass:"border",onChange:e=>{(e=>{e&&t(e)})(e)}})}),(0,c.jsx)("button",{className:"btn btn-blue btn-sm ms-2",children:(0,c.jsx)("i",{className:"mdi mdi-autorenew"})}),(0,c.jsx)("button",{className:"btn btn-blue btn-sm ms-1",children:(0,c.jsx)("i",{className:"mdi mdi-filter-variant"})})]})}),(0,c.jsx)("h4",{className:"page-title",children:"Landlord Dashboard"})]})})}),(0,c.jsx)(d,{}),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(r.Z,{lg:4,children:(0,c.jsx)(j,{})}),(0,c.jsx)(r.Z,{lg:8,children:(0,c.jsx)(u,{})})]}),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(r.Z,{xl:6,children:(0,c.jsx)(g,{tenants:k})}),(0,c.jsx)(r.Z,{xl:6,children:(0,c.jsx)(N,{transactions:C})})]}),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(r.Z,{xl:6,children:(0,c.jsx)(R,{})}),(0,c.jsx)(r.Z,{xl:6,children:(0,c.jsx)(H,{})})]})]})}},72508:e=>{e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=8040.0b7667b8.chunk.js.map