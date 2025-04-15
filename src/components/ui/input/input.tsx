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
