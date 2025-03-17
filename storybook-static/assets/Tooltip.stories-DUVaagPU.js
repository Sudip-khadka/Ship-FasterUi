import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as p,a as l,b as d,c as m}from"./tooltip-BAnbrMLf.js";import{B as h}from"./button-BiOgjjiw.js";import{C as T}from"./chevron-right-CHRAU9U_.js";import{a as u}from"./createLucideIcon-CZO7jHe9.js";import"./index-2yJIXLcc.js";import"./index-BHOlFMKo.js";import"./index-Da90mRSO.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-BXRekzmb.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],g=u("Plus",x);function n({btn:i,content:a,className:c}){return t.jsx(p,{children:t.jsxs(l,{children:[t.jsx(d,{asChild:!0,children:i}),t.jsx(m,{className:c||"bg-red-300 fill-red-300",children:a})]})})}n.__docgenInfo={description:"",methods:[],displayName:"TooltipComp",props:{btn:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Tooltip",component:n,argTypes:{btn:{control:!1,description:"Button component to be wrapped inside TooltipTrigger"},content:{control:!1,description:"Tooltip content (supports HTML/JSX)"},className:{control:"text",description:"CSS class for TooltipContent"}}},o={args:{btn:t.jsx(h,{variant:"secondary",startIcon:t.jsx(g,{}),endIcon:t.jsx(T,{}),children:"Add Item"}),content:t.jsxs("div",{className:"text-white p-2",children:[t.jsx("h1",{className:"text-lg font-bold",children:"Tooltip Title"}),t.jsxs("p",{className:"text-sm",children:["This is a tooltip with ",t.jsx("strong",{children:"HTML content"}),"."]})]}),className:"bg-amber-500 fill-amber-500"}};var e,s,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    btn: <Button variant="secondary" startIcon={<Plus />} endIcon={<ChevronRight />}>\r
                Add Item\r
            </Button>,
    content: <div className="text-white p-2">\r
                <h1 className="text-lg font-bold">Tooltip Title</h1>\r
                <p className="text-sm">This is a tooltip with <strong>HTML content</strong>.</p>\r
            </div>,
    className: 'bg-amber-500 fill-amber-500'
  }
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const M=["IconButtonTooltip"];export{o as IconButtonTooltip,M as __namedExportsOrder,_ as default};
