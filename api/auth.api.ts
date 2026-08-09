import axios from "axios";
import { TLogin,TSignup } from "@/types/auth.types";
import api from ".";
// Login
export const login = async (data: TLogin) => {
  try {
    const response = await api.post(
     "/auth/login",
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

export const signup = async (data:TSignup)=>{
    try{
        const response = await axios.post(
            "http://localhost:8080/api/v1/auth/register",
            data
        );
        console.log(response);
        return response.data;
        
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.response?.data);
            throw error.response?.data
        }
        throw error;
    
    }
}


