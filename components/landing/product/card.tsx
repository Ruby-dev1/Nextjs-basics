"use client"
import React ,{useContext} from "react";
import wishlistContext from "@/contexts/wishlist.context";
import Image from "next/image";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Link from "next/link";
import { IProduct } from "@/types/product.types";
import Button from "@/components/common/button";
import { FiHeart } from "react-icons/fi";
import { title } from "process";
import { IoMdHeart } from "react-icons/io";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({
  product: { name, price, category, brand, cover_image, description, _id },
}: Iprops) => {

  const {addToWishlist, isExists, isLoading } = useContext(wishlistContext);
  const isAdded = isExists(_id);



  return (

     <article className="group w-full overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* cover_image */}
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
  <Image
  src={cover_image.path}
  alt={name + "-image"}
  fill
  className="object-cover transition-transform duration-300 group-hover:scale-105"
/>

<button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAdded) {
      addToWishlist(_id);
    }
  }}
  disabled={isLoading}
  className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
>
  {isAdded ? (
    <IoMdHeart size={20} className="text-primary" />
  ) : (
    <FiHeart size={20} />
  )}
</button>
        </div>

        {/* name,desc,price, button */}

        <div className="mt-2">
          <p className="font-semibold">{name}</p>
          <div className="line-clamp-1">
            <p>{category?.name}</p>
            <p>{brand?.name}</p>
          </div>

          <div className=" flex items-center">
            {" "}
            <TbCurrencyRupeeNepalese />{" "}
            <p className=" flex font-semibold">{price}</p>
          </div>

          <p className="line-clamp-2 text-sm text-gray-500">{description}</p>
<Link
  href={`/products/${_id}`}
  className="mt-4 block w-full rounded-lg bg-primary py-3 text-center font-medium text-white transition hover:opacity-90"
>
  View Details
</Link>
        </div>
      </article>
  
  );
};
export default ProductCard;
