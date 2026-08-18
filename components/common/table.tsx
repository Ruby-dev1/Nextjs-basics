"use client";

import React from "react";

export type Column<T> = {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
};

type AdminTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
};

const AdminTable = <T,>({
  columns,
  data,
  isLoading = false,
}: AdminTableProps<T>) => {
  return (
    <div className="overflow-hidden rounded-xl border border-pink-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-pink-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-4 text-left font-semibold text-gray-700"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-10 text-center text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-10 text-center text-gray-500"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-pink-50/30"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-5 py-4 text-gray-600"
                    >
                      {column.render
                        ? column.render(item)
                        : (item as any)[column.key]}
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

export default AdminTable;