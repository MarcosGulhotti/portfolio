import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { projects, type Project } from "@/content/site";

export function ProjectList({
  locale,
  dict,
  limit,
  showViewAll = false,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  showViewAll?: boolean;
}) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const hasSynthetic = projects.some((item) => item.synthetic);

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="work-heading"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-4">
        <div className="flex flex-col gap-2">
          <h2
            id="work-heading"
            className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
          >
            {dict.work.title}
            <span className="ml-2 text-ink/50">
              — {String(projects.length).padStart(2, "0")}
            </span>
          </h2>
          {hasSynthetic ? (
            <p className="text-sm text-muted">{dict.work.syntheticNote}</p>
          ) : null}
        </div>
        {showViewAll ? (
          <Link
            href={withLocale("/work", locale)}
            className="font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
          >
            {dict.work.viewAll} →
          </Link>
        ) : null}
      </div>

      {items.length === 0 ? (
        <p className="text-muted">{dict.work.empty}</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {items.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              locale={locale}
              dict={dict}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function ProjectRow({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <li>
      <Link
        href={withLocale(`/work/${project.slug}`, locale)}
        className="group grid gap-5 rounded-[10px] border border-hairline bg-surface/40 p-4 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,240px)_1fr] sm:p-5"
      >
        <div
          className={`relative aspect-video overflow-hidden rounded-[6px] border border-hairline ${
            project.imageOnWhite ? "bg-white" : "bg-canvas"
          }`}
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt=""
              className={`size-full ${
                project.imageOnWhite
                  ? "object-contain p-6 sm:p-8"
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

        <div className="flex min-w-0 flex-col justify-center">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {project.name[locale]}
            </h3>
            <span
              aria-hidden
              className="mt-1 text-muted transition-colors group-hover:text-accent"
            >
              →
            </span>
          </div>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
            {project.description[locale]}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {dict.work.client}: {project.client[locale]}
            <span className="mx-2 opacity-40">·</span>
            {project.startDate[locale]} — {project.endDate[locale]}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[4px] border border-hairline px-2 py-1 font-mono text-xs uppercase tracking-[0.06em] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
