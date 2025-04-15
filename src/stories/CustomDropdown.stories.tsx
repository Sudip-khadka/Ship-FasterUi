import { Meta, StoryObj } from "@storybook/react";
import { CustomDropDown, DropdownItemType } from "@/components/internal/dropdowns/customDropdown/CustomDropDown"; 
import { Home, Settings, Laptop, Cloud, PlusCircle, User } from "lucide-react";
// import CustomDropDown, {'{'} DropdownItemType,GroupType,ItemType,LabelType,SeparatorType,SubmenuType {'}'} from "@/components/internal/dropdowns/CustomDropDown

//important ✅ explictly define the type of your items or else yoy might have type errors 


// Define sample items for the dropdown
const basicItems: DropdownItemType[] = [
  {
    id: "1",
    type: "item",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "2",
    type: "item",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    id: "3",
    type: "separator",
  },
  {
    id: "4",
    type: "item",
    label: "Logout",
    icon: <User className="h-4 w-4" />,
  },
];

const submenuItems: DropdownItemType[] = [
  {
    id: "1",
    type: "submenu",
    label: "Devices",
    icon: <Laptop className="h-4 w-4" />,
    submenuType: "collapsible",
    items: [
      {
        id: "1-1",
        type: "item",
        label: "Desktop",
        icon: <Laptop className="h-4 w-4" />,
      },
      {
        id: "1-2",
        type: "item",
        label: "Mobile",
        icon: <Laptop className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "2",
    type: "submenu",
    label: "Cloud Services",
    icon: <Cloud className="h-4 w-4" />,
    submenuType: "default",
    items: [
      {
        id: "2-1",
        type: "item",
        label: "GitHub",
        icon: <Laptop className="h-4 w-4" />,
      },
      {
        id: "2-2",
        type: "item",
        label: "Vercel",
        icon: <Laptop className="h-4 w-4" />,
      },
    ],
  },
];

const groupItems: DropdownItemType[] = [
  {
    id: "1",
    type: "group",
    label: "Team",
    items: [
      {
        id: "1-1",
        type: "item",
        label: "New Team",
        icon: <PlusCircle className="h-4 w-4" />,
      },
      {
        id: "1-2",
        type: "item",
        label: "Invite Users",
        icon: <User className="h-4 w-4" />,
      },
    ],
  },
];

export default {
  title: "Components/CustomDropDown",
  component: CustomDropDown,
  
} as Meta<typeof CustomDropDown>;

export const Basic: StoryObj<typeof CustomDropDown> = {
    // const [open,setOpen]=useState(false)
  args: {
    items: basicItems,
    trigger: <button>Open Menu</button>,
    align:"start"
},
};

export const WithSubmenus: StoryObj<typeof CustomDropDown> = {
    args: {
        items: submenuItems,
        trigger: <button>Open Menu with Submenus</button>,
        align:"start"
    },
};

export const CollapsibleSubmenu: StoryObj<typeof CustomDropDown> = {
    args: {
        items: submenuItems,
        trigger: <button>Open Menu with Collapsible Submenu</button>,
        align:"start"
    },
};

export const WithGroups: StoryObj<typeof CustomDropDown> = {
    args: {
        items: groupItems,
        trigger: <button>Open Menu with Groups</button>,
        align:"start"
  },
};

export const FullMenu: StoryObj<typeof CustomDropDown> = {
  args: {
    items: [
      ...basicItems,
      ...submenuItems,
      ...groupItems,
    ],
    trigger: <button className="bg-primary-200 p-3 rounded-lg text-primary">Open Full Menu</button>,
    // itemClassName:"text-destructive-500 "
  },
};
