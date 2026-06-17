"use client";
import { authClient } from "@/lib/auth-client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        errorCallbackURL: "/login?error=oauth&provider=google",
      });
    } catch {}
  };
  return (
    <OAuthLoginButton
      isLoading={isLoading}
      icon={<FcGoogle className="size-6" />}
      name="Google"
      onClick={loginWithGoogle}
    />
  );
};

export default GoogleLoginButton;
