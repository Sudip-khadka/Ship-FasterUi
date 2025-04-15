import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import { webColors } from "../../assets/constant/index.constant";
// Import DateRange from react-day-picker
import { DateRange } from "react-day-picker";

interface DatePickerProps {
  date: DateRange | Date | undefined; // Use DateRange from react-day-picker or a single Date
  setDate: (date: Date | DateRange | undefined) => void; // Adjusted to support Date or DateRange
  error: string | null;
  mode: "single" | "range";
  label?: string;
  className?: string;
  onApply?: (fromDate: Date, toDate?: Date) => void;
  onClear?: () => void;
}

export function DatePicker({
  date,
  setDate,
  error,
  mode,
  label,
  className,
  onApply,
  onClear,
}: DatePickerProps) {
  // Handle date selection logic
  const handleSelect = (selectedDate: Date | DateRange | undefined) => {
    if (selectedDate === undefined) {
      setDate(undefined); // Handle clearing the selection
    } else if (
      mode === "range" &&
      "from" in selectedDate &&
      "to" in selectedDate
    ) {
      setDate(selectedDate); // Handle range selection
    } else {
      setDate(selectedDate); // Handle single date selection
    }
  };

  return (
    <div
      className={`${className} flex flex-col w-full ${error ? "required" : ""}`}
    >
      {label && <label className="fs-14-600 mb-1">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-full justify-start text-left font-normal ${
              error && "border-[red]"
            } ${!date && "text-muted-foreground"}`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {mode === "range" && date && "from" in date && date.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : date && !("from" in date) ? (
              format(date as Date, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          {mode === "range" ? (
            <Calendar
              mode="range"
              selected={date as DateRange}
              onSelect={handleSelect} // Use the handleSelect for range
              initialFocus
              numberOfMonths={2}
            />
          ) : (
            <Calendar
              mode="single"
              selected={
                "from" in (date || {})
                  ? (date as DateRange).from
                  : (date as Date)
              } // Handle both Date and DateRange
              onSelect={handleSelect} // Use the handleSelect for single date
              initialFocus
              numberOfMonths={1}
            />
          )}
          {mode === "range" && (
            <div className="flex gap-4 justify-end p-2">
              <Button
                onClick={() => {
                  if (
                    onApply &&
                    date &&
                    "from" in date &&
                    date.from &&
                    date.to
                  ) {
                    onApply(date.from, date.to);
                  }
                }}
              >
                Apply changes
              </Button>
              <Button
                onClick={() => {
                  if (onClear) {
                    onClear();
                  }
                  setDate(undefined); // Clear the selection
                }}
                variant={"outline"}
              >
                Clear
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {error && (
        <span
          className="fs-12-600 mt-1"
          style={{ color: webColors.error["base"] }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
