import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import * as yup from "yup";

// export type TLogin = {
//   email: string;
//   password: string;
// };

export type TLogin = yup.InferType<typeof loginSchema>;
export type Tsignup = yup.InferType<typeof signupSchema>;
