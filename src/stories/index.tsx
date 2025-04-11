import "../index.css";
import CustomPieChart from "@/components/internal/PieChart";
import { Button ,type ButtonProps,buttonVariants} from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import {Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,DialogClose,DialogOverlay,DialogPortal } from "@/components/ui/dialog";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OTPInput } from "@/components/ui/OtpInput";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationWrapper,
  PaginationInfo,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

// Internal Components
import ActionDropdown from "@/ui/internal/ActionDropDown";
import cardComp from "@/components/internal/cardComp";
import DialogComponent from "@/components/internal/dialogComp";
// import Dropdown from "@/components/internal/Dropdown";
import PaginationComp from "@/components/internal/PaginationComp";
import ProgressBar from "@/components/internal/ProgressBar";
// import TooltipComp from "@/components/internal/tooltipComp";
import Spinner from "@/components/ui/spinner";
import { Collapsible } from "@/components/ui/collapsible";
import Toast from "@/components/internal/ToastNotification";
import TimePicker from "@/components/internal/TimePicker";
import ToggleButton from "@/components/internal/ToggleButton";
import {Avatar} from "@/components/ui/avatar/avatar";
import { CustomInput } from "@/components/internal/CustomInput";
import CustomFileUpload from "@/components/internal/CustomFileUpload";
import { Tooltip } from "@/components/internal/Tooltip";
import { Textarea } from "@/components/internal/TextField";
import { Tabs,TabsContent,TabsLabel,TabsTrigger,TabsList } from "@/components/ui/tabs";
import { Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbIcon } from "@/components/ui/breadcrumb";
  import { Card,CardAction,CardContent,CardHeader,CardFooter,CardTitle,CardDescription } from "@/components/ui/card";
  import { ListField,ListFieldProps } from "@/components/ui/listfield";
  import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Rating,type RatingProps } from "@/components/ui/rating";
import CustomDropDown,{type DropdownItemType} from "@/components/internal/dropdowns/CustomDropDown";
import { InputDropDown,type DataItem } from "@/components/internal/dropdowns/InputDropDown";

export {
  InputDropDown,type DataItem,
  CustomDropDown,type DropdownItemType,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  ListField,type ListFieldProps,
  Progress,
  Rating,type RatingProps,
//tabs
Tabs,TabsContent,TabsLabel,TabsTrigger,TabsList,
Card,CardAction,CardContent,CardHeader,CardFooter,CardTitle,CardDescription,
Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbIcon,
  Textarea,
  CustomFileUpload,
  Tooltip,
  CustomInput,
  Avatar,
  ToggleButton,
  TimePicker,
  Toast,
  CustomPieChart,
  Button,type ButtonProps,buttonVariants,
  Badge,
  Alert,
  AlertDescription,
  AlertTitle,
  Calendar,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,DialogClose,DialogOverlay,DialogPortal ,
  DropdownMenu,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
  Input,
  Label,
  OTPInput,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationWrapper,
  PaginationInfo,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Select,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,

  // Sidebar
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,

  // Internal
  ActionDropdown,
  cardComp,
  DialogComponent,
  // Dropdown,
  PaginationComp,
  ProgressBar,
  Spinner,

  // Misc
  Collapsible,
};
