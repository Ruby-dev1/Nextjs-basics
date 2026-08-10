import * as yup from "yup"
import { productSchema } from "@/schemas/product.schema"

export type TProduct = yup.InferType<typeof productSchema>
