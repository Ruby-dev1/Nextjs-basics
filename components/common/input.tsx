import React, { FC, ChangeEvent } from "react";
import { IconType } from "react-icons";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface IProps {
  label: string;
  name: string;
  id: string;
  error?:string;
  required?:boolean;


  type?: "text" | "email" | "password";
  placeholder: string;
  // value: string;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  Icon?: IconType;
  register:UseFormRegister<any>
}

const Input: FC<IProps> = ({
  id,
  label,
  name,
  register,
  required,
 
  placeholder,
  error,

  type = "text",
 
  Icon,
}) => {
  return (
<div className="mt-5">
  <label
    htmlFor={id}
    className="text-medium gap-1 font-normal font-sans"
  >
    {label}
    {required&& <span className="text-red-500 ml-1">*</span>}
  </label>

  <div className="mt-2 flex items-center border border-primary rounded-lg px-4">
    {Icon && <Icon className="text-xl text-primary" />}

    <input
      {...register(name)}
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm outline-none"
    />
  </div>


    <small className="block mt-1 text-red-500 text-sm">
      {error}
    </small>

</div>
  );
};

export default Input;