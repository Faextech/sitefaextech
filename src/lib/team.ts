export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  instagram?: string;
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "allan",
    name: "Allan Rodrigo Soares",
    role: "Fundador & CTO",
    initials: "AR",
    instagram: "https://instagram.com/allanrsoares",
  },
  {
    id: "fabio",
    name: "Fabio Alexandre",
    role: "Sócio & CCO",
    initials: "FA",
    instagram: "https://www.instagram.com/fabioafp/",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    title: "Fundação",
    description:
      "A 3 HouseHub nasce com a missão de integrar tecnologia e estratégia para empresas B2B.",
    icon: "rocket",
  },
  {
    year: "2020",
    title: "Primeiros Projetos",
    description:
      "Entrega dos primeiros projetos de integração de sistemas para clientes enterprise.",
    icon: "briefcase",
  },
  {
    year: "2022",
    title: "Expansão",
    description:
      "Ampliação da operação com novas frentes em cloud, APIs e automação de processos.",
    icon: "trending-up",
  },
  {
    year: "2024",
    title: "Inovação Contínua",
    description:
      "IA aplicada aos processos e evolução do portfólio de soluções digitais sob medida.",
    icon: "sparkles",
  },
];

export const MISSION_ITEMS = [
  {
    icon: "target",
    title: "Missão",
    description:
      "Integrar tecnologia e estratégia para resolver desafios complexos de empresas B2B com soluções precisas e escaláveis.",
  },
  {
    icon: "eye",
    title: "Visão",
    description:
      "Ser referência em integração de soluções digitais, reconhecida pela inovação, confiabilidade e excelência técnica.",
  },
  {
    icon: "heart",
    title: "Valores",
    description:
      "Inovação, integração, escalabilidade e precisão guiam cada decisão, projeto e relacionamento com nossos clientes.",
  },
];
