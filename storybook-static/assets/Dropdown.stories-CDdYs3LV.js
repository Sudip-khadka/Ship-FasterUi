import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DUAV1Q2A.js";import{C as v}from"./chevron-down--jvhOox4.js";import"./createLucideIcon-DKpLFxT9.js";const c=({placeholder:t,items:i,onChange:o})=>{const[m,w]=p.useState(!1),[d,f]=p.useState(i.filter(r=>r.checked)),y=()=>{w(!m)},k=r=>{const s=d.some(n=>n.id===r.id)?d.filter(n=>n.id!==r.id):[...d,{...r,checked:!0}];f(s),o==null||o(s)};return e.jsxs("div",{className:"w-full max-w-xl font-sans",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-3 border border-gray-200 rounded-md bg-white cursor-pointer shadow-sm",onClick:y,children:[e.jsx("div",{className:"text-gray-500",children:t}),e.jsx(v,{className:"h-4 w-4 text-gray-400"})]}),m&&e.jsx("div",{className:"mt-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm",children:i.map(r=>{const s=d.some(n=>n.id===r.id);return e.jsx("div",{className:`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50
                  ${s?"bg-gray-100":"bg-white"}
                `,onClick:()=>k(r),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{},className:"mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("span",{className:"text-gray-700",children:r.label})]})},r.id)})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedItems: DropdownItem[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},name:"selectedItems"}],return:{name:"void"}}},description:""}}};const S={title:"Components/Dropdown",component:c,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{placeholder:"Placeholder Name",items:[{id:1,label:"Item 1"},{id:2,label:"Item 2",checked:!0},{id:3,label:"Item 3"},{id:4,label:"Item 4"},{id:5,label:"Item 5"}]},render:t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(c,{...t})})},l={args:{placeholder:"Placeholder",items:[{id:1,label:"Item 1",checked:!1},{id:2,label:"Item 2",checked:!0},{id:3,label:"Item 3",checked:!1},{id:4,label:"Item 4",checked:!0},{id:5,label:"Item 5",checked:!1}]},render:t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(c,{...t})})};var h,u,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder Name",
    items: [{
      id: 1,
      label: "Item 1"
    }, {
      id: 2,
      label: "Item 2",
      checked: true
    }, {
      id: 3,
      label: "Item 3"
    }, {
      id: 4,
      label: "Item 4"
    }, {
      id: 5,
      label: "Item 5"
    }]
  },
  render: args => <div style={{
    width: "250px"
  }}>\r
      <Dropdown {...args} />\r
    </div>
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var I,x,g;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    items: [{
      id: 1,
      label: "Item 1",
      checked: false
    }, {
      id: 2,
      label: "Item 2",
      checked: true
    }, {
      id: 3,
      label: "Item 3",
      checked: false
    }, {
      id: 4,
      label: "Item 4",
      checked: true
    }, {
      id: 5,
      label: "Item 5",
      checked: false
    }]
  },
  render: args => <div style={{
    width: "250px"
  }}>\r
      <Dropdown {...args} />\r
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const T=["Default","WithPreselectedItems"];export{a as Default,l as WithPreselectedItems,T as __namedExportsOrder,S as default};
