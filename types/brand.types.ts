import * as yup from "yup";
import { brandSchema } from "@/schemas/brand.schema";

export type TBrand = yup.InferType<typeof brandSchema>;