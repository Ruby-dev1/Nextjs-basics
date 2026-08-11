"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import Input from "@/components/common/input";
import Button from "@/components/common/button";

import { brandSchema } from "@/schemas/brand.schema";
import { TBrand } from "@/types/brand.types";
import { createBrand } from "@/api/brand.api";

const BrandForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBrand>({
    resolver: yupResolver(brandSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createBrand,
  });

  const onSubmit = (data: TBrand) => {

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
     formData.append("logo", data.logo[0]);
  

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto p-6 space-y-6"
    >

      <Input
        label="Brand Name"
        name="name"
        id="name"
        placeholder="Enter brand name"
        register={register}
        required
        error={errors.name?.message}
      />

      {/* Description */}
        <div className="flex flex-col gap-2">
    <label className="text-medium font-normal font-sans">
      Description
    </label>

    <textarea
      {...register("description")}
      placeholder="Enter category description"
      className="w-full min-h-[120px] rounded-lg border border-primary
                 px-4 py-3 outline-none resize-y
                 focus:ring-2 focus:ring-primary"
    />

    {errors.description && (
      <small className="text-red-500">
        {errors.description.message}
      </small>
    )}
  </div>


      {/* Logo */}

  <div className="flex flex-col gap-2">
    <label className="text-medium font-normal font-sans">
      Category Logo
    </label>

    <input
      type="file"
      {...register("logo")}
    
 className="file:mr-4 file:rounded-full file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-pink hover:file:bg-violet-100 dark:file:bg-primary dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>
      
    
  </div>
      <Button
        label={isPending ? "Creating..." : "Create Brand"}
        type="submit"

      />

    </form>
  );
};

export default BrandForm;