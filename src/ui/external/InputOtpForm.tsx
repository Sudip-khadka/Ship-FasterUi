import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { OTPInput } from "@/components/ui/OtpInput"; // Assuming OTP component is in this path
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import { Alert, AlertDescription } from "@/components/ui/alert/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Define the form schema with Zod
const formSchema = z.object({
  otpCode: z
    .string()
    .length(6, {
      message: "OTP code must be exactly 6 digits",
    })
    .regex(/^\d+$/, {
      message: "OTP code must contain only numbers",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const OTPFormExample = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<{
    message: string;
    type: "success" | "error" | "idle";
  }>({ message: "", type: "idle" });

  // Initialize form with React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otpCode: "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus({ message: "", type: "idle" });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    setFormStatus({
      message: `Your OTP code ${data.otpCode} has been verified.`,
      type: "success",
    });

    setIsSubmitting(false);
  };

  const handleResendCode = () => {
    // Simulate resending code
    setFormStatus({
      message: "A new verification code has been sent to your device.",
      type: "success",
    });

    // Clear success message after 3 seconds
    setTimeout(() => {
      setFormStatus({ message: "", type: "idle" });
    }, 3000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Verify Your Account</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to your device to complete verification.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {formStatus.message && formStatus.type !== "idle" && (
            <Alert
              variant={
                formStatus.type === "success" ? "success" : "destructive"
              }
            >
              {formStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>{formStatus.message}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <Controller
              name="otpCode"
              control={control}
              render={({ field }) => (
                <OTPInput
                  number={6}
                  value={field.value}
                  onChange={field.onChange}
                  onComplete={field.onChange}
                  type="boxed"
                  size="medium"
                  showTitleText={true}
                  titleText="Verification Code"
                  showHelperText={!!errors.otpCode}
                  helperText={errors.otpCode?.message || ""}
                  state={errors.otpCode ? "error" : "filled"}
                  autoFocus
                />
              )}
            />

            <div className="text-sm text-center">
              <p className="text-muted-foreground">
                Didn't receive a code?{" "}
                <button
                  type="button"
                  className="text-primary underline hover:text-primary/80"
                  onClick={handleResendCode}
                >
                  Resend Code
                </button>
              </p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify Account"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center text-xs text-muted-foreground">
        Need help? Contact our support team
      </CardFooter>
    </Card>
  );
};

export default OTPFormExample;
