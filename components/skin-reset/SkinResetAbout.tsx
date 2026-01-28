interface SkinResetAboutProps {
  onBookingClick?: () => void
}

export default function SkinResetAbout({ onBookingClick }: SkinResetAboutProps) {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-[4/5]">
                <img
                  src="/images/practitioner.jpg"
                  alt="Claire Emmerson, RN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Your Practitioner</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                Claire Emmerson, RN
              </h2>
              <p className="text-neutral-600 mt-2 text-lg">
                CQC Registered | Independent Prescriber
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 shadow-lg">
              <p className="text-lg sm:text-xl text-neutral-700 italic leading-relaxed">
                &quot;This is about more than skin. It&apos;s about how you feel when you look in the mirror. My goal isn&apos;t to change who you are - it&apos;s to help you feel like yourself again.&quot;
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Years of experience in women&apos;s health and aesthetic medicine. Claire specialises in skin rejuvenation for women in their 40s, 50s and 60s who want natural-looking results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Registered Nurse</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">CQC Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Independent Prescriber</span>
              </div>
            </div>

            {onBookingClick && (
              <button
                onClick={onBookingClick}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
