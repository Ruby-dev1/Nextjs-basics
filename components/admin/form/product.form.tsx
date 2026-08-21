"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Input from "@/components/common/input";
import Button from "@/components/common/button";

import {
  createProduct,
  getProductById,
  updateProduct,
} from "@/api/product.api";

import { productSchema } from "@/schemas/product.schema";
import { TProduct } from "@/types/product.types";

interface ProductFormProps {
  productId?: string;
  onSuccess?: () => void;
}
const ProductForm = ({ productId, onSuccess }: ProductFormProps) => {
  console.log(productId);
  const router = useRouter();
  const queryClient = useQueryClient();

  const isEditMode = !!productId;

  // Get product for EDIT

  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId!),
    enabled: isEditMode,
  });

  // React Hook Form

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: yupResolver(productSchema),
  });

  // Put existing product data into form

  useEffect(() => {
    if (isEditMode && data?.data) {
      const product = data.data;

      reset({
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        category: product.category?._id ?? product.category,
        brand: product.brand?._id ?? product.brand,
      });
    }
  }, [data, isEditMode, reset]);

  // Create mutation

  const createMutation = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-products"],
      });

      router.push("/admin/product");
    },
  });

  // Update mutation

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) =>
      updateProduct(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });

      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/admin/product");
      }
    },
  });
  const isPending = createMutation.isPending || updateMutation.isPending;

  // Submit

  const onSubmit = (formData: TProduct) => {
    const body = new FormData();

    body.append("name", formData.name);
    body.append("price", String(formData.price));
    body.append("stock", String(formData.stock));
    body.append("description", formData.description);
    body.append("category", formData.category);
    body.append("brand", formData.brand);

    // Cover image
    if (formData.cover_image && formData.cover_image.length > 0) {
      body.append("cover_image", formData.cover_image[0]);
    }

    // Additional images
    if (formData.images && formData.images.length > 0) {
      Array.from(formData.images).forEach((image) => {
        body.append("images", image);
      });
    }

    // CREATE

    if (!productId) {
      createMutation.mutate(body);
      return;
    }

    // UPDATE

    updateMutation.mutate({
      id: productId,
      data: body,
    });
  };

  // Loading edit product

  if (isEditMode && isLoading) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      {/* Heading */}

      <div className="mb-6 ml-4">
        <h2 className="text-xl font-semibold text-text-primary">
          {isEditMode ? "Edit Product" : "Add New Product"}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {isEditMode
            ? "Update your skincare product information."
            : "Add a new skincare product to your Glowora store."}
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log("VALIDATION ERRORS:", errors);
        })}
        className="rounded-xl border border-pink-100 bg-white p-6 shadow-sm"
      >
        {/* Product Information */}

        <div className="mb-6 border-b border-pink-100 pb-5">
          <h3 className="text-base font-semibold text-gray-800">
            Product Information
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Enter the basic information about your product.
          </p>
        </div>

        {/* Fields */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name */}

          <div className="md:col-span-2">
            <Input
              label="Product Name"
              name="name"
              id="name"
              placeholder="Enter product name"
              register={register}
              required
              error={errors.name?.message}
            />
          </div>

          {/* Price */}

          <Input
            label="Price"
            name="price"
            id="price"
            placeholder="Enter price"
            type="number"
            register={register}
            required
            error={errors.price?.message}
          />

          {/* Stock */}

          <Input
            label="Stock"
            name="stock"
            id="stock"
            placeholder="Enter stock quantity"
            type="number"
            register={register}
            required
            error={errors.stock?.message}
          />

          {/* Category */}

          <Input
            label="Category"
            name="category"
            id="category"
            placeholder="Enter Category"
            register={register}
            required
            error={errors.category?.message}
          />

          {/* Brand */}

          <Input
            label="Brand"
            name="brand"
            id="brand"
            placeholder="Enter Brand"
            register={register}
            required
            error={errors.brand?.message}
          />

          {/* Description */}

          <div className="md:col-span-2">
            <Input
              label="Description"
              name="description"
              id="description"
              placeholder="Enter description"
              register={register}
              required
              error={errors.description?.message}
            />
          </div>
        </div>

        {/* Images */}

        <div className="mt-8 border-t border-pink-100 pt-6">
          <div className="mb-5">
            <h3 className="text-base font-semibold text-gray-800">
              Product Images
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Upload the main product image and additional images.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Cover */}

            <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Cover Image
              </label>

              <input
                type="file"
                accept="image/*"
                {...register("cover_image")}
                className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
              />

              {isEditMode && (
                <p className="mt-2 text-xs text-gray-400">
                  Leave empty to keep the existing cover image.
                </p>
              )}
            </div>

            {/* Additional */}

            <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Product Images
              </label>

              <input
                type="file"
                accept="image/*"
                multiple
                {...register("images")}
                className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
              />

              {isEditMode && (
                <p className="mt-2 text-xs text-gray-400">
                  Select new images to add more product images.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}

        <div className="mt-8 flex justify-end border-t border-pink-100 pt-6">
          <Button
            label={
              isPending
                ? isEditMode
                  ? "Updating..."
                  : "Creating..."
                : isEditMode
                  ? "Update Product"
                  : "Create Product"
            }
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
