import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PALETTE_COLORS, ARTWORKS } from '../data';
import { PaletteColor } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PaletteExplorer() {
  const [activeColor, setActiveColor] = useState<PaletteColor>(PALETTE_COLORS[0]);

  const associatedWorks = ARTWORKS.filter(art =>
    activeColor.associatedArtworks.includes(art.id)
  );

  return (
    <section id="palette" className="py-24 bg-sand/30 border-y border-sand/60 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-[100px] pointer-events-none transition-all duration-1000"
           style={{ backgroundColor: activeColor.hex }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
            The Artist's Alchemy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal mt-2 tracking-tight">
            Color Palette & Symbolism
          </h2>
          <p className="font-sans text-xs md:text-sm text-charcoal/60 mt-4 leading-relaxed font-light">
            Every color on Elena's palette carries a psychological and symbolic burden. Explore her foundational pigments to understand the emotional landscape behind her creations.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Swatches & Quote Panel (Left - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <p className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest">
              Select Pigment Swatch
            </p>

            {/* Circular Color Palette Selection */}
            <div className="flex flex-wrap items-center gap-4" id="palette-swatches">
              {PALETTE_COLORS.map((color) => {
                const isActive = activeColor.id === color.id;
                return (
                  <button
                    key={color.id}
                    id={`palette-swatch-${color.id}`}
                    onClick={() => setActiveColor(color)}
                    className="relative focus:outline-none flex flex-col items-center group cursor-pointer"
                    title={color.name}
                  >
                    {/* Ring Indicator */}
                    <motion.div
                      id={`swatch-ring-${color.id}`}
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
                        isActive
                          ? 'border-charcoal scale-105'
                          : 'border-transparent hover:border-charcoal/30'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full shadow-inner relative"
                        style={{ backgroundColor: color.hex }}
                      >
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-60" />
                      </div>
                    </motion.div>

                    {/* Dot name beneath */}
                    <span className={`text-[9px] font-mono tracking-widest mt-2 transition-colors duration-300 uppercase ${
                      isActive ? 'text-charcoal font-medium' : 'text-charcoal/40 group-hover:text-charcoal/70'
                    }`}>
                      {color.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Philosophy Artist Quote Box */}
            <div className="border-l-2 border-gold pl-6 py-4 bg-[#0d0d0d]/40 border border-white/5 shadow-sm pr-4 mt-4 relative">
              <span className="font-serif text-5xl text-gold/20 absolute -top-4 left-2 pointer-events-none select-none">
                &ldquo;
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeColor.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-serif italic text-sm md:text-base text-charcoal leading-relaxed relative z-10">
                    {activeColor.quote}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gold/70 mt-3 text-right">
                    &mdash; Elena Rostova
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Symbolism Breakdown & Curated Paintings (Right - 7 Cols) */}
          <div className="lg:col-span-7 bg-[#0d0d0d] p-8 md:p-12 border border-white/5 shadow-sm flex flex-col justify-between min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-8"
              >
                {/* Symbolism detail title */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeColor.hex }} />
                    <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest">
                      Color Meaning
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    The Presence of {activeColor.name}
                  </h3>
                  <p className="font-sans text-[13px] md:text-sm text-charcoal/70 font-light leading-relaxed mt-4">
                    {activeColor.symbolicMeaning}
                  </p>
                </div>

                {/* Connected Artworks Row */}
                <div>
                  <h4 className="font-mono text-[9px] text-gold uppercase tracking-[0.25em] font-semibold mb-4 flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>Associated Paintings</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="palette-associated-artworks">
                    {associatedWorks.map((art) => (
                      <div
                        key={art.id}
                        id={`palette-art-item-${art.id}`}
                        onClick={() => {
                          const gallerySec = document.getElementById('gallery');
                          if (gallerySec) {
                            window.scrollTo({ top: gallerySec.offsetTop - 80, behavior: 'smooth' });
                          }
                        }}
                        className="group flex items-center space-x-4 p-3 bg-sand/35 border border-white/5 hover:bg-[#121212] hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        {/* Miniature painting thumbnail */}
                        <div className="w-14 h-14 overflow-hidden border border-sand/50 shrink-0 aspect-square">
                          <img
                            src={art.image}
                            alt={art.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                          />
                        </div>

                        {/* Title and Category */}
                        <div className="overflow-hidden">
                          <h5 className="font-serif text-xs text-charcoal font-medium truncate group-hover:text-gold transition-colors duration-300">
                            {art.title}
                          </h5>
                          <p className="font-mono text-[8px] text-charcoal/40 uppercase tracking-widest mt-0.5">
                            {art.category.replace('-', ' ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-sand/50 mt-8 pt-6 flex items-center justify-between">
              <span className="font-sans text-[10px] text-charcoal/40 font-light">
                Note: Color swatches are mixed using premium organic linseed oils.
              </span>
              <button
                id="palette-view-gallery-btn"
                onClick={() => {
                  const gallerySec = document.getElementById('gallery');
                  if (gallerySec) window.scrollTo({ top: gallerySec.offsetTop - 80, behavior: 'smooth' });
                }}
                className="text-[9px] font-mono tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300 flex items-center space-x-1 focus:outline-none cursor-pointer"
              >
                <span>Browse Full Gallery</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
