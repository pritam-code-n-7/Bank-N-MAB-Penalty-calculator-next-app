import { ButtonT } from "@/types/ButtonTypes";
import React, { memo } from "react";

const LimeButton = ({ name, type, onClick }: ButtonT) => {
  return (
    <div className="flex">
      <button type={type} onClick={onClick} className="bg-lime-500 p-2 rounded">
        {name}
      </button>
    </div>
  );
};

export default memo(LimeButton);
