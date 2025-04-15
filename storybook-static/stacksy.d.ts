import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ClassProp } from 'class-variance-authority/dist/types';
import { ControllerProps } from 'react-hook-form';
import { default as default_2 } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React_2 from 'react';
import { Slot } from '@radix-ui/react-slot';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export declare const Accordion: React_2.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React_2.RefAttributes<HTMLDivElement> & {
    variant?: AccordionVariant;
}, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React_2.RefAttributes<HTMLDivElement> & {
    variant?: AccordionVariant;
}, "ref">) & React_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: React_2.ForwardRefExoticComponent<Omit<AccordionContentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare type AccordionContentProps = React_2.ComponentProps<typeof AccordionPrimitive.Content> & {
    variant?: AccordionVariant;
};

export declare const AccordionItem: React_2.ForwardRefExoticComponent<Omit<AccordionItemProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare type AccordionItemProps = React_2.ComponentProps<typeof AccordionPrimitive.Item> & {
    variant?: AccordionVariant;
};

export declare type AccordionProps = React_2.ComponentProps<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
};

export declare const AccordionTrigger: React_2.ForwardRefExoticComponent<Omit<AccordionTriggerProps, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare type AccordionTriggerProps = React_2.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    variant?: AccordionVariant;
};

declare type AccordionVariant = "rounded" | "outline" | "filled";

