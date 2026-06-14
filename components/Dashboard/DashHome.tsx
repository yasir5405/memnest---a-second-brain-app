"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { redirect } from "next/navigation";
const DashHome = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>Welcome {session?.user.email}</h1>
      <Button
        onClick={async () => {
          await authClient.signOut();
          redirect("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashHome;
