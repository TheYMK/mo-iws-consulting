'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { SITE } from '@/lib/siteData';

export default function WhatsAppFAB() {
  const [tooltip, setTooltip] = useState(true);
  const msg = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services d'expertise en soudage industriel.");
  const url = `https://wa.me/${SITE.whatsapp}?text=${msg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 10 }}
            className="bg-white text-navy-900 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-2xl max-w-[180px] leading-snug flex items-center gap-2"
          >
            <span>Discutons de votre projet 💬</span>
            <button onClick={() => setTooltip(false)} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center"
        onClick={() => setTooltip(false)}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </motion.a>
    </div>
  );
}
