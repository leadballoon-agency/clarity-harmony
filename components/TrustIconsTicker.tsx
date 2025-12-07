export default function TrustIconsTicker() {
  const trustItems = [
    { icon: '🏆', text: 'European Product Design Award Winner' },
    { icon: '⭐', text: 'ELLE Best Laser for Fine Lines 2025' },
    { icon: '🔬', text: '5 Laser Technologies' },
    { icon: '✨', text: 'IPL Applicators' },
    { icon: '👩‍⚕️', text: 'CQC Registered Clinic' },
    { icon: '💉', text: 'Nurse-Led Treatments' },
    { icon: '🌟', text: 'All Skin Types I-VI' },
    { icon: '⚡', text: 'Flexible Downtime' },
  ]

  return (
    <section className="py-6 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 overflow-hidden">
      <div className="relative">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-white"
            >
              <span className="text-2xl mr-3">{item.icon}</span>
              <span className="font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
