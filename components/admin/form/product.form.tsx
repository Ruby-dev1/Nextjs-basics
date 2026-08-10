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
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("brand", data.brand);

    if (data.cover_image instanceof File) {
      formData.append("cover_image", data.cover_image);
    }

    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    className="w-full max-w-2xl mx-auto p-6 space-y-6"
    >

      <Input
        label="Product Name"
        name="name"
        id="name"
        placeholder="Enter product name"
        register={register}
        required
        error={errors.name?.message}
      />

      <Input
        label="Price"
        name="price"
        id="price"
        placeholder="Enter price"
        type="text"
        register={register}
        required
        error={errors.price?.message}
      />

      <Input
        label="Description"
        name="description"
        id="description"
        placeholder="Enter description"
        register={register}
        required
        error={errors.description?.message}
      />

      {/* Category */}
           <Input
        label="Category"
        name="Category"
        id="Category"
        placeholder="Enter Category"
        register={register}
        required
        error={errors.category?.message}
      />

      {/* Brand */}
           <Input
        label="Brand"
        name="Brand"
        id="Brand"
        placeholder="Enter Brand"
        register={register}
        required
        error={errors.brand?.message}
      />

      {/* Cover Image */}
        <div className="flex flex-col gap-2">
    <label className="text-medium font-normal font-sans">
      Cover Image
    </label>

    <input
      type="file"
      {...register("cover_image")}
      className="w-full border rounded-lg p-2"
      
    />
  </div>


      {/* Multiple Images */}
              <div className="flex flex-col gap-2">
    <label className="text-medium font-normal font-sans">
       Images
    </label>

  
    
  <input
  type="file"
  className="file:mr-4 file:rounded-full file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-pink hover:file:bg-violet-100 dark:file:bg-primary dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>
      
   
  </div>

      <Button
        label={isPending ? "Creating..." : "Create Product"}
        type="submit"
      />

    </form>
  );
};

export default ProductForm;