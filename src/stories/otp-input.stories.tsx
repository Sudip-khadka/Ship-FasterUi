import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OTPInput } from "../components/ui/OtpInput";

const meta = {
  title: "Form/OTPInput",
  component: OTPInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    number: {
      control: { type: "range", min: 3, max: 12, step: 1 },
      description: "Number of input fields to display",
    },
    value: {
      control: "text",
      description: "Current OTP value",
    },
    type: {
      control: "select",
      options: ["boxed", "lined", "floating"],
      description: "Visual style of the input fields",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the input fields",
    },
    state: {
      control: "select",
      options: ["placeholderFocused", "typing", "filled", "disabled", "error"],
      description: "Current state of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    autoFocus: {
      control: "boolean",
      description: "Whether the first input should be auto-focused on mount",
    },
    divider: {
      control: "boolean",
      description: "Whether to display dividers between inputs",
    },
    showTitleText: {
      control: "boolean",
      description: "Whether to display the title text",
    },
    titleText: {
      control: "text",
      description: "Title text to display",
    },
    showHelperText: {
      control: "boolean",
      description: "Whether to display helper text",
    },
    helperText: {
      control: "text",
      description: "Helper text to display",
    },
    placeholderText: {
      control: "text",
      description: "Placeholder text for empty inputs",
    },
  },
  args: {
    number: 6,
    value: "",
    type: "boxed",
    size: "medium",
    state: "filled",
    disabled: false,
    autoFocus: false,
    divider: false,
    showTitleText: true,
    titleText: "Input verification code",
    showHelperText: true,
    helperText: "Enter the 6-digit code sent to your phone",
    placeholderText: "0",
  },
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 6,
    value: "",
  },
};

export const Filled: Story = {
  args: {
    number: 6,
    value: "123456",
  },
};

export const PartiallyFilled: Story = {
  args: {
    number: 6,
    value: "123",
  },
};

export const Error: Story = {
  args: {
    number: 6,
    value: "123",
    state: "error",
    helperText: "Invalid verification code",
  },
};

export const Disabled: Story = {
  args: {
    number: 6,
    value: "123",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    number: 6,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    number: 6,
    size: "large",
  },
};

export const Lined: Story = {
  args: {
    number: 6,
    type: "lined",
  },
};

export const Floating: Story = {
  args: {
    number: 6,
    type: "floating",
  },
};

export const CustomLength: Story = {
  args: {
    number: 4,
    titleText: "Enter 4-digit PIN",
    helperText: "Enter the 4-digit PIN",
  },
};

export const NoHelperText: Story = {
  args: {
    showHelperText: false,
  },
};

export const NoTitleText: Story = {
  args: {
    showTitleText: false,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholderText: "•",
  },
};

// Creating a template to demonstrate real-time interaction
const InteractiveTemplate: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [completedValue, setCompletedValue] = React.useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleComplete = (newValue: string) => {
    setCompletedValue(newValue);
  };

  return (
    <div className="space-y-4">
      <OTPInput
        number={6}
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
        showTitleText
        titleText="Interactive Example"
        showHelperText
        helperText={
          completedValue
            ? `Completed with value: ${completedValue}`
            : "Enter all digits to complete"
        }
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};

// Showing different types together
const TypesTemplate: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Boxed Style</h3>
        <OTPInput
          number={6}
          type="boxed"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Lined Style</h3>
        <OTPInput
          number={6}
          type="lined"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Floating Style</h3>
        <OTPInput
          number={6}
          type="floating"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
    </div>
  );
};

export const AllTypes: Story = {
  render: () => <TypesTemplate />,
};

// Showing different sizes together
const SizesTemplate: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Small Size</h3>
        <OTPInput
          number={6}
          size="small"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Medium Size</h3>
        <OTPInput
          number={6}
          size="medium"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Large Size</h3>
        <OTPInput
          number={6}
          size="large"
          showTitleText={false}
          showHelperText={false}
        />
      </div>
    </div>
  );
};

export const AllSizes: Story = {
  render: () => <SizesTemplate />,
};

// Demo showing a complete usage in a verification form
const VerificationFormTemplate: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [isVerified, setIsVerified] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = (newValue: string) => {
    if (error) setError(false);
    setValue(newValue);
  };

  const handleComplete = (newValue: string) => {
    setValue(newValue);
    setIsVerifying(true);

    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      if (newValue === "123456") {
        setIsVerified(true);
      } else {
        setError(true);
      }
    }, 1500);
  };

  const handleReset = () => {
    setValue("");
    setIsVerified(false);
    setError(false);
  };

  return (
    <div className="max-w-md p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Phone Verification</h2>
      <p className="text-gray-600 mb-6">
        Enter the 6-digit code sent to your phone number ending in ***-***-1234
      </p>

      <OTPInput
        number={6}
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
        autoFocus
        disabled={isVerifying || isVerified}
        state={error ? "error" : isVerified ? "filled" : "filled"}
        showHelperText={error || isVerifying}
        helperText={
          error
            ? "Invalid code. Please try again."
            : isVerifying
            ? "Verifying..."
            : ""
        }
      />

      <div className="mt-6">
        {isVerified ? (
          <div className="flex items-center text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Verification successful!</span>
          </div>
        ) : (
          <div className="flex justify-between">
            <button
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={handleReset}
            >
              Resend code
            </button>
            <button
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={handleReset}
            >
              Change phone number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const VerificationForm: Story = {
  render: () => <VerificationFormTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          'A complete example showing how to use the OTP input in a verification form. Try entering "123456" for a successful verification.',
      },
    },
  },
};
