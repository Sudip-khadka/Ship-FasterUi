import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DUAV1Q2A.js";import{a as Q,c as C}from"./index-CkJYSq-f.js";import{u as H,a as Z}from"./index-HDiuFCMG.js";import{P as S,c as ee}from"./index-BBSvTbSE.js";import{u as te,P as V,a as oe,D as re}from"./index-DYDmQCah.js";import{c as q,R as ne,A as ae,a as se,C as le}from"./index-C3aXAtnl.js";import{c as M}from"./utils-CiMRq3MP.js";var ie="VisuallyHidden",G=a.forwardRef((e,o)=>u.jsx(S.span,{...e,ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));G.displayName=ie;var ce=G,[_,Ge]=ee("Tooltip",[q]),j=q(),F="TooltipProvider",ue=700,A="tooltip.open",[de,L]=_(F),z=e=>{const{__scopeTooltip:o,delayDuration:t=ue,skipDelayDuration:r=300,disableHoverableContent:n=!1,children:s}=e,[i,p]=a.useState(!0),l=a.useRef(!1),f=a.useRef(0);return a.useEffect(()=>{const c=f.current;return()=>window.clearTimeout(c)},[]),u.jsx(de,{scope:o,isOpenDelayed:i,delayDuration:t,onOpen:a.useCallback(()=>{window.clearTimeout(f.current),p(!1)},[]),onClose:a.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>p(!0),r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:a.useCallback(c=>{l.current=c},[]),disableHoverableContent:n,children:s})};z.displayName=F;var D="Tooltip",[pe,R]=_(D),$=e=>{const{__scopeTooltip:o,children:t,open:r,defaultOpen:n=!1,onOpenChange:s,disableHoverableContent:i,delayDuration:p}=e,l=L(D,e.__scopeTooltip),f=j(o),[c,m]=a.useState(null),h=te(),d=a.useRef(0),v=i??l.disableHoverableContent,g=p??l.delayDuration,x=a.useRef(!1),[y=!1,T]=Q({prop:r,defaultProp:n,onChange:I=>{I?(l.onOpen(),document.dispatchEvent(new CustomEvent(A))):l.onClose(),s==null||s(I)}}),w=a.useMemo(()=>y?x.current?"delayed-open":"instant-open":"closed",[y]),E=a.useCallback(()=>{window.clearTimeout(d.current),d.current=0,x.current=!1,T(!0)},[T]),P=a.useCallback(()=>{window.clearTimeout(d.current),d.current=0,T(!1)},[T]),k=a.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{x.current=!0,T(!0),d.current=0},g)},[g,T]);return a.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),u.jsx(ne,{...f,children:u.jsx(pe,{scope:o,contentId:h,open:y,stateAttribute:w,trigger:c,onTriggerChange:m,onTriggerEnter:a.useCallback(()=>{l.isOpenDelayed?k():E()},[l.isOpenDelayed,k,E]),onTriggerLeave:a.useCallback(()=>{v?P():(window.clearTimeout(d.current),d.current=0)},[P,v]),onOpen:E,onClose:P,disableHoverableContent:v,children:t})})};$.displayName=D;var O="TooltipTrigger",B=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,n=R(O,t),s=L(O,t),i=j(t),p=a.useRef(null),l=H(o,p,n.onTriggerChange),f=a.useRef(!1),c=a.useRef(!1),m=a.useCallback(()=>f.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),u.jsx(ae,{asChild:!0,...i,children:u.jsx(S.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...r,ref:l,onPointerMove:C(e.onPointerMove,h=>{h.pointerType!=="touch"&&!c.current&&!s.isPointerInTransitRef.current&&(n.onTriggerEnter(),c.current=!0)}),onPointerLeave:C(e.onPointerLeave,()=>{n.onTriggerLeave(),c.current=!1}),onPointerDown:C(e.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:C(e.onFocus,()=>{f.current||n.onOpen()}),onBlur:C(e.onBlur,n.onClose),onClick:C(e.onClick,n.onClose)})})});B.displayName=O;var N="TooltipPortal",[fe,me]=_(N,{forceMount:void 0}),U=e=>{const{__scopeTooltip:o,forceMount:t,children:r,container:n}=e,s=R(N,o);return u.jsx(fe,{scope:o,forceMount:t,children:u.jsx(V,{present:t||s.open,children:u.jsx(oe,{asChild:!0,container:n,children:r})})})};U.displayName=N;var b="TooltipContent",Y=a.forwardRef((e,o)=>{const t=me(b,e.__scopeTooltip),{forceMount:r=t.forceMount,side:n="top",...s}=e,i=R(b,e.__scopeTooltip);return u.jsx(V,{present:r||i.open,children:i.disableHoverableContent?u.jsx(W,{side:n,...s,ref:o}):u.jsx(ve,{side:n,...s,ref:o})})}),ve=a.forwardRef((e,o)=>{const t=R(b,e.__scopeTooltip),r=L(b,e.__scopeTooltip),n=a.useRef(null),s=H(o,n),[i,p]=a.useState(null),{trigger:l,onClose:f}=t,c=n.current,{onPointerInTransitChange:m}=r,h=a.useCallback(()=>{p(null),m(!1)},[m]),d=a.useCallback((v,g)=>{const x=v.currentTarget,y={x:v.clientX,y:v.clientY},T=ge(y,x.getBoundingClientRect()),w=Te(y,T),E=ye(g.getBoundingClientRect()),P=be([...w,...E]);p(P),m(!0)},[m]);return a.useEffect(()=>()=>h(),[h]),a.useEffect(()=>{if(l&&c){const v=x=>d(x,c),g=x=>d(x,l);return l.addEventListener("pointerleave",v),c.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",v),c.removeEventListener("pointerleave",g)}}},[l,c,d,h]),a.useEffect(()=>{if(i){const v=g=>{const x=g.target,y={x:g.clientX,y:g.clientY},T=(l==null?void 0:l.contains(x))||(c==null?void 0:c.contains(x)),w=!Ce(y,i);T?h():w&&(h(),f())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,c,i,f,h]),u.jsx(W,{...e,ref:s})}),[he,xe]=_(D,{isInside:!1}),W=a.forwardRef((e,o)=>{const{__scopeTooltip:t,children:r,"aria-label":n,onEscapeKeyDown:s,onPointerDownOutside:i,...p}=e,l=R(b,t),f=j(t),{onClose:c}=l;return a.useEffect(()=>(document.addEventListener(A,c),()=>document.removeEventListener(A,c)),[c]),a.useEffect(()=>{if(l.trigger){const m=h=>{const d=h.target;d!=null&&d.contains(l.trigger)&&c()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[l.trigger,c]),u.jsx(re,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:m=>m.preventDefault(),onDismiss:c,children:u.jsxs(le,{"data-state":l.stateAttribute,...f,...p,ref:o,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(Z,{children:r}),u.jsx(he,{scope:t,isInside:!0,children:u.jsx(ce,{id:l.contentId,role:"tooltip",children:n||r})})]})})});Y.displayName=b;var X="TooltipArrow",K=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,n=j(t);return xe(X,t).isInside?null:u.jsx(se,{...n,...r,ref:o})});K.displayName=X;function ge(e,o){const t=Math.abs(o.top-e.y),r=Math.abs(o.bottom-e.y),n=Math.abs(o.right-e.x),s=Math.abs(o.left-e.x);switch(Math.min(t,r,n,s)){case s:return"left";case n:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Te(e,o,t=5){const r=[];switch(o){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function ye(e){const{top:o,right:t,bottom:r,left:n}=e;return[{x:n,y:o},{x:t,y:o},{x:t,y:r},{x:n,y:r}]}function Ce(e,o){const{x:t,y:r}=e;let n=!1;for(let s=0,i=o.length-1;s<o.length;i=s++){const p=o[s].x,l=o[s].y,f=o[i].x,c=o[i].y;l>r!=c>r&&t<(f-p)*(r-l)/(c-l)+p&&(n=!n)}return n}function be(e){const o=e.slice();return o.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),we(o)}function we(e){if(e.length<=1)return e.slice();const o=[];for(let r=0;r<e.length;r++){const n=e[r];for(;o.length>=2;){const s=o[o.length-1],i=o[o.length-2];if((s.x-i.x)*(n.y-i.y)>=(s.y-i.y)*(n.x-i.x))o.pop();else break}o.push(n)}o.pop();const t=[];for(let r=e.length-1;r>=0;r--){const n=e[r];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(n.y-i.y)>=(s.y-i.y)*(n.x-i.x))t.pop();else break}t.push(n)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}var Ee=z,Pe=$,Re=B,_e=U,je=Y,De=K;function J({delayDuration:e=0,...o}){return u.jsx(Ee,{"data-slot":"tooltip-provider",delayDuration:e,...o})}function Ae({...e}){return u.jsx(J,{children:u.jsx(Pe,{"data-slot":"tooltip",...e})})}function Oe({...e}){return u.jsx(Re,{"data-slot":"tooltip-trigger",...e})}function Le({className:e,arrowClassName:o,sideOffset:t=0,pointerPosition:r="middle",side:n="top",showArrow:s=!1,children:i,...p}){return u.jsx(_e,{children:u.jsxs(je,{"data-slot":"tooltip-content",side:n,sideOffset:t,className:M("bg-primary m-3 relative text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",e),...p,children:[i,s&&u.jsx(De,{className:M("bg-primary absolute fill-primary z-50 size-2.5 rotate-45 rounded-[2px] translate-y-[-6px]",n==="top"&&(r==="leading"?"left-[10%] top-full":r==="trailing"?"left-[80%] top-full":"right-[50%] translate-x-[-50%] top-full"),n==="bottom"&&(r==="leading"?"left-[10%] bottom-full rotate-180":r==="trailing"?"bottom-full rotate-180 right-[10%]":"left-1/2 -translate-x-1/2 bottom-full rotate-180"),n==="left"&&[r==="leading"&&"top-5 rotate-90",r==="trailing"&&"bottom-2 -rotate-90",r==="middle"&&"top-1/2 -rotate-90"],n==="right"&&[r==="leading"&&"top-[10%] right-[100%]",r==="trailing"&&"right-[100%] top-[50%]",r==="middle"&&"top-[50%] translate-x-[-50%]"],o)})]})})}Ae.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};Oe.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};Le.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{arrowClassName:{required:!1,tsType:{name:"string"},description:""},pointerPosition:{required:!1,tsType:{name:"union",raw:'"leading" | "middle" | "trailing"',elements:[{name:"literal",value:'"leading"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"trailing"'}]},description:"",defaultValue:{value:'"middle"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top"|"bottom"|"right"|"left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sideOffset:{defaultValue:{value:"0",computed:!1},required:!1}}};J.__docgenInfo={description:"",methods:[],displayName:"TooltipProvider",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};export{J as T,Ae as a,Oe as b,Le as c};
