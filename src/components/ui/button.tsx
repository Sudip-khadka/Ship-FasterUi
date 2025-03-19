import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-700 active:text-primary-200",
        destructive:
          "bg-destructive text-primary-foreground shadow-xs hover:bg-destructive-600 hover:border-destructive-600 active:bg-destructive-600 active:border-destructive-400 active:text-destructive-200",
          tertiary:"bg-white border border-secondary-200 shadow-sm text-secondary-700 hover:border-secondary-300 hover:bg-secondary-50 active:bg-secondary-50 active:border-secondary-300 active:text-secondary-500",
        outline:
          "border border-primary text-primary  bg-background shadow-xs hover:text-primary hover:border-primary-400 active:border-primary-400 active:bg-secondary-50",
        secondary:
          "border border-primary-100 bg-primary-50 text-primary shadow-xs hover:bg-primary-100  active:border-primary-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md:'h-10 rounded-md px-4 has-[>svg]:px-4',
        lg: "h-12 rounded-md px-5 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  startIcon,
  endIcon,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : "button"

  return (
<Comp
  data-slot="button"
  className={cn(buttonVariants({ variant, size, className }), "flex items-center justify-between gap-2")}
  {...props}
>
  {startIcon && <span className="flex items-center">{startIcon}</span>}
  {size !== "icon" && <span className="flex items-center">{children}</span>}
  {size !== "icon" && endIcon && <span className="flex items-center">{endIcon}</span>}
</Comp>
  )
}

export { Button, buttonVariants }
