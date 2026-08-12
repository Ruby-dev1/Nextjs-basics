import api from ".";

export const createCategory = async(data: FormData)=>{

    const response = await api.post("/category",data);

    return response.data;
};


//* getAll 
export const getAllCategories = async()=>{

    try{
        const response = await api.get("/category");
        return response?.data;

    }catch(error:any){
        throw error?.response?.data
    }
}