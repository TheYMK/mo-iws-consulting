'use client';

import Link from 'next/link';
import { Flame, MapPin, Phone, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { SITE, SERVICES } from '@/lib/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050d1a] text-white">
      <div className="bg-fire-500/10 border-y border-fire-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold">Pret a demarrer votre projet ?</p>
            <p className="text-white/60 mt-1">Contactez-nous pour un devis gratuit et personnalise.</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl shadow-lg shadow-fire-500/20 transition-all whitespace-nowrap"
          >
            Nous contacter <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-fire-500 rounded-xl flex items-center justify-center">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-display text-xl font-bold">{SITE.expertName}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Expert Soudure IWE</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              {SITE.experience}+ ans d&apos;expertise en soudage industriel. Qualite, conformite et performance pour l&apos;industrie.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 uppercase text-xs tracking-widest text-fire-400">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', to: '/' },
                { label: 'A propos', to: '/#apropos' },
                { label: 'Services', to: '/#services' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to}
                    className="text-white/50 hover:text-fire-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 uppercase text-xs tracking-widest text-fire-400">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={"/services/" + s.slug}
                    className="text-white/50 hover:text-fire-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 uppercase text-xs tracking-widest text-fire-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-fire-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">{SITE.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-fire-400 flex-shrink-0" />
                <a href={"tel:" + SITE.phone} className="text-white/50 hover:text-fire-400 transition-colors text-sm">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-fire-400 flex-shrink-0" />
                <a href={"mailto:" + SITE.email} className="text-white/50 hover:text-fire-400 transition-colors text-sm break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 rounded-lg border border-[#0A66C2]/30 text-white/70 hover:text-white transition-all text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} {SITE.expertName} - Expert en Soudure Industrielle. Tous droits reserves.
          </p>
          <p className="text-white/30 text-xs">
            Consultant certifie IWE - ISO 3834 - EN 1090
          </p>
        </div>
      </div>
    </footer>
  );
}
