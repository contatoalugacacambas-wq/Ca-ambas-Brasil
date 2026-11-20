import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ASSET_IMAGES, GALLERY_IMAGES, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Quero alugar uma caçamba para entulho. Minha cidade e bairro:'
  );

  const heroStripPhotos = [
    {
      image: GALLERY_IMAGES[0],
      label: 'Entrega em até 1h a 2h',
      msg: 'Olá! Preciso de caçamba com entrega rápida em até 1h a 2h. Minha cidade e bairro:',
    },
    {
      image: GALLERY_IMAGES[1],
      label: 'Tamanhos de 3m³ até 10m³',
      msg: 'Olá! Quero ver valores de caçambas de 3m³ até 10m³. Minha cidade e bairro:',
    },
    {
      image: GALLERY_IMAGES[2],
      label: '1, 2, 3 dias · Semanal · Mensal',
      msg: 'Olá! Quero consultar períodos de locação (diária, semanal ou mensal). Minha cidade e bairro:',
    },
    {
      image: GALLERY_IMAGES[3],
      label: 'Atendemos na Sua Região',
      msg: 'Olá! Quero solicitar caçamba na minha região. Minha cidade e bairro:',
    },
  ];

  return (
    <section
      id="topo"
      className="scroll-mt-16 sm:scroll-mt-20 bg-[#0B2545] text-white border-b-4 border-yellow-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-8 sm:pt-9 sm:pb-12">
        {/* Main Hero Row: Punchy Headline + CTA + Big Caçamba Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-stretch">
          <div className="order-1 lg:col-span-6 flex flex-col justify-center min-w-0">
            <p className="text-xs sm:text-sm font-bold text-yellow-300 mb-2">
              Atendemos na sua região · Chamou, chegou!
            </p>

            <h1
              className="text-white font-extrabold tracking-tight leading-[1.06] mb-3 sm:mb-4"
              style={{
                fontSize: 'clamp(1.95rem, 4vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              Aluguel de Caçamba para Entulho
            </h1>

            <p className="text-base sm:text-lg text-blue-100 font-medium mb-5 sm:mb-6">
              De <strong className="text-white">3m³ até 10m³</strong> · Entrega em até{' '}
              <strong className="text-yellow-300">1h a 2h</strong> · 1, 2, 3 dias, Semanal ou Mensal.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] border-2 border-yellow-400 text-white text-base sm:text-lg font-extrabold shadow-lg transition-transform active:scale-[0.99] whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Pedir Caçamba no WhatsApp</span>
              </a>

              <a
                href="#modelos"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-blue-700 bg-[#13315C]/70 hover:bg-blue-900 text-blue-100 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Ver Tamanhos</span>
                <ArrowDown className="w-4 h-4 text-yellow-400 shrink-0" />
              </a>
            </div>
          </div>

          <div className="order-2 lg:col-span-6 flex flex-col">
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400 bg-[#071830] flex flex-col h-full">
              <div className="relative aspect-[16/10] lg:flex-1 lg:min-h-[290px] w-full overflow-hidden">
                <ImageWithFallback
                  src={ASSET_IMAGES.hero.src}
                  width={ASSET_IMAGES.hero.width}
                  height={ASSET_IMAGES.hero.height}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  alt={ASSET_IMAGES.hero.alt}
                  fallbackTitle="Caçambas Brasil"
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
              </div>
              <div className="p-3 sm:p-4 bg-[#071830]">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm sm:text-base font-extrabold transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Photo Strip (Replaces wordy text block with 4 visual photo cards + CTA) */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-blue-800/80 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {heroStripPhotos.map((card) => (
            <a
              key={card.label}
              href={buildWhatsAppUrl(card.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-blue-800 bg-[#13315C] hover:border-yellow-400 transition-colors flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <ImageWithFallback
                  src={card.image.src}
                  width={card.image.width}
                  height={card.image.height}
                  loading="eager"
                  decoding="async"
                  alt={card.image.alt}
                  fallbackTitle={card.label}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/95 via-[#071830]/50 to-transparent px-2.5 py-2">
                  <span className="block text-xs sm:text-sm font-extrabold text-yellow-300 leading-tight">
                    {card.label}
                  </span>
                </div>
              </div>
              <div className="px-2.5 py-2 bg-[#071830] flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-extrabold text-white group-hover:text-yellow-300">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>Solicitar Orçamento</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
