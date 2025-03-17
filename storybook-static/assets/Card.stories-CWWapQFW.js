import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{a as v,c as r}from"./createLucideIcon-CZO7jHe9.js";import{B as T}from"./badge-BLTVq3cb.js";import{r as c}from"./index-2yJIXLcc.js";import{C as R}from"./calendar-1KGl-dJe.js";import{B as l}from"./button-BiOgjjiw.js";import"./index-BXRekzmb.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]],L=v("ArrowBigDown",D);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=v("ChevronDown",A);function w({className:a,...t}){return e.jsx("div",{"data-slot":"card",className:r("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...t})}function b({className:a,...t}){return e.jsx("div",{"data-slot":"card-header",className:r("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...t})}function N({className:a,...t}){return e.jsx("div",{"data-slot":"card-title",className:r("leading-none font-semibold",a),...t})}function j({className:a,...t}){return e.jsx("div",{"data-slot":"card-description",className:r("text-muted-foreground text-sm",a),...t})}function y({className:a,...t}){return e.jsx("div",{"data-slot":"card-content",className:r("px-6",a),...t})}function C({className:a,...t}){return e.jsx("div",{"data-slot":"card-footer",className:r("flex items-center px-6 [.border-t]:pt-6",a),...t})}w.__docgenInfo={description:"",methods:[],displayName:"Card"};b.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};N.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};j.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};y.__docgenInfo={description:"",methods:[],displayName:"CardContent"};function _({title:a,description:t,content:q,badge:o,cardFooter:I}){const[F,d]=c.useState(!1),i=c.useRef(null);return c.useEffect(()=>{function m(B){i.current&&!i.current.contains(B.target)&&d(!1)}return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[]),e.jsxs(w,{ref:i,onClick:()=>d(!0),className:`w-full max-w-[300px] h-auto overflow-hidden border-2 transition-all hover:border-primary-300 ${F?"border-primary-300":"border-transparent"}`,children:[e.jsxs(b,{className:"flex justify-between w-full items-center",children:[e.jsxs("div",{className:"titles flex flex-col gap-1.5",children:[e.jsx(N,{children:e.jsx("p",{className:"line-clamp-1 overflow-hidden ",children:a})}),e.jsxs(j,{className:"flex gap-3 items-center text-sm text-muted-foreground",children:[e.jsx(R,{className:"size-4"}),e.jsx("p",{className:"line-clamp-1 w-[150px]",children:t})]})]}),o&&e.jsx(T,{variant:o.variant||"success",size:"sm",shape:"circle",style:"accent",className:"text-[12px]",children:o.label})]}),e.jsx(y,{className:"flex flex-wrap",children:q}),e.jsx(C,{className:"pointer-events-none",children:e.jsx("div",{className:"pointer-events-auto w-full",children:I})})]})}_.__docgenInfo={description:"",methods:[],displayName:"cardComp",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badge:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    label: string;\r
    variant?: "success" | "warning";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"union",raw:'"success" | "warning"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}],required:!1}}]}},description:""},cardFooter:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O={title:"UI/Cards",component:_,argTypes:{title:{control:"text"},description:{control:"text"},content:{control:"text"},badge:{control:"object",defaultValue:{label:"",variant:"success"},table:{type:{summary:"object"},defaultValue:{summary:'{ label: string, variant: "success" | "warning" }'}}},cardFooter:{control:"object"}}},s={args:{title:"List Name",description:"20th Feb",content:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{children:"Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab labore repellendus reprehenderit placeat esse fugiat, laborum totam ratione beatae voluptas cumque. Alias commodi maiores ad quibusdam atque nesciunt debitis?"}),e.jsx("p",{children:"Guys"}),e.jsx("p",{children:"Chai"}),e.jsx("p",{children:"Pilow"})]}),badge:{label:"Tag 1"},cardFooter:e.jsx("div",{className:"btncontainer w-full",children:e.jsx(l,{variant:"default",className:"w-full",children:"Validate File"})})}},n={args:{title:"List Name",description:"20th Feb",content:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{children:"Hello"}),e.jsx("p",{children:"Guys"}),e.jsx("p",{children:"Chai"}),e.jsx("p",{children:"Pilow"})]}),badge:{label:"Tag 2",variant:"warning"},cardFooter:e.jsxs("div",{className:"btncontainer w-full flex justify-evenly",children:[e.jsx(l,{variant:"secondary",className:"w-fit",endIcon:e.jsx(S,{}),children:"Download"}),e.jsx(l,{variant:"tertiary",className:"w-fit",endIcon:e.jsx(L,{className:"-rotate-120"}),children:"View"})]})}};var u,p,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const M=["Card","CardSecondary"];export{s as Card,n as CardSecondary,M as __namedExportsOrder,O as default};
