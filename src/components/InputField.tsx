import { InputFieldT } from "@/types/FormTypes";
import React from "react";

const InputField = ({
  type,
  name,
  onChange,
  value,
  placeholder,
  register,
  error,
  autoComplete,
}: InputFieldT) => {
  return (
    <div>
      <input
        {...register(name)}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        id={`field_${name}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded border border-neutral-500  w-full relative z-10  mt-2 outline-none bg-neutral-950 text-white focus:ring-2 focus:ring-teal-500 py-4 px-2 leading-tight text-center placeholder:opacity-45"
      />
      {error && <span className="text-red-500 py-1">{error.message}</span>}
    </div>
  );
};

export default InputField;
