import api from "."


//* add product to cart
export const addProductToCart = async(data:{
    productId:string;
    quantity:number;
})=>{
    try{
        const response = await api.post("/cart",data);
return response.data;
    }catch(error:any){
        throw error?.response?.data;
    }
};

// //* get cart

export const getCart = async()=>{
    try{
        const response = await api.get("/cart");
        return response.data;
    }
    catch(error:any){
        throw error?.response?.data;
    }
};


// //* remove product from cart

export const removeProductFromCart = async (productId:string)=>{
    try{
        const response = await api.delete(`/cart/${productId}`)
        return response.data;

    }catch(error:any){
        throw error?.response?.data;
    }
}



//* update quantity in product 

export const updateCartQuantity = async({productId,quantity}:{productId:string,quantity:number})=>{
    try{
        const response = await api.put(`/cart/${productId}`,{quantity})
        return response.data;

    }
    catch(error:any){
        throw error?.response?.data;

    }
}


//* clear all carts

export const clearCart = async()=>{
    try{

        const response = await api.delete("/cart")

    }catch(error:any){
        throw error?.response?.data;
    }
}