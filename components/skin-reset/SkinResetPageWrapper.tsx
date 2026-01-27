'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import SkinResetHero from '@/components/skin-reset/SkinResetHero'
import TrustIconsTicker from '@/components/TrustIconsTicker'
import EmpathySection from '@/components/skin-reset/EmpathySection'
import BenefitsGrid from '@/components/skin-reset/BenefitsGrid'
import SkinResetResults from '@/components/skin-reset/SkinResetResults'
import SkinResetAbout from '@/components/skin-reset/SkinResetAbout'
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
        <SkinResetHero onBookingClick={handleBookingClick} />
        <TrustIconsTicker />
        <EmpathySection />
        <BenefitsGrid />
        <SkinResetResults />
        <SkinResetAbout onBookingClick={handleBookingClick} />
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
        className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3 rounded-full font-medium shadow-xl transition-all duration-300 flex items-center"
      >
        <span>Book Now</span>
      </button>
    </>
  )
}
