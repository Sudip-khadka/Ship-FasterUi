import{j as o}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{B as j}from"./button-BiOgjjiw.js";import{r as s}from"./index-2yJIXLcc.js";import{a as xe,c as ut,b as re,d as K,P as fe,e as dt,D as ft}from"./index-BHOlFMKo.js";import{a as vt,u as te,S as mt,c as M}from"./createLucideIcon-CZO7jHe9.js";import{P as O,c as ht,a as pt}from"./index-Da90mRSO.js";import{C as gt,a as xt}from"./circle-help-CsJIyUtC.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bt=vt("X",yt);var oe="focusScope.autoFocusOnMount",ae="focusScope.autoFocusOnUnmount",ye={bubbles:!1,cancelable:!0},wt="FocusScope",Me=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...u}=e,[i,h]=s.useState(null),v=xe(a),m=xe(c),f=s.useRef(null),x=te(t,l=>h(l)),p=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(r){let l=function(y){if(p.paused||!i)return;const b=y.target;i.contains(b)?f.current=b:D(f.current,{select:!0})},d=function(y){if(p.paused||!i)return;const b=y.relatedTarget;b!==null&&(i.contains(b)||D(f.current,{select:!0}))},g=function(y){if(document.activeElement===document.body)for(const w of y)w.removedNodes.length>0&&D(i)};document.addEventListener("focusin",l),document.addEventListener("focusout",d);const C=new MutationObserver(g);return i&&C.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",l),document.removeEventListener("focusout",d),C.disconnect()}}},[r,i,p.paused]),s.useEffect(()=>{if(i){we.add(p);const l=document.activeElement;if(!i.contains(l)){const g=new CustomEvent(oe,ye);i.addEventListener(oe,v),i.dispatchEvent(g),g.defaultPrevented||(Et(Dt(Oe(i)),{select:!0}),document.activeElement===l&&D(i))}return()=>{i.removeEventListener(oe,v),setTimeout(()=>{const g=new CustomEvent(ae,ye);i.addEventListener(ae,m),i.dispatchEvent(g),g.defaultPrevented||D(l??document.body,{select:!0}),i.removeEventListener(ae,m),we.remove(p)},0)}}},[i,v,m,p]);const E=s.useCallback(l=>{if(!n&&!r||p.paused)return;const d=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,g=document.activeElement;if(d&&g){const C=l.currentTarget,[y,b]=Ct(C);y&&b?!l.shiftKey&&g===b?(l.preventDefault(),n&&D(y,{select:!0})):l.shiftKey&&g===y&&(l.preventDefault(),n&&D(b,{select:!0})):g===C&&l.preventDefault()}},[n,r,p.paused]);return o.jsx(O.div,{tabIndex:-1,...u,ref:x,onKeyDown:E})});Me.displayName=wt;function Et(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(D(r,{select:t}),document.activeElement!==n)return}function Ct(e){const t=Oe(e),n=be(t,e),r=be(t.reverse(),e);return[n,r]}function Oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function be(e,t){for(const n of e)if(!jt(n,{upTo:t}))return n}function jt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function St(e){return e instanceof HTMLInputElement&&"select"in e}function D(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&St(e)&&t&&e.select()}}var we=Nt();function Nt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Ee(e,t),e.unshift(t)},remove(t){var n;e=Ee(e,t),(n=e[0])==null||n.resume()}}}function Ee(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Dt(e){return e.filter(t=>t.tagName!=="A")}var ie=0;function Rt(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ce()),document.body.insertAdjacentElement("beforeend",e[1]??Ce()),ie++,()=>{ie===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ie--}},[])}function Ce(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var N=function(){return N=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},N.apply(this,arguments)};function Fe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function _t(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,c;r<a;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var Q="right-scroll-bar-position",J="width-before-scroll-bar",It="with-scroll-bars-hidden",Pt="--removed-body-scroll-bar-size";function ce(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function At(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Tt=typeof window<"u"?s.useLayoutEffect:s.useEffect,je=new WeakMap;function kt(e,t){var n=At(null,function(r){return e.forEach(function(a){return ce(a,r)})});return Tt(function(){var r=je.get(n);if(r){var a=new Set(r),c=new Set(e),u=n.current;a.forEach(function(i){c.has(i)||ce(i,null)}),c.forEach(function(i){a.has(i)||ce(i,u)})}je.set(n,e)},[e]),n}function Mt(e){return e}function Ot(e,t){t===void 0&&(t=Mt);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var u=t(c,r);return n.push(u),function(){n=n.filter(function(i){return i!==u})}},assignSyncMedium:function(c){for(r=!0;n.length;){var u=n;n=[],u.forEach(c)}n={push:function(i){return c(i)},filter:function(){return n}}},assignMedium:function(c){r=!0;var u=[];if(n.length){var i=n;n=[],i.forEach(c),u=n}var h=function(){var m=u;u=[],m.forEach(c)},v=function(){return Promise.resolve().then(h)};v(),n={push:function(m){u.push(m),v()},filter:function(m){return u=u.filter(m),n}}}};return a}function Ft(e){e===void 0&&(e={});var t=Ot(null);return t.options=N({async:!0,ssr:!1},e),t}var Le=function(e){var t=e.sideCar,n=Fe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return s.createElement(r,N({},n))};Le.isSideCarExport=!0;function Lt(e,t){return e.useMedium(t),Le}var We=Ft(),se=function(){},ne=s.forwardRef(function(e,t){var n=s.useRef(null),r=s.useState({onScrollCapture:se,onWheelCapture:se,onTouchMoveCapture:se}),a=r[0],c=r[1],u=e.forwardProps,i=e.children,h=e.className,v=e.removeScrollBar,m=e.enabled,f=e.shards,x=e.sideCar,p=e.noIsolation,E=e.inert,l=e.allowPinchZoom,d=e.as,g=d===void 0?"div":d,C=e.gapMode,y=Fe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=x,w=kt([n,t]),I=N(N({},y),a);return s.createElement(s.Fragment,null,m&&s.createElement(b,{sideCar:We,removeScrollBar:v,shards:f,noIsolation:p,inert:E,setCallbacks:c,allowPinchZoom:!!l,lockRef:n,gapMode:C}),u?s.cloneElement(s.Children.only(i),N(N({},I),{ref:w})):s.createElement(g,N({},I,{className:h,ref:w}),i))});ne.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ne.classNames={fullWidth:J,zeroRight:Q};var Wt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function $t(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Wt();return t&&e.setAttribute("nonce",t),e}function zt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ut(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Vt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=$t())&&(zt(t,n),Ut(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Ht=function(){var e=Vt();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$e=function(){var e=Ht(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Bt={left:0,top:0,right:0,gap:0},le=function(e){return parseInt(e||"",10)||0},Kt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[le(n),le(r),le(a)]},Gt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Bt;var t=Kt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Xt=$e(),k="data-scroll-locked",Yt=function(e,t,n,r){var a=e.left,c=e.top,u=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(It,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(k,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Q,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(J,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Q," .").concat(Q,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(J," .").concat(J,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(k,`] {
    `).concat(Pt,": ").concat(i,`px;
  }
`)},Se=function(){var e=parseInt(document.body.getAttribute(k)||"0",10);return isFinite(e)?e:0},qt=function(){s.useEffect(function(){return document.body.setAttribute(k,(Se()+1).toString()),function(){var e=Se()-1;e<=0?document.body.removeAttribute(k):document.body.setAttribute(k,e.toString())}},[])},Zt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;qt();var c=s.useMemo(function(){return Gt(a)},[a]);return s.createElement(Xt,{styles:Yt(c,!t,a,n?"":"!important")})},de=!1;if(typeof window<"u")try{var X=Object.defineProperty({},"passive",{get:function(){return de=!0,!0}});window.addEventListener("test",X,X),window.removeEventListener("test",X,X)}catch{de=!1}var P=de?{passive:!1}:!1,Qt=function(e){return e.tagName==="TEXTAREA"},ze=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Qt(e)&&n[t]==="visible")},Jt=function(e){return ze(e,"overflowY")},en=function(e){return ze(e,"overflowX")},Ne=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Ue(e,r);if(a){var c=Ve(e,r),u=c[1],i=c[2];if(u>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},tn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},nn=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ue=function(e,t){return e==="v"?Jt(t):en(t)},Ve=function(e,t){return e==="v"?tn(t):nn(t)},rn=function(e,t){return e==="h"&&t==="rtl"?-1:1},on=function(e,t,n,r,a){var c=rn(e,window.getComputedStyle(t).direction),u=c*r,i=n.target,h=t.contains(i),v=!1,m=u>0,f=0,x=0;do{var p=Ve(e,i),E=p[0],l=p[1],d=p[2],g=l-d-c*E;(E||g)&&Ue(e,i)&&(f+=g,x+=E),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!h&&i!==document.body||h&&(t.contains(i)||t===i));return(m&&Math.abs(f)<1||!m&&Math.abs(x)<1)&&(v=!0),v},Y=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},De=function(e){return[e.deltaX,e.deltaY]},Re=function(e){return e&&"current"in e?e.current:e},an=function(e,t){return e[0]===t[0]&&e[1]===t[1]},cn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},sn=0,A=[];function ln(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),a=s.useState(sn++)[0],c=s.useState($e)[0],u=s.useRef(e);s.useEffect(function(){u.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var l=_t([e.lockRef.current],(e.shards||[]).map(Re),!0).filter(Boolean);return l.forEach(function(d){return d.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),l.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=s.useCallback(function(l,d){if("touches"in l&&l.touches.length===2||l.type==="wheel"&&l.ctrlKey)return!u.current.allowPinchZoom;var g=Y(l),C=n.current,y="deltaX"in l?l.deltaX:C[0]-g[0],b="deltaY"in l?l.deltaY:C[1]-g[1],w,I=l.target,F=Math.abs(y)>Math.abs(b)?"h":"v";if("touches"in l&&F==="h"&&I.type==="range")return!1;var G=Ne(F,I);if(!G)return!0;if(G?w=F:(w=F==="v"?"h":"v",G=Ne(F,I)),!G)return!1;if(!r.current&&"changedTouches"in l&&(y||b)&&(r.current=w),!w)return!0;var ge=r.current||w;return on(ge,d,l,ge==="h"?y:b)},[]),h=s.useCallback(function(l){var d=l;if(!(!A.length||A[A.length-1]!==c)){var g="deltaY"in d?De(d):Y(d),C=t.current.filter(function(w){return w.name===d.type&&(w.target===d.target||d.target===w.shadowParent)&&an(w.delta,g)})[0];if(C&&C.should){d.cancelable&&d.preventDefault();return}if(!C){var y=(u.current.shards||[]).map(Re).filter(Boolean).filter(function(w){return w.contains(d.target)}),b=y.length>0?i(d,y[0]):!u.current.noIsolation;b&&d.cancelable&&d.preventDefault()}}},[]),v=s.useCallback(function(l,d,g,C){var y={name:l,delta:d,target:g,should:C,shadowParent:un(g)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(b){return b!==y})},1)},[]),m=s.useCallback(function(l){n.current=Y(l),r.current=void 0},[]),f=s.useCallback(function(l){v(l.type,De(l),l.target,i(l,e.lockRef.current))},[]),x=s.useCallback(function(l){v(l.type,Y(l),l.target,i(l,e.lockRef.current))},[]);s.useEffect(function(){return A.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:x}),document.addEventListener("wheel",h,P),document.addEventListener("touchmove",h,P),document.addEventListener("touchstart",m,P),function(){A=A.filter(function(l){return l!==c}),document.removeEventListener("wheel",h,P),document.removeEventListener("touchmove",h,P),document.removeEventListener("touchstart",m,P)}},[]);var p=e.removeScrollBar,E=e.inert;return s.createElement(s.Fragment,null,E?s.createElement(c,{styles:cn(a)}):null,p?s.createElement(Zt,{gapMode:e.gapMode}):null)}function un(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const dn=Lt(We,ln);var He=s.forwardRef(function(e,t){return s.createElement(ne,N({},e,{ref:t,sideCar:dn}))});He.classNames=ne.classNames;var fn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},T=new WeakMap,q=new WeakMap,Z={},ue=0,Be=function(e){return e&&(e.host||Be(e.parentNode))},vn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Be(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},mn=function(e,t,n,r){var a=vn(t,Array.isArray(e)?e:[e]);Z[n]||(Z[n]=new WeakMap);var c=Z[n],u=[],i=new Set,h=new Set(a),v=function(f){!f||i.has(f)||(i.add(f),v(f.parentNode))};a.forEach(v);var m=function(f){!f||h.has(f)||Array.prototype.forEach.call(f.children,function(x){if(i.has(x))m(x);else try{var p=x.getAttribute(r),E=p!==null&&p!=="false",l=(T.get(x)||0)+1,d=(c.get(x)||0)+1;T.set(x,l),c.set(x,d),u.push(x),l===1&&E&&q.set(x,!0),d===1&&x.setAttribute(n,"true"),E||x.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",x,g)}})};return m(t),i.clear(),ue++,function(){u.forEach(function(f){var x=T.get(f)-1,p=c.get(f)-1;T.set(f,x),c.set(f,p),x||(q.has(f)||f.removeAttribute(r),q.delete(f)),p||f.removeAttribute(n)}),ue--,ue||(T=new WeakMap,T=new WeakMap,q=new WeakMap,Z={})}},hn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=fn(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),mn(r,a,n,"aria-hidden")):function(){return null}},ve="Dialog",[Ke,Hn]=ht(ve),[pn,S]=Ke(ve),Ge=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:c,modal:u=!0}=e,i=s.useRef(null),h=s.useRef(null),[v=!1,m]=ut({prop:r,defaultProp:a,onChange:c});return o.jsx(pn,{scope:t,triggerRef:i,contentRef:h,contentId:re(),titleId:re(),descriptionId:re(),open:v,onOpenChange:m,onOpenToggle:s.useCallback(()=>m(f=>!f),[m]),modal:u,children:n})};Ge.displayName=ve;var Xe="DialogTrigger",Ye=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=S(Xe,n),c=te(t,a.triggerRef);return o.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":pe(a.open),...r,ref:c,onClick:K(e.onClick,a.onOpenToggle)})});Ye.displayName=Xe;var me="DialogPortal",[gn,qe]=Ke(me,{forceMount:void 0}),Ze=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,c=S(me,t);return o.jsx(gn,{scope:t,forceMount:n,children:s.Children.map(r,u=>o.jsx(fe,{present:n||c.open,children:o.jsx(dt,{asChild:!0,container:a,children:u})}))})};Ze.displayName=me;var ee="DialogOverlay",Qe=s.forwardRef((e,t)=>{const n=qe(ee,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,c=S(ee,e.__scopeDialog);return c.modal?o.jsx(fe,{present:r||c.open,children:o.jsx(xn,{...a,ref:t})}):null});Qe.displayName=ee;var xn=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=S(ee,n);return o.jsx(He,{as:mt,allowPinchZoom:!0,shards:[a.contentRef],children:o.jsx(O.div,{"data-state":pe(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),_="DialogContent",Je=s.forwardRef((e,t)=>{const n=qe(_,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,c=S(_,e.__scopeDialog);return o.jsx(fe,{present:r||c.open,children:c.modal?o.jsx(yn,{...a,ref:t}):o.jsx(bn,{...a,ref:t})})});Je.displayName=_;var yn=s.forwardRef((e,t)=>{const n=S(_,e.__scopeDialog),r=s.useRef(null),a=te(t,n.contentRef,r);return s.useEffect(()=>{const c=r.current;if(c)return hn(c)},[]),o.jsx(et,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:K(e.onCloseAutoFocus,c=>{var u;c.preventDefault(),(u=n.triggerRef.current)==null||u.focus()}),onPointerDownOutside:K(e.onPointerDownOutside,c=>{const u=c.detail.originalEvent,i=u.button===0&&u.ctrlKey===!0;(u.button===2||i)&&c.preventDefault()}),onFocusOutside:K(e.onFocusOutside,c=>c.preventDefault())})}),bn=s.forwardRef((e,t)=>{const n=S(_,e.__scopeDialog),r=s.useRef(!1),a=s.useRef(!1);return o.jsx(et,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var u,i;(u=e.onCloseAutoFocus)==null||u.call(e,c),c.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),c.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:c=>{var h,v;(h=e.onInteractOutside)==null||h.call(e,c),c.defaultPrevented||(r.current=!0,c.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const u=c.target;((v=n.triggerRef.current)==null?void 0:v.contains(u))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&a.current&&c.preventDefault()}})}),et=s.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:c,...u}=e,i=S(_,n),h=s.useRef(null),v=te(t,h);return Rt(),o.jsxs(o.Fragment,{children:[o.jsx(Me,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:c,children:o.jsx(ft,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":pe(i.open),...u,ref:v,onDismiss:()=>i.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(wn,{titleId:i.titleId}),o.jsx(Cn,{contentRef:h,descriptionId:i.descriptionId})]})]})}),he="DialogTitle",tt=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=S(he,n);return o.jsx(O.h2,{id:a.titleId,...r,ref:t})});tt.displayName=he;var nt="DialogDescription",rt=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=S(nt,n);return o.jsx(O.p,{id:a.descriptionId,...r,ref:t})});rt.displayName=nt;var ot="DialogClose",at=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=S(ot,n);return o.jsx(O.button,{type:"button",...r,ref:t,onClick:K(e.onClick,()=>a.onOpenChange(!1))})});at.displayName=ot;function pe(e){return e?"open":"closed"}var it="DialogTitleWarning",[Bn,ct]=pt(it,{contentName:_,titleName:he,docsSlug:"dialog"}),wn=({titleId:e})=>{const t=ct(it),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},En="DialogDescriptionWarning",Cn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ct(En).contentName}}.`;return s.useEffect(()=>{var c;const a=(c=e.current)==null?void 0:c.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},jn=Ge,Sn=Ye,Nn=Ze,Dn=Qe,Rn=Je,_n=tt,In=rt,Pn=at;function L({...e}){return o.jsx(jn,{"data-slot":"dialog",...e})}function W({...e}){return o.jsx(Sn,{"data-slot":"dialog-trigger",...e})}function st({...e}){return o.jsx(Nn,{"data-slot":"dialog-portal",...e})}function lt({className:e,...t}){return o.jsx(Dn,{"data-slot":"dialog-overlay",className:M("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function $({showCloseIcon:e=!0,className:t,children:n,...r}){return o.jsxs(st,{"data-slot":"dialog-portal",children:[o.jsx(lt,{}),o.jsxs(Rn,{"data-slot":"dialog-content",className:M("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...r,children:[n,e&&o.jsxs(Pn,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[o.jsx(bt,{className:"w-5 h-5"}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function z({className:e,...t}){return o.jsx("div",{"data-slot":"dialog-header",className:M("flex flex-col gap-3 text-center sm:text-left",e),...t})}function U({className:e,...t}){return o.jsx("div",{"data-slot":"dialog-footer",className:M("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function V({className:e,...t}){return o.jsx(_n,{"data-slot":"dialog-title",className:M("text-lg leading-none font-semibold",e),...t})}function H({className:e,...t}){return o.jsx(In,{"data-slot":"dialog-description",className:M("text-secondary-400 text-sm",e),...t})}L.__docgenInfo={description:"",methods:[],displayName:"Dialog"};$.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};H.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};U.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};z.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};lt.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};st.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};V.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};W.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};function An({variant:e,alignment:t,triggerBtn:n,triggerBtnVarient:r,primaryBtnVarient:a,secondaryBtnVarient:c,icon:u,title:i,description:h,primaryBtn:v,secondaryBtn:m,innerContent:f,image:x,primaryButtonOnClick:p,secondaryButtonOnClick:E,...l}){let d;switch(e){case"slot":d=o.jsxs(L,{children:[o.jsx(W,{asChild:!0,children:o.jsx(j,{variant:"default",children:n})}),o.jsxs($,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[o.jsxs(z,{children:[o.jsx(V,{children:o.jsxs("h2",{children:[" ",i]})}),o.jsx(H,{children:h})]}),o.jsx("div",{children:f}),o.jsx(U,{children:o.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[o.jsx(j,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:p,children:v}),o.jsx(j,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:E,children:m})]})})]})]});break;case"media":d=o.jsxs(L,{...l,children:[o.jsx(W,{asChild:!0,children:o.jsx(j,{variant:r||"default",children:n})}),o.jsxs($,{showCloseIcon:!1,className:`sm:max-w-[425px] flex flex-col gap-[2rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[o.jsx("div",{className:"imageContainer",children:o.jsx("img",{src:x,alt:i,className:"w-full h-[200px]"})}),o.jsxs(z,{children:[o.jsx(V,{className:"w-full",children:o.jsxs("h2",{children:[" ",i]})}),o.jsx(H,{children:h})]}),o.jsx("div",{children:f}),o.jsx(U,{children:o.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[v&&o.jsx(j,{type:"submit",variant:a||"default",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:p,children:v}),m&&o.jsx(j,{variant:c||"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:E,children:m})]})})]})]});break;case"default":d=o.jsxs(L,{...l,children:[o.jsx(W,{asChild:!0,children:o.jsx(j,{variant:r,children:n})}),o.jsxs($,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[o.jsxs(z,{children:[o.jsxs(V,{className:"w-full flex flex-col gap-2 items-center justify-center ",children:[o.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center m-auto",children:u}),o.jsxs("h2",{className:"text-center",children:[" ",i]})]}),o.jsx(H,{className:"text-center",children:h})]}),o.jsx("div",{children:f}),o.jsx(U,{children:o.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[v&&o.jsx(j,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:p,children:v}),m&&o.jsx(j,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:E,children:m})]})})]})]});break;case"defaultLeft":d=o.jsxs(L,{...l,children:[o.jsx(W,{asChild:!0,children:o.jsx(j,{variant:"default",children:n})}),o.jsxs($,{className:`sm:max-w-[425px] flex flex-col gap-[3rem] ${t==="vertical"?"w-[400px]":"max-w-auto"}`,children:[o.jsxs(z,{children:[o.jsxs(V,{className:"w-full flex flex-col gap-2",children:[o.jsx("div",{className:"iconcontainer h-[50px] w-[50px] bg-primary-200 rounded-full flex items-center justify-center",children:u}),o.jsxs("h2",{children:[" ",i]})]}),o.jsx(H,{children:h})]}),o.jsx("div",{children:f}),o.jsx(U,{children:o.jsxs("div",{className:`footer-container flex ${t==="vertical"?"flex-col":"items-end justify-end"} w-full gap-2`,children:[v&&o.jsx(j,{type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:p,children:v}),m&&o.jsx(j,{variant:"secondary",type:"submit",className:`${t==="horizontal"?"w-fit":"w-full"}`,onClick:E,children:m})]})})]})]});break;default:throw new Error(`Unknown variant: ${e}`)}return d}const Tn={title:"UI/Dialog",component:An,argTypes:{variant:{control:{type:"select"},options:["slot","media","default","defaultLeft"]},alignment:{control:{type:"select"},options:["horizontal","vertical"]},triggerBtn:{control:{type:"text"}},innerContent:{control:{type:"text"}},icon:{control:"select",options:["logo","chevron-left","help-circle"],mapping:{logo:o.jsx(R,{}),"chevron-left":o.jsx(xt,{}),"help-circle":o.jsx(gt,{})}},title:{control:{type:"text"}},description:{control:{type:"text"}},primaryBtn:{control:{type:"text"}},secondaryBtn:{control:{type:"text"}}}},kn={variant:"default",alignment:"horizontal",triggerBtn:"Open Dialog",icon:o.jsx(R,{}),image:"https://media.istockphoto.com/id/1557118048/photo/a-concept-that-expresses-the-hyper-connected-society-of-modern-society-by-connecting-people.jpg?s=1024x1024&w=is&k=20&c=8f8F0FEig-UIwhFFl4uEW5RUpINOlw5rd-qols04UF8=",title:"Default Title",description:"Default Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad est maxime possimus voluptatibus, voluptate odit corporis ipsam dolor qui pariatur quisquam dolores quo dolorem! Id tenetur incidunt provident quaerat.",primaryBtn:"Primary Action",secondaryBtn:"Secondary Action",innerContent:o.jsx("p",{className:"text-center",children:"Pass Your Component Like Forms..."}),primaryButtonOnClick:()=>{alert("Primary button clicked")},secondaryButtonOnClick:()=>{alert("Secondary button clicked")}},B={args:kn};function R(){return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box text-primary-500",viewBox:"0 0 16 16",children:o.jsx("path",{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"})})}R.__docgenInfo={description:"",methods:[],displayName:"IconLogo"};var _e,Ie,Pe;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: defaultArgs // Use args instead of render
}`,...(Pe=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ae,Te,ke;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`function IconLogo() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box text-primary-500" viewBox="0 0 16 16">\r
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />\r
    </svg>;
}`,...(ke=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};const Mn=["Default","IconLogo"],Kn=Object.freeze(Object.defineProperty({__proto__:null,Default:B,IconLogo:R,__namedExportsOrder:Mn,default:Tn},Symbol.toStringTag,{value:"Module"}));export{Rn as C,In as D,R as I,Dn as O,Nn as P,jn as R,_n as T,bt as X,Pn as a,Kn as b};
