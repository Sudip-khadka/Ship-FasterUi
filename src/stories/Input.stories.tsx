"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { CustomInput } from "../components/internal/CustomInput";
import {
  Mail,
  Eye,
  EyeOff,
  Search,
  User,
  Lock,
  Calendar,
  Phone,
  Upload,
  Hash,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof CustomInput> = {
  title: "Components/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["outlined", "lined", "boxed"],
      description: "The visual style of the input",
      defaultValue: "outlined",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "The size of the input",
      defaultValue: "md",
    },
    state: {
      control: "select",
      options: [
        "default",
        "typing",
        "active",
        "disabled",
        "hovered",
        "success",
        "error",
      ],
      description: "The current state of the input",
      defaultValue: "default",
    },
    inputType: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "date",
        "file",
      ],
      description: "The HTML input type",
      defaultValue: "text",
    },
    label: {
      control: "text",
      description: "The label text for the input",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show the label",
      defaultValue: true,
    },
    placeholderText: {
      control: "text",
      description: "The placeholder text for the input",
    },
    showPlaceholder: {
      control: "boolean",
      description: "Whether to show the placeholder",
      defaultValue: true,
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    showHelperText: {
      control: "boolean",
      description: "Whether to show the helper text",
      defaultValue: true,
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed",
    },
    showCounter: {
      control: "boolean",
      description: "Whether to show the character counter",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      defaultValue: false,
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the input",
    },
    containerClassName: {
      control: "text",
      description: "Additional CSS classes to apply to the container",
    },
    inputClassName: {
      control: "text",
      description: "Additional CSS classes to apply to the input element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

// Basic examples
export const Default: Story = {
  args: {
    label: "Label",
    placeholderText: "Input text field here",
    helperText: "Helper text",
    className: "w-80",
  },
};

export const WithValue: Story = {
  args: {
    label: "Label",
    value: "Input value",
    helperText: "Helper text",
    className: "w-80",
  },
};

export const WithCounter: Story = {
  args: {
    label: "Label",
    placeholderText: "Input text field here",
    helperText: "Helper text",
    maxLength: 240,
    showCounter: true,
    className: "w-80",
  },
};

// Type variations
export const Outlined: Story = {
  args: {
    type: "outlined",
    label: "Outlined Input",
    placeholderText: "Input text field here",
    helperText: "This is an outlined input",
    className: "w-80",
  },
};

export const Lined: Story = {
  args: {
    type: "lined",
    label: "Lined Input",
    placeholderText: "Input text field here",
    helperText: "This is a lined input",
    className: "w-80",
  },
};

export const Boxed: Story = {
  args: {
    type: "boxed",
    label: "Boxed Input",
    placeholderText: "Input text field here",
    helperText: "This is a boxed input",
    className: "w-80",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Input",
    placeholderText: "Small input field",
    helperText: "This is a small input",
    className: "w-64",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Input",
    placeholderText: "Medium input field",
    helperText: "This is a medium input",
    className: "w-80",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Input",
    placeholderText: "Large input field",
    helperText: "This is a large input",
    className: "w-96",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    label: "Extra Large Input",
    placeholderText: "Extra large input field",
    helperText: "This is an extra large input",
    className: "w-[32rem]",
  },
};

// State variations
export const Error: Story = {
  args: {
    label: "Error Input",
    value: "Invalid input",
    helperText: "This input has an error",
    state: "error",
    className: "w-80",
  },
};

export const Success: Story = {
  args: {
    label: "Success Input",
    value: "Valid input",
    helperText: "This input is valid",
    state: "success",
    className: "w-80",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    value: "Disabled input",
    helperText: "This input is disabled",
    disabled: true,
    className: "w-80",
  },
};

export const Hovered: Story = {
  args: {
    label: "Hovered Input",
    placeholderText: "Hover over me",
    helperText: "This input is hovered",
    state: "hovered",
    className: "w-80",
  },
};

export const Active: Story = {
  args: {
    label: "Active Input",
    value: "Active input",
    helperText: "This input is active",
    state: "active",
    className: "w-80",
  },
};

// Input type variations
export const TextInput: Story = {
  args: {
    label: "Text Input",
    inputType: "text",
    placeholderText: "Enter text here",
    helperText: "Standard text input",
    className: "w-80",
  },
};

export const EmailInput: Story = {
  args: {
    label: "Email Input",
    inputType: "email",
    placeholderText: "example@domain.com",
    helperText: "Enter a valid email address",
    startIcon: Mail,
    className: "w-80",
  },
};

export const PasswordInput: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);

    return (
      <CustomInput
        {...args}
        label="Password Input"
        inputType={showPassword ? "text" : "password"}
        placeholderText="Enter your password"
        helperText="Password must be at least 8 characters"
        startIcon={Lock}
        endIcon={showPassword ? EyeOff : Eye}
        onEndIconClick={() => setShowPassword(!showPassword)}
        className="w-80"
      />
    );
  },
};

