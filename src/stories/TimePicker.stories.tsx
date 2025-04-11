import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from "../components/internal/TimePicker";

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["Stepper", "Dropdown", "Input", "Timer"],
      description: "The type of time picker to display",
    },
    period: {
      control: "radio",
      options: ["AM", "PM"],
      description: "The initial period (AM/PM)",
    },
    hours: {
      control: "text",
      description: "The initial hours value",
    },
    minutes: {
      control: "text",
      description: "The initial minutes value",
    },
    seconds: {
      control: "text",
      description: "The initial seconds value",
    },
    showSeconds: {
      control: "boolean",
      description: "Whether to show seconds",
    },
    onChange: {
      action: "changed",
      description: "Callback when the time changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Stepper: Story = {
  args: {
    type: "Stepper",
    period: "AM",
    hours: "09",
    minutes: "30",
    seconds: "00",
    showSeconds: true,
  },
};

export const StepperPM: Story = {
  args: {
    ...Stepper.args,
    period: "PM",
  },
};

export const Dropdown: Story = {
  args: {
    ...Stepper.args,
    type: "Dropdown",
  },
};

export const DropdownPM: Story = {
  args: {
    ...Dropdown.args,
    period: "PM",
  },
};

export const Input: Story = {
  args: {
    ...Stepper.args,
    type: "Input",
  },
};

export const InputPM: Story = {
  args: {
    ...Input.args,
    period: "PM",
  },
};

export const Timer: Story = {
  args: {
    ...Stepper.args,
    type: "Timer",
  },
};

export const TimerPM: Story = {
  args: {
    ...Timer.args,
    period: "PM",
  },
};

export const WithoutSeconds: Story = {
  args: {
    ...Stepper.args,
    showSeconds: false,
  },
};

export const CustomTime: Story = {
  args: {
    ...Stepper.args,
    hours: "11",
    minutes: "45",
    seconds: "30",
  },
};
