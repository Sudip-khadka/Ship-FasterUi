import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as le}from"./avatar-BR-MP_2S.js";import{B as O}from"./badge-R0aauyrz.js";import{c as t}from"./utils-CiMRq3MP.js";import{C as p}from"./chevron-right-EGtfGP26.js";import{c as de}from"./createLucideIcon-DKpLFxT9.js";import{M as ce}from"./mail-Cxd3kD9d.js";import{P as me}from"./phone-DwgASd0y.js";import{U as K}from"./user-Br3B8Sm6.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-HDiuFCMG.js";import"./index-DUAV1Q2A.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],pe=de("MessageSquare",ue);function Q({leftContent:a,rightContent:r,label:f,description:n,variant:X="default",size:Y="default",contentAlign:Z="left",contentGap:$="default",className:ee,labelClassName:g,descriptionClassName:h,leftWrapperClassName:x,rightWrapperClassName:v,contentWrapperClassName:te,asButton:b=!1,onClick:ae,...C}){const re="flex w-fit items-center gap-4 rounded-md p-3",ne={default:"bg-background hover:bg-accent/50",bordered:"border bg-background hover:bg-accent/50",card:"bg-card shadow-sm"},se={default:"min-h-[60px] text-sm",sm:"min-h-[42px] py-2 text-xs gap-3",md:"min-h-[48px] py-3 text-sm",lg:"min-h-[56px] py-4 text-base"},oe={left:"items-start text-left",center:"items-center text-center",right:"items-end text-right"},ie={default:"gap-1",tight:"gap-0.5",loose:"gap-2"},N=t(re,ne[X],se[Y],b&&"text-left cursor-pointer",ee),y=t("flex-grow flex flex-col",oe[Z],ie[$],te);return b?e.jsxs("button",{className:N,onClick:ae,type:"button",...C,children:[a&&e.jsx("div",{className:t("flex-shrink-0",x),children:a}),e.jsxs("div",{className:y,children:[e.jsx("p",{className:t("text-sm font-medium text-foreground",g),children:f}),n&&e.jsx("p",{className:t("text-xs text-muted-foreground",h),children:n})]}),r&&e.jsx("div",{className:t("flex-shrink-0",v),children:r})]}):e.jsxs("div",{className:N,...C,children:[a&&e.jsx("div",{className:t("flex-shrink-0",x),children:a}),e.jsxs("div",{className:y,children:[e.jsx("p",{className:t("text-sm font-medium text-foreground",g),children:f}),n&&e.jsx("p",{className:t("text-xs text-muted-foreground",h),children:n})]}),r&&e.jsx("div",{className:t("flex-shrink-0",v),children:r})]})}Q.__docgenInfo={description:"",methods:[],displayName:"ListField",props:{leftContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},contentAlign:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},contentGap:{required:!1,tsType:{name:"union",raw:'"default" | "tight" | "loose"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"tight"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},descriptionClassName:{required:!1,tsType:{name:"string"},description:""},leftWrapperClassName:{required:!1,tsType:{name:"string"},description:""},rightWrapperClassName:{required:!1,tsType:{name:"string"},description:""},contentWrapperClassName:{required:!1,tsType:{name:"string"},description:""},asButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "bordered" | "card"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"card"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "lg"| "md"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const ke={title:"Components/ListField",component:Q,tags:["autodocs"],argTypes:{leftContent:{control:"text"},rightContent:{control:"text"},className:{control:"text"},label:{control:"text"},description:{control:"text"},contentAlign:{control:"radio",options:["left","center","right"]},contentGap:{control:"radio",options:["default","tight","loose"]},fullWidth:{control:"boolean"},variant:{control:"radio",options:["default","bordered","card"]},size:{control:"radio",options:["default","sm","md","lg"]},asButton:{control:"boolean"},onClick:{action:"clicked"}}},s={args:{className:"w-full justify-center",label:"Default Variant",description:"Simple background with hover effect",leftContent:e.jsx(pe,{className:"h-5 w-5"}),rightContent:e.jsx(p,{className:"h-5 w-5 text-muted-foreground"}),variant:"default"}},o={args:{label:"Bordered Variant",description:"With border and hover effect",leftContent:e.jsx(ce,{className:"h-8 w-8 text-muted-foreground"}),rightContent:e.jsx(p,{className:"h-5 w-5 text-muted-foreground"}),variant:"bordered"}},i={args:{label:"Card Variant",description:"With shadow and card background",leftContent:e.jsx(me,{className:"h-8 w-8 "}),rightContent:e.jsx(p,{className:"h-5 w-5 text-muted-foreground"}),variant:"card"}},l={args:{label:"Clickable ListField",description:"This ListField behaves like a button.",contentAlign:"left",contentGap:"default",variant:"default",size:"sm",asButton:!0,onClick:()=>alert("Clicked ListField")}},d={args:{label:"Align Content",description:"Text aligned to",leftContent:e.jsx(K,{className:"h-5 w-5 text-secondary-900"}),rightContent:e.jsx(p,{className:"h-5 w-5 text-muted-foreground"}),variant:"bordered",contentAlign:"left"}},c={args:{label:"Small Size",labelClassName:"text-lg",descriptionClassName:"text-md",description:"Compact size for dense lists",leftContent:e.jsx(K,{className:"h-7 w-7"}),rightContent:e.jsx(O,{variant:"secondary",className:"px-4",size:"sm",shape:"rounded",children:"Small"}),variant:"bordered",size:"sm"}},m={args:{label:"User Profile",description:"john.doe@example.com",leftContent:e.jsx(le,{type:"initial",size:"md",action:"none",initials:"JD",shape:"circle",status:"none"}),rightContent:e.jsx(O,{variant:"secondary",size:"md",shape:"circle",children:"View"}),variant:"bordered"}},u={args:{label:"No Description",description:"",contentAlign:"center",contentGap:"default",variant:"card",size:"sm",fullWidth:!0}};var w,j,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    // Import listfield from shipfaster-ui
    className: "w-full justify-center",
    label: "Default Variant",
    description: "Simple background with hover effect",
    leftContent: <MessageSquare className="h-5 w-5" />,
    rightContent: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant: "default"
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var z,k,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Bordered Variant",
    description: "With border and hover effect",
    leftContent: <Mail className="h-8 w-8 text-muted-foreground" />,
    rightContent: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant: "bordered"
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var A,q,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Card Variant",
    description: "With shadow and card background",
    leftContent: <Phone className="h-8 w-8 " />,
    rightContent: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant: "card"
  }
}`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var B,V,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Clickable ListField",
    description: "This ListField behaves like a button.",
    contentAlign: "left",
    contentGap: "default",
    variant: "default",
    size: "sm",
    asButton: true,
    onClick: () => alert("Clicked ListField")
  }
}`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var W,D,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Align Content",
    description: "Text aligned to",
    leftContent: <User className="h-5 w-5 text-secondary-900" />,
    rightContent: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant: "bordered",
    contentAlign: "left"
  }
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,G,U;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Small Size",
    labelClassName: "text-lg",
    descriptionClassName: "text-md",
    description: "Compact size for dense lists",
    leftContent: <User className="h-7 w-7" />,
    rightContent: <Badge variant="secondary" className="px-4" size={"sm"} shape={"rounded"}>\r
        Small\r
      </Badge>,
    variant: "bordered",
    size: "sm"
  }
}`,...(U=(G=c.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var _,P,I;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "User Profile",
    description: "john.doe@example.com",
    leftContent: <Avatar type="initial" size="md" action="none" initials="JD" shape="circle" status="none">\r
      </Avatar>,
    rightContent: <Badge variant="secondary" size="md" shape={"circle"}>\r
        View\r
      </Badge>,
    variant: "bordered"
  }
}`,...(I=(P=m.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var E,J,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "No Description",
    description: "",
    contentAlign: "center",
    contentGap: "default",
    variant: "card",
    size: "sm",
    fullWidth: true
  }
}`,...(H=(J=u.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};const Te=["Default","Bordered","Card","AsButton","CustomContentAlignment","CustomSize","WithLeftAndRightContent","NoDescription"];export{l as AsButton,o as Bordered,i as Card,d as CustomContentAlignment,c as CustomSize,s as Default,u as NoDescription,m as WithLeftAndRightContent,Te as __namedExportsOrder,ke as default};
