import api from ".";

export const createCategory = async (data: FormData) => {
  const response = await api.post("/category", data);
  return response.data;
};

export const getAllCategories = async (page = 1) => {
  const response = await api.get(`/category?page=${page}&limit=10`);
  return response.data;
};

export const getCategoryById = async (id: string) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};

export const updateCategory = async ({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) => {
  const response = await api.put(`/category/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await api.delete(`/category/${id}`);
  return response.data;
};