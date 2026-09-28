import Image from 'next/image'
import { Check } from 'lucide-react'
import { tidy } from '@/lib/typography'

interface SkinResetAssessmentProps {
  onBookingClick: () => void
}

const included = [
  'Diagnostic skin imaging analysis',
  'Personalised treatment recommendation',
  'No obligation - just expert advice',
]

export default function SkinResetAssessment({ onBookingClick }: SkinResetAssessmentProps) {
  return (
    <section id="assessment" className="py-20 sm:py-24 lg:py-28 bg-white border-t border-sand-200">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Visuals */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-100">
              <Image
                src="/images/shoot/DSC09764.jpg"
                alt="Claire talking a client through her skin analysis on an iPad"
                fill
                sizes="(min-width: 1152px) 540px, (min-width: 1024px) 47vw, 100vw"
                className="object-cover object-[35%_50%]"
              />
            </div>

            {/* Diagnostic imaging video */}
            <div className="flex items-center gap-4 sm:gap-5 bg-ivory border border-sand-200 rounded-xl p-3 sm:p-4">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-ink shrink-0">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/697a2df7a1d79e527db52eed.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-harmony-500 text-balance">
                  Professional Diagnostic&nbsp;Imaging
                </p>
                <p className="mt-1.5 font-display text-lg leading-snug text-ink">
                  See what&apos;s beneath the surface
                </p>
                <p className="mt-1 text-sm text-harmony-600 leading-relaxed">
                  Our skin analysis machine reveals hidden sun damage, pigmentation, and concerns invisible to the naked&nbsp;eye.
                </p>
              </div>
            </div>
          </div>

          {/* Content & Pricing */}
          <div>
            <p className="eyebrow">Your Journey Starts Here</p>
            <h2 className="h2-display mt-4">
              Book your <em className="italic">skin analysis</em>
            </h2>
            <p className="text-[16px] sm:text-[17px] text-harmony-600 mt-5 leading-relaxed">
              Every Skin Reset begins with a comprehensive consultation. Claire will analyse your skin, discuss your goals, and create a personalised treatment plan tailored to&nbsp;you.
            </p>

            <ul className="mt-7 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-harmony-700">
                  <Check className="w-4 h-4 text-primary-700 shrink-0" strokeWidth={1.75} />
                  <span>{tidy(item)}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="mt-8 border border-sand-200 rounded-xl divide-y divide-sand-200">
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium text-ink">Full Face, Eyes &amp;&nbsp;Neck</p>
                  <p className="text-sm text-harmony-500">Single session</p>
                </div>
                <p className="font-display text-[26px] text-ink">£450</p>
              </div>
              <div className="flex items-center justify-between px-5 py-4 bg-primary-50/40">
                <div>
                  <p className="font-medium text-ink">Course of 3 Sessions</p>
                  <p className="text-sm text-primary-700">Save&nbsp;£355</p>
                </div>
                <p className="font-display text-[26px] text-primary-700">£995</p>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="mt-6 bg-ink rounded-xl p-5 sm:p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-medium">Skin Analysis Consultation</p>
                  <p className="text-white/70 text-sm">Fully redeemable against any&nbsp;treatment</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-display text-[30px] leading-none">£25</span>
                  <button onClick={onBookingClick} className="btn-light whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
