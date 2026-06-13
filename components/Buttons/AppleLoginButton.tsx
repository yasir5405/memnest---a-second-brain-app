"use client";
import OAuthLoginButton from "./OAuthLoginButton";
import { FaApple } from "react-icons/fa";

const AppleLoginButton = () => {
  return (
    <OAuthLoginButton
      icon={<FaApple className="size-6" />}
      name="Apple"
      onClick={() => {
        alert("Apple signin");
      }}
    />
  );
};

export default AppleLoginButton;
