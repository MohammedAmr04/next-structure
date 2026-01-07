import { getTranslations } from "next-intl/server";

async function page() {
  const t = await getTranslations("hello");
  return <div>{t("message")}</div>;
}

export default page;
