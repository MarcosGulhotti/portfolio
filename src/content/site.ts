export type LocalizedText = { pt: string; en: string };

export type Experience = {
  id: string;
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  current?: boolean;
  /** Project ids listed under this experience entry */
  projectIds?: string[];
  /** Marks placeholder/demo entries shown with a disclosure note */
  synthetic?: boolean;
};

export type ProjectCaseStudy = {
  /** Longer narrative for the project detail page */
  overview: LocalizedText[];
  /** Ownership / contribution on the project */
  role: LocalizedText;
  /** Concrete deliverables and product areas */
  highlights: LocalizedText[];
  /** Technical or process notes worth showing recruiters and clients */
  notes: LocalizedText[];
};

export type Project = {
  id: string;
  slug: string;
  name: LocalizedText;
  /** Short summary used in project lists */
  description: LocalizedText;
  client: LocalizedText;
  startDate: LocalizedText;
  endDate: LocalizedText;
  tags: string[];
  /** Detail-page content beyond the list summary */
  caseStudy: ProjectCaseStudy;
  /** Brand mark only — not a product screenshot; keep visually secondary */
  logo?: string;
  /** White fill for transparent logos / emblems */
  logoOnWhite?: boolean;
  /** Extra scale for logos that look too small in the frame */
  logoScale?: number;
  /** Marks placeholder/demo entries shown with a disclosure note */
  synthetic?: boolean;
  /** Independent client work (not under a company role) */
  freelance?: boolean;
  /** Public live URL when the product is available to visit */
  url?: string;
};

export type StackItem = {
  id: string;
  name: string;
  /** Percent positions inside the compact floating band */
  position: { top: string; left: string };
  /** Soft float variance */
  motion: { duration: number; delay: number; y: number; x: number };
};

export const site = {
  name: "Marcos Vinícius Gulhotti",
  shortName: "Marcos Gulhotti",
  monogram: "MG",
  role: {
    pt: "Engenheiro de Software Sênior",
    en: "Senior Software Engineer",
  },
  location: {
    pt: "Moreira Sales, Paraná, Brasil",
    en: "Moreira Sales, Paraná, Brazil",
  },
  available: true,
  portrait: "/photos/marcos.avif",
  github: "https://github.com/MarcosGulhotti",
  email: "marcosgulhotti.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/marcosviniciusgulhotti/",
  whatsapp: "https://wa.me/5544998655217",
  cvPath: "/cv.pdf",
  cvViewUrl:
    "https://drive.google.com/file/d/1wDLjqf1P0jf_RroXw-5sSL7DzIqdulLe/view?usp=sharing",
  hasCv: true,
} as const;

/** Core stack shown as a quiet floating band on the home page */
export const stack: StackItem[] = [
  {
    id: "react",
    name: "React",
    position: { top: "18%", left: "3%" },
    motion: { duration: 5.2, delay: 0.1, y: 5, x: 2 },
  },
  {
    id: "nextjs",
    name: "Next.js",
    position: { top: "0%", left: "11%" },
    motion: { duration: 6.1, delay: 0.35, y: 6, x: -2 },
  },
  {
    id: "typescript",
    name: "TypeScript",
    position: { top: "36%", left: "20%" },
    motion: { duration: 4.8, delay: 0.2, y: 4, x: 3 },
  },
  {
    id: "expo",
    name: "Expo",
    position: { top: "6%", left: "29%" },
    motion: { duration: 5.4, delay: 0.5, y: 5, x: -2 },
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    position: { top: "40%", left: "38%" },
    motion: { duration: 5.5, delay: 0.15, y: 5, x: 2 },
  },
  {
    id: "nodejs",
    name: "Node.js",
    position: { top: "2%", left: "47%" },
    motion: { duration: 5.6, delay: 0.45, y: 6, x: -3 },
  },
  {
    id: "nestjs",
    name: "NestJS",
    position: { top: "38%", left: "56%" },
    motion: { duration: 6.0, delay: 0.25, y: 5, x: 2 },
  },
  {
    id: "graphql",
    name: "GraphQL",
    position: { top: "0%", left: "65%" },
    motion: { duration: 6.4, delay: 0.55, y: 4, x: -2 },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    position: { top: "34%", left: "74%" },
    motion: { duration: 5.0, delay: 0.3, y: 5, x: 2 },
  },
  {
    id: "jest",
    name: "Jest",
    position: { top: "4%", left: "82%" },
    motion: { duration: 5.8, delay: 0.65, y: 4, x: -2 },
  },
  {
    id: "docker",
    name: "Docker",
    position: { top: "40%", left: "90%" },
    motion: { duration: 4.6, delay: 0.4, y: 5, x: 2 },
  },
  {
    id: "vercel",
    name: "Vercel",
    position: { top: "10%", left: "94%" },
    motion: { duration: 6.2, delay: 0.2, y: 4, x: -2 },
  },
];

