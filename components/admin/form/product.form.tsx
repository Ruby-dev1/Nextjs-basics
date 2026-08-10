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
    <form onSubmit={handleSubmit(onSubmit)}>

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

      {/* Brand */}

      {/* Cover Image */}

      {/* Multiple Images */}

      <Button
        label={isPending ? "Creating..." : "Create Product"}
        type="submit"
      />

    </form>
  );
};

export default ProductForm;