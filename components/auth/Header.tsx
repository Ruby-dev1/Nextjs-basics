

import React from "react";
import { FaUser } from "react-icons/fa";

interface IProps {
  title: string;
  subtitle: string;
  onClose?: () => void;
}

const AuthHeader = ({ title, subtitle, onClose }: IProps) => {
  return (
    <div className="relative">
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute  top-3.75  right-5 border-0 w-11 h-8 cursor-pointer rounded-lg bg-primary text-white">
      
        X
      </button>

      {/* User Icon */}
      <div className="flex flex-col items-center">
        <FaUser className="text-primary text-6xl p-4 -mt-6 border rounded-full" />

        <h1 className="text-center m-6.25 text-primary text-4xl font-medium font-serif">
          <span className="text-black">{title.split(" ")[0]} </span>
          {title.split(" ").slice(1).join(" ")}
        </h1>

        <p className="text-center -mt-4 tracking-wide text-base text-text-secondary pr-6">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthHeader;