import { buttonTypeT } from "@/types/Button";
import React from "react";

const LimeButton = React.memo(({ name, type }: buttonTypeT) => {
  return (
    <div className="flex">
      <button type={type} className="bg-lime-500 p-2 rounded">
        {name}
      </button>
    </div>
  );
});

LimeButton.displayName = "LimeButton"; //Assigning component definition

export default LimeButton;
