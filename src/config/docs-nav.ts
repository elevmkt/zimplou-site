export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

export const docsNav: DocsNavSection[] = [
  {
    title: "Começando",
    items: [
      { title: "Bem-vindo ao Zimplou", href: "/support/comecando" },
      { title: "Abrindo o app pela primeira vez", href: "/support/comecando/primeira-vez" },
      { title: "Criando sua conta", href: "/support/comecando/criando-conta" },
      { title: "Entrando na sua conta", href: "/support/comecando/entrando-conta" },
    ],
  },
  {
    title: "Configuração Inicial",
    items: [
      { title: "Visão geral do assistente", href: "/support/configuracao-inicial" },
      { title: "1. Escolhendo seu plano", href: "/support/configuracao-inicial/escolhendo-plano" },
      { title: "2. Endereço do negócio", href: "/support/configuracao-inicial/endereco" },
      { title: "3. Informações do negócio", href: "/support/configuracao-inicial/informacoes-negocio" },
      { title: "4. Configurando a IA", href: "/support/configuracao-inicial/configurando-ia" },
      { title: "5. Testando a IA", href: "/support/configuracao-inicial/testando-ia" },
    ],
  },
  {
    title: "Conectando Integrações",
    items: [
      { title: "Visão geral", href: "/support/integracoes" },
      { title: "Conectando o Stripe", href: "/support/integracoes/stripe" },
      { title: "Conectando o Google Agenda", href: "/support/integracoes/google-agenda" },
      { title: "Conectando o WhatsApp", href: "/support/integracoes/whatsapp" },
    ],
  },
  {
    title: "Usando o Dashboard",
    items: [
      { title: "Navegando pelo app", href: "/support/dashboard" },
      { title: "Agenda e agendamentos", href: "/support/dashboard/agenda" },
      { title: "Finanças e pagamentos", href: "/support/dashboard/financas" },
      { title: "Métricas e relatórios", href: "/support/dashboard/metricas" },
    ],
  },
  {
    title: "Gerenciando seu Negócio",
    items: [
      { title: "Visão geral", href: "/support/negocio" },
      { title: "Informações e horários", href: "/support/negocio/informacoes" },
      { title: "Ofertas, serviços e espaços", href: "/support/negocio/ofertas" },
    ],
  },
  {
    title: "Configurando a IA",
    items: [
      { title: "Visão geral", href: "/support/ia" },
      { title: "Personalidade e instruções", href: "/support/ia/personalidade" },
      { title: "Testando a IA", href: "/support/ia/preview" },
    ],
  },
  {
    title: "Conta e Configurações",
    items: [
      { title: "Visão geral", href: "/support/conta" },
      { title: "Seu perfil", href: "/support/conta/perfil" },
      { title: "Assinatura e cobrança", href: "/support/conta/assinatura" },
      { title: "Gerenciando integrações", href: "/support/conta/integracoes" },
    ],
  },
  {
    title: "Solução de Problemas",
    items: [
      { title: "Problemas comuns", href: "/support/problemas" },
      { title: "Problemas com WhatsApp", href: "/support/problemas/whatsapp" },
      { title: "Problemas com agendamentos", href: "/support/problemas/agendamentos" },
      { title: "Problemas com pagamentos", href: "/support/problemas/pagamentos" },
      { title: "Problemas com conta", href: "/support/problemas/conta" },
    ],
  },
];
