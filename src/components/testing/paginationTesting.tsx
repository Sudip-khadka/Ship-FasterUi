import PaginationComp from "@/components/internal/PaginationComp"
import { useState } from "react";
export function ParentComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    
    const handlePageChange = (newPage: number) => {
      console.log("Page changed to:", newPage);
      setCurrentPage(newPage); // Update the current page in the parent state
    };

  
    return (
      <PaginationComp
        count={100}
        size={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        setPage={handlePageChange}
        next="/api/data?page=2"
        previous="/api/data?page=1"
        prevAndNextVariant="primary"
      />
    );
  }
  