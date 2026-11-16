import descarteAttImg from '../assets/images/descarte_sustentavel_att_1794786148098.jpg';

export const ASSET_IMAGES = {
  heroTruck: '/assets/aistudio/Ca_amba_Amarela_em_Obra_Urbana-5_c5e764fe.png',
  cacamba3m: '/assets/aistudio/Ca_amba_Amarela_em_Obra_Urbana-1_41d7bf50.png',
  cacamba4m: '/assets/aistudio/Ca_amba_Amarela_Cheia_de_Entulho-4_b599eb84.png',
  cacamba5m: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_47-1_b11e6073.png',
  descarteAtt: descarteAttImg,
} as const;

export const GALLERY_IMAGES = [
  {
    src: '/assets/aistudio/Ca_amba_Amarela_em_Obra_Urbana-5_c5e764fe.png',
    alt: 'Caçamba amarela com faixa refletiva posicionada em obra urbana residencial',
    title: 'Obra Residencial Urbana',
  },
  {
    src: '/assets/aistudio/Ca_amba_Amarela_Cheia_de_Entulho-4_b599eb84.png',
    alt: 'Caçamba estacionária amarela carregada com entulho de alvenaria e tijolos',
    title: 'Retirada de Alvenaria',
  },
  {
    src: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_48-4_113a6f15.png',
    alt: 'Caçamba amarela com sinalização refletiva em canteiro de construção',
    title: 'Canteiro de Construção',
  },
  {
    src: '/assets/aistudio/Ca_amba_Amarela_em_Obra_Urbana-1_41d7bf50.png',
    alt: 'Caçamba estacionária amarela estacionada junto ao meio-fio em reforma residencial',
    title: 'Reforma em Casa e Garagem',
  },
  {
    src: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_47-1_b11e6073.png',
    alt: 'Caçamba amarela de grande porte em obra de edifício residencial',
    title: 'Obra de Edifício',
  },
  {
    src: '/assets/aistudio/Ca_amba_amarela_cheia_de_entulho-2_40cddffc.png',
    alt: 'Caçamba amarela atendendo reforma comercial em rua urbana',
    title: 'Reforma Comercial',
  },
  {
    src: '/assets/aistudio/Ca_amba_Amarela_em_Obra_Urbana-3_27dbb66c.png',
    alt: 'Caçamba estacionária amarela posicionada em frente à obra residencial',
    title: 'Coleta de Entulho Limpo',
  },
  {
    src: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_49-5_d539148a.png',
    alt: 'Caçamba amarela estacionada em rua arborizada de bairro residencial',
    title: 'Atendimento em Bairros',
  },
  {
    src: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_47-2_8eca7584.png',
    alt: 'Caçamba estacionária posicionada no meio-fio em área urbana',
    title: 'Posicionamento em Via Pública',
  },
  {
    src: '/assets/aistudio/Imagem_do_ChatGPT_1_de_nov._de_2026__16_44_48-3_87ada7e7.png',
    alt: 'Caçamba carregada com restos de concreto e alvenaria para descarte legal',
    title: 'Descarte de Concreto e Obra',
  },
] as const;

