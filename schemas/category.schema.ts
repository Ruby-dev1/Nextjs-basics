import * as yup from "yup";

export const CategorySchema = yup.object({

    name: yup
    .string()
    .required("category is required"),

    description:yup
    .string()
    .required("Description is required")
    .min(25, "Description must be atleast 25 characters long"),

    logo:yup
    .string()
    .required("Logo is required")
})