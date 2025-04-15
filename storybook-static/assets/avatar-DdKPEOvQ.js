import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./utils-CiMRq3MP.js";import{c as y}from"./index-Dp3B9jqt.js";const q=y("relative flex items-center justify-center bg-primary-100 border-2 border-secondary-50 hover:cursor-pointer",{variants:{size:{xs:"w-6 h-6 text-sm border-1",sm:"w-8 h-8 text-base border-[1.5px]",md:"w-10 h-10 text-xl",lg:"w-12 h-12 text-2xl",xl:"w-16 h-16 text-3xl","2xl":"w-20 h-20 text-4xl","3xl":"w-24 h-24 text-5xl"},shape:{rounded:"rounded-lg",circle:"rounded-full",square:"rounded-none"},action:{pending:"",company:"",verified:"",notify:"",none:""},status:{none:"",online:"",offline:""},type:{image:"",initial:"",placeholder:""}},defaultVariants:{size:"md",shape:"square",action:"none",status:"none",type:"image"}});function C({notificationCount:d,logoImage:s,shape:r,type:u,size:e,action:o,notificationOnClick:m,status:a,indicatorClassName:x,notification:t=!1,notificationClassName:p,verifiedIcon:h,src:c,initials:g,className:f,placeholder:v,onClick:w,childClassName:i,...b}){return l.jsxs("div",{className:n(q({size:e,shape:r,action:o,className:f}),{"rounded-[4px]":e==="xs"&&r==="rounded","rounded-[6px]":e==="sm"&&r==="rounded","rounded-[8px]":e==="md"&&r==="rounded","rounded-[12px]":e==="lg"&&r==="rounded","rounded-[16px]":e==="xl"&&r==="rounded","rounded-[20px]":e==="2xl"&&r==="rounded","rounded-[24px]":e==="3xl"&&r==="rounded"},{"rounded-tr-xl":e==="3xl"&&t&&d&&r!=="circle","rounded-tr-lg":e==="2xl"&&t&&d&&r!=="circle","rounded-tr-md":e==="xl"&&t&&d&&r!=="circle","rounded-tr-sm":(e==="lg"||e==="md")&&t&&d&&r!=="circle","rounded-tr-xs":(e==="sm"||e==="xs")&&t&&d&&r!=="circle"}),...w===void 0?{}:{onClick:w},...b,children:[u==="image"&&c&&l.jsx("img",{src:c,alt:"Avatar",className:n("object-cover w-full h-full",{"rounded-full":r==="circle"},{"rounded-[4px]":e==="xs"&&r==="rounded","rounded-[6px]":e==="sm"&&r==="rounded","rounded-[8px]":e==="md"&&r==="rounded","rounded-[12px]":e==="lg"&&r==="rounded","rounded-[16px]":e==="xl"&&r==="rounded","rounded-[20px]":e==="2xl"&&r==="rounded","rounded-[24px]":e==="3xl"&&r==="rounded"},i)}),u==="initial"&&g&&l.jsx("span",{className:n("font-bold",i),children:g.toUpperCase().slice(0,2)}),u==="placeholder"&&(v??l.jsx("span",{className:n("bg-primary-100 text-primary h-full w-full  flex items-end justify-center overflow-hidden",{"rounded-full":r==="circle"},{"rounded-[4px]":e==="xs"&&r==="rounded","rounded-[6px]":e==="sm"&&r==="rounded","rounded-[8px]":e==="md"&&r==="rounded","rounded-[12px]":e==="lg"&&r==="rounded","rounded-[16px]":e==="xl"&&r==="rounded","rounded-[20px]":e==="2xl"&&r==="rounded","rounded-[24px]":e==="3xl"&&r==="rounded"},i),children:l.jsx("svg",{width:"80%",height:"80%",viewBox:"0 0 75 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M74.6377 78H0C4.23048 61.3309 19.3344 49 37.3189 49C55.3033 49 70.4072 61.3309 74.6377 78ZM37.3189 0C25.7209 0 16.3189 9.40202 16.3189 21C16.3189 32.598 25.7209 42 37.3189 42C48.9168 42 58.3189 32.598 58.3189 21C58.3189 9.40202 48.9168 0 37.3189 0Z",fill:"currentColor"})})})),o==="none"&&(a==="offline"||a==="online")&&l.jsx("span",{className:n("absolute rounded-full right-[-0.5px] bottom-[-0.5px] border-2",e&&{xs:"h-1.5 w-1.5 border-1",sm:"h-2.5 w-2.5 border-1.5",md:"h-3.5 w-3.5",lg:"h-4 w-4",xl:"h-4.5 w-4.5","2xl":"h-5 w-5","3xl":"h-7 w-7"}[e],{none:"",online:"bg-success-700",offline:"bg-secondary-200"}[a],x)}),o==="pending"&&l.jsx("span",{className:n("absolute rounded-full right-[-0.5px] bottom-[-0.5px] bg-warning border-2",e&&{xs:"h-1.5 w-1.5 border-1",sm:"h-2.5 w-2.5 border-1.5",md:"h-3.5 w-3.5",lg:"h-4 w-4",xl:"h-4.5 w-4.5","2xl":"h-5 w-5","3xl":"h-7 w-7"}[e],x)}),o==="company"&&s&&l.jsx("img",{src:s,alt:"Company Logo",className:n("absolute rounded-full bottom-0 right-0 object-cover",e&&{xs:"h-1.5 w-1.5",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-3.5 w-3.5",xl:"h-4 w-4","2xl":"h-5 w-5","3xl":"h-7 w-7"}[e],x)}),o==="verified"&&l.jsx("span",{className:n("absolute   flex justify-end text-primary",e&&{xs:"h-1.5 w-1.5 bottom-[9px] right-0",sm:"h-2 w-2 bottom-[8px] right-0",md:"h-3 w-3 bottom-[6px] right-0",lg:"h-3.5 w-3.5 bottom-[5px] right-0",xl:"h-4 w-4 bottom-[4px] right-0","2xl":"h-5 w-5 bottom-[2px] right-0","3xl":"h-7 w-7 bottom-[-4px] right-[-0px]"}[e],{online:"text-success-500",offline:"text-secondary-300",none:"text-primary"}[a],x),children:h||l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.09772 2.57909C9.04446 1.4903 10.4416 0.800003 12 0.800003C13.5584 0.800003 14.9555 1.49024 15.9022 2.57892C17.3417 2.47835 18.8179 2.97815 19.92 4.08025C21.0221 5.18234 21.5219 6.65857 21.4214 8.09803C22.5099 9.04476 23.2001 10.4418 23.2001 12C23.2001 13.5585 22.5097 14.9558 21.4208 15.9025C21.5211 17.3417 21.0213 18.8177 19.9194 19.9196C18.8175 21.0215 17.3416 21.5213 15.9023 21.4209C14.9556 22.5097 13.5585 23.2 12 23.2C10.4417 23.2 9.04463 22.5098 8.0979 21.4211C6.65842 21.5217 5.18217 21.0219 4.08007 19.9198C2.97797 18.8177 2.47816 17.3415 2.57874 15.902C1.49018 14.9553 0.800049 13.5583 0.800049 12C0.800049 10.4417 1.49025 9.04461 2.5789 8.09787C2.47844 6.65852 2.97826 5.18244 4.08026 4.08044C5.18227 2.97843 6.65836 2.47862 8.09772 2.57909ZM16.1473 9.91615C16.4238 9.52896 16.3341 8.99089 15.947 8.71433C15.5598 8.43776 15.0217 8.52744 14.7451 8.91463L11.0286 14.1178L9.1631 12.2523C8.82664 11.9159 8.28115 11.9159 7.9447 12.2523C7.60824 12.5888 7.60824 13.1343 7.9447 13.4707L10.5293 16.0554C10.7084 16.2344 10.9572 16.3256 11.2096 16.3048C11.462 16.2839 11.6924 16.153 11.8396 15.9469L16.1473 9.91615Z",fill:"currentColor"})})}),t&&d!==void 0&&d>0&&d<10?l.jsx("button",{className:n("absolute  bg-red-500 text-white text-xs rounded-full flex items-center justify-center text-center font-semibold border-2 border-secondary-50 top-[-1.5px] right-[-1.5px] hover:cursor-pointer",e&&{xs:"h-1.5 w-1.5 border-none",sm:"h-2 w-2 border-1 top-[-1.1px] right-[-1.1px] text-[4px]",md:"h-2.5 w-2.5 border-[1.5px] top-[-1px] right-[-0.5px] text-[6px]",lg:"h-3.5 w-3.5 top-[-1.5px] right-[-1.5px] text-[8px]",xl:"h-4 w-4 text-[10px]","2xl":"h-5 w-5 text-xs","3xl":"h-7 w-7 text-xs"}[e],p),onClick:m,children:e!=="xs"&&d}):t&&d!==void 0&&d>=10&&l.jsx("button",{className:n("absolute top-[-1.5px] right-[-1.5px] bg-destructive-500 border-2 border-secondary-50 rounded-full hover:cursor-pointer",e&&{xs:"h-1.5 w-1.5 border-none",sm:"h-2 w-2 border-1 top-[-1.1px] right-[-1.1px]",md:"h-2.5 w-2.5 border-[1.5px] top-[-1px] right-[-0.5px]",lg:"h-3.5 w-3.5 top-[-1.5px] right-[-1.5px]",xl:"h-4 w-4","2xl":"h-5 w-5 ","3xl":"h-7 w-7"}[e],p),onClick:m})]})}C.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{childClassName:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"image" | "initial" | "placeholder"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"initial"'},{name:"literal",value:'"placeholder"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'}]},description:""},shape:{required:!1,tsType:{name:"union",raw:'"rounded" | "circle" | "square"',elements:[{name:"literal",value:'"rounded"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:""},action:{required:!1,tsType:{name:"union",raw:'"none" | "verified" | "pending" | "company"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"verified"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"company"'}]},description:""},status:{required:!0,tsType:{name:"union",raw:'"none" | "online" | "offline"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'}]},description:""},src:{required:!1,tsType:{name:"string"},description:""},notification:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initials:{required:!1,tsType:{name:"union",raw:"`${string}${string}` | `${string}`",elements:[{name:"literal",value:"`${string}${string}`"},{name:"literal",value:"`${string}`"}]},description:""},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},verifiedIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},logoImage:{required:!1,tsType:{name:"string"},description:""},notificationCount:{required:!1,tsType:{name:"number"},description:""},showNotificationCount:{required:!1,tsType:{name:"boolean"},description:""},indicatorClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},notificationClassName:{required:!1,tsType:{name:"string"},description:""},notificationOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{C as A};
