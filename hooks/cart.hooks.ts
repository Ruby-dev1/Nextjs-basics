import cartContext from "@/contexts/cart.context";
import { useContext } from "react";
export const useCart = ()=>{

    if(!cartContext){
        console.log("useCart hook must be used inside wishlist provider");
    }

    return useContext(cartContext);
}