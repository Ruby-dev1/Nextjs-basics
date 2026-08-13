"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import Button from '@/components/common/button'
import { addToCart } from '@/api/cart.api'
import { addToWishlist } from '@/api/wishlist.api'

interface Iprops{
    productId:string;
}

const ProductActions = ({productId}:Iprops) => {

    const{mutate:addCart, isPending:isCartPending}= useMutation({
        mutationFn:addToCart
    })
  const {
    mutate: addWishlist,
    isPending: isWishlistPending,
  } = useMutation({
    mutationFn: addToWishlist,
  });
  return (
    <div className="mt-8 flex gap-4">
      <Button
        label={isCartPending ? "Adding..." : "Add to Cart"}
        onClick={() =>
          addCart({
            productId,
            quantity: 1,
          })
        }
        disabled={isCartPending}
      />

      <Button
        label={isWishlistPending ? "Adding..." : "♡ Add to Wishlist"}
        onClick={() => addWishlist({productId})}
        disabled={isWishlistPending}
      />
    </div>
  );
};

export default ProductActions;