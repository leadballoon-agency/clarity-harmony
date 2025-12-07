interface CTASectionProps {
  onBookingClick?: () => void
}

export default function CTASection({ onBookingClick }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto section-padding text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
          <span className="text-white font-medium text-sm">Limited Consultation Slots Available</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Transform
          <span className="block">Your Skin?</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Book your consultation with Claire Emmerson, RN to discover how Alma Harmony&apos;s award-winning technology can help you achieve your skin goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookingClick}
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px]"
          >
            Book Consultation - £25
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <a
            href="tel:+447414154007"
            className="inline-flex items-center text-white border-2 border-white/50 px-6 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call: 07414 154007
          </a>
        </div>

        <p className="text-white/70 text-sm mt-6">
          Consultation fee fully redeemable against your treatment
        </p>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👩‍⚕️</span>
              <span className="font-medium">CQC Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-medium">Award-Winning</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
