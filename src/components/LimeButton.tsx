import { buttonTypeT } from "@/types/Button";
import React from "react";

const LimeButton = ({ name, type, onClick }: buttonTypeT) => {
  return (
    <div className="flex">
      <button type={type} onClick={onClick} className="bg-lime-500 p-2 rounded">
        {name}
      </button>
    </div>
  );
};

export default LimeButton;
