interface SkinResetCTAProps {
  onBookingClick: () => void
}

export default function SkinResetCTA({ onBookingClick }: SkinResetCTAProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600">
      <div className="max-w-2xl mx-auto section-padding text-center text-white">
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          Looking in the mirror and loving what you see
          <span className="block mt-1 text-primary-100">isn't vanity. It's self-respect.</span>
        </h2>

        <div className="mt-6 sm:mt-8">
          <button
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-white text-primary-600 px-6 py-3 rounded-full font-bold text-base hover:shadow-xl transition-all duration-300"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
