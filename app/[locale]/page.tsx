import SignInButton from "@/components/common/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

async function Page() {
  const session = await getServerSession();
  const t = await getTranslations("common");

  return (
    <>
      {/* Main content */}
      <main className="h-screen flex items-center justify-center">
        <Card className="min-w-sm mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {t("userInformation")}
            </CardTitle>
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
