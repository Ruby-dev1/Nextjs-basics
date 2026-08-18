"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-5 flex items-center justify-between">

      {/* Page information */}
      <p className="text-sm text-gray-500">
        Page <span className="font-medium text-gray-700">{currentPage}</span>{" "}
        of{" "}
        <span className="font-medium text-gray-700">{totalPages}</span>
      </p>

      {/* Pagination buttons */}
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* Pages */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              type="button"
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-9 min-w-9 rounded-lg px-3 text-sm transition ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "border border-gray-200 text-gray-600 hover:bg-pink-50"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FaChevronRight size={12} />
        </button>

      </div>
    </div>
  );
};

export default Pagination;