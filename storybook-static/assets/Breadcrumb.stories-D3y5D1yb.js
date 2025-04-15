import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./utils-CiMRq3MP.js";import{S as V}from"./index-HDiuFCMG.js";import{E as W}from"./ellipsis-CLhWkH9-.js";import{C as A}from"./chevron-right-EGtfGP26.js";import{c as G}from"./createLucideIcon-DKpLFxT9.js";import{D as F,a as O,b as J,c as B}from"./dropdown-menu-ClIvlFH7.js";import"./clsx-B-dksMZM.js";import"./index-DUAV1Q2A.js";import"./index-CkJYSq-f.js";import"./index-BBSvTbSE.js";import"./index-VDvXe9nZ.js";import"./index-CqVsPxxY.js";import"./index-B-6A_WR_.js";import"./index-DYDmQCah.js";import"./Combination-BIAEybTc.js";import"./index-C3aXAtnl.js";import"./floating-ui.react-dom-B6EWZ_Oh.js";import"./index-D66jSSvk.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],Q=G("Slash",K);function _({...r}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...r})}function o({className:r,...n}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:d("text-muted-foreground flex flex-wrap items-center gap-1 text-sm break-words sm:gap-2.5",r),...n})}function a({className:r,type:n="default",label:i,startIcon:c,endIcon:m,children:g,state:z,...E}){const H=()=>{switch(n){case"link":return"text-secondary-700 hover:text-primary hover:underline active:text-primary p-0 ";case"outline":return"border border-secondary-200 hover:border-primary-200 hover:text-primary active:border-primary";default:return"text-secondary-700 bg-secondary-100 hover:bg-primary-50 hover:text-primary hover:shadow-xs active:shadow-xs active:bg-primary-100 active:text-primary-600"}},R=()=>{switch(z){case"active":switch(n){case"link":return"text-primary";case"outline":return"border-primary-600 text-primary-600";default:return"bg-primary-100 text-primary-600"}case"disabled":return"opacity-50 cursor-not-allowed pointer-events-none text-secondary-500";default:return""}};return e.jsx("li",{"data-slot":"breadcrumb-item",className:d("rounded-sm inline-flex px-2 py-1 items-center gap-1 h-full text-sm font-normal leading-[16px]","leading-none",H(),R(),r),...E,children:g||e.jsxs(e.Fragment,{children:[c&&c,i&&e.jsx("p",{className:"leading-none",children:i}),m&&m]})})}function s({asChild:r,className:n,...i}){const c=r?V:"a";return e.jsx(c,{"data-slot":"breadcrumb-link",className:d("",n),...i})}function l({className:r,...n}){return e.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d("text-foreground font-normal",r),...n})}function t({children:r,variant:n,className:i,size:c="3xl",...m}){const g=()=>{switch(n){case"slash":return e.jsx(Q,{className:"-rotate-20"});case"colon":return e.jsxs("svg",{className:"rotate-90",viewBox:"0 0 20 25",children:[e.jsx("circle",{cx:8,cy:12.5,r:3,fill:"currentColor"}),e.jsx("circle",{cx:17,cy:12.5,r:3,fill:"currentColor"})]});case"arrow":return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",children:e.jsx("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})});default:return e.jsx(A,{})}};return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:d("flex items-center justify-center text-center align-middle text-secondary-500 fill-secondary-500",{sm:"[&>svg]:size-3 [&>span]:text-sm",md:"[&>svg]:size-3.5 [&>span]:text-base",lg:"[&>svg]:size-4 [&>span]:text-lg",xl:"[&>svg]:size-5 [&>span]:text-xl","2xl":"[&>svg]:size-6 [&>span]:text-2xl","3xl":"[&>svg]:size-7 [&>span]:text-3xl"}[c],i),...m,children:r??g()})}function q({className:r,...n}){return e.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:d("flex size-9 items-center justify-center",r),...n,children:[e.jsx(W,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More"})]})}_.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{type:{required:!1,tsType:{name:"union",raw:'"link" | "outline" | "default"',elements:[{name:"literal",value:'"link"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'}]},description:""},state:{required:!1,tsType:{name:"union",raw:'"active" | "disabled"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"disabled"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{variant:{required:!1,tsType:{name:"union",raw:'"slash" | "chevron" | "colon" | "arrow"',elements:[{name:"literal",value:'"slash"'},{name:"literal",value:'"chevron"'},{name:"literal",value:'"colon"'},{name:"literal",value:'"arrow"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'}]},description:"",defaultValue:{value:'"3xl"',computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const xe={title:"Components/Breadcrumb",component:_,tags:["autodocs"]},u={args:{children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(s,{href:"/",children:"Home"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(s,{href:"/products",children:"Products"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(l,{children:"Electronics"})})]})}},p={args:{children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(s,{href:"/",children:"Home"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(s,{href:"/products",children:"Products"})}),e.jsx(t,{}),e.jsxs(F,{children:[e.jsx(O,{children:e.jsx(q,{})}),e.jsxs(J,{align:"start",children:[e.jsx(B,{children:"Documentation"}),e.jsx(B,{children:"Themes"}),e.jsx(B,{children:"GitHub"})]})]}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(l,{children:"Page 3"})})]})}},x={args:{children:e.jsxs(o,{className:"flex-col",children:[e.jsx(a,{children:e.jsx(s,{href:"/",children:"Home"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(s,{href:"/about",children:"About"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(l,{children:"Team"})})]})},decorators:[r=>e.jsx("div",{className:"flex justify-center items-center",style:{height:"100vh"},children:e.jsx(r,{})})]},b={args:{children:e.jsx(o,{children:e.jsx(a,{children:e.jsx(l,{children:"Current Page"})})})}},h={args:{children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(s,{href:"/",children:"Home"})}),e.jsx(t,{children:e.jsx("span",{children:"→"})}),e.jsx(a,{children:e.jsx(s,{href:"/services",children:"Services"})}),e.jsx(t,{}),e.jsx(a,{children:e.jsx(l,{children:"Consulting"})})]})}};var f,j,v;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Electronics</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  }
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,I,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
       <DropdownMenu>\r
        <DropdownMenuTrigger>\r
        <BreadcrumbEllipsis />\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent align="start">\r
              <DropdownMenuItem>Documentation</DropdownMenuItem>\r
              <DropdownMenuItem>Themes</DropdownMenuItem>\r
              <DropdownMenuItem>GitHub</DropdownMenuItem>\r
            </DropdownMenuContent>\r
       </DropdownMenu>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Page 3</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var L,N,k;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList className="flex-col">\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/about">About</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Team</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  },
  decorators: [Story => <div className="flex justify-center items-center" style={{
    height: "100vh"
  }}>\r
        <Story />\r
      </div>]
}`,...(k=(N=x.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var S,D,P;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Current Page</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  }
}`,...(P=(D=b.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var C,M,T;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator>\r
          <span>→</span>\r
        </BreadcrumbSeparator>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/services">Services</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Consulting</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  }
}`,...(T=(M=h.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const be=["Default","WithEllipsis","VerticalLayout","NoLinks","WithCustomSeparator"];export{u as Default,b as NoLinks,x as VerticalLayout,h as WithCustomSeparator,p as WithEllipsis,be as __namedExportsOrder,xe as default};
