import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DUAV1Q2A.js";import{c as u}from"./utils-CiMRq3MP.js";import{M as x}from"./mail-Cxd3kD9d.js";import{c as h}from"./createLucideIcon-DKpLFxT9.js";import{C as ra}from"./calendar-DWxk0USB.js";import{P as ee}from"./phone-DwgASd0y.js";import{S as la}from"./search-JPITP0I2.js";import{U as na}from"./user-Br3B8Sm6.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],te=h("EyeOff",qa);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ae=h("Eye",Va);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],oa=h("Hash",Wa);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],se=h("Lock",Ba);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],pa=h("Upload",Oa);function a({className:n,type:l="outlined",size:s="md",state:o,disabled:p=!1,inputType:ia="text",label:re,showLabel:ua=!0,labelClassName:ca,placeholderText:da,showPlaceholder:ma=!0,helperText:le,showHelperText:xa=!0,helperTextClassName:ha,maxLength:X,showCounter:Ta=!1,counterClassName:ba,startIcon:Y,endIcon:m,onStartIconClick:ne,onEndIconClick:oe,iconClassName:pe,containerClassName:ya,inputClassName:ga,inputContainerClassName:fa,onChange:ie,onFocus:ue,onBlur:ce,...T}){const[c,i]=d.useState(o||"default"),[b,va]=d.useState(T.value||T.defaultValue||""),[de,me]=d.useState(!1),r=o||c;d.useEffect(()=>{p&&!o?i("disabled"):c==="disabled"&&!p&&!o&&i("default")},[p,c,o]);const Ia=e=>{const z=e.target.value;va(z),ie&&ie(e),o||(z&&c!=="disabled"&&c!=="active"?i("typing"):!z&&c!=="disabled"&&c!=="active"&&i("default"))},wa=e=>{p||(me(!0),o||i("active")),ue&&ue(e)},Na=e=>{me(!1),!p&&!o&&i(b?"typing":"default"),ce&&ce(e)},Sa=()=>{!p&&!de&&!o&&i("hovered")},Ca=()=>{!p&&!de&&!o&&i(b?"typing":"default")},Ea=typeof b=="string"?b.length:0,Z=X!==void 0&&Ta,Da=()=>{switch(s){case"sm":return"h-8 text-xs py-1 px-2";case"md":return"h-10 text-sm py-2 px-3";case"lg":return"h-12 text-base py-2.5 px-4";case"xl":return"h-14 text-lg py-3 px-5";default:return"h-10 text-sm py-2 px-3"}},ja=()=>{switch(l){case"boxed":return"bg-white border rounded-md";case"lined":return"border-b  border-t-0 border-l-0 border-r-0 bg-transparent";case"outlined":return"bg-transparent border rounded-md";default:return"bg-transparent border rounded-md"}},La=()=>{let e="";switch(r){case"Focused":e+=" border-[#DDDDDD]";break;case"disabled":e+=" opacity-50 bg-gray-100 border-gray-300";break;case"error":e+=" border-[#EF4444] text-[#EF4444]",e+=l==="boxed"?" shadow-[#fee2e2]":" ring-2 ring-red-100";break;case"success":e+=" border-[#89D09D]",e+=l==="boxed"?" shadow-[#89D09D]":" ring-2 ring-green-200";break;case"active":e+=" border-[#89D09D]";break;case"hovered":e+=" border-[#CACACA]",l==="boxed"&&(e+=" shadow-sm");break;case"typing":e+=" border-[#89d09d]",l==="boxed"&&(e+=" shadow-sm");break;default:e+=" border-[#F1F1F1]";break}return e},Pa=()=>{let e="w-full placeholder:text-[#DDDDDD] transition-all duration-200 focus:outline-none disabled:cursor-not-allowed";return e+=" "+Da(),e+=" "+ja(),e+=" "+La(),Y&&(e+=s==="sm"?" pl-7":s==="lg"||s==="xl"?" pl-11":" pl-9"),m&&Z?e+=s==="sm"?" pr-20":s==="lg"||s==="xl"?" pr-28":" pr-24":m?e+=s==="sm"?" pr-7":s==="lg"||s==="xl"?" pr-11":" pr-9":Z&&(e+=s==="sm"?" pr-14":s==="lg"||s==="xl"?" pr-20":" pr-16"),r==="error"?e+=" caret-red-500":r==="success"?e+=" caret-[#18a23f] ":e+=" caret-[#18a23f]  ",e},ka=()=>{let e="font-medium mb-1.5 block";return s==="sm"?e+=" text-xs":s==="lg"||s==="xl"?e+=" text-base":e+=" text-sm",r==="error"?e+=" text-[#040404]":r==="success"?e+=" text-green-500":r==="disabled"&&(e+=" opacity-50"),e},Aa=()=>{let e="mt-1.5";return s==="sm"?e+=" text-xs":s==="lg"||s==="xl"?e+=" text-sm":e+=" text-xs",r==="error"?e+=" text-[#EF4444]":r==="success"?e+=" text-green-500":r==="disabled"?e+=" text-gray-400 opacity-50":e+=" text-gray-500",e},Ha=()=>{let e="absolute top-1/2 transform -translate-y-1/2";return s==="sm"?e+=" text-xs":s==="lg"||s==="xl"?e+=" text-sm":e+=" text-xs",e+=m?" right-10":" right-3",(s==="lg"||s==="xl")&&(e+=m?" right-12":" right-4"),r==="error"?e+=" text-[#EF4444]":r==="success"?e+=" text-green-500":r==="disabled"?e+=" text-gray-400 opacity-50":e+=" text-gray-500",e},xe=()=>s==="sm"?"h-3.5 w-3.5":s==="lg"?"h-5 w-5":s==="xl"?"h-6 w-6":"h-4 w-4",Ma=()=>{let e="absolute left-3 top-1/2 transform -translate-y-1/2 z-10";return s==="sm"?e="absolute left-2 top-1/2 transform -translate-y-1/2 z-10":(s==="lg"||s==="xl")&&(e="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"),e},Fa=()=>{let e="absolute right-3 top-1/2 transform -translate-y-1/2 z-10";return s==="sm"?e="absolute right-2 top-1/2 transform -translate-y-1/2 z-10":(s==="lg"||s==="xl")&&(e="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"),e},he=()=>r==="error"?"text-red-500":r==="success"?"text-green-500":r==="disabled"?"text-gray-400 opacity-50":r==="active"?"text-green-500":"text-gray-500";return t.jsxs("div",{className:u("w-full",ya),children:[re&&ua&&t.jsx("label",{htmlFor:T.id,className:u(ka(),ca),children:re}),t.jsxs("div",{className:u("relative",fa),children:[Y&&t.jsx("div",{className:u(Ma(),ne&&"cursor-pointer",pe),onClick:p?void 0:ne,children:t.jsx(Y,{className:u(xe(),he())})}),t.jsx("input",{className:u(Pa(),ga,n),placeholder:ma?da:void 0,disabled:p,onChange:Ia,onFocus:wa,onBlur:Na,onMouseEnter:Sa,onMouseLeave:Ca,maxLength:X,type:ia,...T}),Z&&t.jsxs("div",{className:u(Ha(),ba),children:[Ea,"/",X]}),m&&t.jsx("div",{className:u(Fa(),oe&&"cursor-pointer",pe),onClick:p?void 0:oe,children:t.jsx(m,{className:u(xe(),he())})})]}),le&&xa&&t.jsx("div",{className:u(Aa(),ha),children:le})]})}a.__docgenInfo={description:"",methods:[],displayName:"CustomInput",props:{type:{required:!1,tsType:{name:"union",raw:'"boxed" | "lined" | "outlined"',elements:[{name:"literal",value:'"boxed"'},{name:"literal",value:'"lined"'},{name:"literal",value:'"outlined"'}]},description:"",defaultValue:{value:'"outlined"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:`| "default"\r
| "typing"\r
| "active"\r
| "Focused"\r
| "disabled"\r
| "hovered"\r
| "success"\r
| "error"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"typing"'},{name:"literal",value:'"active"'},{name:"literal",value:'"Focused"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},inputType:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},placeholderText:{required:!1,tsType:{name:"string"},description:""},showPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},endIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},onStartIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEndIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},helperTextClassName:{required:!1,tsType:{name:"string"},description:""},counterClassName:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},inputContainerClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const Za={title:"Components/CustomInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["outlined","lined","boxed"],description:"The visual style of the input",defaultValue:"outlined"},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the input",defaultValue:"md"},state:{control:"select",options:["default","typing","active","disabled","hovered","success","error"],description:"The current state of the input",defaultValue:"default"},inputType:{control:"select",options:["text","password","email","number","tel","url","date","file"],description:"The HTML input type",defaultValue:"text"},label:{control:"text",description:"The label text for the input"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},placeholderText:{control:"text",description:"The placeholder text for the input"},showPlaceholder:{control:"boolean",description:"Whether to show the placeholder",defaultValue:!0},helperText:{control:"text",description:"Helper text displayed below the input"},showHelperText:{control:"boolean",description:"Whether to show the helper text",defaultValue:!0},maxLength:{control:"number",description:"Maximum number of characters allowed"},showCounter:{control:"boolean",description:"Whether to show the character counter",defaultValue:!1},disabled:{control:"boolean",description:"Whether the input is disabled",defaultValue:!1},className:{control:"text",description:"Additional CSS classes to apply to the input"},containerClassName:{control:"text",description:"Additional CSS classes to apply to the container"},inputClassName:{control:"text",description:"Additional CSS classes to apply to the input element"}}},y={args:{label:"Label",placeholderText:"Input text field here",helperText:"Helper text",className:"w-80"}},g={args:{label:"Label",value:"Input value",helperText:"Helper text",className:"w-80"}},f={args:{label:"Label",placeholderText:"Input text field here",helperText:"Helper text",maxLength:240,showCounter:!0,className:"w-80"}},v={args:{type:"outlined",label:"Outlined Input",placeholderText:"Input text field here",helperText:"This is an outlined input",className:"w-80"}},I={args:{type:"lined",label:"Lined Input",placeholderText:"Input text field here",helperText:"This is a lined input",className:"w-80"}},w={args:{type:"boxed",label:"Boxed Input",placeholderText:"Input text field here",helperText:"This is a boxed input",className:"w-80"}},N={args:{size:"sm",label:"Small Input",placeholderText:"Small input field",helperText:"This is a small input",className:"w-64"}},S={args:{size:"md",label:"Medium Input",placeholderText:"Medium input field",helperText:"This is a medium input",className:"w-80"}},C={args:{size:"lg",label:"Large Input",placeholderText:"Large input field",helperText:"This is a large input",className:"w-96"}},E={args:{size:"xl",label:"Extra Large Input",placeholderText:"Extra large input field",helperText:"This is an extra large input",className:"w-[32rem]"}},D={args:{label:"Error Input",value:"Invalid input",helperText:"This input has an error",state:"error",className:"w-80"}},j={args:{label:"Success Input",value:"Valid input",helperText:"This input is valid",state:"success",className:"w-80"}},L={args:{label:"Disabled Input",value:"Disabled input",helperText:"This input is disabled",disabled:!0,className:"w-80"}},P={args:{label:"Hovered Input",placeholderText:"Hover over me",helperText:"This input is hovered",state:"hovered",className:"w-80"}},k={args:{label:"Active Input",value:"Active input",helperText:"This input is active",state:"active",className:"w-80"}},A={args:{label:"Text Input",inputType:"text",placeholderText:"Enter text here",helperText:"Standard text input",className:"w-80"}},H={args:{label:"Email Input",inputType:"email",placeholderText:"example@domain.com",helperText:"Enter a valid email address",startIcon:x,className:"w-80"}},M={render:n=>{const[l,s]=d.useState(!1);return t.jsx(a,{...n,label:"Password Input",inputType:l?"text":"password",placeholderText:"Enter your password",helperText:"Password must be at least 8 characters",startIcon:se,endIcon:l?te:ae,onEndIconClick:()=>s(!l),className:"w-80"})}},F={args:{label:"Number Input",inputType:"number",placeholderText:"Enter a number",helperText:"Numeric input only",startIcon:oa,className:"w-80"}},q={args:{label:"Date Input",inputType:"date",helperText:"Select a date",startIcon:ra,className:"w-80"}},V={args:{label:"Telephone Input",inputType:"tel",placeholderText:"(123) 456-7890",helperText:"Enter your phone number",startIcon:ee,className:"w-80"}},W={args:{label:"File Input",inputType:"file",helperText:"Select a file to upload",startIcon:pa,className:"w-80"}},B={args:{label:"Email",placeholderText:"Enter your email",helperText:"We'll never share your email",startIcon:x,className:"w-80"}},O={args:{label:"Search",placeholderText:"Search...",helperText:"Enter your search query",endIcon:la,className:"w-80"}},_={args:{label:"Email",placeholderText:"Enter your email",helperText:"We'll never share your email",startIcon:x,endIcon:la,className:"w-80"}},U={args:{label:"Bio",placeholderText:"Tell us about yourself",helperText:"Keep it brief",maxLength:100,showCounter:!0,startIcon:na,className:"w-80"}},R={render:()=>t.jsxs("div",{className:"space-y-6 w-[400px]",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Outlined Type"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(a,{type:"outlined",label:"Default",placeholderText:"Default state",helperText:"Default state example"}),t.jsx(a,{type:"outlined",label:"Hovered",placeholderText:"Hovered state",helperText:"Hovered state example",state:"hovered"}),t.jsx(a,{type:"outlined",label:"Active",value:"Active state",helperText:"Active state example",state:"active"}),t.jsx(a,{type:"outlined",label:"Typing",value:"Typing state",helperText:"Typing state example",state:"typing"}),t.jsx(a,{type:"outlined",label:"Success",value:"Success state",helperText:"Success state example",state:"success"}),t.jsx(a,{type:"outlined",label:"Error",value:"Error state",helperText:"Error state example",state:"error"}),t.jsx(a,{type:"outlined",label:"Disabled",value:"Disabled state",helperText:"Disabled state example",disabled:!0})]}),t.jsx("h3",{className:"text-lg font-semibold mt-8",children:"Lined Type"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(a,{type:"lined",label:"Default",placeholderText:"Default state",helperText:"Default state example"}),t.jsx(a,{type:"lined",label:"Hovered",placeholderText:"Hovered state",helperText:"Hovered state example",state:"hovered"}),t.jsx(a,{type:"lined",label:"Active",value:"Active state",helperText:"Active state example",state:"active"}),t.jsx(a,{type:"lined",label:"Typing",value:"Typing state",helperText:"Typing state example",state:"typing"}),t.jsx(a,{type:"lined",label:"Success",value:"Success state",helperText:"Success state example",state:"success"}),t.jsx(a,{type:"lined",label:"Error",value:"Error state",helperText:"Error state example",state:"error"}),t.jsx(a,{type:"lined",label:"Disabled",value:"Disabled state",helperText:"Disabled state example",disabled:!0})]}),t.jsx("h3",{className:"text-lg font-semibold mt-8",children:"Boxed Type"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(a,{type:"boxed",label:"Default",placeholderText:"Default state",helperText:"Default state example"}),t.jsx(a,{type:"boxed",label:"Hovered",placeholderText:"Hovered state",helperText:"Hovered state example",state:"hovered"}),t.jsx(a,{type:"boxed",label:"Active",value:"Active state",helperText:"Active state example",state:"active"}),t.jsx(a,{type:"boxed",label:"Typing",value:"Typing state",helperText:"Typing state example",state:"typing"}),t.jsx(a,{type:"boxed",label:"Success",value:"Success state",helperText:"Success state example",state:"success"}),t.jsx(a,{type:"boxed",label:"Error",value:"Error state",helperText:"Error state example",state:"error"}),t.jsx(a,{type:"boxed",label:"Disabled",value:"Disabled state",helperText:"Disabled state example",disabled:!0})]})]})},K={render:()=>t.jsxs("div",{className:"space-y-4 w-[400px]",children:[t.jsx(a,{type:"outlined",label:"Outlined Input",placeholderText:"Outlined input example",helperText:"This is an outlined input"}),t.jsx(a,{type:"lined",label:"Lined Input",placeholderText:"Lined input example",helperText:"This is a lined input"}),t.jsx(a,{type:"boxed",label:"Boxed Input",placeholderText:"Boxed input example",helperText:"This is a boxed input"})]})},$={render:()=>t.jsxs("div",{className:"space-y-4 w-[500px]",children:[t.jsx(a,{size:"sm",label:"Small Input",placeholderText:"Small input field",helperText:"This is a small input"}),t.jsx(a,{size:"md",label:"Medium Input",placeholderText:"Medium input field",helperText:"This is a medium input"}),t.jsx(a,{size:"lg",label:"Large Input",placeholderText:"Large input field",helperText:"This is a large input"}),t.jsx(a,{size:"xl",label:"Extra Large Input",placeholderText:"Extra large input field",helperText:"This is an extra large input"})]})},G={render:()=>{const[n,l]=d.useState(!1);return t.jsxs("div",{className:"space-y-4 w-[400px]",children:[t.jsx(a,{label:"Text Input",inputType:"text",placeholderText:"Enter text here",helperText:"Standard text input",startIcon:x}),t.jsx(a,{label:"Email Input",inputType:"email",placeholderText:"example@domain.com",helperText:"Enter a valid email address",startIcon:x}),t.jsx(a,{label:"Password Input",inputType:n?"text":"password",placeholderText:"Enter your password",helperText:"Password must be at least 8 characters",startIcon:se,endIcon:n?te:ae,onEndIconClick:()=>l(!n)}),t.jsx(a,{label:"Number Input",inputType:"number",placeholderText:"Enter a number",helperText:"Numeric input only",startIcon:oa}),t.jsx(a,{label:"Date Input",inputType:"date",helperText:"Select a date",startIcon:ra}),t.jsx(a,{label:"Telephone Input",inputType:"tel",placeholderText:"(123) 456-7890",helperText:"Enter your phone number",startIcon:ee}),t.jsx(a,{label:"File Input",inputType:"file",helperText:"Select a file to upload",startIcon:pa})]})}},J={args:{label:"Custom Styled Input",placeholderText:"Enter text here",helperText:"This input has custom styling",className:"border-purple-500 focus:border-purple-700 caret-purple-500",labelClassName:"text-purple-700 font-bold",helperTextClassName:"text-purple-600 italic",containerClassName:"bg-purple-50 p-4 rounded-lg"}},Q={render:()=>{const[n,l]=d.useState(!1);return t.jsxs("div",{className:"space-y-4 w-[400px] p-6 border rounded-lg bg-white",children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Registration Form"}),t.jsx(a,{type:"outlined",label:"Full Name",placeholderText:"Enter your full name",helperText:"First and last name",startIcon:na}),t.jsx(a,{type:"outlined",label:"Email Address",inputType:"email",placeholderText:"Enter your email",helperText:"We'll never share your email",startIcon:x}),t.jsx(a,{type:"outlined",label:"Password",inputType:n?"text":"password",placeholderText:"Enter your password",helperText:"Must be at least 8 characters",startIcon:se,endIcon:n?te:ae,onEndIconClick:()=>l(!n)}),t.jsx(a,{type:"outlined",label:"Phone Number",inputType:"tel",placeholderText:"(123) 456-7890",helperText:"Enter your phone number",startIcon:ee}),t.jsx(a,{type:"outlined",label:"Bio",placeholderText:"Tell us about yourself",helperText:"Keep it brief",maxLength:100,showCounter:!0}),t.jsx("button",{className:"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-2",children:"Register"})]})}};var Te,be,ye;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholderText: "Input text field here",
    helperText: "Helper text",
    className: "w-80"
  }
}`,...(ye=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,fe,ve;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "Input value",
    helperText: "Helper text",
    className: "w-80"
  }
}`,...(ve=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Ie,we,Ne;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholderText: "Input text field here",
    helperText: "Helper text",
    maxLength: 240,
    showCounter: true,
    className: "w-80"
  }
}`,...(Ne=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var Se,Ce,Ee;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    type: "outlined",
    label: "Outlined Input",
    placeholderText: "Input text field here",
    helperText: "This is an outlined input",
    className: "w-80"
  }
}`,...(Ee=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var De,je,Le;I.parameters={...I.parameters,docs:{...(De=I.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    type: "lined",
    label: "Lined Input",
    placeholderText: "Input text field here",
    helperText: "This is a lined input",
    className: "w-80"
  }
}`,...(Le=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Pe,ke,Ae;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    type: "boxed",
    label: "Boxed Input",
    placeholderText: "Input text field here",
    helperText: "This is a boxed input",
    className: "w-80"
  }
}`,...(Ae=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var He,Me,Fe;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small Input",
    placeholderText: "Small input field",
    helperText: "This is a small input",
    className: "w-64"
  }
}`,...(Fe=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var qe,Ve,We;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium Input",
    placeholderText: "Medium input field",
    helperText: "This is a medium input",
    className: "w-80"
  }
}`,...(We=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Be,Oe,_e;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large Input",
    placeholderText: "Large input field",
    helperText: "This is a large input",
    className: "w-96"
  }
}`,...(_e=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ue,Re,Ke;E.parameters={...E.parameters,docs:{...(Ue=E.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    size: "xl",
    label: "Extra Large Input",
    placeholderText: "Extra large input field",
    helperText: "This is an extra large input",
    className: "w-[32rem]"
  }
}`,...(Ke=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:Ke.source}}};var $e,Ge,Je;D.parameters={...D.parameters,docs:{...($e=D.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: "Error Input",
    value: "Invalid input",
    helperText: "This input has an error",
    state: "error",
    className: "w-80"
  }
}`,...(Je=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;j.parameters={...j.parameters,docs:{...(Qe=j.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: "Success Input",
    value: "Valid input",
    helperText: "This input is valid",
    state: "success",
    className: "w-80"
  }
}`,...(Ye=(Xe=j.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ze,et;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    value: "Disabled input",
    helperText: "This input is disabled",
    disabled: true,
    className: "w-80"
  }
}`,...(et=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:et.source}}};var tt,at,st;P.parameters={...P.parameters,docs:{...(tt=P.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    label: "Hovered Input",
    placeholderText: "Hover over me",
    helperText: "This input is hovered",
    state: "hovered",
    className: "w-80"
  }
}`,...(st=(at=P.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var rt,lt,nt;k.parameters={...k.parameters,docs:{...(rt=k.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    label: "Active Input",
    value: "Active input",
    helperText: "This input is active",
    state: "active",
    className: "w-80"
  }
}`,...(nt=(lt=k.parameters)==null?void 0:lt.docs)==null?void 0:nt.source}}};var ot,pt,it;A.parameters={...A.parameters,docs:{...(ot=A.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    label: "Text Input",
    inputType: "text",
    placeholderText: "Enter text here",
    helperText: "Standard text input",
    className: "w-80"
  }
}`,...(it=(pt=A.parameters)==null?void 0:pt.docs)==null?void 0:it.source}}};var ut,ct,dt;H.parameters={...H.parameters,docs:{...(ut=H.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    label: "Email Input",
    inputType: "email",
    placeholderText: "example@domain.com",
    helperText: "Enter a valid email address",
    startIcon: Mail,
    className: "w-80"
  }
}`,...(dt=(ct=H.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var mt,xt,ht;M.parameters={...M.parameters,docs:{...(mt=M.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);
    return <CustomInput {...args} label="Password Input" inputType={showPassword ? "text" : "password"} placeholderText="Enter your password" helperText="Password must be at least 8 characters" startIcon={Lock} endIcon={showPassword ? EyeOff : Eye} onEndIconClick={() => setShowPassword(!showPassword)} className="w-80" />;
  }
}`,...(ht=(xt=M.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var Tt,bt,yt;F.parameters={...F.parameters,docs:{...(Tt=F.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    label: "Number Input",
    inputType: "number",
    placeholderText: "Enter a number",
    helperText: "Numeric input only",
    startIcon: Hash,
    className: "w-80"
  }
}`,...(yt=(bt=F.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var gt,ft,vt;q.parameters={...q.parameters,docs:{...(gt=q.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    label: "Date Input",
    inputType: "date",
    helperText: "Select a date",
    startIcon: Calendar,
    className: "w-80"
  }
}`,...(vt=(ft=q.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var It,wt,Nt;V.parameters={...V.parameters,docs:{...(It=V.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    label: "Telephone Input",
    inputType: "tel",
    placeholderText: "(123) 456-7890",
    helperText: "Enter your phone number",
    startIcon: Phone,
    className: "w-80"
  }
}`,...(Nt=(wt=V.parameters)==null?void 0:wt.docs)==null?void 0:Nt.source}}};var St,Ct,Et;W.parameters={...W.parameters,docs:{...(St=W.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    label: "File Input",
    inputType: "file",
    helperText: "Select a file to upload",
    startIcon: Upload,
    className: "w-80"
  }
}`,...(Et=(Ct=W.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var Dt,jt,Lt;B.parameters={...B.parameters,docs:{...(Dt=B.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholderText: "Enter your email",
    helperText: "We'll never share your email",
    startIcon: Mail,
    className: "w-80"
  }
}`,...(Lt=(jt=B.parameters)==null?void 0:jt.docs)==null?void 0:Lt.source}}};var Pt,kt,At;O.parameters={...O.parameters,docs:{...(Pt=O.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholderText: "Search...",
    helperText: "Enter your search query",
    endIcon: Search,
    className: "w-80"
  }
}`,...(At=(kt=O.parameters)==null?void 0:kt.docs)==null?void 0:At.source}}};var Ht,Mt,Ft;_.parameters={..._.parameters,docs:{...(Ht=_.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholderText: "Enter your email",
    helperText: "We'll never share your email",
    startIcon: Mail,
    endIcon: Search,
    className: "w-80"
  }
}`,...(Ft=(Mt=_.parameters)==null?void 0:Mt.docs)==null?void 0:Ft.source}}};var qt,Vt,Wt;U.parameters={...U.parameters,docs:{...(qt=U.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    placeholderText: "Tell us about yourself",
    helperText: "Keep it brief",
    maxLength: 100,
    showCounter: true,
    startIcon: User,
    className: "w-80"
  }
}`,...(Wt=(Vt=U.parameters)==null?void 0:Vt.docs)==null?void 0:Wt.source}}};var Bt,Ot,_t;R.parameters={...R.parameters,docs:{...(Bt=R.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6 w-[400px]">\r
        <h3 className="text-lg font-semibold">Outlined Type</h3>\r
        <div className="space-y-4">\r
          <CustomInput type="outlined" label="Default" placeholderText="Default state" helperText="Default state example" />\r
          <CustomInput type="outlined" label="Hovered" placeholderText="Hovered state" helperText="Hovered state example" state="hovered" />\r
          <CustomInput type="outlined" label="Active" value="Active state" helperText="Active state example" state="active" />\r
          <CustomInput type="outlined" label="Typing" value="Typing state" helperText="Typing state example" state="typing" />\r
          <CustomInput type="outlined" label="Success" value="Success state" helperText="Success state example" state="success" />\r
          <CustomInput type="outlined" label="Error" value="Error state" helperText="Error state example" state="error" />\r
          <CustomInput type="outlined" label="Disabled" value="Disabled state" helperText="Disabled state example" disabled />\r
        </div>\r
\r
        <h3 className="text-lg font-semibold mt-8">Lined Type</h3>\r
        <div className="space-y-4">\r
          <CustomInput type="lined" label="Default" placeholderText="Default state" helperText="Default state example" />\r
          <CustomInput type="lined" label="Hovered" placeholderText="Hovered state" helperText="Hovered state example" state="hovered" />\r
          <CustomInput type="lined" label="Active" value="Active state" helperText="Active state example" state="active" />\r
          <CustomInput type="lined" label="Typing" value="Typing state" helperText="Typing state example" state="typing" />\r
          <CustomInput type="lined" label="Success" value="Success state" helperText="Success state example" state="success" />\r
          <CustomInput type="lined" label="Error" value="Error state" helperText="Error state example" state="error" />\r
          <CustomInput type="lined" label="Disabled" value="Disabled state" helperText="Disabled state example" disabled />\r
        </div>\r
\r
        <h3 className="text-lg font-semibold mt-8">Boxed Type</h3>\r
        <div className="space-y-4">\r
          <CustomInput type="boxed" label="Default" placeholderText="Default state" helperText="Default state example" />\r
          <CustomInput type="boxed" label="Hovered" placeholderText="Hovered state" helperText="Hovered state example" state="hovered" />\r
          <CustomInput type="boxed" label="Active" value="Active state" helperText="Active state example" state="active" />\r
          <CustomInput type="boxed" label="Typing" value="Typing state" helperText="Typing state example" state="typing" />\r
          <CustomInput type="boxed" label="Success" value="Success state" helperText="Success state example" state="success" />\r
          <CustomInput type="boxed" label="Error" value="Error state" helperText="Error state example" state="error" />\r
          <CustomInput type="boxed" label="Disabled" value="Disabled state" helperText="Disabled state example" disabled />\r
        </div>\r
      </div>;
  }
}`,...(_t=(Ot=R.parameters)==null?void 0:Ot.docs)==null?void 0:_t.source}}};var Ut,Rt,Kt;K.parameters={...K.parameters,docs:{...(Ut=K.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-4 w-[400px]">\r
        <CustomInput type="outlined" label="Outlined Input" placeholderText="Outlined input example" helperText="This is an outlined input" />\r
        <CustomInput type="lined" label="Lined Input" placeholderText="Lined input example" helperText="This is a lined input" />\r
        <CustomInput type="boxed" label="Boxed Input" placeholderText="Boxed input example" helperText="This is a boxed input" />\r
      </div>;
  }
}`,...(Kt=(Rt=K.parameters)==null?void 0:Rt.docs)==null?void 0:Kt.source}}};var $t,Gt,Jt;$.parameters={...$.parameters,docs:{...($t=$.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-4 w-[500px]">\r
        <CustomInput size="sm" label="Small Input" placeholderText="Small input field" helperText="This is a small input" />\r
        <CustomInput size="md" label="Medium Input" placeholderText="Medium input field" helperText="This is a medium input" />\r
        <CustomInput size="lg" label="Large Input" placeholderText="Large input field" helperText="This is a large input" />\r
        <CustomInput size="xl" label="Extra Large Input" placeholderText="Extra large input field" helperText="This is an extra large input" />\r
      </div>;
  }
}`,...(Jt=(Gt=$.parameters)==null?void 0:Gt.docs)==null?void 0:Jt.source}}};var Qt,Xt,Yt;G.parameters={...G.parameters,docs:{...(Qt=G.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);
    return <div className="space-y-4 w-[400px]">\r
        <CustomInput label="Text Input" inputType="text" placeholderText="Enter text here" helperText="Standard text input" startIcon={Mail} />\r
        <CustomInput label="Email Input" inputType="email" placeholderText="example@domain.com" helperText="Enter a valid email address" startIcon={Mail} />\r
        <CustomInput label="Password Input" inputType={showPassword ? "text" : "password"} placeholderText="Enter your password" helperText="Password must be at least 8 characters" startIcon={Lock} endIcon={showPassword ? EyeOff : Eye} onEndIconClick={() => setShowPassword(!showPassword)} />\r
        <CustomInput label="Number Input" inputType="number" placeholderText="Enter a number" helperText="Numeric input only" startIcon={Hash} />\r
        <CustomInput label="Date Input" inputType="date" helperText="Select a date" startIcon={Calendar} />\r
        <CustomInput label="Telephone Input" inputType="tel" placeholderText="(123) 456-7890" helperText="Enter your phone number" startIcon={Phone} />\r
        <CustomInput label="File Input" inputType="file" helperText="Select a file to upload" startIcon={Upload} />\r
      </div>;
  }
}`,...(Yt=(Xt=G.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Zt,zt,ea;J.parameters={...J.parameters,docs:{...(Zt=J.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    label: "Custom Styled Input",
    placeholderText: "Enter text here",
    helperText: "This input has custom styling",
    className: "border-purple-500 focus:border-purple-700 caret-purple-500",
    labelClassName: "text-purple-700 font-bold",
    helperTextClassName: "text-purple-600 italic",
    containerClassName: "bg-purple-50 p-4 rounded-lg"
  }
}`,...(ea=(zt=J.parameters)==null?void 0:zt.docs)==null?void 0:ea.source}}};var ta,aa,sa;Q.parameters={...Q.parameters,docs:{...(ta=Q.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);
    return <div className="space-y-4 w-[400px] p-6 border rounded-lg bg-white">\r
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>\r
        <CustomInput type="outlined" label="Full Name" placeholderText="Enter your full name" helperText="First and last name" startIcon={User} />\r
        <CustomInput type="outlined" label="Email Address" inputType="email" placeholderText="Enter your email" helperText="We'll never share your email" startIcon={Mail} />\r
        <CustomInput type="outlined" label="Password" inputType={showPassword ? "text" : "password"} placeholderText="Enter your password" helperText="Must be at least 8 characters" startIcon={Lock} endIcon={showPassword ? EyeOff : Eye} onEndIconClick={() => setShowPassword(!showPassword)} />\r
        <CustomInput type="outlined" label="Phone Number" inputType="tel" placeholderText="(123) 456-7890" helperText="Enter your phone number" startIcon={Phone} />\r
        <CustomInput type="outlined" label="Bio" placeholderText="Tell us about yourself" helperText="Keep it brief" maxLength={100} showCounter />\r
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-2">\r
          Register\r
        </button>\r
      </div>;
  }
}`,...(sa=(aa=Q.parameters)==null?void 0:aa.docs)==null?void 0:sa.source}}};const za=["Default","WithValue","WithCounter","Outlined","Lined","Boxed","Small","Medium","Large","ExtraLarge","Error","Success","Disabled","Hovered","Active","TextInput","EmailInput","PasswordInput","NumberInput","DateInput","TelInput","FileInput","WithStartIcon","WithEndIcon","WithBothIcons","WithCounterAndIcon","AllStates","AllTypes","AllSizes","AllInputTypes","CustomStyling","FormFields"];export{k as Active,G as AllInputTypes,$ as AllSizes,R as AllStates,K as AllTypes,w as Boxed,J as CustomStyling,q as DateInput,y as Default,L as Disabled,H as EmailInput,D as Error,E as ExtraLarge,W as FileInput,Q as FormFields,P as Hovered,C as Large,I as Lined,S as Medium,F as NumberInput,v as Outlined,M as PasswordInput,N as Small,j as Success,V as TelInput,A as TextInput,_ as WithBothIcons,f as WithCounter,U as WithCounterAndIcon,O as WithEndIcon,B as WithStartIcon,g as WithValue,za as __namedExportsOrder,Za as default};
