import{r as s,b as $}from"./index-DUAV1Q2A.js";import{j as N}from"./jsx-runtime-D_zvdyIk.js";import"./index-VDvXe9nZ.js";function W(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function F(e,t=[]){let r=[];function o(i,c){const u=s.createContext(c),l=r.length;r=[...r,c];const a=f=>{var h;const{scope:p,children:m,...C}=f,g=((h=p==null?void 0:p[e])==null?void 0:h[l])||u,b=s.useMemo(()=>C,Object.values(C));return N.jsx(g.Provider,{value:b,children:m})};a.displayName=i+"Provider";function d(f,p){var g;const m=((g=p==null?void 0:p[e])==null?void 0:g[l])||u,C=s.useContext(m);if(C)return C;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${i}\``)}return[a,d]}const n=()=>{const i=r.map(c=>s.createContext(c));return function(u){const l=(u==null?void 0:u[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return n.scopeName=e,[o,k(n,...t)]}function k(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const c=o.reduce((u,{useScope:l,scopeName:a})=>{const f=l(i)[`__scope${a}`];return{...u,...f}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return r.scopeName=t.scopeName,r}function M(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function V({prop:e,defaultProp:t,onChange:r=()=>{}}){const[o,n]=B({defaultProp:t,onChange:r}),i=e!==void 0,c=i?e:o,u=M(r),l=s.useCallback(a=>{if(i){const f=typeof a=="function"?a(e):a;f!==e&&u(f)}else n(a)},[i,e,n,u]);return[c,l]}function B({defaultProp:e,onChange:t}){const r=s.useState(e),[o]=r,n=s.useRef(o),i=M(t);return s.useEffect(()=>{n.current!==o&&(i(o),n.current=o)},[o,n,i]),r}var R=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function w(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function T(...e){return t=>{let r=!1;const o=e.map(n=>{const i=w(n,t);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let n=0;n<o.length;n++){const i=o[n];typeof i=="function"?i():w(e[n],null)}}}}function _(...e){return s.useCallback(T(...e),e)}function G(e){const t=q(e),r=s.forwardRef((o,n)=>{const{children:i,...c}=o,u=s.Children.toArray(i),l=u.find(z);if(l){const a=l.props.children,d=u.map(f=>f===l?s.Children.count(a)>1?s.Children.only(null):s.isValidElement(a)?a.props.children:null:f);return N.jsx(t,{...c,ref:n,children:s.isValidElement(a)?s.cloneElement(a,void 0,d):null})}return N.jsx(t,{...c,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function q(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const c=K(n),u=J(i,n.props);return n.type!==s.Fragment&&(u.ref=o?T(o,c):c),s.cloneElement(n,u)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Z=Symbol("radix.slottable");function z(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Z}function J(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...u)=>{i(...u),n(...u)}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function K(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Q=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],S=Q.reduce((e,t)=>{const r=G(`Primitive.${t}`),o=s.forwardRef((n,i)=>{const{asChild:c,...u}=n,l=c?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(l,{...u,ref:i})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function X(e,t){return s.useReducer((r,o)=>t[r][o]??r,e)}var I=e=>{const{present:t,children:r}=e,o=Y(t),n=typeof r=="function"?r({present:o.isPresent}):s.Children.only(r),i=_(o.ref,H(n));return typeof r=="function"||o.isPresent?s.cloneElement(n,{ref:i}):null};I.displayName="Presence";function Y(e){const[t,r]=s.useState(),o=s.useRef({}),n=s.useRef(e),i=s.useRef("none"),c=e?"mounted":"unmounted",[u,l]=X(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const a=y(o.current);i.current=u==="mounted"?a:"none"},[u]),R(()=>{const a=o.current,d=n.current;if(d!==e){const p=i.current,m=y(a);e?l("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?l("UNMOUNT"):l(d&&p!==m?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,l]),R(()=>{if(t){let a;const d=t.ownerDocument.defaultView??window,f=m=>{const g=y(o.current).includes(m.animationName);if(m.target===t&&g&&(l("ANIMATION_END"),!n.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",a=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},p=m=>{m.target===t&&(i.current=y(o.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(a),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(a=>{a&&(o.current=getComputedStyle(a)),r(a)},[])}}function y(e){return(e==null?void 0:e.animationName)||"none"}function H(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var ee=$[" useId ".trim().toString()]||(()=>{}),te=0;function ne(e){const[t,r]=s.useState(ee());return R(()=>{r(o=>o??String(te++))},[e]),e||(t?`radix-${t}`:"")}var x="Collapsible",[oe,ue]=F(x),[re,P]=oe(x),j=s.forwardRef((e,t)=>{const{__scopeCollapsible:r,open:o,defaultOpen:n,disabled:i,onOpenChange:c,...u}=e,[l=!1,a]=V({prop:o,defaultProp:n,onChange:c});return N.jsx(re,{scope:r,disabled:i,contentId:ne(),open:l,onOpenToggle:s.useCallback(()=>a(d=>!d),[a]),children:N.jsx(S.div,{"data-state":E(l),"data-disabled":i?"":void 0,...u,ref:t})})});j.displayName=x;var D="CollapsibleTrigger",L=s.forwardRef((e,t)=>{const{__scopeCollapsible:r,...o}=e,n=P(D,r);return N.jsx(S.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":E(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...o,ref:t,onClick:W(e.onClick,n.onOpenToggle)})});L.displayName=D;var A="CollapsibleContent",U=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=P(A,e.__scopeCollapsible);return N.jsx(I,{present:r||n.open,children:({present:i})=>N.jsx(se,{...o,ref:t,present:i})})});U.displayName=A;var se=s.forwardRef((e,t)=>{const{__scopeCollapsible:r,present:o,children:n,...i}=e,c=P(A,r),[u,l]=s.useState(o),a=s.useRef(null),d=_(t,a),f=s.useRef(0),p=f.current,m=s.useRef(0),C=m.current,g=c.open||u,b=s.useRef(g),h=s.useRef(void 0);return s.useEffect(()=>{const v=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(v)},[]),R(()=>{const v=a.current;if(v){h.current=h.current||{transitionDuration:v.style.transitionDuration,animationName:v.style.animationName},v.style.transitionDuration="0s",v.style.animationName="none";const O=v.getBoundingClientRect();f.current=O.height,m.current=O.width,b.current||(v.style.transitionDuration=h.current.transitionDuration,v.style.animationName=h.current.animationName),l(o)}},[c.open,o]),N.jsx(S.div,{"data-state":E(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!g,...i,ref:d,style:{"--radix-collapsible-content-height":p?`${p}px`:void 0,"--radix-collapsible-content-width":C?`${C}px`:void 0,...e.style},children:g&&n})});function E(e){return e?"open":"closed"}var le=j,fe=L,de=U;export{L as C,le as R,fe as T,U as a,de as b,ue as c};
