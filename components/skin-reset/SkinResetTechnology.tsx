'use client'

export default function SkinResetTechnology() {
  return (
    <section id="technology" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">The Technology</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            CO2 Fractional Laser
            <span className="block gradient-text">The Gold Standard</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Trusted by dermatologists worldwide for over 30 years, CO2 fractional laser remains the most effective technology for comprehensive skin resurfacing.
          </p>
        </div>

        {/* Main Technology Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - How it Works */}
            <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded-full mb-4">
                <span className="text-sm font-medium">How It Works</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Precision Skin Renewal
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                The CO2 laser creates thousands of microscopic treatment zones in your skin - tiny columns of precisely controlled energy that trigger your body&apos;s natural healing response.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Controlled Micro-Injuries</p>
                    <p className="text-white/80 text-sm">Pixel-sized perforations remove damaged skin while preserving surrounding tissue</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Collagen Stimulation</p>
                    <p className="text-white/80 text-sm">Your body responds by producing fresh collagen and new, healthy skin cells</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Visible Transformation</p>
                    <p className="text-white/80 text-sm">Skin emerges smoother, firmer, and more evenly toned over the following weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1.5 bg-primary-100 rounded-full mb-4">
                <span className="text-sm font-medium text-primary-700">Why CO2 Fractional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-800">
                Proven Results, Faster Recovery
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">More Effective Than Other Lasers</p>
                    <p className="text-neutral-600 text-sm">CO2 delivers deeper penetration and more significant results than non-ablative alternatives</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Fractional = Faster Healing</p>
                    <p className="text-neutral-600 text-sm">By treating a fraction of the skin, recovery is dramatically faster than full ablation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Ablative Option Available</p>
                    <p className="text-neutral-600 text-sm">For more intensive concerns, Claire can offer full ablative treatment - something few clinics provide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What It Treats */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6">What CO2 Fractional Laser Treats</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: '☀️', label: 'Sun Damage' },
              { icon: '🔵', label: 'Age Spots' },
              { icon: '〰️', label: 'Fine Lines' },
              { icon: '✨', label: 'Rough Texture' },
              { icon: '🎨', label: 'Uneven Tone' },
              { icon: '⭕', label: 'Large Pores' },
              { icon: '💫', label: 'Dull Skin' },
              { icon: '🔬', label: 'Scarring' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-primary-50 rounded-lg p-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-neutral-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl p-5 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold gradient-text">30+</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">Years of Clinical Use</p>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold gradient-text">5-7</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">Days Recovery</p>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold gradient-text">1-3</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">Sessions Typical</p>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold gradient-text">Years</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">Of Lasting Results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
