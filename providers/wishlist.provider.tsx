"use client"
import react,{useState,useEffect}from"react";
import wishlistContext from "@/contexts/wishlist.context"
import { TWishlist } from "@/types/wishlist.types"
import { addToWishlist as addToWishlistApi,  getWishlist, removeFromWishlist as removeFromWishlistApi, } from "@/api/wishlist.api";

const WishlistProvider = ({children}:{children:React.ReactNode})=>{

    // 2. Update frontend state
      const [wishlist, setWishlist]= useState <TWishlist[]>([])

const addToWishlist = async (productId: string) => {
  try {
    // 1. Add product to backend
    await addToWishlistApi({ productId });

    // 2. Get updated wishlist
    const response = await getWishlist();

    // 3. Update frontend state
    setWishlist(response?.data?.products ?? []);
  } catch (error) {
    console.log("Wishlist error:", error);
  }
};
const removeFromWishlist = async (productId: string) => {
  try {
    await removeFromWishlistApi(productId);

    // Remove product from frontend state
    setWishlist((prev) =>
      prev.filter((item) => item._id !== productId)
    );

  } catch (error) {
    console.log("Remove wishlist error:", error);
  }
};
useEffect(() => {
  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();

   console.log(
  "ADD WISHLIST RESPONSE:",
  JSON.stringify(response, null, 2)
);
console.log("FIRST PRODUCT:", response?.data?.products?.[0]);
      setWishlist(response?.data?.products ?? []);
      
    } catch (error) {
      console.log("Failed to fetch wishlist:", error);
    }
    
  };

  fetchWishlist();
}, []);
    // 3. Now isExists() knows it's there


const isExists = (productId: string) => {
  return wishlist.some(
    (item) => item._id === productId
  );
};
    return(
        <wishlistContext.Provider 

        value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            isExists,
            isLoading: false,
        }}
        >

            {children}
        </wishlistContext.Provider>
    )

};

export default WishlistProvider;
