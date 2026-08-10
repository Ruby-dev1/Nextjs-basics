import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-primary"
      >
        Ecommerce
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-text-primary hover:text-primary transition"
        >
          Home
        </Link>

        <Link
          href="/product"
          className="text-text-primary hover:text-primary transition"
        >
          Products
        </Link>

        <Link
          href="/category"
          className="text-text-primary hover:text-primary transition"
        >
          Categories
        </Link>

        <Link
          href="/about"
          className="text-text-primary hover:text-primary transition"
        >
          About
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
          🔍
        </button>

        {/* Cart */}
        <Link
          href="/cart"
          className="px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          🛒
        </Link>

        {/* Login */}
        <Link
          href="/login"
          className="px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
        >
          Login
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;