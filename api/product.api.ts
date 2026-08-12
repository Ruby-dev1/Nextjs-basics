import api from ".";

export const createProduct = async (data: FormData) => {
  const response = await api.post("/product", data);

  return response.data;
};

//* get all products

export const getAllProducts = async()=>{

  try{
    const response = await api.get("/product");
    return response?.data;

  }catch(error:any){
    throw error?.response?.data;
  }
}


//* get featured products

export const getFeaturedProducts = async()=>{

  try{
    const response = await api.get("/product/featured")
    return response?.data;

  }catch(error:any){
    throw error?.response?.data;
  }
}