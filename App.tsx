import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Flame, Layers, Lock, Zap, Copy, Check, TrendingUp, Rocket } from 'lucide-react';
import { Logo } from './components/Logo';
import { GlassCard } from './components/GlassCard';
import { LiquidButton } from './components/LiquidButton';
import { AllocationChart } from './components/Chart';
import { CONTENT_ZH, CONTENT_EN } from './constants';
import { Language } from './types';

// Scroll Progress Bar
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/5">
      <div 
        className="h-full bg-gold shadow-[0_0_10px_#F3BA2F]" 
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}

const BackgroundEffect = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-obsidian">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-blob mix-blend-screen" />
    <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[130px] animate-blob animation-delay-4000 mix-blend-screen" />
    {/* Noise */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
  </div>
);

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [copied, setCopied] = useState(false);
  const content = lang === 'zh' ? CONTENT_ZH : CONTENT_EN;

  const toggleLang = () => setLang(l => l === 'zh' ? 'en' : 'zh');

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x18B1EFa66F0d9065557354823c31759105e0E0F1");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${lang === 'zh' ? 'font-serif' : 'font-sans'} text-gray-200 selection:bg-gold/30 selection:text-white`}>
      <ScrollProgress />
      <BackgroundEffect />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8 animate-pulse" />
          <span className="font-display font-bold text-xl tracking-widest text-white">BURN</span>
        </div>
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-gold/50 hover:text-gold transition-all duration-300 bg-black/40 backdrop-blur-md"
        >
          <Globe size={16} />
          <span className="uppercase text-xs font-bold tracking-wider">{lang === 'zh' ? 'English' : '中文'}</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gold blur-[100px] opacity-20 rounded-full"></div>
          <Logo className="w-48 h-48 md:w-64 md:h-64 relative z-10 drop-shadow-[0_0_30px_rgba(243,186,47,0.4)]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gold text-lg md:text-2xl font-light tracking-[0.2em] mb-12 uppercase text-glow"
        >
          {content.hero.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <LiquidButton variant="primary" onClick={() => window.open('https://t.me/BSC_BURN', '_blank')}>
            {content.hero.cta} <ArrowRight size={16} />
          </LiquidButton>
          
          <button 
            onClick={copyToClipboard}
            className="group relative flex items-center gap-3 px-6 py-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md hover:border-gold/50 hover:bg-black/60 transition-all duration-300 cursor-pointer text-left"
          >
            <div className="flex flex-col items-start">
               <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider mb-0.5">BSC Contract</span>
               <div className="flex items-center gap-2 font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                  0x18B1EFa66F0d9065557354823c31759105e0E0F1
               </div>
            </div>
            <div className="pl-3 border-l border-white/10 text-gold flex flex-col items-center justify-center min-w-[60px]">
               {copied ? <Check size={18} /> : <Copy size={18} />}
               <span className="text-[10px] mt-1 whitespace-nowrap opacity-80">
                 {copied ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '点击复制' : 'Copy')}
               </span>
            </div>
          </button>
        </motion.div>
      </section>

      {/* Summary & Vision */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-8">
        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
            <h2 className="text-3xl font-display text-white mb-6 border-l-4 border-gold pl-4">{content.summary.title}</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-justify">
              {Array.isArray(content.summary.description) && content.summary.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center" intensity="high">
            <h2 className="text-3xl font-display text-white mb-2">{content.vision.title}</h2>
            <h3 className="text-gold text-sm uppercase tracking-widest mb-6">{content.vision.subtitle}</h3>
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              "{content.vision.description}"
            </p>
          </GlassCard>
        </motion.div>
      </section>

      {/* Mechanics (The Core) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display text-center mb-16 text-white">
          <span className="text-gold">MECHANICS</span> // {content.mechanics.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dynamic Minting */}
          <GlassCard className="p-8 group hover:border-gold/30 transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{content.mechanics.part1.title}</h3>
            <p className="text-gold/80 text-sm uppercase tracking-wider mb-6">{content.mechanics.part1.desc}</p>
            <p className="text-gray-400 mb-6 leading-relaxed border-l-2 border-white/10 pl-4">{content.mechanics.part1.narrative}</p>
            <div className="bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs text-gold">
              {content.mechanics.part1.logic}
            </div>
          </GlassCard>

          {/* Protocol Burn */}
          <GlassCard className="p-8 group hover:border-gold/30 transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
              <Flame size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{content.mechanics.part2.title}</h3>
            <p className="text-gold/80 text-sm uppercase tracking-wider mb-6">{content.mechanics.part2.desc}</p>
            <p className="text-gray-400 mb-6 leading-relaxed border-l-2 border-white/10 pl-4">{content.mechanics.part2.narrative}</p>
            <div className="bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs text-red-400">
              {content.mechanics.part2.mechanism}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Tokenomics & Basics */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Basics List */}
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-display text-white mb-8">{content.basics.title}</h3>
              <ul className="space-y-6">
                {content.basics.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
                    <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</span>
                    <span className="text-white font-mono text-lg break-all">{item.value}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Distribution Chart */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <GlassCard className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-display text-white mb-8">{content.distribution.title}</h3>
              <div className="flex flex-col md:flex-row items-center gap-8 flex-grow">
                <div className="w-full md:w-5/12 h-[300px]">
                   <AllocationChart data={content.distribution.data} />
                </div>
                <div className="w-full md:w-7/12 space-y-6">
                  {content.distribution.data.map((d, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-end mb-1">
                         <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: ['#F3BA2F', '#FFD700', '#D4A017', '#B8860B', '#CD853F', '#8B4513', '#3d3d3d'][i % 7] }}></div>
                           <span className="text-white font-bold">{d.name}</span>
                         </div>
                         <span className="text-gold font-mono font-bold text-lg">{d.value}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-2">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${d.value}%` }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className="h-full"
                           style={{ backgroundColor: ['#F3BA2F', '#FFD700', '#D4A017', '#B8860B', '#CD853F', '#8B4513', '#3d3d3d'][i % 7] }}
                         />
                      </div>
                      
                      <div className="flex justify-between items-start text-xs text-gray-500">
                        <span>{d.amount}</span>
                        <span className="text-right max-w-[200px] leading-tight opacity-70 group-hover:opacity-100 transition-opacity">{d.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* Seed Rounds Table */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <GlassCard className="p-1 px-1 md:p-8 overflow-hidden">
          <div className="p-6 md:p-8 text-center bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl relative">
             <h2 className="text-3xl md:text-4xl font-display text-white mb-3">{content.seed.title}</h2>
             <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">{content.seed.subtitle}</p>
             
             {/* Listing Price Badge */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold font-bold shadow-[0_0_20px_rgba(243,186,47,0.15)] animate-pulse"
             >
               <Rocket size={18} />
               <span>{content.seed.listingPrice}</span>
             </motion.div>
          </div>
          
          <div className="p-4 md:p-8">
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10 text-gold/70 text-xs font-bold uppercase tracking-widest">
                    {content.seed.headers.map((h, i) => (
                      <th key={i} className={`py-6 px-4 ${i === 0 ? 'pl-6' : ''} ${i === content.seed.headers.length - 1 ? 'pr-6 text-right' : i > 0 ? 'text-right' : ''}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {content.seed.data.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group relative">
                      {/* Phase */}
                      <td className="py-8 px-4 pl-6 relative">
                        <div className="flex flex-col">
                           <span className="text-white font-bold text-lg font-sans mb-1 group-hover:text-gold transition-colors">{row.phase}</span>
                           <div className="flex items-center gap-1.5 text-[10px] text-green-400 uppercase tracking-wider font-bold">
                             <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                             Upcoming
                           </div>
                        </div>
                      </td>
                      
                      {/* Amount */}
                      <td className="py-8 px-4 text-right text-gray-300">{row.amount}</td>
                      
                      {/* BNB Raised */}
                      <td className="py-8 px-4 text-right">
                        <span className="text-white font-bold">{row.bnbRaise} <span className="text-gold text-xs">BNB</span></span>
                      </td>
                      
                      {/* Rate */}
                      <td className="py-8 px-4 text-right text-gray-400">{row.rate}</td>
                      
                      {/* Price */}
                      <td className="py-8 px-4 pr-6 text-right">
                        <div className="inline-flex flex-col items-end">
                          <span className="px-4 py-1.5 rounded-full bg-gold text-black font-bold text-sm shadow-[0_0_15px_rgba(243,186,47,0.4)] mb-1.5">
                            {row.price}
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wide">Fixed Price</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Returns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
               {content.seed.returns.map((ret, i) => (
                 <div key={i} className="group relative overflow-hidden rounded-xl bg-white/5 p-4 border border-white/5 hover:border-gold/30 transition-colors">
                   <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                       <TrendingUp size={14} className="text-gold" />
                     </div>
                     <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{ret}</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Value Support - Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-white mb-4">{content.value.title}</h2>
          <p className="text-gold">{content.value.core}</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {content.value.points.map((pt, i) => {
            const icons = [<Lock key="1" />, <Flame key="2" />, <Zap key="3" />];
            return (
              <motion.div key={i} variants={item}>
                <GlassCard className="p-8 h-full group hover:-translate-y-2 transition-transform duration-500">
                  <div className="mb-6 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                    {icons[i]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{pt.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Logo className="w-12 h-12 mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
          <p className="text-gray-600 text-xs max-w-2xl mx-auto mb-8 leading-normal">
            {content.footer.disclaimer}
          </p>
          <div className="text-white/20 text-xs font-mono tracking-widest uppercase">
            {content.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;