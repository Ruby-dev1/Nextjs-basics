
import React from 'react'
import Image from 'next/image'
interface Iprops{
    category:{
        _id:string,
        name:string,
        image:{
            path:string,
            public_id:string,
        },
        description?:string
    }
}

const CategoryCard = ({category:{name,image,description,_id}}:Iprops) => {
  return (
    <div className= "flex border border-primary max-w-100 cursor-pointer h-fit gap-2 items-center p-1.5 rounded-md  hover:-translate-y-1 hover:bg-primary-light/60 transition-all duration-300">
        {/* image */}
   <div className = "h-16  w-16 rounded-sm overflow-clip shrink-0">
    <Image
    src={image.path}
    alt={name + "-" +"image"}
    className= "h-full  w-full"
    height={500}
    width={500}
    
    />
   </div>
<div>
     {/* name & desc */}
         <p className="text-md font-semibold text-gray-800">{name}</p>
        <p className= "line-clamp-2 text-sm leading-4">{description}</p>
</div>
       
   
    </div>
  )
}

export default CategoryCard