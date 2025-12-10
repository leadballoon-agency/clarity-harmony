'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

interface TreatmentsSectionProps {
  onBookingClick?: () => void
}

interface TreatmentCategory {
  id: string
  name: string
  icon: string
  concerns: string[]
}

export default function TreatmentsSection({ onBookingClick }: TreatmentsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Comprehensive treatment card combining all services
  const comprehensiveTreatment = {
    icon: '✨',
    title: 'Alma Harmony Skin Treatments',
    subtitle: 'Comprehensive Skin Resurfacing & Rejuvenation',
    description: 'Award-winning multi-technology platform treating a wide range of skin concerns. From tightening and resurfacing to pigmentation and scarring - all performed by Claire Emmerson, RN.',
    categories: [
      {
        id: 'tightening',
        name: 'Skin Tightening & Rejuvenation',
        icon: '💪',
        concerns: ['Skin laxity', 'Collagen stimulation', 'Face & body contouring']
      },
      {
        id: 'resurfacing',
        name: 'Skin Resurfacing',
        icon: '✨',
        concerns: ['Fine lines & wrinkles', 'Texture improvement', 'Skin rejuvenation']
      },
      {
        id: 'pigmentation',
        name: 'Pigmentation & Sun Damage',
        icon: '🎯',
        concerns: ['Age spots', 'Sun damage', 'Melasma', 'Freckles']
      },
      {
        id: 'acne',
        name: 'Acne & Scarring',
        icon: '🌟',
        concerns: ['Active acne', 'Acne scars', 'Skin texture']
      },
      {
        id: 'vascular',
        name: 'Vascular Concerns',
        icon: '💫',
        concerns: ['Spider veins', 'Rosacea', 'Broken capillaries', 'Facial redness']
      }
    ] as TreatmentCategory[],
    pricing: siteConfig.pricing.pigmentation, // Using the standard pricing
    gradient: 'from-primary-500 to-primary-700'
  }

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

        {/* Single Comprehensive Treatment Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium-lg">
            <div className={`absolute inset-0 bg-gradient-to-br ${comprehensiveTreatment.gradient} opacity-5 rounded-2xl sm:rounded-3xl`}></div>

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <span className="text-2xl mr-2">{comprehensiveTreatment.icon}</span>
                  <span className="text-primary-700 font-medium text-sm">All Skin Types I-VI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{comprehensiveTreatment.title}</h3>
                <p className="text-primary-600 font-medium mb-4">{comprehensiveTreatment.subtitle}</p>
                <p className="text-neutral-600 max-w-2xl mx-auto">{comprehensiveTreatment.description}</p>
              </div>

              {/* Treatment Categories Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-700 mb-3 text-center">Select your primary concern:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {comprehensiveTreatment.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                      className={`relative text-left rounded-xl p-4 border-2 transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'border-primary-500 bg-primary-50 shadow-md'
                          : 'border-neutral-200 bg-white hover:border-primary-300 hover:bg-primary-50/50'
                      }`}
                    >
                      {/* Radio indicator */}
                      <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedCategory === category.id
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-neutral-300'
                      }`}>
                        {selectedCategory === category.id && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
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
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Treatment Info */}
              {selectedCategory && (
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-primary-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">
                      Selected: {comprehensiveTreatment.categories.find(c => c.id === selectedCategory)?.name}
                    </span>
                  </div>
                </div>
              )}

              {/* Pricing & CTA */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-white/80 text-sm mb-1">Treatment Pricing</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">£{comprehensiveTreatment.pricing?.session}</span>
                      <span className="text-white/80">per session</span>
                    </div>
                    <p className="text-white/90 mt-1">
                      or <span className="font-semibold">£{comprehensiveTreatment.pricing?.package} for {comprehensiveTreatment.pricing?.packageSessions}</span>
                      <span className="ml-2 bg-white/20 px-2 py-0.5 rounded text-xs">Save £{(comprehensiveTreatment.pricing?.session ?? 0) * (comprehensiveTreatment.pricing?.packageSessions ?? 0) - (comprehensiveTreatment.pricing?.package ?? 0)}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-2">
                    <button
                      onClick={onBookingClick}
                      className={`inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 min-h-[48px] ${
                        selectedCategory
                          ? 'bg-white text-primary-600 hover:shadow-xl hover:scale-105'
                          : 'bg-white/90 text-primary-600 hover:bg-white'
                      }`}
                    >
                      {selectedCategory ? 'Enquire Now' : 'Book Consultation'} - £25
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <span className="text-white/80 text-xs">Fully redeemable against your treatment</span>
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
            Book a consultation →
          </button>
        </div>
      </div>
    </section>
  )
}
