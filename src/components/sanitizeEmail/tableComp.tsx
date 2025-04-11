import PaginationComp from "../internal/PaginationComp";
import CustomTableHeader from "./CustomTableHeader";
import CustomTable from "./CustomTable";

interface TableProps {
  data: {
    email: string;
    status: string;
    reason: string;
    date: string;
  }[];
}

function TableComp({ data }: TableProps) {
  return (
    <div className="tableCard w-full p-6 border shadow-xl rounded-xl flex flex-col relative overflow-x-auto">
      <CustomTableHeader />
      <CustomTable data={data} />
      <PaginationComp
        size={7}
        count={data.length}
        next="https://collegeinfoapi/college/?page=2"
        previous="https://collegeinfoapi/college/?page=1"
        className="!justify-between"
        buttonClassName="rounded-full w-[40px] h-[40px]"
      />
    </div>
  );
}

export default TableComp;
