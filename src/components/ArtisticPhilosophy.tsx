import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Award, Eye, Heart } from 'lucide-react';

export default function ArtisticPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-cream border-t border-border-subtle relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,164,126,0.02)_1px,transparent_1px)] [background-size:40px_40px] opacity-50 pointer-events-none" />

      {/* Breathing Ambient Gold Core (Pulse 8-12 seconds) */}
      <motion.div
        className="absolute -right-36 top-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ontological Frame</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-light text-cream tracking-tight mt-3"
          >
            Artistic Philosophy
          </motion.h2>
          <div className="h-[1px] w-20 bg-gold/40 mt-6 mx-auto md:mx-0" />
        </div>

        {/* Master Essay Content layout (12 Cols grid) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Large Quote / Core Pillars (Left - 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-card-bg border border-border-subtle shadow-2xl"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 left-6" />
              <p className="font-serif text-lg text-gold/90 leading-relaxed italic pt-8 pl-4">
                &ldquo;I do not paint to capture what stands before my eyes. I paint to discover the hidden architecture of silence, memory, and time that frames the human soul.&rdquo;
              </p>
              <div className="border-t border-border-subtle mt-6 pt-4 text-right">
                <span className="font-mono text-[10px] tracking-widest text-cream/40 uppercase">&mdash; James Ricardo</span>
              </div>
            </motion.div>

            {/* Three Core Philosophies */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-4 p-4 bg-card-bg/10 border border-border-subtle"
              >
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center font-serif text-xs text-gold shrink-0">
                  I
                </div>
                <div>
                  <h4 className="font-serif text-sm font-medium text-cream">Dreamlike Realism</h4>
                  <p className="font-sans text-xs text-cream/50 mt-1 leading-relaxed">
                    Existing precisely in the borderland between reality and abstract subconscious memory, using tactile oil textures to render spiritual structures.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start space-x-4 p-4 bg-card-bg/10 border border-border-subtle"
              >
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center font-serif text-xs text-gold shrink-0">
                  II
                </div>
                <div>
                  <h4 className="font-serif text-sm font-medium text-cream">Chiaroscuro & Resonance</h4>
                  <p className="font-sans text-xs text-cream/50 mt-1 leading-relaxed">
                    Shadow is not a negative void; it is a rich, textured substance. Placing a single, warm light in the shadows amplifies its truth.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start space-x-4 p-4 bg-card-bg/10 border border-border-subtle"
              >
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center font-serif text-xs text-gold shrink-0">
                  III
                </div>
                <div>
                  <h4 className="font-serif text-sm font-medium text-cream">Kintsugi of the Spirit</h4>
                  <p className="font-sans text-xs text-cream/50 mt-1 leading-relaxed">
                    Gilding wood, canvas, and bark with real 24k gold leaf. Celebrating vulnerability and our personal histories as places of strength.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Long Form Explanatory Text (Right - 7 Cols) */}
          <div className="lg:col-span-7 bg-card-bg border border-border-subtle p-8 md:p-12 shadow-2xl space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-xl md:text-2xl font-light text-cream tracking-tight border-b border-border-subtle pb-4"
            >
              worldview & creative process
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-cream/70 font-sans text-xs md:text-[13px] leading-relaxed font-light tracking-wide"
            >
              <p>
                My artistic practice is founded on a single conviction: that our external, material environment is merely a temporary shell for a much deeper, unseen spiritual architecture. When we walk down a quiet alleyway, when we watch waves crash against a stone cliff, or when we sit alone in a room, we are not just observing physical matter. We are participating in a layered dialogue between our consciousness and the eternal soul of the universe.
              </p>
              
              <h4 className="font-serif text-sm font-medium text-gold pt-2 uppercase tracking-wide">
                The Archaeology of Paint
              </h4>
              <p>
                To translate this worldview to the canvas, I developed a highly tactile, physical methodology. I treat paint not as a flat stain of color, but as an archaeological layer. Using heavy steel palette knives and natural beeswax, I sculpt the canvas surface itself. 
              </p>
              <p>
                The thick, carved ridges of my birch bark, the textured layers of my stone walls, and the satiny, translucent depths of my rivers are designed to cast their own shadows under the ambient lighting of a room. This bridges the gap between representation and physical existence, turning light into something tactile—something you can physically feel and touch.
              </p>

              <h4 className="font-serif text-sm font-medium text-gold pt-2 uppercase tracking-wide">
                Interconnected Storytelling
              </h4>
              <p>
                Every painting I create is not a standalone object; it is a single verse in a much larger, cohesive mythology. The same symbols—the iron lantern, the dark winding river, the clock, the solitary chair, and the golden bird—recur across different collections and eras. They represent characters in a slow, silent narrative of human experience, spiritual trials, and redemption.
              </p>
              <p>
                By exploring these connections, visitors enter a living museum of interconnected stories, revealing that our individual, isolated struggles—our versions of self, our letters never sent, and our seasons of waiting—are part of a beautiful, synchronized architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
