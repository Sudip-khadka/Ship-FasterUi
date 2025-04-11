import React, { useState } from "react";
import ToggleButton from "../components/internal/ToggleButton"; // Adjust the import path as needed

interface ToggleStates {
  [key: string]: boolean;
}

const ToggleDemo: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<ToggleStates>({
    toggle1: false,
    toggle2: true,
    toggle3: false,
    toggle4: true,
  });

  const handleToggleChange = (toggleId: string, newState: boolean): void => {
    setToggleStates((prev) => ({
      ...prev,
      [toggleId]: newState,
    }));
    console.log(`Toggle ${toggleId} changed to: ${newState}`);
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl  font-200 mb-6">Toggle Button Demo</h2>

      <div className="space-y-8">
        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span className="font-medium">Small Toggle Button</span>
          <ToggleButton
            size="small"
            active={toggleStates.toggle1}
            onChange={(newState) => handleToggleChange("toggle1", newState)}
            id="notifications-toggle"
          />
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span className="font-medium">Medium Toggle Button</span>
          <ToggleButton
            size="medium"
            active={toggleStates.toggle4}
            onChange={(newState) => handleToggleChange("toggle4", newState)}
            id="notifications"
          />
          <ToggleButton
            size="medium"
            color="Red"
            active={toggleStates.toggle3}
            onChange={(newState) => handleToggleChange("toggle3", newState)}
            state={toggleStates.toggle2 ? "Default" : "Disabled"}
            id="maintenance-toggle"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span className="font-medium">Dark Mode Large Toggle Button</span>
          <ToggleButton
            size="large"
            color="Green"
            active={toggleStates.toggle2}
            onChange={(newState) => handleToggleChange("toggle2", newState)}
            id="dark-mode-toggle"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span className="font-medium">Maintenance Mode</span>
          <ToggleButton
            size="medium"
            color="Red"
            active={toggleStates.toggle3}
            onChange={(newState) => handleToggleChange("toggle3", newState)}
            state={toggleStates.toggle2 ? "Default" : "Disabled"}
            id="maintenance-toggle"
          />
          <span className="text-sm text-gray-500 ml-2">
            {toggleStates.toggle2 ? "Enabled" : "Requires Dark Mode"}
          </span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white rounded shadow">
        <h3 className="font-medium mb-2">Current States:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(toggleStates, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ToggleDemo;
