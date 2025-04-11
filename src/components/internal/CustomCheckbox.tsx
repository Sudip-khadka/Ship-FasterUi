import React, { useState, HTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  shape?: "square" | "rounded" | "circle";
  check?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  shape = "square",
  check = false,
  indeterminate = false,
  onChange,
  className,
  ...rest
}) => {
  const [interactionState, setInteractionState] = useState<
    "default" | "hover" | "pressed"
  >("default");

  const isChecked = !!check;
  const isIndeterminate = !!indeterminate;
  const isDisabled = rest["aria-disabled"] === true;

  const handleClick = () => {
    if (isDisabled) return;
    const newChecked = isIndeterminate ? true : !isChecked;
    onChange?.(newChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const newChecked = isIndeterminate ? true : !isChecked;
      onChange?.(newChecked);
    }
  };

  const handleMouseEnter = () => {
    if (!isDisabled) setInteractionState("hover");
  };

  const handleMouseLeave = () => {
    if (!isDisabled) setInteractionState("default");
  };

  const handleMouseDown = () => {
    if (!isDisabled) setInteractionState("pressed");
  };

  const handleMouseUp = () => {
    if (!isDisabled) setInteractionState("hover");
  };

  // Container styles for outer glow effect
  let containerClasses = "relative ";
  if (interactionState === "pressed" && !isDisabled) {
    containerClasses +=
      "after:content-[''] after:absolute after:-inset-1 after:rounded-lg after:bg-green-100 after:opacity-70 after:z-0 ";
  }

  // Base styles
  let classes =
    "relative z-10 flex items-center justify-center w-6 h-6 flex-shrink-0 border ";

  // Shape
  classes +=
    shape === "circle"
      ? "rounded-full "
      : shape === "rounded"
      ? "rounded "
      : "rounded-none ";

  // Style based on state
  if (isDisabled) {
    // Disabled states
    classes += "bg-green-200 border-green-200 text-white cursor-not-allowed ";
  } else {
    classes += "bg-green-600 border-green-600 text-white ";

    // Interaction states
    if (interactionState === "hover") {
      classes += "bg-green-500 border-green-500 ";
    } else if (interactionState === "pressed") {
      classes += "bg-green-700 border-green-700 ";
    }

    classes += "cursor-pointer ";
  }

  return (
    <div className={containerClasses}>
      <div
        role="checkbox"
        aria-checked={isIndeterminate ? "mixed" : isChecked}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : 0}
        className={`${classes}${className ? " " + className : ""}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3801 7.08532C18.6091 7.29524 18.6245 7.65106 18.4146 7.88007L10.1646 16.8801C10.0609 16.9932 9.91558 17.059 9.76219 17.0623C9.6088 17.0657 9.46071 17.0062 9.35222 16.8977L5.60222 13.1477C5.38255 12.9281 5.38255 12.5719 5.60222 12.3522C5.82189 12.1326 6.17805 12.1326 6.39772 12.3522L9.7323 15.6868L17.5853 7.11988C17.7952 6.89087 18.1511 6.8754 18.3801 7.08532Z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {(isIndeterminate || (!isChecked && !isIndeterminate)) && (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </div>
    </div>
  );
};
// import React, { HTMLAttributes } from "react";

// interface CheckboxProps
//   extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
//   shape?: "square" | "rounded" | "circle";
//   state?: "default" | "hover" | "pressed" | "disabled";
//   check?: boolean;
//   indeterminate?: boolean;
//   onChange?: (checked: boolean) => void;
// }

// export const Checkbox: React.FC<CheckboxProps> = ({
//   shape = "square",
//   state = "default",
//   check = false,
//   indeterminate = false,
//   onChange,
//   className,
//   ...rest
// }) => {
//   const isChecked = !!check;
//   const isIndeterminate = !!indeterminate;
//   const isDisabled = state === "disabled";

//   // Base styling
//   let classes =
//     "flex items-center justify-center w-6 h-6 flex-shrink-0 border ";

//   // Shape
//   if (shape === "square") {
//     classes += "rounded-none ";
//   } else if (shape === "rounded") {
//     classes += "rounded ";
//   } else if (shape === "circle") {
//     classes += "rounded-full ";
//   }

//   // Visual state styles
//   if (isDisabled) {
//     classes +=
//       isChecked || isIndeterminate
//         ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed "
//         : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed ";
//   } else {
//     if (isChecked || isIndeterminate) {
//       classes += "bg-green-600 border-green-600 text-white ";
//       if (state === "hover") {
//         classes += "bg-green-500 border-green-500 ";
//       } else if (state === "pressed") {
//         classes += "bg-green-700 border-green-700 ";
//       }
//     } else {
//       classes += "bg-white border-gray-400 text-transparent ";
//       if (state === "hover") {
//         classes += "border-green-600 ";
//       } else if (state === "pressed") {
//         classes += "bg-green-50 border-green-600 ";
//       }
//     }

//     if (state === "pressed") {
//       classes += "filter [filter:drop-shadow(0_0_0_rgba(225,243,229,0.7))] ";
//     } else {
//       classes += "cursor-pointer ";
//     }
//   }

//   // Click handler
//   const handleClick = () => {
//     if (isDisabled) return;
//     const newChecked = isIndeterminate ? true : !isChecked;
//     onChange?.(newChecked);
//   };

//   // Keyboard support
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     if (isDisabled) return;
//     if (e.key === " " || e.key === "Enter") {
//       e.preventDefault();
//       const newChecked = isIndeterminate ? true : !isChecked;
//       onChange?.(newChecked);
//     }
//   };

//   return (
//     <div
//       role="checkbox"
//       aria-checked={isIndeterminate ? "mixed" : isChecked}
//       aria-disabled={isDisabled || undefined}
//       tabIndex={isDisabled ? -1 : 0}
//       className={`${classes}${className ? " " + className : ""}`}
//       onClick={handleClick}
//       onKeyDown={handleKeyDown}
//       {...rest}
//     >
//       {(isChecked || isIndeterminate) &&
//         (isIndeterminate && !isChecked ? (
//           // Indeterminate line
//           <svg
//             viewBox="0 0 24 24"
//             className="w-4 h-4"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//           >
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//         ) : (
//           // Check mark SVG (your provided version)
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             className="w-4 h-4"
//           >
//             <rect width="24" height="24" fill="none" />
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M18.3801 7.08532C18.6091 7.29524 18.6245 7.65106 18.4146 7.88007L10.1646 16.8801C10.0609 16.9932 9.91558 17.059 9.76219 17.0623C9.6088 17.0657 9.46071 17.0062 9.35222 16.8977L5.60222 13.1477C5.38255 12.9281 5.38255 12.5719 5.60222 12.3522C5.82189 12.1326 6.17805 12.1326 6.39772 12.3522L9.7323 15.6868L17.5853 7.11988C17.7952 6.89087 18.1511 6.8754 18.3801 7.08532Z"
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         ))}
//     </div>
//   );
// };

// "use client";

// import * as React from "react";
// import { Check, Minus } from "lucide-react";
// import { cn } from "@/lib/utils";

// export type CheckboxShape = "square" | "rounded" | "circle";
// export type CheckboxState = "default" | "hovered" | "pressed" | "disabled";

// export interface CustomCheckboxProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//   shape?: CheckboxShape;
//   state?: CheckboxState;
//   checked?: boolean;
//   indeterminate?: boolean;
//   className?: string;
// }

// const Checkbox = React.forwardRef<HTMLInputElement, CustomCheckboxProps>(
//   (
//     {
//       shape = "square",
//       state = "default",
//       checked = false,
//       indeterminate = false,
//       className,
//       ...props
//     },
//     ref
//   ) => {
//     const checkboxRef = React.useRef<HTMLInputElement>(null);

//     React.useImperativeHandle(
//       ref,
//       () => checkboxRef.current as HTMLInputElement
//     );

//     React.useEffect(() => {
//       if (checkboxRef.current) {
//         checkboxRef.current.indeterminate = indeterminate;
//       }
//     }, [indeterminate]);

//     // Determine border radius based on shape
//     const shapeStyles = {
//       square: "rounded-none",
//       rounded: "rounded-md",
//       circle: "rounded-full",
//     };

//     // Determine background color based on state and checked/indeterminate
//     const getBgColor = () => {
//       if (state === "disabled") {
//         return checked || indeterminate ? "bg-[#18A23F]" : "bg-gray-100";
//       }
//       return checked || indeterminate ? "bg-[#18A23F]" : "bg-white";
//     };

//     // Determine border color based on state
//     const getBorderColor = () => {
//       if (state === "disabled") {
//         return "border-gray-200";
//       }
//       return checked || indeterminate ? "border-green-500" : "border-gray-300";
//     };

//     // Determine hover effects
//     const getHoverStyles = () => {
//       if (state === "disabled") return "";
//       if (state === "hovered") {
//         return checked || indeterminate
//           ? "bg-[#138232]"
//           : "ring-2 ring-gray-200";
//       }
//       return "";
//     };

//     // Determine pressed effects
//     const getPressedStyles = () => {
//       if (state === "disabled") return "";
//       if (state === "pressed") {
//         return checked || indeterminate
//           ? "ring-1 ring-[#B4E1C1] ring-inset"
//           : "ring-2 ring-gray-300 ring-inset";
//       }
//       return "";
//     };

//     return (
//       <div className="relative flex h-6 w-6 items-center justify-center">
//         <input
//           type="checkbox"
//           ref={checkboxRef}
//           checked={checked}
//           disabled={state === "disabled"}
//           className="sr-only"
//           {...props}
//         />
//         <div
//           className={cn(
//             "flex h-6 w-6 items-center justify-center border transition-all",
//             shapeStyles[shape],
//             getBgColor(),
//             getBorderColor(),
//             getHoverStyles(),
//             getPressedStyles(),
//             state === "disabled"
//               ? "opacity-70 cursor-not-allowed"
//               : "cursor-pointer",
//             className
//           )}
//           onClick={() => {
//             if (state !== "disabled" && checkboxRef.current) {
//               // Trigger the native checkbox click which will fire the onChange event
//               checkboxRef.current.click();
//             }
//           }}
//         >
//           {checked && !indeterminate && (
//             <Check className="h-4 w-4 text-white" />
//           )}
//           {indeterminate && <Minus className="h-4 w-4 text-white" />}
//         </div>
//       </div>
//     );
//   }
// );

// Checkbox.displayName = "Checkbox";

// export { Checkbox };
