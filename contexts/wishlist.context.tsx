import { TWishlist } from "@/types/wishlist.types"
import { createContext } from "react"

//wishlist data -> []
// add to wishlist ()={}

// remove from wishlist ()={}
// isExists(productId)=> boolean

type TWishlistContext={
    wishlist:TWishlist[]|null,
    addToWishlist:(productId:string)=>void
    removeFromWishlist:(productId:string)=>void
    isExists:(productId:string)=>boolean
    isLoading:boolean

}

const initialValue:TWishlistContext ={
    wishlist:null,
     isLoading: false,
    addToWishlist:()=>{},
   removeFromWishlist :()=>{ },
    isExists:()=>false
   

}


const wishlistContext = createContext <TWishlistContext>(initialValue)
export default wishlistContext;