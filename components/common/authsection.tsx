"use client";

import Image from "next/image";
import React from "react";
import { useAuth } from "@/hooks/auth.hook";

const AuthSection = () => {
  const { user, logout } = useAuth();
  

  if (!user) return null;

  return (
    <div className="flex items-center gap-3">

      {/* Profile image */}
      <div className="h-10 w-10 rounded-full p-0.5 overflow-hidden border border-primary">
        <Image
        //   src={user.profile_image?.path || "/profile.jpg"}
     src="/images/user.png"
          alt="user profile image"
          width={100}
          height={100}
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {/* Name & logout */}
      <div className="flex flex-col">
        <p className="font-bold text-sm">
          {user.full_name}
        </p>

        <button
          onClick={logout}
          className="text-red-500 text-xs font-semibold cursor-pointer hover:underline"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default AuthSection;