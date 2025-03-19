import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-2yJIXLcc.js";import{D as Q,a as X,b as Y,d as Z,e as ee,c as x}from"./dropdown-menu-DNkHLL6o.js";import{B as ae}from"./button-YCIrU82T.js";import{T as te}from"./tooltipComp-ByhFT8J4.js";import{C as ne}from"./chevron-down-nJpiwVJV.js";import{S as le,C as se}from"./search-kRMG6IEX.js";import{c as b}from"./createLucideIcon-CkVng6Ik.js";import"./index-CBhgPmBG.js";import"./index-B8lP-kFZ.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-Bro3k9ay.js";import"./Combination-BnBHr6NK.js";import"./index-BQwN5Qyj.js";import"./utils-jAU0Cazi.js";import"./chevron-right-DxSby-FQ.js";import"./index-DZZQifJx.js";import"./tooltip-D74v5Wec.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],oe=b("Bird",re);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ce=b("Globe",ie);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ue=b("Rocket",de),_=({tooltip:L,itemsClassname:G,btnVariant:z="outline",width:u="60rem",showSearch:E=!1,variant:p="singleSelect",items:F,placeholder:H="Search...",btnClassName:U,searchIcon:W=a.jsx(le,{className:"text-secondary-800 h-5 w-5"}),onSelect:n,defaultValue:f="Select"})=>{const[g,y]=s.useState(""),[l,m]=s.useState(p==="multiselect"?[]:[f]),$=s.useRef(null),S=F.filter(e=>e.label.toLowerCase().includes(g.toLowerCase())),w=e=>{p==="singleSelect"?(m([e.label]),n==null||n([e.label])):m(t=>t.includes(e.label)?t.filter(h=>h!==e.label):[...t,e.label])},K=e=>{e.stopPropagation(),m([]),y(""),n==null||n([])},[O,J]=s.useState(!1);return a.jsxs(Q,{children:[a.jsx("div",{className:"container flex items-center justify-center",children:a.jsx(X,{className:`w-[${u}] outline-none p-0`,children:a.jsx(ae,{style:{width:u},className:U||"flex justify-between",variant:z,onClick:e=>{e.stopPropagation(),e.preventDefault(),J(t=>!t)},endIcon:a.jsx(ne,{className:`transition-transform duration-200 ${O?"rotate-180":"rotate-0"}`}),children:l.length>0?l.join(", "):f})})}),a.jsxs(Y,{style:{width:u},children:[E&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"w-full flex items-center justify-between pr-2",children:[a.jsxs("div",{className:"w-full relative p-2 text-secondary-800",onClick:e=>e.stopPropagation(),children:[a.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2",children:W}),a.jsx("input",{ref:$,type:"text",placeholder:H,value:g,onChange:e=>y(e.target.value),className:"w-full pl-8 pr-3 py-2 bg-secondary-100 rounded-md outline-none focus:ring-1 focus:ring-secondary-200",onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation()})]}),l.length>0&&a.jsx(te,{btn:a.jsx("span",{className:"ml-2 text-secondary-800 cursor-pointer",onClick:K,children:"✕"}),className:"hover:cursor-pointer",content:a.jsx("p",{className:"text-sm",children:a.jsx("strong",{children:L})})})]}),a.jsx(Z,{})]}),S.length>0?S.map((e,t)=>p==="multiselect"?a.jsxs(ee,{className:G,onSelect:h=>h.preventDefault(),children:[a.jsx("input",{id:e.label,type:"checkbox",checked:l.includes(e.label),onChange:()=>w(e)}),a.jsxs("label",{className:"flex items-center",htmlFor:e.label,children:[e.icon&&a.jsx("span",{className:"mr-2",children:e.icon}),e.label]})]},t):a.jsxs(x,{onClick:()=>w(e),children:[e.icon&&a.jsx("span",{className:"mr-2",children:e.icon})," ",a.jsx("p",{className:"text-secondary-800 font-normal leading-[18px] text-[1rem]",children:e.label})]},t)):a.jsx(x,{disabled:!0,children:"No results found"})]})]})};_.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search..."',computed:!1}},searchIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'<SearchIcon className="text-secondary-800 h-5 w-5" />',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"multiselect" | "singleSelect"',elements:[{name:"literal",value:'"multiselect"'},{name:"literal",value:'"singleSelect"'}]},description:"",defaultValue:{value:'"singleSelect"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"60rem"',computed:!1}},btnVariant:{required:!1,tsType:{name:"union",raw:`| "default"\r
| "secondary"\r
| "tertiary"\r
| "link"\r
| "destructive"\r
| "outline"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"link"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},btnClassName:{required:!1,tsType:{name:"string"},description:""},itemsClassname:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const Re={title:"Components/Dropdown",component:_,argTypes:{variant:{control:"radio",options:["singleSelect","multiselect"],description:"Choose between single select and multi-select"},showSearch:{control:"boolean",description:"Enable or disable search input"},btnVariant:{control:"radio",options:["default","secondary","tertiary","link","destructive","outline"],description:"Button variant styles"},width:{control:"text",description:"Set the dropdown width (e.g., '20rem', '50%')"},btnClassName:{control:"text",description:"Additional Tailwind classes for the button"},placeholder:{control:"text",description:"Placeholder for search input"},defaultValue:{control:"text",description:"Default selected value before user selects anything"},onSelect:{action:"selected",description:"Callback function when an item is selected"}}},r={args:{items:[{label:"World",icon:a.jsx(ce,{})},{label:"Rocket",icon:a.jsx(ue,{})},{label:"Code",icon:a.jsx(se,{})}],variant:"singleSelect",showSearch:!1,width:"20rem",btnVariant:"outline",btnClassName:"",defaultValue:"Select an option"}},o={args:{items:[{label:"Bird",icon:a.jsx(oe,{})},{label:"Vue"},{label:"Angular"},{label:"Svelte"},{label:"Next.js"}],variant:"multiselect",showSearch:!0,width:"25rem",btnVariant:"secondary",btnClassName:"",defaultValue:"Select frameworks",tooltip:"Clear All"}},i={args:{items:[{label:"USA"},{label:"Canada"},{label:"UK"},{label:"Germany"},{label:"Australia"}],variant:"singleSelect",showSearch:!0,width:"30rem",btnVariant:"default",btnClassName:"",defaultValue:"Select a country"}},c={args:{items:[{label:"Football"},{label:"Basketball"},{label:"Tennis"},{label:"Cricket"},{label:"Hockey"}],variant:"singleSelect",showSearch:!0,width:"22rem",btnVariant:"outline",btnClassName:"",defaultValue:`Pick a sport as
`,placeholder:"Type to search..."}},d={args:{items:[],variant:"singleSelect",showSearch:!0,width:"20rem",btnVariant:"destructive",btnClassName:"",defaultValue:"Nothing here",placeholder:"Search..."}};var v,C,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "World",
      icon: <Globe />
    }, {
      label: "Rocket",
      icon: <Rocket />
    }, {
      label: "Code",
      icon: <Code />
    }],
    variant: "singleSelect",
    showSearch: false,
    width: "20rem",
    btnVariant: "outline",
    btnClassName: "",
    defaultValue: "Select an option"
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var N,j,V;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Bird",
      icon: <Bird />
    }, {
      label: "Vue"
    }, {
      label: "Angular"
    }, {
      label: "Svelte"
    }, {
      label: "Next.js"
    }],
    variant: "multiselect",
    showSearch: true,
    width: "25rem",
    btnVariant: "secondary",
    btnClassName: "",
    defaultValue: "Select frameworks",
    tooltip: "Clear All"
  }
}`,...(V=(j=o.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var T,D,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "USA"
    }, {
      label: "Canada"
    }, {
      label: "UK"
    }, {
      label: "Germany"
    }, {
      label: "Australia"
    }],
    variant: "singleSelect",
    showSearch: true,
    width: "30rem",
    btnVariant: "default",
    btnClassName: "",
    defaultValue: "Select a country"
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var R,q,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Football"
    }, {
      label: "Basketball"
    }, {
      label: "Tennis"
    }, {
      label: "Cricket"
    }, {
      label: "Hockey"
    }],
    variant: "singleSelect",
    showSearch: true,
    width: "22rem",
    btnVariant: "outline",
    btnClassName: "",
    defaultValue: "Pick a sport as\\n",
    placeholder: "Type to search..."
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var B,I,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [],
    variant: "singleSelect",
    showSearch: true,
    width: "20rem",
    btnVariant: "destructive",
    btnClassName: "",
    defaultValue: "Nothing here",
    placeholder: "Search..."
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const qe=["SingleSelect","MultiSelectWithSearch","LargeDropdown","CustomPlaceholder","NoResults"];export{c as CustomPlaceholder,i as LargeDropdown,o as MultiSelectWithSearch,d as NoResults,r as SingleSelect,qe as __namedExportsOrder,Re as default};
