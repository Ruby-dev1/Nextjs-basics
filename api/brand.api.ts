import api from ".";

export const createBrand = async (data: FormData) => {
  const response = await api.post("/brand", data);
  return response.data;
};

export const getAllBrands = async (page = 1) => {
  const response = await api.get(`/brand?page=${page}&limit=10`);
  return response.data;
};

export const getBrandById = async (id: string) => {
  const response = await api.get(`/brand/${id}`);
  return response.data;
};

export const updateBrand = async ({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) => {
  const response = await api.put(`/brand/${id}`, data);
  return response.data;
};

export const deleteBrand = async (id: string) => {
  const response = await api.delete(`/brand/${id}`);
  return response.data;
};