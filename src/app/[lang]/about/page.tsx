import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/i18n/config";
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
    <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
        {dict.about.title}
      </h1>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-ink">
        {site.name}
      </p>
      <p className="mt-2 text-muted">{site.role[locale]}</p>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        {dict.about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
