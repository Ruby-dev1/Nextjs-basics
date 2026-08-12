import * as yup from "yup";

export const productSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Product name must be at least 2 characters")
    .max(100, "Product name cannot exceed 100 characters")
    .required("Product name is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  description: yup
    .string()
    .trim()
    .min(25, "Description must be at least 25 characters")
    .max(800, "Description cannot exceed 800 characters")
    .required("Description is required"),

  category: yup
    .string()
    .required("Category is required"),

  brand: yup
    .string()
    .required("Brand is required"),

  cover_image: yup
    .mixed()
    .required("Cover image is required"),

images: yup
  .array()
  .of(yup.mixed<File>().required())
  .required("Product images are required"),

  is_featured: yup
    .boolean()
    .default(false),
});