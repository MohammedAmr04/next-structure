"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { signIn } from "next-auth/react";

interface SignInButtonProps {
  provider?: string;
  children?: React.ReactNode;
}

export default function SignInButton({
  provider = "github",
  children,
}: SignInButtonProps) {
  return (
    <CustomButton onClick={() => signIn(provider)}>{children}</CustomButton>
  );
}
