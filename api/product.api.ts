import api from ".";

export const createBrand = async (data: FormData) => {
  const response = await api.post("/brand", data);

  return response.data;
};