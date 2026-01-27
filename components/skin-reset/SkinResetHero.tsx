'use client'

import { useState, useRef } from 'react'

interface SkinResetHeroProps {
  onBookingClick: () => void
}

export default function SkinResetHero({ onBookingClick }: SkinResetHeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const squareVideoUrl = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914a1480ea4b3bcd0667c.mp4'
  const portraitVideoUrl = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914aa4d506d04ae5aa1d8.mp4'

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 via-white to-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Copy - First on mobile and desktop */}
            <div className="space-y-5 lg:space-y-8">
              {/* Eyebrow */}
              <p className="text-primary-600 font-medium text-sm">
                For women ready to put themselves first
              </p>

              {/* Headline */}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                You've Taken Care of Everyone Else.
                <span className="block gradient-text mt-1">Now It's Your Turn.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Erbium-YAG fractional laser for women in their 40s, 50s & 60s ready to reclaim their skin.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium text-base hover:shadow-xl transition-all duration-300"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>

            {/* Video - Below copy on mobile, right side on desktop */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-neutral-900 aspect-square max-w-sm mx-auto lg:max-w-md">
                {/* Video */}
                <video
                  ref={videoRef}
                  src={squareVideoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Play button overlay */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - Portrait version */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsVideoModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative max-w-md w-full animate-modal-slide-up">
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Portrait Video */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <video
                src={portraitVideoUrl}
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
