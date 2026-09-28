import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface SkinResetCTAProps {
  onBookingClick: () => void
}

export default function SkinResetCTA({ onBookingClick }: SkinResetCTAProps) {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[440px]">
          <Image
            src="/images/shoot/DSC09759.jpg"
            alt="Claire explaining results to a client holding a mirror"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-4 sm:px-10 lg:px-16 py-14 sm:py-16">
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-display text-white text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15]">
              Looking in the mirror and loving what you&nbsp;see
              <em className="block italic text-white/75">isn&apos;t vanity. It&apos;s self&#8209;respect.</em>
            </h2>
            <button onClick={onBookingClick} className="btn-light mt-8">
              Book Your Consultation
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
