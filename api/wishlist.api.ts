import api from "."

export const addToWishlist = async(data:{productId:string})=>{


    try{

        const response = await api.post("/wishlist",data)
return response.data;
    }catch(error:any){
        throw error?.response?.data;
    }
}

export const getWishlist = async () => {
  try {
    const response = await api.get("/wishlist");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};