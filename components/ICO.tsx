import React from 'react';
import Section from './Section';
import { ContentData } from '../types';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface ICOProps {
  content: ContentData['ico'];
  risk: ContentData['risk'];
}

const ICO: React.FC<ICOProps> = ({ content, risk }) => {
  return (
    <Section id="ico" className="bg-burn-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-burn-gold text-sm tracking-[0.3em] uppercase font-bold">Launch</span>
          <h2 className="text-4xl md:text-6xl text-white mt-2 mb-6">{content.title}</h2>
          <p className="text-gray-400 text-xl max-w-2xl">{content.description}</p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto pb-4 mb-12">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-burn-gold/20">
                {content.tableHeaders.map((header, idx) => (
                  <th key={idx} className="py-6 px-4 text-xs uppercase tracking-widest text-burn-gold font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.phases.map((phase, idx) => (
                <tr key={idx} className="border-b border-burn-panel hover:bg-burn-panel/30 transition-colors">
                  <td className="py-6 px-4 font-serif text-xl text-white">{phase.stage}</td>
                  <td className="py-6 px-4 font-mono text-gray-300">{phase.amount}</td>
                  <td className="py-6 px-4 font-mono text-gray-300">{phase.bnbCap}</td>
                  <td className="py-6 px-4 font-mono text-burn-champagne">{phase.rate}</td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-1 text-green-400 font-bold bg-green-900/20 px-2 py-1 rounded">
                      <TrendingUp size={14} /> {phase.roi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-burn-panel/50 p-8 rounded-lg border-l-4 border-burn-gold">
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Mechanics</h4>
             <ul className="space-y-3">
               {content.notes.map((note, idx) => (
                 <li key={idx} className="text-gray-400 text-sm flex gap-2">
                   <span className="text-burn-gold">•</span> {note}
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="bg-red-900/10 p-8 rounded-lg border border-red-900/30">
             <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-red-500" size={20} />
                <h4 className="text-red-400 font-bold uppercase text-sm tracking-wider">{risk.title}</h4>
             </div>
             <ul className="space-y-2">
               {risk.points.slice(0, 3).map((point, idx) => (
                 <li key={idx} className="text-gray-400 text-xs leading-relaxed">
                   {point}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ICO;