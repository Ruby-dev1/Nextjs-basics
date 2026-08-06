import React, { FC, ChangeEvent } from "react";
import { IconType } from "react-icons";

interface IProps {
  label: string;
  name: string;
  id: string;

  type?: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  Icon?: IconType;
}

const Input: FC<IProps> = ({
  id,
  label,
  name,
 
  placeholder,
  onChange,
  type = "text",
  value,
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
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
  
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default Input;