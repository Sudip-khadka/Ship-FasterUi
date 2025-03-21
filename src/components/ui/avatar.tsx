import React from "react";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

type AvatarType = "image" | "initial" | "placeholder";
type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type AvatarAction =
  | "none"
  | "verified"
  | "pending"
  | "offline"
  | "online"
  | "company"
  | "notify";

export interface AvatarProps {
  type: AvatarType;
  size: AvatarSize;
  action: AvatarAction;
  src?: string; // For image type
  initials?: string; // For initial type
  placeholder?: React.ReactNode; // For placeholder type
  logoImage?: string;
  notificationCount?:number;
}

const Avatar: React.FC<AvatarProps> = ({
    notificationCount,
  logoImage,
  type,
  size,
  action,
  src,
  initials,
  placeholder = <User />,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full",
        {
          sm: "w-8 h-8 text-sm",
          md: "w-10 h-10",
          lg: "w-12 h-12 text-lg",
          xl: "w-16 h-16 text-xl",
          "2xl": "w-20 h-20 text-2xl",
          "3xl": "w-24 h-24 text-3xl",
        }[size],
        "border"
      )}
    >
      {type === "image" && src && (
        <img
          src={src}
          alt="Avatar"
          className="rounded-full object-cover w-full h-full"
        />
      )}
      {type === "initial" && initials && (
        <span className="font-bold">{initials}</span>
      )}
      {type === "placeholder" && placeholder && (
        <span className="bg-primary-100 h-full w-full flex items-end justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="84"
            viewBox="0 0 96 84"
            fill="none"
            className={cn(
                "relative text-primary flex items-center justify-center rounded-full",
                {
                  sm: "w-8 h-8 text-sm",
                  md: "w-10 h-10",
                  lg: "w-12 h-12 text-lg",
                  xl: "w-16 h-16 text-xl",
                  "2xl": "w-20 h-20 text-2xl",
                  "3xl": "w-24 h-24 text-3xl",
                }[size],
                "border"
              )}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4996 27.9995C27.4996 16.4015 36.9016 6.99951 48.4996 6.99951C60.0976 6.99951 69.4996 16.4015 69.4996 27.9995C69.4996 39.5975 60.0976 48.9995 48.4996 48.9995C36.9016 48.9995 27.4996 39.5975 27.4996 27.9995Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0054 93.8244C10.3663 72.8722 27.4622 55.9995 48.4996 55.9995C69.5375 55.9995 86.6337 72.873 86.9938 93.8259C87.0177 95.2154 86.2171 96.4875 84.954 97.0671C73.8523 102.161 61.5034 105 48.5011 105C35.4976 105 23.1476 102.161 12.0451 97.0657C10.782 96.486 9.98147 95.214 10.0054 93.8244Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
      {action === "online" || action === "offline"|| action==="pending" ? (
        <span
          className={cn(
            "absolute rounded-full bottom-0 border border-white right-0",
            {
              sm: "h-2 w-2",
              md: "h-3 w-3",
              lg: "h-4 w-4",
              xl: "h-6 w-6",
              "2xl": "h-7 w-7",
              "3xl": "h-8 w-8",
            }[size],
            {
              online: "bg-success-700",
              offline: "bg-secondary-300",
              pending: "bg-warning",
            }[action]
          )}
        ></span>
      ) : action === "company" ? (
        <img
          src={logoImage} // Replace with actual logo path
          alt="Company Logo"
          className={cn(
            "absolute rounded-full bottom-0 right-0 object-cover",
            {
              sm: "h-2 w-2",
              md: "h-3 w-3",
              lg: "h-4 w-4",
              xl: "h-6 w-6",
              "2xl": "h-7 w-7",
              "3xl": "h-8 w-8",
            }[size]
          )}
        />
      ) : action === "verified" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={cn(
            "absolute bottom-0 right-0 text-primary",
            {
              sm: "h-2 w-2",
              md: "h-3 w-3",
              lg: "h-4 w-4",
              xl: "h-6 w-6",
              "2xl": "h-7 w-7",
              "3xl": "h-8 w-8",
            }[size]
          )}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.09772 2.57909C9.04446 1.4903 10.4416 0.800003 12 0.800003C13.5584 0.800003 14.9555 1.49024 15.9022 2.57892C17.3417 2.47835 18.8179 2.97815 19.92 4.08025C21.0221 5.18234 21.5219 6.65857 21.4214 8.09803C22.5099 9.04476 23.2001 10.4418 23.2001 12C23.2001 13.5585 22.5097 14.9558 21.4208 15.9025C21.5211 17.3417 21.0213 18.8177 19.9194 19.9196C18.8175 21.0215 17.3416 21.5213 15.9023 21.4209C14.9556 22.5097 13.5585 23.2 12 23.2C10.4417 23.2 9.04463 22.5098 8.0979 21.4211C6.65842 21.5217 5.18217 21.0219 4.08007 19.9198C2.97797 18.8177 2.47816 17.3415 2.57874 15.902C1.49018 14.9553 0.800049 13.5583 0.800049 12C0.800049 10.4417 1.49025 9.04461 2.5789 8.09787C2.47844 6.65852 2.97826 5.18244 4.08026 4.08044C5.18227 2.97843 6.65836 2.47862 8.09772 2.57909ZM16.1473 9.91615C16.4238 9.52896 16.3341 8.99089 15.947 8.71433C15.5598 8.43776 15.0217 8.52744 14.7451 8.91463L11.0286 14.1178L9.1631 12.2523C8.82664 11.9159 8.28115 11.9159 7.9447 12.2523C7.60824 12.5888 7.60824 13.1343 7.9447 13.4707L10.5293 16.0554C10.7084 16.2344 10.9572 16.3256 11.2096 16.3048C11.462 16.2839 11.6924 16.153 11.8396 15.9469L16.1473 9.91615Z"
            fill="currentColor"
          />
        </svg>
      ) :action==="notify"? 
      <span
      className={cn(
        "absolute rounded-full flex items-center justify-center text-secondary-50 top-0 border border-white bg-destructive-600 right-0",
        {
          sm: "h-2 w-2 text-[6px]",
          md: "h-3 w-3 text-[8px]",
          lg: "h-4 w-4 text-[10px]",
          xl: "h-6 w-6 text-sm",
          "2xl": "h-7 w-7 text-sm",
          "3xl": "h-8 w-8 text-sm",
        }[size],
      )}
    >{notificationCount&&notificationCount<10?notificationCount:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#F0FDF4"/>
      </svg>}</span>
      : null}
    </div>
  );
};

export default Avatar;
