import React, { useState } from 'react';
import { DUMPSTER_MODELS, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

export const DumpsterModels: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('4m3');
  const activeModel =
    DUMPSTER_MODELS.find((m) => m.id === selectedId) ?? DUMPSTER_MODELS[1];

  return (
    <section id="modelos" className="py-16 lg:py-20 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
              01. Escolha o Tamanho da Caçamba
            </h2>
            <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
              Alterne entre os modelos abaixo para conferir dimensões e indicações de obra, ou
              clique diretamente para solicitar pelo WhatsApp.
            </p>
          </div>

          {/* Interactive Model Switcher Tabs */}
          <div
            role="tablist"
            aria-label="Selecionar tamanho da caçamba"
            className="inline-flex items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-xl w-fit"
          >
            {DUMPSTER_MODELS.map((model) => {
              const isSelected = model.id === activeModel.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(model.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0B2545] text-yellow-400'
                      : 'text-slate-600 hover:text-[#0B2545] hover:bg-slate-100'
                  }`}
                >
                  {model.volume}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Featured Bento Showcase (7 cols image + 5 cols specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-200">
              <ImageWithFallback
                src={activeModel.imageSrc}
                alt={activeModel.imageAlt}
                fallbackTitle={activeModel.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono font-semibold text-blue-800 mb-2">
                Modelo Selecionado · Volume {activeModel.volume}
              </p>
              <h3 className="text-2xl font-extrabold text-[#0B2545] tracking-tight">
                {activeModel.title}
              </h3>
              <p className="text-sm font-semibold text-slate-700 mt-1">{activeModel.subtitle}</p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                {activeModel.idealFor}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Dimensões aproximadas</span>
                  <span className="font-mono font-semibold text-[#0B2545] tabular-nums">
                    {activeModel.dimensions}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Capacidade estimada</span>
                  <span className="font-medium text-slate-900 text-right">
                    {activeModel.capacityBags}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Sinalização</span>
                  <span className="font-medium text-slate-900">Faixas refletivas ABNT</span>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl(activeModel.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl bg-[#0B2545] hover:bg-[#13315C] text-white text-base font-bold transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-5 h-5 text-yellow-400 shrink-0" />
              <span>Solicitar {activeModel.volume} no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Clean 3-Column Quick Comparison Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DUMPSTER_MODELS.map((model) => {
            const isSelected = model.id === activeModel.id;
            return (
              <div
                key={model.id}
                className={`rounded-2xl border p-5 transition-colors flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0B2545] bg-white ring-1 ring-[#0B2545]'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-extrabold font-mono text-[#0B2545] tabular-nums">
                      {model.volume}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedId(model.id)}
                      className="text-xs font-semibold text-blue-800 hover:text-[#0B2545] underline underline-offset-4"
                    >
                      {isSelected ? 'Visualizando acima' : 'Ver detalhes'}
                    </button>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-1.5">{model.title}</p>
                  <p className="text-xs text-slate-600 mt-1">{model.capacityBags}</p>
                </div>

                <a
                  href={buildWhatsAppUrl(model.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm font-extrabold transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Pedir {model.volume} no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
