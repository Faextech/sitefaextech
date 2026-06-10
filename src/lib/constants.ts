import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Monitor,
  Building2,
  Layers,
  Cloud,
  Globe,
  Layout,
  ShoppingCart,
  Users,
  Workflow,
  Plug,
  Brain,
  Bot,
  Phone,
  MessageCircle,
  BarChart3,
  Lightbulb,
  Search,
  PenTool,
  Rocket,
  Headphones,
} from "lucide-react";

export const SITE = {
  name: "Faex Tech",
  tagline: "Tecnologia, automação e inovação para impulsionar resultados",
  headline: "Transformamos processos em tecnologia",
  description:
    "Empresa de tecnologia especializada em gestão, automação e desenvolvimento de soluções integradas. Do site institucional ao sistema complexo de gestão — analisamos seu negócio e criamos a tecnologia certa.",
  url: "https://faextech.com.br",
  email: "master@faextech.com.br",
  whatsapp: "554135283876",
  whatsappDisplay: "+55 41 3528-3876",
  address: "Edifício Espanha (Ed Espanha), Centro, Pinhais - PR, 83323-410",
  addressShort: "Ed. Espanha, Centro — Pinhais - PR",
  mapsQuery: "Ed+Espanha,+Centro,+Pinhais+-+PR,+83323-410",
  groupName: "Grupo Faex",
} as const;

export const GRUPO_FAEX = {
  title: "Faex Tech faz parte do Grupo Faex",
  description:
    "Somos o braço de tecnologia de um grupo empresarial consolidado. Isso nos dá estrutura, experiência operacional real e capacidade de inovar com segurança.",
  testingTitle: "Testadas antes de chegar ao mercado",
  testingDescription:
    "Nenhuma solução nossa é lançada comercialmente antes de ser testada intensamente nas empresas do Grupo Faex. Só depois de validada em operações reais é que levamos a tecnologia para nossos clientes.",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#processo", label: "Como Atuamos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#processo", label: "Como Atuamos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const COMPANY_STATS = [
  { value: "15+", label: "Áreas de atuação" },
  { value: "360°", label: "Visão do negócio" },
  { value: "100%", label: "Sob medida" },
  { value: "24/7", label: "Suporte dedicado" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Analisamos seu negócio",
    description:
      "Entendemos seus processos, desafios e objetivos para identificar onde a tecnologia gera mais impacto.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Projetamos a solução",
    description:
      "Definimos arquitetura, escopo e roadmap — seja um site, um CRM, uma automação ou um sistema completo.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Desenvolvemos e integramos",
    description:
      "Construímos, conectamos sistemas e implantamos com qualidade, segurança e escalabilidade.",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Operamos e evoluímos",
    description:
      "Acompanhamos resultados, damos suporte contínuo e evoluímos a solução conforme seu negócio cresce.",
  },
] as const;

export type SolutionCategory =
  | "desenvolvimento"
  | "web"
  | "gestao"
  | "automacao"
  | "ia"
  | "comunicacao"
  | "analytics"
  | "consultoria";

export interface Solution {
  id: string;
  title: string;
  description: string;
  category: SolutionCategory;
  categoryLabel: string;
  icon: LucideIcon;
  accent: string;
  accentGlow: string;
  metric?: string;
  features: string[];
}

export const SOLUTION_CATEGORIES: Record<
  SolutionCategory,
  { label: string; color: string }
> = {
  desenvolvimento: { label: "Desenvolvimento", color: "#0570e8" },
  web: { label: "Presença Digital", color: "#3b82f6" },
  gestao: { label: "Gestão Comercial", color: "#6366f1" },
  automacao: { label: "Automação", color: "#a855f7" },
  ia: { label: "Inteligência Artificial", color: "#ec4899" },
  comunicacao: { label: "Comunicação", color: "#22c55e" },
  analytics: { label: "Analytics & BI", color: "#06b6d4" },
  consultoria: { label: "Consultoria", color: "#f58220" },
};

