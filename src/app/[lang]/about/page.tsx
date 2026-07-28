import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, withLocale, type Locale } from "@/i18n/config";
import { site } from "@/content/site";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="animate-rise border-b border-hairline pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
          {dict.about.title}
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div className="overflow-hidden rounded-[10px] border border-hairline">
            <Image
              src={site.portrait}
              alt={site.name}
              width={112}
              height={112}
              priority
              className="size-28 object-cover object-top"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-2 text-muted">{site.role[locale]}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
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
          </div>
        </div>
      </header>

      <p className="animate-rise animate-rise-delay-1 mt-10 max-w-prose text-lg leading-relaxed text-ink sm:text-xl">
        {dict.about.lead}
      </p>

      <div className="animate-rise animate-rise-delay-2 mt-10 grid gap-8 border-y border-hairline py-8 sm:grid-cols-2 sm:gap-10">
        <MetaList label={dict.about.domainsLabel} items={dict.about.domains} />
        <MetaList label={dict.about.stackLabel} items={dict.about.stack} />
      </div>

      <section
        className="animate-rise animate-rise-delay-3 mt-12"
        aria-labelledby="about-path"
      >
        <h2
          id="about-path"
          className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
        >
          {dict.about.pathLabel}
        </h2>

        <ol className="mt-6 divide-y divide-hairline border-y border-hairline">
          {dict.about.chapters.map((chapter) => (
            <li key={chapter.label} className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent sm:pt-1">
                {chapter.label}
              </h3>
              <p className="max-w-prose text-base leading-relaxed text-muted">
                {chapter.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-12 max-w-prose border-t border-hairline pt-10 text-base leading-relaxed text-ink sm:text-lg">
        {dict.about.closing}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <Link
          href={withLocale("/contact", locale)}
          className="inline-flex items-center justify-center rounded-[6px] bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          {dict.hero.contact}
        </Link>
        <Link
          href={withLocale("/work", locale)}
          className="inline-flex items-center justify-center rounded-[6px] border border-hairline px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface"
        >
          {dict.nav.work}
        </Link>
      </div>
    </article>
  );
}

type MetaListProps = {
  label: string;
  items: readonly string[];
};

function MetaList({ label, items }: MetaListProps) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-[6px] border border-hairline px-2.5 py-1 font-mono text-xs tracking-[0.04em] text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
