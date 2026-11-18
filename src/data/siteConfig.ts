import heroCacambaImg from '../assets/cacambas/hero_cacamba.webp';
import modelo3mImg from '../assets/cacambas/modelo_3m.webp';
import modelo4mImg from '../assets/cacambas/modelo_4m.webp';
import modelo5mImg from '../assets/cacambas/modelo_5m.webp';
import galeria01Img from '../assets/cacambas/galeria_01.webp';
import galeria02Img from '../assets/cacambas/galeria_02.webp';
import galeria03Img from '../assets/cacambas/galeria_03.webp';
import galeria04Img from '../assets/cacambas/galeria_04.webp';
import galeria05Img from '../assets/cacambas/galeria_05.webp';
import galeria06Img from '../assets/cacambas/galeria_06.webp';
import descarteLegalImg from '../assets/cacambas/descarte_legal.webp';

export interface AssetImageMeta {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
}

export const ASSET_IMAGES = {
  hero: {
    src: heroCacambaImg,
    width: 900,
    height: 900,
    alt: 'Caçamba estacionária amarela de entulho posicionada em obra urbana',
  },
  descarteLegal: {
    src: descarteLegalImg,
    width: 960,
    height: 536,
    alt: 'Área de triagem e destinação de resíduos da construção civil',
  },
} as const;

export const GALLERY_IMAGES: AssetImageMeta[] = [
  {
    src: galeria01Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba amarela utilizada em canteiro de construção civil',
    title: 'Canteiro de Construção',
  },
  {
    src: galeria02Img,
    width: 800,
    height: 800,
    alt: 'Caçamba estacionária amarela em reforma urbana',
    title: 'Reforma Comercial e Urbana',
  },
  {
    src: galeria03Img,
    width: 800,
    height: 800,
    alt: 'Caçamba amarela posicionada em frente a residência em reforma',
    title: 'Coleta de Entulho de Obra',
  },
  {
    src: galeria04Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba amarela estacionada junto ao meio-fio em rua residencial',
    title: 'Atendimento em Bairros',
  },
  {
    src: galeria05Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba estacionária posicionada junto à calçada em área urbana',
    title: 'Posicionamento em Via Pública',
  },
  {
    src: galeria06Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba carregada com restos de concreto e alvenaria',
    title: 'Resíduos de Alvenaria e Concreto',
  },
];

export const COMPANY_INFO = {
  brandName: 'Caçambas Brasil',
  legalName: 'MS CACAMBAS LTDA',
  cnpj: '60.133.180/0001-01',
  domain: 'https://cacambasbrasilentulho.com/',
  email: 'contato.alugacacambas@gmail.com',
  phoneRaw: '553190184724',
  phoneDisplay: '(31) 9018-4724',
  phoneInternational: '+55 (31) 9018-4724',
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
  capacityGuidance: string;
  idealFor: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  whatsappMessage: string;
}

export const DUMPSTER_MODELS: DumpsterModel[] = [
  {
    id: '3m3',
    volume: '3m³',
    title: 'Caçamba 3m³ (Compacta)',
    subtitle: 'Indicada para pequenas reformas e espaços reduzidos',
    dimensions: 'Aprox. 2,20m × 1,50m × 0,95m',
    capacityGuidance: 'Volume de 3m³ · Confirme limites de peso e carga com a central',
    idealFor:
      'Adequada para reformas de banheiros, cozinhas, troca de pisos, pequenos reparos e locais com garagem ou recuo mais estreito.',
    imageSrc: modelo3mImg,
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: 'Exemplo ilustrativo de caçamba estacionária amarela de 3m³ em reforma residencial',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de consultar disponibilidade e orçamento para caçamba de 3m³. Minha cidade e bairro são:',
  },
  {
    id: '4m3',
    volume: '4m³',
    title: 'Caçamba 4m³ (Padrão)',
    subtitle: 'Indicada para reformas residenciais e obras de médio porte',
    dimensions: 'Aprox. 2,50m × 1,60m × 1,10m',
    capacityGuidance: 'Volume de 4m³ · Confirme limites de peso e carga com a central',
    idealFor:
      'Indicada para reformas de casas, apartamentos, salas comerciais e retirada de entulho de alvenaria, argamassa e restos de construção.',
    imageSrc: modelo4mImg,
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: 'Exemplo ilustrativo de caçamba estacionária amarela de 4m³ com entulho de alvenaria',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de consultar disponibilidade e orçamento para caçamba de 4m³. Minha cidade e bairro são:',
  },
  {
    id: '5m3',
    volume: '5m³',
    title: 'Caçamba 5m³ (Grande Porte)',
    subtitle: 'Maior volume para obras, demolições e empresas',
    dimensions: 'Aprox. 2,70m × 1,65m × 1,25m',
    capacityGuidance: 'Volume de 5m³ · Confirme limites de peso e carga com a central',
    idealFor:
      'Indicada para construções completas, grandes reformas comerciais, condomínios, demolições e descarte mais volumoso de resíduos permitidos.',
    imageSrc: modelo5mImg,
    imageWidth: 800,
    imageHeight: 1000,
    imageAlt: 'Exemplo ilustrativo de caçamba estacionária amarela de 5m³ em canteiro de obra',
    whatsappMessage:
      'Olá, Caçambas Brasil! Gostaria de consultar disponibilidade e orçamento para caçamba de 5m³. Minha cidade e bairro são:',
  },
];

