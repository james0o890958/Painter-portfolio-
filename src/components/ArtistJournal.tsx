import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Heart, Feather, Coffee, Calendar, Eye } from 'lucide-react';

interface JournalEssay {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
  signature: string;
}

const ESSAYS: JournalEssay[] = [
  {
    id: 'empty-roads',
    title: 'Why I Paint Empty Roads',
    date: 'February 12, 2026',
    readingTime: '4 min read',
    excerpt: 'An empty road is not a scene of abandonment; it is a canvas of absolute possibility. It is where our past choices wait to meet our future selves.',
    content: [
      'To stand before an empty road at twilight is to feel the weight of life’s paths converging. When we look at a road, we naturally look to its horizon, searching for a vehicle, a traveler, or a home. We crave a subject. But by keeping the road empty, I force the viewer to become the occupant of the scene.',
      'The empty road represents our agency. It is a physical timeline of choices. It suggests that someone has just walked past, or that someone is about to arrive. The dust caught in the low, golden lantern light is a tactile reminder of the journeys we have taken and those we have yet to begin.',
      'Through heavy palette knife work, I paint the soil of the road as something rough, thick, and permanent, while the twilight sky above remains fluid and transient. This contrast represents the tension between our physical limits and our infinite spiritual horizons.'
    ],
    signature: 'E. Rostova, Prague'
  },
  {
    id: 'meaning-of-gold',
    title: 'The Meaning of Gold in My Work',
    date: 'January 05, 2026',
    readingTime: '5 min read',
    excerpt: 'Gold is not decoration. It is a physical capture of sacred light—a divine outline showing that even our wounds and scars contain a higher light.',
    content: [
      'In traditional art history, gold leaf was used to paint the divine, the holy, and the eternal. It was meant to elevate the viewer’s mind from the earthly plane to the spiritual. In my paintings, gold serves a similar, yet deeply personal purpose.',
      'I apply genuine gold leaf to the physical ridges of my impasto, on the bark of white birches, or the hands of an old grandfather clock. This is because gold refracts real, three-dimensional light in a gallery room. As you move around the canvas, the painting literally shifts, breathing and sparkling in response to your physical presence.',
      'Gold represents the indestructible light of awareness. When applied to weathered, cracked bark or dissolving figures, it represents Kintsugi—the Eastern art of repairing broken pottery with gold lacquer. It says: our cracks, our vulnerabilities, and our histories are not defects; they are where the light resides.'
    ],
    signature: 'E. Rostova, Prague'
  },
  {
    id: 'memory-as-architecture',
    title: 'Memory As Architecture',
    date: 'November 24, 2025',
    readingTime: '6 min read',
    excerpt: 'Our minds do not store memories as flat files. We construct heavy stone rooms, arched hallways, and windows of light to house our history.',
    content: [
      'When I recall my childhood in Prague, I do not see chronological events. I see a series of rooms. I see the heavy stone arches of old Bohemian alleys, the reflection of candles on dark wood, and the cold frost forming on window panes.',
      'In my work, I treat memory as a geological excavation. Using stone powder, marble dust, and thick oil glazes, I literally sculpt these memory rooms on the canvas. The thick textures represent the weight and longevity of what we choose to keep inside.',
      'We are the architects of our own internal museums. Every person we have loved, every grief we have carried, and every silent watch we have kept has its own dedicated corridor. Through my paintings, I seek to build a physical structure for these silent corridors, allowing you to walk through them and find your own reflections.'
    ],
    signature: 'E. Rostova, Prague'
  },
  {
    id: 'painting-silence',
    title: 'Painting Silence',
    date: 'September 18, 2025',
    readingTime: '5 min read',
    excerpt: 'Silence is not the absence of sound; it is a heavy, velvet-like presence that can only be revealed by placing a single, solitary object in its center.',
    content: [
      'To paint silence is the ultimate challenge of the artist. If a canvas is entirely blank, it is not silent; it is simply empty. True silence requires a contrast. It requires a witness.',
      'By placing a single green pear sitting in a dramatic beam of side light (Solitude of the Green Pear), or a solitary rustic wooden chair in an empty room, I make the surrounding silence visible. The deep black background—built of twelve layers of charcoal glaze—becomes a physical envelope, a velvet container holding the subject.',
      'In our loud, hyper-connected world, we have lost the art of quiet contemplation. Silence has become terrifying. But on canvas, silence becomes a refuge. It is a holy space where we can breathe, align, and finally hear the whispers of our own souls.'
    ],
    signature: 'E. Rostova, Prague'
  },
  {
    id: 'what-river-represents',
    title: 'What The River Represents',
    date: 'July 14, 2025',
    readingTime: '4 min read',
    excerpt: 'Water is the ultimate storyteller. It flows, yet it remains. It is the perfect metaphor for the passage of time and the fluid current of memory.',
    content: [
      'I have always been drawn to winding bodies of water. The river represents the linear progression of time. It carries everything away—our tears, our debris, our past days. Yet, at the same time, the river is permanent. It is a constant presence, carving its way through stone valleys.',
      'When I paint water, I mix natural beeswax with my pigments. This creates a semi-translucent, satiny finish that catches the light and mimics the glassy surface of a deep stream. The reflection of gold stars or a single distant lantern in the water shows that time can hold the eternal.',
      'We are all rivers, traveling towards a vast, unknown sea. We carry the memory of the banks we have touched, but we cannot stop the flow. The art of living is learning to flow with the current, rather than fighting the stones.'
    ],
    signature: 'E. Rostova, Prague'
  },
  {
    id: 'role-of-light',
    title: 'The Role Of Light In My Paintings',
    date: 'May 02, 2025',
    readingTime: '5 min read',
    excerpt: 'Light is not just a visual tool; it is a spiritual protagonist. It is what carves hope out of the surrounding, heavy shadows.',
    content: [
      'My paintings rely heavily on Chiaroscuro—the dramatic contrast between light and dark popularized by Rembrandt and Caravaggio. In my work, darkness is never empty space; it is a heavy, physical substance made of rich shadows and layered glazes.',
      'Light is the protagonist that enters this substance. A single glowing lantern in the woods, a neon echo on wet asphalt, or a distant lighthouse wave on a stormy sea. This light acts as a physical force, carving shapes and revealing textures.',
      'Metaphorically, light represents hope, purpose, and divine presence. It says that no matter how vast and heavy the darkness of the world or our minds may seem, a tiny, concentrated spark is enough to break its grip. The light in my paintings is the promise of home.'
    ],
    signature: 'E. Rostova, Prague'
  }
];

