import React from "react";
import Image from "next/image";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Link from "next/link";
import { IProduct } from "@/types/product.types";
import Button from "@/components/common/button";
import { useMutation } from "@tanstack/react-query";
import { FiHeart } from "react-icons/fi";
import { addToWishlist } from "@/api/wishlist.api";
import toast from "react-hot-toast";
import { title } from "process";
import { IoMdHeart } from "react-icons/io";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({
  product: { name, price, category, brand, cover_image, description, _id },
}: Iprops) => {
  const isAdded = true;

  const { mutate: addWishlist, isPending: isWishlistPending } = useMutation({
    mutationFn: addToWishlist,

    onSuccess: (response) => {
      toast.success(response?.message ?? "Product added to wishlist");
    },

    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to add product to wishlist");
    },
  });

  return (
    <Link href={`/products/${_id}?q=${name}&d=${description}`}>
      <article className=" cursor-pointer max-w-80  min-h-60 hover:-translate-y-1 hover:scale-105 duration-100  mt-4 ">
        {/* cover_image */}
        <div className="relative w-52 overflow-hidden rounded-md">
          <Image
            src={cover_image.path}
            alt={name + "-image"}
            className="h-full w-full"
            height={500}
            width={500}
          />

          <button
            type="button"
            disabled={isWishlistPending}
            onClick={(e) => {
         e.stopPropagation()
              addWishlist({
                productId: _id,
              });
            }}
            className="absolute  right-1 top-2 rounded-full  p-2 shadow-md"
          >
            {isAdded ? <IoMdHeart  size ={20} className="text-primary" /> : <FiHeart className="text-md " />}
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

          {/* Button */}
          <div className="-mt-6">
            {" "}
            <Button label="View Details" />
          </div>
        </div>
      </article>
    </Link>
  );
};
export default ProductCard;
