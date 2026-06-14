"use client";
import { authClient } from "@/lib/auth-client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      errorCallbackURL: "/login?error=oauth",
    });
  };
  return (
    <OAuthLoginButton
      icon={<FcGoogle className="size-6" />}
      name="Google"
      onClick={loginWithGoogle}
    />
  );
};

export default GoogleLoginButton;
