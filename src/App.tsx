/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PaletteExplorer from './components/PaletteExplorer';
import Exhibitions from './components/Exhibitions';
import About from './components/About';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('gallery');
  const [prefilledArtwork, setPrefilledArtwork] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor active scrolled section using IntersectionObserver API
  useEffect(() => {
    const sections = ['gallery', 'palette', 'exhibitions', 'about', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies the visual center
          threshold: 0,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    const handleScrollButton = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScrollButton, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollButton);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleSelectArtworkForInquiry = (title: string) => {
    setPrefilledArtwork(title);
  };

  const handleClearPrefill = () => {
    setPrefilledArtwork('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden selection:bg-sand selection:text-charcoal font-sans text-charcoal">
      {/* 1. Header Navigation with Scroll Progress and Mobile Menu Drawer */}
      <Navbar activeSection={activeSection} />

      {/* 2. Visual Masterpiece Hero Showcase */}
      <Hero />

      {/* 3. Core Curated Interactive Filterable Fine Art Gallery & Detail Simulator */}
      <Gallery onSelectArtworkForInquiry={handleSelectArtworkForInquiry} />

      {/* 4. Interactive Palette Swatches Explorer (Color symbolism) */}
      <PaletteExplorer />

      {/* 5. Elegant Exhibition Timelines */}
      <Exhibitions />

      {/* 6. Biography & Studio Philosophy Tabs */}
      <About />

      {/* 7. Transmission Inquiries Form */}
      <Contact prefilledArtwork={prefilledArtwork} onClearPrefill={handleClearPrefill} />

      {/* Elegant, High-contrast Fine Art Footer */}
      <footer id="app-footer" className="bg-charcoal text-[#f0efe9]/80 py-16 border-t border-charcoal/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Logo Brand Frame */}
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.25em] uppercase font-medium text-cream">
              Elena Rostova
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#f0efe9]/40 mt-1">
              Contemporary Oil Painting &bull; Est. 2018
            </span>
          </div>

          {/* Social details & representation references */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 font-sans text-xs">
            {/* Gallery connections */}
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#f0efe9]/30">Representations</span>
              <span className="font-light">GAM Milan</span>
              <span className="font-light">Somerset London</span>
              <span className="font-light">Galerie de l’Est Paris</span>
            </div>

            {/* Catalogue terms */}
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#f0efe9]/30">Inquiries</span>
              <span className="font-light">Acquisition Terms</span>
              <span className="font-light">Private Catalog</span>
              <span className="font-light">Commissions</span>
            </div>

            {/* Social channels */}
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#f0efe9]/30">Exhibition Ledger</span>
              <a href="#instagram" className="font-light hover:text-gold transition-colors">Instagram</a>
              <a href="#artsy" className="font-light hover:text-gold transition-colors">Artsy Profile</a>
              <a href="#mutual-art" className="font-light hover:text-gold transition-colors">MutualArt</a>
            </div>
          </div>
        </div>

        {/* Disclaimer / Credit margin line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-[#f0efe9]/30">
          <span>&copy; 2026 ELENA ROSTOVA. ALL RIGHTS RESERVED.</span>
          <span>ORIGINAL OIL PAINTINGS FROM THE PRAGUE WORKSPACE.</span>
        </div>
      </footer>

      {/* Float to top Arrow indicator */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-charcoal text-cream hover:bg-gold transition-colors duration-300 shadow-lg cursor-pointer focus:outline-none"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
