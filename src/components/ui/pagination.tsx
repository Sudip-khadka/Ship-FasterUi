import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
type Variant = "minimal" | "outlined" | "primary" |"default";

const getVariantStyles = (variant: Variant): string => {
  switch (variant) {
    case "minimal":
      return "bg-transparent border-none hover:bg-secondary-200";
    case "outlined":
      return "border border-secondary-300 hover:border-secondary-400 bg-transparent";
    case "primary":
      return "text-primary bg-primary-50 hover:bg-primary-100 active:shadow-sm";
      case "default":
        return "bg-secondary-100 hover:bg-secondary-200"
    default:
      return "bg-secondary-100 hover:bg-secondary-200";
  }
};

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  variant="distributed",
  ...props
}: React.ComponentProps<"ul">&{variant?:"compressed"|"distributed"|"leftAndRight"|"middle"}) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row gap-1 items-center",{
        compressed:"w-fit gap-0",
        distributed:"w-full justify-between px-4 sm:px-20",
        leftAndRight:"justify-between",
        middle:"justify-between",

      }[variant], className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  variant?:Variant;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "md",
  variant="default",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn("flex min-w-fit p-2 sm:p-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700",
        getVariantStyles(variant),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  iconOnly = false,
  textOnly = false,
  variant="default",
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  iconOnly?: boolean
  textOnly?: boolean
  variant?: Variant
}) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700", className,getVariantStyles(variant))}
      {...props}
    >
      {!textOnly&&<ChevronLeftIcon />}
      {!iconOnly && <span className="hidden sm:block">Previous</span>}
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  iconOnly = false,
  textOnly = false,
  variant="default",
  ...props
}: React.ComponentProps<typeof PaginationLink>& {
  iconOnly?: boolean
  variant?: Variant
  textOnly?:boolean
}) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer text-secondary-700", className,getVariantStyles(variant))}
      {...props}
    >
      {!iconOnly&&<span className="hidden sm:block">Next</span>}
     {!textOnly && <ChevronRightIcon />}
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}
function PaginationWrapper({
  className,
  children,
  variant="distributed",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
  variant?:"compressed"|"distributed"|"middle"|"leftAndRight"
}) {
  return (
    <div className={cn("flex gap-2 items-center",{
      compressed:"w-fit justify-start gap-0",
      distributed:"w-fit flex-grow justify-between gap-3",
      leftAndRight:"w-full justify-start gap-3",
      middle:"w-full justify-center gap-3",
    }[variant])} {...props}>
      {children}
    </div>
  )
}
function PaginationInfo({ 
  className,
  currentPage = 1,
  totalItems,
  variant="default",
  highlightClassName,
  customText,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  currentPage?: number;
  totalItems: number;
  variant?: Variant
  highlightClassName?:string
  customText?:React.ReactNode
}) {
  return (
    customText??<p 
      className={cn("flex-shrink-0 h-full px-2 sm:px-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded text-secondary-700",
        getVariantStyles(variant), className)} 
      {...props}
    >
      Showing <span className={cn("font-bold",highlightClassName)}>{currentPage}</span> of <span className={cn("font-bold",highlightClassName)}>{totalItems}</span> results
    </p>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationWrapper,
  PaginationInfo
}
