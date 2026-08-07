

import React, { FC, useState, ChangeEvent } from "react";
import { MdLock } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FieldValues, UseFormRegister } from "react-hook-form"; 

interface IProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  error?:string;
//   value: string;
   register:UseFormRegister<any>
   required?:boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<IProps> = ({
  id,
  label,
  required,
  name,
  placeholder,
  error,
  register,
//   value,
//   onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-5">
      <label
        htmlFor={id}
        className="text-medium font-normal font-sans"
      >
        {label}
      </label>

      <div className="flex items-center border border-primary rounded-lg px-4 mt-2 relative">
        <MdLock className="text-xl text-primary" />

        <input
        {... register(name)}
          id={id}
        //   name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        //   value={value}
        //   onChange={onChange}
          className="mt-2 px-4 py-1.5 outline-none text-sm w-full"
        />

        {showPassword ? (
          <FaEye
            onClick={() => setShowPassword(false)}
            className="absolute right-4 cursor-pointer text-primary text-lg"
          />
        ) : (
          <FaEyeSlash
            onClick={() => setShowPassword(true)}
            className="absolute right-4 cursor-pointer text-primary text-lg"
          />
        )}
  
      </div>
         <small className="block mt-1 text-red-500 text-sm">
      {error}
    </small>
    </div>
  );
};

export default PasswordInput;