"use client";

import React, { useState } from "react";
import Link from "next/link";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import PasswordInput from "@/components/auth/passwordinput";
import SocialButton from "@/components/common/socialbutton";
import AuthHeader from "@/components/auth/Header";

import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    Phone:" ",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Signup Submitted", formData);
  };

  return (
    <div className="flex justify-center min-h-screen min-w-screen bg-pink-50">
      <div className="relative shadow-(--shadow-card) rounded-2xl p-20 m-40 bg-bg-card">

         <div className="  items-center">
                 <div className=" flex flex-col items-center">
                   <FaUser className=" text-primary text-6xl p-4 -mt-6 border rounded-full" />
                   <h1 className=" text-center m-6.25 text-primary text-4xl font-medium font-serif">
                     <span className="text-black">Create </span> Account
                   </h1>
                 </div>
       
                 <p className=" text-center -mt-4 tracking-wide text-base text-text-secondary pr-6">
                Sign up to create your account.
                 </p>
                 <button className="absolute  top-3.75  right-5 border-0 w-11 h-8 cursor-pointer rounded-lg bg-primary text-white">
                   X
                 </button>
               </div>

        <form onSubmit={onSubmit} className="flex flex-col">

          <Input
            label="Full Name"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={onChange}
            Icon={FaUser}
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={onChange}
            Icon={MdEmail}
          />

          <PasswordInput
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={onChange}
          />

          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={onChange}
          />

             <Input
            label="Phone"
            id="Phone"
            name="Phone"
            type="text"
            placeholder="9844051111"
            value={formData.Phone}
            onChange={onChange}
          
          />

    

          <Button
            label="Create Account"
            type="submit"
          />

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-pink-200"></div>

            <p className="px-4 text-text-secondary text-sm">
              or continue with
            </p>

            <div className="flex-1 h-px bg-pink-200"></div>
          </div>

          <div className="flex gap-4">
            <SocialButton
              label="Google"
              Icon={FcGoogle}
            />

            <SocialButton
              label="Github"
              Icon={FaGithub}
            />
          </div>

          <div className="m-8 flex flex-col items-center">
            <p className="text-sm text-text-secondary">
              Already have an account?
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignupForm;