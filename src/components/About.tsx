import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTIST_BIOGRAPHY, AWARDS } from '../data';
import { Award, Sparkles, Paintbrush, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const [activeMethod, setActiveMethod] = useState<number>(0);

  const icons = [
    <Paintbrush className="w-4 h-4 text-gold" />,
    <Layers className="w-4 h-4 text-gold" />,
    <BookOpen className="w-4 h-4 text-gold" />,
  ];

  return (
    <section id="about" className="py-24 bg-sand/30 border-t border-sand/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Core Profile & Statement (Desktop Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio Image & Awards (Left - 5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Offset Frame border */}
            <div className="absolute inset-0 border border-gold translate-x-4 translate-y-4 -z-10" />

            {/* Main Studio Frame */}
            <div className="relative border-[12px] border-card-hover shadow-xl overflow-hidden aspect-square w-full">
              <img
                id="about-studio-image"
                src={ARTIST_BIOGRAPHY.studio}
                alt="James Ricardo Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-charcoal/5" />
            </div>

            {/* Mini Label badge */}
            <div className="absolute bottom-4 right-4 bg-charcoal/90 text-cream px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase blur-backdrop">
              Studio &bull; Prague, CZ
            </div>
          </div>

          {/* Statement & Bio (Right - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              The Artist Statement
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-2 tracking-tight">
              {ARTIST_BIOGRAPHY.name}
            </h2>
            <p className="font-mono text-xs text-charcoal/40 tracking-wider uppercase mt-1">
              {ARTIST_BIOGRAPHY.title} &bull; Born Prague, Czech Republic
            </p>

            <div className="mt-8 font-sans text-sm md:text-base text-charcoal/70 font-light leading-relaxed whitespace-pre-line max-w-2xl">
              {ARTIST_BIOGRAPHY.statement}
            </div>

            {/* List of Awards */}
            <div className="mt-12 border-t border-sand/70 pt-8">
              <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold font-bold mb-4 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Selected Honors & Awards</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-awards-list">
                {AWARDS.map((award, idx) => (
                  <motion.div
                    key={idx}
                    id={`award-item-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col p-4 bg-card-bg/80 border border-border-subtle rounded-none hover:bg-card-bg transition-all duration-300"
                  >
                    <span className="font-mono text-[10px] text-gold">{award.year}</span>
                    <span className="font-serif text-sm text-charcoal font-medium mt-1 leading-tight">
                      {award.title}
                    </span>
                    <span className="font-sans text-[11px] text-charcoal/50 font-light mt-0.5">
                      {award.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Interactive Panel */}
        <div className="mt-24 border-t border-sand/60 pt-16">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              Painting Philosophy
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mt-1 tracking-tight">
              Methods of Light Capture
            </h3>
          </div>

          {/* Interactive tabs layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab selection buttons (Left - 4 Cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-2" id="about-methods-tabs">
              {ARTIST_BIOGRAPHY.methods.map((method, index) => {
                const isActive = activeMethod === index;
                return (
                  <button
                    key={index}
                    id={`about-method-btn-${index}`}
                    onClick={() => setActiveMethod(index)}
                    className={`p-5 text-left border transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-card-bg border-gold text-charcoal shadow-sm'
                        : 'bg-transparent border-border-subtle text-charcoal/60 hover:border-border-medium hover:text-charcoal'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {icons[index % icons.length]}
                      <span className="font-serif text-sm md:text-base font-medium">{method.title}</span>
                    </div>
                    {isActive && <span className="text-gold text-xs font-mono">&rarr;</span>}
                  </button>
                );
              })}
            </div>

            {/* Tab content display (Right - 8 Cols) */}
            <div className="lg:col-span-8 bg-card-bg p-8 md:p-10 border border-border-subtle shadow-sm min-h-[180px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethod}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-serif text-xl text-charcoal font-medium mb-3">
                    {ARTIST_BIOGRAPHY.methods[activeMethod].title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
                    {ARTIST_BIOGRAPHY.methods[activeMethod].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
