import {
  NextIntlClientProvider,
  useMessages,
  useLocale,
  Locale,
} from "next-intl";
import NextAuthProvider from "./components/next.auth.provider";

type Props = {
  children: React.ReactNode;
  
};

export default function Providers({ children }: Props) {
  const messages = useMessages();
  const locale = useLocale() as Locale;
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NextAuthProvider>{children}</NextAuthProvider>
    </NextIntlClientProvider>
  );
}
