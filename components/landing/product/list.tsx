"use client";

import React from "react";
import ProductCard from "./card";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/api/product.api";
import { IProduct } from "@/types/product.types";
import ProductSkeleton from "@/components/common/productSkeleton";

const ProductList = () => {
  const { isLoading, data } = useQuery({
    queryFn: getFeaturedProducts,
    queryKey: ["get-Featured-product"],
  });
  console.log("product list", data);
  return( 
  <>
  {/* loading state */}
{isLoading && (
  <div className="mt-5 grid grid-cols-4 gap-4">
    {Array.from({ length: 4 }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
)}


{/* Products not found */}

{!isLoading && data?.data?.length===0 &&(
    <p> Product not found.</p>
)}

   {/* Products found */}
      {!isLoading && data?.data?.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          {data.data.map((product: IProduct) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;