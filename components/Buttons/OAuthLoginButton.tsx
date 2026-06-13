"use client";
import React from "react";
import { Button } from "../ui/button";

interface props {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const OAuthLoginButton = ({ icon, name, onClick }: props) => {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      size={"lg"}
      className="flex flex-col gap-0.5 py-8 px-10 flex-1"
    >
      {icon}
      <p className="text-sm">{name}</p>
    </Button>
  );
};

export default OAuthLoginButton;
