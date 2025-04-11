import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownItem {
  id?: string | number;
  label?: string;
  checked?: boolean;
}

export interface DropdownProps {
  label?: string;
  placeholder: string;
  items: DropdownItem[];
  onChange?: (selectedItems: DropdownItem[]) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  items,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>(
    items.filter((item) => item.checked)
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: DropdownItem) => {
    const updatedItems = selectedItems.some((i) => i.id === item.id)
      ? selectedItems.filter((i) => i.id !== item.id)
      : [...selectedItems, { ...item, checked: true }];

    setSelectedItems(updatedItems);
    onChange?.(updatedItems);
  };

  return (
    <div className="w-full max-w-xl font-sans">
      {/* Dropdown trigger */}
      <div
        className="flex justify-between items-center px-4 py-3 border border-gray-200 rounded-md bg-white cursor-pointer shadow-sm"
        onClick={handleToggle}
      >
        <div className="text-gray-500">{placeholder}</div>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="mt-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          {items.map((item) => {
            const isSelected = selectedItems.some((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50
                  ${isSelected ? "bg-gray-100" : "bg-white"}
                `}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
