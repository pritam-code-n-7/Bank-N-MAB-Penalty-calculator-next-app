import { ReactNode } from "react";

export type InputFieldT = {
  label: string;
  htmlFor: string;
  id: string;
  type: string;
  value: string ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  min?: number;
  required?: boolean;
  readOnly?: boolean;
  children?: ReactNode;
};
