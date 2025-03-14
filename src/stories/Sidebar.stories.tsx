import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar";
import {
  PanelLeftIcon,
  HomeIcon,
  Home,
  Inbox,
  Calendar,
  Search,
  ChevronDown,
  ChevronRight,
  Ham,
  Code,
  User,
  ChevronLeftIcon,
  SearchIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
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
  },
} as Meta;

type StoryProps = {
  defaultOpen: boolean;
  collapsible: "offcanvas" | "icon" | "none";
  side: "left" | "right";
};
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
];
export const Customizable: StoryObj<StoryProps> = {
  render: ({ defaultOpen, collapsible, side }) => (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex h-screen">
        <Sidebar collapsible={collapsible} side={side}>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={"Dashboard"}>
                   <span className="h-5 w-5">
                   <User className="h-5 w-5" />
                   </span>
                   <h2 className="text-[16px] font-bold"> Dashboard</h2>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <div
            className={`absolute ${
              side === "left" ? "right-[-20px]" : "left-[-20px] rotate-180"
            } top-[1%]`}
          >
            <SidebarTrigger className="rounded-full bg-secondary-50 text-secondary-900" />
          </div>

          <SidebarContent>
          <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu >
                    <SidebarMenuButton tooltip={"Search"} className="p-0 hover:bg-secondary-900 active:bg-secondary-900">
            <SidebarInput placeholder="Search" className="w-full h-full"/>
                    </SidebarMenuButton>
                 </SidebarMenu></SidebarGroupContent></SidebarGroup>      
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <span>
                          <item.icon />
                          <span>{item.title}</span>
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
           <SidebarGroup>
            <SidebarGroupLabel>Testing</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <span>
                            <ChevronLeftIcon/>
                            <span>Codding</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible
                asChild
                defaultOpen={false}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Ham />
                      <span>Dropdown</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Code />
                        <span>Hello World</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            </SidebarGroupContent>
           </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <PanelLeftIcon className="size-4" />
                  Collapse
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 p-6">
          <p>Main content goes here.</p>
        </div>
      </div>
    </SidebarProvider>
  ),
};
