import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

type QuoteTab = 'whatsapp' | 'email';

export const WhatsAppQuoteBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<QuoteTab>('whatsapp');
  const [volume, setVolume] = useState('4m³ (Padrão)');
  const [wasteType, setWasteType] = useState('Entulho de obra e alvenaria');
  const [neighborhood, setNeighborhood] = useState('');
  const [deliveryPeriod, setDeliveryPeriod] = useState('Hoje ou amanhã');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const composedMessage = [
    `Olá, ${COMPANY_INFO.brandName}! Gostaria de um orçamento de caçamba:`,
    `• Tamanho: ${volume}`,
    `• Tipo de resíduo: ${wasteType}`,
    neighborhood.trim() ? `• Bairro/Cidade: ${neighborhood.trim()}` : '• Bairro/Cidade: A informar',
    `• Previsão de entrega: ${deliveryPeriod}`,
  ].join('\n');

  const whatsappUrl = buildWhatsAppUrl(composedMessage);

  const handleAltSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const trimmedName = name.trim();
    const digitsOnly = phone.replace(/\D/g, '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      setFormError('Informe seu nome completo ou razão social.');
      return;
    }
    if (digitsOnly.length < 10) {
      setFormError('Informe um telefone ou WhatsApp válido com DDD.');
      return;
    }
    if (email.trim() && !emailRegex.test(email.trim())) {
      setFormError('Informe um endereço de e-mail válido.');
      return;
    }
    if (neighborhood.trim().length < 2) {
      setFormError('Informe o bairro ou endereço aproximado da entrega.');
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <section id="orcamento" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Royal Blue Summary & Contact Panel */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white p-5 sm:p-8 lg:p-10 flex flex-col justify-between min-w-0">
            <div>
              <p className="text-xs font-medium text-yellow-300 mb-2">
                Orçamento Transparente · Atendimento Imediato
              </p>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Monte seu pedido e envie pronto no WhatsApp
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed mt-4">
                Selecione o tamanho, o material da obra e seu bairro. O sistema monta a mensagem
                completa para nossa central informar disponibilidade e preço fechado na hora.
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
                  className="text-xs font-medium text-white hover:text-yellow-300 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <p className="text-[11px] font-mono text-blue-300 pt-1">
                {COMPANY_INFO.legalName} · CNPJ {COMPANY_INFO.cnpj}
              </p>
            </div>
          </div>

          {/* Right Interactive Builder Panel */}
          <div className="lg:col-span-7 bg-[#F4F7FB] p-5 sm:p-8 lg:p-10 min-w-0">
            <div className="grid grid-cols-2 sm:inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl mb-6 w-full sm:w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('whatsapp')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap truncate ${
                  activeTab === 'whatsapp'
                    ? 'bg-[#0B2545] text-yellow-400'
                    : 'text-slate-600 hover:text-[#0B2545]'
                }`}
              >
                Simulador WhatsApp
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('email');
                  setFormSubmitted(false);
                  setFormError(null);
                }}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap truncate ${
                  activeTab === 'email'
                    ? 'bg-[#0B2545] text-yellow-400'
                    : 'text-slate-600 hover:text-[#0B2545]'
                }`}
              >
                Retorno / E-mail
              </button>
            </div>

            {activeTab === 'whatsapp' ? (
              <div className="space-y-5">
                <div>
                  <span className="block text-sm font-bold text-[#0B2545] mb-2">
                    1. Volume da caçamba
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['3m³ (Compacta)', '4m³ (Padrão)', '5m³ (Grande)', 'Não sei ainda'].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setVolume(item)}
                          className={`px-3 py-2.5 rounded-lg border text-xs sm:text-sm font-bold transition-colors text-center ${
                            volume === item
                              ? 'border-yellow-500 bg-yellow-400 text-[#0B2545]'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400'
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="waste-type-select"
                    className="block text-sm font-bold text-[#0B2545] mb-2"
                  >
                    2. Material predominante
                  </label>
                  <select
                    id="waste-type-select"
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                  >
                    <option value="Entulho de obra e alvenaria">
                      Entulho de obra e alvenaria (tijolo, piso, concreto)
                    </option>
                    <option value="Terra e escavação">Terra limpa / escavação</option>
                    <option value="Madeira e restos de carpintaria">
                      Madeira e restos de carpintaria
                    </option>
                    <option value="Gesso / Drywall (separado)">
                      Gesso / Drywall (descarte separado)
                    </option>
                    <option value="Poda e limpeza de terreno">
                      Poda de árvores e limpeza de terreno
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="neighborhood-input"
                      className="block text-sm font-bold text-[#0B2545] mb-2"
                    >
                      3. Bairro e Cidade
                    </label>
                    <input
                      id="neighborhood-input"
                      type="text"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Ex: Centro, Belo Horizonte"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="delivery-period-select"
                      className="block text-sm font-bold text-[#0B2545] mb-2"
                    >
                      4. Previsão de entrega
                    </label>
                    <select
                      id="delivery-period-select"
                      value={deliveryPeriod}
                      onChange={(e) => setDeliveryPeriod(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                    >
                      <option value="Hoje ou amanhã">Hoje ou amanhã</option>
                      <option value="Esta semana">Ainda esta semana</option>
                      <option value="Agendamento futuro">Agendar data futura</option>
                    </select>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm sm:text-base font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2545]"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Enviar Pedido no WhatsApp Agora</span>
                </a>
              </div>
            ) : formSubmitted ? (
              <div className="py-8 px-4 text-center space-y-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-12 h-12 text-blue-800 mx-auto" />
                <h3 className="text-xl font-extrabold text-[#0B2545]">
                  Dados validados com sucesso
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Seu pedido para {volume} ({neighborhood}) está pronto. Conclua o envio agora pelo
                  WhatsApp ou pelo seu aplicativo de e-mail.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl(
                      `Olá! Meu nome é ${name.trim()}. Solicito orçamento de caçamba ${volume} (${wasteType}) para ${neighborhood.trim()}. Meu contato: ${phone.trim()}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-sm font-extrabold transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Concluir no WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                      `Orçamento Caçamba ${volume} - ${neighborhood.trim()}`
                    )}&body=${encodeURIComponent(
                      `Nome: ${name.trim()}\nTelefone: ${phone.trim()}\nBairro/Cidade: ${neighborhood.trim()}\nTamanho: ${volume}\nResíduo: ${wasteType}`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B2545] hover:bg-[#13315C] text-white text-sm font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Enviar por E-mail</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAltSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-sm font-bold text-[#0B2545] mb-1.5">
                      Nome completo ou Empresa *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="block text-sm font-bold text-[#0B2545] mb-1.5">
                      Telefone / WhatsApp com DDD *
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(31) 99999-9999"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-bold text-[#0B2545] mb-1.5">
                      E-mail (opcional)
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="voce@empresa.com.br"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-neighborhood" className="block text-sm font-bold text-[#0B2545] mb-1.5">
                      Bairro e Cidade *
                    </label>
                    <input
                      id="lead-neighborhood"
                      type="text"
                      required
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Bairro / Região"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0B2545] focus:outline-none"
                    />
                  </div>
                </div>

                {formError && (
                  <p role="alert" className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-[#0B2545] hover:bg-[#13315C] text-white text-sm font-extrabold transition-colors"
                >
                  Validar Dados para Orçamento
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
