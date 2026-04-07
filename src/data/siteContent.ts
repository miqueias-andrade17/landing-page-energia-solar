export type Benefit = {
  title: string;
  description: string;
  icon: 'bolt' | 'shield' | 'chart' | 'check' | 'sun' | 'phone';
};

export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteContent = {
  brand: string;
  niche: string;
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageCardTitle: string;
    imageCardText: string;
  };
  benefits: Benefit[];
  about: {
    title: string;
    description: string;
    stats: Stat[];
  };
  services: Service[];
  differentiators: Benefit[];
  testimonials: Testimonial[];
  finalCta: {
    title: string;
    description: string;
    button: string;
  };
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    address: string;
  };
};

export const siteContent: SiteContent = {
  brand: 'Solar Prime',
  niche: 'Energia solar residencial e comercial',
  hero: {
    badge: 'Projeto pronto para captar leads qualificados',
    title: 'Reduza sua conta de luz com uma solução solar feita para gerar',
    highlight: 'economia real todos os meses.',
    description:
      'Atendemos residências e empresas com projetos sob medida, instalação segura e acompanhamento completo para você investir com confiança.',
    primaryCta: 'Solicitar orçamento',
    secondaryCta: 'Falar no WhatsApp',
    imageCardTitle: 'Economia previsível',
    imageCardText: 'Simulação rápida, projeto personalizado e suporte do início ao pós-venda.',
  },
  benefits: [
    {
      title: 'Economia imediata e contínua',
      description: 'Diminua os gastos com energia e tenha retorno do investimento com planejamento claro.',
      icon: 'chart',
    },
    {
      title: 'Instalação segura e homologada',
      description: 'Equipe especializada, materiais certificados e todo o processo acompanhado por profissionais.',
      icon: 'shield',
    },
    {
      title: 'Valorização do imóvel',
      description: 'Um sistema solar bem projetado agrega valor e moderniza a percepção do seu patrimônio.',
      icon: 'sun',
    },
    {
      title: 'Atendimento consultivo',
      description: 'Você recebe orientação do primeiro contato até a ativação do sistema e suporte posterior.',
      icon: 'phone',
    },
  ],
  about: {
    title: 'Confiança para investir com segurança',
    description:
      'A Solar Prime nasceu para transformar energia em resultado. Trabalhamos com foco em transparência, atendimento próximo e execução profissional para que cada cliente tenha clareza sobre economia, prazo e performance do projeto.',
    stats: [
      { value: '+250', label: 'projetos entregues' },
      { value: '98%', label: 'clientes satisfeitos' },
      { value: '5 anos', label: 'de experiência' },
    ],
  },
  services: [
    {
      title: 'Projeto solar residencial',
      description: 'Dimensionamento ideal para reduzir sua conta e aumentar a autonomia energética da casa.',
      points: ['Análise de consumo', 'Projeto personalizado', 'Instalação completa'],
    },
    {
      title: 'Soluções para empresas',
      description: 'Mais controle financeiro e previsibilidade para negócios que precisam reduzir custos fixos.',
      points: ['Estudo de viabilidade', 'Payback estimado', 'Execução com cronograma'],
    },
    {
      title: 'Consultoria e homologação',
      description: 'Acompanhamos documentação, aprovação e ativação para evitar burocracia e atrasos.',
      points: ['Suporte técnico', 'Homologação junto à concessionária', 'Pós-venda'],
    },
  ],
  differentiators: [
    {
      title: 'Simulação transparente',
      description: 'Apresentamos números claros para você entender investimento, economia e retorno.',
      icon: 'check',
    },
    {
      title: 'Equipe especializada',
      description: 'Profissionais treinados para entregar qualidade, organização e segurança em todas as etapas.',
      icon: 'bolt',
    },
    {
      title: 'Atendimento ágil',
      description: 'Resposta rápida para orçamento, visita técnica e suporte comercial.',
      icon: 'phone',
    },
    {
      title: 'Foco em resultado',
      description: 'Cada projeto é pensado para unir performance, durabilidade e boa experiência do cliente.',
      icon: 'chart',
    },
  ],
  testimonials: [
    {
      name: 'Mariana Souza',
      role: 'Cliente residencial',
      text: 'Desde o primeiro atendimento senti segurança. O projeto ficou claro, a instalação foi organizada e a economia apareceu já nos primeiros meses.',
    },
    {
      name: 'Carlos Menezes',
      role: 'Proprietário de empresa',
      text: 'Precisávamos reduzir custo fixo sem complicação. A Solar Prime conduziu tudo com profissionalismo e o retorno do investimento ficou muito bem explicado.',
    },
    {
      name: 'Fernanda Lima',
      role: 'Síndica de condomínio',
      text: 'O time foi objetivo, técnico e próximo durante todo o processo. A percepção de qualidade foi excelente do início ao fim.',
    },
  ],
  finalCta: {
    title: 'Receba uma simulação personalizada para o seu consumo',
    description:
      'Descubra quanto você pode economizar e tenha uma proposta clara, profissional e sem compromisso.',
    button: 'Quero meu orçamento agora',
  },
  contact: {
    whatsapp: '5511999999999',
    phone: '(11) 99999-9999',
    email: 'contato@solarprime.com.br',
    address: 'Atendimento em São Paulo e região',
  },
};
