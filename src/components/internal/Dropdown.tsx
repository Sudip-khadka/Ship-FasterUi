import React, { useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, SearchIcon } from "lucide-react"; // ✅ Import icons
import TooltipComp from "./tooltipComp";

// ✅ Updated Item Type to Support Icons
interface DropdownItem {
  label: string;
  icon?: React.ReactNode; // Optional icon
}

interface DropdownProps {
  items: DropdownItem[]; // ✅ Updated to use objects with icons
  placeholder?: string;
  searchIcon?: React.ReactNode;
  onSelect?: (values: string[]) => void;
  defaultValue?: string;
  showSearch?: boolean;
  variant?: "multiselect" | "singleSelect";
  width: string;
  btnVariant:
    | "default"
    | "secondary"
    | "tertiary"
    | "link"
    | "destructive"
    | "outline";
  btnClassName?: string;
  itemsClassname?:string;
  tooltip?:string;
  tooltipClassName?:string;
}

const Dropdown: React.FC<DropdownProps> = ({
    tooltip,
    tooltipClassName,
    itemsClassname,
  btnVariant = "outline",
  width = "60rem",
  showSearch = false,
  variant = "singleSelect",
  items,
  placeholder = "Search...",
  btnClassName,
  searchIcon = <SearchIcon className="text-secondary-800 h-5 w-5" />,
  onSelect,
  defaultValue = "Select",
}) => {
  const [search, setSearch] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>(
    variant === "multiselect" ? [] : [defaultValue]
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()) // ✅ Filter based on label
  );

  // ✅ Handle selection logic
  const handleSelection = (item: DropdownItem) => {
    if (variant === "singleSelect") {
      setSelectedValues([item.label]);
      onSelect?.([item.label]);
    } else {
      setSelectedValues((prev) =>
        prev.includes(item.label) ? prev.filter((v) => v !== item.label) : [...prev, item.label]
      );
    }
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValues([]);
    setSearch("");
    onSelect?.([]);
  };
const [open,setOpen]=useState(false)
  return (
    <DropdownMenu>
      <div className="container flex items-center justify-center">
        <DropdownMenuTrigger className={`w-[${width}] outline-none p-0`} >
          <Button
            style={{ width: width }}
            className={btnClassName || "flex justify-between"}
            variant={btnVariant}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpen(prev=>!prev);
            }}
            endIcon={
            <ChevronDown
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />}
          >
            {selectedValues.length > 0 ? selectedValues.join(", ") : defaultValue}
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent style={{ width: width }}>
        {showSearch && (
          <>
            <div className="w-full flex items-center justify-between pr-2">
              <div className="w-full relative p-2 text-secondary-800" onClick={(e) => e.stopPropagation()}>
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  {searchIcon}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={placeholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-secondary-100 rounded-md outline-none focus:ring-1 focus:ring-secondary-200"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                />
              </div>
              {selectedValues.length > 0 && (
                <TooltipComp
                  btn={
                    <span className="ml-2 text-secondary-800 cursor-pointer" onClick={handleClearSelection}>
                      ✕
                    </span>
                  }
                  className={"hover:cursor-pointer"+ tooltipClassName}
                  content={
                    <p className="text-sm">
                      <strong>{tooltip}</strong>
                    </p>
                  }
                />
              )}
            </div>
            <DropdownMenuSeparator />
          </>
        )}
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) =>
            variant === "multiselect" ? (
              <DropdownMenuCheckboxItem className={itemsClassname} key={index} onSelect={(event) => event.preventDefault()}>
                <input
                  id={item.label}
                  type="checkbox"
                  checked={selectedValues.includes(item.label)}
                  onChange={() => handleSelection(item)}
                />
                 {/* ✅ Show icon if exists */}
                <label className="flex items-center" htmlFor={item.label}>{item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}</label>
              </DropdownMenuCheckboxItem>
            ) : (
              <DropdownMenuItem key={index} onClick={() => handleSelection(item)}>
                {item.icon && <span className="mr-2">{item.icon}</span>} {/* ✅ Show icon if exists */}
                <p className="text-secondary-800 font-normal leading-[18px] text-[1rem]">{item.label}</p>
              </DropdownMenuItem>
            )
          )
        ) : (
          <DropdownMenuItem disabled>No results found</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