export const NumberInput: Story = {
  args: {
    label: "Number Input",
    inputType: "number",
    placeholderText: "Enter a number",
    helperText: "Numeric input only",
    startIcon: Hash,
    className: "w-80",
  },
};

export const DateInput: Story = {
  args: {
    label: "Date Input",
    inputType: "date",
    helperText: "Select a date",
    startIcon: Calendar,
    className: "w-80",
  },
};

export const TelInput: Story = {
  args: {
    label: "Telephone Input",
    inputType: "tel",
    placeholderText: "(123) 456-7890",
    helperText: "Enter your phone number",
    startIcon: Phone,
    className: "w-80",
  },
};

export const FileInput: Story = {
  args: {
    label: "File Input",
    inputType: "file",
    helperText: "Select a file to upload",
    startIcon: Upload,
    className: "w-80",
  },
};

// With icons
export const WithStartIcon: Story = {
  args: {
    label: "Email",
    placeholderText: "Enter your email",
    helperText: "We'll never share your email",
    startIcon: Mail,
    className: "w-80",
  },
};

export const WithEndIcon: Story = {
  args: {
    label: "Search",
    placeholderText: "Search...",
    helperText: "Enter your search query",
    endIcon: Search,
    className: "w-80",
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Email",
    placeholderText: "Enter your email",
    helperText: "We'll never share your email",
    startIcon: Mail,
    endIcon: Search,
    className: "w-80",
  },
};

