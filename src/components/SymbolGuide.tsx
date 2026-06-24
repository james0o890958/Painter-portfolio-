import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, BookOpen, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ARTWORKS } from '../data';
import { Artwork } from '../types';

interface SymbolGuideProps {
  onOpenArtwork: (artwork: Artwork) => void;
}

interface SymbolItem {
  id: string;
  name: string;
  meaning: string;
  lore: string;
  image: string;
  associatedArtworkIds: string[];
}

const SYMBOLS: SymbolItem[] = [
  {
    id: 'lantern',
    name: 'Lantern',
    meaning: 'Guidance, truth, discovery in darkness.',
    lore: 'The lantern is the core beacon of human awareness. It represents our capacity to carry reason, courage, and divine guidance into the dark forests of our own subconscious. To paint a lantern is to declare that darkness is never permanent.',
    image: '/src/assets/images/chair_lantern_1782341132046.jpg',
    associatedArtworkIds: ['inheritance-silence', 'last-lantern', 'returning-home']
  },
  {
    id: 'river',
    name: 'River',
    meaning: 'Time, memory, passage and transformation.',
    lore: 'Rivers represent fluid memory. Unlike stone, water records by letting go. It represents the flow of years, the washing away of old identities, and the quiet currents that connect our childhood to our eventual decay.',
    image: '/src/assets/images/river_light_1782341162094.jpg',
    associatedArtworkIds: ['house-beside-river', 'river-remembers', 'time-pooled-water']
  },
  {
    id: 'golden-bird',
    name: 'Golden Bird',
    meaning: 'Hope, transcendence and renewal.',
    lore: 'The bird of gold represents the indestructible nature of hope. Feathers of light signify a soul that can rise above earthly clocks, calendars, and cages. It is a symbol that sings even when perched on the mechanical wheels of mortality.',
    image: '/src/assets/images/bird_clock_1782341148172.jpg',
    associatedArtworkIds: ['borrowed-time', 'bird-of-gold', 'hope-emitted-light']
  },
  {
    id: 'clock',
    name: 'Clock',
    meaning: 'Mortality and impermanence.',
    lore: 'The clock face is the reminder of our earthly container. In Elena’s work, clocks are rarely cold or mechanical; they are weathered, integrated with natural forces, showing that the passage of hours is itself a form of poetry.',
    image: '/src/assets/images/bird_clock_1782341148172.jpg',
    associatedArtworkIds: ['borrowed-time', 'bird-of-gold', 'time-pooled-water']
  },
  {
    id: 'empty-chair',
    name: 'Empty Chair',
    meaning: 'Absence, longing and unfinished conversations.',
    lore: 'An empty chair holds the precise volume of a missing body. It is a physical monument to longing, an invitation for a ghost to sit, and a space where the unspoken words of family inheritance sit in patient vigil.',
    image: '/src/assets/images/chair_lantern_1782341132046.jpg',
    associatedArtworkIds: ['inheritance-silence', 'weight-unspoken']
  },
  {
    id: 'forest',
    name: 'Forest',
    meaning: 'Memory and self-discovery.',
    lore: 'The forest is the complex, biological cathedral of memory. Tree trunks are the pillars of our history; white birches signify clean beginnings, while dark mossy roots represent deep-seated family traits we must excavate.',
    image: '/src/assets/images/autumn_forest_1782318199839.jpg',
    associatedArtworkIds: ['fire-refused-consume', 'winter-lessons', 'last-lantern', 'memories-had-weight']
  },
  {
    id: 'distant-light',
    name: 'Distant Light',
    meaning: 'Purpose, calling and redemption.',
    lore: 'A single, warm point of light glowing on the horizon is the ultimate destination. It represents redemption, the calling of home, and the light of purpose that beckons us through cold seas, city rains, and forest paths.',
    image: '/src/assets/images/river_light_1782341162094.jpg',
    associatedArtworkIds: ['noise-stopped', 'third-watch', 'returning-home', 'self-awareness']
  }
];

