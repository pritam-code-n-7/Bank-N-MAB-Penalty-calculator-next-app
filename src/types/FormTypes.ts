import { ChangeEvent } from "react";
import { ErrorOption } from "react-hook-form";

export type InputFieldT = {
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value:string;
  register?: any;
  error: undefined | ErrorOption;
  autoComplete?: string;
};
