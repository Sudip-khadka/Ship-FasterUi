import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva} from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex  items-center text-md w-fit h-fit whitespace-nowrap shrink-0 gap-2 transition-[color,box-shadow] overflow-hidden hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        destructive: "",
        warning: "",
        success: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      style: {
        filled: "",
        accent: "",
        outlined: "bg-transparent border",
      },
      shape: {
        pill: "rounded-3xl",
        rounded: "rounded-lg",
        circle: "rounded-full",
        dot: "rounded-3xl gap-1",
      },
      size: {
        sm: "h-6 px-[6px]  py-[2px] text-xs gap-1 ",
        md: "h-7 px-2 py-1 text-sm gap-2",
        lg: "h-8 px-3 py-1.5 text-sm gap-2 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "pill",
      style: "filled",
    },
    compoundVariants: [
      //filled
      {
        style: "filled",
        variant: "primary",
        className: "bg-primary text-secondary-50",
      },
      {
        style: "filled",
        variant: "secondary",
        className: "bg-secondary-950 text-secondary-50 ",
      },
      {
        style: "filled",
        variant: "destructive",
        className: "bg-destructive text-destructive-50",
      },
      {
        style: "filled",
        variant: "warning",
        className: "bg-warning text-secondary-50",
      },
      {
        style: "filled",
        variant: "success",
        className: "bg-success text-success-50",
      },
      //outlined
      {
        style: "outlined",
        variant: "primary",
        className: "text-primary border-primary",
      },
      {
        style: "outlined",
        variant: "secondary",
        className: "text-secondary-700 border-secondary-200 ",
      },
      {
        style: "outlined",
        variant: "destructive",
        className: "text-destructive border-destructive ",
      },
      {
        style: "outlined",
        variant: "warning",
        className: "text-warning border-warning ",
      },
      {
        style: "outlined",
        variant: "success",
        className: "text-success border-success ",
      },
      //accent
      {
        style: "accent",
        variant: "primary",
        className: "bg-primary-50 text-primary",
      },
      {
        style: "accent",
        variant: "secondary",
        className: "bg-secondary-100 text-secondary",
      },
      {
        style: "accent",
        variant: "destructive",
        className: "bg-destructive-50 text-destructive",
      },
      {
        style: "accent",
        variant: "warning",
        className: "bg-warning-50 text-warning",
      },
      {
        style: "accent",
        variant: "success",
        className: "bg-success-50 text-success",
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
  isHover = false,
  isActive = false,
  disabled = false,
  asChild = false,
  dotIcon,
  ...props
}: React.ComponentProps<"span"> & {
  style?: "filled" | "outlined" | "accent";
  variant?: "primary" | "secondary" | "destructive" | "warning" | "success";
  size?: "sm" | "md" | "lg";
  shape?: "pill" | "rounded" | "circle" | "dot";
    asChild?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    dotIcon?: React.ReactNode;
    isHover?: boolean;
    isActive?: boolean;
    iconWrapperClassname?:string
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        "flex justify-center items-center gap-1",
        badgeVariants({ style, shape, variant, size, disabled, className }),
        variant === "primary" &&
          style === "filled" &&
          isHover &&
          "hover:bg-primary-600 hover:border-primary-600",
        variant === "primary" &&
          style === "filled" &&
          isActive &&
          "active:bg-primary-600 active:border-primary-700 active:text-primary-200",

        variant === "secondary" &&
          style === "filled" &&
          isHover &&
          "hover:bg-secondary-700",
        variant === "secondary" &&
          style === "filled" &&
          isActive &&
          "active:border-secondary-200",

        variant === "destructive" &&
          style === "filled" &&
          isHover &&
          "hover:bg-destructive-600 hover:border-destructive-600 ",
        variant === "destructive" &&
          style === "filled" &&
          isActive &&
          "active:bg-destructive-600 active:border-destructive-400 active:text-destructive-200",

        variant === "success" &&
          style === "filled" &&
          isHover &&
          "hover:bg-success-600 hover:border-success-600 ",
        variant === "success" &&
          style === "filled" &&
          isActive &&
          "active:bg-success-600 active:border-success-400 active:text-success-200",

        variant === "warning" &&
          style === "filled" &&
          isHover &&
          "hover:bg-warning-50 ",
        variant === "warning" &&
          style === "filled" &&
          isActive &&
          "active:border-warning-300",

        variant === "primary" &&
          style === "outlined" &&
          isHover &&
          "hover:bg-primary-50",
        variant === "primary" &&
          style === "outlined" &&
          isActive &&
          "active:bg-primary-300 active:text-primary-400",

        variant === "secondary" &&
          style === "outlined" &&
          isHover &&
          "hover:border-secondary-300 hover:bg-secondary-100 hover:text-secondary-900 ",
        variant === "secondary" &&
          style === "outlined" &&
          isActive &&
          "active:border-secondary-200 active:text-secondary-400",

        variant === "success" &&
          style === "outlined" &&
          isHover &&
          "hover:bg-success-50 ",
        variant === "success" &&
          style === "outlined" &&
          isActive &&
          "active:border-success-300",

        variant === "destructive" &&
          style === "outlined" &&
          isHover &&
          "hover:bg-destructive-50 ",
        variant === "destructive" &&
          style === "outlined" &&
          isActive &&
          "active:border-destructive-300",

        variant === "warning" &&
          style === "outlined" &&
          isHover &&
          "hover:bg-warning-50 ",
        variant === "warning" &&
          style === "outlined" &&
          isActive &&
          "active:border-warning-300",

        variant === "primary" &&
          style === "accent" &&
          isHover &&
          "hover:bg-primary-50",
        variant === "primary" &&
          style === "accent" &&
          isActive &&
          "active:bg-primary-300 active:text-primary-400",

        variant === "secondary" &&
          style === "accent" &&
          isHover &&
          "hover:bg-secondary-100 hover:text-secondary-900",
        variant === "secondary" &&
          style === "accent" &&
          isActive &&
          "active:text-secondary-300",

        variant === "success" &&
          style === "accent" &&
          isHover &&
          "hover:bg-success-100 hover:text-success-600 ",
        variant === "success" &&
          style === "accent" &&
          isActive &&
          "active:text-success-300",

        variant === "destructive" &&
          style === "accent" &&
          isHover &&
          " hover:bg-destructive-100",
        variant === "destructive" &&
          style === "accent" &&
          isActive &&
          "hover:text-destructive-600 active:text-destructive-300",

        variant === "warning" &&
          style === "accent" &&
          isHover &&
          "hover:bg-warning-100 hover:text-warning-600 ",
        variant === "warning" &&
          style === "accent" &&
          isActive &&
          "active:text-warning-300"
      )}
      {...props}
    >
      {shape !== "dot"
        ? startIcon && (
            <span
              className={cn(
                "flex items-center justify-center",
                 (
                  size === "sm" ? "w-[13px] h-[12px] [&_svg]:w-[13px] [&_svg]:h-[12px]" :
                  size === "md" ? "w-[17px] h-[16px] [&_svg]:w-[17px] [&_svg]:h-[16px]" :
                  size === "lg" ? "w-[17px] h-[16px] [&_svg]:w-[17px] [&_svg]:h-[16px] " : ""
                ),
              )}
            >
              {startIcon}
            </span>
          )
        : dotIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={
                size === "sm" || size === "md" ? 17 : size === "lg" ? 21 : 17
              }
              height={
                size === "sm" || size === "md" ? 16 : size === "lg" ? 20 : 16
              }
              viewBox={
                size === "sm" || size === "md"
                  ? "0 0 17 18"
                  : size === "lg"
                  ? "0 0 21 20"
                  : "0 0 20 20"
              }
              fill="none"
            >
              <circle
                cx={
                  size === "sm" || size === "md"
                    ? 8.5
                    : size === "lg"
                    ? 10.5
                    : 10
                }
                cy={
                  size === "sm"
                    ? 8.5
                    : size === "md"
                    ? 7.5
                    : size === "lg"
                    ? 10.5
                    : 10
                }
                r={size === "sm" ? 3 : size === "md" ? 4 : 5}
                fill="currentColor"
              />
            </svg>
          )}
      {children && (
        <p
          className={cn(
            "flex items-center justify-center text-center",
            { "leading-[20px]": size === "sm" },
            { "leading-[16px]": size === "md" },
            { "leading-[16px]": size === "lg" }
          )}
        >
          {children}
        </p>
      )}
      {shape !== "dot" && endIcon && shape !== "circle" && (
        <span
          className={cn(
            "flex items-center justify-center flex-shrink-0",
             (
              size === "sm" ? "w-[13px] h-[12px] [&_svg]:w-[13px] [&_svg]:h-[12px]" :
              size === "md" ? "w-[17px] h-[16px] [&_svg]:w-[17px] [&_svg]:h-[16px]" :
              size === "lg" ? "w-[17px] h-[16px] [&_svg]:w-[17px] [&_svg]:h-[16px]" : ""
            ),
          )}
        >
          {endIcon}
        </span>
      )}
    </Comp>
  );
}

export { Badge, badgeVariants };
