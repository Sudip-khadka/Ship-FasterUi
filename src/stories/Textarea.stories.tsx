import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/internal/textfield/TextField";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    success: { control: "boolean" },
    showCounter: { control: "boolean" },
    showHelperText: { control: "boolean" },
    showLabel: { control: "boolean" },
    maxLength: { control: "number" },
    rows: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This is a helper text",
    rows: 4,
  },
};

export const WithCounter: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "Maximum 100 characters",
    maxLength: 100,
    showCounter: true,
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This field is required",
    error: true,
    rows: 4,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "Message saved successfully",
    success: true,
    rows: 4,
    value: "This is a successful message",
  },
};

export const Disabled: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    helperText: "This field is disabled",
    disabled: true,
    rows: 4,
  },
};

export const NoLabel: Story = {
  args: {
    showLabel: false,
    placeholder: "Type your message here",
    helperText: "No label is shown",
    rows: 4,
  },
};

export const NoHelperText: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here",
    showHelperText: false,
    rows: 4,
  },
};

export const CustomStyling: Story = {
  args: {
    label: "Custom Styled Textarea",
    placeholder: "Type your message here",
    helperText: "With custom styling",
    className: "font-medium",
    containerClassName: "max-w-lg",
    labelClassName: "text-blue-600",
    helperTextClassName: "italic",
    rows: 4,
  },
};

// Story that demonstrates controlled usage
export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Example of using the Textarea as a controlled component. In your actual implementation, you would manage the state.",
      },
    },
  },
  render: (args) => (
    <Textarea
      {...args}
      value="This is a controlled textarea"
      onChange={(e) => console.log("Value changed:", e.target.value)}
    />
  ),
};

// Story with placeholder example text
export const FilledWithText: Story = {
  args: {
    label: "Feedback",
    placeholder: "Type your feedback here",
    helperText: "Tell us what you think",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    rows: 5,
    maxLength: 200,
    showCounter: true,
  },
};

// Story showing responsive behavior
export const Responsive: Story = {
  args: {
    label: "Responsive Textarea",
    placeholder: "This textarea adjusts to its container",
    helperText: "Try resizing the window",
    rows: 4,
    containerClassName: "w-full md:w-2/3 lg:w-1/2",
  },
};
