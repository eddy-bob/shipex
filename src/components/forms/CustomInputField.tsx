import { RenderIf } from "../shared";
import React, { useState, useRef } from "react";

interface IProps {
  placeholder?: string;
  className?: string;
  style?: any;
  value?: string;
  leftIcon?: string;
  validationErrorMessage?: string;
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
  value='',
  validationErrorMessage,
  onChange,
  required = false,
  type = "text",
}: IProps) => {
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>(type);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const computeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const computeInputFocusStyle = (action: "blur" | "focus") => {
    if (action === "focus") {
      inputRef.current?.classList.add(
      
        "ring-blue-100",
        "ring-4",
        "border-blue-base"
      );
    } else {
      inputRef.current?.classList.remove(
   
        "ring-4",
        "ring-blue-100",
        "border-blue-base"
      );
    }
  };
  return (
    <div className="space-y-2">
      <div
        ref={inputRef}
        style={style}
        className={`flex   px-2.5 outline-none bg-white border rounded-md border-[#E5E7EB] ${className} ${
          validationErrorMessage &&
          " border ring-red-100 border-red-base ring-4 "
        }`}
      >
        <RenderIf condition={!!leftIcon}>
          <img
            src={leftIcon}
            className={`${leftIconStyle}`}
            alt="left-input-icon"
          />
        </RenderIf>
        <input
          placeholder={placeholder}
          value={value}
          onFocus={() => computeInputFocusStyle("focus")}
          onBlur={() => computeInputFocusStyle("blur")}
          onChange={(value) => onChange(value.target.value)}
          required={required}
          type={inputType}
          className={`flex-1 w-full pl-3 py-2.5   border-none focus:outline-none focus:bg-white  bg-white focus:ring-0 placeholder:text-grey-lighter placeholder:text-[15px] placeholder:font-[500] focus:border-none text-grey-black text-[15px] ${
            inputType === "password" &&
            " placeholder:tracking-[0px] tracking-[5px]"
          } ${inputStyle}`}
        />
        <RenderIf condition={type === "password"}>
          <img
            src="/images/eye-off.svg"
            onClick={computeInputType}
            alt="eye-off"
          />
        </RenderIf>
      </div>
      <RenderIf condition={!!validationErrorMessage}>
        <p className="text-red-base text-left text-[14px] font-[500]">
          {validationErrorMessage}
        </p>
      </RenderIf>
    </div>
  );
};

export default CustomInputField;
