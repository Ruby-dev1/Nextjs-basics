import * as yup from "yup";

export const brandSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Brand name must be at least 2 characters")
    .max(50, "Brand name cannot exceed 50 characters")
    .required("Brand name is required"),

  description: yup
    .string()
    .trim()
    .min(25, "Description must be at least 25 characters")
    .max(800, "Description cannot exceed 800 characters")
    .required("Description is required"),

  logo: yup
    .mixed<FileList>()
    .required("Brand logo is required"),
});