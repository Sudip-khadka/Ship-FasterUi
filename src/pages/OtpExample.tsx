import { OTPInput } from "@/components/ui/OtpInput";

export default function OTPExample() {
  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl font-bold">OTP Input Examples</h1>

      {/* Boxed Types */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Boxed Type</h2>

        <div>
          <h3 className="text-lg mb-4">Small</h3>
          <OTPInput
            type="boxed"
            size="small"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Medium</h3>
          <OTPInput
            type="boxed"
            size="medium"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Large</h3>
          <OTPInput
            type="boxed"
            size="large"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Error State</h3>
          <OTPInput
            type="boxed"
            size="medium"
            state="error"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Invalid verification code"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Disabled State</h3>
          <OTPInput
            type="boxed"
            size="medium"
            disabled
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">With Dividers</h3>
          <OTPInput
            type="boxed"
            size="medium"
            number={6}
            divider
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>
      </div>

      {/* Lined Types */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Lined Type</h2>

        <div>
          <h3 className="text-lg mb-4">Small</h3>
          <OTPInput
            type="lined"
            size="small"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Medium</h3>
          <OTPInput
            type="lined"
            size="medium"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Large</h3>
          <OTPInput
            type="lined"
            size="large"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Error State</h3>
          <OTPInput
            type="lined"
            size="medium"
            state="error"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Invalid verification code"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">With Dividers</h3>
          <OTPInput
            type="lined"
            size="medium"
            number={6}
            divider
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>
      </div>

      {/* Floating Types */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Floating Type</h2>

        <div>
          <h3 className="text-lg mb-4">Medium</h3>
          <OTPInput
            type="floating"
            size="medium"
            number={6}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">Different Length (4)</h3>
          <OTPInput
            type="floating"
            size="medium"
            number={4}
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>

        <div>
          <h3 className="text-lg mb-4">With Dividers</h3>
          <OTPInput
            type="floating"
            size="medium"
            number={6}
            divider
            showTitleText
            titleText="Input verification code"
            showHelperText
            helperText="Helper text"
          />
        </div>
      </div>
    </div>
  );
}
