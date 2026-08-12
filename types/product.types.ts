import * as yup from "yup"
import { productSchema } from "@/schemas/product.schema"
import { Image } from "./global.types"

export type TProduct = yup.InferType<typeof productSchema>

export type IProduct = {
    _id:string,
    name:string,
    price: number;
    cover_image:Image,
    images:Image[],
    description?:string,
    is_featured:boolean,
    new_arrivals:boolean,
    

}