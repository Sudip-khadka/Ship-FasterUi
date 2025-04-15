import React, { useState } from "react";
import { Checkbox } from "../components/internal/checkbox/CustomCheckbox";

const CheckboxDemo: React.FC = () => {
  // Independent state for each checkbox
  const [circleChecked, setCircleChecked] = useState<boolean>(false);
  const [roundedChecked, setRoundedChecked] = useState<boolean>(false);
  const [squareChecked, setSquareChecked] = useState<boolean>(false);

  // Independent indeterminate states (if needed)
  const [circleIndeterminate, setCircleIndeterminate] =
    useState<boolean>(false);
  const [roundedIndeterminate, setRoundedIndeterminate] =
    useState<boolean>(false);
  const [squareIndeterminate, setSquareIndeterminate] =
    useState<boolean>(false);

  // Individual handlers for each checkbox
  const handleCircleChange = (newVal: boolean) => {
    setCircleIndeterminate(false);
    setCircleChecked(newVal);
  };

  const handleRoundedChange = (newVal: boolean) => {
    setRoundedIndeterminate(false);
    setRoundedChecked(newVal);
  };

  const handleSquareChange = (newVal: boolean) => {
    setSquareIndeterminate(false);
    setSquareChecked(newVal);
  };

  return (
    <div className="flex gap-4">
      <Checkbox
        shape="circle"
        check={circleChecked}
        indeterminate={circleIndeterminate}
        onChange={handleCircleChange}
      />
      <Checkbox
        shape="rounded"
        check={roundedChecked}
        indeterminate={roundedIndeterminate}
        onChange={handleRoundedChange}
      />
      <Checkbox
        shape="square"
        check={squareChecked}
        indeterminate={squareIndeterminate}
        onChange={handleSquareChange}
      />
    </div>
  );
};

export default CheckboxDemo;

// "use client";

// import { useState } from "react";
// import { Checkbox } from "../components/internal/CustomCheckbox";

// export default function CheckboxDemo() {
//   const shapes = ["square", "rounded", "circle"] as const;
//   const states = ["default", "hovered", "pressed", "disabled"] as const;

//   // Use state to track checkbox states
//   const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>(
//     {} // Empty object to start with all unchecked
//   );

//   const [indeterminateStates, setIndeterminateStates] = useState<
//     Record<string, boolean>
//   >(
//     {} // Empty object to start with all non-indeterminate
//   );

//   // Function to toggle checkbox state
//   const toggleCheckbox = (id: string) => {
//     setCheckboxStates((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//     // Clear indeterminate when toggled
//     if (indeterminateStates[id]) {
//       setIndeterminateStates((prev) => ({
//         ...prev,
//         [id]: false,
//       }));
//     }
//   };

//   // Function to toggle indeterminate state
//   const toggleIndeterminate = (id: string) => {
//     setIndeterminateStates((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//     // Uncheck when setting to indeterminate
//     if (checkboxStates[id]) {
//       setCheckboxStates((prev) => ({
//         ...prev,
//         [id]: false,
//       }));
//     }
//   };

//   return (
//     <main className="container mx-auto p-8">
//       <h1 className="mb-8 text-3xl font-bold">Custom Checkbox Component</h1>

//       <div className="grid grid-cols-3 gap-8">
//         {shapes.map((shape) => (
//           <div key={shape} className="space-y-4">
//             <h2 className="text-xl font-semibold capitalize">{shape}</h2>

//             {states.map((state) => (
//               <div key={state} className="space-y-2">
//                 <h3 className="text-sm font-medium capitalize text-gray-500">
//                   {state}
//                 </h3>
//                 <div className="flex gap-4">
//                   {/* Unchecked */}
//                   <div className="flex items-center justify-center">
//                     <Checkbox
//                       shape={shape}
//                       state={state}
//                       checked={checkboxStates[`${shape}-${state}-1`] || false}
//                       indeterminate={
//                         indeterminateStates[`${shape}-${state}-1`] || false
//                       }
//                       onChange={() =>
//                         state !== "disabled" &&
//                         toggleCheckbox(`${shape}-${state}-1`)
//                       }
//                       onDoubleClick={() =>
//                         state !== "disabled" &&
//                         toggleIndeterminate(`${shape}-${state}-1`)
//                       }
//                     />
//                   </div>

//                   {/* Checked */}
//                   <div className="flex items-center justify-center">
//                     <Checkbox
//                       shape={shape}
//                       state={state}
//                       checked={
//                         checkboxStates[`${shape}-${state}-2`] !== undefined
//                           ? checkboxStates[`${shape}-${state}-2`]
//                           : true
//                       }
//                       indeterminate={
//                         indeterminateStates[`${shape}-${state}-2`] || false
//                       }
//                       onChange={() =>
//                         state !== "disabled" &&
//                         toggleCheckbox(`${shape}-${state}-2`)
//                       }
//                       onDoubleClick={() =>
//                         state !== "disabled" &&
//                         toggleIndeterminate(`${shape}-${state}-2`)
//                       }
//                     />
//                   </div>

//                   {/* Indeterminate */}
//                   <div className="flex items-center justify-center">
//                     <Checkbox
//                       shape={shape}
//                       state={state}
//                       checked={checkboxStates[`${shape}-${state}-3`] || false}
//                       indeterminate={
//                         indeterminateStates[`${shape}-${state}-3`] !== undefined
//                           ? indeterminateStates[`${shape}-${state}-3`]
//                           : true
//                       }
//                       onChange={() =>
//                         state !== "disabled" &&
//                         toggleCheckbox(`${shape}-${state}-3`)
//                       }
//                       onDoubleClick={() =>
//                         state !== "disabled" &&
//                         toggleIndeterminate(`${shape}-${state}-3`)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 p-4 bg-gray-100 rounded-md">
//         <p className="text-sm text-gray-600">
//           <strong>Note:</strong> Click to toggle checked state. Double-click to
//           toggle indeterminate state.
//         </p>
//       </div>
//     </main>
//   );
// }
