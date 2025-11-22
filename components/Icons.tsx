import React from 'react';
import { Flame, Globe, ExternalLink, ShieldCheck, TrendingUp, Hammer, Lock } from 'lucide-react';

export const FireIcon = ({ className }: { className?: string }) => (
  <Flame className={className} />
);

export const GlobeIcon = ({ className }: { className?: string }) => (
  <Globe className={className} />
);

export const LinkIcon = ({ className }: { className?: string }) => (
  <ExternalLink className={className} />
);

export const ShieldIcon = ({ className }: { className?: string }) => (
  <ShieldCheck className={className} />
);

export const TrendingIcon = ({ className }: { className?: string }) => (
  <TrendingUp className={className} />
);

export const HammerIcon = ({ className }: { className?: string }) => (
  <Hammer className={className} />
);

export const LockIcon = ({ className }: { className?: string }) => (
  <Lock className={className} />
);

export const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.863 1.137c-.565.226-1.133.452-1.39.593-.508.279-.823.834-.772 1.415.06.678.576 1.202 1.256 1.37 1.04.258 2.376.576 3.68 1.013.024.008.048.017.072.025l.656 2.185c.21.7.365 1.203.518 1.612.154.408.338.745.62 1.007.283.262.636.375.985.285.463-.12.85-.486 1.243-.856.323-.305.657-.62 1.07-.993 1.225.938 2.609 1.998 3.98 2.487a2.02 2.02 0 0 0 .666.11c.515 0 1.006-.208 1.37-.583.41-.423.68-1.02.926-2.067l3.346-14.26a2.25 2.25 0 0 0-.285-1.712 2.24 2.24 0 0 0-1.7-.925Zm-6.227 6.48-1.576 5.592-3.92-1.98 5.496-3.612Z" />
  </svg>
);