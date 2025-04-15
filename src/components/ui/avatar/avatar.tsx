import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// Define cva for Avatar component's variant styles
const avatar = cva(
  "relative flex items-center justify-center bg-primary-100 border-2 border-secondary-50 hover:cursor-pointer",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-sm border-1",
        sm: "w-8 h-8 text-base border-[1.5px]",
        md: "w-10 h-10 text-xl",
        lg: "w-12 h-12 text-2xl",
        xl: "w-16 h-16 text-3xl",
        "2xl": "w-20 h-20 text-4xl",
        "3xl": "w-24 h-24 text-5xl",
      },
      shape: {
        rounded: "rounded-lg",
        circle: "rounded-full",
        square: "rounded-none",
      },
      action: {
        pending: "",
        company: "",
        verified: "",
        notify: "",
        none: "",
      },
      status: {
        none: "",
        online: "",
        offline: "",
      },
      type: {
        image: "",
        initial: "",
        placeholder: "",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "square",
      action: "none",
      status: "none",
      type: "image",
    },
  }
);

// Avatar component
export type AvatarProps = {
  childClassName?: string;
  type: "image" | "initial" | "placeholder";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  shape?: "rounded" | "circle" | "square";
  action?: "none" | "verified" | "pending" | "company";
  status: "none" | "online" | "offline";
  src?: string;
  notification?: boolean;
  initials?: `${string}${string}` | `${string}`; 
  placeholder?: React.ReactNode;
  verifiedIcon?: React.ReactNode;
  logoImage?: string;
  notificationCount?: number;
  showNotificationCount?: boolean;
  indicatorClassName?: string;
  className?: string;
  notificationClassName?: string;
  notificationOnClick?: () => void;
  onClick?: () => void;
}

