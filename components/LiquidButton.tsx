import React from 'react';
import { motion } from 'framer-motion';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 rounded-full font-bold tracking-wider uppercase text-sm overflow-hidden group
        ${isPrimary ? 'text-black' : 'text-gold border border-gold/30'}
        ${className}
      `}
    >
      {/* Background Fluid Effect */}
      <div className={`absolute inset-0 w-full h-full transition-all duration-300 ${isPrimary ? 'bg-gold' : 'bg-transparent'}`}>
         {/* Metaball / Liquid Overlay on Hover */}
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent blur-md"></div>
      </div>

      {/* Ray Tracing Light Trail for secondary */}
      {!isPrimary && (
        <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow for Primary */}
      {isPrimary && (
        <div className="absolute inset-0 rounded-full blur-xl bg-gold/50 -z-10 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      )}
    </motion.button>
  );
};