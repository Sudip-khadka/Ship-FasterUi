import React, { useState, useEffect, useRef } from "react";
import { Check, X, AlertTriangle, Info } from "lucide-react";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
  position?: ToastPosition;
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
  progressClassName?: string;
}

// Define the color configurations for each variant
const variantConfig: Record<
  ToastVariant,
  {
    iconBg: string;
    textColor: string;
    progressColor: string;
    gradientColors: {
      start: string;
      end: string;
    };
    icon: React.ReactNode;
    svgPath: string;
  }
> = {
  success: {
    iconBg: "bg-[#18A23F]",
    textColor: "text-[#22C55E]",
    progressColor: "bg-green-500",
    gradientColors: {
      start: "rgba(0, 237, 81, 0.12)",
      end: "rgba(0, 237, 123, 0.00)",
    },
    icon: <Check className="text-white" />,
    svgPath: "M20 6L9 17L4 12",
  },
  error: {
    iconBg: "bg-[#DC2626]",
    textColor: "text-[#DC2626]",
    progressColor: "bg-red-500",
    gradientColors: {
      start: "rgba(220, 38, 38, 0.12)",
      end: "rgba(220, 38, 38, 0.00)",
    },
    icon: <X className="text-white" />,
    svgPath: "M18 6L6 18M6 6l12 12",
  },
  warning: {
    iconBg: "bg-[#F59E0B]",
    textColor: "text-[#F59E0B]",
    progressColor: "bg-yellow-500",
    gradientColors: {
      start: "rgba(245, 158, 11, 0.12)",
      end: "rgba(245, 158, 11, 0.00)",
    },
    icon: <AlertTriangle className="text-white" />,
    svgPath:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  info: {
    iconBg: "bg-[#3B82F6]",
    textColor: "text-[#3B82F6]",
    progressColor: "bg-blue-500",
    gradientColors: {
      start: "rgba(59, 130, 246, 0.12)",
      end: "rgba(59, 130, 246, 0.00)",
    },
    icon: <Info className="text-white" />,
    svgPath: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const Toast: React.FC<ToastProps> = ({
  message,
  variant = "success",
  duration = 5000,
  onClose,
  position = "top-right",
  className = "",
  iconClassName = "",
  containerClassName = "",
  progressClassName = "",
}) => {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setIsVisible(false);
            onClose?.();
            return 0;
          }
          return prevProgress - 100 / (duration / 10);
        });
      }, 10);
    };

    // Only start the timer if not paused
    if (!isPaused) {
      startTimer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [duration, onClose, isPaused]);

  if (!isVisible) return null;

  const { iconBg, textColor, progressColor, gradientColors, svgPath } =
    variantConfig[variant];

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={`
        fixed ${positionClasses[position]} z-50
        ${containerClassName}
      `}
    >
      <div
        className={`flex w-[343px] flex-col items-start rounded-lg bg-[#fff] shadow-lg overflow-hidden relative ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="toast flex py-3 px-4 justify-end items-start gap-2 self-stretch">
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`h-6 w-6 flex items-center justify-center rounded-full ${iconBg} ${iconClassName}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d={svgPath}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`flex-1 flex font-sans ${textColor} text-sm font-normal leading-normal tracking-tight`}
            >
              {message}
            </div>
          </div>
          <div
            className="ellipse h-[212px] w-[212px] absolute left-[-74px] top-[-87px]"
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, ${gradientColors.start} 0%, ${gradientColors.end} 100%)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="60"
              viewBox="0 0 138 60"
              fill="none"
            >
              <circle
                cx="32"
                cy="41"
                r="106"
                fill={`url(#paint0_radial_${variant})`}
                fillOpacity="0.12"
              />
              <defs>
                <radialGradient
                  id={`paint0_radial_${variant}`}
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32 41) rotate(90) scale(106)"
                >
                  <stop
                    stopColor={
                      gradientColors.start.replace("rgba(", "").split(",")[0]
                    }
                  />
                  <stop
                    offset="1"
                    stopColor={
                      gradientColors.start.replace("rgba(", "").split(",")[0]
                    }
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              onClose?.();
            }}
            className="h-[18px] w-[18px] aspect-square cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.75 5.25L5.25 12.75M5.25 5.25L12.75 12.75"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="h-1 w-full transition-height duration-200"
          style={{
            transformOrigin: "left",
            transform: `scaleX(${progress / 100})`,
            transition: "transform 0.1s linear",
          }}
        >
          <div className={`h-full ${progressColor} ${progressClassName}`}></div>
        </div>
      </div>
    </div>
  );
};

export {Toast};
