import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as E}from"./index-Bro3k9ay.js";import{c as t}from"./utils-jAU0Cazi.js";import{C as H}from"./chevron-right-DxSby-FQ.js";import{c as T}from"./createLucideIcon-CkVng6Ik.js";import{D as z,a as W,b as A,c as h}from"./dropdown-menu-xB__Sq4F.js";import"./index-2yJIXLcc.js";import"./index-Ca5Qc-9M.js";import"./index-B8lP-kFZ.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-Cz7TLFaA.js";import"./index-DSIZK6b3.js";import"./Combination-u2O3jfbA.js";import"./index-DU8idT4y.js";import"./index-DhKEE_zG.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],R=T("Ellipsis",G);function M({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function d({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:t("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function a({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:t("inline-flex items-center gap-1.5",e),...n})}function c({asChild:e,className:n,...b}){const v=e?E:"a";return r.jsx(v,{"data-slot":"breadcrumb-link",className:t("hover:text-foreground transition-colors",n),...b})}function o({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:t("text-foreground font-normal",e),...n})}function s({children:e,className:n,...b}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:t("[&>svg]:size-3.5",n),...b,children:e??r.jsx(H,{})})}function C({className:e,...n}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:t("flex size-9 items-center justify-center",e),...n,children:[r.jsx(R,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}M.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};C.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const sr={title:"Components/Breadcrumb",component:M,tags:["autodocs"]},m={args:{children:r.jsxs(d,{children:[r.jsx(a,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(c,{href:"/products",children:"Products"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(o,{children:"Electronics"})})]})}},i={args:{children:r.jsxs(d,{children:[r.jsx(a,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(c,{href:"/products",children:"Products"})}),r.jsx(s,{}),r.jsxs(z,{children:[r.jsx(W,{children:r.jsx(C,{})}),r.jsxs(A,{align:"start",children:[r.jsx(h,{children:"Documentation"}),r.jsx(h,{children:"Themes"}),r.jsx(h,{children:"GitHub"})]})]}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(o,{children:"Page 3"})})]})}},u={args:{children:r.jsxs(d,{className:"flex-col",children:[r.jsx(a,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(c,{href:"/about",children:"About"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(o,{children:"Team"})})]})},decorators:[e=>r.jsx("div",{className:"flex justify-center items-center",style:{height:"100vh"},children:r.jsx(e,{})})]},l={args:{children:r.jsx(d,{children:r.jsx(a,{children:r.jsx(o,{children:"Current Page"})})})}},p={args:{children:r.jsxs(d,{children:[r.jsx(a,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{children:r.jsx("span",{children:"→"})}),r.jsx(a,{children:r.jsx(c,{href:"/services",children:"Services"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(o,{children:"Consulting"})})]})}};var B,x,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(x=m.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,f,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var L,k,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var y,N,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Current Page</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>
  }
}`,...(D=(N=l.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var P,w,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(w=p.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const cr=["Default","WithEllipsis","VerticalLayout","NoLinks","WithCustomSeparator"];export{m as Default,l as NoLinks,u as VerticalLayout,p as WithCustomSeparator,i as WithEllipsis,cr as __namedExportsOrder,sr as default};
