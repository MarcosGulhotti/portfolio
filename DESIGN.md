---
name: Marcos Gulhotti Portfolio
description: Modern developer portfolio — dark-default registry grammar with mint accent and dot canvas
colors:
  canvas-dark: "#08090B"
  canvas-light: "#F4F5F7"
  surface-dark: "#111214"
  surface-light: "#FFFFFF"
  ink-dark: "#F4F5F7"
  ink-light: "#0A0A0C"
  muted-dark: "#8B8F98"
  muted-light: "#5C616A"
  hairline-dark: "rgba(255,255,255,0.10)"
  hairline-light: "rgba(10,10,12,0.12)"
  accent: "#B6F09C"
  accent-ink: "#0A0A0C"
  available: "#B6F09C"
typography:
  display:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview

Portfólio pessoal com gramática de registry/developer moderna: tipografia grotesk + mono para meta, canvas com textura de dots, dark como default e light como alternativa. Accent único mint-lime. Foto e textos principais centralizados no hero; experiência em timeline vertical antes dos projetos em linhas horizontais.

**THESIS:** Declaração tipográfica centrada + prova em ordem (experiência → trabalho) — recusa o template “Hi I’m X + grid de cards”.
**OWN-WORLD:** Near-black/off-white canvas, dots, hairlines, mint `#B6F09C`, Geist Sans + Geist Mono.
**STORY:** Quem é → o que fez (timeline) → o que construiu (linhas de projeto) → como falar com ele.
**FIRST VIEWPORT:** Nav MG + toggles; hero centrado (foto média, headline, meta, CTAs); início da timeline.
**FORM:** Composition D revisada (centered + vertical timeline); registry moderno; seed 35c180ce / esterço developer + dark/dots.

## Colors

- **Canvas:** dark `#08090B` (default), light `#F4F5F7`.
- **Ink / muted:** high-contrast ink; muted derived from canvas (never pure gray on colored surfaces).
- **Accent:** mint `#B6F09C` only — primary CTA, available dot, timeline nodes, active arrows.
- **Hairlines:** ~10% white (dark) / ~12% ink (light). No neon, no purple gradients, no glow.

Theme is class-based (`html.dark` / `html.light`); default dark; user preference persisted.

## Typography

- **Display / body:** Geist Sans — tight tracking on display (−0.03em), max ~4rem.
- **Meta / labels / dates / tags:** Geist Mono, small caps feel via tracking, never as costume for whole paragraphs.
- Measure for prose ~65ch.

## Layout

- Max content width ~72rem; horizontal padding responsive.
- Hero: centered stack (photo → headline → subtitle → meta → CTAs).
- Experience: vertical timeline (spine + nodes) before Selected Work.
- Projects: full-width horizontal rows (thumbnail + copy + tags + arrow), not equal card grids.
- Contact always reachable from nav + CTAs + contact page (links only).

## Elevation & Depth

Flat tonal layering: surface slightly lighter than canvas. Hairline borders. No multi-layer shadows, no glassmorphism.

## Shapes

Small radii (`6–14px`). Rectangular buttons and tags (not pill-full). Photo: square with slight radius.

## Components

- **Primary button:** mint fill, dark ink, hairline focus ring.
- **Ghost button:** transparent, hairline border.
- **Theme / locale toggles:** segmented controls in the header.
- **Timeline node:** mint filled circle on vertical spine; current role emphasized.
- **Project row:** hairline surface, thumbnail left, meta in mono.

## Do's and Don'ts

**Do**

- Keep dark default; ship light parity.
- Keep the dot canvas in both themes.
- Prefer empty or clearly synthetic content over invented clients/metrics.
- Use mono only for meta, dates, tags, handles.

**Don't**

- Fake project screenshots passing as real work.
- Neon accents, terminal green text, matrix/glow, purple-indigo AI gradients.
- Large photo hero dominating the first viewport.
- Invent download counts, stars, testimonials, or unverified company claims.
