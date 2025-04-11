import type React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CustomTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  maxLength?: number;
  showCounter?: boolean;
  showHelperText?: boolean;
  showLabel?: boolean;
  error?: boolean;
  success?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  counterClassName?: string;
  textareaContainerClassName?: string;
}

const Textarea: React.FC<CustomTextareaProps> = ({
  label,
  helperText,
  maxLength,
  showCounter = true,
  showHelperText = true,
  showLabel = true,
  error = false,
  success = false,
  className,
  containerClassName,
  labelClassName,
  helperTextClassName,
  counterClassName,
  textareaContainerClassName,
  disabled = false,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update internal value when prop value changes
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Calculate character count
  const charCount = typeof inputValue === "string" ? inputValue.length : 0;

  // Determine the current state for styling
  const getTextareaClasses = () => {
    const baseClasses =
      "w-full py-2 px-3 text-sm transition-all duration-200 outline-none";

    // Default state
    let stateClasses =
      "rounded-lg border border-[#F1F1F1] bg-white caret-[#18a23f]";

    if (disabled) {
      stateClasses =
        "rounded-lg border border-[#F1F1F1] bg-gray-50 opacity-70 cursor-not-allowed";
    } else if (error) {
      stateClasses =
        "rounded-lg border border-[#EF4444] bg-white ring-2 ring-red-100 caret-[#EF4444]";
    } else if (success) {
      stateClasses =
        "rounded-lg border border-[#89D09D] bg-white ring-2 ring-green-100 caret-[#18a23f]";
    } else if (isFocused) {
      // Active state
      stateClasses =
        "rounded-lg border border-[#89D09D] bg-white shadow-[0px_0px_0px_4px_rgba(225,243,229,0.70)] caret-[#18a23f]";
    } else if (isHovered) {
      // Hovered state
      stateClasses =
        "rounded-lg border border-[#F1F1F1] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_2px_0px_rgba(16,24,40,0.04)] caret-[#18a23f]";
    }

    return cn(baseClasses, stateClasses);
  };

  return (
    <div className={cn("w-full", containerClassName)}>
      {/* Label */}
      {label && showLabel && (
        <label
          htmlFor={props.id}
          className={cn(
            "block text-sm font-medium mb-1.5",
            error
              ? "text-[#EF4444]"
              : success
              ? "text-green-600"
              : "text-gray-700",
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      {/* Textarea container */}
      <div className={cn("relative", textareaContainerClassName)}>
        <textarea
          ref={textareaRef}
          className={cn(getTextareaClasses(), className)}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          maxLength={maxLength}
          {...props}
        />

        {/* Counter inside textarea */}
        {showCounter && maxLength && (
          <div
            className={cn(
              "absolute right-3 bottom-3 text-xs text-gray-400",
              counterClassName
            )}
          >
            {charCount}/{maxLength}
          </div>
        )}
      </div>

      {/* Helper text */}
      {helperText && showHelperText && (
        <div
          className={cn(
            "mt-1.5 text-xs",
            error
              ? "text-[#EF4444]"
              : success
              ? "text-green-600"
              : "text-gray-500",
            helperTextClassName
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export { Textarea };
