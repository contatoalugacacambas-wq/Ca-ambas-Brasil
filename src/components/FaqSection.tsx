import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { COMPANY_INFO, FAQ_ITEMS, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Conversion & Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
                04. Perguntas Frequentes
              </h2>
              <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
                Informações transparentes sobre prazos, pagamento, emissão de Nota Fiscal, CTR e
                regras municipais para colocação de caçambas.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B2545] text-white p-6 sm:p-8 border-b-4 border-yellow-400">
              <p className="text-xs font-mono font-semibold text-yellow-300">
                Atendimento Direto · Sem Intermediários
              </p>
              <h3 className="text-xl font-extrabold text-white mt-2">
                Precisa de orçamento agora para sua obra?
              </h3>
              <p className="text-sm text-blue-100 mt-2 leading-relaxed">
                Fale direto com a central da {COMPANY_INFO.brandName} ({COMPANY_INFO.legalName}) e
                receba seu orçamento pelo WhatsApp.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={buildWhatsAppUrl(
                    'Olá! Gostaria de falar com a central da Caçambas Brasil para alugar uma caçamba.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-base font-extrabold transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Chamar no WhatsApp</span>
                </a>
                <a
                  href={`tel:+${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-blue-800 hover:bg-blue-900 text-white text-sm font-mono font-semibold transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right FAQ Accordion Column */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 border border-slate-200 bg-[#F4F7FB] rounded-2xl overflow-hidden">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.question} className={isOpen ? 'bg-white' : ''}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B2545]"
                    >
                      <span className="text-base font-bold text-[#0B2545]">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-800 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
