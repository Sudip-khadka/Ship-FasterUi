"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Define the style variants
type AccordionVariant = "rounded" | "outline" | "filled"

// Use type instead of interface
type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant
}

const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(
  ({ variant = "rounded", ...props }, ref) => {
    return <AccordionPrimitive.Root ref={ref} data-slot="accordion" data-variant={variant} {...props} />
  },
)
Accordion.displayName = "Accordion"

// Use type instead of interface
type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  variant?: AccordionVariant
}

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(
  ({ className, variant, ...props }, ref) => {
    // Create a context value directly instead of using useContext
    const actualVariant = variant || "rounded"

    return (
      <AccordionPrimitive.Item
        ref={ref}
        data-slot="accordion-item"
        data-variant={actualVariant}
        className={cn(
          "transition-all duration-200 ease-in-out mb-2 hover:bg-secondary-100 border-secondary-200 gap-3  data-[state=open]:bg-secondary-100",
          actualVariant === "outline" && "border-b ",
          actualVariant === "filled" && " border",
          actualVariant === "rounded" && "rounded-lg overflow-hidden border",
          actualVariant === "outline" && "mb-0",
          // actualVariant === "outline" || actualVariant === "rounded" ? "mb-2" : "border-b",
          className,
        )}
        {...props}
      />
    )
  },
)
AccordionItem.displayName = "AccordionItem"

// Use type instead of interface
type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  variant?: AccordionVariant
}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
  ({ className, children, variant, ...props }, ref) => {
    // Create a context value directly instead of using useContext
    const actualVariant = variant || "rounded"

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          data-slot="accordion-trigger"
          data-variant={actualVariant}
          className={cn(
            "focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-2 p-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 text-secondary-900 [&[data-state=open]>svg]:rotate-180",
            "font-medium",
            // Add variant-specific styles
            actualVariant === "rounded" && "rounded-lg data-[state=open]:rounded-b-none",
            actualVariant === "outline" && "",
            // Active state styles
            // "data-[state=open]:bg-secondary-300",

            className,
          )}
          {...props}
        >
          {children}
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  },
)
AccordionTrigger.displayName = "AccordionTrigger"

// Use type instead of interface
type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & {
  variant?: AccordionVariant
}

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(
  ({ className, children, variant, ...props }, ref) => {
    // Create a context value directly instead of using useContext
    const actualVariant = variant || "rounded"

    return (
      <AccordionPrimitive.Content
        ref={ref}
        data-slot="accordion-content"
        data-variant={actualVariant}
        className={cn(
          "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all text-secondary-700",
          className,
        )}
        {...props}
      >
        <div className={cn("flex flex-col gap-2","p-4 pt-0", className)}>{children}</div>
      </AccordionPrimitive.Content>
    )
  },
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

