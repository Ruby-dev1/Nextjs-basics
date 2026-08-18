"use client"
import React from 'react'
import { useWishlist } from '@/hooks/wishlist.hook'
import WishlistSkeleton from '@/components/common/wishlist skeleton';
import ProductCard from '@/components/landing/product/card';

const WishlistPage = () => {

    const{wishlist, isLoading}= useWishlist();


   if (isLoading) {
    
      <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <WishlistSkeleton key={index} />
        ))}
      </div>
   
  }
      const products = wishlist?.products?? [];

  return (
    <div className="p-10">
      <h1 className="mb-8 text-3xl font-bold text-primary">
        My Wishlist
      </h1>

      {products.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
        
         <ProductCard
         key={product._id}
         product = {product}
         />

        
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage