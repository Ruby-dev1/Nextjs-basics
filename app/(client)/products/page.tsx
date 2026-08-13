"use client";

import React from "react";
import AllProductList from "@/components/landing/product/all-list";

const ProductsPage = () => {
  return (
    <section className="px-10 py-10">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold">All Products</h1>

        <p className="text-sm text-text-secondary">Explore all our products</p>
      </div>

      {/* All products */}
      <AllProductList />
    </section>
  );
};

export default ProductsPage;
