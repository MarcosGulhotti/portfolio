"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

function setTheme(theme: Theme) {
  window.localStorage.setItem("theme", theme);
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
  listeners.forEach((l) => l());
}

/**
 * Segmented control for light/dark theme.
 *
 * Persists to `localStorage` (`theme`) and updates `<html>` classes via a small
 * external store (`useSyncExternalStore`). FOUC is handled by `ThemeScript`.
 * Same-tab: `listeners`; cross-tab: `storage` event. SSR snapshot: `"dark"`.
 */
export function ThemeToggle({
  label,
  lightLabel,
  darkLabel,
}: {
  /** Accessible name for the button group. */
  label: string;
  /** Accessible label for the light option. */
  lightLabel: string;
  /** Accessible label for the dark option. */
  darkLabel: string;
}) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark");

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-[6px] border border-hairline p-0.5"
    >
      <button
        type="button"
        aria-pressed={theme === "light"}
        aria-label={lightLabel}
        onClick={() => setTheme("light")}
        className={`rounded-[4px] cursor-pointer px-2.5 py-1.5 text-xs transition-colors ${
          theme === "light"
            ? "bg-accent text-accent-ink"
            : "text-muted hover:text-ink"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label={darkLabel}
        onClick={() => setTheme("dark")}
        className={`rounded-[4px] cursor-pointer px-2.5 py-1.5 text-xs transition-colors ${
          theme === "dark"
            ? "bg-accent text-accent-ink"
            : "text-muted hover:text-ink"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
