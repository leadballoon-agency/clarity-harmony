'use client'

import { useState } from 'react'

interface SkinResetFAQProps {
  onBookingClick?: () => void
}

const faqs = [
  {
    question: "Am I too old for laser treatment?",
    answer: "No, CO2 fractional laser is excellent for mature skin. In fact, it's specifically designed to address the concerns most common in women in their 40s, 50s, and 60s - including sun damage, age spots, fine lines, and overall skin texture. Your skin can absolutely respond beautifully to treatment at any age."
  },
  {
    question: "What's the difference between fractional and ablative?",
    answer: "Fractional CO2 treats a fraction of the skin, leaving tiny bridges of healthy tissue for faster healing - this is our most popular approach. Full ablative CO2 treats 100% of the surface for more dramatic results but requires longer recovery. Claire offers both and will recommend the right approach for your goals."
  },
  {
    question: "Will I look 'done' or fake?",
    answer: "Absolutely not. Natural results are our priority. The goal is for you to look refreshed, healthy, and like yourself - just the best version. You'll look like you've been on a really good holiday, not like you've 'had work done'. We focus on improving your skin's health and quality, not changing how you look."
  },
  {
    question: "How much downtime?",
    answer: "For fractional CO2, typically 5-7 days of redness and peeling, similar to a sunburn. Most women plan around this by scheduling treatment before a weekend or a quiet week. After the initial healing, your skin continues to improve over the following weeks as new, healthier skin emerges."
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
