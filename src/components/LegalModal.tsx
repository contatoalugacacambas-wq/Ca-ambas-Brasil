import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteConfig';

export type LegalDocType = 'privacy' | 'terms' | 'company' | null;

interface LegalModalProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeDoc, onClose }) => {
  useEffect(() => {
    if (!activeDoc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDoc, onClose]);

  if (!activeDoc) return null;

  const titles: Record<Exclude<LegalDocType, null>, string> = {
    privacy: 'Política de Privacidade e Proteção de Dados (LGPD)',
    terms: 'Termos de Uso e Condições Gerais de Locação',
    company: 'Transparência Empresarial e Dados Cadastrais',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 text-slate-800 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <h2 id="legal-modal-title" className="text-xl font-extrabold text-slate-900">
            {titles[activeDoc]}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
          {activeDoc === 'privacy' && (
            <>
              <p>
                A <strong>{COMPANY_INFO.legalName}</strong> (nome fantasia{' '}
                <strong>{COMPANY_INFO.brandName}</strong>), inscrita no CNPJ sob o nº{' '}
                <span className="font-mono">{COMPANY_INFO.cnpj}</span>, respeita a privacidade dos
                usuários e atua em conformidade com a Lei Geral de Proteção de Dados Pessoais
                (LGPD – Lei nº 13.709/2018).
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                1. Coleta e Finalidade dos Dados
              </h3>
              <p>
                Os dados eventualmente informados pelo usuário ao iniciar atendimento via WhatsApp,
                telefone ou formulário de solicitação de orçamento (nome, telefone, e-mail, bairro
                e endereço de entrega) são utilizados exclusivamente para elaborar cotações,
                agendar entregas/retiradas de caçambas, emitir Notas Fiscais e gerar o Controle de
                Transporte de Resíduos (CTR).
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                2. Compartilhamento e Segurança
              </h3>
              <p>
                Não comercializamos, alugamos ou cedemos dados pessoais a terceiros para fins de
                marketing. As informações podem ser compartilhadas apenas quando estritamente
                necessário para cumprimento de obrigações fiscais, legais ou ambientais junto aos
                órgãos competentes e áreas de destinação licenciadas.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                3. Cookies e Mensuração de Campanhas
              </h3>
              <p>
                Utilizamos cookies essenciais de funcionamento e, mediante consentimento, métricas
                básicas de desempenho para avaliar a eficácia dos nossos canais de atendimento.
                Você pode gerenciar suas preferências de cookies a qualquer momento.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                4. Direitos do Titular e Contato do Encarregado
              </h3>
              <p>
                Você pode solicitar confirmação de tratamento, acesso, correção ou eliminação de
                seus dados pessoais enviando solicitação para{' '}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-slate-900 underline"
                >
                  {COMPANY_INFO.email}
                </a>{' '}
                ou pelo telefone <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>.
              </p>
            </>
          )}

          {activeDoc === 'terms' && (
            <>
              <p>
                Estes Termos regulam a contratação dos serviços de locação de caçambas
                estacionárias prestados por <strong>{COMPANY_INFO.legalName}</strong> (
                <strong>{COMPANY_INFO.brandName}</strong>), CNPJ{' '}
                <span className="font-mono">{COMPANY_INFO.cnpj}</span>.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                1. Objeto e Orçamento
              </h3>
              <p>
                Os valores informados pela central de atendimento contemplam a entrega da caçamba
                no endereço combinado, a permanência pelo prazo contratado e a retirada com
                destinação ambiental em unidade licenciada. Tarifas específicas variam conforme
                volume (3m³, 4m³ ou 5m³), tipo de resíduo e localização.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                2. Responsabilidade sobre Resíduos e Limite de Carga
              </h3>
              <p>
                O locatário compromete-se a depositar exclusivamente resíduos da construção civil
                permitidos, respeitando o nível máximo da borda superior da caçamba. É proibido o
                descarte de lixo orgânico, produtos químicos, tintas, solventes, pneus, amianto e
                resíduos hospitalares ou perigosos.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                3. Posicionamento e Normas de Trânsito
              </h3>
              <p>
                Quando posicionada em via pública, a caçamba deve obedecer à sinalização e às
                normas municipais de trânsito. Caso o local exija autorização prévia da prefeitura
                ou taxa de estacionamento rotativo, a responsabilidade pela regularização deve ser
                verificada antes da entrega.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                4. Reagendamento e Cancelamento
              </h3>
              <p>
                Alterações de horário ou cancelamentos devem ser comunicados com antecedência pelo
                WhatsApp <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span> antes da
                saída do caminhão da base operacional.
              </p>
            </>
          )}

          {activeDoc === 'company' && (
            <>
              <p>
                Para sua segurança e em cumprimento às diretrizes de transparência comercial e
                publicidade responsável, apresentamos os dados oficiais da empresa operadora deste
                site:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 font-mono text-xs sm:text-sm text-slate-800">
                <p>
                  <span className="text-slate-500">Nome Fantasia:</span> {COMPANY_INFO.brandName}
                </p>
                <p>
                  <span className="text-slate-500">Razão Social:</span> {COMPANY_INFO.legalName}
                </p>
                <p>
                  <span className="text-slate-500">CNPJ:</span> {COMPANY_INFO.cnpj}
                </p>
                <p>
                  <span className="text-slate-500">Telefone / WhatsApp:</span>{' '}
                  {COMPANY_INFO.phoneInternational}
                </p>
                <p>
                  <span className="text-slate-500">E-mail:</span> {COMPANY_INFO.email}
                </p>
                <p>
                  <span className="text-slate-500">Horário Comercial:</span>{' '}
                  {COMPANY_INFO.hoursWeek} · {COMPANY_INFO.hoursSaturday}
                </p>
              </div>
              <p>
                Todas as locações contam com emissão de Nota Fiscal de serviço e encaminhamento de
                resíduos para locais ambientalmente autorizados.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white text-sm font-semibold transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
