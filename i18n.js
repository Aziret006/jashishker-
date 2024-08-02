import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();
  if (locale === "ru") {
    return {
      messages: (await import(`./messages/ru.json`)).default,
    };
  }
  if (locale === "en") {
    return {
      messages: (await import(`./messages/en.json`)).default,
    };
  }
});
