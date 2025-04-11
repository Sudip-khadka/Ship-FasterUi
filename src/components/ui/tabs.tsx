import type * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
type VariantType="dot" | "default" | "button" | "buttonOutlined" | "divider" | "lineTop" | "lineBottom"

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center hover:cursor-pointer rounded-md text-secondary-700 dark:text-secondary-200 transition-all duration-200 ease-in-out hover:text-secondary-900 dark:hover:text-secondary-100 text-sm font-medium leading-4 data-[state=active]:text-primary-600 disabled:text-secondary-500 disabled:pointer-events-none disabled:cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-muted-foreground disabled:opacity-50 data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground transition-colors duration-200",
        button:
          "bg-secondary-100 dark:bg-secondary-900 hover:bg-secondary-200 data-[state=active]:bg-transparent dark:data-[state=active]:bg-secondary-800 dark:data-[state=active]:text-secondary-100 data-[state=active]:shadow-sm transition-all duration-200",
        buttonOutlined: "border border-transparent hover:border-secondary-200 data-[state=active]:border-primary-200 data-[state=active]:border transition-all duration-200",
        divider:
        "relative border-r border-secondary-400 dark:border-secondary-600 " +
          // Smooth border overlap management
          "-mr-px transition-[margin] duration-200 " +
          // Active state styling
          "data-[state=active]:border-primary data-[state=active]:mr-0 data-[state=active]:z-10 " +
          // Left border appears only for active tab
          "data-[state=active]:border-l data-[state=active]:border-l-primary " +
          // Edge cases
          "[&:first-of-type]:border-l-0 [&:last-of-type]:border-r-0 [&:last-of-type]:mr-0 " +
          // Visual polish
          "rounded-none hover:bg-secondary-50/50 dark:hover:bg-secondary-900/30",
        lineTop:
          "border-t border-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-900 data-[state=active]:bg-primary-50 data-[state=active]:border-t-[2px] dark:data-[state=active]:bg-secondary-800 rounded-none data-[state=active]:border-primary transition-all duration-200",
        lineBottom:
          "border-b border-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-900 data-[state=active]:bg-primary-50 data-[state=active]:border-b-[2px] data-[state=active]:border-primary dark:data-[state=active]:bg-secondary-800 rounded-none transition-all duration-400 ease-in-out",
        dot: "transition-all duration-200",
      },
      size: {
        default: "gap-2 px-5 py-2",
        sm: "gap-2 px-4 py-2",
        md: "gap-2 px-5 py-2",
        lg: "gap-3 px-6 py-2",
      },
    },
    defaultVariants: {
      variant: "button",
      size: "default",
    },
  },
)
const tabsVariants = cva(
  "inline-flex",
  {
    variants: {
      variant: {
        default:
          "",
        button:
          "bg-secondary-100 dark:bg-secondary-900",
        buttonOutlined: "",
        divider:
          "",
        lineTop:
          "",
        lineBottom:
          "",
        dot: "",
      },
      // size: {
      //   default: "gap-2 px-5 py-2",
      //   sm: "gap-2 px-4 py-2",
      //   md: "gap-2 px-5 py-2",
      //   lg: "gap-3 px-6 py-2",
      // },
    },
    defaultVariants: {
      variant: "default",
      // size: "default",
    },
  },
)

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-2 items-center px-6", className,)} {...props} />
}

function TabsList({ className,variant, ...props }: React.ComponentProps<typeof TabsPrimitive.List>&{variant?:VariantType}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex w-full items-center justify-center rounded-lg p-[3px]",
        className,
        tabsVariants({variant})
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  variant = "default",
  size = "default",
  isFullWidth = false,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  variant?: VariantType
  size?: "default" | "sm" | "md" | "lg"
  isFullWidth?: boolean
}) {
  return variant === "dot" ? (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className, "group",{"flex-grow":isFullWidth})}
      {...props}
    >
      <span className="flex flex-col gap-1 items-center justify-center">
        <span className={cn(className,"flex items-center gap-2",
  {"gap-3":size==="lg"}
        )}>{children}</span>{" "}
        <span className={cn("group-data-[state=active]:text-primary invisible group-hover:visible group-data-[state=active]:visible")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <circle cx="4.5" cy="4" r="3.4" fill="currentColor" stroke="white" strokeWidth="0.8" />
          </svg>
        </span>
      </span>
    </TabsPrimitive.Trigger>
  ) : (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className,"group",{"flex-grow":isFullWidth})}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn("flex-1 outline-none w-full", className)} {...props} />
}

const tabsLabelVariants = cva("", {
  variants: {},
  defaultVariants: {},
})

function TabsLabel({ value, className,...props }: { value: number; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full text-base px-2 py-1 gap-2 text-center font-normal bg-secondary-100 group-data-[state=active]:text-secondary-50 group-data-[state=active]:bg-primary leading-[18px]",
        className,
        tabsLabelVariants({}),
        {...props}
      )}
    >
      {value}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsLabel }
