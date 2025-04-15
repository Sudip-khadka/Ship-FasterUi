import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {ArrowDownIcon, ArrowUpIcon } from "lucide-react";

type Variants = "simple" | "stacked" | "floating" | "withButton";
type Size = "default" | "sm" | "md" | "lg";
const statIndicatorVariants = cva("", {
  variants: {
    variant: {
      upTrend: "text-success-500 border-success-500",
      downTrend: "text-destructive-500 border-destructive-500",
    },
    size: {
      default: "",
      sm: "gap-0.5 py-0.5 pl-0.5 pr-1 [&>svg]:h-4 [&>svg]:w-4 text-xs leading-[14px]",
      md: "gap-1 py-1 pl-1 pr-1.5 [&>svg]:h-4.5 [&>svg]:w-4.5 text-xs leading-[14px]",
      lg: "gap-1 py-1.5 pl-2 pr-2.5 [&>svg]:h-4.5 [&>svg]:w-4.5 text-sm leading-[16px]",
    },
    styles: {
      accent: "",
      filled: "",
      outline: "border",
      blank: "",
    },
  },
  defaultVariants: {
    variant: "upTrend",
    size: "default",
  },
  compoundVariants: [
    { variant: "upTrend", styles: "accent", className: "bg-success-50" },
    { variant: "downTrend", styles: "accent", className: "bg-destructive-50" },
    {
      variant: "upTrend",
      styles: "filled",
      className: "bg-success-500 text-success-50",
    },
    {
      variant: "downTrend",
      styles: "filled",
      className: "bg-destructive-500 text-success-50",
    },
  ],
});
export type StatIndicatorProps={
  variant?: "upTrend" | "downTrend";
  size?: "default" | "sm" | "md" | "lg";
  styles?: "accent" | "filled" | "outline" | "blank";
  percentage?: number;
  className?: string;
  startIcon?: React.ReactNode |boolean;
  endIcon?: React.ReactNode |boolean;
}
function StatIndicator({
  variant = "upTrend",
  size = "default",
  styles = "outline",
  startIcon,
  endIcon,
    percentage = 0,
  className,
}: StatIndicatorProps) {
  return (
    <div
      className={cn(
      "flex items-center justify-between p-4 bg-white rounded-[24px] font-primary",
      statIndicatorVariants({ variant, size, styles }),
      className
      )}
    >
      {startIcon??(variant==="downTrend"&&startIcon?<ArrowDownIcon/>:<ArrowUpIcon/>)}
      {percentage < 10 ? `0${percentage}` : percentage}% 
      {endIcon??(variant==="downTrend"&&endIcon?<ArrowDownIcon/>:<ArrowUpIcon/>)}
    </div>
  );
}

const statVariants = cva("shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] rounded-[8px]", {
  variants: {
    variant: {
      simple: "",
      stacked: "",
      floating: "",
      withButton: "",
    },
    size: {
      default: "",
      sm: "gap-4 p-4 w-[300px]",
      md: "gap-5 p-5 w-[340px]",
      lg: "gap-6 p-6 w-[340px]",
    },
  },
});
export type StatProps={
  variant?: Variants;
  size?: Size;
  className?: string;
  overview?: string;
  value?: string | number;
  description?: string;
  icon?: React.ReactNode;
  iconWrapperClassName?: string;
  statIndicator?: React.ReactNode;
  button?: React.ReactNode;
}
function Stat({
  variant = "simple",
  size = "md",
  className,
  value,
  overview,
  description,
  icon,
  iconWrapperClassName,
  statIndicator,
  button,
  ...props
}: StatProps) {
  switch (variant) {
    case "simple":
      return (
        <div
          className={cn(
            "flex items-center",
            statVariants({ variant, size }),
            className
          )}
          {...props}
        >
          {icon && (
            <div
              className={cn(
                {
                  default: "",
                  sm: "w-9 h-9 p-1.5",
                  md: "w-10 h-10 p-2",
                  lg: "w-12 h-12 p-4",
                }[size],
                "bg-primary-50 rounded-[6px]",
                iconWrapperClassName
              )}
            >
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-1 w-full">
            {overview && (
              <p
                className={cn(
                  "text-secondary-500 w-full line-clamp-1 font-medium leading-[14px] text-xs"
                )}
              >
                {overview}
              </p>
            )}
            <div className="valueWrapper flex items-center gap-4 justify-between w-full">
              {value && (
                <h1
                  className={cn(
                    " line-clamp-1 text-justify",
                    {
                      sm: "tracking-[-0.48px] font-normal text-2xl",
                      md: "tracking-[-0.64px] font-normal text-[32px] leading-[40px]",
                      lg: "tracking-[-0.72px] font-bold text-4xl leading-[44px]",
                      default: "",
                    }[size]
                  )}
                >
                  {value}
                </h1>
              )}
              {statIndicator && (
                <span className="flex-shrink-0">{statIndicator}</span>
              )}
            </div>
            {description && (
              <p className="text-secondary-500 w-full line-clamp-2 font-normal leading-[16px] text-xs">
                {description}
              </p>
            )}
          </div>
        </div>
      );
    case "stacked":
      return (
        <div
        className={cn(
          "flex items-center",
          statVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {icon && (
          <div
            className={cn(
              {
                default: "",
                sm: "w-9 h-9 p-1.5",
                md: "w-10 h-10 p-2",
                lg: "w-12 h-12 p-4",
              }[size],
              "bg-primary-50 rounded-[6px]",
              iconWrapperClassName
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-1 w-full">
          {overview && (
            <p
              className={cn(
                "text-secondary-500 w-full line-clamp-1 font-medium leading-[14px] text-xs"
              )}
            >
              {overview}
            </p>
          )}
            {value && (
              <h1
                className={cn(
                  " line-clamp-1 text-justify w-full",
                  {
                    sm: "tracking-[-0.48px] font-normal text-2xl",
                    md: "tracking-[-0.64px] font-normal text-[32px] leading-[40px]",
                    lg: "tracking-[-0.72px] font-bold text-4xl leading-[44px]",
                    default: "",
                  }[size]
                )}
              >
                {value}
              </h1>
            )}
          <div className="footerWrapper flex items-center gap-1 w-full">
            {statIndicator && (
              <span className="flex-shrink-0">{statIndicator}</span>
            )}
          {description && (
            <p className="text-secondary-500 w-full line-clamp-2 font-normal leading-[16px] text-xs">
              {description}
            </p>
          )}
          </div>
        </div>
      </div>
      );
    case "floating":
      return (
        <div
        className={cn(
          "flex items-center",
          statVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {icon && (
          <div
            className={cn(
              {
                default: "",
                sm: "w-9 h-9 p-1.5",
                md: "w-10 h-10 p-2",
                lg: "w-12 h-12 p-4",
              }[size],
              "bg-primary-50 rounded-[6px]",
              iconWrapperClassName
            )}
          >
            {icon}
          </div>
        )}
        <div className="container flex flex-col w-full gap-6">
        {statIndicator && (
              <span className="flex-shrink-0 w-fit ml-auto">{statIndicator}</span>
            )}
        <div className="flex flex-col gap-1 w-full">
          {overview && (
            <p
              className={cn(
                "text-secondary-500 w-full line-clamp-1 font-medium leading-[14px] text-xs"
              )}
            >
              {overview}
            </p>
          )}
          <div className="footerWrapper flex items-center gap-2 w-full">
            {value && (
              <h1
                className={cn(
                  " line-clamp-1 text-justify",
                  {
                    sm: "tracking-[-0.48px] font-medium text-2xl",
                    md: "tracking-[-0.64px] font-medium text-[32px] leading-[40px]",
                    lg: "tracking-[-0.72px] font-medium text-4xl leading-[44px]",
                    default: "",
                  }[size]
                )}
              >
                {value}
              </h1>
            )}
            
          {description && (
            <p className="text-secondary-500 line-clamp-2 font-normal leading-[16px] text-xs">
              {description}
            </p>
          )}
          </div>
        </div>
        </div>
      </div>
      );
    case "withButton":
      return (
        <div className={cn(
          "flex flex-col items-start",
          statVariants({ variant, size }),
          className
        )}
        {...props}>
          <div
        className="wrapper w-full flex items-center gap-6"
      >
        {icon && (
          <div
            className={cn(
              {
                default: "",
                sm: "w-9 h-9 p-1.5",
                md: "w-10 h-10 p-2",
                lg: "w-12 h-12 p-4",
              }[size],
              "bg-primary-50 rounded-[6px]",
              iconWrapperClassName
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-1 w-full">
          {overview && (
            <p
              className={cn(
                "text-secondary-500 w-full line-clamp-1 font-medium leading-[14px] text-xs"
              )}
            >
              {overview}
            </p>
          )}
            {value && (
              <h1
                className={cn(
                  " line-clamp-1 text-justify w-full",
                  {
                    sm: "tracking-[-0.48px] font-medium text-2xl",
                    md: "tracking-[-0.64px] font-medium text-[32px] leading-[40px]",
                    lg: "tracking-[-0.72px] font-bold text-4xl leading-[44px]",
                    default: "",
                  }[size]
                )}
              >
                {value}
              </h1>
            )}
          <div className="footerWrapper flex items-center gap-1 w-full justify-between">
          {description && (
            <p className="text-secondary-500 w-full line-clamp-2 font-normal leading-[16px] text-xs">
              {description}
            </p>
          )}
          {statIndicator && (
            <span className="flex-shrink-0">{statIndicator}</span>
          )}
          </div>
        </div>
      </div>
      {button&&button}
        </div>
      );
    default:
      return null;
  }
}

export { StatIndicator, Stat };
