/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DumpsterModels } from './components/DumpsterModels';
import { WhatsAppQuoteBuilder } from './components/WhatsAppQuoteBuilder';
import { ProcessSection } from './components/ProcessSection';
import { WasteComplianceSection } from './components/WasteComplianceSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-slate-900 overflow-x-clip">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DumpsterModels />
        <WhatsAppQuoteBuilder />
        <ProcessSection />
        <WasteComplianceSection />
        <FaqSection />
      </main>
      <Footer onOpenLegal={setActiveLegalDoc} />
      <LegalModal activeDoc={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />
      <CookieBanner onOpenPrivacy={setActiveLegalDoc} />
      <FloatingWhatsAppButton />
    </div>
  );
}
