import React from "react";
import { useAuth } from "@/context/index";
import { useRouter } from "next/navigation";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userLoggedIn, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !userLoggedIn) {
      router.replace("/login");
    }
  }, [userLoggedIn, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return <>{userLoggedIn ? children : null}</>;
};

export default AuthGuard;
