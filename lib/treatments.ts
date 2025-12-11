// Centralized treatment data for all treatment pages and components

export interface TreatmentFAQ {
  question: string
  answer: string
}

export interface BeforeAfterImage {
  before: string
  after: string
  caption: string
}

export interface Treatment {
  id: string
  slug: string
  name: string
  shortName: string
  subtitle: string
  technology: string
  icon: string
  heroDescription: string
  description: string
  concerns: string[]
  benefits: string[]
  treatmentInfo: {
    sessions: string
    downtime: string
    skinTypes: string
    duration: string
  }
  beforeAfter: BeforeAfterImage
  faq: TreatmentFAQ[]
  metaTitle: string
  metaDescription: string
}

export const treatments: Treatment[] = [
  {
    id: 'skin-tightening',
    slug: 'skin-tightening',
    name: 'Skin Tightening & Rejuvenation',
    shortName: 'Skin Tightening',
    subtitle: 'Non-invasive lifting and firming',
    technology: 'ClearLift Pro + Non-Ablative Laser',
    icon: '💪',
    heroDescription: 'Achieve firmer, more youthful skin without surgery or downtime.',
    description: 'Non-invasive skin tightening using Q-Switch and Er:Glass 1540nm laser technology to stimulate deep collagen production for firmer, more youthful skin with no downtime. The treatment works by delivering controlled energy deep into the dermis, triggering your body\'s natural healing response and boosting collagen synthesis.',
    concerns: ['Skin laxity', 'Loss of firmness', 'Collagen loss', 'Face & body contouring', 'Jowls & sagging'],
    benefits: ['No downtime - return to activities immediately', 'Stimulates natural collagen production', 'Suitable for all skin types I-VI', 'Progressive improvement over time'],
    treatmentInfo: {
      sessions: '3-6 sessions recommended',
      downtime: 'None - back to work same day',
      skinTypes: 'All skin types (I-VI)',
      duration: '30-60 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-3-before.jpg',
      after: '/images/ba/ba-3-after.jpg',
      caption: 'Skin rejuvenation results after course of treatments'
    },
    faq: [
      {
        question: 'How does skin tightening work?',
        answer: 'The ClearLift Pro Q-Switch laser delivers energy deep into the skin without damaging the surface. This stimulates collagen production in the dermis, resulting in gradual skin tightening and improved elasticity over the following weeks.'
      },
      {
        question: 'When will I see results?',
        answer: 'Some clients notice immediate improvement in skin texture. However, the full tightening effect develops over 2-3 months as new collagen forms. Results continue to improve with subsequent sessions.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'No. Skin tightening with ClearLift Pro is completely non-ablative, meaning there\'s no damage to the skin surface. You can return to work and normal activities immediately after treatment.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients benefit from a course of 3-6 sessions, spaced 2-4 weeks apart. Your treatment plan will be tailored to your specific concerns during your skin analysis consultation.'
      }
    ],
    metaTitle: 'Skin Tightening Bedford | ClearLift Pro | Clarity Cosmetics',
    metaDescription: 'Non-invasive skin tightening with Alma Harmony ClearLift Pro in Bedford. No downtime, all skin types. Book your skin analysis with Claire Emmerson, RN.'
  },
  {
    id: 'skin-resurfacing',
    slug: 'skin-resurfacing',
    name: 'Skin Resurfacing',
    shortName: 'Skin Resurfacing',
    subtitle: 'Advanced texture refinement',
    technology: 'SupErb Ablative + ClearSkin Pro',
    icon: '✨',
    heroDescription: 'Transform your skin texture with advanced laser resurfacing technology.',
    description: 'Comprehensive skin resurfacing combining ablative Er:YAG (SupErb) and non-ablative laser technology for maximum improvement in texture, tone, fine lines and overall skin quality. This multi-technology approach allows us to tailor the intensity to your specific needs and tolerance for downtime.',
    concerns: ['Fine lines & wrinkles', 'Uneven texture', 'Large pores', 'Skin rejuvenation', 'Sun damage', 'Dull skin'],
    benefits: ['Dramatic texture improvement', 'Reduces fine lines and wrinkles', 'Suitable for all skin types I-VI', 'Customizable intensity'],
    treatmentInfo: {
      sessions: '3-6 sessions recommended',
      downtime: '2-7 days depending on intensity',
      skinTypes: 'All skin types (I-VI)',
      duration: '30-60 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-6-before.jpg',
      after: '/images/ba/ba-6-after.jpg',
      caption: 'Texture and tone improvement'
    },
    faq: [
      {
        question: 'What\'s the difference between ablative and non-ablative resurfacing?',
        answer: 'Ablative treatments (SupErb) remove thin layers of skin for more dramatic results but require downtime. Non-ablative treatments work beneath the surface with no downtime. We can combine both for optimal results tailored to your goals.'
      },
      {
        question: 'How long is the recovery?',
        answer: 'Recovery depends on the intensity of your treatment. Light treatments may have 1-2 days of redness, while deeper resurfacing may require 5-7 days for the skin to fully heal. We\'ll discuss what to expect during your consultation.'
      },
      {
        question: 'What results can I expect?',
        answer: 'Skin resurfacing can significantly improve texture, reduce fine lines, minimize pores, and create a more even, radiant complexion. Results continue to improve over 2-3 months as new collagen forms.'
      },
      {
        question: 'Is skin resurfacing suitable for my skin type?',
        answer: 'Yes, Alma Harmony technology is safe and effective for all skin types (I-VI). Your treatment parameters will be customized to your specific skin type and concerns.'
      }
    ],
    metaTitle: 'Skin Resurfacing Bedford | Laser Treatment | Clarity Cosmetics',
    metaDescription: 'Advanced laser skin resurfacing in Bedford with Alma Harmony. Improve texture, fine lines & wrinkles. Book your skin analysis with Claire Emmerson, RN.'
  },
  {
    id: 'pigmentation',
    slug: 'pigmentation',
    name: 'Pigmentation & Sun Damage',
    shortName: 'Pigmentation',
    subtitle: 'Even skin tone restoration',
    technology: 'IPL + Q-Switch',
    icon: '🎯',
    heroDescription: 'Restore an even, radiant complexion by targeting unwanted pigmentation.',
    description: 'Combined IPL and Q-Switch laser technology effectively reduces age spots, sun damage, freckles and melasma for a more even complexion. Our multi-wavelength approach allows us to target different types of pigmentation at various depths, with specialized options for darker skin tones.',
    concerns: ['Age spots', 'Sun damage', 'Melasma', 'Freckles', 'Uneven skin tone', 'Hyperpigmentation'],
    benefits: ['Targets multiple pigmentation types', 'Safe for darker skin tones (Iris Dye-SR)', 'Suitable for all skin types I-VI', 'Gradual, natural-looking results'],
    treatmentInfo: {
      sessions: '3-6 sessions recommended',
      downtime: 'Minimal - slight darkening then flaking',
      skinTypes: 'All skin types (I-VI)',
      duration: '20-45 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-5-before.jpg',
      after: '/images/ba/ba-5-after.jpg',
      caption: 'Pigmentation reduction results'
    },
    faq: [
      {
        question: 'How does pigmentation treatment work?',
        answer: 'The laser energy is absorbed by melanin (pigment) in the skin, causing it to break down. Your body then naturally eliminates these pigment particles over the following days and weeks, revealing clearer, more even-toned skin.'
      },
      {
        question: 'Will the pigmentation come back?',
        answer: 'Treated pigmentation is permanently removed. However, new pigmentation can develop with continued sun exposure. Sun protection is essential to maintain results.'
      },
      {
        question: 'Is it safe for darker skin tones?',
        answer: 'Yes. We use the Iris Dye-SR IPL system specifically designed for darker skin tones (Type III-VI), which provides effective treatment with enhanced safety parameters.'
      },
      {
        question: 'What happens after treatment?',
        answer: 'Treated areas typically darken slightly before flaking off over 7-14 days, revealing clearer skin beneath. This is a normal part of the healing process.'
      }
    ],
    metaTitle: 'Pigmentation Treatment Bedford | IPL & Laser | Clarity Cosmetics',
    metaDescription: 'Remove age spots, sun damage & pigmentation in Bedford with Alma Harmony IPL & Q-Switch laser. Safe for all skin types. Book your skin analysis today.'
  },
  {
    id: 'acne',
    slug: 'acne',
    name: 'Acne & Acne Scars',
    shortName: 'Acne Treatment',
    subtitle: 'Clear skin, reduced scarring',
    technology: 'ClearSkin Pro (Er:Glass 1540nm)',
    icon: '🌟',
    heroDescription: 'Target active acne and improve scarring with award-winning laser technology.',
    description: 'Award-winning Er:Glass 1540nm non-ablative laser targets acne-causing bacteria and stimulates collagen production to improve scarring and skin texture. ClearSkin Pro provides a dual-action approach: treating active breakouts while simultaneously improving the appearance of existing acne scars.',
    concerns: ['Active acne', 'Acne scars', 'Post-acne marks', 'Oily skin', 'Enlarged pores', 'Skin texture'],
    benefits: ['Treats active acne and scars simultaneously', 'Reduces acne-causing bacteria', 'Suitable for all skin types I-VI', 'No downtime'],
    treatmentInfo: {
      sessions: '4-8 sessions recommended',
      downtime: 'None - minimal redness',
      skinTypes: 'All skin types (I-VI)',
      duration: '20-30 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-2-before.jpg',
      after: '/images/ba/ba-2-after.jpg',
      caption: 'Acne and scarring improvement'
    },
    faq: [
      {
        question: 'How does ClearSkin Pro treat acne?',
        answer: 'ClearSkin Pro works in two ways: the laser energy destroys acne-causing bacteria (P. acnes), while also stimulating collagen production to improve skin texture and reduce scarring.'
      },
      {
        question: 'Can it treat both active acne and scars?',
        answer: 'Yes. This is one of the key benefits of ClearSkin Pro - it addresses both active breakouts and existing acne scars in the same treatment session.'
      },
      {
        question: 'How soon will I see results?',
        answer: 'Many clients notice a reduction in active breakouts within 1-2 weeks. Scar improvement is more gradual, with optimal results visible after completing a course of treatments.'
      },
      {
        question: 'Is it suitable for all skin types?',
        answer: 'Yes, ClearSkin Pro is safe and effective for all skin types (I-VI), including darker skin tones that may be at risk of post-inflammatory hyperpigmentation with other treatments.'
      }
    ],
    metaTitle: 'Acne Treatment Bedford | ClearSkin Pro Laser | Clarity Cosmetics',
    metaDescription: 'Treat active acne and acne scars in Bedford with Alma Harmony ClearSkin Pro. Safe for all skin types, no downtime. Book your skin analysis today.'
  },
  {
    id: 'vascular',
    slug: 'vascular',
    name: 'Vascular Concerns',
    shortName: 'Vascular Treatment',
    subtitle: 'Reduce redness and visible veins',
    technology: 'VascuPen + ClearVas',
    icon: '💫',
    heroDescription: 'Target spider veins, rosacea and facial redness with precision laser technology.',
    description: 'Green diode (VascuPen) and Nd:YAG (ClearVas) lasers precisely target blood vessels to reduce spider veins, rosacea, broken capillaries and facial redness. The combination of wavelengths allows us to treat vessels at different depths and sizes for comprehensive vascular clearance.',
    concerns: ['Spider veins', 'Rosacea', 'Broken capillaries', 'Facial redness', 'Thread veins', 'Vascular lesions'],
    benefits: ['Precision targeting of vessels', 'Minimal discomfort', 'Suitable for all skin types I-VI', 'Long-lasting results'],
    treatmentInfo: {
      sessions: '1-3 sessions recommended',
      downtime: 'Minimal - slight bruising possible',
      skinTypes: 'All skin types (I-VI)',
      duration: '15-45 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-4-before.jpg',
      after: '/images/ba/ba-4-after.jpg',
      caption: 'Skin clarity improvement'
    },
    faq: [
      {
        question: 'How does vascular laser treatment work?',
        answer: 'The laser light is absorbed by the blood (hemoglobin) within the vessel, causing it to coagulate and collapse. The body then naturally absorbs the treated vessel over the following weeks.'
      },
      {
        question: 'Will my spider veins come back?',
        answer: 'Treated vessels are permanently destroyed and won\'t return. However, new vessels may develop over time, particularly with continued sun exposure or other contributing factors.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'Most clients describe a mild snapping sensation during treatment. The VascuPen green diode laser is particularly comfortable, and topical numbing can be applied if needed.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'Many spider veins and small vessels clear in 1-2 treatments. Rosacea and more extensive redness may require a course of 3+ sessions for optimal results.'
      }
    ],
    metaTitle: 'Spider Vein & Rosacea Treatment Bedford | Clarity Cosmetics',
    metaDescription: 'Remove spider veins, rosacea & facial redness in Bedford with Alma Harmony VascuPen & ClearVas laser. Book your skin analysis with Claire Emmerson, RN.'
  },
  {
    id: 'bio-boost',
    slug: 'bio-boost',
    name: 'Bio-Boost Skin Rejuvenation',
    shortName: 'Bio-Boost',
    subtitle: 'ELLE Award-winning multi-laser treatment',
    technology: 'Multi-laser combination',
    icon: '🏆',
    heroDescription: 'Experience the award-winning Bio-Boost treatment that combines multiple laser technologies in one session.',
    description: 'ELLE Award-winning Bio-Boost treatment combines up to 4 different laser technologies in a single session for visible improvement in fine lines, texture, and overall skin quality with no downtime. This unique approach harnesses the synergy of Q-Switch, non-ablative, and other modalities to deliver comprehensive rejuvenation.',
    concerns: ['Fine lines', 'Skin texture', 'Dull complexion', 'Early signs of aging', 'Skin quality', 'Uneven tone'],
    benefits: ['ELLE Best Laser for Fine Lines 2025', 'Combines up to 4 laser technologies', 'Suitable for all skin types I-VI', 'Zero downtime'],
    treatmentInfo: {
      sessions: '3-6 sessions recommended',
      downtime: 'None - walk in, walk out',
      skinTypes: 'All skin types (I-VI)',
      duration: '45-60 minutes'
    },
    beforeAfter: {
      before: '/images/ba/ba-3-before.jpg',
      after: '/images/ba/ba-3-after.jpg',
      caption: 'Bio-Boost skin rejuvenation results'
    },
    faq: [
      {
        question: 'What makes Bio-Boost different from other treatments?',
        answer: 'Bio-Boost is unique because it combines multiple laser wavelengths and technologies in a single session. This multi-targeted approach addresses skin concerns at different depths and through different mechanisms, delivering more comprehensive results than single-technology treatments.'
      },
      {
        question: 'Why did Bio-Boost win an ELLE award?',
        answer: 'Bio-Boost won the ELLE Tweakments Award 2025 for Best Laser for Fine Lines because of its ability to deliver visible improvement in skin quality with absolutely no downtime - a combination that\'s rare in aesthetic treatments.'
      },
      {
        question: 'Is there really no downtime?',
        answer: 'Correct. Bio-Boost uses non-ablative technology that works beneath the skin surface without damaging it. You can return to work and normal activities immediately after treatment with no visible signs you\'ve had anything done.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients see best results with a course of 4-6 sessions, spaced 2-4 weeks apart. However, many notice visible improvement after just 1-2 treatments. Your personalized plan will be discussed during your skin analysis.'
      }
    ],
    metaTitle: 'Bio-Boost Treatment Bedford | ELLE Award Winner | Clarity Cosmetics',
    metaDescription: 'Experience the ELLE Award-winning Bio-Boost multi-laser treatment in Bedford. Visible results, zero downtime. Book your skin analysis with Claire Emmerson, RN.'
  }
]

// Helper function to get treatment by slug
export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find(t => t.slug === slug)
}

// Helper function to get all treatment slugs (for static generation)
export function getAllTreatmentSlugs(): string[] {
  return treatments.map(t => t.slug)
}
