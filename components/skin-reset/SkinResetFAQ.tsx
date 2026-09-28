'use client'

import { useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { tidy } from '@/lib/typography'

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
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-white border-t border-sand-200">
      <div className="max-w-3xl mx-auto section-padding">
        <div className="text-center mb-10 sm:mb-12">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2-display mt-4">
            Common <em className="italic">questions</em>
          </h2>
        </div>

        <div className="border-t border-sand-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="border-b border-sand-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 text-left flex justify-between items-start gap-6 group"
                >
                  <span className="font-display text-[18px] sm:text-[20px] leading-snug text-ink text-balance group-hover:text-primary-700 transition-colors">
                    {tidy(faq.question)}
                  </span>
                  <Plus
                    className={`w-5 h-5 mt-1 shrink-0 text-harmony-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    strokeWidth={1.25}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-8 text-[15px] sm:text-base text-harmony-600 leading-relaxed max-w-[65ch]">
                      {tidy(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-harmony-600 mb-5 max-w-md mx-auto">Have more questions? Book a consultation to discuss your specific&nbsp;concerns.</p>
          {onBookingClick && (
            <button onClick={onBookingClick} className="btn-primary">
              Book Your Consultation
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
