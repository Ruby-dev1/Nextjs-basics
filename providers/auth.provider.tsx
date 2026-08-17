"use client";

import Authcontext from "@/contexts/auth.context";
import React from "react";
import { useMutation, useQuery ,useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth.api";
import { getProfile, logout, } from "@/api/auth.api";
import { TLogin } from "@/types/auth.types";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = useQueryClient();
  const router = useRouter();

  // Get logged-in user's profile
  const { data, isLoading } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: getProfile,
    retry: false,
    refetchInterval: 5 * 60 * 1000,
  });

  // Logout mutation
  const { mutate: logoutMutation } = useMutation({
    mutationFn: logout,

    onSuccess: (response) => {
      toast.success(response.message ?? "Logout successful");
      router.replace("/");
    },

    onError: (error: any) => {
      toast.error(error.message ?? "Something went wrong");
    },
  });

  const handleLogout = () => {
    logoutMutation();
  };


  // login Mutation

  const {mutate:loginMutation,isPending:loginPending} = useMutation({
    mutationFn:login,

    onSuccess: (response)=>{
        toast.success(response.message?? "Login Successful");

        queryClient.invalidateQueries({
            queryKey:["auth","me"]

        })
        router.replace("/");

    },
    onError:(error:any)=>{
        toast.error(error.message?? "Login Failed")
    }

  })

  const handlelogin = (data:TLogin)=>{
    loginMutation(data);

  }






  const signup = () => {
    // signup logic will be added here
  };

  return (
<Authcontext.Provider
  value={{
    isLoading: isLoading || loginPending,
    user: data?.data ?? null,
    login:handlelogin,
    signup,
    logout: handleLogout,
  }}
>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;