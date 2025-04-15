import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{C as N,a as y,b as C,c as q,d as B,e as F}from"./card-CRsOcMKk.js";import{B as R}from"./badge-DP59jR1M.js";import{r as n}from"./index-DUAV1Q2A.js";import{C as T}from"./calendar-DWxk0USB.js";import{B as i}from"./button-xtdtlWUc.js";import{C as I}from"./chevron-down--jvhOox4.js";import{c as L}from"./createLucideIcon-DKpLFxT9.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";import"./index-HDiuFCMG.js";import"./index-Dp3B9jqt.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]],A=L("ArrowBigDown",D);function x({title:h,description:v,content:w,badge:t,cardFooter:b}){const[g,o]=n.useState(!1),s=n.useRef(null);return n.useEffect(()=>{function l(j){s.current&&!s.current.contains(j.target)&&o(!1)}return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),e.jsxs(N,{ref:s,onClick:()=>o(!0),className:`w-full max-w-[300px] h-auto overflow-hidden border-2 transition-all hover:border-primary-300 ${g?"border-primary-300":"border-transparent"}`,children:[e.jsxs(y,{className:"flex justify-between w-full items-center",children:[e.jsxs("div",{className:"titles flex flex-col gap-1.5",children:[e.jsx(C,{children:e.jsx("p",{className:"line-clamp-1 overflow-hidden ",children:h})}),e.jsxs(q,{className:"flex gap-3 items-center text-sm text-muted-foreground",children:[e.jsx(T,{className:"size-4"}),e.jsx("p",{className:"line-clamp-1 w-[150px]",children:v})]})]}),t&&e.jsx(R,{variant:t.variant||"success",size:"sm",shape:"circle",style:"accent",className:"text-[12px]",children:t.label})]}),e.jsx(B,{className:"flex flex-wrap",children:w}),e.jsx(F,{className:"pointer-events-none",children:e.jsx("div",{className:"pointer-events-auto w-full",children:b})})]})}x.__docgenInfo={description:"",methods:[],displayName:"cardComp",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badge:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    label: string;\r
    variant?: "success" | "warning";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"union",raw:'"success" | "warning"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}],required:!1}}]}},description:""},cardFooter:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J={title:"UI/Cards",component:x,tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},content:{control:"text"},badge:{control:"object",defaultValue:{label:"",variant:"success"},table:{type:{summary:"object"},defaultValue:{summary:'{ label: string, variant: "success" | "warning" }'}}},cardFooter:{control:"object"}}},a={args:{title:"List Name",description:"20th Feb",content:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{children:"Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab labore repellendus reprehenderit placeat esse fugiat, laborum totam ratione beatae voluptas cumque. Alias commodi maiores ad quibusdam atque nesciunt debitis?"}),e.jsx("p",{children:"Guys"}),e.jsx("p",{children:"Chai"}),e.jsx("p",{children:"Pilow"})]}),badge:{label:"Tag 1"},cardFooter:e.jsx("div",{className:"btncontainer w-full",children:e.jsx(i,{variant:"default",className:"w-full",children:"Validate File"})})}},r={args:{title:"List Name",description:"20th Feb",content:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{children:"Hello"}),e.jsx("p",{children:"Guys"}),e.jsx("p",{children:"Chai"}),e.jsx("p",{children:"Pilow"})]}),badge:{label:"Tag 2",variant:"warning"},cardFooter:e.jsxs("div",{className:"btncontainer w-full flex justify-evenly",children:[e.jsx(i,{variant:"secondary",className:"w-fit",endIcon:e.jsx(I,{}),children:"Download"}),e.jsx(i,{variant:"tertiary",className:"w-fit",endIcon:e.jsx(A,{className:"-rotate-120"}),children:"View"})]})}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "List Name",
    description: "20th Feb",
    content: <div className="flex flex-col">\r
                <p>Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab labore repellendus reprehenderit placeat esse fugiat, laborum totam ratione beatae voluptas cumque. Alias commodi maiores ad quibusdam atque nesciunt debitis?</p>\r
                <p>Guys</p>\r
                <p>Chai</p>\r
                <p>Pilow</p>\r
            </div>,
    badge: {
      label: "Tag 1"
    },
    cardFooter: <div className="btncontainer w-full">\r
                <Button variant="default" className="w-full">Validate File</Button>\r
            </div>
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "List Name",
    description: "20th Feb",
    content: <div className="flex flex-col">\r
                <p>Hello</p>\r
                <p>Guys</p>\r
                <p>Chai</p>\r
                <p>Pilow</p>\r
            </div>,
    badge: {
      label: "Tag 2",
      variant: "warning"
    },
    cardFooter: <div className="btncontainer w-full flex justify-evenly">\r
                <Button variant="secondary" className="w-fit" endIcon={<ChevronDownIcon />}>Download</Button>\r
                <Button variant="tertiary" className="w-fit" endIcon={<ArrowBigDownIcon className='-rotate-120' />}>View</Button>\r
            </div>
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const K=["Card","CardSecondary"];export{a as Card,r as CardSecondary,K as __namedExportsOrder,J as default};
