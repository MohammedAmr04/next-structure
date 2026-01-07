import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
