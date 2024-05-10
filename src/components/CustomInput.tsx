import { InputFieldT } from "@/types/InputFields";
import React from "react";

const CustomInput: React.FC<InputFieldT> = ({
  label,
  htmlFor,
  id,
  type,
  value,
  onChange,
  maxLength,
  min,
  required,
  readOnly,
  children
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="block text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={
          onChange as React.ChangeEventHandler<
            HTMLInputElement | HTMLSelectElement
          >
        }
        maxLength={maxLength}
        min={min}
        required={required}
        readOnly={readOnly}
        className="rounded-md border border-neutral-500 focus:ring-2 focus:ring-teal-500 outline-none w-full relative z-10 mt-2 bg-neutral-950 text-white py-2 px-2 leading-tight"
      />
      {children}
    </div>
  );
};

export default CustomInput;
