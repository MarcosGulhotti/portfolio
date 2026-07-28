import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleToggle } from "@/components/locale-toggle";

export function SiteHeader({
  locale,
  dict,
  pathname,
}: {
  locale: Locale;
  dict: Dictionary;
  pathname: string;
}) {
  const links = [
    { href: withLocale("/work", locale), label: dict.nav.work },
    { href: withLocale("/about", locale), label: dict.nav.about },
    { href: withLocale("/contact", locale), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={withLocale("/", locale)}
          className="font-semibold tracking-tight text-ink"
        >
          {site.monogram}
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 sm:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle
            label={dict.theme.label}
            lightLabel={dict.theme.light}
            darkLabel={dict.theme.dark}
          />
          <LocaleToggle
            locale={locale}
            pathname={pathname}
            label={dict.locale.label}
            ptLabel={dict.locale.pt}
            enLabel={dict.locale.en}
          />
        </div>
      </div>
      <nav
        aria-label="Mobile"
        className="flex items-center justify-center gap-5 border-t border-hairline px-5 py-2.5 sm:hidden"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-12 sm:pt-20">
      <div className="animate-rise overflow-hidden rounded-[10px] border border-hairline">
        <Image
          src={site.portrait}
          alt={site.name}
          width={112}
          height={112}
          priority
          className="size-28 object-cover object-top"
        />
      </div>

      <h1 className="animate-rise animate-rise-delay-1 mt-8 max-w-2xl text-balance text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
        {dict.hero.headline}
      </h1>

      <p className="animate-rise animate-rise-delay-1 mt-3 text-lg text-muted sm:text-xl">
        {dict.hero.subhead}
      </p>

      <p className="animate-rise animate-rise-delay-2 mt-5 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        <span className="text-ink">{site.shortName}</span>
        <span className="mx-2 opacity-40" aria-hidden>
          ·
        </span>
        <span>{site.location[locale]}</span>
        {site.available ? (
          <>
            <span className="mx-2 opacity-40" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1.5 text-ink">
              <span
                className="inline-block size-1.5 rounded-full bg-accent"
                aria-hidden
              />
              {dict.hero.available}
            </span>
          </>
        ) : null}
      </p>

      <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={withLocale("/contact", locale)}
          className="inline-flex items-center justify-center rounded-[6px] bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          {dict.hero.contact}
        </Link>
        {site.hasCv ? (
          <a
            href={site.cvPath}
            download
            className="inline-flex items-center justify-center rounded-[6px] border border-hairline px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            {dict.hero.downloadCv}
          </a>
        ) : (
          <span className="inline-flex items-center justify-center rounded-[6px] border border-hairline px-5 py-3 text-sm text-muted">
            {dict.hero.cvUnavailable}
          </span>
        )}
      </div>
    </section>
  );
}
