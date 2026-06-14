"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import {
  ResetPasswordInput,
  resetPasswordSchema,
} from "@/lib/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();

  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: ResetPasswordInput) => {
    setIsLoading(true);
    try {
      const token = searchParams.get("token");

      if (!token) {
        setAuthError("Reset token not found. Please try again.");
        return;
      }

      const { error } = await authClient.resetPassword({
        token,
        newPassword: values.password,
      });

      if (error) {
        setAuthError(error.message ?? "");
        return;
      }

      alert("Password reset successfull");
      router.push("/login");
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
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold leading-5">Reset Password</h1>
        <h3 className="text-xs text-neutral-500/70 text-center">
          Enter your new password to secure your account
        </h3>
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel className="text-neutral-400" htmlFor="password">
            Password
          </FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password..."
              className="py-4"
              {...register("password")}
            />

            <InputGroupAddon align={"inline-end"}>
              {showPassword ? (
                <EyeOffIcon
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer"
                />
              )}
            </InputGroupAddon>
          </InputGroup>

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
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
          Reset password
        </Button>
      </FieldGroup>
    </form>
  );
};

export default ResetPasswordForm;
