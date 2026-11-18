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
    terms: 'Termos de Uso e Condições Gerais de Atendimento',
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
                <span className="font-mono">{COMPANY_INFO.cnpj}</span>, operadora do domínio{' '}
                <span className="font-mono">{COMPANY_INFO.domain}</span>, respeita a privacidade
                dos usuários e atua em conformidade com a Lei Geral de Proteção de Dados Pessoais
                (LGPD – Lei nº 13.709/2018).
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                1. Coleta e Finalidade dos Dados
              </h3>
              <p>
                Os dados informados voluntariamente pelo usuário ao iniciar atendimento via
                WhatsApp, telefone ou e-mail (como cidade, bairro, nome, telefone e informações
                sobre a obra) são utilizados para consultar disponibilidade na região, elaborar
                orçamentos, coordenar entrega e retirada junto ao parceiro local e providenciar
                documentação fiscal ou operacional aplicável.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                2. Compartilhamento e Segurança
              </h3>
              <p>
                Não comercializamos dados pessoais a terceiros. As informações necessárias para o
                atendimento podem ser compartilhadas com o parceiro operacional responsável pela
                região solicitada ou para cumprimento de obrigações legais e fiscais aplicáveis.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                3. Cookies e Preferências de Privacidade
              </h3>
              <p>
                Utilizamos cookies essenciais de funcionamento e respeitamos a escolha do usuário
                quanto a cookies opcionais de mensuração. Nenhum consentimento publicitário é
                ativado automaticamente sem interação do visitante.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                4. Direitos do Titular e Contato
              </h3>
              <p>
                Você pode solicitar acesso, correção ou exclusão de seus dados enviando e-mail para{' '}
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
                Estes Termos regulam as consultas e solicitações de locação de caçambas
                estacionárias intermediadas pela central da <strong>{COMPANY_INFO.legalName}</strong>{' '}
                (<strong>{COMPANY_INFO.brandName}</strong>), CNPJ{' '}
                <span className="font-mono">{COMPANY_INFO.cnpj}</span>.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                1. Rede de Parceiros e Confirmação de Disponibilidade
              </h3>
              <p>
                O atendimento ocorre por meio de parceiros em diversas regiões do Brasil, sujeito à
                disponibilidade operacional na cidade e bairro informados. Valores, prazos de
                permanência, formas de pagamento e documentação aplicável (como Nota Fiscal e
                CTR/MTR, quando exigidos no município) são confirmados pela central antes do
                agendamento.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                2. Responsabilidade sobre Resíduos e Limites
              </h3>
              <p>
                O contratante compromete-se a descartar apenas resíduos permitidos e informados no
                pedido, respeitando o limite da borda superior da caçamba e as orientações de peso
                confirmadas pela central.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                3. Posicionamento e Normas Municipais
              </h3>
              <p>
                O posicionamento em via pública ou área interna depende de acesso adequado e do
                cumprimento das normas municipais de trânsito da cidade atendida.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                4. Alterações e Cancelamentos
              </h3>
              <p>
                Alterações de endereço, data ou cancelamentos devem ser solicitados com
                antecedência pelo WhatsApp <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>.
              </p>
            </>
          )}

          {activeDoc === 'company' && (
            <>
              <p>
                Dados oficiais da empresa responsável pela central de atendimento da{' '}
                <strong>{COMPANY_INFO.brandName}</strong>:
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
                  <span className="text-slate-500">Domínio Oficial:</span> {COMPANY_INFO.domain}
                </p>
                <p>
                  <span className="text-slate-500">Telefone / WhatsApp:</span>{' '}
                  {COMPANY_INFO.phoneInternational}
                </p>
                <p>
                  <span className="text-slate-500">E-mail:</span> {COMPANY_INFO.email}
                </p>
              </div>
              <p>
                Atendimento realizado por rede de parceiros conforme disponibilidade na cidade
                solicitada. Condições comerciais e documentação são informadas pela central antes
                da confirmação do pedido.
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
