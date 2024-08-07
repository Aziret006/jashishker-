import { Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import LiveChatScript from "@/components/LiveChatScript/LiveChatScript";
import ChatBotCostom from "@/components/ChatBot/ChatBotCostom";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang="en">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={manrope.className}>
          <ChatBotCostom />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
