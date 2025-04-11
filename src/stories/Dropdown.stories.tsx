import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../ui/internal/DropDown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder Name",
    items: [
      { id: 1, label: "Item 1" },
      { id: 2, label: "Item 2", checked: true },
      { id: 3, label: "Item 3" },
      { id: 4, label: "Item 4" },
      { id: 5, label: "Item 5" },
    ],
  },
  render: (args) => (
    <div style={{ width: "250px" }}>
      <Dropdown {...args} />
    </div>
  ),
};

export const WithPreselectedItems: Story = {
  args: {
    placeholder: "Placeholder",
    items: [
      { id: 1, label: "Item 1", checked: false },
      { id: 2, label: "Item 2", checked: true },
      { id: 3, label: "Item 3", checked: false },
      { id: 4, label: "Item 4", checked: true },
      { id: 5, label: "Item 5", checked: false },
    ],
  },
  render: (args) => (
    <div style={{ width: "250px" }}>
      <Dropdown {...args} />
    </div>
  ),
};
