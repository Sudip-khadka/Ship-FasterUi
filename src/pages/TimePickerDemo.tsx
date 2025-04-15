import {TimePicker} from "../components/internal/timePicker/TimePicker";

export default function TimePickerDemo() {
  return (
    <div className="p-6 space-y-8 max-w-md mx-auto">
      <div>
        <h3 className="text-sm font-medium mb-2">Stepper Type</h3>
        <div className="mb-4">
          <TimePicker type="Stepper" period="AM" />
        </div>
        <div>
          <TimePicker type="Stepper" period="PM" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Dropdown Type</h3>
        <div className="mb-4">
          <TimePicker type="Dropdown" period="AM" />
        </div>
        <div>
          <TimePicker type="Dropdown" period="PM" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Input Type</h3>
        <div className="mb-4">
          <TimePicker type="Input" period="AM" />
        </div>
        <div>
          <TimePicker type="Input" period="PM" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Timer Type</h3>
        <div className="mb-4">
          <TimePicker type="Timer" period="AM" />
        </div>
        <div>
          <TimePicker type="Timer" period="PM" />
        </div>
      </div>
    </div>
  );
}
