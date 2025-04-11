import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const otpContainerVariants = cva("flex items-center justify-start", {
  variants: {
    size: {
      small: "gap-1",
      medium: "gap-2",
      large: "gap-3",
    },
    divider: {
      true: "relative",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    divider: false,
  },
});

const otpInputVariants = cva(
  "flex items-center justify-center text-center transition-all outline-none focus:ring-0 caret-transparent",
  {
    variants: {
      type: {
        boxed: "border rounded-md",
        lined: "border-0 border-b",
        floating: "border-none",
      },
      state: {
        placeholderFocused: "border-[#edf8f0] text-[#f1f1f1]",
        typing: "border-primary text-primary",
        filled: "border-input text-foreground",
        disabled: "border-input text-muted-foreground bg-muted opacity-50",
        error: "border-red-500 text-red-500",
        complete: "border-primary text-primary ",
      },
      size: {
        small: "",
        medium: "",
        large: "",
      },
    },
    compoundVariants: [
      {
        type: "boxed",
        state: "typing",
        className: "ring-2 ring-success-500",
      },
      {
        type: "boxed",
        size: "small",
        className: "w-8 h-8 text-sm",
      },
      {
        type: "boxed",
        size: "medium",
        className: "w-10 h-10 text-base",
      },
      {
        type: "boxed",
        size: "large",
        className: "w-14 h-14 text-xl",
      },
      {
        type: "lined",
        size: "small",
        className: "w-6 h-8 text-sm",
      },
      {
        type: "lined",
        size: "medium",
        className: "w-8 h-10 text-base",
      },
      {
        type: "lined",
        size: "large",
        className: "w-10 h-14 text-xl",
      },
      {
        type: "floating",
        size: "small",
        className: "w-8 h-8 text-sm",
      },
      {
        type: "floating",
        size: "medium",
        className: "w-10 h-10 text-base",
      },
      {
        type: "floating",
        size: "large",
        className: "w-14 h-14 text-xl",
      },
    ],
    defaultVariants: {
      type: "boxed",
      state: "filled",
      size: "medium",
    },
  }
);
const placeholderVariants = cva(
  "pointer-events-none absolute inset-0 flex items-center justify-center",
  {
    variants: {
      state: {
        placeholderFocused: "text-[#dddddd] ",
        typing: "text-[#dddddd]",
        filled: "text-[#5e5e5e]",
        disabled: "text-muted-foreground opacity-50",
        error: "text-red-300",
        complete: "text-primary",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-xl",
      },
    },
    defaultVariants: {
      state: "placeholderFocused",
      size: "medium",
    },
  }
);

const cursorVariants = cva(
  "absolute top-1/2 -translate-y-1/2 transition-opacity duration-500",
  {
    variants: {
      size: {
        small: "h-4 w-[2px]",
        medium: "h-5 w-[2px]",
        large: "h-6 w-[2px]",
      },
      state: {
        placeholderFocused: "bg-primary",
        typing: "bg-primary",
        filled: "bg-transparent",
        disabled: "bg-transparent",
        error: "bg-red-500",
        complete: "bg-primary",
      },
    },
    defaultVariants: {
      size: "medium",
      state: "placeholderFocused",
    },
  }
);

const titleVariants = cva("block mb-1", {
  variants: {
    state: {
      placeholderFocused: "text-foreground",
      typing: "text-foreground",
      filled: "text-foreground",
      disabled: "text-muted-foreground",
      error: "text-red-500",
      complete: "text-foreground",
    },
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
  defaultVariants: {
    state: "filled",
    size: "medium",
  },
});

const helperTextVariants = cva("block mt-1", {
  variants: {
    state: {
      placeholderFocused: "text-muted-foreground",
      typing: "text-muted-foreground",
      filled: "text-muted-foreground",
      disabled: "text-muted-foreground opacity-50",
      error: "text-red-500",
      complete: "text-muted-foreground",
    },
    size: {
      small: "text-xs",
      medium: "text-xs",
      large: "text-sm",
    },
  },
  defaultVariants: {
    state: "filled",
    size: "medium",
  },
});

export interface OTPInputProps
  extends VariantProps<typeof otpContainerVariants>,
    VariantProps<typeof otpInputVariants> {
  number?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  inputClassName?: string;
  showTitleText?: boolean;
  titleText?: string;
  showHelperText?: boolean;
  helperText?: string;
  placeholderText?: string;
  divider?: boolean;
}

export function OTPInput({
  number = 6,
  value = "",
  onChange,
  onComplete,
  disabled = false,
  autoFocus = false,
  className,
  inputClassName,
  type = "boxed",
  state = "filled",
  size = "medium",
  showTitleText = false,
  titleText = "Input verification code",
  showHelperText = false,
  helperText = "Helper text",
  placeholderText = "0",
  divider = false,
}: OTPInputProps) {
  const [otp, setOtp] = React.useState<string[]>(
    value
      .split("")
      .slice(0, number)
      .concat(Array(number).fill(""))
      .slice(0, number)
  );
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const [isComplete, setIsComplete] = React.useState(false);

  // Initialize refs array
  React.useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, number);
  }, [number]);

  // Update OTP state when value prop changes
  React.useEffect(() => {
    const newOtp = value
      .split("")
      .slice(0, number)
      .concat(Array(number).fill(""))
      .slice(0, number);
    setOtp(newOtp);

    // Check if OTP is complete
    const isAllFilled =
      newOtp.every((val) => val !== "") && newOtp.length === number;
    setIsComplete(isAllFilled);
  }, [value, number]);

  // Typewriter cursor effect
  React.useEffect(() => {
    if (focusedIndex === null) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [focusedIndex]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    const value = target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Handle paste
    if (value.length > 1) {
      // Distribute pasted value across inputs
      const pastedData = value.split("").slice(0, number - index);
      const newOtp = [...otp];

      pastedData.forEach((digit, i) => {
        if (index + i < number) {
          newOtp[index + i] = digit;
        }
      });

      setOtp(newOtp);

      // Move focus to appropriate input
      const newFocusIndex = Math.min(index + pastedData.length, number - 1);
      inputRefs.current[newFocusIndex]?.focus();

      // Notify about change
      const newValue = newOtp.join("");
      onChange?.(newValue);

      // Check if complete
      const isAllFilled =
        newOtp.every((val) => val !== "") && newValue.length === number;
      setIsComplete(isAllFilled);
      if (isAllFilled) {
        onComplete?.(newValue);
      }

      return;
    }

    // Handle single digit input
    const newOtp = [...otp];
    newOtp[index] = value;

    // Update state
    setOtp(newOtp);

    // Move focus to next input if value is entered
    if (value && index < number - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Notify about change
    const newValue = newOtp.join("");
    onChange?.(newValue);

    // Check if complete
    const isAllFilled =
      newOtp.every((val) => val !== "") && newValue.length === number;
    setIsComplete(isAllFilled);
    if (isAllFilled) {
      onComplete?.(newValue);
    }
  };

  // Handle key down
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Move focus to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move focus on arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < number - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle focus
  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    index: number
  ) => {
    e.target.select();
    setFocusedIndex(index);
    setCursorVisible(true);
  };

  // Handle blur
  const handleBlur = () => {
    setFocusedIndex(null);
  };

  // Determine input state for each input
  const getInputState = (index: number) => {
    if (disabled) return "disabled";
    if (state === "error") return "error";
    if (isComplete) return "complete"; // Show complete state when all fields are filled
    if (focusedIndex === index)
      return otp[index] ? "typing" : "placeholderFocused";
    return otp[index] ? "filled" : "placeholderFocused";
  };

  // Create refs for inputs
  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  // Calculate cursor position based on input type and content
  const getCursorPosition = (index: number) => {
    if (!otp[index]) {
      return { left: "calc(50% - 7px)" };
    }

    const positionMap = {
      small: { withValue: "calc(50% - 7px)" },
      medium: { withValue: "calc(50% - 7px)" },
      large: { withValue: "calc(50% - 7px)" },
    };

    return {
      left: positionMap[size || "medium"].withValue,
    };
  };

  return (
    <div className="space-y-1">
      {showTitleText && (
        <label
          className={cn(
            titleVariants({ state: isComplete ? "complete" : state, size })
          )}
        >
          {titleText}
        </label>
      )}

      <div
        className={cn(
          otpContainerVariants({ size, divider }),
          className,
          "relative"
        )}
      >
        {Array.from({ length: number }).map((_, index) => (
          <div key={index} className="relative">
            <input
              ref={setInputRef(index)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={otp[index] || ""}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => handleFocus(e, index)}
              onBlur={handleBlur}
              disabled={disabled}
              autoFocus={autoFocus && index === 0}
              className={cn(
                otpInputVariants({
                  type,
                  size,
                  state: getInputState(index),
                }),
                type === "floating",
                getInputState(index) === "typing" && type === "floating",
                inputClassName
              )}
              aria-label={`Digit ${index + 1} of ${number}`}
            />
            {(!otp[index] || disabled) && (
              <div
                className={cn(
                  placeholderVariants({
                    state: getInputState(index),
                    size,
                  })
                )}
              >
                {placeholderText}
              </div>
            )}
            {focusedIndex === index && (
              <div
                className={cn(
                  cursorVariants({
                    size,
                    state: getInputState(index),
                  }),
                  cursorVisible ? "opacity-100" : "opacity-0"
                )}
                style={getCursorPosition(index)}
              />
            )}
          </div>
        ))}
      </div>

      {showHelperText && (
        <p
          className={cn(
            helperTextVariants({ state: isComplete ? "complete" : state, size })
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
