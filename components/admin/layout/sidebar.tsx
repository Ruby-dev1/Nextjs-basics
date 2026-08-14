import Link from "next/link";
import {
  FiGrid,
  FiTag,
  FiLayers,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiHeart,
  FiStar,
  FiEdit3,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const navItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: FiGrid,
    },
    {
      label: "Brands",
      href: "/admin/brand",
      icon: FiTag,
    },
    {
      label: "Categories",
      href: "/admin/category",
      icon: FiLayers,
    },
    {
      label: "Products",
      href: "/admin/product",
      icon: FiPackage,
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon: FiShoppingBag,
    },
    {
      label: "Customers",
      href: "/admin/customers",
      icon: FiUsers,
    },
    {
      label: "Wishlist",
      href: "/admin/wishlist",
      icon: FiHeart,
    },
    {
      label: "Reviews",
      href: "/admin/reviews",
      icon: FiStar,
    },
    {
      label: "Blogs",
      href: "/admin/blogs",
      icon: FiEdit3,
    },
    {
      label: "Reports",
      href: "/admin/reports",
      icon: FiBarChart2,
    },
  ];

  return (
    <section className="flex h-screen w-64 flex-col shadow  bg-pink-50 p-5 text-gray-800">

      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-wide">
          GLOWORA
        </h2>

        <p className="text-sm font-medium text-primary">
          ADMIN PANEL
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-pink-100 hover:text-primary"
            >
              <Icon className="text-lg" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto border-t border-pink-100 pt-4">

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-pink-100 hover:text-primary"
        >
          <FiSettings className="text-lg" />
          <span>Settings</span>
        </Link>

        <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-pink-100 hover:text-primary">
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>

      </div>
    </section>
  );
};

export default Sidebar;