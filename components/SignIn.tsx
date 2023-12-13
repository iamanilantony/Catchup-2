"use client";

import { signIn } from "next-auth/react";
import { Button, buttonVariants } from "./ui/Button";

export default function SignIn() {
  const loginWithGoogle = async () => {
    await signIn("google");
  };
  return (
    <div>
      <Button
        onClick={loginWithGoogle}
        className={buttonVariants({ variant: "secondary" })}
      >
        SignIn
      </Button>
    </div>
  );
}
