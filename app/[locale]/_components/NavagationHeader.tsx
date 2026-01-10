import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/components/common/LogoutButton";

async function NavgationHeader() {
  const session = await getServerSession();
  const t = await getTranslations("common");
  const n = await getTranslations("nav");
  return (
    <header className="w-full bg-gray-100 shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold text-gray-800">{t("appName")}</div>
        <nav className="flex items-center gap-2">
          <Link href="./" className="text-gray-700 hover:underline">
            {n("home")}
          </Link>
          <Link href="./home" className="text-gray-700 hover:underline">
            {n("contact")}
          </Link>
          <Link href="./test" className="text-gray-700 hover:underline">
            {n("test")}
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-600">{session?.user?.name}</span>
        {session?.user?.image && (
          <>
            <Image
              width={60}
              height={60}
              src={session?.user?.image || "/avatar-placeholder.png"}
              alt={t("avatarAlt")}
              className="w-10 h-10 rounded-full object-cover"
            />
            <LogoutButton />
          </>
        )}
      </div>
    </header>
  );
}

export default NavgationHeader;
