import { Tcart } from "@/types/cart.types";
import { createContext } from "react";

type TCartContext = {
  cart: Tcart[] | null;
  isLoading: boolean;

  addProductToCart: (data: {
    productId: string;
    quantity: number;
  }) => void;

  removeProductFromCart: (productId: string) => void;

  updateCart: (data: {
    productId: string;
    quantity: number;
  }) => void;
};

const initialValue: TCartContext = {
  cart: null,
  isLoading: false,

  addProductToCart: () => {},

  removeProductFromCart: () => {},

  updateCart: () => {},
};

const cartContext = createContext<TCartContext>(initialValue);

export default cartContext;