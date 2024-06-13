import React from "react";
import { useAuth } from "@/context/index";
import { useRouter } from "next/navigation";

const PrivateAuthGuard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { userLoggedIn, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && userLoggedIn) {
      router.replace("/"); // Redirect authenticated users to the dashboard or home
    }
  }, [userLoggedIn, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Customize this loading state
  }

  return <>{!userLoggedIn ? children : null}</>;
};

export default PrivateAuthGuard;
