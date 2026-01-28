'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import SkinResetHero from '@/components/skin-reset/SkinResetHero'
import TrustIconsTicker from '@/components/TrustIconsTicker'
import SkinResetAbout from '@/components/skin-reset/SkinResetAbout'
import SkinResetAssessment from '@/components/skin-reset/SkinResetAssessment'
import SkinResetTechnology from '@/components/skin-reset/SkinResetTechnology'
import ResultsGallery from '@/components/ResultsGallery'
import SkinResetFAQ from '@/components/skin-reset/SkinResetFAQ'
import SkinResetCTA from '@/components/skin-reset/SkinResetCTA'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import ScrollToTop from '@/components/ScrollToTop'

export default function SkinResetPageWrapper() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookingClick = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <ScrollToTop />
      <Navigation onBookingClick={handleBookingClick} />
      <main className="overflow-hidden">
        <SkinResetHero />
        <TrustIconsTicker />
        <SkinResetAssessment onBookingClick={handleBookingClick} />
        <SkinResetTechnology />
        <SkinResetAbout onBookingClick={handleBookingClick} />
        <ResultsGallery onBookingClick={handleBookingClick} />
        <SkinResetFAQ onBookingClick={handleBookingClick} />
        <SkinResetCTA onBookingClick={handleBookingClick} />
      </main>
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Floating Book Now Button */}
      <button
        onClick={handleBookingClick}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center group"
      >
        <span className="mr-2">Book Now</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </>
  )
}
