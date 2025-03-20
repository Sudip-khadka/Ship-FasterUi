import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "@/components/internal/Dropdown";
import { Bird, Code, Globe, Rocket } from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    variant: {
      control: "radio",
      options: ["singleSelect", "multiselect"],
      description: "Choose between single select and multi-select",
    },
    showSearch: {
      control: "boolean",
      description: "Enable or disable search input",
    },
    btnVariant: {
      control: "radio",
      options: ["default", "secondary", "tertiary", "link", "destructive", "outline"],
      description: "Button variant styles",
    },
    width: {
      control: "text",
      description: "Set the dropdown width (e.g., '20rem', '50%')",
    },
    btnClassName: {
      control: "text",
      description: "Additional Tailwind classes for the button",
    },
    placeholder: {
      control: "text",
      description: "Placeholder for search input",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value before user selects anything",
    },
    onSelect: {
      action: "selected",
      description: "Callback function when an item is selected",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// ✅ Single Select with Icons
export const SingleSelect: Story = {
  args: {
    items: [
      { label: "World", icon: <Globe /> },
      { label: "Rocket", icon: <Rocket /> },
      { label: "Code", icon: <Code /> },
    ],
    variant: "singleSelect",
    showSearch: false,
    width: "20rem",
    btnVariant: "outline",
    btnClassName: "",
    defaultValue: "Select an option",
  },
};

// ✅ Multi-Select with Search (Fixed)
export const MultiSelectWithSearch: Story = {
  args: {
    items: [
      { label: "Bird" ,icon:<Bird/>},
      { label: "Vue" },
      { label: "Angular" },
      { label: "Svelte" },
      { label: "Next.js" },
    ],

    variant: "multiselect",
    showSearch: true,
    width: "25rem",
    btnVariant: "secondary",
    btnClassName: "",
    defaultValue: "Select frameworks",
    tooltip: "Clear All"
  },
};

// ✅ Large Dropdown with Custom Button
export const LargeDropdown: Story = {
  args: {
    items: [
      { label: "USA" },
      { label: "Canada" },
      { label: "UK" },
      { label: "Germany" },
      { label: "Australia" },
    ],

    variant: "singleSelect",
    showSearch: true,
    width: "30rem",
    btnVariant: "default",
    btnClassName: "",
    defaultValue: "Select a country",
    tooltip: "Clear",
    itemsClassname: "",
    placeholder: "Select Your Country"
  },
};

// ✅ Dropdown with Custom Placeholder
export const CustomPlaceholder: Story = {
  args: {
    items: [
      { label: "Football" },
      { label: "Basketball" },
      { label: "Tennis" },
      { label: "Cricket" },
      { label: "Hockey" },
    ],
    variant: "singleSelect",
    showSearch: true,
    width: "22rem",
    btnVariant: "outline",
    btnClassName: "",
    defaultValue: "Pick a sport as\n",
    placeholder: "Type to search...",
  },
};

// ✅ Empty Dropdown with No Results
export const NoResults: Story = {
  args: {
    items: [],
    variant: "singleSelect",
    showSearch: true,
    width: "20rem",
    btnVariant: "destructive",
    btnClassName: "",
    defaultValue: "Nothing here",
    placeholder: "Search...",
  },
};
