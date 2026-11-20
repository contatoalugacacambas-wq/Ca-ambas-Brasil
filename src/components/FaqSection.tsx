import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="duvidas"
      className="scroll-mt-16 sm:scroll-mt-20 py-10 sm:py-14 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B2545] text-white p-6 border-b-4 border-yellow-400">
              <p className="text-xs font-bold text-yellow-300">
                Atendemos na Sua Região · Entrega 1h a 2h*
              </p>
              <h2 className="text-2xl font-extrabold text-white mt-1.5">
                Chamou, Chegou! Peça Agora
              </h2>
              <p className="text-sm text-blue-100 mt-2">
                3m³ até 10m³ · 1, 2, 3 dias, Semanal ou Mensal.
              </p>
              <a
                href={buildWhatsAppUrl(
                  'Olá! Quero pedir uma caçamba para entulho pelo WhatsApp.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2.5 w-full px-5 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-base font-extrabold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xl font-extrabold text-[#0B2545] mb-3">Perguntas Rápidas</h3>
            <div className="divide-y divide-slate-200 border border-slate-200 bg-[#F4F7FB] rounded-2xl overflow-hidden">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.question} className={isOpen ? 'bg-white' : ''}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-white transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0B2545]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-800 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 text-sm text-slate-600 leading-relaxed">
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
