import React from "react";
import { IconType } from "react-icons";

interface IProps {
  label: string;
  Icon: IconType;
  onClick?: () => void;
}

const SocialButton = ({
  label,
  Icon,
  onClick,
}: IProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex-1
        flex
        items-center
        justify-center
        gap-3
        border
        border-pink-200
        rounded-2xl
        bg-white
        py-3
        cursor-pointer
        hover:bg-pink-50
        active:bg-primary
        transition-all
        duration-300
      "
    >
      <Icon className="text-2xl" />

      <span className="text-base font-medium text-text-primary">
        {label}
      </span>
    </button>
  );
};

export default SocialButton;