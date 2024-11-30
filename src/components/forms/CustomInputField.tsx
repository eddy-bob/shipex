import { RenderIf } from "../shared";
import React, { useState } from "react";

interface IProps {
  placeholder?: string;
  className?: string;
  style?: any;
  leftIcon?: string;

  leftIconStyle?: string;
  onChange: (value: string) => void;
  inputStyle?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
}
const CustomInputField = ({
  placeholder,
  className,
  style,
  leftIcon,
  leftIconStyle,
  inputStyle,
  onChange,
  required = false,
  type = "text",
}: IProps) => {
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>(type);

  const computeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div
      tabIndex={0}
      style={style}
      className={`flex   px-2.5 focus:ring-4 outline-none bg-white focus:border focus:ring-blue-100  focus:border-blue-base border rounded-md border-[#E5E7EB] ${className}`}
    >
      <RenderIf condition={!!leftIcon}>
        <img src={leftIcon} className={`${leftIconStyle}`} />
      </RenderIf>
      <input
        placeholder={placeholder}
        onChange={(value) => onChange(value.target.value)}
        required={required}
        type={inputType}
        className={`flex-1 w-full pl-3 py-2.5   border-none focus:outline-none focus:bg-white  bg-white focus:ring-0 placeholder:text-grey-lighter placeholder:text-[15px] placeholder:font-[500] focus:border-none text-grey-black text-[15px] ${
          inputType === "password" &&
          " placeholder:tracking-[0px] tracking-[5px]"
        } ${inputStyle}`}
      />
      <RenderIf condition={type === "password"}>
        <img src="/images/eye-off.svg" onClick={computeInputType} />
      </RenderIf>
    </div>
  );
};

export default CustomInputField;
