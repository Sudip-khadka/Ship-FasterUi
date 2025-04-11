// const CustomToaster = () => {
//   return (
//     <div className="absolute z-5 left-[428px] top-[325px] flex w-[577px] h-[250px] p-[30px] flex-col justify-center items-center gap- border-2 rounded-lg bg-[#FFF]">
//       <div className="flex flex-col items-center gap-8 self-stretch">
//         <div className=" upper flex flex-col items-center gap-[6px] self-stretch">
//           <p className="text-[var(--Generic-Black, #040404)] font-fustat text-2xl font-bold leading-normal tracking-[-0.48px]">
//             Do You Want to Keep This File for Cleaning?
//           </p>
//           <p className="text-[ #7E7E7E] text-center font-fustat text-base font-normal leading-normal tracking-[-0.32px]">
//             You've uploaded a file, but we haven't cleaned it yet. Would you
//             like to keep it for later cleaning or discard it now?
//           </p>
//         </div>
//         <div className="lower flex items-start gap-8 self-stretch">
//           <button className="flex w-[252px] px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#7F56D9]">
//             I’ll clean it later
//           </button>
//           <button className="flex h-[44px] px-4 justify-center items-center gap-2 flex-1 rounded-lg border border-[var(--Neutral-Rich-Black-400, #DDD)] bg-[var(--Generic-White, #FFF)]">
//             Discard file
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomToaster;

import React, { useEffect, useRef, MouseEvent } from "react";

// Define the prop types for the component
interface CustomToasterProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  position?: {
    left: string;
    top: string;
  };
}

const CustomToaster: React.FC<CustomToasterProps> = ({
  isOpen = false,
  onClose,
  title = "Do You Want to Keep This File for Cleaning?",
  description = "You've uploaded a file, but we haven't cleaned it yet. Would you like to keep it for later cleaning or discard it now?",
  primaryButtonText = "I'll clean it later",
  secondaryButtonText = "Discard file",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  position = { left: "428px", top: "325px" },
}) => {
  // Make sure to type the ref correctly
  const toasterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Handle click outside with proper typing
    const handleClickOutside = (event: MouseEvent | any) => {
      if (
        toasterRef.current &&
        !toasterRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add event listener when component mounts
    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div
      ref={toasterRef}
      className="absolute z-5 flex w-[577px] h-[250px] p-[30px] flex-col justify-center items-center gap- border-2 rounded-lg bg-[#FFF]"
      style={{ left: position.left, top: position.top }}
    >
      <div className="flex flex-col items-center gap-8 self-stretch">
        <div className="upper flex flex-col items-center gap-[6px] self-stretch">
          <p className="text-[var(--Generic-Black, #040404)] font-fustat text-2xl font-bold leading-normal tracking-[-0.48px]">
            {title}
          </p>
          <p className="text-[#7E7E7E] text-center font-fustat text-base font-normal leading-normal tracking-[-0.32px]">
            {description}
          </p>
        </div>
        <div className="lower flex items-start gap-8 self-stretch">
          <button
            className=" cursor-pointer flex w-[252px] px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#7F56D9] text-white h-[44px]"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </button>
          <button
            className="flex cursor-pointer h-[44px] px-4 justify-center items-center gap-2 flex-1 rounded-lg border border-[var(--Neutral-Rich-Black-400, #DDD)] bg-[var(--Generic-White, #FFF)]"
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomToaster;
