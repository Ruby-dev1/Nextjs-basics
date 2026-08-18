import api from "."

export const addToCart = async(data:{
    productId:string;
    quantity:number;
})=>{
    try{
        const response = await api.post("/cart",data);

    }catch(error:any){
        throw error?.response?.data;
    }
};

// //* get cart

// export const getCart = async()=>{
//     try{

//         const response = await api.get("/cart")

//     }catch(error:any){
//         throw error?.response?.data
//     }
// }


// //* remove product from cart

