import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', intensity = 'medium' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const bgStyle = intensity === 'high' ? 'bg-obsidian/40' : intensity === 'low' ? 'bg-obsidian/20' : 'bg-obsidian/30';
  const blurStyle = intensity === 'high' ? 'backdrop-blur-2xl' : 'backdrop-blur-xl';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group rounded-3xl overflow-hidden border border-white/10 ${bgStyle} ${blurStyle} backdrop-saturate-150 shadow-xl ${className}`}
    >
      {/* Animated Gradient Border / Rim Light */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(243, 186, 47, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};