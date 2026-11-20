import React from 'react';
import { DUMPSTER_MODELS, RENTAL_PERIODS, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

export const DumpsterModels: React.FC = () => {
  return (
    <section
      id="modelos"
      className="scroll-mt-16 sm:scroll-mt-20 py-10 sm:py-14 bg-[#F4F7FB] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
              Caçambas de 3m³ até 10m³
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Escolha o tamanho e solicite direto no WhatsApp.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá! Não sei qual tamanho escolher (3m³ até 10m³) e preciso de ajuda no WhatsApp.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#15803D] hover:text-[#166534] underline underline-offset-4 whitespace-nowrap w-fit"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Dúvida no tamanho? Chame no WhatsApp</span>
          </a>
        </div>

        {/* Photo-first grid for ALL sizes (3m³ up to 10m³) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-10">
          {DUMPSTER_MODELS.map((model) => (
            <div
              key={model.id}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-white flex flex-col justify-between hover:border-[#0B2545] transition-colors"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={model.imageSrc}
                    width={model.imageWidth}
                    height={model.imageHeight}
                    loading="lazy"
                    decoding="async"
                    alt={model.imageAlt}
                    fallbackTitle={model.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0B2545]/95 text-yellow-400 px-2.5 py-1 rounded-lg font-mono font-extrabold text-sm sm:text-base shadow">
                    {model.volume}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-extrabold text-[#0B2545] leading-snug">
                    {model.shortFit}
                  </p>
                  <p className="text-[11px] sm:text-xs font-mono text-slate-500 mt-1">
                    {model.dimensions}
                  </p>
                </div>
              </div>

              <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                <a
                  href={buildWhatsAppUrl(model.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full px-2.5 py-2.5 sm:py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Solicitar {model.volume}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Rental Periods Strip */}
        <div className="rounded-2xl bg-[#0B2545] text-white p-5 sm:p-7 border-b-4 border-yellow-400">
          <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-4">
            Períodos de Locação: 1 dia, 2 dias, 3 dias, Semanal ou Mensal
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {RENTAL_PERIODS.map((item) => (
              <a
                key={item.id}
                href={buildWhatsAppUrl(item.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#13315C] hover:bg-blue-900 border border-blue-800 hover:border-yellow-400 p-3.5 flex flex-col justify-between transition-colors"
              >
                <span className="text-base sm:text-lg font-extrabold text-yellow-400">
                  {item.label}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>Solicitar</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
