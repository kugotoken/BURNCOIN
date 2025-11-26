import React from 'react';
import { ContentData } from '../types';
import { Flame, Twitter, Send } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

interface FooterProps {
  content: ContentData['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-burn-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
           <Flame className="text-burn-gold" />
           <span className="font-serif font-bold text-white">BURN PROTOCOL</span>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p className="mb-2">{content.rights}</p>
          <p className="text-xs text-gray-600">{content.disclaimer}</p>
        </div>

        <div className="flex gap-4">
           <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-burn-panel flex items-center justify-center text-gray-400 hover:text-burn-gold hover:bg-burn-panel/80 transition-all">
             <Send size={18} />
           </a>
           <a href="#" className="w-10 h-10 rounded-full bg-burn-panel flex items-center justify-center text-gray-400 hover:text-burn-gold hover:bg-burn-panel/80 transition-all">
             <Twitter size={18} />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;