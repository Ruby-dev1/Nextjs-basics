import wishlistContext from "@/contexts/wishlist.context"
import { useContext } from "react";

export const useWishlist = ()=>{

    if(!wishlistContext){
        console.log("useWishlist hook must be used inside wishlist provider");
    }

    return useContext(wishlistContext);
}