import React from 'react';
import { buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppButton: React.FC = () => {
  const url = buildWhatsAppUrl(
    'Olá! Vim pelo site da Caçambas Brasil e quero solicitar uma caçamba para entulho. Minha cidade e bairro:'
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar Caçamba pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 h-12 sm:h-14 px-4 sm:px-5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white border-2 border-yellow-400 text-xs sm:text-sm font-extrabold shadow-2xl transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span>Solicitar Caçamba</span>
    </a>
  );
};
