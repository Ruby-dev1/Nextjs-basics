import * as yup from "yup";

//* login schema
export const loginSchema = yup.object({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});