import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

interface SkinResetAboutProps {
  onBookingClick?: () => void
}

const credentials = ['Midwife & Aesthetic Nurse', 'CQC Registered', 'Independent Prescriber']

export default function SkinResetAbout({ onBookingClick }: SkinResetAboutProps) {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-ivory">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait (native 683px wide, never displayed larger) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden bg-sand-100">
              <Image
                src="/images/practitioner.jpg"
                alt="Claire Emmerson, Midwife & Aesthetic Nurse, at Clarity Clinic Bedford"
                fill
                sizes="(min-width: 1024px) 400px, 360px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="eyebrow">Your Practitioner</p>
            <h2 className="h2-display mt-4">Claire&nbsp;Emmerson</h2>
            <p className="mt-2 text-harmony-600 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1">
              <span className="whitespace-nowrap">Midwife &amp; Aesthetic Nurse</span>
              <span className="whitespace-nowrap">CQC Registered</span>
              <span className="whitespace-nowrap">Independent Prescriber</span>
            </p>

            <blockquote className="mt-8 border-l border-primary-700/40 pl-6 text-left max-w-xl mx-auto lg:mx-0">
              <p className="font-display italic text-[20px] sm:text-[22px] leading-[1.45] text-ink">
                &ldquo;This is about more than skin. It&apos;s about how you feel when you look in the mirror. My goal isn&apos;t to change who you are - it&apos;s to help you feel like yourself&nbsp;again.&rdquo;
              </p>
            </blockquote>

            <p className="mt-8 text-[16px] sm:text-[17px] text-harmony-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Years of experience in women&apos;s health and aesthetic medicine. Claire specialises in skin rejuvenation for women in their 40s, 50s and 60s who want natural&#8209;looking&nbsp;results.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-harmony-700 whitespace-nowrap">
                  <Check className="w-4 h-4 text-primary-700" strokeWidth={1.75} />
                  {c}
                </li>
              ))}
            </ul>

            {onBookingClick && (
              <button onClick={onBookingClick} className="btn-primary mt-9">
                Book a Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
