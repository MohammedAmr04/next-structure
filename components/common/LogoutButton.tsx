"use client";

import { signOut } from "next-auth/react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Button
      onClick={() => signOut({ callbackUrl: `/${locale}` })}
      className={"text-sm hover:underline "}
      title={t("logout")}
      aria-label={t("logout")}
    >
      {t("logout")}
    </Button>
  );
}
