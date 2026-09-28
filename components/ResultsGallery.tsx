'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { tidy } from '@/lib/typography'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const results = [
    {
      image: '/images/ba/laser-skin-rejeuvenation.jpeg',
      title: 'Skin Resurfacing',
      description: 'Complete skin rejuvenation, renewal and tightening',
      time: 'Results Vary',
      featured: true,
    },
    {
      image: '/images/ba/Acne Scarring Before and After.jpeg',
      title: 'Acne Scarring',
      description: 'Dramatic improvement in skin texture',
      time: 'Results Vary',
      featured: false,
    },
    {
      image: '/images/ba/baggy-eye-before-after.png',
      title: 'Baggy Eyes',
      description: 'Effective results for men and women',
      time: 'Results Vary',
      featured: false,
    },
    {
      image: '/images/ba/stretch-marks-before-after.jpeg',
      title: 'Stretch Marks',
      description: 'Significant reduction in appearance',
      time: 'Results Vary',
      featured: false,
    },
    {
      image: '/images/ba/pigmentation-before-after.png',
      title: 'Pigmentation',
      description: 'Even skin tone restoration',
      time: 'Results Vary',
      featured: false,
    },
  ]

  const close = useCallback(() => setSelectedImage(null), [])
  const step = useCallback(
    (dir: number) =>
      setSelectedImage((i) => (i === null ? i : (i + dir + results.length) % results.length)),
    [results.length]
  )

  useEffect(() => {
    if (selectedImage === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [selectedImage, close, step])

  return (
    <section id="results" className="py-20 sm:py-24 lg:py-28 bg-ivory">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="eyebrow">Real Results</p>
          <h2 className="h2-display mt-4">
            Transformations that <em className="italic">speak for themselves</em>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-harmony-600 mt-4">
            Browse our gallery of real patient&nbsp;results
          </p>
        </div>

        {/* Results gallery: swipe row on mobile, 2-up on tablet, 3 + 2 centred on desktop.
            Tiles stay at or below ~330px so the supplied composites are never upscaled. */}
        <div className="max-w-[1040px] mx-auto">
          <ul
            className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:flex-wrap sm:justify-center gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-4 pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Before and after results"
          >
            {results.map((result, index) => (
              <li
                key={index}
                className="snap-start shrink-0 basis-[72%] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className="group block w-full text-left"
                  aria-label={`View ${result.title} before and after`}
                >
                  <div className="relative aspect-square rounded-[10px] overflow-hidden bg-sand-50 border border-sand-200 group-hover:border-sand-300 transition-colors">
                    <Image
                      src={encodeURI(result.image)}
                      alt={`${result.title} before and after`}
                      fill
                      sizes="(min-width: 1024px) 330px, (min-width: 640px) 45vw, 72vw"
                      className="object-contain p-2"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/90 text-harmony-600 text-[10px] font-medium uppercase tracking-[0.12em] px-2 py-0.5 rounded">
                      Before / After
                    </span>
                  </div>
                  <p className="mt-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink group-hover:text-primary-700 transition-colors">
                    {result.title}
                  </p>
                  <p className="mt-1 text-sm text-harmony-500 leading-snug">{tidy(result.description)}</p>
                </button>
              </li>
            ))}
          </ul>

          {/* Disclaimer - must remain clearly visible */}
          <p className="mt-6 text-center text-[13px] text-harmony-500 max-w-xl mx-auto">
            Results courtesy of Alma Lasers. Individual results may vary. Consultation required to determine&nbsp;suitability.
          </p>
        </div>

        {/* Treatment Room */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden h-[440px] sm:h-[480px] lg:h-[540px] bg-ink">
          <Image
            src="/images/shoot/DSC09678.jpg"
            alt="The treatment room at Clarity Clinic Bedford with the Alma Harmony laser"
            fill
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-ink/85 via-ink/50 to-ink/0 flex items-end sm:items-center">
            <div className="p-6 sm:p-10 lg:p-14 max-w-md">
              <h3 className="font-display text-white text-[26px] sm:text-[30px] leading-[1.15]">
                Welcome to Clarity Clinic <em className="italic">Bedford</em>
              </h3>
              <p className="mt-4 text-white/85 text-[15px] sm:text-base leading-relaxed">
                Step into our modern, welcoming clinic designed for your comfort and relaxation during your laser treatment&nbsp;journey.
              </p>
              <button onClick={onBookingClick} className="btn-light mt-6">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-sand-200 pt-10">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: 'Midwife', label: '& Nurse-Led Care' },
            { number: 'CQC', label: 'Registered' },
            { number: '£450', label: 'Starting From' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <dt className="font-display text-[28px] sm:text-[32px] leading-none text-ink">{stat.number}</dt>
              <dd className="mt-2 text-xs sm:text-sm text-harmony-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${results[selectedImage].title} before and after`}
          >
            <figure className="relative flex flex-col items-center max-w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={encodeURI(results[selectedImage].image)}
                alt={`${results[selectedImage].title} before and after`}
                className="block max-w-full max-h-[75vh] w-auto h-auto rounded-[10px] bg-white"
              />
              <figcaption className="mt-4 text-center">
                <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {results[selectedImage].title}
                </span>
                <span className="block mt-1 text-xs text-white/65">
                  Results courtesy of Alma Lasers. Individual results may&nbsp;vary.
                </span>
              </figcaption>
            </figure>

            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1) }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous result"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1) }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next result"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
