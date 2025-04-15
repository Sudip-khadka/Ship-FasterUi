import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as d,a as m,b as p}from"./alert-2cEboNZN.js";/* empty css              */import{B as a}from"./button-xtdtlWUc.js";import{B as h}from"./badge-DP59jR1M.js";import{I as f}from"./info-D-ZzTvbA.js";import{X as y}from"./x-CWI0N1Y_.js";import"./index-DUAV1Q2A.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CiMRq3MP.js";import"./index-HDiuFCMG.js";import"./createLucideIcon-DKpLFxT9.js";const P={title:"Components/Alert",component:d,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["primary","destructive","warning","success","secondary"],description:"Choose the type of alert"},style:{control:"radio",options:["accent","filled"],description:"Choose between accent and filled styles"}}},r={args:{variant:"primary",style:"accent",className:"",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"w-8 h-8",children:e.jsx(f,{})}),e.jsxs("span",{className:"flex flex-col gap-1",children:[e.jsx(m,{children:"Information"}),e.jsx(p,{children:"This is a primary alert with accent style."})]})]})}},t={args:{variant:"primary",style:"accent",className:"w-[500px] gap-2 flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"header w-full flex justify-between text-secondary-600",children:[e.jsx(h,{size:"md",variant:"primary",style:"outlined",shape:"circle",children:"New Alert"}),e.jsx(y,{})]}),e.jsxs("div",{className:"titles-container",children:[e.jsx(m,{children:"Alert line which displays the main function or reason of the alert."}),e.jsx(p,{children:"Alert line which displays the main function or reason of the alert."})]}),e.jsxs("div",{className:"othercontent flex gap-3 ",children:[e.jsx(a,{variant:"tertiary",className:"w-fit",children:"Hello"}),e.jsx(a,{className:"w-fit",children:"PrimaryBtn"})]})]})}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    style: "accent",
    className: "",
    children: <>\r
        <span className="w-8 h-8">\r
          <Info />\r
        </span>\r
        <span className="flex flex-col gap-1">\r
          <AlertTitle>Information</AlertTitle>\r
          <AlertDescription>\r
            This is a primary alert with accent style.\r
          </AlertDescription>\r
        </span>\r
      </>
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    style: "accent",
    className: "w-[500px] gap-2 flex flex-col",
    children: <>\r
       <div className="header w-full flex justify-between text-secondary-600">\r
       <Badge size={"md"} variant={"primary"} style={"outlined"} shape={"circle"}>New Alert</Badge>\r
        <XIcon />\r
       </div>\r
       <div className="titles-container">\r
\r
        <AlertTitle>Alert line which displays the main function or reason of the alert.</AlertTitle>\r
        <AlertDescription>Alert line which displays the main function or reason of the alert.</AlertDescription>\r
       </div>\r
      <div className="othercontent flex gap-3 ">\r
      <Button variant={"tertiary"} className="w-fit">Hello</Button>\r
      <Button className="w-fit">PrimaryBtn</Button>\r
     </div></>
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const S=["Primary","Secondary"];export{r as Primary,t as Secondary,S as __namedExportsOrder,P as default};
