export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/**
 * Type guard for supported locales
 * @param value - Candidate locale string
 * @returns Whether the value is a known locale
 */
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Remove the locale prefix from a pathname
 * @param pathname - Path like `/pt/work` or `/en`
 * @returns Path without locale, e.g. `/work` or `/`
 */
export function stripLocale(pathname: string): string {
  const segment = pathname.split("/")[1];
  if (!segment || !isLocale(segment)) return pathname || "/";
  const stripped = pathname.slice(segment.length + 1);
  if (!stripped) return "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

/**
 * Prefix a pathname with a locale
 * @param pathname - Path without locale, e.g. `/work`
 * @param locale - Locale to prepend
 * @returns Localized path, e.g. `/pt/work`
 */
export function withLocale(pathname: string, locale: Locale): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

const dictionaries = {
  pt: () => import("./dictionaries/pt").then((m) => m.dict),
  en: () => import("./dictionaries/en").then((m) => m.dict),
} as const;

/**
 * Load the dictionary for a locale
 * @param locale - Locale to load
 * @returns Dictionary messages for that locale
 */
export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
