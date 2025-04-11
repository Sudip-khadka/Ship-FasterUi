import type React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown, Clock, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type TimePickerType = "Stepper" | "Dropdown" | "Input" | "Timer";
type Period = "AM" | "PM";

interface TimePickerProps {
  type: TimePickerType;
  period?: Period;
  hours?: string;
  minutes?: string;
  seconds?: string;
  showSeconds?: boolean;
  onChange?: (value: {
    hours: string;
    minutes: string;
    seconds: string;
    period: Period;
  }) => void;
  className?: string;
}

export default function TimePicker({
  type = "Stepper",
  period: initialPeriod = "AM",
  hours: initialHours = "00",
  minutes: initialMinutes = "00",
  seconds: initialSeconds = "00",
  showSeconds = true,
  onChange,
  className,
}: TimePickerProps) {
  const [hours, setHours] = useState(initialHours.padStart(2, "0").slice(0, 2));
  const [minutes, setMinutes] = useState(
    initialMinutes.padStart(2, "0").slice(0, 2)
  );
  const [seconds, setSeconds] = useState(
    initialSeconds.padStart(2, "0").slice(0, 2)
  );
  const [period, setPeriod] = useState<Period>(initialPeriod);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  // const hoursRef = useRef<HTMLInputElement>(null);
  // const minutesRef = useRef<HTMLInputElement>(null);
  // const secondsRef = useRef<HTMLInputElement>(null);

  // Use a ref to track previous values to avoid unnecessary onChange calls
  const prevValuesRef = useRef({ hours, minutes, seconds, period });

  // Initialize component with props
  useEffect(() => {
    setHours(initialHours.padStart(2, "0").slice(0, 2));
    setMinutes(initialMinutes.padStart(2, "0").slice(0, 2));
    setSeconds(initialSeconds.padStart(2, "0").slice(0, 2));
    setPeriod(initialPeriod);
  }, [initialHours, initialMinutes, initialSeconds, initialPeriod]);

  // Only call onChange when values actually change
  useEffect(() => {
    const prevValues = prevValuesRef.current;

    // Check if any values have changed
    if (
      prevValues.hours !== hours ||
      prevValues.minutes !== minutes ||
      prevValues.seconds !== seconds ||
      prevValues.period !== period
    ) {
      // Update the ref with current values
      prevValuesRef.current = { hours, minutes, seconds, period };

      // Call onChange only if it exists
      onChange?.({ hours, minutes, seconds, period });
    }
  }, [hours, minutes, seconds, period, onChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
      setActiveField(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const increment = (
    value: string,
    max: number,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const numValue = Number.parseInt(value);
    const newValue = (numValue + 1) % max;
    setter(newValue.toString().padStart(2, "0"));
  };

  const decrement = (
    value: string,
    max: number,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const numValue = Number.parseInt(value);
    const newValue = (numValue - 1 + max) % max;
    setter(newValue.toString().padStart(2, "0"));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    max: number
  ) => {
    let value = e.target.value.replace(/\D/g, "");

    // Ensure we only keep the last 2 digits if more are entered
    if (value.length > 2) {
      value = value.slice(-2);
    }

    // Validate the value is within range
    const numValue = Number.parseInt(value || "0");
    if (numValue >= max) {
      value = (max - 1).toString().padStart(2, "0");
    }

    // Always pad to 2 digits
    setter(value.padStart(2, "0"));
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    field: string
  ) => {
    e.target.select();
    setActiveField(field);
  };

  const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Fixed type signature to handle both string and Period setters
  const renderDropdownOptions = (
    current: string,
    max: number,
    setter: React.Dispatch<React.SetStateAction<any>>,
    isPeriod = false
  ) => {
    if (isPeriod) {
      return (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
          <div
            className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
            onClick={(e) => {
              e.stopPropagation();
              setPeriod("AM");
              setOpenDropdown(null);
            }}
          >
            <span>AM</span>
            {period === "AM" && <Check className="h-4 w-4" />}
          </div>
          <div
            className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
            onClick={(e) => {
              e.stopPropagation();
              setPeriod("PM");
              setOpenDropdown(null);
            }}
          >
            <span>PM</span>
            {period === "PM" && <Check className="h-4 w-4" />}
          </div>
        </div>
      );
    }

    const options = [];
    for (let i = 0; i < max; i++) {
      const value = i.toString().padStart(2, "0");
      options.push(
        <div
          key={i}
          className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
          onClick={(e) => {
            e.stopPropagation();
            setter(value);
            setOpenDropdown(null);
          }}
        >
          <span>{value}</span>
          {current === value && <Check className="h-4 w-4" />}
        </div>
      );
    }
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
        {options}
      </div>
    );
  };

  const renderStepper = () => (
    <div className="flex items-center">
      <Clock className="h-5 w-5 text-[#CACACA] mr-2" />
      <div className="flex items-center">
        <div className="relative border w-[54px] h-[24px] p-[1px] rounded-md bg-gray-50  flex items-center">
          <input
            type="text"
            value={hours}
            onChange={(e) => handleInputChange(e, setHours, 13)}
            onFocus={(e) => handleFocus(e, "hours")}
            className={cn(
              "w-8 pt-1 text-center text-[#5e5e5e] bg-transparent focus:outline-none",
              activeField === "hours" && "caret-green-500"
            )}
          />
          <div className="flex flex-col ml-1">
            <button
              type="button"
              onClick={() => increment(hours, 13, setHours)}
              className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
            >
              <ChevronUp className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => decrement(hours, 13, setHours)}
              className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
            >
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="relative border w-[54px] h-[24px] rounded-md bg-gray-50 p-[1px] flex items-center mx-2">
          <input
            type="text"
            value={minutes}
            onChange={(e) => handleInputChange(e, setMinutes, 60)}
            onFocus={(e) => handleFocus(e, "minutes")}
            className={cn(
              "w-8 pt-1 text-center text-[#5e5e5e] bg-transparent focus:outline-none",
              activeField === "minutes" && "caret-green-500"
            )}
          />
          <div className="flex flex-col ml-1">
            <button
              type="button"
              onClick={() => increment(minutes, 60, setMinutes)}
              className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
            >
              <ChevronUp className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => decrement(minutes, 60, setMinutes)}
              className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
            >
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>

        {showSeconds && (
          <div className="relative border w-[54px] h-[24px] rounded-md bg-gray-50 px-[1px] flex items-center mr-2">
            <input
              type="text"
              value={seconds}
              onChange={(e) => handleInputChange(e, setSeconds, 60)}
              onFocus={(e) => handleFocus(e, "seconds")}
              className={cn(
                "w-8 pt-1 text-center text-[#5e5e5e] bg-transparent focus:outline-none",
                activeField === "seconds" && "caret-green-500"
              )}
            />
            <div className="flex flex-col ml-1">
              <button
                type="button"
                onClick={() => increment(seconds, 60, setSeconds)}
                className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
              >
                <ChevronUp className="h-3 w-3" />
              </button>
              <button
                type="button"
                onClick={() => decrement(seconds, 60, setSeconds)}
                className="text-gray-400 hover:text-gray-600 h-[7.4px] flex items-center justify-center"
              >
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}

        <div className="text-base">{period}</div>
      </div>
    </div>
  );

  const renderDropdown = () => (
    <div className="flex flex-col" ref={dropdownRef}>
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="text-xs text-gray-400 mb-1">Hours</div>
          <div className="relative">
            <div className="flex items-center w-[56px] border rounded-md bg-gray-50">
              <input
                type="text"
                value={hours}
                onChange={(e) => handleInputChange(e, setHours, 13)}
                onFocus={(e) => handleFocus(e, "hours")}
                className={cn(
                  "w-full  py-1 text-[#040404] text-center bg-transparent focus:outline-none",
                  activeField === "hours" && "caret-green-500"
                )}
                style={{ width: "36px", height: "24px" }}
              />
              <button
                className="cursor-pointer"
                onClick={(e) => toggleDropdown("hours", e)}
              >
                <ChevronDown className="h-4 w-4 text-[#5e5e5e]" />
              </button>
            </div>
            {openDropdown === "hours" &&
              renderDropdownOptions(hours, 13, setHours)}
          </div>
        </div>
        <div className="flex items-center self-start mt-5 text-gray-400 mx-1">
          :
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-400 mb-1">Minutes</div>
          <div className="relative">
            <div className="flex items-center w-[56px] border rounded-md bg-gray-50">
              <input
                type="text"
                value={minutes}
                onChange={(e) => handleInputChange(e, setMinutes, 60)}
                onFocus={(e) => handleFocus(e, "minutes")}
                className={cn(
                  "w-full  py-1 text-[#040404] text-center bg-transparent focus:outline-none",
                  activeField === "minutes" && "caret-green-500"
                )}
                style={{ width: "36px", height: "24px" }}
              />
              <button
                className="cursor-pointer "
                onClick={(e) => toggleDropdown("minutes", e)}
              >
                <ChevronDown className="h-4 w-4 text-[#5e5e5e]" />
              </button>
            </div>

            {openDropdown === "minutes" &&
              renderDropdownOptions(minutes, 60, setMinutes)}
          </div>
        </div>
        {showSeconds && (
          <div className="flex items-center self-start mt-5 text-gray-400 mx-1">
            :
          </div>
        )}
        {showSeconds && (
          <div className="flex flex-col">
            <div className="text-xs text-gray-400 mb-1">Seconds</div>
            <div className="relative">
              <div className="flex items-center w-[56px] border rounded-md bg-gray-50">
                <input
                  type="text"
                  value={seconds}
                  onChange={(e) => handleInputChange(e, setSeconds, 60)}
                  onFocus={(e) => handleFocus(e, "seconds")}
                  className={cn(
                    "w-full  py-1 text-[#040404] text-center bg-transparent focus:outline-none",
                    activeField === "seconds" && "caret-green-500"
                  )}
                  style={{ width: "36px", height: "24px" }}
                />
                <button
                  className="cursor-pointer"
                  onClick={(e) => toggleDropdown("seconds", e)}
                >
                  <ChevronDown className="h-4 w-4 text-[#5e5e5e]" />
                </button>
              </div>

              {openDropdown === "seconds" &&
                renderDropdownOptions(seconds, 60, setSeconds)}
            </div>
          </div>
        )}
        <div className="flex flex-col ml-2">
          <div className="text-xs text-gray-400 mb-1">&nbsp;</div>
          <div className="relative">
            <button
              className="flex items-center justify-between px-3 py-1 border rounded-md bg-gray-50"
              onClick={(e) => toggleDropdown("period", e)}
              style={{ width: "56px", height: "28px" }}
            >
              <span>{period}</span>
              <ChevronDown className="h-4 w-4 ml-1 text-[#5e5e5e]" />
            </button>
            {openDropdown === "period" &&
              renderDropdownOptions(period, 0, setPeriod, true)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderInput = () => (
    <div className="flex items-center">
      <Clock className="h-5 w-5 text-gray-400 mr-2" />
      <div className="flex items-center">
        <div className="flex items-center border rounded-md px-3 py-1.5">
          <input
            type="text"
            value={hours}
            onChange={(e) => handleInputChange(e, setHours, 13)}
            onFocus={(e) => handleFocus(e, "hours")}
            className={cn(
              "w-8 text-center focus:outline-none",
              hours === initialHours ? "text-gray-400" : "text-gray-900",
              activeField === "hours" && "caret-green-500"
            )}
          />
          <span className="mx-1 text-gray-400">:</span>
          <input
            type="text"
            value={minutes}
            onChange={(e) => handleInputChange(e, setMinutes, 60)}
            onFocus={(e) => handleFocus(e, "minutes")}
            className={cn(
              "w-8 text-center focus:outline-none",
              minutes === initialMinutes ? "text-gray-400" : "text-gray-900",
              activeField === "minutes" && "caret-green-500"
            )}
          />
          {showSeconds && (
            <>
              <span className="mx-1 text-gray-400">:</span>
              <input
                type="text"
                value={seconds}
                onChange={(e) => handleInputChange(e, setSeconds, 60)}
                onFocus={(e) => handleFocus(e, "seconds")}
                className={cn(
                  "w-8 text-center focus:outline-none",
                  seconds === initialSeconds
                    ? "text-gray-400"
                    : "text-gray-900",
                  activeField === "seconds" && "caret-green-500"
                )}
              />
            </>
          )}
        </div>
        <div className="flex border h-10 rounded-md ml-2 overflow-hidden">
          <button
            type="button"
            onClick={() => setPeriod("AM")}
            className={cn(
              "px-3 py-1.5 text-sm leading-[16px]",
              period === "AM"
                ? "bg-[#18A23F] text-white"
                : "bg-white text-gray-700"
            )}
          >
            AM
          </button>
          <button
            type="button"
            onClick={() => setPeriod("PM")}
            className={cn(
              "px-3 py-1.5 text-sm",
              period === "PM"
                ? "bg-[#18A23F] text-white"
                : "bg-white text-gray-700"
            )}
          >
            PM
          </button>
        </div>
      </div>
    </div>
  );
  const renderTimer = () => (
    <div className="flex space-x-2">
      <div className="flex flex-col items-center">
        <div className="w-12 h-10 bg-gray-50 rounded-md flex items-center justify-center">
          <input
            type="text"
            value={hours}
            onChange={(e) => handleInputChange(e, setHours, 13)}
            onFocus={(e) => handleFocus(e, "hours")}
            className={cn(
              "w-8 text-center text-lg bg-transparent focus:outline-none",
              activeField === "hours" && "caret-green-500"
            )}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">Hours</div>
      </div>
      <div className="flex items-center self-start mt-2 text-gray-400">:</div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-10 bg-gray-50 rounded-md flex items-center justify-center">
          <input
            type="text"
            value={minutes}
            onChange={(e) => handleInputChange(e, setMinutes, 60)}
            onFocus={(e) => handleFocus(e, "minutes")}
            className={cn(
              "w-8 text-center text-lg bg-transparent focus:outline-none",
              activeField === "minutes" && "caret-green-500"
            )}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">Minute</div>
      </div>
      {showSeconds && (
        <>
          <div className="flex items-center self-start mt-2 text-gray-400">
            :
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-10 bg-gray-50 rounded-md flex items-center justify-center">
              <input
                type="text"
                value={seconds}
                onChange={(e) => handleInputChange(e, setSeconds, 60)}
                onFocus={(e) => handleFocus(e, "seconds")}
                className={cn(
                  "w-8 text-center text-lg bg-transparent focus:outline-none",
                  activeField === "seconds" && "caret-[#18A23F]"
                )}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">Seconds</div>
          </div>
        </>
      )}
      <div className="flex flex-col items-center">
        <div className="w-12 h-10 bg-white rounded-md border flex flex-col items-center justify-center overflow-hidden">
          <button
            type="button"
            onClick={() => setPeriod("AM")}
            className={cn(
              "w-full pt-1 h-1/2 flex items-center justify-center text-sm",
              period === "AM"
                ? "text-[#18A23F] bg-gray-50"
                : "text-gray-500 bg-white"
            )}
          >
            AM
          </button>
          <button
            type="button"
            onClick={() => setPeriod("PM")}
            className={cn(
              "w-full h-1/2 flex items-center justify-center text-sm",
              period === "PM"
                ? "text-[#18A23F] bg-gray-50"
                : "text-gray-500 bg-white"
            )}
          >
            PM
          </button>
        </div>
        <div className="text-xs text-gray-400 mt-1">&nbsp;</div>
      </div>
    </div>
  );

  return (
    <div className={cn("time-picker", className)}>
      {type === "Stepper" && renderStepper()}
      {type === "Dropdown" && renderDropdown()}
      {type === "Input" && renderInput()}
      {type === "Timer" && renderTimer()}
    </div>
  );
}

// import type React from "react";
// import { useState, useEffect, useRef } from "react";
// import { ChevronUp, ChevronDown, Clock, Check } from "lucide-react";
// import { cn } from "@/lib/utils";

// type TimePickerType = "Stepper" | "Dropdown" | "Input" | "Timer";
// type Period = "AM" | "PM";
// type TimeUnit = "hours" | "minutes" | "seconds" | "period";

// interface TimePickerProps {
//   type: TimePickerType;
//   period?: Period;
//   hours?: string;
//   minutes?: string;
//   seconds?: string;
//   showSeconds?: boolean;
//   onChange?: (value: {
//     hours: string;
//     minutes: string;
//     seconds: string;
//     period: Period;
//   }) => void;
//   className?: string;
// }

// export default function TimePicker({
//   type = "Stepper",
//   period: initialPeriod = "AM",
//   hours: initialHours = "00",
//   minutes: initialMinutes = "00",
//   seconds: initialSeconds = "00",
//   showSeconds = true,
//   onChange,
//   className,
// }: TimePickerProps) {
//   const [hours, setHours] = useState(initialHours.padStart(2, "0").slice(0, 2));
//   const [minutes, setMinutes] = useState(
//     initialMinutes.padStart(2, "0").slice(0, 2)
//   );
//   const [seconds, setSeconds] = useState(
//     initialSeconds.padStart(2, "0").slice(0, 2)
//   );
//   const [period, setPeriod] = useState<Period>(initialPeriod);

//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [activeField, setActiveField] = useState<string | null>(null);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Use a ref to track previous values to avoid unnecessary onChange calls
//   const prevValuesRef = useRef({ hours, minutes, seconds, period });

//   // Initialize component with props
//   useEffect(() => {
//     setHours(initialHours.padStart(2, "0").slice(0, 2));
//     setMinutes(initialMinutes.padStart(2, "0").slice(0, 2));
//     setSeconds(initialSeconds.padStart(2, "0").slice(0, 2));
//     setPeriod(initialPeriod);
//   }, [initialHours, initialMinutes, initialSeconds, initialPeriod]);

//   // Only call onChange when values actually change
//   useEffect(() => {
//     const prevValues = prevValuesRef.current;

//     // Check if any values have changed
//     if (
//       prevValues.hours !== hours ||
//       prevValues.minutes !== minutes ||
//       prevValues.seconds !== seconds ||
//       prevValues.period !== period
//     ) {
//       // Update the ref with current values
//       prevValuesRef.current = { hours, minutes, seconds, period };

//       // Call onChange only if it exists
//       onChange?.({ hours, minutes, seconds, period });
//     }
//   }, [hours, minutes, seconds, period, onChange]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setOpenDropdown(null);
//       }
//       setActiveField(null);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Unified state management functions
//   const getMaxValue = (unit: TimeUnit): number => {
//     switch (unit) {
//       case "hours":
//         return 13;
//       case "minutes":
//       case "seconds":
//         return 60;
//       default:
//         return 0;
//     }
//   };

//   // Type-safe setters and getters
//   const handleTimeChange = (unit: TimeUnit, value: string | Period) => {
//     switch (unit) {
//       case "hours":
//         setHours(value as string);
//         break;
//       case "minutes":
//         setMinutes(value as string);
//         break;
//       case "seconds":
//         setSeconds(value as string);
//         break;
//       case "period":
//         setPeriod(value as Period);
//         break;
//     }
//   };

//   const getValue = (unit: TimeUnit): string | Period => {
//     switch (unit) {
//       case "hours":
//         return hours;
//       case "minutes":
//         return minutes;
//       case "seconds":
//         return seconds;
//       case "period":
//         return period;
//     }
//   };

//   const increment = (unit: TimeUnit) => {
//     if (unit === "period") {
//       handleTimeChange(unit, period === "AM" ? "PM" : "AM");
//       return;
//     }

//     const value = getValue(unit) as string;
//     const max = getMaxValue(unit);
//     const numValue = parseInt(value, 10);
//     const newValue = (numValue + 1) % max;
//     handleTimeChange(unit, newValue.toString().padStart(2, "0"));
//   };

//   const decrement = (unit: TimeUnit) => {
//     if (unit === "period") {
//       handleTimeChange(unit, period === "AM" ? "PM" : "AM");
//       return;
//     }

//     const value = getValue(unit) as string;
//     const max = getMaxValue(unit);
//     const numValue = parseInt(value, 10);
//     const newValue = (numValue - 1 + max) % max;
//     handleTimeChange(unit, newValue.toString().padStart(2, "0"));
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     unit: TimeUnit
//   ) => {
//     if (unit === "period") return;

//     const max = getMaxValue(unit);
//     let value = e.target.value.replace(/\D/g, "");

//     // Ensure we only keep the last 2 digits if more are entered
//     if (value.length > 2) {
//       value = value.slice(-2);
//     }

//     // Validate the value is within range
//     const numValue = parseInt(value || "0", 10);
//     if (numValue >= max) {
//       value = (max - 1).toString().padStart(2, "0");
//     }

//     // Always pad to 2 digits
//     handleTimeChange(unit, value.padStart(2, "0"));
//   };

//   const handleFocus = (
//     e: React.FocusEvent<HTMLInputElement>,
//     field: TimeUnit
//   ) => {
//     e.target.select();
//     setActiveField(field);
//   };

//   const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const TimeInput = ({
//     unit,
//     className = "",
//     width = "w-8",
//   }: {
//     unit: TimeUnit;
//     className?: string;
//     width?: string;
//   }) => (
//     <input
//       type="text"
//       value={getValue(unit) as string}
//       onChange={(e) => handleInputChange(e, unit)}
//       onFocus={(e) => handleFocus(e, unit)}
//       className={cn(
//         `${width} text-center bg-transparent focus:outline-none`,
//         activeField === unit && "caret-green-500",
//         className
//       )}
//     />
//   );

//   // Dropdown options component
//   const DropdownOptions = ({ unit }: { unit: TimeUnit }) => {
//     const value = getValue(unit);

//     if (unit === "period") {
//       return (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
//           <div
//             className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleTimeChange("period", "AM");
//               setOpenDropdown(null);
//             }}
//           >
//             <span>AM</span>
//             {period === "AM" && <Check className="h-4 w-4" />}
//           </div>
//           <div
//             className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleTimeChange("period", "PM");
//               setOpenDropdown(null);
//             }}
//           >
//             <span>PM</span>
//             {period === "PM" && <Check className="h-4 w-4" />}
//           </div>
//         </div>
//       );
//     }

//     const max = getMaxValue(unit);
//     const options = [];

//     for (let i = 0; i < max; i++) {
//       const optionValue = i.toString().padStart(2, "0");
//       options.push(
//         <div
//           key={i}
//           className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//           onClick={(e) => {
//             e.stopPropagation();
//             handleTimeChange(unit, optionValue);
//             setOpenDropdown(null);
//           }}
//         >
//           <span>{optionValue}</span>
//           {value === optionValue && <Check className="h-4 w-4" />}
//         </div>
//       );
//     }

//     return (
//       <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10 max-h-32 overflow-y-auto">
//         {options}
//       </div>
//     );
//   };

//   // Stepper buttons component
//   const StepperButtons = ({ unit }: { unit: TimeUnit }) => (
//     <div className="flex flex-col ml-1">
//       <button
//         type="button"
//         onClick={() => increment(unit)}
//         className="text-gray-400 hover:text-gray-600 h-3 flex items-center justify-center"
//       >
//         <ChevronUp className="h-3 w-3" />
//       </button>
//       <button
//         type="button"
//         onClick={() => decrement(unit)}
//         className="text-gray-400 hover:text-gray-600 h-3 flex items-center justify-center"
//       >
//         <ChevronDown className="h-3 w-3" />
//       </button>
//     </div>
//   );

//   // Time unit container with stepper buttons
//   const StepperUnit = ({ unit }: { unit: TimeUnit }) => (
//     <div className="relative border text-[#5e5e5e] rounded-md bg-gray-50 px-3 py-1 flex items-center">
//       <TimeInput unit={unit} />
//       <StepperButtons unit={unit} />
//     </div>
//   );

//   // Updated Dropdown unit with fixed icon placement
//   const DropdownUnit = ({
//     unit,
//     label,
//     showColon = false,
//   }: {
//     unit: TimeUnit;
//     label?: string;
//     showColon?: boolean;
//   }) => (
//     <div className="flex flex-col">
//       {label && <div className="text-xs text-gray-400 mb-1">{label}</div>}
//       <div className="flex items-center">
//         <div className="relative">
//           <button
//             className={cn(
//               "flex items-center justify-between border rounded-md bg-gray-50",
//               unit === "period"
//                 ? "w-[72px] h-[38px] px-3 py-1"
//                 : "w-[90px] h-[38px] px-3 py-1"
//             )}
//             onClick={(e) => toggleDropdown(unit, e)}
//           >
//             {unit === "period" ? (
//               <>
//                 <span className="text-base">{period}</span>
//                 <ChevronDown className="h-5 w-5 ml-1 text-[#5e5e5e]" />
//               </>
//             ) : (
//               <>
//                 <TimeInput unit={unit} width="w-12" />
//                 <ChevronDown className="h-5 w-5 ml-1 text-[#5e5e5e]" />
//               </>
//             )}
//           </button>
//           {openDropdown === unit && <DropdownOptions unit={unit} />}
//         </div>
//         {showColon && <div className="mx-2 text-gray-400 text-lg">:</div>}
//       </div>
//     </div>
//   );

//   // Timer unit container
//   const TimerUnit = ({ unit, label }: { unit: TimeUnit; label?: string }) => (
//     <div className="flex flex-col items-center">
//       <div className="w-16 h-14 bg-gray-50 rounded-md flex items-center justify-center">
//         <TimeInput unit={unit} className="text-lg" />
//       </div>
//       {label && <div className="text-xs text-gray-400 mt-1">{label}</div>}
//     </div>
//   );

//   // Render functions for each time picker type
//   const renderStepper = () => (
//     <div className="flex items-center">
//       <Clock className="h-5 w-5 text-[#CACACA] mr-2" />
//       <div className="flex items-center space-x-2">
//         <StepperUnit unit="hours" />
//         <StepperUnit unit="minutes" />
//         {showSeconds && <StepperUnit unit="seconds" />}
//         <div className="text-base">{period}</div>
//       </div>
//     </div>
//   );

//   // Updated Dropdown render function
//   const renderDropdown = () => (
//     <div className="flex flex-col" ref={dropdownRef}>
//       <div className="flex items-center">
//         <DropdownUnit unit="hours" label="Hours" showColon={true} />
//         <DropdownUnit unit="minutes" label="Minutes" showColon={showSeconds} />
//         {showSeconds && <DropdownUnit unit="seconds" label="Seconds" />}
//         <div className="ml-5">
//           <DropdownUnit unit="period" label="&nbsp;" />
//         </div>
//       </div>
//     </div>
//   );

//   const renderInput = () => (
//     <div className="flex items-center">
//       <Clock className="h-5 w-5 text-gray-400 mr-2" />
//       <div className="flex items-center">
//         <div className="flex items-center border rounded-md px-3 py-1.5">
//           <TimeInput unit="hours" />
//           <span className="mx-1 text-gray-400">:</span>
//           <TimeInput unit="minutes" className="text-gray-400" />
//           {showSeconds && (
//             <>
//               <span className="mx-1 text-gray-400">:</span>
//               <TimeInput unit="seconds" className="text-gray-400" />
//             </>
//           )}
//         </div>
//         <div className="flex border rounded-md ml-2 overflow-hidden">
//           <button
//             type="button"
//             onClick={() => handleTimeChange("period", "AM")}
//             className={cn(
//               "px-3 py-1.5 text-sm",
//               period === "AM"
//                 ? "bg-[#18A23F] text-white"
//                 : "bg-white text-gray-700"
//             )}
//           >
//             AM
//           </button>
//           <button
//             type="button"
//             onClick={() => handleTimeChange("period", "PM")}
//             className={cn(
//               "px-3 py-1.5 text-sm",
//               period === "PM"
//                 ? "bg-[#18A23F] text-white"
//                 : "bg-white text-gray-700"
//             )}
//           >
//             PM
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderTimer = () => (
//     <div className="flex space-x-2">
//       <TimerUnit unit="hours" label="Hours" />
//       <div className="flex items-center self-start mt-4 text-gray-400">:</div>
//       <TimerUnit unit="minutes" label="Minute" />
//       {showSeconds && (
//         <>
//           <div className="flex items-center self-start mt-4 text-gray-400">
//             :
//           </div>
//           <TimerUnit unit="seconds" label="Seconds" />
//         </>
//       )}
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-14 bg-white rounded-md border flex flex-col items-center justify-center overflow-hidden">
//           <button
//             type="button"
//             onClick={() => handleTimeChange("period", "AM")}
//             className={cn(
//               "w-full h-1/2 flex items-center justify-center text-sm",
//               period === "AM"
//                 ? "text-[#18A23F] bg-gray-50"
//                 : "text-gray-500 bg-white"
//             )}
//           >
//             AM
//           </button>
//           <button
//             type="button"
//             onClick={() => handleTimeChange("period", "PM")}
//             className={cn(
//               "w-full h-1/2 flex items-center justify-center text-sm",
//               period === "PM"
//                 ? "text-[#18A23F] bg-gray-50"
//                 : "text-gray-500 bg-white"
//             )}
//           >
//             PM
//           </button>
//         </div>
//         <div className="text-xs text-gray-400 mt-1">&nbsp;</div>
//       </div>
//     </div>
//   );

//   return (
//     <div className={cn("time-picker", className)}>
//       {type === "Stepper" && renderStepper()}
//       {type === "Dropdown" && renderDropdown()}
//       {type === "Input" && renderInput()}
//       {type === "Timer" && renderTimer()}
//     </div>
//   );
// }
