// src/components/Header.tsx
"use client";
import { useAuth } from "@/context";
import { useRouter } from "next/navigation";
import React from "react";
import WhiteButton from "@/components/WhiteButton";
import { doSignOut } from "@/services/auth";
import Link from "next/link";

const HeaderDemo: React.FC = () => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();

  return (
    <div className="bg-black p-3">
      <div className=" font-bold text-lg font-mono text-white flex items-center gap-4 rounded">
        <p>PenaltyCalculator</p>
        {userLoggedIn ? (
          <div className="flex">
            <WhiteButton
              name="Logout"
              onClick={() => {
                doSignOut()
                  .then(() => {
                    router.push("/");
                  })
                  .catch((error) =>
                    console.error("unusual error occurred", error)
                  );
              }}
            />
          </div>
        ) : (
          <div className="flex gap-4 ">
            <Link href="/login" className="text-sm text-blue-600 underline">
              Login
            </Link>
            <Link href="/register" className="text-sm text-blue-600 underline">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderDemo;
