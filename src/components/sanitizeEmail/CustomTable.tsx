import { useState } from "react";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { LucideDelete, XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface TableProps {
  data: {
    email: string;
    status: string;
    reason: string;
    date: string;
  }[];
}

function CustomTable({ data }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleDelete = () => {
    alert(" Deleting " + selectedRows.size + " rows...");
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
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
          {data.slice(0, 7).map((item) => (
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
                ) : item.status === "Tag2" ? (
                  <Badge variant={"warning"} style={"accent"} shape={"circle"}>
                    {item.status}
                  </Badge>
                ) : (
                  <Badge
                    variant={"destructive"}
                    style={"accent"}
                    shape={"circle"}
                  >
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
        <div className="delete absolute bottom-5 bg-white border shadow-md rounded-[8px] py-[5px] px-[17px] left-1/2 transform -translate-x-1/2 flex gap-3 items-center z-10">
          <div className="flex">
          <Tooltip>
            <TooltipTrigger
              className="flex items-center gap-2 hover:cursor-pointer hover:bg-primary-200 p-2 rounded-lg transition-all duration-300 ease-in-out"
              onClick={handleSelectAll}
            >
              <input
                className="h-5 w-5 rounded-sm transition-all duration-300 ease-in-out"
                type="checkbox"
                checked={selectedRows.size > 0 && isAllSelected}
              />
              <span className="transition-all duration-300 ease-in-out">
                {selectedRows.size} Items
              </span>
            </TooltipTrigger>
            <TooltipContent
              className="bg-primary fill-primary"
              arrowClassName=" translate-x-[-300%]"
            >
              {isAllSelected ? (
                <p className="text-lg">Disselect All</p>
              ) : (
                <p className="text-lg">Select All</p>
              )}
            </TooltipContent>
          </Tooltip>

          <div className="border-r"></div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
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
            </DialogTrigger>
            <DialogContent className="w-[450px]" closeIconSize={4}>
              <div className="container flex flex-col gap-8 text-center">
                <h2 className="font-bold text-3xl">Delete Confirmation</h2>
                <p className="text-secondary-700">
                  Are you sure you want to delete this data? This action cannot
                  be undone.
                </p>
                <div className="buttons flex w-full justify-between gap-4">
                  <Button
                    variant={"destructive"}
                    className="flex-1 flex items-center !justify-center"
                    size={"md"}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <DialogClose className="flex-1 w-full ">
                    <Button
                      variant={"outline"}
                      className="w-full flex items-center !justify-center"
                      size="md"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </div>
          <Tooltip>
            <TooltipTrigger>
            <span className="bg-white shadow-lg border rounded-md h-5 w-5 p-0.5 flex items-center hover:bg-destructive-200 hover:text-destructive-500 hover:cursor-pointer" onClick={()=>setSelectedRows(new Set())} >
            <XIcon />
          </span>
            </TooltipTrigger>
            <TooltipContent className="bg-primary fill-primary">
              <p className="text-lg">Clear All</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </>
  );
}

export default CustomTable;
