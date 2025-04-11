import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/internal/CustomCheckbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: { type: "select" },
      options: ["square", "rounded", "circle"],
      description: "The shape of the checkbox",
      defaultValue: "square",
    },
    check: {
      control: "boolean",
      description: "Whether the checkbox is check",
      defaultValue: false,
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in an indeterminate state",
      defaultValue: false,
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default checkbox
export const Default: Story = {
  args: {
    shape: "square",
    check: false,
    indeterminate: false,
  },
};

// check checkbox
export const check: Story = {
  args: {
    shape: "square",
    check: true,
    indeterminate: false,
  },
};

// Indeterminate checkbox
export const Indeterminate: Story = {
  args: {
    shape: "square",
    check: false,
    indeterminate: true,
  },
};

// Different shapes
export const Shapes: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      <Checkbox {...args} shape="square" />
      <Checkbox {...args} shape="rounded" />
      <Checkbox {...args} shape="circle" />
    </div>
  ),
};

// Comprehensive example with all variations
export const AllVariations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <div className="font-medium">Uncheck</div>
        <Checkbox shape="square" check={false} />
        <Checkbox shape="rounded" check={false} />
        <Checkbox shape="circle" check={false} />
      </div>
      <div className="space-y-2">
        <div className="font-medium">check</div>
        <Checkbox shape="square" check={true} />
        <Checkbox shape="rounded" check={true} />
        <Checkbox shape="circle" check={true} />
      </div>
      <div className="space-y-2">
        <div className="font-medium">Indeterminate</div>
        <Checkbox shape="square" indeterminate={true} />
        <Checkbox shape="rounded" indeterminate={true} />
        <Checkbox shape="circle" indeterminate={true} />
      </div>
    </div>
  ),
};

// Shape variations
export const ShapeVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="mb-2 font-medium">Square</div>
        <div className="flex space-x-4">
          <Checkbox shape="square" check={false} />
          <Checkbox shape="square" check={true} />
          <Checkbox shape="square" indeterminate={true} />
        </div>
      </div>
      <div>
        <div className="mb-2 font-medium">Rounded</div>
        <div className="flex space-x-4">
          <Checkbox shape="rounded" check={false} />
          <Checkbox shape="rounded" check={true} />
          <Checkbox shape="rounded" indeterminate={true} />
        </div>
      </div>
      <div>
        <div className="mb-2 font-medium">Circle</div>
        <div className="flex space-x-4">
          <Checkbox shape="circle" check={false} />
          <Checkbox shape="circle" check={true} />
          <Checkbox shape="circle" indeterminate={true} />
        </div>
      </div>
    </div>
  ),
};
