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

async function Page() {
  const session = await getServerSession();

  return (
    <>
      <header className="w-full bg-gray-100 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Next</div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{session?.user?.name || "User"}</span>
          <Image
            width={60}
            height={60}
            src={session?.user?.image || "/avatar-placeholder.png"}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="h-screen flex items-center justify-center">
        <Card className="min-w-sm mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              User Information
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
                  No user is logged in. Please sign in to see your information.
                </CardDescription>
                <SignInButton provider="github">
                  <span>Sign in with GitHub</span>
                </SignInButton>
              </>
            )}
          </CardHeader>
        </Card>
      </main>
    </>
  );
}

export default Page;
