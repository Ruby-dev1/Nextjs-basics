import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { FaUser, FaShoppingCart,FaSearch } from "react-icons/fa";


  const greatVibes = Great_Vibes({
    subsets:["latin"],
    weight:"400",
    
  })

const Navbar = () => {
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


  <Link href="/login">
    <FaUser
      className="cursor-pointer hover:text-pink-300 hover:scale-110 transition-all duration-200"
    />
  </Link>

  <Link href="/cart">
    <FaShoppingCart
      className="cursor-pointer hover:text-pink-300 hover:scale-110 transition-all duration-200"
    />
  </Link>

</div>

    </nav>
  );
};

export default Navbar;
