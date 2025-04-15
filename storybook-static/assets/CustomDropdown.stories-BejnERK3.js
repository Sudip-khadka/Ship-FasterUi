import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DUAV1Q2A.js";import{D as ae,a as te,b as oe,d as ie,e as y,f as ce,g as le,h as ue,i as pe,j as de,c as v}from"./dropdown-menu-ClIvlFH7.js";import{B as me}from"./button-xtdtlWUc.js";import{c as i}from"./utils-CiMRq3MP.js";import{C as ge}from"./chevron-down--jvhOox4.js";import{C as be}from"./chevron-right-EGtfGP26.js";import{H as he}from"./house-CnFB4qlF.js";import{c as m}from"./createLucideIcon-DKpLFxT9.js";import{U as L}from"./user-Br3B8Sm6.js";import"./index-CkJYSq-f.js";import"./index-HDiuFCMG.js";import"./index-BBSvTbSE.js";import"./index-VDvXe9nZ.js";import"./index-CqVsPxxY.js";import"./index-B-6A_WR_.js";import"./index-DYDmQCah.js";import"./Combination-BIAEybTc.js";import"./index-C3aXAtnl.js";import"./floating-ui.react-dom-B6EWZ_Oh.js";import"./index-D66jSSvk.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],ye=m("CirclePlus",xe);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],fe=m("Cloud",ve);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],a=m("Laptop",je);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ne=m("Settings",we);function H({trigger:b,items:E,align:F="end",className:t="",contentClassName:z="w-56",itemClassName:B,open:h,onOpenChange:U}){const[W,P]=x.useState(!1),[$,A]=x.useState({}),Z=h!==void 0?h:W,J=U||P,K=e=>{A(r=>({...r,[e]:!r[e]}))},Q=e=>e.type==="item",X=e=>e.type==="group",Y=e=>e.type==="label",ee=e=>e.type==="separator",se=e=>e.type==="submenu",o=(e,r)=>{const n=s.jsxs(s.Fragment,{children:[e.icon&&s.jsx("span",{className:"mr-2",children:e.icon}),e.image&&s.jsx("img",{src:e.image||"/placeholder.svg",alt:e.label,className:"mr-2 h-4 w-4 rounded-sm"}),s.jsx("span",{children:e.label}),e.shortcut&&s.jsx("span",{className:"ml-auto text-xs tracking-widest opacity-60",children:e.shortcut})]});return e.href?s.jsx(v,{disabled:e.disabled,className:i(r,t,"hover:cursor-pointer"),onClick:e.onClick,asChild:!0,children:s.jsx("a",{href:e.href,children:n})},e.id):s.jsx(v,{onClick:e.onClick,disabled:e.disabled,className:i(r,t,"hover:cursor-pointer"),children:n},e.id)},re=(e,r)=>{if(Q(e))return o(e,r);if(X(e))return s.jsxs(ie,{children:[e.label&&s.jsx(y,{className:"hover:cursor-pointer",children:e.label}),e.items.map(n=>o(n,r))]},e.id);if(Y(e))return s.jsx(y,{className:"hover:cursor-pointer",children:e.label},e.id);if(ee(e))return s.jsx(ce,{},e.id);if(se(e))if(e.submenuType==="collapsible"){const n=$[e.id]||!1;return s.jsxs("div",{children:[s.jsxs("div",{className:i("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm p-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-secondary-800 dark:text-secondary-200 dark:data-[variant=destructive]:text-destructive hover:cursor-pointer",r),onClick:()=>K(e.id),children:[e.icon&&s.jsx("span",{className:"mr-4",children:e.icon}),s.jsx("span",{children:e.label}),s.jsx("span",{className:"ml-auto",children:n?s.jsx(ge,{className:"h-4 w-4"}):s.jsx(be,{className:"h-4 w-4"})})]}),n&&s.jsx("div",{className:" mt-1 space-y-1",children:e.items.map(ne=>o(ne,r))})]},e.id)}else return s.jsxs(le,{children:[s.jsxs(ue,{className:i(r,"hover:cursor-pointer"),children:[e.icon&&s.jsx("span",{className:"mr-2",children:e.icon}),s.jsx("span",{children:e.label})]}),s.jsx(pe,{children:s.jsx(de,{children:e.items.map(n=>o(n,r))})})]},e.id);return null};return s.jsxs(ae,{open:Z,onOpenChange:J,children:[s.jsx(te,{className:"hover:cursor-pointer",asChild:!0,children:b?s.jsx("div",{className:t,children:b}):s.jsx(me,{variant:"secondary",className:t,children:"Open Menu"})}),s.jsx(oe,{align:F,className:z,children:E.map(e=>re(e,B))})]})}H.__docgenInfo={description:"",methods:[],displayName:"CustomDropDown",props:{trigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| ItemType\r
| GroupType\r
| LabelType\r
| SeparatorType\r
| SubmenuType`,elements:[{name:"ItemType"},{name:"GroupType"},{name:"LabelType"},{name:"SeparatorType"},{name:"SubmenuType"}]}],raw:"DropdownItemType[]"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"w-56"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""}}};const V=[{id:"1",type:"item",label:"Home",icon:s.jsx(he,{className:"h-4 w-4"})},{id:"2",type:"item",label:"Settings",icon:s.jsx(Ne,{className:"h-4 w-4"})},{id:"3",type:"separator"},{id:"4",type:"item",label:"Logout",icon:s.jsx(L,{className:"h-4 w-4"})}],g=[{id:"1",type:"submenu",label:"Devices",icon:s.jsx(a,{className:"h-4 w-4"}),submenuType:"collapsible",items:[{id:"1-1",type:"item",label:"Desktop",icon:s.jsx(a,{className:"h-4 w-4"})},{id:"1-2",type:"item",label:"Mobile",icon:s.jsx(a,{className:"h-4 w-4"})}]},{id:"2",type:"submenu",label:"Cloud Services",icon:s.jsx(fe,{className:"h-4 w-4"}),submenuType:"default",items:[{id:"2-1",type:"item",label:"GitHub",icon:s.jsx(a,{className:"h-4 w-4"})},{id:"2-2",type:"item",label:"Vercel",icon:s.jsx(a,{className:"h-4 w-4"})}]}],R=[{id:"1",type:"group",label:"Team",items:[{id:"1-1",type:"item",label:"New Team",icon:s.jsx(ye,{className:"h-4 w-4"})},{id:"1-2",type:"item",label:"Invite Users",icon:s.jsx(L,{className:"h-4 w-4"})}]}],Ae={title:"Components/CustomDropDown",component:H},c={args:{items:V,trigger:s.jsx("button",{children:"Open Menu"}),align:"start"}},l={args:{items:g,trigger:s.jsx("button",{children:"Open Menu with Submenus"}),align:"start"}},u={args:{items:g,trigger:s.jsx("button",{children:"Open Menu with Collapsible Submenu"}),align:"start"}},p={args:{items:R,trigger:s.jsx("button",{children:"Open Menu with Groups"}),align:"start"}},d={args:{items:[...V,...g,...R],trigger:s.jsx("button",{className:"bg-primary-200 p-3 rounded-lg text-primary",children:"Open Full Menu"})}};var f,j,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // const [open,setOpen]=useState(false)
  args: {
    items: basicItems,
    trigger: <button>Open Menu</button>,
    align: "start"
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,S,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: submenuItems,
    trigger: <button>Open Menu with Submenus</button>,
    align: "start"
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var M,C,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: submenuItems,
    trigger: <button>Open Menu with Collapsible Submenu</button>,
    align: "start"
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,k,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: groupItems,
    trigger: <button>Open Menu with Groups</button>,
    align: "start"
  }
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var _,q,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [...basicItems, ...submenuItems, ...groupItems],
    trigger: <button className="bg-primary-200 p-3 rounded-lg text-primary">Open Full Menu</button>
    // itemClassName:"text-destructive-500 "
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ze=["Basic","WithSubmenus","CollapsibleSubmenu","WithGroups","FullMenu"];export{c as Basic,u as CollapsibleSubmenu,d as FullMenu,p as WithGroups,l as WithSubmenus,Ze as __namedExportsOrder,Ae as default};
