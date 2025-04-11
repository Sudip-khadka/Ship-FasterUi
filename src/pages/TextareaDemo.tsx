import { Textarea } from "@/components/internal/TextField";
import { useState } from "react";

export default function TextareaExample() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Textarea Component</h1>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Default State</h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="Helper text"
            maxLength={240}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">
            Hover State (hover over the textarea)
          </h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="Helper text"
            maxLength={240}
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">
            Active State (click to focus)
          </h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="Helper text"
            maxLength={240}
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Error State</h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="This field has an error"
            maxLength={240}
            error={true}
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Success State</h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="This field is valid"
            maxLength={240}
            success={true}
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Disabled State</h2>
          <Textarea
            label="Label"
            placeholder="Input text field here"
            helperText="This field is disabled"
            maxLength={240}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
