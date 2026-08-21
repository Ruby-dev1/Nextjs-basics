"use client";

import React, { useContext, useState } from "react";
import { useWishlist } from "@/hooks/wishlist.hook";
import cartContext from "@/contexts/cart.context";
import { HiHeart } from "react-icons/hi";

interface IProps {
  productId: string;
}

const ProductActions = ({ productId }: IProps) => {
  const [quantity, setQuantity] = useState(1);

  const {
    addProductToCart,
  } = useContext(cartContext);

  const {
    addToWishlist,
    isLoading: isWishlistPending,
  } = useWishlist();

  return (
    <>
      {/* Quantity */}
      <div className="mt-10 flex w-fit items-center shadow">
        <button
          type="button"
          onClick={() =>
            setQuantity((prev) => Math.max(1, prev - 1))
          }
          className="px-4 py-2 text-lg font-semibold"
        >
          -
        </button>

        <span className="px-4 py-2 font-medium">
          {quantity}
        </span>

        <button
          type="button"
          onClick={() =>
            setQuantity((prev) => prev + 1)
          }
          className="px-4 py-2 text-lg font-semibold"
        >
          +
        </button>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4">

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => {
            console.log("🔥 ADDING TO CART");
            console.log("Product ID:", productId);
            console.log("Quantity:", quantity);

            addProductToCart({
              productId,
              quantity,
            });
          }}
          className="cursor-pointer rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:opacity-90"
        >
          Add to Cart
        </button>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => addToWishlist(productId)}
          disabled={isWishlistPending}
          className="flex cursor-pointer items-center gap-4 rounded-lg border border-primary bg-white px-4 py-3 font-medium text-black transition-all duration-300 hover:opacity-90"
        >
          <HiHeart
            size={25}
            className="text-primary"
          />

          {isWishlistPending
            ? "Adding..."
            : "Add to Wishlist"}
        </button>

      </div>
    </>
  );
};

export default ProductActions;