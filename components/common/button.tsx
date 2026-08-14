import React from "react";

interface IProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;

}

const Button = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  
}: IProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}

      className="
        w-full
        mt-10
        rounded-lg
        py-2
        bg-primary
        text-white
        text-base
        font-medium
        font-sans
        outline-none
        transition-all
        duration-300
        hover:opacity-90
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer
      "
    >
      {label}
    </button>
  );
};

export default Button;