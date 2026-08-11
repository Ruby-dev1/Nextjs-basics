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


const onSubmit = (data:TCategory)=>{

    console.log("Category form data", data);

    const formData = new FormData();
    

    formData.append("name", data.name);
    formData.append("description", data.description);
    

    if(data.logo && data.logo.length>0){
        formData.append("logo", data.logo[0]);
    }

    mutate(formData);
    

}

  return (
  <form
  onSubmit={handleSubmit(onSubmit)}
  className="w-full max-w-2xl mx-auto p-6 space-y-6"
>
  {/* Category Name */}
  <div className="flex flex-col gp-2">
   

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

  {/* Submit */}
  <Button
    label="Create Category"
    type="submit"
  />
</form>
  );
};

  





export default CategoryForm
