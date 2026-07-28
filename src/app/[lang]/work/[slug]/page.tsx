import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getDictionary,
  isLocale,
  withLocale,
  type Locale,
} from "@/i18n/config";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { lang: "pt", slug: project.slug },
    { lang: "en", slug: project.slug },
  ]);
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

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href={withLocale("/work", locale)}
        className="font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
      >
        ← {dict.nav.work}
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {dict.work.client}: {project.client[locale]}
        <span className="mx-2 opacity-40">·</span>
        {project.startDate[locale]} — {project.endDate[locale]}
      </p>

      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
        {project.name[locale]}
      </h1>

      <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
        {project.description[locale]}
      </p>

      <div
        className={`mt-8 aspect-video overflow-hidden rounded-[10px] border border-hairline ${
          project.imageOnWhite ? "bg-white" : "bg-surface"
        }`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt=""
            className={`size-full ${
              project.imageOnWhite
                ? "object-contain p-10 sm:p-14"
                : "object-cover"
            }`}
            style={
              project.imageScale
                ? { transform: `scale(${project.imageScale})` }
                : undefined
            }
          />
        ) : (
          <div className="flex size-full items-center justify-center font-mono text-xs uppercase tracking-[0.1em] text-muted">
            {dict.work.pendingImage}
          </div>
        )}
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[4px] border border-hairline px-2 py-1 font-mono text-xs uppercase tracking-[0.06em] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.synthetic ? (
        <p className="mt-10 text-sm text-muted">{dict.work.syntheticNote}</p>
      ) : null}
    </article>
  );
}
