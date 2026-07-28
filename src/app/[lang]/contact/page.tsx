import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/i18n/config";
import { site } from "@/content/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const links = [
    {
      label: dict.contact.email,
      href: site.email ? `mailto:${site.email}` : null,
      value: site.email || dict.contact.unavailable,
    },
    {
      label: dict.contact.linkedin,
      href: site.linkedin || null,
      value: site.linkedin
        ? "linkedin.com/in/marcosviniciusgulhotti"
        : dict.contact.unavailable,
    },
    {
      label: dict.contact.whatsapp,
      href: site.whatsapp || null,
      value: site.whatsapp ? "+55 44 99865-5217" : dict.contact.unavailable,
    },
    {
      label: dict.contact.github,
      href: site.github,
      value: "github.com/MarcosGulhotti",
    },
  ];

  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
        {dict.contact.title}
      </h1>
      <p className="mt-4 max-w-prose text-xl leading-relaxed text-ink">
        {dict.contact.intro}
      </p>

      <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {link.label}
            </span>
            {link.href ? (
              <a
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.value}
                <LinkIcon />
              </a>
            ) : (
              <span className="text-muted">{link.value}</span>
            )}
          </li>
        ))}
        <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {dict.contact.cv}
          </span>
          {site.hasCv ? (
            <span className="inline-flex items-center gap-2 text-ink">
              <a
                href={site.cvViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {dict.hero.viewCv}
                <LinkIcon />
              </a>
              <span aria-hidden className="text-muted opacity-40">
                |
              </span>
              <a
                href={site.cvPath}
                download
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {dict.hero.downloadCv}
                <LinkIcon />
              </a>
            </span>
          ) : (
            <span className="text-muted">{dict.contact.unavailable}</span>
          )}
        </li>
      </ul>
    </section>
  );
}

function LinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-muted transition-colors group-hover:text-accent"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
