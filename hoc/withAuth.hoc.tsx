"use client";

import React, { useEffect } from "react";
import { Role } from "@/types/enum.types";
import { useAuth } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const WithAuth = (
  Component: any,
  roles?: Role[],
) => {
  const ProtectedComponent = (props: any) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {

      if (isLoading){    
             return 
            }


      // Not logged in
      if (!user && !isLoading) {
    toast.error("unauthorized.login required")
    router.replace("/login")
        return 
      }

      // User doesn't have required role
      if (user && roles && Array.isArray(roles) && !roles.includes(user.role)) {
      toast.error("unauthorized. login required")
      router.replace("/login")
        return ;
      }
    }, [user, isLoading]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return null;
    }

    if (roles && !roles.includes(user.role)) {
      return null;
    }

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default WithAuth;