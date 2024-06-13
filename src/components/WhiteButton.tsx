import { ButtonT } from "@/types/ButtonTypes";
import React from "react";

const WhiteButton = ({ name, onClick, type }: ButtonT) => {
  return (
    <div className="flex mt-6 mb-3 ">
      <button
        onClick={onClick}
        type={type}
        className="bg-white text-black rounded py-3 px-6 "
      >
        {name}
      </button>
    </div>
  );
};

export default WhiteButton;
