
import React from "react";
import ProductList from "./list";
import Link from "next/link";
import SectionHeading from "../section-heading";

const Products = () => {
  return (
    <section className="px-10 py-10">

      <SectionHeading 
      heading="Featured Products"
      subHeading=" Explore our Featured Product"
      link ="/products"
      name="View All"

      />

      {/* Product list */}
      <ProductList />

    </section>
  );
};

export default Products;