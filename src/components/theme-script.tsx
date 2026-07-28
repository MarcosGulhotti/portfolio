"use client";

import { useServerInsertedHTML } from "next/navigation";

const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.classList.toggle('light',t==='light');r.style.colorScheme=t;}catch(e){}})();`;

/**
 * Blocking theme bootstrap for FOUC prevention.
 *
 * Reads `localStorage.theme` and applies `dark`/`light` on `<html>` before paint.
 * Interactive updates stay in `ThemeToggle` (`useSyncExternalStore`).
 *
 * Injected via `useServerInsertedHTML` so the script is in the SSR HTML stream
 * without living in the React tree — React 19 warns if a `<script>` (or
 * `next/script`) re-renders on client navigations such as locale changes.
 */
export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }}
    />
  ));

  return null;
}
