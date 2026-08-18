"use client";

import React from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

interface DeleteModalProps {
  isOpen: boolean;
  productName: string;
  isDeleting?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({
  isOpen,
  productName,
  isDeleting = false,
  onCancel,
  onConfirm,
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <FaTrash className="text-red-500" size={16} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Delete Product
              </h2>

              <p className="text-sm text-gray-500">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Message */}
        <p className="mt-5 text-sm leading-6 text-gray-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-800">
            "{productName}"
          </span>
          ?
        </p>

<div className="mt-6 flex w-full justify-end gap-3">
  <button
    type="button"
    onClick={onCancel}
    disabled={isDeleting}
    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
  >
    Cancel
  </button>

  <button
    type="button"
    onClick={onConfirm}
    disabled={isDeleting}
    className=" border rounded-lg bg-red-500 px-6 py-2 text-sm font-semibold text-gray "
  >
    {isDeleting ? "Deleting..." : "Delete"}
  </button>
</div>
      </div>
    </div>
  );
};

export default DeleteModal;