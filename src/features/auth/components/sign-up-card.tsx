import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            value={form?.email}
            name="email"
            placeholder="Email"
            type="email"
            disabled={false}
            required
            onChange={handleForm}
          />
          <Input
            name="password"
            value={form?.password}
            placeholder="Password"
            type="password"
            disabled={false}
            required
            onChange={handleForm}
          />
          <Input
            name="confirmPassword"
            value={form?.confirmPassword}
            placeholder="Confirm Password"
            type="password"
            disabled={false}
            required
            onChange={handleForm}
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute left-4 " />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute left-4 " />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground flex gap-1">
          Already have an account?
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
