import React, { ChangeEvent } from "react";

interface DropDownProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  id:string;
  name:string;
}

const DropDown: React.FC<DropDownProps> = ({ value, onChange, id, name }) => {
  return (
    <div className="relative z-10 mt-2 mb-4">
      <select
        className="block appearance-none w-full bg-neutral-950 border border-neutral-500 focus:ring-2 focus:ring-teal-500 outline-none rounded-md py-2 px-2 text-white leading-tight max-h-40 overflow-y-auto"
        value={value}
        onChange={onChange}
        id={id}
        name={name}      >
        <option value="">Select Bank</option>
        <option value="icici">ICICI Bank</option>
        <option value="sbi">SBI</option>
        <option value="hdfc">HDFC Bank</option>
        <option value="union">Union Bank</option>
      </select>
    </div>
  );
};

export default DropDown;
