import api from "."


//* add product to wishlist
export const addProductToWishlist = async(data:{productId:string})=>{


    try{

        const response = await api.post("/wishlist",data)
return response.data;
    }catch(error:any){
        throw error?.response?.data;
    }
}


//* get wishlist
export const getWishlist = async () => {
  try {
    const response = await api.get("/wishlist");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* remove product from wishlist

export const removeProductFromWishlist = async (productId: string) => {
  try {
    const response = await api.delete(`/wishlist/${productId}`);

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};