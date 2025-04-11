"use client";

import React, { useState } from "react";
import { CustomPagination } from "../ui/external/PaginationUi";

export function PaginationExamples() {
  // Fix: Properly destructure the useState return value
  const [currentPage, setCurrentPage] = useState(5);
  console.log(currentPage);
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Page Number Variants</h2>

        <div>
          <CustomPagination
            type="page-number"
            state="default"
            currentPage={5}
            onPageChange={setCurrentPage}
            showPageLabel={false}
          />
        </div>

        <div>
          <CustomPagination
            type="page-number"
            state="default"
            currentPage={5}
            onPageChange={setCurrentPage}
            showPageLabel={false}
            siblingCount={2}
          />
        </div>

        <div>
          <CustomPagination
            type="page-number"
            state="default"
            currentPage={5}
            onPageChange={setCurrentPage}
            showPageLabel={false}
            siblingCount={0}
          />
        </div>

        <div>
          <CustomPagination
            type="page-number"
            state="default"
            currentPage={5}
            onPageChange={setCurrentPage}
            showLeftArrow={false}
            showRightArrow={false}
            showPageLabel={false}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Previous/Next Variants</h2>

        <div>
          <CustomPagination
            type="previous-icon-text"
            state="default"
            currentPage={1}
            onPageChange={setCurrentPage}
            showPageLabel={true}
          />
        </div>

        <div>
          <CustomPagination
            type="previous-icon-text"
            state="active"
            currentPage={1}
            onPageChange={setCurrentPage}
            showPageLabel={true}
          />
        </div>

        <div>
          <CustomPagination
            type="left-icon"
            state="default"
            currentPage={1}
            onPageChange={setCurrentPage}
            showPageLabel={true}
          />
        </div>

        <div>
          <CustomPagination
            type="right-icon"
            state="default"
            currentPage={1}
            onPageChange={setCurrentPage}
            showPageLabel={true}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Interactive Example</h2>
        <PaginationDemo />
      </div>
    </div>
  );
}

function PaginationDemo() {
  const [currentPage, setCurrentPage] = React.useState(5);
  const [type, setType] = React.useState<
    "page-number" | "previous-icon-text" | "text"
  >("page-number");
  const [showLabel, setShowLabel] = React.useState(true);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            className="p-2 border rounded-md"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="page-number">Page Number</option>
            <option value="previous-icon-text">Previous/Next with Icon</option>
            <option value="text">Text Only</option>
          </select>
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showLabel}
              onChange={(e) => setShowLabel(e.target.checked)}
            />
            <span className="text-sm font-medium">Show Page Label</span>
          </label>
        </div>
      </div>

      <CustomPagination
        type={type}
        showPageLabel={showLabel}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
