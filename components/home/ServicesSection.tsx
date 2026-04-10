'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Wrench, SearchCheck, ShieldCheck, FileText, HardHat, Factory } from 'lucide-react';
import { SERVICES, IMAGES } from '@/lib/siteData';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = { Wrench, SearchCheck, ShieldCheck, FileText, HardHat, Factory };

const SERVICE_BG: Record<string, string> = {
  'coordination-soudage': IMAGES.chantier,
  'inspection-controle': IMAGES.audit,
  'assurance-qualite': IMAGES.expertise,
  'qualification-procedes': IMAGES.dmos,
  'supervision-travaux': IMAGES.chantier,
  'suivi-fabrication': IMAGES.formation,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#060d1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-fire-500/10 text-fire-500 text-xs font-semibold rounded-full mb-4 uppercase tracking-widest border border-fire-500/20">
            Expertise &amp; Services
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Nos domaines<br />d&apos;intervention
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/50 hover:text-fire-400 text-sm font-medium transition-colors"
            >
              Besoin d&apos;un service sur mesure ? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Wrench;
            const bg = SERVICE_BG[service.slug] || IMAGES.chantier;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={bg}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1c] via-[#060d1c]/60 to-transparent" />
                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors duration-500" />

                <div className="absolute top-5 left-5">
                  <div className="w-11 h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-fire-500/80 group-hover:border-fire-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-fire-500 text-white text-xs font-semibold rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-fire-400 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
