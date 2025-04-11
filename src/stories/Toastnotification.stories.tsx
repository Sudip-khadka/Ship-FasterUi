import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/internal/ToastNotification";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    position: {
      control: { type: "select" },
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    duration: {
      control: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "This is a default toast notification",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    message: "Operation completed successfully!",
    variant: "success",
  },
};

export const Error: Story = {
  args: {
    message: "An error occurred while processing your request.",
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    message: "Warning: This action cannot be undone.",
    variant: "warning",
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "This is a very long message that will demonstrate how the toast handles text overflow and wrapping. It contains multiple sentences to show the text management capabilities of the component.",
    variant: "info",
  },
};

export const CustomDuration: Story = {
  args: {
    message: "This toast will disappear after 10 seconds",
    variant: "info",
    duration: 10000,
  },
};

export const AllPositions: Story = {
  render: () => {
    const positions: Array<
      "top-left" | "top-right" | "bottom-left" | "bottom-right"
    > = ["top-left", "top-right", "bottom-left", "bottom-right"];

    return (
      <div>
        {positions.map((position) => (
          <Toast
            key={position}
            message={`Toast at ${position} position`}
            position={position}
            variant={position.includes("top") ? "success" : "warning"}
          />
        ))}
      </div>
    );
  },
};

export const InteractiveToast: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);

    const showToast = () => {
      setIsVisible(true);
    };

    const handleClose = () => {
      setIsVisible(false);
    };

    return (
      <div>
        <button
          onClick={showToast}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Toast
        </button>
        {isVisible && (
          <Toast
            message="This is an interactive toast that can be manually triggered"
            variant="info"
            onClose={handleClose}
          />
        )}
      </div>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    message: "Toast with custom styling",
    variant: "warning",
    className: "border-4 border-purple-500",
    iconClassName: "text-purple-700",
    containerClassName: "shadow-2xl",
    progressClassName: "bg-purple-500",
  },
};
