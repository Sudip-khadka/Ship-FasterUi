import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type RadioButtonState = "default" | "hovered" | "pressed" | "disabled";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  state?: RadioButtonState;
  active?: boolean;
  label?: string;
  disabled?: boolean;
}

export const RadioButton = ({
  className,
  state = "default",
  active = false,
  label,
  disabled = false,
  ...props
}: RadioButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the actual state based on props and hover state
  const actualState = disabled
    ? "disabled"
    : state === "pressed"
    ? "pressed"
    : isHovered
    ? "hovered"
    : "default";

  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        {/* Base circle */}
        <div
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
            active ? "border-green-500 border-[3px]" : "border-gray-300",
            actualState === "hovered" && !active && "border-gray-400",
            actualState === "pressed" && !active && "border-gray-500",
            actualState === "disabled" && "border-gray-200"
          )}
        >
          {/* Inner circle (when active) */}
          {active && (
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full bg-green-500 transition-all",
                actualState === "disabled" && "bg-green-200"
              )}
            />
          )}
        </div>

        {/* Hover shadow effect */}
        {actualState === "hovered" && (
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-sm -z-10 scale-125" />
        )}
      </div>

      {label && (
        <span className={cn("text-sm", disabled && "text-gray-400")}>
          {label}
        </span>
      )}

      <input
        type="radio"
        className="sr-only"
        disabled={disabled}
        checked={active}
        {...props}
      />
    </label>
  );
};
