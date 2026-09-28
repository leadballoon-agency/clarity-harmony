'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDown, Play, X } from 'lucide-react'

const SKIN_RESET_VIDEO_SQUARE = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914a1480ea4b3bcd0667c.mp4'
const SKIN_RESET_VIDEO_PORTRAIT = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697914aa4d506d04ae5aa1d8.mp4'

const credentials = [
  { value: 'CQC', label: 'Registered' },
  { value: 'Midwife', label: '& nurse-led' },
  { value: 'SupErb', label: 'Laser' },
  { value: 'Alma', label: 'Harmony' },
]

export default function SkinResetHero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="relative bg-ivory overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 sm:pb-20 lg:pb-24">
        {/* Slim masthead (the fixed nav only appears on scroll) */}
        <div className="flex items-center justify-between pb-8 sm:pb-12 lg:pb-16">
          <img
            src="/clarity-clinic-logo.png"
            alt="Clarity Clinic - Skin, Laser & Intimate Health"
            width={1000}
            height={160}
            className="h-7 sm:h-8 w-auto"
          />
          <a href="tel:+447414154007" className="hidden sm:inline text-sm text-harmony-600 hover:text-ink transition-colors">
            07414 154007
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="eyebrow">For women ready to put themselves first</p>

            <h1 className="mt-5 font-display font-normal text-ink text-[36px] leading-[1.12] sm:text-[44px] lg:text-[52px] lg:leading-[1.1] tracking-[-0.015em]">
              <span className="block text-balance">You&apos;ve taken care of everyone&nbsp;else.</span>
              <em className="block italic text-primary-700">Now it&apos;s your&nbsp;turn.</em>
            </h1>

            <p className="mt-6 text-[16px] sm:text-[17px] text-harmony-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Alma&nbsp;Harmony SupErb fractional laser resurfacing for women in their 40s, 50s &amp;&nbsp;60s. Midwife &amp;&nbsp;nurse&#8209;led. CQC&nbsp;registered. Bedford.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#assessment" className="btn-primary w-full sm:w-auto">
                Book Skin Analysis
                <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <button
                onClick={() => setActiveVideo(SKIN_RESET_VIDEO_PORTRAIT)}
                className="btn-outline w-full sm:w-auto"
              >
                <Play className="w-4 h-4" strokeWidth={1.5} />
                Watch Video
              </button>
            </div>
            <p className="mt-3 text-[13px] text-harmony-500">£25&nbsp;consultation, redeemable against&nbsp;treatment</p>

            {/* Credentials */}
            <dl className="mt-10 pt-6 border-t border-sand-200 grid grid-cols-4 gap-2 max-w-md mx-auto lg:mx-0">
              {credentials.map((c) => (
                <div key={c.value} className="text-center lg:text-left">
                  <dt className="font-display text-[17px] sm:text-xl text-ink leading-tight">{c.value}</dt>
                  <dd className="mt-1 text-[11px] sm:text-xs text-harmony-500 tracking-wide">{c.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photography + video */}
          <div className="lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/3] lg:aspect-[5/6] rounded-2xl overflow-hidden bg-sand-100">
                <Image
                  src="/images/shoot/DSC09738.jpg"
                  alt="A smiling client admiring her skin in a hand mirror at Clarity Clinic Bedford"
                  fill
                  priority
                  fetchPriority="high"
                  /* 5:6 box over a 3:2 photo: object-cover renders the image ~1.8x the box width on desktop */
                  sizes="(min-width: 1152px) 980px, (min-width: 1024px) 85vw, 100vw"
                  className="object-cover object-[30%_50%]"
                />

                {/* Video tile */}
                <button
                  onClick={() => setActiveVideo(SKIN_RESET_VIDEO_PORTRAIT)}
                  className="group absolute bottom-3 left-3 sm:bottom-5 sm:left-5 flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl p-2 pr-4 border border-white/60 text-left"
                  aria-label="Play video"
                >
                  <span className="relative block w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-ink shrink-0">
                    <video
                      src={SKIN_RESET_VIDEO_SQUARE}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/15">
                      <span className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Play className="w-3.5 h-3.5 text-ink ml-0.5" strokeWidth={1.5} fill="currentColor" />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">Watch Video</span>
                    <span className="block text-xs text-harmony-500">Claire explains the Skin Reset</span>
                  </span>
                </button>
              </div>

              <figcaption className="mt-4 text-center lg:text-left text-[13px] text-harmony-500">
                Claire&nbsp;Emmerson, Midwife &amp;&nbsp;Aesthetic&nbsp;Nurse · Independent&nbsp;Prescriber
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute bottom-5 left-0 right-0 justify-center">
        <a href="#assessment" className="flex flex-col items-center gap-1 text-xs text-harmony-500 hover:text-ink transition-colors">
          See pricing
          <ArrowDown className="w-4 h-4" strokeWidth={1.25} />
        </a>
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
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-7 h-7" strokeWidth={1.5} />
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
