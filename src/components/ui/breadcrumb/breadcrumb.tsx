import * as React from "react"
import { ChevronRight,  MoreHorizontal, Slash, } from "lucide-react"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"


function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({
  className,
  type = "default",
  label,
  startIcon,
  endIcon,
  children,
  state,
  ...props
}: React.ComponentProps<"li"> & {
  type?: "link" | "outline" | "default";
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?:"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"
  state?: "active" | "disabled";
  disabled?: boolean;
}) {
  const getTypeClasses = () => {
    switch (type) {
      case "link":
        return "text-secondary-700 hover:text-primary hover:underline active:text-primary p-0 "
      case "outline":
        return "border border-secondary-200 hover:border-primary-200 hover:text-primary active:border-primary"
      default:
        return "text-secondary-700 bg-secondary-100 hover:bg-primary-50 hover:text-primary hover:shadow-xs active:shadow-xs active:bg-primary-100 active:text-primary-600"
    }
  }
  const getActiveClasses = () => {
    switch (state) {
      case "active":
        switch (type) {
          case "link":
            return "text-primary"
          case "outline":
            return "border-primary-600 text-primary-600"
          default:
            return "bg-primary-100 text-primary-600"
        }
      case "disabled":
        return "opacity-50 cursor-not-allowed pointer-events-none text-secondary-500"
      default:
        return ""
    }
  }

  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
      "rounded-sm inline-flex px-2 py-1 items-center gap-1 h-full text-sm font-normal leading-[16px]",
      "leading-none",
      getTypeClasses(),
      getActiveClasses(),
      className
      )}
      {...props}
    >
      {children || (
      <>
        {startIcon && startIcon}
        {label && <p className="leading-none">{label}</p>}
        {endIcon && endIcon}
      </>
      )}
    </li>
  )
}
function BreadcrumbIcon({
  className,
  type = "filled",
  size="3xl",
  state,
  ...props
}: React.ComponentProps<"li"> & {
  type?: "filled" | "accent" | "outline" | "grey" | "none"
  size?:"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"
  state?: "active" | "disabled" |"default";
}) {
  const getTypeClasses = () => {
    switch (type) {
      case "filled":
        return "bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-600 active:shadow-xs"
      case "accent":
        return "bg-primary-50 text-primary hover:bg-primary-100 active:border active:border-primary-200 active:shadow-xs"
      case "outline":
        return "border border-primary text-primary hover:border-primary-600 active:border-[1.5px]"
      case "grey":
        return "bg-muted text-muted-foreground border border-transparent hover:bg-secondary-100 active:border active:border-secondary-300 active:shadow-xs"
      case "none":
        return "text-primary hover:bg-primary-50 active:shadow-xs active:bg-primary-100"
      default:
        return ""
    }
  }
const getStateClasses = () => {
  switch (state) {
    case "active":
    switch (type) {
      case "filled":
      return "bg-primary-600 text-primary-foreground shadow-xs"
      case "accent":
      return "bg-primary-100 text-primary border border-primary-200 shadow-xs"
      case "outline":
      return "border-[1.5px] border-primary-600 text-primary"
      case "grey":
      return "bg-secondary-100 border border-secondary-300 shadow-xs"
      case "none":
      return "bg-primary-100 shadow-xs"
      default:
      return ""
    }
    case "disabled":
    return "opacity-60 cursor-not-allowed pointer-events-none text-secondary-500"
    default:
    return ""
  }
  }
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
        "inline-flex items-center flex-shrink-0 justify-center w-[20px] h-[20px] gap-1 rounded-md p-1 ",
        getTypeClasses(),
        getStateClasses(),
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  variant,
  className,
  size="3xl",
  ...props
}: React.ComponentProps<"li"> & {
  variant?: "slash" | "chevron" | "colon" | "arrow";
  size?:"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"
}) {
  const getIcon = () => {
    switch (variant) {
      case "slash":
      return <Slash className="-rotate-20"/>;
      case "colon":
      return (
        <svg className="rotate-90" viewBox="0 0 20 25">
          <circle cx={8} cy={12.5} r={3} fill="currentColor"  />
          <circle cx={17} cy={12.5} r={3}
          fill="currentColor"  />
        </svg>
      );
      case "arrow":
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>;
      default:
      return <ChevronRight />;
    }
  }
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center text-center align-middle text-secondary-500 fill-secondary-500",
        {
          sm: "[&>svg]:size-3 [&>span]:text-sm",
          md: "[&>svg]:size-3.5 [&>span]:text-base", 
          lg: "[&>svg]:size-4 [&>span]:text-lg",
          xl: "[&>svg]:size-5 [&>span]:text-xl",
          "2xl":"[&>svg]:size-6 [&>span]:text-2xl",
          "3xl":"[&>svg]:size-7 [&>span]:text-3xl"
        }[size], className)}
      {...props}
    >
      {children ?? getIcon()}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbIcon
}
