export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    id: "consultoria",
    title: "Consultoria Estratégica em Tecnologia",
    description:
      "Alinhamos tecnologia à estratégia de negócio para maximizar ROI e acelerar a transformação digital.",
    icon: "compass",
    highlights: [
      "Diagnóstico tecnológico completo",
      "Roadmap de transformação digital",
      "Governança e priorização de investimentos",
    ],
  },
  {
    id: "integracao",
    title: "Integração de Sistemas e APIs",
    description:
      "Conectamos plataformas, ERPs, CRMs e serviços em um ecossistema unificado e eficiente.",
    icon: "git-merge",
    highlights: [
      "APIs REST e GraphQL",
      "Integração de ERPs e CRMs",
      "Middleware e orquestração de dados",
    ],
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento de Software sob Medida",
    description:
      "Soluções personalizadas que atendem exatamente às necessidades do seu negócio.",
    icon: "code-2",
    highlights: [
      "Aplicações web e mobile",
      "Arquitetura modular e testável",
      "Entregas incrementais com qualidade",
    ],
  },
  {
    id: "cloud",
    title: "Arquitetura Cloud e Escalabilidade",
    description:
      "Infraestrutura cloud-native projetada para crescer com seu negócio de forma segura.",
    icon: "cloud",
    highlights: [
      "AWS, Azure e GCP",
      "Containers e Kubernetes",
      "Monitoramento e observabilidade",
    ],
  },
  {
    id: "automacao",
    title: "Automação e Otimização de Processos",
    description:
      "Eliminamos tarefas repetitivas e otimizamos fluxos operacionais com automação inteligente.",
    icon: "workflow",
    highlights: [
      "RPA e workflows automatizados",
      "Redução de custos operacionais",
      "Métricas e dashboards em tempo real",
    ],
  },
  {
    id: "suporte",
    title: "Suporte e Evolução Contínua",
    description:
      "Acompanhamento proativo, manutenção evolutiva e melhorias contínuas para seus sistemas.",
    icon: "headphones",
    highlights: [
      "SLA e suporte dedicado",
      "Atualizações e patches de segurança",
      "Evolução baseada em feedback",
    ],
  },
];
