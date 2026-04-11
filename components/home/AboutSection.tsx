'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Target } from 'lucide-react';
import { SITE, IMAGES } from '@/lib/siteData';

const values = [
  { icon: '🎯', title: 'Excellence', desc: "Chaque mission est réalisée avec le plus haut niveau d'exigence technique." },
  { icon: '🛡️', title: 'Conformité', desc: "Maîtrise complète des normes ISO 14731, ISO 3834 et ISO 9001." },
  { icon: '⚡', title: 'Réactivité', desc: "Disponibilité et flexibilité pour répondre à vos urgences terrain." },
  { icon: '🤝', title: 'Partenariat', desc: "Une relation de confiance durable avec nos clients industriels." },
];

const certifications = [
  'IWS – International Welding Specialist',
  'Coordination soudage selon ISO 14731',
  'Assurance qualité soudage ISO 3834',
  'Connaissance des exigences ISO 9001',
  'Expérience terrain multi-procédés (111, 135, 136, 141)',
];

const industries = [
  'Énergie (centrales thermiques, hydroélectriques)',
  'Industrie lourde',
  'Tuyauterie industrielle',
  'Chaudronnerie & structures métalliques',
  'Naval & maintenance marine',
  'Projets internationaux',
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
            À propos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Un expert à votre service
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Une expertise terrain au service de la qualité et de la performance industrielle.
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
                src="/me_bg.png"
                alt={SITE.consultantName + " - " + SITE.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-white text-2xl font-bold">{SITE.consultantName}</p>
                <p className="text-fire-400">{SITE.title}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-navy-900 rounded-2xl p-5 text-white shadow-xl">
              <p className="font-display text-4xl font-bold text-fire-400">{SITE.experience}+</p>
              <p className="text-white/60 text-sm mt-1">Années d&apos;expertise</p>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-steel-600 text-lg leading-relaxed mb-8 space-y-4"
            >
              <p>
                Je suis {SITE.consultantName}, consultant expert en soudage certifié IWS (International Welding Specialist).
              </p>
              <p>
                Avec plus de {SITE.experience} ans d&apos;expérience dans l&apos;industrie (énergie, hydraulique, nucléaire, tuyauterie, chaudronnerie), j&apos;ai évolué du terrain vers des fonctions de supervision, coordination et assurance qualité.
              </p>
              <p>
                Aujourd&apos;hui, j&apos;accompagne les entreprises dans la maîtrise de leurs opérations de soudage, en garantissant la qualité, la sécurité et la conformité aux exigences techniques et normatives.
              </p>
            </motion.div>

            <div className="mb-8">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-fire-500" />
                Certifications &amp; qualifications
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
