import React from 'react';
import { Phone, ArrowDown, HelpCircle } from 'lucide-react';
import { ASSET_IMAGES, COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Caçambas Brasil! Vim pelo site e quero um orçamento de caçamba de entulho. Minha cidade e bairro são:'
  );

  const sizeHelpWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Caçambas Brasil! Preciso de orientação para escolher o tamanho ideal da caçamba para minha obra. Minha cidade e bairro são:'
  );

  return (
    <section
      id="topo"
      className="scroll-mt-16 sm:scroll-mt-20 bg-[#0B2545] text-white border-b-4 border-yellow-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center min-w-0">
            <p className="text-xs sm:text-sm font-medium text-yellow-300 mb-3 sm:mb-4">
              <span>Aluguel de Caçambas · 3m³, 4m³ e 5m³</span>
              <span aria-hidden="true" className="mx-1.5 sm:mx-2 text-blue-400">·</span>
              <span>Casas, Condomínios e Empresas</span>
            </p>

            <h1
              className="text-white font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-5"
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 3.4rem)',
                textWrap: 'balance',
              }}
            >
              Aluguel de caçamba de entulho para sua obra
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl mb-6 sm:mb-7">
              Solicite seu orçamento pelo WhatsApp. Atendimento com parceiros em diversas regiões
              do Brasil, conforme disponibilidade na sua cidade.
            </p>

            {/* Direct WhatsApp Conversion Primary Block */}
            <div className="space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-base font-extrabold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Pedir orçamento no WhatsApp</span>
                </a>

                <a
                  href="#modelos"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border border-blue-700 bg-[#13315C]/60 hover:bg-blue-900 text-blue-100 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Ver tamanhos de caçamba</span>
                  <ArrowDown className="w-4 h-4 text-yellow-400 shrink-0" />
                </a>
              </div>

              <p className="text-sm text-blue-100">
                Informe sua cidade e bairro para consultar preço e disponibilidade.
              </p>

              <div>
                <a
                  href={sizeHelpWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-yellow-300 hover:text-yellow-200 underline underline-offset-4 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <span>Não sabe qual tamanho escolher? Peça orientação no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-blue-200">
              <a
                href={`tel:+${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-mono font-semibold text-white hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Central: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-blue-700">|</span>
              <span>Consulta por cidade e bairro</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-yellow-400/90 bg-[#13315C] aspect-[16/10] lg:aspect-auto lg:min-h-[430px]">
              <ImageWithFallback
                src={ASSET_IMAGES.hero.src}
                width={ASSET_IMAGES.hero.width}
                height={ASSET_IMAGES.hero.height}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                alt={ASSET_IMAGES.hero.alt}
                fallbackTitle="Caçambas Brasil"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/95 via-[#071830]/60 to-transparent p-4 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                  Atendemos por uma rede de parceiros em diversas regiões do Brasil. Nossa central
                  consulta disponibilidade e condições para o endereço da sua obra.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Truthful 4-Column Operational Summary Strip */}
        <div className="mt-10 pt-8 border-t border-blue-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-medium text-yellow-300">Rede de Parceiros</p>
            <p className="text-base sm:text-lg font-bold text-white mt-1">
              Diversas Regiões do Brasil
            </p>
            <p className="text-sm text-blue-200 mt-1">
              Nossa central verifica cobertura e condições para sua cidade e bairro.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Tamanhos em m³</p>
            <p className="text-base sm:text-lg font-bold text-white font-mono tabular-nums mt-1">
              3m³ · 4m³ · 5m³
            </p>
            <p className="text-sm text-blue-200 mt-1">
              Escolha o volume ou peça orientação antes da confirmação do pedido.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Tipos de Atendimento</p>
            <p className="text-base sm:text-lg font-bold text-white mt-1">
              Casas, Condomínios e Empresas
            </p>
            <p className="text-sm text-blue-200 mt-1">
              Aluguel de caçamba para obras, reformas e limpeza de resíduos permitidos.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-yellow-300">Agendamento Combinado</p>
            <p className="text-base sm:text-lg font-bold text-white mt-1">
              Entrega e Retirada via Central
            </p>
            <p className="text-sm text-blue-200 mt-1">
              Prazos, documentos aplicáveis e valores confirmados antes de fechar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
