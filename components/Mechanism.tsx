import React from 'react';
import Section from './Section';
import { ContentData } from '../types';
import { Hammer, Flame, ShieldCheck } from 'lucide-react';

interface MechanismProps {
  content: ContentData['mechanism'];
}

const Mechanism: React.FC<MechanismProps> = ({ content }) => {
  return (
    <Section id="mechanism" className="bg-gradient-to-b from-burn-black to-burn-dark pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-burn-champagne mb-4">{content.title}</h2>
          <p className="text-burn-gold/80 text-lg uppercase tracking-widest">{content.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forge Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-burn-gold opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="relative h-full bg-burn-panel border border-burn-panel p-8 rounded-2xl overflow-hidden hover:border-burn-gold/50 transition-colors">
              <div className="w-14 h-14 bg-burn-black rounded-xl flex items-center justify-center mb-6 border border-burn-gold/20 text-burn-gold">
                <Hammer size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">{content.forgeTitle}</h3>
              <ul className="space-y-4">
                {content.forgePoints.map((p, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed border-b border-white/5 pb-3 last:border-0">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buyback Card - Featured */}
          <div className="relative group lg:-mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-burn-gold to-burn-fire opacity-10 blur-2xl"></div>
            <div className="relative h-full bg-[#181818] border border-burn-gold p-8 rounded-2xl shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Flame size={120} />
               </div>
              <div className="w-16 h-16 bg-gradient-to-br from-burn-gold to-burn-amber rounded-xl flex items-center justify-center mb-8 text-black shadow-lg">
                <Flame size={32} />
              </div>
              <h3 className="text-3xl font-serif text-burn-gold mb-6">{content.buybackTitle}</h3>
              <ul className="space-y-4">
                {content.buybackPoints.map((p, i) => (
                  <li key={i} className="text-gray-300 text-base leading-relaxed flex gap-3">
                    <span className="text-burn-gold mt-1">›</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Security Card */}
          <div className="relative group">
             <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500"></div>
            <div className="relative h-full bg-burn-panel border border-burn-panel p-8 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-colors">
              <div className="w-14 h-14 bg-burn-black rounded-xl flex items-center justify-center mb-6 border border-white/10 text-gray-300 group-hover:text-blue-400 transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">{content.securityTitle}</h3>
              <ul className="space-y-4">
                {content.securityPoints.map((p, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed border-b border-white/5 pb-3 last:border-0">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mechanism;