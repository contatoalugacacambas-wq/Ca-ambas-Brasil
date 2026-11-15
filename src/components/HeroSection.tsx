import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES, COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ImageWithFallback } from './ImageWithFallback';

const QUICK_VOLUMES = [
  { id: '3m3', label: '3m³ Compacta', hint: 'Pequenas reformas' },
  { id: '4m3', label: '4m³ Padrão', hint: 'Obras residenciais' },
  { id: '5m3', label: '5m³ Grande', hint: 'Demolições e empresas' },
];

export const HeroSection: React.FC = () => {
  const [selectedVol, setSelectedVol] = useState('4m³ Padrão');

  const heroWhatsAppUrl = buildWhatsAppUrl(
    `Olá, Caçambas Brasil! Preciso alugar uma caçamba (${selectedVol}). Gostaria de consultar disponibilidade e valor para meu bairro.`
  );

  return (
    <section id="topo" className="bg-[#0B2545] text-white border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-yellow-300 mb-4">
              <span>Locação de Caçambas Estacionárias</span>
              <span aria-hidden="true" className="mx-2 text-blue-400">·</span>
              <span>3m³, 4m³ e 5m³</span>
              <span aria-hidden="true" className="mx-2 text-blue-400">·</span>
              <span>Nota Fiscal e CTR</span>
            </p>

            <h1
              className="text-white font-extrabold tracking-tight leading-[1.06] mb-5"
              style={{
                fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              Caçamba de entulho na sua obra com entrega programada e descarte legal.
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl mb-7">
              Atendimento direto para reformas, construções, condomínios e empresas. Frota
              própria, caçambas sinalizadas e encaminhamento exclusivamente para aterros e
              ATTs licenciados.
            </p>

            {/* Quick Interactive Volume Selector inside Hero */}
            <div className="rounded-xl bg-[#13315C] border border-blue-800/80 p-4 mb-6">
              <p className="text-xs font-semibold text-blue-200 mb-2.5">
                Selecione o tamanho desejado e peça direto no WhatsApp:
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {QUICK_VOLUMES.map((item) => {
                  const active = selectedVol === item.label;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedVol(item.label)}
                      className={`px-2.5 py-2.5 rounded-lg text-left transition-colors border ${
                        active
                          ? 'bg-yellow-400 text-[#0B2545] border-yellow-300 font-bold'
                          : 'bg-[#0B2545]/70 text-blue-100 border-blue-800 hover:border-blue-600'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-bold whitespace-nowrap truncate">
                        {item.label}
                      </span>
                      <span
                        className={`block text-[11px] truncate ${
                          active ? 'text-[#0B2545]/80 font-medium' : 'text-blue-300'
                        }`}
                      >
                        {item.hint}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-base font-extrabold transition-colors whitespace-nowrap shrink-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Pedir {selectedVol} no WhatsApp</span>
                </a>

                <a
                  href="#orcamento"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-blue-700 bg-[#0B2545] hover:bg-blue-900 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Simular Obra</span>
                  <ArrowRight className="w-4 h-4 text-yellow-400 shrink-0" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-blue-200">
              <a
                href={`tel:+${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-mono font-semibold text-white hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Telefone: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-blue-700">|</span>
              <span>{COMPANY_INFO.hoursWeek}</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-yellow-400/90 bg-[#13315C] aspect-[16/10] lg:aspect-auto lg:min-h-[460px]">
              <ImageWithFallback
                src={ASSET_IMAGES.heroTruck}
                alt="Caminhão poliguindaste da Caçambas Brasil entregando caçamba estacionária amarela de 5m³"
                fallbackTitle="Frota Própria Poliguindaste"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/95 via-[#071830]/60 to-transparent p-5 sm:p-6">
                <p className="text-xs font-mono font-semibold text-yellow-300">
                  {COMPANY_INFO.legalName} · CNPJ {COMPANY_INFO.cnpj}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white mt-1">
                  Entrega programada com caçambas sinalizadas e retirada ágil após o enchimento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Operational Spec Bar */}
        <div className="mt-10 pt-8 border-t border-blue-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-medium text-yellow-300">Capacidades Disponíveis</p>
            <p className="text-lg font-bold text-white font-mono tabular-nums mt-1">
              3m³ · 4m³ · 5m³
            </p>
            <p className="text-sm text-blue-200 mt-1">
              Dimensões adequadas de garagens estreitas a grandes canteiros.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Destinação Ambiental</p>
            <p className="text-lg font-bold text-white mt-1">ATTs e Aterros Licenciados</p>
            <p className="text-sm text-blue-200 mt-1">
              Conformidade com legislação municipal e emissão de CTR.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Documentação Completa</p>
            <p className="text-lg font-bold text-white mt-1">Nota Fiscal e Contrato</p>
            <p className="text-sm text-blue-200 mt-1 font-mono tabular-nums">
              Atendimento PF, Condomínios e PJ
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Agilidade na Cotação</p>
            <p className="text-lg font-bold text-white mt-1">Atendimento pelo WhatsApp</p>
            <p className="text-sm text-blue-200 mt-1">
              Valor informado com clareza antes da confirmação da entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
