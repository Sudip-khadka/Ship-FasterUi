import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as g,S as t}from"./stepper-Bkzfj5rh.js";import{C as s}from"./check-DKxgdlWy.js";import{X as j}from"./x-CWI0N1Y_.js";import"./index-DUAV1Q2A.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DKpLFxT9.js";const E={title:"Components/Stepper",component:g,tags:["autodocs"],argTypes:{direction:{control:"radio",options:["horizontal","vertical"]},style:{control:"radio",options:["lined","boxed","step"]},nodeType:{control:"radio",options:["icon","number","dot"]}}},i={args:{style:"lined",nodeType:"number",direction:"vertical",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Step 1",description:"Description here",state:"completed",direction:"vertical"}),e.jsx(t,{title:"Step 2",description:"Current step",state:"active",direction:"vertical"}),e.jsx(t,{title:"Step 3",description:"Upcoming step",state:"inactive",direction:"vertical",isLastStep:!0})]})}},r={args:{direction:"vertical",style:"boxed",nodeType:"icon",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Step 1",description:"Done",state:"completed",icon:e.jsx(s,{}),nodeType:"icon"}),e.jsx(t,{title:"Step 2",description:"In progress",state:"active",icon:e.jsx(s,{}),nodeType:"icon"}),e.jsx(t,{title:"Step 3",description:"Pending",state:"inactive",icon:e.jsx(s,{}),nodeType:"icon",isLastStep:!0})]})}},n={args:{direction:"horizontal",style:"step",nodeType:"dot",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Step A",state:"completed"}),e.jsx(t,{title:"Step B",state:"active"}),e.jsx(t,{title:"Step C",state:"inactive"})]})}},o={args:{direction:"horizontal",style:"lined",nodeType:"icon",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Step 1",state:"completed",icon:e.jsx(s,{})}),e.jsx(t,{title:"Step 2",state:"destructive",icon:e.jsx(j,{}),description:"Error occurred"}),e.jsx(t,{title:"Step 3",state:"inactive"})]})}};var c,p,a;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    style: "lined",
    nodeType: "number",
    direction: "vertical",
    children: <>\r
        <Step title="Step 1" description="Description here" state="completed" direction="vertical" />\r
        <Step title="Step 2" description="Current step" state="active" direction="vertical" />\r
        <Step title="Step 3" description="Upcoming step" state="inactive" direction="vertical" isLastStep />\r
      </>
  }
}`,...(a=(p=i.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    style: "boxed",
    nodeType: "icon",
    children: <>\r
        <Step title="Step 1" description="Done" state="completed" icon={<Check />} nodeType={"icon"} />\r
        <Step title="Step 2" description="In progress" state="active" icon={<Check />} nodeType={"icon"} />\r
        <Step title="Step 3" description="Pending" state="inactive" icon={<Check />} nodeType={"icon"} isLastStep />\r
      </>
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,u,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    style: "step",
    nodeType: "dot",
    children: <>\r
        <Step title="Step A" state="completed" />\r
        <Step title="Step B" state="active" />\r
        <Step title="Step C" state="inactive" />\r
      </>
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    style: "lined",
    nodeType: "icon",
    children: <>\r
        <Step title="Step 1" state="completed" icon={<Check />} />\r
        <Step title="Step 2" state="destructive" icon={<X />} description="Error occurred" />\r
        <Step title="Step 3" state="inactive" />\r
      </>
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const F=["HorizontalLined","CustomIcon","HorizontalDots","WithDestructiveState"];export{r as CustomIcon,n as HorizontalDots,i as HorizontalLined,o as WithDestructiveState,F as __namedExportsOrder,E as default};
