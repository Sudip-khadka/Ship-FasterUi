import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./button-C4FOd6DW.js";import{D as o,a as d,b as s,c as n,d as w,e as M,f as G,g as m,h as H,i as K,j as U,k as j,l as p}from"./dropdown-menu-xB__Sq4F.js";import{R as Y,r as Z}from"./index-2yJIXLcc.js";import"./index-Bro3k9ay.js";import"./index-DZZQifJx.js";import"./utils-jAU0Cazi.js";import"./index-Ca5Qc-9M.js";import"./index-B8lP-kFZ.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-Cz7TLFaA.js";import"./index-DSIZK6b3.js";import"./Combination-u2O3jfbA.js";import"./index-DU8idT4y.js";import"./index-DhKEE_zG.js";import"./createLucideIcon-CkVng6Ik.js";import"./chevron-right-DxSby-FQ.js";const he={title:"Components/DropdownMenu",component:o,tags:["autodocs"],argTypes:{}},u=()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:"Open Menu"})}),e.jsxs(s,{children:[e.jsx(n,{children:"New Tab"}),e.jsx(n,{children:"New Window"}),e.jsx(n,{children:"New Private Window"}),e.jsx(w,{}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Help"})]})]}),i={render:()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:"Open Menu"})}),e.jsxs(s,{children:[e.jsxs(M,{children:[e.jsx("input",{id:"checkbox1",type:"checkbox"}),e.jsx("label",{htmlFor:"checkbox1",children:" Show Status Bar"})]}),e.jsxs(M,{checked:!1,children:[e.jsx("input",{id:"checkbox",type:"checkbox"}),e.jsx("label",{htmlFor:"checkbox",children:"Show Activity Bar"})]}),e.jsxs(M,{children:[e.jsx("input",{id:"checkbox2",type:"checkbox"}),e.jsx("label",{htmlFor:"checkbox2",children:"Show Panel"})]})]})]})},a={render:()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:"Open Menu"})}),e.jsx(s,{children:e.jsxs(G,{value:"light",children:[e.jsx(m,{value:"light",children:"Light"}),e.jsx(m,{value:"dark",children:"Dark"}),e.jsx(m,{value:"system",children:"System"})]})})]})},c={render:()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:"Open Menu"})}),e.jsxs(s,{children:[e.jsx(n,{children:"New Tab"}),e.jsx(n,{children:"New Window"}),e.jsxs(H,{children:[e.jsx(K,{children:"More Options"}),e.jsxs(U,{children:[e.jsx(n,{children:"Save As..."}),e.jsx(n,{children:"Print"}),e.jsx(n,{children:"Export"})]})]}),e.jsx(w,{}),e.jsx(n,{children:"Settings"})]})]})},l={render:()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:"Open Menu"})}),e.jsxs(s,{children:[e.jsx(j,{children:"File"}),e.jsxs(n,{children:["New Tab ",e.jsx(p,{children:"⌘T"})]}),e.jsxs(n,{children:["New Window ",e.jsx(p,{children:"⌘N"})]}),e.jsx(w,{}),e.jsx(j,{children:"Edit"}),e.jsxs(n,{children:["Undo ",e.jsx(p,{children:"⌘Z"})]}),e.jsxs(n,{children:["Redo ",e.jsx(p,{children:"⌘Y"})]})]})]})},h={render:()=>{const[D,E]=Y.useState(""),x=["apple","Ball","Cat","Dog","Plane"].filter(r=>r.toLowerCase().includes(D.toLowerCase())),[A,V]=Z.useState("Select");return e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(t,{children:A})}),e.jsxs(s,{children:[e.jsx("div",{style:{padding:"8px"},onClick:r=>r.stopPropagation(),children:e.jsx("input",{type:"text",placeholder:"Search...",value:D,onChange:r=>E(r.target.value),style:{width:"100%",padding:"4px",border:"1px solid #ccc",borderRadius:"4px"},onClick:r=>r.stopPropagation(),onKeyDown:r=>r.stopPropagation(),autoFocus:!0})}),e.jsx(w,{}),x.length>0?x.map((r,_)=>e.jsx(n,{onClick:()=>V(r),children:r},_)):e.jsx(n,{disabled:!0,children:"No results found"})]})]})}};u.__docgenInfo={description:"",methods:[],displayName:"Basic"};var g,b,S;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`() => <DropdownMenu>\r
    <DropdownMenuTrigger asChild>\r
      <Button>Open Menu</Button>\r
    </DropdownMenuTrigger>\r
    <DropdownMenuContent>\r
      <DropdownMenuItem>New Tab</DropdownMenuItem>\r
      <DropdownMenuItem>New Window</DropdownMenuItem>\r
      <DropdownMenuItem>New Private Window</DropdownMenuItem>\r
      <DropdownMenuSeparator />\r
      <DropdownMenuItem>Settings</DropdownMenuItem>\r
      <DropdownMenuItem>Help</DropdownMenuItem>\r
    </DropdownMenuContent>\r
  </DropdownMenu>`,...(S=(b=u.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,C,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button>Open Menu</Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent>\r
          <DropdownMenuCheckboxItem>\r
           \r
            <input id="checkbox1" type="checkbox" />\r
            <label htmlFor="checkbox1"> Show Status Bar\r
            </label>\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuCheckboxItem checked={false}>\r
            <input id="checkbox" type="checkbox" />\r
            <label htmlFor="checkbox">Show Activity Bar\r
            </label>\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuCheckboxItem>\r
          <input id="checkbox2" type="checkbox" />\r
            <label htmlFor="checkbox2">Show Panel\r
            </label>\r
            \r
          </DropdownMenuCheckboxItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,y,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button>Open Menu</Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent>\r
          <DropdownMenuRadioGroup value="light">\r
            <DropdownMenuRadioItem value="light">\r
              Light\r
            </DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="dark">\r
              Dark\r
            </DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="system">\r
              System\r
            </DropdownMenuRadioItem>\r
          </DropdownMenuRadioGroup>\r
        </DropdownMenuContent>\r
      </DropdownMenu>
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,R,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button>Open Menu</Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent>\r
          <DropdownMenuItem>New Tab</DropdownMenuItem>\r
          <DropdownMenuItem>New Window</DropdownMenuItem>\r
          <DropdownMenuSub>\r
            <DropdownMenuSubTrigger>\r
              More Options\r
            </DropdownMenuSubTrigger>\r
            <DropdownMenuSubContent>\r
              <DropdownMenuItem>Save As...</DropdownMenuItem>\r
              <DropdownMenuItem>Print</DropdownMenuItem>\r
              <DropdownMenuItem>Export</DropdownMenuItem>\r
            </DropdownMenuSubContent>\r
          </DropdownMenuSub>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuItem>Settings</DropdownMenuItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var W,f,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button>Open Menu</Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent>\r
          <DropdownMenuLabel>File</DropdownMenuLabel>\r
          <DropdownMenuItem>\r
            New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
          <DropdownMenuItem>\r
            New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuLabel>Edit</DropdownMenuLabel>\r
          <DropdownMenuItem>\r
            Undo <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
          <DropdownMenuItem>\r
            Redo <DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>
}`,...(P=(f=l.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var L,O,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = React.useState("");
    const items = ["apple", "Ball", "Cat", "Dog", "Plane"];
    const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    const [selectedValue, setSelectedValue] = useState("Select");
    return <DropdownMenu>\r
                <DropdownMenuTrigger asChild>\r
                    <Button>{selectedValue}</Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent>\r
                    <div style={{
          padding: "8px"
        }} onClick={e => e.stopPropagation()}>\r
                        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} style={{
            width: "100%",
            padding: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }} onClick={e => e.stopPropagation()} onKeyDown={e => e.stopPropagation()} autoFocus />\r
                    </div>\r
                    <DropdownMenuSeparator />\r
                    {filteredItems.length > 0 ? filteredItems.map((item, index) => <DropdownMenuItem key={index} onClick={() => setSelectedValue(item)}>{item}</DropdownMenuItem>) : <DropdownMenuItem disabled>No results found</DropdownMenuItem>}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const we=["Basic","WithCheckboxes","WithRadioItems","WithSubmenu","WithLabelsAndShortcuts","WithInput"];export{u as Basic,i as WithCheckboxes,h as WithInput,l as WithLabelsAndShortcuts,a as WithRadioItems,c as WithSubmenu,we as __namedExportsOrder,he as default};
