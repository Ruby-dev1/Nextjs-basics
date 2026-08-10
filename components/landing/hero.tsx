import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[600px] px-10 py-20 flex items-center justify-between bg-violet-50">

      {/* Left content */}
      <div className="max-w-xl">

        <p className="text-primary font-medium mb-4">
          Welcome to our store
        </p>

        <h1 className="text-5xl font-bold leading-tight text-text-primary">
          Discover Products
          <br />
          You’ll Love
        </h1>

        <p className="mt-6 text-text-secondary text-lg leading-relaxed">
          Explore our collection of quality products and find
          everything you need in one place.
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 px-7 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
        >
          Shop Now
        </Link>

      </div>

      {/* Right side / Hero image */}
      <div className="w-[450px] h-[400px] flex items-center justify-center rounded-2xl bg-white shadow-md">

        <p className="text-text-secondary">
          Hero Image
        </p>

      </div>

    </section>
  );
};

export default Hero;