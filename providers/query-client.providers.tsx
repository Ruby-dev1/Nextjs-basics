"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import WishlistProvider from "./wishlist.provider";

const queryClient = new QueryClient();

const ReactQueryClientProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
      {children}
      </WishlistProvider>

    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
