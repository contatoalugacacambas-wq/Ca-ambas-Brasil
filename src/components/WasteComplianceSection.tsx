import React from 'react';
import { Check } from 'lucide-react';
import { ASSET_IMAGES, WASTE_PERMITTED, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WasteComplianceSection: React.FC = () => {
  const wasteWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Quero pedir uma caçamba para entulho pelo WhatsApp.'
  );

  return (
    <section
      id="residuos"
      className="scroll-mt-16 sm:scroll-mt-20 py-10 sm:py-14 bg-[#F4F7FB] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-[#0B2545]">
                <ImageWithFallback
                  src={ASSET_IMAGES.descarteLegal.src}
                  width={ASSET_IMAGES.descarteLegal.width}
                  height={ASSET_IMAGES.descarteLegal.height}
                  loading="lazy"
                  decoding="async"
                  alt={ASSET_IMAGES.descarteLegal.alt}
                  fallbackTitle="Caçambas Brasil · Chamou, Chegou!"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3.5 sm:p-4 bg-[#0B2545]">
                <a
                  href={wasteWhatsAppUrl}
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

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545] mb-4">
              Retiramos Todo Tipo de Entulho de Obra
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              {WASTE_PERMITTED.map((item) => (
                <div key={item.category} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#0B2545]">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <a
                href={wasteWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-extrabold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Pedir Caçamba pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
