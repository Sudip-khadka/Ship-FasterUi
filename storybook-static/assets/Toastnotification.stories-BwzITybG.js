import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DUAV1Q2A.js";import{I as ce}from"./info-D-ZzTvbA.js";import{c as pe}from"./createLucideIcon-DKpLFxT9.js";import{X as ue}from"./x-CWI0N1Y_.js";import{C as de}from"./check-DKxgdlWy.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ge=pe("TriangleAlert",me),fe={success:{iconBg:"bg-[#18A23F]",textColor:"text-[#22C55E]",progressColor:"bg-green-500",gradientColors:{start:"rgba(0, 237, 81, 0.12)",end:"rgba(0, 237, 123, 0.00)"},icon:e.jsx(de,{className:"text-white"}),svgPath:"M20 6L9 17L4 12"},error:{iconBg:"bg-[#DC2626]",textColor:"text-[#DC2626]",progressColor:"bg-red-500",gradientColors:{start:"rgba(220, 38, 38, 0.12)",end:"rgba(220, 38, 38, 0.00)"},icon:e.jsx(ue,{className:"text-white"}),svgPath:"M18 6L6 18M6 6l12 12"},warning:{iconBg:"bg-[#F59E0B]",textColor:"text-[#F59E0B]",progressColor:"bg-yellow-500",gradientColors:{start:"rgba(245, 158, 11, 0.12)",end:"rgba(245, 158, 11, 0.00)"},icon:e.jsx(ge,{className:"text-white"}),svgPath:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},info:{iconBg:"bg-[#3B82F6]",textColor:"text-[#3B82F6]",progressColor:"bg-blue-500",gradientColors:{start:"rgba(59, 130, 246, 0.12)",end:"rgba(59, 130, 246, 0.00)"},icon:e.jsx(ce,{className:"text-white"}),svgPath:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},he={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4"},x=({message:o,variant:t="success",duration:n=5e3,onClose:s,position:J="top-right",className:K="",iconClassName:Q="",containerClassName:Y="",progressClassName:Z=""})=>{const[ee,te]=a.useState(100),[se,v]=a.useState(!0),[b,w]=a.useState(!1),r=a.useRef(null);if(a.useEffect(()=>(b||(()=>{r.current=setInterval(()=>{te(y=>y<=0?(r.current&&clearInterval(r.current),v(!1),s==null||s(),0):y-100/(n/10))},10)})(),()=>{r.current&&clearInterval(r.current)}),[n,s,b]),!se)return null;const{iconBg:re,textColor:ae,progressColor:oe,gradientColors:i,svgPath:ne}=fe[t],ie=()=>{w(!0),r.current&&(clearInterval(r.current),r.current=null)},le=()=>{w(!1)};return e.jsx("div",{className:`
        fixed ${he[J]} z-50
        ${Y}
      `,children:e.jsxs("div",{className:`flex w-[343px] flex-col items-start rounded-lg bg-[#fff] shadow-lg overflow-hidden relative ${K}`,onMouseEnter:ie,onMouseLeave:le,children:[e.jsxs("div",{className:"toast flex py-3 px-4 justify-end items-start gap-2 self-stretch",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[e.jsx("div",{className:`h-6 w-6 flex items-center justify-center rounded-full ${re} ${Q}`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:ne,stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{className:`flex-1 flex font-sans ${ae} text-sm font-normal leading-normal tracking-tight`,children:o})]}),e.jsx("div",{className:"ellipse h-[212px] w-[212px] absolute left-[-74px] top-[-87px]",style:{background:`radial-gradient(50% 50% at 50% 50%, ${i.start} 0%, ${i.end} 100%)`},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"138",height:"60",viewBox:"0 0 138 60",fill:"none",children:[e.jsx("circle",{cx:"32",cy:"41",r:"106",fill:`url(#paint0_radial_${t})`,fillOpacity:"0.12"}),e.jsx("defs",{children:e.jsxs("radialGradient",{id:`paint0_radial_${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(32 41) rotate(90) scale(106)",children:[e.jsx("stop",{stopColor:i.start.replace("rgba(","").split(",")[0]}),e.jsx("stop",{offset:"1",stopColor:i.start.replace("rgba(","").split(",")[0],stopOpacity:"0"})]})})]})}),e.jsx("button",{onClick:()=>{v(!1),s==null||s()},className:"h-[18px] w-[18px] aspect-square cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M12.75 5.25L5.25 12.75M5.25 5.25L12.75 12.75",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:"h-1 w-full transition-height duration-200",style:{transformOrigin:"left",transform:`scaleX(${ee/100})`,transition:"transform 0.1s linear"},children:e.jsx("div",{className:`h-full ${oe} ${Z}`})})]})})};x.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"success"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-left"\r
| "top-right"\r
| "bottom-left"\r
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},iconClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},progressClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const je={title:"Components/Toast",component:x,argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},position:{control:{type:"select"},options:["top-left","top-right","bottom-left","bottom-right"]},duration:{control:{type:"number"}}}},l={args:{message:"This is a default toast notification",variant:"info"}},c={args:{message:"Operation completed successfully!",variant:"success"}},p={args:{message:"An error occurred while processing your request.",variant:"error"}},u={args:{message:"Warning: This action cannot be undone.",variant:"warning"}},d={args:{message:"This is a very long message that will demonstrate how the toast handles text overflow and wrapping. It contains multiple sentences to show the text management capabilities of the component.",variant:"info"}},m={args:{message:"This toast will disappear after 10 seconds",variant:"info",duration:1e4}},g={render:()=>{const o=["top-left","top-right","bottom-left","bottom-right"];return e.jsx("div",{children:o.map(t=>e.jsx(x,{message:`Toast at ${t} position`,position:t,variant:t.includes("top")?"success":"warning"},t))})}},f={render:()=>{const[o,t]=a.useState(!1),n=()=>{t(!0)},s=()=>{t(!1)};return e.jsxs("div",{children:[e.jsx("button",{onClick:n,className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Show Toast"}),o&&e.jsx(x,{message:"This is an interactive toast that can be manually triggered",variant:"info",onClose:s})]})}},h={args:{message:"Toast with custom styling",variant:"warning",className:"border-4 border-purple-500",iconClassName:"text-purple-700",containerClassName:"shadow-2xl",progressClassName:"bg-purple-500"}};var T,C,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "This is a default toast notification",
    variant: "info"
  }
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var N,S,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    message: "Operation completed successfully!",
    variant: "success"
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var I,L,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: "An error occurred while processing your request.",
    variant: "error"
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,$,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    message: "Warning: This action cannot be undone.",
    variant: "warning"
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var B,E,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: "This is a very long message that will demonstrate how the toast handles text overflow and wrapping. It contains multiple sentences to show the text management capabilities of the component.",
    variant: "info"
  }
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var A,P,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "This toast will disappear after 10 seconds",
    variant: "info",
    duration: 10000
  }
}`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var D,W,F;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const positions: Array<"top-left" | "top-right" | "bottom-left" | "bottom-right"> = ["top-left", "top-right", "bottom-left", "bottom-right"];
    return <div>\r
        {positions.map(position => <Toast key={position} message={\`Toast at \${position} position\`} position={position} variant={position.includes("top") ? "success" : "warning"} />)}\r
      </div>;
  }
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var z,R,U;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    const showToast = () => {
      setIsVisible(true);
    };
    const handleClose = () => {
      setIsVisible(false);
    };
    return <div>\r
        <button onClick={showToast} className="bg-blue-500 text-white px-4 py-2 rounded">\r
          Show Toast\r
        </button>\r
        {isVisible && <Toast message="This is an interactive toast that can be manually triggered" variant="info" onClose={handleClose} />}\r
      </div>;
  }
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,G,H;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    message: "Toast with custom styling",
    variant: "warning",
    className: "border-4 border-purple-500",
    iconClassName: "text-purple-700",
    containerClassName: "shadow-2xl",
    progressClassName: "bg-purple-500"
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Ne=["Default","Success","Error","Warning","LongMessage","CustomDuration","AllPositions","InteractiveToast","CustomStyling"];export{g as AllPositions,m as CustomDuration,h as CustomStyling,l as Default,p as Error,f as InteractiveToast,d as LongMessage,c as Success,u as Warning,Ne as __namedExportsOrder,je as default};
