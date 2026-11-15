import heroTruckImg from '../assets/images/hero_cacamba_truck_1794786146775.jpg';
import cacamba3mImg from '../assets/images/cacamba_3m_compact_1794786147294.jpg';
import cacamba5mImg from '../assets/images/cacamba_5m_obra_1794786147686.jpg';
import descarteAttImg from '../assets/images/descarte_sustentavel_att_1794786148098.jpg';

export const ASSET_IMAGES = {
  heroTruck: heroTruckImg,
  cacamba3m: cacamba3mImg,
  cacamba5m: cacamba5mImg,
  descarteAtt: descarteAttImg,
} as const;

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
    imageSrc: cacamba3mImg,
    imageAlt: 'Caçamba estacionária amarela de 3m³ posicionada em área residencial limpa',
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
    imageSrc: heroTruckImg,
    imageAlt: 'Caminhão poliguindaste posicionando caçamba estacionária padrão amarela em frente à obra',
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
    imageSrc: cacamba5mImg,
    imageAlt: 'Caçamba estacionária grande porte de 5m³ ao lado de canteiro de obra comercial organizado',
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
