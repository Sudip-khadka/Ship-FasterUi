import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, ChevronLeftIcon,  Code, Ham, Home, Inbox,  Search, User } from "lucide-react";
import {
  SidebarProvider,
} from "../components/ui/sidebar";
import { SideBarContentWrapper } from "@/components/internal/sidebarComp";
import { IconLogo } from "./Dialog.stories";

export default {
  title: "UI/Sidebar",
  component: SideBarContentWrapper,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Controls whether the sidebar is open by default",
      defaultValue: true,
    },
    collapsible: {
      control: "select",
      options: ["offcanvas", "icon", "none"],
      description: "Sidebar collapse behavior",
      defaultValue: "offcanvas",
    },
    side: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the sidebar",
      defaultValue: "left",
    },
    variant: { 
      control: "select",
      options: ["sidebar", "floating", "inset"],
      description: "Sidebar variant type",
      defaultValue: "sidebar",
    },
  },
} as Meta;

type StoryProps = {
  defaultOpen: boolean;
  collapsible: "offcanvas" | "icon" | "none";
  side: "left" | "right";
  variant:"sidebar" | "floating" | "inset"
};
const groupItems = [
  {
    id: 1,
    label: "Application",
    items: [
      { title: "Home", url: "#", icon: Home },
      { title: "Inbox", url: "#", icon: Inbox },
      { title: "Calendar", url: "#", icon: Calendar },
      { title: "Search", url: "#", icon: Search },
    ],
  },
  {
    id: 2,
    label: "User",
    items: [
      {
        title: "Profile",
        url: "#",
        icon: User,
        subItems: [
          { title: "View Profile", url: "#", icon: User },
          { title: "Edit Profile", url: "#", icon: Code },
        ],
      },
      { title: "Settings", url: "#", icon: Inbox },
      { title: "Calendar", url: "#", icon: Calendar },
    ],
  },
  {
    id: 3,
    label: "Extras",
    items: [
      {
        title: "Tools",
        icon: Ham,
        subItems: [
          { title: "Code Editor", icon: Code },
          { title: "Terminal", icon: ChevronLeftIcon },
        ],
      },
      { title: "Help", url: "#", icon: Search },
    ],
  },
];
const otherContent=<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos rem tempore repellendus. Obcaecati, corporis laudantium. Deleniti, sapiente aut. Distinctio, modi cum sunt nemo enim quas esse quae perspiciatis velit.</p>
export const Customizable: StoryObj<StoryProps> = {
  render: ({ defaultOpen, collapsible, side,variant }) => (
    <SidebarProvider defaultOpen={defaultOpen}>
       <SideBarContentWrapper logo={<IconLogo/>} title="Phoenix" collapsible={collapsible} side={side} variant={variant} groupItems={groupItems} otherContent={otherContent}/>
    </SidebarProvider>
  ),
};
