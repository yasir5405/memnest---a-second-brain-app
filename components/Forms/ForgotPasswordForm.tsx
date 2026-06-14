"use client";

import { authClient } from "@/lib/auth-client";
import {
  ForgotPasswordInput,
  forgotPasswordSchema,
} from "@/lib/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: ForgotPasswordInput) => {
    setIsLoading(true);
    try {
      const { data, error } = await authClient.requestPasswordReset({
        email: values.email,
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setAuthError(error.message ?? "");
        return;
      }

      alert(data.message);
      reset();
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 flex flex-col gap-8 items-center"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl font-semibold leading-5">Forgot Password</h1>
        <h3 className="text-sm font-semibold text-neutral-500/70">
          Enter your email to reset your password
        </h3>
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel id="email" htmlFor="email">
            Email
          </FieldLabel>
          <Input
            placeholder="m@example.com"
            type="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          ) : (
            <FieldDescription>
              Use your original email you signed up with
            </FieldDescription>
          )}
        </Field>

        {authError && <p className="text-sm text-red-500">{authError}</p>}

        <Button
          type="submit"
          size={"lg"}
          className="py-5 text-sm"
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          Send reset link
        </Button>

        <FieldGroup>
          <FieldSeparator />
        </FieldGroup>

        <Link
          href={"/login"}
          className="text-xs text-center underline text-neutral-400"
        >
          Back to sign in
        </Link>
      </FieldGroup>
    </form>
  );
};

export default ForgotPasswordForm;
