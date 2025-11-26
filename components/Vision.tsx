import React from 'react';
import Section from './Section';
import { ContentData } from '../types';
import { Quote } from 'lucide-react';

interface VisionProps {
  abstract: ContentData['abstract'];
  vision: ContentData['vision'];
}

const Vision: React.FC<VisionProps> = ({ abstract, vision }) => {
  return (
    <>
      <Section id="abstract" className="bg-burn-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-4xl text-burn-gold mb-6">{abstract.title}</h2>
              <div className="h-1 w-20 bg-burn-gold"></div>
            </div>
            <div className="md:w-2/3 space-y-6">
              {abstract.content.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-lg font-light border-l-2 border-burn-panel pl-6">
                  {p}
                </p>
              ))}
              <div className="mt-12 p-8 bg-gradient-to-br from-burn-panel to-transparent border border-burn-gold/10 rounded-xl relative overflow-hidden">
                <Quote className="absolute top-4 left-4 text-burn-gold/10 w-16 h-16 transform -scale-x-100" />
                <p className="text-2xl md:text-3xl font-serif text-center text-burn-champagne italic relative z-10">
                  "{abstract.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="vision" className="bg-burn-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-burn-gold/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1 relative">
              {/* Decorative circle */}
              <div className="w-full aspect-square border border-burn-gold/20 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                 <div className="w-[90%] aspect-square border border-dashed border-burn-gold/10 rounded-full"></div>
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-burn-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <span className="text-6xl font-serif text-burn-gold block mb-2">0%</span>
                    <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Tax</span>
                 </div>
              </div>
           </div>

           <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl text-burn-champagne mb-8">{vision.title}</h2>
              <p className="text-xl text-gray-400 mb-10">{vision.description}</p>
              <div className="space-y-6">
                {vision.points.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-burn-gold/50 text-burn-gold flex items-center justify-center font-mono text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Vision;