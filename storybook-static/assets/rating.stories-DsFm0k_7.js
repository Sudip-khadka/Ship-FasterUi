import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as g}from"./rating-BxmWV28Q.js";import{r as f}from"./index-DUAV1Q2A.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";import"./tooltip-Cb6rvvln.js";import"./index-CkJYSq-f.js";import"./index-HDiuFCMG.js";import"./index-BBSvTbSE.js";import"./index-VDvXe9nZ.js";import"./index-CqVsPxxY.js";import"./index-DYDmQCah.js";import"./index-C3aXAtnl.js";import"./floating-ui.react-dom-B6EWZ_Oh.js";import"./index-D66jSSvk.js";import"./star-BY7yQuDx.js";import"./createLucideIcon-DKpLFxT9.js";const q={title:"Components/Rating",component:g,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:5,step:.5}},max:{control:{type:"number",min:1,max:10}},readonly:{control:"boolean"},size:{control:"radio",options:["sm","md","lg","xl"]},variant:{control:"radio",options:["yellow","neutral"]},starStyle:{control:"radio",options:["filled","outline"]},tooltipClassname:{control:"text"}}},t={args:{value:3.5,max:5,readonly:!1,size:"lg",variant:"neutral",starStyle:"outline"}},e={render:r=>{const[v,y]=f.useState(r.value);return n.jsx("div",{className:"container w-fit",children:n.jsx(g,{...r,value:v,onRatingChange:x=>y(x),tooltipClassname:"bg-destructive-500 fill-destructive-500"})})},args:{max:5,readonly:!1,size:"xl",variant:"neutral",starStyle:"outline",value:5,showTooltip:!0,tooltipClassname:""}},a={args:{value:4,max:5,readonly:!0,size:"md",variant:"yellow",starStyle:"outline"}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    max: 5,
    readonly: false,
    size: "lg",
    variant: "neutral",
    starStyle: "outline"
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,m,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [rating, setRating] = useState(args.value);
    return <div className="container w-fit">\r
            <Rating {...args} value={rating} onRatingChange={newValue => setRating(newValue)} tooltipClassname="bg-destructive-500 fill-destructive-500" />\r
        </div>;
  },
  args: {
    max: 5,
    readonly: false,
    size: "xl",
    variant: "neutral",
    starStyle: "outline",
    value: 5,
    showTooltip: true,
    tooltipClassname: ""
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    readonly: true,
    size: "md",
    variant: "yellow",
    starStyle: "outline"
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const A=["Default","Interactive","OutlineStyle"];export{t as Default,e as Interactive,a as OutlineStyle,A as __namedExportsOrder,q as default};
