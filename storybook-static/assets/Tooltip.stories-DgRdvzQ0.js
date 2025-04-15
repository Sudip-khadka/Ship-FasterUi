import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as Ee}from"./index-DUAV1Q2A.js";import{c as n}from"./utils-CiMRq3MP.js";import{B as r}from"./button-DI6Tvl9N.js";import{X as He}from"./x-CWI0N1Y_.js";import"./clsx-B-dksMZM.js";import"./index-HDiuFCMG.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-DKpLFxT9.js";const s=({color:a="White",direction:i="Bottom",pointerPosition:t="Leading",description:j=!0,showTitle:Ne=!0,showAction:L=!0,showClose:C=!0,title:Be="place a Tooltip title",descriptionText:Oe="Tooltips are text labels that appear when the user hovers over or focuses on an element.",actionText:Pe="Button CTA",onAction:be,onClose:b,className:je,isOpen:l,children:Le})=>{const[Ce,c]=u.useState(l||!1),Ae=u.useRef(null),De=u.useRef(null);u.useEffect(()=>{l!==void 0&&c(l)},[l]);const Me=()=>{l===void 0&&c(!0)},Re=()=>{l===void 0&&!C&&c(!1)},We=()=>{c(!1),b==null||b()},Se=()=>!j&&!L?"w-[190px]":"w-[325px]",A=()=>{switch(a){case"Primary":return"bg-green-500 text-white";case"Neutral":return"bg-gray-700 text-white";case"White":default:return"bg-white text-gray-800"}},qe=()=>{if(t==="Off")return"";const p="absolute w-3 h-3 rotate-45";switch(i){case"Top":return n(p,"bottom-[-6px]",{"left-6":t==="Leading","left-1/2 -translate-x-1/2":t==="Middle","right-6":t==="Trailing"});case"Right":return n(p,"left-[-6px]",{"top-6":t==="Leading","top-1/2 -translate-y-1/2":t==="Middle","bottom-6":t==="Trailing"});case"Bottom":return n(p,"top-[-6px]",{"left-6":t==="Leading","left-1/2 -translate-x-1/2":t==="Middle","right-6":t==="Trailing"});case"Left":return n(p,"right-[-6px]",{"top-6":t==="Leading","top-1/2 -translate-y-1/2":t==="Middle","bottom-6":t==="Trailing"});default:return""}},ke=()=>{switch(i){case"Top":return"bottom-full mb-2";case"Right":return"left-full ml-2";case"Bottom":return"top-full mt-2";case"Left":return"right-full mr-2";default:return"top-full mt-2"}},Ve=()=>i==="Left"?"flex-row-reverse":"flex-row";return e.jsxs("div",{className:"relative inline-block",ref:Ae,children:[e.jsx("div",{onMouseEnter:Me,onMouseLeave:Re,className:"inline-block",children:Le}),Ce&&e.jsxs("div",{ref:De,className:n("absolute z-50 rounded-lg shadow-lg",Se(),ke(),A(),je),children:[t!=="Off"&&e.jsx("div",{className:n(qe(),A())}),e.jsxs("div",{className:"relative p-4 flex flex-col h-full",children:[e.jsxs("div",{className:n("flex justify-between items-start w-full",Ve()),children:[Ne&&e.jsx("h3",{className:n("font-medium text-sm",i==="Left"?"ml-auto":""),children:Be}),C&&e.jsx("button",{onClick:We,className:n("text-current cursor-pointer opacity-70 hover:opacity-100 transition-opacity",i==="Left"?"mr-auto":"ml-auto"),"aria-label":"Close tooltip",children:e.jsx(He,{size:16})})]}),j&&e.jsx("p",{className:"text-sm mt-2 opacity-80",children:Oe}),L&&e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(r,{variant:"outline",onClick:be,className:`bg-${a} text-${a==="White"?"gray":"white"} border-${a==="White"?"gray":a} `,children:Pe})})]})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{color:{required:!1,tsType:{name:"union",raw:'"White" | "Primary" | "Neutral"',elements:[{name:"literal",value:'"White"'},{name:"literal",value:'"Primary"'},{name:"literal",value:'"Neutral"'}]},description:"",defaultValue:{value:'"White"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"Top" | "Right" | "Bottom" | "Left"',elements:[{name:"literal",value:'"Top"'},{name:"literal",value:'"Right"'},{name:"literal",value:'"Bottom"'},{name:"literal",value:'"Left"'}]},description:"",defaultValue:{value:'"Bottom"',computed:!1}},pointerPosition:{required:!1,tsType:{name:"union",raw:'"Leading" | "Middle" | "Trailing" | "Off"',elements:[{name:"literal",value:'"Leading"'},{name:"literal",value:'"Middle"'},{name:"literal",value:'"Trailing"'},{name:"literal",value:'"Off"'}]},description:"",defaultValue:{value:'"Leading"',computed:!1}},description:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"place a Tooltip title"',computed:!1}},descriptionText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tooltips are text labels that appear when the user hovers over or focuses on an element."',computed:!1}},actionText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Button CTA"',computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Qe={title:"Components/Tooltip",component:s,argTypes:{color:{control:"select",options:["White","Primary","Neutral"],description:"Tooltip background color"},direction:{control:"select",options:["Top","Right","Bottom","Left"],description:"Direction of the tooltip relative to the trigger element"},pointerPosition:{control:"select",options:["Leading","Middle","Trailing","Off"],description:"Position of the tooltip pointer"},description:{control:"boolean",description:"Whether to show description text"},showTitle:{control:"boolean",description:"Whether to show title"},showAction:{control:"boolean",description:"Whether to show action button"},showClose:{control:"boolean",description:"Whether to show close button"},title:{control:"text",description:"Tooltip title text"},descriptionText:{control:"text",description:"Description text content"},actionText:{control:"text",description:"Action button text"},isOpen:{control:"boolean",description:"Control tooltip visibility externally"}},parameters:{layout:"centered",docs:{description:{component:"A customizable tooltip component with various positioning and styling options."}}}},o={args:{color:"White",direction:"Bottom",pointerPosition:"Leading",description:!0,showTitle:!0,showAction:!0,showClose:!0,title:"Tooltip Title",descriptionText:"This is a description of what this tooltip explains.",actionText:"Action",isOpen:!0,children:e.jsx(r,{variant:"outline",children:"Hover me"})}},d={args:{...o.args,color:"Primary",title:"Primary Tooltip"}},m={args:{...o.args,color:"Neutral",title:"Neutral Tooltip"}},f={args:{...o.args,direction:"Top",title:"Top Direction"}},h={args:{...o.args,direction:"Right",title:"Right Direction"}},g={args:{...o.args,direction:"Left",title:"Left Direction"}},T={args:{...o.args,pointerPosition:"Middle",title:"Middle Pointer"}},x={args:{...o.args,pointerPosition:"Trailing",title:"Trailing Pointer"}},v={args:{...o.args,pointerPosition:"Off",title:"No Pointer"}},w={args:{...o.args,description:!1,showAction:!1,title:"Title Only Tooltip"}},y={args:{...o.args,showClose:!1,title:"No Close Button"}},N={args:{...o.args,showAction:!1,title:"No Action Button"}},B={args:{color:"White",direction:"Bottom",pointerPosition:"Middle",description:!1,showTitle:!0,showAction:!1,showClose:!1,title:"Simple Tooltip",isOpen:!0,children:e.jsx("span",{className:"underline cursor-help",children:"Hover for info"})}},O={render:a=>{const[i,t]=Ee.useState(!1);return e.jsxs("div",{children:[e.jsxs(r,{onClick:()=>t(!i),className:"mb-8",children:[i?"Hide":"Show"," Tooltip"]}),e.jsx("div",{className:"mt-12",children:e.jsx(s,{...a,isOpen:i,onClose:()=>t(!1),onAction:()=>alert("Action clicked!"),children:e.jsx(r,{variant:"outline",children:"Controlled Tooltip"})})})]})},args:{...o.args,isOpen:void 0}},P={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-8",children:[e.jsx(s,{color:"White",direction:"Top",title:"White Top Tooltip",isOpen:!0,children:e.jsx(r,{children:"White Top"})}),e.jsx(s,{color:"Primary",direction:"Bottom",pointerPosition:"Middle",title:"Primary Bottom Tooltip",isOpen:!0,children:e.jsx(r,{children:"Primary Bottom"})}),e.jsx(s,{color:"Neutral",direction:"Right",pointerPosition:"Trailing",title:"Neutral Right Tooltip",isOpen:!0,children:e.jsx(r,{children:"Neutral Right"})}),e.jsx(s,{color:"White",direction:"Left",pointerPosition:"Leading",description:!1,showAction:!1,title:"Minimal Left Tooltip",isOpen:!0,children:e.jsx(r,{children:"Minimal Left"})}),e.jsx(s,{color:"Primary",direction:"Top",pointerPosition:"Off",showClose:!1,title:"No Pointer Tooltip",isOpen:!0,children:e.jsx(r,{children:"No Pointer"})}),e.jsx(s,{color:"Neutral",direction:"Bottom",title:"Action Only",description:!1,showAction:!0,actionText:"Click Me",isOpen:!0,children:e.jsx(r,{children:"Action Only"})})]})};var D,M,R;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: "White",
    direction: "Bottom",
    pointerPosition: "Leading",
    description: true,
    showTitle: true,
    showAction: true,
    showClose: true,
    title: "Tooltip Title",
    descriptionText: "This is a description of what this tooltip explains.",
    actionText: "Action",
    isOpen: true,
    children: <Button variant="outline">Hover me</Button>
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,S,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: "Primary",
    title: "Primary Tooltip"
  }
}`,...(q=(S=d.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var k,V,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: "Neutral",
    title: "Neutral Tooltip"
  }
}`,...(E=(V=m.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var H,_,z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "Top",
    title: "Top Direction"
  }
}`,...(z=(_=f.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var $,F,I;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "Right",
    title: "Right Direction"
  }
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var X,G,J;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "Left",
    title: "Left Direction"
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    pointerPosition: "Middle",
    title: "Middle Pointer"
  }
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    pointerPosition: "Trailing",
    title: "Trailing Pointer"
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    pointerPosition: "Off",
    title: "No Pointer"
  }
}`,...(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ne,se;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: false,
    showAction: false,
    title: "Title Only Tooltip"
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,le,ce;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showClose: false,
    title: "No Close Button"
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,de;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showAction: false,
    title: "No Action Button"
  }
}`,...(de=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,fe,he;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    color: "White",
    direction: "Bottom",
    pointerPosition: "Middle",
    description: false,
    showTitle: true,
    showAction: false,
    showClose: false,
    title: "Simple Tooltip",
    isOpen: true,
    children: <span className="underline cursor-help">Hover for info</span>
  }
}`,...(he=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,Te,xe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div>\r
        <Button onClick={() => setIsOpen(!isOpen)} className="mb-8">\r
          {isOpen ? "Hide" : "Show"} Tooltip\r
        </Button>\r
\r
        <div className="mt-12">\r
          <Tooltip {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onAction={() => alert("Action clicked!")}>\r
            <Button variant="outline">Controlled Tooltip</Button>\r
          </Tooltip>\r
        </div>\r
      </div>;
  },
  args: {
    ...Default.args,
    isOpen: undefined // Let the story control this
  }
}`,...(xe=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var ve,we,ye;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    return <div className="grid grid-cols-3 gap-8">\r
        <Tooltip color="White" direction="Top" title="White Top Tooltip" isOpen={true}>\r
          <Button>White Top</Button>\r
        </Tooltip>\r
\r
        <Tooltip color="Primary" direction="Bottom" pointerPosition="Middle" title="Primary Bottom Tooltip" isOpen={true}>\r
          <Button>Primary Bottom</Button>\r
        </Tooltip>\r
\r
        <Tooltip color="Neutral" direction="Right" pointerPosition="Trailing" title="Neutral Right Tooltip" isOpen={true}>\r
          <Button>Neutral Right</Button>\r
        </Tooltip>\r
\r
        <Tooltip color="White" direction="Left" pointerPosition="Leading" description={false} showAction={false} title="Minimal Left Tooltip" isOpen={true}>\r
          <Button>Minimal Left</Button>\r
        </Tooltip>\r
\r
        <Tooltip color="Primary" direction="Top" pointerPosition="Off" showClose={false} title="No Pointer Tooltip" isOpen={true}>\r
          <Button>No Pointer</Button>\r
        </Tooltip>\r
\r
        <Tooltip color="Neutral" direction="Bottom" title="Action Only" description={false} showAction={true} actionText="Click Me" isOpen={true}>\r
          <Button>Action Only</Button>\r
        </Tooltip>\r
      </div>;
  }
}`,...(ye=(we=P.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};const Ue=["Default","Primary","Neutral","TopDirection","RightDirection","LeftDirection","MiddlePointer","TrailingPointer","NoPointer","TitleOnly","WithoutClose","WithoutAction","MinimalTooltip","ControlledTooltip","TooltipShowcase"];export{O as ControlledTooltip,o as Default,g as LeftDirection,T as MiddlePointer,B as MinimalTooltip,m as Neutral,v as NoPointer,d as Primary,h as RightDirection,w as TitleOnly,P as TooltipShowcase,f as TopDirection,x as TrailingPointer,N as WithoutAction,y as WithoutClose,Ue as __namedExportsOrder,Qe as default};
