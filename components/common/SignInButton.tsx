"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

interface SignInButtonProps {
  provider?: string;
  children?: React.ReactNode;
}

export default function SignInButton({
  provider = "github",
  children,
}: SignInButtonProps) {
  const t = useTranslations();

  return (
    <CustomButton onClick={() => signIn(provider)}>
      {children ?? t("auth.signInWithGitHub")}
    </CustomButton>
  );
}
