import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as e,a as o,b as i,c as l,d as c,e as w,f as N}from"./card-CRsOcMKk.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";const v={title:"Components/Card",component:e,tags:["autodocs"]},n={render:()=>r.jsxs(e,{children:[r.jsxs(o,{children:[r.jsx(i,{children:"Basic Card"}),r.jsx(l,{children:"This is a simple card without any actions."})]}),r.jsx(c,{children:r.jsx("p",{children:"This is some basic content inside the card."})}),r.jsx(w,{children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"Footer content"})})]})},a={render:()=>r.jsxs(e,{children:[r.jsxs(o,{children:[r.jsx(i,{children:"Card with Action"}),r.jsx(l,{children:"Includes a top-right action element."}),r.jsx(N,{children:r.jsx("button",{className:"text-blue-600 text-sm hover:underline",children:"Edit"})})]}),r.jsx(c,{children:r.jsx("p",{children:"This card showcases how to use an action slot."})})]})},t={render:()=>r.jsx(e,{children:r.jsx(o,{children:r.jsx(i,{children:"Title Only"})})})},s={render:()=>r.jsx(e,{children:r.jsx(c,{children:r.jsx("p",{children:"This card only has content."})})})},d={render:()=>r.jsxs(e,{children:[r.jsxs(o,{children:[r.jsx(i,{children:"Full Card"}),r.jsx(l,{children:"This card has all the sections."}),r.jsx(N,{children:r.jsx("button",{className:"text-sm font-medium text-primary hover:underline",children:"Settings"})})]}),r.jsx(c,{children:r.jsx("p",{children:"This is the main content area of the card."})}),r.jsx(w,{children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"Last updated 2 hours ago"})})]})};var C,h,m;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Basic Card</CardTitle>\r
        <CardDescription>This is a simple card without any actions.</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p>This is some basic content inside the card.</p>\r
      </CardContent>\r
      <CardFooter>\r
        <p className="text-sm text-muted-foreground">Footer content</p>\r
      </CardFooter>\r
    </Card>
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Card with Action</CardTitle>\r
        <CardDescription>Includes a top-right action element.</CardDescription>\r
        <CardAction>\r
          <button className="text-blue-600 text-sm hover:underline">Edit</button>\r
        </CardAction>\r
      </CardHeader>\r
      <CardContent>\r
        <p>This card showcases how to use an action slot.</p>\r
      </CardContent>\r
    </Card>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,T,g;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Title Only</CardTitle>\r
      </CardHeader>\r
    </Card>
}`,...(g=(T=t.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardContent>\r
        <p>This card only has content.</p>\r
      </CardContent>\r
    </Card>
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var F,H,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Full Card</CardTitle>\r
        <CardDescription>This card has all the sections.</CardDescription>\r
        <CardAction>\r
          <button className="text-sm font-medium text-primary hover:underline">Settings</button>\r
        </CardAction>\r
      </CardHeader>\r
      <CardContent>\r
        <p>This is the main content area of the card.</p>\r
      </CardContent>\r
      <CardFooter>\r
        <p className="text-sm text-muted-foreground">Last updated 2 hours ago</p>\r
      </CardFooter>\r
    </Card>
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const B=["BasicCard","CardWithAction","CardOnlyHeader","CardOnlyContent","FullCardExample"];export{n as BasicCard,s as CardOnlyContent,t as CardOnlyHeader,a as CardWithAction,d as FullCardExample,B as __namedExportsOrder,v as default};
