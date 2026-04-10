'use client';

import { motion } from 'framer-motion';

const items = [
  { num: '20+', label: "Ans d'expérience", sub: 'En soudage industriel international' },
  { num: '200+', label: 'Missions réalisées', sub: "En France et à l'étranger" },
  { num: '15+', label: 'Secteurs couverts', sub: "De l'énergie au naval" },
  { num: '100%', label: 'Certification clients', sub: 'Taux de succès aux audits ISO 3834' },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Des chiffres qui parlent d&apos;eux-mêmes
          </h2>
          <p className="text-white/50">Une expertise reconnue par les plus grands acteurs industriels</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-fire-400 mb-2">{item.num}</p>
              <p className="text-white font-semibold mb-1">{item.label}</p>
              <p className="text-white/40 text-xs">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
