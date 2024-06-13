export type ButtonT = {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
