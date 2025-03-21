import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{B as f}from"./button-C4FOd6DW.js";import{r as c}from"./index-2yJIXLcc.js";import{a as fe,u as A,c as R,P as $,b as pe,D as xe}from"./index-CBhgPmBG.js";import{u as k,S as ge}from"./index-Bro3k9ay.js";import{c as me,P as E,a as he}from"./index-B8lP-kFZ.js";import{h as ve,R as je,u as De,F as we}from"./Combination-BnBHr6NK.js";import{c as v}from"./utils-jAU0Cazi.js";import{C as ye}from"./circle-help-tAtO1GaX.js";import{C as Ne}from"./chevron-left-B7gs0T92.js";var F="Dialog",[Y,tt]=me(F),[_e,x]=Y(F),K=t=>{const{__scopeDialog:o,children:s,open:n,defaultOpen:r,onOpenChange:a,modal:i=!0}=t,l=c.useRef(null),u=c.useRef(null),[d=!1,p]=fe({prop:n,defaultProp:r,onChange:a});return e.jsx(_e,{scope:o,triggerRef:l,contentRef:u,contentId:A(),titleId:A(),descriptionId:A(),open:d,onOpenChange:p,onOpenToggle:c.useCallback(()=>p(h=>!h),[p]),modal:i,children:s})};K.displayName=F;var Z="DialogTrigger",J=c.forwardRef((t,o)=>{const{__scopeDialog:s,...n}=t,r=x(Z,s),a=k(o,r.triggerRef);return e.jsx(E.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":S(r.open),...n,ref:a,onClick:R(t.onClick,r.onOpenToggle)})});J.displayName=Z;var L="DialogPortal",[Ce,Q]=Y(L,{forceMount:void 0}),X=t=>{const{__scopeDialog:o,forceMount:s,children:n,container:r}=t,a=x(L,o);return e.jsx(Ce,{scope:o,forceMount:s,children:c.Children.map(n,i=>e.jsx($,{present:s||a.open,children:e.jsx(pe,{asChild:!0,container:r,children:i})}))})};X.displayName=L;var T="DialogOverlay",B=c.forwardRef((t,o)=>{const s=Q(T,t.__scopeDialog),{forceMount:n=s.forceMount,...r}=t,a=x(T,t.__scopeDialog);return a.modal?e.jsx($,{present:n||a.open,children:e.jsx(be,{...r,ref:o})}):null});B.displayName=T;var be=c.forwardRef((t,o)=>{const{__scopeDialog:s,...n}=t,r=x(T,s);return e.jsx(je,{as:ge,allowPinchZoom:!0,shards:[r.contentRef],children:e.jsx(E.div,{"data-state":S(r.open),...n,ref:o,style:{pointerEvents:"auto",...n.style}})})}),m="DialogContent",ee=c.forwardRef((t,o)=>{const s=Q(m,t.__scopeDialog),{forceMount:n=s.forceMount,...r}=t,a=x(m,t.__scopeDialog);return e.jsx($,{present:n||a.open,children:a.modal?e.jsx(Ie,{...r,ref:o}):e.jsx(Re,{...r,ref:o})})});ee.displayName=m;var Ie=c.forwardRef((t,o)=>{const s=x(m,t.__scopeDialog),n=c.useRef(null),r=k(o,s.contentRef,n);return c.useEffect(()=>{const a=n.current;if(a)return ve(a)},[]),e.jsx(te,{...t,ref:r,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:R(t.onCloseAutoFocus,a=>{var i;a.preventDefault(),(i=s.triggerRef.current)==null||i.focus()}),onPointerDownOutside:R(t.onPointerDownOutside,a=>{const i=a.detail.originalEvent,l=i.button===0&&i.ctrlKey===!0;(i.button===2||l)&&a.preventDefault()}),onFocusOutside:R(t.onFocusOutside,a=>a.preventDefault())})}),Re=c.forwardRef((t,o)=>{const s=x(m,t.__scopeDialog),n=c.useRef(!1),r=c.useRef(!1);return e.jsx(te,{...t,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,l;(i=t.onCloseAutoFocus)==null||i.call(t,a),a.defaultPrevented||(n.current||(l=s.triggerRef.current)==null||l.focus(),a.preventDefault()),n.current=!1,r.current=!1},onInteractOutside:a=>{var u,d;(u=t.onInteractOutside)==null||u.call(t,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const i=a.target;((d=s.triggerRef.current)==null?void 0:d.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),te=c.forwardRef((t,o)=>{const{__scopeDialog:s,trapFocus:n,onOpenAutoFocus:r,onCloseAutoFocus:a,...i}=t,l=x(m,s),u=c.useRef(null),d=k(o,u);return De(),e.jsxs(e.Fragment,{children:[e.jsx(we,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:r,onUnmountAutoFocus:a,children:e.jsx(xe,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":S(l.open),...i,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Ee,{titleId:l.titleId}),e.jsx(Oe,{contentRef:u,descriptionId:l.descriptionId})]})]})}),z="DialogTitle",oe=c.forwardRef((t,o)=>{const{__scopeDialog:s,...n}=t,r=x(z,s);return e.jsx(E.h2,{id:r.titleId,...n,ref:o})});oe.displayName=z;var ae="DialogDescription",se=c.forwardRef((t,o)=>{const{__scopeDialog:s,...n}=t,r=x(ae,s);return e.jsx(E.p,{id:r.descriptionId,...n,ref:o})});se.displayName=ae;var re="DialogClose",ne=c.forwardRef((t,o)=>{const{__scopeDialog:s,...n}=t,r=x(re,s);return e.jsx(E.button,{type:"button",...n,ref:o,onClick:R(t.onClick,()=>r.onOpenChange(!1))})});ne.displayName=re;function S(t){return t?"open":"closed"}var ie="DialogTitleWarning",[ot,le]=he(ie,{contentName:m,titleName:z,docsSlug:"dialog"}),Ee=({titleId:t})=>{const o=le(ie),s=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return c.useEffect(()=>{t&&(document.getElementById(t)||console.error(s))},[s,t]),null},Pe="DialogDescriptionWarning",Oe=({contentRef:t,descriptionId:o})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${le(Pe).contentName}}.`;return c.useEffect(()=>{var a;const r=(a=t.current)==null?void 0:a.getAttribute("aria-describedby");o&&r&&(document.getElementById(o)||console.warn(n))},[n,t,o]),null},Te=K,Me=J,Ae=X,$e=B,ke=ee,Fe=oe,Le=se,ze=ne;function D({...t}){return e.jsx(Te,{"data-slot":"dialog",...t})}function w({...t}){return e.jsx(Me,{"data-slot":"dialog-trigger",...t})}function ce({...t}){return e.jsx(Ae,{"data-slot":"dialog-portal",...t})}function de({className:t,...o}){return e.jsx($e,{"data-slot":"dialog-overlay",className:v("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...o})}function y({closeIconSize:t=4,showCloseIcon:o=!0,className:s,children:n,...r}){return e.jsxs(ce,{"data-slot":"dialog-portal",children:[e.jsx(de,{}),e.jsxs(ke,{"data-slot":"dialog-content",className:v("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",s),...r,children:[n,o&&e.jsxs(ze,{className:`ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-${t}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M11 1L1 11M1 1L11 11",stroke:"#040404",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function N({className:t,...o}){return e.jsx("div",{"data-slot":"dialog-header",className:v("flex flex-col gap-3 text-center sm:text-left",t),...o})}function _({className:t,...o}){return e.jsx("div",{"data-slot":"dialog-footer",className:v("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...o})}function C({className:t,...o}){return e.jsx(Fe,{"data-slot":"dialog-title",className:v("text-lg leading-none font-semibold",t),...o})}function b({className:t,...o}){return e.jsx(Le,{"data-slot":"dialog-description",className:v("text-secondary-400 text-sm",t),...o})}D.__docgenInfo={description:"",methods:[],displayName:"Dialog"};y.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeIconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};_.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};N.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};de.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};ce.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};C.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};w.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};function Se({variant:t,alignment:o,triggerBtn:s,triggerBtnVarient:n,primaryBtnVarient:r,secondaryBtnVarient:a,icon:i,title:l,description:u,primaryBtn:d,secondaryBtn:p,innerContent:h,image:ue,primaryButtonOnClick:P,secondaryButtonOnClick:O,...M}){let j;switch(t){case"slot":j=e.jsxs(D,{children:[e.jsx(w,{asChild:!0,children:e.jsx(f,{variant:"default",children:s})}),e.jsxs(y,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${o==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(N,{children:[e.jsx(C,{children:e.jsxs("h2",{children:[" ",l]})}),e.jsx(b,{children:u})]}),e.jsx("div",{children:h}),e.jsx(_,{children:e.jsxs("div",{className:`footer-container flex ${o==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[e.jsx(f,{type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:P,children:d}),e.jsx(f,{variant:"secondary",type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:O,children:p})]})})]})]});break;case"media":j=e.jsxs(D,{...M,children:[e.jsx(w,{asChild:!0,children:e.jsx(f,{variant:n||"default",children:s})}),e.jsxs(y,{showCloseIcon:!1,className:`sm:max-w-[425px] flex flex-col gap-[2rem] ${o==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsx("div",{className:"imageContainer",children:e.jsx("img",{src:ue,alt:l,className:"w-full h-[200px]"})}),e.jsxs(N,{children:[e.jsx(C,{className:"w-full",children:e.jsxs("h2",{children:[" ",l]})}),e.jsx(b,{children:u})]}),e.jsx("div",{children:h}),e.jsx(_,{children:e.jsxs("div",{className:`footer-container flex ${o==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[d&&e.jsx(f,{type:"submit",variant:r||"default",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:P,children:d}),p&&e.jsx(f,{variant:a||"secondary",type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:O,children:p})]})})]})]});break;case"default":j=e.jsxs(D,{...M,children:[e.jsx(w,{asChild:!0,children:e.jsx(f,{variant:n,children:s})}),e.jsxs(y,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${o==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(N,{children:[e.jsxs(C,{className:"w-full flex flex-col gap-2 items-center justify-center ",children:[e.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center m-auto",children:i}),e.jsxs("h2",{className:"text-center",children:[" ",l]})]}),e.jsx(b,{className:"text-center",children:u})]}),e.jsx("div",{children:h}),e.jsx(_,{children:e.jsxs("div",{className:`footer-container flex ${o==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[d&&e.jsx(f,{type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:P,children:d}),p&&e.jsx(f,{variant:"secondary",type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:O,children:p})]})})]})]});break;case"defaultLeft":j=e.jsxs(D,{...M,children:[e.jsx(w,{asChild:!0,children:e.jsx(f,{variant:"default",children:s})}),e.jsxs(y,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${o==="vertical"?"w-[400px]":"max-w-auto"}`,children:[e.jsxs(N,{children:[e.jsxs(C,{className:"w-full flex flex-col gap-2",children:[e.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center",children:i}),e.jsxs("h2",{children:[" ",l]})]}),e.jsx(b,{children:u})]}),e.jsx("div",{children:h}),e.jsx(_,{children:e.jsxs("div",{className:`footer-container flex ${o==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[d&&e.jsx(f,{type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:P,children:d}),p&&e.jsx(f,{variant:"secondary",type:"submit",className:`${o==="horizontal"?"w-fit":"w-full"}`,onClick:O,children:p})]})})]})]});break;default:throw new Error(`Unknown variant: ${t}`)}return j}const We={title:"UI/Dialog",component:Se,argTypes:{variant:{control:{type:"select"},options:["slot","media","default","defaultLeft"]},alignment:{control:{type:"select"},options:["horizontal","vertical"]},triggerBtn:{control:{type:"text"}},innerContent:{control:{type:"text"}},icon:{control:"select",options:["logo","chevron-left","help-circle"],mapping:{logo:e.jsx(g,{}),"chevron-left":e.jsx(Ne,{}),"help-circle":e.jsx(ye,{})}},title:{control:{type:"text"}},description:{control:{type:"text"}},primaryBtn:{control:{type:"text"}},secondaryBtn:{control:{type:"text"}}}},qe={variant:"default",alignment:"horizontal",triggerBtn:"Open Dialog",icon:e.jsx(g,{}),image:"https://media.istockphoto.com/id/1557118048/photo/a-concept-that-expresses-the-hyper-connected-society-of-modern-society-by-connecting-people.jpg?s=1024x1024&w=is&k=20&c=8f8F0FEig-UIwhFFl4uEW5RUpINOlw5rd-qols04UF8=",title:"Default Title",description:"Default Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad est maxime possimus voluptatibus, voluptate odit corporis ipsam dolor qui pariatur quisquam dolores quo dolorem! Id tenetur incidunt provident quaerat.",primaryBtn:"Primary Action",secondaryBtn:"Secondary Action",innerContent:e.jsx("p",{className:"text-center",children:"Pass Your Component Like Forms..."}),primaryButtonOnClick:()=>{alert("Primary button clicked")},secondaryButtonOnClick:()=>{alert("Secondary button clicked")}},I={args:qe};function g(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box text-primary-500",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"})})}g.__docgenInfo={description:"",methods:[],displayName:"IconLogo"};var W,q,V;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: defaultArgs // Use args instead of render
}`,...(V=(q=I.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var G,U,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`function IconLogo() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box text-primary-500" viewBox="0 0 16 16">\r
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />\r
    </svg>;
}`,...(H=(U=g.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const Ve=["Default","IconLogo"],at=Object.freeze(Object.defineProperty({__proto__:null,Default:I,IconLogo:g,__namedExportsOrder:Ve,default:We},Symbol.toStringTag,{value:"Module"}));export{ke as C,Le as D,g as I,$e as O,Ae as P,Te as R,Fe as T,ze as a,at as b};
