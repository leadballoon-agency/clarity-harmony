import { Metadata } from 'next'
import Script from 'next/script'
import SkinResetPageWrapper from '@/components/skin-reset/SkinResetPageWrapper'

export const metadata: Metadata = {
  title: 'Skin Reset | Alma Harmony SupErb Fractional Laser for Women 40s, 50s & 60s | Clarity Clinic Bedford',
  description: 'Alma Harmony SupErb fractional laser resurfacing designed for women ready to reclaim their skin. Smooth texture, brighter tone, reduced pigmentation, softened lines. CQC registered, nurse-led. Bedford.',
  keywords: [
    'skin reset',
    'Alma Harmony SupErb Bedford',
    'SupErb fractional laser',
    'Erbium YAG laser Bedford',
    'laser skin resurfacing Bedford',
    'women 40s 50s 60s skin treatment',
    'pigmentation treatment Bedford',
    'sun damage treatment',
    'skin rejuvenation mature skin',
    'anti ageing laser Bedford',
    'Claire Emmerson',
    'Clarity Clinic Bedford',
    'CQC registered laser clinic',
    'fractional laser resurfacing',
  ],
  openGraph: {
    title: 'This Is Your Moment | Skin Reset',
    description: "You've taken care of everyone else. Now it's your turn. Alma Harmony SupErb fractional laser resurfacing for women in their 40s, 50s & 60s ready to reclaim their skin.",
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.laserbedford.co.uk/skin-reset',
    siteName: 'Clarity Clinic Bedford',
    images: [
      {
        url: 'https://www.laserbedford.co.uk/images/practitioner.jpg',
        width: 1200,
        height: 630,
        alt: 'Claire Emmerson, RN - Skin Reset Specialist at Clarity Clinic Bedford',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin Reset | Your Moment',
    description: "You've taken care of everyone else. Now it's your turn. Alma Harmony SupErb fractional laser for mature skin.",
    images: ['https://www.laserbedford.co.uk/images/practitioner.jpg'],
  },
  alternates: {
    canonical: 'https://www.laserbedford.co.uk/skin-reset',
  },
}

const skinResetSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.laserbedford.co.uk/skin-reset/#webpage',
      url: 'https://www.laserbedford.co.uk/skin-reset',
      name: 'Skin Reset | Alma Harmony SupErb Fractional Laser Treatment for Women',
      description: 'Alma Harmony SupErb Erbium YAG fractional laser treatment designed for women in their 40s, 50s & 60s. Smooth texture, brighter tone, reduced pigmentation, softened lines.',
      isPartOf: {
        '@id': 'https://www.laserbedford.co.uk/#website',
      },
      about: {
        '@id': 'https://www.laserbedford.co.uk/skin-reset/#treatment',
      },
      mainEntity: {
        '@id': 'https://www.laserbedford.co.uk/skin-reset/#treatment',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.hero-description'],
      },
      datePublished: '2025-01-27',
      dateModified: '2025-01-27',
      inLanguage: 'en-GB',
    },
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://www.laserbedford.co.uk/skin-reset/#treatment',
      name: 'Skin Reset - Alma Harmony SupErb Fractional Laser',
      alternateName: 'SupErb Erbium YAG Fractional Skin Resurfacing',
      description: 'Alma Harmony SupErb Erbium YAG fractional laser treatment specifically designed for women in their 40s, 50s, and 60s. Addresses texture, tone, pigmentation, sun damage, and fine lines for skin that looks healthy - not done.',
      procedureType: 'Laser Skin Resurfacing',
      bodyLocation: 'Face, Eyes, Neck',
      howPerformed: 'The Alma Harmony SupErb Erbium YAG fractional laser creates thousands of microscopic treatment zones in the skin, triggering the natural healing response to produce new collagen and healthier skin cells. Treatment is performed by a registered nurse in a CQC-registered clinic.',
      preparation: 'Professional skin analysis consultation with Claire Emmerson, RN using diagnostic imaging equipment to assess skin concerns below the surface and create a personalised treatment plan.',
      followup: '5-7 days of redness and peeling, similar to sunburn. Skin continues improving over following weeks.',
      status: 'Available',
      recognizingAuthority: {
        '@type': 'Organization',
        name: 'Care Quality Commission (CQC)',
      },
      relevantSpecialty: {
        '@type': 'MedicalSpecialty',
        name: 'Dermatology',
      },
      suitableForDiet: 'Fitzpatrick skin types 1-5',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.laserbedford.co.uk/skin-reset/#service',
      name: 'Skin Reset Treatment',
      serviceType: 'Alma Harmony SupErb Fractional Laser',
      description: 'Comprehensive skin rejuvenation for mature skin addressing texture, tone, pigmentation, and fine lines.',
      provider: {
        '@type': 'MedicalBusiness',
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
        name: 'Clarity Clinic Bedford',
        telephone: '+447414154007',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Conway Crescent',
          addressLocality: 'Bedford',
          addressRegion: 'Bedfordshire',
          postalCode: 'MK41 7BW',
          addressCountry: 'GB',
        },
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 52.1406,
          longitude: -0.4670,
        },
        geoRadius: '50000',
      },
      audience: {
        '@type': 'PeopleAudience',
        audienceType: 'Women aged 40-70',
        suggestedMinAge: 40,
        healthCondition: {
          '@type': 'MedicalCondition',
          name: 'Skin ageing, sun damage, pigmentation, fine lines',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Skin Reset Treatments',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Reset Consultation',
              description: 'Professional skin assessment with Claire Emmerson, RN. Fully redeemable against treatment.',
            },
            price: '25',
            priceCurrency: 'GBP',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Reset Treatment Session',
            },
            price: '395',
            priceCurrency: 'GBP',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skin Reset Treatment Course (3 sessions)',
            },
            price: '795',
            priceCurrency: 'GBP',
          },
        ],
      },
      termsOfService: 'Consultation required before treatment. Results vary by individual.',
    },
    {
      '@type': 'Person',
      '@id': 'https://www.laserbedford.co.uk/#person',
      name: 'Claire Emmerson',
      jobTitle: 'Registered Nurse & Advanced Aesthetic Practitioner',
      image: 'https://www.laserbedford.co.uk/images/practitioner.jpg',
      description: 'CQC Registered Independent Prescriber specialising in skin rejuvenation treatments for women. Years of experience in women\'s health and aesthetic medicine.',
      worksFor: {
        '@id': 'https://www.laserbedford.co.uk/#medicalbusiness',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Am I too old for laser treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, fractional laser resurfacing is excellent for mature skin. It\'s specifically designed to address concerns most common in women in their 40s, 50s, and 60s - including sun damage, age spots, fine lines, and overall skin texture. Your skin can respond beautifully to treatment at any age.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between SupErb and CO2 laser?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SupErb uses Erbium YAG technology which creates microscopic treatment channels WITHOUT vaporizing the top layer of skin - unlike CO2 which completely removes the surface layer. This means SupErb offers faster healing (5-7 days vs 2+ weeks for CO2), less discomfort, lower risk of complications like hyperpigmentation or scarring, and suitability for a wider range of skin tones (Fitzpatrick 1-5).',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do before treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To prepare your skin: stop using retinol/vitamin A products 7 days before treatment, avoid injectable treatments (Botox, fillers) for 4 weeks prior, discontinue acid exfoliators 7 days before, and avoid excessive sun exposure in the weeks leading up to treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the aftercare like?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aftercare includes: no makeup on the day of treatment, apply SPF 50 daily (essential), keep skin moisturised as it heals, wait 5-7 days until fully healed before reintroducing active skincare products, and avoid direct sun exposure for 4-6 weeks after treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'When will I see results and how long do they last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You\'ll notice immediate improvement in skin texture and brightness once initial redness settles after 5-7 days. Full collagen remodeling continues for 3-12 months after treatment. Results typically last 2-5 years with good skincare and sun protection. Many women opt for annual maintenance treatments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is SupErb suitable for darker skin tones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes - SupErb is suitable for Fitzpatrick skin types 1-5, which covers a wide range of skin tones from very fair to olive and light brown. This is a significant advantage over CO2 lasers. Claire carefully adjusts the laser settings for each individual\'s skin type.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you treat areas other than the face?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, SupErb is effective for the full face including the delicate eye area (crow\'s feet, under-eye texture), neck, and décolletage. Claire customises the settings for each area to ensure optimal results while respecting the different skin thicknesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I look done or fake after treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely not. Natural results are our priority. The goal is for you to look refreshed, healthy, and like yourself - just the best version. You\'ll look like you\'ve been on a really good holiday, not like you\'ve had work done. We focus on improving your skin\'s health and quality, not changing how you look.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much downtime is there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically 5-7 days of redness and peeling, similar to a sunburn. Most women plan around this by scheduling treatment before a weekend or a quiet week. After the initial healing, your skin continues to improve over the following weeks as new, healthier skin emerges.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many sessions will I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most women see significant results in 1-3 sessions, spaced 4-6 weeks apart. During your consultation, we\'ll assess your skin and create a personalised plan based on your specific concerns and goals. Some women achieve their desired results in just one session.',
          },
        },
      ],
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
          name: 'Skin Reset',
          item: 'https://www.laserbedford.co.uk/skin-reset',
        },
      ],
    },
    {
      '@type': 'VideoObject',
      name: 'Skin Reset - This Is Your Moment',
      description: 'Alma Harmony SupErb fractional laser for women in their 40s, 50s & 60s ready to reclaim their skin.',
      thumbnailUrl: 'https://www.laserbedford.co.uk/images/practitioner.jpg',
      uploadDate: '2025-01-27',
      contentUrl: 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914aa4d506d04ae5aa1d8.mp4',
      embedUrl: 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914aa4d506d04ae5aa1d8.mp4',
      duration: 'PT1M5S',
    },
    {
      '@type': 'VideoObject',
      name: 'Professional Skin Analysis Machine',
      description: 'Advanced diagnostic skin analysis imaging at Clarity Clinic Bedford. See below the surface of your skin to identify hidden concerns and create a personalised treatment plan.',
      thumbnailUrl: 'https://www.laserbedford.co.uk/images/practitioner.jpg',
      uploadDate: '2025-01-28',
      contentUrl: 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697a2df7a1d79e527db52eed.mp4',
      embedUrl: 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697a2df7a1d79e527db52eed.mp4',
    },
  ],
}

export default function SkinResetPage() {
  return (
    <>
      <Script
        id="skin-reset-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skinResetSchema) }}
      />
      <SkinResetPageWrapper />
    </>
  )
}
