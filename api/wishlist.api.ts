import api from "."

export const addToWishlist = async(data:{productId:string})=>{


    try{

        const response = await api.post("/wishlist",data)

    }catch(error:any){
        throw error?.response?.data;
    }
}