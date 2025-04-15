import {
  CustomDropDown,
  DropdownItemType,
} from "@/components/internal/dropdowns/customDropdown/CustomDropDown";
import { Avatar } from "@/components/ui/avatar";
import { Settings, User, CreditCard, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

function Example() {
  const dropdownItems: DropdownItemType[] = [
    {
      id: "profile",
      type: "item",
      label: "Profile",
      icon: <User className="h-4 w-4" />,
      //   onClick: () => alert("Profile clicked"),
      href: "/profile",
    },
    {
      id: "billing",
      type: "item",
      label: "Billing",
      icon: <CreditCard className="h-4 w-4" />,
      //   shortcut: "⌘B",
    },
    {
      id: "separator-1",
      type: "separator",
    },
    {
      id: "team",
      type: "submenu",
      label: "Team",
      icon: <Settings className="h-4 w-4" />,
      items: [
        {
          id: "new-team",
          type: "item",
          label: "New Team",
          icon: <Plus className="h-4 w-4" />,
        },
        {
          id: "invite-users",
          type: "item",
          label: "Invite Users",
        },
      ],
    },
    {
      id: "collapsible",
      type: "submenu",
      label: "Collapsible Menu",
      submenuType: "collapsible",
      items: [
        {
          id: "item1",
          type: "item",
          label: "Item 1",
        },
        {
          id: "item2",
          type: "item",
          label: "Item 2",
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className="p-8 w-full flex items-center
      justify-center"
    >
      <CustomDropDown
        items={dropdownItems}
        trigger={
          <span className="flex gap-2 items-end w-fit">
            <Avatar
              size="2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fIxHT7pNFMiBfPoFSYGJqYL5QyncODgSLkNuDGNs5vn-swTPmUQtZERlKjN7bi8Q2KpiF3gAong0VRRiDzHga-jXjRyD6ULF3Qd4KDz8"
              type="image"
              status="none"
              shape="circle"
              notification
              notificationCount={2}
              onClick={() => alert("you have 2 notifications")}
            />{" "}
            <ChevronDown
              className={`transition-transform duration-500 ease-in-out ${
                open ? " rotate-180" : ""
              }`}
            />
          </span>
        }
        align="end"
        contentClassName="w-64"
        itemClassName="px-4 py-2 hover:bg-gray-100"
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}

export default Example;
