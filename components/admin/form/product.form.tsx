"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import Input from "@/components/common/input";
import Button from "@/components/common/button";

import { productSchema } from "@/schemas/product.schema";
import { TProduct } from "@/types/product.types";
import { createProduct } from "@/api/product.api";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: yupResolver(productSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
  });

  const onSubmit = (data: TProduct) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", String(data.price));
    formData.append("stock", String(data.stock));
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("brand", data.brand);

    if (data.cover_image && data.cover_image.length > 0) {
      formData.append("cover_image", data.cover_image[0]);
    }

    if (data.images && data.images.length > 0) {
      Array.from(data.images).forEach((image) => {
        formData.append("images", image);
      });
    }

    mutate(formData);
  };

  return (
    <section className="w-full">
      {/* Page Heading */}
      <div className=" mt-18 ml-5  mb-6">
        <h2 className="text-xl font-semibold text-text-primary">
          Add New Product
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a new skincare product to your Glowora store.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(
          (data) => {
            console.log("SUBMIT SUCCESS:", data);
            onSubmit(data);
          },
          (errors) => {
            console.log("VALIDATION ERRORS:", errors);
          },
        )}
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
          {/* Product Name */}
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
          {/* stock */}
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

        {/* Images Section */}
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
            {/* Cover Image */}
            <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5 transition hover:border-primary">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Cover Image
              </label>

              <input
                type="file"
                accept="image/*"
                {...register("cover_image")}
                className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
              />

              <p className="mt-2 text-xs text-gray-400">
                Select the main product image.
              </p>
            </div>

            {/* Multiple Images */}
            <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5 transition hover:border-primary">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Product Images
              </label>

              <input
                type="file"
                accept="image/*"
                multiple
                {...register("images")}
                className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
              />

              <p className="mt-2 text-xs text-gray-400">
                Select multiple product images if needed.
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-end border-t border-pink-100 pt-6">
          <Button
            label={isPending ? "Creating..." : "Create Product"}
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
