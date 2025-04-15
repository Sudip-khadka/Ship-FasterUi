import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DUAV1Q2A.js";import{c as s}from"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";const q=({label:l,helperText:n,maxLength:y,showCounter:ce=!0,showHelperText:ue=!0,showLabel:de=!0,error:w=!1,success:C=!1,className:pe,containerClassName:me,labelClassName:he,helperTextClassName:ge,counterClassName:xe,textareaContainerClassName:Te,disabled:N=!1,value:i,onChange:F,...a})=>{const[fe,M]=o.useState(!1),[be,S]=o.useState(!1),[v,_]=o.useState(i||""),ye=o.useRef(null);o.useEffect(()=>{i!==void 0&&_(i)},[i]);const we=e=>{_(e.target.value),F&&F(e)},Ce=e=>{M(!0),a.onFocus&&a.onFocus(e)},Ne=e=>{M(!1),a.onBlur&&a.onBlur(e)},ve=()=>{N||S(!0)},qe=()=>{S(!1)},Fe=typeof v=="string"?v.length:0,Me=()=>{const e="w-full py-2 px-3 text-sm transition-all duration-200 outline-none";let t="rounded-lg border border-[#F1F1F1] bg-white caret-[#18a23f]";return N?t="rounded-lg border border-[#F1F1F1] bg-gray-50 opacity-70 cursor-not-allowed":w?t="rounded-lg border border-[#EF4444] bg-white ring-2 ring-red-100 caret-[#EF4444]":C?t="rounded-lg border border-[#89D09D] bg-white ring-2 ring-green-100 caret-[#18a23f]":fe?t="rounded-lg border border-[#89D09D] bg-white shadow-[0px_0px_0px_4px_rgba(225,243,229,0.70)] caret-[#18a23f]":be&&(t="rounded-lg border border-[#F1F1F1] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_2px_0px_rgba(16,24,40,0.04)] caret-[#18a23f]"),s(e,t)};return r.jsxs("div",{className:s("w-full",me),children:[l&&de&&r.jsx("label",{htmlFor:a.id,className:s("block text-sm font-medium mb-1.5",w?"text-[#EF4444]":C?"text-green-600":"text-gray-700",he),children:l}),r.jsxs("div",{className:s("relative",Te),children:[r.jsx("textarea",{ref:ye,className:s(Me(),pe),disabled:N,value:v,onChange:we,onFocus:Ce,onBlur:Ne,onMouseEnter:ve,onMouseLeave:qe,maxLength:y,...a}),ce&&y&&r.jsxs("div",{className:s("absolute right-3 bottom-3 text-xs text-gray-400",xe),children:[Fe,"/",y]})]}),n&&ue&&r.jsx("div",{className:s("mt-1.5 text-xs",w?"text-[#EF4444]":C?"text-green-600":"text-gray-500",ge),children:n})]})};q.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},containerClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},helperTextClassName:{required:!1,tsType:{name:"string"},description:""},counterClassName:{required:!1,tsType:{name:"string"},description:""},textareaContainerClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const je={title:"Components/Textarea",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},success:{control:"boolean"},showCounter:{control:"boolean"},showHelperText:{control:"boolean"},showLabel:{control:"boolean"},maxLength:{control:"number"},rows:{control:"number"}}},c={args:{label:"Message",placeholder:"Type your message here",helperText:"This is a helper text",rows:4}},u={args:{label:"Message",placeholder:"Type your message here",helperText:"Maximum 100 characters",maxLength:100,showCounter:!0,rows:4}},d={args:{label:"Message",placeholder:"Type your message here",helperText:"This field is required",error:!0,rows:4}},p={args:{label:"Message",placeholder:"Type your message here",helperText:"Message saved successfully",success:!0,rows:4,value:"This is a successful message"}},m={args:{label:"Message",placeholder:"Type your message here",helperText:"This field is disabled",disabled:!0,rows:4}},h={args:{showLabel:!1,placeholder:"Type your message here",helperText:"No label is shown",rows:4}},g={args:{label:"Message",placeholder:"Type your message here",showHelperText:!1,rows:4}},x={args:{label:"Custom Styled Textarea",placeholder:"Type your message here",helperText:"With custom styling",className:"font-medium",containerClassName:"max-w-lg",labelClassName:"text-blue-600",helperTextClassName:"italic",rows:4}},T={parameters:{docs:{description:{story:"Example of using the Textarea as a controlled component. In your actual implementation, you would manage the state."}}},render:l=>r.jsx(q,{...l,value:"This is a controlled textarea",onChange:n=>console.log("Value changed:",n.target.value)})},f={args:{label:"Feedback",placeholder:"Type your feedback here",helperText:"Tell us what you think",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",rows:5,maxLength:200,showCounter:!0}},b={args:{label:"Responsive Textarea",placeholder:"This textarea adjusts to its container",helperText:"Try resizing the window",rows:4,containerClassName:"w-full md:w-2/3 lg:w-1/2"}};var E,L,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This is a helper text",
    rows: 4
  }
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var V,W,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "Maximum 100 characters",
    maxLength: 100,
    showCounter: true,
    rows: 4
  }
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var H,k,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This field is required",
    error: true,
    rows: 4
  }
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,B,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "Message saved successfully",
    success: true,
    rows: 4,
    value: "This is a successful message"
  }
}`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var O,A,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This field is disabled",
    disabled: true,
    rows: 4
  }
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,P;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    placeholder: "Type your message here",
    helperText: "No label is shown",
    rows: 4
  }
}`,...(P=(K=h.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here",
    showHelperText: false,
    rows: 4
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: "Custom Styled Textarea",
    placeholder: "Type your message here",
    helperText: "With custom styling",
    className: "font-medium",
    containerClassName: "max-w-lg",
    labelClassName: "text-blue-600",
    helperTextClassName: "italic",
    rows: 4
  }
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,re;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Example of using the Textarea as a controlled component. In your actual implementation, you would manage the state."
      }
    }
  },
  render: args => <Textarea {...args} value="This is a controlled textarea" onChange={e => console.log("Value changed:", e.target.value)} />
}`,...(re=(se=T.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    placeholder: "Type your feedback here",
    helperText: "Tell us what you think",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    rows: 5,
    maxLength: 200,
    showCounter: true
  }
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ne,ie;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: "Responsive Textarea",
    placeholder: "This textarea adjusts to its container",
    helperText: "Try resizing the window",
    rows: 4,
    containerClassName: "w-full md:w-2/3 lg:w-1/2"
  }
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Ve=["Default","WithCounter","WithError","WithSuccess","Disabled","NoLabel","NoHelperText","CustomStyling","Controlled","FilledWithText","Responsive"];export{T as Controlled,x as CustomStyling,c as Default,m as Disabled,f as FilledWithText,g as NoHelperText,h as NoLabel,b as Responsive,u as WithCounter,d as WithError,p as WithSuccess,Ve as __namedExportsOrder,je as default};
