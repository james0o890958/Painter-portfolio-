import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ARTWORKS } from '../data';

export default function Hero() {
  const featuredArt = ARTWORKS[0]; // Whispers of the Gilded Birch

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = gallerySection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-cream flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Subtle Textured Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        {/* Text Section (Left) */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left z-10 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold font-medium">
              Fine Art Exhibition
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-tight leading-[1.05] mt-4"
          >
            Carving light. <br />
            <span className="italic font-normal">Sculpting</span> silence.
          </motion.h1>

          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-sm md:text-base text-charcoal/70 font-light mt-6 max-w-md leading-relaxed"
          >
            Exploring the boundary between natural light and abstract tactile memory. Large-scale contemporary oil paintings designed to physically capture and reflect shadows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10"
          >
            <button
              id="hero-explore-btn"
              onClick={scrollToGallery}
              className="group px-8 py-4 bg-[#c5a47e] text-[#0a0a0a] hover:bg-[#b08e67] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg focus:outline-none flex items-center space-x-3 cursor-pointer"
            >
              <span>Explore Gallery</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </button>

            <button
              id="hero-statement-btn"
              onClick={() => {
                const aboutSec = document.getElementById('about');
                if (aboutSec) window.scrollTo({ top: aboutSec.offsetTop - 80, behavior: 'smooth' });
              }}
              className="text-xs tracking-[0.2em] uppercase font-mono text-charcoal hover:text-gold transition-colors duration-300 py-2 focus:outline-none cursor-pointer"
            >
              Artist Statement
            </button>
          </motion.div>
        </div>

        {/* Masterpiece Showcase (Right) */}
        <div className="lg:col-span-7 relative flex justify-center items-center">
          {/* Decorative Back Frame */}
          <div className="absolute inset-0 bg-sand translate-x-4 translate-y-4 -z-10 border border-white/5" />

          {/* Core Masterpiece Frame */}
          <motion.div
            id="hero-artwork-frame"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative border-[16px] border-card-hover shadow-2xl overflow-hidden aspect-[3/2] w-full"
          >
            <motion.img
              id="hero-featured-image"
              src={featuredArt.image}
              alt={featuredArt.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.5 }}
            />

            {/* Impasto close-up highlight bubble */}
            <div className="absolute bottom-4 right-4 bg-charcoal/90 text-cream px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase flex items-center space-x-1.5 blur-backdrop">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span>Heavy Palette Texture</span>
            </div>
          </motion.div>

          {/* Underlay Artwork Label */}
          <motion.div
            id="hero-artwork-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-8 left-4 right-4 lg:right-auto flex flex-col md:flex-row md:items-center justify-between border-l-2 border-gold pl-4 py-1"
          >
            <div>
              <h4 className="font-serif italic text-sm text-charcoal font-medium">
                {featuredArt.title}
              </h4>
              <p className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mt-0.5">
                {featuredArt.medium} &bull; {featuredArt.size}
              </p>
            </div>
            <div className="hidden md:block text-right">
              <span className="font-mono text-[10px] text-gold tracking-widest uppercase">
                {featuredArt.year} Edition
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Downward Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.span
          className="font-mono text-[9px] tracking-[0.3em] uppercase text-charcoal/40 mb-2"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll Down
        </motion.span>
        <motion.button
          id="hero-scroll-indicator"
          onClick={scrollToGallery}
          className="text-charcoal/40 hover:text-charcoal transition-colors duration-300 focus:outline-none cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.button>
      </div>
    </section>
  );
}
