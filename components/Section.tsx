import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', noPadding = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative w-full ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;