export const WASTE_PERMITTED = [
  {
    category: 'Alvenaria e Concreto',
    detail: 'Restos de tijolos, blocos, argamassa, concreto, cerâmica, azulejos e telhas.',
  },
  {
    category: 'Terra e Pedras',
    detail: 'Terra limpa de escavação, areia, brita e cascalho sem contaminação (confirme peso com a central).',
  },
  {
    category: 'Madeiras de Obra',
    detail: 'Caibros, tábuas, portas, batentes e pallets, conforme orientação prévia da central.',
  },
  {
    category: 'Metais e Plásticos de Obra',
    detail: 'Sucata de ferro, vergalhões, tubulações de PVC e embalagens de construção vazias e secas.',
  },
];

export const WASTE_PROHIBITED = [
  {
    category: 'Lixo Orgânico e Doméstico',
    detail: 'Restos de alimentos, lixo residencial comum e resíduos sanitários.',
  },
  {
    category: 'Resíduos Perigosos e Químicos',
    detail: 'Tintas líquidas, solventes, óleos, baterias, amianto e materiais inflamáveis.',
  },
  {
    category: 'Resíduos Hospitalares e Pneus',
    detail: 'Lixo infectante, seringas, medicamentos, pneus e lixo eletrônico.',
  },
  {
    category: 'Gesso Misturado sem Aviso',
    detail: 'Placas de drywall e gesso podem exigir caçamba exclusiva ou regras específicas; consulte a central antes do descarte.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01.',
    title: 'Contato pelo WhatsApp',
    description:
      'Envie sua cidade, bairro e, se já souber, o tipo de resíduo. Se não souber o tamanho ideal, nossa central orienta na escolha.',
  },
  {
    number: '02.',
    title: 'Consulta com Parceiros Locais',
    description:
      'Nossa central verifica disponibilidade na sua região e informa valor, prazo de permanência e condições de entrega e documentação aplicável.',
  },
  {
    number: '03.',
    title: 'Entrega Combinada na Obra',
    description:
      'Após a confirmação do pedido, o parceiro realiza a entrega no endereço informado, em área interna ou local permitido conforme regras municipais.',
  },
  {
    number: '04.',
    title: 'Retirada e Destinação',
    description:
      'No prazo combinado ou mediante solicitação de troca/retirada com a central, a caçamba é recolhida pelo parceiro para destinação conforme normas locais.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Vocês atendem minha cidade?',
    answer:
      'A Caçambas Brasil trabalha com parceiros em diversas regiões do Brasil. Informe cidade e bairro pelo WhatsApp para consultar disponibilidade, prazo e valor.',
  },
  {
    question: 'Como é calculado o preço da locação de caçamba?',
    answer:
      'O valor depende da cidade e bairro de entrega, do volume da caçamba (3m³, 4m³ ou 5m³), do tipo de resíduo a ser descartado e das condições do parceiro local. Consulte preço e disponibilidade diretamente pelo WhatsApp.',
  },
  {
    question: 'Não sei qual tamanho escolher (3m³, 4m³ ou 5m³). O que faço?',
    answer:
      'Não precisa escolher sozinho. Chame nossa central no WhatsApp informando cidade, bairro e o tipo de reforma ou obra para receber orientação sobre o tamanho mais adequado.',
  },
  {
    question: 'Como funciona a emissão de Nota Fiscal e documentos de destinação (CTR/MTR)?',
    answer:
      'A emissão de Nota Fiscal e de comprovantes como CTR ou MTR (quando exigidos pela legislação municipal) é confirmada previamente pela central junto ao parceiro responsável pelo atendimento na sua cidade.',
  },
  {
    question: 'Posso colocar a caçamba na rua ou dentro do imóvel?',
    answer:
      'Depende do espaço de acesso para o caminhão e da legislação municipal de trânsito da sua cidade. Informe o local pretendido à central antes da entrega para confirmar se há necessidade de autorização da prefeitura ou restrição de vaga.',
  },
  {
    question: 'Até qual limite posso encher a caçamba?',
    answer:
      'Por segurança viária e normas de transporte, o resíduo não deve ultrapassar a borda superior da caçamba. Para materiais pesados como terra ou concreto, confirme também o limite de peso com a central.',
  },
];
