import Authcontext from "@/contexts/auth.context";
import { useContext } from "react";
export const useAuth = ()=>{
    if(!Authcontext){
        console.log("useAuth hook must be used insdie AuthContext")
    }
    return useContext(Authcontext);
}