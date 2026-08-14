
import React from 'react'
import Image from 'next/image'
import { ICategory } from '@/types/category.types'
interface Iprops{
    category:ICategory
}

const CategoryCard = ({category:{name,logo,description,_id}}:Iprops) => {
  return (
    <div className= "flex  max-w-100 cursor-pointer h-fit gap-2 items-center p-1.5  rounded-full  hover:-translate-y-1 hover:bg-primary-light/60 transition-all duration-300 overflow-clip text-wrap">
        {/* image */}
   <div className = "h-16  w-16 rounded-sm overflow-clip shrink-0">
    <Image
    src={logo.path}
    alt={name + "-" +"image"}
    className= "h-full  w-full"
    height={500}
    width={500}
    
    />
   </div>
<div>
     {/* name & desc */}
         <p className="text-md font-semibold text-gray-800">{name}</p>
        <p className= "line-clamp-2 text-sm leading-4 text-wrap">{description}</p>
</div>
       
   
    </div>
  )
}

export default CategoryCard