"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
const DashHome = () => {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex flex-col gap-2">
      <h1>Welcome {session?.user.email}</h1>
      <Button
        onClick={async () => {
          await authClient.signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashHome;
