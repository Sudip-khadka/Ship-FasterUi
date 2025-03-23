"use client"

import * as React from "react"
import {
  addMonths,
  format,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  startOfDay,
  endOfDay,
} from "date-fns"

import { Button } from "@/components/ui/button"
import Calendar from "./Calender"

interface DateRangePickerProps {
  startDate: Date | null
  endDate: Date | null
  onRangeChange: (start: Date | null, end: Date | null) => void
  onCancel?: () => void
  onSave?: (start: Date | null, end: Date | null) => void
  className?: string
  minDate?: Date
  maxDate?: Date
  maxSelectableDate?: Date
  showButtons?:boolean
}

export function DateRangePicker({
  showButtons=false,
  startDate,
  endDate,
  onRangeChange,
  onCancel,
  onSave,
  className,
  minDate,
  maxDate,
  maxSelectableDate,
}: DateRangePickerProps) {
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const datePickerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [leftMonth, setLeftMonth] = React.useState(startDate || new Date())
  const [rightMonth, setRightMonth] = React.useState(addMonths(leftMonth, 1))
  const [hoverDate, setHoverDate] = React.useState<Date | null>(null)
  const [internalSelectionState, setInternalSelectionState] = React.useState<"start" | "end">(
    startDate && !endDate ? "end" : "start",
  )

  // Store initial dates for cancel functionality
  const [initialDates] = React.useState({
    startDate,
    endDate,
  })

  // Update months when start date changes
  React.useEffect(() => {
    if (startDate) {
      setLeftMonth(startOfMonth(startDate))
      setRightMonth(addMonths(startOfMonth(startDate), 1))
    }
  }, [startDate])

  // Update internal selection state based on props
  React.useEffect(() => {
    if (startDate && !endDate) {
      setInternalSelectionState("end")
    } else {
      setInternalSelectionState("start")
    }
  }, [startDate, endDate])

  const handleDateClick = (date: Date) => {
    // Normalize the date to start of day
    const normalizedDate = startOfDay(new Date(date))

    if (!startDate || internalSelectionState === "start") {
      // Start a new selection
      onRangeChange(normalizedDate, null)
    } else if (internalSelectionState === "end") {
      // Complete the selection
      if (isBefore(normalizedDate, startDate)) {
        // If clicked date is before start date, swap them
        onRangeChange(normalizedDate, startDate)
      } else {
        onRangeChange(startDate, normalizedDate)
      }
    }
  }

  const handleMouseEnter = (date: Date) => {
    setHoverDate(startOfDay(new Date(date)))
  }

  const handleMouseLeave = () => {
    setHoverDate(null)
  }

  const isInRange = (date: Date) => {
    if (!date) return false

    const normalizedDate = startOfDay(new Date(date))

    if (startDate && endDate) {
      const start = startOfDay(new Date(startDate))
      const end = endOfDay(new Date(endDate))
      return isWithinInterval(normalizedDate, { start, end })
    }

    if (startDate && hoverDate && internalSelectionState === "end") {
      const start = startOfDay(new Date(startDate))
      const hover = startOfDay(new Date(hoverDate))

      if (isBefore(hover, start)) {
        return isWithinInterval(normalizedDate, { start: hover, end: start })
      } else {
        return isWithinInterval(normalizedDate, { start, end: hover })
      }
    }

    return false
  }

  const isStartOrEnd = (date: Date) => {
    if (!date) return false

    const normalizedDate = startOfDay(new Date(date))

    if (startDate && isSameDay(normalizedDate, startDate)) return true
    if (endDate && isSameDay(normalizedDate, endDate)) return true

    return false
  }

  const handleYearChange = (value: string, calendarIndex: "left" | "right") => {
    const year = Number.parseInt(value)
    if (calendarIndex === "left") {
      const newDate = new Date(leftMonth)
      newDate.setFullYear(year)
      setLeftMonth(newDate)
    } else {
      const newDate = new Date(rightMonth)
      newDate.setFullYear(year)
      setRightMonth(newDate)
    }
  }

  const handleMonthChange = (value: string, calendarIndex: "left" | "right") => {
    const month = Number.parseInt(value)
    if (calendarIndex === "left") {
      const newDate = new Date(leftMonth)
      newDate.setMonth(month)
      setLeftMonth(newDate)
    } else {
      const newDate = new Date(rightMonth)
      newDate.setMonth(month)
      setRightMonth(newDate)
    }
  }

  const navigateMonth = (direction: "prev" | "next", calendarIndex: "left" | "right") => {
    if (calendarIndex === "left") {
      setLeftMonth((prev) => addMonths(prev, direction === "prev" ? -1 : 1))
    } else {
      setRightMonth((prev) => addMonths(prev, direction === "prev" ? -1 : 1))
    }
  }

  // Reset selection
  const handleReset = () => {
    onRangeChange(null, null)
  }

  // Handle cancel
  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    } else {
      // Revert to initial dates
      onRangeChange(initialDates.startDate, initialDates.endDate)
    }
  }

  // Handle save
  const handleSave = () => {
    if (onSave) {
      onSave(startDate, endDate)
    }
    setShowDatePicker(false)
  }

  return (
      <div className="flex flex-col relative border px-2 py-2 rounded-lg z-[10] right-0 bg-white hover:cursor-pointer" >
      <div className={"flex items-center justify-between m-0"+className} onClick={()=>setShowDatePicker(prev=>!prev)}>
        <div className="flex items-center space-x-4">
            <div className="text-sm">
            {startDate ? format(startDate, "dd/MM/yyyy") : "dd/mm/yyyy"} {(startDate && endDate) ? "–" : "-"} {endDate ? format(endDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
            </div>
          {(startDate || endDate) && (
            <Button variant="secondary" size="sm" onClick={handleReset}>
              Reset
            </Button>
          )}
        </div>
      </div>
      {showDatePicker&&
      <div className="flex flex-col absolute top-[60px] z-[10] right-0 bg-white border p-2 rounded-xl">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="flex flex-col gap-2">
          <Calendar
            month={leftMonth}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isInRange={isInRange}
            isStartOrEnd={isStartOrEnd}
            onYearChange={(value) => handleYearChange(value, "left")}
            onMonthChange={(value) => handleMonthChange(value, "left")}
            onNavigate={(direction) => navigateMonth(direction, "left")}
            minDate={minDate}
            maxDate={maxDate}
            maxSelectableDate={maxSelectableDate}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Calendar
            month={rightMonth}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isInRange={isInRange}
            isStartOrEnd={isStartOrEnd}
            onYearChange={(value) => handleYearChange(value, "right")}
            onMonthChange={(value) => handleMonthChange(value, "right")}
            onNavigate={(direction) => navigateMonth(direction, "right")}
            minDate={minDate}
            maxDate={maxDate}
            maxSelectableDate={maxSelectableDate}
          />
        </div>
      </div>
     {showButtons&& <div className="flex justify-end space-x-2 pt-2">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>}
      </div>}
    </div>
  )
}


