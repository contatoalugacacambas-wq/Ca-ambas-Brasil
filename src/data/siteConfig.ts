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
    alt: 'Caçamba amarela de entulho posicionada para locação em obra',
  },
  descarteLegal: {
    src: '/assets/aistudio/Ca_ambas_Brasil__Chamou__Chegou__db3341fa.png',
    width: 1254,
    height: 1254,
    alt: 'Caminhão Caçambas Brasil Chamou, Chegou com caçamba amarela de entulho',
  },
} as const;

export const GALLERY_IMAGES: AssetImageMeta[] = [
  {
    src: galeria01Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba amarela para retirada de entulho em canteiro de construção',
    title: 'Obras e Construção Civil',
  },
  {
    src: galeria02Img,
    width: 800,
    height: 800,
    alt: 'Caçamba estacionária posicionada para reforma comercial e residencial',
    title: 'Reformas de Casas e Lojas',
  },
  {
    src: galeria03Img,
    width: 800,
    height: 800,
    alt: 'Caçamba amarela em frente a residência durante retirada de entulho',
    title: 'Entrega Direta na Sua Obra',
  },
  {
    src: galeria04Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba de entulho estacionada junto ao meio-fio em rua residencial',
    title: 'Atendimento em Bairros',
  },
  {
    src: galeria05Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba estacionária amarela posicionada em via urbana',
    title: 'Entrega Ágil no Local',
  },
  {
    src: galeria06Img,
    width: 800,
    height: 1000,
    alt: 'Caçamba carregada com entulho de concreto e alvenaria',
    title: 'Alvenaria, Concreto e Terra',
  },
];

export const COMPANY_INFO = {
  brandName: 'Caçambas Brasil',
  legalName: 'MS CACAMBAS LTDA',
  cnpj: '60.133.180/0001-01',
  domain: 'https://cacambasbrasilentulho.com/',
  email: 'contato.alugacacambas@gmail.com',
  phoneRaw: '553190184724',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export interface RentalPeriodOption {
  id: string;
  label: string;
  subtitle: string;
  whatsappMessage: string;
}

export const RENTAL_PERIODS: RentalPeriodOption[] = [
  {
    id: '1-dia',
    label: '1 Dia',
    subtitle: 'Ideal para limpeza rápida e descarte no mesmo dia',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba para entulho pelo período de 1 dia. Minha cidade e bairro:',
  },
  {
    id: '2-dias',
    label: '2 Dias',
    subtitle: 'Ótima opção para pequenas reformas de fim de semana',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba para entulho pelo período de 2 dias. Minha cidade e bairro:',
  },
  {
    id: '3-dias',
    label: '3 Dias',
    subtitle: 'Mais tempo para carregar sua caçamba com tranquilidade',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba para entulho pelo período de 3 dias. Minha cidade e bairro:',
  },
  {
    id: 'semanal',
    label: 'Semanal',
    subtitle: 'Para obras contínuas e reformas completas',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba para entulho (locação semanal). Minha cidade e bairro:',
  },
  {
    id: 'mensal',
    label: 'Mensal',
    subtitle: 'Planos para construtoras, empresas e grandes obras',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba para entulho (locação mensal). Minha cidade e bairro:',
  },
];

export interface DumpsterModel {
  id: string;
  volume: string;
  title: string;
  subtitle: string;
  dimensions: string;
  shortFit: string;
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
    subtitle: '3 metros cúbicos · Pequenas reformas',
    dimensions: 'Aprox. 2,20m × 1,50m × 0,95m',
    shortFit: 'Banheiro, cozinha, troca de piso',
    idealFor:
      'Perfeita para reformas pequenas de banheiro ou cozinha, reparos rápidos, quintais menores e locais com garagem ou vaga estreita.',
    imageSrc: modelo3mImg,
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: 'Caçamba amarela de 3m³ para locação em pequenas reformas',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 3m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '4m3',
    volume: '4m³',
    title: 'Caçamba 4m³ (Padrão)',
    subtitle: '4 metros cúbicos · Mais pedida para obras',
    dimensions: 'Aprox. 2,50m × 1,60m × 1,10m',
    shortFit: 'Reformas de casas, apartamentos e lojas',
    idealFor:
      'Tamanho padrão mais utilizado em reformas residenciais, apartamentos, salas comerciais e retirada de entulho de alvenaria e argamassa.',
    imageSrc: modelo4mImg,
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: 'Caçamba amarela padrão de 4m³ com entulho de construção',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 4m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '5m3',
    volume: '5m³',
    title: 'Caçamba 5m³ (Média/Grande)',
    subtitle: '5 metros cúbicos · Mais volume para sua obra',
    dimensions: 'Aprox. 2,70m × 1,65m × 1,25m',
    shortFit: 'Reformas amplas, construções e condomínios',
    idealFor:
      'Indicada para construções completas, ampliações, condomínios e reformas com maior volume de tijolos, concreto, telhas e madeiras.',
    imageSrc: modelo5mImg,
    imageWidth: 800,
    imageHeight: 1000,
    imageAlt: 'Caçamba amarela de 5m³ posicionada em obra urbana',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 5m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '6m3',
    volume: '6m³',
    title: 'Caçamba 6m³ (Reforçada)',
    subtitle: '6 metros cúbicos · Obras de médio porte',
    dimensions: 'Aprox. 3,00m × 1,65m × 1,25m',
    shortFit: 'Obras contínuas, sobrados e galpões',
    idealFor:
      'Ideal para quem precisa de mais espaço interno para descartar entulho, terra, madeira e restos de construção sem precisar trocar toda hora.',
    imageSrc: galeria01Img,
    imageWidth: 800,
    imageHeight: 1000,
    imageAlt: 'Caçamba amarela de 6m³ em canteiro de obra',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 6m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '7m3',
    volume: '7m³',
    title: 'Caçamba 7m³ (Grande Porte)',
    subtitle: '7 metros cúbicos · Demolições e obras maiores',
    dimensions: 'Aprox. 3,20m × 1,70m × 1,35m',
    shortFit: 'Demolições, lojas grandes e construções',
    idealFor:
      'Indicada para demolições, construção de casas inteiras, grandes reformas comerciais e limpeza pesada de terrenos.',
    imageSrc: galeria03Img,
    imageWidth: 800,
    imageHeight: 800,
    imageAlt: 'Caçamba amarela de 7m³ em frente a obra residencial',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 7m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '8m3',
    volume: '8m³',
    title: 'Caçamba 8m³ (Alta Capacidade)',
    subtitle: '8 metros cúbicos · Construtoras e empresas',
    dimensions: 'Aprox. 3,40m × 1,75m × 1,40m',
    shortFit: 'Construtoras, condomínios e alto volume',
    idealFor:
      'Excelente para canteiros de obra que geram bastante entulho misto, madeira, poda ou restos de reforma comercial.',
    imageSrc: galeria05Img,
    imageWidth: 800,
    imageHeight: 1000,
    imageAlt: 'Caçamba estacionária amarela de 8m³ para grande volume de entulho',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 8m³ para entulho. Minha cidade e bairro:',
  },
  {
    id: '10m3',
    volume: '10m³',
    title: 'Caçamba 10m³ (Mega Obra)',
    subtitle: '10 metros cúbicos · Máximo espaço disponível',
    dimensions: 'Aprox. 4,00m × 1,80m × 1,45m',
    shortFit: 'Grandes obras, indústrias e galpões',
    idealFor:
      'Nossa maior opção para grandes empreendimentos, indústrias, galpões logísticos e limpezas de grande porte.',
    imageSrc: galeria06Img,
    imageWidth: 800,
    imageHeight: 1000,
    imageAlt: 'Caçamba amarela de 10m³ com grande volume de entulho de construção',
    whatsappMessage:
      'Olá! Quero solicitar orçamento de caçamba de 10m³ para entulho. Minha cidade e bairro:',
  },
];

