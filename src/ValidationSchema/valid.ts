import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormReturn, useForm } from "react-hook-form";
import * as Yup from "yup";

interface SignUpFormData {
  email: string;
  password: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

//sign-up schema
const signupSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("please filled this field"),
  password: Yup.string()
    .required("Please fill this field")
    .min(6, "please enter minimum 6 charecter"),
});

export const useSignupValidation = (): UseFormReturn<SignUpFormData> =>
  useForm<SignUpFormData>({
    resolver: yupResolver(signupSchema),
  });

// login schema
const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("please filled this field"),
  password: Yup.string()
    .required("Please fill this field")
    .min(6, "please enter minimum 6 charecter"),
});

export const useLoginValidation = (): UseFormReturn<LoginFormData> =>
  useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
