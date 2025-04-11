import React, { useState } from "react";
import { CustomInput } from "@/components/internal/CustomInput";
import {
  Mail,
  Lock,
  Search,
  X,
  Eye,
  EyeOff,
  User,
  Calendar,
  Phone,
  Globe,
  MessageSquare,
  Info,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const CustomInputExamples = () => {
  // State for password visibility toggles
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  // Helper function to toggle password visibility
  const togglePassword = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        CustomInput Component Showcase
      </h1>

      {/* SECTION: Input Types */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Input Types
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Outlined Type (Default) */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Outlined (Default)</h3>
            <CustomInput
              label="Outlined Input"
              placeholderText="Outlined input example"
              type="outlined"
            />
          </div>

          {/* Boxed Type */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Boxed</h3>
            <CustomInput
              label="Boxed Input"
              placeholderText="Boxed input example"
              type="boxed"
            />
          </div>

          {/* Lined Type */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Lined</h3>
            <CustomInput
              label="Lined Input"
              placeholderText="Lined input example"
              type="lined"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Sizes */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Input Sizes
        </h2>
        <div className="space-y-6">
          {/* Small Size */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Small (sm)</h3>
            <CustomInput
              label="Small Input"
              placeholderText="Small input example"
              size="sm"
            />
          </div>

          {/* Medium Size (Default) */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Medium (md) - Default</h3>
            <CustomInput
              label="Medium Input"
              placeholderText="Medium input example"
              size="md"
            />
          </div>

          {/* Large Size */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Large (lg)</h3>
            <CustomInput
              label="Large Input"
              placeholderText="Large input example"
              size="lg"
            />
          </div>

          {/* Extra Large Size */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Extra Large (xl)</h3>
            <CustomInput
              label="Extra Large Input"
              placeholderText="Extra large input example"
              size="xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION: States */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Input States
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Default State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Default</h3>
            <CustomInput
              label="Default State"
              placeholderText="Default state example"
              state="default"
            />
          </div>

          {/* Typing State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Typing</h3>
            <CustomInput
              label="Typing State"
              value="User is typing..."
              state="typing"
            />
          </div>

          {/* Active State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Active</h3>
            <CustomInput
              label="Active State"
              placeholderText="Active state example"
              state="active"
            />
          </div>

          {/* Focused State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Focused</h3>
            <CustomInput
              label="Focused State"
              placeholderText="Focused state example"
              state="Focused"
            />
          </div>

          {/* Hovered State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Hovered</h3>
            <CustomInput
              label="Hovered State"
              placeholderText="Hovered state example"
              state="hovered"
            />
          </div>

          {/* Disabled State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Disabled</h3>
            <CustomInput
              label="Disabled State"
              placeholderText="Disabled state example"
              disabled={true}
            />
          </div>

          {/* Success State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Success</h3>
            <CustomInput
              label="Success State"
              value="Verified email"
              state="success"
              helperText="Email successfully verified!"
            />
          </div>

          {/* Error State */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Error</h3>
            <CustomInput
              label="Error State"
              value="invalid@email"
              state="error"
              helperText="Please enter a valid email address"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Input Types */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Input Types
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Text Input (Default) */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Text (Default)</h3>
            <CustomInput
              label="Text Input"
              placeholderText="Enter text"
              inputType="text"
            />
          </div>

          {/* Email Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Email</h3>
            <CustomInput
              label="Email Input"
              placeholderText="Enter email address"
              inputType="email"
              startIcon={Mail}
            />
          </div>

          {/* Password Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Password</h3>
            <CustomInput
              label="Password Input"
              placeholderText="Enter password"
              inputType={showPassword1 ? "text" : "password"}
              startIcon={Lock}
              endIcon={showPassword1 ? EyeOff : Eye}
              onEndIconClick={() => togglePassword(setShowPassword1)}
            />
          </div>

          {/* Number Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Number</h3>
            <CustomInput
              label="Number Input"
              placeholderText="Enter number"
              inputType="number"
            />
          </div>

          {/* Tel Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Telephone</h3>
            <CustomInput
              label="Telephone Input"
              placeholderText="Enter phone number"
              inputType="tel"
              startIcon={Phone}
            />
          </div>

          {/* Date Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Date</h3>
            <CustomInput
              label="Date Input"
              inputType="date"
              startIcon={Calendar}
            />
          </div>

          {/* Search Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Search</h3>
            <CustomInput
              label="Search Input"
              placeholderText="Search..."
              inputType="search"
              startIcon={Search}
            />
          </div>

          {/* URL Input */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">URL</h3>
            <CustomInput
              label="URL Input"
              placeholderText="Enter website URL"
              inputType="url"
              startIcon={Globe}
            />
          </div>
        </div>
      </section>

      {/* SECTION: Label and Placeholder Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Label and Placeholder Options
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* With Label, With Placeholder (Default) */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">
              With Label & Placeholder (Default)
            </h3>
            <CustomInput
              label="Username"
              placeholderText="Enter your username"
              showLabel={true}
              showPlaceholder={true}
            />
          </div>

          {/* With Label, No Placeholder */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">With Label, No Placeholder</h3>
            <CustomInput
              label="Username"
              placeholderText="Enter your username"
              showLabel={true}
              showPlaceholder={false}
            />
          </div>

          {/* No Label, With Placeholder */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">No Label, With Placeholder</h3>
            <CustomInput
              label="Username"
              placeholderText="Enter your username"
              showLabel={false}
              showPlaceholder={true}
            />
          </div>

          {/* Custom Label Class */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Custom Label Class</h3>
            <CustomInput
              label="Custom Label"
              placeholderText="Custom label example"
              labelClassName="text-blue-600 uppercase tracking-wider"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Helper Text Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Helper Text Options
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* With Helper Text */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">With Helper Text</h3>
            <CustomInput
              label="Email"
              placeholderText="Enter your email"
              helperText="We'll never share your email with anyone else"
              showHelperText={true}
            />
          </div>

          {/* Success Helper Text */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Success Helper Text</h3>
            <CustomInput
              label="Email"
              value="user@example.com"
              state="success"
              helperText="Email verified successfully!"
              showHelperText={true}
            />
          </div>

          {/* Error Helper Text */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Error Helper Text</h3>
            <CustomInput
              label="Email"
              value="invalid-email"
              state="error"
              helperText="Please enter a valid email address"
              showHelperText={true}
            />
          </div>

          {/* Custom Helper Text Class */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Custom Helper Text Class</h3>
            <CustomInput
              label="Password"
              placeholderText="Enter your password"
              helperText="Must be at least 8 characters"
              helperTextClassName="italic text-blue-500 font-medium"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Counter Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Counter Options
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* With Character Counter */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">With Character Counter</h3>
            <CustomInput
              label="Bio"
              placeholderText="Tell us about yourself"
              maxLength={100}
              showCounter={true}
            />
          </div>

          {/* With Counter and Helper Text */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">With Counter & Helper Text</h3>
            <CustomInput
              label="Tweet"
              placeholderText="What's happening?"
              maxLength={280}
              showCounter={true}
              helperText="Keep it brief and interesting"
            />
          </div>

          {/* Error State with Counter */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Error State with Counter</h3>
            <CustomInput
              label="Message"
              value="This message is too long and exceeds the character limit set for this input field."
              maxLength={50}
              showCounter={true}
              state="error"
              helperText="Message is too long"
            />
          </div>

          {/* Custom Counter Class */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Custom Counter Class</h3>
            <CustomInput
              label="Description"
              placeholderText="Enter a description"
              maxLength={150}
              showCounter={true}
              counterClassName="font-bold text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Icon Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Icon Options
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Start Icon */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Start Icon</h3>
            <CustomInput
              label="Username"
              placeholderText="Enter your username"
              startIcon={User}
            />
          </div>

          {/* End Icon */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">End Icon</h3>
            <CustomInput
              label="Search"
              placeholderText="Search..."
              endIcon={Search}
            />
          </div>

          {/* Both Icons */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Both Icons</h3>
            <CustomInput
              label="Search Users"
              placeholderText="Enter name to search"
              startIcon={User}
              endIcon={Search}
            />
          </div>

          {/* Clickable Icons */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Clickable Icons</h3>
            <CustomInput
              label="Search with Clear"
              placeholderText="Type and clear with X"
              startIcon={Search}
              endIcon={X}
              onEndIconClick={() => alert("Clear button clicked")}
            />
          </div>

          {/* Password Toggle Example */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Password Toggle</h3>
            <CustomInput
              label="Password"
              placeholderText="Enter password"
              inputType={showPassword2 ? "text" : "password"}
              startIcon={Lock}
              endIcon={showPassword2 ? EyeOff : Eye}
              onEndIconClick={() => togglePassword(setShowPassword2)}
            />
          </div>

          {/* Custom Icon Class */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Custom Icon Class</h3>
            <CustomInput
              label="Important Information"
              placeholderText="Enter important details"
              startIcon={AlertCircle}
              iconClassName="text-amber-500"
            />
          </div>
        </div>
      </section>

      {/* SECTION: All Features Combined */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          Combined Examples
        </h2>
        <div className="space-y-6">
          {/* Complete Form Example */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-medium mb-6 text-lg">Contact Form Example</h3>
            <div className="space-y-4">
              <CustomInput
                label="Full Name"
                placeholderText="Enter your full name"
                startIcon={User}
                helperText="Please enter your legal name"
              />

              <CustomInput
                label="Email Address"
                placeholderText="Enter your email"
                inputType="email"
                startIcon={Mail}
                state="success"
                helperText="Email format is valid"
              />

              <CustomInput
                label="Phone Number"
                placeholderText="Enter your phone number"
                inputType="tel"
                startIcon={Phone}
              />

              <CustomInput
                label="Password"
                placeholderText="Create a password"
                inputType={showPassword3 ? "text" : "password"}
                startIcon={Lock}
                endIcon={showPassword3 ? EyeOff : Eye}
                onEndIconClick={() => togglePassword(setShowPassword3)}
                helperText="Must be at least 8 characters with numbers and symbols"
              />

              <CustomInput
                label="Message"
                placeholderText="Type your message here"
                startIcon={MessageSquare}
                maxLength={200}
                showCounter={true}
                helperText="Tell us how we can help you"
              />
            </div>
          </div>

          {/* Fancy Styled Example */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow">
            <h3 className="font-medium mb-6 text-lg">Custom Styled Inputs</h3>
            <div className="space-y-4">
              <CustomInput
                label="Custom Input Style"
                placeholderText="Styled example"
                containerClassName="border-l-4 border-blue-400 pl-3"
                inputClassName="focus:ring-2 focus:ring-blue-300"
                labelClassName="text-blue-600 font-semibold"
                startIcon={Info}
                iconClassName="text-blue-500"
              />

              <CustomInput
                type="boxed"
                label="Boxed Custom Style"
                placeholderText="Another styled example"
                containerClassName="border-l-4 border-green-400 pl-3"
                inputClassName="shadow-md hover:shadow-lg transition-shadow"
                labelClassName="text-green-600 font-semibold"
                helperText="With custom helper text styling"
                helperTextClassName="text-green-600 italic"
                startIcon={CheckCircle}
                iconClassName="text-green-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomInputExamples;
