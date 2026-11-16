import React, { useState } from 'react';
import { Check, Ban } from 'lucide-react';
import { ASSET_IMAGES, WASTE_PERMITTED, WASTE_PROHIBITED, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

type WasteFilter = 'all' | 'permitted' | 'prohibited';

export const WasteComplianceSection: React.FC = () => {
  const [filter, setFilter] = useState<WasteFilter>('all');

  return (
    <section id="residuos" className="py-16 lg:py-20 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-10">
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 min-h-[260px]">
              <ImageWithFallback
                src={ASSET_IMAGES.descarteAtt}
                alt="Área de Transbordo e Triagem licenciada com separação de agregados reciclados da construção civil"
                fallbackTitle="Destinação Ambiental Licenciada"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/90 via-[#071830]/45 to-transparent p-5">
                <p className="text-xs font-mono font-semibold text-yellow-300">
                  Lei nº 12.305/2010 · CONAMA · Emissão de CTR
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Triagem e destinação exclusivamente em unidades licenciadas.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
              03. Regras de Descarte e Destinação Legal
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mt-3">
              Todo material coletado pela Caçambas Brasil é encaminhado para Áreas de Transbordo
              e Triagem (ATTs) ou aterros devidamente licenciados, com emissão de Controle de
              Transporte de Resíduos (CTR).
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              Evite multas ambientais e bloqueios na retirada conferindo os materiais permitidos e
              os itens proibidos por lei.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Tenho dúvida sobre o tipo de resíduo que posso colocar na caçamba. Podem me orientar?'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-5 py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#13315C] text-white text-sm font-bold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="sm:hidden">Tirar Dúvida no WhatsApp</span>
                <span className="hidden sm:inline">Tirar Dúvida sobre Resíduos no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Waste Filter Control */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <p className="text-sm font-bold text-[#0B2545]">Guia rápido de separação de materiais</p>
          <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#0B2545] text-yellow-400'
                  : 'text-slate-600 hover:text-[#0B2545]'
              }`}
            >
              Ver Todos
            </button>
            <button
              type="button"
              onClick={() => setFilter('permitted')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                filter === 'permitted'
                  ? 'bg-[#0B2545] text-yellow-400'
                  : 'text-slate-600 hover:text-[#0B2545]'
              }`}
            >
              Permitidos
            </button>
            <button
              type="button"
              onClick={() => setFilter('prohibited')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                filter === 'prohibited'
                  ? 'bg-[#0B2545] text-yellow-400'
                  : 'text-slate-600 hover:text-[#0B2545]'
              }`}
            >
              Proibidos
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-6 lg:gap-8 ${
            filter === 'all' ? 'md:grid-cols-2' : 'md:grid-cols-1'
          }`}
        >
          {(filter === 'all' || filter === 'permitted') && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
                <Check className="w-5 h-5 text-blue-800 shrink-0" />
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Resíduos Permitidos na Caçamba
                </h3>
              </div>
              <dl className="mt-5 space-y-4">
                {WASTE_PERMITTED.map((item) => (
                  <div key={item.category}>
                    <dt className="text-sm font-bold text-slate-900">{item.category}</dt>
                    <dd className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {(filter === 'all' || filter === 'prohibited') && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
                <Ban className="w-5 h-5 text-red-700 shrink-0" />
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Resíduos Proibidos por Lei
                </h3>
              </div>
              <dl className="mt-5 space-y-4">
                {WASTE_PROHIBITED.map((item) => (
                  <div key={item.category}>
                    <dt className="text-sm font-bold text-slate-900">{item.category}</dt>
                    <dd className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
