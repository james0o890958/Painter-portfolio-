import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXHIBITIONS } from '../data';
import { Exhibition } from '../types';
import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function Exhibitions() {
  const [expandedExh, setExpandedExh] = useState<string | null>('exh-1');

  const toggleExpand = (id: string) => {
    setExpandedExh(expandedExh === id ? null : id);
  };

  const getStatusBadge = (status: Exhibition['status']) => {
    switch (status) {
      case 'upcoming':
        return (
          <span className="inline-flex items-center space-x-1.5 bg-gold/10 text-gold border border-gold/20 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Upcoming Solo</span>
          </span>
        );
      case 'current':
        return (
          <span className="inline-flex items-center space-x-1.5 bg-charcoal text-cream border border-charcoal/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest blur-backdrop">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
            <span>On Display Now</span>
          </span>
        );
      case 'past':
        return (
          <span className="inline-flex items-center space-x-1 bg-sand/50 text-charcoal/50 border border-sand px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest">
            <span>Archived Show</span>
          </span>
        );
    }
  };

  return (
    <section id="exhibitions" className="py-24 bg-cream relative">
      {/* Background Subtle Fine Art Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-sand pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              Global Presence
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal mt-2 tracking-tight">
              Solo Exhibitions
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-charcoal/50 max-w-sm mt-4 md:mt-0 leading-relaxed font-light">
            Tracking Elena’s major solo releases and public exhibits across curated galleries in Europe, the United Kingdom, and North America.
          </p>
        </div>

        {/* Minimalist Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-12 border-l border-sand" id="exhibitions-timeline">
          {EXHIBITIONS.map((exh, index) => {
            const isExpanded = expandedExh === exh.id;
            const isUpcoming = exh.status === 'upcoming';
            const isCurrent = exh.status === 'current';

            return (
              <motion.div
                key={exh.id}
                id={`exh-item-${exh.id}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Circle Bullet */}
                <div className={`absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border bg-cream flex items-center justify-center transition-all duration-500 z-10 ${
                  isUpcoming
                    ? 'border-gold shadow-[0_0_8px_rgba(194,159,99,0.5)]'
                    : isCurrent
                    ? 'border-charcoal bg-charcoal'
                    : 'border-sand bg-sand'
                }`}>
                  {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-cream animate-ping" />}
                </div>

                {/* Main Content Card Box */}
                <div
                  id={`exh-header-clickable-${exh.id}`}
                  onClick={() => toggleExpand(exh.id)}
                  className={`p-6 md:p-8 border border-white/5 bg-[#0d0d0d]/80 hover:bg-[#0d0d0d] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                    isExpanded ? 'ring-1 ring-gold/30 border-gold/30' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Identification Details */}
                    <div>
                      <div className="flex items-center space-x-3 mb-2 flex-wrap gap-y-2">
                        <span className="font-mono text-xs text-gold font-medium">
                          {exh.year} Exhibition
                        </span>
                        {getStatusBadge(exh.status)}
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl text-charcoal font-light group-hover:text-gold transition-colors">
                        {exh.title}
                      </h3>
                    </div>

                    {/* Expand/Collapse Button */}
                    <div className="flex items-center space-x-2 text-charcoal/40 self-start md:self-center">
                      <span className="font-mono text-[9px] tracking-widest uppercase hidden md:inline">
                        {isExpanded ? 'Collapse' : 'Expand Details'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expandable Curatorial notes */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`exh-expanded-content-${exh.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-sand/50 mt-6 pt-6 flex flex-col space-y-4">
                          {/* Key Specs Row */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-charcoal/70">
                            <div className="flex items-center space-x-2.5">
                              <Calendar className="w-4 h-4 text-gold shrink-0" />
                              <span>{exh.date}</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                              <Building className="w-4 h-4 text-gold shrink-0" />
                              <span>{exh.gallery}</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                              <MapPin className="w-4 h-4 text-gold shrink-0" />
                              <span>{exh.city}</span>
                            </div>
                          </div>

                          {/* Curatorial description paragraph */}
                          <p className="font-sans text-xs md:text-sm text-charcoal/60 leading-relaxed font-light mt-2 max-w-3xl">
                            {exh.description}
                          </p>

                          {/* Interactive Note for collectors */}
                          {isUpcoming && (
                            <div className="mt-4 p-4 bg-gold/5 border border-gold/15 flex items-start space-x-3">
                              <Sparkles className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                              <div className="text-xs">
                                <p className="font-mono text-gold uppercase tracking-widest font-semibold">
                                  Collector Pre-sales Open
                                </p>
                                <p className="text-charcoal/60 font-light mt-1">
                                  Privately cataloged canvases can be previewed by VIP patrons. Please register via our contact form to schedule a physical viewing appointment.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
