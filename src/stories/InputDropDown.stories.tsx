import { InputDropDown } from "@/components/internal/dropdowns/inputDropDown/InputDropDown"; // Adjust the import path as needed
import { Meta, StoryObj } from "@storybook/react";
import { ChevronsDown } from "lucide-react";

// Meta configuration for Storybook
export default {
  title: "Components/InputDropDown",
  component: InputDropDown,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    multiSelect: { control: "boolean" },
    scrollable: { control: "boolean" },
    maxHeight: { control: "text" },
  },
} as Meta<typeof InputDropDown>;

const data = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export const Default: StoryObj<typeof InputDropDown> = {
  args: {
    placeholder: "Select item...",
    data,
    onChange: (value: string|string[]) => {
      console.log(value);
    },
  },
};

export const MultiSelect: StoryObj<typeof InputDropDown> = {
  args: {
    multiSelect: true,
    placeholder: "Select items...",
    data,
    onChange: (value: string | string[]) => {
      console.log(value);
    },
  },
};

export const Scrollable: StoryObj<typeof InputDropDown> = {
  args: {
    scrollable: true,
    maxHeight: "150px",
    multiSelect: true,
    data,
    onChange: (value: string | string[]) => {
      console.log(value);
    },
  },
};

export const WithEndIcon: StoryObj<typeof InputDropDown> = {
  args: {
    endIcon: <ChevronsDown className="h-4 w-4 opacity-50" />,
    data,
    onChange: (value: string | string[]) => {
      console.log(value);
    },
  },
};
