"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { authClient } from "@/lib/auth-client";
import { SignInInput, singInSchema } from "@/lib/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../ui/spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const onSubmit = async (values: SignInInput) => {
    setAuthError("");
    try {
      setIsLoading(true);

      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      });

      if (error) {
        setAuthError(error.message ?? "");
        console.log(error.message);
        return;
      }

      console.log(data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(singInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="w-full py-2 flex gap-4 flex-col items-center">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup className="flex flex-col gap-6">
          <Field>
            <FieldLabel className="text-neutral-400" htmlFor="email">
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address..."
              className="py-4"
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

          <Link
            href={"/forgot-password"}
            className="text-xs text-neutral-400 text-right hover:underline"
          >
            Forgot password?
          </Link>

          <Button
            type="submit"
            size={"lg"}
            className="py-5 text-sm"
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            Continue
          </Button>
        </FieldGroup>
      </form>

      <h1 className="text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href={"/sign-up"}
          className="text-sm underline text-neutral-500/70"
        >
          Sign up
        </Link>
      </h1>
    </div>
  );
};

export default LoginForm;
