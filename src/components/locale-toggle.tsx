import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { withLocale, stripLocale } from "@/i18n/config";

export function LocaleToggle({
  locale,
  pathname,
  label,
  ptLabel,
  enLabel,
}: {
  locale: Locale;
  pathname: string;
  label: string;
  ptLabel: string;
  enLabel: string;
}) {
  const path = stripLocale(pathname);

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-[6px] border border-hairline p-0.5 font-mono text-xs tracking-wide"
    >
      <Link
        href={withLocale(path, "pt")}
        aria-current={locale === "pt" ? "page" : undefined}
        className={`rounded-[4px] px-2.5 py-1.5 transition-colors ${
          locale === "pt"
            ? "bg-accent text-accent-ink"
            : "text-muted hover:text-ink"
        }`}
      >
        {ptLabel}
      </Link>
      <Link
        href={withLocale(path, "en")}
        aria-current={locale === "en" ? "page" : undefined}
        className={`rounded-[4px] px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-accent text-accent-ink"
            : "text-muted hover:text-ink"
        }`}
      >
        {enLabel}
      </Link>
    </div>
  );
}
