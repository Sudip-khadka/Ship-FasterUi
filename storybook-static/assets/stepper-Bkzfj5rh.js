import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./index-DUAV1Q2A.js";import{c as r}from"./utils-CiMRq3MP.js";import{C as R}from"./check-DKxgdlWy.js";import{c as T}from"./createLucideIcon-DKpLFxT9.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],V=T("Dot",q),y=u.forwardRef(({title:d,description:m,state:l="inactive",icon:p,children:f,isLastStep:n=!1,isFirstStep:i=!1,stepperStyle:a="lined",direction:t="horizontal",nodeType:o="number",index:j=1},h)=>{const w={active:"bg-transparent text-primary border-2 border-primary ring-3 ring-primary/20",inactive:"bg-muted text-muted-foreground",completed:"bg-primary text-primary-foreground",destructive:"bg-destructive text-destructive-foreground",disabled:"bg-muted text-muted-foreground opacity-50"},z={active:"bg-primary-50 border-primary-100",inactive:"bg-muted",completed:"bg-primary-50 border-primary-100",destructive:"bg-destructive-50 border-destructive-100",disabled:"bg-muted opacity-50"},v={active:"bg-primary",inactive:"bg-muted",completed:"bg-primary",destructive:"bg-destructive",disabled:"bg-muted opacity-50"},x={active:"text-foreground",inactive:"text-muted-foreground",completed:"text-foreground",destructive:"text-destructive",disabled:"text-muted-foreground opacity-50"},c=()=>{const s=r("flex items-center h-8 w-8 justify-center shrink-0 transition-all duration-300",w[l],{"rounded-full":!0,"border-2":a==="boxed","z-[100]":!0});return o==="icon"?e.jsx("div",{className:s,children:p||e.jsx(R,{className:"h-4 w-4"})}):o==="dot"?e.jsx("div",{className:s,children:e.jsx(V,{className:"h-5 w-5"})}):e.jsx("div",{className:s,children:j})},b=()=>e.jsxs(e.Fragment,{children:[!i&&e.jsx("div",{className:r("transition-all duration-300",v[l],{"absolute left-4 top-0 bottom-1/2 w-0.5":t==="vertical","absolute top-[50%] h-0.5 left-0 right-1/2":t==="horizontal"&&a==="boxed","h-0.5 flex-1":t==="horizontal"&&a!=="boxed"})}),!n&&e.jsx("div",{className:r("transition-all duration-300",v[l],{"absolute left-4 top-8 bottom-0 w-0.5 h-full":t==="vertical","absolute top-[50%] h-0.5 left-1/2 right-0":t==="horizontal"&&a==="boxed","h-0.5 flex-1":t==="horizontal"&&a!=="boxed"})})]}),g=()=>{const s=e.jsxs("div",{className:r("flex flex-col transition-all duration-300",{"mt-2":t==="horizontal"&&a!=="step","ml-3":t==="vertical","text-center":a!=="boxed"||t==="vertical"}),children:[e.jsx("h3",{className:r("text-sm font-medium",x[l]),children:d}),m&&e.jsx("p",{className:r("text-xs",x[l],{"opacity-70":l!=="active"}),children:m}),f&&e.jsx("div",{className:"mt-2",children:f})]});return a==="boxed"?e.jsxs("div",{className:r("p-4 rounded-lg border flex flex-col items-center transition-all duration-300",z[l],x[l],{"border-2":l==="active","mt-3":t==="horizontal"}),children:[t==="vertical"&&c(),s]}):s};return t==="horizontal"?e.jsxs("div",{ref:h,className:r("flex flex-col flex-1",{"flex-1":!n&&!i,"items-start":!i&&a==="boxed","items-center":a!=="boxed"}),children:[e.jsx("div",{className:"flex items-center w-full relative",children:a==="boxed"?e.jsxs(e.Fragment,{children:[b(),e.jsx("div",{className:"relative z-10 flex justify-center w-full",children:c()})]}):a==="step"?e.jsxs(e.Fragment,{children:[!i&&e.jsx("div",{className:r("h-0.5 flex-1 transition-all duration-300",v[l])}),!n&&e.jsx("div",{className:r("h-0.5 flex-1 transition-all duration-300",v[l])})]}):e.jsxs(e.Fragment,{children:[b(),c()]})}),a==="step"&&e.jsx("div",{className:"w-full flex justify-center mt-2",children:c()}),g()]}):e.jsxs("div",{ref:h,className:r("flex relative items-start",{"pb-6":!n&&!i,"min-h-[60px]":!n}),children:[e.jsxs("div",{className:"flex flex-col items-start relative",children:[b(),a!=="boxed"&&c()]}),g()]})});y.displayName="Step";const N=u.forwardRef(({direction:d="horizontal",style:m="lined",nodeType:l="number",children:p,className:f},n)=>{const i=u.Children.toArray(p),a=i.map((t,o)=>u.isValidElement(t)?u.cloneElement(t,{isLastStep:o===i.length-1,isFirstStep:o===0,stepperStyle:m,direction:d,nodeType:l,index:o+1}):t);return e.jsx("div",{ref:n,className:r("w-full",{flex:d==="horizontal","space-y-0":d==="vertical"},f),children:a})});N.displayName="Stepper";N.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},style:{required:!1,tsType:{name:"union",raw:'"lined" | "boxed" | "step"',elements:[{name:"literal",value:'"lined"'},{name:"literal",value:'"boxed"'},{name:"literal",value:'"step"'}]},description:"",defaultValue:{value:'"lined"',computed:!1}},nodeType:{required:!1,tsType:{name:"union",raw:'"icon" | "number" | "dot"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"number"'},{name:"literal",value:'"dot"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"Step",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"active" | "inactive" | "completed" | "destructive" | "disabled"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"inactive"'},{name:"literal",value:'"completed"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"inactive"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isLastStep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstStep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stepperStyle:{required:!1,tsType:{name:"union",raw:'"lined" | "boxed" | "step"',elements:[{name:"literal",value:'"lined"'},{name:"literal",value:'"boxed"'},{name:"literal",value:'"step"'}]},description:"",defaultValue:{value:'"lined"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},nodeType:{required:!1,tsType:{name:"union",raw:'"icon" | "number" | "dot"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"number"'},{name:"literal",value:'"dot"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};export{y as S,N as a};
