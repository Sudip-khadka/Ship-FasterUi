import React from "react";
import { ChevronLeft } from "lucide-react";
import { useQueryState } from "nuqs";

interface PaginationCompProps {
  iconOnly?: boolean;
  count?: number;
  size?: number;
  next: string | null;
  previous: string | null;
  variant?: "default" | "minimal" | "outlined" | "primary";
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  disabledButtonClassName?: string;
  iconPrev?: React.ReactNode;
  iconNext?: React.ReactNode;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  setPage?: (page: number) => void;
  type?: "compressed" | "leftAndRight" | "middle" | "distributed";
}

function PaginationComp({
  type = "compressed",
  iconOnly = false,
  count = 0,
  size = 1,
  next,
  previous,
  variant = "default",
  className = "",
  buttonClassName = "",
  activeButtonClassName = "!bg-primary-100 !text-primary-700",
  disabledButtonClassName = "",
  iconPrev = <ChevronLeft />,
  iconNext = <ChevronLeft className="rotate-180" />,
  onPageChange,
  currentPage: parentCurrentPage,
  setPage: parentSetPage,
}: PaginationCompProps) {
  const [page, setPage] = useQueryState("page", {
    defaultValue: "1",
    shallow: false,
    throttleMs: 1000,
  });

  const currentPage = parentCurrentPage ?? Number(page);
  const totalPages = Math.ceil((count || 0) / (size || 1));

  const getPageNumber = (url: string | null) => {
    if (!url) return null;

    try {
      const fullUrl = url.startsWith("http")
        ? url
        : `${window.location.origin}${url}`;
      const urlParams = new URLSearchParams(new URL(fullUrl).search);
      return Number(urlParams.get("page")) || 1;
    } catch (error) {
      console.error("Error parsing URL:", url, error);
      return null;
    }
  };

  const nextPage = getPageNumber(next);
  const prevPage = getPageNumber(previous);

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    if (parentSetPage) {
      parentSetPage(newPage);
    } else {
      setPage(String(newPage));
    }
    onPageChange?.(newPage);
  };

  // ✅ Responsive Page Number Logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (window.innerWidth < 400) { 
      // EXTRA SMALL SCREENS (<400px) – Show First, Middle, Last Page
      pages.push(1);
      if (currentPage > 2) pages.push("...");
      pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    } else if (totalPages <= 5) { 
      // Normal Case (Total Pages <= 5)
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 3) {
        pages.push(2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "minimal":
        return "bg-transparent border-none";
      case "outlined":
        return "border border-secondary-300 hover:border-secondary-400";
      case "primary":
        return "text-primary hover:bg-primary-50";
      default:
        return "bg-secondary-100 hover:bg-secondary-200";
    }
  };
  return (
    <div
      className={`w-full flex items-center justify-center gap-2 mt-4 ${className} 
        sm:gap-1 md:gap-2 lg:gap-3 ${
          type === "distributed" ? " justify-evenly" : ""
        }`}
    >
      {count > 0 && (
        <button
          onClick={() => prevPage && goToPage(prevPage)}
          className={`flex px-1 sm:px-2 py-1 text-xs sm:text-sm rounded hover:cursor-pointer  
            ${getVariantStyles()} ${buttonClassName} ${
            !prevPage ? disabledButtonClassName : ""
          }`}
          disabled={!prevPage}
        >
          {iconPrev}
          {!iconOnly && <span className="hidden sm:inline">Previous</span>}
        </button>
      )}
      {(type === "compressed" || type === "distributed") && (
        <div className={`buttons flex  ${type==="distributed"?"w-[30%] max-md:w-full justify-between":"gap-1"}`}>
          {getPageNumbers().map((pg, index) =>
            typeof pg === "number" ? (
              <button
                key={index}
                onClick={() => goToPage(pg)}
                className={`hover:cursor-pointer px-1 sm:px-2 py-1 text-xs sm:text-sm rounded ${
                    pg === currentPage ? activeButtonClassName : ""
                  } 
                ${getVariantStyles()} ${buttonClassName} `}
              >
                {pg}
              </button>
            ) : (
              <span key={index} className={`px-1 text-2xl sm:text-base  sm:px-2 ${variant==="primary"?"text-primary":""}`}>
                ...
              </span>
            )
          )}
        </div>
      )}
      {type === "middle" && (
        <p className="md:text-sm">
        Showing{" "}
        <span className={`${variant === "primary" ? "text-primary" : ""}`}>
          {currentPage}
        </span>{" "}
        of{" "}
        <span className={`${variant === "primary" ? "text-primary" : ""}`}>
          {size}
        </span>{" "}
        Results of{" "}
        <span className={`${variant === "primary" ? "text-primary" : ""}`}>
          {count}
        </span>
      </p>
      )}
      {count > 0 && (
        <button
          onClick={() => nextPage && goToPage(nextPage)}
          className={`flex px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base rounded hover:cursor-pointer 
            ${getVariantStyles()} ${buttonClassName} ${
            !nextPage ? disabledButtonClassName : ""
          }`}
          disabled={!nextPage}
        >
          {!iconOnly && <span className="hidden sm:inline">Next</span>}
          {iconNext}
        </button>
      )}
      {type === "leftAndRight" && (
        <p className="md:text-sm">
          Showing{" "}
          <span className={`${variant === "primary" ? "text-primary" : ""}`}>
            {currentPage}
          </span>{" "}
          of{" "}
          <span className={`${variant === "primary" ? "text-primary" : ""}`}>
            {size}
          </span>{" "}
          Results of{" "}
          <span className={`${variant === "primary" ? "text-primary" : ""}`}>
            {count}
          </span>
        </p>
      )}
    </div>
  );
}

export default PaginationComp;
