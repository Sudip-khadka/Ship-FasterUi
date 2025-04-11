"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export interface ListFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  label: string
  description?: string
  contentAlign?: "left" | "center" | "right"
  contentGap?: "default" | "tight" | "loose"
  fullWidth?: boolean
  labelClassName?: string
  descriptionClassName?: string
  leftWrapperClassName?: string
  rightWrapperClassName?: string
  contentWrapperClassName?: string
  asButton?: boolean
  onClick?: () => void
  variant?: "default" | "bordered" | "card"
  size?: "default" | "sm" | "lg"| "md"
}

export function ListField({
  leftContent,
  rightContent,
  label,
  description,
  variant = "default",
  size = "default",
  contentAlign = "left",
  contentGap = "default",
  // fullWidth = true,
  className,
  labelClassName,
  descriptionClassName,
  leftWrapperClassName,
  rightWrapperClassName,
  contentWrapperClassName,
  asButton = false,
  onClick,
  ...props
}: ListFieldProps) {
  // Base styles
  const baseStyles = "flex w-fit items-center gap-4 rounded-md p-3"

  // Variant styles
  const variantStyles = {
    default: "bg-background hover:bg-accent/50",
    bordered: "border bg-background hover:bg-accent/50",
    card: "bg-card shadow-sm",
  }

  // Size styles
const sizeStyles = {
    default: "min-h-[60px] text-sm",
    sm: "min-h-[42px] py-2 text-xs gap-3",
    md: "min-h-[48px] py-3 text-sm",
    lg: "min-h-[56px] py-4 text-base",
}

  // Content alignment styles
  const alignStyles = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  const gapStyles = {
    default: "gap-1",
    tight: "gap-0.5",
    loose: "gap-2",
  }

  const containerStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    asButton && "text-left cursor-pointer",
    className,
  )

  const contentStyles = cn(
    "flex-grow flex flex-col",
    alignStyles[contentAlign],
    gapStyles[contentGap],
    contentWrapperClassName,
  )

  if (asButton) {
    return (
      <button
        className={containerStyles}
        onClick={onClick}
        type="button"
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {leftContent && <div className={cn("flex-shrink-0", leftWrapperClassName)}>{leftContent}</div>}

        <div className={contentStyles}>
          <p className={cn("text-sm font-medium text-foreground", labelClassName)}>{label}</p>

          {description && <p className={cn("text-xs text-muted-foreground", descriptionClassName)}>{description}</p>}
        </div>

        {rightContent && <div className={cn("flex-shrink-0", rightWrapperClassName)}>{rightContent}</div>}
      </button>
    )
  }

  // Render as div
  return (
    <div className={containerStyles} {...props}>
      {leftContent && <div className={cn("flex-shrink-0", leftWrapperClassName)}>{leftContent}</div>}

      <div className={contentStyles}>
        <p className={cn("text-sm font-medium text-foreground", labelClassName)}>{label}</p>

        {description && <p className={cn("text-xs text-muted-foreground", descriptionClassName)}>{description}</p>}
      </div>

      {rightContent && <div className={cn("flex-shrink-0", rightWrapperClassName)}>{rightContent}</div>}
    </div>
  )
}

