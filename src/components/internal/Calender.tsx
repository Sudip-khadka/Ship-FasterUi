
import {  ChevronLeft, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { isAfter, isBefore,format } from "date-fns"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
interface CalendarProps {
    month: Date
    startDate: Date | null
    endDate: Date | null
    onDateClick: (date: Date) => void
    onMouseEnter: (date: Date) => void
    onMouseLeave: () => void
    isInRange: (date: Date) => boolean
    isStartOrEnd: (date: Date) => boolean
    onYearChange: (value: string) => void
    onMonthChange: (value: string) => void
    onNavigate: (direction: "prev" | "next") => void
    minDate?: Date
    maxDate?: Date
    maxSelectableDate?: Date
  }
  
  function Calendar({
    month,
    onDateClick,
    onMouseEnter,
    onMouseLeave,
    isInRange,
    isStartOrEnd,
    onYearChange,
    onMonthChange,
    onNavigate,
    minDate,
    maxDate,
    maxSelectableDate,
  }: CalendarProps) {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const currentYear = month.getFullYear()
    const currentMonth = month.getMonth()
  
    // Generate years for select (10 years before and after current year)
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i)
  
    // Generate months for select
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  
    // Generate dates for the calendar
    const getDaysInMonth = () => {
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
      const daysInMonth = lastDayOfMonth.getDate()
  
      const dayOfWeek = firstDayOfMonth.getDay()
  
      const days: (Date | null)[] = Array(dayOfWeek).fill(null)
  
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(currentYear, currentMonth, i))
      }
  
      // Fill remaining cells to complete the grid
      const remainingCells = 42 - days.length
      for (let i = 0; i < remainingCells; i++) {
        days.push(null)
      }
  
      return days
    }
  
    const calendarDays = getDaysInMonth()
  
    const isSelectable = (date: Date | null) => {
      if (!date) return false
  
      // Not selectable if after maxSelectableDate
      if (maxSelectableDate && isAfter(date, maxSelectableDate)) return false
  
      // Not selectable if after maxDate or before minDate
      if (maxDate && isAfter(date, maxDate)) return false
      if (minDate && isBefore(date, minDate)) return false
  
      return true
    }
  
    return (
      <div className="w-full rounded-md border p-3">
        <div className="mb-3 flex items-center justify-between">
          <Select value={currentMonth.toString()} onValueChange={onMonthChange}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-auto">
              {months.map((month, index) => (
                <SelectItem key={month} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
  
          <Select value={currentYear.toString()} onValueChange={onYearChange}>
            <SelectTrigger className="w-[90px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-auto">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex space-x-2 justify-between">
            <Button variant="outline" size="sm" className="border-none shadow-none bg-transparent hover:bg-primary-50" onClick={() => onNavigate("prev")}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous month</span>
            </Button>
            <Button variant="outline" size="sm" className="border-none shadow-none bg-transparent hover:bg-primary-50" onClick={() => onNavigate("next")}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next month</span>
            </Button>
          </div>
        </div>
  
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={day} className="text-xs font-medium text-muted-foreground">
              {day}
            </div>
          ))}
  
          {calendarDays.map((date, index) => {
            const dateSelectable = date !== null && isSelectable(date)
  
            return (
              <div key={index} className="aspect-square p-0.5">
                {date === null ? (
                  <div className="h-full w-full rounded-md p-1.5" />
                ) : (
                  <button
                    type="button"
                    disabled={!dateSelectable}
                    onClick={() => dateSelectable && onDateClick(date)}
                    onMouseEnter={() => date && onMouseEnter(date)}
                    onMouseLeave={onMouseLeave}
                    className={cn(
                      "flex flex-col h-10 rounded-full w-10 items-center justify-center text-sm transition-colors",
                      !dateSelectable && "cursor-default text-muted-foreground opacity-50",
                      dateSelectable && "cursor-pointer hover:bg-accent hover:text-accent-foreground",
                      isStartOrEnd(date) && "bg-primary text-primary-foreground hover:bg-primary/90",
                      isInRange(date) && !isStartOrEnd(date) && "bg-primary/10",
                    )}
                  >
                    {format(date, "d")}
                    {isStartOrEnd(date) && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#F6F6F6" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
export default Calendar  