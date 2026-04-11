import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact - MO IWS CONSULTING | Expert en Soudage IWS',
  description:
    "Contactez MO IWS CONSULTING pour vos besoins en coordination soudage, inspection, assurance qualité et qualification de procédés. Réponse sous 24h.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
