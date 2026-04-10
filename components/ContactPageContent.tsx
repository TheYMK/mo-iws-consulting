'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/siteData';

export default function ContactPageContent() {
  const msg = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services d'expertise en soudage industriel.");

  return (
    <>
      <div className="bg-navy-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-fire-500/30 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-fire-500/15 text-fire-400 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Contactez-nous
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
              Parlons de votre <span className="text-gradient-fire">projet</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl">
              Audit, certification, assistance technique ou formation — discutons ensemble de la meilleure solution pour votre entreprise.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
                  Informations de contact
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Phone, title: 'Téléphone', val: SITE.phone, href: `tel:${SITE.phone}`, color: 'bg-blue-100 text-blue-700' },
                    { icon: Mail, title: 'Email', val: SITE.email, href: `mailto:${SITE.email}`, color: 'bg-green-100 text-green-700' },
                    { icon: MapPin, title: 'Localisation', val: SITE.location, href: null, color: 'bg-orange-100 text-orange-700' },
                    { icon: Clock, title: 'Disponibilité', val: 'Lun–Ven: 8h–18h • Urgences 7j/7', href: null, color: 'bg-purple-100 text-purple-700' },
                  ].map(({ icon: Icon, title, val, href, color }) => (
                    <div key={title} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel-200 shadow-sm">
                      <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-steel-400 uppercase tracking-wider mb-1">{title}</p>
                        {href ? (
                          <a href={href} className="text-navy-900 font-medium hover:text-fire-500 transition-colors text-sm">{val}</a>
                        ) : (
                          <p className="text-navy-900 font-medium text-sm">{val}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full px-6 py-5 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-2xl shadow-xl shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 mb-6"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 fill-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg leading-none">Contacter via WhatsApp</p>
                    <p className="text-white/70 text-sm mt-1">Réponse rapide garantie</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto" />
                </a>

                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-6 py-4 bg-[#0A66C2] hover:bg-[#0856a8] text-white rounded-2xl transition-all font-semibold"
                >
                  <Linkedin className="w-5 h-5" />
                  Suivre sur LinkedIn
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-steel-200"
              >
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-steel-400 text-sm mb-8">
                  Décrivez votre projet et nous vous répondrons sous 24h ouvrées.
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-3">
            Interventions France entière &amp; International
          </h3>
          <p className="text-white/50 max-w-xl mx-auto">
            Basé à Lyon, nous intervenons sur l&apos;ensemble du territoire français et à l&apos;international pour des missions de courte ou longue durée.
          </p>
        </div>
      </div>
    </>
  );
}
