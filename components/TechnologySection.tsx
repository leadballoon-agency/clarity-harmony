'use client'

export default function TechnologySection() {
  const technologies = [
    {
      icon: '🔷',
      title: 'Q-Switch Laser',
      description: 'Precisely targets dermal layers for collagen stimulation and pigmentation treatment. Delivers effective rejuvenation with minimal downtime using unique pixel technology with five adjustable depths.',
      features: ['No-downtime rejuvenation', 'Pigmentation treatment', 'Tattoo removal']
    },
    {
      icon: '✨',
      title: 'Fractional Ablative',
      description: 'Refines skin resurfacing by creating precise pixel-sized perforations, promoting rejuvenation while preserving surrounding tissue for faster recovery.',
      features: ['Signs of aging', 'Photodamage', 'Scar treatment']
    },
    {
      icon: '💡',
      title: 'IPL Technology',
      description: 'Broad spectrum light addresses diverse skin conditions like sun damage and vascular lesions. Strong, targeted absorbency offers balanced aesthetic improvements.',
      features: ['Sun damage', 'Vascular lesions', 'Multiple skin types']
    },
    {
      icon: '🌊',
      title: 'Non-Ablative Laser',
      description: 'Rejuvenates skin by stimulating collagen production deep within the dermis. Effectively addresses signs of aging, acne, and scars while remaining non-invasive.',
      features: ['Anti-aging', 'Acne treatment', 'Scar reduction']
    },
    {
      icon: '💚',
      title: 'Green Diode Laser',
      description: 'Utilizes an optimal wavelength that targets superficial blood vessels, enhancing both efficacy and safety in precise vascular treatments.',
      features: ['Vascular treatments', 'High precision', 'Safe & effective']
    }
  ]

  return (
    <section id="technology" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Integrated Technologies</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Five Powerful Technologies
            <span className="block gradient-text">One Intelligent Platform</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-3xl mx-auto px-4 leading-relaxed">
            Alma Harmony seamlessly integrates top technologies including Q-Switch laser, fractional ablative laser, IPL, non-ablative laser, and green diode laser. This versatile platform adapts to nearly any indication or skin type.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">{tech.title}</h3>
              <p className="text-neutral-600 text-sm sm:text-base mb-4 leading-relaxed">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Award Card */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 sm:p-8 text-white">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Award-Winning Design</h3>
            <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed">
              With its sleek and intelligent design, Alma Harmony proudly claims the prestigious European Product Design Award.
            </p>
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-white/80 text-sm">
                <strong className="text-white">45% more laser energy*</strong> compared to previous generation systems
              </p>
              <p className="text-xs text-white/60 mt-2">*Compared to Harmony XL PRO, using specific parameters</p>
            </div>
          </div>
        </div>

        {/* Bio-Boost Feature */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-premium">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                <span className="mr-2">⭐</span>
                ELLE Tweakments Award Winner 2025
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Harmony Bio-Boost Treatment
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Recently named &apos;Best Laser for Fine Lines&apos; at the ELLE Tweakments Awards 2025, Harmony Bio-Boost stands as a globally recognized innovation in next-generation skin rejuvenation.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This branded treatment enhances your clinic&apos;s visibility and service offerings, enriching your treatment repertoire while strategically promoting capabilities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-6xl mb-4">✨</p>
                  <p className="font-display text-xl font-bold text-primary-700">Bio-Boost</p>
                  <p className="text-primary-600 text-sm">Next-Gen Skin Rejuvenation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
