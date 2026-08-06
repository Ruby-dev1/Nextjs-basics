import React, { FC, ChangeEvent } from "react";
import { IconType } from "react-icons";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface IProps {
  label: string;
  name: string;
  id: string;

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
 
  placeholder,

  type = "text",
 
  Icon,
}) => {
  return (
    <div className="mt-5">
      <label
        htmlFor={id}
        className="text-medium font-normal font-sans"
      >
        {label}
      </label>

      <div className="mt-2 flex items-center border border-primary rounded-lg px-4">
        {Icon && <Icon className="text-xl text-primary" />}

        <input
        {...register(name)}
          id={id}
          // name={name}
          // type={type}
          placeholder={placeholder}
          type={type}
  
          // value={value}
          // onChange={onChange}
          className="w-full px-4 py-3 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default Input;