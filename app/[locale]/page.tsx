import SignInButton from "@/components/common/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

async function Page() {
  const session = await getServerSession();
  const t = await getTranslations("common");

  return (
    <>
      <header className="w-full bg-gray-100 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">{t("appName")}</div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{session?.user?.name || t("user")}</span>
          <Image
            width={60}
            height={60}
            src={session?.user?.image || "/avatar-placeholder.png"}
            alt={t("avatarAlt")}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="h-screen flex items-center justify-center">
        <Card className="min-w-sm mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">{t("userInformation")}</CardTitle>
            {session && (
              <CardContent>
                <p>{session?.user.id}</p>
                <p>{session?.user.name}</p>
                <p>{session?.user.email}</p>
              </CardContent>
            )}
            {!session && (
              <>
                <CardDescription className="py-4 text-center font-medium">
                  {t("noUserDescription")}
                </CardDescription>
                <SignInButton provider="github" />
              </>
            )}
          </CardHeader>
        </Card>
      </main>
    </>
  );
}

export default Page;
