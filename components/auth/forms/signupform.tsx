"use client";
import { Input, Button, Form, Chip } from "@heroui/react";
import { addToast } from "@heroui/toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register as registerUser } from "@/components/auth/register";
import { Cross2Icon } from "@radix-ui/react-icons";

// schema for validation
const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters")
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({ resolver: zodResolver(signupSchema)});
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  // handle submit
  const onSubmit = async (data: SignupFormValues) => {
      setServerError("");
      const res = await registerUser({ email: data.email, password: data.password, name: data.name });
      if (res?.error) {
        setServerError(res.error);
        return;
      }
      addToast({ title: "Account created", description: "You can now log in with your credentials!", color: "success", variant: "flat" });
      router.push("/login");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

      {/* name */}
      <Input label="Full Name" placeholder="Your Name" isInvalid={!!errors.name} errorMessage={errors.name?.message} {...register("name")} />
      {/* email */}
      <Input label="Email" placeholder="you@example.com" type="email" isInvalid={!!errors.email} errorMessage={errors.email?.message} {...register("email")} />
      {/* password */}
      <Input label="Password" placeholder="••••••••" type="password" isInvalid={!!errors.password} errorMessage={errors.password?.message} {...register("password")} />
      {/* sign up button*/}
      <Button type="submit" color="success" className="mt-4 p-6 font-medium w-full text-default-800" radius="lg" isLoading={isSubmitting}> Sign Up </Button>
      {/* error message */}
      {serverError && (
        <div className="flex justify-center pt-2">
          <Chip color="danger" variant="flat" radius="lg" startContent={<Cross2Icon />} className="max-w-full text-center px-3"> {serverError} </Chip>
        </div>
      )}

    </Form>
  );
}
