import * as React from "react";
import { cn } from "@/lib/utils";

type InputSize = "sm" | "md" | "lg";

// Define validation states
type ValidationState = "valid" | "invalid" | "default";

// Define validation options
interface ValidationOptions {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  custom?: (value: string) => boolean;
}

interface InputCustomProps {
  inputSize?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconClassName?: string;
  validation?: ValidationOptions;
  errorMessage?: string;
  showValidationIcon?: boolean;
  onValidationChange?: (isValid: boolean) => void;
}

// Combine our custom props with the HTML input props
// Use Omit to ensure no conflicts with native properties
type InputProps = InputCustomProps &
  Omit<React.ComponentProps<"input">, keyof InputCustomProps>;

function Input({
  className,
  type = "text",
  inputSize = "md",
  leftIcon,
  rightIcon,
  iconClassName,
  validation,
  errorMessage,
  showValidationIcon = true,
  onValidationChange,
  ...props
}: InputProps) {
  const [validationState, setValidationState] =
    React.useState<ValidationState>("default");
  const [message, setMessage] = React.useState<string | undefined>(undefined);
  const [isDirty, setIsDirty] = React.useState(false);

  // Size-specific classes
  const sizeClasses = {
    sm: "h-7 text-xs",
    md: "h-9 text-sm",
    lg: "h-11 text-base",
  };

  // Size-specific padding (adjusted based on icons and validation icon)
  const getPaddingClasses = () => {
    const hasValidationIcon = validation && showValidationIcon;

    return {
      sm:
        leftIcon && (rightIcon || hasValidationIcon)
          ? "px-7"
          : leftIcon
          ? "pl-7 pr-2"
          : rightIcon || hasValidationIcon
          ? "pl-2 pr-7"
          : "px-2",
      md:
        leftIcon && (rightIcon || hasValidationIcon)
          ? "px-9"
          : leftIcon
          ? "pl-9 pr-3"
          : rightIcon || hasValidationIcon
          ? "pl-3 pr-9"
          : "px-3",
      lg:
        leftIcon && (rightIcon || hasValidationIcon)
          ? "px-10"
          : leftIcon
          ? "pl-10 pr-4"
          : rightIcon || hasValidationIcon
          ? "pl-4 pr-10"
          : "px-4",
    };
  };

  const paddingClasses = getPaddingClasses();

  // Icon container size based on input size
  const iconContainerSizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  // Validation state specific classes
  const validationClasses = {
    valid:
      "border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/50",
    invalid:
      "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50",
    default: "",
  };

  // Validation function
  const validateInput = (value: string) => {
    if (!validation) return true;

    // Empty field validation (only if dirty)
    if (isDirty && validation.required && !value.trim()) {
      setMessage(errorMessage || "This field is required");
      return false;
    }

    // Check pattern
    if (validation.pattern && !validation.pattern.test(value)) {
      setMessage(errorMessage || "Invalid format");
      return false;
    }

    // Check min length
    if (
      validation.minLength !== undefined &&
      value.length < validation.minLength
    ) {
      setMessage(
        errorMessage || `Minimum length is ${validation.minLength} characters`
      );
      return false;
    }

    // Check max length
    if (
      validation.maxLength !== undefined &&
      value.length > validation.maxLength
    ) {
      setMessage(
        errorMessage || `Maximum length is ${validation.maxLength} characters`
      );
      return false;
    }

    // Check min value (for number inputs)
    if (type === "number" && validation.min !== undefined) {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue < validation.min) {
        setMessage(errorMessage || `Minimum value is ${validation.min}`);
        return false;
      }
    }

    // Check max value (for number inputs)
    if (type === "number" && validation.max !== undefined) {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > validation.max) {
        setMessage(errorMessage || `Maximum value is ${validation.max}`);
        return false;
      }
    }

    // Custom validation
    if (validation.custom && !validation.custom(value)) {
      setMessage(errorMessage || "Invalid input");
      return false;
    }

    // Clear error message if validation passes
    setMessage(undefined);
    return true;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isDirty) {
      setIsDirty(true);
    }

    const isValid = validateInput(value);

    setValidationState(
      isValid ? (value.length > 0 ? "valid" : "default") : "invalid"
    );

    if (onValidationChange) {
      onValidationChange(isValid);
    }

    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Handle blur event for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isDirty) {
      setIsDirty(true);
    }

    // Always validate on blur if field is required
    if (validation?.required && !value.trim()) {
      setValidationState("invalid");
      setMessage(errorMessage || "This field is required");
      if (onValidationChange) {
        onValidationChange(false);
      }
    } else if (validation) {
      const isValid = validateInput(value);
      setValidationState(
        isValid ? (value.length > 0 ? "valid" : "default") : "invalid"
      );
      if (onValidationChange) {
        onValidationChange(isValid);
      }
    }

    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  // Render validation icon based on state
  const renderValidationIcon = () => {
    if (!showValidationIcon || !validation) return null;

    if (validationState === "valid") {
      return (
        <div
          className={cn(
            "absolute right-0 top-0 flex items-center justify-center text-green-500",
            iconContainerSizeClasses[inputSize]
          )}
          style={{ right: rightIcon ? "2rem" : "0" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6668 4L6.00016 11.6667L2.3335 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    if (validationState === "invalid") {
      return (
        <div
          className={cn(
            "absolute right-0 top-0 flex items-center justify-center text-red-500",
            iconContainerSizeClasses[inputSize]
          )}
          style={{ right: rightIcon ? "2rem" : "0" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <div
            className={cn(
              "absolute left-0 flex items-center justify-center text-muted-foreground",
              iconContainerSizeClasses[inputSize],
              iconClassName
            )}
          >
            {leftIcon}
          </div>
        )}

        <div className="relative w-full">
          <input
            required
            type={type}
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
              "border-input flex w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none py-1",
              "file:inline-flex file:border-0 file:bg-transparent file:font-medium",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

              // Focus and validation states
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

              // Custom validation classes
              validationState !== "default" &&
                validationClasses[validationState],

              sizeClasses[inputSize],
              paddingClasses[inputSize],

              // File input adjustments
              type === "file" && "py-1.5",

              // Override with any custom classes passed in
              className
            )}
            aria-invalid={validationState === "invalid"}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
          />

          {renderValidationIcon()}

          {rightIcon && (
            <div
              className={cn(
                "absolute right-0 top-0 flex items-center justify-center text-muted-foreground",
                iconContainerSizeClasses[inputSize],
                iconClassName
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>
      </div>

      {validationState === "invalid" && message && (
        <p className="text-xs text-red-500 mt-1">{message}</p>
      )}
    </div>
  );
}

export { Input };
export type { InputSize, InputProps, ValidationOptions, ValidationState };

// *******************method-1***********************

// import type React from "react";
// import { useState, useRef, useEffect, forwardRef } from "react";
// import { cn } from "@/lib/utils";
// import type { LucideIcon } from "lucide-react";

// export interface CustomInputProps
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
//   // Main props
//   type?: "boxed" | "lined" | "outlined";
//   size?: "sm" | "md" | "lg" | "xl";
//   state?:
//     | "default"
//     | "typing"
//     | "active"
//     | "disabled"
//     | "hovered"
//     | "success"
//     | "error";
//   inputType?: string; // (text, password, email, number, etc.)

//   // Label props
//   label?: string;
//   showLabel?: boolean;

//   // Placeholder props
//   placeholderText?: string;
//   showPlaceholder?: boolean;

//   // Helper text props
//   helperText?: string;
//   showHelperText?: boolean;

//   // Counter props
//   maxLength?: number;
//   showCounter?: boolean;

//   // Icon props
//   startIcon?: LucideIcon;
//   endIcon?: LucideIcon;
//   onStartIconClick?: () => void;
//   onEndIconClick?: () => void;
//   // Class name props for styling
//   containerClassName?: string;
//   labelClassName?: string;
//   inputClassName?: string;
//   helperTextClassName?: string;
//   counterClassName?: string;
//   iconClassName?: string;
//   inputContainerClassName?: string;
// }

// const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
//   (
//     {
//       // Main props
//       className,
//       type = "outlined",
//       size = "md",
//       state: externalState,
//       disabled = false,
//       inputType = "text", // Default to text input

//       // Label props
//       label,
//       showLabel = true,
//       labelClassName,

//       // Placeholder props
//       placeholderText,
//       showPlaceholder = true,

//       // Helper text props
//       helperText,
//       showHelperText = true,
//       helperTextClassName,

//       // Counter props
//       maxLength,
//       showCounter = false,
//       counterClassName,

//       // Icon props
//       startIcon: StartIcon,
//       endIcon: EndIcon,
//       onStartIconClick,
//       onEndIconClick,
//       iconClassName,

//       // Container class names
//       containerClassName,
//       inputClassName,
//       inputContainerClassName,

//       // Event handlers
//       onChange,
//       onFocus,
//       onBlur,
//       ...props
//     },
//     ref
//   ) => {
//     // Use external state if provided, otherwise manage internally
//     const [internalState, setInternalState] = useState<string>(
//       externalState || "default"
//     );
//     const [value, setValue] = useState(props.value || props.defaultValue || "");
//     const [isFocused, setIsFocused] = useState(false);
//     const inputRef = useRef<HTMLInputElement>(null);

//     // Current state is either external (controlled) or internal (uncontrolled)
//     const currentState = externalState || internalState;

//     // Merge the forwarded ref with our local ref
//     useEffect(() => {
//       if (typeof ref === "function") {
//         ref(inputRef.current);
//       } else if (ref) {
//         ref.current = inputRef.current;
//       }
//     }, [ref]);

//     // Update state based on disabled prop
//     useEffect(() => {
//       if (disabled && !externalState) {
//         setInternalState("disabled");
//       } else if (internalState === "disabled" && !disabled && !externalState) {
//         setInternalState("default");
//       }
//     }, [disabled, internalState, externalState]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const newValue = e.target.value;
//       setValue(newValue);

//       if (onChange) {
//         onChange(e);
//       }

//       if (!externalState) {
//         if (newValue && internalState !== "disabled") {
//           setInternalState("typing");
//         } else if (!newValue && internalState !== "disabled") {
//           setInternalState("default");
//         }
//       }
//     };

//     // Handle focus events
//     const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//       if (!disabled) {
//         setIsFocused(true);
//         if (!externalState) {
//           setInternalState("active");
//         }
//       }

//       if (onFocus) {
//         onFocus(e);
//       }
//     };

//     // Handle blur events
//     const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//       setIsFocused(false);

//       if (!disabled && !externalState) {
//         if (value) {
//           setInternalState("typing");
//         } else {
//           setInternalState("default");
//         }
//       }

//       if (onBlur) {
//         onBlur(e);
//       }
//     };

//     // Handle mouse enter
//     const handleMouseEnter = () => {
//       if (!disabled && !isFocused && !externalState) {
//         setInternalState("hovered");
//       }
//     };

//     // Handle mouse leave
//     const handleMouseLeave = () => {
//       if (!disabled && !isFocused && !externalState) {
//         if (value) {
//           setInternalState("typing");
//         } else {
//           setInternalState("default");
//         }
//       }
//     };

//     // Calculate character count
//     const charCount = typeof value === "string" ? value.length : 0;
//     const showMaxLength = maxLength !== undefined && showCounter;

//     // Get size-specific classes
//     const getSizeClasses = () => {
//       switch (size) {
//         case "sm":
//           return "h-8 text-xs py-1 px-2";
//         case "md":
//           return "h-10 text-sm py-2 px-3";
//         case "lg":
//           return "h-12 text-base py-2.5 px-4";
//         case "xl":
//           return "h-14 text-lg py-3 px-5";
//         default:
//           return "h-10 text-sm py-2 px-3";
//       }
//     };

//     // Get type-specific classes
//     const getTypeClasses = () => {
//       switch (type) {
//         case "boxed":
//           return "bg-white border rounded-md";
//         case "lined":
//           return "border-b border-t-0 border-l-0 border-r-0 bg-transparent";
//         case "outlined":
//           return "bg-transparent border rounded-md";
//         default:
//           return "bg-transparent border rounded-md";
//       }
//     };

//     // Get state-specific classes
//     const getStateClasses = () => {
//       let classes = "";

//       // Border color and shadow based on state
//       switch (currentState) {
//         case "disabled":
//           classes += " opacity-50 bg-gray-100 border-gray-300";
//           break;
//         case "error":
//           classes += " border-red-500";
//           if (currentState === "error" || isFocused) {
//             classes +=
//               type === "boxed"
//                 ? " shadow-[0_0_0_1px_rgba(239,68,68,0.5)]"
//                 : " ring-2 ring-red-200";
//           }
//           break;
//         case "success":
//           classes += " border-[#89D09D]";
//           if (currentState === "success" || isFocused) {
//             classes +=
//               type === "boxed" ? " shadow-[#89D09D]" : " ring-2 ring-green-200";
//           }
//           break;
//         case "active":
//           classes += " border-[#89D09D]";
//           if (type === "boxed") {
//             classes += "  shadow-[#89D09D]";
//           } else if (type === "outlined") {
//             classes += " ring-2 ring-green-200";
//           }
//           break;
//         case "hovered":
//           classes += " border-gray-400";
//           if (type === "boxed") {
//             classes += " shadow-sm";
//           }
//           break;
//         case "typing":
//           classes += " border-gray-500";
//           if (type === "boxed") {
//             classes += " shadow-sm";
//           }
//           break;
//         default: // default state
//           classes += " border-gray-300";
//           break;
//       }

//       return classes;
//     };

//     // Get input classes based on type, state, and size
//     const getInputClasses = () => {
//       // Base classes for all input types
//       let classes =
//         "w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed";

//       // Add size classes
//       classes += " " + getSizeClasses();

//       // Add type classes
//       classes += " " + getTypeClasses();

//       // Add state classes
//       classes += " " + getStateClasses();

//       // Add padding for icons
//       if (StartIcon) {
//         classes +=
//           size === "sm"
//             ? " pl-7"
//             : size === "lg" || size === "xl"
//             ? " pl-11"
//             : " pl-9";
//       }

//       // Adjust right padding based on whether we have an end icon, counter, or both
//       if (EndIcon && showMaxLength) {
//         classes +=
//           size === "sm"
//             ? " pr-20"
//             : size === "lg" || size === "xl"
//             ? " pr-28"
//             : " pr-24";
//       } else if (EndIcon) {
//         classes +=
//           size === "sm"
//             ? " pr-7"
//             : size === "lg" || size === "xl"
//             ? " pr-11"
//             : " pr-9";
//       } else if (showMaxLength) {
//         classes +=
//           size === "sm"
//             ? " pr-14"
//             : size === "lg" || size === "xl"
//             ? " pr-20"
//             : " pr-16";
//       }

//       // Add caret color based on state
//       if (currentState === "error") {
//         classes += " caret-red-500";
//       } else if (currentState === "success") {
//         classes += " caret-green-500";
//       } else {
//         classes += " caret-green-500";
//       }

//       return classes;
//     };

//     // Get label classes based on state
//     const getLabelClasses = () => {
//       let classes = "font-medium mb-1.5 block";

//       // Adjust size based on input size
//       if (size === "sm") {
//         classes += " text-xs";
//       } else if (size === "lg" || size === "xl") {
//         classes += " text-base";
//       } else {
//         classes += " text-sm";
//       }

//       // Add state-specific colors
//       if (currentState === "error") {
//         classes += " text-red-500";
//       } else if (currentState === "success") {
//         classes += " text-green-500";
//       } else if (currentState === "disabled") {
//         classes += " opacity-50";
//       }

//       return classes;
//     };

//     const getHelperTextClasses = () => {
//       let classes = "mt-1.5";

//       // Adjust size based on input size
//       if (size === "sm") {
//         classes += " text-xs";
//       } else if (size === "lg" || size === "xl") {
//         classes += " text-sm";
//       } else {
//         classes += " text-xs";
//       }

//       // Add state-specific colors
//       if (currentState === "error") {
//         classes += " text-red-500";
//       } else if (currentState === "success") {
//         classes += " text-green-500";
//       } else if (currentState === "disabled") {
//         classes += " text-gray-400 opacity-50";
//       } else {
//         classes += " text-gray-500";
//       }

//       return classes;
//     };

//     // Get counter classes based on state
//     const getCounterClasses = () => {
//       let classes = "absolute top-1/2 transform -translate-y-1/2";

//       // Adjust size based on input size
//       if (size === "sm") {
//         classes += " text-xs";
//       } else if (size === "lg" || size === "xl") {
//         classes += " text-sm";
//       } else {
//         classes += " text-xs";
//       }

//       // Position counter based on end icon presence
//       classes += EndIcon ? " right-10" : " right-3";

//       // Adjust position based on size
//       if (size === "lg" || size === "xl") {
//         classes += EndIcon ? " right-12" : " right-4";
//       }

//       // Add state-specific colors
//       if (currentState === "error") {
//         classes += " text-red-500";
//       } else if (currentState === "success") {
//         classes += " text-green-500";
//       } else if (currentState === "disabled") {
//         classes += " text-gray-400 opacity-50";
//       } else {
//         classes += " text-gray-500";
//       }

//       return classes;
//     };

//     // Get icon size based on input size
//     const getIconSize = () => {
//       if (size === "sm") {
//         return "h-3.5 w-3.5";
//       } else if (size === "lg") {
//         return "h-5 w-5";
//       } else if (size === "xl") {
//         return "h-6 w-6";
//       } else {
//         return "h-4 w-4";
//       }
//     };

//     // Get icon position classes
//     const getStartIconPositionClasses = () => {
//       let classes = "absolute left-3 top-1/2 transform -translate-y-1/2 z-10";

//       if (size === "sm") {
//         classes = "absolute left-2 top-1/2 transform -translate-y-1/2 z-10";
//       } else if (size === "lg" || size === "xl") {
//         classes = "absolute left-4 top-1/2 transform -translate-y-1/2 z-10";
//       }

//       return classes;
//     };

//     const getEndIconPositionClasses = () => {
//       let classes = "absolute right-3 top-1/2 transform -translate-y-1/2 z-10";

//       if (size === "sm") {
//         classes = "absolute right-2 top-1/2 transform -translate-y-1/2 z-10";
//       } else if (size === "lg" || size === "xl") {
//         classes = "absolute right-4 top-1/2 transform -translate-y-1/2 z-10";
//       }

//       return classes;
//     };

//     // Get icon color classes based on state
//     const getIconColorClasses = () => {
//       if (currentState === "error") {
//         return "text-red-500";
//       } else if (currentState === "success") {
//         return "text-green-500";
//       } else if (currentState === "disabled") {
//         return "text-gray-400 opacity-50";
//       } else if (currentState === "active") {
//         return "text-green-500";
//       } else {
//         return "text-gray-500";
//       }
//     };

//     return (
//       <div className={cn("w-full", containerClassName)}>
//         {/* Label */}
//         {label && showLabel && (
//           <label
//             htmlFor={props.id}
//             className={cn(getLabelClasses(), labelClassName)}
//           >
//             {label}
//           </label>
//         )}

//         {/* Input container */}
//         <div className={cn("relative", inputContainerClassName)}>
//           {/* Start Icon */}
//           {StartIcon && (
//             <div
//               className={cn(
//                 getStartIconPositionClasses(),
//                 onStartIconClick && "cursor-pointer",
//                 iconClassName
//               )}
//               onClick={disabled ? undefined : onStartIconClick}
//             >
//               <StartIcon className={cn(getIconSize(), getIconColorClasses())} />
//             </div>
//           )}

//           {/* Input */}
//           <input
//             ref={inputRef}
//             className={cn(getInputClasses(), inputClassName, className)}
//             placeholder={showPlaceholder ? placeholderText : undefined}
//             disabled={disabled}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             maxLength={maxLength}
//             type={inputType}
//             {...props}
//           />

//           {/* Counter inside input */}
//           {showMaxLength && (
//             <div className={cn(getCounterClasses(), counterClassName)}>
//               {charCount}/{maxLength}
//             </div>
//           )}

//           {/* End Icon */}
//           {EndIcon && (
//             <div
//               className={cn(
//                 getEndIconPositionClasses(),
//                 onEndIconClick && "cursor-pointer",
//                 iconClassName
//               )}
//               onClick={disabled ? undefined : onEndIconClick}
//             >
//               <EndIcon className={cn(getIconSize(), getIconColorClasses())} />
//             </div>
//           )}
//         </div>

//         {/* Helper text */}
//         {helperText && showHelperText && (
//           <div className={cn(getHelperTextClasses(), helperTextClassName)}>
//             {helperText}
//           </div>
//         )}
//       </div>
//     );
//   }
// );

// CustomInput.displayName = "CustomInput";

// export { CustomInput };
