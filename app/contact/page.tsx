import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact - Jean-Pierre Martin | Expert en Soudure Industrielle',
  description:
    "Contactez Jean-Pierre Martin pour vos besoins en audit, certification, coordination soudage, formation et assistance technique. Réponse sous 24h.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
