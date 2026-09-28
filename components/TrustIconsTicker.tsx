// Calm, static accreditation row (formerly a scrolling ticker).
const logos = [
  { src: '/images/Trust icons/cqc-logo.png', alt: 'CQC Registered', w: 714, h: 375 },
  { src: '/images/Trust icons/BAMAN_Logobaman-logo-purple-background-social.png', alt: 'BAMAN Member', w: 703, h: 315 },
  { src: '/images/Trust icons/Derma-Medical-Retina-Logo.png', alt: 'Derma Medical', w: 645, h: 180 },
  { src: '/images/Trust icons/medical-aesthetics-prescriber.jpeg', alt: 'Medical Aesthetics Prescriber', w: 1024, h: 1021 },
  { src: '/images/Trust icons/Zo-Skin-Health-Logo-1024x369-1024x369-png.png', alt: 'ZO Skin Health', w: 1024, h: 369 },
]

export default function TrustIconsTicker() {
  return (
    <section className="bg-white border-y border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <p className="text-center text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-harmony-500">
          Trusted &amp; accredited
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <li key={logo.alt}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                loading="lazy"
                className="h-9 sm:h-11 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
