"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
const DashHome = () => {
  const { data: session, isPending } = authClient.useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const router = useRouter();

  const signOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await authClient.signOut();

      if (error) {
        setAuthError(error.message ?? "");
        return;
      }

      router.push("/login");
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  if (isPending) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col gap-2">
      <h1>Welcome {session?.user.email}</h1>
      <Button onClick={signOut} disabled={isLoading}>
        {isLoading && <Spinner />}
        Logout
      </Button>

      {authError && <p className="text-sm text-red-500">{authError}</p>}
    </div>
  );
};

export default DashHome;
