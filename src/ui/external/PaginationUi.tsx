"use client";

import type * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type PaginationType =
  | "page-number"
  | "left-icon"
  | "right-icon"
  | "previous-icon-text"
  | "next-icon-text"
  | "text";

export type PaginationState = "default" | "hovered" | "active";
export type PaginationStyle = "blank" | "filled" | "outline";

export interface CustomPaginationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
  showPageLabel?: boolean;
  pageLabel?: string;
  type?: PaginationType;
  state?: PaginationState;
  // Removed style property from here
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function CustomPagination({
  currentPage = 1,
  totalPages = 40,
  totalItems = 1000,
  itemsPerPage = 10,
  showLeftArrow = true,
  showRightArrow = true,
  showPageLabel = true,
  pageLabel,
  type = "page-number",
  state = "default",
  // style = "blank",
  onPageChange,
  siblingCount = 1,
  leftIcon = <ChevronLeft className="h-4 w-4" />,
  rightIcon = <ChevronRight className="h-4 w-4" />,
  ...props
}: CustomPaginationProps) {
  // Calculate the range of pages to display
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Default page label if not provided
  const defaultPageLabel = `Showing ${startItem} of ${endItem} of ${totalItems} Results`;
  const displayPageLabel = pageLabel || defaultPageLabel;

  // Generate page numbers to display
  const generatePagination = () => {
    // Always include first page, last page, and pages around current page
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const firstPage = 1;
    const lastPage = totalPages;

    // Calculate the range of pages to show
    let startPage = Math.max(firstPage, currentPage - siblingCount);
    let endPage = Math.min(lastPage, currentPage + siblingCount);

    // Adjust if we're near the start or end
    if (currentPage <= siblingCount + 1) {
      endPage = Math.min(firstPage + siblingCount * 2, lastPage);
    }

    if (currentPage >= lastPage - siblingCount) {
      startPage = Math.max(lastPage - siblingCount * 2, firstPage);
    }

    const pages = range(startPage, endPage);

    // Add ellipsis and first/last pages
    const itemsWithEllipsis = [];

    if (startPage > firstPage) {
      itemsWithEllipsis.push(firstPage);
      if (startPage > firstPage + 1) {
        itemsWithEllipsis.push("ellipsis");
      }
    }

    itemsWithEllipsis.push(...pages);

    if (endPage < lastPage) {
      if (endPage < lastPage - 1) {
        itemsWithEllipsis.push("ellipsis");
      }
      itemsWithEllipsis.push(lastPage);
    }

    // Remove duplicate ellipsis (ensure only one set of dots)
    const result = [];
    let hasEllipsis = false;

    for (const item of itemsWithEllipsis) {
      if (item === "ellipsis") {
        if (!hasEllipsis) {
          result.push(item);
          hasEllipsis = true;
        }
      } else {
        result.push(item);
      }
    }

    return result;
  };

  const paginationItems = generatePagination();

  // Get the appropriate class based on type, state, and style
  const getItemClass = (isActive: boolean, isHovered = false) => {
    let baseClass =
      "flex h-9 min-w-9 items-center justify-center text-sm transition-colors";

    // Style classes
    if (isActive) {
      baseClass += " text-[#10B981] font-medium";
    } else if (isHovered) {
      baseClass += " hover:text-[#10B981]";
    } else {
      baseClass += " text-muted-foreground hover:text-[#10B981]";
    }

    return baseClass;
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  // Format page number with leading zero if needed
  const formatPageNumber = (page: number | string) => {
    if (typeof page === "number") {
      return page < 10 ? `0${page}` : `${page}`;
    }
    return page;
  };

  return (
    <Pagination className={cn("flex items-center gap-1")} {...props}>
      {" "}
      <PaginationContent className="flex items-center gap-1">
        {/* Left Arrow / Previous */}
        {showLeftArrow && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={cn(
                "gap-1 px-2",
                currentPage <= 1 && "pointer-events-none opacity-50",
                type === "previous-icon-text" &&
                  state === "active" &&
                  "text-[#10B981]"
              )}
            >
              {type === "left-icon" || type === "previous-icon-text"
                ? leftIcon
                : null}
              {type === "previous-icon-text" || type === "text" ? (
                <span className={state === "active" ? "text-[#10B981]" : ""}>
                  Previous
                </span>
              ) : null}
            </PaginationPrevious>
          </PaginationItem>
        )}

        {/* Page Numbers - Only show for page-number type */}
        {type === "page-number" &&
          paginationItems.map((page, i) => {
            if (page === "ellipsis") {
              return (
                <PaginationItem key={`ellipsis-${i}`}>
                  <span className="px-2 text-muted-foreground">...</span>
                </PaginationItem>
              );
            }

            const isCurrentPage = page === currentPage;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page as number);
                  }}
                  className={cn(
                    getItemClass(
                      isCurrentPage || state === "active",
                      state === "hovered"
                    )
                  )}
                  isActive={isCurrentPage}
                >
                  {formatPageNumber(page)}
                </PaginationLink>
              </PaginationItem>
            );
          })}

        {/* Right Arrow / Next */}
        {showRightArrow && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={cn(
                "gap-1 px-2",
                currentPage >= totalPages && "pointer-events-none opacity-50",
                type === "next-icon-text" &&
                  state === "active" &&
                  "text-[#10B981]"
              )}
            >
              {type === "next-icon-text" || type === "text" ? (
                <span
                  className={
                    state === "active" ||
                    (type === "next-icon-text" && !showPageLabel)
                      ? "text-[#10B981]"
                      : ""
                  }
                >
                  Next
                </span>
              ) : null}
              {type === "right-icon" || type === "next-icon-text"
                ? rightIcon
                : null}
            </PaginationNext>
          </PaginationItem>
        )}

        {/* Page Label */}
        {showPageLabel && (
          <div className="ml-auto text-sm text-muted-foreground">
            {displayPageLabel}
          </div>
        )}
      </PaginationContent>
    </Pagination>
  );
}
