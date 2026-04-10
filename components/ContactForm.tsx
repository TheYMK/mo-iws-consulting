'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({ nom: '', entreprise: '', email: '', telephone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = `w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all border ${
    dark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-fire-400 focus:bg-white/15'
      : 'bg-white border-steel-200 text-navy-900 placeholder-steel-400 focus:border-fire-400 focus:ring-2 focus:ring-fire-400/20'
  }`;

  const labelClass = `block text-xs font-semibold mb-2 uppercase tracking-wider ${dark ? 'text-white/60' : 'text-steel-500'}`;

  if (sent) {
    return (
      <div className={`flex flex-col items-center justify-center py-16 text-center ${dark ? 'text-white' : ''}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className={`font-display text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-navy-900'}`}>
          Message envoyé !
        </h3>
        <p className={`${dark ? 'text-white/60' : 'text-steel-500'}`}>
          Je vous répondrai dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nom & Prénom *</label>
          <input
            type="text"
            required
            placeholder="Jean Dupont"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Entreprise</label>
          <input
            type="text"
            placeholder="Nom de votre société"
            value={form.entreprise}
            onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email professionnel *</label>
          <input
            type="email"
            required
            placeholder="jean@entreprise.fr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Téléphone</label>
          <input
            type="tel"
            placeholder="+33 6 00 00 00 00"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Votre message *</label>
        <textarea
          required
          rows={5}
          placeholder="Décrivez votre besoin ou votre projet..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-semibold rounded-xl shadow-xl shadow-fire-500/25 hover:shadow-fire-500/40 transition-all"
      >
        Envoyer mon message
        <Send className="w-5 h-5" />
      </button>

      <p className={`text-xs text-center ${dark ? 'text-white/30' : 'text-steel-400'}`}>
        Réponse garantie sous 24h ouvrées · Formulaire purement indicatif
      </p>
    </form>
  );
}
