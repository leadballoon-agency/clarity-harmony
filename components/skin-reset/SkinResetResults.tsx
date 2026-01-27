'use client'

import { useState } from 'react'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

const results = [
  {
    title: 'Pigmentation',
    beforeImage: '/images/ba/ba-5-before.jpg',
    afterImage: '/images/ba/ba-5-after.jpg',
  },
  {
    title: 'Texture',
    beforeImage: '/images/ba/ba-6-before.jpg',
    afterImage: '/images/ba/ba-6-after.jpg',
  },
  {
    title: 'Rejuvenation',
    beforeImage: '/images/ba/ba-3-before.jpg',
    afterImage: '/images/ba/ba-3-after.jpg',
  },
]

export default function SkinResetResults() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Real Results
          </h2>
        </div>

        {/* Featured hero image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <img
            src="/images/ba/laser-skin-rejeuvenation.jpeg"
            alt="Laser skin rejuvenation before and after results"
            className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover"
          />
        </div>

        {/* Interactive sliders */}
        <p className="text-sm text-neutral-600 text-center mb-4">
          Drag to compare before and after
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <BeforeAfterSlider
            beforeImage={results[activeIndex].beforeImage}
            afterImage={results[activeIndex].afterImage}
            beforeAlt={`${results[activeIndex].title} - Before`}
            afterAlt={`${results[activeIndex].title} - After`}
            className="w-full aspect-square"
          />
        </div>

        {/* Treatment selector */}
        <div className="flex justify-center gap-2 mt-4">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeIndex === index
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {result.title}
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-neutral-500 text-center mt-4 italic">
          Results courtesy of Alma Lasers. Individual results may vary.
        </p>
      </div>
    </section>
  )
}
