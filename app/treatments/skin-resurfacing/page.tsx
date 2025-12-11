import { Metadata } from 'next'
import { getTreatmentBySlug } from '@/lib/treatments'
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate'
import { notFound } from 'next/navigation'

const treatment = getTreatmentBySlug('skin-resurfacing')

export const metadata: Metadata = treatment ? {
  title: treatment.metaTitle,
  description: treatment.metaDescription,
  openGraph: {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
  },
} : {}

export default function SkinResurfacingPage() {
  if (!treatment) {
    notFound()
  }

  return <TreatmentPageTemplate treatment={treatment} />
}
