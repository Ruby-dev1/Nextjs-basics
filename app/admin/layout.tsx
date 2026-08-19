"use client"
import React from "react";
import Sidebar from "@/components/admin/layout/sidebar";
import Header from "@/components/admin/layout/header";
import { All_Admins } from "@/types/enum.types";
import WithAuth from "@/hoc/withAuth.hoc";

const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex overflow-y-clip h-screen">

      {/* Sidebar */}
      <div className="overflow-clip w-65 ">
        <Sidebar />
      </div>

      {/* Right side */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <header className="h-16  rounded-lg  ">
          <Header />
        </header>

        {/* Page */}
        <main className="h-[calc(h-screen-65px)] top-16 z-1 overflow-y-scroll">
          {children}
        </main>

      </div>

    </div>
  );
};

const PrivateLayout = WithAuth(Layout, All_Admins)
export default PrivateLayout