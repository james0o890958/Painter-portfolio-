import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, ArrowRight, Heart, Sparkles, Check } from 'lucide-react';
import { ARTWORKS } from '../data';
import { Artwork } from '../types';

interface GalleryProps {
  onSelectArtworkForInquiry: (title: string) => void;
  selectedArtwork: Artwork | null;
  setSelectedArtwork: (artwork: Artwork | null) => void;
}

export default function Gallery({ onSelectArtworkForInquiry, selectedArtwork, setSelectedArtwork }: GalleryProps) {
  const [filter, setFilter] = useState<string>('all');
  const [likedArtworks, setLikedArtworks] = useState<Record<string, boolean>>({});
  const [viewInRoom, setViewInRoom] = useState<boolean>(false);
  const [roomColor, setRoomColor] = useState<string>('charcoal'); // charcoal, sand, sage, crimson
  const [detailTab, setDetailTab] = useState<'curatorial' | 'reflection' | 'heritage'>('curatorial');

  const categories = [
    { name: 'All Collection', value: 'all' },
    { name: 'Landscapes', value: 'landscape' },
    { name: 'Seascapes', value: 'seascape' },
    { name: 'Cityscapes', value: 'cityscape' },
    { name: 'Still Life', value: 'still-life' },
  ];

  const filteredArtworks = filter === 'all'
    ? ARTWORKS
    : ARTWORKS.filter(art => art.category === filter);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedArtworks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openArtworkDetail = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setViewInRoom(false);
  };

  const handleInquiry = (title: string) => {
    onSelectArtworkForInquiry(title);
    setSelectedArtwork(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const wallColors: Record<string, { bg: string; name: string; text: string }> = {
    charcoal: { bg: 'bg-[#2b2b2a]', name: 'Gallery Charcoal', text: 'text-[#f0efe9]' },
    sand: { bg: 'bg-[#ebdcb9] bg-opacity-20 bg-sand', name: 'Alabaster Sand', text: 'text-[#1e1e1d]' },
    sage: { bg: 'bg-[#4a584e]', name: 'Nordic Sage', text: 'text-[#f9f9f6]' },
    crimson: { bg: 'bg-[#4a2e2b]', name: 'Plum Crimson', text: 'text-[#f9f9f6]' },
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Subtle Fine Art Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,164,126,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border-subtle pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              The Virtual Gallery
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal mt-2 tracking-tight">
              Curated Artworks
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-charcoal/50 max-w-sm mt-4 md:mt-0 leading-relaxed font-light">
            Each painting features rich textural ridges that physically capture ambient gallery lighting, creating shifting shadows throughout the day.
          </p>
        </div>

        {/* Filter Tab Layout */}
        <div className="flex flex-wrap items-center gap-3 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-btn-${cat.value}`}
              onClick={() => setFilter(cat.value)}
              className={`relative px-5 py-2.5 text-[11px] tracking-widest uppercase transition-all duration-300 focus:outline-none cursor-pointer border ${
                filter === cat.value
                  ? 'text-[#0a0a0a] border-gold font-medium'
                  : 'text-charcoal/60 hover:text-charcoal bg-card-bg/10 border-border-subtle hover:border-border-medium'
              }`}
            >
              <span className="relative z-10">{cat.name}</span>
              {filter === cat.value && (
                <motion.div
                  id={`filter-active-pill-${cat.value}`}
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-gold"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                id={`gallery-item-${artwork.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => openArtworkDetail(artwork)}
                className="group flex flex-col bg-card-bg border border-border-subtle hover:shadow-xl transition-shadow duration-500 cursor-pointer overflow-hidden relative"
              >
                {/* Artwork Thumbnail Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                  <img
                    id={`artwork-thumbnail-${artwork.id}`}
                    src={artwork.image}
                    alt={artwork.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors duration-300" />

                  {/* Micro-Interaction Icons on Hover */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      id={`like-btn-${artwork.id}`}
                      onClick={(e) => toggleLike(artwork.id, e)}
                      className="p-2 bg-cream/95 text-charcoal hover:text-red-500 rounded-full shadow-md hover:scale-110 transition-all cursor-pointer"
                      aria-label="Like artwork"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${likedArtworks[artwork.id] ? 'fill-red-500 text-red-500' : ''}`}
                      />
                    </button>
                    <div className="p-2 bg-cream/95 text-charcoal rounded-full shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Sold Indicator */}
                  {!artwork.available && (
                    <div className="absolute top-4 left-4 bg-charcoal/90 text-cream text-[8px] font-mono tracking-widest uppercase px-2 py-1 blur-backdrop">
                      Private Collection
                    </div>
                  )}
                  {artwork.featured && (
                    <div className="absolute bottom-4 left-4 bg-gold text-cream text-[8px] font-mono tracking-widest uppercase px-2 py-1 flex items-center space-x-1 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Signature Piece</span>
                    </div>
                  )}
                </div>

                {/* Info Details Footer */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-card-darker border-t border-border-subtle">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-gold tracking-widest uppercase">
                        {artwork.category.replace('-', ' ')}
                      </span>
                      <span className="font-mono text-[9px] text-charcoal/40">{artwork.year}</span>
                    </div>
                    <h3 className="font-serif text-lg text-charcoal font-medium mt-1 group-hover:text-gold transition-colors duration-300">
                      {artwork.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/60 line-clamp-2 mt-2 leading-relaxed font-light">
                      {artwork.description}
                    </p>
                  </div>

                  <div className="border-t border-border-subtle mt-4 pt-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-gold font-medium">
                      {artwork.price}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gold hover:text-charcoal transition-colors duration-300 flex items-center space-x-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Immersive Modal Backdrop & Window */}
      <AnimatePresence>
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Modal Glass Overlay */}
            <motion.div
              id="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtwork(null)}
              className="absolute inset-0 bg-card-bg/85 backdrop-blur-md"
            />

            {/* Modal Body Window */}
            <motion.div
              id="artwork-detail-modal"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative bg-cream max-w-5xl w-full h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto flex flex-col md:flex-row border border-sand shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-charcoal text-cream hover:bg-gold hover:text-cream transition-all rounded-full focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Visual Interactive Panel */}
              <div className="w-full md:w-1/2 bg-sand/30 flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
                {/* Visual View Switching Wrapper */}
                <div className="relative flex-grow flex items-center justify-center p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {!viewInRoom ? (
                      /* Classic Fine Art Detail View */
                      <motion.div
                        key="gallery-frame"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative border-[12px] border-card-hover shadow-lg max-w-[90%] max-h-[380px]"
                      >
                        <img
                          id="modal-artwork-image"
                          src={selectedArtwork.image}
                          alt={selectedArtwork.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain max-h-[350px] select-none"
                        />
                      </motion.div>
                    ) : (
                      /* "View in Room" Interactive Simulator */
                      <motion.div
                        key="room-simulation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 ${wallColors[roomColor].bg} flex flex-col items-center justify-center p-6 transition-colors duration-700 relative overflow-hidden`}
                      >
                        {/* Interactive Wall Subtle Vignette */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />

                        {/* Hanging Canvas Frame scaled to room */}
                        <motion.div
                          id="room-hanging-canvas"
                          className="z-10 shadow-2xl border-4 border-white/95 relative max-w-[45%] max-h-[160px] md:max-h-[200px]"
                          animate={{ y: [-2, 2, -2] }}
                          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                        >
                          <img
                            src={selectedArtwork.image}
                            alt={selectedArtwork.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain select-none"
                          />
                        </motion.div>

                        {/* Furniture Silhouette / Proportional Scale Anchor */}
                        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-10">
                          {/* Modern Sofa Silhouette (Minimalist Outline) */}
                          <div className="w-48 h-10 border-t border-x border-white/10 rounded-t-sm flex items-end justify-around relative bg-black/20">
                            {/* Cushions */}
                            <div className="w-[45%] h-5 border-t border-r border-white/5" />
                            <div className="w-[45%] h-5 border-t border-white/5" />
                          </div>
                          {/* Scale Guide text label */}
                          <div className="mt-2 text-[8px] font-mono uppercase tracking-[0.2em] text-[#f0efe9]/40 bg-black/20 px-2 py-0.5 rounded-full">
                            Proportional Room Scale ({selectedArtwork.size})
                          </div>
                        </div>

                        {/* Room Color Pickers */}
                        <div className="absolute bottom-20 left-4 right-4 flex justify-center space-x-2.5 z-20">
                          {Object.entries(wallColors).map(([key, config]) => (
                            <button
                              key={key}
                              id={`room-color-${key}`}
                              onClick={() => setRoomColor(key)}
                              className={`w-6 h-6 rounded-full border-2 transition-all ${
                                roomColor === key ? 'border-gold scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                              } flex items-center justify-center cursor-pointer`}
                              title={config.name}
                            >
                              <div
                                className={`w-3.5 h-3.5 rounded-full ${
                                  key === 'charcoal' ? 'bg-[#2b2b2a]' : key === 'sand' ? 'bg-[#d2c9b6]' : key === 'sage' ? 'bg-[#4a584e]' : 'bg-[#4a2e2b]'
                                }`}
                              />
                            </button>
                          ))}
                        </div>

                        {/* Interactive HUD Text */}
                        <div className="absolute top-4 left-4 text-left z-20">
                          <p className="font-mono text-[8px] text-[#f0efe9]/55 uppercase tracking-widest">
                            Ambient Simulator
                          </p>
                          <p className="font-sans text-[10px] text-[#f0efe9]/80 font-medium mt-0.5">
                            {wallColors[roomColor].name} Wall
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulator Mode Toggler */}
                <div className="border-t border-sand flex divide-x divide-sand bg-card-bg z-10 h-12">
                  <button
                    id="artwork-frame-mode"
                    onClick={() => setViewInRoom(false)}
                    className={`flex-1 text-[10px] font-mono uppercase tracking-widest focus:outline-none cursor-pointer flex items-center justify-center space-x-1.5 transition-colors duration-300 ${
                      !viewInRoom ? 'bg-cream font-medium text-gold' : 'text-charcoal/60 hover:text-charcoal'
                    }`}
                  >
                    <span>Artwork Detail</span>
                  </button>
                  <button
                    id="room-simulator-mode"
                    onClick={() => setViewInRoom(true)}
                    className={`flex-1 text-[10px] font-mono uppercase tracking-widest focus:outline-none cursor-pointer flex items-center justify-center space-x-1.5 transition-colors duration-300 ${
                      viewInRoom ? 'bg-cream font-medium text-gold' : 'text-charcoal/60 hover:text-charcoal'
                    }`}
                  >
                    <span>View in Room</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Informational Detail Panel */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase">
                      {selectedArtwork.category.replace('-', ' ')}
                    </span>
                    <span className="text-charcoal/20 font-mono text-[9px]">&bull;</span>
                    <span className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest">
                      {selectedArtwork.year} Edition
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-2.5">
                    {selectedArtwork.title}
                  </h3>

                  {/* Artwork Technical specifications tags */}
                  <div className="mt-5 grid grid-cols-2 gap-4 border-y border-sand/60 py-4 font-sans text-xs">
                    <div>
                      <p className="font-mono text-[8px] text-charcoal/40 uppercase tracking-widest">
                        Medium & Process
                      </p>
                      <p className="font-sans text-charcoal/80 font-light mt-1">
                        {selectedArtwork.medium}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] text-charcoal/40 uppercase tracking-widest">
                        Dimensions
                      </p>
                      <p className="font-sans text-charcoal/80 font-light mt-1">
                        {selectedArtwork.size}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Sub-tab Selector */}
                  <div className="mt-6 flex border-b border-sand/40">
                    <button
                      id="modal-tab-curatorial"
                      onClick={() => setDetailTab('curatorial')}
                      className={`pb-2.5 text-[9px] font-mono uppercase tracking-widest border-b-2 cursor-pointer transition-all mr-4 focus:outline-none ${
                        detailTab === 'curatorial' ? 'border-gold text-gold font-medium' : 'border-transparent text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      Curatorial Notes
                    </button>
                    <button
                      id="modal-tab-reflection"
                      onClick={() => setDetailTab('reflection')}
                      className={`pb-2.5 text-[9px] font-mono uppercase tracking-widest border-b-2 cursor-pointer transition-all mr-4 focus:outline-none ${
                        detailTab === 'reflection' ? 'border-gold text-gold font-medium' : 'border-transparent text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      Reflection & Symbolism
                    </button>
                    <button
                      id="modal-tab-heritage"
                      onClick={() => setDetailTab('heritage')}
                      className={`pb-2.5 text-[9px] font-mono uppercase tracking-widest border-b-2 cursor-pointer transition-all focus:outline-none ${
                        detailTab === 'heritage' ? 'border-gold text-gold font-medium' : 'border-transparent text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      Provenance & Palette
                    </button>
                  </div>

                  {/* Sub-tab Content Panels */}
                  <div className="mt-5 min-h-[140px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {detailTab === 'curatorial' && (
                        <motion.div
                          key="curatorial-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div>
                            <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Curator narrative</p>
                            <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light italic mt-1 bg-sand/10 p-3 border border-sand/30">
                              &ldquo;{selectedArtwork.storyBehindPainting || selectedArtwork.story}&rdquo;
                            </p>
                          </div>
                          {selectedArtwork.inspirationNotes && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Inspiration Sparks</p>
                              <p className="font-sans text-[11px] text-charcoal/70 leading-relaxed font-light mt-0.5">
                                {selectedArtwork.inspirationNotes}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {detailTab === 'reflection' && (
                        <motion.div
                          key="reflection-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {selectedArtwork.artistReflection && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Artist's Personal Reflection</p>
                              <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light mt-1">
                                {selectedArtwork.artistReflection}
                              </p>
                            </div>
                          )}
                          {selectedArtwork.symbolAnalysis && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Symbolic Motifs</p>
                              <p className="font-sans text-[11px] text-charcoal/70 leading-relaxed font-light mt-0.5 border-l-2 border-gold/40 pl-3">
                                {selectedArtwork.symbolAnalysis}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {detailTab === 'heritage' && (
                        <motion.div
                          key="heritage-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {selectedArtwork.colorPaletteInfo && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Pigment Composition</p>
                              <p className="font-sans text-[11px] text-charcoal/70 leading-relaxed font-light mt-0.5">
                                {selectedArtwork.colorPaletteInfo}
                              </p>
                            </div>
                          )}
                          {selectedArtwork.exhibitionHistory && selectedArtwork.exhibitionHistory.length > 0 && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Exhibition Chronology</p>
                              <ul className="list-disc pl-4 text-[11px] text-charcoal/70 font-light space-y-0.5 mt-1">
                                {selectedArtwork.exhibitionHistory.map((exh, i) => (
                                  <li key={i}>{exh}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {selectedArtwork.relatedWorks && selectedArtwork.relatedWorks.length > 0 && (
                            <div>
                              <p className="font-mono text-[8px] text-gold uppercase tracking-widest font-medium">Related Motifs & Sequels</p>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {selectedArtwork.relatedWorks.map((work, i) => (
                                  <span key={i} className="bg-sand/30 border border-sand text-[9px] font-mono px-2 py-0.5 rounded-none text-charcoal/80">
                                    {work}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Price, Status and Acquisition actions */}
                <div className="mt-8 border-t border-sand/60 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-mono text-[8px] text-charcoal/40 uppercase tracking-widest">
                        Acquisition Value
                      </p>
                      <p className="font-serif text-2xl font-light text-charcoal mt-0.5">
                        {selectedArtwork.price}
                      </p>
                    </div>
                    <div className="text-right">
                      {selectedArtwork.available ? (
                        <span className="inline-flex items-center space-x-1 bg-green-950/40 text-green-400 px-3 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase border border-green-900/40">
                          <Check className="w-3 h-3" />
                          <span>Work Available</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 bg-sand/40 text-charcoal/60 px-3 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase border border-sand/60">
                          <span>Sold (Acquired)</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedArtwork.available ? (
                    <button
                      id="modal-inquire-btn"
                      onClick={() => handleInquiry(selectedArtwork.title)}
                      className="w-full py-4 bg-charcoal hover:bg-gold text-cream hover:shadow-lg transition-all duration-300 text-xs tracking-widest uppercase font-mono cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Submit Acquisition Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      id="modal-disabled-inquire-btn"
                      disabled
                      className="w-full py-4 bg-sand text-charcoal/40 text-xs tracking-widest uppercase font-mono cursor-not-allowed flex items-center justify-center"
                    >
                      Unavailable for Acquisition
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
