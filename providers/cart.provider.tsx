"use client";

import React from "react";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
  updateCartQuantity,
  clearCart,
} from "@/api/cart.api";

import cartcontext from "@/contexts/cart.context";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = useQueryClient();

  // =========================
  // GET CART
  // =========================

  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    retry: false,
  });

  // =========================
  // ADD TO CART
  // =========================

  const addMutation = useMutation({
    mutationFn: addProductToCart,

    onSuccess: (response) => {
      toast.success(
        response.message ?? "Product added to cart"
      );

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Something went wrong"
      );
    },
  });

  // =========================
  // REMOVE PRODUCT
  // =========================

  const removeMutation = useMutation({
    mutationFn: removeProductFromCart,

    onSuccess: (response) => {
      toast.success(
        response?.message ?? "Product removed from cart"
      );

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Something went wrong"
      );
    },
  });

  // =========================
  // UPDATE QUANTITY
  // =========================

  const updateQuantityMutation = useMutation({
    mutationFn: updateCartQuantity,

    onSuccess: (response) => {
      toast.success(
        response?.message ?? "Cart updated"
      );

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Something went wrong"
      );
    },
  });

  // =========================
  // CLEAR CART
  // =========================

  const clearMutation = useMutation({
    mutationFn: clearCart,

    onSuccess: (response) => {
      toast.success(
        response?.message ?? "Cart cleared"
      );

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Something went wrong"
      );
    },
  });

  return (
    <cartcontext.Provider
      value={{
        cart: data?.data,
        isLoading,

        addToCart: addMutation.mutate,
        addToCartPending: addMutation.isPending,

        removeFromCart: removeMutation.mutate,
        removeFromCartPending: removeMutation.isPending,

        updateQuantity: updateQuantityMutation.mutate,
        updateQuantityPending:
          updateQuantityMutation.isPending,

        clearCart: clearMutation.mutate,
        clearCartPending: clearMutation.isPending,
      }}
    >
      {children}
    </cartcontext.Provider>
  );
};

export default CartProvider;