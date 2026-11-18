import React from 'react';
import { buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppButton: React.FC = () => {
  const url = buildWhatsAppUrl(
    'Olá, Caçambas Brasil! Vim pelo site e quero um orçamento de caçamba de entulho. Minha cidade e bairro são:'
  );

  return (
    <>
      {/* Mobile Fixed Bottom Bar (safe-area aware, no overlapping second floating button) */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B2545]/95 backdrop-blur-sm border-t border-blue-900 px-4 pt-2.5 shadow-lg"
        style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span>Pedir orçamento no WhatsApp</span>
        </a>
      </div>

      {/* Desktop Discreet Floating WhatsApp Action */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir orçamento no WhatsApp"
        className="hidden md:inline-flex fixed bottom-5 right-5 z-40 items-center gap-2 h-11 px-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] border-2 border-[#0B2545] text-sm font-extrabold shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0" />
        <span>Pedir orçamento no WhatsApp</span>
      </a>
    </>
  );
};
