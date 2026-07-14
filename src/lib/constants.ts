export const SITE = {
  name: "3 HouseHub",
  shortName: "3HB",
  headline: "Construindo o futuro das operações empresariais",
  description:
    "A 3 HouseHub conecta tecnologia, estratégia e execução para criar soluções escaláveis e precisas para empresas B2B.",
  url: "https://3househub.com.br",
  email: "contato@3househub.com.br",
  phone: "+554135283876",
  phoneDisplay: "+55 41 3528-3876",
  whatsapp: "554135283876",
  whatsappDisplay: "+55 41 3528-3876",
  address: {
    street: "Edifício Espanha (Ed Espanha), Centro",
    city: "Pinhais",
    state: "PR",
    zip: "83323-410",
    country: "Brasil",
    full: "Edifício Espanha (Ed Espanha), Centro, Pinhais - PR, 83323-410",
  },
  mapsQuery: "Ed+Espanha,+Centro,+Pinhais+-+PR,+83323-410",
  instagram: "https://www.instagram.com/3househub/",
  hours: "Segunda a Sexta, 9h às 18h",
  heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4",
  heroVideoPoster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  heroLaunchVideo: "/videos/3househub-lancamento-4k.mp4",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/3househub/", icon: "instagram" as const },
] as const;

export const PROBLEM_BULLETS = [
  "Soluções sob medida para o seu jeito de operar.",
  "Pare de se adaptar ao sistema. Faça o sistema se adaptar a você.",
  "Automatize processos. Integre tudo. Ganhe controle e precisão.",
] as const;

export const WHY_CHOOSE = [
  {
    title: "Elimine silos de dados",
    description:
      "Conectamos seu ecossistema ao que você já usa (ERP, CRM, financeiro, APIs). Dados fluem de ponta a ponta, com rastreamento e segurança — sem planilhas paralelas.",
    cta: "Solicitar orçamento",
    icon: "git-merge",
  },
  {
    title: "Feito sob medida de verdade",
    description:
      "Modelamos o fluxo do seu negócio e entregamos funcionalidades que você realmente usa, não pacotes genéricos ou ferramentas que não conversam entre si.",
    cta: "Avaliar meu projeto",
    icon: "settings",
  },
  {
    title: "IA aplicada ao processo",
    description:
      "Integramos inteligência artificial onde faz diferença: automatize o manual, obtenha análises mais profundas e decisões mais rápidas dentro do seu ecossistema.",
    cta: "Falar com especialista",
    icon: "brain",
  },
] as const;

export const INTEGRATION_FEATURES = [
  "APIs REST & GraphQL",
  "Cloud AWS, Azure & GCP",
  "ERP, CRM e gateways de pagamento",
  "Middleware e webhooks em tempo real",
  "Monitoramento e logs centralizados",
] as const;

export const INTEGRATION_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    alt: "Infraestrutura cloud conectada",
    label: "Cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    alt: "Servidores e data center",
    label: "Infraestrutura",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    alt: "Desenvolvimento de APIs e integrações",
    label: "APIs REST",
  },
] as const;

export const COMPANY_COUNTERS = [
  { value: 8, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 40, suffix: "+", label: "Integrações ativas" },
  { value: 99.9, suffix: "%", label: "Uptime médio" },
] as const;

export const DELIVERABLES = [
  { title: "Integrações sem planilhas", description: "ERP, financeiro, CRM e APIs conversando entre si — dados fluindo de ponta a ponta." },
  { title: "Relatórios customizáveis", description: "Filtros, campos calculados e exportação em um clique para decisões baseadas em dados." },
  { title: "Automação de rotinas", description: "O repetitivo vira fluxo automático. Menos erros, mais tempo no que gera resultado." },
  { title: "Dashboards em tempo real", description: "Métricas live e KPIs confiáveis para agir rápido, sem achismo." },
  { title: "Suporte contínuo", description: "Time de especialistas disponível sob demanda para evoluir sua operação." },
  { title: "IA no seu processo", description: "Triagem, extração de dados e insights prontos no painel — IA onde faz diferença." },
  { title: "Fluxos sem atrito", description: "Processos mapeados do início ao fim — menos passos, menos erros." },
  { title: "Escalável e modular", description: "Arquitetura pensada para crescer sem refazer: APIs definidas e manutenção simples." },
] as const;

export const PROCESS_STEPS = [
  { step: "01", title: "Descoberta & Escopo", description: "Entendemos sua operação, desafios e objetivos de negócio." },
  { step: "02", title: "Modelagem de Processos", description: "Mapeamos fluxos e definimos a solução ideal para cada etapa." },
  { step: "03", title: "Arquitetura & Integrações", description: "Projetamos APIs, middleware e conexões entre sistemas." },
  { step: "04", title: "Planejamento de Sprints", description: "Roadmap com entregas incrementais e marcos claros." },
  { step: "05", title: "Desenvolvimento & Qualidade", description: "Construímos, testamos e validamos com rigor técnico." },
  { step: "06", title: "Treinamento & Publicação", description: "Implantamos, capacitamos sua equipe e operamos em produção." },
] as const;

export const TECH_STACK = [
  "Next.js", "React", "Node.js", "TypeScript", "Python",
  "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL",
  "GraphQL", "Redis", "Terraform", "GitHub Actions",
] as const;

export const TESTIMONIALS = [
  {
    name: "Ricardo Mendes",
    role: "CTO — TechCorp",
    text: "A 3HB integrou nosso ERP ao CRM em semanas. O time entendeu nossa operação e entregou exatamente o que precisávamos — sem pacotes genéricos.",
  },
  {
    name: "Fernanda Alves",
    role: "Diretora de Operações — ScaleUp",
    text: "Profissionais extremamente técnicos e atenciosos. A automação que implementaram reduziu nosso retrabalho em mais de 40%. Recomendo muito.",
  },
  {
    name: "Lucas Pereira",
    role: "CEO — DataFlow",
    text: "Parceiro estratégico de longo prazo. Desde a consultoria até a operação em cloud, a 3 HouseHub superou nossas expectativas em cada entrega.",
  },
  {
    name: "Camila Rocha",
    role: "Head de TI — IntegraPro",
    text: "Excelente custo-benefício e execução ágil. Conseguiram captar nossa necessidade de forma objetiva e entregar um sistema sob medida impecável.",
  },
] as const;

export const BRAND_KEYWORDS = [
  { key: "inovacao", label: "Inovação", icon: "lightbulb" as const, description: "Exploramos tecnologias emergentes para colocar sua empresa à frente do mercado." },
  { key: "integracao", label: "Integração", icon: "puzzle" as const, description: "Conectamos sistemas, dados e processos em um ecossistema unificado." },
  { key: "escalabilidade", label: "Escalabilidade", icon: "trending-up" as const, description: "Arquiteturas que crescem com seu negócio sem comprometer performance." },
  { key: "precisao", label: "Precisão", icon: "target" as const, description: "Rigor técnico e atenção aos detalhes em cada entrega e integração." },
] as const;

export const PARTNERS = [
  "TechCorp", "DataFlow", "CloudSync", "IntegraPro",
  "ScaleUp", "NexusLab", "PrimeTech", "VertexIO",
] as const;
