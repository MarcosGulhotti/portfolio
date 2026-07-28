import Link from "next/link";
import { withLocale, type Dictionary, type Locale } from "@/i18n/config";
import { experience, getProjectsByIds } from "@/content/site";

export function ExperienceTimeline({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const hasSynthetic = experience.some((item) => item.synthetic);

  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mb-10 flex flex-col gap-2 border-b border-hairline pb-4">
        <h2
          id="experience-heading"
          className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
        >
          {dict.experience.title}
          <span className="ml-2 text-ink/50">— {experience.length}</span>
        </h2>
        {hasSynthetic ? (
          <p className="text-sm text-muted">{dict.experience.syntheticNote}</p>
        ) : null}
      </div>

      <ol className="relative ml-2 space-y-10 border-l border-hairline pl-8 sm:ml-4">
        {experience.map((item) => {
          const linkedProjects = getProjectsByIds(item.projectIds ?? []);

          return (
            <li key={item.id} className="relative">
              <span
                className={`absolute -left-[2.05rem] top-1.5 size-2.5 rounded-full border-2 border-canvas ${
                  item.current ? "bg-accent" : "bg-muted"
                }`}
                aria-hidden
              />
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                {item.period[locale]}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                {item.company[locale]}
              </h3>
              <p className="mt-1 text-muted">{item.role[locale]}</p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
                {item.summary[locale]}
              </p>
              {linkedProjects.length > 0 ? (
                <div className="mt-4 space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    {dict.experience.projects}
                  </p>
                  <ul className="space-y-2">
                    {linkedProjects.map((project) => (
                      <li key={project.id}>
                        <Link
                          href={withLocale(`/work/${project.slug}`, locale)}
                          className="group inline-flex items-baseline gap-2 text-sm text-ink transition-colors hover:text-accent"
                        >
                          <span className="font-medium">
                            {project.client[locale]}
                          </span>
                          <span className="text-muted group-hover:text-accent/80">
                            {project.name[locale]}
                          </span>
                          <span
                            aria-hidden
                            className="text-muted transition-colors group-hover:text-accent"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
