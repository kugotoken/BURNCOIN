import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Flame, ArrowRight } from 'lucide-react';
import { ContentData } from '../types';
import { CONTRACT_ADDRESS, TELEGRAM_LINK } from '../constants';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burn-gold/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-burn-fire/10 rounded-full blur-[80px]" />
        {/* Mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-burn-gold blur-2xl opacity-20 animate-pulse"></div>
             <Flame className="w-24 h-24 md:w-32 md:h-32 text-burn-gold fill-burn-amber mx-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-4 gold-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {content.title}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed whitespace-pre-line"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {content.slogan}
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border border-burn-gold text-burn-gold font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-burn-black"
          >
            <div className="absolute inset-0 w-0 bg-burn-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
            <span className="relative flex items-center gap-2">
              {content.cta} <ArrowRight size={18} />
            </span>
          </a>

          <a 
            href="#mechanism" 
            className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-burn-gold/50"
          >
            {content.telegram}
          </a>
        </motion.div>

        <motion.div
           className="inline-flex flex-col md:flex-row items-center gap-3 px-6 py-3 bg-burn-panel/50 backdrop-blur-sm border border-burn-panel rounded-lg"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">{content.contractLabel}</span>
          <div className="flex items-center gap-2 font-mono text-sm text-burn-champagne">
            <span className="break-all md:break-normal">{CONTRACT_ADDRESS}</span>
            <button onClick={copyAddress} className="text-burn-gold hover:text-white transition-colors">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-burn-gold to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;