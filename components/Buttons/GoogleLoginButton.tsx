"use client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  return (
    <OAuthLoginButton
      icon={<FcGoogle className="size-6" />}
      name="Google"
      onClick={() => {
        alert("Google signin");
      }}
    />
  );
};

export default GoogleLoginButton;
