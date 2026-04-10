'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Jean-Pierre est intervenu en tant que coordinateur soudage sur notre site de Fos-sur-Mer. Son expertise technique et sa rigueur ont été déterminantes pour l'obtention de notre certification ISO 3834 en moins de 6 mois.",
    author: 'Directeur Qualité',
    company: 'Industrie Pétrolière, Bouches-du-Rhône',
  },
  {
    text: "Grâce à l'audit réalisé par JP Martin, nous avons identifié et corrigé des non-conformités critiques avant notre audit client. Son rapport d'audit est le plus complet que nous ayons jamais reçu.",
    author: 'Responsable Production',
    company: 'Construction Métallique, Normandie',
  },
  {
    text: "Les formations dispensées par Jean-Pierre ont transformé notre équipe. Nos soudeurs ont non seulement amélioré leurs compétences techniques mais aussi leur compréhension des exigences normatives.",
    author: "Chef d'Atelier",
    company: 'Chaudronnerie Industrielle, Rhône-Alpes',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-fire-500/10 text-fire-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">
            Ce que disent nos clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-[#f5f7fa] rounded-2xl p-8 border border-steel-200"
            >
              <Quote className="w-10 h-10 text-fire-400/40 mb-4" />
              <p className="text-steel-600 leading-relaxed mb-6 text-sm italic">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-steel-200 pt-4">
                <p className="font-semibold text-navy-900 text-sm">{t.author}</p>
                <p className="text-steel-400 text-xs">{t.company}</p>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-fire-400 text-sm">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
