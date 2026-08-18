"use client";

import React from "react";

export type TableColumn<T> = {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
};

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
}

const Table = <T,>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data found.",
}: TableProps<T>) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-pink-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          {/* Header */}
          <thead className="bg-pink-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-4 text-left text-sm font-semibold text-gray-700"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 transition hover:bg-pink-50/30"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-5 py-4 text-sm text-gray-600"
                    >
                      {column.render
                        ? column.render(item)
                        : String(
                            (item as Record<string, unknown>)[column.key] ?? ""
                          )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;