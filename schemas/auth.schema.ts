import * as yup from "yup";

//* login schema
export const loginSchema = yup.object({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});


//* register/signup  Schema

export const signupSchema = yup.object({
  full_name:yup
  .string()
  .required("fullName is required"),

  email: yup
  .string()
  .email("Invalid email")
  .required("email is required"),

  phone: yup.string().required("phone number is required"),

  password: yup
  .string()
  .min(6,"password must be atleast 6 characters long")
  .required("password is required"),

  confirmPassword:yup
  .string()
  .oneOf([yup.ref("password")],"password must match")
  .required(" confirm password is required")

})