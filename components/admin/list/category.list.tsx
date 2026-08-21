
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import Table, {
  TableColumn,
} from "@/components/admin/common/admintable";

import ActionButtons from "@/components/admin/common/action-buttons";
import Pagination from "@/components/admin/common/pagination";
import DeleteModal from "@/components/admin/common/delete-modal";
import AdminModal from "@/components/admin/modal/admin-modal";
import CategoryForm from "@/components/admin/form/category.form";

import {
  getAllCategories,
  deleteCategory,
} from "@/api/category.api";

interface Category {
  _id: string;
  name: string;
  description: string;
  logo?: {
    path: string;
    public_id: string;
  };
}

const CategoryList = () => {
  const [page, setPage] = useState(1);

  // =========================
  // Delete Modal State
  // =========================

  const [deleteCategoryItem, setDeleteCategoryItem] =
    useState<Category | null>(null);

  // =========================
  // Edit Modal State
  // =========================

  const [editCategoryItem, setEditCategoryItem] =
    useState<Category | null>(null);

  const queryClient = useQueryClient();

  // =========================
  // Get Categories
  // =========================

  const { data, isLoading } = useQuery({
    queryKey: ["admin-categories", page],
    queryFn: () => getAllCategories(page),
  });

  const categories: Category[] =
    data?.data?.categories ?? [];

  // =========================
  // Delete Category
  // =========================

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });

      setDeleteCategoryItem(null);
    },
  });

  // =========================
  // Table Columns
  // =========================

  const columns: TableColumn<Category>[] = [
    {
      key: "name",
      label: "Category",

      render: (category) => (
        <div className="flex items-center gap-3">

          {category.logo?.path ? (
            <img
              src={category.logo.path}
              alt={category.name}
              className="h-11 w-11 rounded-lg object-contain"
            />
          ) : (
            <div className="h-11 w-11 rounded-lg bg-pink-50" />
          )}

          <div>
            <p className="font-medium text-gray-800">
              {category.name}
            </p>

            <p className="text-xs text-gray-400">
              ID: {category._id.slice(-6)}
            </p>
          </div>

        </div>
      ),
    },

    // =========================
    // Description
    // =========================

    {
      key: "description",
      label: "Description",

      render: (category) => (
        <p className="max-w-md truncate text-sm text-gray-500">
          {category.description}
        </p>
      ),
    },

    // =========================
    // Actions
    // =========================

    {
      key: "actions",
      label: "Actions",

      render: (category) => (
        <ActionButtons

          // EDIT
          onEdit={() => {
            setEditCategoryItem(category);
          }}

          // DELETE
          onDelete={() => {
            setDeleteCategoryItem(category);
          }}

        />
      ),
    },
  ];

  return (
    <section className="w-full p-6">

      {/* =========================
          Header
      ========================= */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Categories
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Glowora skincare categories.
          </p>
        </div>

        {/* Add Category */}

        <Link
          href="/admin/category/new"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <FaPlus size={12} />
          Add Category
        </Link>

      </div>

      {/* =========================
          Category Table
      ========================= */}

      <Table
        columns={columns}
        data={categories}
        isLoading={isLoading}
        emptyMessage="No categories found."
      />

      {/* =========================
          Pagination
      ========================= */}

      <Pagination
        currentPage={page}
        totalPages={
          data?.data?.pagination?.total_Page ?? 1
        }
        onPageChange={setPage}
      />

      {/* =========================
          Edit Category Modal
      ========================= */}

      <AdminModal
        isOpen={!!editCategoryItem}
        onClose={() => {
          setEditCategoryItem(null);
        }}
        title="Edit Category"
      >
        {editCategoryItem && (
          <CategoryForm
            categoryId={editCategoryItem._id}
            onSuccess={() => {
              setEditCategoryItem(null);

              queryClient.invalidateQueries({
                queryKey: ["admin-categories"],
              });
            }}
          />
        )}
      </AdminModal>

      {/* =========================
          Delete Category Modal
      ========================= */}

      <DeleteModal
        isOpen={!!deleteCategoryItem}
        productName={deleteCategoryItem?.name ?? ""}
        isDeleting={deleteMutation.isPending}

        onCancel={() => {
          setDeleteCategoryItem(null);
        }}

        onConfirm={() => {
          if (deleteCategoryItem) {
            deleteMutation.mutate(
              deleteCategoryItem._id
            );
          }
        }}
      />

    </section>
  );
};

export default CategoryList;
