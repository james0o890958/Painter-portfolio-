import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Gallery', id: 'gallery' },
    { name: 'Palette', id: 'palette' },
    { name: 'Exhibitions', id: 'exhibitions' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 border-b border-sand shadow-sm blur-backdrop py-3'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          id="scroll-progress-indicator"
          className="absolute top-0 left-0 h-[2px] bg-gold origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <motion.button
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-start focus:outline-none cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-serif text-lg md:text-xl tracking-[0.25em] font-medium uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
              Elena Rostova
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-charcoal/50 group-hover:text-gold/70 transition-colors duration-300 -mt-0.5">
              Fine Art
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                id={`desktop-nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className="relative py-1 font-sans text-xs tracking-widest uppercase transition-colors duration-300 focus:outline-none cursor-pointer text-charcoal/70 hover:text-charcoal"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    id={`active-indicator-${item.id}`}
                    layoutId="activeSectionIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Inquire CTA */}
            <motion.button
              id="nav-inquire-cta"
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1.5 px-4 py-1.5 border border-charcoal text-xs tracking-widest uppercase transition-all duration-300 hover:bg-charcoal hover:text-cream cursor-pointer rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </motion.button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal hover:text-gold focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <div className="flex flex-col space-y-8 items-start">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-serif text-3xl tracking-widest uppercase text-left focus:outline-none cursor-pointer ${
                    activeSection === item.id ? 'text-gold' : 'text-charcoal'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                id="mobile-nav-inquire"
                onClick={() => scrollToSection('contact')}
                className="mt-4 flex items-center space-x-2 text-gold font-mono text-xs tracking-widest uppercase focus:outline-none border-b border-gold/40 pb-1 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Acquire Artworks</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
