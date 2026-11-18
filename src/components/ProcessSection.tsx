import React from 'react';
import { PROCESS_STEPS, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-16 lg:py-20 bg-[#0B2545] text-white border-b-4 border-yellow-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              02. Como Funciona
            </h2>
            <p className="text-base text-blue-100 mt-2.5 leading-relaxed">
              Atendemos por uma rede de parceiros em diversas regiões do Brasil. Nossa central
              consulta disponibilidade, prazo e condições para o endereço da sua obra.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá, Caçambas Brasil! Vi como funciona o atendimento e quero consultar disponibilidade para minha cidade e bairro.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-5 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm font-extrabold transition-colors whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Consultar pelo WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="border-t-2 border-yellow-400/80 pt-5 flex flex-col justify-between"
            >
              <div>
                <p className="text-base font-mono font-bold text-yellow-400 mb-2">
                  {step.number}
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed mt-2.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
