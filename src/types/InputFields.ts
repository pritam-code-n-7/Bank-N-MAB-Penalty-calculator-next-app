import { ReactNode } from "react";

export type InputFieldType = {
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
