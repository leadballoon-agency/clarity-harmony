'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Alma Harmony?',
    answer: 'Alma Harmony is an award-winning multi-technology platform that integrates five powerful laser technologies in one system: Q-Switch laser, fractional ablative laser, IPL, non-ablative laser, and green diode laser. This allows us to treat a wide range of skin concerns from a single platform, delivering personalized treatments with precision and efficiency.'
  },
  {
    question: 'What can Alma Harmony treat?',
    answer: 'Alma Harmony can treat a comprehensive range of skin concerns including: skin resurfacing and texture improvement, pigmented lesions (age spots, sun damage, melasma), vascular lesions (spider veins, rosacea), acne and acne scars, hair removal, tattoo removal, skin rejuvenation and tightening. The versatile platform adapts to nearly any indication or skin type.'
  },
  {
    question: 'Is Alma Harmony suitable for my skin type?',
    answer: 'Yes! One of the key advantages of Alma Harmony is its ability to safely and effectively treat all skin types (Fitzpatrick I-VI). During your consultation, we\'ll assess your skin and recommend the most suitable technology and settings for your specific needs.'
  },
  {
    question: 'What is the downtime?',
    answer: 'Alma Harmony offers flexible downtime depending on the treatment chosen. Some treatments like IPL have minimal downtime (24-48 hours of redness), while more intensive resurfacing treatments may require 3-7 days of recovery. We\'ll discuss expected downtime during your consultation based on your chosen treatment.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies depending on the treatment and your individual goals. Some conditions may see results after a single session, while others may require a course of 3-6 treatments spaced 4-6 weeks apart. We\'ll create a personalized treatment plan during your consultation.'
  },
  {
    question: 'Does the treatment hurt?',
    answer: 'Most patients describe the sensation as mild to moderate discomfort, often compared to a rubber band snapping against the skin. Topical numbing cream can be applied before treatment to ensure your comfort. The integrated cooling systems in Alma Harmony also help to minimize discomfort during treatment.'
  },
  {
    question: 'What is Harmony Bio-Boost?',
    answer: 'Harmony Bio-Boost is a branded treatment recently named \'Best Laser for Fine Lines\' at the ELLE Tweakments Awards 2025. It\'s a next-generation skin rejuvenation treatment that combines multiple Alma Harmony technologies for optimal results in treating fine lines and overall skin quality.'
  },
  {
    question: 'How do I prepare for my treatment?',
    answer: 'Preparation varies by treatment but generally includes: avoiding sun exposure for 2-4 weeks before treatment, discontinuing certain skincare products (retinoids, AHAs), arriving with clean skin free of makeup. Detailed pre-treatment instructions will be provided during your consultation.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Frequently Asked Questions</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-primary-50 transition-colors min-h-[64px]"
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl pr-4 sm:pr-5">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center min-h-[48px]"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
