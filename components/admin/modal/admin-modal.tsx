"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";

interface AdminModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  maxWidth?: string;
}

const AdminModal = ({
  isOpen,
  title,
  children,
  onClose,
  maxWidth = "max-w-3xl",
}: AdminModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      <div
        className={`relative max-h-[90vh] w-full ${maxWidth} overflow-y-auto rounded-xl bg-white shadow-xl`}
      >

        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-pink-100 bg-white px-6 py-4">
          
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <FaTimes size={16} />
          </button>

        </div>

        {/* Modal Content */}
        {children}

      </div>
    </div>
  );
};

export default AdminModal;