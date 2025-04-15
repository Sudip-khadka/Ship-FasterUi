import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./utils-CiMRq3MP.js";import{E as K}from"./ellipsis-CLhWkH9-.js";import{C as Q}from"./chevron-right-EGtfGP26.js";import{C as U}from"./chevron-left-g3qMD7R7.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DKpLFxT9.js";import"./index-DUAV1Q2A.js";const j=i=>{switch(i){case"minimal":return"bg-transparent border-none hover:bg-secondary-200";case"outlined":return"border border-secondary-300 hover:border-secondary-400 bg-transparent";case"primary":return"text-primary bg-primary-50 hover:bg-primary-100 active:shadow-sm";case"default":return"bg-secondary-100 hover:bg-secondary-200";default:return"bg-secondary-100 hover:bg-secondary-200"}};function F({className:i,...t}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:s("mx-auto flex w-full justify-center",i),...t})}function l({className:i,variant:t="distributed",...r}){return e.jsx("ul",{"data-slot":"pagination-content",className:s("flex flex-row gap-1 items-center",{compressed:"w-fit gap-0",distributed:"w-full justify-between px-4 sm:px-20",leftAndRight:"justify-between",middle:"justify-between"}[t],i),...r})}function a({...i}){return e.jsx("li",{"data-slot":"pagination-item",...i})}function n({className:i,isActive:t,size:r="md",variant:o="default",...d}){return e.jsx("a",{"aria-current":t?"page":void 0,"data-slot":"pagination-link","data-active":t,className:s("flex min-w-fit p-2 sm:p-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700",j(o),i),...d})}function m({className:i,iconOnly:t=!1,textOnly:r=!1,variant:o="default",...d}){return e.jsxs(n,{"aria-label":"Go to previous page",size:"default",className:s("flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700",i,j(o)),...d,children:[!r&&e.jsx(U,{}),!t&&e.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function c({className:i,iconOnly:t=!1,textOnly:r=!1,variant:o="default",...d}){return e.jsxs(n,{"aria-label":"Go to next page",size:"default",className:s("flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700",i,j(o)),...d,children:[!t&&e.jsx("span",{className:"hidden sm:block",children:"Next"}),!r&&e.jsx(Q,{})]})}function y({className:i,...t}){return e.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:s("flex size-9 items-center justify-center",i),...t,children:[e.jsx(K,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]})}function u({className:i,children:t,variant:r="distributed",...o}){return e.jsx("div",{className:s("flex gap-2 items-center",{compressed:"w-fit justify-start gap-0",distributed:"w-fit flex-grow justify-between gap-3",leftAndRight:"w-full justify-start gap-3",middle:"w-full justify-center gap-3"}[r]),...o,children:t})}function N({className:i,currentPage:t=1,totalItems:r,variant:o="default",highlightClassName:d,customText:H,...J}){return H??e.jsxs("p",{className:s("flex-shrink-0 h-full px-2 sm:px-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded text-secondary-700",j(o),i),...J,children:["Showing ",e.jsx("span",{className:s("font-bold",d),children:t})," of ",e.jsx("span",{className:s("font-bold",d),children:r})," results"]})}F.__docgenInfo={description:"",methods:[],displayName:"Pagination"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationContent",props:{variant:{required:!1,tsType:{name:"union",raw:'"compressed"|"distributed"|"leftAndRight"|"middle"',elements:[{name:"literal",value:'"compressed"'},{name:"literal",value:'"distributed"'},{name:"literal",value:'"leftAndRight"'},{name:"literal",value:'"middle"'}]},description:"",defaultValue:{value:'"distributed"',computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"minimal" | "outlined" | "primary" |"default"',elements:[{name:"literal",value:'"minimal"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},textOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"minimal" | "outlined" | "primary" |"default"',elements:[{name:"literal",value:'"minimal"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"minimal" | "outlined" | "primary" |"default"',elements:[{name:"literal",value:'"minimal"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},textOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};y.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationWrapper",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"compressed"|"distributed"|"middle"|"leftAndRight"',elements:[{name:"literal",value:'"compressed"'},{name:"literal",value:'"distributed"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"leftAndRight"'}]},description:"",defaultValue:{value:'"distributed"',computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"PaginationInfo",props:{currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalItems:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"minimal" | "outlined" | "primary" |"default"',elements:[{name:"literal",value:'"minimal"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},highlightClassName:{required:!1,tsType:{name:"string"},description:""},customText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const te={title:"Components/Pagination",component:F,subcomponents:{PaginationContent:l,PaginationLink:n,PaginationItem:a,PaginationPrevious:m,PaginationNext:c,PaginationEllipsis:y,PaginationWrapper:u,PaginationInfo:N}},h={args:{}},p=()=>e.jsxs(l,{children:[e.jsx(m,{children:"Previous"}),e.jsx(u,{variant:"middle",children:e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(n,{isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{children:"2"})}),e.jsx(a,{children:e.jsx(n,{children:"3"})})]})}),e.jsx(c,{children:"Next"})]}),g=()=>e.jsxs(u,{variant:"middle",children:[e.jsx(m,{children:"Previous"}),e.jsxs(l,{variant:"compressed",children:[e.jsx(a,{children:e.jsx(n,{isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{children:"2"})}),e.jsx(y,{}),e.jsx(a,{children:e.jsx(n,{children:"5"})})]}),e.jsx(c,{children:"Next"})]}),P=()=>e.jsxs(u,{variant:"distributed",children:[e.jsx(m,{children:"Previous"}),e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(n,{isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{children:"2"})}),e.jsx(a,{children:e.jsx(n,{children:"3"})})]}),e.jsx(c,{children:"Next"}),e.jsx(N,{totalItems:100,currentPage:1})]}),f=()=>e.jsxs(u,{variant:"leftAndRight",children:[e.jsx(m,{children:"Previous"}),e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(n,{isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{children:"2"})}),e.jsx(a,{children:e.jsx(n,{children:"3"})})]}),e.jsx(c,{children:"Next"})]}),x=()=>e.jsxs(u,{variant:"middle",children:[e.jsx(m,{variant:"minimal",children:"Previous"}),e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(n,{variant:"minimal",isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{variant:"minimal",children:"2"})})]}),e.jsx(c,{variant:"minimal",children:"Next"})]}),v=()=>e.jsxs(u,{variant:"middle",children:[e.jsx(m,{variant:"outlined",children:"Previous"}),e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(n,{variant:"outlined",isActive:!0,children:"1"})}),e.jsx(a,{children:e.jsx(n,{variant:"outlined",children:"2"})})]}),e.jsx(c,{variant:"outlined",children:"Next"})]});p.__docgenInfo={description:"",methods:[],displayName:"PaginationWithPreviousNext"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationWithEllipsis"};P.__docgenInfo={description:"",methods:[],displayName:"PaginationWithInfo"};f.__docgenInfo={description:"",methods:[],displayName:"PaginationWithCustomVariant"};x.__docgenInfo={description:"",methods:[],displayName:"PaginationMinimalVariant"};v.__docgenInfo={description:"",methods:[],displayName:"PaginationOutlinedVariant"};var I,b,k;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(k=(b=h.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var L,_,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => <PaginationContent>\r
    <PaginationPrevious>Previous</PaginationPrevious>\r
    <PaginationWrapper variant="middle">\r
    <PaginationContent>\r
      <PaginationItem>\r
        <PaginationLink isActive>1</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>2</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>3</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
  </PaginationWrapper>\r
    <PaginationNext>Next</PaginationNext>\r
  </PaginationContent>`,...(W=(_=p.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var w,C,V;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`() => <PaginationWrapper variant="middle">\r
    <PaginationPrevious>Previous</PaginationPrevious>\r
    <PaginationContent variant="compressed">\r
      <PaginationItem>\r
        <PaginationLink isActive>1</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>2</PaginationLink>\r
      </PaginationItem>\r
      <PaginationEllipsis />\r
      <PaginationItem>\r
        <PaginationLink>5</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
    <PaginationNext>Next</PaginationNext>\r
  </PaginationWrapper>`,...(V=(C=g.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var A,q,R;P.parameters={...P.parameters,docs:{...(A=P.parameters)==null?void 0:A.docs,source:{originalSource:`() => <PaginationWrapper variant="distributed">\r
    <PaginationPrevious>Previous</PaginationPrevious>\r
    <PaginationContent>\r
      <PaginationItem>\r
        <PaginationLink isActive>1</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>2</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>3</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
    <PaginationNext>Next</PaginationNext>\r
    <PaginationInfo totalItems={100} currentPage={1} />\r
  </PaginationWrapper>`,...(R=(q=P.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var T,E,S;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => <PaginationWrapper variant="leftAndRight">\r
    <PaginationPrevious>Previous</PaginationPrevious>\r
    <PaginationContent>\r
      <PaginationItem>\r
        <PaginationLink isActive>1</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>2</PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink>3</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
    <PaginationNext>Next</PaginationNext>\r
  </PaginationWrapper>`,...(S=(E=f.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var O,z,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`() => <PaginationWrapper variant="middle">\r
    <PaginationPrevious variant="minimal">Previous</PaginationPrevious>\r
    <PaginationContent>\r
      <PaginationItem>\r
        <PaginationLink variant="minimal" isActive>\r
          1\r
        </PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink variant="minimal">2</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
    <PaginationNext variant="minimal">Next</PaginationNext>\r
  </PaginationWrapper>`,...(M=(z=x.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var D,G,B;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => <PaginationWrapper variant="middle">\r
    <PaginationPrevious variant="outlined">Previous</PaginationPrevious>\r
    <PaginationContent>\r
      <PaginationItem>\r
        <PaginationLink variant="outlined" isActive>\r
          1\r
        </PaginationLink>\r
      </PaginationItem>\r
      <PaginationItem>\r
        <PaginationLink variant="outlined">2</PaginationLink>\r
      </PaginationItem>\r
    </PaginationContent>\r
    <PaginationNext variant="outlined">Next</PaginationNext>\r
  </PaginationWrapper>`,...(B=(G=v.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};const re=["DefaultPagination","PaginationWithPreviousNext","PaginationWithEllipsis","PaginationWithInfo","PaginationWithCustomVariant","PaginationMinimalVariant","PaginationOutlinedVariant"];export{h as DefaultPagination,x as PaginationMinimalVariant,v as PaginationOutlinedVariant,f as PaginationWithCustomVariant,g as PaginationWithEllipsis,P as PaginationWithInfo,p as PaginationWithPreviousNext,re as __namedExportsOrder,te as default};
