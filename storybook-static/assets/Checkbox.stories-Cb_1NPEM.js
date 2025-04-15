import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-DUAV1Q2A.js";const s=({shape:c="square",check:W=!1,indeterminate:z=!1,onChange:n,className:k,...v})=>{const[f,o]=G.useState("default"),t=!!W,i=!!z,r=v["aria-disabled"]===!0,A=()=>{if(r)return;const d=i?!0:!t;n==null||n(d)},B=d=>{if(!r&&(d.key===" "||d.key==="Enter")){d.preventDefault();const F=i?!0:!t;n==null||n(F)}},K=()=>{r||o("hover")},O=()=>{r||o("default")},$=()=>{r||o("pressed")},Z=()=>{r||o("hover")};let b="relative ";f==="pressed"&&!r&&(b+="after:content-[''] after:absolute after:-inset-1 after:rounded-lg after:bg-green-100 after:opacity-70 after:z-0 ");let a="relative z-10 flex items-center justify-center w-6 h-6 flex-shrink-0 border ";return a+=c==="circle"?"rounded-full ":c==="rounded"?"rounded ":"rounded-none ",r?a+="bg-green-200 border-green-200 text-white cursor-not-allowed ":(a+="bg-green-600 border-green-600 text-white ",f==="hover"?a+="bg-green-500 border-green-500 ":f==="pressed"&&(a+="bg-green-700 border-green-700 "),a+="cursor-pointer "),e.jsx("div",{className:b,children:e.jsxs("div",{role:"checkbox","aria-checked":i?"mixed":t,"aria-disabled":r||void 0,tabIndex:r?-1:0,className:`${a}${k?" "+k:""}`,onClick:A,onKeyDown:B,onMouseEnter:K,onMouseLeave:O,onMouseDown:$,onMouseUp:Z,...v,children:[t&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"w-4 h-4",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3801 7.08532C18.6091 7.29524 18.6245 7.65106 18.4146 7.88007L10.1646 16.8801C10.0609 16.9932 9.91558 17.059 9.76219 17.0623C9.6088 17.0657 9.46071 17.0062 9.35222 16.8977L5.60222 13.1477C5.38255 12.9281 5.38255 12.5719 5.60222 12.3522C5.82189 12.1326 6.17805 12.1326 6.39772 12.3522L9.7323 15.6868L17.5853 7.11988C17.7952 6.89087 18.1511 6.8754 18.3801 7.08532Z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),(i||!t&&!i)&&e.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{shape:{required:!1,tsType:{name:"union",raw:'"square" | "rounded" | "circle"',elements:[{name:"literal",value:'"square"'},{name:"literal",value:'"rounded"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"square"',computed:!1}},check:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const P={title:"Components/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{shape:{control:{type:"select"},options:["square","rounded","circle"],description:"The shape of the checkbox",defaultValue:"square"},check:{control:"boolean",description:"Whether the checkbox is check",defaultValue:!1},indeterminate:{control:"boolean",description:"Whether the checkbox is in an indeterminate state",defaultValue:!1},onChange:{action:"changed"}}},l={args:{shape:"square",check:!1,indeterminate:!1}},u={args:{shape:"square",check:!0,indeterminate:!1}},h={args:{shape:"square",check:!1,indeterminate:!0}},m={render:c=>e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{...c,shape:"square"}),e.jsx(s,{...c,shape:"rounded"}),e.jsx(s,{...c,shape:"circle"})]})},p={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium",children:"Uncheck"}),e.jsx(s,{shape:"square",check:!1}),e.jsx(s,{shape:"rounded",check:!1}),e.jsx(s,{shape:"circle",check:!1})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium",children:"check"}),e.jsx(s,{shape:"square",check:!0}),e.jsx(s,{shape:"rounded",check:!0}),e.jsx(s,{shape:"circle",check:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium",children:"Indeterminate"}),e.jsx(s,{shape:"square",indeterminate:!0}),e.jsx(s,{shape:"rounded",indeterminate:!0}),e.jsx(s,{shape:"circle",indeterminate:!0})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 font-medium",children:"Square"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{shape:"square",check:!1}),e.jsx(s,{shape:"square",check:!0}),e.jsx(s,{shape:"square",indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 font-medium",children:"Rounded"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{shape:"rounded",check:!1}),e.jsx(s,{shape:"rounded",check:!0}),e.jsx(s,{shape:"rounded",indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 font-medium",children:"Circle"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{shape:"circle",check:!1}),e.jsx(s,{shape:"circle",check:!0}),e.jsx(s,{shape:"circle",indeterminate:!0})]})]})]})};var j,g,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    shape: "square",
    check: false,
    indeterminate: false
  }
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var N,q,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    shape: "square",
    check: true,
    indeterminate: false
  }
}`,...(y=(q=u.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var w,S,V;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    shape: "square",
    check: false,
    indeterminate: true
  }
}`,...(V=(S=h.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var L,M,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div className="flex space-x-4">\r
      <Checkbox {...args} shape="square" />\r
      <Checkbox {...args} shape="rounded" />\r
      <Checkbox {...args} shape="circle" />\r
    </div>
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,T,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">\r
      <div className="space-y-2">\r
        <div className="font-medium">Uncheck</div>\r
        <Checkbox shape="square" check={false} />\r
        <Checkbox shape="rounded" check={false} />\r
        <Checkbox shape="circle" check={false} />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="font-medium">check</div>\r
        <Checkbox shape="square" check={true} />\r
        <Checkbox shape="rounded" check={true} />\r
        <Checkbox shape="circle" check={true} />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="font-medium">Indeterminate</div>\r
        <Checkbox shape="square" indeterminate={true} />\r
        <Checkbox shape="rounded" indeterminate={true} />\r
        <Checkbox shape="circle" indeterminate={true} />\r
      </div>\r
    </div>
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var R,U,_;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <div className="mb-2 font-medium">Square</div>\r
        <div className="flex space-x-4">\r
          <Checkbox shape="square" check={false} />\r
          <Checkbox shape="square" check={true} />\r
          <Checkbox shape="square" indeterminate={true} />\r
        </div>\r
      </div>\r
      <div>\r
        <div className="mb-2 font-medium">Rounded</div>\r
        <div className="flex space-x-4">\r
          <Checkbox shape="rounded" check={false} />\r
          <Checkbox shape="rounded" check={true} />\r
          <Checkbox shape="rounded" indeterminate={true} />\r
        </div>\r
      </div>\r
      <div>\r
        <div className="mb-2 font-medium">Circle</div>\r
        <div className="flex space-x-4">\r
          <Checkbox shape="circle" check={false} />\r
          <Checkbox shape="circle" check={true} />\r
          <Checkbox shape="circle" indeterminate={true} />\r
        </div>\r
      </div>\r
    </div>
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const Q=["Default","check","Indeterminate","Shapes","AllVariations","ShapeVariations"];export{p as AllVariations,l as Default,h as Indeterminate,x as ShapeVariations,m as Shapes,Q as __namedExportsOrder,u as check,P as default};
