
import React from "react";
import ProductList from "./list";
import Link from "next/link";

const Products = () => {
  return (
    <section className="px-10 py-10">

      {/* Heading */}
      <header className="flex justify-between">

        {/* left */}
        <div>
          <h3 className="text-lg font-semibold">
            Featured Products
          </h3>

          <p className="text-sm text-text-secondary">
            Explore our featured products
          </p>
        </div>

        {/* right */}

  <div>
  <Link
    href="/products"
    className="text-text-secondary hover:text-primary transition-all duration-200"
  >
    View All
  </Link>
</div>
      </header>

      {/* Product list */}
      <ProductList />

    </section>
  );
};

export default Products;