export const experience: Experience[] = [
  {
    id: "freelancer",
    company: {
      pt: "Freelancer",
      en: "Freelancer",
    },
    role: {
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    },
    period: {
      pt: "Jan 2025 — Atual",
      en: "Jan 2025 — Present",
    },
    summary: {
      pt: "Desenvolvimento de produtos digitais para clientes, cobrindo arquitetura, frontend, backend e entrega ponta a ponta com React, Next.js, TypeScript e Node.js.",
      en: "Building digital products for clients end to end, covering architecture, frontend, backend, and delivery with React, Next.js, TypeScript, and Node.js.",
    },
    current: true,
    projectIds: ["liore-management-platform", "kyle-co-real-estate"],
  },
  {
    id: "abercrombie-fitch",
    company: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    role: {
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    },
    period: {
      pt: "Nov 2022 — Fev 2026",
      en: "Nov 2022 — Feb 2026",
    },
    summary: {
      pt: "Atuação em sistemas corporativos internos e plataformas de e-commerce usando React, TypeScript, Node.js e GraphQL. Trabalhei com sistemas distribuídos, integração de APIs, testes, documentação e desenvolvimento de funcionalidades desde a análise até a entrega.",
      en: "Worked on enterprise internal systems and e-commerce platforms using React, TypeScript, Node.js, and GraphQL. Contributed to distributed systems, API integrations, testing, documentation, and feature development from requirements analysis through delivery.",
    },
  },
  {
    id: "conectadoc",
    company: {
      pt: "ConectaDoc",
      en: "ConectaDoc",
    },
    role: {
      pt: "Engenheiro de Software Júnior",
      en: "Junior Software Engineer",
    },
    period: {
      pt: "Mai 2022 — Nov 2022",
      en: "May 2022 — Nov 2022",
    },
    summary: {
      pt: "Atuei como principal desenvolvedor web de uma plataforma de saúde utilizada por clientes no Brasil e no exterior. Desenvolvi funcionalidades com React, React Native e TypeScript, integrei APIs e participei de decisões técnicas e de produto.",
      en: "Worked as the main web developer for a healthcare platform used by clients in Brazil and abroad. Built features with React, React Native, and TypeScript, integrated APIs, and contributed to technical and product decisions.",
    },
  },
  {
    id: "kenzie-academy",
    company: {
      pt: "Kenzie Academy Brasil",
      en: "Kenzie Academy Brazil",
    },
    role: {
      pt: "Mentor Técnico",
      en: "Peer Coach",
    },
    period: {
      pt: "Mar 2021 — Mai 2022",
      en: "Mar 2021 — May 2022",
    },
    summary: {
      pt: "Liderei mentorias técnicas para estudantes de desenvolvimento full stack em JavaScript, React e Node.js. Realizei revisões de código, apoiei a resolução de problemas e ajudei desenvolvedores a melhorar lógica, qualidade de código e boas práticas.",
      en: "Provided technical mentorship to full-stack development students working with JavaScript, React, and Node.js. Reviewed projects, supported debugging, and helped developers improve their problem-solving, code quality, and engineering practices.",
    },
  },
];

