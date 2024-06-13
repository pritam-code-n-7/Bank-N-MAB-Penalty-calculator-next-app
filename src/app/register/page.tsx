"use client";
import { useSignupValidation } from "@/ValidationSchema/valid";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { doCreateUserWithEmailAndPassword } from "@/services/auth";
import { useAuth } from "@/context";
import Link from "next/link";
import WhiteButton from "@/components/WhiteButton";

const Register: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  //initialize user validation
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useSignupValidation();

  const { userLoggedIn } = useAuth();

  const submitForm = async () => {
    try {
      if (!isRegister) {
        setIsRegister(true);
        await doCreateUserWithEmailAndPassword(email, password);
        alert("Registration Successful");
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
            <p>Registration Form</p>
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
              <InputField
                type="cnfpassword"
                placeholder="Confirm your password"
                name="cnfpassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                autoComplete="off"
                register={register}
                error={errors.password}
              />

              <div className="flex justify-center">
                <WhiteButton name="Register Here" type="submit" />
              </div>
            </form>
            <Link className="text-sm text-center" href="/login">
              Already have an account! Click here.
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Register;
