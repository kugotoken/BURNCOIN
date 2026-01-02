import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="256" cy="256" r="220" fill="#F3BA2F"/>
    <path d="M256 89C310 199 340 279 340 339A84 84 0 1 1 172 339C172 279 202 199 256 89Z" fill="#000000"/>
  </svg>
);