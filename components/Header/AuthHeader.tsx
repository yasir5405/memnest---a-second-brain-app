"use client";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const pathname = usePathname();
  const isSignUp = pathname.includes("sign-up");

  return (
    <>
      <h1 className="text-xl font-semibold leading-5">
        {isSignUp ? "Create your Memnest account." : "Welcome back to Memnest."}
      </h1>

      <h3 className="text-xl font-semibold text-neutral-500/70">
        {isSignUp
          ? "Start building your second brain"
          : "Sign in to your Memnest account"}
      </h3>
    </>
  );
};

export default AuthHeader;
