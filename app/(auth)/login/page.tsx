"use client";
import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/client/form/login.form";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


// export const metadata: Metadata = {
//   title: "Ecommerce | Login ",
//   description: "Ecommerce  Login  Page",
// };
const queryClient = new QueryClient()

const LoginPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-violet-100 p-5">
        <section>
          <div className="border-2 pb-5">
            <h1 className="text-red-500 text-4xl">Login</h1>
            <p>Welcome Back</p>
          </div>

          <LoginForm />
        </section>
      </main>
    </QueryClientProvider>
  );
};
export default LoginPage;