export default function ArtistJournal() {
  const [activeEssayId, setActiveEssayId] = useState<string>('empty-roads');
  const [readCount, setReadCount] = useState<Record<string, boolean>>({});

  const activeEssay = ESSAYS.find(e => e.id === activeEssayId) || ESSAYS[0];

  const markAsRead = (id: string) => {
    setReadCount(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="journal" className="py-24 bg-sand border-t border-border-subtle relative overflow-hidden">
      {/* Background paper texture underlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,164,126,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

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
            <Feather className="w-3.5 h-3.5" />
            <span>Reflective Essays & Diaries</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight mt-3"
          >
            Artist Journal
          </motion.h2>
          <div className="h-[1px] w-20 bg-gold/40 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Essay Feed (Left - 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {ESSAYS.map((essay, idx) => {
              const isActive = essay.id === activeEssayId;
              const isRead = readCount[essay.id];
              return (
                <motion.div
                  key={essay.id}
                  id={`journal-feed-item-${essay.id}`}
                  onClick={() => {
                    setActiveEssayId(essay.id);
                    markAsRead(essay.id);
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`p-6 border text-left transition-all duration-300 cursor-pointer rounded-none relative ${
                    isActive
                      ? 'bg-card-hover border-gold/40 shadow-[0_0_20px_rgba(197,164,126,0.1)]'
                      : 'bg-transparent border-border-subtle hover:border-border-medium hover:bg-card-hover/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-mono text-[9px] tracking-widest uppercase text-gold/60">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{essay.date}</span>
                    </span>
                    <span>{essay.readingTime}</span>
                  </div>

                  <h3 className="font-serif text-base font-light text-charcoal mt-2.5 group-hover:text-gold transition-colors duration-300">
                    {essay.title}
                  </h3>

                  <p className="font-sans text-xs text-charcoal/50 mt-2 leading-relaxed font-light line-clamp-2">
                    {essay.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 border-t border-border-subtle pt-3">
                    <span className="font-mono text-[8px] text-charcoal/30 uppercase tracking-widest flex items-center space-x-1">
                      <Feather className="w-2.5 h-2.5 text-gold/40" />
                      <span>{essay.signature}</span>
                    </span>
                    {isActive ? (
                      <span className="font-mono text-[8px] text-gold uppercase tracking-widest flex items-center space-x-1">
                        <span>Active Reading</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                      </span>
                    ) : isRead ? (
                      <span className="font-mono text-[8px] text-charcoal/30 uppercase tracking-widest">
                        Read
                      </span>
                    ) : (
                      <span className="font-mono text-[8px] text-gold/60 uppercase tracking-widest hover:text-gold transition-colors">
                        Read Essay
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Immersive Paper Reading Window (Right - 7 Cols) */}
          <div className="lg:col-span-7 bg-card-journal p-8 md:p-14 border border-border-subtle relative shadow-2xl min-h-[500px]">
            {/* Fine golden corner accents representing paper frame */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/25" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/25" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/25" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/25" />

            <AnimatePresence mode="wait">
              <motion.article
                key={activeEssayId}
                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6 max-w-2xl mx-auto"
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 text-[10px] font-mono tracking-[0.2em] text-gold/60">
                  <span>JOURNAL LEDGER</span>
                  <span>{activeEssay.date}</span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                  {activeEssay.title}
                </h1>

                {/* Excerpt Block (emerging as textured block) */}
                <div className="border-l-2 border-gold pl-6 py-1 my-4 bg-card-bg/10 border-y border-r border-border-subtle">
                  <p className="font-serif text-sm md:text-base text-gold/85 italic leading-relaxed">
                    &ldquo;{activeEssay.excerpt}&rdquo;
                  </p>
                </div>

                {/* Main Body Text (emerging from paper) */}
                <div className="space-y-5 text-charcoal/70 font-sans text-xs md:text-[13px] leading-relaxed font-light tracking-wide">
                  {activeEssay.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Essay Footer Signature */}
                <div className="pt-8 border-t border-border-subtle flex items-center justify-between mt-8">
                  <span className="font-mono text-[9px] text-charcoal/30 uppercase tracking-widest">
                    Ledger Reference No: J-{activeEssayId.toUpperCase()}
                  </span>
                  <span className="font-serif text-sm text-gold/80 italic tracking-wider flex items-center space-x-1">
                    <span>{activeEssay.signature}</span>
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
