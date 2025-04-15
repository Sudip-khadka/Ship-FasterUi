"use client"

import type React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The rating value (0-5, supports half-star increments)
   */
  value: number
  /**
   * The maximum rating value
   * @default 5
   */
  max?: number
  /**
   * Whether the rating is readonly
   * @default true
   */
  readonly?: boolean
  /**
   * The size of the rating stars
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl"
  /**
   * The color variant of the rating
   * @default "yellow"
   */
  variant?: "yellow" | "neutral"
  /**
   * The style of the stars
   * @default "filled"
   */
  starStyle?: "filled" | "outline"
  /**
   * Callback when rating changes
   */
  onRatingChange?: (value: number) => void
  /**
   * Whether to show tooltip with the hovered value
   * @default true
   */
  showTooltip?: boolean;
  tooltipClassname?:string;
}

export const Rating = ({
  value = 0,
  max = 5,
  readonly = true,
  size = "md",
  variant = "yellow",
  starStyle = "filled",
  onRatingChange,
  className,
  showTooltip = false,
  tooltipClassname,
  ...props
}:RatingProps) => {
  const clampedValue = Math.max(0, Math.min(value, max))

  const sizeClasses: Record<string, string> = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
  }

  const colorClasses = {
    yellow: {
      filled: "text-warning-500 fill-yellow-400",
      outline: "text-warning-500",
      empty: "text-secondary-200 dark:text-secondary-700",
    },
    neutral: {
      filled: "text-secondary-600 fill-secondary-600 dark:text-secondary-400 dark:fill-secondary-400",
      outline: "text-secondary-600 dark:text-secondary-400",
      empty: "text-secondary-200 dark:text-secondary-700",
    },
  }

  const renderStars = () => {
    return Array.from({ length: max }, (_, i) => {
      const index = i + 1
      const difference = clampedValue - index + 1

      // Full star
      if (difference >= 1) {
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative inline-block">
                  <Star
                    className={cn(
                      sizeClasses[size],
                      starStyle === "filled" ? colorClasses[variant].filled : colorClasses[variant].outline,
                      "cursor-default transition-colors",
                      !readonly && "cursor-pointer",
                    )}
                    fill={starStyle === "filled" ? "currentColor" : "none"}
                    onClick={() => !readonly && onRatingChange?.(index)}
                  />
                </div>
              </TooltipTrigger>
              {showTooltip && (
                <TooltipContent side="top" align="center" className={tooltipClassname}>
                  <p>{index.toFixed(1)}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )
      }
      // Half star
      else if (difference >= 0.5) {
        return (
          <div key={index} className="relative inline-block">
            {/* Left half (0.5) */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full z-10"
                    onClick={() => !readonly && onRatingChange?.(index - 0.5)}
                  />
                </TooltipTrigger>
                {showTooltip && (
                  <TooltipContent side="top" align="center" className={tooltipClassname}>
                    <p>{(index - 0.5).toFixed(1)}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>

            {/* Right half (1.0) */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="absolute top-0 left-1/2 w-1/2 h-full z-10"
                    onClick={() => !readonly && onRatingChange?.(index)}
                  />
                </TooltipTrigger>
                {showTooltip && (
                  <TooltipContent side="top" align="center" className={tooltipClassname}>
                    <p>{index.toFixed(1)}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>

            {/* Background star (empty) */}
            <Star className={cn(sizeClasses[size], colorClasses[variant].empty)} fill={"none"} />

            {/* Foreground star (half) */}
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden pointer-events-none">
              <Star
                className={cn(
                  sizeClasses[size],
                  starStyle === "filled" ? colorClasses[variant].filled : colorClasses[variant].outline,
                )}
                fill={starStyle === "filled" ? "currentColor" : "none"}
              />
            </div>
          </div>
        )
      }
      // Empty star
      else {
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative inline-block">
                  <Star
                    className={cn(
                      sizeClasses[size],
                      colorClasses[variant].empty,
                      "cursor-default transition-colors",
                      !readonly && "cursor-pointer",
                    )}
                    fill={"none"}
                    onClick={() => !readonly && onRatingChange?.(index)}
                  />
                </div>
              </TooltipTrigger>
              {showTooltip && (
                <TooltipContent side="top" align="center" className={tooltipClassname}>
                  <p>{index.toFixed(1)}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )
      }
    })
  }

  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      {renderStars()}
    </div>
  )
}

