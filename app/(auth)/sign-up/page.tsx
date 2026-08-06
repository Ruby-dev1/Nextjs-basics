import { Metadata } from "next";
import React from "react";
import SignupForm from "@/components/client/form/signup.form";

export const metadata: Metadata = {
  title: "Ecommerce | Sign Up",
  description: "Ecommerce Sign Up Page",
};

const SignUpPage = () => {
  return (
    <main>
      <SignupForm />
    </main>
  );
};

export default SignUpPage;
