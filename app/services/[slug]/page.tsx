import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/siteData';
import ServiceDetailContent from '@/components/ServiceDetailContent';

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} - MO IWS CONSULTING | Expert Soudage IWS`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
