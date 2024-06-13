"use client";
import { useLoginValidation } from "@/ValidationSchema/valid";
import BlackButton from "@/components/BlackButton";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { doSignInWithEmailAndPassword } from "@/services/auth";
import { useAuth } from "@/context/index";
import Link from "next/link";

const Login: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //initialize user validation
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useLoginValidation();

  const { userLoggedIn } = useAuth();

  const submitForm = async () => {
    try {
      if (!isSignIn) {
        setIsSignIn(true);
        await doSignInWithEmailAndPassword(email, password);
        alert("Login Successful");
        reset();
      }
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (userLoggedIn) {
      router.replace("/home");
    }
  }, [userLoggedIn, router]);

  return (
    <main>
      {userLoggedIn ? null : (
        <div className="min-h-screen flex flex-col items-center">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-6 text-gradient">
            Welcome to Our Website
          </h1>
          <div className="text-lg font-semibold mb-6 text-black">
            <p>Login Form</p>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <form onSubmit={handleSubmit(submitForm)}>
              <InputField
                type="email"
                placeholder="eg: abc@gmail.com"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                register={register}
                error={errors.email}
              />
              <InputField
                type="password"
                placeholder="Enter a strong password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                register={register}
                error={errors.password}
              />
              <div className="flex justify-center">
                <BlackButton name="Login Here" type="submit" />
              </div>
            </form>
            <Link className="text-sm text-center" href="/register">
              Dont have an account! Register here.
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
