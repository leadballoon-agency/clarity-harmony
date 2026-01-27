interface SkinResetAboutProps {
  onBookingClick: () => void
}

export default function SkinResetAbout({ onBookingClick }: SkinResetAboutProps) {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg mx-auto max-w-xs lg:max-w-none">
              <div className="aspect-[4/5]">
                <img
                  src="/images/practitioner.jpg"
                  alt="Claire Emmerson, RN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            <div>
              <p className="text-primary-600 font-medium text-sm mb-1">Your Practitioner</p>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                Claire Emmerson, RN
              </h2>
              <p className="text-neutral-600 mt-1">
                CQC Registered | Independent Prescriber
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-4 sm:p-5">
              <p className="text-base sm:text-lg text-neutral-700 italic">
                "This is about more than skin. It's about how you feel when you look in the mirror."
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600">
              Years of experience in women's health and aesthetic medicine. My goal isn't to change who you are - it's to help you feel like yourself again.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
