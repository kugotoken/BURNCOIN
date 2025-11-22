import React, { useState, useEffect } from 'react';
import { Language, Content } from './types';
import { CONTENT } from './constants';
import { FireIcon, GlobeIcon, LinkIcon, ShieldIcon, TrendingIcon, HammerIcon, LockIcon, TelegramIcon } from './components/Icons';
import { TokenomicsChart } from './components/DonutChart';

const App = () => {
  const [lang, setLang] = useState<Language>('CN');
  const t: Content = CONTENT[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'CN' ? 'EN' : 'CN');
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-burn-dark text-gray-200 font-sans selection:bg-burn-orange selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <FireIcon className="h-8 w-8 text-burn-red animate-pulse" />
              <span className="font-black text-xl tracking-tighter text-white">BURN COIN</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { key: 'vision', label: t.nav.vision },
                  { key: 'tokenomics', label: t.nav.tokenomics },
                  { key: 'mechanism', label: t.nav.mechanism },
                  { key: 'ico', label: t.nav.ico },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="hover:text-burn-gold text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://t.me/BURN_2025" 
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] px-4 py-1.5 rounded-full text-sm font-medium transition-all border border-[#229ED9]/20"
              >
                <TelegramIcon className="w-4 h-4" />
                Telegram
              </a>
              
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="text-sm font-bold">{lang}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-burn-red/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burn-orange/10 border border-burn-orange/20 text-burn-orange mb-8">
            <FireIcon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wide">{t.hero.subtitle}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white leading-tight">
            <span className="block">{t.hero.title.split(' ')[0]}</span>
            <span className="text-gradient">{t.hero.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            {t.hero.desc}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/BURN_2025" target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-burn-red to-burn-orange text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] transition-all transform hover:-translate-y-1 text-center">
              {t.hero.tg}
            </a>
            <button className="px-8 py-4 glass-panel border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center">
              {t.hero.cta}
            </button>
          </div>

          {/* Key Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-panel p-6 rounded-xl border border-burn-gold/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-burn-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-black text-white mb-1">{t.stats.supply}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t.stats.supplyLabel}</div>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-burn-gold/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-burn-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-black text-burn-orange mb-1">{t.stats.tax}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t.stats.taxLabel}</div>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-burn-gold/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-burn-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-black text-white mb-1">{t.stats.chain}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t.stats.chainLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.vision.title}</h2>
            <div className="h-1 w-20 bg-burn-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.vision.cards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-burn-orange/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-burn-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-burn-orange/20 transition-colors">
                  {idx === 0 && <TrendingIcon className="text-burn-orange w-6 h-6" />}
                  {idx === 1 && <FireIcon className="text-burn-orange w-6 h-6" />}
                  {idx === 2 && <ShieldIcon className="text-burn-orange w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics & Mechanism Split */}
      <section id="tokenomics" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Chart */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t.nav.tokenomics}</h2>
              <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <TokenomicsChart />
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-white/5 rounded border-l-2 border-[#fbbf24]">
                    <span className="block text-gray-400">Initial Liquidity</span>
                    <span className="font-bold text-white">0.5% (5M BURN)</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded border-l-2 border-[#ea580c]">
                    <span className="block text-gray-400">ICO</span>
                    <span className="font-bold text-white">9.5% (95M BURN)</span>
                  </div>
                  <div className="col-span-2 p-3 bg-white/5 rounded border-l-2 border-[#7c2d12]">
                    <span className="block text-gray-400">Forge Pool</span>
                    <span className="font-bold text-white">90% (900M BURN) - Locked Forever</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mechanism */}
            <div id="mechanism">
              <h2 className="text-3xl font-bold text-white mb-8">{t.mechanism.title}</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burn-gold to-burn-orange flex items-center justify-center shadow-lg shadow-burn-orange/20">
                      <HammerIcon className="text-black w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t.mechanism.forgeTitle}</h3>
                    <p className="text-gray-400 leading-relaxed">{t.mechanism.forgeDesc}</p>
                  </div>
                </div>

                <div className="w-0.5 h-12 bg-white/10 ml-5"></div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burn-red to-burn-orange flex items-center justify-center shadow-lg shadow-burn-red/20">
                      <FireIcon className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t.mechanism.buybackTitle}</h3>
                    <p className="text-gray-400 leading-relaxed">{t.mechanism.buybackDesc}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ICO Section */}
      <section id="ico" className="py-20 bg-gradient-to-b from-black via-[#110500] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ico.title}</h2>
            <p className="text-gray-400">Total Target: 200 BNB</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />

            {t.ico.phases.map((phase, idx) => (
              <div key={idx} className="relative z-10 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-8 h-8 bg-burn-gold text-black font-bold rounded-full flex items-center justify-center text-sm shadow-lg shadow-burn-gold/50">
                  {idx + 1}
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-burn-gold">{phase.phase}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Distribution</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400 text-sm">Amount</span>
                    <span className="text-white font-medium">{phase.amount}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400 text-sm">Target</span>
                    <span className="text-white font-medium">{phase.bnb}</span>
                  </div>
                  <div className="mt-4 p-3 bg-burn-orange/10 rounded text-center">
                    <span className="text-burn-orange font-bold text-sm">{phase.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Footer */}
      <footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FireIcon className="h-6 w-6 text-burn-red" />
                <span className="font-black text-xl text-white">BURN</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                The Ultimate On-Chain Deflationary Forge Protocol. 
                Deployed on Binance Smart Chain.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="https://t.me/BURN_2025" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-burn-blue transition-colors">
                   <TelegramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-red-900/10 border border-red-900/20 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3 text-red-500">
                <ShieldIcon className="w-5 h-5" />
                <h4 className="font-bold">{t.risks.title}</h4>
              </div>
              <p className="text-red-200/60 text-xs leading-relaxed">
                {t.risks.desc}
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;