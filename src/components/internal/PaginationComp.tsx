import React from "react";
import { ChevronLeft } from "lucide-react";

type Variant = "default" | "minimal" | "outlined" | "primary";
type Position = "left" | "center" | "right";

type ComponentOrder = ("info" | "pagination" | "prevNext" | "prev" | "next")[];

interface PaginationCompProps {
  count: number;
  size: number;
  next: string | null;
  previous: string | null;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  setPage?: (page: number) => void;
  
  // Layout and positioning
  layout?: {
    container?: Position | "space-between" | "space-around";
    infoText?: Position | false;
    pagination?: Position | false;
    prevNextButtons?: "together-left" | "together-right" | "split" | false;
    componentOrder?: ComponentOrder;
  };
  
  // Visual customization
  iconOnly?: boolean;
  textVariant?: Variant;
  pageVariant?: Variant;
  prevAndNextVariant?: Variant;
  paginationType?: "compressed" | "distributed" | "middle" | "hybrid";
  
  // Custom elements
  iconPrev?: React.ReactNode;
  iconNext?: React.ReactNode;
  customInfoText?: React.ReactNode;
  
  // CSS classes
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  disabledButtonClassName?: string;
  textClassName?: string;
  paginationContainerClassName?: string;
  infoTextContainerClassName?: string;
  prevNextContainerClassName?: string;
}

