/**
 * Configuração de links e dados de bio (Linktree) para cada estado do Nexa Brasil.
 * 
 * COMO EDITAR / ADICIONAR CONTEÚDO PARA UM ESTADO:
 * 1. Localize a sigla do estado abaixo (ex: 'SP', 'MG', 'RS') ou crie uma nova chave.
 * 2. Preencha 'tagline', 'bioText', 'instagram', 'whatsapp', 'email' e a lista de 'links'.
 * 3. Se um estado não tiver links cadastrados, ele herdará automaticamente os links padrão do Nexa Brasil ('DEFAULT_STATE_CONFIG').
 * 
 * ESTRUTURA DE CADA LINK:
 * - title: Texto principal do botão (obrigatório)
 * - url: Link de destino (obrigatório, ex: 'https://...', 'mailto:...', '/')
 * - subtitle: Texto explicativo menor logo abaixo do título (opcional)
 * - icon: 'star' | 'whatsapp' | 'doc' | 'event' | 'link' (opcional)
 * - featured: true | false (se true, ganha destaque com gradiente da marca)
 * - badge: Etiqueta curta no canto direito (ex: 'Novo', 'Aberto')
 */

// Links padrão utilizados caso o estado ainda não possua links específicos cadastrados
export const DEFAULT_STATE_CONFIG = {
  tagline: 'Comunidade de Jovens Empreendedores e Líderes',
  bioText: 'Conectando, desenvolvendo e inspirando os jovens alumni da Junior Achievement.',
  instagram: 'https://instagram.com/nexabrasil',
  whatsapp: 'https://wa.me/',
  linkedin: 'https://linkedin.com/company/nexabrasil',
  email: 'contato@nexabrasil.org.br',
  links: [
    {
      title: 'Quero Fazer Parte do Nexa',
      subtitle: 'Inscreva-se na nossa rede e receba oportunidades',
      url: 'https://forms.gle/exemplo-inscricao-nexa',
      icon: 'star',
      featured: true,
      badge: 'Faça Parte'
    },
    {
      title: 'Grupo Oficial no WhatsApp',
      subtitle: 'Comunidade local de avisos e novidades',
      url: 'https://chat.whatsapp.com/exemplo-comunidade',
      icon: 'whatsapp'
    },
    {
      title: 'Conheça o Portal Nexa Brasil',
      subtitle: 'Conheça nossos programas e atuação nacional',
      url: '/',
      icon: 'link'
    },
    {
      title: 'Calendário de Eventos & Encontros',
      subtitle: 'Confira as próximas oficinas e encontros da rede',
      url: '#eventos',
      icon: 'event'
    }
  ]
};

