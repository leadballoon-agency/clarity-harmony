'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Treatment } from '@/lib/treatments'
import { siteConfig } from '@/lib/config'
import BookingModal from './BookingModal'
import BeforeAfterSlider from './BeforeAfterSlider'

interface TreatmentPageTemplateProps {
  treatment: Treatment
}

export default function TreatmentPageTemplate({ treatment }: TreatmentPageTemplateProps) {
  const [showBooking, setShowBooking] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section - Full Width with Gradient Overlay */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32 sm:pt-36 w-full">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <Link href="/#treatments" className="hover:text-white transition-colors">Treatments</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white font-medium">{treatment.shortName}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Left Content */}
            <div>
              {/* Technology Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <span className="text-2xl mr-2">{treatment.icon}</span>
                <span className="text-white font-medium text-sm">{treatment.technology}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {treatment.name}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
                {treatment.heroDescription}
              </p>

              {/* Quick Stats - Horizontal on Desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-xs text-white/60 mb-1">Sessions</p>
                  <p className="font-semibold text-white text-sm">{treatment.treatmentInfo.sessions.split(' ')[0]}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-xs text-white/60 mb-1">Downtime</p>
                  <p className="font-semibold text-white text-sm">{treatment.treatmentInfo.downtime.split(' - ')[0]}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-xs text-white/60 mb-1">Skin Types</p>
                  <p className="font-semibold text-white text-sm">All (I-VI)</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-xs text-white/60 mb-1">Duration</p>
                  <p className="font-semibold text-white text-sm">{treatment.treatmentInfo.duration}</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowBooking(true)}
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Book Skin Analysis - £{siteConfig.consultationFee}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-sm text-white/70 mt-3">FREE when you proceed with treatment</p>
            </div>

            {/* Right - Before/After Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <BeforeAfterSlider
                    beforeImage={treatment.beforeAfter.before}
                    afterImage={treatment.beforeAfter.after}
                    beforeAlt={`${treatment.shortName} - Before`}
                    afterAlt={`${treatment.shortName} - After`}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center text-white/60 text-sm mt-3">{treatment.beforeAfter.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Before/After - Full Width */}
      <section className="lg:hidden bg-neutral-900 py-8">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Real Results</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square">
            <BeforeAfterSlider
              beforeImage={treatment.beforeAfter.before}
              afterImage={treatment.beforeAfter.after}
              beforeAlt={`${treatment.shortName} - Before`}
              afterAlt={`${treatment.shortName} - After`}
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-neutral-400 text-sm mt-3">{treatment.beforeAfter.caption}</p>
        </div>
      </section>

      {/* What It Treats */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Concerns Addressed</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">What It Treats</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.concerns.map((concern, index) => (
                  <div key={index} className="flex items-center bg-gradient-to-r from-primary-50 to-white border border-primary-100 rounded-xl px-4 py-3 group hover:border-primary-300 transition-colors">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 font-medium">{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-3xl p-8 border border-primary-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold">How It Works</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed text-base">
                {treatment.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Visual Cards */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Why Choose This Treatment</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Key Benefits</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.benefits.map((benefit, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-200 overflow-hidden">
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary-50 rounded-full flex items-end justify-start pb-4 pl-4">
                  <span className="text-4xl font-bold text-primary-200">{index + 1}</span>
                </div>

                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 font-medium leading-snug">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details - Info Cards */}
      <section className="py-16 sm:py-20 bg-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Treatment Details</h2>
            <p className="text-white/80 mt-2">Everything you need to know</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm mb-1">Sessions Required</p>
              <p className="text-white font-semibold text-lg">{treatment.treatmentInfo.sessions}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm mb-1">Downtime</p>
              <p className="text-white font-semibold text-lg">{treatment.treatmentInfo.downtime}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm mb-1">Suitable For</p>
              <p className="text-white font-semibold text-lg">{treatment.treatmentInfo.skinTypes}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm mb-1">Duration</p>
              <p className="text-white font-semibold text-lg">{treatment.treatmentInfo.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {treatment.faq.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedFaq === index
                    ? 'bg-primary-50 border-2 border-primary-200 shadow-lg'
                    : 'bg-neutral-50 border-2 border-transparent hover:border-primary-100'
                }`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold pr-4 ${expandedFaq === index ? 'text-primary-700' : 'text-neutral-800'}`}>
                    {item.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    expandedFaq === index ? 'bg-primary-500' : 'bg-primary-100'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-all duration-300 ${
                        expandedFaq === index ? 'rotate-180 text-white' : 'text-primary-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedFaq === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 font-medium text-sm">Start Your Transformation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Discover If {treatment.shortName} Is Right for You?
          </h2>
          <p className="text-neutral-300 mb-10 max-w-2xl mx-auto text-lg">
            Book your professional skin analysis with Claire Emmerson, RN to receive a personalised treatment plan tailored to your unique skin concerns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 group"
            >
              Book Skin Analysis - £{siteConfig.consultationFee}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link
              href="/#treatments"
              className="inline-flex items-center text-white/80 hover:text-white px-6 py-3 font-medium transition-colors"
            >
              View All Treatments
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <p className="text-neutral-500 text-sm mt-6">FREE when you proceed with treatment</p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-neutral-700">
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">CQC Registered</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Nurse-Led Clinic</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </>
  )
}
