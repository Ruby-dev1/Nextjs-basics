"use client";

import React from "react";
import CategoriesList from "@/components/landing/category";

const CategoryPage = () => {
  return (
    <section className="px-10 py-10">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold">All Categories</h1>
      </div>

      {/* All products */}
      <CategoriesList />
    </section>
  );
};

export default CategoryPage;