export declare function AlertDescription({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function AlertTitle({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare const alertVariants: (props?: ({
    variant?: "primary" | "secondary" | "destructive" | "warning" | "success" | null | undefined;
    style?: "filled" | "accent" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Avatar({ notificationCount, logoImage, shape, type, size, action, notificationOnClick, status, indicatorClassName, notification, notificationClassName, verifiedIcon, src, initials, className, placeholder, onClick, childClassName, ...props }: AvatarProps): JSX.Element;

export declare type AvatarProps = {
    childClassName?: string;
    type: "image" | "initial" | "placeholder";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    shape?: "rounded" | "circle" | "square";
    action?: "none" | "verified" | "pending" | "company";
    status: "none" | "online" | "offline";
    src?: string;
    notification?: boolean;
    initials?: `${string}${string}` | `${string}`;
    placeholder?: default_2.ReactNode;
    verifiedIcon?: default_2.ReactNode;
    logoImage?: string;
    notificationCount?: number;
    showNotificationCount?: boolean;
    indicatorClassName?: string;
    className?: string;
    notificationClassName?: string;
    notificationOnClick?: () => void;
    onClick?: () => void;
};

export declare function Badge({ className, variant, size, shape, children, style, startIcon, endIcon, isHover, isActive, disabled, asChild, dotIcon, ...props }: React_2.ComponentProps<"span"> & {
    style?: "filled" | "outlined" | "accent";
    variant?: "primary" | "secondary" | "destructive" | "warning" | "success";
    size?: "sm" | "md" | "lg";
    shape?: "pill" | "rounded" | "circle" | "dot";
    asChild?: boolean;
    startIcon?: React_2.ReactNode;
    endIcon?: React_2.ReactNode;
    disabled?: boolean;
    dotIcon?: React_2.ReactNode;
    isHover?: boolean;
    isActive?: boolean;
    iconWrapperClassname?: string;
}): JSX.Element;

export declare const badgeVariants: (props?: ({
    variant?: "primary" | "secondary" | "destructive" | "warning" | "success" | null | undefined;
    disabled?: boolean | null | undefined;
    style?: "filled" | "accent" | "outlined" | null | undefined;
    shape?: "rounded" | "circle" | "pill" | "dot" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare interface BaseItem {
    id: string;
}

export declare function Breadcrumb({ ...props }: React_2.ComponentProps<"nav">): JSX.Element;

export declare function BreadcrumbEllipsis({ className, ...props }: React_2.ComponentProps<"span">): JSX.Element;

export declare function BreadcrumbIcon({ className, type, size, state, ...props }: React_2.ComponentProps<"li"> & {
    type?: "filled" | "accent" | "outline" | "grey" | "none";
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    state?: "active" | "disabled" | "default";
}): JSX.Element;

export declare function BreadcrumbItem({ className, type, label, startIcon, endIcon, children, state, ...props }: React_2.ComponentProps<"li"> & {
    type?: "link" | "outline" | "default";
    label?: string;
    startIcon?: React_2.ReactNode;
    endIcon?: React_2.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    state?: "active" | "disabled";
    disabled?: boolean;
}): JSX.Element;

export declare function BreadcrumbLink({ asChild, className, ...props }: React_2.ComponentProps<"a"> & {
    asChild?: boolean;
}): JSX.Element;

export declare function BreadcrumbList({ className, ...props }: React_2.ComponentProps<"ol">): JSX.Element;

export declare function BreadcrumbPage({ className, ...props }: React_2.ComponentProps<"span">): JSX.Element;

export declare function BreadcrumbSeparator({ children, variant, className, size, ...props }: React_2.ComponentProps<"li"> & {
    variant?: "slash" | "chevron" | "colon" | "arrow";
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}): JSX.Element;

export declare const Button: ({ className, variant, size, startIcon, endIcon, childrenClassName, children, asChild, ...props }: ButtonProps) => JSX.Element;

export declare type ButtonProps = React_2.ComponentProps<"button"> & {
    variant?: "default" | "link" | "secondary" | "destructive" | "tertiary" | "destructiveTertiary" | "outline" | "destructiveOutline" | "destructiveSecondary" | "destructiveLink" | "ghost";
    size?: "default" | "sm" | "md" | "lg";
    asChild?: boolean;
    startIcon?: React_2.ReactNode;
    endIcon?: React_2.ReactNode;
    childrenClassName?: string;
};

export declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "secondary" | "destructive" | "tertiary" | "destructiveTertiary" | "outline" | "destructiveOutline" | "destructiveSecondary" | "destructiveLink" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Card({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function CardAction({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardActionProps = React_2.ComponentProps<"div">;

export declare function CardContent({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardContentProps = React_2.ComponentProps<"div">;

export declare function CardDescription({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardDescriptionProps = React_2.ComponentProps<"div">;

export declare function CardFooter({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardFooterProps = React_2.ComponentProps<"div">;

export declare function CardHeader({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardHeaderProps = React_2.ComponentProps<"div">;

export declare type CardProps = React_2.ComponentProps<"div">;

export declare function CardTitle({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare type CardTitleProps = React_2.ComponentProps<"div">;

export declare interface ChartConfig {
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
}

export declare interface ChartDataItem {
    name: string;
    value: number;
    color?: string;
}

export declare type ChartType = "Pie" | "Donut" | "Half";

export declare const Checkbox: default_2.FC<CheckboxProps>;

export declare interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    shape?: "square" | "rounded" | "circle";
    check?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

export declare interface ComboboxProps {
    className?: string;
    dropDownTrigger?: React_2.ReactNode;
    multiSelect?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    data?: DataItem[];
    onChange?: (value: string | string[]) => void;
    scrollable?: boolean;
    maxHeight?: string;
    endIcon?: React_2.ReactNode;
}

export declare function CustomDropDown({ trigger, items, align, className, contentClassName, itemClassName, open: controlledOpen, onOpenChange: setControlledOpen, }: CustomDropDownProps): JSX.Element;

export declare interface CustomDropDownProps {
    trigger?: React_2.ReactNode;
    items: DropdownItemType[];
    align?: "start" | "end" | "center";
    className?: string;
    contentClassName?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    itemClassName?: string;
}

export declare const CustomFileUpload: default_2.FC<FileUploadProps>;

export declare const CustomPieChart: default_2.FC<DynamicChartProps>;

export declare const CustomTooltip: default_2.FC<TooltipProps>;

export declare interface DataItem {
    value: string;
    label: string;
    secondaryLabel?: string;
    image?: string;
    icon?: React_2.ReactNode;
}

export declare function Dialog({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Root>): JSX.Element;

export declare function DialogClose({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Close>): JSX.Element;

export declare interface DialogCloseProps extends React_2.ComponentProps<typeof DialogPrimitive.Close> {
}

export declare function DialogContent({ className, children, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Content>): JSX.Element;

export declare interface DialogContentProps extends React_2.ComponentProps<typeof DialogPrimitive.Content> {
    className?: string;
    children?: React_2.ReactNode;
}

export declare function DialogDescription({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Description>): JSX.Element;

export declare interface DialogDescriptionProps extends React_2.ComponentProps<typeof DialogPrimitive.Description> {
    className?: string;
}

export declare function DialogFooter({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare interface DialogFooterProps extends React_2.ComponentProps<"div"> {
    className?: string;
}

export declare function DialogHeader({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare interface DialogHeaderProps extends React_2.ComponentProps<"div"> {
    className?: string;
}

export declare function DialogOverlay({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Overlay>): JSX.Element;

export declare interface DialogOverlayProps extends React_2.ComponentProps<typeof DialogPrimitive.Overlay> {
    className?: string;
}

export declare function DialogPortal({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Portal>): JSX.Element;

export declare interface DialogPortalProps extends React_2.ComponentProps<typeof DialogPrimitive.Portal> {
}

export declare interface DialogProps extends React_2.ComponentProps<typeof DialogPrimitive.Root> {
}

export declare function DialogTitle({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Title>): JSX.Element;

export declare interface DialogTitleProps extends React_2.ComponentProps<typeof DialogPrimitive.Title> {
    className?: string;
}

export declare function DialogTrigger({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Trigger>): JSX.Element;

export declare interface DialogTriggerProps extends React_2.ComponentProps<typeof DialogPrimitive.Trigger> {
}

export declare type DropdownItemType = ItemType | GroupType | LabelType | SeparatorType | SubmenuType;

export declare function DropdownMenu({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Root>): JSX.Element;

export declare function DropdownMenuCheckboxItem({ className, children, checked, onCheckedChange, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function DropdownMenuContent({ className, sideOffset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Content>): JSX.Element;

export declare function DropdownMenuGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Group>): JSX.Element;

export declare function DropdownMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): JSX.Element;

export declare function DropdownMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuPortal({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Portal>): JSX.Element;

export declare function DropdownMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): JSX.Element;

export declare function DropdownMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): JSX.Element;

export declare function DropdownMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Separator>): JSX.Element;

export declare function DropdownMenuShortcut({ className, ...props }: React_2.ComponentProps<"span">): JSX.Element;

export declare function DropdownMenuSub({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Sub>): JSX.Element;

export declare function DropdownMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): JSX.Element;

export declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuTrigger({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): JSX.Element;

export declare interface DynamicChartProps {
    type?: ChartType;
    showData?: boolean;
    showTooltip?: boolean;
    data: ChartDataItem[];
    width?: number;
    height?: number;
    className?: string;
    colors?: string[];
    total?: number;
}

export declare const FileProgress: default_2.FC<FileProgressProps>;

export declare interface FileProgressProps {
    file: File;
    progress: number;
    status: FileStatus;
    errorMessage?: string;
    onRemove: () => void;
    onRetry?: () => void;
}

declare type FileStatus = "uploading" | "completed" | "failed" | "error";

export declare interface FileUploadProps {
    disabled?: boolean;
    promptTitle1?: string;
    promptTitle2?: string;
    promptTitle3?: string;
    showPromptDescription?: boolean;
    showLeadingIcon?: boolean;
    uploadType?: "drag-drop" | "browse" | "combined";
    allowedFileTypes?: string[];
    maxFileSize?: number;
    description?: string;
    onFilesSelected?: (files: File[]) => void;
    onUploadComplete?: (files: File[]) => void;
    className?: string;
}

export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React_2.JSX.Element;

export declare function FormControl({ ...props }: React_2.ComponentProps<typeof Slot>): JSX.Element;

export declare function FormDescription({ className, ...props }: React_2.ComponentProps<"p">): JSX.Element;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX.Element;

export declare function FormItem({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function FormLabel({ className, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element;

export declare function FormMessage({ className, ...props }: React_2.ComponentProps<"p">): JSX.Element | null;

export declare interface GroupType extends BaseItem {
    type: "group";
    label?: string;
    items: ItemType[];
}

export declare function Input({ className, type, inputSize, leftIcon, rightIcon, iconClassName, validation, errorMessage, showValidationIcon, onValidationChange, ...props }: InputProps): JSX.Element;

declare interface InputCustomProps {
    inputSize?: InputSize;
    leftIcon?: React_2.ReactNode;
    rightIcon?: React_2.ReactNode;
    iconClassName?: string;
    validation?: ValidationOptions;
    errorMessage?: string;
    showValidationIcon?: boolean;
    onValidationChange?: (isValid: boolean) => void;
}

export declare function InputDropDown({ className, dropDownTrigger, multiSelect, placeholder, searchPlaceholder, emptyMessage, data, endIcon, onChange, scrollable, maxHeight, }: ComboboxProps): JSX.Element;

export declare type InputProps = InputCustomProps & Omit<React_2.ComponentProps<"input">, keyof InputCustomProps>;

export declare type InputSize = "sm" | "md" | "lg";

export declare interface ItemType extends BaseItem {
    type: "item";
    label: string;
    icon?: React_2.ReactNode;
    image?: string;
    href?: string;
    onClick?: () => void;
    shortcut?: string;
    className?: string;
    disabled?: boolean;
}

export declare interface LabelType extends BaseItem {
    type: "label";
    label: string;
}

export declare function ListField({ leftContent, rightContent, label, description, variant, size, contentAlign, contentGap, className, labelClassName, descriptionClassName, leftWrapperClassName, rightWrapperClassName, contentWrapperClassName, asButton, onClick, ...props }: ListFieldProps): JSX.Element;

export declare interface ListFieldProps extends default_2.HTMLAttributes<HTMLDivElement> {
    leftContent?: default_2.ReactNode;
    rightContent?: default_2.ReactNode;
    label: string;
    description?: string;
    contentAlign?: "left" | "center" | "right";
    contentGap?: "default" | "tight" | "loose";
    fullWidth?: boolean;
    labelClassName?: string;
    descriptionClassName?: string;
    leftWrapperClassName?: string;
    rightWrapperClassName?: string;
    contentWrapperClassName?: string;
    asButton?: boolean;
    onClick?: () => void;
    variant?: "default" | "bordered" | "card";
    size?: "default" | "sm" | "lg" | "md";
}

export declare function Pagination({ className, ...props }: React_2.ComponentProps<"nav">): JSX.Element;

export declare function PaginationContent({ className, variant, ...props }: React_2.ComponentProps<"ul"> & {
    variant?: "compressed" | "distributed" | "leftAndRight" | "middle";
}): JSX.Element;

export declare function PaginationEllipsis({ className, ...props }: React_2.ComponentProps<"span">): JSX.Element;

export declare function PaginationInfo({ className, currentPage, totalItems, variant, highlightClassName, customText, ...props }: React_2.HTMLAttributes<HTMLParagraphElement> & {
    currentPage?: number;
    totalItems: number;
    variant?: Variant;
    highlightClassName?: string;
    customText?: React_2.ReactNode;
}): string | number | bigint | boolean | Iterable<React_2.ReactNode> | Promise<string | number | bigint | boolean | React_2.ReactPortal | React_2.ReactElement<unknown, string | React_2.JSXElementConstructor<any>> | Iterable<React_2.ReactNode> | null | undefined> | JSX.Element;

export declare function PaginationItem({ ...props }: React_2.ComponentProps<"li">): JSX.Element;

export declare function PaginationLink({ className, isActive, size, variant, ...props }: PaginationLinkProps): JSX.Element;

export declare type PaginationLinkProps = {
    isActive?: boolean;
    variant?: Variant;
} & Pick<React_2.ComponentProps<typeof Button>, "size"> & React_2.ComponentProps<"a">;

export declare function PaginationNext({ className, iconOnly, textOnly, variant, ...props }: React_2.ComponentProps<typeof PaginationLink> & {
    iconOnly?: boolean;
    variant?: Variant;
    textOnly?: boolean;
}): JSX.Element;

export declare function PaginationPrevious({ className, iconOnly, textOnly, variant, ...props }: React_2.ComponentProps<typeof PaginationLink> & {
    iconOnly?: boolean;
    textOnly?: boolean;
    variant?: Variant;
}): JSX.Element;

export declare function PaginationWrapper({ className, children, variant, ...props }: React_2.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children: React_2.ReactNode;
    variant?: "compressed" | "distributed" | "middle" | "leftAndRight";
}): JSX.Element;

export declare type Period = "AM" | "PM";

export declare type PointerPosition = "Leading" | "Middle" | "Trailing" | "Off";

export declare function Popover({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Trigger>): JSX.Element;

export declare function ProgressBar({ className, rootClassName, position, label, description, icon, progress, indicatorClassName, }: {
    progress: number;
    description?: string;
    label?: string;
    position?: "top" | "center" | "bottom";
    className?: string;
    rootClassName?: string;
    indicatorClassName?: string;
    icon?: default_2.ReactNode;
}): JSX.Element;

export declare const Rating: ({ value, max, readonly, size, variant, starStyle, onRatingChange, className, showTooltip, tooltipClassname, ...props }: RatingProps) => JSX.Element;

export declare interface RatingProps extends default_2.HTMLAttributes<HTMLDivElement> {
    /**
     * The rating value (0-5, supports half-star increments)
     */
    value: number;
    /**
     * The maximum rating value
     * @default 5
     */
    max?: number;
    /**
     * Whether the rating is readonly
     * @default true
     */
    readonly?: boolean;
    /**
     * The size of the rating stars
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * The color variant of the rating
     * @default "yellow"
     */
    variant?: "yellow" | "neutral";
    /**
     * The style of the stars
     * @default "filled"
     */
    starStyle?: "filled" | "outline";
    /**
     * Callback when rating changes
     */
    onRatingChange?: (value: number) => void;
    /**
     * Whether to show tooltip with the hovered value
     * @default true
     */
    showTooltip?: boolean;
    tooltipClassname?: string;
}

export declare interface SeparatorType extends BaseItem {
    type: "separator";
}

export declare const Skeleton: ({ className, ...props }: SkeletonProps) => JSX.Element;

export declare type SkeletonProps = default_2.ComponentPropsWithoutRef<"div"> & {
    className?: string;
};

export declare interface SubmenuType extends BaseItem {
    type: "submenu";
    label: string;
    icon?: React_2.ReactNode;
    items: ItemType[];
    submenuType?: "default" | "collapsible";
}

export declare type SubmenuTypeType = "default" | "collapsible";

export declare function Tabs({ className, ...props }: TabsProps): JSX.Element;

export declare function TabsContent({ className, ...props }: TabsContentProps): JSX.Element;

export declare interface TabsContentProps extends React_2.ComponentProps<typeof TabsPrimitive.Content> {
}

export declare function TabsLabel({ value, className, ...props }: TabsLabelProps): JSX.Element;

export declare interface TabsLabelProps {
    value: number;
    className?: string;
}

export declare function TabsList({ className, variant, ...props }: TabsListProps): JSX.Element;

export declare interface TabsListProps extends React_2.ComponentProps<typeof TabsPrimitive.List> {
    variant?: TabsVariant;
}

export declare interface TabsProps extends React_2.ComponentProps<typeof TabsPrimitive.Root> {
}

export declare type TabsSize = "default" | "sm" | "md" | "lg";

export declare function TabsTrigger({ className, variant, size, isFullWidth, children, ...props }: TabsTriggerProps): JSX.Element;

export declare interface TabsTriggerProps extends React_2.ComponentProps<typeof TabsPrimitive.Trigger> {
    classname?: string;
    children?: React_2.ReactNode;
    variant?: TabsVariant;
    size?: TabsSize;
    isFullWidth?: boolean;
}

export declare type TabsVariant = "dot" | "default" | "button" | "buttonOutlined" | "divider" | "lineTop" | "lineBottom";

export declare function TimePicker({ type, period: initialPeriod, hours: initialHours, minutes: initialMinutes, seconds: initialSeconds, showSeconds, onChange, className, }: TimePickerProps): JSX.Element;

export declare interface TimePickerProps {
    type: TimePickerType;
    period?: Period;
    hours?: string;
    minutes?: string;
    seconds?: string;
    showSeconds?: boolean;
    onChange?: (value: {
        hours: string;
        minutes: string;
        seconds: string;
        period: Period;
    }) => void;
    className?: string;
}

export declare type TimePickerType = "Stepper" | "Dropdown" | "Input" | "Timer";

export declare const Toast: default_2.FC<ToastProps>;

declare type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

declare interface ToastProps {
    message: string;
    variant?: ToastVariant;
    duration?: number;
    onClose?: () => void;
    position?: ToastPosition;
    className?: string;
    iconClassName?: string;
    containerClassName?: string;
    progressClassName?: string;
}

declare type ToastVariant = "success" | "error" | "warning" | "info";

export declare const Tooltip: ({ color, direction, pointerPosition, description, showTitle, showAction, showClose, title, descriptionText, actionText, onAction, onClose, className, isOpen: controlledIsOpen, children, }: ToolTipProps) => JSX.Element;

export declare type TooltipColor = "White" | "Primary" | "Neutral";

export declare type TooltipDirection = "Top" | "Right" | "Bottom" | "Left";

export declare interface ToolTipProps {
    color?: TooltipColor;
    direction?: TooltipDirection;
    pointerPosition?: PointerPosition;
    description?: boolean;
    showTitle?: boolean;
    showAction?: boolean;
    showClose?: boolean;
    title?: string;
    descriptionText?: string;
    actionText?: string;
    onAction?: () => void;
    onClose?: () => void;
    className?: string;
    isOpen?: boolean;
    children?: default_2.ReactNode;
}

export declare interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
        payload: {
            name: string;
            value: number;
            total: number;
        };
    }>;
}

export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};

export declare interface ValidationOptions {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    custom?: (value: string) => boolean;
}

export declare type ValidationState = "valid" | "invalid" | "default";

export declare type Variant = "minimal" | "outlined" | "primary" | "default";

export { }
