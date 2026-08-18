import api from ".";

export const createProduct = async (data: FormData) => {
  const response = await api.post("/product", data);

  return response.data;
};

//* get all products

export const getAllProducts = async (page: number = 1) => {
  const response = await api.get(`/product?page=${page}`);
    console.log("REQUESTED PAGE:", page);

  console.log("RAW API RESPONSE:", response.data);

  return response.data;
};


//* get featured products

export const getFeaturedProducts = async()=>{

  try{
    const response = await api.get("/product/featured")
    return response?.data;

  }catch(error:any){
    throw error?.response?.data;
  }
}


//* get product by id for product detail page

export const getProductById = async(id:string)=>{

  try{

    const response = await api.get(`/product/${id}`)
    return response?.data;

  } catch(error:any){
    throw error?.response?.data;
  }
}

//* Update
export const updateProduct = async (
  id: string,
  data: FormData
) => {
  try {
    const response = await api.put(`/product/${id}`, data);

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* Delete product

export const deleteProduct = async (id: string) => {
  try {
    const response = await api.delete(`/product/${id}`);

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};