// Configurações personalizadas por estado (adicione ou edite conforme necessário)
export const STATES_CONFIG = {
  'SP': {
    tagline: 'Núcleo de Jovens Empreendedores de São Paulo',
    bioText: 'A maior comunidade jovem alumni JA de SP. Desenvolvimento, conexões e projetos de impacto.',
    instagram: 'https://instagram.com/nexasp',
    whatsapp: 'https://chat.whatsapp.com/exemplo-nexa-sp',
    email: 'nexa.sp@jabrasil.org.br',
    links: [
      {
        title: 'Inscrições Abertas — Processo Seletivo 2025',
        subtitle: 'Venha liderar iniciativas e comissões no Nexa SP',
        url: 'https://forms.gle/exemplo-processo-sp',
        icon: 'star',
        featured: true,
        badge: 'Aberto'
      },
      {
        title: 'Comunidade Nexa SP no WhatsApp',
        subtitle: 'Conexão direta com membros e diretoria',
        url: 'https://chat.whatsapp.com/exemplo-nexa-sp',
        icon: 'whatsapp'
      },
      {
        title: 'E-book: Guia de Carreira & Protagonismo Jovem',
        subtitle: 'Material exclusivo produzido pelos alumni Nexa SP',
        url: 'https://drive.google.com/exemplo-ebook',
        icon: 'doc'
      },
      {
        title: 'Portal Nacional Nexa Brasil',
        subtitle: 'Veja o mapa completo e núcleos pelo país',
        url: '/',
        icon: 'link'
      }
    ]
  },

  'MG': {
    tagline: 'Núcleo de Jovens Empreendedores de Minas Gerais',
    bioText: 'Transformando o ecossistema jovem mineiro com ousadia, energia e empatia.',
    instagram: 'https://instagram.com/nexamg',
    whatsapp: 'https://chat.whatsapp.com/exemplo-nexa-mg',
    email: 'nexa.mg@jabrasil.org.br',
    links: [
      {
        title: 'Seja um Associado Nexa MG',
        subtitle: 'Formulário de boas-vindas para novos membros',
        url: 'https://forms.gle/exemplo-nexa-mg',
        icon: 'star',
        featured: true,
        badge: 'Inscreva-se'
      },
      {
        title: 'Grupo de Avisos no WhatsApp',
        subtitle: 'Fique por dentro das oportunidades e encontros em BH e interior',
        url: 'https://chat.whatsapp.com/exemplo-nexa-mg',
        icon: 'whatsapp'
      },
      {
        title: 'Site Oficial Nexa Brasil',
        subtitle: 'Voltar para o portal nacional',
        url: '/',
        icon: 'link'
      }
    ]
  },

  'RS': {
    tagline: 'Núcleo de Jovens Empreendedores do Rio Grande do Sul',
    bioText: 'Conectando e impulsionando a juventude gaúcha alumni da Junior Achievement RS.',
    instagram: 'https://instagram.com/nexars',
    whatsapp: 'https://chat.whatsapp.com/exemplo-nexa-rs',
    email: 'nexa.rs@jabrasil.org.br',
    links: [
      {
        title: 'Faça Parte da Nossa Rede no RS',
        subtitle: 'Preencha o formulário e receba nosso contato',
        url: 'https://forms.gle/exemplo-nexa-rs',
        icon: 'star',
        featured: true
      },
      {
        title: 'Grupo Oficial no WhatsApp',
        subtitle: 'Interações e comunicados do Nexa RS',
        url: 'https://chat.whatsapp.com/exemplo-nexa-rs',
        icon: 'whatsapp'
      },
      {
        title: 'Portal Nexa Brasil',
        url: '/',
        icon: 'link'
      }
    ]
  },

  'RJ': {
    tagline: 'Núcleo de Jovens Empreendedores do Rio de Janeiro',
    bioText: 'Energia jovem conectada ao ecossistema de inovação e liderança carioca.',
    instagram: 'https://instagram.com/nexarj',
    email: 'nexa.rj@jabrasil.org.br',
    links: [
      {
        title: 'Formulário de Entrada — Novos Membros',
        subtitle: 'Junte-se à rede Nexa no Rio de Janeiro',
        url: 'https://forms.gle/exemplo-nexa-rj',
        icon: 'star',
        featured: true
      },
      {
        title: 'Comunidade WhatsApp Nexa RJ',
        url: 'https://chat.whatsapp.com/exemplo-nexa-rj',
        icon: 'whatsapp'
      },
      {
        title: 'Portal Nexa Brasil',
        url: '/',
        icon: 'link'
      }
    ]
  },

  'BA': {
    tagline: 'Núcleo de Jovens Empreendedores da Bahia',
    bioText: 'Potencializando talentos e liderança jovem por toda a Bahia.',
    instagram: 'https://instagram.com/nexabahia',
    email: 'nexa.ba@jabrasil.org.br',
    links: [
      {
        title: 'Quero Ser Membro do Nexa Bahia',
        url: 'https://forms.gle/exemplo-nexa-ba',
        icon: 'star',
        featured: true
      },
      {
        title: 'Grupo de Networking no WhatsApp',
        url: 'https://chat.whatsapp.com/exemplo-nexa-ba',
        icon: 'whatsapp'
      },
      {
        title: 'Portal Nacional Nexa Brasil',
        url: '/',
        icon: 'link'
      }
    ]
  }
};
