import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
export interface CustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  type?: "boxed" | "lined" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  state?:
    | "default"
    | "typing"
    | "active"
    | "Focused"
    | "disabled"
    | "hovered"
    | "success"
    | "error";
  inputType?: string; // (text, password, email, number, etc.)

  // Label props
  label?: string;
  showLabel?: boolean;

  // Placeholder props
  placeholderText?: string;
  showPlaceholder?: boolean;

  // Helper text props
  helperText?: string;
  showHelperText?: boolean;

  // Counter props
  maxLength?: number;
  showCounter?: boolean;

  // Icon props
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperTextClassName?: string;
  counterClassName?: string;
  iconClassName?: string;
  inputContainerClassName?: string;
}

function CustomInput({
  // Main props
  className,
  type = "outlined",
  size = "md",
  state: externalState,
  disabled = false,
  inputType = "text",

  // Label props
  label,
  showLabel = true,
  labelClassName,

  // Placeholder props
  placeholderText,
  showPlaceholder = true,

  // Helper text props
  helperText,
  showHelperText = true,
  helperTextClassName,

  // Counter props
  maxLength,
  showCounter = false,
  counterClassName,

  // Icon props
  startIcon: StartIcon,
  endIcon: EndIcon,
  onStartIconClick,
  onEndIconClick,
  iconClassName,

  // Container class names
  containerClassName,
  inputClassName,
  inputContainerClassName,

  // Event handlers
  onChange,
  onFocus,
  onBlur,
  ...props
}: CustomInputProps) {
  const [internalState, setInternalState] = useState<CustomInputProps["state"]>(
    externalState || "default"
  );
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >(props.value || props.defaultValue || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const currentState = externalState || internalState;

  useEffect(() => {
    if (disabled && !externalState) {
      setInternalState("disabled");
    } else if (internalState === "disabled" && !disabled && !externalState) {
      setInternalState("default");
    }
  }, [disabled, internalState, externalState]);

  // Key change: Preserve typing state's styling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(e);
    }

    if (!externalState) {
      if (
        newValue &&
        internalState !== "disabled" &&
        internalState !== "active"
      ) {
        setInternalState("typing");
      } else if (
        !newValue &&
        internalState !== "disabled" &&
        internalState !== "active"
      ) {
        setInternalState("default");
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(true);
      if (!externalState) {
        setInternalState("active");
      }
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (!disabled && !externalState) {
      if (value) {
        setInternalState("typing");
      } else {
        setInternalState("default");
      }
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && !isFocused && !externalState) {
      // Store previous state to restore after mouse leave if not typing
      setInternalState("hovered");
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !isFocused && !externalState) {
      if (value) {
        setInternalState("typing");
      } else {
        setInternalState("default");
      }
    }
  };

  const charCount = typeof value === "string" ? value.length : 0;
  const showMaxLength = maxLength !== undefined && showCounter;

  const getSizeClasses = (): string => {
    switch (size) {
      case "sm":
        return "h-8 text-xs py-1 px-2";
      case "md":
        return "h-10 text-sm py-2 px-3";
      case "lg":
        return "h-12 text-base py-2.5 px-4";
      case "xl":
        return "h-14 text-lg py-3 px-5";
      default:
        return "h-10 text-sm py-2 px-3";
    }
  };

  // Get type-specific classes
  const getTypeClasses = (): string => {
    switch (type) {
      case "boxed":
        return "bg-white border rounded-md";
      case "lined":
        return "border-b  border-t-0 border-l-0 border-r-0 bg-transparent";
      case "outlined":
        return "bg-transparent border rounded-md";
      default:
        return "bg-transparent border rounded-md";
    }
  };

  // Get state-specific classes - FIXED to maintain styling during typing
  const getStateClasses = (): string => {
    let classes = "";

    // Border color and shadow based on state
    switch (currentState) {
      case "Focused":
        classes += " border-[#DDDDDD]";
        break;
      case "disabled":
        classes += " opacity-50 bg-gray-100 border-gray-300";
        break;
      case "error":
        classes += " border-[#EF4444] text-[#EF4444]";
        classes +=
          type === "boxed" ? " shadow-[#fee2e2]" : " ring-2 ring-red-100";
        break;
      case "success":
        classes += " border-[#89D09D]";
        classes +=
          type === "boxed" ? " shadow-[#89D09D]" : " ring-2 ring-green-200";
        break;
      case "active":
        classes += " border-[#89D09D]";
        // if (type === "boxed") {
        //   classes += " shadow-[#89D09D]";
        // } else if (type === "outlined") {
        //   classes += "";
        // }
        break;
      case "hovered":
        classes += " border-[#CACACA]";
        if (type === "boxed") {
          classes += " shadow-sm";
        }
        break;
      case "typing":
        classes += " border-[#89d09d]";
        if (type === "boxed") {
          classes += " shadow-sm";
        }
        break;
      default: // default state
        classes += " border-[#F1F1F1]";
        break;
    }

    return classes;
  };

  // Get input classes based on type, state, and size
  const getInputClasses = (): string => {
    // Base classes for all input types
    let classes =
      "w-full placeholder:text-[#DDDDDD] transition-all duration-200 focus:outline-none disabled:cursor-not-allowed";

    // Add size classes
    classes += " " + getSizeClasses();

    // Add type classes
    classes += " " + getTypeClasses();

    // Add state classes
    classes += " " + getStateClasses();

    // Add padding for icons
    if (StartIcon) {
      classes +=
        size === "sm"
          ? " pl-7"
          : size === "lg" || size === "xl"
          ? " pl-11"
          : " pl-9";
    }

    // Adjust right padding based on whether we have an end icon, counter, or both
    if (EndIcon && showMaxLength) {
      classes +=
        size === "sm"
          ? " pr-20"
          : size === "lg" || size === "xl"
          ? " pr-28"
          : " pr-24";
    } else if (EndIcon) {
      classes +=
        size === "sm"
          ? " pr-7"
          : size === "lg" || size === "xl"
          ? " pr-11"
          : " pr-9";
    } else if (showMaxLength) {
      classes +=
        size === "sm"
          ? " pr-14"
          : size === "lg" || size === "xl"
          ? " pr-20"
          : " pr-16";
    }

    // Add caret color based on state
    if (currentState === "error") {
      classes += " caret-red-500";
    } else if (currentState === "success") {
      classes += " caret-[#18a23f] ";
    } else {
      classes += " caret-[#18a23f]  ";
    }

    return classes;
  };

  // Get label classes based on state
  const getLabelClasses = (): string => {
    let classes = "font-medium mb-1.5 block";

    // Adjust size based on input size
    if (size === "sm") {
      classes += " text-xs";
    } else if (size === "lg" || size === "xl") {
      classes += " text-base";
    } else {
      classes += " text-sm";
    }

    // Add state-specific colors
    if (currentState === "error") {
      classes += " text-[#040404]";
    } else if (currentState === "success") {
      classes += " text-green-500";
    } else if (currentState === "disabled") {
      classes += " opacity-50";
    }

    return classes;
  };

  const getHelperTextClasses = (): string => {
    let classes = "mt-1.5";

    // Adjust size based on input size
    if (size === "sm") {
      classes += " text-xs";
    } else if (size === "lg" || size === "xl") {
      classes += " text-sm";
    } else {
      classes += " text-xs";
    }

    // Add state-specific colors
    if (currentState === "error") {
      classes += " text-[#EF4444]";
    } else if (currentState === "success") {
      classes += " text-green-500";
    } else if (currentState === "disabled") {
      classes += " text-gray-400 opacity-50";
    } else {
      classes += " text-gray-500";
    }

    return classes;
  };

  // Get counter classes based on state
  const getCounterClasses = (): string => {
    let classes = "absolute top-1/2 transform -translate-y-1/2";

    // Adjust size based on input size
    if (size === "sm") {
      classes += " text-xs";
    } else if (size === "lg" || size === "xl") {
      classes += " text-sm";
    } else {
      classes += " text-xs";
    }

    // Position counter based on end icon presence
    classes += EndIcon ? " right-10" : " right-3";

    // Adjust position based on size
    if (size === "lg" || size === "xl") {
      classes += EndIcon ? " right-12" : " right-4";
    }

    // Add state-specific colors
    if (currentState === "error") {
      classes += " text-[#EF4444]";
    } else if (currentState === "success") {
      classes += " text-green-500";
    } else if (currentState === "disabled") {
      classes += " text-gray-400 opacity-50";
    } else {
      classes += " text-gray-500";
    }

    return classes;
  };

  // Get icon size based on input size
  const getIconSize = (): string => {
    if (size === "sm") {
      return "h-3.5 w-3.5";
    } else if (size === "lg") {
      return "h-5 w-5";
    } else if (size === "xl") {
      return "h-6 w-6";
    } else {
      return "h-4 w-4";
    }
  };

  // Get icon position classes
  const getStartIconPositionClasses = (): string => {
    let classes = "absolute left-3 top-1/2 transform -translate-y-1/2 z-10";

    if (size === "sm") {
      classes = "absolute left-2 top-1/2 transform -translate-y-1/2 z-10";
    } else if (size === "lg" || size === "xl") {
      classes = "absolute left-4 top-1/2 transform -translate-y-1/2 z-10";
    }

    return classes;
  };

  const getEndIconPositionClasses = (): string => {
    let classes = "absolute right-3 top-1/2 transform -translate-y-1/2 z-10";

    if (size === "sm") {
      classes = "absolute right-2 top-1/2 transform -translate-y-1/2 z-10";
    } else if (size === "lg" || size === "xl") {
      classes = "absolute right-4 top-1/2 transform -translate-y-1/2 z-10";
    }

    return classes;
  };

  // Get icon color classes based on state
  const getIconColorClasses = (): string => {
    if (currentState === "error") {
      return "text-red-500";
    } else if (currentState === "success") {
      return "text-green-500";
    } else if (currentState === "disabled") {
      return "text-gray-400 opacity-50";
    } else if (currentState === "active") {
      return "text-green-500";
    } else {
      return "text-gray-500";
    }
  };

  return (
    <div className={cn("w-full", containerClassName)}>
      {/* Label */}
      {label && showLabel && (
        <label
          htmlFor={props.id}
          className={cn(getLabelClasses(), labelClassName)}
        >
          {label}
        </label>
      )}

      {/* Input container */}
      <div className={cn("relative", inputContainerClassName)}>
        {/* Start Icon */}
        {StartIcon && (
          <div
            className={cn(
              getStartIconPositionClasses(),
              onStartIconClick && "cursor-pointer",
              iconClassName
            )}
            onClick={disabled ? undefined : onStartIconClick}
          >
            <StartIcon className={cn(getIconSize(), getIconColorClasses())} />
          </div>
        )}

        {/* Input */}
        <input
          className={cn(getInputClasses(), inputClassName, className)}
          placeholder={showPlaceholder ? placeholderText : undefined}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          maxLength={maxLength}
          type={inputType}
          {...props}
        />

        {/* Counter inside input */}
        {showMaxLength && (
          <div className={cn(getCounterClasses(), counterClassName)}>
            {charCount}/{maxLength}
          </div>
        )}

        {/* End Icon */}
        {EndIcon && (
          <div
            className={cn(
              getEndIconPositionClasses(),
              onEndIconClick && "cursor-pointer",
              iconClassName
            )}
            onClick={disabled ? undefined : onEndIconClick}
          >
            <EndIcon className={cn(getIconSize(), getIconColorClasses())} />
          </div>
        )}
      </div>

      {/* Helper text */}
      {helperText && showHelperText && (
        <div className={cn(getHelperTextClasses(), helperTextClassName)}>
          {helperText}
        </div>
      )}
    </div>
  );
}

export { CustomInput };
