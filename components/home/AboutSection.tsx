'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Target } from 'lucide-react';
import { SITE, IMAGES } from '@/lib/siteData';

const values = [
  { icon: '🎯', title: 'Excellence', desc: "Chaque mission est realisee avec le plus haut niveau d'exigence technique." },
  { icon: '🛡️', title: 'Conformite', desc: "Maitrise complete des normes ISO, EN et codes internationaux." },
  { icon: '⚡', title: 'Reactivite', desc: "Disponibilite et flexibilite pour repondre a vos urgences terrain." },
  { icon: '🤝', title: 'Partenariat', desc: "Une relation de confiance durable avec nos clients industriels." },
];

const certifications = [
  'IWE - Ingenieur International en Soudage',
  'ISO 3834 - Lead Auditor Certifie',
  'COFREND Niveau 3 - Controles Non Destructifs',
  'EN 1090 - Expert en Construction Metallique',
];

const industries = [
  'Construction metallique', 'Petrochimie', 'Energie & nucleaire',
  'Naval & offshore', 'Aeronautique', 'Transport ferroviaire', 'Chaudronnerie',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const } }),
};

export default function AboutSection() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-fire-500/10 text-fire-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            A propos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Un expert a votre service
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Ingenieur International en Soudage avec plus de {SITE.experience} ans d&apos;experience dans les secteurs les plus exigeants de l&apos;industrie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={IMAGES.expert}
                alt={SITE.expertName + " - Expert soudure industrielle"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-white text-2xl font-bold">{SITE.expertName}</p>
                <p className="text-fire-400">{SITE.title}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-navy-900 rounded-2xl p-5 text-white shadow-xl">
              <p className="font-display text-4xl font-bold text-fire-400">{SITE.experience}+</p>
              <p className="text-white/60 text-sm mt-1">Annees d&apos;expertise</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-steel-600 text-lg leading-relaxed mb-8"
            >
              Fort d&apos;une experience acquise sur les chantiers les plus complexes d&apos;Europe et du monde, je mets mon expertise technique au service de votre performance industrielle. Certifie IWE par l&apos;Institut International de la Soudure, j&apos;interviens comme consultant independant, coordinateur de soudage ou expert technique.
            </motion.p>

            <div className="mb-8">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-fire-500" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((c, i) => (
                  <motion.li
                    key={c}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-steel-700"
                  >
                    <CheckCircle className="w-5 h-5 text-fire-500 flex-shrink-0" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-fire-500" />
                Secteurs d&apos;intervention
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span key={ind} className="px-3 py-1.5 bg-steel-100 text-steel-700 text-sm rounded-lg border border-steel-200">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-white hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-4xl mb-4">{v.icon}</p>
              <h4 className="font-display font-bold text-xl mb-2">{v.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
