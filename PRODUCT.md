# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Três públicos confirmados, todos chegando de fora (LinkedIn, indicação, candidatura) e avaliando a mesma pessoa com critérios diferentes:

- **Recrutadores e RH em processo seletivo.** Escaneiam rápido para decidir se chamam para entrevista. Precisam de função, senioridade, stack e uma forma óbvia de guardar/encaminhar o candidato internamente.
- **Tech leads, engenheiros e entrevistadores técnicos.** Já foram convencidos pelo recrutador ou estão validando antes de aprovar. Procuram profundidade real: decisões técnicas, trade-offs, o que foi construído e por quê.
- **Clientes de freelance/consultoria.** Decidem se contratam para um projeto. Avaliam capacidade de entrega e confiabilidade, não elegância de código.

Nenhum desses públicos é secundário o suficiente para ser ignorado; nenhum foi eleito prioritário sobre os outros.

## Product Purpose

Portfólio pessoal de Marcos Vinícius Gulhotti, desenvolvedor frontend. Existe para converter uma visita fria em uma conversa: o visitante entende quem ele é, vê evidência do que já entregou e entra em contato.

**Sucesso é o contato acontecer**, por qualquer um destes caminhos — todos válidos, nenhum descartado:

- mensagem/e-mail enviado a partir do próprio site;
- contato via LinkedIn ou WhatsApp;
- download do CV para levar a um processo interno;
- agendamento de uma conversa.

## Positioning

Especialista frontend com React e Next.js, com foco em interface e produto — não um generalista que também mexe no front. O site é ao mesmo tempo o argumento e a demonstração: um portfólio de frontend é lido como amostra do trabalho, então a própria execução da interface é evidência.

## Operating Context

- O visitante chega quase sempre por link externo (LinkedIn, e-mail de candidatura, indicação), frequentemente no celular, e em muitos casos com poucos minutos e várias abas abertas.
- Recrutador e técnico costumam ver o site em momentos diferentes do mesmo processo; o segundo chega já sabendo quem é a pessoa.
- O CV em PDF circula fora do site, dentro de ATS e e-mails. O site e o PDF precisam contar a mesma história.

## Capabilities and Constraints

**Estado atual do repositório:** scaffold intocado do `create-next-app`. Next.js 16.2.11, React 19.2.4, TypeScript strict, Tailwind CSS v4 (config CSS-first, sem `tailwind.config`), npm, alias `@/*` → `./src/*`. Uma única rota (`/`) com a página boilerplate. Nenhum conteúdo real, nenhum componente próprio, nenhum asset além dos SVGs do template. Repositório: `github.com/MarcosGulhotti/portfolio`.

**Bilíngue obrigatório.** O site precisa existir em português do Brasil e em inglês, com alternador de idioma visível. Não é "inglês depois": as duas versões são requisito. Nenhum conteúdo pode existir em apenas um idioma. Nenhuma biblioteca de i18n está instalada ainda.

**Projetos sem código público.** Não há repositórios abertos para exibir. Os projetos existem e devem aparecer, provados por história, prints reais da interface e possivelmente vídeo. Há autorização para nomear cliente/empresa e usar prints reais sem ofuscação.

**Decisões de produto ainda abertas** — a serem confirmadas, nunca inventadas:

- lista dos projetos a exibir, com nomes de clientes/empresas e quais têm vídeo;
- título/senioridade exatos a estampar (ex.: "Desenvolvedor Frontend" vs. "Frontend Engineer", com ou sem nível);
- histórico profissional detalhado: empresas, cargos, períodos, entregas;
- e-mail público de contato, URL do LinkedIn e número de WhatsApp;
- ferramenta de agendamento (Cal.com, Calendly ou outra);
- serviço de entrega de e-mail para o formulário de contato;
- domínio próprio e plataforma de hospedagem;
- analytics.

## Brand Commitments

- Nome: **Marcos Vinícius Gulhotti**.
- Handle do GitHub: `MarcosGulhotti`.
- E-mail conhecido do git: `marcosgulhotti@gmail.com` — ainda não confirmado como e-mail público de contato.
- Nenhuma identidade visual, logo, paleta ou tipografia foi estabelecida ou declarada obrigatória.

## Evidence on Hand

**Existe de verdade:**

- experiência profissional em empresas (cargos, períodos, entregas) — conteúdo ainda não escrito;
- CV em PDF pronto — arquivo ainda não presente no repositório;
- foto de boa qualidade da pessoa — arquivo ainda não presente no repositório;
- projetos reais de código fechado, com autorização para mostrar história, prints da interface e possivelmente vídeo — nenhum asset presente no repositório ainda.

**Não existe e não deve ser fabricado:** depoimentos, nomes de clientes não confirmados, métricas de resultado, números de usuários, prêmios, certificações, artigos publicados, projetos open source, logos de empresas parceiras. Nenhum print, vídeo ou case pode ser inventado ou representado por mockup genérico passando por trabalho real.

## Product Principles

1. **Cada projeto se prova por história, não por link de repositório.** Sem código público, o peso da prova recai sobre contexto, decisão, execução visível e resultado — e sobre prints e vídeo reais.
2. **Três leitores, um site.** Recrutador escaneia, técnico aprofunda, cliente avalia entrega. A mesma página serve os três por camadas de profundidade, não por três seções redundantes nem três versões do site.
3. **Todo caminho leva ao contato.** Nenhum canal é escondido atrás de outro e nenhum exige formulário longo. O visitante nunca deve precisar procurar como falar com ele.
4. **Paridade total de idiomas.** Português e inglês são iguais em conteúdo e em acabamento; nada existe só em um deles, nem "traduzido depois".
5. **Só fatos confirmados.** Cada afirmação no site rastreia até algo que Marcos confirmou. Na dúvida, o espaço fica vazio até haver conteúdo real — nunca preenchido com placeholder plausível.
