import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof DropdownMenu> = {
    title: "Components/DropdownMenu",
    component: DropdownMenu,
    argTypes: {},
  };
  
  export default meta;

export const Basic = () => (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>New Tab</DropdownMenuItem>
      <DropdownMenuItem>New Window</DropdownMenuItem>
      <DropdownMenuItem>New Private Window</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Help</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
export const WithCheckboxes: StoryObj<typeof DropdownMenu> = {
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>
           
            <input id="checkbox1" type="checkbox"/>
            <label htmlFor="checkbox1"> Show Status Bar
            </label>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>
            <input id="checkbox" type="checkbox"/>
            <label htmlFor="checkbox">Show Activity Bar
            </label>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
          <input id="checkbox2" type="checkbox"/>
            <label htmlFor="checkbox2">Show Panel
            </label>
            
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };

  export const WithRadioItems: StoryObj<typeof DropdownMenu> = {
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuRadioItem value="light">
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };
  
  export const WithSubmenu: StoryObj<typeof DropdownMenu> = {
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              More Options
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Save As...</DropdownMenuItem>
              <DropdownMenuItem>Print</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };
  
  export const WithLabelsAndShortcuts: StoryObj<typeof DropdownMenu> = {
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>File</DropdownMenuLabel>
          <DropdownMenuItem>
            New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem>
            Undo <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Redo <DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };
  export const WithInput: StoryObj<typeof DropdownMenu> = {
    render: () => {
        const [search, setSearch] = React.useState("");
        const items = ["apple", "Ball", "Cat", "Dog", "Plane"];
        const filteredItems = items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
        const [selectedValue,setSelectedValue]=useState("Select");

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>{selectedValue}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <div style={{ padding: "8px" }} onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "4px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                            autoFocus
                        />
                    </div>
                    <DropdownMenuSeparator />
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <DropdownMenuItem key={index} onClick={()=>setSelectedValue(item)}>{item}</DropdownMenuItem>
                        ))
                    ) : (
                        <DropdownMenuItem disabled>No results found</DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    },
};
