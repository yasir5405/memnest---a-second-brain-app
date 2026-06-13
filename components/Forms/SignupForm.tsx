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
import { SignUpInput, signUpSchema } from "@/lib/validations/auth-validation";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const router = useRouter();

  const onSubmit = async (values: SignUpInput) => {
    setAuthError("");
    try {
      setIsLoading(true);
      const { data, error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      });

      if (error) {
        setAuthError(error.message ?? "");
        console.log(error.message);
        return;
      }

      console.log({ data, error });
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setAuthError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full py-2 flex gap-4 flex-col items-center">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup className="flex flex-col gap-6">
          <Field>
            <FieldLabel className="text-neutral-400" htmlFor="name">
              Name
            </FieldLabel>
            <Input
              id="name"
              type="text"
              placeholder="What should we call you?"
              className="py-4"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </Field>
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
                Make sure to enter a valid email
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
        Already have an account?{" "}
        <Link href={"/login"} className="text-sm underline text-neutral-500/70">
          Sign in
        </Link>
      </h1>
    </div>
  );
};

export default SignUpForm;
