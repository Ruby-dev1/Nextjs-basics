"use client"
import { CategorySchema } from "@/schemas/category.schema";
import { TCategory } from "@/types/category.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import React from "react";
import { useForm } from "react-hook-form";
import { createCategory } from "@/api/category.api";




const CategoryForm = () => {

const {register,handleSubmit, formState:{errors}}=useForm<TCategory>({
resolver:yupResolver(CategorySchema),
});


const {mutate, isPending} = useMutation({
    mutationFn:createCategory,
    
    onSuccess:(data)=>{
        console.log("Category created successfully");
        console.log(data);
    },

    onError:(error)=>{
        console.log("Category created failed")
        console.log(error)

    },

    
});

const onSubmit = (data: TCategory) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("logo", data.logo[0]);

  mutate(formData);
};

return (
  <section className="w-full">
    {/* Page Heading */}
    <div className=" mt-18 ml-5 mb-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Add New Category
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Create a category to organize your Glowora products.
      </p>
    </div>

    {/* Form Card */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-pink-100 bg-white p-6 shadow-sm"
    >
      {/* Section Heading */}
      <div className="mb-6 border-b border-pink-100 pb-5">
        <h3 className="text-base font-semibold text-gray-800">
          Category Information
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Enter the details for your new product category.
        </p>
      </div>

      {/* Category Name */}
      <div className="mb-5">
        <Input
          label="Category Name"
          id="name"
          name="name"
          placeholder="Enter category name"
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
          placeholder="Enter category description"
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
          Category Logo
        </label>

        <div className="rounded-xl border border-dashed border-pink-200 bg-pink-50/40 p-5 transition hover:border-primary">
          <input
            type="file"
            {...register("logo")}
            className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
          />

          <p className="mt-2 text-xs text-gray-400">
            Upload a logo image for this category.
          </p>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t border-pink-100 pt-6">
        <Button
          label="Create Category"
          type="submit"
        />
      </div>
    </form>
  </section>
);
};

  





export default CategoryForm
