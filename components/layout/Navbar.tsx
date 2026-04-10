'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/lib/siteData';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/#apropos' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const handleClick = (to: string) => {
    if (to.startsWith('/#')) {
      const id = to.slice(2);
      if (pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = to;
      }
    }
    setOpen(false);
  };

  const isHome = pathname === '/';

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-5xl transition-all duration-500 rounded-2xl border ${
          scrolled || !isHome
            ? 'bg-navy-900/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/40'
            : 'bg-white/5 backdrop-blur-md border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-fire-500 rounded-xl flex items-center justify-center shadow-lg shadow-fire-500/40">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-white font-bold text-base leading-none tracking-tight">
              {SITE.expertName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
            {links.map((l) =>
              l.to.startsWith('/#') ? (
                <button
                  key={l.to}
                  onClick={() => handleClick(l.to)}
                  className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
                    pathname === l.to
                      ? 'bg-fire-500/20 text-fire-400'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 bg-fire-500 hover:bg-fire-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-fire-500/30 transition-all"
            >
              Devis gratuit
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10 px-4 py-4 space-y-1"
            >
              {links.map((l) =>
                l.to.startsWith('/#') ? (
                  <button
                    key={l.to}
                    onClick={() => handleClick(l.to)}
                    className="block w-full text-left px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all text-sm"
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    key={l.to}
                    href={l.to}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all text-sm"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl transition-all text-sm"
                >
                  Devis gratuit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
