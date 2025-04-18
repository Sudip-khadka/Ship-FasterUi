import { Meta, StoryObj } from "@storybook/react";
import PaginationComp from "@/components/internal/PaginationComp";
import "../index.css";
import { NuqsAdapter } from "nuqs/adapters/react";

const meta: Meta<typeof PaginationComp> = {
  title: "Components/CustomPagination",
  component: PaginationComp,
  tags: ["autodocs"],
  argTypes: {
    count: { control: { type: "number" }, defaultValue: 100 },
    size: { control: { type: "number" }, defaultValue: 10 },
    pageVariant: {
      control: { type: "radio" },
      options: ["default", "minimal", "outlined", "primary"],
      defaultValue: "default",
    },
    prevAndNextVariant: {
      control: { type: "radio" },
      options: ["default", "minimal", "outlined", "primary"],
      defaultValue: "default",
    },
    textVariant: {
      control: { type: "radio" },
      options: ["default", "minimal", "outlined", "primary"],
      defaultValue: "default",
    },
    // type: {
    //   control: { type: "radio" },
    //   options: [
    //     "compressed",
    //     "leftAndRight",
    //     "middle",
    //     "distributed",
    //     "hybrid",
    //   ],
      // defaultValue: "compressed",
    // },
    next: {
      control: "text",
    },
    previous: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationComp>;

/**
 * ✅ Uses NuqsAdapter at the root level (RECOMMENDED)
 */
export const BasicPagination: Story = {
    args: {
      textVariant: "primary",
      pageVariant: "primary",
      prevAndNextVariant: "primary",
      size: 10,
      count: 500,
      next: "https://collegeinfoapi/college/?page=2",
      previous: "https://collegeinfoapi/college/?page=2",
      // type: "hybrid",
      iconOnly: false,
      activeButtonClassName: "!bg-primary text-white",
      disabledButtonClassName: "bg-success-500",
      currentPage: 10,
      className: "",
      buttonClassName: "bg-primary-50"
    },
    decorators: [
      (Story) => (
        <NuqsAdapter>
          <Story />
        </NuqsAdapter>
      ),
    ],
  };
