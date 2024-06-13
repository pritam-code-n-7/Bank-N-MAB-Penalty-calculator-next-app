"use client";
import BlackButton from "@/components/BlackButton";
import PrivateAuthGuard from "@/components/PrivateAuthGuard";
import WhiteButton from "@/components/WhiteButton";
import Link from "next/link";

const App: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <div className="flex justify-center gap-6 items-center min-h-screen w-full">
        <div className="flex">
          <Link href="/login">
            <BlackButton name="Login" />
          </Link>
        </div>
        <div className="flex">
          <Link href="/register">
            <WhiteButton name="Signup" />
          </Link>
        </div>
      </div>
    </PrivateAuthGuard>
  );
};

export default App;
