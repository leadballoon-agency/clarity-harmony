'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Am I too old for laser treatment?",
    answer: "No, Erbium-YAG fractional ablative laser is excellent for mature skin. In fact, it's specifically designed to address the concerns most common in women in their 40s, 50s, and 60s - including sun damage, age spots, fine lines, and overall skin texture. Your skin can absolutely respond beautifully to treatment at any age."
  },
  {
    question: "Will I look 'done' or fake?",
    answer: "Absolutely not. Natural results are our priority. The goal is for you to look refreshed, healthy, and like yourself - just the best version. You'll look like you've been on a really good holiday, not like you've 'had work done'. We focus on improving your skin's health and quality, not changing how you look."
  },
  {
    question: "How much downtime?",
    answer: "Typically 5-7 days of redness and peeling, similar to a sunburn. Most women plan around this by scheduling treatment before a weekend or a quiet week. After the initial healing, your skin continues to improve over the following weeks as new, healthier skin emerges."
  },
  {
    question: "How many sessions?",
    answer: "Most women see significant results in 1-3 sessions, spaced 4-6 weeks apart. During your consultation, we'll assess your skin and create a personalised plan based on your specific concerns and goals. Some women achieve their desired results in just one session."
  }
]

interface SkinResetFAQProps {
  onBookingClick: () => void
}

export default function SkinResetFAQ({ onBookingClick }: SkinResetFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-3xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl pr-4">{faq.question}</span>
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

      </div>
    </section>
  )
}
