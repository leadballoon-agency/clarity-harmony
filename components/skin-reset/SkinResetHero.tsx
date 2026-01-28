'use client'

import { useState } from 'react'

const SKIN_RESET_VIDEO_SQUARE = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914a1480ea4b3bcd0667c.mp4'
const SKIN_RESET_VIDEO_PORTRAIT = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914aa4d506d04ae5aa1d8.mp4'

export default function SkinResetHero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ba5ec' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-slide-up text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">For Women Ready To Put Themselves First</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]">
                You&apos;ve Taken Care of Everyone Else.
                <span className="block gradient-text mt-2">Now It&apos;s Your Turn.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              CO2 fractional laser skin resurfacing for women in their 40s, 50s & 60s ready to reclaim their skin. Nurse-led by Claire Emmerson, RN | Bedford
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 sm:pt-6">
              <div className="flex flex-col items-center lg:items-start">
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-full font-medium text-base hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
                >
                  Find Your Perfect Plan
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <span className="text-xs text-neutral-500 mt-2.5 sm:mt-2">3 quick questions to your personalised plan</span>
              </div>
              <button
                onClick={() => setActiveVideo(SKIN_RESET_VIDEO_PORTRAIT)}
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-7 py-3.5 rounded-full font-medium text-base hover:bg-primary-50 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 sm:pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">CQC</p>
                <p className="text-xs text-neutral-600">Registered</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">RN</p>
                <p className="text-xs text-neutral-600">Nurse-Led</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">CO2</p>
                <p className="text-xs text-neutral-600">Fractional Laser</p>
              </div>
            </div>
          </div>

          {/* Mobile Video Section */}
          <div className="relative mt-10 sm:mt-12 lg:hidden">
            <div className="relative mx-auto max-w-[320px]">
              <button
                onClick={() => setActiveVideo(SKIN_RESET_VIDEO_PORTRAIT)}
                className="relative w-full group"
                aria-label="Play video"
              >
                <div className="aspect-square rounded-2xl shadow-xl overflow-hidden bg-neutral-900">
                  <video
                    src={SKIN_RESET_VIDEO_SQUARE}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Video Section */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative h-[600px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl"></div>

              <div className="relative flex items-center justify-center h-full w-full">
                <button
                  onClick={() => setActiveVideo(SKIN_RESET_VIDEO_PORTRAIT)}
                  className="relative w-full max-w-md group cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden bg-neutral-900 animate-float">
                    <video
                      src={SKIN_RESET_VIDEO_SQUARE}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              {/* Info Card */}
              <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Claire Emmerson, RN - Skin Reset Specialist</h3>
                    <div className="flex justify-center items-center space-x-2 text-primary-600">
                      <span className="font-medium">Independent Prescriber</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">CQC Registered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float opacity-20 blur-2xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 animate-bounce">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-xs text-neutral-500 mb-2">Find your plan</span>
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-[9/16] max-h-[80vh] bg-black rounded-xl overflow-hidden">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
