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

