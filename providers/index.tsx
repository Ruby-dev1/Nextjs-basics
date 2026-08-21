import React from "react";
import ReactQueryClientProvider from "./query-client.providers";
import WishlistProvider from "./wishlist.provider";
import Authcontext from "@/contexts/auth.context";
import AuthProvider from "./auth.provider";
import CartProvider from "./cart.provider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReactQueryClientProvider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider> 
              {children}
              </CartProvider>
           
            </WishlistProvider>
        </AuthProvider>
      </ReactQueryClientProvider>
    </>
  );
};

export default Providers;
