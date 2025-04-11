import CustomDropDown,{DropdownItemType} from "@/components/internal/dropdowns/CustomDropDown"
import {
    LogOut,
    Info,
    Settings,
    User,
    CreditCard,
    PlusCircle,
    UserPlus,
    Cloud,
    Laptop,
    Smartphone,
    Tablet,
    Home,
    GitBranch,
  } from "lucide-react"
import { useState } from "react"
const complexItems :DropdownItemType[]= [
    { id: "1", type: "label", label: "My Account" },
    {
      id: "2",
      type: "item",
      label: "Profile",
      icon: <User className="h-4 w-4" />,
      shortcut: "⇧⌘P",
    },
    {
      id: "3",
      type: "item",
      label: "Billing",
      icon: <CreditCard className="h-4 w-4" />,
      shortcut: "⌘B",
    },
    { id: "4", type: "separator" },
    {
      id: "5",
      type: "group",
      label: "Team",
      items: [
        {
          id: "5-1",
          type: "item",
          label: "New Team",
          icon: <PlusCircle className="h-4 w-4" />,
          shortcut: "⌘T",
        },
        {
          id: "5-2",
          type: "item",
          label: "Invite Users",
          icon: <UserPlus className="h-4 w-4" />,
        },
      ],
    },
    { id: "6", type: "separator" },
    {
      id: "7",
      type: "submenu",
      label: "Devices",
      icon: <Laptop className="h-4 w-4" />,
      submenuType: "collapsible",
      items: [
        {
          id: "7-1",
          type: "item",
          label: "Desktop",
          icon: <Laptop className="h-4 w-4" />,
        },
        {
          id: "7-2",
          type: "item",
          label: "Mobile",
          icon: <Smartphone className="h-4 w-4" />,
        },
      ],
    },
    {
      id: "8",
      type: "submenu",
      label: "Integrations",
      icon: <Cloud className="h-4 w-4" />,
      items: [
        {
          id: "8-1",
          type: "item",
          label: "GitHub",
          icon: <GitBranch className="h-4 w-4" />,
        },
        {
          id: "8-2",
          type: "item",
          label: "Vercel",
          image: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
        },
      ],
    },
  ]
//   const data:DropdownItemType[] = [
//     { id: "1", type: "item", label: "test" }]

  // Example with collapsible submenu
  const collapsibleItems:DropdownItemType[] = [
    { id: "1", type: "item", label: "Dashboard", icon: <Home className="h-4 w-4" /> },
    { id: "2", type: "item", label: "Settings", icon: <Settings className="h-4 w-4" /> },
    { id: "3", type: "separator" },
    {
      id: "4",
      type: "submenu",
      label: "Devices",
      icon: <Laptop className="h-4 w-4" />,
      submenuType: "collapsible",
      items: [
        {
          id: "4-1",
          type: "item",
          label: "Desktop",
          icon: <Laptop className="h-4 w-4" />,
        },
        {
          id: "4-2",
          type: "item",
          label: "Mobile",
          icon: <Smartphone className="h-4 w-4" />,
        },
        {
          id: "4-3",
          type: "item",
          label: "Tablet",
          icon: <Tablet className="h-4 w-4" />,
        },
      ],
    },
    {
      id: "5",
      type: "submenu",
      label: "Regular Submenu",
      icon: <Cloud className="h-4 w-4" />,
      submenuType: "default",
      items: [
        {
          id: "5-1",
          type: "item",
          label: "Option 1",
          icon: <Info className="h-4 w-4" />,
        },
        {
          id: "5-2",
          type: "item",
          label: "Option 2",
          icon: <Settings className="h-4 w-4" />,
        },
      ],
    },
    { id: "6", type: "separator" },
    { id: "7", type: "item", label: "Logout", icon: <LogOut className="h-4 w-4" /> },
  ]
function Dropdowntexting() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        
        <h1 className="text-2xl font-bold">Dropdown Testing</h1>
        <p>Explictly Define type of your data to remove type issue i.e IMport</p>
        <code>import CustomDropDown, {'{'} DropdownItemType,GroupType,ItemType,LabelType,SeparatorType,SubmenuType {'}'} from "@/components/internal/dropdowns/CustomDropDown"</code>
      <CustomDropDown open={open}
          onOpenChange={setOpen} items={complexItems}/>
      <CustomDropDown  items={collapsibleItems}/>
      {/* <CustomDropDown items={data}/> */}
    </div>
  )
}

export default Dropdowntexting
