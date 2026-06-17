"use client";
import { authClient } from "@/lib/auth-client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const GithubLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginWithGithub = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
        errorCallbackURL: "/login?error=oauth&provider=github",
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <OAuthLoginButton
      isLoading={isLoading}
      icon={<FaGithub className="size-6" />}
      name="Gituhub"
      onClick={loginWithGithub}
    />
  );
};

export default GithubLoginButton;
