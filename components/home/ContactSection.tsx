'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/siteData';

export default function ContactSection() {
  const msg = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services d'expertise en soudage industriel.");

  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-fire-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-fire-500/15 text-fire-400 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
              Contact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Besoin d&apos;un audit, d&apos;une certification ou d&apos;une assistance technique ? Contactez-nous pour une analyse gratuite de votre situation.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, val: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: Mail, val: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, val: SITE.location, href: null },
              ].map(({ icon: Icon, val, href }) => (
                <div key={val} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-fire-500/15 border border-fire-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-fire-400" />
                  </div>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-fire-400 transition-colors">{val}</a>
                  ) : (
                    <span className="text-white/70">{val}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Contacter via WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-2">Envoyez-nous un message</h3>
            <p className="text-white/40 text-sm mb-8">Réponse garantie sous 24h ouvrées</p>
            <ContactForm dark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
