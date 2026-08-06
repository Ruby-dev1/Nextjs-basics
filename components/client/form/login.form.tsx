"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "@/components/common/button";
import SocialButton from "@/components/common/socialbutton";
import PasswordInput from "@/components/auth/passwordinput";
import Input from "@/components/common/input";
import AuthHeader from "@/components/auth/Header";

const LoginForm = () => {
  // const[formdata, setFormData]= useState({
  //     email:'',
  //     password:''
  // })
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login submitted", formData);
  };
  return (
    <div className="flex justify-center min-h-screen min-w-screen bg-pink-50">
      <div className=" relative  shadow-(--shadow-card) rounded-2xl p-20 m-40  bg-bg-card">
        <div className="  items-center">
          <div className=" flex flex-col items-center">
            <FaUser className=" text-primary text-6xl p-4 -mt-6 border rounded-full" />
            <h1 className=" text-center m-6.25 text-primary text-4xl font-medium font-serif">
              <span className="text-black">Welcome </span> Back
            </h1>
          </div>

          <p className=" text-center -mt-4 tracking-wide text-base text-text-secondary pr-6">
            Log in to access your account
          </p>
          <button className="absolute  top-3.75  right-5 border-0 w-11 h-8 cursor-pointer rounded-lg bg-primary text-white">
            X
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col">
          <Input
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={onChange}
            Icon={MdEmail}
          />

          <PasswordInput
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={onChange}
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <input className="accent-primary" type="checkbox" />
              <label className="text-text-primary text-sm">Remember me</label>
            </div>

            <p className="text-primary font-medium text-sm cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
          <Button label="Login" type="submit" />

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-pink-200"></div>

            <p className="px-4 text-text-secondary text-sm">or continue with</p>

            <div className="flex-1 h-px bg-pink-200"></div>
          </div>

          <div className="flex gap-4">
            <SocialButton label="Google" Icon={FcGoogle} />

            <SocialButton label="Github" Icon={FaGithub} />
          </div>

          <div className="m-8 flex  flex-col gap-2 items-center">
            <p className="text-sm text-text-secondary font-sans  ">
              Don't have an account?{" "}
              <Link
                title="go to sign up page"
                className="text-md text-primary font-semibold cursor-pointer hover:underline"
                href={"/sign-up"}
              >
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
