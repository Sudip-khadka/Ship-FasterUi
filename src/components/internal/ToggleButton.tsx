
import type React from "react";
import { useState, useEffect } from "react";

export type ToggleButtonProps = {
  color?: "Primary" | "Red" | "Green";
  state?: "Default" | "Hovered" | "Pressed" | "Disabled";
  size?: "small" | "medium" | "large";
  active?: boolean;
  onChange?: (isActive: boolean) => void;
  id?: string;
  className?: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const {
    color = "Primary",
    state = "Default",
    size = "medium",
    active = false,
    onChange = () => {},
    id,
    className,
  } = props;

  const [isActive, setIsActive] = useState<boolean>(active);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleToggle = (): void => {
    if (state === "Disabled") return;
    const newState = !isActive;
    setIsActive(newState);
    onChange(newState);
  };

  const handleMouseDown = (): void => {
    if (state === "Disabled") return;
    setIsPressed(true);
  };

  const handleMouseUp = (): void => {
    if (state === "Disabled") return;
    setIsPressed(false);
  };

  const handleMouseEnter = (): void => {
    if (state === "Disabled") return;
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    if (state === "Disabled") return;
    setIsHovered(false);
    setIsPressed(false);
  };

  const getBackgroundColor = (): string => {
    if (state === "Disabled") {
      if (isActive) {
        switch (color) {
          case "Red":
            return "bg-red-200";
          case "Green":
            return "bg-green-200";
          default:
            return "bg-blue-200";
        }
      }
      return "bg-gray-200";
    }

    if (!isActive) return "bg-gray-200";

    switch (color) {
      case "Red":
        return "bg-red-500";
      case "Green":
        return "bg-green-500";
      default:
        return "bg-blue-500";
    }
  };

  const getKnobShadow = (): string => {
    // Apply shadow based on component state
    if (state === "Pressed" || isPressed) {
      return "shadow-[0_0_0_8px_rgba(0,0,0,0.1)]";
    } else if (state === "Hovered" || isHovered) {
      return "shadow-[0_0_0_4px_rgba(0,0,0,0.05)]";
    }
    return "shadow-sm";
  };

  // Get opacity based on state
  const getOpacity = (): string => {
    if (state === "Disabled") return "opacity-50";
    return "";
  };

  // Get cursor style
  const getCursor = (): string => {
    if (state === "Disabled") return "cursor-not-allowed";
    return "cursor-pointer";
  };

  // Get size-based classes
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "w-10 h-6",
          knob: "w-[15px]  h-[15px] top-[4px] left-[3px]",
          transform: isActive ? "translateX(20px)" : "translateX(0)",
        };
      case "large":
        return {
          container: "w-14 h-8",
          knob: "w-6 h-6 top-1 left-1",
          transform: isActive ? "translateX(24px)" : "translateX(0)",
        };
      default:
        return {
          container: "w-12 h-7",
          knob: "w-5 h-5 top-[4px] left-1",
          transform: isActive ? "translateX(21px)" : "translateX(0)",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div
      className={`relative ${
        sizeClasses.container
      } rounded-full ${getBackgroundColor()} ${getOpacity()} ${getCursor()} transition-colors duration-200 ${
        className || ""
      }`}
      onClick={handleToggle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="switch"
      aria-checked={isActive}
      id={id}
    >
      <div
        className={`absolute ${
          sizeClasses.knob
        } bg-white rounded-full ${getKnobShadow()} transition-all duration-200 ease-in-out`}
        style={{
          transform: sizeClasses.transform,
        }}
      />
    </div>
  );
};

export default ToggleButton;
