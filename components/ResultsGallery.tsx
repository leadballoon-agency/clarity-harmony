'use client'

import { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const results = [
    {
      title: 'Bio-Boost Skin Rejuvenation',
      description: 'ELLE Award-winning Bio-Boost treatment for visible improvement in skin tone, texture and firmness',
      treatmentArea: 'Full Face',
      technology: 'Bio-Boost',
      beforeImage: '/images/ba/ba-3-before.jpg',
      afterImage: '/images/ba/ba-3-after.jpg',
      hasRealImage: true
    },
    {
      title: 'Skin Texture & Tone',
      description: 'Comprehensive improvement in overall skin quality, texture and pigmentation irregularities',
      treatmentArea: 'Face & Neck',
      technology: 'Multi-Technology',
      beforeImage: '/images/ba/ba-6-before.jpg',
      afterImage: '/images/ba/ba-6-after.jpg',
      hasRealImage: true
    },
    {
      title: 'Pigmentation & Sun Damage',
      description: 'IPL and laser treatment effectively reduces age spots, sun damage and uneven skin tone',
      treatmentArea: 'Full Face',
      technology: 'IPL / Q-Switch',
      beforeImage: '/images/ba/ba-5-before.jpg',
      afterImage: '/images/ba/ba-5-after.jpg',
      hasRealImage: true
    },
    {
      title: 'Acne & Acne Scars',
      description: 'Dramatic improvement in active acne and scarring using ClearSkin Pro non-ablative laser technology',
      treatmentArea: 'Face',
      technology: 'ClearSkin Pro',
      beforeImage: '/images/ba/ba-2-before.jpg',
      afterImage: '/images/ba/ba-2-after.jpg',
      hasRealImage: true
    },
    {
      title: 'Active Acne Treatment',
      description: 'Effective treatment targeting acne-causing bacteria and inflammation for clearer, healthier skin',
      treatmentArea: 'Face',
      technology: 'Er:Glass 1540nm',
      beforeImage: '/images/ba/ba-4-before.jpg',
      afterImage: '/images/ba/ba-4-after.jpg',
      hasRealImage: true
    },
    {
      title: 'Skin Tightening & Rejuvenation',
      description: 'Non-invasive skin tightening using Q-Switch and Er:Glass laser to stimulate deep collagen production for firmer skin',
      treatmentArea: 'Face',
      technology: 'ClearLift Pro',
      beforeImage: '/images/ba/ba-1-before.jpg',
      afterImage: '/images/ba/ba-1-after.jpg',
      hasRealImage: true
    }
  ]

  return (
    <section id="results" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4 leading-relaxed">
            Drag the slider to reveal before and after results from Alma Harmony treatments
          </p>
        </div>

        {/* Hero Results Image - Full Width */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium-lg group">
            <div className="aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] relative">
              <img
                src="/images/ba/laser-skin-rejeuvenation.jpeg"
                alt="Alma Harmony Laser Skin Rejuvenation - Remarkable before and after results"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary-500 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">Featured Result</span>
                    <span className="bg-white/20 backdrop-blur text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">Laser Skin Rejuvenation</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    Real Results, Real Transformation
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base max-w-2xl">
                    Witness the remarkable improvement in skin texture, tone and overall radiance achieved with Alma Harmony treatments at Clarity Cosmetics Bedford.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium sm:hover:shadow-premium-lg transition-all duration-300"
            >
              {/* Treatment Area Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/70 text-white backdrop-blur rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5">
                <span className="text-xs sm:text-sm font-medium">{result.treatmentArea}</span>
              </div>

              {/* Technology Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-primary-500/90 text-white backdrop-blur rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5">
                <span className="text-xs sm:text-sm font-medium">{result.technology}</span>
              </div>

              {/* Before/After Slider */}
              <div className="relative aspect-square overflow-hidden">
                {result.hasRealImage ? (
                  <BeforeAfterSlider
                    beforeImage={result.beforeImage}
                    afterImage={result.afterImage}
                    beforeAlt={`${result.title} - Before`}
                    afterAlt={`${result.title} - After`}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary-50 to-primary-100">
                    <div className="w-24 h-24 mb-4 rounded-full border-4 border-primary-500 border-dashed flex items-center justify-center opacity-30">
                      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 mb-2">COMING SOON</p>
                      <p className="text-sm text-primary-500">Before & After Results</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{result.description}</p>

                <button
                  onClick={() => setSelectedImage(index)}
                  className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                >
                  <span>View Full Screen</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
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

        {/* Treatment Room */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium bg-gradient-to-r from-primary-600 to-primary-700">
            <div className="p-8 sm:p-12 text-white">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                  Your Comfort is Our Priority
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
                  Experience treatments in our beautiful, bespoke treatment room. Immaculately maintained with state-of-the-art equipment in a calming, professional environment.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 min-h-[48px]"
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
            { number: 'RN', label: 'Nurse-Led Clinic' },
            { number: 'CQC', label: 'Registered' },
            { number: '5+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImage !== null && results[selectedImage].hasRealImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {results[selectedImage].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80">
                  {results[selectedImage].description}
                </p>
                <p className="text-xs text-primary-400 mt-2">
                  Technology: {results[selectedImage].technology}
                </p>
              </div>

              {/* Full Screen Slider */}
              <div className="rounded-xl overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={results[selectedImage].beforeImage}
                  afterImage={results[selectedImage].afterImage}
                  beforeAlt={`${results[selectedImage].title} - Before`}
                  afterAlt={`${results[selectedImage].title} - After`}
                  className="w-full aspect-square sm:aspect-[4/3]"
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : results.length - 1)
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage < results.length - 1 ? selectedImage + 1 : 0)
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 sm:top-0 sm:right-0 bg-white/90 backdrop-blur rounded-full p-3 sm:p-4 hover:bg-white transition w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl"
                aria-label="Close"
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
