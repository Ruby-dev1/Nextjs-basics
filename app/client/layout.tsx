import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
