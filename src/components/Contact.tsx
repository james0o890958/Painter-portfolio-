import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Loader2, Sparkles, Send } from 'lucide-react';

interface ContactProps {
  prefilledArtwork: string;
  onClearPrefill: () => void;
}

export default function Contact({ prefilledArtwork, onClearPrefill }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Acquisition Inquiry',
    artworkInterest: '',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    if (prefilledArtwork) {
      setFormData((prev) => ({
        ...prev,
        artworkInterest: prefilledArtwork,
        subject: 'Acquisition Inquiry',
      }));
    }
  }, [prefilledArtwork]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate server endpoint lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearPrefill();
    }, 1800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-sand pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              Acquisition & Commissions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal mt-2 tracking-tight">
              Studio Inquiry
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-charcoal/50 max-w-sm mt-4 md:mt-0 leading-relaxed font-light">
            To acquire available original paintings, request private gallery commissions, or arrange physical studio viewings, please submit your details below.
          </p>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Coordinates Info (Left - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-10">
            <div>
              <p className="font-mono text-[9px] text-gold uppercase tracking-[0.25em] font-medium mb-3">
                Direct Contact
              </p>
              <h3 className="font-serif text-2xl text-charcoal font-light mb-6">
                Connect with the Studio
              </h3>

              <div className="space-y-4 font-sans text-xs text-charcoal/70">
                <div className="flex items-center space-x-3.5 p-4 bg-[#0d0d0d]/40 border border-white/5 hover:bg-[#0d0d0d] transition-all duration-300">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href="mailto:studio@elenarostova.com" className="hover:text-gold transition-colors">
                    studio@elenarostova.com
                  </a>
                </div>

                <div className="flex items-center space-x-3.5 p-4 bg-[#0d0d0d]/40 border border-white/5 hover:bg-[#0d0d0d] transition-all duration-300">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>+420 224 811 590</span>
                </div>

                <div className="flex items-center space-x-3.5 p-4 bg-[#0d0d0d]/40 border border-white/5 hover:bg-[#0d0d0d] transition-all duration-300">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Prague Studio &bull; Holešovice District, CZ</span>
                </div>
              </div>
            </div>

            {/* Gallery Representation */}
            <div>
              <p className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest mb-4">
                Gallery Representation
              </p>
              <ul className="space-y-3 font-serif text-sm text-charcoal/80 italic leading-relaxed">
                <li>&bull; Galleria d’Arte Moderna &mdash; Milan, Italy</li>
                <li>&bull; Somerset Fine Art &mdash; London, United Kingdom</li>
                <li>&bull; Galerie de l’Est &mdash; Paris, France</li>
              </ul>
            </div>

            {/* Newsletter Subscription Ledger Box */}
            <div className="bg-sand/30 p-6 border border-sand/60 shadow-sm relative overflow-hidden">
              <span className="font-mono text-[9px] text-gold uppercase tracking-[0.25em] font-semibold mb-2 block">
                The Studio Ledger
              </span>
              <p className="font-sans text-[11px] text-charcoal/60 leading-relaxed font-light mb-4">
                Elena writes monthly reflections detailing light behaviors, studio updates, and early canvas catalogs. No spam, only oil and pigment philosophy.
              </p>

              {!newsletterSuccess ? (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="your.email@address.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-grow px-3 py-2.5 bg-[#151515] border border-white/5 text-xs focus:outline-none focus:border-gold rounded-none text-charcoal"
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="px-4 py-2.5 bg-charcoal hover:bg-gold text-cream text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 cursor-pointer flex items-center justify-center"
                  >
                    <span>Join</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  id="newsletter-success-box"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-gold py-1.5"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Subscribed to Ledger
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Form Area (Right - 8 Cols) */}
          <div className="lg:col-span-8 bg-[#0d0d0d] p-8 md:p-12 border border-white/5 shadow-sm">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                /* Main Inquiry Form */
                <motion.form
                  key="inquiry-form"
                  id="studio-inquiry-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="flex flex-col">
                      <label htmlFor="firstName" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                        First Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="form-firstName"
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                      <label htmlFor="lastName" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="form-lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300"
                        placeholder="john.doe@domain.com"
                      />
                    </div>

                    {/* Inquiry Type / Subject */}
                    <div className="flex flex-col">
                      <label htmlFor="subject" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Purpose of Contact
                      </label>
                      <select
                        id="form-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300 appearance-none"
                      >
                        <option value="Acquisition Inquiry">Original Artwork Acquisition</option>
                        <option value="Private Commission">Bespoke Painting Commission</option>
                        <option value="Studio Viewing">Arrange Studio Appointment</option>
                        <option value="Press / Exhibition">Press or Curatorial Interview</option>
                      </select>
                    </div>
                  </div>

                  {/* Artwork of Interest (Pre-filled if they clicked 'Inquire' on an Artwork) */}
                  <div className="flex flex-col">
                    <label htmlFor="artworkInterest" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                      Artwork of Interest (Optional)
                    </label>
                    <input
                      id="form-artworkInterest"
                      type="text"
                      name="artworkInterest"
                      value={formData.artworkInterest}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300"
                      placeholder="e.g. Whispers of the Gilded Birch"
                    />
                    {prefilledArtwork && (
                      <span className="font-mono text-[8px] text-gold mt-1.5 uppercase tracking-wider flex items-center space-x-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Pre-filled from Virtual Gallery selection</span>
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mb-1.5">
                      Your Message / Proposal <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#151515] border border-white/5 text-sm focus:outline-none focus:border-gold focus:bg-[#0d0d0d] text-charcoal rounded-none transition-all duration-300 resize-none"
                      placeholder="Please introduce yourself, specifying dimensions or framing preferences if inquiry is for custom commissions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="inquiry-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-charcoal hover:bg-gold disabled:bg-sand disabled:text-charcoal/30 text-cream text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cream" />
                        <span>Logging Inquiry details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Studio Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Succesful feedback receipt */
                <motion.div
                  key="form-success-alert"
                  id="inquiry-success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center rounded-full mb-6 border border-gold/20"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>

                  <h3 className="font-serif text-3xl font-light text-charcoal tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="font-mono text-[10px] text-gold uppercase tracking-widest mt-2">
                    Studio log coordinate registered
                  </p>

                  <div className="bg-sand p-6 border border-white/5 max-w-md w-full my-8 text-left space-y-3 text-xs font-sans text-charcoal/70">
                    <p>
                      <strong>Inquirer:</strong> {formData.firstName} {formData.lastName}
                    </p>
                    <p>
                      <strong>Reference ID:</strong> studio-inq-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                    </p>
                    <p>
                      <strong>Category:</strong> {formData.subject}
                    </p>
                    {formData.artworkInterest && (
                      <p>
                        <strong>Artwork:</strong> &ldquo;{formData.artworkInterest}&rdquo;
                      </p>
                    )}
                    <p className="border-t border-sand/50 pt-3 italic font-light">
                      &ldquo;{formData.message}&rdquo;
                    </p>
                  </div>

                  <p className="font-sans text-xs text-charcoal/50 max-w-sm leading-relaxed font-light">
                    Thank you for your appreciation. A gallery representative or Elena’s studio manager will respond with private catalog pricing details and shipping metrics at <strong>{formData.email}</strong> within 24 hours.
                  </p>

                  <button
                    id="submit-another-inquiry"
                    onClick={() => {
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        subject: 'Acquisition Inquiry',
                        artworkInterest: '',
                        message: '',
                      });
                      setSubmitSuccess(false);
                    }}
                    className="mt-8 text-xs font-mono text-charcoal hover:text-gold transition-colors duration-300 uppercase tracking-widest focus:outline-none border-b border-charcoal/30 pb-0.5 cursor-pointer"
                  >
                    Send Another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
