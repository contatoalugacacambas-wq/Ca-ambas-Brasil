import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Caçambas Brasil! Vim pelo site e quero um orçamento de caçamba de entulho. Minha cidade e bairro são:'
  );

  const navLinks = [
    { href: '#orcamento', label: 'Orçamento' },
    { href: '#modelos', label: 'Tamanhos' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#residuos', label: 'Resíduos' },
    { href: '#duvidas', label: 'Dúvidas' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B2545] border-b border-blue-900/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-6 lg:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#topo"
          className="text-base sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          Caçambas <span className="text-yellow-400">Brasil</span>
        </a>

        {/* Zone 2: 5 single-line sitelink nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-100"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow-300 hover:underline underline-offset-4 decoration-yellow-400 decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary WhatsApp CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Orçamento WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-800 text-blue-100 hover:bg-blue-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Navegação móvel"
          className="md:hidden border-t border-blue-900 bg-[#0B2545] px-4 py-4 space-y-1.5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-base font-medium text-blue-100 hover:bg-blue-900 hover:text-yellow-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-blue-900 text-xs font-mono text-blue-200 px-3">
            Central: {COMPANY_INFO.phoneDisplay}
          </div>
        </nav>
      )}
    </header>
  );
};
