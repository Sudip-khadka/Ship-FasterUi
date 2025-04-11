// import { Home } from "lucide-react"
// import { Breadcrumb,BreadcrumbItem,BreadcrumbSeparator, } from "../ui/breadcrumb"

// interface BreadcrumbData {
//     id: number;
//     label: string;
//     icon: React.ReactNode | null;
//     url: string | null;
// }

// type BreadcrumbStyle = 'filled' | 'outlined' | 'box';
// type BreadcrumbIndicator = 'color' | 'arrow' | 'slash' | 'chevron';
// type IconStyle = 'outlined' | 'filledAccent' | 'grey' | 'blank' | 'default';

// interface BreadcrumbProps {
//     style?: BreadcrumbStyle;
//     indicator?: BreadcrumbIndicator;
//     iconStyle?: IconStyle;
// }

// const data: BreadcrumbData[] = [
//     {
//         id: 1,
//         label: "Home",
//         icon: <Home/>,
//         url: "/"
//     },
//     {
//         id: 2,
//         label: "Products",
//         icon: null,
//         url: "/products"
//     },
//     {
//         id: 3,
//         label: "Categories",
//         icon: null,
//         url: "/products/categories"
//     },
//     {
//         id: 4,
//         label: "Electronics",
//         icon: null,
//         url: "/products/categories/electronics"
//     },
//     {
//         id: 5,
//         label: "Laptops",
//         icon: null,
//         url: "/products/categories/electronics/laptops"
//     },
//     {
//         id: 6,
//         label: "Gaming Laptops",
//         icon: null,
//         url: null
//     }
// ];

// const getIndicator = (type: BreadcrumbIndicator) => {
//     switch (type) {
//         case 'color':
//             return '•';
//         case 'arrow':
//             return '→';
//         case 'slash':
//             return '/';
//         case 'chevron':
//             return '>';
//         default:
//             return '/';
//     }
// };

// const getItemClassName = (style: BreadcrumbStyle, hasUrl: boolean, iconStyle: IconStyle) => {
//     const baseClass = 'transition-colors';
//     const styleClass = {
//         filled: 'bg-primary-100 px-3 py-1 rounded',
//         outlined: 'border border-primary-300 px-3 py-1 rounded',
//         box: 'shadow-sm px-3 py-1 rounded bg-white'
//     }[style];

//     const stateClasses = hasUrl ?
//         'hover:bg-primary-200 active:bg-primary-300 cursor-pointer' :
//         'opacity-60 cursor-default';

//     const iconClasses = {
//         outlined: 'stroke-2',
//         filledAccent: 'fill-primary-500',
//         grey: 'text-gray-500',
//         blank: 'text-transparent',
//         default: ''
//     }[iconStyle];

//     return `${baseClass} ${styleClass} ${stateClasses} ${iconClasses}`;
// };
// function breadcrumbComp() {
//   return (
//     <Breadcrumb>
//       {data.map(pages=>
//         <div className="page">

//         </div>
//       )}
//     </Breadcrumb>
//   )
// }

// export default breadcrumbComp
