import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { resend } from "./resend";
import { ResetPasswordTemplate } from "@/components/Emails/ResetPasswordTemplate";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: "noreply@memnest.xyz",
        to: user.email,
        subject: "Reset Password",
        react: ResetPasswordTemplate({
          resetUrl: url,
        }),
      });
    },
  },
});
