import React from 'react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { LegalDocType } from './LegalModal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071830] text-blue-100 pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-blue-900">
          {/* Brand & Legal Identification */}
          <div className="md:col-span-5 space-y-3">
            <p className="text-xl font-extrabold tracking-tight text-white">
              Caçambas <span className="text-yellow-400">Brasil</span>
            </p>
            <p className="text-sm text-blue-200 leading-relaxed max-w-md">
              Aluguel de caçambas estacionárias de 3m³, 4m³ e 5m³ para casas, condomínios e
              empresas por meio de rede de parceiros em diversas regiões do Brasil, conforme
              disponibilidade na cidade.
            </p>
            <div className="pt-2 text-xs font-mono text-blue-300 space-y-1">
              <p>Razão Social: {COMPANY_INFO.legalName}</p>
              <p>CNPJ: {COMPANY_INFO.cnpj}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-yellow-400">Canais de Atendimento</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl(
                    'Olá, Caçambas Brasil! Gostaria de falar com a central de atendimento.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-bold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${COMPANY_INFO.phoneRaw}`}
                  className="text-blue-100 hover:text-white transition-colors font-mono"
                >
                  Telefone: {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-blue-100 hover:text-white transition-colors break-all"
                >
                  E-mail: {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-yellow-400">Informações Legais</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-blue-100 hover:text-yellow-300 underline-offset-4 hover:underline text-left transition-colors py-0.5"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="text-blue-100 hover:text-yellow-300 underline-offset-4 hover:underline text-left transition-colors py-0.5"
                >
                  Termos de Uso e Locação
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('company')}
                  className="text-blue-100 hover:text-yellow-300 underline-offset-4 hover:underline text-left transition-colors py-0.5"
                >
                  Dados Cadastrais (CNPJ)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-blue-300/80">
          <p>
            © {currentYear} {COMPANY_INFO.brandName} ({COMPANY_INFO.legalName} · CNPJ{' '}
            {COMPANY_INFO.cnpj}). Todos os direitos reservados.
          </p>
          <p>
            Disponibilidade, prazos, documentação e valores dependem de confirmação prévia com a
            central conforme cidade, bairro, parceiro local e tipo de resíduo.
          </p>
        </div>
      </div>
    </footer>
  );
};
