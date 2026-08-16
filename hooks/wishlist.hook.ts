import wishlistContext from "@/contexts/wishlist.context"
import { useContext } from "react";

export const useWishlist = ()=>{

    return useContext(wishlistContext);
}