"use client"

import * as React from "react"
import { ChevronRight, ChevronDown } from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// import { cn } from "@/lib/utils"

// Define the types for our dropdown items
export type SubmenuTypeType = "default" | "collapsible"

// Base properties that all item types share
export interface BaseItem {
  id: string
}

// Individual item types with specific properties
export interface ItemType extends BaseItem {
  type: "item"
  label: string
  icon?: React.ReactNode
  image?: string
  href?: string
  onClick?: () => void
  shortcut?: string
  className?: string
  disabled?: boolean
}

export interface GroupType extends BaseItem {
  type: "group"
  label?: string
  items: ItemType[]
}

export interface LabelType extends BaseItem {
  type: "label"
  label: string
}

export interface SeparatorType extends BaseItem {
  type: "separator"
}

export interface SubmenuType extends BaseItem {
  type: "submenu"
  label: string
  icon?: React.ReactNode
  items: ItemType[]
  submenuType?: "default" | "collapsible"
}

// Union type for all possible item types
export type DropdownItemType = 
  | ItemType
  | GroupType
  | LabelType
  | SeparatorType
  | SubmenuType

export interface CustomDropDownProps {
  trigger?: React.ReactNode
  items: DropdownItemType[]
  align?: "start" | "end" | "center"
  className?: string
  contentClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  itemClassName?:string;
}

function CustomDropDown({
  trigger,
  items,
  align = "end",
  className = "",
  contentClassName = "w-56",
  itemClassName,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: CustomDropDownProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const [expandedSubmenus, setExpandedSubmenus] = React.useState<Record<string, boolean>>({})
  
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = setControlledOpen || setUncontrolledOpen

  const toggleSubmenu = (id: string) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Type guard functions
  const isItemType = (item: DropdownItemType): item is ItemType => item.type === "item"
  const isGroupType = (item: DropdownItemType): item is GroupType => item.type === "group"
  const isLabelType = (item: DropdownItemType): item is LabelType => item.type === "label"
  const isSeparatorType = (item: DropdownItemType): item is SeparatorType => item.type === "separator"
  const isSubmenuType = (item: DropdownItemType): item is SubmenuType => item.type === "submenu"

  // Render an item
  const renderItem = (item: ItemType,itemClassName?:string) => {
    const content = (
      <>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.image && (
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.label}
            className="mr-2 h-4 w-4 rounded-sm"
          />
        )}
        <span>{item.label}</span>
        {item.shortcut && (
          <span className="ml-auto text-xs tracking-widest opacity-60">
            {item.shortcut}
          </span>
        )}
      </>
    )

    if (item.href) {
      return (
        <DropdownMenuItem key={item.id} disabled={item.disabled} className={cn(itemClassName,className,"hover:cursor-pointer")} onClick={item.onClick}  asChild>
          <a href={item.href}>{content}</a>
        </DropdownMenuItem>
      )
    }

    return (
      <DropdownMenuItem 
        key={item.id} 
        onClick={item.onClick} 
        disabled={item.disabled}
        className={cn(itemClassName,className,"hover:cursor-pointer")}
      >
        {content}
      </DropdownMenuItem>
    )
  }

  // This function handles all types of dropdown content
  const renderDropdownItem = (item: DropdownItemType,itemClassName?:string) => {
    if (isItemType(item)) {
      return renderItem(item,itemClassName)
    }
    
    if (isGroupType(item)) {
      return (
        <DropdownMenuGroup key={item.id}>
          {item.label && <DropdownMenuLabel className="hover:cursor-pointer">{item.label}</DropdownMenuLabel>}
          {item.items.map(subItem => renderItem(subItem,itemClassName))}
        </DropdownMenuGroup>
      )
    }
    
    if (isLabelType(item)) {
      return <DropdownMenuLabel key={item.id} className="hover:cursor-pointer">{item.label}</DropdownMenuLabel>
    }
    
    if (isSeparatorType(item)) {
      return <DropdownMenuSeparator key={item.id} />
    }
    
    if (isSubmenuType(item)) {
      if (item.submenuType === "collapsible") {
        // Render collapsible submenu
        const isExpanded = expandedSubmenus[item.id] || false
        return (
          <div key={item.id}>
            <div
              className={cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm p-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-secondary-800 dark:text-secondary-200 dark:data-[variant=destructive]:text-destructive hover:cursor-pointer",itemClassName)}
              onClick={() => toggleSubmenu(item.id)}
            >
              {item.icon && <span className="mr-4">{item.icon}</span>}
              <span>{item.label}</span>
              <span className="ml-auto">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </span>
            </div>
            {isExpanded && (
              <div className=" mt-1 space-y-1">
                {item.items.map(subItem => renderItem(subItem,itemClassName))}
              </div>
            )}
          </div>
        )
      } else {
        // Render default submenu
        return (
          <DropdownMenuSub key={item.id}>
            <DropdownMenuSubTrigger className={cn(itemClassName,"hover:cursor-pointer")}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span>{item.label}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {item.items.map(subItem => renderItem(subItem,itemClassName))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )
      }
    }
    
    return null
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
        {trigger ? (
          <div className={className}>{trigger}</div>
        ) : (
          <Button variant="secondary" className={className}>Open Menu</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className={contentClassName}>
        {items.map(item => renderDropdownItem(item,itemClassName))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export {CustomDropDown}
