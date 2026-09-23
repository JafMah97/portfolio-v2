import { defaultLocale, locales, type Locale, type Text } from "@/content";

export { locales, defaultLocale, type Locale };

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/** Pick the current language from a bilingual field. */
export const t = (text: Text, locale: Locale) => text[locale];

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "ar" : "en");

/** Build a localized path: href("ar", "/work/x") -> "/ar/work/x". */
export const href = (locale: Locale, path = "") => `/${locale}${path === "/" ? "" : path}`;

/** "2024-03" -> "Mar 2024" / "مارس 2024" (always Western digits for readability). */
export function formatMonth(value: string, locale: Locale) {
  const [y, m] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}
