"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Input from "@/components/common/input";
import Button from "@/components/common/button";

import { brandSchema } from "@/schemas/brand.schema";
import { TBrand } from "@/types/brand.types";

import {
  createBrand,
  getBrandById,
  updateBrand,
} from "@/api/brand.api";

interface BrandFormProps {
  brandId?: string;
}

const BrandForm = ({ brandId }: BrandFormProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const isEditMode = !!brandId;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TBrand>({
    resolver: yupResolver(brandSchema),
  });

  // Get existing brand when editing
  const { data, isLoading } = useQuery({
    queryKey: ["brand", brandId],
    queryFn: () => getBrandById(brandId!),
    enabled: !!brandId,
  });

  // Populate existing brand data
  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        description: data.data.description,
      });
    }
  }, [data, reset]);

  // Create
  const createMutation = useMutation({
    mutationFn: createBrand,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-brands"],
      });

      router.push("/admin/brand");
    },
  });

  // Update
  const updateMutation = useMutation({
    mutationFn: updateBrand,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-brands"],
      });

      router.push("/admin/brand");
    },
  });

  const isPending =
    createMutation.isPending || updateMutation.isPending;

  const onSubmit = (data: TBrand) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);

    // Logo is required for create,
    // but optional for update.
    if (data.logo && data.logo.length > 0) {
      formData.append("logo", data.logo[0]);
    }

    if (isEditMode) {
      updateMutation.mutate({
        id: brandId!,
        data: formData,
      });
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isEditMode && isLoading) {
    return (
      <section className="w-full p-6">
        <p className="text-sm text-gray-500">
          Loading brand...
        </p>
      </section>
    );
  }

  return (
    <section className="w-full">

      {/* Page Heading */}
      <div className="mb-6 mt-18 ml-5">
        <h2 className="text-xl font-semibold text-text-primary">
          {isEditMode ? "Edit Brand" : "Add New Brand"}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {isEditMode
            ? "Update the information of your Glowora brand."
            : "Create a new skincare brand for your Glowora store."}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-pink-100 bg-white p-6 shadow-sm"
      >

        {/* Section Heading */}
        <div className="mb-6 border-b border-pink-100 pb-5">
          <h3 className="text-base font-semibold text-gray-800">
            Brand Information
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Enter the basic information about the brand.
          </p>
        </div>

        {/* Brand Name */}
        <div className="mb-5">
          <Input
            label="Brand Name"
            name="name"
            id="name"
            placeholder="Enter brand name"
            register={register}
            required
            error={errors.name?.message}
          />
        </div>

        {/* Description */}
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            {...register("description")}
            placeholder="Enter brand description"
            className="min-h-[120px] w-full resize-y rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
          />

          {errors.description && (
            <small className="text-xs text-red-500">
              {errors.description.message}
            </small>
          )}
        </div>

        {/* Logo */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Brand Logo
          </label>

          <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5 transition hover:border-primary">

            <input
              type="file"
              accept="image/*"
              {...register("logo")}
              className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
            />

            <p className="mt-2 text-xs text-gray-400">
              {isEditMode
                ? "Select a new logo only if you want to replace the existing logo."
                : "Upload a logo image for this brand."}
            </p>

          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end border-t border-pink-100 pt-6">

          <Button
            label={
              isPending
                ? isEditMode
                  ? "Updating..."
                  : "Creating..."
                : isEditMode
                  ? "Update Brand"
                  : "Create Brand"
            }
            type="submit"
          />

        </div>

      </form>
    </section>
  );
};

export default BrandForm;