"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import PasswordInput from "@/components/auth/passwordinput";
import SocialButton from "@/components/common/socialbutton";
import { TSignup } from "@/types/auth.types";
import { FaUser, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/auth.schema"
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const SignupForm = () => {

    const router = useRouter()
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<TSignup>({
    resolver:yupResolver(signupSchema)
  });

  const onSubmit = (data: TSignup) => {
    console.log("Signup Submitted", data);
    mutate(data);

  };

 const { mutate, data,error, isPending } = useMutation({
  mutationFn: signup,

  onSuccess: (response) => {
    // console.log("Signup successful");
    // console.log(data);
    toast.success(response.message ?? "Account created")
    router.replace("/login");
  },

  onError: (error:any) => {
    // console.log("Signup failed");
    // console.log(error);
    toast.error(error?.message ?? "Request failed")
  },
});

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="relative bg-bg-card shadow-(--shadow-card) rounded-2xl p-10 w-full max-w-lg">

        {/* Header */}
        <div className="flex flex-col items-center">
          <FaUser className="text-primary text-6xl p-4 border rounded-full" />

          <h1 className="mt-6 text-4xl font-medium font-serif text-primary">
            <span className="text-black">Create </span>Account
          </h1>

          <p className="mt-2 text-center text-base tracking-wide text-text-secondary">
            Sign up to create your account.
          </p>

          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-primary text-white hover:opacity-90"
          >
            X
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-8"
        >
          <Input

            label="Full Name"
            id="full_name"
            name="full_name"
            placeholder="John Doe"
            Icon={FaUser}
            register={register}
            required
        error={errors.full_name?.message}
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            Icon={MdEmail}
            register={register}
            required
            error = {errors.email?.message}
          />

          <Input
            label="Phone"
            id="phone"
            name="phone"
            type="text"
            placeholder="9844555555"
            register={register}
            error={errors.phone?.message}
        
          />

          <PasswordInput
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
            register={register}
            required
            error={errors.password?.message}
          />

          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            register={register}
            required
            error={errors.confirmPassword?.message}
          />

          <Button
            label={isPending? "Creating Account": "Create Account"}
            type="submit"
          />

  
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-pink-200"></div>

            <p className="px-4 text-sm text-text-secondary">
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
              label="GitHub"
              Icon={FaGithub}
            />
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary">
              Already have an account?{" "}
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