export const projects: Project[] = [
  {
    id: "liore-management-platform",
    slug: "liore-management-platform",
    name: {
      pt: "Plataforma de Gestão Clínica",
      en: "Clinic Management Platform",
    },
    description: {
      pt: "Sistema interno para clínica de nutrição, unindo agenda, prontuário, planos alimentares e financeiro em um só fluxo.",
      en: "Internal platform for a nutrition clinic, bringing scheduling, records, meal plans, and finance into one workflow.",
    },
    client: {
      pt: "Liore",
      en: "Liore",
    },
    startDate: { pt: "Nov 2025", en: "Nov 2025" },
    endDate: { pt: "Jun 2026", en: "Jun 2026" },
    logo: "/photos/liore-emblem.avif",
    logoOnWhite: true,
    logoScale: 2,
    freelance: true,
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "React Hook Form",
      "Zod",
      "FullCalendar",
      "Jest",
    ],
    caseStudy: {
      overview: [
        {
          pt: "A Liore precisava de um sistema único para o ritmo do consultório: da chegada do paciente à documentação clínica e ao pagamento, sem trocar de ferramenta.",
          en: "Liore needed one system for consultório pace: from patient arrival to clinical documentation and payment, without switching tools.",
        },
        {
          pt: "Construí a plataforma do zero como único desenvolvedor, cobrindo produto, arquitetura, APIs, modelagem de dados e interface para os papéis Admin, SDR, Médico e Financeiro.",
          en: "I built the platform from scratch as the sole developer, covering product, architecture, APIs, data modeling, and UI for Admin, SDR, Doctor, and Finance roles.",
        },
      ],
      role: {
        pt: "Único desenvolvedor, ownership ponta a ponta.",
        en: "Sole developer with end-to-end ownership.",
      },
      highlights: [
        {
          pt: "Agenda com FullCalendar, fila de espera e fluxos de atendimento alinhados ao dia a dia da clínica.",
          en: "Scheduling with FullCalendar, waiting queue, and visit flows aligned to clinic day-to-day work.",
        },
        {
          pt: "Prontuário nutricional com anamnese, antropometria, planos alimentares e base de alimentos TACO.",
          en: "Nutritional charting with anamnesis, anthropometry, meal plans, and a TACO food database.",
        },
        {
          pt: "Módulo financeiro e dashboards operacionais para acompanhar a operação da clínica.",
          en: "Finance module and operational dashboards to support clinic operations.",
        },
        {
          pt: "Autenticação e autorização por papéis, com APIs Next.js e MongoDB.",
          en: "Role-based authentication and authorization, with Next.js APIs and MongoDB.",
        },
      ],
      notes: [
        {
          pt: "Stack principal: Next.js, TypeScript, MongoDB/Mongoose, React Hook Form, Zod, TipTap e testes com Jest.",
          en: "Core stack: Next.js, TypeScript, MongoDB/Mongoose, React Hook Form, Zod, TipTap, and Jest tests.",
        },
        {
          pt: "Atualizações em tempo real via Pusher em pontos sensíveis da operação.",
          en: "Real-time updates via Pusher in operationally sensitive flows.",
        },
      ],
    },
  },
  {
    id: "kyle-co-real-estate",
    slug: "kyle-co-real-estate",
    name: {
      pt: "Site Imobiliário",
      en: "Real Estate Website",
    },
    description: {
      pt: "Website de marketing imobiliário com design system próprio, formulário de contato, mapa, SEO e entrega ponta a ponta.",
      en: "Real estate marketing site with a custom design system, contact form, map, SEO, and end-to-end delivery.",
    },
    client: {
      pt: "Kyle & Co.",
      en: "Kyle & Co.",
    },
    startDate: { pt: "Mai 2026", en: "May 2026" },
    endDate: { pt: "Jul 2026", en: "Jul 2026" },
    logo: "/photos/kyle-emblem.avif",
    logoOnWhite: true,
    logoScale: 2,
    freelance: true,
    url: "https://www.kylenrealestate.com/",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "MapLibre",
      "SEO",
    ],
    caseStudy: {
      overview: [
        {
          pt: "A Kyle & Co. precisava de um site profissional para compradores, locatários e investidores, com clareza de marca e um caminho óbvio para contato.",
          en: "Kyle & Co. needed a professional site for buyers, renters, and investors, with clear branding and an obvious path to get in touch.",
        },
        {
          pt: "Entreguei o projeto sozinho, da arquitetura ao deploy, incluindo páginas institucionais, formulário validado com envio de e-mail, mapa interativo e base de SEO.",
          en: "I delivered the project alone, from architecture to deploy, including institutional pages, a validated contact form with email delivery, an interactive map, and SEO foundations.",
        },
      ],
      role: {
        pt: "Único desenvolvedor, ownership ponta a ponta.",
        en: "Sole developer with end-to-end ownership.",
      },
      highlights: [
        {
          pt: "Home, About, Contact, Privacy e Terms com hierarquia visual e componentes reutilizáveis.",
          en: "Home, About, Contact, Privacy, and Terms with clear visual hierarchy and reusable components.",
        },
        {
          pt: "Formulário de contato com validação Zod e envio de e-mail confiável.",
          en: "Contact form with Zod validation and reliable email delivery.",
        },
        {
          pt: "Mapa interativo com MapLibre e painéis de informação do escritório.",
          en: "Interactive MapLibre map and office information panels.",
        },
        {
          pt: "SEO, sitemap, Open Graph, acessibilidade e atenção a performance no App Router.",
          en: "SEO, sitemap, Open Graph, accessibility, and performance attention on the App Router.",
        },
      ],
      notes: [
        {
          pt: "Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui e deploy na Vercel.",
          en: "Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and Vercel deployment.",
        },
        {
          pt: "Design system próprio com tipografia expressiva, header com contraste dinâmico e seções reutilizáveis.",
          en: "Custom design system with expressive typography, dynamic header contrast, and reusable section patterns.",
        },
      ],
    },
  },
  {
    id: "abercrombie-ecommerce",
    slug: "abercrombie-ecommerce",
    name: {
      pt: "Plataforma de E-commerce",
      en: "E-commerce Platform",
    },
    description: {
      pt: "Desenvolvimento e manutenção da plataforma de e-commerce da Abercrombie & Fitch com React, TypeScript e GraphQL.",
      en: "Development and maintenance of Abercrombie & Fitch's e-commerce platform with React, TypeScript, and GraphQL.",
    },
    client: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    startDate: {
      pt: "Nov 2022",
      en: "Nov 2022",
    },
    endDate: {
      pt: "Fev 2026",
      en: "Feb 2026",
    },
    logo: "/photos/abercrombie-fitch-emblem.avif",
    logoOnWhite: true,
    url: "https://www.abercrombie.com/shop/wd",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Jest",
      "E-commerce",
    ],
    caseStudy: {
      overview: [
        {
          pt: "Participei do desenvolvimento e manutenção da plataforma de e-commerce da Abercrombie & Fitch, em um ambiente de produto de larga escala e equipes distribuídas.",
          en: "I contributed to the development and maintenance of Abercrombie & Fitch's e-commerce platform in a large-scale product environment with distributed teams.",
        },
        {
          pt: "O trabalho cobriu novas funcionalidades, correções, melhorias de interface e integração contínua com APIs GraphQL ao longo do ciclo de entrega.",
          en: "The work covered new features, fixes, UI improvements, and ongoing GraphQL API integration throughout the delivery lifecycle.",
        },
      ],
      role: {
        pt: "Engenheiro de Software em time de produto e-commerce.",
        en: "Software Engineer on the e-commerce product team.",
      },
      highlights: [
        {
          pt: "Implementação e evolução de fluxos de interface com React e TypeScript.",
          en: "Building and evolving UI flows with React and TypeScript.",
        },
        {
          pt: "Integração com APIs GraphQL e colaboração em mudanças de contrato e consumo de dados.",
          en: "GraphQL API integration and collaboration on data contracts and client consumption.",
        },
        {
          pt: "Testes automatizados, revisão de código e entrega contínua com times distribuídos.",
          en: "Automated testing, code reviews, and continuous delivery with distributed teams.",
        },
      ],
      notes: [
        {
          pt: "Stack principal: React, Next.js, TypeScript, GraphQL, Node.js e Jest.",
          en: "Core stack: React, Next.js, TypeScript, GraphQL, Node.js, and Jest.",
        },
        {
          pt: "Foco em qualidade de entrega, comunicação assíncrona e alinhamento com requisitos de produto.",
          en: "Focus on delivery quality, async collaboration, and alignment with product requirements.",
        },
      ],
    },
  },
  {
    id: "enterprise-management-systems",
    slug: "enterprise-management-systems",
    name: {
      pt: "Sistemas Corporativos Distribuídos",
      en: "Distributed Enterprise Systems",
    },
    description: {
      pt: "Aplicações internas para operações corporativas, com arquitetura frontend e padronização entre microsserviços.",
      en: "Internal applications for enterprise operations, with frontend architecture and cross-microservice standardization.",
    },
    client: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    startDate: { pt: "Nov 2022", en: "Nov 2022" },
    endDate: { pt: "Fev 2026", en: "Feb 2026" },
    logo: "/photos/abercrombie-fitch-emblem.avif",
    logoOnWhite: true,
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Microservices",
      "Jest",
    ],
    caseStudy: {
      overview: [
        {
          pt: "Além do e-commerce, atuei em um conjunto de aplicações internas que sustentam operações corporativas da Abercrombie & Fitch.",
          en: "Beyond e-commerce, I worked on a group of internal applications that support Abercrombie & Fitch corporate operations.",
        },
        {
          pt: "O foco foi arquitetura frontend, componentes reutilizáveis, integração com APIs e colaboração na padronização de uma malha com mais de 30 microsserviços.",
          en: "The focus was frontend architecture, reusable components, API integration, and collaboration on standardizing a mesh of more than 30 microservices.",
        },
      ],
      role: {
        pt: "Engenheiro de Software em sistemas internos e plataforma.",
        en: "Software Engineer on internal systems and platform work.",
      },
      highlights: [
        {
          pt: "Arquitetura frontend e componentes compartilhados para acelerar entrega entre aplicações.",
          en: "Frontend architecture and shared components to speed delivery across applications.",
        },
        {
          pt: "Integração com APIs e alinhamento de padrões entre times e serviços.",
          en: "API integration and pattern alignment across teams and services.",
        },
        {
          pt: "Colaboração na padronização de mais de 30 microsserviços em um ambiente distribuído.",
          en: "Collaboration on standardizing more than 30 microservices in a distributed environment.",
        },
      ],
      notes: [
        {
          pt: "Stack: React, Vite, TypeScript, Node.js, GraphQL e Jest.",
          en: "Stack: React, Vite, TypeScript, Node.js, GraphQL, and Jest.",
        },
        {
          pt: "Ênfase em consistência técnica, reuso e manutenibilidade em escala corporativa.",
          en: "Emphasis on technical consistency, reuse, and maintainability at enterprise scale.",
        },
      ],
    },
  },
  {
    id: "healthcare-saas-platform",
    slug: "healthcare-saas-platform",
    name: {
      pt: "Plataforma SaaS para Saúde",
      en: "Healthcare SaaS Platform",
    },
    description: {
      pt: "Plataforma médica web e mobile para clientes no Brasil e no exterior, com foco em produto e integração de APIs.",
      en: "Web and mobile healthcare platform for clients in Brazil and abroad, focused on product and API integration.",
    },
    client: {
      pt: "ConectaDoc",
      en: "ConectaDoc",
    },
    startDate: { pt: "Mai 2022", en: "May 2022" },
    endDate: { pt: "Nov 2022", en: "Nov 2022" },
    logo: "/photos/conectadoc-emblem.avif",
    logoOnWhite: true,
    url: "https://conectadoc.com.br/",
    tags: ["React", "React Native", "TypeScript", "JavaScript", "REST APIs"],
    caseStudy: {
      overview: [
        {
          pt: "Na ConectaDoc, atuei como principal desenvolvedor web de uma plataforma de saúde usada por clientes no Brasil e no exterior.",
          en: "At ConectaDoc, I worked as the main web developer on a healthcare platform used by clients in Brazil and abroad.",
        },
        {
          pt: "O trabalho misturou entrega de features, manutenção, integração com APIs e participação em decisões técnicas e de produto.",
          en: "The work mixed feature delivery, maintenance, API integration, and participation in technical and product decisions.",
        },
      ],
      role: {
        pt: "Engenheiro de Software Júnior, principal desenvolvedor web.",
        en: "Junior Software Engineer and main web developer.",
      },
      highlights: [
        {
          pt: "Desenvolvimento e manutenção de funcionalidades web com React e TypeScript.",
          en: "Development and maintenance of web features with React and TypeScript.",
        },
        {
          pt: "Contribuição em fluxos mobile com React Native.",
          en: "Contribution to mobile flows with React Native.",
        },
        {
          pt: "Integração de interfaces com APIs REST e apoio a prioridades de produto.",
          en: "REST API interface integration and support for product priorities.",
        },
      ],
      notes: [
        {
          pt: "Stack: React, React Native, TypeScript, JavaScript e REST APIs.",
          en: "Stack: React, React Native, TypeScript, JavaScript, and REST APIs.",
        },
        {
          pt: "Experiência próxima do cliente e do produto em um SaaS de saúde em operação.",
          en: "Close-to-product experience in a live healthcare SaaS environment.",
        },
      ],
    },
  },
];

/** Projects highlighted on the home page — order preserved */
export const featuredProjectIds = [
  "liore-management-platform",
  "abercrombie-ecommerce",
  "enterprise-management-systems",
] as const;

export function getProjectsByIds(ids: readonly string[]): Project[] {
  return ids.flatMap((id) => {
    const project = projects.find((item) => item.id === id);
    return project ? [project] : [];
  });
}

export function getFeaturedProjects(): Project[] {
  return getProjectsByIds(featuredProjectIds);
}
