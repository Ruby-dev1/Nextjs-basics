import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between shadow bg-white px-6">
      <div>
        <h1 className="text-xl font-semibold text-text-primary">  Welcome Back, Admin 👋</h1>
        <p className="text-sm text-gray-600">   Here's what's happening with your store today.</p>
      </div>


      {/* Search + Actions */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-72 rounded-lg border border-gray-200 bg-gray-50 py-2  pl-4 pr-10 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Notification */}
        <button className="rounded-lg border border-gray-200 p-1.5">
          <IoIosNotificationsOutline  size={23}/>
        </button>

        {/* Add New */}
        <button className="rounded-lg bg-primary px-5 py-2 font-medium text-white transition hover:opacity-90">
          + Add New
        </button>

      </div>
    </header>
  );
};

export default Header;