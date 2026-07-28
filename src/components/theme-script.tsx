"use client";

import { useLayoutEffect } from "react";
import { usePathname, useServerInsertedHTML } from "next/navigation";

const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.classList.toggle('light',t==='light');r.style.colorScheme=t;}catch(e){}})();`;

function applyStoredTheme() {
  try {
    let theme = window.localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark") theme = "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
  } catch {
    /* localStorage unavailable */
  }
}

/**
 * Blocking theme bootstrap for FOUC prevention.
 *
 * Reads `localStorage.theme` and applies `dark`/`light` on `<html>` before paint.
 * Interactive updates stay in `ThemeToggle` (`useSyncExternalStore`).
 *
 * Injected via `useServerInsertedHTML` so the script is in the SSR HTML stream
 * without living in the React tree — React 19 warns if a `<script>` (or
 * `next/script`) re-renders on client navigations such as locale changes.
 *
 * Also re-applies on pathname changes: the `[lang]` layout re-renders `<html>`
 * and would otherwise wipe classes that ThemeToggle set outside React.
 */
export function ThemeScript() {
  const pathname = usePathname();

  useServerInsertedHTML(() => (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }}
    />
  ));

  useLayoutEffect(() => {
    applyStoredTheme();
  }, [pathname]);

  return null;
}
