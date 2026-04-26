"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Consultant",
    company: "MO IWS CONSULTING",
    period: "avr. 2026 – Aujourd'hui",
    location: "Océan Indien",
    highlights: [
      "Inspection QA/QC, coordination soudage ISO 14731, audits, DMOS/QMOS et accompagnement entreprise.",
    ],
  },
  {
    role: "Superviseur soudeur",
    company: "ANDRITZ HYDRO",
    period: "sept. 2018 – mai 2026",
    location: "Rhinau",
    highlights: [
      "Supervision soudage, montage stator, contrôles qualité et conformité documentaire.",
    ],
  },
  {
    role: "Superviseur soudeur",
    company: "PI Intérim Grenoble",
    period: "2016 – 2017",
    location: "Grenoble",
    highlights: ["Assurance qualité soudage."],
  },
  {
    role: "Technicien soudeur",
    company: "TACQUET SOUDURE",
    period: "mai 2013 – déc. 2016",
    location: "Grenoble",
    highlights: [
      "Interventions raffinerie, CNPE, cimenterie, sucrerie et nucléaire.",
    ],
  },
  {
    role: "Soudeur",
    company: "OCEAL Luxembourg",
    period: "févr. 2013 – avr. 2013",
    location: "Dijon",
    highlights: [
      "Soudeur TIG (141), inox et carbone sur tuyauterie.",
      "Chantier pour Eiffage à Dijon.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-fire-500 blur-3xl" />
        <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-navy-900 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-fire-500/10 text-fire-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Parcours professionnel
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Expérience terrain
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Du soudage sur chantier à la coordination et au conseil : un parcours
            au cœur des enjeux industriels et de la conformité.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div
              className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-fire-500 via-fire-400/60 to-steel-200"
              aria-hidden
            />

            <ul className="space-y-0">
              {EXPERIENCES.map((exp, i) => (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-11 sm:pl-14 pb-10 sm:pb-12 last:pb-0"
                >
                  <div
                    className="absolute left-[9px] sm:left-[13px] top-2.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-fire-500 shadow-lg shadow-fire-500/35 ring-4 ring-white"
                    aria-hidden
                  />

                  <article className="rounded-2xl border border-steel-200/90 bg-[#fafbfc] p-5 sm:p-6 transition-all duration-300 hover:border-fire-500/25 hover:bg-white hover:shadow-lg hover:shadow-navy-900/[0.04]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 leading-tight">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-fire-600 sm:text-base">
                          {exp.company}
                        </p>
                      </div>
                      <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-steel-400 sm:text-right sm:text-sm sm:normal-case sm:font-medium sm:text-steel-500">
                        {exp.period}
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-bold text-navy-800">
                      {exp.location}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-steel-200/80 pt-4">
                      {exp.highlights.map((line) => (
                        <li
                          key={line}
                          className="relative pl-4 text-sm leading-relaxed text-steel-600 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-fire-500/80"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
