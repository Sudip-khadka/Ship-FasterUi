import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
export type TooltipColor = "White" | "Primary" | "Neutral";
export type TooltipDirection = "Top" | "Right" | "Bottom" | "Left";
export type PointerPosition = "Leading" | "Middle" | "Trailing" | "Off";

export interface ToolTipProps {
  color?: TooltipColor;
  direction?: TooltipDirection;
  pointerPosition?: PointerPosition;
  description?: boolean;
  showTitle?: boolean;
  showAction?: boolean;
  showClose?: boolean;
  title?: string;
  descriptionText?: string;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
  className?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
}

const Tooltip = ({
  color = "White",
  direction = "Bottom",
  pointerPosition = "Leading",
  description = true,
  showTitle = true,
  showAction = true,
  showClose = true,
  title = "place a Tooltip title",
  descriptionText = "Tooltips are text labels that appear when the user hovers over or focuses on an element.",
  actionText = "Button CTA",
  onAction,
  onClose,
  className,
  isOpen: controlledIsOpen,
  children,
}:ToolTipProps) => {
  const [isOpen, setIsOpen] = useState(controlledIsOpen || false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  const handleMouseEnter = () => {
    if (controlledIsOpen === undefined) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Only hide tooltip on mouse leave if no close button is present
    if (controlledIsOpen === undefined && !showClose) {
      setIsOpen(false);
    }
    // If showClose is true, we don't hide the tooltip on mouse leave
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const getTooltipWidth = () => {
    if (!description && !showAction) {
      return "w-[190px]";
    }
    return "w-[325px]";
  };

  const getBackgroundColor = () => {
    switch (color) {
      case "Primary":
        return "bg-green-500 text-white";
      case "Neutral":
        return "bg-gray-700 text-white";
      case "White":
      default:
        return "bg-white text-gray-800";
    }
  };

  const getPointerPositionClasses = () => {
    if (pointerPosition === "Off") return "";

    const baseClasses = "absolute w-3 h-3 rotate-45";

    switch (direction) {
      case "Top":
        return cn(baseClasses, "bottom-[-6px]", {
          "left-6": pointerPosition === "Leading",
          "left-1/2 -translate-x-1/2": pointerPosition === "Middle",
          "right-6": pointerPosition === "Trailing",
        });
      case "Right":
        return cn(baseClasses, "left-[-6px]", {
          "top-6": pointerPosition === "Leading",
          "top-1/2 -translate-y-1/2": pointerPosition === "Middle",
          "bottom-6": pointerPosition === "Trailing",
        });
      case "Bottom":
        return cn(baseClasses, "top-[-6px]", {
          "left-6": pointerPosition === "Leading",
          "left-1/2 -translate-x-1/2": pointerPosition === "Middle",
          "right-6": pointerPosition === "Trailing",
        });
      case "Left":
        return cn(baseClasses, "right-[-6px]", {
          "top-6": pointerPosition === "Leading",
          "top-1/2 -translate-y-1/2": pointerPosition === "Middle",
          "bottom-6": pointerPosition === "Trailing",
        });
      default:
        return "";
    }
  };

  const getTooltipPositionClasses = () => {
    switch (direction) {
      case "Top":
        return "bottom-full mb-2";
      case "Right":
        return "left-full ml-2";
      case "Bottom":
        return "top-full mt-2";
      case "Left":
        return "right-full mr-2";
      default:
        return "top-full mt-2";
    }
  };

  // Get the order of the title and close button based on direction
  const getTitleCloseFlexDirection = () => {
    return direction === "Left" ? "flex-row-reverse" : "flex-row";
  };

  return (
    <div className="relative inline-block" ref={triggerRef}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      {isOpen && (
        <div
          ref={tooltipRef}
          className={cn(
            "absolute z-50 rounded-lg shadow-lg",
            getTooltipWidth(),
            getTooltipPositionClasses(),
            getBackgroundColor(),
            className
          )}
        >
          {/* Pointer */}
          {pointerPosition !== "Off" && (
            <div
              className={cn(getPointerPositionClasses(), getBackgroundColor())}
            />
          )}

          <div className="relative p-4 flex flex-col h-full">
            {/* Title and Close Button */}
            <div
              className={cn(
                "flex justify-between items-start w-full",
                getTitleCloseFlexDirection()
              )}
            >
              {showTitle && (
                <h3
                  className={cn(
                    "font-medium text-sm",
                    direction === "Left" ? "ml-auto" : ""
                  )}
                >
                  {title}
                </h3>
              )}
              {showClose && (
                <button
                  onClick={handleClose}
                  className={cn(
                    "text-current cursor-pointer opacity-70 hover:opacity-100 transition-opacity",
                    direction === "Left" ? "mr-auto" : "ml-auto"
                  )}
                  aria-label="Close tooltip"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {description && (
              <p className="text-sm mt-2 opacity-80">{descriptionText}</p>
            )}

            {showAction && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant={"outline"}
                  onClick={onAction}
                  className={`bg-${color} text-${
                    color === "White" ? "gray" : "white"
                  } border-${color === "White" ? "gray" : color} `}
                >
                  {actionText}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export {Tooltip}