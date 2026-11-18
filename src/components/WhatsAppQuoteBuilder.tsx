import React, { useState } from 'react';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

const SIZE_OPTIONS = ['Preciso de orientação', '3m³', '4m³', '5m³'] as const;

export const WhatsAppQuoteBuilder: React.FC = () => {
  const [cityNeighborhood, setCityNeighborhood] = useState('');
  const [size, setSize] = useState<(typeof SIZE_OPTIONS)[number]>('Preciso de orientação');
  const [showOptional, setShowOptional] = useState(false);
  const [wasteType, setWasteType] = useState('');
  const [desiredDate, setDesiredDate] = useState('');

  const buildDynamicQuoteUrl = () => {
    const lines = [
      `Olá, ${COMPANY_INFO.brandName}! Gostaria de consultar disponibilidade e orçamento de caçamba de entulho.`,
    ];

    if (cityNeighborhood.trim()) {
      lines.push(`• Cidade e bairro: ${cityNeighborhood.trim()}`);
    }

    if (size === 'Preciso de orientação') {
      lines.push('• Tamanho: Preciso de orientação');
    } else {
      lines.push(`• Tamanho: ${size}`);
    }

    if (wasteType.trim()) {
      lines.push(`• Tipo de resíduo: ${wasteType.trim()}`);
    }

    if (desiredDate.trim()) {
      lines.push(`• Data desejada: ${desiredDate.trim()}`);
    }

    return buildWhatsAppUrl(lines.join('\n'));
  };

  const directCentralUrl = buildWhatsAppUrl(
    'Olá, Caçambas Brasil! Prefiro falar direto com a central para consultar preço e disponibilidade.'
  );

  return (
    <section
      id="orcamento"
      className="scroll-mt-16 sm:scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Blue Context Panel */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white p-5 sm:p-8 lg:p-10 flex flex-col justify-between min-w-0">
            <div>
              <p className="text-xs font-medium text-yellow-300 mb-2">
                Orçamento Rápido · Consulta por Região
              </p>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Consulte disponibilidade e valor para sua obra
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed mt-4">
                Atendemos por uma rede de parceiros em diversas regiões do Brasil. Nossa central
                consulta disponibilidade e condições para o endereço da sua obra.
              </p>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed mt-3">
                Os valores, prazos e condições de entrega dependem da confirmação pela central junto
                aos parceiros que atendem a sua cidade e bairro.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-blue-200">Central Telefônica / WhatsApp</span>
                <a
                  href={`tel:+${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-yellow-300 hover:text-yellow-200"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-blue-200">E-mail</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-yellow-300 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Quick Quote Builder */}
          <div className="lg:col-span-7 bg-[#F4F7FB] p-5 sm:p-8 lg:p-10 min-w-0">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="city-neighborhood-input"
                  className="block text-sm font-bold text-[#0B2545] mb-2"
                >
                  Cidade e bairro da obra (opcional)
                </label>
                <input
                  id="city-neighborhood-input"
                  type="text"
                  value={cityNeighborhood}
                  onChange={(e) => setCityNeighborhood(e.target.value)}
                  placeholder="Ex: Belo Horizonte - Savassi"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:outline-none"
                />
              </div>

              <div>
                <span className="block text-sm font-bold text-[#0B2545] mb-2">
                  Tamanho da caçamba (opcional)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SIZE_OPTIONS.map((option) => {
                    const isSelected = size === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSize(option)}
                        className={`px-3 py-3 rounded-xl border text-xs sm:text-sm font-bold transition-colors text-center ${
                          isSelected
                            ? 'border-yellow-500 bg-yellow-400 text-[#0B2545]'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Expandable Optional Details */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowOptional((prev) => !prev)}
                  aria-expanded={showOptional}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left text-xs sm:text-sm font-bold text-[#0B2545] hover:bg-slate-50 transition-colors"
                >
                  <span>Informar tipo de resíduo e data desejada (opcional)</span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-800 shrink-0 transition-transform duration-200 ${
                      showOptional ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showOptional && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="waste-type-optional"
                        className="block text-xs font-bold text-[#0B2545] mb-1.5"
                      >
                        Tipo de resíduo
                      </label>
                      <select
                        id="waste-type-optional"
                        value={wasteType}
                        onChange={(e) => setWasteType(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                      >
                        <option value="">Não informado</option>
                        <option value="Entulho de obra e alvenaria">
                          Entulho de obra e alvenaria
                        </option>
                        <option value="Terra e concreto">Terra e concreto</option>
                        <option value="Madeira e móveis">Madeira e restos de obra</option>
                        <option value="Gesso / Drywall">Gesso / Drywall</option>
                        <option value="Poda e limpeza">Poda e limpeza</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="desired-date-optional"
                        className="block text-xs font-bold text-[#0B2545] mb-1.5"
                      >
                        Data desejada
                      </label>
                      <input
                        id="desired-date-optional"
                        type="text"
                        value={desiredDate}
                        onChange={(e) => setDesiredDate(e.target.value)}
                        placeholder="Ex: Próxima segunda-feira"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-1">
                <a
                  href={buildDynamicQuoteUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full px-4 sm:px-6 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm sm:text-base font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2545]"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Consultar preço no WhatsApp</span>
                </a>

                <div className="text-center">
                  <a
                    href={directCentralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2545] hover:text-blue-800 underline underline-offset-4 py-1"
                  >
                    <span>Prefiro falar direto com a central</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
