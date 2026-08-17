import { TWishlist } from "@/types/wishlist.types";
import { createContext } from "react";

type TWishlistContext = {
    wishlist: TWishlist | null;
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    isExists: (productId: string) => boolean;
    isLoading: boolean;
};

const initialValue: TWishlistContext = {
    wishlist: null,
    isLoading: false,

    addToWishlist: (productId: string) => {},
    removeFromWishlist: (productId: string) => {},
    isExists: (productId: string) => false,
};

const WishlistContext = createContext<TWishlistContext>(initialValue);

export default WishlistContext;