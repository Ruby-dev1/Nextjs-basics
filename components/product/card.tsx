import React from "react"
import Image from "next/image"

import { IProduct } from "@/types/product.types"

interface Iprops{
    product:IProduct
}


const ProductCard=({product:{name, price, cover_image,description,_id}

}:Iprops)=>{

    return(
        <div>
            {/* cover_image */}

           <div className="w-52 overflow-hidden rounded-md">
                <Image
                src={"/images/hero.png"}
                alt={name +"-" +"image"}
                className="h-full w-full"
                height={500}
                width={500}
                />
            </div>


            {/* name,desc,price */}

         <div className="mt-2">
  <p className="font-semibold">{name}</p>
  <p className="line-clamp-2 text-sm text-gray-500">
    {description}
  </p>
  <p className="mt-1 font-semibold">Rs. {price}</p>
</div>

        </div>
    )

}
export default ProductCard