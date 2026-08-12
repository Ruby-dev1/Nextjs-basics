"use client"
import React from 'react'
import CategoryCard from './card'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'
import { ICategory } from '@/types/category.types'


const CategoryList = () => {

   
    const {isLoading, data} = useQuery({
        queryFn: getAllCategories,
        queryKey:["get-all-category"]
    })

     console.log("category list",data)
  return (
    <>

        {/* loading state */}

    {/* !loading && data.data.length==0 -> category not found */}
  <div className= "grid grid-cols-5 gap-2 mt-5">


    {/* !loading && data.data.length>0 */}

    {
        data?.data?.categories?.map((category:ICategory)=><CategoryCard key= {category._id} category={category}/>)
    }
</div>
</>
  )
}

export default CategoryList