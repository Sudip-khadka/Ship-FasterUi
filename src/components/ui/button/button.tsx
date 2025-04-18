import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva} from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "w-fit inline-flex rounded-lg items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-700 active:text-primary-200",
        destructive:
          "bg-destructive text-secondary-50 shadow-xs hover:bg-destructive-600 hover:border-destructive-600 active:bg-destructive-600 active:border-destructive-400 active:text-destructive-200",
        tertiary:
          "bg-secondary-50 border border-secondary-200 shadow-sm text-secondary-700 hover:border-secondary-300 hover:bg-secondary-50 active:bg-secondary-50 active:border-secondary-300 active:text-secondary-500",
        destructiveTertiary:
          "bg-secondary-50 border border-destructive-200 shadow-sm text-destructive-500 hover:border-destructive-300 hover:bg-destructive-50 active:bg-secondary-50 active:border-destructive-300",
        outline:
          "border border-primary text-primary  bg-secondary-50 shadow-xs hover:text-primary hover:border-primary-400 active:border-primary-400 active:bg-secondary-50",
        destructiveOutline:
          "border border-destrictive-500 text-destructive-500 bg-secondary-50 shadow-xs hover:text-primary hover:border-destructive-400 active:border-primary-400 active:border-3",
        secondary:
          "border border-primary-100 bg-primary-50 text-primary shadow-xs hover:bg-primary-100  active:border-primary-200",
        destructiveSecondary:
          "border border-destructive-200 bg-destructive-50 text-destructive-500 shadow-xs hover:bg-destructive-100 hover:text-destructive-600 active:border-destructive-200",
        link: "text-primary hover-text-primary-600  active:border active",
        destructiveLink:
          "text-destructive hover:text-destructive-600  active:border active:border-destructive-500 ",
        ghost: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2.5 gap-1.5 text-sm ",
        sm: "gap-1.5 px-3 py-2 text-xs leading-[14px] ",
        md: "px-4 py-2.5 gap-1.5 text-sm leading-[16px] ",
        lg: "px-5 py-3.5 gap-2 text-base leading-[18px] ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export type ButtonProps = React.ComponentProps<"button"> & {  
  variant?:"default" | "link" | "secondary" | "destructive" | "tertiary" | "destructiveTertiary" | "outline" | "destructiveOutline" | "destructiveSecondary" | "destructiveLink" | "ghost";
  size?:"default" | "sm" | "md" | "lg";
    asChild?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    childrenClassName?: string;
  };

const Button = ({
  className,
  variant,
  size,
  startIcon,
  endIcon,
  childrenClassName,
  children,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "flex items-center gap-2",
        { "justify-center": !startIcon && !endIcon },
        { "justify-between": startIcon || endIcon }
      )}
      {...props}
    >
      {startIcon && (
        <span
          className={cn(
            "flex items-center justify-center flex-shrink-0",
           (
              size === "sm" ? "w-[16px] h-[16px] [&_svg]:w-[16px] [&_svg]:h-[16px]" :
              size === "md" ? "w-[20px] h-[20px] [&_svg]:w-[20px] [&_svg]:h-[20px]" :
              size === "lg" ? "w-[21px] h-[20px] [&_svg]:w-[21px] [&_svg]:h-[20px]" : ""
            ),
          )}
        >
          {startIcon}
        </span>
      )}
      {children && (
        <span
          className={cn(
            "flex items-center flex-shrink-0 justify-center",
            childrenClassName
          )}
        >
          {children}
        </span>
      )}
      {endIcon && (
        <span
          className={cn(
            "flex items-center justify-center  flex-shrink-0",
             (
              size === "sm" ? "w-[16px] h-[16px] [&_svg]:w-[16px] [&_svg]:h-[16px]" :
              size === "md" ? "w-[20px] h-[20px] [&_svg]:w-[20px] [&_svg]:h-[20px]" :
              size === "lg" ? "w-[21px] h-[20px] [&_svg]:w-[21px] [&_svg]:h-[20px]" : ""
            ),
          )}
        >
          {endIcon}
        </span>
      )}
    </Comp>
  );
}

export {Button, buttonVariants,cva};
