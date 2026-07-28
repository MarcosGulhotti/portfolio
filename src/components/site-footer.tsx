import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/config";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {site.available ? (
            <>
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {dict.footer.available}
            </>
          ) : (
            site.shortName
          )}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {dict.footer.timezone}
        </p>
      </div>
    </footer>
  );
}
