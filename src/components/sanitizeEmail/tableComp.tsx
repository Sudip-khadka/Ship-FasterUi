import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import PaginationComp from "../internal/PaginationComp";
import { Badge } from "../ui/badge";
import { BookDashedIcon, LucideDelete, Minus, SearchIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useQueryState } from "nuqs";

interface TableProps {
  data: {
    email: string;
    status: string;
    reason: string;
    date: string;
  }[];
}

function TableComp({ data }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set()); // To store selected row keys
  const [selectAll, setSelectAll] = useState(false); // To manage the 'Select All' checkbox state
  // Toggle the 'select all' checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      const allEmails = data.map((item) => item.email);
      setSelectedRows(new Set(allEmails));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual row checkbox toggle
  const handleRowSelect = (email: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(email)) {
      newSelectedRows.delete(email);
    } else {
      newSelectedRows.add(email);
    }
    setSelectedRows(newSelectedRows);
  };

  // Check if all rows are selected
  const isAllSelected = data.length > 0 && selectedRows.size === data.length;
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
    defaultValue: "2025-03-03",
    shallow: false,
    throttleMs: 1000,
  });
  const [endDate, setEndDate] = useQueryState("endDate", {
    defaultValue: "2025-03-03",
    shallow: false,
    throttleMs: 1000,
  });
  return (
    <div className="tableCard w-full p-6 border shadow-xl rounded-xl flex flex-col relative">
      <div className="table-cardheader flex items-center justify-between flex-wrap pb-5">
        <div className="tags flex gap-4">
          <Badge
            variant={status === "" ? "primary" : "secondary"}
            style={"accent"}
            shape={"circle"}
            onClick={() => setStatus("")}
          >
            Tag
          </Badge>
          <Badge
            variant={status === "tag2" ? "primary" : "secondary"}
            style={"accent"}
            shape={"circle"}
            onClick={() => setStatus("tag2")}
          >
            Tag2
          </Badge>
          <Badge
            variant={status === "tag3" ? "primary" : "secondary"}
            style={"accent"}
            shape={"circle"}
            onClick={() => setStatus("tag3")}
          >
            Tag3
          </Badge>
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
          <div className="date flex gap-2 items-center border h-11 p-2 rounded-xl">
            <Tooltip>
              <TooltipTrigger>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="appearance-none"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Start Date</p>
              </TooltipContent>
            </Tooltip>
            <Minus />
            <Tooltip>
              <TooltipTrigger>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="appearance-none overflow-hidden"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>End Date</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
      <Table className="border rounded-[12px]  overflow-clip ">
        <TableHeader className="bg-secondary-100 h-[50px]">
          <TableRow>
            {/* Select All checkbox */}
            <TableHead>
              <input
                className="h-5 w-5 rounded-sm"
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.email}
              className={`h-[50px] ${
                selectedRows.has(item.email) ? "bg-secondary-100" : ""
              }`}
            >
              {/* Individual row checkbox */}
              <TableCell>
                <input
                  className="h-5 w-5 rounded-sm"
                  type="checkbox"
                  checked={selectedRows.has(item.email)}
                  onChange={() => handleRowSelect(item.email)}
                />
              </TableCell>
              <TableCell className="font-medium">{item.email}</TableCell>
              <TableCell>
                {item.status === "Tag1" ? (
                  <Badge variant={"success"} style={"accent"} shape={"circle"}>
                    {item.status}
                  </Badge>
                ) : item.status==="Tag2"?(
                    <Badge variant={"warning"} style={"accent"} shape={"circle"}>
                      {item.status}
                    </Badge>
                  ):(
                    <Badge variant={"destructive"} style={"accent"} shape={"circle"}>
                      {item.status}
                    </Badge>
                  )}
              </TableCell>
              <TableCell>{item.reason}</TableCell>
              <TableCell className="text-right">{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedRows.size > 0 && (
        <div className="delete absolute bottom-10 bg-white border shadow-md rounded-[8px] py-[5px] px-[17px] left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
          <div className="selected-info flex items-center gap-2 hover:cursor-pointer">
            <Tooltip>
              <TooltipTrigger>
                <input
                  className="h-5 w-5 rounded-sm"
                  type="checkbox"
                  checked={selectedRows.size > 0 && isAllSelected}
                  onChange={handleSelectAll}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-primary fill-primary">
                {isAllSelected ? <p>Disselect All</p> : <p>Select All</p>}
              </TooltipContent>
            </Tooltip>
            <span>{selectedRows.size} Items</span>
          </div>
          <div className="border-r"></div>
          <Badge
            variant={"destructive"}
            style={"outlined"}
            startIcon={<LucideDelete />}
            className="border-none "
            onClick={() => {
              // Handle delete logic here
              console.log("Deleting rows:", Array.from(selectedRows));
            }}
          >
            Delete
          </Badge>
        </div>
      )}
      <PaginationComp
        size={7}
        count={data.length}
        next="https://collegeinfoapi/college/?page=2"
        previous="https://collegeinfoapi/college/?page=1"
        variant="primary"
        type="compressed"
      />
    </div>
  );
}

export default TableComp;