export const WASTE_PERMITTED = [
  {
    category: 'Entulho de Obra e Alvenaria',
    detail: 'Restos de tijolos, blocos, argamassa, concreto, cerâmica, pisos, azulejos e telhas.',
  },
  {
    category: 'Reformas e Demolições',
    detail: 'Quebra de paredes, contrapiso, reboco, reformas de casas, apartamentos e lojas.',
  },
  {
    category: 'Terra, Areia e Pedras',
    detail: 'Terra de escavação, areia, brita e cascalho provenientes de obras e terraplanagem.',
  },
  {
    category: 'Madeiras, Podas e Limpeza de Terreno',
    detail: 'Tábuas, caibros, móveis velhos, galhos de poda e limpeza geral de quintal ou galpão.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01.',
    title: 'Chamou no WhatsApp',
    description:
      'Clique no botão, informe sua cidade e bairro e escolha o tamanho (3m³ até 10m³) e o período: 1 dia, 2 dias, 3 dias, semanal ou mensal.',
  },
  {
    number: '02.',
    title: 'Atendimento Rápido na Hora',
    description:
      'Nossa equipe responde rapidinho no WhatsApp com o valor certinho e já confirma a entrega para o endereço da sua obra.',
  },
  {
    number: '03.',
    title: 'Chamou, Chegou em 1h a 2h',
    description:
      'Entrega rápida no local em até 1h a 2h conforme disponibilidade na região, deixando a caçamba posicionada para sua obra não parar.',
  },
  {
    number: '04.',
    title: 'Retirada ou Troca Sem Complicação',
    description:
      'Encheu ou terminou o seu período contratado? É só chamar no WhatsApp que fazemos a retirada ou troca da caçamba.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Quais tamanhos de caçamba vocês têm?',
    answer:
      'Atendemos locação de caçambas de 3m³ até 10m³ (3m³, 4m³, 5m³, 6m³, 7m³, 8m³ e 10m³). Se não souber quantos metros precisa para sua obra, nossa equipe orienta você na hora pelo WhatsApp.',
  },
  {
    question: 'Por quantos dias posso alugar a caçamba?',
    answer:
      'Temos vários períodos para atender sua obra: locação por 1 dia, 2 dias, 3 dias, semanal ou mensal. Escolha o período ideal no orçamento.',
  },
  {
    question: 'Em quanto tempo a caçamba chega no local?',
    answer:
      'Nosso foco é atendimento rápido: chamou, chegou! Fazemos entrega rápida no local em até 1h a 2h após a confirmação do pedido no WhatsApp, conforme disponibilidade na sua região.',
  },
  {
    question: 'Como faço para solicitar um orçamento agora?',
    answer:
      'Basta clicar em qualquer botão "Solicitar Orçamento" ou no botão flutuante do WhatsApp no canto direito da tela e enviar sua cidade e bairro.',
  },
  {
    question: 'Vocês emitem Nota Fiscal e atendem empresas?',
    answer:
      'Sim, atendemos casas, reformas, condomínios, comércios e construtoras. Confirme as opções de pagamento e Nota Fiscal direto pelo WhatsApp no momento do pedido.',
  },
];
