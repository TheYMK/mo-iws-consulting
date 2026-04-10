'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Award, Star, ShieldCheck } from 'lucide-react';
import { SITE, IMAGES } from '@/lib/siteData';

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050d1a]">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Atelier de soudage industriel"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/85 to-[#050d1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-fire-500 opacity-70 animate-ping" style={{ animationDuration: '2.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-fire-400 opacity-50 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-fire-300 opacity-30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
            Expert en<br />
            <span className="text-gradient-fire">Soudure</span>{' '}
            <span className="text-white">Industrielle</span>{' '}
            <span className="text-white/40">&amp;</span>{' '}
            <span className="text-white">Consultant</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Plus de <span className="text-white font-semibold">{SITE.experience} ans d&apos;expérience</span> au service de la performance, de la qualité et de la conformité industrielle.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl shadow-xl shadow-fire-500/25 hover:shadow-fire-500/40 transition-all text-base"
            >
              Découvrir mes services
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all text-base"
            >
              Me contacter
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { val: `${SITE.experience}+`, label: "Années d'expérience", iconEl: <Award className="w-5 h-5 text-fire-400" /> },
              { val: 'ISO 3834', label: 'Lead Auditor', iconEl: <ShieldCheck className="w-5 h-5 text-fire-400" /> },
              { val: '200+', label: 'Missions réalisées', iconEl: <Star className="w-5 h-5 text-fire-400" /> },
            ].map(({ iconEl, val, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-fire-500/15 border border-fire-500/25 rounded-xl flex items-center justify-center">
                  {iconEl}
                </div>
                <div>
                  <p className="font-display font-bold text-white text-xl leading-none">{val}</p>
                  <p className="text-white/40 text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:flex justify-center items-end relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-fire-500/20 rounded-3xl blur-2xl" />
            <div className="relative w-[380px] h-[480px] rounded-3xl overflow-hidden border-2 border-fire-500/20">
              <img
                src={IMAGES.expert}
                alt={`${SITE.expertName} - Expert en soudure industrielle`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-white text-xl font-bold">{SITE.expertName}</p>
                <p className="text-fire-400 text-sm">{SITE.title}</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -right-6 top-8 bg-white rounded-2xl shadow-2xl px-5 py-4 border border-gray-100"
            >
              <p className="text-navy-900 font-bold text-lg leading-none">IWE</p>
              <p className="text-gray-500 text-xs mt-1">Certifié IIW</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
