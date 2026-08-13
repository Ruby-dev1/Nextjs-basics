import React from "react"
import Image from "next/image"
import { TbCurrencyRupeeNepalese } from "react-icons/tb"
import Link from "next/link"
import { IProduct } from "@/types/product.types"
import Button from "@/components/common/button"

interface Iprops{
    product:IProduct
}


const ProductCard=({product:{name, price,category, brand, cover_image,description,_id}

}:Iprops)=>{

    return(
        <Link href={`/products/${_id}?q=${name}&d=${description}`}>
        <article className=" cursor-pointer max-w-80  min-h-60 hover:-translate-y-1 hover:scale-105 duration-100  mt-4 " >
            {/* cover_image */}

           <div className="w-52 overflow-hidden rounded-md">
                <Image
                src={cover_image.path}
                alt={name +"-" +"image"}
                className="h-full w-full"
                height={500}
                width={500}
                />
            </div>


            {/* name,desc,price, button */}

         <div className="mt-2">
  <p className="font-semibold">{name}</p>
  <div className="line-clamp-1">
    <p>{category?.name}</p>
    <p>{brand?.name}</p>
  </div>

    <div className=" flex items-center">  <TbCurrencyRupeeNepalese/> <p className=" flex font-semibold">{price}</p></div>

  <p className="line-clamp-2 text-sm text-gray-500">
    {description}
  </p>


{/* Button */}
<div className= "-mt-6"> <Button label="View Details"/></div>







</div>

        </article>
        </Link>
    )

}
export default ProductCard 