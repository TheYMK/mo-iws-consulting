'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const CERTS = [
  {
    title: "IWS — International Welding Specialist",
    body: "Délivré par l'IIW (International Institute of Welding). Qualification reconnue internationalement en technologie et pratique du soudage.",
    org: "IIW — International Institute of Welding",
    year: "2006",
    color: "from-blue-900/80 to-navy-900/90",
    accent: "border-blue-400/40",
    tag: "IWS",
    image: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/3f0965789_generated_image.png",
  },
  {
    title: "ISO 3834 — Assurance Qualité Soudage",
    body: "Maîtrise des exigences de qualité en soudage par fusion des matériaux métalliques selon la norme internationale ISO 3834.",
    org: "Certification internationale",
    year: "2010",
    color: "from-emerald-900/80 to-navy-900/90",
    accent: "border-emerald-400/40",
    tag: "ISO 3834",
    image: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/5bcffd6aa_generated_image.png",
  },
  {
    title: "ISO 14731 — Coordination en Soudage",
    body: "Compétences en coordination des activités de soudage selon la norme ISO 14731. Supervision technique et gestion de la qualité.",
    org: "Norme internationale ISO",
    year: "2008",
    color: "from-amber-900/70 to-navy-900/90",
    accent: "border-amber-400/40",
    tag: "ISO 14731",
    image: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/0ad203eb9_generated_image.png",
  },
  {
    title: "Multi-Procédés — 111, 135, 136, 141",
    body: "Expérience terrain approfondie sur les principaux procédés de soudage : électrode enrobée (111), MIG/MAG (135/136) et TIG (141).",
    org: "Expérience opérationnelle certifiée",
    year: "20+ ans",
    color: "from-purple-900/80 to-navy-900/90",
    accent: "border-purple-400/40",
    tag: "MULTI",
    image: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/3a2230813_generated_image.png",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-[#080f1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fire-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-fire-500/10 text-fire-500 text-xs font-semibold rounded-full mb-5 uppercase tracking-widest border border-fire-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Certifications &amp; Qualifications
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Une expertise reconnue<br />à l&apos;international
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Des qualifications obtenues auprès des organismes les plus exigeants du secteur industriel mondial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl border ${cert.accent} bg-gradient-to-br ${cert.color} backdrop-blur-sm hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex gap-0">
                <div className="w-36 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/80" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 bg-fire-500 text-white text-xs font-bold rounded-lg tracking-wider">
                      {cert.tag}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-base font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs text-white/30 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {cert.body}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-fire-500/60" />
                    {cert.org}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 pt-10 border-t border-white/5"
        >
          {["IIW Member", "ISO 3834", "ISO 14731", "ISO 9001", "Multi-Procédés"].map((badge) => (
            <span key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-xs font-medium tracking-wider">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
