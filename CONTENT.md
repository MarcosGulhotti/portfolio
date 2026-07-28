# Conteúdo a substituir

O layout e o visual estão implementados. Os itens abaixo são **provisórios** (marcados `synthetic: true` em `src/content/site.ts`) e precisam dos seus fatos reais.

## Arquivos / assets

1. **Foto** — substitua `public/portrait.svg` pela sua foto (ex.: `public/portrait.jpg`) e atualize `site.portrait` em `src/content/site.ts`.
2. **CV** — coloque o PDF em `public/cv.pdf` e defina `hasCv: true` em `src/content/site.ts`.
3. **Prints dos projetos** — `public/projects/<slug>.webp` (ou jpg) e o campo `image` de cada projeto.

## Dados em `src/content/site.ts`

4. **Experiência** — empresas, cargos, períodos e resumos reais; remova `synthetic: true`.
5. **Projetos** — nomes, clientes, anos, tags e histórias reais; remova `synthetic: true`.
6. **LinkedIn** e **WhatsApp** — URLs/números públicos (hoje vazios).
7. **E-mail** — confirme se `marcosgulhotti@gmail.com` é o contato público.

## Copy (opcional)

8. Headline / subhead em `src/i18n/dictionaries/pt.ts` e `en.ts` (`hero.*`, `about.body`).

Não invente métricas, depoimentos ou prints falsos — o site já deixa claro o que está pendente.
