'use client'

import { useState } from 'react'

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

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Browse our gallery of real patient results
          </p>
        </div>

        {/* Results Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium sm:hover:shadow-premium-lg cursor-pointer transition-all duration-300 ${
                result.featured ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              {/* Before/After Labels */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1.5 sm:gap-2">
                <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                  Before
                </span>
                <span className="bg-primary-500/90 backdrop-blur text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                  After
                </span>
              </div>

              {/* Time Badge */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white/90 backdrop-blur rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                <span className="text-[10px] sm:text-xs font-medium text-neutral-700">{result.time}</span>
              </div>

              {/* Image Container */}
              <div className={`relative overflow-hidden ${result.featured ? 'aspect-video' : 'aspect-square'}`}>
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/50 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-600">{result.description}</p>

                <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-neutral-500 italic">
            Results courtesy of Alma Lasers. Individual results may vary. Consultation required to determine suitability.
          </p>
        </div>

        {/* Treatment Room Section */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src="/images/treatment.jpg"
              alt="Clarity Clinic Bedford Treatment Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 sm:from-black/60 via-black/50 sm:via-black/40 to-transparent flex items-center">
              <div className="p-5 sm:p-8 md:p-12 max-w-full sm:max-w-lg">
                <h3 className="text-white text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4">
                  Welcome to Clarity Clinic Bedford
                </h3>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  Step into our modern, welcoming clinic designed for your comfort and relaxation during your laser treatment journey.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-5 sm:px-6 py-3 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: 'RN', label: 'Nurse-Led Care' },
            { number: 'CQC', label: 'Registered' },
            { number: '£395', label: 'Starting From' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={results[selectedImage].image}
                alt={results[selectedImage].title}
                className="w-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full p-1.5 sm:p-2 hover:bg-white transition"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
