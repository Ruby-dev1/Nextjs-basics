"use client";

import Image from "next/image";
import { useAuth } from "@/hooks/auth.hook";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const AuthSection = () => {
  const { user, logout } = useAuth();
  
  const[showMenu, setShowMenu]= useState(false);
  const[showLogoutModal,setShowLogoutModal]=useState(false);



  if (!user) return null;

  const handleLogoutClick=()=>{
    setShowMenu(false);
    setShowLogoutModal(true);
  }

  const handleConfirmLogout = async()=>{
    await logout();
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Profile Section */}
      <div className="relative">

        {/* Profile Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="h-10 w-10 rounded-full p-0.5 overflow-hidden border border-primary">
            <Image
              src="/images/user.png"
              alt="user profile image"
              width={100}
              height={100}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <FaChevronDown
            className={`text-xs transition-transform duration-200 ${
              showMenu ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {showMenu && (
          <div className="absolute right-0 top-12 z-50 w-48  bg-white p-2 shadow-lg">

            {/* User name */}
            <div className="border-b px-3 py-2">
              <p className="text-sm font-semibold">
                {user.full_name}
              </p>

              <p className="text-xs text-gray-500">
                {user.email}
              </p>
            </div>

            {/* Profile */}
            <button
              className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-pink-50"
              onClick={() => setShowMenu(false)}
            >
              My Profile
            </button>

            {/* Orders */}
            {/* <button
              className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-pink-50"
              onClick={() => setShowMenu(false)}
            >
              My Orders
            </button> */}

            {/* Logout */}
            <button
              onClick={handleLogoutClick}
              className="w-full rounded-md px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">

          <div className="w-[90%] max-w-md rounded-xl bg-white p-6 shadow-xl">

            <h2 className="text-xl font-semibold text-gray-800">
              Logout?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to logout from your account?
            </p>

            <div className="mt-6 flex justify-end gap-3">

              {/* No */}
              <button
                onClick={() => setShowLogoutModal(false)}
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100"
              >
                No
              </button>

              {/* Yes */}
              <button
                onClick={handleConfirmLogout}
                className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Yes, Logout
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthSection;