import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./stepper-Bkzfj5rh.js";import{P as I}from"./phone-DwgASd0y.js";import{C as w}from"./check-DKxgdlWy.js";import"./index-DUAV1Q2A.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DKpLFxT9.js";const W={title:"Components/Step",component:t,tags:["autodocs"],argTypes:{state:{control:{type:"select",options:["active","inactive","completed","destructive","disabled"]}},direction:{control:{type:"radio",options:["horizontal","vertical"]}},nodeType:{control:{type:"radio",options:["icon","number","dot"]}},stepperStyle:{control:{type:"radio",options:["lined","boxed","step"]}}}},i={args:{title:"Step Title",description:"Step description goes here",state:"active",index:1}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex gap-0",children:[e.jsx(t,{title:"Active",state:"active",index:1,icon:e.jsx(I,{}),isFirstStep:!0}),e.jsx(t,{title:"Inactive",state:"inactive",index:2}),e.jsx(t,{title:"Completed",state:"completed",index:3}),e.jsx(t,{title:"Destructive",state:"destructive",index:4}),e.jsx(t,{title:"Disabled",state:"disabled",index:5,isLastStep:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t,{title:"Active",state:"active",index:1,direction:"vertical",isFirstStep:!0}),e.jsx(t,{title:"Inactive",state:"inactive",index:2,direction:"vertical"}),e.jsx(t,{title:"Completed",state:"completed",index:3,direction:"vertical",isLastStep:!0})]})]})},r={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"Number",nodeType:"number",index:1}),e.jsx(t,{title:"Icon",nodeType:"icon",icon:e.jsx(w,{className:"h-4 w-4"}),index:2}),e.jsx(t,{title:"Dot",nodeType:"dot",index:3})]})},n={args:{title:"Step with content",description:"This step has additional content below",state:"active",children:e.jsxs("div",{className:"p-4 bg-muted rounded-md",children:[e.jsx("p",{children:"Additional content can go here"}),e.jsx("p",{children:"This could be form fields, instructions, etc."})]})}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(t,{title:"First Step",description:"This is the first step",state:"completed",direction:"vertical",index:1}),e.jsx(t,{title:"Current Step",description:"You are here",state:"active",direction:"vertical",index:2}),e.jsx(t,{title:"Next Step",description:"Coming up next",state:"inactive",direction:"vertical",index:3})]})},a={args:{title:"Custom Icon",description:"Step with a custom icon",nodeType:"icon",icon:e.jsx("span",{className:"text-lg",children:"🌟"})}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Step Title',
    description: 'Step description goes here',
    state: 'active',
    index: 1
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      <div className="flex gap-0">\r
        <Step title="Active" state="active" index={1} icon={<Phone />} isFirstStep />\r
        <Step title="Inactive" state="inactive" index={2} />\r
        <Step title="Completed" state="completed" index={3} />\r
        <Step title="Destructive" state="destructive" index={4} />\r
        <Step title="Disabled" state="disabled" index={5} isLastStep />\r
      </div>\r
      <div className="flex flex-col">\r
        <Step title="Active" state="active" index={1} direction="vertical" isFirstStep />\r
        <Step title="Inactive" state="inactive" index={2} direction="vertical" />\r
        <Step title="Completed" state="completed" index={3} direction="vertical" isLastStep />\r
      </div>\r
    </div>
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,u,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
        <Step title="Number" nodeType="number" index={1} />\r
        <Step title="Icon" nodeType="icon" icon={<Check className="h-4 w-4" />} index={2} />\r
        <Step title="Dot" nodeType="dot" index={3} />\r
      </div>
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Step with content',
    description: 'This step has additional content below',
    state: 'active',
    children: <div className="p-4 bg-muted rounded-md">\r
          <p>Additional content can go here</p>\r
          <p>This could be form fields, instructions, etc.</p>\r
        </div>
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,N,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">\r
        <Step title="First Step" description="This is the first step" state="completed" direction="vertical" index={1} />\r
        <Step title="Current Step" description="You are here" state="active" direction="vertical" index={2} />\r
        <Step title="Next Step" description="Coming up next" state="inactive" direction="vertical" index={3} />\r
      </div>
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var y,C,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Custom Icon',
    description: 'Step with a custom icon',
    nodeType: 'icon',
    icon: <span className="text-lg">🌟</span>
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const Y=["Default","AllStates","NodeTypes","WithContent","VerticalLayout","CustomIcon"];export{s as AllStates,a as CustomIcon,i as Default,r as NodeTypes,o as VerticalLayout,n as WithContent,Y as __namedExportsOrder,W as default};
