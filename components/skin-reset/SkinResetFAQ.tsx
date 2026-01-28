'use client'

import { useState } from 'react'

interface SkinResetFAQProps {
  onBookingClick?: () => void
}

const faqs = [
  {
    question: "Am I too old for laser treatment?",
    answer: "No, fractional laser resurfacing is excellent for mature skin. In fact, it's specifically designed to address the concerns most common in women in their 40s, 50s, and 60s - including sun damage, age spots, fine lines, and overall skin texture. Your skin can absolutely respond beautifully to treatment at any age."
  },
  {
    question: "What's the difference between SupErb and CO2 laser?",
    answer: "SupErb uses Erbium YAG technology which creates microscopic treatment channels WITHOUT vaporizing the top layer of skin - unlike CO2 which completely removes the surface layer. This means SupErb offers faster healing (5-7 days vs 2+ weeks for CO2), less discomfort during and after treatment, lower risk of complications like hyperpigmentation or scarring, and suitability for a wider range of skin tones. You get impressive results with significantly less downtime and risk."
  },
  {
    question: "What's the difference between fractional and ablative?",
    answer: "Fractional treatment targets a fraction of the skin using the Erbium YAG laser, leaving tiny bridges of healthy tissue for faster healing - this is our most popular approach. Full ablative treats 100% of the surface for more dramatic results but requires longer recovery. Claire offers both options with the Alma Harmony SupErb and will recommend the right approach for your goals."
  },
  {
    question: "What should I do before treatment?",
    answer: "To prepare your skin for the best results: stop using retinol/vitamin A products 7 days before treatment, avoid any injectable treatments (Botox, fillers) for 4 weeks prior, discontinue acid exfoliators (glycolic, salicylic, lactic acid) 7 days before, and avoid excessive sun exposure in the weeks leading up to treatment. Claire will discuss all preparation requirements during your consultation."
  },
  {
    question: "What's the aftercare like?",
    answer: "Aftercare is straightforward but important: no makeup on the day of treatment, apply SPF 50 daily (this is essential and non-negotiable), keep skin moisturised as it heals, and wait 5-7 days until fully healed before reintroducing active skincare products. Avoid direct sun exposure for 4-6 weeks after treatment. Claire provides full written aftercare instructions and is available for any questions during your healing."
  },
  {
    question: "When will I see results and how long do they last?",
    answer: "You'll notice immediate improvement in skin texture and brightness once initial redness settles after 5-7 days. However, the real magic happens over time - full collagen remodeling continues for 3-12 months after treatment. Results typically last 2-5 years with good skincare and sun protection. Many women opt for annual maintenance treatments to keep their skin looking its best."
  },
  {
    question: "Will I look 'done' or fake?",
    answer: "Absolutely not. Natural results are our priority. The goal is for you to look refreshed, healthy, and like yourself - just the best version. You'll look like you've been on a really good holiday, not like you've 'had work done'. We focus on improving your skin's health and quality, not changing how you look."
  },
  {
    question: "Is SupErb suitable for darker skin tones?",
    answer: "Yes - SupErb is suitable for Fitzpatrick skin types 1-5, which covers a wide range of skin tones from very fair to olive and light brown. This is a significant advantage over CO2 lasers which carry higher risks for darker skin. Claire carefully adjusts the laser settings for each individual's skin type, and every treatment begins with a thorough skin analysis to ensure the safest and most effective approach for you."
  },
  {
    question: "Can you treat areas other than the face?",
    answer: "Yes, SupErb is effective for the full face including the delicate eye area (crow's feet, under-eye texture), neck, and décolletage. These are popular treatment areas as they often show signs of sun damage and ageing. Claire customises the settings for each area to ensure optimal results while respecting the different skin thicknesses."
  },
  {
    question: "How much downtime?",
    answer: "For fractional laser resurfacing, typically 5-7 days of redness and peeling, similar to a sunburn. Most women plan around this by scheduling treatment before a weekend or a quiet week. After the initial healing, your skin continues to improve over the following weeks as new, healthier skin emerges."
  },
  {
    question: "How many sessions will I need?",
    answer: "Most women see significant results in 1-3 sessions, spaced 4-6 weeks apart. During your consultation, we'll assess your skin and create a personalised plan based on your specific concerns and goals. Some women achieve their desired results in just one session."
  }
]

export default function SkinResetFAQ({ onBookingClick }: SkinResetFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-neutral-600 mb-4">Have more questions? Book a consultation to discuss your specific concerns.</p>
          {onBookingClick && (
            <button
              onClick={onBookingClick}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Your Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
