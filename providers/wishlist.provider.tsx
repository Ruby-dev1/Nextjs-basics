"use client"
import react,{useState}from"react";
import wishlistContext from "@/contexts/wishlist.context"
import { TWishlist } from "@/types/wishlist.types"

const WishlistProvider = ({children}:{children:React.ReactNode})=>{

    const [wishlist, setWishlist]= useState <TWishlist[]>([])

    return(
        <wishlistContext.Provider 

        value={{
            wishlist,
            addToWishlist:()=>{},
            removeFromWishlist:()=>{},
            isExists:()=>false,
            isLoading: false,
        }}
        >

            {children}
        </wishlistContext.Provider>
    )

};

export default WishlistProvider;
