import React from "react";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex justify-center min-h-screen min-w-screen bg-pink-50">
      <div className=" relative  shadow-[var(--shadow-card)] rounded-2xl p-20 m-40  bg-bg-card">
        <div className="  items-center">
          <div className=" flex flex-col items-center">
            <FaUser className=" text-primary text-6xl p-4 -mt-6 border rounded-full"/>
            <h1 className=" text-center m-[25px]  text-primary text-4xl font-medium font-serif">
              <span className="text-black">Welcome </span> Back
            </h1>
          </div>

          <p className=" text-center -mt-4 tracking-wide text-base text-text-secondary pr-6">
            Log in to access your account
          </p>
          <button className="absolute  top-[15px] right-[20px] border-0 w-11 h-8 cursor-pointer rounded-lg bg-primary text-white">
            X
          </button>
        </div>

        <form className="flex flex-col">
          <label className="mt-5 text-medium font-normal font-sans ">
            Email Address
          </label>
          <div className=" mt-2 flex items-center border border-primary rounded-lg  px-4  ">
            <MdEmail className=" text-xl mt-2 text-primary" />

            <input
              className="mt-2 px-4 py-1.5 outline-0 box-border w-64"
              name="email"
              type="email"
              placeholder=" Enter your email "
            />
          </div>

          <label className="mt-5 text-medium font- normal font-sans ">
            Password
          </label>

          <div className="flex items-center border border-primary rounded-lg px-4 mt-2">
            <MdLock className="text-xl mt-2 text-primary" />

            <input
              className="mt-2 px-4 py-1.75 outline-0"
              name="password"
              type="text"
              placeholder="Enter your password"
            />
          </div>

          <button className= "border mt-10 rounded-lg p-2 text-medium font-medium font-sans bg-primary text-white"type="submit">Login</button>

          <p className="text-text-secondary mt-2 text-center ">or</p>
          <div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
