# Conteúdo a substituir

O layout e o visual estão implementados. Itens abaixo podem ser refinados conforme novos assets ou copy.

## Arquivos / assets

1. **Foto** — `public/photos/marcos.avif` (referenciada em `site.portrait`).
2. **CV** — `public/cv.pdf` com `hasCv: true` em `src/content/site.ts`.
3. **Prints dos projetos** — `public/projects/<slug>.webp` (ou jpg) e o campo `image` de cada projeto.

## Dados em `src/content/site.ts`

4. **Experiência** — empresas, cargos, períodos e resumos reais.
5. **Projetos** — nomes, clientes, anos, tags e histórias reais.
6. **Contato** — e-mail, LinkedIn e WhatsApp em `site.*` (fonte única de verdade).

## Copy (opcional)

7. Headline / subhead em `src/i18n/dictionaries/pt.ts` e `en.ts` (`hero.*`, `about.body`).

Não invente métricas, depoimentos ou prints falsos — o site já deixa claro o que está pendente.
