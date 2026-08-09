
import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/client/form/login.form";


// export const metadata: Metadata = {
//   title: "Ecommerce | Login ",
//   description: "Ecommerce  Login  Page",
// };


const LoginPage = () => {
  return (
   
      <main className="bg-violet-100 p-5">
        <section>
          <div className="border-2 pb-5">
            <h1 className="text-red-500 text-4xl">Login</h1>
            <p>Welcome Back</p>
          </div>

          <LoginForm />
        </section>
      </main>

  );
};
export default LoginPage;
