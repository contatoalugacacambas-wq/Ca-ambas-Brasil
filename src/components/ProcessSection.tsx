import React from 'react';
import { PROCESS_STEPS, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 sm:scroll-mt-20 py-10 sm:py-14 bg-[#0B2545] text-white border-b-4 border-yellow-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-yellow-300 mb-1">
              Atendemos na Sua Região · Chamou, Chegou!
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Entrega Rápida em até 1h a 2h
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá! Quero solicitar caçamba com entrega rápida em até 1h a 2h na minha região.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm sm:text-base font-extrabold transition-colors whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Chamar no WhatsApp Agora</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="border-t-2 border-yellow-400/80 pt-3.5">
              <p className="text-sm font-mono font-bold text-yellow-400">{step.number}</p>
              <h3 className="text-sm sm:text-base font-extrabold text-white mt-1">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
