export const profile = {
  name: 'Iury Nascimento',
  role: 'Desenvolvedor Full Stack',
  tagline: 'SaaS · IA · Automação',
  location: 'Nova Serrana, MG',
  email: 'iuryalmeida188@gmail.com',
  github: 'https://github.com/iuxyog',
  githubUser: '@iuxyog',
  cvPath: 'assets/CV_Iury_Nascimento.docx',
  photoPath: 'assets/eu.jpg',
  heroTexture: 'assets/gen/hero-texture.jpg',
}

export const metrics = [
  { value: '4', label: 'produtos em produção' },
  { value: '400+', label: 'usuários pagantes' },
  { value: '514', label: 'grupos monitorados' },
  { value: '4', label: 'marketplaces integrados' },
]

export const experience = [
  {
    period: '2025 — 2026',
    current: true,
    title: 'Desenvolvedor Full Stack / Responsável Técnico',
    company: 'Value Agência',
    bullets: [
      'Responsável pela arquitetura, desenvolvimento, deploy e sustentação de quatro produtos em produção.',
      'Plataforma financeira multi-tenant com billing, MRR, crédito, cancelamentos e conciliação.',
      'Integrações oficiais com Shopee, Mercado Livre, TikTok Shop e Amazon, incluindo OAuth, webhooks e tratamento de fuso horário.',
      'Automações comerciais e de Customer Success com Bitrix24, n8n, BullMQ e WhatsApp Cloud API.',
      'Resposta a incidentes, monitoramento e proteção contra abuso em sistemas de créditos.',
    ],
  },
  {
    period: 'Experiência anterior',
    current: false,
    title: 'Técnico de Informática / Suporte de TI',
    company: 'Sestape Store',
    bullets: [
      'Montagem e manutenção de computadores, diagnóstico de falhas e suporte a usuários.',
      'Atendimento técnico em sistemas e dispositivos.',
      'Apoio às rotinas de tecnologia e à operação de e-commerce/Shopee.',
    ],
  },
]

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['Next.js 14+', 'React', 'TypeScript strict', 'Tailwind CSS', 'TanStack Query', 'Radix UI', 'SSR / ISR', 'Design systems'],
  },
  {
    title: 'Backend & Dados',
    items: ['Node.js / Express', 'Python / FastAPI', 'Go', 'APIs versionadas', 'DTOs / Zod', 'PostgreSQL 16/17', 'Prisma / GORM', 'Redis / BullMQ'],
  },
  {
    title: 'Cloud & Operação',
    items: ['Docker Compose', 'Nginx', 'AWS EC2', 'Railway', 'Vercel', 'PM2', 'Tailscale', 'Linux', 'Deploy & rollback'],
  },
  {
    title: 'Integrações & IA',
    items: ['Marketplaces', 'WhatsApp Cloud API', 'Bitrix24', 'Eduzz', 'n8n', 'OpenAI', 'Claude', 'fal.ai', 'Visão computacional'],
  },
]

export const practices = [
  {
    title: 'Confiabilidade',
    description: 'Migrations versionadas, logs estruturados, trilha de auditoria e rollback documentado.',
  },
  {
    title: 'Processamento assíncrono',
    description: 'Jobs idempotentes, deduplicação, retry/backoff, filas BullMQ e locks distribuídos.',
  },
  {
    title: 'Segurança',
    description: 'OAuth 2.0, JWT em cookies httpOnly, Argon2id, rate limiting, CSRF e resposta a abuso.',
  },
]

export const projects = [
  {
    number: '01',
    labels: ['SaaS', 'Fintech', 'Multi-tenant'],
    title: 'Value Finanças',
    description:
      'Plataforma financeira e de billing multi-tenant com assinaturas, faturas, crédito, cancelamentos, conciliação, transferências entre contas e comunicação service-to-service autenticada.',
    tech: ['Go', 'PostgreSQL 17', 'GORM', 'Next.js 14', 'Docker', 'AWS EC2'],
    image: 'assets/gen/project-financas.jpg',
    link: null,
  },
  {
    number: '02',
    labels: ['BI', '4 marketplaces', 'Analytics'],
    title: 'Value Analytics',
    description:
      'BI multicanal para pedidos, vendas, comissões e fulfillment, com provisionamento automático de lojas e impersonação segura por ticket de uso único no Redis.',
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Railway'],
    image: 'assets/gen/project-analytics.jpg',
    link: null,
  },
  {
    number: '03',
    labels: ['400+ usuários', 'IA generativa', 'Produto'],
    title: 'Value AI Studio',
    description:
      'Pipeline completo de anúncios: upload, visão computacional, atributos, textos e criativos, com edição encadeada por chat, variações de cena e créditos integrados ao checkout.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI', 'Claude', 'fal.ai', 'Eduzz'],
    image: 'assets/gen/project-ai-studio.jpg',
    link: { href: 'https://www.valueaistudio.com/assinar', text: 'Conhecer produto' },
  },
  {
    number: '04',
    labels: ['Plataforma interna', 'CRM', 'Operação'],
    title: 'Plataforma interna e automações',
    description:
      'Monorepo interno com autenticação segura, serviços em Docker Compose, acesso privado por Tailscale, CRM/CS integrado e classificação automática de conversas.',
    tech: ['Turborepo', 'pnpm', 'NextAuth v5', 'PostgreSQL', 'Redis', 'n8n', 'Tailscale'],
    image: 'assets/gen/project-plataforma.jpg',
    link: null,
  },
  {
    number: '05',
    labels: ['Autoral', 'Marketplace', 'Web tools'],
    title: 'XY Works',
    description:
      'Marca autoral de automação, CRM personalizado, integrações, dashboards e produtos digitais, com ferramentas publicadas para marketplaces.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'HTML/CSS/JS', 'Vercel', 'n8n'],
    image: 'assets/gen/project-xyworks.jpg',
    link: { href: 'https://iuxyog.github.io/xy-tools/', text: 'Abrir ferramenta' },
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Entender',
    description: 'Contexto, usuário, regra de negócio e critério de sucesso.',
  },
  {
    number: '02',
    title: 'Construir',
    description: 'Arquitetura, banco, backend e interface com entregas incrementais.',
  },
  {
    number: '03',
    title: 'Operar',
    description: 'Deploy, logs, tratamento de falhas, rollback e evolução.',
  },
]
