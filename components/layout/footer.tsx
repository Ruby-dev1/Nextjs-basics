import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import React from "react";



  const greatVibes = Great_Vibes({
    subsets:["latin"],
    weight:"400",
    
  })

const footer = () => {



  const shop = [
    { label: "All products", route: "/products" },
    { label: "Categories", route: "/categories" },
    { label: "Brands", route: "/brands" },
    { label: "Best Sellers", route: "/bestsellers" },
  ];

  const customerCare = [
    { label: "Contact US", route: "/contact" },
    { label: "Shipping", route: "/shipping" },
    { label: "Returns", route: "/returns" },
  ];

  const company = [
    { label: "About us", route: "/about" },
    { label: "Blog", route: "/blog" },
  ];

  return (
    <footer  className = "bg-white px-10 py-10" >
      {/* footer columns */}
      <div className= "grid grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className={`${greatVibes.className} text-3xl`}> Glowora </h2>
          < p className= "text-sm mt-4">
         Gentle skincare for your natural glow.
          </p>
          
        </div>

        {/* shop  */}

        < div>
        <h3 className = "font-semibold mb-4">Shop</h3>

          <div className = "flex flex-col gap-2">
            {shop.map((item)=>(
              <Link href={item.route}
              key={item.route}
              className="text-sm cursor-pointer"

              >
              {item.label}
              </Link>

            ))
              
            }

          </div>

        </div>

        {/* customer Care */}

        <div>
          <h3 className= "font-semibold mb-4">Customer Care</h3>

          <div className = "flex flex-col gap-2">
            {customerCare.map((item)=>(
              <Link 
              href={item.route}
              key={item.route}
              className="text-sm cursor-pointer"
              >
              {item.label}
              </Link>
            ))}

          </div>

        </div>

        {/* company  */}

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <div className= "flex flex-col gap-2">
            {company.map((item)=>(
              <Link
              href={item.route}
              key={item.route} 
              className="text-sm cursor-pointer"
              >
              {item.label}
              </Link>

            ))}

          </div>

        </div>
      </div>
    </footer>
  );
};

export default footer;
