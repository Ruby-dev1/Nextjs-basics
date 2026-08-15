"use client";

import React from "react";
import ProductCard from "./card";
import ProductSkeleton from "@/components/common/productSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/product.api";
import { IProduct } from "@/types/product.types";

const AllProductList = () => {
  const { isLoading, data } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["get-all-products"],
  });

  console.log("all products", data);

  return (
    <>
      {/* Loading state */}
{isLoading && (
  <div className="mt-5 grid grid-cols-4 gap-4">
    {Array.from({ length: 10}).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
)}

      {/* Products not found */}
      {!isLoading && data?.data?.products?.length === 0 && (
        <p>Product not found.</p>
      )}

      {/* Products found */}
      {!isLoading && data?.data?.products?.length > 0 && (
        <div className="grid grid-cols-4 gap-6 mt-5">
          {data.data.products.map((product: IProduct) => (
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

export default AllProductList;