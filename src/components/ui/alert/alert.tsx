import * as React from "react";
import { cva} from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative flex flex-col items-center rounded-lg  px-4 py-3 text-sm has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
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
        outline:"",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        style: "accent",
        className: "bg-primary-100 text-primary-500 ",
      },
      {
        variant: "primary",
        style: "filled",
        className: "bg-primary text-secondary-50",
      },
      {
        variant: "primary",
        style: "outline",
        className: "bg-primary-50 border text-primary-800 border-primary-200",
      },
      {
        variant: "destructive",
        style: "accent",
        className: "bg-destructive-100 text-destructive-500",
      },
      {
        variant: "destructive",
        style: "filled",
        className: "bg-destructive-500 text-destructive-50",
      },
      {
        variant: "destructive",
        style: "outline",
        className: "border border-destructive-200 bg-destructive-50 text-destructive-800",
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
        variant: "warning",
        style: "outline",
        className: "border border-warning-200  bg-warning-50 text-warning-800",
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
        variant: "success",
        style: "outline",
        className: "border border-success-200  bg-success-50 text-success-800",
      },
      {
        variant: "secondary",
        style: "filled",
        className: "bg-secondary-900 text-secondary-100",
      },
      {
        variant: "secondary",
        style: "accent",
        className: "bg-secondary-100 text-secondary-800",
      },
      {
        variant: "secondary",
        style: "outline",
        className: "border border-secondary-200  bg-secondary-200 text-secondary-800",
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
  children,
  ...props
}: React.ComponentProps<"div"> & {
  variant?:"primary"|"destructive"|"warning"|"secondary"|"success";
  style?:"accent"|"filled"|"outline";
    children: React.ReactNode;
  }) {
  // Check if children is text content or React elements
  const childrenArray = React.Children.toArray(children);
  const hasOnlyTextContent = childrenArray.every(
    (child) => typeof child === "string" || typeof child === "number"
  );

  // If there's only text content and no AlertDescription/Title components,
  // wrap it in a div with proper styling
  const wrappedChildren = hasOnlyTextContent ? (
    <div className=" break-words w-full overflow-hidden text-sm">
      {children}
    </div>
  ) : (
    children
  );

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, style }),
        "overflow-hidden w-fit",
        className
      )}
      {...props}
    >
      {wrappedChildren}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        " line-clamp-1 min-h-4 font-medium tracking-tight",
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
        "justify-items-start gap-1 text-sm [&_p]:leading-relaxed break-words w-full overflow-hidden [.text-primary-800_&]:text-primary-600 [.text-destructive-800_&]:text-destructive-600 [.text-warning-800_&]:text-warning-600 [.text-success-800_&]:text-success-600 [.text-secondary-800_&]:text-secondary-600",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription,alertVariants };
