import React from 'react';
import { buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppButton: React.FC = () => {
  const url = buildWhatsAppUrl(
    'Olá! Estou no site da Caçambas Brasil e quero fazer um orçamento rápido de caçamba.'
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 h-11 px-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] border-2 border-[#0B2545] text-sm font-extrabold shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span>WhatsApp</span>
    </a>
  );
};
