"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";

import Table, {
  TableColumn,
} from "@/components/admin/common/admintable";

import ActionButtons from "@/components/admin/common/action-buttons";
import Pagination from "@/components/admin/common/pagination";
import DeleteModal from "@/components/admin/common/delete-modal";

import AdminModal from "@/components/admin/modal/admin-modal";
import BrandForm from "@/components/admin/form/brand.form";

import {
  getAllBrands,
  deleteBrand,
} from "@/api/brand.api";

interface Brand {
  _id: string;
  name: string;
  description: string;
  logo?: {
    path: string;
    public_id: string;
  };
}

const BrandList = () => {


  const [page, setPage] = useState(1);
  const [deleteBrandItem, setDeleteBrandItem] =
    useState<Brand | null>(null);

const [editBrandId, setEditBrandId] =
  useState<string | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin-brands", page],
    queryFn: () => getAllBrands(page),
  });

  const brands: Brand[] = data?.data?.brands ?? [];

  const deleteMutation = useMutation({
    mutationFn: deleteBrand,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-brands"],
      });

      setDeleteBrandItem(null);
    },
  });

  const columns: TableColumn<Brand>[] = [
    {
      key: "name",
      label: "Brand",
      render: (brand) => (
        <div className="flex items-center gap-3">
          {brand.logo?.path ? (
            <img
              src={brand.logo.path}
              alt={brand.name}
              className="h-11 w-11 rounded-lg object-contain"
            />
          ) : (
            <div className="h-11 w-11 rounded-lg bg-pink-50" />
          )}

          <div>
            <p className="font-medium text-gray-800">
              {brand.name}
            </p>

            <p className="text-xs text-gray-400">
              ID: {brand._id.slice(-6)}
            </p>
          </div>
        </div>
      ),
    },

    {
      key: "description",
      label: "Description",
      render: (brand) => (
        <p className="max-w-md truncate text-sm text-gray-500">
          {brand.description}
        </p>
      ),
    },

    {
      key: "actions",
      label: "Actions",
      render: (brand) => (
        <ActionButtons
   onEdit={() => {
  setEditBrandId(brand._id);
}}
          onDelete={() => {
            setDeleteBrandItem(brand);
          }}
        />
      ),
    },
  ];

  return (
    <section className="w-full p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Brands
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Glowora skincare brands.
          </p>
        </div>

        <Link
          href="/admin/brand/new"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <FaPlus size={12} />
          Add Brand
        </Link>

      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={brands}
        isLoading={isLoading}
        emptyMessage="No brands found."
      />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={data?.data?.pagination?.total_Page ?? 1}
        onPageChange={setPage}
      />

      {/* Delete Modal */}
      <DeleteModal
        isOpen={!!deleteBrandItem}
        productName={deleteBrandItem?.name ?? ""}
        isDeleting={deleteMutation.isPending}
        onCancel={() => {
          setDeleteBrandItem(null);
        }}
        onConfirm={() => {
          if (deleteBrandItem) {
            deleteMutation.mutate(deleteBrandItem._id);
          }
        }}
      />
{/* Edit Modal */}
<AdminModal
  isOpen={!!editBrandId}
  title="Edit Brand"
  onClose={() => setEditBrandId(null)}
>
  <BrandForm
    brandId={editBrandId!}
    onSuccess={() => setEditBrandId(null)}
  />
</AdminModal>

    </section>
  );
};

export default BrandList;