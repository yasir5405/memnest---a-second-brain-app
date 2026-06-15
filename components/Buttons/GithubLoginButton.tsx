"use client";
import { authClient } from "@/lib/auth-client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FaGithub } from "react-icons/fa";

const GithubLoginButton = () => {
  const loginWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/login?error=oauth&provider=github",
    });
  };
  return (
    <OAuthLoginButton
      icon={<FaGithub className="size-6" />}
      name="Gituhub"
      onClick={loginWithGithub}
    />
  );
};

export default GithubLoginButton;
