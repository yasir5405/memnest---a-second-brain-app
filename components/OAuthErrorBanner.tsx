"use client";

import { useSearchParams } from "next/navigation";

export const OAuthErrorBanner = () => {
  const searchParams = useSearchParams();

  const errors = searchParams.getAll("error");

  if (!errors.includes("account_not_linked")) {
    return null;
  }

  return (
    <p className="text-xs text-red-500 max-w-xs text-center">
      Your email is not verified. Please verify your email before logging in
      with google
    </p>
  );
};
