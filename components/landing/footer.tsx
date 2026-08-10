import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-10 py-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Ecommerce
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Your one-stop destination for quality products
            at great prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/categories"
              className="hover:text-white"
            >
              Categories
            </Link>

            <Link
              href="/about"
              className="hover:text-white"
            >
              About
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

            <p>Email: support@example.com</p>

            <p>Phone: +977 98XXXXXXXX</p>

            <p>Kathmandu, Nepal</p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        <p>
          © 2026 Ecommerce. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;