function PaginationComp({
  // Core pagination properties
  count = 0,
  size = 1,
  next,
  previous,
  currentPage: parentCurrentPage,
  onPageChange,
  setPage: parentSetPage,
  
  // Layout and positioning (with defaults)
  layout = {
    container: "center",
    infoText: "left",
    pagination: "center",
    prevNextButtons: "split",
    componentOrder: ["info", "prev", "pagination", "next"],
  },
  
  // Visual customization
  iconOnly = false,
  textVariant = "default",
  pageVariant = "default",
  prevAndNextVariant = "default",
  paginationType = "compressed",
  
  // Custom elements
  iconPrev = <ChevronLeft />,
  iconNext = <ChevronLeft className="rotate-180" />,
  customInfoText,
  
  // CSS classes
  className = "",
  buttonClassName = "",
  activeButtonClassName = "!bg-primary-100 !text-primary-700",
  disabledButtonClassName = "",
  textClassName = "md:text-sm",
  paginationContainerClassName = "",
  infoTextContainerClassName = "",
  prevNextContainerClassName = "",
}: PaginationCompProps) {
  const currentPage = parentCurrentPage ?? 1;
  const totalPages = Math.ceil(count / size);
  
  // Set default component order if not provided
  const componentOrder = layout.componentOrder || ["info", "prev", "pagination", "next"];

  const getPageNumber = (url: string | null) => {
    if (!url) return null;
    try {
      const fullUrl = url.startsWith("http") ? url : `${window.location.origin}${url}`;
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
    parentSetPage?.(newPage);
    onPageChange?.(newPage);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (window.innerWidth < 400) {
      pages.push(1);
      if (currentPage > 2) pages.push("...");
      if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push("...");
      if (totalPages > 1) pages.push(totalPages);
    } else if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 3) {
        pages.push(2);
        if (totalPages > 3) pages.push(3);
        if (totalPages > 4) pages.push(4);
        if (totalPages > 5) pages.push("...");
        if (totalPages > 1) pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...");
        pages.push(totalPages - 3);
        pages.push(totalPages - 2);
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else {
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const getVariantStyles = (variant: Variant) => {
    switch (variant) {
      case "minimal":
        return "bg-transparent border-none";
      case "outlined":
        return "border border-secondary-300 hover:border-secondary-400";
      case "primary":
        return "text-primary bg-primary-50 hover:bg-primary-100 active:shadow-sm";
      default:
        return "bg-secondary-100 hover:bg-secondary-200";
    }
  };

  const getPositionClasses = (position?: Position | "space-between" | "space-around") => {
    switch (position) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      case "space-between":
        return "justify-between";
      case "space-around":
        return "justify-around";
      case "center":
      default:
        return "justify-center";
    }
  };

  // Render the info text component
  const renderInfoText = () => {
    if (layout.infoText === false) return null;
    
    return (
      <div className={`flex items-center ${infoTextContainerClassName}`}>
        {customInfoText || (
          <p className={`flex-shrink-0 h-full px-2 sm:px-3 py-1 sm:py-2.5 text-sm gap-1 items-center sm:text-base rounded ${textClassName} ${getVariantStyles(textVariant)}`}>
            <span className="opacity-70">Showing:</span> {size} of {count}
          </p>
        )}
      </div>
    );
  };

  // Render the prev button
  const renderPrevButton = () => {
    if (!count) return null;
    
    return (
      <button
        onClick={() => prevPage && goToPage(prevPage)}
        className={`flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer ${getVariantStyles(prevAndNextVariant)} ${buttonClassName} ${!prevPage ? disabledButtonClassName : ""}`}
        disabled={!prevPage}
      >
        {iconPrev}
        {!iconOnly && paginationType !== "hybrid" && <span className="hidden sm:inline">Previous</span>}
      </button>
    );
  };

  // Render the next button
  const renderNextButton = () => {
    if (!count) return null;
    
    return (
      <button
        onClick={() => nextPage && goToPage(nextPage)}
        className={`flex px-2 sm:pl-2 sm:pr-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer ${getVariantStyles(prevAndNextVariant)} ${buttonClassName} ${!nextPage ? disabledButtonClassName : ""}`}
        disabled={!nextPage}
      >
        {!iconOnly && paginationType !== "hybrid" && <span className="hidden sm:inline">Next</span>}
        {iconNext}
      </button>
    );
  };

  // Render both prev and next buttons together
  const renderPrevNextButtons = () => {
    if (!count || layout.prevNextButtons === false) return null;
    
    return (
      <div className={`flex items-center gap-2 ${prevNextContainerClassName}`}>
        {renderPrevButton()}
        {renderNextButton()}
      </div>
    );
  };

  // Render the page numbers
  const renderPageNumbers = () => {
    if (layout.pagination === false) return null;
    
    if (paginationType === "middle") {
      return (
        <p className={`flex h-full px-2 sm:px-3 py-1 sm:py-2 text-sm gap-1 items-center sm:text-base rounded ${textClassName} ${getVariantStyles(textVariant)}`}>
          Showing <span className={textVariant === "primary" ? "text-primary" : ""}>{currentPage}</span> of{" "}
          <span className={textVariant === "primary" ? "text-primary" : ""}>{totalPages}</span> Pages
        </p>
      );
    }
    
    return (
      <div className={`flex ${paginationType === "distributed" ? "w-fit max-md:w-full justify-between gap-3" : "gap-1"}`}>
        {getPageNumbers().map((pg, index) =>
          typeof pg === "number" ? (
            <button
              key={index}
              onClick={() => goToPage(pg)}
              className={`flex p-1 sm:p-2 text-sm gap-1 items-center sm:text-base rounded hover:cursor-pointer ${pg === currentPage ? activeButtonClassName : ""} ${getVariantStyles(pageVariant)} ${buttonClassName}`}
            >
              {pg.toString().padStart(2, '0')}
            </button>
          ) : (
            <span key={index} className={`p-2 text-2xl sm:text-base ${pageVariant === "primary" ? "text-primary" : "text-secondary-700"}`}>...</span>
          )
        )}
      </div>
    );
  };

  // Create the layout with components in the specified order
  const createLayout = () => {
    const componentsMap: Record<string, React.ReactNode> = {
      info: renderInfoText(),
      pagination: (
        <div className={`flex items-center ${getPositionClasses(layout.pagination as Position)} ${paginationContainerClassName}`}>
          {renderPageNumbers()}
        </div>
      ),
      prevNext: renderPrevNextButtons(),
      prev: layout.prevNextButtons === "split" ? renderPrevButton() : null,
      next: layout.prevNextButtons === "split" ? renderNextButton() : null
    };

    // Handle cases for prev/next button placement
    if (layout.prevNextButtons === "together-left" || layout.prevNextButtons === "together-right") {
      // Remove individual prev/next buttons from the map
      componentsMap.prev = null;
      componentsMap.next = null;
    } else if (layout.prevNextButtons === "split") {
      // Remove the combined prevNext from the map
      componentsMap.prevNext = null;
    }

    return componentOrder
      .map((componentKey, index) => {
        const component = componentsMap[componentKey];
        return component ? <React.Fragment key={index}>{component}</React.Fragment> : null;
      })
      .filter(Boolean); // Filter out null components
  };

  return (
    <div
      className={`w-full flex flex-wrap items-center gap-3 ${getPositionClasses(layout.container)} ${className}`}
    >
      {createLayout()}
    </div>
  );
}

export default PaginationComp;