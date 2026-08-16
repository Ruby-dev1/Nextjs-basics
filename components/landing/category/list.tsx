"use client"
import React from 'react'
import CategoryCard from './card'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'
import { ICategory } from '@/types/category.types'
import CategorySkeleton from '@/components/common/categorySkeleton'

const CategoryList = () => {

   
    const {isLoading, data} = useQuery({
        queryFn: getAllCategories,
        queryKey:["get-all-category"]
    })

     console.log("category list",data)
  return (
    <>

        {/* loading state */}
           {isLoading && (
  <div className="grid grid-cols-2 gap-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <CategorySkeleton key={index} />
    ))}
  </div>
)}

    {/* !loading && data.data.length==0 -> category not found */}
         {!isLoading && data?.data?.categories?.length === 0 && (
        <p>Category not found.</p>
      )}

{/* categories found */}
      {!isLoading && data?.data?.categories?.length > 0 && (
        <div className="grid grid-cols-5 gap-2 mt-5">
          {data.data.categories.map((category: ICategory) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
      )}
</>
  )
}

export default CategoryList