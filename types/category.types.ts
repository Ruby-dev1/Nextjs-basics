import * as yup from "yup";
import { CategorySchema } from "@/schemas/category.schema";

export type TCategory = yup.InferType<typeof CategorySchema>