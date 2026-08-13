import * as yup from "yup";
import { CategorySchema } from "@/schemas/category.schema";
import { Image } from "./global.types";

export type TCategory = yup.InferType<typeof CategorySchema>

export type ICategory={
    _id:string,
    name:string,
    logo:Image;
    description?:string
}

