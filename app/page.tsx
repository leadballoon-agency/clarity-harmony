import { Metadata } from 'next'
import Script from 'next/script'
import SkinResetPageWrapper from '@/components/skin-reset/SkinResetPageWrapper'

export const metadata: Metadata = {
  title: 'Skin Reset | Alma Harmony SupErb Fractional Laser | Clarity Clinic Bedford',
  description: 'Alma Harmony SupErb fractional laser resurfacing designed for women ready to reclaim their skin. Smooth texture, brighter tone, reduced pigmentation, softened lines. CQC registered, nurse-led. Bedford.',
  keywords: [
    'skin reset',
    'Alma Harmony SupErb Bedford',
    'SupErb fractional laser',
    'laser skin resurfacing Bedford',
    'skin rejuvenation',
    'Clarity Clinic Bedford',
  ],
  openGraph: {
    title: 'Skin Reset | Clarity Clinic Bedford',
    description: "You've taken care of everyone else. Now it's your turn. Alma Harmony SupErb fractional laser resurfacing for women in their 40s, 50s & 60s.",
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.laserbedford.co.uk',
    siteName: 'Clarity Clinic Bedford',
  },
}

const skinResetSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Clarity Clinic Bedford',
  description: 'Alma Harmony SupErb fractional laser treatments for skin rejuvenation. CQC registered, nurse-led clinic in Bedford.',
  url: 'https://www.laserbedford.co.uk',
  telephone: '+447414154007',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Conway Crescent',
    addressLocality: 'Bedford',
    addressRegion: 'Bedfordshire',
    postalCode: 'MK41 7BW',
    addressCountry: 'GB',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skinResetSchema) }}
      />
      <SkinResetPageWrapper />
    </>
  )
}
