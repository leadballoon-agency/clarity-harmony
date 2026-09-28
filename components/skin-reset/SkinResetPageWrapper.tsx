'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SkinResetHero from '@/components/skin-reset/SkinResetHero'
import TrustIconsTicker from '@/components/TrustIconsTicker'
import SkinResetAbout from '@/components/skin-reset/SkinResetAbout'
import SkinResetAssessment from '@/components/skin-reset/SkinResetAssessment'
import SkinResetTechnology from '@/components/skin-reset/SkinResetTechnology'
import SkinResetReviews from '@/components/skin-reset/SkinResetReviews'
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
        <SkinResetTechnology />
        <SkinResetAssessment onBookingClick={handleBookingClick} />
        <SkinResetAbout onBookingClick={handleBookingClick} />
        <SkinResetReviews />
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
        className="fixed bottom-5 right-5 z-40 btn-primary !min-h-0 !py-3 !px-5 shadow-lg shadow-ink/10 group"
      >
        Book Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
      </button>
    </>
  )
}