function Avatar({
  notificationCount,
  logoImage,
  shape,
  type,
  size,
  action,
  notificationOnClick,
  status,
  indicatorClassName,
  notification = false,
  notificationClassName,
  verifiedIcon,
  src,
  initials,
  className,
  placeholder,
  onClick,
  childClassName,
  ...props
}:AvatarProps) {
  return (
    <div
      className={cn(
        avatar({ size, shape, action, className }),
        {
          "rounded-[4px]":size==="xs"&&shape==="rounded",
          "rounded-[6px]":size==="sm"&&shape==="rounded",
          "rounded-[8px]":size==="md"&&shape==="rounded",
          "rounded-[12px]":size==="lg"&&shape==="rounded",
          "rounded-[16px]":size==="xl"&&shape==="rounded",
          "rounded-[20px]":size==="2xl"&&shape==="rounded",
          "rounded-[24px]":size==="3xl"&&shape==="rounded",
        },
        {
          "rounded-tr-xl":
            size === "3xl" &&
            notification &&
            notificationCount &&
            shape !== "circle",
          "rounded-tr-lg":
            size === "2xl" &&
            notification &&
            notificationCount &&
            shape !== "circle",
          "rounded-tr-md":
            size === "xl" &&
            notification &&
            notificationCount &&
            shape !== "circle",
          "rounded-tr-sm":
            (size === "lg" || size === "md") &&
            notification &&
            notificationCount &&
            shape !== "circle",
          "rounded-tr-xs":
            (size === "sm" || size === "xs") &&
            notification &&
            notificationCount &&
            shape !== "circle",
        }
      )}
      {...(onClick === undefined ? {} : { onClick })}
      {...props}
    >
      {type === "image" && src && (
        <img
          src={src}
          alt="Avatar"
          className={cn(
            "object-cover w-full h-full",
            { "rounded-full": shape === "circle" },
            {
              "rounded-[4px]":size==="xs"&&shape==="rounded",
              "rounded-[6px]":size==="sm"&&shape==="rounded",
              "rounded-[8px]":size==="md"&&shape==="rounded",
              "rounded-[12px]":size==="lg"&&shape==="rounded",
              "rounded-[16px]":size==="xl"&&shape==="rounded",
              "rounded-[20px]":size==="2xl"&&shape==="rounded",
              "rounded-[24px]":size==="3xl"&&shape==="rounded",
            },childClassName
          )}
        />
      )}
      {type === "initial" && initials && (
        <span className={cn("font-bold",childClassName)}>{initials.toUpperCase().slice(0, 2)}</span>
      )}
      {type === "placeholder" && (placeholder??(
        <span
          className={cn(
            "bg-primary-100 text-primary h-full w-full  flex items-end justify-center overflow-hidden",{"rounded-full":shape==="circle",},
            {
              "rounded-[4px]":size==="xs"&&shape==="rounded",
              "rounded-[6px]":size==="sm"&&shape==="rounded",
              "rounded-[8px]":size==="md"&&shape==="rounded",
              "rounded-[12px]":size==="lg"&&shape==="rounded",
              "rounded-[16px]":size==="xl"&&shape==="rounded",
              "rounded-[20px]":size==="2xl"&&shape==="rounded",
              "rounded-[24px]":size==="3xl"&&shape==="rounded",
            },
            childClassName
          )}
        >
          <svg
            width="80%"
            height="80%"
            viewBox="0 0 75 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.6377 78H0C4.23048 61.3309 19.3344 49 37.3189 49C55.3033 49 70.4072 61.3309 74.6377 78ZM37.3189 0C25.7209 0 16.3189 9.40202 16.3189 21C16.3189 32.598 25.7209 42 37.3189 42C48.9168 42 58.3189 32.598 58.3189 21C58.3189 9.40202 48.9168 0 37.3189 0Z"
              fill={"currentColor"}
            />
          </svg>
        </span>
      ))}

      {action === "none" && (status === "offline" || status === "online") && (
        <span
          className={cn(
            "absolute rounded-full right-[-0.5px] bottom-[-0.5px] border-2",
            size&&({
              xs: "h-1.5 w-1.5 border-1",
              sm: "h-2.5 w-2.5 border-1.5",
              md: "h-3.5 w-3.5",
              lg: "h-4 w-4",
              xl: "h-4.5 w-4.5",
              "2xl": "h-5 w-5",
              "3xl": "h-7 w-7",
            }[size]),
            {
              none: "",
              online: "bg-success-700",
              offline: "bg-secondary-200",
            }[status],
            indicatorClassName
          )}
        />
      )}
      {action === "pending" && (
        <span
          className={cn(
            "absolute rounded-full right-[-0.5px] bottom-[-0.5px] bg-warning border-2",
            size&&({
              xs: "h-1.5 w-1.5 border-1",
              sm: "h-2.5 w-2.5 border-1.5",
              md: "h-3.5 w-3.5",
              lg: "h-4 w-4",
              xl: "h-4.5 w-4.5",
              "2xl": "h-5 w-5",
              "3xl": "h-7 w-7",
            }[size]),
            indicatorClassName
          )}
        />
      )}

      {action === "company" && logoImage && (
        <img
          src={logoImage}
          alt="Company Logo"
          className={cn(
            "absolute rounded-full bottom-0 right-0 object-cover",
            size&&({
              xs: "h-1.5 w-1.5",
              sm: "h-2 w-2",
              md: "h-3 w-3",
              lg: "h-3.5 w-3.5",
              xl: "h-4 w-4",
              "2xl": "h-5 w-5",
              "3xl": "h-7 w-7",
            }[size]),
            indicatorClassName
          )}
        />
      )}

      {action === "verified" && (
        <span
          className={cn(
            "absolute   flex justify-end text-primary",
            size&&({
              xs: "h-1.5 w-1.5 bottom-[9px] right-0",
              sm: "h-2 w-2 bottom-[8px] right-0",
              md: "h-3 w-3 bottom-[6px] right-0",
              lg: "h-3.5 w-3.5 bottom-[5px] right-0",
              xl: "h-4 w-4 bottom-[4px] right-0",
              "2xl": "h-5 w-5 bottom-[2px] right-0",
              "3xl": "h-7 w-7 bottom-[-4px] right-[-0px]",
            }[size]),

            {
              online: "text-success-500",
              offline: "text-secondary-300",
              none: "text-primary",
            }[status],
            indicatorClassName
          )}
        >
          {verifiedIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.09772 2.57909C9.04446 1.4903 10.4416 0.800003 12 0.800003C13.5584 0.800003 14.9555 1.49024 15.9022 2.57892C17.3417 2.47835 18.8179 2.97815 19.92 4.08025C21.0221 5.18234 21.5219 6.65857 21.4214 8.09803C22.5099 9.04476 23.2001 10.4418 23.2001 12C23.2001 13.5585 22.5097 14.9558 21.4208 15.9025C21.5211 17.3417 21.0213 18.8177 19.9194 19.9196C18.8175 21.0215 17.3416 21.5213 15.9023 21.4209C14.9556 22.5097 13.5585 23.2 12 23.2C10.4417 23.2 9.04463 22.5098 8.0979 21.4211C6.65842 21.5217 5.18217 21.0219 4.08007 19.9198C2.97797 18.8177 2.47816 17.3415 2.57874 15.902C1.49018 14.9553 0.800049 13.5583 0.800049 12C0.800049 10.4417 1.49025 9.04461 2.5789 8.09787C2.47844 6.65852 2.97826 5.18244 4.08026 4.08044C5.18227 2.97843 6.65836 2.47862 8.09772 2.57909ZM16.1473 9.91615C16.4238 9.52896 16.3341 8.99089 15.947 8.71433C15.5598 8.43776 15.0217 8.52744 14.7451 8.91463L11.0286 14.1178L9.1631 12.2523C8.82664 11.9159 8.28115 11.9159 7.9447 12.2523C7.60824 12.5888 7.60824 13.1343 7.9447 13.4707L10.5293 16.0554C10.7084 16.2344 10.9572 16.3256 11.2096 16.3048C11.462 16.2839 11.6924 16.153 11.8396 15.9469L16.1473 9.91615Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
      )}

      {/* Notification Count Badge */}
      {notification &&
      notificationCount !== undefined &&
      notificationCount > 0 &&
      notificationCount < 10 ? (
        <button
          className={cn(
            "absolute  bg-red-500 text-white text-xs rounded-full flex items-center justify-center text-center font-semibold border-2 border-secondary-50 top-[-1.5px] right-[-1.5px] hover:cursor-pointer",
            size&&({
              xs: "h-1.5 w-1.5 border-none",
              sm: "h-2 w-2 border-1 top-[-1.1px] right-[-1.1px] text-[4px]",
              md: "h-2.5 w-2.5 border-[1.5px] top-[-1px] right-[-0.5px] text-[6px]",
              lg: "h-3.5 w-3.5 top-[-1.5px] right-[-1.5px] text-[8px]",
              xl: "h-4 w-4 text-[10px]",
              "2xl": "h-5 w-5 text-xs",
              "3xl": "h-7 w-7 text-xs",
            }[size]),
            // {
            //   circle: "top-[-0.5px] right-[-0.5px]",
            //   rounded: "top-[-2px] right-[-2px]",
            //   square: "top-[-2px] right-[-2px]",
            // }[shape],
            notificationClassName
          )}
          onClick={notificationOnClick}
        >
          {size !=="xs"&&notificationCount}
        </button>
      ) : (
        notification &&
        notificationCount !== undefined &&
        notificationCount >= 10 && (
          <button
            className={cn(
              "absolute top-[-1.5px] right-[-1.5px] bg-destructive-500 border-2 border-secondary-50 rounded-full hover:cursor-pointer",
              size&&({
                xs: "h-1.5 w-1.5 border-none",
                sm: "h-2 w-2 border-1 top-[-1.1px] right-[-1.1px]",
                md: "h-2.5 w-2.5 border-[1.5px] top-[-1px] right-[-0.5px]",
                lg: "h-3.5 w-3.5 top-[-1.5px] right-[-1.5px]",
                xl: "h-4 w-4",
                "2xl": "h-5 w-5 ",
                "3xl": "h-7 w-7",
              }[size]),
              notificationClassName
            )}
            onClick={notificationOnClick}
          ></button>
        )
      )}
    </div>
  );
};

export {Avatar};
