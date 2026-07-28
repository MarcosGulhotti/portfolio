# Marcos Gulhotti — Portfolio

Personal portfolio for [Marcos Vinicius Gulhotti](https://github.com/MarcosGulhotti), a senior software engineer focused on React, Next.js, and TypeScript. The site showcases experience and projects and makes it easy to get in touch — in Portuguese and English.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org) (strict)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config)
- [Motion](https://motion.dev) for lightweight animations

## Features

- **Bilingual** — `/pt` and `/en` routes, with a locale switcher and full content parity
- **Light/dark theme** — dark by default, persisted in the browser
- **Pages** — home, about, work (list + slug detail), and contact
- **Typed content** — experience, projects, and site data in `src/content/site.ts`
- **Locale proxy** — redirects `/` to `/pt` or `/en` based on `Accept-Language`

## Structure

```
src/
├── app/[lang]/          # Localized routes
├── components/          # UI (header, timeline, projects, theme, etc.)
├── content/site.ts      # Site data, experience, and projects
├── i18n/
│   ├── config.ts        # Locales and helpers
│   └── dictionaries/    # UI copy (pt, en)
└── proxy.ts             # Locale negotiation and redirects
public/
├── photos/              # Portrait and client emblems
└── cv.pdf               # Résumé (when available)
```

## Development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the proxy redirects to `/pt` or `/en`.

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Development server       |
| `npm run build` | Production build         |
| `npm run start` | Server after build       |
| `npm run lint`  | ESLint                   |

## Content

The layout is in place; real facts (experience, projects, assets) live in `src/content/site.ts` and the dictionaries under `src/i18n/dictionaries/`. Placeholder entries are marked with `synthetic: true`.

See [CONTENT.md](./CONTENT.md) for what still needs to be replaced.

## Project docs

- [PRODUCT.md](./PRODUCT.md) — purpose, audience, and product principles
- [DESIGN.md](./DESIGN.md) — visual system (colors, typography, components)
- [CONTENT.md](./CONTENT.md) — pending content checklist

## License

Private project (`"private": true` in `package.json`).
