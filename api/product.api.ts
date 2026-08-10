import api from ".";

export const createProduct = async (data: FormData) => {
  const response = await api.post("/product", data);

  return response.data;
};