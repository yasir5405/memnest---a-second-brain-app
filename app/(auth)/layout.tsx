import GithubLoginButton from "@/components/Buttons/GithubLoginButton";
import GoogleLoginButton from "@/components/Buttons/GoogleLoginButton";
import AuthHeader from "@/components/Header/AuthHeader";
import { OAuthErrorBanner } from "@/components/OAuthErrorBanner";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Suspense } from "react";
export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="min-h-dvh flex flex-col px-40 justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="p-1 border cursor-pointer rounded-md">
          <DiaTextReveal
            className="text-xl font-semibold tracking-tight"
            text="MN"
            colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          />
        </div>

        <div className="flex flex-col items-center">
          <AuthHeader />
        </div>

        {children}

        <Suspense fallback={null}>
          <OAuthErrorBanner />
        </Suspense>

        <FieldGroup>
          <FieldSeparator className="text-sm">Or continue with</FieldSeparator>
        </FieldGroup>

        <div className="h-16 gap-1 w-80 flex items-center justify-between">
          <GoogleLoginButton />
          <GithubLoginButton />
        </div>
      </div>
    </div>
  );
}
