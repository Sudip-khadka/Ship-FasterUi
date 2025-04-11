import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomInput } from "@/components/internal/CustomInput";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// Define validation schema using Zod
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

// Define form data type based on the schema
type FormData = z.infer<typeof formSchema>;

const FormWithValidation = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  // Initialize React Hook Form with Zod resolver
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate API call
    console.log("Form submitted with:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Form submitted successfully!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            label="Email Address"
            inputType="email"
            placeholderText="Enter your email"
            startIcon={Mail}
            state={errors.email ? "error" : field.value ? "typing" : "default"}
            helperText={errors.email?.message || "We'll never share your email"}
            showHelperText={true}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            label="Password"
            inputType={showPassword ? "text" : "password"}
            placeholderText="Enter your password"
            startIcon={Lock}
            endIcon={showPassword ? EyeOff : Eye}
            onEndIconClick={togglePasswordVisibility}
            state={
              errors.password ? "error" : field.value ? "typing" : "default"
            }
            helperText={
              errors.password?.message || "Strong passwords improve security"
            }
            showHelperText={true}
          />
        )}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormWithValidation;