// With counter and icons
export const WithCounterAndIcon: Story = {
  args: {
    label: "Bio",
    placeholderText: "Tell us about yourself",
    helperText: "Keep it brief",
    maxLength: 100,
    showCounter: true,
    startIcon: User,
    className: "w-80",
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => {
    return (
      <div className="space-y-6 w-[400px]">
        <h3 className="text-lg font-semibold">Outlined Type</h3>
        <div className="space-y-4">
          <CustomInput
            type="outlined"
            label="Default"
            placeholderText="Default state"
            helperText="Default state example"
          />
          <CustomInput
            type="outlined"
            label="Hovered"
            placeholderText="Hovered state"
            helperText="Hovered state example"
            state="hovered"
          />
          <CustomInput
            type="outlined"
            label="Active"
            value="Active state"
            helperText="Active state example"
            state="active"
          />
          <CustomInput
            type="outlined"
            label="Typing"
            value="Typing state"
            helperText="Typing state example"
            state="typing"
          />
          <CustomInput
            type="outlined"
            label="Success"
            value="Success state"
            helperText="Success state example"
            state="success"
          />
          <CustomInput
            type="outlined"
            label="Error"
            value="Error state"
            helperText="Error state example"
            state="error"
          />
          <CustomInput
            type="outlined"
            label="Disabled"
            value="Disabled state"
            helperText="Disabled state example"
            disabled
          />
        </div>

        <h3 className="text-lg font-semibold mt-8">Lined Type</h3>
        <div className="space-y-4">
          <CustomInput
            type="lined"
            label="Default"
            placeholderText="Default state"
            helperText="Default state example"
          />
          <CustomInput
            type="lined"
            label="Hovered"
            placeholderText="Hovered state"
            helperText="Hovered state example"
            state="hovered"
          />
          <CustomInput
            type="lined"
            label="Active"
            value="Active state"
            helperText="Active state example"
            state="active"
          />
          <CustomInput
            type="lined"
            label="Typing"
            value="Typing state"
            helperText="Typing state example"
            state="typing"
          />
          <CustomInput
            type="lined"
            label="Success"
            value="Success state"
            helperText="Success state example"
            state="success"
          />
          <CustomInput
            type="lined"
            label="Error"
            value="Error state"
            helperText="Error state example"
            state="error"
          />
          <CustomInput
            type="lined"
            label="Disabled"
            value="Disabled state"
            helperText="Disabled state example"
            disabled
          />
        </div>

        <h3 className="text-lg font-semibold mt-8">Boxed Type</h3>
        <div className="space-y-4">
          <CustomInput
            type="boxed"
            label="Default"
            placeholderText="Default state"
            helperText="Default state example"
          />
          <CustomInput
            type="boxed"
            label="Hovered"
            placeholderText="Hovered state"
            helperText="Hovered state example"
            state="hovered"
          />
          <CustomInput
            type="boxed"
            label="Active"
            value="Active state"
            helperText="Active state example"
            state="active"
          />
          <CustomInput
            type="boxed"
            label="Typing"
            value="Typing state"
            helperText="Typing state example"
            state="typing"
          />
          <CustomInput
            type="boxed"
            label="Success"
            value="Success state"
            helperText="Success state example"
            state="success"
          />
          <CustomInput
            type="boxed"
            label="Error"
            value="Error state"
            helperText="Error state example"
            state="error"
          />
          <CustomInput
            type="boxed"
            label="Disabled"
            value="Disabled state"
            helperText="Disabled state example"
            disabled
          />
        </div>
      </div>
    );
  },
};

// All types showcase
export const AllTypes: Story = {
  render: () => {
    return (
      <div className="space-y-4 w-[400px]">
        <CustomInput
          type="outlined"
          label="Outlined Input"
          placeholderText="Outlined input example"
          helperText="This is an outlined input"
        />
        <CustomInput
          type="lined"
          label="Lined Input"
          placeholderText="Lined input example"
          helperText="This is a lined input"
        />
        <CustomInput
          type="boxed"
          label="Boxed Input"
          placeholderText="Boxed input example"
          helperText="This is a boxed input"
        />
      </div>
    );
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => {
    return (
      <div className="space-y-4 w-[500px]">
        <CustomInput
          size="sm"
          label="Small Input"
          placeholderText="Small input field"
          helperText="This is a small input"
        />
        <CustomInput
          size="md"
          label="Medium Input"
          placeholderText="Medium input field"
          helperText="This is a medium input"
        />
        <CustomInput
          size="lg"
          label="Large Input"
          placeholderText="Large input field"
          helperText="This is a large input"
        />
        <CustomInput
          size="xl"
          label="Extra Large Input"
          placeholderText="Extra large input field"
          helperText="This is an extra large input"
        />
      </div>
    );
  },
};

// All input types showcase
export const AllInputTypes: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-4 w-[400px]">
        <CustomInput
          label="Text Input"
          inputType="text"
          placeholderText="Enter text here"
          helperText="Standard text input"
          startIcon={Mail}
        />
        <CustomInput
          label="Email Input"
          inputType="email"
          placeholderText="example@domain.com"
          helperText="Enter a valid email address"
          startIcon={Mail}
        />
        <CustomInput
          label="Password Input"
          inputType={showPassword ? "text" : "password"}
          placeholderText="Enter your password"
          helperText="Password must be at least 8 characters"
          startIcon={Lock}
          endIcon={showPassword ? EyeOff : Eye}
          onEndIconClick={() => setShowPassword(!showPassword)}
        />
        <CustomInput
          label="Number Input"
          inputType="number"
          placeholderText="Enter a number"
          helperText="Numeric input only"
          startIcon={Hash}
        />
        <CustomInput
          label="Date Input"
          inputType="date"
          helperText="Select a date"
          startIcon={Calendar}
        />
        <CustomInput
          label="Telephone Input"
          inputType="tel"
          placeholderText="(123) 456-7890"
          helperText="Enter your phone number"
          startIcon={Phone}
        />
        <CustomInput
          label="File Input"
          inputType="file"
          helperText="Select a file to upload"
          startIcon={Upload}
        />
      </div>
    );
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    label: "Custom Styled Input",
    placeholderText: "Enter text here",
    helperText: "This input has custom styling",
    className: "border-purple-500 focus:border-purple-700 caret-purple-500",
    labelClassName: "text-purple-700 font-bold",
    helperTextClassName: "text-purple-600 italic",
    containerClassName: "bg-purple-50 p-4 rounded-lg",
  },
};

// Form field examples
export const FormFields: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-4 w-[400px] p-6 border rounded-lg bg-white">
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <CustomInput
          type="outlined"
          label="Full Name"
          placeholderText="Enter your full name"
          helperText="First and last name"
          startIcon={User}
        />
        <CustomInput
          type="outlined"
          label="Email Address"
          inputType="email"
          placeholderText="Enter your email"
          helperText="We'll never share your email"
          startIcon={Mail}
        />
        <CustomInput
          type="outlined"
          label="Password"
          inputType={showPassword ? "text" : "password"}
          placeholderText="Enter your password"
          helperText="Must be at least 8 characters"
          startIcon={Lock}
          endIcon={showPassword ? EyeOff : Eye}
          onEndIconClick={() => setShowPassword(!showPassword)}
        />
        <CustomInput
          type="outlined"
          label="Phone Number"
          inputType="tel"
          placeholderText="(123) 456-7890"
          helperText="Enter your phone number"
          startIcon={Phone}
        />
        <CustomInput
          type="outlined"
          label="Bio"
          placeholderText="Tell us about yourself"
          helperText="Keep it brief"
          maxLength={100}
          showCounter
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-2">
          Register
        </button>
      </div>
    );
  },
};
