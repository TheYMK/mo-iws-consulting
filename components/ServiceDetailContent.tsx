'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronRight, MessageCircle, SearchCheck, Users, FileText, HardHat, GraduationCap, ShieldCheck, Search, Phone } from 'lucide-react';
import { SERVICES, SITE } from '@/lib/siteData';
import type { Service } from '@/lib/siteData';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = { SearchCheck, Users, FileText, HardHat, GraduationCap, ShieldCheck, Search };

export default function ServiceDetailContent({ service }: { service: Service }) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const Icon = ICON_MAP[service.icon] || SearchCheck;
  const msg = encodeURIComponent(`Bonjour, je souhaite des informations sur le service : ${service.title}`);

  return (
    <>
      <div className="relative bg-navy-900 pt-20 min-h-[70vh] flex items-center overflow-hidden">
        {service.heroImage && (
          <div className="absolute inset-0">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/40 mb-8"
          >
            <Link href="/" className="hover:text-fire-400 transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#services" className="hover:text-fire-400 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/70">{service.title}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-fire-500 rounded-2xl flex items-center justify-center shadow-xl shadow-fire-500/30">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-fire-400 text-sm font-semibold uppercase tracking-wider">{service.tagline}</span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl shadow-xl shadow-fire-500/25 transition-all"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">Description du service</h2>
                {service.fullDesc.split('\n\n').map((para, i) => (
                  <p key={i} className="text-steel-600 leading-relaxed mb-4 text-base">{para}</p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">Notre démarche</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-5 bg-[#f5f7fa] rounded-2xl p-6 border border-steel-200">
                      <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center flex-shrink-0 text-fire-400 font-bold font-display text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 mb-1">{step.label}</h4>
                        <p className="text-steel-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">Bénéfices pour votre entreprise</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl bg-fire-500/5 border border-fire-500/15">
                      <CheckCircle className="w-5 h-5 text-fire-500 flex-shrink-0 mt-0.5" />
                      <p className="text-navy-900 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">Secteurs concernés</h2>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((ind) => (
                    <span key={ind} className="px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-xl">
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-navy-900 rounded-2xl p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold text-white mb-2">Besoin de ce service ?</h3>
                <p className="text-white/50 text-sm mb-6">Contactez-nous pour un devis personnalisé et gratuit.</p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20"
                  >
                    <Phone className="w-4 h-4" /> {SITE.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl transition-all"
                  >
                    Formulaire de contact
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs text-center">Réponse sous 24h ouvrées • Devis gratuit</p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Autres services</h3>
                <div className="space-y-3">
                  {otherServices.map((s) => {
                    const OtherIcon = ICON_MAP[s.icon] || SearchCheck;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-4 bg-[#f5f7fa] rounded-xl border border-steel-200 hover:border-fire-500/50 hover:bg-fire-500/5 transition-all group"
                      >
                        <div className="w-9 h-9 bg-navy-900 group-hover:bg-fire-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                          <OtherIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-navy-900 font-medium text-sm group-hover:text-fire-600 transition-colors">{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f7fa] py-20 border-t border-steel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-steel-500 text-lg mb-10">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl shadow-xl transition-all"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" /> Contacter via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
