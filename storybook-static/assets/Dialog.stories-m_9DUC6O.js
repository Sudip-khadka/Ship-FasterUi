import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{B as s}from"./button-DI6Tvl9N.js";import{R as A,T as U,C as E,a as R,b as V,D as S,P as H,O}from"./index-BIYQmylb.js";import{c as n}from"./utils-CiMRq3MP.js";import{X as W}from"./x-CWI0N1Y_.js";import{C as X}from"./circle-help-DnoxuwlX.js";import{C as Y}from"./chevron-left-g3qMD7R7.js";import"./index-HDiuFCMG.js";import"./index-DUAV1Q2A.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-CkJYSq-f.js";import"./index-BBSvTbSE.js";import"./index-VDvXe9nZ.js";import"./index-CqVsPxxY.js";import"./index-DYDmQCah.js";import"./Combination-BIAEybTc.js";import"./createLucideIcon-DKpLFxT9.js";function x({...a}){return e.jsx(A,{"data-slot":"dialog",...a})}function m({...a}){return e.jsx(U,{"data-slot":"dialog-trigger",...a})}function T({...a}){return e.jsx(H,{"data-slot":"dialog-portal",...a})}function F({className:a,...t}){return e.jsx(O,{"data-slot":"dialog-overlay",className:n("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...t})}function p({className:a,children:t,...r}){return e.jsxs(T,{"data-slot":"dialog-portal",children:[e.jsx(F,{}),e.jsxs(E,{"data-slot":"dialog-content",className:n("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",a),...r,children:[t,e.jsxs(R,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[e.jsx(W,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function f({className:a,...t}){return e.jsx("div",{"data-slot":"dialog-header",className:n("flex flex-col gap-2 text-center sm:text-left",a),...t})}function u({className:a,...t}){return e.jsx("div",{"data-slot":"dialog-footer",className:n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",a),...t})}function h({className:a,...t}){return e.jsx(V,{"data-slot":"dialog-title",className:n("text-lg leading-none font-semibold",a),...t})}function g({className:a,...t}){return e.jsx(S,{"data-slot":"dialog-description",className:n("text-muted-foreground text-sm",a),...t})}x.__docgenInfo={description:"",methods:[],displayName:"Dialog"};p.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};g.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};u.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};f.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};F.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};T.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};h.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};m.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};function G({variant:a,alignment:t,triggerBtn:r,triggerBtnVarient:D,primaryBtnVarient:M,secondaryBtnVarient:P,icon:_,title:c,description:j,primaryBtn:o,secondaryBtn:l,innerContent:v,image:q,primaryButtonOnClick:w,secondaryButtonOnClick:y,...b}){let d;switch(a){case"slot":d=e.jsxs(x,{children:[e.jsx(m,{asChild:!0,children:e.jsx(s,{variant:"default",children:r})}),e.jsxs(p,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(f,{children:[e.jsx(h,{children:e.jsxs("h2",{children:[" ",c]})}),e.jsx(g,{children:j})]}),e.jsx("div",{children:v}),e.jsx(u,{children:e.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[e.jsx(s,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:w,children:o}),e.jsx(s,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:y,children:l})]})})]})]});break;case"media":d=e.jsxs(x,{...b,children:[e.jsx(m,{asChild:!0,children:e.jsx(s,{variant:D||"default",children:r})}),e.jsxs(p,{className:`sm:max-w-[425px] flex flex-col gap-[2rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsx("div",{className:"imageContainer",children:e.jsx("img",{src:q,alt:c,className:"w-full h-[200px]"})}),e.jsxs(f,{children:[e.jsx(h,{className:"w-full",children:e.jsxs("h2",{children:[" ",c]})}),e.jsx(g,{children:j})]}),e.jsx("div",{children:v}),e.jsx(u,{children:e.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[o&&e.jsx(s,{type:"submit",variant:M||"default",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:w,children:o}),l&&e.jsx(s,{variant:P||"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:y,children:l})]})})]})]});break;case"default":d=e.jsxs(x,{...b,children:[e.jsx(m,{asChild:!0,children:e.jsx(s,{variant:D,children:r})}),e.jsxs(p,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(f,{children:[e.jsxs(h,{className:"w-full flex flex-col gap-2 items-center justify-center ",children:[e.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center m-auto",children:_}),e.jsxs("h2",{className:"text-center",children:[" ",c]})]}),e.jsx(g,{className:"text-center",children:j})]}),e.jsx("div",{children:v}),e.jsx(u,{children:e.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[o&&e.jsx(s,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:w,children:o}),l&&e.jsx(s,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:y,children:l})]})})]})]});break;case"defaultLeft":d=e.jsxs(x,{...b,children:[e.jsx(m,{asChild:!0,children:e.jsx(s,{variant:"default",children:r})}),e.jsxs(p,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(f,{children:[e.jsxs(h,{className:"w-full flex flex-col gap-2",children:[e.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center",children:_}),e.jsxs("h2",{children:[" ",c]})]}),e.jsx(g,{children:j})]}),e.jsx("div",{children:v}),e.jsx(u,{children:e.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[o&&e.jsx(s,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:w,children:o}),l&&e.jsx(s,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:y,children:l})]})})]})]});break;default:throw new Error(`Unknown variant: ${a}`)}return d}const ue={title:"UI/Dialog",component:G,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["slot","media","default","defaultLeft"]},alignment:{control:{type:"select"},options:["horizontal","vertical"]},triggerBtn:{control:{type:"text"}},innerContent:{control:{type:"text"}},icon:{control:"select",options:["logo","chevron-left","help-circle"],mapping:{logo:e.jsx(i,{}),"chevron-left":e.jsx(Y,{}),"help-circle":e.jsx(X,{})}},title:{control:{type:"text"}},description:{control:{type:"text"}},primaryBtn:{control:{type:"text"}},secondaryBtn:{control:{type:"text"}}}},J={variant:"default",alignment:"horizontal",triggerBtn:"Open Dialog",icon:e.jsx(i,{}),image:"https://media.istockphoto.com/id/1557118048/photo/a-concept-that-expresses-the-hyper-connected-society-of-modern-society-by-connecting-people.jpg?s=1024x1024&w=is&k=20&c=8f8F0FEig-UIwhFFl4uEW5RUpINOlw5rd-qols04UF8=",title:"Default Title",description:"Default Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad est maxime possimus voluptatibus, voluptate odit corporis ipsam dolor qui pariatur quisquam dolores quo dolorem! Id tenetur incidunt provident quaerat.",primaryBtn:"Primary Action",secondaryBtn:"Secondary Action",innerContent:e.jsx("p",{className:"text-center",children:"Pass Your Component Like Forms..."}),primaryButtonOnClick:()=>{alert("Primary button clicked")},secondaryButtonOnClick:()=>{alert("Secondary button clicked")}},N={args:J};function i(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box text-primary-500",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"})})}i.__docgenInfo={description:"",methods:[],displayName:"IconLogo"};var z,C,k;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: defaultArgs // Use args instead of render
}`,...(k=(C=N.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,$,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`function IconLogo() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box text-primary-500" viewBox="0 0 16 16">\r
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />\r
    </svg>;
}`,...(L=($=i.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const he=["Default","IconLogo"];export{N as Default,i as IconLogo,he as __namedExportsOrder,ue as default};
