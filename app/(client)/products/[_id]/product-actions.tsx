"use client";

import React,{useState} from "react";
import { useMutation } from "@tanstack/react-query";
import { useWishlist } from "@/hooks/wishlist.hook";
import { addProductToCart } from "@/api/cart.api";

  import { HiHeart } from "react-icons/hi";



interface Iprops {
  productId: string;
}


const ProductActions = ({ productId }: Iprops) => {

const [quantity, setQuantity]=useState(1);
  const { mutate: addCart, isPending: isCartPending } = useMutation({
    mutationFn: addProductToCart,
  });
  const { addToWishlist, isLoading: isWishlistPending } =
    useWishlist();

  return (

    <>
    {/* Quantity */}
    <div className="flex w-fit items-center   mt-10  shadow ">
  <button
    type="button"
    onClick={() =>
      setQuantity((prev) => Math.max(1, prev - 1))
    }
    className="px-4 py-2 text-lg font-semibold "
  >
    -
  </button>

  <span className="px-4 py-2 font-medium">
    {quantity}
  </span>

  <button
    type="button"
    onClick={() => setQuantity((prev) => prev + 1)}
    className="px-4 py-2 text-lg font-semibold"
  >
    +
  </button>
</div>



    
    <div className="mt-8 flex gap-4">



      

      {/* Add to Cart */}
      <button
        type="button"
        onClick={() =>
          addCart({
            productId,
            quantity: 1,
          })
        }
        disabled={isCartPending}
        className="  text-white rounded-lg bg-primary px-6 py-3 cursor-pointer font-medium hover:opacity-90 transition-all duration-300"
      >
        {isCartPending ? "Adding..." : "Add to Cart"}
      </button>

      {/* Add to Wishlist */}
   
      <button
        type="button"
         onClick={() => addToWishlist(productId)}
        disabled={isWishlistPending}
      
  

        className=" text-black flex items-center gap-4 border rounded-lg border-primary bg-white px-4 py-3 cursor-pointer font-medium hover:opacity-90 transition-all duration-300"
      >
            <HiHeart size={25} className= "text-primary"/>
        {isWishlistPending ? "Adding..." : "Add to Wishlist"}
      </button>
    

    </div>

    </>
  );
};

export default ProductActions;
