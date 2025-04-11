"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ActionItem = {
  label: string;
  onClick?: () => void;
  href?: string;
};

export interface ActionDropdownProps {
  label: string;
  items: ActionItem[];
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
}

export const ActionDropdown = ({
  label = "Quick Action",
  items = [],
  className,
  buttonClassName,
  dropdownClassName,
}: ActionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Measure button width when component mounts or when window resizes
  useEffect(() => {
    const updateButtonWidth = () => {
      if (buttonRef.current) {
        setButtonWidth(buttonRef.current.offsetWidth);
      }
    };

    updateButtonWidth();
    window.addEventListener("resize", updateButtonWidth);

    return () => {
      window.removeEventListener("resize", updateButtonWidth);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={cn(
          "flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none",
          buttonClassName
        )}
      >
        {label}
        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div
          style={{ width: `${buttonWidth}px` }}
          className={cn(
            "absolute left-0 z-10 mt-1 origin-top-left rounded-md border border-gray-200 bg-white shadow-lg",
            dropdownClassName
          )}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                onClick={(e) => {
                  if (!item.href) e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                    setIsOpen(false);
                  }
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;
