import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";

// Date helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonthStartDay = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const getDaysArray = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getMonthStartDay(year, month);
  const daysArray = [];

  // Add previous month days to fill first week
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);

  for (let i = startDay - 1; i >= 0; i--) {
    daysArray.push({
      day: prevMonthDays - i,
      month: prevMonth,
      year: prevMonthYear,
      isCurrentMonth: false,
    });
  }

  // Add current month days
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push({
      day: i,
      month,
      year,
      isCurrentMonth: true,
    });
  }

  // Add next month days to complete the grid
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;
  const remainingDays = 42 - daysArray.length;

  for (let i = 1; i <= remainingDays; i++) {
    daysArray.push({
      day: i,
      month: nextMonth,
      year: nextMonthYear,
      isCurrentMonth: false,
    });
  }

  return daysArray;
};

const formatDate = (date: Date | null): string => {
  if (!date) return "DD / MM / YYYY";
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};

const formatDisplayDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  return date.toLocaleDateString("en-US", options);
};

const monthNames = [
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
];

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type RangeOption = {
  label: string;
  getDateRange: () => { start: Date; end: Date | null };
  displayDate: string;
};

const DatePicker = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [_selectedDay, setSelectedDay] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);
  const [activeInput, setActiveInput] = useState<"start" | "end" | null>(null);

  // Generate next month and year
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  // Range options
  const rangeOptions: RangeOption[] = [
    {
      label: "Today",
      getDateRange: () => {
        const start = new Date();
        return { start, end: start };
      },
      displayDate: formatDisplayDate(today),
    },
    {
      label: "Tomorrow",
      getDateRange: () => {
        const start = new Date();
        start.setDate(start.getDate() + 1);
        return { start, end: start };
      },
      displayDate: formatDisplayDate(new Date(today.getTime() + 86400000)),
    },
    {
      label: "Next Week",
      getDateRange: () => {
        const start = new Date();
        start.setDate(start.getDate() + 7);
        return { start, end: start };
      },
      displayDate: formatDisplayDate(new Date(today.getTime() + 7 * 86400000)),
    },
    {
      label: "Next Weekend",
      getDateRange: () => {
        const start = new Date();
        const daysUntilSaturday = (6 - start.getDay() + 7) % 7;
        start.setDate(start.getDate() + daysUntilSaturday);
        return { start, end: start };
      },
      displayDate: `Sat, Jan 14`,
    },
    {
      label: "Next Month",
      getDateRange: () => {
        const start = new Date();
        start.setMonth(start.getMonth() + 1);
        return { start, end: start };
      },
      displayDate: `Tues, Feb 5`,
    },
    {
      label: "2 Weeks",
      getDateRange: () => {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + 14);
        return { start, end };
      },
      displayDate: `Sun, Jan 19`,
    },
    {
      label: "4 Weeks",
      getDateRange: () => {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + 28);
        return { start, end };
      },
      displayDate: `Fri, Feb 8`,
    },
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number, month: number, year: number) => {
    const selectedDate = new Date(year, month, day);

    if (activeInput === "start" || !startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
      setActiveInput("end");
    } else if (activeInput === "end") {
      if (selectedDate < startDate!) {
        setStartDate(selectedDate);
        setEndDate(null);
      } else {
        setEndDate(selectedDate);
        setShowCalendar(false);
      }
    }

    setSelectedDay({ day, month, year });
  };

  const handleRangeOptionClick = (option: RangeOption) => {
    const { start, end } = option.getDateRange();
    setStartDate(start);
    setEndDate(end);
    setShowCalendar(false);
  };

  const isDateInRange = (day: number, month: number, year: number) => {
    if (!startDate || !endDate) return false;

    const date = new Date(year, month, day);
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (day: number, month: number, year: number) => {
    if (!startDate && !endDate) return false;

    const date = new Date(year, month, day);
    return (
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
  };

  const isToday = (day: number, month: number, year: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const handleApplyChanges = () => {
    setShowCalendar(false);
  };

  const handleCancel = () => {
    setShowCalendar(false);
  };

  return (
    <div className="font-sans w-full max-w-3xl mx-auto">
      <div className="flex gap-4 mb-4">
        <div className="relative w-1/2">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Start Date
          </label>
          <div
            className="border rounded p-2 flex items-center cursor-pointer"
            onClick={() => {
              setShowCalendar(true);
              setActiveInput("start");
            }}
          >
            <input
              type="text"
              className="flex-grow outline-none text-gray-500"
              value={formatDate(startDate)}
              readOnly
            />
            <CalendarIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="relative w-1/2">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            End Date
          </label>
          <div
            className="border rounded p-2 flex items-center cursor-pointer"
            onClick={() => {
              setShowCalendar(true);
              setActiveInput("end");
            }}
          >
            <input
              type="text"
              className="flex-grow outline-none text-gray-500"
              value={formatDate(endDate)}
              readOnly
            />
            <CalendarIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {showCalendar && (
        <div className="bg-white border rounded-md shadow-lg p-4 max-w-3xl">
          <div className="flex">
            {/* Left side - Custom date range options */}
            <div className="w-1/4 pr-4 border-r border-gray-200">
              <div className="uppercase text-xs font-medium text-gray-500 mb-4">
                CUSTOM DATE RANGE
              </div>

              {rangeOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRangeOptionClick(option)}
                >
                  <div className="text-sm text-gray-700">{option.label}</div>
                  <div className="text-xs text-gray-400">
                    {option.displayDate}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Calendar */}
            <div className="w-3/4 pl-4">
              <div className="flex justify-between mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-500" />
                </button>
                <div className="flex space-x-24">
                  <span className="font-medium">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <span className="font-medium">
                    {monthNames[nextMonth]} {nextMonthYear}
                  </span>
                </div>
                <button
                  onClick={handleNextMonth}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex gap-4">
                {/* First month calendar */}
                <div className="w-1/2">
                  <div className="grid grid-cols-7 mb-1">
                    {weekDays.map((day, index) => (
                      <div
                        key={index}
                        className="text-center text-xs font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysArray(currentYear, currentMonth)
                      .slice(0, 35)
                      .map((dateObj, index) => (
                        <div
                          key={index}
                          className={`
                          h-8 w-8 flex items-center justify-center text-sm rounded-full 
                          ${
                            dateObj.isCurrentMonth
                              ? "text-gray-700"
                              : "text-gray-300"
                          } 
                          ${
                            isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "bg-green-500 text-white"
                              : ""
                          }
                          ${
                            isDateInRange(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            ) &&
                            !isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "bg-green-100"
                              : ""
                          }
                          ${
                            isToday(dateObj.day, dateObj.month, dateObj.year) &&
                            !isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "border border-green-500"
                              : ""
                          }
                          cursor-pointer hover:bg-gray-100
                        `}
                          onClick={() =>
                            handleDateClick(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                          }
                        >
                          {dateObj.day}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Second month calendar */}
                <div className="w-1/2">
                  <div className="grid grid-cols-7 mb-1">
                    {weekDays.map((day, index) => (
                      <div
                        key={index}
                        className="text-center text-xs font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysArray(nextMonthYear, nextMonth)
                      .slice(0, 35)
                      .map((dateObj, index) => (
                        <div
                          key={index}
                          className={`
                          h-8 w-8 flex items-center justify-center text-sm rounded-full 
                          ${
                            dateObj.isCurrentMonth
                              ? "text-gray-700"
                              : "text-gray-300"
                          } 
                          ${
                            isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "bg-green-500 text-white"
                              : ""
                          }
                          ${
                            isDateInRange(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            ) &&
                            !isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "bg-green-100"
                              : ""
                          }
                          ${
                            isToday(dateObj.day, dateObj.month, dateObj.year) &&
                            !isDateSelected(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                              ? "border border-green-500"
                              : ""
                          }
                          cursor-pointer hover:bg-gray-100
                        `}
                          onClick={() =>
                            handleDateClick(
                              dateObj.day,
                              dateObj.month,
                              dateObj.year
                            )
                          }
                        >
                          {dateObj.day}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6 gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApplyChanges}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Apply changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
