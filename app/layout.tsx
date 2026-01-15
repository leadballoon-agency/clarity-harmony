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
    'Clarity Clinic',
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
  creator: 'Clarity Clinic',
  publisher: 'Clarity Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
    description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic. Multi-technology platform for comprehensive skin treatments. Book your consultation today - £25 fully redeemable.',
    url: 'https://www.laserbedford.co.uk',
    siteName: 'Alma Harmony Bedford - Clarity Clinic',
    images: [
      {
        url: '/images/ba/laser-skin-rejeuvenation.jpeg',
        width: 1200,
        height: 630,
        alt: 'Alma Harmony Laser Skin Rejuvenation Results - Before and After at Clarity Clinic Bedford',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
    description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic. Multi-technology platform for comprehensive skin treatments.',
    images: ['/images/ba/laser-skin-rejeuvenation.jpeg'],
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
      name: 'Clarity Clinic - Alma Harmony Bedford',
      image: 'https://www.laserbedford.co.uk/images/ba/laser-skin-rejeuvenation.jpeg',
      logo: 'https://www.laserbedford.co.uk/clarity-clinic-logo.png',
      description: 'CQC registered nurse-led aesthetic clinic in Bedford specialising in Alma Harmony skin resurfacing treatments. Award-winning technology for skin tightening, rejuvenation, pigmentation, acne scarring and vascular concerns. All treatments performed by Claire Emmerson, RN.',
      url: 'https://www.laserbedford.co.uk',
      telephone: '+447414154007',
      email: 'info@claritycosmetics.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Conway Crescent',
        addressLocality: 'Bedford',
        addressRegion: 'Bedfordshire',
        postalCode: 'MK41 7BW',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.1406,
        longitude: -0.4670,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      priceRange: '££',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        'https://www.instagram.com/claritycosmetics.bedford',
        'https://www.facebook.com/claritycosmeticsbedford',
        'https://claritycosmetics.co.uk',
      ],
      founder: {
        '@id': 'https://www.laserbedford.co.uk/#person',
      },
      medicalSpecialty: 'Dermatology',
      isAcceptingNewPatients: true,
    },
    {
      '@type': 'Person',
      '@id': 'https://www.laserbedford.co.uk/#person',
      name: 'Claire Emmerson',
      givenName: 'Claire',
      familyName: 'Emmerson',
      jobTitle: 'Registered Nurse & Advanced Aesthetic Practitioner',
      image: 'https://www.laserbedford.co.uk/images/practitioner.jpg',
      description: 'Registered Nurse and Midwife with over 10 years of experience, specialising in Alma Harmony skin resurfacing and aesthetic treatments. CQC registered Independent Prescriber offering nurse-led skin treatments in Bedford.',
      worksFor: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      alumniOf: 'Nursing & Midwifery Council',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional License',
          name: 'Registered Nurse (RN)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional License',
          name: 'Registered Midwife (RM)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional License',
          name: 'Independent Prescriber',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certification',
          name: 'Advanced Aesthetic Practitioner',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certification',
          name: 'Alma Harmony Specialist Training',
        },
      ],
    },
    {
      '@type': 'MedicalTherapy',
      '@id': 'https://www.laserbedford.co.uk/#therapy',
      name: 'Alma Harmony Skin Treatments',
      alternateName: 'Harmony Bio-Boost',
      description: 'Award-winning multi-technology platform integrating 5 laser technologies for comprehensive skin treatments. ELLE Award Winner 2025 for Best Laser for Fine Lines.',
      medicineSystem: 'Aesthetic Medicine',
      relevantSpecialty: {
        '@type': 'MedicalSpecialty',
        name: 'Dermatology',
      },
      recognizingAuthority: {
        '@type': 'Organization',
        name: 'Care Quality Commission (CQC)',
      },
      study: {
        '@type': 'MedicalStudy',
        description: 'European Product Design Award Winner',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.laserbedford.co.uk/#service',
      serviceType: 'Alma Harmony Skin Treatments',
      provider: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Bedford',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Bedfordshire',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Milton Keynes',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Northampton',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Alma Harmony Treatments',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Tightening & Rejuvenation',
              description: 'Non-invasive skin tightening using Q-Switch and Er:Glass 1540nm laser to stimulate deep collagen production for firmer, more youthful skin.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Resurfacing',
              description: 'Advanced skin resurfacing for fine lines, wrinkles, texture improvement and overall skin rejuvenation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pigmentation & Sun Damage Treatment',
              description: 'Combined IPL and Q-Switch laser technology to reduce age spots, sun damage, freckles and melasma for a more even complexion.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Acne & Acne Scar Treatment',
              description: 'Award-winning Er:Glass 1540nm non-ablative laser targets acne-causing bacteria and stimulates collagen production to improve scarring.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bio-Boost Skin Rejuvenation',
              description: 'ELLE Award-winning multi-laser treatment combining up to 4 technologies for visible improvement in fine lines, texture, and skin quality with zero downtime.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vascular Lesion Treatment',
              description: 'Green diode and Nd:YAG lasers precisely target blood vessels to reduce spider veins, rosacea, broken capillaries and facial redness.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consultation',
              description: 'Full skin assessment and personalised treatment plan with Claire Emmerson, RN. Fee fully redeemable against treatment.',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '25',
              priceCurrency: 'GBP',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.laserbedford.co.uk/#website',
      url: 'https://www.laserbedford.co.uk',
      name: 'Alma Harmony Bedford - Clarity Clinic',
      description: 'Award-winning Alma Harmony skin resurfacing in Bedford. CQC registered, nurse-led clinic.',
      publisher: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      inLanguage: 'en-GB',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.laserbedford.co.uk/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.laserbedford.co.uk/#webpage',
      url: 'https://www.laserbedford.co.uk',
      name: 'Alma Harmony Bedford | Advanced Skin Resurfacing by Registered Nurse Claire Emmerson',
      isPartOf: {
        '@id': 'https://www.laserbedford.co.uk/#website',
      },
      about: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.laserbedford.co.uk/images/ba/laser-skin-rejeuvenation.jpeg',
      },
      datePublished: '2024-01-01',
      dateModified: '2025-12-10',
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
            text: 'Alma Harmony is an award-winning multi-technology platform that integrates five powerful laser technologies in one system: Q-Switch laser, fractional ablative laser, IPL, non-ablative laser, and green diode laser. This allows us to treat a wide range of skin concerns from a single platform, delivering personalised treatments with precision and efficiency.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can Alma Harmony treat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alma Harmony can treat a comprehensive range of skin concerns including: skin tightening and rejuvenation, skin resurfacing and texture improvement, pigmented lesions (age spots, sun damage, melasma), vascular lesions (spider veins, rosacea, broken capillaries), and acne and acne scars.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alma Harmony suitable for all skin types?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! One of the key advantages of Alma Harmony is its ability to safely and effectively treat all skin types (Fitzpatrick I-VI). During your consultation, we will assess your skin and recommend the most suitable technology and settings for your specific needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Harmony Bio-Boost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harmony Bio-Boost is a branded treatment recently named Best Laser for Fine Lines at the ELLE Tweakments Awards 2025. It is a next-generation skin rejuvenation treatment that combines multiple Alma Harmony technologies for optimal results in treating fine lines and overall skin quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does treatment cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Treatment pricing depends on the area being treated, the intensity required, and which laser technologies are combined for your specific concerns. A skin analysis costs £25 and is FREE when you proceed with treatment. During your skin analysis, Claire will assess your concerns and provide a personalised treatment plan with pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the downtime after treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alma Harmony offers flexible downtime depending on the treatment chosen. Many treatments have zero downtime - you can return to normal activities immediately. Some more intensive resurfacing treatments may require 1-5 days of recovery. We will discuss expected downtime during your consultation based on your chosen treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many sessions will I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The number of sessions varies depending on the treatment and your individual goals. Some conditions may see results after a single session, while others may require a course of 3-6 treatments spaced 4-6 weeks apart. We offer package pricing for courses of treatment.',
          },
        },
      ],
    },
    {
      '@type': 'Product',
      name: 'Alma Harmony Treatments',
      description: 'Award-winning Alma Harmony skin resurfacing treatments in Bedford. European Product Design Award Winner. ELLE Best Laser for Fine Lines 2025.',
      image: 'https://www.laserbedford.co.uk/images/ba/laser-skin-rejeuvenation.jpeg',
      brand: {
        '@type': 'Brand',
        name: 'Alma Lasers',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '25',
        availability: 'https://schema.org/InStock',
        name: 'Skin Analysis',
        description: 'Professional skin assessment with Claire Emmerson, RN - FREE when you proceed with treatment',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      award: [
        'European Product Design Award',
        'ELLE Best Laser for Fine Lines 2025',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.laserbedford.co.uk/#localbusiness',
      name: 'Clarity Clinic Bedford',
      image: 'https://www.laserbedford.co.uk/images/ba/laser-skin-rejeuvenation.jpeg',
      telephone: '+447414154007',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Conway Crescent',
        addressLocality: 'Bedford',
        addressRegion: 'Bedfordshire',
        postalCode: 'MK41 7BW',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.1406,
        longitude: -0.4670,
      },
      url: 'https://www.laserbedford.co.uk',
      priceRange: '££',
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
