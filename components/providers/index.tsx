import { NextIntlClientProvider } from "next-intl";
import NextAuthProvider from "./components/next.auth.provider";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <NextIntlClientProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </NextIntlClientProvider>
  );
}
