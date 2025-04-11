import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export function AlertExamples() {
  return (
    <>
      <div className="">
        <div className="w-96">
          <Alert>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            ut?
          </Alert>
          <Alert>
            {/* <Info /> */}
            {/* <p>This is a secondary alert with multiple paragraphs.</p> */}
            The content is properly styled even without using AlertDescription.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque
            harum quidem repellendus corrupti asperiores amet vero obcaecati,
            vitae facere accusamus adipisci doloribus reprehenderit? Totam atque
            quam ad laboriosam. Labore!
          </Alert>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
        {/* Basic alert with just text */}

        {/* Alert with icon and text */}
        <Alert>
          <Info />
          This alert has an icon and text without using AlertTitle or
          AlertDescription.
        </Alert>

        {/* Standard alert with title and description */}
        <Alert>
          <Info />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is a standard alert with title and description components.
          </AlertDescription>
        </Alert>

        {/* Alert with just title */}
        <Alert>
          <Info />
          <AlertTitle>Alert with just a title and no description</AlertTitle>
        </Alert>

        {/* Alert with just description */}
        <Alert>
          <Info />
          <AlertDescription>
            This alert has a description but no title component.
          </AlertDescription>
        </Alert>

        {/* Destructive alert example */}
        <Alert
          variant="destructive"
          style="accent"
          className="flex items-center"
        >
          <XCircle />
          <div className="container">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your payment information could not be processed. Please try again.
            </AlertDescription>
          </div>
        </Alert>

        {/* Warning alert with custom content */}
        <Alert variant="warning" style="filled">
          <AlertCircle />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            <p>Your subscription will expire in 3 days.</p>
            <p>Please renew to avoid service interruption.</p>
            <button className="px-3 py-1 mt-2 bg-warning-50 text-warning-800 rounded-md text-xs font-medium">
              Renew Now
            </button>
          </AlertDescription>
        </Alert>

        {/* Success alert */}
        <Alert variant="success" style="accent">
          <CheckCircle />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your profile has been updated successfully.
          </AlertDescription>
        </Alert>

        {/* Secondary alert with paragraphs without using components */}
      </div>
    </>
  );
}

// Form submission example with alert feedback
export function FormWithAlertFeedback() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertType, setAlertType] = React.useState<"success" | "error">(
    "success"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const success = Math.random() > 0.5;
    setAlertType(success ? "success" : "error");
    setShowAlert(true);

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contact Form</h2>

      {showAlert && (
        <Alert
          variant={alertType === "success" ? "success" : "destructive"}
          style="accent"
          className="mb-4"
        >
          {alertType === "success" ? <CheckCircle /> : <XCircle />}
          <AlertTitle>
            {alertType === "success" ? "Message Sent" : "Submission Failed"}
          </AlertTitle>
          <AlertDescription>
            {alertType === "success"
              ? "Your message has been sent successfully. We will get back to you soon."
              : "There was an error submitting your form. Please try again later."}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
