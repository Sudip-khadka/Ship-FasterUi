import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';

export declare function Avatar({ notificationCount, logoImage, shape, type, size, action, notificationOnClick, status, indicatorClassName, notification, notificationClassName, verifiedIcon, src, initials, className, placeholder, onClick, ...props }: AvatarProps): JSX.Element;

export declare type AvatarProps = {
    type: "image" | "initial" | "placeholder";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    shape?: "rounded" | "circle" | "square";
    action?: "none" | "verified" | "pending" | "company";
    status: "none" | "online" | "offline";
    src?: string;
    notification?: boolean;
    initials?: `${string}${string}` | `${string}`;
    placeholder?: default_2.ReactNode;
    verifiedIcon?: default_2.ReactNode;
    logoImage?: string;
    notificationCount?: number;
    showNotificationCount?: boolean;
    indicatorClassName?: string;
    className?: string;
    notificationClassName?: string;
    notificationOnClick?: () => void;
    onClick?: () => void;
};

export { }
