import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1.5 text-md font-medium w-fit whitespace-nowrap shrink-0 gap-2 transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "",
        secondary:
          "",
        destructive:
          "",
        warning:
          "",
        success: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      style:{
        filled:"",
        accent:"",
        outlined:"bg-transparent border",
      },
      shape: {
        pill: "rounded-md",
        rounded: "rounded-lg",
        circle: "rounded-full",
        dot: "pl-2 rounded-xl",
      },
      size: {
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-10 px-4 has-[>svg]:px-4",
        lg: "h-12 px-5 has-[>svg]:px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape:"pill",
      style:"filled"
    },
    compoundVariants: [
      //filled
      {
        style: "filled",
        variant: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-700 active:text-primary-200",
      },
      {
        style: "filled",
        variant: "secondary",
        className: "bg-secondary-900 text-primary-foreground hover:bg-secondary-700  active:border-secondary-200",
      },
      {
        style: "filled",
        variant: "destructive",
        className: "bg-destructive text-primary-foreground hover:bg-destructive-600 hover:border-destructive-600 active:bg-destructive-600 active:border-destructive-400 active:text-destructive-200",
      },
      {
        style: "filled",
        variant: "warning",
        className: "bg-warning text-primary-foreground hover:bg-warning-600 hover:border-warning-600 active:bg-warning-600 active:border-warning-400 active:text-warning-200",
      },
      {
        style: "filled",
        variant: "success",
        className: "bg-success text-primary-foreground  hover:bg-success-600 hover:border-success-600 active:bg-success-600 active:border-success-400 active:text-success-200",
      },
      //outlined
      {
        style: "outlined",
        variant: "primary",
        className: "text-primary border-primary hover:bg-primary-50 active:bg-primary-300 active:text-primary-400",
      },
      {
        style: "outlined",
        variant: "secondary",
        className: "text-secondary-700 border-secondary-200 hover:border-secondary-300 hover:bg-secondary-100 hover:text-secondary-900 active:border-secondary-200 active:text-secondary-400",
      },
      {
        style: "outlined",
        variant: "destructive",
        className: "text-destructive border-destructive hover:bg-destructive-50 active:border-bg-destructive-300",
      },
      {
        style: "outlined",
        variant: "warning",
        className: "text-warning border-warning hover:bg-warning-50 active:border-warning-300",
      },
      {
        style: "outlined",
        variant: "success",
        className: "text-success border-success hover:bg-success-50 active:border-success-300",
      },
      //accent
      {
        style: "accent",
        variant: "primary",
        className: "bg-primary-50 text-primary hover:bg-primary-100 hover:text-primary-600 active:text-primary-300",
      },
      {
        style: "accent",
        variant: "secondary",
        className: "bg-secondary-50 text-secondary hover:bg-secondary-100 hover:text-secondary-600 active:text-secondary-300",
      },
      {
        style: "accent",
        variant: "destructive",
        className: "bg-destructive-50 text-destructive hover:bg-destructive-100 hover:text-destructive-600 active:text-destructive-300",
      },
      {
        style: "accent",
        variant: "warning",
        className: "bg-warning-50 text-warning hover:bg-warning-100 hover:text-warning-600 active:text-warning-300",
      },
      {
        style: "accent",
        variant: "success",
        className: "bg-success-50 text-success hover:bg-success-100 hover:text-success-600 active:text-success-300",
      },
    ],

  }
);

function Badge({
  className,
  variant,
  size,
  shape,
  children,
  style,
  startIcon,
  endIcon,
  disabled=false,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ style,shape, variant, size,disabled,  className })
      )}
      {...props}
    >
      {shape !== "dot"  ? (
        startIcon &&shape!=="circle" && <span className="flex items-center">{startIcon}</span>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="5" fill="#F0FDF4"/>
</svg>
      )}
      <span className="flex items-center">{children}</span>
      {shape !== "dot" && endIcon &&shape!=="circle" && (
        <span className="flex items-center">{endIcon}</span>
      )}
    </Comp>
  );
}

export { Badge, badgeVariants };
