export type CaseModule = {
  title: string;
  description: string;
};

export type CaseResult = {
  value: string;
  label: string;
};

export type CaseBrand = {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  primary: string;
  accent: string;
};

export type SuccessCase = {
  slug: string;
  client: string;
  tagline: string;
  industry: string;
  category: string;
  summary: string;
  description: string;
  highlights: readonly string[];
  gradient: string;
  image: string;
  imageAlt: string;
  website?: string;
  featured: boolean;
  brand?: CaseBrand;
  challenge: {
    title: string;
    description: string;
    points: readonly string[];
  };
  solution: {
    title: string;
    description: string;
    modules: readonly CaseModule[];
  };
  ourRole: readonly string[];
  results: readonly CaseResult[];
  techStack: readonly string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const SUCCESS_CASES: readonly SuccessCase[] = [
  {
    slug: "ciot-express",
    client: "CIOT Express",
    tagline: "Gestão administrativa para transportadores",
    industry: "Logística & Transporte",
    category: "Plataforma SaaS",
    summary:
      "Da ideia de negócio à plataforma completa — gestão financeira, fiscal e operacional para motoristas autônomos e pequenas frotas.",
    description:
      "Desenvolvemos a plataforma e a estratégia de negócio da CIOT Express, transformando a burocracia do dia a dia do transportador em um serviço de gestão profissional acessível — sem contratar funcionários.",
    highlights: [
      "Ideação & modelagem de negócio",
      "Plataforma multi-módulo",
      "WhatsApp & atendimento humano",
    ],
    gradient: "from-[#0c2340]/90 to-[#1a3a6b]/80",
    image: "/images/ciot-express-hero.png",
    imageAlt: "Página inicial da CIOT Express — gestão administrativa para transportadores",
    website: "https://www.ciotexpress.com.br/",
    featured: true,
    brand: {
      logo: "/images/ciot-express-logo.svg",
      logoAlt: "CIOT Express — gestão para transportadores",
      logoWidth: 210,
      logoHeight: 32,
      primary: "#0c2340",
      accent: "#f26522",
    },
    challenge: {
      title: "Transportadores perdendo tempo com burocracia",
      description:
        "Motoristas autônomos, agregados e donos de pequenas frotas gastam horas paradas com tarefas que não geram receita — enquanto notas fiscais, pagamentos e documentos se acumulam sem controle.",
      points: [
        "Parar a rota para emitir notas fiscais manualmente",
        "Combustível, pedágio e manutenção misturados na conta pessoal",
        "Cobranças sem método e recebimentos sem conciliação",
        "Contratos, CNH e comprovantes espalhados no veículo",
        "Planilhas desatualizadas sem visão real de lucro",
      ],
    },
    solution: {
      title: "Gestão profissional sem contratar estrutura",
      description:
        "Criamos uma plataforma modular onde especialistas assumem financeiro, fiscal, operação e administrativo — liberando o transportador para focar em entregar e faturar.",
      modules: [
        {
          title: "Financeiro",
          description: "Fluxo de caixa, recebimentos e pagamentos sob controle com relatórios claros.",
        },
        {
          title: "Notas Fiscais",
          description: "Emissão correta e no prazo, sem interromper a operação de entregas.",
        },
        {
          title: "Operação",
          description: "Apoio nas rotinas do dia a dia para manter tudo funcionando.",
        },
        {
          title: "Administrativo",
          description: "Documentos, contratos e obrigações sempre organizados e acessíveis.",
        },
      ],
    },
    ourRole: [
      "Ideação e modelagem do negócio — do problema à proposta de valor",
      "Arquitetura e desenvolvimento da plataforma web completa",
      "Design de fluxos operacionais para financeiro, fiscal e administrativo",
      "Estruturação dos módulos de atendimento e integração com WhatsApp",
      "Landing page e presença digital orientada à conversão",
    ],
    results: [
      { value: "4", label: "Módulos integrados" },
      { value: "100%", label: "Gestão terceirizada" },
      { value: "0", label: "Planilhas manuais" },
      { value: "24/7", label: "Suporte humano" },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "WhatsApp API"],
    testimonial: {
      quote:
        "Antes eu perdia meio dia por semana com nota e planilha. Hoje foco nas entregas. Meu faturamento subiu porque voltei a rodar.",
      author: "Roberto Carvalho",
      role: "Motorista autônomo · São Paulo",
    },
  },
  {
    slug: "hub-integracao-enterprise",
    client: "Cliente Enterprise",
    tagline: "Integração de sistemas em tempo real",
    industry: "B2B / Enterprise",
    category: "Integração",
    summary:
      "Hub centralizado para conectar ERP, CRM e gateways de pagamento com sincronização automática de dados.",
    description:
      "Plataforma centralizada para conectar ERP, CRM e gateways de pagamento em tempo real. Redução significativa no retrabalho operacional com sincronização automática de dados.",
    highlights: ["APIs REST & GraphQL", "Middleware customizado", "Monitoramento 24/7"],
    gradient: "from-hb-blue to-hb-navy",
    image: "/images/hub-integracao.png",
    imageAlt: "Profissional conectando sistemas enterprise em um hub de integração centralizado",
    featured: false,
    challenge: {
      title: "Silos de dados entre sistemas críticos",
      description:
        "Informações duplicadas, retrabalho manual e falta de visão unificada entre ERP, CRM e financeiro.",
      points: [
        "Dados inconsistentes entre plataformas",
        "Integrações manuais via planilhas",
        "Sem rastreamento de transações entre sistemas",
      ],
    },
    solution: {
      title: "Hub de integração unificado",
      description:
        "Middleware customizado conectando todos os sistemas com APIs, webhooks e monitoramento contínuo.",
      modules: [
        { title: "APIs REST & GraphQL", description: "Camada de integração padronizada e documentada." },
        { title: "Middleware", description: "Orquestração de fluxos entre sistemas legados e modernos." },
        { title: "Monitoramento", description: "Logs centralizados e alertas em tempo real." },
      ],
    },
    ourRole: [
      "Mapeamento de integrações e arquitetura de APIs",
      "Desenvolvimento do middleware de sincronização",
      "Implantação e monitoramento em produção",
    ],
    results: [
      { value: "60%", label: "Menos retrabalho" },
      { value: "24/7", label: "Sincronização" },
      { value: "3+", label: "Sistemas conectados" },
    ],
    techStack: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
] as const;

export function getCaseBySlug(slug: string): SuccessCase | undefined {
  return SUCCESS_CASES.find((c) => c.slug === slug);
}

export function getFeaturedCases(): SuccessCase[] {
  return SUCCESS_CASES.filter((c) => c.featured);
}

export function getCaseSlugs(): string[] {
  return SUCCESS_CASES.map((c) => c.slug);
}
