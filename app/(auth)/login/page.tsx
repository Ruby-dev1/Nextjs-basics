
import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/client/form/login.form";


// export const metadata: Metadata = {
//   title: "Ecommerce | Login ",
//   description: "Ecommerce  Login  Page",
// };


const LoginPage = () => {
  return (
   
      <main >
        <section>
          
          <LoginForm />
        </section>
      </main>

  );
};
export default LoginPage;
