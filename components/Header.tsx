import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Flame } from 'lucide-react';
import { Language, ContentData } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh');
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-burn-black/90 backdrop-blur-md border-b border-burn-goldDim/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          {/* 你的新 SVG 图标 */}
          <svg 
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8 md:w-9 md:h-9 shadow-lg"
          >
            <circle cx="256" cy="256" r="220" fill="#D4AF37"/> {/* 这里用了你项目定义的金色 */}
            <path d="M256 89C310 199 340 279 340 339A84 84 0 1 1 172 339C172 279 202 199 256 89Z" fill="#000000"/>
          </svg>
          <span className="font-serif font-bold text-xl tracking-wider text-burn-champagne">BURN</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { key: 'vision', label: content.vision },
            { key: 'tokenomics', label: content.tokenomics },
            { key: 'ico', label: content.ico },
            { key: 'mechanism', label: content.mechanism },
          ].map((item) => (
            <button 
              key={item.key} 
              onClick={() => scrollTo(item.key)}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-burn-gold transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-1 text-burn-gold hover:text-white transition-colors border border-burn-gold/30 px-3 py-1 rounded-full"
          >
            <Globe size={14} />
            <span className="text-xs font-bold">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-1 text-burn-gold border border-burn-gold/30 px-2 py-1 rounded-full"
          >
             <span className="text-xs font-bold">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-burn-champagne">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-burn-black border-b border-burn-gold/20 p-6 flex flex-col space-y-6">
           {[
            { key: 'vision', label: content.vision },
            { key: 'tokenomics', label: content.tokenomics },
            { key: 'ico', label: content.ico },
            { key: 'mechanism', label: content.mechanism },
          ].map((item) => (
            <button 
              key={item.key} 
              onClick={() => scrollTo(item.key)}
              className="text-lg font-serif text-left text-burn-champagne"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