export const COMPANY_INFO = {
  brandName: 'Caçambas Brasil',
  legalName: 'MS CACAMBAS LTDA',
  cnpj: '60.133.180/0001-01',
  email: 'contato.alugacacambas@gmail.com',
  phoneRaw: '553190184724',
  phoneDisplay: '(31) 9018-4724',
  phoneInternational: '+55 (31) 9018-4724',
  hoursWeek: 'Segunda a Sexta: 07h00 às 18h00',
  hoursSaturday: 'Sábado: 07h00 às 13h00',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export interface DumpsterModel {
  id: string;
  volume: string;
  title: string;
  subtitle: string;
  dimensions: string;
  capacityBags: string;
  idealFor: string;
  imageSrc: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const DUMPSTER_MODELS: DumpsterModel[] = [
  {
    id: '3m3',
    volume: '3m³',
    title: 'Caçamba Compacta 3m³',
    subtitle: 'Ideal para pequenas reformas e espaços reduzidos',
    dimensions: '2,20m × 1,50m × 0,95m',
    capacityBags: 'Equivalente a aprox. 55 sacos de 50kg',
    idealFor:
      'Indicada para reformas de banheiros, cozinhas, troca de pisos, demolições pontuais e locais com garagem ou recuo estreito.',
    imageSrc: ASSET_IMAGES.cacamba3m,
    imageAlt: 'Caçamba estacionária amarela de 3m³ estacionada em frente à reforma residencial',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de solicitar um orçamento para locação de uma caçamba de 3m³ (Compacta).',
  },
  {
    id: '4m3',
    volume: '4m³',
    title: 'Caçamba Padrão 4m³',
    subtitle: 'O modelo mais utilizado em reformas residenciais',
    dimensions: '2,50m × 1,60m × 1,10m',
    capacityBags: 'Equivalente a aprox. 75 sacos de 50kg',
    idealFor:
      'Indicada para reformas completas de apartamentos, casas, retirada de entulho de alvenaria, concreto e restos de construção civil.',
    imageSrc: ASSET_IMAGES.cacamba4m,
    imageAlt: 'Caçamba estacionária amarela padrão de 4m³ com entulho de obra e alvenaria',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de solicitar um orçamento para locação de uma caçamba de 4m³ (Padrão).',
  },
  {
    id: '5m3',
    volume: '5m³',
    title: 'Caçamba Grande Porte 5m³',
    subtitle: 'Máxima capacidade para obras, demolições e empresas',
    dimensions: '2,70m × 1,65m × 1,25m',
    capacityBags: 'Equivalente a aprox. 95 sacos de 50kg',
    idealFor:
      'Indicada para construções do zero, grandes reformas comerciais, condomínios, limpeza de terrenos e descarte volumoso de madeira.',
    imageSrc: ASSET_IMAGES.cacamba5m,
    imageAlt: 'Caçamba estacionária amarela de 5m³ atendendo obra de edifício em construção',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de solicitar um orçamento para locação de uma caçamba de 5m³ (Grande Porte).',
  },
];

export const WASTE_PERMITTED = [
  {
    category: 'Alvenaria e Concreto',
    detail: 'Restos de tijolos, blocos, argamassa, concreto, cerâmica, azulejos e telhas.',
  },
  {
    category: 'Terra e Pedras',
    detail: 'Terra limpa proveniente de escavação, areia, brita e cascalho sem contaminação.',
  },
  {
    category: 'Madeiras de Obra',
    detail: 'Caibros, tábuas, portas, batentes e pallets (preferencialmente separados conforme orientação).',
  },
  {
    category: 'Metais e Plásticos de Construção',
    detail: 'Sucata de ferro, vergalhões, tubulações de PVC e embalagens vazias secas.',
  },
];

export const WASTE_PROHIBITED = [
  {
    category: 'Lixo Orgânico e Doméstico',
    detail: 'Restos de alimentos, lixo residencial comum e resíduos sanitários.',
  },
  {
    category: 'Resíduos Perigosos e Químicos',
    detail: 'Tintas líquidas, solventes, óleos, baterias, amianto (telha de fibrocimento antiga) e inflamáveis.',
  },
  {
    category: 'Resíduos Hospitalares e Pneus',
    detail: 'Lixo infectante, seringas, medicamentos, pneus inservíveis e lixo eletrônico.',
  },
  {
    category: 'Gesso Misturado sem Aviso',
    detail: 'Placas de drywall e gesso exigem caçamba exclusiva ou triagem prévia; consulte no WhatsApp antes do descarte.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01.',
    title: 'Cotação Imediata no WhatsApp',
    description:
      'Informe seu bairro, o tipo de resíduo e o volume estimado. Nossa equipe confirma disponibilidade, valor fechado e horário de entrega na hora.',
  },
  {
    number: '02.',
    title: 'Entrega e Posicionamento Seguro',
    description:
      'O caminhão poliguindaste posiciona a caçamba sinalizada com faixas refletivas no recuo da obra ou em local permitido na via pública.',
  },
  {
    number: '03.',
    title: 'Prazo Transparente na Obra',
    description:
      'Você utiliza a caçamba pelo período combinado em contrato (geralmente de 3 a 7 dias úteis conforme região e tipo de resíduo), respeitando o limite da borda.',
  },
  {
    number: '04.',
    title: 'Retirada, CTR e Destinação Legal',
    description:
      'Ao finalizar ou solicitar a troca, recolhemos a caçamba e encaminhamos os resíduos exclusivamente para ATTs e aterros licenciados, emitindo CTR e Nota Fiscal.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o valor da locação de caçamba?',
    answer:
      'O preço varia de acordo com o tamanho da caçamba (3m³, 4m³ ou 5m³), o tipo de material descartado (entulho limpo, terra, madeira ou gesso) e o bairro de entrega. Envie seu CEP ou bairro no WhatsApp para receber o orçamento completo e sem taxas ocultas.',
  },
  {
    question: 'Qual o prazo que a caçamba pode ficar parada na obra?',
    answer:
      'O prazo padrão varia entre 3 e 7 dias corridos ou úteis, dependendo das normas do município e da área de atendimento. Caso precise de mais dias ou de troca antecipada por enchimento, basta avisar nossa central pelo WhatsApp.',
  },
  {
    question: 'A Caçambas Brasil emite Nota Fiscal e CTR?',
    answer:
      'Sim. A MS CACAMBAS LTDA (CNPJ 60.133.180/0001-01) emite Nota Fiscal de serviço para pessoas físicas, condomínios, construtoras e empresas, além do Controle de Transporte de Resíduos (CTR) comprovando a destinação ambiental correta.',
  },
  {
    question: 'Posso colocar a caçamba na rua ou dentro da garagem?',
    answer:
      'Sim, desde que o local tenha acesso livre para o caminhão poliguindaste (largura mínima aproximada de 3m e altura livre de fios/árvores). Em via pública, o posicionamento deve seguir a legislação de trânsito local (sem obstruir faixas de pedestres, hidrantes, esquinas ou vagas proibidas). Em áreas centrais com estacionamento rotativo, consulte regras da prefeitura.',
  },
  {
    question: 'Até qual altura posso encher a caçamba?',
    answer:
      'Por determinação de segurança viária e legislação de transporte de cargas, o material deve ser nivelado no máximo até a borda superior da caçamba. Caçambas com carga acima da borda não podem trafegar em via pública por risco de queda de detritos.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Aceitamos Pix, transferência bancária, cartão de débito/crédito e faturamento mediante análise cadastral para empresas e construtoras.',
  },
];
