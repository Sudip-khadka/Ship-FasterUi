import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative flex items-center w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        primary: "",
        destructive: "",
        warning: "",
        secondary: "",
        success: "",
      },
      style: {
        accent: "",
        filled: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        style: "accent",
        className: "bg-primary-50 text-primary-500",
      },
      {
        variant: "primary",
        style: "filled",
        className: "bg-primary text-secondary-50",
      },
      {
        variant: "destructive",
        style: "accent",
        className: "bg-destructive-50 text-destructive-500",
      },
      {
        variant: "destructive",
        style: "filled",
        className: "bg-destructive-500 text-destructive-50",
      },
      {
        variant: "warning",
        style: "accent",
        className: "bg-warning-50 text-warning-500",
      },
      {
        variant: "warning",
        style: "filled",
        className: "bg-warning-600 text-warning-50",
      },
      {
        variant: "success",
        style: "accent",
        className: "bg-success-50 text-success-500",
      },
      {
        variant: "success",
        style: "filled",
        className: "bg-success-500 text-success-50",
      },
      {
        variant: "secondary",
        style: "filled",
        className: "bg-secondary-900 text-secondary-100",
      },
      {
        variant: "secondary",
        style: "accent",
        className: "bg-secondary-500 text-secondary-50",
      },
     
    ],
    defaultVariants: {
      variant: "primary",
      style: "accent",
    },
  }
);

function Alert({
  className,
  variant,
  style,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, style }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        " col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
