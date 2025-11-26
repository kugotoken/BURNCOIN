import React, { useState } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Tokenomics from './components/Tokenomics';
import ICO from './components/ICO';
import Mechanism from './components/Mechanism';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-burn-dark text-gray-200 selection:bg-burn-gold selection:text-black">
      <Header lang={lang} setLang={setLang} content={content.nav} />
      
      <main>
        <Hero content={content.hero} />
        <Vision abstract={content.abstract} vision={content.vision} />
        <Tokenomics content={content.tokenomics} />
        <ICO content={content.ico} risk={content.risk} />
        <Mechanism content={content.mechanism} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
}

export default App;