export default function SymbolGuide({ onOpenArtwork }: SymbolGuideProps) {
  const [activeSymbol, setActiveSymbol] = useState<string>('lantern');

  const currentSymbol = SYMBOLS.find(sym => sym.id === activeSymbol) || SYMBOLS[0];

  const associatedArtworks = ARTWORKS.filter(art => 
    currentSymbol.associatedArtworkIds.includes(art.id)
  );

  return (
    <section id="symbols" className="py-24 bg-cream border-t border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center md:justify-start space-x-2 text-gold font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Artistic Mythology Encyclopedia</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight mt-3"
          >
            Recurring Symbol Guide
          </motion.h2>
          <div className="h-[1px] w-20 bg-gold/40 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Symbol List Sidebar (Left - 4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {SYMBOLS.map((symbol, idx) => {
              const isActive = symbol.id === activeSymbol;
              return (
                <motion.button
                  key={symbol.id}
                  id={`symbol-button-${symbol.id}`}
                  onClick={() => setActiveSymbol(symbol.id)}
                  className={`w-full p-5 text-left border transition-all duration-300 focus:outline-none flex items-center justify-between cursor-pointer rounded-none ${
                    isActive
                      ? 'bg-card-hover border-gold text-charcoal shadow-[0_0_15px_rgba(197,164,126,0.15)]'
                      : 'bg-transparent border-border-subtle text-charcoal/50 hover:border-border-medium hover:text-charcoal'
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-light tracking-wide">{symbol.name}</span>
                    <span className="font-mono text-[9px] text-gold/60 mt-1 uppercase tracking-widest">{symbol.meaning}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-gold translate-x-1' : 'text-cream/20'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Symbol Encyclopedia Display Pane (Right - 8 Cols) */}
          <div className="lg:col-span-8 bg-card-bg border border-border-subtle p-8 md:p-12 shadow-xl min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSymbol}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Upper row: Lore info & illustrative image */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Lore information (Left - 7 Cols) */}
                  <div className="md:col-span-7 space-y-4">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase flex items-center space-x-1">
                      <BookOpen className="w-3 h-3" />
                      <span>Symbolic Decryption</span>
                    </span>
                    <h3 className="font-serif text-3xl font-light text-charcoal tracking-tight">
                      The {currentSymbol.name}
                    </h3>
                    <p className="font-mono text-[10px] text-gold/80 uppercase tracking-widest leading-relaxed border-l border-gold/40 pl-4">
                      <strong>Core Metaphor:</strong> {currentSymbol.meaning}
                    </p>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light pt-2">
                      {currentSymbol.lore}
                    </p>
                  </div>

                  {/* Representative Thumbnail (Right - 5 Cols) */}
                  <div className="md:col-span-5 relative group">
                    <div className="absolute inset-0 border border-gold/30 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                    <div className="relative border border-border-medium overflow-hidden aspect-square">
                      <img
                        src={currentSymbol.image}
                        alt={currentSymbol.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Lower row: Interconnected associated works */}
                <div className="border-t border-border-subtle pt-8 mt-4">
                  <h4 className="font-mono text-[9px] text-gold tracking-widest uppercase mb-4">
                    Interconnected Paintings Containing This Motif ({associatedArtworks.length})
                  </h4>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    {associatedArtworks.map((art) => (
                      <div
                        key={art.id}
                        id={`symbol-artwork-card-${art.id}`}
                        onClick={() => onOpenArtwork(art)}
                        className="group relative p-3 bg-card-bg border border-border-subtle hover:border-gold/30 hover:bg-card-hover transition-all duration-300 cursor-pointer"
                      >
                        <div className="h-24 w-full overflow-hidden border border-border-subtle mb-2.5 relative">
                          <img
                            src={art.image}
                            alt={art.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h5 className="font-serif text-xs font-medium text-charcoal group-hover:text-gold transition-colors duration-300 truncate">
                          {art.title}
                        </h5>
                        <p className="font-mono text-[8px] text-charcoal/40 mt-0.5">
                          {art.year} &bull; {art.category}
                        </p>
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
