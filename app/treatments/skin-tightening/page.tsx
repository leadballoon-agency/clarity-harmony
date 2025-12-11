import { Metadata } from 'next'
import { getTreatmentBySlug } from '@/lib/treatments'
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate'
import { notFound } from 'next/navigation'

const treatment = getTreatmentBySlug('skin-tightening')

export const metadata: Metadata = treatment ? {
  title: treatment.metaTitle,
  description: treatment.metaDescription,
  openGraph: {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
  },
} : {}

export default function SkinTighteningPage() {
  if (!treatment) {
    notFound()
  }

  return <TreatmentPageTemplate treatment={treatment} />
}
