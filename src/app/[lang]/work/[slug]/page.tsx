import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getDictionary,
  isLocale,
  withLocale,
  type Locale,
} from "@/i18n/config";
import { projects } from "@/content/site";
import { ExternalLinkIcon } from "@/components/external-link-icon";

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { lang: "pt", slug: project.slug },
    { lang: "en", slug: project.slug },
  ]);
}

function siteHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href={withLocale("/work", locale)}
        className="font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
      >
        ← {dict.nav.work}
      </Link>

      <header className="mt-8 border-b border-hairline pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {dict.work.client}: {project.client[locale]}
          <span className="mx-2 opacity-40">·</span>
          {project.startDate[locale]} — {project.endDate[locale]}
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          {project.name[locale]}
        </h1>
        <p className="mt-3 max-w-prose text-base leading-relaxed text-muted">
          {caseStudy.role[locale]}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
          >
            {dict.work.visitSite}
            <span className="opacity-40">·</span>
            <span className="normal-case tracking-normal text-ink transition-colors group-hover:text-accent">
              {siteHostname(project.url)}
            </span>
            <ExternalLinkIcon className="shrink-0 text-muted transition-colors group-hover:text-accent" />
          </a>
        ) : null}
      </header>

      <CaseSection id="overview-heading" title={dict.work.overview} className="mt-10 space-y-4">
        {caseStudy.overview.map((paragraph) => (
          <p
            key={paragraph[locale]}
            className="max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            {paragraph[locale]}
          </p>
        ))}
      </CaseSection>

      <CaseSection id="highlights-heading" title={dict.work.highlights} className="mt-12">
        <ul className="mt-4 space-y-3">
          {caseStudy.highlights.map((item) => (
            <li
              key={item[locale]}
              className="flex gap-3 text-base leading-relaxed text-muted"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item[locale]}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="notes-heading" title={dict.work.notes} className="mt-12">
        <ul className="mt-4 space-y-3">
          {caseStudy.notes.map((item) => (
            <li
              key={item[locale]}
              className="max-w-prose text-sm leading-relaxed text-muted"
            >
              {item[locale]}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection
        id="stack-heading"
        title={dict.work.stack}
        className="mt-12 border-t border-hairline pt-8"
      >
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[4px] border border-hairline px-2 py-1 font-mono text-xs uppercase tracking-[0.06em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </CaseSection>

      {project.synthetic ? (
        <p className="mt-10 text-sm text-muted">{dict.work.syntheticNote}</p>
      ) : null}
    </article>
  );
}

function CaseSection({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className} aria-labelledby={id}>
      <h2
        id={id}
        className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
