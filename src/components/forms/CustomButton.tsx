import { RenderIf } from "../shared";
import React, { useState } from "react";

interface IProps {
  title?: string;
  type?: "submit" | "button";
  className?: string;
  style?: any;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => any;
}
const CustomButton = ({
  title,
  className,
  type = "button",
  disabled,
  isLoading = false,
  style,
  onClick = () => {},
}: IProps) => {
  return (
    <button
      tabIndex={0}
      style={style}
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      className={`flex w-full outline-none disabled:bg-blue-disabled bg-blue-base justify-center text-center align-middle p-2.5 focus:ring-4 font-[600] text-[15px] focus:ring-blue-100 text-[#EFF6FF] focus:border-blue-base border rounded-md border-[#E5E7EB] ${className}`}
    >
      {
        <RenderIf condition={isLoading}>
          <svg
            className="animate-spin bg-white h-5 w-5 mr-3 text-center"
            viewBox="0 0 24 24"
          ></svg>
        </RenderIf>
      }
      {title}
    </button>
  );
};

export default CustomButton;
