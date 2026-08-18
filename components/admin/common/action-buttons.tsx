"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons = ({
  onEdit,
  onDelete,
}: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">

      {/* Edit */}
      <button
        type="button"
        onClick={onEdit}
        title="Edit"
        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-600"
      >
        <FaEdit size={14} />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={onDelete}
        title="Delete"
        className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-600"
      >
        <FaTrash size={14} />
      </button>

    </div>
  );
};

export default ActionButtons;