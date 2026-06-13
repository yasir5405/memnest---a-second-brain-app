"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const page = () => {
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

export default page;
