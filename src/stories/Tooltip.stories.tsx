// Tooltip.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/internal/Tooltip";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    color: {
      control: "select",
      options: ["White", "Primary", "Neutral"],
      description: "Tooltip background color",
    },
    direction: {
      control: "select",
      options: ["Top", "Right", "Bottom", "Left"],
      description: "Direction of the tooltip relative to the trigger element",
    },
    pointerPosition: {
      control: "select",
      options: ["Leading", "Middle", "Trailing", "Off"],
      description: "Position of the tooltip pointer",
    },
    description: {
      control: "boolean",
      description: "Whether to show description text",
    },
    showTitle: {
      control: "boolean",
      description: "Whether to show title",
    },
    showAction: {
      control: "boolean",
      description: "Whether to show action button",
    },
    showClose: {
      control: "boolean",
      description: "Whether to show close button",
    },
    title: {
      control: "text",
      description: "Tooltip title text",
    },
    descriptionText: {
      control: "text",
      description: "Description text content",
    },
    actionText: {
      control: "text",
      description: "Action button text",
    },
    isOpen: {
      control: "boolean",
      description: "Control tooltip visibility externally",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable tooltip component with various positioning and styling options.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    color: "White",
    direction: "Bottom",
    pointerPosition: "Leading",
    description: true,
    showTitle: true,
    showAction: true,
    showClose: true,
    title: "Tooltip Title",
    descriptionText: "This is a description of what this tooltip explains.",
    actionText: "Action",
    isOpen: true,
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    color: "Primary",
    title: "Primary Tooltip",
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    color: "Neutral",
    title: "Neutral Tooltip",
  },
};

export const TopDirection: Story = {
  args: {
    ...Default.args,
    direction: "Top",
    title: "Top Direction",
  },
};

export const RightDirection: Story = {
  args: {
    ...Default.args,
    direction: "Right",
    title: "Right Direction",
  },
};

export const LeftDirection: Story = {
  args: {
    ...Default.args,
    direction: "Left",
    title: "Left Direction",
  },
};

export const MiddlePointer: Story = {
  args: {
    ...Default.args,
    pointerPosition: "Middle",
    title: "Middle Pointer",
  },
};

export const TrailingPointer: Story = {
  args: {
    ...Default.args,
    pointerPosition: "Trailing",
    title: "Trailing Pointer",
  },
};

export const NoPointer: Story = {
  args: {
    ...Default.args,
    pointerPosition: "Off",
    title: "No Pointer",
  },
};

export const TitleOnly: Story = {
  args: {
    ...Default.args,
    description: false,
    showAction: false,
    title: "Title Only Tooltip",
  },
};

export const WithoutClose: Story = {
  args: {
    ...Default.args,
    showClose: false,
    title: "No Close Button",
  },
};

export const WithoutAction: Story = {
  args: {
    ...Default.args,
    showAction: false,
    title: "No Action Button",
  },
};

export const MinimalTooltip: Story = {
  args: {
    color: "White",
    direction: "Bottom",
    pointerPosition: "Middle",
    description: false,
    showTitle: true,
    showAction: false,
    showClose: false,
    title: "Simple Tooltip",
    isOpen: true,
    children: <span className="underline cursor-help">Hover for info</span>,
  },
};

// Interactive example with controlled state
export const ControlledTooltip: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(!isOpen)} className="mb-8">
          {isOpen ? "Hide" : "Show"} Tooltip
        </Button>

        <div className="mt-12">
          <Tooltip
            {...args}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onAction={() => alert("Action clicked!")}
          >
            <Button variant="outline">Controlled Tooltip</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
  args: {
    ...Default.args,
    isOpen: undefined, // Let the story control this
  },
};

// Showing multiple tooltips with different configurations
export const TooltipShowcase: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-3 gap-8">
        <Tooltip
          color="White"
          direction="Top"
          title="White Top Tooltip"
          isOpen={true}
        >
          <Button>White Top</Button>
        </Tooltip>

        <Tooltip
          color="Primary"
          direction="Bottom"
          pointerPosition="Middle"
          title="Primary Bottom Tooltip"
          isOpen={true}
        >
          <Button>Primary Bottom</Button>
        </Tooltip>

        <Tooltip
          color="Neutral"
          direction="Right"
          pointerPosition="Trailing"
          title="Neutral Right Tooltip"
          isOpen={true}
        >
          <Button>Neutral Right</Button>
        </Tooltip>

        <Tooltip
          color="White"
          direction="Left"
          pointerPosition="Leading"
          description={false}
          showAction={false}
          title="Minimal Left Tooltip"
          isOpen={true}
        >
          <Button>Minimal Left</Button>
        </Tooltip>

        <Tooltip
          color="Primary"
          direction="Top"
          pointerPosition="Off"
          showClose={false}
          title="No Pointer Tooltip"
          isOpen={true}
        >
          <Button>No Pointer</Button>
        </Tooltip>

        <Tooltip
          color="Neutral"
          direction="Bottom"
          title="Action Only"
          description={false}
          showAction={true}
          actionText="Click Me"
          isOpen={true}
        >
          <Button>Action Only</Button>
        </Tooltip>
      </div>
    );
  },
};
