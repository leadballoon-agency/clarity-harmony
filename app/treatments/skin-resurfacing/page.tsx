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
    url: `https://www.laserbedford.co.uk/treatments/${treatment.slug}`,
    type: 'website',
  },
} : {}

function generateStructuredData() {
  if (!treatment) return null

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': `https://www.laserbedford.co.uk/treatments/${treatment.slug}#procedure`,
        name: treatment.name,
        description: treatment.description,
        procedureType: 'Non-Invasive',
        bodyLocation: 'Face',
        preparation: 'Skin analysis consultation required',
        followup: `${treatment.treatmentInfo.sessions} for optimal results`,
        howPerformed: treatment.description,
        status: 'http://schema.org/EventScheduled',
        availableService: {
          '@type': 'MedicalTherapy',
          name: treatment.technology,
          description: `${treatment.name} using ${treatment.technology}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: treatment.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.laserbedford.co.uk',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Treatments',
            item: 'https://www.laserbedford.co.uk/#treatments',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: treatment.shortName,
            item: `https://www.laserbedford.co.uk/treatments/${treatment.slug}`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `https://www.laserbedford.co.uk/treatments/${treatment.slug}#webpage`,
        url: `https://www.laserbedford.co.uk/treatments/${treatment.slug}`,
        name: treatment.metaTitle,
        description: treatment.metaDescription,
        isPartOf: {
          '@id': 'https://www.laserbedford.co.uk/#website',
        },
        about: {
          '@id': `https://www.laserbedford.co.uk/treatments/${treatment.slug}#procedure`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://www.laserbedford.co.uk${treatment.beforeAfter.after}`,
        },
      },
    ],
  }
}

export default function SkinResurfacingPage() {
  if (!treatment) {
    notFound()
  }

  const structuredData = generateStructuredData()

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <TreatmentPageTemplate treatment={treatment} />
    </>
  )
}
