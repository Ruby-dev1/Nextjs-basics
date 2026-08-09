import axios from "axios";
import { TLogin } from "@/types/auth.types";

// Login
export const login = async (data: TLogin) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/login",
      data
    );

    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      throw error.response?.data;
    }

    throw error;
  }
};


