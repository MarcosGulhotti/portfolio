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

export type ProjectGallerySlide = {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
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
  /** Product screenshots for the case-study gallery */
  gallery?: ProjectGallerySlide[];
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
      pt: "Jan 2025 · Atual",
      en: "Jan 2025 · Present",
    },
    summary: {
      pt: "Arquitetura e entrega de produtos digitais ponta a ponta: frontend, backend, integrações e infraestrutura. Inclui plataforma de gestão clínica e site imobiliário com React, Next.js, TypeScript, Node.js, MongoDB e Vercel.",
      en: "Architected and delivered digital products end to end: frontend, backend, integrations, and infrastructure. Includes a clinic management platform and a real estate website with React, Next.js, TypeScript, Node.js, MongoDB, and Vercel.",
    },
    current: true,
    projectIds: ["liore-management-platform", "kyle-co-real-estate"],
  },
  {
    id: "abercrombie-fitch-senior",
    company: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    role: {
      pt: "Engenheiro de Software Sênior",
      en: "Senior Software Engineer",
    },
    period: {
      pt: "Mar 2025 · Fev 2026",
      en: "Mar 2025 · Feb 2026",
    },
    summary: {
      pt: "Co-projeto e desenvolvimento de plataforma de orquestração de micro-frontends para e-commerce de larga escala. Contribuição para 30% de melhoria de performance em plataformas globais com Next.js e TypeScript, alinhando decisões de arquitetura e developer experience.",
      en: "Co-designed and developed a micro-frontend orchestration platform for large-scale e-commerce. Contributed to a 30% performance improvement across global platforms with Next.js and TypeScript, aligning architecture decisions and developer experience.",
    },
    projectIds: ["abercrombie-ecommerce"],
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
      pt: "Nov 2022 · Mar 2025",
      en: "Nov 2022 · Mar 2025",
    },
    summary: {
      pt: "Desenvolvimento de suíte de gestão com 30+ microsserviços em arquitetura distribuída. Modernização de projetos, padronização de práticas, documentação de APIs e UIs, e ownership de features com React, TypeScript, Vite, GraphQL e Jest.",
      en: "Built a management software suite with 30+ microservices in a distributed architecture. Modernized projects, standardized practices, documented APIs and UIs, and owned features with React, TypeScript, Vite, GraphQL, and Jest.",
    },
    projectIds: ["enterprise-management-systems"],
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
      pt: "Mai 2022 · Nov 2022",
      en: "May 2022 · Nov 2022",
    },
    summary: {
      pt: "Desenvolvimento técnico de aplicação de saúde para clientes internacionais, com melhorias de UX, decisões de arquitetura e reforço de segurança e conformidade. Stack: React, React Native, TypeScript, JavaScript e Jest.",
      en: "Led technical development of a healthcare application for international clients, shipping UX improvements, contributing to architecture decisions, and strengthening security and compliance. Stack: React, React Native, TypeScript, JavaScript, and Jest.",
    },
    projectIds: ["healthcare-saas-platform"],
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
      pt: "Mar 2021 · Mai 2022",
      en: "Mar 2021 · May 2022",
    },
    summary: {
      pt: "Mentoria técnica e suporte a resolução de problemas para desenvolvedores em formação. Avaliação e revisão de tarefas em JavaScript, TypeScript, HTML, CSS e React, com acompanhamento do progresso dos alunos.",
      en: "Provided technical mentorship and debugging support to developing engineers. Evaluated and reviewed tasks in JavaScript, TypeScript, HTML, CSS, and React, while monitoring student progress.",
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
      pt: "Plataforma completa de gestão clínica construída do zero: agenda, prontuários, nutrição, financeiro e fluxos por papel, com arquitetura full-stack em Next.js, TypeScript e Node.js.",
      en: "Complete clinic management platform built from scratch: scheduling, clinical records, nutrition, finance, and role-based workflows, with full-stack architecture in Next.js, TypeScript, and Node.js.",
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
      "Node.js",
      "MongoDB",
      "React Hook Form",
      "Zod",
      "FullCalendar",
    ],
    gallery: [
      {
        src: "/photos/liore/dashboard.png",
        alt: {
          pt: "Dashboard inicial da Liore com métricas do dia e lista de agendamentos",
          en: "Liore home dashboard with daily metrics and today's appointments list",
        },
        caption: {
          pt: "Início, visão operacional do dia",
          en: "Home, daily operations overview",
        },
      },
      {
        src: "/photos/liore/schedule.png",
        alt: {
          pt: "Agenda semanal da Liore com blocos de consulta coloridos por horário",
          en: "Liore weekly calendar with color-coded appointment blocks",
        },
        caption: {
          pt: "Agenda, calendário semanal",
          en: "Schedule, weekly calendar",
        },
      },
      {
        src: "/photos/liore/patients.png",
        alt: {
          pt: "Lista de pacientes da Liore com filtros, status e paginação",
          en: "Liore patients list with filters, status badges, and pagination",
        },
        caption: {
          pt: "Pacientes, busca e gestão",
          en: "Patients, search and management",
        },
      },
      {
        src: "/photos/liore/profile.png",
        alt: {
          pt: "Perfil profissional na Liore com dados cadastrais e tags de recomendação",
          en: "Liore professional profile with registry fields and recommendation tags",
        },
        caption: {
          pt: "Perfil, cadastro e tags",
          en: "Profile, registry and tags",
        },
      },
      {
        src: "/photos/liore/meal-plan.png",
        alt: {
          pt: "Plano alimentar na Liore com refeições, macros e gráfico de distribuição",
          en: "Liore meal plan view with meals, macros, and distribution chart",
        },
        caption: {
          pt: "Plano alimentar, macros e refeições",
          en: "Meal plan, macros and meals",
        },
      },
      {
        src: "/photos/liore/finance.png",
        alt: {
          pt: "Tela de recebimentos da Liore com tabela de pagamentos pendentes",
          en: "Liore receipts screen with pending payments table",
        },
        caption: {
          pt: "Recebimentos, financeiro da clínica",
          en: "Receipts, clinic finance",
        },
      },
    ],
    caseStudy: {
      overview: [
        {
          pt: "Arquitetura e entrega de um produto digital completo para a Liore, da concepção ao deploy, cobrindo frontend, backend, integrações e infraestrutura.",
          en: "Architected and delivered a complete digital product for Liore, from conception to deployment, covering frontend, backend, integrations, and infrastructure.",
        },
        {
          pt: "Como único desenvolvedor, implementei a plataforma de gestão clínica com Next.js, TypeScript, Node.js e MongoDB, com foco em escalabilidade e manutenção.",
          en: "As the sole developer, I built the clinic management platform with Next.js, TypeScript, Node.js, and MongoDB, focused on scalability and maintainability.",
        },
      ],
      role: {
        pt: "Único desenvolvedor, ownership ponta a ponta da arquitetura e da entrega.",
        en: "Sole developer with end-to-end ownership of architecture and delivery.",
      },
      highlights: [
        {
          pt: "Módulos de agenda, prontuários clínicos, acompanhamento nutricional, financeiro e fluxos com controle de papéis.",
          en: "Modules for scheduling, clinical records, nutrition tracking, finance, and role-based workflows.",
        },
        {
          pt: "Componentes frontend reutilizáveis e fluxos de aplicação estruturados para manter o sistema escalável e sustentável.",
          en: "Reusable frontend components and structured application flows to keep the system scalable and maintainable.",
        },
        {
          pt: "Validação robusta de formulários, tratamento de dados, integração com APIs e regras de negócio para disponibilidade e gestão de agendamentos.",
          en: "Robust form validation, data handling, API integration, and business rules for scheduling availability and appointment management.",
        },
        {
          pt: "Interface limpa e responsiva, pensada para usabilidade de profissionais de saúde e usuários administrativos.",
          en: "Clean, responsive interface focused on usability for healthcare professionals and administrative users.",
        },
      ],
      notes: [
        {
          pt: "Stack principal: Next.js, TypeScript, Node.js, MongoDB, React Hook Form, Zod e FullCalendar.",
          en: "Core stack: Next.js, TypeScript, Node.js, MongoDB, React Hook Form, Zod, and FullCalendar.",
        },
        {
          pt: "O escopo cobre operação clínica do dia a dia: pacientes, agenda, consultas, financeiro e administração em um só produto.",
          en: "Scope covers day-to-day clinic operations: patients, scheduling, appointments, finance, and administration in one product.",
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
      pt: "Orquestração de micro-frontends e evolução da plataforma de e-commerce global, com foco em performance e integração de múltiplas aplicações frontend.",
      en: "Micro-frontend orchestration and evolution of the global e-commerce platform, focused on performance and seamless integration of multiple frontend applications.",
    },
    client: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    startDate: {
      pt: "Mar 2025",
      en: "Mar 2025",
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
      "Micro-frontends",
      "Jest",
      "Docker",
      "E-commerce",
    ],
    caseStudy: {
      overview: [
        {
          pt: "Co-projetei e desenvolvi a plataforma de orquestração de micro-frontends do e-commerce da Abercrombie & Fitch, permitindo integração fluida de múltiplas aplicações frontend.",
          en: "Co-designed and developed the micro-frontend orchestration platform for Abercrombie & Fitch e-commerce, enabling seamless integration of multiple frontend applications.",
        },
        {
          pt: "O trabalho contribuiu para cerca de 30% de melhoria de performance nas plataformas globais, com Next.js, TypeScript e colaboração cross-funcional em decisões de arquitetura e developer experience.",
          en: "The work contributed to roughly a 30% performance improvement across global platforms, using Next.js and TypeScript while collaborating cross-functionally on architecture decisions and developer experience.",
        },
      ],
      role: {
        pt: "Engenheiro de Software Sênior em plataforma e-commerce e micro-frontends.",
        en: "Senior Software Engineer on e-commerce platform and micro-frontends.",
      },
      highlights: [
        {
          pt: "Orquestração de micro-frontends para integrar múltiplas aplicações no site de e-commerce.",
          en: "Micro-frontend orchestration to integrate multiple applications into the e-commerce site.",
        },
        {
          pt: "Melhoria de performance em plataformas globais via arquitetura e manutenção de micro-frontends.",
          en: "Global platform performance gains through micro-frontend architecture development and maintenance.",
        },
        {
          pt: "Alinhamento de decisões de arquitetura e melhoria da experiência de desenvolvimento para entrega contínua.",
          en: "Architecture alignment and developer experience improvements supporting continuous feature delivery.",
        },
      ],
      notes: [
        {
          pt: "Stack: React, TypeScript, Next.js, JavaScript, Jest, Docker e Podman.",
          en: "Stack: React, TypeScript, Next.js, JavaScript, Jest, Docker, and Podman.",
        },
        {
          pt: "Ambiente remoto com times cross-funcionais em escala Fortune 500.",
          en: "Remote environment with cross-functional teams at Fortune 500 scale.",
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
      pt: "Suíte de gestão com 30+ microsserviços em arquitetura distribuída, modernização de projetos e padronização de desenvolvimento.",
      en: "Management software suite with 30+ microservices in a distributed architecture, project modernization, and development standardization.",
    },
    client: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    startDate: { pt: "Nov 2022", en: "Nov 2022" },
    endDate: { pt: "Mar 2025", en: "Mar 2025" },
    logo: "/photos/abercrombie-fitch-emblem.avif",
    logoOnWhite: true,
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "GraphQL",
      "Microservices",
      "Jest",
      "Storybook",
    ],
    caseStudy: {
      overview: [
        {
          pt: "Colaborei com times cross-funcionais no desenvolvimento de uma suíte de gestão, contribuindo para a criação de 30+ microsserviços em arquitetura distribuída.",
          en: "Collaborated with cross-functional teams to develop a management software suite, contributing to the creation of 30+ microservices within a distributed system architecture.",
        },
        {
          pt: "Modernizei projetos existentes, padronizei práticas de desenvolvimento e mantive documentação de APIs e interfaces para conformidade e transferência de conhecimento.",
          en: "Modernized existing projects, standardized development practices, and maintained API and UI documentation for compliance and knowledge transfer.",
        },
      ],
      role: {
        pt: "Engenheiro de Software em sistemas internos e plataforma.",
        en: "Software Engineer on internal systems and platform work.",
      },
      highlights: [
        {
          pt: "Contribuição para 30+ microsserviços em uma malha distribuída de larga escala.",
          en: "Contribution to 30+ microservices in a large-scale distributed mesh.",
        },
        {
          pt: "Modernização tecnológica e padronização de desenvolvimento no novo grupo de software.",
          en: "Technology modernization and development standardization across the new software group.",
        },
        {
          pt: "Ownership de múltiplos projetos: novas features, resolução de problemas e documentação técnica.",
          en: "Ownership of multiple projects: new features, issue resolution, and technical documentation.",
        },
      ],
      notes: [
        {
          pt: "Stack: React, TypeScript, Vite, GraphQL, JavaScript, Jest, Storybook e Apollo Server.",
          en: "Stack: React, TypeScript, Vite, GraphQL, JavaScript, Jest, Storybook, and Apollo Server.",
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
      pt: "Aplicação de saúde web e mobile para clientes internacionais, com foco em UX, decisões técnicas e segurança de dados.",
      en: "Web and mobile healthcare application for international clients, focused on UX, technical decisions, and data security.",
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
    tags: ["React", "React Native", "TypeScript", "JavaScript", "Jest"],
    caseStudy: {
      overview: [
        {
          pt: "Gerenciei o desenvolvimento técnico de uma aplicação de saúde usada por clientes internacionais, entregando melhorias que elevaram a experiência do usuário.",
          en: "Managed technical development of a healthcare application used by an international client base, shipping feature enhancements that improved user experience.",
        },
        {
          pt: "Participei de decisões técnicas e de design de sistema, reforçando segurança e integridade de dados com boas práticas e conformidade.",
          en: "Contributed to technical decision-making and system design, strengthening data security and integrity with solid engineering practices and compliance standards.",
        },
      ],
      role: {
        pt: "Engenheiro de Software Júnior, responsável técnico da aplicação.",
        en: "Junior Software Engineer owning technical aspects of the application.",
      },
      highlights: [
        {
          pt: "Melhorias de features e UX para base internacional de clientes.",
          en: "Feature and UX enhancements for an international client base.",
        },
        {
          pt: "Participação em decisões de tecnologia e design de sistema.",
          en: "Contribution to technology decisions and system design approaches.",
        },
        {
          pt: "Práticas de segurança e conformidade em sistemas de saúde.",
          en: "Security and compliance practices in healthcare systems.",
        },
      ],
      notes: [
        {
          pt: "Stack: React, React Native, TypeScript, JavaScript e Jest.",
          en: "Stack: React, React Native, TypeScript, JavaScript, and Jest.",
        },
        {
          pt: "Experiência próxima do produto em um SaaS de saúde em operação.",
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
