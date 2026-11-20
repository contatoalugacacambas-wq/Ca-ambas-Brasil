import React, { useEffect, useState } from 'react';
import { LegalDocType } from './LegalModal';

interface CookieBannerProps {
  onOpenPrivacy: (doc: LegalDocType) => void;
}

const COOKIE_STORAGE_KEY = 'cacambas_brasil_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'all' | 'essential') => {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, choice);
    } catch {
      // ignore storage errors in restricted environments
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de privacidade e cookies"
      className="fixed bottom-20 left-3 right-3 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50 rounded-xl bg-white border border-slate-200 shadow-lg px-3.5 py-2.5 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
    >
      <p className="leading-snug">
        Usamos cookies essenciais (LGPD).{' '}
        <button
          type="button"
          onClick={() => onOpenPrivacy('privacy')}
          className="font-semibold text-slate-900 underline underline-offset-2"
        >
          Política de Privacidade
        </button>
        .
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => handleChoice('all')}
          className="px-3 py-1.5 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-semibold transition-colors whitespace-nowrap"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => handleChoice('essential')}
          className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium transition-colors whitespace-nowrap"
        >
          Essenciais
        </button>
      </div>
    </aside>
  );
};
