import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{c as h,m as y,r as v,P as N}from"./PaginationComp-Jwub2oRX.js";/* empty css              */import{r as t}from"./index-2yJIXLcc.js";import"./chevron-left-B7gs0T92.js";import"./createLucideIcon-CkVng6Ik.js";var i=y();function x(e){return function(a,r){const o=new URL(location.href);o.search=v(a),e&&r.shallow===!1?(r.history==="push"?location.assign:location.replace).call(location,o):(r.history==="push"?history.pushState:history.replaceState).call(history,history.state,"",o),i.emit("update",a),r.scroll===!0&&window.scrollTo({top:0})}}var f=t.createContext({fullPageNavigationOnShallowFalseUpdates:!1});function P(){const{fullPageNavigationOnShallowFalseUpdates:e}=t.useContext(f),[n,a]=t.useState(()=>typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search));t.useEffect(()=>{const o=()=>{a(new URLSearchParams(location.search))};return i.on("update",a),window.addEventListener("popstate",o),()=>{i.off("update",a),window.removeEventListener("popstate",o)}},[]);const r=t.useMemo(()=>x(e),[e]);return{searchParams:n,updateUrl:r}}var b=h(P);function w({children:e,fullPageNavigationOnShallowFalseUpdates:n=!1}){return t.createElement(f.Provider,{value:{fullPageNavigationOnShallowFalseUpdates:n}},t.createElement(b,null,e))}const q={title:"Components/Pagination",component:N,argTypes:{count:{control:{type:"number"},defaultValue:100},size:{control:{type:"number"},defaultValue:10},variant:{control:{type:"radio"},options:["default","minimal","outlined","primary"],defaultValue:"default"},type:{control:{type:"radio"},options:["compressed","leftAndRight","middle","distributed","hybrid"],defaultValue:"compressed"},next:{control:"text"},previous:{control:"text"}}},s={args:{variant:"primary",size:10,count:500,next:"https://collegeinfoapi/college/?page=2",previous:"https://collegeinfoapi/college/?page=2",type:"hybrid",iconOnly:!1,activeButtonClassName:"!bg-primary text-white",disabledButtonClassName:"bg-success-500",currentPage:10,className:"",buttonClassName:"bg-primary-50"},decorators:[e=>l.jsx(w,{children:l.jsx(e,{})})]};var c,p,u,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: 10,
    count: 500,
    next: "https://collegeinfoapi/college/?page=2",
    previous: "https://collegeinfoapi/college/?page=2",
    type: "hybrid",
    iconOnly: false,
    activeButtonClassName: "!bg-primary text-white",
    disabledButtonClassName: "bg-success-500",
    currentPage: 10,
    className: "",
    buttonClassName: "bg-primary-50"
  },
  decorators: [Story => <NuqsAdapter>\r
          <Story />\r
        </NuqsAdapter>]
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"✅ Uses NuqsAdapter at the root level (RECOMMENDED)",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};const B=["BasicPagination"];export{s as BasicPagination,B as __namedExportsOrder,q as default};
