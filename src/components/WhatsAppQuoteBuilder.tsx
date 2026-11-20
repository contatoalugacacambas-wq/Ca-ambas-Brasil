import React from 'react';
import { ASSET_IMAGES, DUMPSTER_MODELS, RENTAL_PERIODS, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ImageWithFallback } from './ImageWithFallback';

export const WhatsAppQuoteBuilder: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Quero alugar uma caçamba para entulho agora. Como funciona?'
  );

  const helpSizeUrl = buildWhatsAppUrl(
    'Olá! Não sei quantos metros cúbicos (3m³ até 10m³) preciso e quero ajuda pelo WhatsApp.'
  );

  return (
    <section
      id="orcamento"
      className="scroll-mt-16 sm:scroll-mt-20 py-8 sm:py-12 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Caçamba Photo + Instant WhatsApp Button */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white flex flex-col justify-between min-w-0">
            <div className="relative aspect-[16/10] lg:flex-1 min-h-[220px] w-full overflow-hidden">
              <ImageWithFallback
                src={ASSET_IMAGES.hero.src}
                width={ASSET_IMAGES.hero.width}
                height={ASSET_IMAGES.hero.height}
                loading="lazy"
                decoding="async"
                alt={ASSET_IMAGES.hero.alt}
                fallbackTitle="Aluguel de Caçambas"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071830] via-[#071830]/45 to-transparent p-5 sm:p-6 flex flex-col justify-end">
                <p className="text-xs font-bold text-yellow-300">
                  Chamou, Chegou · Entrega 1h a 2h
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                  Clicou, Chamou no WhatsApp
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#071830] border-t border-blue-900">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-base font-extrabold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar Agora no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Instant 1-Tap WhatsApp Links (Zero Forms to Fill) */}
          <div className="lg:col-span-7 bg-[#F4F7FB] p-5 sm:p-7 lg:p-8 min-w-0 flex flex-col justify-center space-y-5">
            <div>
              <p className="text-sm sm:text-base font-extrabold text-[#0B2545] mb-2.5">
                Clique no tamanho para chamar no WhatsApp (3m³ até 10m³):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DUMPSTER_MODELS.map((model) => (
                  <a
                    key={model.id}
                    href={buildWhatsAppUrl(model.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-200 bg-white hover:border-[#16A34A] hover:bg-emerald-50/40 px-3 py-3 text-center transition-colors flex flex-col items-center justify-center"
                  >
                    <span className="text-base font-extrabold font-mono text-[#0B2545]">
                      {model.volume}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 mt-0.5 line-clamp-1">
                      {model.shortFit}
                    </span>
                  </a>
                ))}
                <a
                  href={helpSizeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-yellow-500 bg-yellow-400 hover:bg-yellow-300 px-3 py-3 text-center transition-colors flex flex-col items-center justify-center"
                >
                  <span className="text-xs sm:text-sm font-extrabold text-[#0B2545]">
                    Não sei
                  </span>
                  <span className="text-[11px] font-bold text-[#0B2545]/80 mt-0.5">
                    Tirar dúvida
                  </span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-base font-extrabold text-[#0B2545] mb-2.5">
                Ou clique no período desejado:
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {RENTAL_PERIODS.map((item) => (
                  <a
                    key={item.id}
                    href={buildWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[#0B2545] bg-[#0B2545] hover:bg-[#13315C] text-yellow-400 px-2.5 py-3 text-center text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-base sm:text-lg font-extrabold shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
