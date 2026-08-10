import React from "react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;