'use client'

import { useState } from 'react'
import Link from 'next/link'
import { treatments } from '@/lib/treatments'

interface TreatmentsSectionProps {
  onBookingClick?: () => void
}

export default function TreatmentsSection({ onBookingClick }: TreatmentsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Map treatments data to category format for the UI
  const treatmentCategories = treatments.map(t => ({
    id: t.slug,
    name: t.shortName,
    icon: t.icon,
    concerns: t.concerns.slice(0, 3), // Show first 3 concerns
    slug: t.slug
  }))

  return (
    <section id="treatments" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Treatment Menu</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Comprehensive Skin
            <span className="gradient-text"> Treatments</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Alma Harmony treats a wide spectrum of skin concerns with one sophisticated platform. All treatments performed by Claire Emmerson, RN.
          </p>
        </div>

        {/* Treatment Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-5 rounded-2xl sm:rounded-3xl"></div>

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <span className="text-2xl mr-2">✨</span>
                  <span className="text-primary-700 font-medium text-sm">All Skin Types I-VI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Alma Harmony Skin Treatments</h3>
                <p className="text-primary-600 font-medium mb-4">Comprehensive Skin Resurfacing & Rejuvenation</p>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Award-winning multi-technology platform treating a wide range of skin concerns. From tightening and resurfacing to pigmentation and scarring - all performed by Claire Emmerson, RN.
                </p>
              </div>

              {/* Treatment Categories Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-700 mb-3 text-center">Explore our treatments:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {treatmentCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/treatments/${category.slug}`}
                      className={`relative text-left rounded-xl p-4 border-2 transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'border-primary-500 bg-primary-50 shadow-md'
                          : 'border-neutral-200 bg-white hover:border-primary-300 hover:bg-primary-50/50'
                      }`}
                      onMouseEnter={() => setSelectedCategory(category.id)}
                      onMouseLeave={() => setSelectedCategory(null)}
                    >
                      {/* Arrow indicator */}
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-2 mb-2 pr-6">
                        <span className="text-xl">{category.icon}</span>
                        <h4 className="font-semibold text-neutral-800 text-sm">{category.name}</h4>
                      </div>
                      <ul className="space-y-1">
                        {category.concerns.map((concern, cidx) => (
                          <li key={cidx} className="flex items-center text-xs text-neutral-600">
                            <svg className="w-3 h-3 text-primary-500 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {concern}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-primary-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-bold mb-2">Start With a Skin Analysis</p>
                    <p className="text-white/90 text-sm sm:text-base max-w-md">
                      Your treatment plan is tailored to your specific concerns. Book a professional skin analysis to discover the right approach for you.
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-2">
                    <button
                      onClick={onBookingClick}
                      className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 min-h-[48px] bg-white text-primary-600 hover:shadow-xl hover:scale-105"
                    >
                      Book Skin Analysis - £25
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <span className="text-white/80 text-xs">FREE when you proceed with treatment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-xs text-neutral-600 mb-3">Not sure which treatment is right for you?</p>
          <button
            onClick={onBookingClick}
            className="text-primary-600 font-medium text-sm"
          >
            Book a skin analysis →
          </button>
        </div>
      </div>
    </section>
  )
}
