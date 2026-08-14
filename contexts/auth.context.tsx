import { TLogin, TSignup } from '@/types/auth.types';
import { TUser } from '@/types/user.types';
import { createContext } from "react"

//

type TauthContext = {
    user: TUser[]| null,
    login:(data:TLogin)=>void
    signup: (data:TSignup)=>void
    logout:()=>void
    isLoading:boolean


    

}


const initialValue:TauthContext ={
    user:null,
     isLoading: false,
    login:()=>{},
   signup :()=>{ },
   logout: ()=> {},

   

}
const authcontext = createContext <TauthContext>(initialValue)
export default authcontext;