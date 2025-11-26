import React from 'react';
import Section from './Section';
import { ContentData } from '../types';
import { PieChart } from 'lucide-react';

interface TokenomicsProps {
  content: ContentData['tokenomics'];
}

const Tokenomics: React.FC<TokenomicsProps> = ({ content }) => {
  return (
    <Section id="tokenomics" className="bg-burn-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <PieChart className="w-12 h-12 text-burn-gold mx-auto mb-4 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">{content.title}</h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-burn-gold to-transparent mx-auto mt-6"></div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {content.items.map((item, idx) => (
            <div key={idx} className="bg-burn-panel border border-burn-panel hover:border-burn-gold/30 p-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.05)] group">
              <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-2xl text-burn-champagne font-medium group-hover:text-burn-gold transition-colors">{item.value}</p>
              {item.note && (
                <p className="text-xs text-burn-amber mt-2 font-mono">[{item.note}]</p>
              )}
            </div>
          ))}
        </div>

        {/* Distribution */}
        <div className="bg-burn-black border border-burn-gold/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burn-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-2xl md:text-3xl text-burn-gold mb-8">{content.distributionTitle}</h3>
          
          <div className="space-y-8 relative z-10">
            {content.distributionPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-burn-gold group-hover:shadow-[0_0_8px_#D4AF37] transition-shadow"></div>
                <p className="text-gray-300 text-lg leading-relaxed flex-1">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tokenomics;