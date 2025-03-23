import { SearchIcon } from 'lucide-react';
import { Badge } from '../ui/badge'
import { useQueryState } from 'nuqs';
// import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { DateRangePicker } from '../internal/CustomDatePicker';
import { useEffect, useState } from 'react';
import { addDays, addMonths,format } from 'date-fns';

function CustomTableHeader() {
  const [dateRange, setDateRange] = useState<{
      startDate: Date | null
      endDate: Date | null
    }>({
      startDate: null,
      endDate: null,
    })
  
    const handleRangeChange = (start: Date | null, end: Date | null) => {
      setDateRange({ startDate: start, endDate: end })
    }
  
    const today = new Date()
    const [status, setStatus] = useQueryState("status", {
        defaultValue: "",
        shallow: false,
        throttleMs: 1000,
      });
      const [search, setSearch] = useQueryState("search", {
        defaultValue: "",
        shallow: false,
        throttleMs: 1000,
      });

      const [startDate, setStartDate] = useQueryState("startDate", {
        defaultValue: `${dateRange.startDate}`,
        shallow: false,
        throttleMs: 1000,
      });
      const [endDate, setEndDate] = useQueryState("endDate", {
        defaultValue: `${dateRange.endDate}`,
        shallow: false,
        throttleMs: 1000,
      });
      useEffect(() => {
        const { startDate, endDate } = dateRange;
      

        if (startDate) {
          setStartDate(`${format(startDate, "dd/MM/yyyy")}`);
        } else {
          setStartDate(null); 
        }
      

        if (endDate) {
          setEndDate(`${format(endDate, "dd/MM/yyyy")}`);
        } else {
          setEndDate(null); 
        }
      }, [dateRange, setStartDate, setEndDate]);
      const [_page, setPage] = useQueryState("page", {
        defaultValue: "1",
        shallow: false,
        throttleMs: 1000,
      });
      useEffect(()=>{
          setPage("1")
      },[search,startDate,endDate])
  return (
    <div className="table-cardheader flex items-center justify-between flex-wrap pb-5">
        <div className="tags flex gap-4">
          <Badge
            variant={status === "" ? "primary" : "secondary"}
            style={"accent"}
            shape={"circle"}
            onClick={() => setStatus("")}
          >
            All
          </Badge>
          {["Plan Purchase", "Credit Top-Up"].map((item) => (
            <Badge
              key={item}
              variant={status === item.toLowerCase() ? "primary" : "secondary"}
              style={"accent"}
              shape={"circle"}
              onClick={() => setStatus(item.toLowerCase())}
            >
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 items-center flex-wrap">
          <div
            className="w-[350px] relative p-4 text-secondary-800"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2">
              <SearchIcon className="text-secondary-400" />
            </span>
            <input
              type="text"
              placeholder={"Search..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-secondary-100 rounded-md outline-none focus:ring-1 focus:ring-secondary-200"
            />
          </div>
           <DateRangePicker
           showButtons
                     startDate={dateRange.startDate}
                     endDate={dateRange.endDate}
                     onRangeChange={handleRangeChange}
                     minDate={addDays(today, -3000)} // Dates before this are not visible
                     maxDate={addMonths(today, 0)} // Dates after this are not visible
                     maxSelectableDate={addMonths(today, 15)} // Dates after this are visible but not selectable
                     />
          </div>
        </div>
  )
}

export default CustomTableHeader
