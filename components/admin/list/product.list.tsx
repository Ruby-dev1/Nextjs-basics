"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import DeleteModal from "@/components/admin/common/delete-modal";

import Table, {
  TableColumn,
} from "@/components/admin/common/admintable";

import ActionButtons from "@/components/admin/common/action-buttons";


import Pagination from "@/components/admin/common/pagination";

import {deleteProduct, getAllProducts } from "@/api/product.api";

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description: string;

  category?: {
    _id: string;
    name: string;
  };

  brand?: {
    _id: string;
    name: string;
  };

  cover_image?: {
    path: string;
    public_id: string;
  };

  is_featured?: boolean;
}
const ProductList = () => {


  const [page, setPage] = useState(1);

const {
  data,
  isLoading,
} = useQuery({
  queryKey: ["admin-products", page],
  queryFn: () => getAllProducts(page),
});


  const products: Product[] = data?.data?.products ?? [];

const queryClient = useQueryClient();

const deleteMutation = useMutation({
  mutationFn: deleteProduct,

  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["admin-products"],
    });

    setDeleteProductItem(null);
  },
});
const [deleteProductItem, setDeleteProductItem] = useState<Product | null>(null);
  const columns: TableColumn<Product>[] = [
    {
      key: "name",
      label: "Product",
      render: (product) => (
        <div className="flex items-center gap-3">

          {product.cover_image?.path ? (
            <img
              src={product.cover_image.path}
              alt={product.name}
              className="h-11 w-11 rounded-lg object-cover"
            />
          ) : (
            <div className="h-11 w-11 rounded-lg bg-pink-50" />
          )}

          <div>
            <p className="font-medium text-gray-800">
              {product.name}
            </p>

            <p className="text-xs text-gray-400">
              ID: {product._id.slice(-6)}
            </p>
          </div>

        </div>
      ),
    },

    {
      key: "brand",
      label: "Brand",
      render: (product) => (
        <span>
          {product.brand?.name || "N/A"}
        </span>
      ),
    },

    {
      key: "category",
      label: "Category",
      render: (product) => (
        <span>
          {product.category?.name || "N/A"}
        </span>
      ),
    },

    {
      key: "price",
      label: "Price",
      render: (product) => (
        <span className="font-medium text-gray-800">
          Rs. {product.price}
        </span>
      ),
    },

    {
      key: "stock",
      label: "Stock",
      render: (product) => (
        <span
          className={
            product.stock > 0
              ? "font-medium text-green-600"
              : "font-medium text-red-500"
          }
        >
          {product.stock > 0
            ? `${product.stock} in stock`
            : "Out of stock"}
        </span>
      ),
    },

    {
      key: "actions",
      label: "Actions",
      render: (product) => (
    <ActionButtons
  onEdit={() => {
    console.log("Edit product:", product._id);
  }}
onDelete={() => {
  setDeleteProductItem(product);
}}
/>
      ),
    },
  ];
  console.log("PAGINATION:", data?.data?.pagination);
    return (
    <section className="w-full p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Glowora skincare products.
          </p>
        </div>

        <Link
          href="/admin/products/create"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <FaPlus size={12} />
          Add Product
        </Link>

      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={products}
        isLoading={isLoading}
        emptyMessage="No products found."
      />

      {/* Pagination */}
   <Pagination
  currentPage={page}
  totalPages={data?.data?.pagination?.total_Page ?? 1}
  onPageChange={setPage}
/>
<DeleteModal
  isOpen={!!deleteProductItem}
  productName={deleteProductItem?.name ?? ""}
  isDeleting={deleteMutation.isPending}
  onCancel={() => {
    setDeleteProductItem(null);
  }}
  onConfirm={() => {
    if (deleteProductItem) {
      deleteMutation.mutate(deleteProductItem._id);
    }
  }}
/>

    </section>
  );
};

export default ProductList;