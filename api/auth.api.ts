import axios from "axios";
import { TLogin,TSignup } from "@/types/auth.types";
import api from ".";
//* Login
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

//* signup 

export const signup = async (data:TSignup)=>{
    try{
        const response = await api.post(
            "auth/register",
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


//*logout
export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");

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


//*getProfile
export const getProfile = async () => {
  try {
    const response = await api.get("/auth/me");

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