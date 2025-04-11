import {
  Bell,
  ChevronRight,
  PanelLeftIcon,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import React from "react";
import { Alert, AlertTitle } from "../ui/alert";
import { Rating } from "../ui/rating";

export type MenuItem = {
  title: string;
  url?: string;
  icon: React.ElementType;
  subItems?: MenuItem[];
};

export type MenuGroup = {
  id: number;
  label: string;
  items: MenuItem[];
};
export function SideBarContentWrapper({
  sideBarHeader,
  sideBarFooter,
  groupItems,
  collapsible,
  showSearchBar=false,
  side,
  logo,
  title,
  otherContent,
  variant = "sidebar",
  ...props
}: {
  sideBarHeader?:React.ReactElement;
  sideBarFooter?:React.ReactElement;
  title: string;
  logo: React.ReactNode;
  otherContent: React.ReactNode;
  showSearchBar?:boolean;
  groupItems: MenuGroup[];
  side: "left" | "right";
  collapsible: "offcanvas" | "icon" | "none";
  variant?: "sidebar" | "floating" | "inset";
}) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className={`h-screen flex gap-1`} {...props}>
      <Sidebar collapsible={collapsible} side={side} variant={variant}>
        <SidebarHeader>
        {sideBarHeader||<SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={"Dashboard"}
                className="flex items-center gap-[1rem]"
              >
                <span className="h-5 w-5">
                  {logo || <User className="w-5 h-5" />}
                </span>
                <h2 className="text-[16px] font-bold"> {title}</h2>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>}
        </SidebarHeader>
        <div
          className={`absolute ${
            side === "left"
              ? "right-[-20px]"
              : side === "right"
              ? "left-[-20px] rotate-180"
              : "hidden"
          } ${collapsible === "none" ? "hidden" : ""} top-[1%]`}
        >
          <SidebarTrigger className="rounded-full bg-secondary-50 text-secondary-900" />
        </div>
        <SidebarContent>
          {showSearchBar&&
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuButton
                  tooltip={"Search"}
                  className="p-0 hover:bg-secondary-900 active:bg-secondary-900"
                >
                  <SidebarInput
                    placeholder="Search"
                    className="w-full h-full"
                  />
                </SidebarMenuButton>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>}
          {groupItems.map((group) => (
            <SidebarGroup key={group.id}>
              {group.label && (
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) =>
                    item.subItems ? (
                      <Collapsible
                        asChild
                        key={item.title}
                        defaultOpen={false}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuItem key={subItem.title}>
                                <SidebarMenuButton>
                                  <subItem.icon />
                                  <span>{subItem.title}</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    ) : (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <span>
                            <item.icon />
                            <span>{item.title}</span>
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter>
          {sideBarFooter||<SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <PanelLeftIcon className="size-4" />
                Collapse
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>}
        </SidebarFooter>
      </Sidebar>

      <div
        className={`h-screen ${
          variant === "inset" && open ? "opacity-50" : "opacity-100"
        }`}
        onClick={() => {
          if (open && variant === "inset") {
            toggleSidebar();
          }
        }}
      >
        <div
          className={`flex-1 p-5 ${
            side === "right" && open
              ? "pr-[16rem]"
              : collapsible === "offcanvas"
              ? "pr-0"
              : "pr-[3rem]"
          }`}
        >
          <div className="flex flex-col gap-5 ">
            <div className="rating w-fit">
            <Rating value={2.5} readonly={false}/>
            </div>
            <Alert variant={"primary"} style={"accent"} className="w-[25rem]">
              <Bell />
              <AlertTitle>Hello</AlertTitle>
              <Button className="w-fit">Hello Guys</Button>
            </Alert>
          </div>
         
        </div>
      </div>
    </div>
  );
}
