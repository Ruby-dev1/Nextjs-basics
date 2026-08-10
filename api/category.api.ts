import api from ".";

export const createCategory = async(data: FormData)=>{

    const response = await api.post("/category",data);

    return response.data;
};

