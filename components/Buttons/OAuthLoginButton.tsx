"use client";
import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface props {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  isLoading: boolean;
}

const OAuthLoginButton = ({ icon, name, onClick, isLoading }: props) => {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      size={"lg"}
      className="flex md:flex-col gap-0.5 py-8 px-10 flex-1"
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : icon}
      <p className="text-sm">{name}</p>
    </Button>
  );
};

export default OAuthLoginButton;
