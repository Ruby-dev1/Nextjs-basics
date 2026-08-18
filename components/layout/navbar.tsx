"use client"
import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { FaHeart, FaShoppingCart,FaSearch,FaUser } from "react-icons/fa";
import { useAuth } from "@/hooks/auth.hook";
import AuthSection from "../common/authsection";

  const greatVibes = Great_Vibes({
    subsets:["latin"],
    weight:"400",
    
  })

const Navbar = () => {

  const {user, logout, isLoading} = useAuth();
  const navItems = [
    { label: "Home", route: "/" },
    { label: "Shop", route: "/products" },
    { label: "Categories", route: "/categories" },
    { label: "About Us", route: "/about" },
    { label: "Blog", route: "/blogs" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-4">

      {/* Logo */}
      <Link href="/">
     <div>
       <h2 className={`${greatVibes.className} text-5xl text-primary font-bold` }> Glowora </h2>
     </div>

   
      </Link>

      {/* Nav items */}
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            href={item.route}
            key={item.route}
        className="text-sm hover:text-pink-300 hover:underline transition-color"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* icons */}
<div className="flex items-center gap-4">

<Link  href="/search">
<FaSearch 
className=" cursor-pointer hover:text-pink-300 hover:scale-110 transition-all duration-200"
/>

</Link>


{!user ? (
  <>
    <Link
      href="/login"
      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white"
    >
      Login
    </Link>

    <Link
      href="/sign-up"
      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
    >
      Signup
    </Link>
  </>
) : (
  <>
    <Link href="/wishlist">
      <FaHeart className="cursor-pointer hover:text-pink-300 hover:scale-110 transition-all duration-200" />
    </Link>

    <Link href="/cart">
      <FaShoppingCart className="cursor-pointer hover:text-pink-300 hover:scale-110 transition-all duration-200" />
    </Link>


    <AuthSection />
  </>
)}

</div>

    </nav>
  );
};

export default Navbar;
