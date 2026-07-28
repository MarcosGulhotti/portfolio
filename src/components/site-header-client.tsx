"use client";

import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/i18n/config";
import { SiteHeader } from "@/components/site-header";

export function SiteHeaderClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || `/${locale}`;
  return <SiteHeader locale={locale} dict={dict} pathname={pathname} />;
}
