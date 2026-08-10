import Link from "next/link";
import react from "react";
const Sidebar = () => {
  return (
 <section className="h-screen w-64 bg-pink-200 p-5 text-black">
      <h2 className="mb-6 text-xl font-bold"> Sidebar </h2>

      <nav className="flex flex-col gap-4">
        <Link href="/admin/brand">Brands</Link>
        <Link href="/admin/category">Categories</Link>
        <Link href="/admin/product">Products</Link>
      </nav>
    </section>
  )};
export default Sidebar;