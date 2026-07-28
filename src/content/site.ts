export type Experience = {
  id: string;
  company: { pt: string; en: string };
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  summary: { pt: string; en: string };
  current?: boolean;
  /** Marks placeholder/demo entries shown with a disclosure note */
  synthetic?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  name: { pt: string; en: string };
  description: { pt: string; en: string };
  client: { pt: string; en: string };
  startDate: { pt: string; en: string };
  endDate: { pt: string; en: string };
  tags: string[];
  /** Path under /public — leave empty until a real screenshot exists */
  image?: string;
  /** White fill for transparent logos / emblems */
  imageOnWhite?: boolean;
  /** Extra scale for logos that look too small in the frame */
  imageScale?: number;
  /** Marks placeholder/demo entries shown with a disclosure note */
  synthetic?: boolean;
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
      pt: "Plataforma de Gestão Médica",
      en: "Medical Management Platform",
    },
    description: {
      pt: "Sistema interno desenvolvido do zero para gestão de pacientes, médicos, agendamentos, pagamentos e processos administrativos. Fui responsável pela arquitetura, modelagem de dados, APIs, regras de negócio e implementação da interface.",
      en: "An internal platform built from scratch for managing patients, doctors, appointments, payments, and administrative workflows. I owned the architecture, data modeling, APIs, business rules, and frontend implementation.",
    },
    client: {
      pt: "Liore",
      en: "Liore",
    },
    startDate: { pt: "Jan 2025", en: "Jan 2025" },
    endDate: { pt: "Atual", en: "Present" },
    image: "/photos/liore-emblem.avif",
    imageOnWhite: true,
    imageScale: 1.35,
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: "enterprise-management-systems",
    slug: "enterprise-management-systems",
    name: {
      pt: "Sistemas Corporativos Distribuídos",
      en: "Distributed Enterprise Systems",
    },
    description: {
      pt: "Conjunto de aplicações internas desenvolvidas para apoiar operações corporativas. O trabalho envolveu arquitetura frontend, componentes reutilizáveis, integração com APIs e colaboração na padronização de mais de 30 microsserviços.",
      en: "A group of internal applications developed to support enterprise operations. The work included frontend architecture, reusable components, API integration, and collaboration on the standardization of more than 30 microservices.",
    },
    client: {
      pt: "Abercrombie & Fitch",
      en: "Abercrombie & Fitch",
    },
    startDate: { pt: "Nov 2022", en: "Nov 2022" },
    endDate: { pt: "Fev 2026", en: "Feb 2026" },
    image: "/photos/abercrombie-fitch-emblem.avif",
    imageOnWhite: true,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Microservices",
      "Jest",
    ],
  },
  {
    id: "healthcare-saas-platform",
    slug: "healthcare-saas-platform",
    name: {
      pt: "Plataforma SaaS para Saúde",
      en: "Healthcare SaaS Platform",
    },
    description: {
      pt: "Plataforma médica utilizada por clientes nacionais e internacionais. Desenvolvi e mantive funcionalidades web e mobile, integrei interfaces com APIs e participei de decisões sobre melhorias do sistema e prioridades de desenvolvimento.",
      en: "A healthcare platform used by clients in Brazil and abroad. I developed and maintained web and mobile features, integrated interfaces with APIs, and contributed to system improvements and development priorities.",
    },
    client: {
      pt: "ConectaDoc",
      en: "ConectaDoc",
    },
    startDate: { pt: "Mai 2022", en: "May 2022" },
    endDate: { pt: "Nov 2022", en: "Nov 2022" },
    image: "/photos/conectadoc-emblem.avif",
    imageOnWhite: true,
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "REST APIs",
    ],
  },
];
