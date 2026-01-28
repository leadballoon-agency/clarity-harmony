interface SkinResetAssessmentProps {
  onBookingClick: () => void
}

export default function SkinResetAssessment({ onBookingClick }: SkinResetAssessmentProps) {
  return (
    <section id="assessment" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-3xl overflow-hidden shadow-premium-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Video & Visual */}
            <div className="relative min-h-[300px] lg:min-h-[500px] bg-neutral-900">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697a2df7a1d79e527db52eed.mp4" type="video/mp4" />
              </video>
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3">
                  Professional Diagnostic Imaging
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  See What&apos;s Beneath the Surface
                </h3>
                <p className="text-white/80 text-sm mt-2 max-w-sm">
                  Our skin analysis machine reveals hidden sun damage, pigmentation, and concerns invisible to the naked eye.
                </p>
              </div>
            </div>

            {/* Right - Content & Pricing */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-primary-600 font-medium tracking-wider uppercase text-xs">Your Journey Starts Here</span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-neutral-800">
                  Book Your Skin Analysis
                </h2>
                <p className="text-neutral-600 mt-3 leading-relaxed">
                  Every Skin Reset begins with a comprehensive consultation. Claire will analyse your skin, discuss your goals, and create a personalised treatment plan tailored to you.
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Diagnostic skin imaging analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Personalised treatment recommendation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">No obligation - just expert advice</span>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <div>
                    <p className="font-semibold text-neutral-800">Full Face, Eyes &amp; Neck</p>
                    <p className="text-sm text-neutral-500">Single session</p>
                  </div>
                  <p className="text-2xl font-bold text-neutral-800">£395</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl border-2 border-primary-200">
                  <div>
                    <p className="font-semibold text-neutral-800">Course of 3 Sessions</p>
                    <p className="text-sm text-primary-600 font-medium">Save £390</p>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">£795</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-5 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-bold text-lg">Skin Analysis Consultation</p>
                    <p className="text-white/80 text-sm">Fully redeemable against any treatment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">£25</span>
                    <button
                      onClick={onBookingClick}
                      className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
