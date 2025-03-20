import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{c as h,m as y,r as v,P as x}from"./PaginationComp-BB1sfZ-d.js";/* empty css              */import{r as t}from"./index-2yJIXLcc.js";import"./chevron-left-B7gs0T92.js";import"./createLucideIcon-CkVng6Ik.js";var i=y();function P(e){return function(a,o){const r=new URL(location.href);r.search=v(a),e&&o.shallow===!1?(o.history==="push"?location.assign:location.replace).call(location,r):(o.history==="push"?history.pushState:history.replaceState).call(history,history.state,"",r),i.emit("update",a),o.scroll===!0&&window.scrollTo({top:0})}}var f=t.createContext({fullPageNavigationOnShallowFalseUpdates:!1});function w(){const{fullPageNavigationOnShallowFalseUpdates:e}=t.useContext(f),[n,a]=t.useState(()=>typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search));t.useEffect(()=>{const r=()=>{a(new URLSearchParams(location.search))};return i.on("update",a),window.addEventListener("popstate",r),()=>{i.off("update",a),window.removeEventListener("popstate",r)}},[]);const o=t.useMemo(()=>P(e),[e]);return{searchParams:n,updateUrl:o}}var N=h(w);function S({children:e,fullPageNavigationOnShallowFalseUpdates:n=!1}){return t.createElement(f.Provider,{value:{fullPageNavigationOnShallowFalseUpdates:n}},t.createElement(N,null,e))}const q={title:"Components/Pagination",component:x,argTypes:{count:{control:{type:"number"},defaultValue:100},size:{control:{type:"number"},defaultValue:10},variant:{control:{type:"radio"},options:["default","minimal","outlined","primary"],defaultValue:"default"},type:{control:{type:"radio"},options:["compressed","leftAndRight","middle","distributed"],defaultValue:"compressed"},next:{control:"text"},previous:{control:"text"}}},s={args:{variant:"default",size:10,count:500,next:"https://collegeinfoapi/college/?page=2",previous:"https://collegeinfoapi/college/?page=2",type:"distributed",iconOnly:!1,activeButtonClassName:"!bg-secondary-900 text-white",disabledButtonClassName:"bg-success-500",currentPage:10},decorators:[e=>l.jsx(S,{children:l.jsx(e,{})})]};var c,u,p,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: 10,
    count: 500,
    next: "https://collegeinfoapi/college/?page=2",
    previous: "https://collegeinfoapi/college/?page=2",
    type: "distributed",
    iconOnly: false,
    activeButtonClassName: "!bg-secondary-900 text-white",
    disabledButtonClassName: "bg-success-500",
    currentPage: 10
  },
  decorators: [Story => <NuqsAdapter>\r
          <Story />\r
        </NuqsAdapter>]
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"✅ Uses NuqsAdapter at the root level (RECOMMENDED)",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};const B=["BasicPagination"];export{s as BasicPagination,B as __namedExportsOrder,q as default};
