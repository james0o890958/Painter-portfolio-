import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTWORKS } from '../data';
import { Artwork } from '../types';
import { Layers, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface CollectionsOverviewProps {
  onOpenArtwork: (artwork: Artwork) => void;
}

const COLLECTION_METADATA: Record<string, { description: string; quote: string; yearRange: string }> = {
  'Human Experience': {
    description: 'An exploration of self-reflection, identity, unspoken weights, and the stillness of transient moments.',
    quote: 'The canvas is not a flat plane; it is a mirror that catches the light of the interior self.',
    yearRange: '2025 – 2026'
  },
  'Spiritual Symbolism': {
    description: 'Diving into divine thresholds, faith during night watches, and sacred unconsuming flames.',
    quote: 'Art is the physical outline of our belief, an attempt to make the invisible tangible.',
    yearRange: '2026'
  },
  'Imaginary Memories': {
    description: 'Nostalgic, dreamlike narratives of distant summer train departures and quiet homes by the river.',
    quote: 'We do not paint what we remember; we paint the feelings that replace our memories.',
    yearRange: '2025 – 2026'
  },
  'Philosophical Collection': {
    description: 'Exploring dualities of light and shadow, the costs of personal ascension, and physical stone structures of regret.',
    quote: 'Every shadow is a monument to a light that refused to be extinguished.',
    yearRange: '2025 – 2026'
  },
  'Seasons of a Life': {
    description: 'A study of the natural seasons as metaphors for human rest, patience, and return.',
    quote: 'Winter is the necessary silence that teaches the soul how to bloom again.',
    yearRange: '2025 – 2026'
  },
  'Hidden Lore': {
    description: 'Interconnected storytelling where golden birds, clocks, lanterns, and rivers weave a mystical narrative.',
    quote: 'There is a secret alphabet written in the forest, if only we carry a lantern to read it.',
    yearRange: '2025 – 2026'
  },
  'Abstract Concepts': {
    description: 'Geometric, cubist, and cosmic expressions of metacognition, self-awareness, and pattern mapping.',
    quote: 'To observe the mind is to step through a gold portal into the infinite space of the soul.',
    yearRange: '2025 – 2026'
  },
  'What If?': {
    description: 'Surrealist philosophical questions translated to canvas, asking if hope emits light or time pools like water.',
    quote: 'Surrealism is the shortest distance between a scientific wonder and a mystical truth.',
    yearRange: '2025 – 2026'
  }
};

export default function CollectionsOverview({ onOpenArtwork }: CollectionsOverviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Human Experience');

  const categories = Object.keys(COLLECTION_METADATA);

  // Group artworks by collectionCategory
  const collectionsArtworks = ARTWORKS.filter(
    (art) => art.collectionCategory.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <section id="collections" className="py-24 bg-sand border-t border-border-subtle relative overflow-hidden">
      {/* Background Subtle Fine Art Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,164,126,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/40 rounded-full blur-[1px]"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i * 23) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center md:justify-start space-x-2 text-gold font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Museum Archival Ledgers</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight mt-3"
          >
            Artistic Collections
          </motion.h2>
          <div className="h-[1px] w-20 bg-gold/40 mt-6 mx-auto md:mx-0" />
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {categories.map((cat, idx) => {
            const isActive = cat === selectedCategory;
            return (
              <motion.button
                key={cat}
                id={`collection-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`py-4 px-4 text-xs font-mono tracking-widest uppercase border transition-all duration-300 rounded-none text-center cursor-pointer ${
                  isActive
                    ? 'bg-card-hover border-gold text-gold shadow-[0_0_15px_rgba(197,164,126,0.15)]'
                    : 'bg-transparent border-border-subtle text-charcoal/50 hover:border-border-medium hover:text-charcoal'
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Collection Panel Details */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Collection Metadata Sidebar (Left - 5 cols) */}
          <div className="lg:col-span-5 bg-card-bg p-8 md:p-10 border border-border-subtle flex flex-col justify-between min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 flex flex-col h-full justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase">
                      Curatorial Ledger
                    </span>
                    <span className="font-mono text-[9px] text-charcoal/40">
                      {COLLECTION_METADATA[selectedCategory].yearRange}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                    {selectedCategory}
                  </h3>

                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                    {COLLECTION_METADATA[selectedCategory].description}
                  </p>
                </div>

                <div className="pt-8 border-t border-border-subtle relative mt-6">
                  <span className="font-serif text-5xl text-gold/10 absolute -top-4 left-0 pointer-events-none select-none">
                    &ldquo;
                  </span>
                  <p className="font-serif text-sm text-gold/80 italic leading-relaxed pl-6">
                    {COLLECTION_METADATA[selectedCategory].quote}
                  </p>
                  <p className="font-mono text-[9px] text-gold/40 text-right mt-2">
                    &mdash; Elena Rostova
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Artworks Ledger List (Right - 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {collectionsArtworks.map((artwork, idx) => (
                  <motion.div
                    key={artwork.id}
                    id={`collection-item-${artwork.id}`}
                    onClick={() => onOpenArtwork(artwork)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-card-bg/80 border border-border-subtle hover:bg-card-hover hover:border-gold/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Image Thumbnail with gold spotlight glow */}
                      <div className="w-14 h-14 overflow-hidden border border-border-medium shrink-0 aspect-square relative group-hover:border-gold/40 transition-colors duration-300">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[8px] text-gold uppercase tracking-widest">
                            {artwork.category}
                          </span>
                          <span className="text-white/10 font-mono text-[8px]">&bull;</span>
                          <span className="font-mono text-[8px] text-charcoal/40">{artwork.year}</span>
                        </div>
                        <h4 className="font-serif text-sm font-medium text-charcoal mt-1 group-hover:text-gold transition-colors duration-300">
                          {artwork.title}
                        </h4>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex items-center space-x-4 self-end sm:self-center">
                      <span className="font-mono text-xs text-charcoal/60 group-hover:text-charcoal transition-colors">
                        {artwork.price}
                      </span>
                      <button
                        id={`btn-explore-${artwork.id}`}
                        className="p-2 border border-border-subtle text-gold/60 group-hover:text-gold group-hover:border-gold/30 transition-all rounded-full bg-card-hover"
                        title="Explore Detail"
                        aria-label="Explore detail"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
