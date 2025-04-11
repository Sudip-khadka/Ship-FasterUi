"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Enhanced data structure with optional fields
export interface DataItem {
  value: string
  label: string
  secondaryLabel?: string
  image?: string
  icon?: React.ReactNode
}

// const datas: DataItem[] = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

interface ComboboxProps {
  className?: string
  dropDownTrigger?: React.ReactNode
  multiSelect?: boolean
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  data?: DataItem[]
  onChange?: (value: string | string[]) => void
  scrollable?: boolean
  maxHeight?: string;
  endIcon?:React.ReactNode;
}

export function InputDropDown({
  className,
  dropDownTrigger,
  multiSelect = false,
  placeholder = "Select item...",
  searchPlaceholder = "Search item...",
  emptyMessage = "No item found.",
  data ,
  endIcon,
  onChange,
  scrollable = false,
  maxHeight = "120px",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValues, setSelectedValues] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    let newValues: string[] = []

    if (multiSelect) {
      // For multi-select: toggle the selected value
      if (selectedValues.includes(currentValue)) {
        newValues = selectedValues.filter((value) => value !== currentValue)
      } else {
        newValues = [...selectedValues, currentValue]
      }
    } else {
      // For single-select: replace the selected value
      newValues = selectedValues.includes(currentValue) ? [] : [currentValue]
      setOpen(false)
    }

    setSelectedValues(newValues)

    // Call onChange with the appropriate value format
    if (onChange) {
      onChange(multiSelect ? newValues : newValues[0] || "")
    }
  }

  const clearItem = (valueToRemove: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    const newValues = selectedValues.filter((value) => value !== valueToRemove)
    setSelectedValues(newValues)

    if (onChange) {
      onChange(multiSelect ? newValues : newValues[0] || "")
    }
  }

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedValues([])

    if (onChange) {
      onChange(multiSelect ? [] : "")
    }
  }

  const getSelectedItem = (value: string) => {
    return data?.find((item) => item.value === value)
  }

  // Render an item with all its optional elements
  const renderItem = (item: DataItem) => {
    return (
      <div className="flex items-center gap-2">
        {item.image && (
          <div className="flex-shrink-0 h-6 w-6 overflow-hidden rounded-full">
            <img
              src={item.image || "/placeholder.svg"}
              alt=""
              width={24}
              height={24}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {item.icon && <div className="flex-shrink-0">{item.icon}</div>}

        {/* <div className="flex items-center gap-2">
        </div> */}
          <span className="text-sm text-secondary-800 font-medium">{item.label}</span>
          {item.secondaryLabel && <span className="text-xs text-secondary-400 line-clamp-1">{item.secondaryLabel}</span>}
      </div>
    )
  }

  return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {!dropDownTrigger ? (
            <Button
              variant="tertiary"
              role="combobox"
            //   aria-expanded={open}
              className={cn("w-[350px] h-auto min-h-10 px-3 py-2 relative", className, 
                scrollable && multiSelect ? "overflow-x-auto no-scrollbar":"flex-wrap"

              )}
            >
              <div className="flex flex-grow items-start w-full ">   
                <div
                  className={cn(
                    "flex w-full items-center gap-1 scrollbar-none",
                    scrollable?"overflow-x-auto no-scrollbar ":"flex-wrap",
                    selectedValues.length>3&&scrollable&&"px-[40px]" // Added scrollbar-none here
                    // scrollable && multiSelect && selectedValues.length > 0 && "overflow-x-auto",
                  )}
                  style={scrollable && multiSelect && selectedValues.length > 0 ? { maxHeight } : {}}
                >
                  {selectedValues.length === 0 ? (
                    <span className="">{placeholder}</span>
                  ) : (
                    <>
                      {selectedValues.map((value) => {
                        const item = getSelectedItem(value)
                        if (!item) return null

                        return (
                          <div
                            key={value}
                            className="flex items-center gap-1 bg-muted rounded-sm px-1.5 py-0.5 text-sm"
                          >
                            <div className="flex items-center gap-1">
                              {item.image && (
                                <div className="flex-shrink-0 h-4 w-4 overflow-hidden rounded-full">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              )}

                              {item.icon && <div className="flex-shrink-0 scale-75">{item.icon}</div>}

                              <span>{item.label}</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => clearItem(value, e)}
                              className="ml-1 rounded-full hover:bg-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                              aria-label={`Remove ${item.label}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        )
                      })}
                    </>
                  )}
                </div>
              </div>

              {/* Fixed elements at the end */}
              <div className="sticky right-0 bg-white flex items-center gap-2">
                {selectedValues.length > 1 && (
                  <Button
                    type="button"
                    variant={"tertiary"}
                    onClick={clearAll}
                    className="text-xs text-secondary-700 p-2 bg-secondary-200 rounded-xl hover:bg-secondary-300 hover:text-secondary-800"
                  >
                    Clear all
                  </Button>
                )}
                {endIcon??<ChevronsUpDown className="h-4 w-4 opacity-50" />}
              </div>
            </Button>
          ) : (
            <div className="cursor-pointer relative">
              {dropDownTrigger}
              {selectedValues.length >= 1 && (
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-1 mt-2 border p-2 rounded-lg relative",
                    scrollable && "overflow-x-auto",
                    className,
                  )}
                  style={scrollable ? { maxHeight, paddingRight: "80px" } : { paddingRight: "80px" }}
                >
                  {selectedValues.map((value) => {
                    const item = getSelectedItem(value)
                    if (!item) return null

                    return (
                      <div key={value} className="flex items-center gap-1 bg-muted rounded-sm px-1.5 py-0.5 text-sm">
                        <div className="flex items-center gap-1">
                          {item.image && (
                            <div className="flex-shrink-0 h-4 w-4 overflow-hidden rounded-full">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt=""
                                width={16}
                                height={16}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}

                          {item.icon && <div className="flex-shrink-0 scale-75">{item.icon}</div>}

                          <span>{item.label}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => clearItem(value, e)}
                          className="ml-1 rounded-full hover:bg-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          aria-label={`Remove ${item.label}`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    )
                  })}

                  {/* Fixed elements at the end */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {selectedValues.length > 1 && (
                      <button
                        type="button"
                        onClick={clearAll}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent className={cn("w-[350px] p-0", className)} align="start">
          <Command className="p-2">
            <CommandInput
              placeholder={searchPlaceholder}
              value={inputValue}
              onValueChange={setInputValue}
              className="h-9 "
              wrapperClassName="bg-secondary-100 text-secondary-800 p-2 rounded-sm gap-2"
            />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup className="px-0">
                {data?.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {multiSelect ? (
                        <div className="flex items-center gap-2 flex-1">
                          <div className="flex h-4 w-4 items-center justify-center rounded border border-primary flex-shrink-0">
                            {selectedValues.includes(item.value) && <Check className="h-3 w-3" />}
                          </div>
                          {renderItem(item)}
                        </div>
                      ) : (
                        <>
                          {renderItem(item)}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4 flex-shrink-0",
                              selectedValues.includes(item.value) ? "opacity-100" : "opacity-0",
                            )}
                          />
                        </>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
  )
}

