import type { Metadata } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.laserbedford.co.uk'),
  title: {
    default: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
    template: '%s | Alma Harmony Bedford'
  },
  description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic specialising in skin rejuvenation, pigmentation, vascular lesions, and hair removal. Simply intelligent treatments.',
  keywords: [
    'Alma Harmony Bedford',
    'skin resurfacing Bedford',
    'laser treatment Bedford',
    'pigmentation treatment Bedford',
    'vascular lesion treatment Bedford',
    'hair removal Bedford',
    'Clarity Cosmetics',
    'Claire Emmerson',
    'nurse-led aesthetics Bedford',
    'CQC registered clinic Bedford',
    'skin rejuvenation Bedford',
    'IPL treatment Bedford',
    'Harmony Bio-Boost Bedford'
  ],
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/images/favicon.png'
  },
  authors: [{ name: 'Claire Emmerson, RN' }],
  creator: 'Clarity Cosmetics',
  publisher: 'Clarity Cosmetics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
    description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic. Multi-technology platform for comprehensive skin treatments. Book your free consultation today.',
    url: 'https://www.laserbedford.co.uk',
    siteName: 'Alma Harmony Bedford - Clarity Cosmetics',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Claire Emmerson - Registered Nurse & Alma Harmony Specialist at Clarity Cosmetics Bedford',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
    description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic. Multi-technology platform for comprehensive skin treatments.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      name: 'Clarity Cosmetics - Alma Harmony Bedford',
      image: 'https://www.laserbedford.co.uk/images/hero.jpg',
      description: 'CQC registered nurse-led aesthetic clinic in Bedford specialising in Alma Harmony skin resurfacing treatments for skin rejuvenation, pigmentation, vascular lesions, and hair removal.',
      url: 'https://www.laserbedford.co.uk',
      telephone: '+447414154007',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Conway Crescent',
        addressLocality: 'Bedford',
        postalCode: 'MK41 7BW',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.1406,
        longitude: -0.4670,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      priceRange: '££-£££',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '8',
        bestRating: '5',
        worstRating: '1',
      },
      founder: {
        '@id': 'https://www.laserbedford.co.uk/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.laserbedford.co.uk/#person',
      name: 'Claire Emmerson',
      jobTitle: 'Registered Nurse & Aesthetic Practitioner',
      image: 'https://www.laserbedford.co.uk/images/hero.jpg',
      description: 'Registered Nurse with over 10 years of experience, specialising in Alma Harmony skin resurfacing and aesthetic treatments. CQC registered and Independent Prescriber.',
      worksFor: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      alumniOf: 'Nursing & Midwifery Council',
      hasCredential: [
        'Registered Nurse (RN)',
        'Registered Midwife',
        'Independent Prescriber',
        'Advanced Aesthetic Practitioner',
      ],
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Alma Harmony Skin Resurfacing',
      description: 'Award-winning multi-technology platform for skin resurfacing, tone and texture improvement, pigmentation treatment, vascular lesion removal, and hair removal.',
      medicineSystem: 'Aesthetic Medicine',
      relevantSpecialty: 'Dermatology',
      procedure: {
        '@type': 'MedicalProcedure',
        name: 'Alma Harmony Treatment',
        procedureType: 'Therapeutic',
        bodyLocation: 'Face, Neck, Body',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Alma Harmony Skin Resurfacing',
      provider: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bedford',
        containedIn: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Alma Harmony Treatments',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Resurfacing Treatment',
              description: 'Advanced skin resurfacing for texture, tone, and rejuvenation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pigmentation Treatment',
              description: 'Targeted treatment for pigmented lesions and sun damage',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vascular Lesion Treatment',
              description: 'Treatment for facial veins, rosacea, and vascular concerns',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.laserbedford.co.uk/#website',
      url: 'https://www.laserbedford.co.uk',
      name: 'Alma Harmony Bedford - Clarity Cosmetics',
      description: 'Award-winning Alma Harmony skin resurfacing in Bedford',
      publisher: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      inLanguage: 'en-GB',
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
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Alma Harmony?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alma Harmony is an award-winning multi-technology platform that integrates five powerful laser technologies in one system: Q-Switch laser, fractional ablative laser, IPL, non-ablative laser, and green diode laser. This allows us to treat a wide range of skin concerns from a single platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can Alma Harmony treat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alma Harmony can treat a comprehensive range of skin concerns including: skin resurfacing and texture improvement, pigmented lesions (age spots, sun damage, melasma), vascular lesions (spider veins, rosacea), acne and acne scars, hair removal, tattoo removal, and skin rejuvenation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alma Harmony suitable for all skin types?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! One of the key advantages of Alma Harmony is its ability to safely and effectively treat all skin types (Fitzpatrick I-VI). During your consultation, we will assess your skin and recommend the most suitable technology and settings.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Harmony Bio-Boost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harmony Bio-Boost is a branded treatment recently named Best Laser for Fine Lines at the ELLE Tweakments Awards 2025. It is a next-generation skin rejuvenation treatment that combines multiple Alma Harmony technologies for optimal results.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a consultation cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A consultation costs £25, which is fully redeemable against any Alma Harmony treatment you book. The consultation includes a full skin assessment and personalized treatment plan.',
          },
        },
      ],
    },
    {
      '@type': 'Product',
      name: 'Alma Harmony Treatments',
      description: 'Award-winning Alma Harmony skin resurfacing treatments in Bedford',
      brand: {
        '@type': 'Brand',
        name: 'Alma Lasers',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        offerCount: 6,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '8',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