export const SOLUTIONS: Solution[] = [
  {
    id: "sistemas",
    title: "Sistemas Sob Medida",
    description:
      "Desenvolvimento de software personalizado para operações que exigem soluções exclusivas e escaláveis.",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento",
    icon: Code2,
    accent: "#0570e8",
    accentGlow: "rgba(5, 112, 232, 0.2)",
    metric: "Full-stack",
    features: ["Arquitetura custom", "APIs", "Escalável"],
  },
  {
    id: "plataformas",
    title: "Plataformas Web",
    description:
      "Criação de plataformas web robustas para gestão, operação e interação com clientes e equipes.",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento",
    icon: Monitor,
    accent: "#1a8cff",
    accentGlow: "rgba(26, 140, 255, 0.2)",
    metric: "Cloud-ready",
    features: ["Multi-usuário", "Painéis", "Responsivo"],
  },
  {
    id: "portais",
    title: "Portais Corporativos",
    description:
      "Portais internos e externos para centralizar informações, processos e comunicação da empresa.",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento",
    icon: Building2,
    accent: "#2563eb",
    accentGlow: "rgba(37, 99, 235, 0.2)",
    features: ["Intranet", "Extranet", "SSO"],
  },
  {
    id: "apps",
    title: "Aplicações Empresariais",
    description:
      "Apps corporativos para automatizar rotinas, conectar equipes e dar mobilidade à operação.",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento",
    icon: Layers,
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    features: ["Web & Mobile", "Offline", "Integrado"],
  },
  {
    id: "saas",
    title: "Soluções SaaS",
    description:
      "Produtos em nuvem com assinatura, multi-tenant e infraestrutura preparada para escalar.",
    category: "desenvolvimento",
    categoryLabel: "Desenvolvimento",
    icon: Cloud,
    accent: "#60a5fa",
    accentGlow: "rgba(96, 165, 250, 0.2)",
    metric: "Multi-tenant",
    features: ["Assinatura", "Escalável", "API-first"],
  },
  {
    id: "sites",
    title: "Sites Institucionais",
    description:
      "Sites profissionais que transmitem credibilidade, performance e identidade da sua marca.",
    category: "web",
    categoryLabel: "Presença Digital",
    icon: Globe,
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    features: ["SEO", "Performance", "Responsivo"],
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads qualificados.",
    category: "web",
    categoryLabel: "Presença Digital",
    icon: Layout,
    accent: "#60a5fa",
    accentGlow: "rgba(96, 165, 250, 0.2)",
    metric: "Alta conversão",
    features: ["A/B Testing", "Analytics", "Integração CRM"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Lojas virtuais completas com gestão de produtos, pagamentos, estoque e experiência de compra.",
    category: "web",
    categoryLabel: "Presença Digital",
    icon: ShoppingCart,
    accent: "#f58220",
    accentGlow: "rgba(245, 130, 32, 0.2)",
    features: ["Checkout", "Estoque", "Marketplace"],
  },
  {
    id: "crm",
    title: "CRM & Gestão Comercial",
    description:
      "O Faex CRM — uma das nossas soluções — para pipeline, leads, vendas e relacionamento com clientes.",
    category: "gestao",
    categoryLabel: "Gestão Comercial",
    icon: Users,
    accent: "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    metric: "Faex CRM",
    features: ["Pipeline", "Lead Scoring", "Histórico 360°"],
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    description:
      "Fluxos inteligentes que eliminam tarefas manuais e conectam etapas da sua operação automaticamente.",
    category: "automacao",
    categoryLabel: "Automação",
    icon: Workflow,
    accent: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.2)",
    metric: "No-code + Pro",
    features: ["Fluxos visuais", "Gatilhos", "Webhooks"],
  },
  {
    id: "integracoes",
    title: "Integrações entre Sistemas",
    description:
      "Conectamos ERPs, CRMs, gateways, APIs e ferramentas para unificar dados e processos.",
    category: "automacao",
    categoryLabel: "Automação",
    icon: Plug,
    accent: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.2)",
    metric: "API REST",
    features: ["Webhooks", "ETL", "Middleware"],
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    description:
      "IA aplicada ao negócio: análise preditiva, classificação automática e insights para decisões rápidas.",
    category: "ia",
    categoryLabel: "Inteligência Artificial",
    icon: Brain,
    accent: "#ec4899",
    accentGlow: "rgba(236, 72, 153, 0.2)",
    metric: "ML integrado",
    features: ["Previsões", "NLP", "Análise de dados"],
  },
  {
    id: "agentes",
    title: "Agentes de IA",
    description:
      "Assistentes virtuais autônomos para atendimento, qualificação, suporte e execução de tarefas.",
    category: "ia",
    categoryLabel: "Inteligência Artificial",
    icon: Bot,
    accent: "#f472b6",
    accentGlow: "rgba(244, 114, 182, 0.2)",
    metric: "24/7",
    features: ["Atendimento IA", "RAG", "Automação"],
  },
  {
    id: "telefonia",
    title: "Telefonia Corporativa",
    description:
      "VoIP, webphone, discador automático e URA — telefonia em nuvem integrada à sua operação.",
    category: "comunicacao",
    categoryLabel: "Comunicação",
    icon: Phone,
    accent: "#22c55e",
    accentGlow: "rgba(34, 197, 94, 0.2)",
    metric: "99.9% uptime",
    features: ["VoIP", "Discador", "Gravação"],
  },
  {
    id: "omnichannel",
    title: "WhatsApp & Omnichannel",
    description:
      "Central de atendimento unificada com WhatsApp, redes sociais e multiatendimento integrado.",
    category: "comunicacao",
    categoryLabel: "Comunicação",
    icon: MessageCircle,
    accent: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    metric: "API Oficial",
    features: ["Filas", "Chatbot", "Multi-canal"],
  },
  {
    id: "bi",
    title: "Dashboards & BI",
    description:
      "Business Intelligence com painéis em tempo real, KPIs customizados e relatórios estratégicos.",
    category: "analytics",
    categoryLabel: "Analytics & BI",
    icon: BarChart3,
    accent: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.2)",
    metric: "Tempo real",
    features: ["KPIs", "Exportação", "Alertas"],
  },
  {
    id: "consultoria",
    title: "Consultoria Tecnológica",
    description:
      "Diagnóstico, planejamento e orientação estratégica para escolher e implementar a tecnologia certa.",
    category: "consultoria",
    categoryLabel: "Consultoria",
    icon: Lightbulb,
    accent: "#f58220",
    accentGlow: "rgba(245, 130, 32, 0.2)",
    metric: "Estratégica",
    features: ["Diagnóstico", "Roadmap", "Arquitetura"],
  },
];

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  accentGlow: string;
  highlights: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "desenvolvimento",
    title: "Desenvolvimento de Software",
    description:
      "Sistemas, plataformas, portais, apps empresariais e soluções SaaS desenvolvidos sob medida para sua operação.",
    icon: Code2,
    accent: "#0570e8",
    accentGlow: "rgba(5, 112, 232, 0.2)",
    highlights: ["Sistemas custom", "Plataformas web", "Apps empresariais", "SaaS"],
  },
  {
    id: "web",
    title: "Presença Digital",
    description:
      "Sites institucionais, landing pages e e-commerce com design profissional, performance e conversão.",
    icon: Globe,
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    highlights: ["Sites institucionais", "Landing pages", "E-commerce"],
  },
  {
    id: "gestao",
    title: "Gestão & CRM",
    description:
      "Soluções de gestão comercial incluindo o Faex CRM — uma entre diversas ferramentas que desenvolvemos e operamos.",
    icon: Users,
    accent: "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    highlights: ["Faex CRM", "Pipeline de vendas", "Gestão comercial"],
  },
  {
    id: "automacao",
    title: "Automação & Integrações",
    description:
      "Automatizamos processos e conectamos sistemas para eliminar retrabalho e unificar sua operação.",
    icon: Workflow,
    accent: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.2)",
    highlights: ["Fluxos automáticos", "APIs", "Integrações"],
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    description:
      "IA e agentes autônomos integrados aos seus processos para decisões mais rápidas e operação inteligente.",
    icon: Brain,
    accent: "#ec4899",
    accentGlow: "rgba(236, 72, 153, 0.2)",
    highlights: ["IA aplicada", "Agentes autônomos", "Análise preditiva"],
  },
  {
    id: "comunicacao",
    title: "Comunicação Corporativa",
    description:
      "Telefonia VoIP, discador, WhatsApp e atendimento omnichannel para comunicação profissional em escala.",
    icon: Phone,
    accent: "#22c55e",
    accentGlow: "rgba(34, 197, 94, 0.2)",
    highlights: ["VoIP", "Discador", "WhatsApp", "Omnichannel"],
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    description:
      "Dashboards e Business Intelligence para visualizar performance e tomar decisões baseadas em dados.",
    icon: BarChart3,
    accent: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.2)",
    highlights: ["Dashboards", "KPIs", "Relatórios"],
  },
  {
    id: "consultoria",
    title: "Consultoria Tecnológica",
    description:
      "Analisamos seu negócio e orientamos a melhor estratégia tecnológica — do diagnóstico à implementação.",
    icon: Lightbulb,
    accent: "#f58220",
    accentGlow: "rgba(245, 130, 32, 0.2)",
    highlights: ["Diagnóstico", "Planejamento", "Roadmap"],
  },
];
