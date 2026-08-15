import { Tcart } from "@/types/cart.types";
import {createContext}from "react";

type TCartContext={
    cart: Tcart[]|null,
    isLoading:boolean,
    addToCart:(productId:string,quantity:number)=>void
    removeFromCart:(productId:string,quantity:number)=>void
    updateCart:(productId:string, quantity:number)=>void


}

const initialValue:TCartContext={
cart:null,
isLoading:false,
addToCart:()=>{},
removeFromCart:()=>{},
updateCart:()=>{}


}

const cartcontext = createContext<TCartContext>(initialValue)

export default cartcontext;